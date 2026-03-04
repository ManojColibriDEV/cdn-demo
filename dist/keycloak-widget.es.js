
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.pointer-events-none\\!{pointer-events:none!important}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.top-\\[69\\%\\]\\!{top:69%!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.right-\\[100\\%\\]\\!{right:100%!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-\\[50\\%\\]\\!{left:50%!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\!{margin-right:calc(var(--spacing)*1)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10\\!{height:calc(var(--spacing)*10)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20\\!{width:calc(var(--spacing)*20)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1\\/2\\!{--tw-translate-x: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.scale-x-\\[-1\\]\\!{--tw-scale-x:-1!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-bg-hover\\)\\]\\!{color:var(--button-primary-bg-hover)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400\\!{color:var(--color-blue-400)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-\\[0_0_0\\.5px_rgba\\(255\\,255\\,255\\,0\\.9\\)\\]\\!{--tw-drop-shadow-size:drop-shadow(0 0 .5px var(--tw-drop-shadow-color,#ffffffe6))!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media not all and (min-width:500px){.max-\\[500px\\]\\:flex-col\\!{flex-direction:column!important}.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:self-start\\!{align-self:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function zp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Vo = { exports: {} }, wi = {};
var _0;
function Lp() {
  if (_0) return wi;
  _0 = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(o, c, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      d = {};
      for (var p in c)
        p !== "key" && (d[p] = c[p]);
    } else d = c;
    return c = d.ref, {
      $$typeof: l,
      type: o,
      key: m,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return wi.Fragment = r, wi.jsx = s, wi.jsxs = s, wi;
}
var O0;
function Hp() {
  return O0 || (O0 = 1, Vo.exports = Lp()), Vo.exports;
}
var g = Hp(), Ko = { exports: {} }, le = {}, D0;
function Bp() {
  if (D0) return le;
  D0 = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function A(S) {
    return S === null || typeof S != "object" ? null : (S = k && S[k] || S["@@iterator"], typeof S == "function" ? S : null);
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
  }, D = Object.assign, G = {};
  function K(S, L, V) {
    this.props = S, this.context = L, this.refs = G, this.updater = V || M;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(S, L) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, L, "setState");
  }, K.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = K.prototype;
  function F(S, L, V) {
    this.props = S, this.context = L, this.refs = G, this.updater = V || M;
  }
  var W = F.prototype = new Q();
  W.constructor = F, D(W, K.prototype), W.isPureReactComponent = !0;
  var he = Array.isArray;
  function ie() {
  }
  var P = { H: null, A: null, T: null, S: null }, te = Object.prototype.hasOwnProperty;
  function we(S, L, V) {
    var Z = V.ref;
    return {
      $$typeof: r,
      type: S,
      key: L,
      ref: Z !== void 0 ? Z : null,
      props: V
    };
  }
  function Le(S, L) {
    return we(S.type, L, S.props);
  }
  function Re(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Me(S) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(V) {
      return L[V];
    });
  }
  var Xe = /\/+/g;
  function Ie(S, L) {
    return typeof S == "object" && S !== null && S.key != null ? Me("" + S.key) : L.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ie, ie) : (S.status = "pending", S.then(
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
  function q(S, L, V, Z, ue) {
    var ne = typeof S;
    (ne === "undefined" || ne === "boolean") && (S = null);
    var ge = !1;
    if (S === null) ge = !0;
    else
      switch (ne) {
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
              return ge = S._init, q(
                ge(S._payload),
                L,
                V,
                Z,
                ue
              );
          }
      }
    if (ge)
      return ue = ue(S), ge = Z === "" ? "." + Ie(S, 0) : Z, he(ue) ? (V = "", ge != null && (V = ge.replace(Xe, "$&/") + "/"), q(ue, L, V, "", function(kt) {
        return kt;
      })) : ue != null && (Re(ue) && (ue = Le(
        ue,
        V + (ue.key == null || S && S.key === ue.key ? "" : ("" + ue.key).replace(
          Xe,
          "$&/"
        ) + "/") + ge
      )), L.push(ue)), 1;
    ge = 0;
    var re = Z === "" ? "." : Z + ":";
    if (he(S))
      for (var Be = 0; Be < S.length; Be++)
        Z = S[Be], ne = re + Ie(Z, Be), ge += q(
          Z,
          L,
          V,
          ne,
          ue
        );
    else if (Be = A(S), typeof Be == "function")
      for (S = Be.call(S), Be = 0; !(Z = S.next()).done; )
        Z = Z.value, ne = re + Ie(Z, Be++), ge += q(
          Z,
          L,
          V,
          ne,
          ue
        );
    else if (ne === "object") {
      if (typeof S.then == "function")
        return q(
          X(S),
          L,
          V,
          Z,
          ue
        );
      throw L = String(S), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ge;
  }
  function Y(S, L, V) {
    if (S == null) return S;
    var Z = [], ue = 0;
    return q(S, Z, "", "", function(ne) {
      return L.call(V, ne, ue++);
    }), Z;
  }
  function de(S) {
    if (S._status === -1) {
      var L = S._result;
      L = L(), L.then(
        function(V) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = V);
        },
        function(V) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = V);
        }
      ), S._status === -1 && (S._status = 0, S._result = L);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var xe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof l == "object" && typeof l.emit == "function") {
      l.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ne = {
    map: Y,
    forEach: function(S, L, V) {
      Y(
        S,
        function() {
          L.apply(this, arguments);
        },
        V
      );
    },
    count: function(S) {
      var L = 0;
      return Y(S, function() {
        L++;
      }), L;
    },
    toArray: function(S) {
      return Y(S, function(L) {
        return L;
      }) || [];
    },
    only: function(S) {
      if (!Re(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return le.Activity = C, le.Children = Ne, le.Component = K, le.Fragment = o, le.Profiler = d, le.PureComponent = F, le.StrictMode = c, le.Suspense = y, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return P.H.useMemoCache(S);
    }
  }, le.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(S, L, V) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var Z = D({}, S.props), ue = S.key;
    if (L != null)
      for (ne in L.key !== void 0 && (ue = "" + L.key), L)
        !te.call(L, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && L.ref === void 0 || (Z[ne] = L[ne]);
    var ne = arguments.length - 2;
    if (ne === 1) Z.children = V;
    else if (1 < ne) {
      for (var ge = Array(ne), re = 0; re < ne; re++)
        ge[re] = arguments[re + 2];
      Z.children = ge;
    }
    return we(S.type, ue, Z);
  }, le.createContext = function(S) {
    return S = {
      $$typeof: p,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: m,
      _context: S
    }, S;
  }, le.createElement = function(S, L, V) {
    var Z, ue = {}, ne = null;
    if (L != null)
      for (Z in L.key !== void 0 && (ne = "" + L.key), L)
        te.call(L, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ue[Z] = L[Z]);
    var ge = arguments.length - 2;
    if (ge === 1) ue.children = V;
    else if (1 < ge) {
      for (var re = Array(ge), Be = 0; Be < ge; Be++)
        re[Be] = arguments[Be + 2];
      ue.children = re;
    }
    if (S && S.defaultProps)
      for (Z in ge = S.defaultProps, ge)
        ue[Z] === void 0 && (ue[Z] = ge[Z]);
    return we(S, ne, ue);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(S) {
    return { $$typeof: v, render: S };
  }, le.isValidElement = Re, le.lazy = function(S) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: S },
      _init: de
    };
  }, le.memo = function(S, L) {
    return {
      $$typeof: b,
      type: S,
      compare: L === void 0 ? null : L
    };
  }, le.startTransition = function(S) {
    var L = P.T, V = {};
    P.T = V;
    try {
      var Z = S(), ue = P.S;
      ue !== null && ue(V, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ie, xe);
    } catch (ne) {
      xe(ne);
    } finally {
      L !== null && V.types !== null && (L.types = V.types), P.T = L;
    }
  }, le.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, le.use = function(S) {
    return P.H.use(S);
  }, le.useActionState = function(S, L, V) {
    return P.H.useActionState(S, L, V);
  }, le.useCallback = function(S, L) {
    return P.H.useCallback(S, L);
  }, le.useContext = function(S) {
    return P.H.useContext(S);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(S, L) {
    return P.H.useDeferredValue(S, L);
  }, le.useEffect = function(S, L) {
    return P.H.useEffect(S, L);
  }, le.useEffectEvent = function(S) {
    return P.H.useEffectEvent(S);
  }, le.useId = function() {
    return P.H.useId();
  }, le.useImperativeHandle = function(S, L, V) {
    return P.H.useImperativeHandle(S, L, V);
  }, le.useInsertionEffect = function(S, L) {
    return P.H.useInsertionEffect(S, L);
  }, le.useLayoutEffect = function(S, L) {
    return P.H.useLayoutEffect(S, L);
  }, le.useMemo = function(S, L) {
    return P.H.useMemo(S, L);
  }, le.useOptimistic = function(S, L) {
    return P.H.useOptimistic(S, L);
  }, le.useReducer = function(S, L, V) {
    return P.H.useReducer(S, L, V);
  }, le.useRef = function(S) {
    return P.H.useRef(S);
  }, le.useState = function(S) {
    return P.H.useState(S);
  }, le.useSyncExternalStore = function(S, L, V) {
    return P.H.useSyncExternalStore(
      S,
      L,
      V
    );
  }, le.useTransition = function() {
    return P.H.useTransition();
  }, le.version = "19.2.3", le;
}
var U0;
function yc() {
  return U0 || (U0 = 1, Ko.exports = Bp()), Ko.exports;
}
var x = yc();
const qp = /* @__PURE__ */ zp(x);
var j0 = "popstate";
function kp(l = {}) {
  function r(o, c) {
    let { pathname: d, search: m, hash: p } = o.location;
    return uc(
      "",
      { pathname: d, search: m, hash: p },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function s(o, c) {
    return typeof c == "string" ? c : _i(c);
  }
  return Yp(
    r,
    s,
    null,
    l
  );
}
function Ke(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function ln(l, r) {
  if (!l) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Gp() {
  return Math.random().toString(36).substring(2, 10);
}
function M0(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r
  };
}
function uc(l, r, s = null, o) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? xl(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || Gp()
  };
}
function _i({
  pathname: l = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function xl(l) {
  let r = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (r.hash = l.substring(s), l = l.substring(0, s));
    let o = l.indexOf("?");
    o >= 0 && (r.search = l.substring(o), l = l.substring(0, o)), l && (r.pathname = l);
  }
  return r;
}
function Yp(l, r, s, o = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = o, m = c.history, p = "POP", v = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function R() {
    p = "POP";
    let D = b(), G = D == null ? null : D - y;
    y = D, v && v({ action: p, location: M.location, delta: G });
  }
  function C(D, G) {
    p = "PUSH";
    let K = uc(M.location, D, G);
    y = b() + 1;
    let Q = M0(K, y), F = M.createHref(K);
    try {
      m.pushState(Q, "", F);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      c.location.assign(F);
    }
    d && v && v({ action: p, location: M.location, delta: 1 });
  }
  function k(D, G) {
    p = "REPLACE";
    let K = uc(M.location, D, G);
    y = b();
    let Q = M0(K, y), F = M.createHref(K);
    m.replaceState(Q, "", F), d && v && v({ action: p, location: M.location, delta: 0 });
  }
  function A(D) {
    return Xp(D);
  }
  let M = {
    get action() {
      return p;
    },
    get location() {
      return l(c, m);
    },
    listen(D) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(j0, R), v = D, () => {
        c.removeEventListener(j0, R), v = null;
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
    replace: k,
    go(D) {
      return m.go(D);
    }
  };
  return M;
}
function Xp(l, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Ke(s, "No window.location.(origin|href) available to create URL");
  let o = typeof l == "string" ? l : _i(l);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = s + o), new URL(o, s);
}
function vh(l, r, s = "/") {
  return Vp(l, r, s, !1);
}
function Vp(l, r, s, o) {
  let c = typeof r == "string" ? xl(r) : r, d = Un(c.pathname || "/", s);
  if (d == null)
    return null;
  let m = bh(l);
  Kp(m);
  let p = null;
  for (let v = 0; p == null && v < m.length; ++v) {
    let y = n1(d);
    p = e1(
      m[v],
      y,
      o
    );
  }
  return p;
}
function bh(l, r = [], s = [], o = "", c = !1) {
  let d = (m, p, v = c, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: p,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(o) && v)
        return;
      Ke(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(o.length);
    }
    let R = On([o, b.relativePath]), C = s.concat(b);
    m.children && m.children.length > 0 && (Ke(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), bh(
      m.children,
      r,
      C,
      R,
      v
    )), !(m.path == null && !m.index) && r.push({
      path: R,
      score: Ip(R, m.index),
      routesMeta: C
    });
  };
  return l.forEach((m, p) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, p);
    else
      for (let v of Eh(m.path))
        d(m, p, !0, v);
  }), r;
}
function Eh(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [s, ...o] = r, c = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [d, ""] : [d];
  let m = Eh(o.join("/")), p = [];
  return p.push(
    ...m.map(
      (v) => v === "" ? d : [d, v].join("/")
    )
  ), c && p.push(...m), p.map(
    (v) => l.startsWith("/") && v === "" ? "/" : v
  );
}
function Kp(l) {
  l.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Pp(
      r.routesMeta.map((o) => o.childrenIndex),
      s.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Qp = /^:[\w-]+$/, Zp = 3, Jp = 2, $p = 1, Fp = 10, Wp = -2, z0 = (l) => l === "*";
function Ip(l, r) {
  let s = l.split("/"), o = s.length;
  return s.some(z0) && (o += Wp), r && (o += Jp), s.filter((c) => !z0(c)).reduce(
    (c, d) => c + (Qp.test(d) ? Zp : d === "" ? $p : Fp),
    o
  );
}
function Pp(l, r) {
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
function e1(l, r, s = !1) {
  let { routesMeta: o } = l, c = {}, d = "/", m = [];
  for (let p = 0; p < o.length; ++p) {
    let v = o[p], y = p === o.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", R = pu(
      { path: v.relativePath, caseSensitive: v.caseSensitive, end: y },
      b
    ), C = v.route;
    if (!R && y && s && !o[o.length - 1].route.index && (R = pu(
      {
        path: v.relativePath,
        caseSensitive: v.caseSensitive,
        end: !1
      },
      b
    )), !R)
      return null;
    Object.assign(c, R.params), m.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: On([d, R.pathname]),
      pathnameBase: r1(
        On([d, R.pathnameBase])
      ),
      route: C
    }), R.pathnameBase !== "/" && (d = On([d, R.pathnameBase]));
  }
  return m;
}
function pu(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, o] = t1(
    l.path,
    l.caseSensitive,
    l.end
  ), c = r.match(s);
  if (!c) return null;
  let d = c[0], m = d.replace(/(.)\/+$/, "$1"), p = c.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: b, isOptional: R }, C) => {
        if (b === "*") {
          let A = p[C] || "";
          m = d.slice(0, d.length - A.length).replace(/(.)\/+$/, "$1");
        }
        const k = p[C];
        return R && !k ? y[b] = void 0 : y[b] = (k || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: l
  };
}
function t1(l, r = !1, s = !0) {
  ln(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, p, v) => (o.push({ paramName: p, isOptional: v != null }), v ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (o.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function n1(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return ln(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function Un(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, o = l.charAt(s);
  return o && o !== "/" ? null : l.slice(s) || "/";
}
var Sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, a1 = (l) => Sh.test(l);
function l1(l, r = "/") {
  let {
    pathname: s,
    search: o = "",
    hash: c = ""
  } = typeof l == "string" ? xl(l) : l, d;
  if (s)
    if (a1(s))
      d = s;
    else {
      if (s.includes("//")) {
        let m = s;
        s = s.replace(/\/\/+/g, "/"), ln(
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
    search: u1(o),
    hash: s1(c)
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
function i1(l) {
  return l.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function wh(l) {
  let r = i1(l);
  return r.map(
    (s, o) => o === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function xh(l, r, s, o = !1) {
  let c;
  typeof l == "string" ? c = xl(l) : (c = { ...l }, Ke(
    !c.pathname || !c.pathname.includes("?"),
    Qo("?", "pathname", "search", c)
  ), Ke(
    !c.pathname || !c.pathname.includes("#"),
    Qo("#", "pathname", "hash", c)
  ), Ke(
    !c.search || !c.search.includes("#"),
    Qo("#", "search", "hash", c)
  ));
  let d = l === "" || c.pathname === "", m = d ? "/" : c.pathname, p;
  if (m == null)
    p = s;
  else {
    let R = r.length - 1;
    if (!o && m.startsWith("..")) {
      let C = m.split("/");
      for (; C[0] === ".."; )
        C.shift(), R -= 1;
      c.pathname = C.join("/");
    }
    p = R >= 0 ? r[R] : "/";
  }
  let v = l1(c, p), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && s.endsWith("/");
  return !v.pathname.endsWith("/") && (y || b) && (v.pathname += "/"), v;
}
var On = (l) => l.join("/").replace(/\/\/+/g, "/"), r1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), u1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, s1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, o1 = class {
  constructor(l, r, s, o = !1) {
    this.status = l, this.statusText = r || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function c1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function f1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Rh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Th(l, r) {
  let s = l;
  if (typeof s != "string" || !Sh.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let o = s, c = !1;
  if (Rh)
    try {
      let d = new URL(window.location.href), m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), p = Un(m.pathname, r);
      m.origin === d.origin && p != null ? s = p + m.search + m.hash : c = !0;
    } catch {
      ln(
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
var Ah = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Ah
);
var d1 = [
  "GET",
  ...Ah
];
new Set(d1);
var Rl = x.createContext(null);
Rl.displayName = "DataRouter";
var Su = x.createContext(null);
Su.displayName = "DataRouterState";
var m1 = x.createContext(!1), Ch = x.createContext({
  isTransitioning: !1
});
Ch.displayName = "ViewTransition";
var h1 = x.createContext(
  /* @__PURE__ */ new Map()
);
h1.displayName = "Fetchers";
var g1 = x.createContext(null);
g1.displayName = "Await";
var It = x.createContext(
  null
);
It.displayName = "Navigation";
var ji = x.createContext(
  null
);
ji.displayName = "Location";
var jn = x.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
jn.displayName = "Route";
var pc = x.createContext(null);
pc.displayName = "RouteError";
var Nh = "REACT_ROUTER_ERROR", y1 = "REDIRECT", p1 = "ROUTE_ERROR_RESPONSE";
function v1(l) {
  if (l.startsWith(`${Nh}:${y1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function b1(l) {
  if (l.startsWith(
    `${Nh}:${p1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new o1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function E1(l, { relative: r } = {}) {
  Ke(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = x.useContext(It), { hash: c, pathname: d, search: m } = zi(l, { relative: r }), p = d;
  return s !== "/" && (p = d === "/" ? s : On([s, d])), o.createHref({ pathname: p, search: m, hash: c });
}
function Mi() {
  return x.useContext(ji) != null;
}
function ja() {
  return Ke(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), x.useContext(ji).location;
}
var _h = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oh(l) {
  x.useContext(It).static || x.useLayoutEffect(l);
}
function S1() {
  let { isDataRoute: l } = x.useContext(jn);
  return l ? M1() : w1();
}
function w1() {
  Ke(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = x.useContext(Rl), { basename: r, navigator: s } = x.useContext(It), { matches: o } = x.useContext(jn), { pathname: c } = ja(), d = JSON.stringify(wh(o)), m = x.useRef(!1);
  return Oh(() => {
    m.current = !0;
  }), x.useCallback(
    (v, y = {}) => {
      if (ln(m.current, _h), !m.current) return;
      if (typeof v == "number") {
        s.go(v);
        return;
      }
      let b = xh(
        v,
        JSON.parse(d),
        c,
        y.relative === "path"
      );
      l == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : On([r, b.pathname])), (y.replace ? s.replace : s.push)(
        b,
        y.state,
        y
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
x.createContext(null);
function zi(l, { relative: r } = {}) {
  let { matches: s } = x.useContext(jn), { pathname: o } = ja(), c = JSON.stringify(wh(s));
  return x.useMemo(
    () => xh(
      l,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [l, c, o, r]
  );
}
function x1(l, r) {
  return Dh(l, r);
}
function Dh(l, r, s, o, c) {
  Ke(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = x.useContext(It), { matches: m } = x.useContext(jn), p = m[m.length - 1], v = p ? p.params : {}, y = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", R = p && p.route;
  {
    let K = R && R.path || "";
    jh(
      y,
      !R || K.endsWith("*") || K.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K === "/" ? "*" : `${K}/*`}">.`
    );
  }
  let C = ja(), k;
  if (r) {
    let K = typeof r == "string" ? xl(r) : r;
    Ke(
      b === "/" || K.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${K.pathname}" was given in the \`location\` prop.`
    ), k = K;
  } else
    k = C;
  let A = k.pathname || "/", M = A;
  if (b !== "/") {
    let K = b.replace(/^\//, "").split("/");
    M = "/" + A.replace(/^\//, "").split("/").slice(K.length).join("/");
  }
  let D = vh(l, { pathname: M });
  ln(
    R || D != null,
    `No routes matched location "${k.pathname}${k.search}${k.hash}" `
  ), ln(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let G = N1(
    D && D.map(
      (K) => Object.assign({}, K, {
        params: Object.assign({}, v, K.params),
        pathname: On([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            K.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : K.pathname
        ]),
        pathnameBase: K.pathnameBase === "/" ? b : On([
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
  return r && G ? /* @__PURE__ */ x.createElement(
    ji.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...k
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    G
  ) : G;
}
function R1() {
  let l = j1(), r = c1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), m = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ x.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ x.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ x.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ x.createElement("pre", { style: c }, s) : null, m);
}
var T1 = /* @__PURE__ */ x.createElement(R1, null), Uh = class extends x.Component {
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
      const s = b1(l.digest);
      s && (l = s);
    }
    let r = l !== void 0 ? /* @__PURE__ */ x.createElement(jn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ x.createElement(
      pc.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ x.createElement(A1, { error: l }, r) : r;
  }
};
Uh.contextType = m1;
var Zo = /* @__PURE__ */ new WeakMap();
function A1({
  children: l,
  error: r
}) {
  let { basename: s } = x.useContext(It);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = v1(r.digest);
    if (o) {
      let c = Zo.get(r);
      if (c) throw c;
      let d = Th(o.location, s);
      if (Rh && !Zo.get(r))
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
      return /* @__PURE__ */ x.createElement(
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
function C1({ routeContext: l, match: r, children: s }) {
  let o = x.useContext(Rl);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ x.createElement(jn.Provider, { value: l }, s);
}
function N1(l, r = [], s = null, o = null, c = null) {
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
    Ke(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, b + 1)
    );
  }
  let p = !1, v = -1;
  if (s)
    for (let b = 0; b < d.length; b++) {
      let R = d[b];
      if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (v = b), R.route.id) {
        let { loaderData: C, errors: k } = s, A = R.route.loader && !C.hasOwnProperty(R.route.id) && (!k || k[R.route.id] === void 0);
        if (R.route.lazy || A) {
          p = !0, v >= 0 ? d = d.slice(0, v + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && o ? (b, R) => {
    o(b, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: f1(s.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (b, R, C) => {
      let k, A = !1, M = null, D = null;
      s && (k = m && R.route.id ? m[R.route.id] : void 0, M = R.route.errorElement || T1, p && (v < 0 && C === 0 ? (jh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), A = !0, D = null) : v === C && (A = !0, D = R.route.hydrateFallbackElement || null)));
      let G = r.concat(d.slice(0, C + 1)), K = () => {
        let Q;
        return k ? Q = M : A ? Q = D : R.route.Component ? Q = /* @__PURE__ */ x.createElement(R.route.Component, null) : R.route.element ? Q = R.route.element : Q = b, /* @__PURE__ */ x.createElement(
          C1,
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
      return s && (R.route.ErrorBoundary || R.route.errorElement || C === 0) ? /* @__PURE__ */ x.createElement(
        Uh,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: M,
          error: k,
          children: K(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
          onError: y
        }
      ) : K();
    },
    null
  );
}
function vc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _1(l) {
  let r = x.useContext(Rl);
  return Ke(r, vc(l)), r;
}
function O1(l) {
  let r = x.useContext(Su);
  return Ke(r, vc(l)), r;
}
function D1(l) {
  let r = x.useContext(jn);
  return Ke(r, vc(l)), r;
}
function bc(l) {
  let r = D1(l), s = r.matches[r.matches.length - 1];
  return Ke(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function U1() {
  return bc(
    "useRouteId"
    /* UseRouteId */
  );
}
function j1() {
  let l = x.useContext(pc), r = O1(
    "useRouteError"
    /* UseRouteError */
  ), s = bc(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[s];
}
function M1() {
  let { router: l } = _1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = bc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = x.useRef(!1);
  return Oh(() => {
    s.current = !0;
  }), x.useCallback(
    async (c, d = {}) => {
      ln(s.current, _h), s.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...d }));
    },
    [l, r]
  );
}
var H0 = {};
function jh(l, r, s) {
  !r && !H0[l] && (H0[l] = !0, ln(!1, s));
}
x.memo(z1);
function z1({
  routes: l,
  future: r,
  state: s,
  onError: o
}) {
  return Dh(l, void 0, s, o, r);
}
function Mh(l) {
  Ke(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function L1({
  basename: l = "/",
  children: r = null,
  location: s,
  navigationType: o = "POP",
  navigator: c,
  static: d = !1,
  unstable_useTransitions: m
}) {
  Ke(
    !Mi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = l.replace(/^\/*/, "/"), v = x.useMemo(
    () => ({
      basename: p,
      navigator: c,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [p, c, d, m]
  );
  typeof s == "string" && (s = xl(s));
  let {
    pathname: y = "/",
    search: b = "",
    hash: R = "",
    state: C = null,
    key: k = "default"
  } = s, A = x.useMemo(() => {
    let M = Un(y, p);
    return M == null ? null : {
      location: {
        pathname: M,
        search: b,
        hash: R,
        state: C,
        key: k
      },
      navigationType: o
    };
  }, [p, y, b, R, C, k, o]);
  return ln(
    A != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${b}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), A == null ? null : /* @__PURE__ */ x.createElement(It.Provider, { value: v }, /* @__PURE__ */ x.createElement(ji.Provider, { children: r, value: A }));
}
function H1({
  children: l,
  location: r
}) {
  return x1(sc(l), r);
}
function sc(l, r = []) {
  let s = [];
  return x.Children.forEach(l, (o, c) => {
    if (!x.isValidElement(o))
      return;
    let d = [...r, c];
    if (o.type === x.Fragment) {
      s.push.apply(
        s,
        sc(o.props.children, d)
      );
      return;
    }
    Ke(
      o.type === Mh,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ke(
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
    o.props.children && (m.children = sc(
      o.props.children,
      d
    )), s.push(m);
  }), s;
}
var cu = "get", fu = "application/x-www-form-urlencoded";
function wu(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function B1(l) {
  return wu(l) && l.tagName.toLowerCase() === "button";
}
function q1(l) {
  return wu(l) && l.tagName.toLowerCase() === "form";
}
function k1(l) {
  return wu(l) && l.tagName.toLowerCase() === "input";
}
function G1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Y1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !G1(l);
}
var lu = null;
function X1() {
  if (lu === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), lu = !1;
    } catch {
      lu = !0;
    }
  return lu;
}
var V1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Jo(l) {
  return l != null && !V1.has(l) ? (ln(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`
  ), null) : l;
}
function K1(l, r) {
  let s, o, c, d, m;
  if (q1(l)) {
    let p = l.getAttribute("action");
    o = p ? Un(p, r) : null, s = l.getAttribute("method") || cu, c = Jo(l.getAttribute("enctype")) || fu, d = new FormData(l);
  } else if (B1(l) || k1(l) && (l.type === "submit" || l.type === "image")) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = l.getAttribute("formaction") || p.getAttribute("action");
    if (o = v ? Un(v, r) : null, s = l.getAttribute("formmethod") || p.getAttribute("method") || cu, c = Jo(l.getAttribute("formenctype")) || Jo(p.getAttribute("enctype")) || fu, d = new FormData(p, l), !X1()) {
      let { name: y, type: b, value: R } = l;
      if (b === "image") {
        let C = y ? `${y}.` : "";
        d.append(`${C}x`, "0"), d.append(`${C}y`, "0");
      } else y && d.append(y, R);
    }
  } else {
    if (wu(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = cu, o = null, c = fu, m = l;
  }
  return d && c === "text/plain" && (m = d, d = void 0), { action: o, method: s.toLowerCase(), encType: c, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ec(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function Q1(l, r, s) {
  let o = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return o.pathname === "/" ? o.pathname = `_root.${s}` : r && Un(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`, o;
}
async function Z1(l, r) {
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
function J1(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function $1(l, r, s) {
  let o = await Promise.all(
    l.map(async (c) => {
      let d = r.routes[c.route.id];
      if (d) {
        let m = await Z1(d, s);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return P1(
    o.flat(1).filter(J1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function B0(l, r, s, o, c, d) {
  let m = (v, y) => s[y] ? v.route.id !== s[y].route.id : !0, p = (v, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== v.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== v.params["*"]
  );
  return d === "assets" ? r.filter(
    (v, y) => m(v, y) || p(v, y)
  ) : d === "data" ? r.filter((v, y) => {
    let b = o.routes[v.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (m(v, y) || p(v, y))
      return !0;
    if (v.route.shouldRevalidate) {
      let R = v.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(l, window.origin),
        nextParams: v.params,
        defaultShouldRevalidate: !0
      });
      if (typeof R == "boolean")
        return R;
    }
    return !0;
  }) : [];
}
function F1(l, r, { includeHydrateFallback: s } = {}) {
  return W1(
    l.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let d = [c.module];
      return c.clientActionModule && (d = d.concat(c.clientActionModule)), c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (d = d.concat(c.hydrateFallbackModule)), c.imports && (d = d.concat(c.imports)), d;
    }).flat(1)
  );
}
function W1(l) {
  return [...new Set(l)];
}
function I1(l) {
  let r = {}, s = Object.keys(l).sort();
  for (let o of s)
    r[o] = l[o];
  return r;
}
function P1(l, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((o, c) => {
    let d = JSON.stringify(I1(c));
    return s.has(d) || (s.add(d), o.push({ key: d, link: c })), o;
  }, []);
}
function zh() {
  let l = x.useContext(Rl);
  return Ec(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function ev() {
  let l = x.useContext(Su);
  return Ec(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Sc = x.createContext(void 0);
Sc.displayName = "FrameworkContext";
function Lh() {
  let l = x.useContext(Sc);
  return Ec(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function tv(l, r) {
  let s = x.useContext(Sc), [o, c] = x.useState(!1), [d, m] = x.useState(!1), { onFocus: p, onBlur: v, onMouseEnter: y, onMouseLeave: b, onTouchStart: R } = r, C = x.useRef(null);
  x.useEffect(() => {
    if (l === "render" && m(!0), l === "viewport") {
      let M = (G) => {
        G.forEach((K) => {
          m(K.isIntersecting);
        });
      }, D = new IntersectionObserver(M, { threshold: 0.5 });
      return C.current && D.observe(C.current), () => {
        D.disconnect();
      };
    }
  }, [l]), x.useEffect(() => {
    if (o) {
      let M = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(M);
      };
    }
  }, [o]);
  let k = () => {
    c(!0);
  }, A = () => {
    c(!1), m(!1);
  };
  return s ? l !== "intent" ? [d, C, {}] : [
    d,
    C,
    {
      onFocus: xi(p, k),
      onBlur: xi(v, A),
      onMouseEnter: xi(y, k),
      onMouseLeave: xi(b, A),
      onTouchStart: xi(R, k)
    }
  ] : [!1, C, {}];
}
function xi(l, r) {
  return (s) => {
    l && l(s), s.defaultPrevented || r(s);
  };
}
function nv({ page: l, ...r }) {
  let { router: s } = zh(), o = x.useMemo(
    () => vh(s.routes, l, s.basename),
    [s.routes, l, s.basename]
  );
  return o ? /* @__PURE__ */ x.createElement(lv, { page: l, matches: o, ...r }) : null;
}
function av(l) {
  let { manifest: r, routeModules: s } = Lh(), [o, c] = x.useState([]);
  return x.useEffect(() => {
    let d = !1;
    return $1(l, r, s).then(
      (m) => {
        d || c(m);
      }
    ), () => {
      d = !0;
    };
  }, [l, r, s]), o;
}
function lv({
  page: l,
  matches: r,
  ...s
}) {
  let o = ja(), { manifest: c, routeModules: d } = Lh(), { basename: m } = zh(), { loaderData: p, matches: v } = ev(), y = x.useMemo(
    () => B0(
      l,
      r,
      v,
      c,
      o,
      "data"
    ),
    [l, r, v, c, o]
  ), b = x.useMemo(
    () => B0(
      l,
      r,
      v,
      c,
      o,
      "assets"
    ),
    [l, r, v, c, o]
  ), R = x.useMemo(() => {
    if (l === o.pathname + o.search + o.hash)
      return [];
    let A = /* @__PURE__ */ new Set(), M = !1;
    if (r.forEach((G) => {
      let K = c.routes[G.route.id];
      !K || !K.hasLoader || (!y.some((Q) => Q.route.id === G.route.id) && G.route.id in p && d[G.route.id]?.shouldRevalidate || K.hasClientLoader ? M = !0 : A.add(G.route.id));
    }), A.size === 0)
      return [];
    let D = Q1(l, m, "data");
    return M && A.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((G) => A.has(G.route.id)).map((G) => G.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    p,
    o,
    c,
    y,
    r,
    l,
    d
  ]), C = x.useMemo(
    () => F1(b, c),
    [b, c]
  ), k = av(b);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, R.map((A) => /* @__PURE__ */ x.createElement("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...s })), C.map((A) => /* @__PURE__ */ x.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })), k.map(({ key: A, link: M }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ x.createElement("link", { key: A, nonce: s.nonce, ...M })
  )));
}
function iv(...l) {
  return (r) => {
    l.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var rv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  rv && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function uv({
  basename: l,
  children: r,
  unstable_useTransitions: s,
  window: o
}) {
  let c = x.useRef();
  c.current == null && (c.current = kp({ window: o, v5Compat: !0 }));
  let d = c.current, [m, p] = x.useState({
    action: d.action,
    location: d.location
  }), v = x.useCallback(
    (y) => {
      s === !1 ? p(y) : x.startTransition(() => p(y));
    },
    [s]
  );
  return x.useLayoutEffect(() => d.listen(v), [d, v]), /* @__PURE__ */ x.createElement(
    L1,
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
var Hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Bh = x.forwardRef(
  function({
    onClick: r,
    discover: s = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: d,
    replace: m,
    state: p,
    target: v,
    to: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: C,
    ...k
  }, A) {
    let { basename: M, unstable_useTransitions: D } = x.useContext(It), G = typeof y == "string" && Hh.test(y), K = Th(y, M);
    y = K.to;
    let Q = E1(y, { relative: c }), [F, W, he] = tv(
      o,
      k
    ), ie = fv(y, {
      replace: m,
      state: p,
      target: v,
      preventScrollReset: b,
      relative: c,
      viewTransition: R,
      unstable_defaultShouldRevalidate: C,
      unstable_useTransitions: D
    });
    function P(we) {
      r && r(we), we.defaultPrevented || ie(we);
    }
    let te = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ x.createElement(
        "a",
        {
          ...k,
          ...he,
          href: K.absoluteURL || Q,
          onClick: K.isExternal || d ? r : P,
          ref: iv(A, W),
          target: v,
          "data-discover": !G && s === "render" ? "true" : void 0
        }
      )
    );
    return F && !G ? /* @__PURE__ */ x.createElement(x.Fragment, null, te, /* @__PURE__ */ x.createElement(nv, { page: Q })) : te;
  }
);
Bh.displayName = "Link";
var sv = x.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: c = !1,
    style: d,
    to: m,
    viewTransition: p,
    children: v,
    ...y
  }, b) {
    let R = zi(m, { relative: y.relative }), C = ja(), k = x.useContext(Su), { navigator: A, basename: M } = x.useContext(It), D = k != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    yv(R) && p === !0, G = A.encodeLocation ? A.encodeLocation(R).pathname : R.pathname, K = C.pathname, Q = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null;
    s || (K = K.toLowerCase(), Q = Q ? Q.toLowerCase() : null, G = G.toLowerCase()), Q && M && (Q = Un(Q, M) || Q);
    const F = G !== "/" && G.endsWith("/") ? G.length - 1 : G.length;
    let W = K === G || !c && K.startsWith(G) && K.charAt(F) === "/", he = Q != null && (Q === G || !c && Q.startsWith(G) && Q.charAt(G.length) === "/"), ie = {
      isActive: W,
      isPending: he,
      isTransitioning: D
    }, P = W ? r : void 0, te;
    typeof o == "function" ? te = o(ie) : te = [
      o,
      W ? "active" : null,
      he ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let we = typeof d == "function" ? d(ie) : d;
    return /* @__PURE__ */ x.createElement(
      Bh,
      {
        ...y,
        "aria-current": P,
        className: te,
        ref: b,
        style: we,
        to: m,
        viewTransition: p
      },
      typeof v == "function" ? v(ie) : v
    );
  }
);
sv.displayName = "NavLink";
var ov = x.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: d,
    method: m = cu,
    action: p,
    onSubmit: v,
    relative: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: C,
    ...k
  }, A) => {
    let { unstable_useTransitions: M } = x.useContext(It), D = hv(), G = gv(p, { relative: y }), K = m.toLowerCase() === "get" ? "get" : "post", Q = typeof p == "string" && Hh.test(p), F = (W) => {
      if (v && v(W), W.defaultPrevented) return;
      W.preventDefault();
      let he = W.nativeEvent.submitter, ie = he?.getAttribute("formmethod") || m, P = () => D(he || W.currentTarget, {
        fetcherKey: r,
        method: ie,
        navigate: s,
        replace: c,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: R,
        unstable_defaultShouldRevalidate: C
      });
      M && s !== !1 ? x.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ x.createElement(
      "form",
      {
        ref: A,
        method: K,
        action: G,
        onSubmit: o ? v : F,
        ...k,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
ov.displayName = "Form";
function cv(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qh(l) {
  let r = x.useContext(Rl);
  return Ke(r, cv(l)), r;
}
function fv(l, {
  target: r,
  replace: s,
  state: o,
  preventScrollReset: c,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: v
} = {}) {
  let y = S1(), b = ja(), R = zi(l, { relative: d });
  return x.useCallback(
    (C) => {
      if (Y1(C, r)) {
        C.preventDefault();
        let k = s !== void 0 ? s : _i(b) === _i(R), A = () => y(l, {
          replace: k,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: p
        });
        v ? x.startTransition(() => A()) : A();
      }
    },
    [
      b,
      y,
      R,
      s,
      o,
      r,
      l,
      c,
      d,
      m,
      p,
      v
    ]
  );
}
var dv = 0, mv = () => `__${String(++dv)}__`;
function hv() {
  let { router: l } = qh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = x.useContext(It), s = U1(), o = l.fetch, c = l.navigate;
  return x.useCallback(
    async (d, m = {}) => {
      let { action: p, method: v, encType: y, formData: b, body: R } = K1(
        d,
        r
      );
      if (m.navigate === !1) {
        let C = m.fetcherKey || mv();
        await o(C, s, m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || v,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await c(m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || v,
          formEncType: m.encType || y,
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
function gv(l, { relative: r } = {}) {
  let { basename: s } = x.useContext(It), o = x.useContext(jn);
  Ke(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...zi(l || ".", { relative: r }) }, m = ja();
  if (l == null) {
    d.search = m.search;
    let p = new URLSearchParams(d.search), v = p.getAll("index");
    if (v.some((b) => b === "")) {
      p.delete("index"), v.filter((R) => R).forEach((R) => p.append("index", R));
      let b = p.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : On([s, d.pathname])), _i(d);
}
function yv(l, { relative: r } = {}) {
  let s = x.useContext(Ch);
  Ke(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = qh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = zi(l, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = Un(s.currentLocation.pathname, o) || s.currentLocation.pathname, m = Un(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return pu(c.pathname, m) != null || pu(c.pathname, d) != null;
}
var $o = { exports: {} }, yt = {};
var q0;
function pv() {
  if (q0) return yt;
  q0 = 1;
  var l = yc();
  function r(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function d(v, y, b) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: R == null ? null : "" + R,
      children: v,
      containerInfo: y,
      implementation: b
    };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, y) {
    if (v === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, yt.createPortal = function(v, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(v, y, null, b);
  }, yt.flushSync = function(v) {
    var y = m.T, b = o.p;
    try {
      if (m.T = null, o.p = 2, v) return v();
    } finally {
      m.T = y, o.p = b, o.d.f();
    }
  }, yt.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(v, y));
  }, yt.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, yt.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var b = y.as, R = p(b, y.crossOrigin), C = typeof y.integrity == "string" ? y.integrity : void 0, k = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? o.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: R,
          integrity: C,
          fetchPriority: k
        }
      ) : b === "script" && o.d.X(v, {
        crossOrigin: R,
        integrity: C,
        fetchPriority: k,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, yt.preinitModule = function(v, y) {
    if (typeof v == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = p(
            y.as,
            y.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(v);
  }, yt.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, R = p(b, y.crossOrigin);
      o.d.L(v, b, {
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
  }, yt.preloadModule = function(v, y) {
    if (typeof v == "string")
      if (y) {
        var b = p(y.as, y.crossOrigin);
        o.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(v);
  }, yt.requestFormReset = function(v) {
    o.d.r(v);
  }, yt.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, yt.useFormState = function(v, y, b) {
    return m.H.useFormState(v, y, b);
  }, yt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, yt.version = "19.2.3", yt;
}
var k0;
function vv() {
  if (k0) return $o.exports;
  k0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), $o.exports = pv(), $o.exports;
}
var Fo = { exports: {} }, Ri = {}, Wo = { exports: {} }, Io = {};
var G0;
function bv() {
  return G0 || (G0 = 1, (function(l) {
    function r(X, q) {
      var Y = X.length;
      X.push(q);
      e: for (; 0 < Y; ) {
        var de = Y - 1 >>> 1, xe = X[de];
        if (0 < c(xe, q))
          X[de] = q, X[Y] = xe, Y = de;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function o(X) {
      if (X.length === 0) return null;
      var q = X[0], Y = X.pop();
      if (Y !== q) {
        X[0] = Y;
        e: for (var de = 0, xe = X.length, Ne = xe >>> 1; de < Ne; ) {
          var S = 2 * (de + 1) - 1, L = X[S], V = S + 1, Z = X[V];
          if (0 > c(L, Y))
            V < xe && 0 > c(Z, L) ? (X[de] = Z, X[V] = Y, de = V) : (X[de] = L, X[S] = Y, de = S);
          else if (V < xe && 0 > c(Z, Y))
            X[de] = Z, X[V] = Y, de = V;
          else break e;
        }
      }
      return q;
    }
    function c(X, q) {
      var Y = X.sortIndex - q.sortIndex;
      return Y !== 0 ? Y : X.id - q.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      l.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, p = m.now();
      l.unstable_now = function() {
        return m.now() - p;
      };
    }
    var v = [], y = [], b = 1, R = null, C = 3, k = !1, A = !1, M = !1, D = !1, G = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function F(X) {
      for (var q = s(y); q !== null; ) {
        if (q.callback === null) o(y);
        else if (q.startTime <= X)
          o(y), q.sortIndex = q.expirationTime, r(v, q);
        else break;
        q = s(y);
      }
    }
    function W(X) {
      if (M = !1, F(X), !A)
        if (s(v) !== null)
          A = !0, he || (he = !0, Re());
        else {
          var q = s(y);
          q !== null && Ie(W, q.startTime - X);
        }
    }
    var he = !1, ie = -1, P = 5, te = -1;
    function we() {
      return D ? !0 : !(l.unstable_now() - te < P);
    }
    function Le() {
      if (D = !1, he) {
        var X = l.unstable_now();
        te = X;
        var q = !0;
        try {
          e: {
            A = !1, M && (M = !1, K(ie), ie = -1), k = !0;
            var Y = C;
            try {
              t: {
                for (F(X), R = s(v); R !== null && !(R.expirationTime > X && we()); ) {
                  var de = R.callback;
                  if (typeof de == "function") {
                    R.callback = null, C = R.priorityLevel;
                    var xe = de(
                      R.expirationTime <= X
                    );
                    if (X = l.unstable_now(), typeof xe == "function") {
                      R.callback = xe, F(X), q = !0;
                      break t;
                    }
                    R === s(v) && o(v), F(X);
                  } else o(v);
                  R = s(v);
                }
                if (R !== null) q = !0;
                else {
                  var Ne = s(y);
                  Ne !== null && Ie(
                    W,
                    Ne.startTime - X
                  ), q = !1;
                }
              }
              break e;
            } finally {
              R = null, C = Y, k = !1;
            }
            q = void 0;
          }
        } finally {
          q ? Re() : he = !1;
        }
      }
    }
    var Re;
    if (typeof Q == "function")
      Re = function() {
        Q(Le);
      };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), Xe = Me.port2;
      Me.port1.onmessage = Le, Re = function() {
        Xe.postMessage(null);
      };
    } else
      Re = function() {
        G(Le, 0);
      };
    function Ie(X, q) {
      ie = G(function() {
        X(l.unstable_now());
      }, q);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, l.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < X ? Math.floor(1e3 / X) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_next = function(X) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = C;
      }
      var Y = C;
      C = q;
      try {
        return X();
      } finally {
        C = Y;
      }
    }, l.unstable_requestPaint = function() {
      D = !0;
    }, l.unstable_runWithPriority = function(X, q) {
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
      var Y = C;
      C = X;
      try {
        return q();
      } finally {
        C = Y;
      }
    }, l.unstable_scheduleCallback = function(X, q, Y) {
      var de = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? de + Y : de) : Y = de, X) {
        case 1:
          var xe = -1;
          break;
        case 2:
          xe = 250;
          break;
        case 5:
          xe = 1073741823;
          break;
        case 4:
          xe = 1e4;
          break;
        default:
          xe = 5e3;
      }
      return xe = Y + xe, X = {
        id: b++,
        callback: q,
        priorityLevel: X,
        startTime: Y,
        expirationTime: xe,
        sortIndex: -1
      }, Y > de ? (X.sortIndex = Y, r(y, X), s(v) === null && X === s(y) && (M ? (K(ie), ie = -1) : M = !0, Ie(W, Y - de))) : (X.sortIndex = xe, r(v, X), A || k || (A = !0, he || (he = !0, Re()))), X;
    }, l.unstable_shouldYield = we, l.unstable_wrapCallback = function(X) {
      var q = C;
      return function() {
        var Y = C;
        C = q;
        try {
          return X.apply(this, arguments);
        } finally {
          C = Y;
        }
      };
    };
  })(Io)), Io;
}
var Y0;
function Ev() {
  return Y0 || (Y0 = 1, Wo.exports = bv()), Wo.exports;
}
var X0;
function Sv() {
  if (X0) return Ri;
  X0 = 1;
  var l = {};
  var r = Ev(), s = yc(), o = vv();
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
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
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
          if (u === n) return y(i), e;
          if (u === a) return y(i), t;
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
  var C = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), te = /* @__PURE__ */ Symbol.for("react.lazy"), we = /* @__PURE__ */ Symbol.for("react.activity"), Le = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Re = Symbol.iterator;
  function Me(e) {
    return e === null || typeof e != "object" ? null : (e = Re && e[Re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case K:
        return "Profiler";
      case G:
        return "StrictMode";
      case he:
        return "Suspense";
      case ie:
        return "SuspenseList";
      case we:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
        case te:
          t = e._payload, e = e._init;
          try {
            return Ie(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, q = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xe = [], Ne = -1;
  function S(e) {
    return { current: e };
  }
  function L(e) {
    0 > Ne || (e.current = xe[Ne], xe[Ne] = null, Ne--);
  }
  function V(e, t) {
    Ne++, xe[Ne] = e.current, e.current = t;
  }
  var Z = S(null), ue = S(null), ne = S(null), ge = S(null);
  function re(e, t) {
    switch (V(ne, t), V(ue, e), V(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Im(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Im(t), e = Pm(t, e);
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
    L(Z), V(Z, e);
  }
  function Be() {
    L(Z), L(ue), L(ne);
  }
  function kt(e) {
    e.memoizedState !== null && V(ge, e);
    var t = Z.current, n = Pm(t, e.type);
    t !== n && (V(ue, e), V(Z, n));
  }
  function Mn(e) {
    ue.current === e && (L(Z), L(ue)), ge.current === e && (L(ge), vi._currentValue = de);
  }
  var zn, Ma;
  function Pt(e) {
    if (zn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        zn = t && t[1] || "", Ma = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + zn + e + Ma;
  }
  var ae = !1;
  function Ve(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
                } catch (j) {
                  var O = j;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (j) {
                  O = j;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                O = j;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (j) {
            if (j && O && typeof j.stack == "string")
              return [j.stack, O.stack];
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
                  var z = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Pt(n) : "";
  }
  function oa(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Pt(e.type);
      case 16:
        return Pt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Pt("Suspense Fallback") : Pt("Suspense");
      case 19:
        return Pt("SuspenseList");
      case 0:
      case 15:
        return Ve(e.type, !1);
      case 11:
        return Ve(e.type.render, !1);
      case 1:
        return Ve(e.type, !0);
      case 31:
        return Pt("Activity");
      default:
        return "";
    }
  }
  function se(e) {
    try {
      var t = "", n = null;
      do
        t += oa(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var bt = Object.prototype.hasOwnProperty, it = r.unstable_scheduleCallback, Ln = r.unstable_cancelCallback, ca = r.unstable_shouldYield, Ou = r.unstable_requestPaint, Ot = r.unstable_now, gg = r.unstable_getCurrentPriorityLevel, _c = r.unstable_ImmediatePriority, Oc = r.unstable_UserBlockingPriority, Gi = r.unstable_NormalPriority, yg = r.unstable_LowPriority, Dc = r.unstable_IdlePriority, pg = r.log, vg = r.unstable_setDisableYieldValue, Ol = null, Dt = null;
  function Hn(e) {
    if (typeof pg == "function" && vg(e), Dt && typeof Dt.setStrictMode == "function")
      try {
        Dt.setStrictMode(Ol, e);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : Sg, bg = Math.log, Eg = Math.LN2;
  function Sg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bg(e) / Eg | 0) | 0;
  }
  var Yi = 256, Xi = 262144, Vi = 4194304;
  function fa(e) {
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
  function Ki(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = a & 134217727;
    return h !== 0 ? (a = h & ~u, a !== 0 ? i = fa(a) : (f &= h, f !== 0 ? i = fa(f) : n || (n = h & ~e, n !== 0 && (i = fa(n))))) : (h = a & ~u, h !== 0 ? i = fa(h) : f !== 0 ? i = fa(f) : n || (n = a & ~e, n !== 0 && (i = fa(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function Dl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function wg(e, t) {
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
  function Uc() {
    var e = Vi;
    return Vi <<= 1, (Vi & 62914560) === 0 && (Vi = 4194304), e;
  }
  function Du(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ul(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function xg(e, t, n, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var h = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var z = 31 - Ut(n), B = 1 << z;
      h[z] = 0, E[z] = -1;
      var O = _[z];
      if (O !== null)
        for (_[z] = null, z = 0; z < O.length; z++) {
          var j = O[z];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~B;
    }
    a !== 0 && jc(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function jc(e, t, n) {
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
  function ju(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Lc() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : w0(e.type));
  }
  function Hc(e, t) {
    var n = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = n;
    }
  }
  var Bn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Bn, Et = "__reactProps$" + Bn, za = "__reactContainer$" + Bn, Mu = "__reactEvents$" + Bn, Rg = "__reactListeners$" + Bn, Tg = "__reactHandles$" + Bn, Bc = "__reactResources$" + Bn, jl = "__reactMarker$" + Bn;
  function zu(e) {
    delete e[ct], delete e[Et], delete e[Mu], delete e[Rg], delete e[Tg];
  }
  function La(e) {
    var t = e[ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[za] || n[ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = r0(e); e !== null; ) {
            if (n = e[ct]) return n;
            e = r0(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ha(e) {
    if (e = e[ct] || e[za]) {
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
  function Ba(e) {
    var t = e[Bc];
    return t || (t = e[Bc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rt(e) {
    e[jl] = !0;
  }
  var qc = /* @__PURE__ */ new Set(), kc = {};
  function da(e, t) {
    qa(e, t), qa(e + "Capture", t);
  }
  function qa(e, t) {
    for (kc[e] = t, e = 0; e < t.length; e++)
      qc.add(t[e]);
  }
  var Ag = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gc = {}, Yc = {};
  function Cg(e) {
    return bt.call(Yc, e) ? !0 : bt.call(Gc, e) ? !1 : Ag.test(e) ? Yc[e] = !0 : (Gc[e] = !0, !1);
  }
  function Qi(e, t, n) {
    if (Cg(t))
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
  function Zi(e, t, n) {
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
  function dn(e, t, n, a) {
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
  function Gt(e) {
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
  function Xc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ng(e, t, n) {
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
  function Lu(e) {
    if (!e._valueTracker) {
      var t = Xc(e) ? "checked" : "value";
      e._valueTracker = Ng(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Vc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Xc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ji(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _g = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      _g,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hu(e, t, n, a, i, u, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Gt(t)) : e.value !== "" + Gt(t) && (e.value = "" + Gt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Bu(e, f, Gt(t)) : n != null ? Bu(e, f, Gt(n)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + Gt(h) : e.removeAttribute("name");
  }
  function Kc(e, t, n, a, i, u, f, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Lu(e);
        return;
      }
      n = n != null ? "" + Gt(n) : "", t = t != null ? "" + Gt(t) : n, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Lu(e);
  }
  function Bu(e, t, n) {
    t === "number" && Ji(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function ka(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qc(e, t, n) {
    if (t != null && (t = "" + Gt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Gt(n) : "";
  }
  function Zc(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (X(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Gt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Lu(e);
  }
  function Ga(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Og = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Jc(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Og.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function $c(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && Jc(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Jc(e, u, t[u]);
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
  var Dg = /* @__PURE__ */ new Map([
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
  ]), Ug = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $i(e) {
    return Ug.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function mn() {
  }
  var ku = null;
  function Gu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, Xa = null;
  function Fc(e) {
    var t = Ha(e);
    if (t && (e = t.stateNode)) {
      var n = e[Et] || null;
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
                var i = a[Et] || null;
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
              a = n[t], a.form === e.form && Vc(a);
          }
          break e;
        case "textarea":
          Qc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ka(e, !!n.multiple, t, !1);
      }
    }
  }
  var Yu = !1;
  function Wc(e, t, n) {
    if (Yu) return e(t, n);
    Yu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Yu = !1, (Ya !== null || Xa !== null) && (Lr(), Ya && (t = Ya, e = Xa, Xa = Ya = null, Fc(t), e)))
        for (t = 0; t < e.length; t++) Fc(e[t]);
    }
  }
  function zl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Et] || null;
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
  var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (hn)
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
  var qn = null, Vu = null, Fi = null;
  function Ic() {
    if (Fi) return Fi;
    var e, t = Vu, n = t.length, a, i = "value" in qn ? qn.value : qn.textContent, u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var f = n - e;
    for (a = 1; a <= f && t[n - a] === i[u - a]; a++) ;
    return Fi = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Wi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ii() {
    return !0;
  }
  function Pc() {
    return !1;
  }
  function St(e) {
    function t(n, a, i, u, f) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ii : Pc, this.isPropagationStopped = Pc, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ii);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ii);
      },
      persist: function() {
      },
      isPersistent: Ii
    }), t;
  }
  var ma = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pi = St(ma), Hl = C({}, ma, { view: 0, detail: 0 }), jg = St(Hl), Ku, Qu, Bl, er = C({}, Hl, {
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
      return "movementX" in e ? e.movementX : (e !== Bl && (Bl && e.type === "mousemove" ? (Ku = e.screenX - Bl.screenX, Qu = e.screenY - Bl.screenY) : Qu = Ku = 0, Bl = e), Ku);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Qu;
    }
  }), ef = St(er), Mg = C({}, er, { dataTransfer: 0 }), zg = St(Mg), Lg = C({}, Hl, { relatedTarget: 0 }), Zu = St(Lg), Hg = C({}, ma, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bg = St(Hg), qg = C({}, ma, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), kg = St(qg), Gg = C({}, ma, { data: 0 }), tf = St(Gg), Yg = {
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
  }, Xg = {
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
  }, Vg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Kg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vg[e]) ? !!t[e] : !1;
  }
  function Ju() {
    return Kg;
  }
  var Qg = C({}, Hl, {
    key: function(e) {
      if (e.key) {
        var t = Yg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Wi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xg[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? Wi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Zg = St(Qg), Jg = C({}, er, {
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
  }), nf = St(Jg), $g = C({}, Hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  }), Fg = St($g), Wg = C({}, ma, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ig = St(Wg), Pg = C({}, er, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ey = St(Pg), ty = C({}, ma, {
    newState: 0,
    oldState: 0
  }), ny = St(ty), ay = [9, 13, 27, 32], $u = hn && "CompositionEvent" in window, ql = null;
  hn && "documentMode" in document && (ql = document.documentMode);
  var ly = hn && "TextEvent" in window && !ql, af = hn && (!$u || ql && 8 < ql && 11 >= ql), lf = " ", rf = !1;
  function uf(e, t) {
    switch (e) {
      case "keyup":
        return ay.indexOf(t.keyCode) !== -1;
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
  function sf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Va = !1;
  function iy(e, t) {
    switch (e) {
      case "compositionend":
        return sf(t);
      case "keypress":
        return t.which !== 32 ? null : (rf = !0, lf);
      case "textInput":
        return e = t.data, e === lf && rf ? null : e;
      default:
        return null;
    }
  }
  function ry(e, t) {
    if (Va)
      return e === "compositionend" || !$u && uf(e, t) ? (e = Ic(), Fi = Vu = qn = null, Va = !1, e) : null;
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
        return af && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var uy = {
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
  function of(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uy[e.type] : t === "textarea";
  }
  function cf(e, t, n, a) {
    Ya ? Xa ? Xa.push(a) : Xa = [a] : Ya = a, t = Xr(t, "onChange"), 0 < t.length && (n = new Pi(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var kl = null, Gl = null;
  function sy(e) {
    Qm(e, 0);
  }
  function tr(e) {
    var t = Ml(e);
    if (Vc(t)) return e;
  }
  function ff(e, t) {
    if (e === "change") return t;
  }
  var df = !1;
  if (hn) {
    var Fu;
    if (hn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var mf = document.createElement("div");
        mf.setAttribute("oninput", "return;"), Wu = typeof mf.oninput == "function";
      }
      Fu = Wu;
    } else Fu = !1;
    df = Fu && (!document.documentMode || 9 < document.documentMode);
  }
  function hf() {
    kl && (kl.detachEvent("onpropertychange", gf), Gl = kl = null);
  }
  function gf(e) {
    if (e.propertyName === "value" && tr(Gl)) {
      var t = [];
      cf(
        t,
        Gl,
        e,
        Gu(e)
      ), Wc(sy, t);
    }
  }
  function oy(e, t, n) {
    e === "focusin" ? (hf(), kl = t, Gl = n, kl.attachEvent("onpropertychange", gf)) : e === "focusout" && hf();
  }
  function cy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tr(Gl);
  }
  function fy(e, t) {
    if (e === "click") return tr(t);
  }
  function dy(e, t) {
    if (e === "input" || e === "change")
      return tr(t);
  }
  function my(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var jt = typeof Object.is == "function" ? Object.is : my;
  function Yl(e, t) {
    if (jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!bt.call(t, i) || !jt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function yf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pf(e, t) {
    var n = yf(e);
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
      n = yf(n);
    }
  }
  function vf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ji(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ji(e.document);
    }
    return t;
  }
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var hy = hn && "documentMode" in document && 11 >= document.documentMode, Ka = null, Pu = null, Xl = null, es = !1;
  function Ef(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    es || Ka == null || Ka !== Ji(a) || (a = Ka, "selectionStart" in a && Iu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Xl && Yl(Xl, a) || (Xl = a, a = Xr(Pu, "onSelect"), 0 < a.length && (t = new Pi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ka)));
  }
  function ha(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Qa = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionrun: ha("Transition", "TransitionRun"),
    transitionstart: ha("Transition", "TransitionStart"),
    transitioncancel: ha("Transition", "TransitionCancel"),
    transitionend: ha("Transition", "TransitionEnd")
  }, ts = {}, Sf = {};
  hn && (Sf = document.createElement("div").style, "AnimationEvent" in window || (delete Qa.animationend.animation, delete Qa.animationiteration.animation, delete Qa.animationstart.animation), "TransitionEvent" in window || delete Qa.transitionend.transition);
  function ga(e) {
    if (ts[e]) return ts[e];
    if (!Qa[e]) return e;
    var t = Qa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Sf)
        return ts[e] = t[n];
    return e;
  }
  var wf = ga("animationend"), xf = ga("animationiteration"), Rf = ga("animationstart"), gy = ga("transitionrun"), yy = ga("transitionstart"), py = ga("transitioncancel"), Tf = ga("transitionend"), Af = /* @__PURE__ */ new Map(), ns = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ns.push("scrollEnd");
  function en(e, t) {
    Af.set(e, t), da(t, [e]);
  }
  var nr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Xt = [], Za = 0, as = 0;
  function ar() {
    for (var e = Za, t = as = Za = 0; t < e; ) {
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
      u !== 0 && Cf(n, i, u);
    }
  }
  function lr(e, t, n, a) {
    Xt[Za++] = e, Xt[Za++] = t, Xt[Za++] = n, Xt[Za++] = a, as |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ls(e, t, n, a) {
    return lr(e, t, n, a), ir(e);
  }
  function ya(e, t) {
    return lr(e, null, null, t), ir(e);
  }
  function Cf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - Ut(n), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function ir(e) {
    if (50 < fi)
      throw fi = 0, ho = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ja = {};
  function vy(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, n, a) {
    return new vy(e, t, n, a);
  }
  function is(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Mt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Nf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function rr(e, t, n, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") is(e) && (f = 1);
    else if (typeof e == "string")
      f = xp(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case we:
          return e = Mt(31, n, t, i), e.elementType = we, e.lanes = u, e;
        case D:
          return pa(n.children, i, u, t);
        case G:
          f = 8, i |= 24;
          break;
        case K:
          return e = Mt(12, n, t, i | 2), e.elementType = K, e.lanes = u, e;
        case he:
          return e = Mt(13, n, t, i), e.elementType = he, e.lanes = u, e;
        case ie:
          return e = Mt(19, n, t, i), e.elementType = ie, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case F:
                f = 10;
                break e;
              case Q:
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
    return t = Mt(f, n, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function pa(e, t, n, a) {
    return e = Mt(7, e, a, t), e.lanes = n, e;
  }
  function rs(e, t, n) {
    return e = Mt(6, e, null, t), e.lanes = n, e;
  }
  function _f(e) {
    var t = Mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function us(e, t, n) {
    return t = Mt(
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
  var Of = /* @__PURE__ */ new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Of.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: se(t)
      }, Of.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: se(t)
    };
  }
  var $a = [], Fa = 0, ur = null, Vl = 0, Kt = [], Qt = 0, kn = null, un = 1, sn = "";
  function yn(e, t) {
    $a[Fa++] = Vl, $a[Fa++] = ur, ur = e, Vl = t;
  }
  function Df(e, t, n) {
    Kt[Qt++] = un, Kt[Qt++] = sn, Kt[Qt++] = kn, kn = e;
    var a = un;
    e = sn;
    var i = 32 - Ut(a) - 1;
    a &= ~(1 << i), n += 1;
    var u = 32 - Ut(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, un = 1 << 32 - Ut(t) + i | n << i | a, sn = u + e;
    } else
      un = 1 << u | n << i | a, sn = e;
  }
  function ss(e) {
    e.return !== null && (yn(e, 1), Df(e, 1, 0));
  }
  function os(e) {
    for (; e === ur; )
      ur = $a[--Fa], $a[Fa] = null, Vl = $a[--Fa], $a[Fa] = null;
    for (; e === kn; )
      kn = Kt[--Qt], Kt[Qt] = null, sn = Kt[--Qt], Kt[Qt] = null, un = Kt[--Qt], Kt[Qt] = null;
  }
  function Uf(e, t) {
    Kt[Qt++] = un, Kt[Qt++] = sn, Kt[Qt++] = kn, un = t.id, sn = t.overflow, kn = e;
  }
  var ft = null, qe = null, Se = !1, Gn = null, Zt = !1, cs = Error(c(519));
  function Yn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Kl(Vt(t, e)), cs;
  }
  function jf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[ct] = e, t[Et] = a, n) {
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
        for (n = 0; n < mi.length; n++)
          pe(mi[n], t);
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
        pe("invalid", t), Kc(
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
        pe("invalid", t), Zc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Fm(t.textContent, n) ? (a.popover != null && (pe("beforetoggle", t), pe("toggle", t)), a.onScroll != null && pe("scroll", t), a.onScrollEnd != null && pe("scrollend", t), a.onClick != null && (t.onclick = mn), t = !0) : t = !1, t || Yn(e, !0);
  }
  function Mf(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
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
          ft = ft.return;
      }
  }
  function Wa(e) {
    if (e !== ft) return !1;
    if (!Se) return Mf(e), Se = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || _o(e.type, e.memoizedProps)), n = !n), n && qe && Yn(e), Mf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      qe = i0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      qe = i0(e);
    } else
      t === 27 ? (t = qe, na(e.type) ? (e = Mo, Mo = null, qe = e) : qe = t) : qe = ft ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function va() {
    qe = ft = null, Se = !1;
  }
  function fs() {
    var e = Gn;
    return e !== null && (Tt === null ? Tt = e : Tt.push.apply(
      Tt,
      e
    ), Gn = null), e;
  }
  function Kl(e) {
    Gn === null ? Gn = [e] : Gn.push(e);
  }
  var ds = S(null), ba = null, pn = null;
  function Xn(e, t, n) {
    V(ds, t._currentValue), t._currentValue = n;
  }
  function vn(e) {
    e._currentValue = ds.current, L(ds);
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
  function Ia(e, t, n, a) {
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
          jt(i.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (i === ge.current) {
        if (f = i.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(vi) : e = [vi]);
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
  function sr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!jt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ea(e) {
    ba = e, pn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function dt(e) {
    return zf(ba, e);
  }
  function or(e, t) {
    return ba === null && Ea(e), zf(e, t);
  }
  function zf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, pn === null) {
      if (e === null) throw Error(c(308));
      pn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else pn = pn.next = t;
    return n;
  }
  var by = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ey = r.unstable_scheduleCallback, Sy = r.unstable_NormalPriority, Pe = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gs() {
    return {
      controller: new by(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ql(e) {
    e.refCount--, e.refCount === 0 && Ey(Sy, function() {
      e.controller.abort();
    });
  }
  var Zl = null, ys = 0, Pa = 0, el = null;
  function wy(e, t) {
    if (Zl === null) {
      var n = Zl = [];
      ys = 0, Pa = Eo(), el = {
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
    if (--ys === 0 && Zl !== null) {
      el !== null && (el.status = "fulfilled");
      var e = Zl;
      Zl = null, Pa = 0, el = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xy(e, t) {
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
  var Hf = q.S;
  q.S = function(e, t) {
    Em = Ot(), typeof t == "object" && t !== null && typeof t.then == "function" && wy(e, t), Hf !== null && Hf(e, t);
  };
  var Sa = S(null);
  function ps() {
    var e = Sa.current;
    return e !== null ? e : ze.pooledCache;
  }
  function cr(e, t) {
    t === null ? V(Sa, Sa.current) : V(Sa, t.pool);
  }
  function Bf() {
    var e = ps();
    return e === null ? null : { parent: Pe._currentValue, pool: e };
  }
  var tl = Error(c(460)), vs = Error(c(474)), fr = Error(c(542)), dr = { then: function() {
  } };
  function qf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function kf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(mn, mn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Yf(e), e;
      default:
        if (typeof t.status == "string") t.then(mn, mn);
        else {
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Yf(e), e;
        }
        throw xa = t, tl;
    }
  }
  function wa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (xa = n, tl) : n;
    }
  }
  var xa = null;
  function Gf() {
    if (xa === null) throw Error(c(459));
    var e = xa;
    return xa = null, e;
  }
  function Yf(e) {
    if (e === tl || e === fr)
      throw Error(c(483));
  }
  var nl = null, Jl = 0;
  function mr(e) {
    var t = Jl;
    return Jl += 1, nl === null && (nl = []), kf(nl, e, t);
  }
  function $l(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function hr(e, t) {
    throw t.$$typeof === k ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Xf(e) {
    function t(T, w) {
      if (e) {
        var N = T.deletions;
        N === null ? (T.deletions = [w], T.flags |= 16) : N.push(w);
      }
    }
    function n(T, w) {
      if (!e) return null;
      for (; w !== null; )
        t(T, w), w = w.sibling;
      return null;
    }
    function a(T) {
      for (var w = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? w.set(T.key, T) : w.set(T.index, T), T = T.sibling;
      return w;
    }
    function i(T, w) {
      return T = gn(T, w), T.index = 0, T.sibling = null, T;
    }
    function u(T, w, N) {
      return T.index = N, e ? (N = T.alternate, N !== null ? (N = N.index, N < w ? (T.flags |= 67108866, w) : N) : (T.flags |= 67108866, w)) : (T.flags |= 1048576, w);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, w, N, H) {
      return w === null || w.tag !== 6 ? (w = rs(N, T.mode, H), w.return = T, w) : (w = i(w, N), w.return = T, w);
    }
    function E(T, w, N, H) {
      var I = N.type;
      return I === D ? z(
        T,
        w,
        N.props.children,
        H,
        N.key
      ) : w !== null && (w.elementType === I || typeof I == "object" && I !== null && I.$$typeof === te && wa(I) === w.type) ? (w = i(w, N.props), $l(w, N), w.return = T, w) : (w = rr(
        N.type,
        N.key,
        N.props,
        null,
        T.mode,
        H
      ), $l(w, N), w.return = T, w);
    }
    function _(T, w, N, H) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = us(N, T.mode, H), w.return = T, w) : (w = i(w, N.children || []), w.return = T, w);
    }
    function z(T, w, N, H, I) {
      return w === null || w.tag !== 7 ? (w = pa(
        N,
        T.mode,
        H,
        I
      ), w.return = T, w) : (w = i(w, N), w.return = T, w);
    }
    function B(T, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = rs(
          "" + w,
          T.mode,
          N
        ), w.return = T, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case A:
            return N = rr(
              w.type,
              w.key,
              w.props,
              null,
              T.mode,
              N
            ), $l(N, w), N.return = T, N;
          case M:
            return w = us(
              w,
              T.mode,
              N
            ), w.return = T, w;
          case te:
            return w = wa(w), B(T, w, N);
        }
        if (X(w) || Me(w))
          return w = pa(
            w,
            T.mode,
            N,
            null
          ), w.return = T, w;
        if (typeof w.then == "function")
          return B(T, mr(w), N);
        if (w.$$typeof === F)
          return B(
            T,
            or(T, w),
            N
          );
        hr(T, w);
      }
      return null;
    }
    function O(T, w, N, H) {
      var I = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return I !== null ? null : h(T, w, "" + N, H);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            return N.key === I ? E(T, w, N, H) : null;
          case M:
            return N.key === I ? _(T, w, N, H) : null;
          case te:
            return N = wa(N), O(T, w, N, H);
        }
        if (X(N) || Me(N))
          return I !== null ? null : z(T, w, N, H, null);
        if (typeof N.then == "function")
          return O(
            T,
            w,
            mr(N),
            H
          );
        if (N.$$typeof === F)
          return O(
            T,
            w,
            or(T, N),
            H
          );
        hr(T, N);
      }
      return null;
    }
    function j(T, w, N, H, I) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return T = T.get(N) || null, h(w, T, "" + H, I);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            return T = T.get(
              H.key === null ? N : H.key
            ) || null, E(w, T, H, I);
          case M:
            return T = T.get(
              H.key === null ? N : H.key
            ) || null, _(w, T, H, I);
          case te:
            return H = wa(H), j(
              T,
              w,
              N,
              H,
              I
            );
        }
        if (X(H) || Me(H))
          return T = T.get(N) || null, z(w, T, H, I, null);
        if (typeof H.then == "function")
          return j(
            T,
            w,
            N,
            mr(H),
            I
          );
        if (H.$$typeof === F)
          return j(
            T,
            w,
            N,
            or(w, H),
            I
          );
        hr(w, H);
      }
      return null;
    }
    function J(T, w, N, H) {
      for (var I = null, Te = null, $ = w, fe = w = 0, Ee = null; $ !== null && fe < N.length; fe++) {
        $.index > fe ? (Ee = $, $ = null) : Ee = $.sibling;
        var Ae = O(
          T,
          $,
          N[fe],
          H
        );
        if (Ae === null) {
          $ === null && ($ = Ee);
          break;
        }
        e && $ && Ae.alternate === null && t(T, $), w = u(Ae, w, fe), Te === null ? I = Ae : Te.sibling = Ae, Te = Ae, $ = Ee;
      }
      if (fe === N.length)
        return n(T, $), Se && yn(T, fe), I;
      if ($ === null) {
        for (; fe < N.length; fe++)
          $ = B(T, N[fe], H), $ !== null && (w = u(
            $,
            w,
            fe
          ), Te === null ? I = $ : Te.sibling = $, Te = $);
        return Se && yn(T, fe), I;
      }
      for ($ = a($); fe < N.length; fe++)
        Ee = j(
          $,
          T,
          fe,
          N[fe],
          H
        ), Ee !== null && (e && Ee.alternate !== null && $.delete(
          Ee.key === null ? fe : Ee.key
        ), w = u(
          Ee,
          w,
          fe
        ), Te === null ? I = Ee : Te.sibling = Ee, Te = Ee);
      return e && $.forEach(function(ua) {
        return t(T, ua);
      }), Se && yn(T, fe), I;
    }
    function ee(T, w, N, H) {
      if (N == null) throw Error(c(151));
      for (var I = null, Te = null, $ = w, fe = w = 0, Ee = null, Ae = N.next(); $ !== null && !Ae.done; fe++, Ae = N.next()) {
        $.index > fe ? (Ee = $, $ = null) : Ee = $.sibling;
        var ua = O(T, $, Ae.value, H);
        if (ua === null) {
          $ === null && ($ = Ee);
          break;
        }
        e && $ && ua.alternate === null && t(T, $), w = u(ua, w, fe), Te === null ? I = ua : Te.sibling = ua, Te = ua, $ = Ee;
      }
      if (Ae.done)
        return n(T, $), Se && yn(T, fe), I;
      if ($ === null) {
        for (; !Ae.done; fe++, Ae = N.next())
          Ae = B(T, Ae.value, H), Ae !== null && (w = u(Ae, w, fe), Te === null ? I = Ae : Te.sibling = Ae, Te = Ae);
        return Se && yn(T, fe), I;
      }
      for ($ = a($); !Ae.done; fe++, Ae = N.next())
        Ae = j($, T, fe, Ae.value, H), Ae !== null && (e && Ae.alternate !== null && $.delete(Ae.key === null ? fe : Ae.key), w = u(Ae, w, fe), Te === null ? I = Ae : Te.sibling = Ae, Te = Ae);
      return e && $.forEach(function(Mp) {
        return t(T, Mp);
      }), Se && yn(T, fe), I;
    }
    function je(T, w, N, H) {
      if (typeof N == "object" && N !== null && N.type === D && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            e: {
              for (var I = N.key; w !== null; ) {
                if (w.key === I) {
                  if (I = N.type, I === D) {
                    if (w.tag === 7) {
                      n(
                        T,
                        w.sibling
                      ), H = i(
                        w,
                        N.props.children
                      ), H.return = T, T = H;
                      break e;
                    }
                  } else if (w.elementType === I || typeof I == "object" && I !== null && I.$$typeof === te && wa(I) === w.type) {
                    n(
                      T,
                      w.sibling
                    ), H = i(w, N.props), $l(H, N), H.return = T, T = H;
                    break e;
                  }
                  n(T, w);
                  break;
                } else t(T, w);
                w = w.sibling;
              }
              N.type === D ? (H = pa(
                N.props.children,
                T.mode,
                H,
                N.key
              ), H.return = T, T = H) : (H = rr(
                N.type,
                N.key,
                N.props,
                null,
                T.mode,
                H
              ), $l(H, N), H.return = T, T = H);
            }
            return f(T);
          case M:
            e: {
              for (I = N.key; w !== null; ) {
                if (w.key === I)
                  if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                    n(
                      T,
                      w.sibling
                    ), H = i(w, N.children || []), H.return = T, T = H;
                    break e;
                  } else {
                    n(T, w);
                    break;
                  }
                else t(T, w);
                w = w.sibling;
              }
              H = us(N, T.mode, H), H.return = T, T = H;
            }
            return f(T);
          case te:
            return N = wa(N), je(
              T,
              w,
              N,
              H
            );
        }
        if (X(N))
          return J(
            T,
            w,
            N,
            H
          );
        if (Me(N)) {
          if (I = Me(N), typeof I != "function") throw Error(c(150));
          return N = I.call(N), ee(
            T,
            w,
            N,
            H
          );
        }
        if (typeof N.then == "function")
          return je(
            T,
            w,
            mr(N),
            H
          );
        if (N.$$typeof === F)
          return je(
            T,
            w,
            or(T, N),
            H
          );
        hr(T, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, w !== null && w.tag === 6 ? (n(T, w.sibling), H = i(w, N), H.return = T, T = H) : (n(T, w), H = rs(N, T.mode, H), H.return = T, T = H), f(T)) : n(T, w);
    }
    return function(T, w, N, H) {
      try {
        Jl = 0;
        var I = je(
          T,
          w,
          N,
          H
        );
        return nl = null, I;
      } catch ($) {
        if ($ === tl || $ === fr) throw $;
        var Te = Mt(29, $, null, T.mode);
        return Te.lanes = H, Te.return = T, Te;
      }
    };
  }
  var Ra = Xf(!0), Vf = Xf(!1), Vn = !1;
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
  function Kn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ce & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = ir(e), Cf(e, null, n), t;
    }
    return lr(e, a, t, n), ir(e);
  }
  function Fl(e, t, n) {
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
  function Wl() {
    if (ws) {
      var e = el;
      if (e !== null) throw e;
    }
  }
  function Il(e, t, n, a) {
    ws = !1;
    var i = e.updateQueue;
    Vn = !1;
    var u = i.firstBaseUpdate, f = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var E = h, _ = E.next;
      E.next = null, f === null ? u = _ : f.next = _, f = E;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== f && (h === null ? z.firstBaseUpdate = _ : h.next = _, z.lastBaseUpdate = E));
    }
    if (u !== null) {
      var B = i.baseState;
      f = 0, z = _ = E = null, h = u;
      do {
        var O = h.lane & -536870913, j = O !== h.lane;
        if (j ? (be & O) === O : (a & O) === O) {
          O !== 0 && O === Pa && (ws = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ee = h;
            O = t;
            var je = n;
            switch (ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  B = J.call(je, B, O);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, O = typeof J == "function" ? J.call(je, B, O) : J, O == null) break e;
                B = C({}, B, O);
                break e;
              case 2:
                Vn = !0;
            }
          }
          O = h.callback, O !== null && (e.flags |= 64, j && (e.flags |= 8192), j = i.callbacks, j === null ? i.callbacks = [O] : j.push(O));
        } else
          j = {
            lane: O,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, z === null ? (_ = z = j, E = B) : z = z.next = j, f |= O;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          j = h, h = j.next, j.next = null, i.lastBaseUpdate = j, i.shared.pending = null;
        }
      } while (!0);
      z === null && (E = B), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = z, u === null && (i.shared.lanes = 0), Wn |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Kf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Qf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Kf(n[e], t);
  }
  var al = S(null), gr = S(0);
  function Zf(e, t) {
    e = Cn, V(gr, e), V(al, t), Cn = e | t.baseLanes;
  }
  function xs() {
    V(gr, Cn), V(al, al.current);
  }
  function Rs() {
    Cn = gr.current, L(al), L(gr);
  }
  var zt = S(null), Jt = null;
  function Zn(e) {
    var t = e.alternate;
    V(Fe, Fe.current & 1), V(zt, e), Jt === null && (t === null || al.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function Ts(e) {
    V(Fe, Fe.current), V(zt, e), Jt === null && (Jt = e);
  }
  function Jf(e) {
    e.tag === 22 ? (V(Fe, Fe.current), V(zt, e), Jt === null && (Jt = e)) : Jn();
  }
  function Jn() {
    V(Fe, Fe.current), V(zt, zt.current);
  }
  function Lt(e) {
    L(zt), Jt === e && (Jt = null), L(Fe);
  }
  var Fe = S(0);
  function yr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Uo(n) || jo(n)))
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
  var bn = 0, oe = null, De = null, et = null, pr = !1, ll = !1, Ta = !1, vr = 0, Pl = 0, il = null, Ry = 0;
  function Qe() {
    throw Error(c(321));
  }
  function As(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!jt(e[n], t[n])) return !1;
    return !0;
  }
  function Cs(e, t, n, a, i, u) {
    return bn = u, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? Dd : Ys, Ta = !1, u = n(a, i), Ta = !1, ll && (u = Ff(
      t,
      n,
      a,
      i
    )), $f(e), u;
  }
  function $f(e) {
    q.H = ni;
    var t = De !== null && De.next !== null;
    if (bn = 0, et = De = oe = null, pr = !1, Pl = 0, il = null, t) throw Error(c(300));
    e === null || tt || (e = e.dependencies, e !== null && sr(e) && (tt = !0));
  }
  function Ff(e, t, n, a) {
    oe = e;
    var i = 0;
    do {
      if (ll && (il = null), Pl = 0, ll = !1, 25 <= i) throw Error(c(301));
      if (i += 1, et = De = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      q.H = Ud, u = t(n, a);
    } while (ll);
    return u;
  }
  function Ty() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ei(t) : t, e = e.useState()[0], (De !== null ? De.memoizedState : null) !== e && (oe.flags |= 1024), t;
  }
  function Ns() {
    var e = vr !== 0;
    return vr = 0, e;
  }
  function _s(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Os(e) {
    if (pr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      pr = !1;
    }
    bn = 0, et = De = oe = null, ll = !1, Pl = vr = 0, il = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? oe.memoizedState = et = e : et = et.next = e, et;
  }
  function We() {
    if (De === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = et === null ? oe.memoizedState : et.next;
    if (t !== null)
      et = t, De = e;
    else {
      if (e === null)
        throw oe.alternate === null ? Error(c(467)) : Error(c(310));
      De = e, e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null
      }, et === null ? oe.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function br() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ei(e) {
    var t = Pl;
    return Pl += 1, il === null && (il = []), e = kf(il, e, t), t = oe, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? Dd : Ys), e;
  }
  function Er(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ei(e);
      if (e.$$typeof === F) return dt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ds(e) {
    var t = null, n = oe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = oe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = br(), oe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Le;
    return t.index++, n;
  }
  function En(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Sr(e) {
    var t = We();
    return Us(t, De, e);
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
      var h = f = null, E = null, _ = t, z = !1;
      do {
        var B = _.lane & -536870913;
        if (B !== _.lane ? (be & B) === B : (bn & B) === B) {
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
            }), B === Pa && (z = !0);
          else if ((bn & O) === O) {
            _ = _.next, O === Pa && (z = !0);
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
            }, E === null ? (h = E = B, f = u) : E = E.next = B, oe.lanes |= O, Wn |= O;
          B = _.action, Ta && n(u, B), u = _.hasEagerState ? _.eagerState : n(u, B);
        } else
          O = {
            lane: B,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (h = E = O, f = u) : E = E.next = O, oe.lanes |= B, Wn |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = h, !jt(u, e.memoizedState) && (tt = !0, z && (n = el, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = f, e.baseQueue = E, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function js(e) {
    var t = We(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = i = i.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== i);
      jt(u, t.memoizedState) || (tt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Wf(e, t, n) {
    var a = oe, i = We(), u = Se;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var f = !jt(
      (De || i).memoizedState,
      n
    );
    if (f && (i.memoizedState = n, tt = !0), i = i.queue, Ls(ed.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || et !== null && et.memoizedState.tag & 1) {
      if (a.flags |= 2048, rl(
        9,
        { destroy: void 0 },
        Pf.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), ze === null) throw Error(c(349));
      u || (bn & 127) !== 0 || If(a, t, n);
    }
    return n;
  }
  function If(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = br(), oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Pf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, td(t) && nd(e);
  }
  function ed(e, t, n) {
    return n(function() {
      td(t) && nd(e);
    });
  }
  function td(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !jt(e, n);
    } catch {
      return !0;
    }
  }
  function nd(e) {
    var t = ya(e, 2);
    t !== null && At(t, e, 2);
  }
  function Ms(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ta) {
        Hn(!0);
        try {
          n();
        } finally {
          Hn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: En,
      lastRenderedState: e
    }, t;
  }
  function ad(e, t, n, a) {
    return e.baseState = n, Us(
      e,
      De,
      typeof a == "function" ? a : En
    );
  }
  function Ay(e, t, n, a, i) {
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
      q.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, ld(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function ld(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = q.T, f = {};
      q.T = f;
      try {
        var h = n(i, a), E = q.S;
        E !== null && E(f, h), id(e, t, h);
      } catch (_) {
        zs(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), q.T = u;
      }
    } else
      try {
        u = n(i, a), id(e, t, u);
      } catch (_) {
        zs(e, t, _);
      }
  }
  function id(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        rd(e, t, a);
      },
      function(a) {
        return zs(e, t, a);
      }
    ) : rd(e, t, n);
  }
  function rd(e, t, n) {
    t.status = "fulfilled", t.value = n, ud(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ld(e, n)));
  }
  function zs(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, ud(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function ud(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function sd(e, t) {
    return t;
  }
  function od(e, t) {
    if (Se) {
      var n = ze.formState;
      if (n !== null) {
        e: {
          var a = oe;
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
            Yn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = vt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sd,
      lastRenderedState: t
    }, n.queue = a, n = Nd.bind(
      null,
      oe,
      a
    ), a.dispatch = n, a = Ms(!1), u = Gs.bind(
      null,
      oe,
      !1,
      a.queue
    ), a = vt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = Ay.bind(
      null,
      oe,
      i,
      u,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function cd(e) {
    var t = We();
    return fd(t, De, e);
  }
  function fd(e, t, n) {
    if (t = Us(
      e,
      t,
      sd
    )[0], e = Sr(En)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ei(t);
      } catch (f) {
        throw f === tl ? fr : f;
      }
    else a = t;
    t = We();
    var i = t.queue, u = i.dispatch;
    return n !== t.memoizedState && (oe.flags |= 2048, rl(
      9,
      { destroy: void 0 },
      Cy.bind(null, i, n),
      null
    )), [a, u, e];
  }
  function Cy(e, t) {
    e.action = t;
  }
  function dd(e) {
    var t = We(), n = De;
    if (n !== null)
      return fd(t, n, e);
    We(), t = t.memoizedState, n = We();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function rl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = oe.updateQueue, t === null && (t = br(), oe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function md() {
    return We().memoizedState;
  }
  function wr(e, t, n, a) {
    var i = vt();
    oe.flags |= e, i.memoizedState = rl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function xr(e, t, n, a) {
    var i = We();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    De !== null && a !== null && As(a, De.memoizedState.deps) ? i.memoizedState = rl(t, u, n, a) : (oe.flags |= e, i.memoizedState = rl(
      1 | t,
      u,
      n,
      a
    ));
  }
  function hd(e, t) {
    wr(8390656, 8, e, t);
  }
  function Ls(e, t) {
    xr(2048, 8, e, t);
  }
  function Ny(e) {
    oe.flags |= 4;
    var t = oe.updateQueue;
    if (t === null)
      t = br(), oe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function gd(e) {
    var t = We().memoizedState;
    return Ny({ ref: t, nextImpl: e }), function() {
      if ((Ce & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function yd(e, t) {
    return xr(4, 2, e, t);
  }
  function pd(e, t) {
    return xr(4, 4, e, t);
  }
  function vd(e, t) {
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
  function bd(e, t, n) {
    n = n != null ? n.concat([e]) : null, xr(4, 4, vd.bind(null, t, e), n);
  }
  function Hs() {
  }
  function Ed(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && As(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Sd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && As(t, a[1]))
      return a[0];
    if (a = e(), Ta) {
      Hn(!0);
      try {
        e();
      } finally {
        Hn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Bs(e, t, n) {
    return n === void 0 || (bn & 1073741824) !== 0 && (be & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = wm(), oe.lanes |= e, Wn |= e, n);
  }
  function wd(e, t, n, a) {
    return jt(n, t) ? n : al.current !== null ? (e = Bs(e, n, a), jt(e, t) || (tt = !0), e) : (bn & 42) === 0 || (bn & 1073741824) !== 0 && (be & 261930) === 0 ? (tt = !0, e.memoizedState = n) : (e = wm(), oe.lanes |= e, Wn |= e, t);
  }
  function xd(e, t, n, a, i) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var f = q.T, h = {};
    q.T = h, Gs(e, !1, t, n);
    try {
      var E = i(), _ = q.S;
      if (_ !== null && _(h, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var z = xy(
          E,
          a
        );
        ti(
          e,
          t,
          z,
          qt(e)
        );
      } else
        ti(
          e,
          t,
          a,
          qt(e)
        );
    } catch (B) {
      ti(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        qt()
      );
    } finally {
      Y.p = u, f !== null && h.types !== null && (f.types = h.types), q.T = f;
    }
  }
  function _y() {
  }
  function qs(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Rd(e).queue;
    xd(
      e,
      i,
      t,
      de,
      n === null ? _y : function() {
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
        lastRenderedReducer: En,
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
        lastRenderedReducer: En,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Td(e) {
    var t = Rd(e);
    t.next === null && (t = e.alternate.memoizedState), ti(
      e,
      t.next.queue,
      {},
      qt()
    );
  }
  function ks() {
    return dt(vi);
  }
  function Ad() {
    return We().memoizedState;
  }
  function Cd() {
    return We().memoizedState;
  }
  function Oy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = qt();
          e = Kn(n);
          var a = Qn(t, e, n);
          a !== null && (At(a, t, n), Fl(a, t, n)), t = { cache: gs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Dy(e, t, n) {
    var a = qt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rr(e) ? _d(t, n) : (n = ls(e, t, n, a), n !== null && (At(n, e, a), Od(n, t, a)));
  }
  function Nd(e, t, n) {
    var a = qt();
    ti(e, t, n, a);
  }
  function ti(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Rr(e)) _d(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, h = u(f, n);
          if (i.hasEagerState = !0, i.eagerState = h, jt(h, f))
            return lr(e, t, i, 0), ze === null && ar(), !1;
        } catch {
        }
      if (n = ls(e, t, i, a), n !== null)
        return At(n, e, a), Od(n, t, a), !0;
    }
    return !1;
  }
  function Gs(e, t, n, a) {
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
      ), t !== null && At(t, e, 2);
  }
  function Rr(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe;
  }
  function _d(e, t) {
    ll = pr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Od(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Mc(e, n);
    }
  }
  var ni = {
    readContext: dt,
    use: Er,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useLayoutEffect: Qe,
    useInsertionEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    useHostTransitionStatus: Qe,
    useFormState: Qe,
    useActionState: Qe,
    useOptimistic: Qe,
    useMemoCache: Qe,
    useCacheRefresh: Qe
  };
  ni.useEffectEvent = Qe;
  var Dd = {
    readContext: dt,
    use: Er,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: dt,
    useEffect: hd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, wr(
        4194308,
        4,
        vd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return wr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      wr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = vt();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ta) {
        Hn(!0);
        try {
          e();
        } finally {
          Hn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = vt();
      if (n !== void 0) {
        var i = n(t);
        if (Ta) {
          Hn(!0);
          try {
            n(t);
          } finally {
            Hn(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = Dy.bind(
        null,
        oe,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = vt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ms(e);
      var t = e.queue, n = Nd.bind(null, oe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Hs,
    useDeferredValue: function(e, t) {
      var n = vt();
      return Bs(n, e, t);
    },
    useTransition: function() {
      var e = Ms(!1);
      return e = xd.bind(
        null,
        oe,
        e.queue,
        !0,
        !1
      ), vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = oe, i = vt();
      if (Se) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), ze === null)
          throw Error(c(349));
        (be & 127) !== 0 || If(a, t, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return i.queue = u, hd(ed.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, rl(
        9,
        { destroy: void 0 },
        Pf.bind(
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
      var e = vt(), t = ze.identifierPrefix;
      if (Se) {
        var n = sn, a = un;
        n = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = vr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ry++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ks,
    useFormState: od,
    useActionState: od,
    useOptimistic: function(e) {
      var t = vt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Gs.bind(
        null,
        oe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ds,
    useCacheRefresh: function() {
      return vt().memoizedState = Oy.bind(
        null,
        oe
      );
    },
    useEffectEvent: function(e) {
      var t = vt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ce & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Ys = {
    readContext: dt,
    use: Er,
    useCallback: Ed,
    useContext: dt,
    useEffect: Ls,
    useImperativeHandle: bd,
    useInsertionEffect: yd,
    useLayoutEffect: pd,
    useMemo: Sd,
    useReducer: Sr,
    useRef: md,
    useState: function() {
      return Sr(En);
    },
    useDebugValue: Hs,
    useDeferredValue: function(e, t) {
      var n = We();
      return wd(
        n,
        De.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Sr(En)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : ei(e),
        t
      ];
    },
    useSyncExternalStore: Wf,
    useId: Ad,
    useHostTransitionStatus: ks,
    useFormState: cd,
    useActionState: cd,
    useOptimistic: function(e, t) {
      var n = We();
      return ad(n, De, e, t);
    },
    useMemoCache: Ds,
    useCacheRefresh: Cd
  };
  Ys.useEffectEvent = gd;
  var Ud = {
    readContext: dt,
    use: Er,
    useCallback: Ed,
    useContext: dt,
    useEffect: Ls,
    useImperativeHandle: bd,
    useInsertionEffect: yd,
    useLayoutEffect: pd,
    useMemo: Sd,
    useReducer: js,
    useRef: md,
    useState: function() {
      return js(En);
    },
    useDebugValue: Hs,
    useDeferredValue: function(e, t) {
      var n = We();
      return De === null ? Bs(n, e, t) : wd(
        n,
        De.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = js(En)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : ei(e),
        t
      ];
    },
    useSyncExternalStore: Wf,
    useId: Ad,
    useHostTransitionStatus: ks,
    useFormState: dd,
    useActionState: dd,
    useOptimistic: function(e, t) {
      var n = We();
      return De !== null ? ad(n, De, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ds,
    useCacheRefresh: Cd
  };
  Ud.useEffectEvent = gd;
  function Xs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Vs = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Kn(a);
      i.payload = t, n != null && (i.callback = n), t = Qn(e, i, a), t !== null && (At(t, e, a), Fl(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Kn(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qn(e, i, a), t !== null && (At(t, e, a), Fl(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = qt(), a = Kn(n);
      a.tag = 2, t != null && (a.callback = t), t = Qn(e, a, n), t !== null && (At(t, e, n), Fl(t, e, n));
    }
  };
  function jd(e, t, n, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Yl(n, a) || !Yl(i, u) : !0;
  }
  function Md(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
  }
  function Aa(e, t) {
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
    nr(e);
  }
  function Ld(e) {
    console.error(e);
  }
  function Hd(e) {
    nr(e);
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
  function Bd(e, t, n) {
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
    return n = Kn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Tr(e, t);
    }, n;
  }
  function qd(e) {
    return e = Kn(e), e.tag = 3, e;
  }
  function kd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Bd(t, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Bd(t, n, a), typeof i != "function" && (In === null ? In = /* @__PURE__ */ new Set([this]) : In.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Uy(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Ia(
        t,
        n,
        i,
        !0
      ), n = zt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Jt === null ? Hr() : n.alternate === null && Ze === 0 && (Ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === dr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), po(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === dr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), po(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return po(e, a, i), Hr(), !1;
    }
    if (Se)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== cs && (e = Error(c(422), { cause: a }), Kl(Vt(e, n)))) : (a !== cs && (t = Error(c(423), {
        cause: a
      }), Kl(
        Vt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Vt(a, n), i = Ks(
        e.stateNode,
        a,
        i
      ), Ss(e, i), Ze !== 4 && (Ze = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Vt(u, n), ci === null ? ci = [u] : ci.push(u), Ze !== 4 && (Ze = 2), t === null) return !0;
    a = Vt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Ks(n.stateNode, a, e), Ss(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (In === null || !In.has(u))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = qd(i), kd(
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
  function mt(e, t, n, a) {
    t.child = e === null ? Vf(t, null, n, a) : Ra(
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
    return Ea(t), a = Cs(
      e,
      t,
      n,
      f,
      u,
      i
    ), h = Ns(), e !== null && !tt ? (_s(e, t, i), Sn(e, t, i)) : (Se && h && ss(t), t.flags |= 1, mt(e, t, a, i), t.child);
  }
  function Yd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !is(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Xd(
        e,
        t,
        u,
        a,
        i
      )) : (e = rr(
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
      if (n = n.compare, n = n !== null ? n : Yl, n(f, a) && e.ref === t.ref)
        return Sn(e, t, i);
    }
    return t.flags |= 1, e = gn(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Xd(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Yl(u, a) && e.ref === t.ref)
        if (tt = !1, t.pendingProps = a = u, eo(e, i))
          (e.flags & 131072) !== 0 && (tt = !0);
        else
          return t.lanes = e.lanes, Sn(e, t, i);
    }
    return Zs(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Vd(e, t, n, a) {
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
        return Kd(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && cr(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Zf(t, u) : xs(), Jf(t);
      else
        return a = t.lanes = 536870912, Kd(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (cr(t, u.cachePool), Zf(t, u), Jn(), t.memoizedState = null) : (e !== null && cr(t, null), xs(), Jn());
    return mt(e, t, i, n), t.child;
  }
  function ai(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Kd(e, t, n, a, i) {
    var u = ps();
    return u = u === null ? null : { parent: Pe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && cr(t, null), xs(), Jf(t), e !== null && Ia(e, t, a, !0), t.childLanes = i, null;
  }
  function Ar(e, t) {
    return t = Nr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Qd(e, t, n) {
    return Ra(t, e.child, null, n), e = Ar(t, t.pendingProps), e.flags |= 2, Lt(t), t.memoizedState = null, e;
  }
  function jy(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (a.mode === "hidden")
          return e = Ar(t, a), t.lanes = 536870912, ai(null, e);
        if (Ts(t), (e = qe) ? (e = l0(
          e,
          Zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: kn !== null ? { id: un, overflow: sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, ft = t, qe = null)) : e = null, e === null) throw Yn(t);
        return t.lanes = 536870912, null;
      }
      return Ar(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Ts(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Qd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (tt || Ia(e, t, n, !1), i = (n & e.childLanes) !== 0, tt || i) {
        if (a = ze, a !== null && (f = zc(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ya(e, f), At(a, e, f), Qs;
        Hr(), t = Qd(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, qe = $t(f.nextSibling), ft = t, Se = !0, Gn = null, Zt = !1, e !== null && Uf(t, e), t = Ar(t, a), t.flags |= 4096;
      return t;
    }
    return e = gn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Cr(e, t) {
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
    return Ea(t), n = Cs(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = Ns(), e !== null && !tt ? (_s(e, t, i), Sn(e, t, i)) : (Se && a && ss(t), t.flags |= 1, mt(e, t, n, i), t.child);
  }
  function Zd(e, t, n, a, i, u) {
    return Ea(t), t.updateQueue = null, n = Ff(
      t,
      a,
      n,
      i
    ), $f(e), a = Ns(), e !== null && !tt ? (_s(e, t, u), Sn(e, t, u)) : (Se && a && ss(t), t.flags |= 1, mt(e, t, n, u), t.child);
  }
  function Jd(e, t, n, a, i) {
    if (Ea(t), t.stateNode === null) {
      var u = Ja, f = n.contextType;
      typeof f == "object" && f !== null && (u = dt(f)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Vs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, bs(t), f = n.contextType, u.context = typeof f == "object" && f !== null ? dt(f) : Ja, u.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Xs(
        t,
        n,
        f,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Vs.enqueueReplaceState(u, u.state, null), Il(t, a, u, i), Wl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps, E = Aa(n, h);
      u.props = E;
      var _ = u.context, z = n.contextType;
      f = Ja, typeof z == "object" && z !== null && (f = dt(z));
      var B = n.getDerivedStateFromProps;
      z = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || _ !== f) && Md(
        t,
        u,
        a,
        f
      ), Vn = !1;
      var O = t.memoizedState;
      u.state = O, Il(t, a, u, i), Wl(), _ = t.memoizedState, h || O !== _ || Vn ? (typeof B == "function" && (Xs(
        t,
        n,
        B,
        a
      ), _ = t.memoizedState), (E = Vn || jd(
        t,
        n,
        E,
        a,
        O,
        _,
        f
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Es(e, t), f = t.memoizedProps, z = Aa(n, f), u.props = z, B = t.pendingProps, O = u.context, _ = n.contextType, E = Ja, typeof _ == "object" && _ !== null && (E = dt(_)), h = n.getDerivedStateFromProps, (_ = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && Md(
        t,
        u,
        a,
        E
      ), Vn = !1, O = t.memoizedState, u.state = O, Il(t, a, u, i), Wl();
      var j = t.memoizedState;
      f !== B || O !== j || Vn || e !== null && e.dependencies !== null && sr(e.dependencies) ? (typeof h == "function" && (Xs(
        t,
        n,
        h,
        a
      ), j = t.memoizedState), (z = Vn || jd(
        t,
        n,
        z,
        a,
        O,
        j,
        E
      ) || e !== null && e.dependencies !== null && sr(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, j, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        j,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = j), u.props = a, u.state = j, u.context = E, a = z) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Cr(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Ra(
      t,
      e.child,
      null,
      i
    ), t.child = Ra(
      t,
      null,
      n,
      i
    )) : mt(e, t, n, i), t.memoizedState = u.state, e = t.child) : e = Sn(
      e,
      t,
      i
    ), e;
  }
  function $d(e, t, n, a) {
    return va(), t.flags |= 256, mt(e, t, n, a), t.child;
  }
  var Js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $s(e) {
    return { baseLanes: e, cachePool: Bf() };
  }
  function Fs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Bt), e;
  }
  function Fd(e, t, n) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (i ? Zn(t) : Jn(), (e = qe) ? (e = l0(
          e,
          Zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: kn !== null ? { id: un, overflow: sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = _f(e), n.return = t, t.child = n, ft = t, qe = null)) : e = null, e === null) throw Yn(t);
        return jo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = a.children;
      return a = a.fallback, i ? (Jn(), i = t.mode, h = Nr(
        { mode: "hidden", children: h },
        i
      ), a = pa(
        a,
        i,
        n,
        null
      ), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = $s(n), a.childLanes = Fs(
        e,
        f,
        n
      ), t.memoizedState = Js, ai(null, a)) : (Zn(t), Ws(t, h));
    }
    var E = e.memoizedState;
    if (E !== null && (h = E.dehydrated, h !== null)) {
      if (u)
        t.flags & 256 ? (Zn(t), t.flags &= -257, t = Is(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Jn(), t.child = e.child, t.flags |= 128, t = null) : (Jn(), h = a.fallback, i = t.mode, a = Nr(
          { mode: "visible", children: a.children },
          i
        ), h = pa(
          h,
          i,
          n,
          null
        ), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, Ra(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = $s(n), a.childLanes = Fs(
          e,
          f,
          n
        ), t.memoizedState = Js, t = ai(null, a));
      else if (Zn(t), jo(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(c(419)), a.stack = "", a.digest = f, Kl({ value: a, source: null, stack: null }), t = Is(
          e,
          t,
          n
        );
      } else if (tt || Ia(e, t, n, !1), f = (n & e.childLanes) !== 0, tt || f) {
        if (f = ze, f !== null && (a = zc(f, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, ya(e, a), At(f, e, a), Qs;
        Uo(h) || Hr(), t = Is(
          e,
          t,
          n
        );
      } else
        Uo(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, qe = $t(
          h.nextSibling
        ), ft = t, Se = !0, Gn = null, Zt = !1, e !== null && Uf(t, e), t = Ws(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Jn(), h = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = gn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? h = gn(
      _,
      h
    ) : (h = pa(
      h,
      i,
      n,
      null
    ), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, ai(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = $s(n) : (i = h.cachePool, i !== null ? (E = Pe._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Bf(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: i
    }), a.memoizedState = h, a.childLanes = Fs(
      e,
      f,
      n
    ), t.memoizedState = Js, ai(e.child, a)) : (Zn(t), n = e.child, e = n.sibling, n = gn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ws(e, t) {
    return t = Nr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Nr(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e;
  }
  function Is(e, t, n) {
    return Ra(t, e.child, null, n), e = Ws(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Wd(e, t, n) {
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
  function Id(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Fe.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Fe, f), mt(e, t, a, n), a = Se ? Vl : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Wd(e, n, t);
        else if (e.tag === 19)
          Wd(e, n, t);
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
          e = n.alternate, e !== null && yr(e) === null && (i = n), n = n.sibling;
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
          if (e = i.alternate, e !== null && yr(e) === null) {
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
  function Sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Wn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ia(
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
      for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function eo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && sr(e)));
  }
  function My(e, t, n) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo), Xn(t, Pe, e.memoizedState.cache), va();
        break;
      case 27:
      case 5:
        kt(t);
        break;
      case 4:
        re(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ts(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Zn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Fd(e, t, n) : (Zn(t), e = Sn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Zn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Ia(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return Id(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), V(Fe, Fe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Vd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Xn(t, Pe, e.memoizedState.cache);
    }
    return Sn(e, t, n);
  }
  function Pd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        tt = !0;
      else {
        if (!eo(e, n) && (t.flags & 128) === 0)
          return tt = !1, My(
            e,
            t,
            n
          );
        tt = (e.flags & 131072) !== 0;
      }
    else
      tt = !1, Se && (t.flags & 1048576) !== 0 && Df(t, Vl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = wa(t.elementType), t.type = e, typeof e == "function")
            is(e) ? (a = Aa(e, a), t.tag = 1, t = Jd(
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
                t.tag = 14, t = Yd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Ie(e) || e, Error(c(306, t, ""));
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
        return a = t.type, i = Aa(
          a,
          t.pendingProps
        ), Jd(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (re(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, Es(e, t), Il(t, a, null, n);
          var f = t.memoizedState;
          if (a = f.cache, Xn(t, Pe, a), a !== u.cache && hs(
            t,
            [Pe],
            n,
            !0
          ), Wl(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = $d(
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
              ), Kl(i), t = $d(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, qe = $t(e.firstChild), ft = t, Se = !0, Gn = null, Zt = !0, n = Vf(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (va(), a === i) {
              t = Sn(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Cr(e, t), e === null ? (n = c0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Se || (n = t.type, e = t.pendingProps, a = Vr(
          ne.current
        ).createElement(n), a[ct] = t, a[Et] = e, ht(a, n, e), rt(a), t.stateNode = a) : t.memoizedState = c0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return kt(t), e === null && Se && (a = t.stateNode = u0(
          t.type,
          t.pendingProps,
          ne.current
        ), ft = t, Zt = !0, i = qe, na(t.type) ? (Mo = i, qe = $t(a.firstChild)) : qe = i), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Cr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((i = a = qe) && (a = cp(
          a,
          t.type,
          t.pendingProps,
          Zt
        ), a !== null ? (t.stateNode = a, ft = t, qe = $t(a.firstChild), Zt = !1, i = !0) : i = !1), i || Yn(t)), kt(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, _o(i, u) ? a = null : f !== null && _o(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = Cs(
          e,
          t,
          Ty,
          null,
          null,
          n
        ), vi._currentValue = i), Cr(e, t), mt(e, t, a, n), t.child;
      case 6:
        return e === null && Se && ((e = n = qe) && (n = fp(
          n,
          t.pendingProps,
          Zt
        ), n !== null ? (t.stateNode = n, ft = t, qe = null, e = !0) : e = !1), e || Yn(t)), null;
      case 13:
        return Fd(e, t, n);
      case 4:
        return re(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Ra(
          t,
          null,
          a,
          n
        ) : mt(e, t, a, n), t.child;
      case 11:
        return Gd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return mt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, Xn(t, t.type, a.value), mt(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, Ea(t), i = dt(i), a = a(i), t.flags |= 1, mt(e, t, a, n), t.child;
      case 14:
        return Yd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Xd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Id(e, t, n);
      case 31:
        return jy(e, t, n);
      case 22:
        return Vd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ea(t), a = dt(Pe), e === null ? (i = ps(), i === null && (i = ze, u = gs(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), t.memoizedState = { parent: a, cache: i }, bs(t), Xn(t, Pe, i)) : ((e.lanes & n) !== 0 && (Es(e, t), Il(t, null, null, n), Wl()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Xn(t, Pe, a)) : (a = u.cache, Xn(t, Pe, a), a !== i.cache && hs(
          t,
          [Pe],
          n,
          !0
        ))), mt(
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
  function wn(e) {
    e.flags |= 4;
  }
  function to(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Am()) e.flags |= 8192;
        else
          throw xa = dr, vs;
    } else e.flags &= -16777217;
  }
  function em(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !g0(t))
      if (Am()) e.flags |= 8192;
      else
        throw xa = dr, vs;
  }
  function _r(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Uc() : 536870912, e.lanes |= t, cl |= t);
  }
  function li(e, t) {
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
  function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function zy(e, t, n) {
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
        return ke(t), null;
      case 1:
        return ke(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), vn(Pe), Be(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Wa(t) ? wn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fs())), ke(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (wn(t), u !== null ? (ke(t), em(t, u)) : (ke(t), to(
          t,
          i,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (wn(t), ke(t), em(t, u)) : (ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && wn(t), ke(t), to(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (Mn(t), n = ne.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && wn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return ke(t), null;
          }
          e = Z.current, Wa(t) ? jf(t) : (e = u0(i, a, n), t.stateNode = e, wn(t));
        }
        return ke(t), null;
      case 5:
        if (Mn(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && wn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return ke(t), null;
          }
          if (u = Z.current, Wa(t))
            jf(t);
          else {
            var f = Vr(
              ne.current
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
            u[ct] = t, u[Et] = a;
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
            e: switch (ht(u, i, a), i) {
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
            a && wn(t);
          }
        }
        return ke(t), to(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && wn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = ne.current, Wa(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = ft, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[ct] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Fm(e.nodeValue, n)), e || Yn(t, !0);
          } else
            e = Vr(e).createTextNode(
              a
            ), e[ct] = t, t.stateNode = e;
        }
        return ke(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Wa(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ct] = t;
            } else
              va(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ke(t), e = !1;
          } else
            n = fs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return ke(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Wa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[ct] = t;
            } else
              va(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ke(t), i = !1;
          } else
            i = fs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
        }
        return Lt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), _r(t, t.updateQueue), ke(t), null);
      case 4:
        return Be(), e === null && Ro(t.stateNode.containerInfo), ke(t), null;
      case 10:
        return vn(t.type), ke(t), null;
      case 19:
        if (L(Fe), a = t.memoizedState, a === null) return ke(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) li(a, !1);
          else {
            if (Ze !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = yr(e), u !== null) {
                  for (t.flags |= 128, li(a, !1), e = u.updateQueue, t.updateQueue = e, _r(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Nf(n, e), n = n.sibling;
                  return V(
                    Fe,
                    Fe.current & 1 | 2
                  ), Se && yn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ot() > Mr && (t.flags |= 128, i = !0, li(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = yr(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, _r(t, e), li(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Se)
                return ke(t), null;
            } else
              2 * Ot() - a.renderingStartTime > Mr && n !== 536870912 && (t.flags |= 128, i = !0, li(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, n = Fe.current, V(
          Fe,
          i ? n & 1 | 2 : n & 1
        ), Se && yn(t, a.treeForkCount), e) : (ke(t), null);
      case 22:
      case 23:
        return Lt(t), Rs(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), n = t.updateQueue, n !== null && _r(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && L(Sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), vn(Pe), ke(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Ly(e, t) {
    switch (os(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return vn(Pe), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Lt(t), t.alternate === null)
            throw Error(c(340));
          va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Lt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(Fe), null;
      case 4:
        return Be(), null;
      case 10:
        return vn(t.type), null;
      case 22:
      case 23:
        return Lt(t), Rs(), e !== null && L(Sa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return vn(Pe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tm(e, t) {
    switch (os(t), t.tag) {
      case 3:
        vn(Pe), Be();
        break;
      case 26:
      case 27:
      case 5:
        Mn(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Lt(t);
        break;
      case 13:
        Lt(t);
        break;
      case 19:
        L(Fe);
        break;
      case 10:
        vn(t.type);
        break;
      case 22:
      case 23:
        Lt(t), Rs(), e !== null && L(Sa);
        break;
      case 24:
        vn(Pe);
    }
  }
  function ii(e, t) {
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
      Oe(t, t.return, h);
    }
  }
  function $n(e, t, n) {
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
              } catch (z) {
                Oe(
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
      Oe(t, t.return, z);
    }
  }
  function nm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Qf(t, n);
      } catch (a) {
        Oe(e, e.return, a);
      }
    }
  }
  function am(e, t, n) {
    n.props = Aa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Oe(e, t, a);
    }
  }
  function ri(e, t) {
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
      Oe(e, t, i);
    }
  }
  function on(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Oe(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Oe(e, t, i);
        }
      else n.current = null;
  }
  function lm(e) {
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
      Oe(e, e.return, i);
    }
  }
  function no(e, t, n) {
    try {
      var a = e.stateNode;
      lp(a, e.type, n, t), a[Et] = t;
    } catch (i) {
      Oe(e, e.return, i);
    }
  }
  function im(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && na(e.type) || e.tag === 4;
  }
  function ao(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || im(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && na(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mn));
    else if (a !== 4 && (a === 27 && na(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (lo(e, t, n), e = e.sibling; e !== null; )
        lo(e, t, n), e = e.sibling;
  }
  function Or(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && na(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Or(e, t, n), e = e.sibling; e !== null; )
        Or(e, t, n), e = e.sibling;
  }
  function rm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ht(t, a, n), t[ct] = e, t[Et] = n;
    } catch (u) {
      Oe(e, e.return, u);
    }
  }
  var xn = !1, nt = !1, io = !1, um = typeof WeakSet == "function" ? WeakSet : Set, ut = null;
  function Hy(e, t) {
    if (e = e.containerInfo, Co = Wr, e = bf(e), Iu(e)) {
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
            var f = 0, h = -1, E = -1, _ = 0, z = 0, B = e, O = null;
            t: for (; ; ) {
              for (var j; B !== n || i !== 0 && B.nodeType !== 3 || (h = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (E = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (j = B.firstChild) !== null; )
                O = B, B = j;
              for (; ; ) {
                if (B === e) break t;
                if (O === n && ++_ === i && (h = f), O === u && ++z === a && (E = f), (j = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = j;
            }
            n = h === -1 || E === -1 ? null : { start: h, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (No = { focusedElem: e, selectionRange: n }, Wr = !1, ut = t; ut !== null; )
      if (t = ut, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ut = e;
      else
        for (; ut !== null; ) {
          switch (t = ut, u = t.alternate, e = t.flags, t.tag) {
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
                  var J = Aa(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Oe(
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
            e.return = t.return, ut = e;
            break;
          }
          ut = t.return;
        }
  }
  function sm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Tn(e, n), a & 4 && ii(5, n);
        break;
      case 1:
        if (Tn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Oe(n, n.return, f);
            }
          else {
            var i = Aa(
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
              Oe(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && nm(n), a & 512 && ri(n, n.return);
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
            Qf(e, t);
          } catch (f) {
            Oe(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && rm(n);
      case 26:
      case 5:
        Tn(e, n), t === null && a & 4 && lm(n), a & 512 && ri(n, n.return);
        break;
      case 12:
        Tn(e, n);
        break;
      case 31:
        Tn(e, n), a & 4 && fm(e, n);
        break;
      case 13:
        Tn(e, n), a & 4 && dm(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Qy.bind(
          null,
          n
        ), dp(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || xn, !a) {
          t = t !== null && t.memoizedState !== null || nt, i = xn;
          var u = nt;
          xn = a, (nt = t) && !u ? An(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Tn(e, n), xn = i, nt = u;
        }
        break;
      case 30:
        break;
      default:
        Tn(e, n);
    }
  }
  function om(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, om(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, wt = !1;
  function Rn(e, t, n) {
    for (n = n.child; n !== null; )
      cm(e, t, n), n = n.sibling;
  }
  function cm(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Ol, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        nt || on(n, t), Rn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        nt || on(n, t);
        var a = Ye, i = wt;
        na(n.type) && (Ye = n.stateNode, wt = !1), Rn(
          e,
          t,
          n
        ), gi(n.stateNode), Ye = a, wt = i;
        break;
      case 5:
        nt || on(n, t);
      case 6:
        if (a = Ye, i = wt, Ye = null, Rn(
          e,
          t,
          n
        ), Ye = a, wt = i, Ye !== null)
          if (wt)
            try {
              (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(n.stateNode);
            } catch (u) {
              Oe(
                n,
                t,
                u
              );
            }
          else
            try {
              Ye.removeChild(n.stateNode);
            } catch (u) {
              Oe(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Ye !== null && (wt ? (e = Ye, n0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), vl(e)) : n0(Ye, n.stateNode));
        break;
      case 4:
        a = Ye, i = wt, Ye = n.stateNode.containerInfo, wt = !0, Rn(
          e,
          t,
          n
        ), Ye = a, wt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $n(2, n, t), nt || $n(4, n, t), Rn(
          e,
          t,
          n
        );
        break;
      case 1:
        nt || (on(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && am(
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
  function fm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vl(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
    }
  }
  function dm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vl(e);
      } catch (n) {
        Oe(t, t.return, n);
      }
  }
  function By(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new um()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new um()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Dr(e, t) {
    var n = By(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Zy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], u = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (na(h.type)) {
                Ye = h.stateNode, wt = !1;
                break e;
              }
              break;
            case 5:
              Ye = h.stateNode, wt = !1;
              break e;
            case 3:
            case 4:
              Ye = h.stateNode.containerInfo, wt = !0;
              break e;
          }
          h = h.return;
        }
        if (Ye === null) throw Error(c(160));
        cm(u, f, i), Ye = null, wt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        mm(t, e), t = t.sibling;
  }
  var tn = null;
  function mm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        xt(t, e), Rt(e), a & 4 && ($n(3, e, e.return), ii(3, e), $n(5, e, e.return));
        break;
      case 1:
        xt(t, e), Rt(e), a & 512 && (nt || n === null || on(n, n.return)), a & 64 && xn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = tn;
        if (xt(t, e), Rt(e), a & 512 && (nt || n === null || on(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[jl] || u[ct] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ht(u, a, n), u[ct] = e, rt(u), a = u;
                      break e;
                    case "link":
                      var f = m0(
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
                      u = i.createElement(a), ht(u, a, n), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = m0(
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
                      u = i.createElement(a), ht(u, a, n), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  u[ct] = e, rt(u), a = u;
                }
                e.stateNode = a;
              } else
                h0(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = d0(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? h0(
              i,
              e.type,
              e.stateNode
            ) : d0(
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
        xt(t, e), Rt(e), a & 512 && (nt || n === null || on(n, n.return)), n !== null && a & 4 && no(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (xt(t, e), Rt(e), a & 512 && (nt || n === null || on(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Ga(i, "");
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, no(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (io = !0);
        break;
      case 6:
        if (xt(t, e), Rt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (J) {
            Oe(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Zr = null, i = tn, tn = Kr(t.containerInfo), xt(t, e), tn = i, Rt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            vl(t.containerInfo);
          } catch (J) {
            Oe(e, e.return, J);
          }
        io && (io = !1, hm(e));
        break;
      case 4:
        a = tn, tn = Kr(
          e.stateNode.containerInfo
        ), xt(t, e), Rt(e), tn = a;
        break;
      case 12:
        xt(t, e), Rt(e);
        break;
      case 31:
        xt(t, e), Rt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Dr(e, a)));
        break;
      case 13:
        xt(t, e), Rt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (jr = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Dr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = xn, z = nt;
        if (xn = _ || i, nt = z || E, xt(t, e), nt = z, xn = _, Rt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || xn || nt || Ca(e)), n = null, t = e; ; ) {
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
                  Oe(E, E.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (J) {
                  Oe(E, E.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var j = E.stateNode;
                  i ? a0(j, !0) : a0(E.stateNode, !1);
                } catch (J) {
                  Oe(E, E.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Dr(e, n))));
        break;
      case 19:
        xt(t, e), Rt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Dr(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        xt(t, e), Rt(e);
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (im(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, u = ao(e);
            Or(e, u, i);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ga(f, ""), n.flags &= -33);
            var h = ao(e);
            Or(e, h, f);
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
      } catch (z) {
        Oe(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        hm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Tn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        sm(e, t.alternate, t), t = t.sibling;
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $n(4, t, t.return), Ca(t);
          break;
        case 1:
          on(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && am(
            t,
            t.return,
            n
          ), Ca(t);
          break;
        case 27:
          gi(t.stateNode);
        case 26:
        case 5:
          on(t, t.return), Ca(t);
          break;
        case 22:
          t.memoizedState === null && Ca(t);
          break;
        case 30:
          Ca(t);
          break;
        default:
          Ca(t);
      }
      e = e.sibling;
    }
  }
  function An(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          An(
            i,
            u,
            n
          ), ii(4, u);
          break;
        case 1:
          if (An(
            i,
            u,
            n
          ), a = u, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              Oe(a, a.return, _);
            }
          if (a = u, i = a.updateQueue, i !== null) {
            var h = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Kf(E[i], h);
            } catch (_) {
              Oe(a, a.return, _);
            }
          }
          n && f & 64 && nm(u), ri(u, u.return);
          break;
        case 27:
          rm(u);
        case 26:
        case 5:
          An(
            i,
            u,
            n
          ), n && a === null && f & 4 && lm(u), ri(u, u.return);
          break;
        case 12:
          An(
            i,
            u,
            n
          );
          break;
        case 31:
          An(
            i,
            u,
            n
          ), n && f & 4 && fm(i, u);
          break;
        case 13:
          An(
            i,
            u,
            n
          ), n && f & 4 && dm(i, u);
          break;
        case 22:
          u.memoizedState === null && An(
            i,
            u,
            n
          ), ri(u, u.return);
          break;
        case 30:
          break;
        default:
          An(
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ql(n));
  }
  function uo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ql(e));
  }
  function nn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        gm(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function gm(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nn(
          e,
          t,
          n,
          a
        ), i & 2048 && ii(9, t);
        break;
      case 1:
        nn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        nn(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ql(e)));
        break;
      case 12:
        if (i & 2048) {
          nn(
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
            Oe(t, t.return, E);
          }
        } else
          nn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        nn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        nn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? nn(
          e,
          t,
          n,
          a
        ) : ui(e, t) : u._visibility & 2 ? nn(
          e,
          t,
          n,
          a
        ) : (u._visibility |= 2, ul(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && ro(f, t);
        break;
      case 24:
        nn(
          e,
          t,
          n,
          a
        ), i & 2048 && uo(t.alternate, t);
        break;
      default:
        nn(
          e,
          t,
          n,
          a
        );
    }
  }
  function ul(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, h = n, E = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ul(
            u,
            f,
            h,
            E,
            i
          ), ii(8, f);
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          f.memoizedState !== null ? z._visibility & 2 ? ul(
            u,
            f,
            h,
            E,
            i
          ) : ui(
            u,
            f
          ) : (z._visibility |= 2, ul(
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
          ul(
            u,
            f,
            h,
            E,
            i
          ), i && _ & 2048 && uo(f.alternate, f);
          break;
        default:
          ul(
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
  function ui(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            ui(n, a), i & 2048 && ro(
              a.alternate,
              a
            );
            break;
          case 24:
            ui(n, a), i & 2048 && uo(a.alternate, a);
            break;
          default:
            ui(n, a);
        }
        t = t.sibling;
      }
  }
  var si = 8192;
  function sl(e, t, n) {
    if (e.subtreeFlags & si)
      for (e = e.child; e !== null; )
        ym(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function ym(e, t, n) {
    switch (e.tag) {
      case 26:
        sl(
          e,
          t,
          n
        ), e.flags & si && e.memoizedState !== null && Rp(
          n,
          tn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        sl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = tn;
        tn = Kr(e.stateNode.containerInfo), sl(
          e,
          t,
          n
        ), tn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = si, si = 16777216, sl(
          e,
          t,
          n
        ), si = a) : sl(
          e,
          t,
          n
        ));
        break;
      default:
        sl(
          e,
          t,
          n
        );
    }
  }
  function pm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function oi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ut = a, bm(
            a,
            e
          );
        }
      pm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        vm(e), e = e.sibling;
  }
  function vm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        oi(e), e.flags & 2048 && $n(9, e, e.return);
        break;
      case 3:
        oi(e);
        break;
      case 12:
        oi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ur(e)) : oi(e);
        break;
      default:
        oi(e);
    }
  }
  function Ur(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ut = a, bm(
            a,
            e
          );
        }
      pm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, t, t.return), Ur(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ur(t));
          break;
        default:
          Ur(t);
      }
      e = e.sibling;
    }
  }
  function bm(e, t) {
    for (; ut !== null; ) {
      var n = ut;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ql(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ut = a;
      else
        e: for (n = e; ut !== null; ) {
          a = ut;
          var i = a.sibling, u = a.return;
          if (om(a), a === n) {
            ut = null;
            break e;
          }
          if (i !== null) {
            i.return = u, ut = i;
            break e;
          }
          ut = u;
        }
    }
  }
  var qy = {
    getCacheForType: function(e) {
      var t = dt(Pe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return dt(Pe).controller.signal;
    }
  }, ky = typeof WeakMap == "function" ? WeakMap : Map, Ce = 0, ze = null, ye = null, be = 0, _e = 0, Ht = null, Fn = !1, ol = !1, so = !1, Cn = 0, Ze = 0, Wn = 0, Na = 0, oo = 0, Bt = 0, cl = 0, ci = null, Tt = null, co = !1, jr = 0, Em = 0, Mr = 1 / 0, zr = null, In = null, lt = 0, Pn = null, fl = null, Nn = 0, fo = 0, mo = null, Sm = null, fi = 0, ho = null;
  function qt() {
    return (Ce & 2) !== 0 && be !== 0 ? be & -be : q.T !== null ? Eo() : Lc();
  }
  function wm() {
    if (Bt === 0)
      if ((be & 536870912) === 0 || Se) {
        var e = Xi;
        Xi <<= 1, (Xi & 3932160) === 0 && (Xi = 262144), Bt = e;
      } else Bt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), Bt;
  }
  function At(e, t, n) {
    (e === ze && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (dl(e, 0), ea(
      e,
      be,
      Bt,
      !1
    )), Ul(e, n), ((Ce & 2) === 0 || e !== ze) && (e === ze && ((Ce & 2) === 0 && (Na |= n), Ze === 4 && ea(
      e,
      be,
      Bt,
      !1
    )), cn(e));
  }
  function xm(e, t, n) {
    if ((Ce & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Dl(e, t), i = a ? Xy(e, t) : yo(e, t, !0), u = a;
    do {
      if (i === 0) {
        ol && !a && ea(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Gy(n)) {
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
              i = ci;
              var E = h.current.memoizedState.isDehydrated;
              if (E && (dl(h, f).flags |= 256), f = yo(
                h,
                f,
                !1
              ), f !== 2) {
                if (so && !E) {
                  h.errorRecoveryDisabledLanes |= u, Na |= u, i = 4;
                  break e;
                }
                u = Tt, Tt = i, u !== null && (Tt === null ? Tt = u : Tt.push.apply(
                  Tt,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          dl(e, 0), ea(e, t, 0, !0);
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
              ea(
                a,
                t,
                Bt,
                !Fn
              );
              break e;
            case 2:
              Tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = jr + 300 - Ot(), 10 < i)) {
            if (ea(
              a,
              t,
              Bt,
              !Fn
            ), Ki(a, 0, !0) !== 0) break e;
            Nn = t, a.timeoutHandle = e0(
              Rm.bind(
                null,
                a,
                n,
                Tt,
                zr,
                co,
                t,
                Bt,
                Na,
                cl,
                Fn,
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
            Tt,
            zr,
            co,
            t,
            Bt,
            Na,
            cl,
            Fn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    cn(e);
  }
  function Rm(e, t, n, a, i, u, f, h, E, _, z, B, O, j) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, ym(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? jr - Ot() : (u & 4194048) === u ? Em - Ot() : 0;
      if (J = Tp(
        B,
        J
      ), J !== null) {
        Nn = u, e.cancelPendingCommit = J(
          Um.bind(
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
            z,
            B,
            null,
            O,
            j
          )
        ), ea(e, u, f, !_);
        return;
      }
    }
    Um(
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
  function Gy(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!jt(u(), i)) return !1;
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
  function ea(e, t, n, a) {
    t &= ~oo, t &= ~Na, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - Ut(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    n !== 0 && jc(e, n, t);
  }
  function Lr() {
    return (Ce & 6) === 0 ? (di(0), !1) : !0;
  }
  function go() {
    if (ye !== null) {
      if (_e === 0)
        var e = ye.return;
      else
        e = ye, pn = ba = null, Os(e), nl = null, Jl = 0, e = ye;
      for (; e !== null; )
        tm(e.alternate, e), e = e.return;
      ye = null;
    }
  }
  function dl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, up(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Nn = 0, go(), ze = e, ye = n = gn(e.current, null), be = t, _e = 0, Ht = null, Fn = !1, ol = Dl(e, t), so = !1, cl = Bt = oo = Na = Wn = Ze = 0, Tt = ci = null, co = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ut(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return Cn = t, ar(), n;
  }
  function Tm(e, t) {
    oe = null, q.H = ni, t === tl || t === fr ? (t = Gf(), _e = 3) : t === vs ? (t = Gf(), _e = 4) : _e = t === Qs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, ye === null && (Ze = 1, Tr(
      e,
      Vt(t, e.current)
    ));
  }
  function Am() {
    var e = zt.current;
    return e === null ? !0 : (be & 4194048) === be ? Jt === null : (be & 62914560) === be || (be & 536870912) !== 0 ? e === Jt : !1;
  }
  function Cm() {
    var e = q.H;
    return q.H = ni, e === null ? ni : e;
  }
  function Nm() {
    var e = q.A;
    return q.A = qy, e;
  }
  function Hr() {
    Ze = 4, Fn || (be & 4194048) !== be && zt.current !== null || (ol = !0), (Wn & 134217727) === 0 && (Na & 134217727) === 0 || ze === null || ea(
      ze,
      be,
      Bt,
      !1
    );
  }
  function yo(e, t, n) {
    var a = Ce;
    Ce |= 2;
    var i = Cm(), u = Nm();
    (ze !== e || be !== t) && (zr = null, dl(e, t)), t = !1;
    var f = Ze;
    e: do
      try {
        if (_e !== 0 && ye !== null) {
          var h = ye, E = Ht;
          switch (_e) {
            case 8:
              go(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var _ = _e;
              if (_e = 0, Ht = null, ml(e, h, E, _), n && ol) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = _e, _e = 0, Ht = null, ml(e, h, E, _);
          }
        }
        Yy(), f = Ze;
        break;
      } catch (z) {
        Tm(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, pn = ba = null, Ce = a, q.H = i, q.A = u, ye === null && (ze = null, be = 0, ar()), f;
  }
  function Yy() {
    for (; ye !== null; ) _m(ye);
  }
  function Xy(e, t) {
    var n = Ce;
    Ce |= 2;
    var a = Cm(), i = Nm();
    ze !== e || be !== t ? (zr = null, Mr = Ot() + 500, dl(e, t)) : ol = Dl(
      e,
      t
    );
    e: do
      try {
        if (_e !== 0 && ye !== null) {
          t = ye;
          var u = Ht;
          t: switch (_e) {
            case 1:
              _e = 0, Ht = null, ml(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (qf(u)) {
                _e = 0, Ht = null, Om(t);
                break;
              }
              t = function() {
                _e !== 2 && _e !== 9 || ze !== e || (_e = 7), cn(e);
              }, u.then(t, t);
              break e;
            case 3:
              _e = 7;
              break e;
            case 4:
              _e = 5;
              break e;
            case 7:
              qf(u) ? (_e = 0, Ht = null, Om(t)) : (_e = 0, Ht = null, ml(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (ye.tag) {
                case 26:
                  f = ye.memoizedState;
                case 5:
                case 27:
                  var h = ye;
                  if (f ? g0(f) : h.stateNode.complete) {
                    _e = 0, Ht = null;
                    var E = h.sibling;
                    if (E !== null) ye = E;
                    else {
                      var _ = h.return;
                      _ !== null ? (ye = _, Br(_)) : ye = null;
                    }
                    break t;
                  }
              }
              _e = 0, Ht = null, ml(e, t, u, 5);
              break;
            case 6:
              _e = 0, Ht = null, ml(e, t, u, 6);
              break;
            case 8:
              go(), Ze = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Vy();
        break;
      } catch (z) {
        Tm(e, z);
      }
    while (!0);
    return pn = ba = null, q.H = a, q.A = i, Ce = n, ye !== null ? 0 : (ze = null, be = 0, ar(), Ze);
  }
  function Vy() {
    for (; ye !== null && !ca(); )
      _m(ye);
  }
  function _m(e) {
    var t = Pd(e.alternate, e, Cn);
    e.memoizedProps = e.pendingProps, t === null ? Br(e) : ye = t;
  }
  function Om(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Zd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          be
        );
        break;
      case 11:
        t = Zd(
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
        tm(n, t), t = ye = Nf(t, Cn), t = Pd(n, t, Cn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Br(e) : ye = t;
  }
  function ml(e, t, n, a) {
    pn = ba = null, Os(t), nl = null, Jl = 0;
    var i = t.return;
    try {
      if (Uy(
        e,
        i,
        t,
        n,
        be
      )) {
        Ze = 1, Tr(
          e,
          Vt(n, e.current)
        ), ye = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw ye = i, u;
      Ze = 1, Tr(
        e,
        Vt(n, e.current)
      ), ye = null;
      return;
    }
    t.flags & 32768 ? (Se || a === 1 ? e = !0 : ol || (be & 536870912) !== 0 ? e = !1 : (Fn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Dm(t, e)) : Br(t);
  }
  function Br(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Dm(
          t,
          Fn
        );
        return;
      }
      e = t.return;
      var n = zy(
        t.alternate,
        t,
        Cn
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
    Ze === 0 && (Ze = 5);
  }
  function Dm(e, t) {
    do {
      var n = Ly(e.alternate, e);
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
    Ze = 6, ye = null;
  }
  function Um(e, t, n, a, i, u, f, h, E) {
    e.cancelPendingCommit = null;
    do
      qr();
    while (lt !== 0);
    if ((Ce & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= as, xg(
        e,
        n,
        u,
        f,
        h,
        E
      ), e === ze && (ye = ze = null, be = 0), fl = t, Pn = e, Nn = n, fo = u, mo = i, Sm = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Jy(Gi, function() {
        return Hm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = q.T, q.T = null, i = Y.p, Y.p = 2, f = Ce, Ce |= 4;
        try {
          Hy(e, t, n);
        } finally {
          Ce = f, Y.p = i, q.T = a;
        }
      }
      lt = 1, jm(), Mm(), zm();
    }
  }
  function jm() {
    if (lt === 1) {
      lt = 0;
      var e = Pn, t = fl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          mm(t, e);
          var u = No, f = bf(e.containerInfo), h = u.focusedElem, E = u.selectionRange;
          if (f !== h && h && h.ownerDocument && vf(
            h.ownerDocument.documentElement,
            h
          )) {
            if (E !== null && Iu(h)) {
              var _ = E.start, z = E.end;
              if (z === void 0 && (z = _), "selectionStart" in h)
                h.selectionStart = _, h.selectionEnd = Math.min(
                  z,
                  h.value.length
                );
              else {
                var B = h.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var j = O.getSelection(), J = h.textContent.length, ee = Math.min(E.start, J), je = E.end === void 0 ? ee : Math.min(E.end, J);
                  !j.extend && ee > je && (f = je, je = ee, ee = f);
                  var T = pf(
                    h,
                    ee
                  ), w = pf(
                    h,
                    je
                  );
                  if (T && w && (j.rangeCount !== 1 || j.anchorNode !== T.node || j.anchorOffset !== T.offset || j.focusNode !== w.node || j.focusOffset !== w.offset)) {
                    var N = B.createRange();
                    N.setStart(T.node, T.offset), j.removeAllRanges(), ee > je ? (j.addRange(N), j.extend(w.node, w.offset)) : (N.setEnd(w.node, w.offset), j.addRange(N));
                  }
                }
              }
            }
            for (B = [], j = h; j = j.parentNode; )
              j.nodeType === 1 && B.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < B.length; h++) {
              var H = B[h];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Wr = !!Co, No = Co = null;
        } finally {
          Ce = i, Y.p = a, q.T = n;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function Mm() {
    if (lt === 2) {
      lt = 0;
      var e = Pn, t = fl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = q.T, q.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          sm(e, t.alternate, t);
        } finally {
          Ce = i, Y.p = a, q.T = n;
        }
      }
      lt = 3;
    }
  }
  function zm() {
    if (lt === 4 || lt === 3) {
      lt = 0, Ou();
      var e = Pn, t = fl, n = Nn, a = Sm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, fl = Pn = null, Lm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (In = null), ju(n), t = t.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
          Dt.onCommitFiberRoot(
            Ol,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = q.T, i = Y.p, Y.p = 2, q.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          q.T = t, Y.p = i;
        }
      }
      (Nn & 3) !== 0 && qr(), cn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === ho ? fi++ : (fi = 0, ho = e) : fi = 0, di(0);
    }
  }
  function Lm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ql(t)));
  }
  function qr() {
    return jm(), Mm(), zm(), Hm();
  }
  function Hm() {
    if (lt !== 5) return !1;
    var e = Pn, t = fo;
    fo = 0;
    var n = ju(Nn), a = q.T, i = Y.p;
    try {
      Y.p = 32 > n ? 32 : n, q.T = null, n = mo, mo = null;
      var u = Pn, f = Nn;
      if (lt = 0, fl = Pn = null, Nn = 0, (Ce & 6) !== 0) throw Error(c(331));
      var h = Ce;
      if (Ce |= 4, vm(u.current), gm(
        u,
        u.current,
        f,
        n
      ), Ce = h, di(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        try {
          Dt.onPostCommitFiberRoot(Ol, u);
        } catch {
        }
      return !0;
    } finally {
      Y.p = i, q.T = a, Lm(e, t);
    }
  }
  function Bm(e, t, n) {
    t = Vt(n, t), t = Ks(e.stateNode, t, 2), e = Qn(e, t, 2), e !== null && (Ul(e, 2), cn(e));
  }
  function Oe(e, t, n) {
    if (e.tag === 3)
      Bm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (In === null || !In.has(a))) {
            e = Vt(n, e), n = qd(2), a = Qn(t, n, 2), a !== null && (kd(
              n,
              a,
              t,
              e
            ), Ul(a, 2), cn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function po(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new ky();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (so = !0, i.add(n), e = Ky.bind(null, e, t, n), t.then(e, e));
  }
  function Ky(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ze === e && (be & n) === n && (Ze === 4 || Ze === 3 && (be & 62914560) === be && 300 > Ot() - jr ? (Ce & 2) === 0 && dl(e, 0) : oo |= n, cl === be && (cl = 0)), cn(e);
  }
  function qm(e, t) {
    t === 0 && (t = Uc()), e = ya(e, t), e !== null && (Ul(e, t), cn(e));
  }
  function Qy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qm(e, n);
  }
  function Zy(e, t) {
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
    a !== null && a.delete(t), qm(e, n);
  }
  function Jy(e, t) {
    return it(e, t);
  }
  var kr = null, hl = null, vo = !1, Gr = !1, bo = !1, ta = 0;
  function cn(e) {
    e !== hl && e.next === null && (hl === null ? kr = hl = e : hl = hl.next = e), Gr = !0, vo || (vo = !0, Fy());
  }
  function di(e, t) {
    if (!bo && Gr) {
      bo = !0;
      do
        for (var n = !1, a = kr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, h = a.pingedLanes;
              u = (1 << 31 - Ut(42 | e) + 1) - 1, u &= i & ~(f & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Xm(a, u));
          } else
            u = be, u = Ki(
              a,
              a === ze ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Dl(a, u) || (n = !0, Xm(a, u));
          a = a.next;
        }
      while (n);
      bo = !1;
    }
  }
  function $y() {
    km();
  }
  function km() {
    Gr = vo = !1;
    var e = 0;
    ta !== 0 && rp() && (e = ta);
    for (var t = Ot(), n = null, a = kr; a !== null; ) {
      var i = a.next, u = Gm(a, t);
      u === 0 ? (a.next = null, n === null ? kr = i : n.next = i, i === null && (hl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (Gr = !0)), a = i;
    }
    lt !== 0 && lt !== 5 || di(e), ta !== 0 && (ta = 0);
  }
  function Gm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ut(u), h = 1 << f, E = i[f];
      E === -1 ? ((h & n) === 0 || (h & a) !== 0) && (i[f] = wg(h, t)) : E <= t && (e.expiredLanes |= h), u &= ~h;
    }
    if (t = ze, n = be, n = Ki(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Ln(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Dl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Ln(a), ju(n)) {
        case 2:
        case 8:
          n = Oc;
          break;
        case 32:
          n = Gi;
          break;
        case 268435456:
          n = Dc;
          break;
        default:
          n = Gi;
      }
      return a = Ym.bind(null, e), n = it(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Ln(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ym(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (qr() && e.callbackNode !== n)
      return null;
    var a = be;
    return a = Ki(
      e,
      e === ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (xm(e, a, t), Gm(e, Ot()), e.callbackNode != null && e.callbackNode === n ? Ym.bind(null, e) : null);
  }
  function Xm(e, t) {
    if (qr()) return null;
    xm(e, t, !0);
  }
  function Fy() {
    sp(function() {
      (Ce & 6) !== 0 ? it(
        _c,
        $y
      ) : km();
    });
  }
  function Eo() {
    if (ta === 0) {
      var e = Pa;
      e === 0 && (e = Yi, Yi <<= 1, (Yi & 261888) === 0 && (Yi = 256)), ta = e;
    }
    return ta;
  }
  function Vm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : $i("" + e);
  }
  function Km(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Wy(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var u = Vm(
        (i[Et] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Et] || null) ? Vm(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var h = new Pi(
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
                if (ta !== 0) {
                  var E = f ? Km(i, f) : new FormData(i);
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
                typeof u == "function" && (h.preventDefault(), E = f ? Km(i, f) : new FormData(i), qs(
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
    var wo = ns[So], Iy = wo.toLowerCase(), Py = wo[0].toUpperCase() + wo.slice(1);
    en(
      Iy,
      "on" + Py
    );
  }
  en(wf, "onAnimationEnd"), en(xf, "onAnimationIteration"), en(Rf, "onAnimationStart"), en("dblclick", "onDoubleClick"), en("focusin", "onFocus"), en("focusout", "onBlur"), en(gy, "onTransitionRun"), en(yy, "onTransitionStart"), en(py, "onTransitionCancel"), en(Tf, "onTransitionEnd"), qa("onMouseEnter", ["mouseout", "mouseover"]), qa("onMouseLeave", ["mouseout", "mouseover"]), qa("onPointerEnter", ["pointerout", "pointerover"]), qa("onPointerLeave", ["pointerout", "pointerover"]), da(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), da(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), da("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), da(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), da(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), da(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ep = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi)
  );
  function Qm(e, t) {
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
            } catch (z) {
              nr(z);
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
            } catch (z) {
              nr(z);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function pe(e, t) {
    var n = t[Mu];
    n === void 0 && (n = t[Mu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Zm(t, e, 2, !1), n.add(a));
  }
  function xo(e, t, n) {
    var a = 0;
    t && (a |= 4), Zm(
      n,
      e,
      a,
      t
    );
  }
  var Yr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ro(e) {
    if (!e[Yr]) {
      e[Yr] = !0, qc.forEach(function(n) {
        n !== "selectionchange" && (ep.has(n) || xo(n, !1, e), xo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yr] || (t[Yr] = !0, xo("selectionchange", !1, t));
    }
  }
  function Zm(e, t, n, a) {
    switch (w0(t)) {
      case 2:
        var i = Np;
        break;
      case 8:
        i = _p;
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
  function To(e, t, n, a, i) {
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
            if (f = La(h), f === null) return;
            if (E = f.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = u = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    Wc(function() {
      var _ = u, z = Gu(n), B = [];
      e: {
        var O = Af.get(e);
        if (O !== void 0) {
          var j = Pi, J = e;
          switch (e) {
            case "keypress":
              if (Wi(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = Zg;
              break;
            case "focusin":
              J = "focus", j = Zu;
              break;
            case "focusout":
              J = "blur", j = Zu;
              break;
            case "beforeblur":
            case "afterblur":
              j = Zu;
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
              j = ef;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Fg;
              break;
            case wf:
            case xf:
            case Rf:
              j = Bg;
              break;
            case Tf:
              j = Ig;
              break;
            case "scroll":
            case "scrollend":
              j = jg;
              break;
            case "wheel":
              j = ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = kg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = nf;
              break;
            case "toggle":
            case "beforetoggle":
              j = ny;
          }
          var ee = (t & 4) !== 0, je = !ee && (e === "scroll" || e === "scrollend"), T = ee ? O !== null ? O + "Capture" : null : O;
          ee = [];
          for (var w = _, N; w !== null; ) {
            var H = w;
            if (N = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || N === null || T === null || (H = zl(w, T), H != null && ee.push(
              hi(w, H, N)
            )), je) break;
            w = w.return;
          }
          0 < ee.length && (O = new j(
            O,
            J,
            null,
            n,
            z
          ), B.push({ event: O, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", O && n !== ku && (J = n.relatedTarget || n.fromElement) && (La(J) || J[za]))
            break e;
          if ((j || O) && (O = z.window === z ? z : (O = z.ownerDocument) ? O.defaultView || O.parentWindow : window, j ? (J = n.relatedTarget || n.toElement, j = _, J = J ? La(J) : null, J !== null && (je = m(J), ee = J.tag, J !== je || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (j = null, J = _), j !== J)) {
            if (ee = ef, H = "onMouseLeave", T = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (ee = nf, H = "onPointerLeave", T = "onPointerEnter", w = "pointer"), je = j == null ? O : Ml(j), N = J == null ? O : Ml(J), O = new ee(
              H,
              w + "leave",
              j,
              n,
              z
            ), O.target = je, O.relatedTarget = N, H = null, La(z) === _ && (ee = new ee(
              T,
              w + "enter",
              J,
              n,
              z
            ), ee.target = N, ee.relatedTarget = je, H = ee), je = H, j && J)
              t: {
                for (ee = tp, T = j, w = J, N = 0, H = T; H; H = ee(H))
                  N++;
                H = 0;
                for (var I = w; I; I = ee(I))
                  H++;
                for (; 0 < N - H; )
                  T = ee(T), N--;
                for (; 0 < H - N; )
                  w = ee(w), H--;
                for (; N--; ) {
                  if (T === w || w !== null && T === w.alternate) {
                    ee = T;
                    break t;
                  }
                  T = ee(T), w = ee(w);
                }
                ee = null;
              }
            else ee = null;
            j !== null && Jm(
              B,
              O,
              j,
              ee,
              !1
            ), J !== null && je !== null && Jm(
              B,
              je,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (O = _ ? Ml(_) : window, j = O.nodeName && O.nodeName.toLowerCase(), j === "select" || j === "input" && O.type === "file")
            var Te = ff;
          else if (of(O))
            if (df)
              Te = dy;
            else {
              Te = cy;
              var $ = oy;
            }
          else
            j = O.nodeName, !j || j.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? _ && qu(_.elementType) && (Te = ff) : Te = fy;
          if (Te && (Te = Te(e, _))) {
            cf(
              B,
              Te,
              n,
              z
            );
            break e;
          }
          $ && $(e, O, _), e === "focusout" && _ && O.type === "number" && _.memoizedProps.value != null && Bu(O, "number", O.value);
        }
        switch ($ = _ ? Ml(_) : window, e) {
          case "focusin":
            (of($) || $.contentEditable === "true") && (Ka = $, Pu = _, Xl = null);
            break;
          case "focusout":
            Xl = Pu = Ka = null;
            break;
          case "mousedown":
            es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            es = !1, Ef(B, n, z);
            break;
          case "selectionchange":
            if (hy) break;
          case "keydown":
          case "keyup":
            Ef(B, n, z);
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
          Va ? uf(e, n) && (Ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (af && n.locale !== "ko" && (Va || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Va && (fe = Ic()) : (qn = z, Vu = "value" in qn ? qn.value : qn.textContent, Va = !0)), $ = Xr(_, Ee), 0 < $.length && (Ee = new tf(
          Ee,
          e,
          null,
          n,
          z
        ), B.push({ event: Ee, listeners: $ }), fe ? Ee.data = fe : (fe = sf(n), fe !== null && (Ee.data = fe)))), (fe = ly ? iy(e, n) : ry(e, n)) && (Ee = Xr(_, "onBeforeInput"), 0 < Ee.length && ($ = new tf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), B.push({
          event: $,
          listeners: Ee
        }), $.data = fe)), Wy(
          B,
          e,
          _,
          n,
          z
        );
      }
      Qm(B, t);
    });
  }
  function hi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Xr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = zl(e, n), i != null && a.unshift(
        hi(e, i, u)
      ), i = zl(e, t), i != null && a.push(
        hi(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function tp(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Jm(e, t, n, a, i) {
    for (var u = t._reactName, f = []; n !== null && n !== a; ) {
      var h = n, E = h.alternate, _ = h.stateNode;
      if (h = h.tag, E !== null && E === a) break;
      h !== 5 && h !== 26 && h !== 27 || _ === null || (E = _, i ? (_ = zl(n, u), _ != null && f.unshift(
        hi(n, _, E)
      )) : i || (_ = zl(n, u), _ != null && f.push(
        hi(n, _, E)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var np = /\r\n?/g, ap = /\u0000|\uFFFD/g;
  function $m(e) {
    return (typeof e == "string" ? e : "" + e).replace(np, `
`).replace(ap, "");
  }
  function Fm(e, t) {
    return t = $m(t), $m(e) === t;
  }
  function Ue(e, t, n, a, i, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ga(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ga(e, "" + a);
        break;
      case "className":
        Zi(e, "class", a);
        break;
      case "tabIndex":
        Zi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zi(e, n, a);
        break;
      case "style":
        $c(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Zi(e, "data", a);
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
        a = $i("" + a), e.setAttribute(n, a);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Ue(e, t, "name", i.name, i, null), Ue(
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
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = $i("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = mn);
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
        n = $i("" + a), e.setAttributeNS(
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
        pe("beforetoggle", e), pe("toggle", e), Qi(e, "popover", a);
        break;
      case "xlinkActuate":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        dn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        dn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        dn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        dn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Qi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Dg.get(n) || n, Qi(e, n, a));
    }
  }
  function Ao(e, t, n, a, i, u) {
    switch (n) {
      case "style":
        $c(e, a, u);
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
        typeof a == "string" ? Ga(e, a) : (typeof a == "number" || typeof a == "bigint") && Ga(e, "" + a);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = mn);
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
        if (!kc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), u = e[Et] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Qi(e, n, a);
          }
    }
  }
  function ht(e, t, n) {
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
                  Ue(e, t, u, f, n, null);
              }
          }
        i && Ue(e, t, "srcSet", n.srcSet, n, null), a && Ue(e, t, "src", n.src, n, null);
        return;
      case "input":
        pe("invalid", e);
        var h = u = f = i = null, E = null, _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var z = n[a];
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
                  h = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ue(e, t, a, z, n, null);
              }
          }
        Kc(
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
                Ue(e, t, i, h, n, null);
            }
        t = u, n = f, e.multiple = !!a, t != null ? ka(e, !!a, t, !1) : n != null && ka(e, !!a, n, !0);
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
                Ue(e, t, f, h, n, null);
            }
        Zc(e, a, i, u);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ue(e, t, E, a, n, null));
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
        for (a = 0; a < mi.length; a++)
          pe(mi[a], e);
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
                Ue(e, t, _, a, n, null);
            }
        return;
      default:
        if (qu(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (a = n[z], a !== void 0 && Ao(
              e,
              t,
              z,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (h in n)
      n.hasOwnProperty(h) && (a = n[h], a != null && Ue(e, t, h, a, n, null));
  }
  function lp(e, t, n, a) {
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
        var i = null, u = null, f = null, h = null, E = null, _ = null, z = null;
        for (j in n) {
          var B = n[j];
          if (n.hasOwnProperty(j) && B != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = B;
              default:
                a.hasOwnProperty(j) || Ue(e, t, j, null, a, B);
            }
        }
        for (var O in a) {
          var j = a[O];
          if (B = n[O], a.hasOwnProperty(O) && (j != null || B != null))
            switch (O) {
              case "type":
                u = j;
                break;
              case "name":
                i = j;
                break;
              case "checked":
                _ = j;
                break;
              case "defaultChecked":
                z = j;
                break;
              case "value":
                f = j;
                break;
              case "defaultValue":
                h = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(c(137, t));
                break;
              default:
                j !== B && Ue(
                  e,
                  t,
                  O,
                  j,
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
          z,
          u,
          i
        );
        return;
      case "select":
        j = f = h = O = null;
        for (u in n)
          if (E = n[u], n.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                j = E;
              default:
                a.hasOwnProperty(u) || Ue(
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
                u !== E && Ue(
                  e,
                  t,
                  i,
                  u,
                  a,
                  E
                );
            }
        t = h, n = f, a = j, O != null ? ka(e, !!n, O, !1) : !!a != !!n && (t != null ? ka(e, !!n, t, !0) : ka(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        j = O = null;
        for (h in n)
          if (i = n[h], n.hasOwnProperty(h) && i != null && !a.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(e, t, h, null, a, i);
            }
        for (f in a)
          if (i = a[f], u = n[f], a.hasOwnProperty(f) && (i != null || u != null))
            switch (f) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                j = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== u && Ue(e, t, f, i, a, u);
            }
        Qc(e, O, j);
        return;
      case "option":
        for (var J in n)
          O = n[J], n.hasOwnProperty(J) && O != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Ue(
            e,
            t,
            J,
            null,
            a,
            O
          ));
        for (E in a)
          O = a[E], j = n[E], a.hasOwnProperty(E) && O !== j && (O != null || j != null) && (E === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Ue(
            e,
            t,
            E,
            O,
            a,
            j
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
          O = n[ee], n.hasOwnProperty(ee) && O != null && !a.hasOwnProperty(ee) && Ue(e, t, ee, null, a, O);
        for (_ in a)
          if (O = a[_], j = n[_], a.hasOwnProperty(_) && O !== j && (O != null || j != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(c(137, t));
                break;
              default:
                Ue(
                  e,
                  t,
                  _,
                  O,
                  a,
                  j
                );
            }
        return;
      default:
        if (qu(t)) {
          for (var je in n)
            O = n[je], n.hasOwnProperty(je) && O !== void 0 && !a.hasOwnProperty(je) && Ao(
              e,
              t,
              je,
              void 0,
              a,
              O
            );
          for (z in a)
            O = a[z], j = n[z], !a.hasOwnProperty(z) || O === j || O === void 0 && j === void 0 || Ao(
              e,
              t,
              z,
              O,
              a,
              j
            );
          return;
        }
    }
    for (var T in n)
      O = n[T], n.hasOwnProperty(T) && O != null && !a.hasOwnProperty(T) && Ue(e, t, T, null, a, O);
    for (B in a)
      O = a[B], j = n[B], !a.hasOwnProperty(B) || O === j || O == null && j == null || Ue(e, t, B, O, a, j);
  }
  function Wm(e) {
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
  function ip() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], u = i.transferSize, f = i.initiatorType, h = i.duration;
        if (u && h && Wm(f)) {
          for (f = 0, h = i.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], _ = E.startTime;
            if (_ > h) break;
            var z = E.transferSize, B = E.initiatorType;
            z && Wm(B) && (E = E.responseEnd, f += z * (E < h ? 1 : (h - _) / (E - _)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Co = null, No = null;
  function Vr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Im(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pm(e, t) {
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
  function rp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Oo ? !1 : (Oo = e, !0) : (Oo = null, !1);
  }
  var e0 = typeof setTimeout == "function" ? setTimeout : void 0, up = typeof clearTimeout == "function" ? clearTimeout : void 0, t0 = typeof Promise == "function" ? Promise : void 0, sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof t0 < "u" ? function(e) {
    return t0.resolve(null).then(e).catch(op);
  } : e0;
  function op(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function na(e) {
    return e === "head";
  }
  function n0(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), vl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          gi(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, gi(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, h = u.nodeName;
            u[jl] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && gi(e.ownerDocument.body);
      n = i;
    } while (n);
    vl(t);
  }
  function a0(e, t) {
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
          Do(n), zu(n);
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
  function cp(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[jl])
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
  function fp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function l0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function Uo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function jo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function dp(e, t) {
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
  var Mo = null;
  function i0(e) {
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
  function r0(e) {
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
  function u0(e, t, n) {
    switch (t = Vr(n), e) {
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
  function gi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    zu(e);
  }
  var Ft = /* @__PURE__ */ new Map(), s0 = /* @__PURE__ */ new Set();
  function Kr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var _n = Y.d;
  Y.d = {
    f: mp,
    r: hp,
    D: gp,
    C: yp,
    L: pp,
    m: vp,
    X: Ep,
    S: bp,
    M: Sp
  };
  function mp() {
    var e = _n.f(), t = Lr();
    return e || t;
  }
  function hp(e) {
    var t = Ha(e);
    t !== null && t.tag === 5 && t.type === "form" ? Td(t) : _n.r(e);
  }
  var gl = typeof document > "u" ? null : document;
  function o0(e, t, n) {
    var a = gl;
    if (a && typeof t == "string" && t) {
      var i = Yt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), s0.has(i) || (s0.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ht(t, "link", e), rt(t), a.head.appendChild(t)));
    }
  }
  function gp(e) {
    _n.D(e), o0("dns-prefetch", e, null);
  }
  function yp(e, t) {
    _n.C(e, t), o0("preconnect", e, t);
  }
  function pp(e, t, n) {
    _n.L(e, t, n);
    var a = gl;
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
          u = yl(e);
          break;
        case "script":
          u = pl(e);
      }
      Ft.has(u) || (e = C(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Ft.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(yi(u)) || t === "script" && a.querySelector(pi(u)) || (t = a.createElement("link"), ht(t, "link", e), rt(t), a.head.appendChild(t)));
    }
  }
  function vp(e, t) {
    _n.m(e, t);
    var n = gl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Yt(a) + '"][href="' + Yt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = pl(e);
      }
      if (!Ft.has(u) && (e = C({ rel: "modulepreload", href: e }, t), Ft.set(u, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(pi(u)))
              return;
        }
        a = n.createElement("link"), ht(a, "link", e), rt(a), n.head.appendChild(a);
      }
    }
  }
  function bp(e, t, n) {
    _n.S(e, t, n);
    var a = gl;
    if (a && e) {
      var i = Ba(a).hoistableStyles, u = yl(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = a.querySelector(
          yi(u)
        ))
          h.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Ft.get(u)) && zo(e, n);
          var E = f = a.createElement("link");
          rt(E), ht(E, "link", e), E._p = new Promise(function(_, z) {
            E.onload = _, E.onerror = z;
          }), E.addEventListener("load", function() {
            h.loading |= 1;
          }), E.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Qr(f, t, a);
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
  function Ep(e, t) {
    _n.X(e, t);
    var n = gl;
    if (n && e) {
      var a = Ba(n).hoistableScripts, i = pl(e), u = a.get(i);
      u || (u = n.querySelector(pi(i)), u || (e = C({ src: e, async: !0 }, t), (t = Ft.get(i)) && Lo(e, t), u = n.createElement("script"), rt(u), ht(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function Sp(e, t) {
    _n.M(e, t);
    var n = gl;
    if (n && e) {
      var a = Ba(n).hoistableScripts, i = pl(e), u = a.get(i);
      u || (u = n.querySelector(pi(i)), u || (e = C({ src: e, async: !0, type: "module" }, t), (t = Ft.get(i)) && Lo(e, t), u = n.createElement("script"), rt(u), ht(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function c0(e, t, n, a) {
    var i = (i = ne.current) ? Kr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = yl(n.href), n = Ba(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = yl(n.href);
          var u = Ba(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            yi(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Ft.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ft.set(e, n), u || wp(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pl(n), n = Ba(
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
  function yl(e) {
    return 'href="' + Yt(e) + '"';
  }
  function yi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function f0(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function wp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ht(t, "link", n), rt(t), e.head.appendChild(t));
  }
  function pl(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function pi(e) {
    return "script[async]" + e;
  }
  function d0(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Yt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, rt(a), a;
          var i = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), rt(a), ht(a, "style", i), Qr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = yl(n.href);
          var u = e.querySelector(
            yi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, rt(u), u;
          a = f0(n), (i = Ft.get(i)) && zo(a, i), u = (e.ownerDocument || e).createElement("link"), rt(u);
          var f = u;
          return f._p = new Promise(function(h, E) {
            f.onload = h, f.onerror = E;
          }), ht(u, "link", a), t.state.loading |= 4, Qr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = pl(n.src), (i = e.querySelector(
            pi(u)
          )) ? (t.instance = i, rt(i), i) : (a = n, (i = Ft.get(u)) && (a = C({}, n), Lo(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), rt(i), ht(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Qr(a, n.precedence, e));
    return t.instance;
  }
  function Qr(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var h = a[f];
      if (h.dataset.precedence === t) u = h;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function zo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Lo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Zr = null;
  function m0(e, t, n) {
    if (Zr === null) {
      var a = /* @__PURE__ */ new Map(), i = Zr = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Zr, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[jl] || u[ct] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var h = a.get(f);
        h ? h.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function h0(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function xp(e, t, n) {
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
  function g0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Rp(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = yl(a.href), u = t.querySelector(
          yi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Jr.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, rt(u);
          return;
        }
        u = t.ownerDocument || t, a = f0(a), (i = Ft.get(i)) && zo(a, i), u = u.createElement("link"), rt(u);
        var f = u;
        f._p = new Promise(function(h, E) {
          f.onload = h, f.onerror = E;
        }), ht(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Jr.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ho = 0;
  function Tp(e, t) {
    return e.stylesheets && e.count === 0 && Fr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Fr(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ho === 0 && (Ho = 62500 * ip());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Fr(e, e.stylesheets), e.unsuspend)) {
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
  function Jr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Fr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var $r = null;
  function Fr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, $r = /* @__PURE__ */ new Map(), t.forEach(Ap, e), $r = null, Jr.call(e));
  }
  function Ap(e, t) {
    if (!(t.state.loading & 4)) {
      var n = $r.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), $r.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, i), n.set(f, i), this.count++, a = Jr.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var vi = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: de,
    _currentValue2: de,
    _threadCount: 0
  };
  function Cp(e, t, n, a, i, u, f, h, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function y0(e, t, n, a, i, u, f, h, E, _, z, B) {
    return e = new Cp(
      e,
      t,
      n,
      f,
      E,
      _,
      z,
      B,
      h
    ), t = 1, u === !0 && (t |= 24), u = Mt(3, null, null, t), e.current = u, u.stateNode = e, t = gs(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, bs(u), e;
  }
  function p0(e) {
    return e ? (e = Ja, e) : Ja;
  }
  function v0(e, t, n, a, i, u) {
    i = p0(i), a.context === null ? a.context = i : a.pendingContext = i, a = Kn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Qn(e, a, t), n !== null && (At(n, e, t), Fl(n, e, t));
  }
  function b0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Bo(e, t) {
    b0(e, t), (e = e.alternate) && b0(e, t);
  }
  function E0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ya(e, 67108864);
      t !== null && At(t, e, 67108864), Bo(e, 67108864);
    }
  }
  function S0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = Uu(t);
      var n = ya(e, t);
      n !== null && At(n, e, t), Bo(e, t);
    }
  }
  var Wr = !0;
  function Np(e, t, n, a) {
    var i = q.T;
    q.T = null;
    var u = Y.p;
    try {
      Y.p = 2, qo(e, t, n, a);
    } finally {
      Y.p = u, q.T = i;
    }
  }
  function _p(e, t, n, a) {
    var i = q.T;
    q.T = null;
    var u = Y.p;
    try {
      Y.p = 8, qo(e, t, n, a);
    } finally {
      Y.p = u, q.T = i;
    }
  }
  function qo(e, t, n, a) {
    if (Wr) {
      var i = ko(a);
      if (i === null)
        To(
          e,
          t,
          a,
          Ir,
          n
        ), x0(e, a);
      else if (Dp(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (x0(e, a), t & 4 && -1 < Op.indexOf(e)) {
        for (; i !== null; ) {
          var u = Ha(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = fa(u.pendingLanes);
                  if (f !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var E = 1 << 31 - Ut(f);
                      h.entanglements[1] |= E, f &= ~E;
                    }
                    cn(u), (Ce & 6) === 0 && (Mr = Ot() + 500, di(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = ya(u, 2), h !== null && At(h, u, 2), Lr(), Bo(u, 2);
            }
          if (u = ko(a), u === null && To(
            e,
            t,
            a,
            Ir,
            n
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        To(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function ko(e) {
    return e = Gu(e), Go(e);
  }
  var Ir = null;
  function Go(e) {
    if (Ir = null, e = La(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ir = e, null;
  }
  function w0(e) {
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
        switch (gg()) {
          case _c:
            return 2;
          case Oc:
            return 8;
          case Gi:
          case yg:
            return 32;
          case Dc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yo = !1, aa = null, la = null, ia = null, bi = /* @__PURE__ */ new Map(), Ei = /* @__PURE__ */ new Map(), ra = [], Op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function x0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        ia = null;
        break;
      case "pointerover":
      case "pointerout":
        bi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ei.delete(t.pointerId);
    }
  }
  function Si(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Ha(t), t !== null && E0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Dp(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return aa = Si(
          aa,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return la = Si(
          la,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return ia = Si(
          ia,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return bi.set(
          u,
          Si(
            bi.get(u) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, Ei.set(
          u,
          Si(
            Ei.get(u) || null,
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
    var t = La(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Hc(e.priority, function() {
              S0(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, Hc(e.priority, function() {
              S0(n);
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
  function Pr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ko(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        ku = a, n.target.dispatchEvent(a), ku = null;
      } else
        return t = Ha(n), t !== null && E0(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function T0(e, t, n) {
    Pr(e) && n.delete(t);
  }
  function Up() {
    Yo = !1, aa !== null && Pr(aa) && (aa = null), la !== null && Pr(la) && (la = null), ia !== null && Pr(ia) && (ia = null), bi.forEach(T0), Ei.forEach(T0);
  }
  function eu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Yo || (Yo = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Up
    )));
  }
  var tu = null;
  function A0(e) {
    tu !== e && (tu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        tu === e && (tu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Go(a || n) === null)
              continue;
            break;
          }
          var u = Ha(n);
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
  function vl(e) {
    function t(E) {
      return eu(E, e);
    }
    aa !== null && eu(aa, e), la !== null && eu(la, e), ia !== null && eu(ia, e), bi.forEach(t), Ei.forEach(t);
    for (var n = 0; n < ra.length; n++) {
      var a = ra[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ra.length && (n = ra[0], n.blockedOn === null); )
      R0(n), n.blockedOn === null && ra.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], u = n[a + 1], f = i[Et] || null;
        if (typeof u == "function")
          f || A0(n);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[Et] || null)
              h = f.formAction;
            else if (Go(i) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? n[a + 1] = h : (n.splice(a, 3), a -= 3), A0(n);
        }
      }
  }
  function C0() {
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
  nu.prototype.render = Xo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = qt();
    v0(n, a, e, t, null, null);
  }, nu.prototype.unmount = Xo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      v0(e.current, 2, null, e, null, null), Lr(), t[za] = null;
    }
  };
  function nu(e) {
    this._internalRoot = e;
  }
  nu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Lc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ra.length && t !== 0 && t < ra[n].priority; n++) ;
      ra.splice(n, 0, e), n === 0 && R0(e);
    }
  };
  var N0 = s.version;
  if (N0 !== "19.2.3")
    throw Error(
      c(
        527,
        N0,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = b(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var jp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!au.isDisabled && au.supportsFiber)
      try {
        Ol = au.inject(
          jp
        ), Dt = au;
      } catch {
      }
  }
  return Ri.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", i = zd, u = Ld, f = Hd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = y0(
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
      C0
    ), e[za] = t.current, Ro(e), new Xo(t);
  }, Ri.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, i = "", u = zd, f = Ld, h = Hd, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), t = y0(
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
      C0
    ), t.context = p0(null), n = t.current, a = qt(), a = Uu(a), i = Kn(a), i.callback = null, Qn(n, i, a), n = a, t.current.lanes = n, Ul(t, n), cn(t), e[za] = t.current, Ro(e), new nu(t);
  }, Ri.version = "19.2.3", Ri;
}
var V0;
function wv() {
  if (V0) return Fo.exports;
  V0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Fo.exports = Sv(), Fo.exports;
}
var xv = wv();
function Rv(l = {}) {
  const { nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c } = l, [d, m] = x.useState(!1), p = x.useRef(o);
  p.current = o;
  const v = x.useRef(c);
  return v.current = c, x.useEffect(() => {
    const y = document.createElement("script");
    return y.src = "https://accounts.google.com/gsi/client", s && (y.src += `?hl=${s}`), y.async = !0, y.defer = !0, y.nonce = r, y.onload = () => {
      var b;
      m(!0), (b = p.current) === null || b === void 0 || b.call(p);
    }, y.onerror = () => {
      var b;
      m(!1), (b = v.current) === null || b === void 0 || b.call(v);
    }, document.body.appendChild(y), () => {
      document.body.removeChild(y);
    };
  }, [r]), d;
}
const kh = x.createContext(null);
function Tv({ clientId: l, nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c, children: d }) {
  const m = Rv({
    nonce: r,
    onScriptLoadSuccess: o,
    onScriptLoadError: c,
    locale: s
  }), p = x.useMemo(() => ({
    locale: s,
    clientId: l,
    scriptLoadedSuccessfully: m
  }), [l, m]);
  return qp.createElement(kh.Provider, { value: p }, d);
}
function Av() {
  const l = x.useContext(kh);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function Cv({ flow: l = "implicit", scope: r = "", onSuccess: s, onError: o, onNonOAuthError: c, overrideScope: d, state: m, ...p }) {
  const { clientId: v, scriptLoadedSuccessfully: y } = Av(), b = x.useRef(), R = x.useRef(s);
  R.current = s;
  const C = x.useRef(o);
  C.current = o;
  const k = x.useRef(c);
  k.current = c, x.useEffect(() => {
    var D, G;
    if (!y)
      return;
    const K = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (G = (D = window?.google) === null || D === void 0 ? void 0 : D.accounts) === null || G === void 0 ? void 0 : G.oauth2[K]({
      client_id: v,
      scope: d ? r : `openid profile email ${r}`,
      callback: (F) => {
        var W, he;
        if (F.error)
          return (W = C.current) === null || W === void 0 ? void 0 : W.call(C, F);
        (he = R.current) === null || he === void 0 || he.call(R, F);
      },
      error_callback: (F) => {
        var W;
        (W = k.current) === null || W === void 0 || W.call(k, F);
      },
      state: m,
      ...p
    });
    b.current = Q;
  }, [v, y, l, r, m]);
  const A = x.useCallback((D) => {
    var G;
    return (G = b.current) === null || G === void 0 ? void 0 : G.requestAccessToken(D);
  }, []), M = x.useCallback(() => {
    var D;
    return (D = b.current) === null || D === void 0 ? void 0 : D.requestCode();
  }, []);
  return l === "implicit" ? A : M;
}
var me = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(me || {}), gt = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(gt || {}), at = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(at || {}), Wt = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(Wt || {}), wc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(wc || {}), sa = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(sa || {}), Oi = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(Oi || {});
const ve = {
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
}, Po = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, Tl = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout"
}, xu = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, iu = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ni = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, bl = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, K0 = /[!@#$%^&*._-]/, Q0 = /^[A-Za-z0-9!@#$%^&*._-]+$/, Di = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, Nv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Ti = {
  COURSES: "/courses"
}, Je = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, Dn = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, _v = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Ov = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, st = {
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
}, oc = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, $e = {
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
}, ru = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, ot = ({
  label: l,
  onClick: r,
  disabled: s,
  type: o = at.BUTTON,
  variant: c = gt.PRIMARY,
  part: d,
  className: m,
  children: p,
  ariaLabel: v,
  mainButtonStyle: y
}) => {
  const b = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", R = {
    [gt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [gt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [gt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, C = m ? `identity-widget-button ${b} ${R[c]} ${m}` : `identity-widget-button ${b} ${R[c]}`, k = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...m ? m.split(/\s+/).map((M) => M.trim()).filter((M) => M.startsWith("identity-widget-")) : []
      ].filter(Boolean)
    )
  ).join(" "), A = d || k;
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      className: C,
      onClick: r,
      disabled: s,
      type: o,
      part: A,
      "aria-label": v || (typeof l == "string" ? l : void 0),
      "aria-disabled": s,
      style: { ...y, borderStyle: "solid !important" },
      children: p || l
    }
  );
}, an = x.forwardRef((l, r) => {
  const {
    label: s,
    startIcon: o,
    endIcon: c,
    error: d,
    helperText: m,
    optional: p,
    className: v,
    options: y,
    id: b,
    ...R
  } = l, C = !!d || !!m, k = R.type === "select" || !!y, A = b || `input-${Math.random().toString(36).substr(2, 9)}`, M = `${A}-error`, D = `${A}-helper`;
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${v || ""}`,
      children: [
        s && /* @__PURE__ */ g.jsxs(
          "label",
          {
            htmlFor: A,
            part: "identity-widget-input-label",
            className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
            children: [
              s,
              " ",
              p && /* @__PURE__ */ g.jsx(
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
        /* @__PURE__ */ g.jsxs(
          "div",
          {
            part: "identity-widget-input-container",
            className: "identity-widget-input-container flex! items-center! relative!",
            children: [
              o && /* @__PURE__ */ g.jsx(
                "span",
                {
                  part: "identity-widget-input-start-icon",
                  className: "identity-widget-input-start-icon flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
                  style: { top: "50%", transform: "translateY(-50%)" },
                  "aria-hidden": !0,
                  children: o
                }
              ),
              k ? /* @__PURE__ */ g.jsx(
                "select",
                {
                  ref: r,
                  id: A,
                  part: "identity-widget-input-select",
                  "aria-label": typeof s == "string" ? s : R["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? M : void 0,
                  "aria-required": R.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: C ? "#d64545" : "#cbd5d5",
                    ...R.style
                  },
                  ...R,
                  children: y && y.map((G) => /* @__PURE__ */ g.jsx(
                    "option",
                    {
                      part: "identity-widget-input-option",
                      className: "identity-widget-input-option",
                      value: G.value,
                      children: G.label
                    },
                    G.value
                  ))
                }
              ) : /* @__PURE__ */ g.jsx(
                "input",
                {
                  ref: r,
                  id: A,
                  part: "identity-widget-input-field",
                  "aria-label": typeof s == "string" ? s : R["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? M : void 0,
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
              c && /* @__PURE__ */ g.jsx(
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
        d && typeof d == "string" && /* @__PURE__ */ g.jsx(
          "div",
          {
            id: M,
            role: "alert",
            "aria-live": "polite",
            part: "identity-widget-input-error",
            className: "identity-widget-input-error text-[#d64545] text-[13px]! mt-1.5! text-left!",
            children: d
          }
        ),
        !d && m && /* @__PURE__ */ g.jsx(
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
}), Dv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Sl = ({
  type: l,
  message: r,
  actionText: s,
  onActionClick: o,
  onClose: c,
  className: d = "",
  children: m
}) => {
  const p = () => {
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
  }, v = () => {
    switch (l) {
      case me.SUCCESS:
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
        return /* @__PURE__ */ g.jsx(
          "img",
          {
            part: "identity-widget-banner-icon-image",
            src: Dv,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, y = p(), b = () => {
    switch (l) {
      case me.ERROR:
        return sa.ALERT;
      case me.WARNING:
      case me.INFO:
        return sa.STATUS;
      case me.SUCCESS:
        return sa.STATUS;
      default:
        return sa.STATUS;
    }
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: b(),
      "aria-live": l === me.ERROR ? Oi.ASSERTIVE : Oi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! items-center! max-[500px]:items-start! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`,
      children: [
        /* @__PURE__ */ g.jsx(
          "div",
          {
            part: "identity-widget-banner-icon",
            className: `identity-widget-banner-icon flex-shrink-0! ${y.iconColor}!`,
            "aria-hidden": "true",
            children: v()
          }
        ),
        /* @__PURE__ */ g.jsxs(
          "div",
          {
            part: "identity-widget-banner-content",
            className: "identity-widget-banner-content ml-3! flex-1! flex! items-center! gap-2! max-[500px]:items-start! max-[500px]:flex-col!",
            children: [
              /* @__PURE__ */ g.jsx(
                "span",
                {
                  part: "identity-widget-banner-message",
                  className: `identity-widget-banner-message text-sm! font-medium! ${y.text}`,
                  children: r
                }
              ),
              s && o && /* @__PURE__ */ g.jsx(
                "button",
                {
                  part: "identity-widget-banner-action",
                  type: "button",
                  onClick: o,
                  "aria-label": s,
                  className: `identity-widget-banner-action text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! max-[500px]:whitespace-normal! max-[500px]:self-start! shadow-none!`,
                  children: s
                }
              ),
              m
            ]
          }
        ),
        c && /* @__PURE__ */ g.jsxs(
          "button",
          {
            part: "identity-widget-banner-close",
            type: "button",
            onClick: c,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ g.jsx(
                "span",
                {
                  part: "identity-widget-banner-close-text",
                  className: "identity-widget-banner-close-text sr-only",
                  children: "Dismiss"
                }
              ),
              /* @__PURE__ */ g.jsx(
                "svg",
                {
                  part: "identity-widget-banner-close-icon",
                  className: "identity-widget-banner-close-icon w-5! h-5!",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ g.jsx(
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
}, cc = ({ type: l, message: r, duration: s = 5e3, onClose: o, className: c = "" }) => {
  const [d, m] = x.useState(!1), [p, v] = x.useState(!1);
  x.useEffect(() => {
    setTimeout(() => m(!0), Di.ANIMATION_ENTRANCE_DELAY);
    const A = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(A);
  }, [s]);
  const y = () => {
    v(!0), setTimeout(() => {
      m(!1), o && o();
    }, Di.ANIMATION_EXIT_DURATION);
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
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
        return /* @__PURE__ */ g.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ g.jsx(
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
  }, C = b(), k = () => {
    switch (l) {
      case me.ERROR:
        return sa.ALERT;
      case me.WARNING:
      case me.INFO:
      case me.SUCCESS:
        return sa.STATUS;
      default:
        return sa.STATUS;
    }
  };
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: k(),
      "aria-live": l === me.ERROR ? Oi.ASSERTIVE : Oi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${ec.Z_INDEX}]! transition-all! duration-300! ${d && !p ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: ec.MAX_WIDTH, width: ec.WIDTH },
      children: /* @__PURE__ */ g.jsxs(
        "div",
        {
          part: "identity-widget-toast-body",
          className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${C.bg}`,
          children: [
            /* @__PURE__ */ g.jsx(
              "div",
              {
                part: "identity-widget-toast-icon",
                className: `identity-widget-toast-icon flex-shrink-0! ${C.icon}`,
                "aria-hidden": "true",
                children: R()
              }
            ),
            /* @__PURE__ */ g.jsx(
              "div",
              {
                part: "identity-widget-toast-content",
                className: `identity-widget-toast-content ml-3! flex-1! ${C.text}`,
                children: /* @__PURE__ */ g.jsx(
                  "p",
                  {
                    part: "identity-widget-toast-message",
                    className: "identity-widget-toast-message text-sm! font-medium!",
                    children: r
                  }
                )
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                part: "identity-widget-toast-close",
                type: "button",
                onClick: y,
                "aria-label": "Close notification",
                className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${C.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
                children: [
                  /* @__PURE__ */ g.jsx(
                    "span",
                    {
                      part: "identity-widget-toast-close-text",
                      className: "identity-widget-toast-close-text sr-only",
                      children: "Close"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    "svg",
                    {
                      part: "identity-widget-toast-close-icon",
                      className: "identity-widget-toast-close-icon w-5! h-5!",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ g.jsx(
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
}, Gh = () => /* @__PURE__ */ g.jsx(
  "span",
  {
    part: "identity-widget-loader",
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ g.jsx("span", { part: "identity-widget-loader-text", className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class Ci extends Error {
}
Ci.prototype.name = "InvalidTokenError";
function Uv(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, s) => {
    let o = s.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function jv(l) {
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
    return Uv(r);
  } catch {
    return atob(r);
  }
}
function Li(l, r) {
  if (typeof l != "string")
    throw new Ci("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, o = l.split(".")[s];
  if (typeof o != "string")
    throw new Ci(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = jv(o);
  } catch (d) {
    throw new Ci(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ci(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Yh() {
  const l = window.location.hostname;
  if (l === Dn.HOSTNAME || l === Dn.IP || Dn.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Mv() {
  const l = window.location.hostname;
  return l === Dn.HOSTNAME || l === Dn.IP || Dn.IP_PATTERN.test(l) || l.startsWith(`${Je.DEV}.`) || l.startsWith(`${Je.DEV}-`) ? Wt.DEV : l.startsWith(`${Je.TEST}.`) || l.startsWith(`${Je.TEST}-`) ? Wt.TEST : l.startsWith(`${Je.STAGE}.`) || l.startsWith(`${Je.STAGE}-`) ? Wt.STAGE : Wt.PROD;
}
function uu() {
  const l = window.location.href, r = new URL(l), s = r.hostname;
  if (s.startsWith(`${Je.DEV}.`)) {
    const o = s.replace(`${Je.DEV}.`, `${Je.DEV_LEARN}.`);
    return `${r.protocol}//${o}${Ti.COURSES}`;
  } else if (s.startsWith(`${Je.TEST}.`)) {
    const o = s.replace(`${Je.TEST}.`, `${Je.TEST_LEARN}.`);
    return `${r.protocol}//${o}${Ti.COURSES}`;
  } else if (s.startsWith(`${Je.STAGE}.`)) {
    const o = s.replace(`${Je.STAGE}.`, `${Je.STAGE_LEARN}.`);
    return `${r.protocol}//${o}${Ti.COURSES}`;
  } else if (s.split(".").length === 2) {
    const c = `${Je.LEARN}.${s}`;
    return `${r.protocol}//${c}${Ti.COURSES}`;
  } else
    return `${r.protocol}//${s}${Ti.COURSES}`;
}
function _a(l, r, s, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + s);
  const d = Yh(), m = d ? `; domain=${d}` : "", p = window.location.protocol === "https:" ? "; secure" : "", v = o ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${v}; expires=${c.toUTCString()}; path=/${m}${p}; SameSite=Strict`;
}
function Ct(l, r = !0) {
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
function su(l) {
  const r = Yh(), s = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function Xh(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var Z0 = {};
const { toString: zv } = Object.prototype, { getPrototypeOf: xc } = Object, { iterator: Ru, toStringTag: Vh } = Symbol, Tu = /* @__PURE__ */ ((l) => (r) => {
  const s = zv.call(r);
  return l[s] || (l[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), rn = (l) => (l = l.toLowerCase(), (r) => Tu(r) === l), Au = (l) => (r) => typeof r === l, { isArray: Al } = Array, wl = Au("undefined");
function Hi(l) {
  return l !== null && !wl(l) && l.constructor !== null && !wl(l.constructor) && Nt(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const Kh = rn("ArrayBuffer");
function Lv(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Kh(l.buffer), r;
}
const Hv = Au("string"), Nt = Au("function"), Qh = Au("number"), Bi = (l) => l !== null && typeof l == "object", Bv = (l) => l === !0 || l === !1, du = (l) => {
  if (Tu(l) !== "object")
    return !1;
  const r = xc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Vh in l) && !(Ru in l);
}, qv = (l) => {
  if (!Bi(l) || Hi(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, kv = rn("Date"), Gv = rn("File"), Yv = rn("Blob"), Xv = rn("FileList"), Vv = (l) => Bi(l) && Nt(l.pipe), Kv = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || Nt(l.append) && ((r = Tu(l)) === "formdata" || // detect form-data instance
  r === "object" && Nt(l.toString) && l.toString() === "[object FormData]"));
}, Qv = rn("URLSearchParams"), [Zv, Jv, $v, Fv] = ["ReadableStream", "Request", "Response", "Headers"].map(rn), Wv = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qi(l, r, { allOwnKeys: s = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let o, c;
  if (typeof l != "object" && (l = [l]), Al(l))
    for (o = 0, c = l.length; o < c; o++)
      r.call(null, l[o], o, l);
  else {
    if (Hi(l))
      return;
    const d = s ? Object.getOwnPropertyNames(l) : Object.keys(l), m = d.length;
    let p;
    for (o = 0; o < m; o++)
      p = d[o], r.call(null, l[p], p, l);
  }
}
function Zh(l, r) {
  if (Hi(l))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(l);
  let o = s.length, c;
  for (; o-- > 0; )
    if (c = s[o], r === c.toLowerCase())
      return c;
  return null;
}
const Oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jh = (l) => !wl(l) && l !== Oa;
function fc() {
  const { caseless: l, skipUndefined: r } = Jh(this) && this || {}, s = {}, o = (c, d) => {
    const m = l && Zh(s, d) || d;
    du(s[m]) && du(c) ? s[m] = fc(s[m], c) : du(c) ? s[m] = fc({}, c) : Al(c) ? s[m] = c.slice() : (!r || !wl(c)) && (s[m] = c);
  };
  for (let c = 0, d = arguments.length; c < d; c++)
    arguments[c] && qi(arguments[c], o);
  return s;
}
const Iv = (l, r, s, { allOwnKeys: o } = {}) => (qi(r, (c, d) => {
  s && Nt(c) ? l[d] = Xh(c, s) : l[d] = c;
}, { allOwnKeys: o }), l), Pv = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), eb = (l, r, s, o) => {
  l.prototype = Object.create(r.prototype, o), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: r.prototype
  }), s && Object.assign(l.prototype, s);
}, tb = (l, r, s, o) => {
  let c, d, m;
  const p = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), d = c.length; d-- > 0; )
      m = c[d], (!o || o(m, l, r)) && !p[m] && (r[m] = l[m], p[m] = !0);
    l = s !== !1 && xc(l);
  } while (l && (!s || s(l, r)) && l !== Object.prototype);
  return r;
}, nb = (l, r, s) => {
  l = String(l), (s === void 0 || s > l.length) && (s = l.length), s -= r.length;
  const o = l.indexOf(r, s);
  return o !== -1 && o === s;
}, ab = (l) => {
  if (!l) return null;
  if (Al(l)) return l;
  let r = l.length;
  if (!Qh(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = l[r];
  return s;
}, lb = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && xc(Uint8Array)), ib = (l, r) => {
  const o = (l && l[Ru]).call(l);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const d = c.value;
    r.call(l, d[0], d[1]);
  }
}, rb = (l, r) => {
  let s;
  const o = [];
  for (; (s = l.exec(r)) !== null; )
    o.push(s);
  return o;
}, ub = rn("HTMLFormElement"), sb = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, c) {
    return o.toUpperCase() + c;
  }
), J0 = (({ hasOwnProperty: l }) => (r, s) => l.call(r, s))(Object.prototype), ob = rn("RegExp"), $h = (l, r) => {
  const s = Object.getOwnPropertyDescriptors(l), o = {};
  qi(s, (c, d) => {
    let m;
    (m = r(c, d, l)) !== !1 && (o[d] = m || c);
  }), Object.defineProperties(l, o);
}, cb = (l) => {
  $h(l, (r, s) => {
    if (Nt(l) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const o = l[s];
    if (Nt(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, fb = (l, r) => {
  const s = {}, o = (c) => {
    c.forEach((d) => {
      s[d] = !0;
    });
  };
  return Al(l) ? o(l) : o(String(l).split(r)), s;
}, db = () => {
}, mb = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function hb(l) {
  return !!(l && Nt(l.append) && l[Vh] === "FormData" && l[Ru]);
}
const gb = (l) => {
  const r = new Array(10), s = (o, c) => {
    if (Bi(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (Hi(o))
        return o;
      if (!("toJSON" in o)) {
        r[c] = o;
        const d = Al(o) ? [] : {};
        return qi(o, (m, p) => {
          const v = s(m, c + 1);
          !wl(v) && (d[p] = v);
        }), r[c] = void 0, d;
      }
    }
    return o;
  };
  return s(l, 0);
}, yb = rn("AsyncFunction"), pb = (l) => l && (Bi(l) || Nt(l)) && Nt(l.then) && Nt(l.catch), Fh = ((l, r) => l ? setImmediate : r ? ((s, o) => (Oa.addEventListener("message", ({ source: c, data: d }) => {
  c === Oa && d === s && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), Oa.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Nt(Oa.postMessage)
), vb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oa) : typeof Z0 < "u" && Z0.nextTick || Fh, bb = (l) => l != null && Nt(l[Ru]), U = {
  isArray: Al,
  isArrayBuffer: Kh,
  isBuffer: Hi,
  isFormData: Kv,
  isArrayBufferView: Lv,
  isString: Hv,
  isNumber: Qh,
  isBoolean: Bv,
  isObject: Bi,
  isPlainObject: du,
  isEmptyObject: qv,
  isReadableStream: Zv,
  isRequest: Jv,
  isResponse: $v,
  isHeaders: Fv,
  isUndefined: wl,
  isDate: kv,
  isFile: Gv,
  isBlob: Yv,
  isRegExp: ob,
  isFunction: Nt,
  isStream: Vv,
  isURLSearchParams: Qv,
  isTypedArray: lb,
  isFileList: Xv,
  forEach: qi,
  merge: fc,
  extend: Iv,
  trim: Wv,
  stripBOM: Pv,
  inherits: eb,
  toFlatObject: tb,
  kindOf: Tu,
  kindOfTest: rn,
  endsWith: nb,
  toArray: ab,
  forEachEntry: ib,
  matchAll: rb,
  isHTMLForm: ub,
  hasOwnProperty: J0,
  hasOwnProp: J0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $h,
  freezeMethods: cb,
  toObjectSet: fb,
  toCamelCase: sb,
  noop: db,
  toFiniteNumber: mb,
  findKey: Zh,
  global: Oa,
  isContextDefined: Jh,
  isSpecCompliantForm: hb,
  toJSONObject: gb,
  isAsyncFn: yb,
  isThenable: pb,
  setImmediate: Fh,
  asap: vb,
  isIterable: bb
};
function ce(l, r, s, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
}
U.inherits(ce, Error, {
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
const Wh = ce.prototype, Ih = {};
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
  Ih[l] = { value: l };
});
Object.defineProperties(ce, Ih);
Object.defineProperty(Wh, "isAxiosError", { value: !0 });
ce.from = (l, r, s, o, c, d) => {
  const m = Object.create(Wh);
  U.toFlatObject(l, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = l && l.message ? l.message : "Error", v = r == null && l ? l.code : r;
  return ce.call(m, p, v, s, o, c), l && m.cause == null && Object.defineProperty(m, "cause", { value: l, configurable: !0 }), m.name = l && l.name || "Error", d && Object.assign(m, d), m;
};
const Eb = null;
function dc(l) {
  return U.isPlainObject(l) || U.isArray(l);
}
function Ph(l) {
  return U.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function $0(l, r, s) {
  return l ? l.concat(r).map(function(c, d) {
    return c = Ph(c), !s && d ? "[" + c + "]" : c;
  }).join(s ? "." : "") : r;
}
function Sb(l) {
  return U.isArray(l) && !l.some(dc);
}
const wb = U.toFlatObject(U, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Cu(l, r, s) {
  if (!U.isObject(l))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = U.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(M, D) {
    return !U.isUndefined(D[M]);
  });
  const o = s.metaTokens, c = s.visitor || b, d = s.dots, m = s.indexes, v = (s.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(r);
  if (!U.isFunction(c))
    throw new TypeError("visitor must be a function");
  function y(A) {
    if (A === null) return "";
    if (U.isDate(A))
      return A.toISOString();
    if (U.isBoolean(A))
      return A.toString();
    if (!v && U.isBlob(A))
      throw new ce("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(A) || U.isTypedArray(A) ? v && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function b(A, M, D) {
    let G = A;
    if (A && !D && typeof A == "object") {
      if (U.endsWith(M, "{}"))
        M = o ? M : M.slice(0, -2), A = JSON.stringify(A);
      else if (U.isArray(A) && Sb(A) || (U.isFileList(A) || U.endsWith(M, "[]")) && (G = U.toArray(A)))
        return M = Ph(M), G.forEach(function(Q, F) {
          !(U.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? $0([M], F, d) : m === null ? M : M + "[]",
            y(Q)
          );
        }), !1;
    }
    return dc(A) ? !0 : (r.append($0(D, M, d), y(A)), !1);
  }
  const R = [], C = Object.assign(wb, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: dc
  });
  function k(A, M) {
    if (!U.isUndefined(A)) {
      if (R.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + M.join("."));
      R.push(A), U.forEach(A, function(G, K) {
        (!(U.isUndefined(G) || G === null) && c.call(
          r,
          G,
          U.isString(K) ? K.trim() : K,
          M,
          C
        )) === !0 && k(G, M ? M.concat(K) : [K]);
      }), R.pop();
    }
  }
  if (!U.isObject(l))
    throw new TypeError("data must be an object");
  return k(l), r;
}
function F0(l) {
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
  this._pairs = [], l && Cu(l, this, r);
}
const eg = Rc.prototype;
eg.append = function(r, s) {
  this._pairs.push([r, s]);
};
eg.toString = function(r) {
  const s = r ? function(o) {
    return r.call(this, o, F0);
  } : F0;
  return this._pairs.map(function(c) {
    return s(c[0]) + "=" + s(c[1]);
  }, "").join("&");
};
function xb(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function tg(l, r, s) {
  if (!r)
    return l;
  const o = s && s.encode || xb;
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
class W0 {
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
const ng = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rb = typeof URLSearchParams < "u" ? URLSearchParams : Rc, Tb = typeof FormData < "u" ? FormData : null, Ab = typeof Blob < "u" ? Blob : null, Cb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rb,
    FormData: Tb,
    Blob: Ab
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Tc = typeof window < "u" && typeof document < "u", mc = typeof navigator == "object" && navigator || void 0, Nb = Tc && (!mc || ["ReactNative", "NativeScript", "NS"].indexOf(mc.product) < 0), _b = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ob = Tc && window.location.href || "http://localhost", Db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tc,
  hasStandardBrowserEnv: Nb,
  hasStandardBrowserWebWorkerEnv: _b,
  navigator: mc,
  origin: Ob
}, Symbol.toStringTag, { value: "Module" })), pt = {
  ...Db,
  ...Cb
};
function Ub(l, r) {
  return Cu(l, new pt.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return pt.isNode && U.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function jb(l) {
  return U.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Mb(l) {
  const r = {}, s = Object.keys(l);
  let o;
  const c = s.length;
  let d;
  for (o = 0; o < c; o++)
    d = s[o], r[d] = l[d];
  return r;
}
function ag(l) {
  function r(s, o, c, d) {
    let m = s[d++];
    if (m === "__proto__") return !0;
    const p = Number.isFinite(+m), v = d >= s.length;
    return m = !m && U.isArray(c) ? c.length : m, v ? (U.hasOwnProp(c, m) ? c[m] = [c[m], o] : c[m] = o, !p) : ((!c[m] || !U.isObject(c[m])) && (c[m] = []), r(s, o, c[m], d) && U.isArray(c[m]) && (c[m] = Mb(c[m])), !p);
  }
  if (U.isFormData(l) && U.isFunction(l.entries)) {
    const s = {};
    return U.forEachEntry(l, (o, c) => {
      r(jb(o), c, s, 0);
    }), s;
  }
  return null;
}
function zb(l, r, s) {
  if (U.isString(l))
    try {
      return (r || JSON.parse)(l), U.trim(l);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (s || JSON.stringify)(l);
}
const ki = {
  transitional: ng,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const o = s.getContentType() || "", c = o.indexOf("application/json") > -1, d = U.isObject(r);
    if (d && U.isHTMLForm(r) && (r = new FormData(r)), U.isFormData(r))
      return c ? JSON.stringify(ag(r)) : r;
    if (U.isArrayBuffer(r) || U.isBuffer(r) || U.isStream(r) || U.isFile(r) || U.isBlob(r) || U.isReadableStream(r))
      return r;
    if (U.isArrayBufferView(r))
      return r.buffer;
    if (U.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let p;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Ub(r, this.formSerializer).toString();
      if ((p = U.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return Cu(
          p ? { "files[]": r } : r,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return d || c ? (s.setContentType("application/json", !1), zb(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || ki.transitional, o = s && s.forcedJSONParsing, c = this.responseType === "json";
    if (U.isResponse(r) || U.isReadableStream(r))
      return r;
    if (r && U.isString(r) && (o && !this.responseType || c)) {
      const m = !(s && s.silentJSONParsing) && c;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (p) {
        if (m)
          throw p.name === "SyntaxError" ? ce.from(p, ce.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
    FormData: pt.classes.FormData,
    Blob: pt.classes.Blob
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
  ki.headers[l] = {};
});
const Lb = U.toObjectSet([
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
]), Hb = (l) => {
  const r = {};
  let s, o, c;
  return l && l.split(`
`).forEach(function(m) {
    c = m.indexOf(":"), s = m.substring(0, c).trim().toLowerCase(), o = m.substring(c + 1).trim(), !(!s || r[s] && Lb[s]) && (s === "set-cookie" ? r[s] ? r[s].push(o) : r[s] = [o] : r[s] = r[s] ? r[s] + ", " + o : o);
  }), r;
}, I0 = /* @__PURE__ */ Symbol("internals");
function Ai(l) {
  return l && String(l).trim().toLowerCase();
}
function mu(l) {
  return l === !1 || l == null ? l : U.isArray(l) ? l.map(mu) : String(l);
}
function Bb(l) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = s.exec(l); )
    r[o[1]] = o[2];
  return r;
}
const qb = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
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
function kb(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, o) => s.toUpperCase() + o);
}
function Gb(l, r) {
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
let _t = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, o) {
    const c = this;
    function d(p, v, y) {
      const b = Ai(v);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const R = U.findKey(c, b);
      (!R || c[R] === void 0 || y === !0 || y === void 0 && c[R] !== !1) && (c[R || v] = mu(p));
    }
    const m = (p, v) => U.forEach(p, (y, b) => d(y, b, v));
    if (U.isPlainObject(r) || r instanceof this.constructor)
      m(r, s);
    else if (U.isString(r) && (r = r.trim()) && !qb(r))
      m(Hb(r), s);
    else if (U.isObject(r) && U.isIterable(r)) {
      let p = {}, v, y;
      for (const b of r) {
        if (!U.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = b[0]] = (v = p[y]) ? U.isArray(v) ? [...v, b[1]] : [v, b[1]] : b[1];
      }
      m(p, s);
    } else
      r != null && d(s, r, o);
    return this;
  }
  get(r, s) {
    if (r = Ai(r), r) {
      const o = U.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!s)
          return c;
        if (s === !0)
          return Bb(c);
        if (U.isFunction(s))
          return s.call(this, c, o);
        if (U.isRegExp(s))
          return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = Ai(r), r) {
      const o = U.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!s || ac(this, this[o], o, s)));
    }
    return !1;
  }
  delete(r, s) {
    const o = this;
    let c = !1;
    function d(m) {
      if (m = Ai(m), m) {
        const p = U.findKey(o, m);
        p && (!s || ac(o, o[p], p, s)) && (delete o[p], c = !0);
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
        s[m] = mu(c), delete s[d];
        return;
      }
      const p = r ? kb(d) : String(d).trim();
      p !== d && delete s[d], s[p] = mu(c), o[p] = !0;
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
    const o = (this[I0] = this[I0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function d(m) {
      const p = Ai(m);
      o[p] || (Gb(c, m), o[p] = !0);
    }
    return U.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
_t.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(_t.prototype, ({ value: l }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(o) {
      this[s] = o;
    }
  };
});
U.freezeMethods(_t);
function lc(l, r) {
  const s = this || ki, o = r || s, c = _t.from(o.headers);
  let d = o.data;
  return U.forEach(l, function(p) {
    d = p.call(s, d, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), d;
}
function lg(l) {
  return !!(l && l.__CANCEL__);
}
function Cl(l, r, s) {
  ce.call(this, l ?? "canceled", ce.ERR_CANCELED, r, s), this.name = "CanceledError";
}
U.inherits(Cl, ce, {
  __CANCEL__: !0
});
function ig(l, r, s) {
  const o = s.config.validateStatus;
  !s.status || !o || o(s.status) ? l(s) : r(new ce(
    "Request failed with status code " + s.status,
    [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function Yb(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function Xb(l, r) {
  l = l || 10;
  const s = new Array(l), o = new Array(l);
  let c = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(v) {
    const y = Date.now(), b = o[d];
    m || (m = y), s[c] = v, o[c] = y;
    let R = d, C = 0;
    for (; R !== c; )
      C += s[R++], R = R % l;
    if (c = (c + 1) % l, c === d && (d = (d + 1) % l), y - m < r)
      return;
    const k = b && y - b;
    return k ? Math.round(C * 1e3 / k) : void 0;
  };
}
function Vb(l, r) {
  let s = 0, o = 1e3 / r, c, d;
  const m = (y, b = Date.now()) => {
    s = b, c = null, d && (clearTimeout(d), d = null), l(...y);
  };
  return [(...y) => {
    const b = Date.now(), R = b - s;
    R >= o ? m(y, b) : (c = y, d || (d = setTimeout(() => {
      d = null, m(c);
    }, o - R)));
  }, () => c && m(c)];
}
const vu = (l, r, s = 3) => {
  let o = 0;
  const c = Xb(50, 250);
  return Vb((d) => {
    const m = d.loaded, p = d.lengthComputable ? d.total : void 0, v = m - o, y = c(v), b = m <= p;
    o = m;
    const R = {
      loaded: m,
      total: p,
      progress: p ? m / p : void 0,
      bytes: v,
      rate: y || void 0,
      estimated: y && p && b ? (p - m) / y : void 0,
      event: d,
      lengthComputable: p != null,
      [r ? "download" : "upload"]: !0
    };
    l(R);
  }, s);
}, P0 = (l, r) => {
  const s = l != null;
  return [(o) => r[0]({
    lengthComputable: s,
    total: l,
    loaded: o
  }), r[1]];
}, eh = (l) => (...r) => U.asap(() => l(...r)), Kb = pt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (s) => (s = new URL(s, pt.origin), l.protocol === s.protocol && l.host === s.host && (r || l.port === s.port)))(
  new URL(pt.origin),
  pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)
) : () => !0, Qb = pt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, r, s, o, c, d, m) {
      if (typeof document > "u") return;
      const p = [`${l}=${encodeURIComponent(r)}`];
      U.isNumber(s) && p.push(`expires=${new Date(s).toUTCString()}`), U.isString(o) && p.push(`path=${o}`), U.isString(c) && p.push(`domain=${c}`), d === !0 && p.push("secure"), U.isString(m) && p.push(`SameSite=${m}`), document.cookie = p.join("; ");
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
function Zb(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Jb(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function rg(l, r, s) {
  let o = !Zb(r);
  return l && (o || s == !1) ? Jb(l, r) : r;
}
const th = (l) => l instanceof _t ? { ...l } : l;
function Ua(l, r) {
  r = r || {};
  const s = {};
  function o(y, b, R, C) {
    return U.isPlainObject(y) && U.isPlainObject(b) ? U.merge.call({ caseless: C }, y, b) : U.isPlainObject(b) ? U.merge({}, b) : U.isArray(b) ? b.slice() : b;
  }
  function c(y, b, R, C) {
    if (U.isUndefined(b)) {
      if (!U.isUndefined(y))
        return o(void 0, y, R, C);
    } else return o(y, b, R, C);
  }
  function d(y, b) {
    if (!U.isUndefined(b))
      return o(void 0, b);
  }
  function m(y, b) {
    if (U.isUndefined(b)) {
      if (!U.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, b);
  }
  function p(y, b, R) {
    if (R in r)
      return o(y, b);
    if (R in l)
      return o(void 0, y);
  }
  const v = {
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
    validateStatus: p,
    headers: (y, b, R) => c(th(y), th(b), R, !0)
  };
  return U.forEach(Object.keys({ ...l, ...r }), function(b) {
    const R = v[b] || c, C = R(l[b], r[b], b);
    U.isUndefined(C) && R !== p || (s[b] = C);
  }), s;
}
const ug = (l) => {
  const r = Ua({}, l);
  let { data: s, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: d, headers: m, auth: p } = r;
  if (r.headers = m = _t.from(m), r.url = tg(rg(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), p && m.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), U.isFormData(s)) {
    if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (U.isFunction(s.getHeaders)) {
      const v = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(v).forEach(([b, R]) => {
        y.includes(b.toLowerCase()) && m.set(b, R);
      });
    }
  }
  if (pt.hasStandardBrowserEnv && (o && U.isFunction(o) && (o = o(r)), o || o !== !1 && Kb(r.url))) {
    const v = c && d && Qb.read(d);
    v && m.set(c, v);
  }
  return r;
}, $b = typeof XMLHttpRequest < "u", Fb = $b && function(l) {
  return new Promise(function(s, o) {
    const c = ug(l);
    let d = c.data;
    const m = _t.from(c.headers).normalize();
    let { responseType: p, onUploadProgress: v, onDownloadProgress: y } = c, b, R, C, k, A;
    function M() {
      k && k(), A && A(), c.cancelToken && c.cancelToken.unsubscribe(b), c.signal && c.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(c.method.toUpperCase(), c.url, !0), D.timeout = c.timeout;
    function G() {
      if (!D)
        return;
      const Q = _t.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), W = {
        data: !p || p === "text" || p === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: Q,
        config: l,
        request: D
      };
      ig(function(ie) {
        s(ie), M();
      }, function(ie) {
        o(ie), M();
      }, W), D = null;
    }
    "onloadend" in D ? D.onloadend = G : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, D.onabort = function() {
      D && (o(new ce("Request aborted", ce.ECONNABORTED, l, D)), D = null);
    }, D.onerror = function(F) {
      const W = F && F.message ? F.message : "Network Error", he = new ce(W, ce.ERR_NETWORK, l, D);
      he.event = F || null, o(he), D = null;
    }, D.ontimeout = function() {
      let F = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const W = c.transitional || ng;
      c.timeoutErrorMessage && (F = c.timeoutErrorMessage), o(new ce(
        F,
        W.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
        l,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && U.forEach(m.toJSON(), function(F, W) {
      D.setRequestHeader(W, F);
    }), U.isUndefined(c.withCredentials) || (D.withCredentials = !!c.withCredentials), p && p !== "json" && (D.responseType = c.responseType), y && ([C, A] = vu(y, !0), D.addEventListener("progress", C)), v && D.upload && ([R, k] = vu(v), D.upload.addEventListener("progress", R), D.upload.addEventListener("loadend", k)), (c.cancelToken || c.signal) && (b = (Q) => {
      D && (o(!Q || Q.type ? new Cl(null, l, D) : Q), D.abort(), D = null);
    }, c.cancelToken && c.cancelToken.subscribe(b), c.signal && (c.signal.aborted ? b() : c.signal.addEventListener("abort", b)));
    const K = Yb(c.url);
    if (K && pt.protocols.indexOf(K) === -1) {
      o(new ce("Unsupported protocol " + K + ":", ce.ERR_BAD_REQUEST, l));
      return;
    }
    D.send(d || null);
  });
}, Wb = (l, r) => {
  const { length: s } = l = l ? l.filter(Boolean) : [];
  if (r || s) {
    let o = new AbortController(), c;
    const d = function(y) {
      if (!c) {
        c = !0, p();
        const b = y instanceof Error ? y : this.reason;
        o.abort(b instanceof ce ? b : new Cl(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new ce(`timeout ${r} of ms exceeded`, ce.ETIMEDOUT));
    }, r);
    const p = () => {
      l && (m && clearTimeout(m), m = null, l.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), l = null);
    };
    l.forEach((y) => y.addEventListener("abort", d));
    const { signal: v } = o;
    return v.unsubscribe = () => U.asap(p), v;
  }
}, Ib = function* (l, r) {
  let s = l.byteLength;
  if (s < r) {
    yield l;
    return;
  }
  let o = 0, c;
  for (; o < s; )
    c = o + r, yield l.slice(o, c), o = c;
}, Pb = async function* (l, r) {
  for await (const s of eE(l))
    yield* Ib(s, r);
}, eE = async function* (l) {
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
}, nh = (l, r, s, o) => {
  const c = Pb(l, r);
  let d = 0, m, p = (v) => {
    m || (m = !0, o && o(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: y, value: b } = await c.next();
        if (y) {
          p(), v.close();
          return;
        }
        let R = b.byteLength;
        if (s) {
          let C = d += R;
          s(C);
        }
        v.enqueue(new Uint8Array(b));
      } catch (y) {
        throw p(y), y;
      }
    },
    cancel(v) {
      return p(v), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, ah = 64 * 1024, { isFunction: ou } = U, tE = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(U.global), {
  ReadableStream: lh,
  TextEncoder: ih
} = U.global, rh = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, nE = (l) => {
  l = U.merge.call({
    skipUndefined: !0
  }, tE, l);
  const { fetch: r, Request: s, Response: o } = l, c = r ? ou(r) : typeof fetch == "function", d = ou(s), m = ou(o);
  if (!c)
    return !1;
  const p = c && ou(lh), v = c && (typeof ih == "function" ? /* @__PURE__ */ ((A) => (M) => A.encode(M))(new ih()) : async (A) => new Uint8Array(await new s(A).arrayBuffer())), y = d && p && rh(() => {
    let A = !1;
    const M = new s(pt.origin, {
      body: new lh(),
      method: "POST",
      get duplex() {
        return A = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !M;
  }), b = m && p && rh(() => U.isReadableStream(new o("").body)), R = {
    stream: b && ((A) => A.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
    !R[A] && (R[A] = (M, D) => {
      let G = M && M[A];
      if (G)
        return G.call(M);
      throw new ce(`Response type '${A}' is not supported`, ce.ERR_NOT_SUPPORT, D);
    });
  });
  const C = async (A) => {
    if (A == null)
      return 0;
    if (U.isBlob(A))
      return A.size;
    if (U.isSpecCompliantForm(A))
      return (await new s(pt.origin, {
        method: "POST",
        body: A
      }).arrayBuffer()).byteLength;
    if (U.isArrayBufferView(A) || U.isArrayBuffer(A))
      return A.byteLength;
    if (U.isURLSearchParams(A) && (A = A + ""), U.isString(A))
      return (await v(A)).byteLength;
  }, k = async (A, M) => {
    const D = U.toFiniteNumber(A.getContentLength());
    return D ?? C(M);
  };
  return async (A) => {
    let {
      url: M,
      method: D,
      data: G,
      signal: K,
      cancelToken: Q,
      timeout: F,
      onDownloadProgress: W,
      onUploadProgress: he,
      responseType: ie,
      headers: P,
      withCredentials: te = "same-origin",
      fetchOptions: we
    } = ug(A), Le = r || fetch;
    ie = ie ? (ie + "").toLowerCase() : "text";
    let Re = Wb([K, Q && Q.toAbortSignal()], F), Me = null;
    const Xe = Re && Re.unsubscribe && (() => {
      Re.unsubscribe();
    });
    let Ie;
    try {
      if (he && y && D !== "get" && D !== "head" && (Ie = await k(P, G)) !== 0) {
        let Ne = new s(M, {
          method: "POST",
          body: G,
          duplex: "half"
        }), S;
        if (U.isFormData(G) && (S = Ne.headers.get("content-type")) && P.setContentType(S), Ne.body) {
          const [L, V] = P0(
            Ie,
            vu(eh(he))
          );
          G = nh(Ne.body, ah, L, V);
        }
      }
      U.isString(te) || (te = te ? "include" : "omit");
      const X = d && "credentials" in s.prototype, q = {
        ...we,
        signal: Re,
        method: D.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: G,
        duplex: "half",
        credentials: X ? te : void 0
      };
      Me = d && new s(M, q);
      let Y = await (d ? Le(Me, we) : Le(M, q));
      const de = b && (ie === "stream" || ie === "response");
      if (b && (W || de && Xe)) {
        const Ne = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Ne[Z] = Y[Z];
        });
        const S = U.toFiniteNumber(Y.headers.get("content-length")), [L, V] = W && P0(
          S,
          vu(eh(W), !0)
        ) || [];
        Y = new o(
          nh(Y.body, ah, L, () => {
            V && V(), Xe && Xe();
          }),
          Ne
        );
      }
      ie = ie || "text";
      let xe = await R[U.findKey(R, ie) || "text"](Y, A);
      return !de && Xe && Xe(), await new Promise((Ne, S) => {
        ig(Ne, S, {
          data: xe,
          headers: _t.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: A,
          request: Me
        });
      });
    } catch (X) {
      throw Xe && Xe(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new ce("Network Error", ce.ERR_NETWORK, A, Me),
        {
          cause: X.cause || X
        }
      ) : ce.from(X, X && X.code, A, Me);
    }
  };
}, aE = /* @__PURE__ */ new Map(), sg = (l) => {
  let r = l && l.env || {};
  const { fetch: s, Request: o, Response: c } = r, d = [
    o,
    c,
    s
  ];
  let m = d.length, p = m, v, y, b = aE;
  for (; p--; )
    v = d[p], y = b.get(v), y === void 0 && b.set(v, y = p ? /* @__PURE__ */ new Map() : nE(r)), b = y;
  return y;
};
sg();
const Ac = {
  http: Eb,
  xhr: Fb,
  fetch: {
    get: sg
  }
};
U.forEach(Ac, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const uh = (l) => `- ${l}`, lE = (l) => U.isFunction(l) || l === null || l === !1;
function iE(l, r) {
  l = U.isArray(l) ? l : [l];
  const { length: s } = l;
  let o, c;
  const d = {};
  for (let m = 0; m < s; m++) {
    o = l[m];
    let p;
    if (c = o, !lE(o) && (c = Ac[(p = String(o)).toLowerCase()], c === void 0))
      throw new ce(`Unknown adapter '${p}'`);
    if (c && (U.isFunction(c) || (c = c.get(r))))
      break;
    d[p || "#" + m] = c;
  }
  if (!c) {
    const m = Object.entries(d).map(
      ([v, y]) => `adapter ${v} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = s ? m.length > 1 ? `since :
` + m.map(uh).join(`
`) : " " + uh(m[0]) : "as no adapter specified";
    throw new ce(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const og = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: iE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ac
};
function ic(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Cl(null, l);
}
function sh(l) {
  return ic(l), l.headers = _t.from(l.headers), l.data = lc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), og.getAdapter(l.adapter || ki.adapter, l)(l).then(function(o) {
    return ic(l), o.data = lc.call(
      l,
      l.transformResponse,
      o
    ), o.headers = _t.from(o.headers), o;
  }, function(o) {
    return lg(o) || (ic(l), o && o.response && (o.response.data = lc.call(
      l,
      l.transformResponse,
      o.response
    ), o.response.headers = _t.from(o.response.headers))), Promise.reject(o);
  });
}
const cg = "1.13.2", Nu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  Nu[l] = function(o) {
    return typeof o === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const oh = {};
Nu.transitional = function(r, s, o) {
  function c(d, m) {
    return "[Axios v" + cg + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, p) => {
    if (r === !1)
      throw new ce(
        c(m, " has been removed" + (s ? " in " + s : "")),
        ce.ERR_DEPRECATED
      );
    return s && !oh[m] && (oh[m] = !0, console.warn(
      c(
        m,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, m, p) : !0;
  };
};
Nu.spelling = function(r) {
  return (s, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function rE(l, r, s) {
  if (typeof l != "object")
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(l);
  let c = o.length;
  for (; c-- > 0; ) {
    const d = o[c], m = r[d];
    if (m) {
      const p = l[d], v = p === void 0 || m(p, d, l);
      if (v !== !0)
        throw new ce("option " + d + " must be " + v, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new ce("Unknown option " + d, ce.ERR_BAD_OPTION);
  }
}
const hu = {
  assertOptions: rE,
  validators: Nu
}, fn = hu.validators;
let Da = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new W0(),
      response: new W0()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = Ua(this.defaults, s);
    const { transitional: o, paramsSerializer: c, headers: d } = s;
    o !== void 0 && hu.assertOptions(o, {
      silentJSONParsing: fn.transitional(fn.boolean),
      forcedJSONParsing: fn.transitional(fn.boolean),
      clarifyTimeoutError: fn.transitional(fn.boolean)
    }, !1), c != null && (U.isFunction(c) ? s.paramsSerializer = {
      serialize: c
    } : hu.assertOptions(c, {
      encode: fn.function,
      serialize: fn.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), hu.assertOptions(s, {
      baseUrl: fn.spelling("baseURL"),
      withXsrfToken: fn.spelling("withXSRFToken")
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
    ), s.headers = _t.concat(m, d);
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function(M) {
      typeof M.runWhen == "function" && M.runWhen(s) === !1 || (v = v && M.synchronous, p.unshift(M.fulfilled, M.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(M) {
      y.push(M.fulfilled, M.rejected);
    });
    let b, R = 0, C;
    if (!v) {
      const A = [sh.bind(this), void 0];
      for (A.unshift(...p), A.push(...y), C = A.length, b = Promise.resolve(s); R < C; )
        b = b.then(A[R++], A[R++]);
      return b;
    }
    C = p.length;
    let k = s;
    for (; R < C; ) {
      const A = p[R++], M = p[R++];
      try {
        k = A(k);
      } catch (D) {
        M.call(this, D);
        break;
      }
    }
    try {
      b = sh.call(this, k);
    } catch (A) {
      return Promise.reject(A);
    }
    for (R = 0, C = y.length; R < C; )
      b = b.then(y[R++], y[R++]);
    return b;
  }
  getUri(r) {
    r = Ua(this.defaults, r);
    const s = rg(r.baseURL, r.url, r.allowAbsoluteUrls);
    return tg(s, r.params, r.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(r) {
  Da.prototype[r] = function(s, o) {
    return this.request(Ua(o || {}, {
      method: r,
      url: s,
      data: (o || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(r) {
  function s(o) {
    return function(d, m, p) {
      return this.request(Ua(p || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  Da.prototype[r] = s(), Da.prototype[r + "Form"] = s(!0);
});
let uE = class fg {
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
      const m = new Promise((p) => {
        o.subscribe(p), d = p;
      }).then(c);
      return m.cancel = function() {
        o.unsubscribe(d);
      }, m;
    }, r(function(d, m, p) {
      o.reason || (o.reason = new Cl(d, m, p), s(o.reason));
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
      token: new fg(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function sE(l) {
  return function(s) {
    return l.apply(null, s);
  };
}
function oE(l) {
  return U.isObject(l) && l.isAxiosError === !0;
}
const hc = {
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
Object.entries(hc).forEach(([l, r]) => {
  hc[r] = l;
});
function dg(l) {
  const r = new Da(l), s = Xh(Da.prototype.request, r);
  return U.extend(s, Da.prototype, r, { allOwnKeys: !0 }), U.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(c) {
    return dg(Ua(l, c));
  }, s;
}
const He = dg(ki);
He.Axios = Da;
He.CanceledError = Cl;
He.CancelToken = uE;
He.isCancel = lg;
He.VERSION = cg;
He.toFormData = Cu;
He.AxiosError = ce;
He.Cancel = He.CanceledError;
He.all = function(r) {
  return Promise.all(r);
};
He.spread = sE;
He.isAxiosError = oE;
He.mergeConfig = Ua;
He.AxiosHeaders = _t;
He.formToJSON = (l) => ag(U.isHTMLForm(l) ? new FormData(l) : l);
He.getAdapter = og.getAdapter;
He.HttpStatusCode = hc;
He.default = He;
const {
  Axios: zE,
  AxiosError: LE,
  CanceledError: HE,
  isCancel: BE,
  CancelToken: qE,
  VERSION: kE,
  all: GE,
  Cancel: YE,
  isAxiosError: XE,
  spread: VE,
  toFormData: KE,
  AxiosHeaders: QE,
  HttpStatusCode: ZE,
  formToJSON: JE,
  getAdapter: $E,
  mergeConfig: FE
} = He, cE = [
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
], mg = "WEBCOMPONENT";
function fE(l) {
  l ? localStorage.setItem(ve.AUTHORITY_OVERRIDE, l) : localStorage.removeItem(ve.AUTHORITY_OVERRIDE);
}
function dE() {
  return localStorage.getItem(ve.AUTHORITY_OVERRIDE);
}
function ch() {
  localStorage.removeItem(ve.AUTHORITY_OVERRIDE);
}
function mE() {
  const l = dE();
  if (l && Object.values(Wt).includes(l))
    return l;
  const r = window.location.hostname;
  return r === Dn.HOSTNAME || r === Dn.IP || Dn.IP_PATTERN.test(r) || r.startsWith(`${Je.DEV}.`) || r.startsWith(`${Je.DEV}-`) ? Wt.DEV : r.startsWith(`${Je.TEST}.`) || r.startsWith(`${Je.TEST}-`) ? Wt.TEST : r.startsWith(`${Je.STAGE}.`) || r.startsWith(`${Je.STAGE}-`) ? Wt.STAGE : Wt.PROD;
}
function hE(l) {
  if (mg === wc.TEST)
    return "";
  const r = mE();
  return l.startsWith("/global") ? Ov[r] : _v[r];
}
const Nl = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return mg === wc.TEST ? r : `${hE(r)}${r}`;
}, gE = async (l) => {
  try {
    return cE?.find(
      (s) => s?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function _l() {
  const l = localStorage.getItem(ve.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), s = await gE(r?.domain);
  return {
    [Po.X_BRAND_ID]: s?.subsidiaryName,
    [Po.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [Po.X_BRAND_DOMAIN]: r?.domain
  };
}
const yE = async (l, r) => {
  const s = Nl(Tl.AUTH), o = { username: l, password: r };
  try {
    const c = await He.post(s, o, {
      headers: await _l()
    }), d = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: d || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === xu.UNAUTHORIZED ? new Error(st.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(st.AUTH_FAILED);
  }
}, pE = async (l) => {
  const r = Nl(Tl.REGISTER);
  try {
    return (await He.post(r, l, {
      headers: await _l()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === xu.INTERNAL_SERVER_ERROR ? new Error(st.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(st.REGISTRATION_FAILED);
  }
}, Cc = async (l) => {
  const r = Nl(Tl.CHECK_EMAIL);
  try {
    return (await He.post(
      r,
      { email: l },
      {
        headers: await _l()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, fh = async (l) => {
  const r = Nl(Tl.FORGOT_PASSWORD), s = { email: l };
  try {
    return (await He.post(r, s, {
      headers: await _l()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === xu.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(st.RESET_LINK_FAILED);
  }
}, vE = async (l) => {
  const r = Nl(Tl.REFRESH_TOKEN), s = { refresh_token: l };
  try {
    const o = await He.post(r, s, {
      headers: await _l()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, bE = async (l) => {
  const r = Nl(Tl.LOGOUT), s = { refresh_token: l };
  try {
    return (await He.post(r, s, {
      headers: await _l()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === xu.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, EE = () => {
  try {
    const l = Ct(Ge.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = Li(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch (l) {
    return console.error(`${$e.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, bu = () => Ct(Ge.REFRESH_TOKEN, !1) || localStorage.getItem(ve.REFRESH_TOKEN), Ui = (l) => {
  try {
    const r = Li(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch {
    return !0;
  }
}, gc = (l) => !Ui(l);
let gu = null;
const El = () => {
  gu && (clearInterval(gu), gu = null);
}, Nc = async (l) => {
  try {
    const r = l || bu();
    if (!r)
      return !1;
    const s = await vE(r);
    if (!s?.tokens?.access_token)
      return !1;
    const o = s.tokens, c = yu(o.access_token);
    if (!c)
      return !1;
    const d = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    _a(Ge.ACCESS_TOKEN, o.access_token, d, !0);
    const m = s.x_credential || c.decoded.x_credentials;
    if (m && _a(Ge.X_CREDENTIAL, m, d, !1), localStorage.setItem(ve.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      ve.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(ve.REFRESH_TOKEN, o.refresh_token);
      const p = 720 * 60 * 60;
      _a(Ge.REFRESH_TOKEN, o.refresh_token, p, !0), localStorage.getItem(ve.REFRESH_TOKEN_TIME) && localStorage.setItem(ve.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${$e.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, SE = async () => {
  const l = bu();
  if (!(Ct(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN)) || !l || !gc(l))
    return El(), !0;
  El();
  const s = 180 * 1e3;
  return gu = setInterval(async () => {
    const o = bu();
    if (!(Ct(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN))) {
      El();
      return;
    }
    if (!o || !gc(o)) {
      El();
      return;
    }
    const d = Ct(Ge.X_CREDENTIAL, !1) || Ct(Ge.X_CREDENTIAL_OLD, !1), m = Ct(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN);
    (!d || Ui(d) || !m || Ui(m)) && await Nc(o);
  }, s), () => El();
}, dh = (l) => {
  try {
    if (!localStorage.getItem(ve.REFRESH_TOKEN_TIME))
      return console.log(
        `${$e.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${$e.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = Ct(Ge.X_CREDENTIAL, !1) || Ct(Ge.X_CREDENTIAL_OLD, !1), o = Ct(Ge.ACCESS_TOKEN, !1);
    let c = null, d = !1;
    if (o && (c = o), s && (d = !0), c || (c = localStorage.getItem(ve.ACCESS_TOKEN)), !c || !d)
      return !1;
    const m = localStorage.getItem(ve.ACCESS_TOKEN_EXPIRES);
    if (m && Date.now() >= parseInt(m))
      return !1;
    try {
      const p = Li(c), v = Math.floor(Date.now() / 1e3);
      return !(!p.exp || v >= p.exp);
    } catch (p) {
      return console.error(`${$e.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, p), !1;
    }
  } catch (r) {
    return console.error(`${$e.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, wE = async (l) => {
  if (dh(l))
    return !0;
  try {
    if (!localStorage.getItem(ve.REFRESH_TOKEN_TIME))
      return !1;
    const o = bu();
    if (!o || !gc(o))
      return !1;
    const c = Ct(Ge.X_CREDENTIAL, !1) || Ct(Ge.X_CREDENTIAL_OLD, !1), d = Ct(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN), m = !c || Ui(c), p = !d || Ui(d);
    return !m && !p || !await Nc(o) ? !1 : dh(l);
  } catch (s) {
    return console.error(
      `${$e.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      s
    ), !1;
  }
}, xE = () => {
  try {
    const l = localStorage.getItem(ve.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < Nv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${$e.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, RE = () => {
  su(Ge.ACCESS_TOKEN), su(Ge.X_CREDENTIAL), su(Ge.X_CREDENTIAL_OLD), su(Ge.REFRESH_TOKEN), [
    ve.REFRESH_TOKEN,
    ve.REFRESH_TOKEN_TIME,
    ve.ACCESS_TOKEN,
    ve.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${$e.AUTH} All authentication tokens and state cleared`);
}, hg = async (l, r, s = !1) => {
  const o = await yE(l, r), { tokens: c, x_credential: d } = o;
  if (c.access_token) {
    const m = Li(c.access_token), p = (m.exp || 0) - Math.floor(Date.now() / 1e3);
    _a(Ge.ACCESS_TOKEN, c.access_token, p, !0);
    const v = d || m.x_credentials;
    v ? (_a(Ge.X_CREDENTIAL, v, p, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), v && _a(Ge.X_CREDENTIAL, v, p, !1), localStorage.setItem(ve.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      ve.ACCESS_TOKEN_EXPIRES,
      (Date.now() + p * 1e3).toString()
    ), localStorage.setItem(ve.REFRESH_TOKEN, c.refresh_token);
    const y = 720 * 60 * 60;
    _a(Ge.REFRESH_TOKEN, c.refresh_token, y, !0), s && c.refresh_token ? (localStorage.setItem(ve.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${$e.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(ve.REFRESH_TOKEN_TIME), console.log(
      `${$e.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, yu = (l) => {
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
      `${$e.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, _u = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", Eu = (l) => {
  if (!l || typeof l != "object")
    return !1;
  const r = l;
  return typeof r.getModifierState != "function" ? !1 : r.getModifierState("CapsLock");
}, TE = ({
  onSuccess: l,
  onError: r,
  handleClose: s,
  onSignIn: o,
  title: c = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [p, v] = x.useState(m), [y, b] = x.useState(""), [R, C] = x.useState(""), [k, A] = x.useState(""), [M, D] = x.useState(!1), [G, K] = x.useState(""), [Q, F] = x.useState(""), [W, he] = x.useState(!1), [ie, P] = x.useState(!1), [te, we] = x.useState(!1), [Le, Re] = x.useState(!1), [Me, Xe] = x.useState(!1), [Ie, X] = x.useState(!1), [q, Y] = x.useState(!1), [de, xe] = x.useState(""), [Ne, S] = x.useState(!1), [L, V] = x.useState(""), [Z, ue] = x.useState(me.INFO), ne = x.useRef(null), ge = x.useRef(null), re = {
    length: k.length >= iu.MIN_LENGTH && k.length <= iu.MAX_LENGTH,
    hasNumber: bl.NUMBER.test(k),
    hasUppercase: bl.UPPERCASE.test(k),
    hasLowercase: bl.LOWERCASE.test(k),
    hasSpecialChar: K0.test(k),
    onlyAllowedChars: Q0.test(k) || k === "",
    differentFromUsername: p ? k !== p && k !== p.split("@")[0] : !0
  }, kt = ((se) => {
    if (!se) return { strength: "", color: "", width: ru.EMPTY };
    if (re.length && re.hasNumber && re.hasUppercase && re.hasLowercase && re.hasSpecialChar && re.onlyAllowedChars && re.differentFromUsername)
      return {
        strength: tc.STRONG,
        color: nc.STRONG,
        width: ru.STRONG
      };
    let it = 0;
    return re.length && it++, re.hasNumber && it++, re.hasUppercase && it++, re.hasLowercase && it++, re.hasSpecialChar && it++, re.onlyAllowedChars && it++, re.differentFromUsername && it++, it <= 2 ? {
      strength: tc.WEAK,
      color: nc.WEAK,
      width: ru.WEAK
    } : {
      strength: tc.GOOD,
      color: nc.GOOD,
      width: ru.GOOD
    };
  })(k), Mn = (se) => se ? se.length < iu.MIN_LENGTH || se.length > iu.MAX_LENGTH ? { isValid: !1, error: st.PASSWORD_LENGTH } : bl.UPPERCASE.test(se) ? bl.LOWERCASE.test(se) ? bl.NUMBER.test(se) ? K0.test(se) ? Q0.test(se) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: st.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: st.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: st.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: st.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: st.PASSWORD_UPPERCASE
  } : { isValid: !1, error: st.PASSWORD_REQUIRED };
  x.useEffect(() => {
    if (ge.current && clearTimeout(ge.current), !p) {
      Re(!1), Xe(!1), Y(!1), xe("");
      return;
    }
    if (!Ni.test(p)) {
      Re(!1), Xe(!1);
      return;
    }
    return ge.current = setTimeout(async () => {
      X(!0);
      try {
        (await Cc(p)).exists ? (Xe(!0), Re(!0)) : (Xe(!1), Re(!1));
      } catch (se) {
        console.error(`${$e.CREATE_ACCOUNT} Email check failed:`, se);
        const bt = se instanceof Error ? se.message : "Unable to verify email. You can still proceed with registration.";
        Y(!0), xe(bt), Re(!0), Xe(!1);
      } finally {
        X(!1);
      }
    }, Di.EMAIL_CHECK_DEBOUNCE), () => {
      ge.current && clearTimeout(ge.current);
    };
  }, [p]);
  const zn = p && Ni.test(p);
  x.useEffect(() => {
    const se = (bt) => {
      bt.key === "Escape" && s();
    };
    return document.addEventListener("keydown", se), () => document.removeEventListener("keydown", se);
  }, [s]);
  const Ma = (se) => {
    se.target === ne.current && s();
  }, Pt = async (se) => {
    if (se.preventDefault(), we(!0), !p || !y || !R) {
      r("Please fill in all required fields");
      return;
    }
    const bt = Mn(k);
    if (!bt.isValid) {
      F(bt.error), r(bt.error), D(!1);
      return;
    }
    if (!Ni.test(p)) {
      K(st.EMAIL_INVALID), r(st.EMAIL_INVALID);
      return;
    }
    D(!0), K(""), V("");
    try {
      const it = p.split("@")[0], Ln = await pE({
        username: it,
        email: p,
        firstName: y,
        lastName: R,
        password: k
      });
      console.log(
        `${$e.CREATE_ACCOUNT} Registration successful:`,
        Ln.message
      );
      try {
        const ca = await hg(p, k, Ne);
        l(ca);
      } catch (ca) {
        console.error(
          `${$e.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ca
        );
        const Ou = ca instanceof Error ? ca.message : "Auto-login failed";
        r(Ou);
      }
    } catch (it) {
      console.error(`${$e.CREATE_ACCOUNT} Registration failed:`, it);
      const Ln = it instanceof Error ? it.message : st.REGISTRATION_FAILED;
      V(Ln), ue(me.ERROR), r(Ln);
    } finally {
      D(!1);
    }
  }, ae = (se) => {
    if (se.key === "CapsLock" && se.type === "keydown") {
      P((bt) => !bt);
      return;
    }
    se.key !== "CapsLock" && P(Eu(se));
  }, Ve = (se) => {
    P(Eu(se));
  }, oa = () => {
    P(!1);
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    L && /* @__PURE__ */ g.jsx(
      cc,
      {
        type: Z,
        message: L,
        duration: Di.TOAST_DEFAULT_DURATION,
        onClose: () => V("")
      }
    ),
    /* @__PURE__ */ g.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ne,
        onMouseDown: Ma,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "create-account-dialog-title",
        children: /* @__PURE__ */ g.jsxs(
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
              /* @__PURE__ */ g.jsx(
                ot,
                {
                  onClick: s,
                  variant: gt.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: at.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ g.jsx(
                    "svg",
                    {
                      part: "identity-widget-create-account-close-icon",
                      className: "identity-widget-create-account-close-icon w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ g.jsx(
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
              /* @__PURE__ */ g.jsxs(
                "div",
                {
                  part: "identity-widget-create-account-header",
                  className: "identity-widget-create-account-header mb-6! text-center!",
                  children: [
                    /* @__PURE__ */ g.jsx(
                      "h2",
                      {
                        id: "create-account-dialog-title",
                        part: "identity-widget-create-account-title",
                        className: "identity-widget-create-account-title text-2xl! font-bold! text-gray-800! mb-1!",
                        children: c
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
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
              /* @__PURE__ */ g.jsxs(
                "form",
                {
                  part: "identity-widget-create-account-form",
                  onSubmit: Pt,
                  className: "identity-widget-create-account-form space-y-4!",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ g.jsx(
                          an,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: p,
                            onChange: (se) => {
                              v(se.target.value), K("");
                            },
                            placeholder: "Enter email address",
                            disabled: M,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: te && !p ? "Required" : G || "",
                            endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                              Ie && /* @__PURE__ */ g.jsx(Gh, {}),
                              !Ie && !Me && !q && p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && /* @__PURE__ */ g.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: _u,
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
                    Le && Me && !q && /* @__PURE__ */ g.jsx(
                      Sl,
                      {
                        type: me.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          Re(!1), o(p);
                        },
                        onClose: () => Re(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    Le && q && /* @__PURE__ */ g.jsx(
                      Sl,
                      {
                        type: me.ERROR,
                        message: de,
                        onClose: () => {
                          Re(!1), Y(!1), xe("");
                        },
                        className: "identity-widget-create-account-error-banner mb-4!"
                      }
                    ),
                    /* @__PURE__ */ g.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-name-row",
                        className: "identity-widget-create-account-name-row flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0",
                        children: [
                          /* @__PURE__ */ g.jsx(
                            an,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: y,
                              onChange: (se) => b(se.target.value),
                              placeholder: "First Name",
                              disabled: M,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: te && !y ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ g.jsx(
                            an,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: R,
                              onChange: (se) => C(se.target.value),
                              placeholder: "Last Name",
                              disabled: M,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: te && !R ? "Required" : ""
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-password-field",
                        className: "identity-widget-create-account-password-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ g.jsxs(
                          "div",
                          {
                            part: "identity-widget-create-account-password-input-wrap",
                            className: "identity-widget-create-account-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ g.jsx(
                                an,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: W ? "text" : "password",
                                  value: k,
                                  onChange: (se) => {
                                    A(se.target.value), F("");
                                  },
                                  onKeyDown: ae,
                                  onKeyUp: ae,
                                  onFocus: Ve,
                                  onBlur: oa,
                                  placeholder: "Enter Password...",
                                  disabled: M,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: Q,
                                  endIcon: /* @__PURE__ */ g.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => he(!W),
                                      className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": W ? "Hide password" : "Show password",
                                      children: W ? /* @__PURE__ */ g.jsx(
                                        "svg",
                                        {
                                          part: "identity-widget-create-account-password-hide-icon",
                                          className: "identity-widget-create-account-password-hide-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ g.jsx(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            }
                                          )
                                        }
                                      ) : /* @__PURE__ */ g.jsxs(
                                        "svg",
                                        {
                                          part: "identity-widget-create-account-password-show-icon",
                                          className: "identity-widget-create-account-password-show-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: [
                                            /* @__PURE__ */ g.jsx(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
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
                              ie && /* @__PURE__ */ g.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: oc.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    k && /* @__PURE__ */ g.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-strength",
                        className: "identity-widget-create-account-strength mt-2! mb-4!",
                        children: [
                          /* @__PURE__ */ g.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-strength-row",
                              className: "identity-widget-create-account-strength-row flex! items-center! justify-between! mb-2!",
                              children: [
                                /* @__PURE__ */ g.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-create-account-strength-track",
                                    className: "identity-widget-create-account-strength-track w-full! bg-gray-200! rounded-full! h-2! mr-3!",
                                    children: /* @__PURE__ */ g.jsx(
                                      "div",
                                      {
                                        part: "identity-widget-create-account-strength-fill",
                                        className: "identity-widget-create-account-strength-fill h-2! rounded-full! transition-all! duration-300!",
                                        style: {
                                          width: kt.width,
                                          backgroundColor: kt.color
                                        }
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ g.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-create-account-strength-label",
                                    className: "identity-widget-create-account-strength-label text-sm! font-medium! whitespace-nowrap!",
                                    style: { color: kt.color },
                                    children: kt.strength
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ g.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-requirements",
                              className: "identity-widget-create-account-requirements mt-3!",
                              children: [
                                /* @__PURE__ */ g.jsx(
                                  "p",
                                  {
                                    part: "identity-widget-create-account-requirements-title",
                                    className: "identity-widget-create-account-requirements-title text-sm! font-medium! text-gray-700! mb-2!",
                                    children: "Password must:"
                                  }
                                ),
                                /* @__PURE__ */ g.jsxs(
                                  "ul",
                                  {
                                    part: "identity-widget-create-account-requirements-list",
                                    className: "identity-widget-create-account-requirements-list space-y-1!",
                                    children: [
                                      /* @__PURE__ */ g.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            re.length ? /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${re.length ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "be 9-15 characters"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ g.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            re.hasNumber ? /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${re.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one number"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ g.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            re.hasUppercase ? /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${re.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one uppercase letter"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ g.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            re.hasSpecialChar ? /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${re.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one special character"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ g.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            re.onlyAllowedChars ? /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${re.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "use only the following special characters !@#$%^&*._-"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ g.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            re.differentFromUsername ? /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ g.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ g.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${re.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
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
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-remember-row",
                        className: "identity-widget-create-account-remember-row flex! items-center! mt-4! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ g.jsxs(
                          "label",
                          {
                            part: "identity-widget-create-account-remember-label",
                            className: "identity-widget-create-account-remember-label flex! items-center! m-0!",
                            children: [
                              /* @__PURE__ */ g.jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  part: "identity-widget-create-account-remember-checkbox",
                                  checked: Ne,
                                  onChange: (se) => S(se.target.checked),
                                  className: "identity-widget-create-account-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                  "aria-label": "Remember me"
                                }
                              ),
                              /* @__PURE__ */ g.jsx(
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
                    /* @__PURE__ */ g.jsx(
                      ot,
                      {
                        type: at.SUBMIT,
                        disabled: M || Me || !zn,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                        children: M ? /* @__PURE__ */ g.jsxs(
                          "span",
                          {
                            part: "identity-widget-create-account-submit-loading",
                            className: "identity-widget-create-account-submit-loading flex! items-center! justify-center!",
                            children: [
                              /* @__PURE__ */ g.jsxs(
                                "svg",
                                {
                                  part: "identity-widget-create-account-submit-spinner",
                                  className: "identity-widget-create-account-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    /* @__PURE__ */ g.jsx(
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
                                    /* @__PURE__ */ g.jsx(
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
                    /* @__PURE__ */ g.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-divider",
                        className: "identity-widget-create-account-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ g.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-line-wrap",
                              className: "identity-widget-create-account-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ g.jsx(
                                "div",
                                {
                                  part: "identity-widget-create-account-divider-line",
                                  className: "identity-widget-create-account-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ g.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-text-wrap",
                              className: "identity-widget-create-account-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ g.jsx(
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
                    /* @__PURE__ */ g.jsx(
                      ot,
                      {
                        type: at.BUTTON,
                        variant: gt.OUTLINE,
                        onClick: () => o(p),
                        disabled: M,
                        part: "identity-widget-create-account-signin-button",
                        className: "identity-widget-create-account-signin-button w-full! flex! items-center! justify-center! gap-3!",
                        children: /* @__PURE__ */ g.jsx(
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
    L && /* @__PURE__ */ g.jsx(cc, { message: L, type: Z, onClose: () => V("") })
  ] });
}, AE = ({
  email: l,
  loading: r,
  onResendLink: s,
  onBack: o,
  onClose: c
}) => {
  const d = x.useRef(null);
  x.useEffect(() => {
    const p = (v) => {
      v.key === "Escape" && c();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [c]);
  const m = (p) => {
    p.target === d.current && c();
  };
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      part: "identity-widget-reset-success-overlay",
      className: "identity-widget-reset-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ g.jsxs(
        "div",
        {
          part: "identity-widget-reset-success-modal",
          className: "identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ g.jsx(
              ot,
              {
                onClick: c,
                variant: gt.LINK,
                part: "identity-widget-reset-success-close-button",
                className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: at.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ g.jsx(
                  "svg",
                  {
                    part: "identity-widget-reset-success-close-icon",
                    className: "identity-widget-reset-success-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ g.jsx(
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
            /* @__PURE__ */ g.jsx(
              "div",
              {
                part: "identity-widget-reset-success-icon-wrap",
                className: "identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!",
                children: /* @__PURE__ */ g.jsx(
                  "img",
                  {
                    part: "identity-widget-reset-success-icon",
                    src: _u,
                    alt: "Success",
                    "aria-hidden": "true",
                    className: "identity-widget-reset-success-icon w-16! h-16!"
                  }
                )
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "div",
              {
                part: "identity-widget-reset-success-header",
                className: "identity-widget-reset-success-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ g.jsx(
                    "h2",
                    {
                      part: "identity-widget-reset-success-title",
                      id: "reset-success-dialog-title",
                      className: "identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!",
                      children: "Check your email"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-subtitle",
                      className: "identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!",
                      children: "We've sent a password reset link to"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-email",
                      className: "identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!",
                      children: l
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-copy",
                      className: "identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!",
                      children: "Follow the instructions in the email to reset your password and return to checkout."
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
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
            /* @__PURE__ */ g.jsx(
              ot,
              {
                type: at.BUTTON,
                onClick: s,
                disabled: r,
                ariaLabel: "Resend password reset link",
                part: "identity-widget-submit-button identity-widget-reset-success-resend-button",
                className: "identity-widget-submit-button identity-widget-reset-success-resend-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
                children: r ? /* @__PURE__ */ g.jsxs(
                  "span",
                  {
                    part: "identity-widget-reset-success-resend-loading",
                    className: "identity-widget-reset-success-resend-loading flex! items-center! justify-center!",
                    children: [
                      /* @__PURE__ */ g.jsxs(
                        "svg",
                        {
                          part: "identity-widget-reset-success-resend-spinner",
                          className: "identity-widget-reset-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ g.jsx(
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
                            /* @__PURE__ */ g.jsx(
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
            /* @__PURE__ */ g.jsx(
              ot,
              {
                type: at.BUTTON,
                variant: gt.OUTLINE,
                onClick: o,
                disabled: r,
                part: "identity-widget-reset-success-back-button",
                className: "identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ g.jsx(
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
}, CE = ({
  email: l,
  onBack: r,
  handleClose: s
}) => {
  const [o, c] = x.useState(l || ""), [d, m] = x.useState(!1), [p, v] = x.useState(!1), [y, b] = x.useState(""), [R, C] = x.useState(!1), [k, A] = x.useState(!1), [M, D] = x.useState(!1), [G, K] = x.useState(!1), [Q, F] = x.useState(""), W = x.useRef(null);
  x.useEffect(() => {
    const te = (we) => {
      we.key === "Escape" && s();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [s]), x.useEffect(() => {
    const te = Ni.test(o);
    if (D(te), !te || !o) {
      A(!1), K(!1), F("");
      return;
    }
    const we = setTimeout(async () => {
      C(!0);
      try {
        const Le = await Cc(o);
        console.log("[ResetPassword] Email check response:", Le), A(Le.exists), console.log("[ResetPassword] Email exists:", Le.exists);
      } catch (Le) {
        console.error("[ResetPassword] Error checking email:", Le);
        const Re = Le instanceof Error ? Le.message : "Unable to verify email. Please try again.";
        K(!0), F(Re), A(!1);
      } finally {
        C(!1);
      }
    }, Di.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(we);
  }, [o]);
  const he = (te) => {
    te.target === W.current && s();
  }, ie = async (te) => {
    if (te.preventDefault(), !o) {
      b(st.EMAIL_REQUIRED);
      return;
    }
    m(!0), b("");
    try {
      await fh(o), console.log("[ResetPassword] Reset link sent to:", o), v(!0);
    } catch (we) {
      console.error("[ResetPassword] Failed to send reset link:", we);
      const Le = we instanceof Error ? we.message : st.RESET_LINK_FAILED;
      b(Le);
    } finally {
      m(!1);
    }
  }, P = async () => {
    m(!0), b("");
    try {
      await fh(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (te) {
      console.error("[ResetPassword] Failed to resend reset link:", te), v(!1);
      const we = te instanceof Error ? te.message : st.RESET_LINK_FAILED;
      b(we);
    } finally {
      m(!1);
    }
  };
  return p ? /* @__PURE__ */ g.jsx(
    AE,
    {
      email: o,
      loading: d,
      onResendLink: P,
      onBack: r,
      onClose: s
    }
  ) : /* @__PURE__ */ g.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: W,
      onMouseDown: he,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ g.jsxs(
        "div",
        {
          part: "identity-widget-reset-password-modal",
          className: "identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ g.jsx(
              ot,
              {
                onClick: s,
                variant: gt.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: at.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ g.jsx(
                  "svg",
                  {
                    part: "identity-widget-reset-password-close-icon",
                    className: "identity-widget-reset-password-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ g.jsx(
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
            /* @__PURE__ */ g.jsxs(
              "div",
              {
                part: "identity-widget-reset-password-header",
                className: "identity-widget-reset-password-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ g.jsx(
                    "h2",
                    {
                      id: "reset-password-dialog-title",
                      part: "identity-widget-reset-password-title",
                      className: "identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!",
                      children: "Reset your password"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
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
            /* @__PURE__ */ g.jsxs(
              "form",
              {
                part: "identity-widget-reset-password-form",
                onSubmit: ie,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ g.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ g.jsx(
                        an,
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
                          endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                            R && /* @__PURE__ */ g.jsx(
                              "div",
                              {
                                part: "identity-widget-reset-password-email-loading",
                                className: "identity-widget-reset-password-email-loading animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!",
                                role: "status",
                                "aria-label": "Checking email"
                              }
                            ),
                            !R && k && M && !G && /* @__PURE__ */ g.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: _u,
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
                  G && /* @__PURE__ */ g.jsx(
                    Sl,
                    {
                      type: me.ERROR,
                      message: Q,
                      onClose: () => {
                        K(!1), F("");
                      },
                      className: "identity-widget-reset-password-email-check-error-banner mb-4!"
                    }
                  ),
                  y && /* @__PURE__ */ g.jsx(
                    Sl,
                    {
                      type: me.ERROR,
                      message: y,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => b(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    ot,
                    {
                      type: at.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: d || !o || !M || !k,
                      className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ResetPassword] Button state:", {
                          loading: d,
                          email: o,
                          isEmailValid: M,
                          emailExists: k
                        });
                      },
                      children: d ? /* @__PURE__ */ g.jsxs(
                        "span",
                        {
                          part: "identity-widget-reset-password-submit-loading",
                          className: "identity-widget-reset-password-submit-loading flex! items-center! justify-center!",
                          children: [
                            /* @__PURE__ */ g.jsxs(
                              "svg",
                              {
                                part: "identity-widget-reset-password-submit-spinner",
                                className: "identity-widget-reset-password-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                  /* @__PURE__ */ g.jsx(
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
                                  /* @__PURE__ */ g.jsx(
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
                  /* @__PURE__ */ g.jsx(
                    ot,
                    {
                      type: at.BUTTON,
                      variant: gt.OUTLINE,
                      onClick: r,
                      disabled: d,
                      part: "identity-widget-reset-password-back-button",
                      className: "identity-widget-reset-password-back-button w-full! flex! items-center! justify-center! gap-3! mt-4!",
                      children: /* @__PURE__ */ g.jsx(
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
}, mh = ({ className: l, direction: r = "right" }) => /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true", className: `absolute! pointer-events-none! ${l}`, children: /* @__PURE__ */ g.jsxs(
  "svg",
  {
    viewBox: "0 0 72 28",
    className: `w-20! h-10! text-[var(--button-primary-bg-hover)]! drop-shadow-[0_0_0.5px_rgba(255,255,255,0.9)]! animate-pulse! ${r === "left" ? "scale-x-[-1]!" : ""}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ g.jsx("circle", { cx: "8", cy: "14", r: "6", fill: "currentColor", fillOpacity: "0.22" }),
      /* @__PURE__ */ g.jsx("circle", { cx: "8", cy: "14", r: "2.5", fill: "currentColor" }),
      /* @__PURE__ */ g.jsx(
        "path",
        {
          d: "M14 14H62",
          stroke: "currentColor",
          strokeWidth: "3.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ g.jsx(
        "path",
        {
          d: "M53 6L63.5 14L53 22",
          stroke: "currentColor",
          strokeWidth: "3.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
) }), hh = ({ children: l }) => /* @__PURE__ */ g.jsx(
  "span",
  {
    className: "px-1! rounded-sm! font-medium!",
    style: { backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" },
    children: l
  }
), rc = ({ label: l }) => /* @__PURE__ */ g.jsx(
  "span",
  {
    className: "inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!",
    style: {
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)"
    },
    children: l
  }
), NE = ({ onBack: l, handleClose: r }) => {
  const s = x.useRef(null), o = "name@email.com", [c, d] = x.useState(0), m = o.slice(0, c);
  x.useEffect(() => {
    const v = (y) => {
      y.key === "Escape" && r();
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [r]), x.useEffect(() => {
    let v;
    return c < o.length ? v = setTimeout(() => d((y) => y + 1), 120) : v = setTimeout(() => d(0), 1200), () => clearTimeout(v);
  }, [c]);
  const p = (v) => {
    v.target === s.current && r();
  };
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      part: "identity-widget-help-center-overlay",
      className: "identity-widget-help-center-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: s,
      onMouseDown: p,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "help-center-dialog-title",
      children: /* @__PURE__ */ g.jsxs(
        "div",
        {
          part: "identity-widget-help-center-modal",
          className: "identity-widget-help-center-modal bg-white! rounded-lg! p-8! w-full! max-w-2xl! relative! max-h-[90vh]! overflow-y-auto! border! border-solid! border-gray-200! shadow-lg!",
          role: "document",
          children: [
            /* @__PURE__ */ g.jsx("style", { children: `@keyframes helpCenterClick { 0%,100% { transform: scale(1); } 45% { transform: scale(0.97); } 65% { transform: scale(1.01); } }
            @keyframes helpCenterInputFocus { 0%,100% { box-shadow: 0 0 0 0 rgba(120,120,120,0); } 50% { box-shadow: 0 0 0 3px rgba(120,120,120,0.12); } }` }),
            /* @__PURE__ */ g.jsx(
              ot,
              {
                onClick: r,
                variant: gt.LINK,
                part: "identity-widget-help-center-close-button",
                className: "identity-widget-help-center-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: at.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ g.jsx(
                  "svg",
                  {
                    part: "identity-widget-help-center-close-icon",
                    className: "identity-widget-help-center-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ g.jsx(
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
            /* @__PURE__ */ g.jsxs("div", { className: "mb-6! text-center! border-b! border-solid! border-gray-200! pb-5!", children: [
              /* @__PURE__ */ g.jsx(
                "h2",
                {
                  id: "help-center-dialog-title",
                  part: "identity-widget-help-center-title",
                  className: "identity-widget-help-center-title text-2xl! font-bold! text-gray-800! mb-2!",
                  children: "Help Center"
                }
              ),
              /* @__PURE__ */ g.jsx(
                "p",
                {
                  part: "identity-widget-help-center-subtitle",
                  className: "identity-widget-help-center-subtitle text-sm! text-gray-600!",
                  children: "Having trouble logging in to your account? Follow these troubleshooting steps."
                }
              )
            ] }),
            /* @__PURE__ */ g.jsxs("div", { className: "space-y-6! text-left!", children: [
              /* @__PURE__ */ g.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-4!", children: [
                /* @__PURE__ */ g.jsx("h3", { className: "text-base! font-bold! text-gray-800!", children: "Common reasons sign in fails" }),
                /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-700!", children: "Whether you're a member, guest, or viewer, there are a few things that might be happening when sign in fails:" }),
                /* @__PURE__ */ g.jsxs("ul", { className: "list-disc! pl-6! text-sm! text-gray-700! space-y-1!", children: [
                  /* @__PURE__ */ g.jsx("li", { children: "You have multiple accounts or account URLs" }),
                  /* @__PURE__ */ g.jsx("li", { children: "You're using the wrong email address or username" }),
                  /* @__PURE__ */ g.jsx("li", { children: "You forgot your password" }),
                  /* @__PURE__ */ g.jsx("li", { children: "Your account access may require additional verification" })
                ] }),
                /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-700!", children: "Here are the recommended steps to troubleshoot." })
              ] }),
              /* @__PURE__ */ g.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!", children: [
                /* @__PURE__ */ g.jsx("h3", { className: "text-lg! font-bold! text-gray-800!", children: "Check your email address or username" }),
                /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-700!", children: "Occasionally, we find that someone is attempting to sign in with an incorrect email address or username." }),
                /* @__PURE__ */ g.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  /* @__PURE__ */ g.jsx("strong", { children: "Solution:" }),
                  " Try logging in with other email addresses or usernames you might have used. If you have multiple email addresses redirected to one inbox, try each of them."
                ] })
              ] }),
              /* @__PURE__ */ g.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!", children: [
                /* @__PURE__ */ g.jsx("h3", { className: "text-lg! font-bold! text-gray-800!", children: "Reset your password" }),
                /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-700!", children: "If you are sure you are using the correct email address or username, you might have forgotten your password. No problem." }),
                /* @__PURE__ */ g.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  /* @__PURE__ */ g.jsx("strong", { children: "Solution:" }),
                  " Click the",
                  " ",
                  /* @__PURE__ */ g.jsx(hh, { children: '"Forgot Password?"' }),
                  " link on the login page to start the password reset process."
                ] }),
                /* @__PURE__ */ g.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ g.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ g.jsx(rc, { label: "Step 1" }) }),
                  /* @__PURE__ */ g.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-4!", children: "Continue to login" }),
                  /* @__PURE__ */ g.jsxs("div", { className: "space-y-3!", children: [
                    /* @__PURE__ */ g.jsx(an, { label: "Email or Username", value: "name@email.com", disabled: !0 }),
                    /* @__PURE__ */ g.jsx(an, { label: "Password", value: "••••••••", disabled: !0 }),
                    /* @__PURE__ */ g.jsxs("div", { className: "flex! items-center! justify-between! text-sm!", children: [
                      /* @__PURE__ */ g.jsxs("label", { className: "flex! items-center! text-gray-500!", children: [
                        /* @__PURE__ */ g.jsx("input", { type: "checkbox", disabled: !0, className: "mr-2!" }),
                        "Remember me"
                      ] }),
                      /* @__PURE__ */ g.jsxs(
                        "span",
                        {
                          className: "relative! inline-flex! items-center!",
                          style: { animation: "helpCenterClick 1.3s ease-in-out infinite" },
                          children: [
                            /* @__PURE__ */ g.jsx(
                              mh,
                              {
                                className: "right-[100%]! mr-1! top-1/2! -translate-y-1/2!",
                                direction: "right"
                              }
                            ),
                            /* @__PURE__ */ g.jsx(ot, { type: at.BUTTON, variant: gt.LINK, disabled: !0, children: "Forgot Password?" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ g.jsx(ot, { type: at.BUTTON, disabled: !0, className: "w-full!", children: "Sign In" })
                  ] })
                ] }),
                /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, enter your account email address. It should look something like this:" }),
                /* @__PURE__ */ g.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ g.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ g.jsx(rc, { label: "Step 2" }) }),
                  /* @__PURE__ */ g.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ g.jsx(
                    "div",
                    {
                      className: "rounded-md!",
                      style: { animation: "helpCenterInputFocus 1.4s ease-in-out infinite" },
                      children: /* @__PURE__ */ g.jsx(
                        an,
                        {
                          label: "Email Address",
                          value: m,
                          disabled: !0,
                          endIcon: /* @__PURE__ */ g.jsx("span", { className: "text-gray-500! animate-pulse!", children: "|" })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    mh,
                    {
                      className: "left-[50%]! -translate-x-1/2! top-[69%]!",
                      direction: "left"
                    }
                  )
                ] }),
                /* @__PURE__ */ g.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  "Then click on ",
                  /* @__PURE__ */ g.jsx(hh, { children: '"Send reset link"' }),
                  "."
                ] }),
                /* @__PURE__ */ g.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ g.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ g.jsx(rc, { label: "Step 3" }) }),
                  /* @__PURE__ */ g.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ g.jsx(an, { label: "Email Address", value: m, disabled: !0 }),
                  /* @__PURE__ */ g.jsx(
                    "span",
                    {
                      className: "block!",
                      style: { animation: "helpCenterClick 1.2s ease-in-out infinite" },
                      children: /* @__PURE__ */ g.jsx(ot, { type: at.BUTTON, disabled: !0, className: "w-full! mt-4!", children: "Send reset link" })
                    }
                  )
                ] }),
                /* @__PURE__ */ g.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, you will receive an email with instructions to reset your password." })
              ] })
            ] }),
            /* @__PURE__ */ g.jsx(
              "div",
              {
                part: "identity-widget-help-center-tip",
                className: "identity-widget-help-center-tip mt-6! mb-6! rounded-lg! border! border-solid! border-green-300! bg-green-50! px-5! py-4!",
                role: "note",
                "aria-label": "Password reset tip",
                children: /* @__PURE__ */ g.jsxs("p", { className: "m-0! text-sm! leading-[1.5]! text-gray-800! font-medium!", children: [
                  /* @__PURE__ */ g.jsx("strong", { children: "Tip:" }),
                  ` Double-check that the email address written in the field above the "Reset Password" button is the correct address! You will have to check that account's inbox to continue this process.`
                ] })
              }
            ),
            /* @__PURE__ */ g.jsx(
              ot,
              {
                type: at.BUTTON,
                variant: gt.OUTLINE,
                onClick: l,
                part: "identity-widget-help-center-back-button",
                className: "identity-widget-help-center-back-button w-full! mt-8!",
                children: "Back to sign in"
              }
            )
          ]
        }
      )
    }
  );
}, _E = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", OE = ({
  onSuccess: l,
  onError: r,
  handleClose: s,
  authority: o,
  title: c = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = "",
  enableGoogleLogin: p = !1
}) => {
  const [v, y] = x.useState(m), [b, R] = x.useState(""), [C, k] = x.useState(!1), [A, M] = x.useState(!1), [D, G] = x.useState(!1), [K, Q] = x.useState(""), [F, W] = x.useState(!1), [he, ie] = x.useState(!1), [P, te] = x.useState(!1), [we, Le] = x.useState(!1), [Re, Me] = x.useState(!1), [Xe, Ie] = x.useState(!1), [X, q] = x.useState(!1), [Y, de] = x.useState(!1), [xe, Ne] = x.useState(""), [S, L] = x.useState(""), [V, Z] = x.useState(me.INFO), ue = x.useRef(null), ne = x.useRef(null), ge = Cv({
    flow: "auth-code",
    onSuccess: (ae) => {
      console.log("[EmbeddedLogin] Google auth-code response received", ae), L(
        "Google sign-in completed. Connect this credential to your backend login flow."
      ), Z(me.INFO), Q("");
    },
    onError: (ae) => {
      const Ve = ae.error_description || ae.error || "Google sign-in failed.";
      L(Ve), Z(me.ERROR), r(Ve);
    },
    onNonOAuthError: (ae) => {
      const Ve = `Google sign-in failed: ${ae.type}`;
      L(Ve), Z(me.ERROR), r(Ve);
    }
  });
  x.useEffect(() => {
    if (ne.current && clearTimeout(ne.current), !v) {
      Me(!1), q(!1), de(!1), Ne("");
      return;
    }
    if (!v.includes("@")) {
      Me(!0), q(!1);
      return;
    }
    if (!Ni.test(v)) {
      Me(!1), q(!1);
      return;
    }
    return ne.current = setTimeout(async () => {
      Ie(!0);
      try {
        (await Cc(v)).exists ? (Me(!0), q(!1)) : (Me(!1), q(!0));
      } catch (ae) {
        console.error("[EmbeddedLogin] Email check failed:", ae);
        const Ve = ae instanceof Error ? ae.message : "Unable to verify email. You can still proceed with login.";
        de(!0), Ne(Ve), q(!0), Me(!1);
      } finally {
        Ie(!1);
      }
    }, 500), () => {
      ne.current && clearTimeout(ne.current);
    };
  }, [v]);
  const Be = v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  x.useEffect(() => {
    const ae = (Ve) => {
      Ve.key === "Escape" && s();
    };
    return document.addEventListener("keydown", ae), () => document.removeEventListener("keydown", ae);
  }, [s]);
  const kt = (ae) => {
    ae.target === ue.current && s();
  }, Mn = async (ae) => {
    if (ae.preventDefault(), !v || !b) {
      Q("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    k(!0), Q("");
    try {
      const Ve = await hg(v, b, F);
      l(Ve);
    } catch (Ve) {
      console.error("[EmbeddedLogin] Login failed:", Ve);
      const oa = Ve instanceof Error ? Ve.message : "Authentication failed";
      Q(oa), L(oa), Z(me.ERROR), r(oa);
    } finally {
      k(!1);
    }
  }, zn = (ae) => {
    if (ae.key === "CapsLock" && ae.type === "keydown") {
      G((Ve) => !Ve);
      return;
    }
    ae.key !== "CapsLock" && G(Eu(ae));
  }, Ma = (ae) => {
    G(Eu(ae));
  }, Pt = () => {
    G(!1);
  };
  return P ? /* @__PURE__ */ g.jsx(
    CE,
    {
      email: v,
      onBack: () => te(!1),
      handleClose: s
    }
  ) : we ? /* @__PURE__ */ g.jsx(NE, { onBack: () => Le(!1), handleClose: s }) : he ? /* @__PURE__ */ g.jsx(
    TE,
    {
      onSuccess: (ae) => {
        ie(!1), l(ae);
      },
      onError: r,
      handleClose: s,
      onSignIn: (ae) => {
        ie(!1), ae && y(ae);
      },
      authority: o,
      initialEmail: v
    }
  ) : /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: ue,
      onMouseDown: kt,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ g.jsxs(
          "div",
          {
            part: "identity-widget-login-modal",
            className: "identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
            role: "document",
            children: [
              /* @__PURE__ */ g.jsx(
                ot,
                {
                  onClick: s,
                  variant: gt.LINK,
                  part: "identity-widget-login-close-button",
                  className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                  type: at.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ g.jsx(
                    "svg",
                    {
                      part: "identity-widget-login-close-icon",
                      className: "identity-widget-login-close-icon w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ g.jsx(
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
              /* @__PURE__ */ g.jsxs(
                "div",
                {
                  part: "identity-widget-login-header",
                  className: "identity-widget-login-header mb-3! text-center!",
                  children: [
                    /* @__PURE__ */ g.jsx(
                      "h2",
                      {
                        part: "identity-widget-login-title",
                        id: "login-dialog-title",
                        className: "identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!",
                        children: c
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
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
              /* @__PURE__ */ g.jsxs(
                "form",
                {
                  part: "identity-widget-login-form",
                  onSubmit: Mn,
                  className: "identity-widget-login-form space-y-2!",
                  "aria-label": "Login form",
                  children: [
                    p && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                      /* @__PURE__ */ g.jsx(
                        "div",
                        {
                          part: "identity-widget-google-section",
                          className: "identity-widget-google-section mt-0! mb-4! hidden! justify-center!",
                          children: /* @__PURE__ */ g.jsxs(
                            ot,
                            {
                              type: at.BUTTON,
                              variant: gt.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => ge(),
                              disabled: C,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ g.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: _E,
                                    alt: "Google",
                                    className: "identity-widget-google-icon w-[18px]! h-[18px]!"
                                  }
                                ),
                                /* @__PURE__ */ g.jsx("span", { part: "identity-widget-google-text", className: "identity-widget-google-text", children: "Sign in with Google" })
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ g.jsxs(
                        "div",
                        {
                          part: "identity-widget-login-divider",
                          className: "identity-widget-login-divider relative! mt-2! mb-4! hidden!",
                          children: [
                            /* @__PURE__ */ g.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-line-wrap",
                                className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!",
                                children: /* @__PURE__ */ g.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-login-divider-line",
                                    className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ g.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-text-wrap",
                                className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!",
                                children: /* @__PURE__ */ g.jsx(
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
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-login-email-field",
                        className: "identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ g.jsx(
                          an,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: v,
                            onChange: (ae) => y(ae.target.value),
                            placeholder: "Enter email or username",
                            disabled: C,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                              Xe && /* @__PURE__ */ g.jsx(Gh, {}),
                              !Xe && Re && Be && !Y && /* @__PURE__ */ g.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: _u,
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
                    X && !Re && Be && !Y && /* @__PURE__ */ g.jsx(
                      Sl,
                      {
                        type: me.INFO,
                        message: oc.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          q(!1), ie(!0);
                        },
                        onClose: () => q(!1),
                        className: "mb-4!"
                      }
                    ),
                    X && Y && /* @__PURE__ */ g.jsx(
                      Sl,
                      {
                        type: me.ERROR,
                        message: xe,
                        onClose: () => {
                          q(!1), de(!1), Ne("");
                        },
                        className: "mb-4!"
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-login-password-field",
                        className: "identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!",
                        children: /* @__PURE__ */ g.jsxs(
                          "div",
                          {
                            part: "identity-widget-login-password-input-wrap",
                            className: "identity-widget-login-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ g.jsx(
                                an,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: A ? "text" : "password",
                                  value: b,
                                  onChange: (ae) => {
                                    R(ae.target.value), Q("");
                                  },
                                  onKeyDown: zn,
                                  onKeyUp: zn,
                                  onFocus: Ma,
                                  onBlur: Pt,
                                  placeholder: "Enter Password...",
                                  disabled: C,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: K,
                                  endIcon: /* @__PURE__ */ g.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-login-password-toggle",
                                      onClick: () => M(!A),
                                      className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": A ? "Hide password" : "Show password",
                                      children: A ? /* @__PURE__ */ g.jsx(
                                        "svg",
                                        {
                                          part: "identity-widget-login-password-hide-icon",
                                          className: "identity-widget-login-password-hide-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ g.jsx(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            }
                                          )
                                        }
                                      ) : /* @__PURE__ */ g.jsxs(
                                        "svg",
                                        {
                                          part: "identity-widget-login-password-show-icon",
                                          className: "identity-widget-login-password-show-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: [
                                            /* @__PURE__ */ g.jsx(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            ),
                                            /* @__PURE__ */ g.jsx(
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
                              D && /* @__PURE__ */ g.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: oc.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ g.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-meta-row",
                        className: "identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!",
                        children: [
                          /* @__PURE__ */ g.jsxs(
                            "label",
                            {
                              part: "identity-widget-login-remember-label",
                              className: "identity-widget-login-remember-label flex! items-center! m-0!",
                              children: [
                                /* @__PURE__ */ g.jsx(
                                  "input",
                                  {
                                    type: "checkbox",
                                    part: "identity-widget-login-remember-checkbox",
                                    checked: F,
                                    onChange: (ae) => W(ae.target.checked),
                                    className: "identity-widget-login-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                    "aria-label": "Remember me"
                                  }
                                ),
                                /* @__PURE__ */ g.jsx(
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
                          /* @__PURE__ */ g.jsx(
                            "a",
                            {
                              href: "#",
                              part: "identity-widget-login-forgot-link",
                              className: "identity-widget-login-forgot-link no-underline! --button-primary-text!",
                              style: {
                                fontWeight: "500"
                              },
                              onClick: (ae) => {
                                ae.preventDefault(), te(!0);
                              },
                              children: "Forgot Password?"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
                      ot,
                      {
                        type: at.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: C || !v,
                        className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!",
                        children: C ? /* @__PURE__ */ g.jsxs(
                          "span",
                          {
                            part: "identity-widget-login-submit-loading",
                            className: "identity-widget-login-submit-loading flex! items-center! justify-center!",
                            children: [
                              /* @__PURE__ */ g.jsxs(
                                "svg",
                                {
                                  part: "identity-widget-login-submit-spinner",
                                  className: "identity-widget-login-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    /* @__PURE__ */ g.jsx(
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
                                    /* @__PURE__ */ g.jsx(
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
                    /* @__PURE__ */ g.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-bottom-divider",
                        className: "identity-widget-login-bottom-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ g.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-line-wrap",
                              className: "identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ g.jsx(
                                "div",
                                {
                                  part: "identity-widget-login-bottom-divider-line",
                                  className: "identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ g.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-text-wrap",
                              className: "identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ g.jsx(
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
                    /* @__PURE__ */ g.jsx(
                      ot,
                      {
                        type: at.BUTTON,
                        variant: gt.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => ie(!0),
                        disabled: C,
                        className: "identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!",
                        children: /* @__PURE__ */ g.jsx(
                          "span",
                          {
                            part: "identity-widget-login-create-account-text",
                            className: "identity-widget-login-create-account-text",
                            children: "Create an Account"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-login-help-center-wrap",
                        className: "identity-widget-login-help-center-wrap text-center! mt-4!",
                        children: /* @__PURE__ */ g.jsxs(
                          "button",
                          {
                            type: "button",
                            part: "identity-widget-login-help-center-button",
                            className: "identity-widget-login-help-center-button group bg-transparent! border-none! p-0! text-sm! font-normal! cursor-pointer!",
                            onClick: () => Le(!0),
                            children: [
                              /* @__PURE__ */ g.jsx("span", { className: "text-gray-800!", children: "Can't log in? " }),
                              /* @__PURE__ */ g.jsx("span", { className: "text-blue-400! text-base! font-bold! transition-all! duration-150! group-hover:underline!", children: "Visit our help center" })
                            ]
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
        S && /* @__PURE__ */ g.jsx(cc, { message: S, type: V, onClose: () => L("") })
      ]
    }
  );
}, DE = (l) => {
  const { authority: r, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = l, [d, m] = x.useState(!1);
  x.useEffect(() => (r ? (fE(r), console.log(`${$e.AUTH} Authority override set to: ${r}`)) : (ch(), console.log(`${$e.AUTH} Using automatic authority detection`)), () => {
    ch();
  }), [r]), x.useEffect(() => {
    let b;
    return (async () => {
      const C = await SE();
      typeof C == "function" && (b = C);
    })(), () => {
      b && b();
    };
  }, [d]), x.useEffect(() => {
    (async () => {
      try {
        const R = !EE();
        if (c && c(R), await wE()) {
          m(!0);
          const A = l.redirectUrl || uu();
          if (l.autoRedirection)
            window.location.href = A;
          else if (o && l.redirectUrl) {
            const M = l.redirectUrl || uu(), D = localStorage.getItem(ve.ACCESS_TOKEN);
            if (D) {
              const G = yu(D);
              G && o(M, G);
            }
          }
          return;
        }
        if (xE()) {
          if (await Nc()) {
            const M = localStorage.getItem(ve.ACCESS_TOKEN);
            if (!M)
              return;
            const D = yu(M);
            if (!D)
              return;
            console.log(`${$e.AUTH} Auto-login successful`), m(!0), c && c(!0);
            const G = l.redirectUrl || uu();
            o && (console.log(
              `${$e.AUTH} Triggering onRedirect callback with user session:`,
              D
            ), o(G, D)), l.autoRedirection && (window.location.href = G);
          }
        } else
          localStorage.removeItem(ve.REFRESH_TOKEN), localStorage.removeItem(ve.REFRESH_TOKEN_TIME);
      } catch (R) {
        console.error(`${$e.AUTH} Auto-login failed:`, R), localStorage.removeItem(ve.REFRESH_TOKEN), localStorage.removeItem(ve.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), x.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const p = () => {
    l.handleClose && l.handleClose(), m(!0);
    const b = l.redirectUrl || uu();
    if (o) {
      const R = localStorage.getItem(ve.ACCESS_TOKEN);
      if (R) {
        const C = yu(R);
        C && o(b, C);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = b;
    }, 100);
  }, v = (b) => {
    console.log(`${$e.AUTH} Embedded login error:`, b);
  }, y = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ g.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ g.jsx(H1, { children: /* @__PURE__ */ g.jsx(
    Mh,
    {
      path: "*",
      element: /* @__PURE__ */ g.jsx(x.Fragment, { children: l.showLogin && !d && /* @__PURE__ */ g.jsx(
        OE,
        {
          onSuccess: p,
          onError: v,
          handleClose: y,
          authority: r,
          title: l.loginTitle,
          subtitle: l.loginSubtitle,
          enableGoogleLogin: !!l.googleClientId
        }
      ) })
    }
  ) }) });
};
class UE {
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
        (v) => v.folder.toLowerCase() === r.toLowerCase() || v.token.toLowerCase() === r.toLowerCase()
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
      const m = await d.json(), p = document.documentElement;
      m.styles.forEach((v) => {
        let y = v.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), p.style.setProperty(`--${v.name}`, y);
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
async function gh(l) {
  const r = new UE(l.cdnBaseUrl, l.shadowRoot), s = l.brandFolder || l.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (l.autoDetect) {
    const o = await r.detectBrandFromDomain();
    o && await r.loadTheme(o);
  }
  return r;
}
const yh = "832956972051-o6rtl5uehltu7di3cmrvao44mdh54911.apps.googleusercontent.com", ph = typeof window < "u" && window.__widgetStyles?.widget || "";
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
      if (ph) {
        const d = document.createElement("style");
        d.textContent = ph, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const o = this.getAttribute("subsidiary");
      o && o.trim() !== "" ? this.loadTheme(o, s) : this.loadThemeFromDomain(s);
      const c = document.createElement("div");
      s.appendChild(c), this.root = xv.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
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
        await gh({
          brandFolder: s,
          shadowRoot: o
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await gh({
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
          const o = Ct(Ge.REFRESH_TOKEN, !0) || localStorage.getItem(ve.REFRESH_TOKEN);
          o ? (await bE(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (o) {
          console.error("[Widget] Logout API call failed:", o);
        } finally {
          RE(), localStorage.clear(), sessionStorage.clear(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
      const o = this.getAttribute("authority") || Mv(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: o,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: d,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || yh,
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
        /* @__PURE__ */ g.jsx(Tv, { clientId: s.googleClientId || yh, children: /* @__PURE__ */ g.jsx(uv, { children: /* @__PURE__ */ g.jsx(x.StrictMode, { children: /* @__PURE__ */ g.jsx(DE, { ...s }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
