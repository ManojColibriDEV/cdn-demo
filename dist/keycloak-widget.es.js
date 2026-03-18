
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-4{left:calc(var(--spacing)*4)}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-0\\.5\\!{margin-top:calc(var(--spacing)*.5)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20{width:calc(var(--spacing)*20)}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl{max-width:var(--container-2xl)}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc{list-style-type:disc}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.flex-wrap\\!{flex-wrap:wrap!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-start\\!{align-items:flex-start!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-0\\.5\\!{gap:calc(var(--spacing)*.5)!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-green-300{border-color:var(--color-green-300)}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.border-l-green-500\\!{border-left-color:var(--color-green-500)!important}.border-l-red-500\\!{border-left-color:var(--color-red-500)!important}.border-l-yellow-500\\!{border-left-color:var(--color-yellow-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-6{padding:calc(var(--spacing)*6)}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5{padding-inline:calc(var(--spacing)*5)}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4{padding-block:calc(var(--spacing)*4)}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400{color:var(--color-blue-400)}.text-blue-400\\!{color:var(--color-blue-400)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-green-900\\!{color:var(--color-green-900)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-red-900\\!{color:var(--color-red-900)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.text-yellow-900\\!{color:var(--color-yellow-900)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media not all and (min-width:500px){.max-\\[500px\\]\\:flex-col\\!{flex-direction:column!important}.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:self-start\\!{align-self:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
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
var Ko = { exports: {} }, Si = {};
var O0;
function Lp() {
  if (O0) return Si;
  O0 = 1;
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
  return Si.Fragment = r, Si.jsx = s, Si.jsxs = s, Si;
}
var D0;
function Hp() {
  return D0 || (D0 = 1, Ko.exports = Lp()), Ko.exports;
}
var g = Hp(), Qo = { exports: {} }, ie = {}, U0;
function Bp() {
  if (U0) return ie;
  U0 = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function A(w) {
    return w === null || typeof w != "object" ? null : (w = k && w[k] || w["@@iterator"], typeof w == "function" ? w : null);
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
  }, D = Object.assign, G = {};
  function K(w, L, V) {
    this.props = w, this.context = L, this.refs = G, this.updater = V || j;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(w, L) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, L, "setState");
  }, K.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = K.prototype;
  function F(w, L, V) {
    this.props = w, this.context = L, this.refs = G, this.updater = V || j;
  }
  var I = F.prototype = new Q();
  I.constructor = F, D(I, K.prototype), I.isPureReactComponent = !0;
  var he = Array.isArray;
  function ne() {
  }
  var W = { H: null, A: null, T: null, S: null }, ye = Object.prototype.hasOwnProperty;
  function Be(w, L, V) {
    var Z = V.ref;
    return {
      $$typeof: r,
      type: w,
      key: L,
      ref: Z !== void 0 ? Z : null,
      props: V
    };
  }
  function it(w, L) {
    return Be(w.type, L, w.props);
  }
  function Te(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function ue(w) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(V) {
      return L[V];
    });
  }
  var xe = /\/+/g;
  function _e(w, L) {
    return typeof w == "object" && w !== null && w.key != null ? ue("" + w.key) : L.toString(36);
  }
  function Y(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(ne, ne) : (w.status = "pending", w.then(
          function(L) {
            w.status === "pending" && (w.status = "fulfilled", w.value = L);
          },
          function(L) {
            w.status === "pending" && (w.status = "rejected", w.reason = L);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function q(w, L, V, Z, ae) {
    var se = typeof w;
    (se === "undefined" || se === "boolean") && (w = null);
    var ce = !1;
    if (w === null) ce = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case r:
            case s:
              ce = !0;
              break;
            case S:
              return ce = w._init, q(
                ce(w._payload),
                L,
                V,
                Z,
                ae
              );
          }
      }
    if (ce)
      return ae = ae(w), ce = Z === "" ? "." + _e(w, 0) : Z, he(ae) ? (V = "", ce != null && (V = ce.replace(xe, "$&/") + "/"), q(ae, L, V, "", function(mn) {
        return mn;
      })) : ae != null && (Te(ae) && (ae = it(
        ae,
        V + (ae.key == null || w && w.key === ae.key ? "" : ("" + ae.key).replace(
          xe,
          "$&/"
        ) + "/") + ce
      )), L.push(ae)), 1;
    ce = 0;
    var qe = Z === "" ? "." : Z + ":";
    if (he(w))
      for (var P = 0; P < w.length; P++)
        Z = w[P], se = qe + _e(Z, P), ce += q(
          Z,
          L,
          V,
          se,
          ae
        );
    else if (P = A(w), typeof P == "function")
      for (w = P.call(w), P = 0; !(Z = w.next()).done; )
        Z = Z.value, se = qe + _e(Z, P++), ce += q(
          Z,
          L,
          V,
          se,
          ae
        );
    else if (se === "object") {
      if (typeof w.then == "function")
        return q(
          Y(w),
          L,
          V,
          Z,
          ae
        );
      throw L = String(w), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function X(w, L, V) {
    if (w == null) return w;
    var Z = [], ae = 0;
    return q(w, Z, "", "", function(se) {
      return L.call(V, se, ae++);
    }), Z;
  }
  function ge(w) {
    if (w._status === -1) {
      var L = w._result;
      L = L(), L.then(
        function(V) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = V);
        },
        function(V) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = V);
        }
      ), w._status === -1 && (w._status = 0, w._result = L);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var Re = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof l == "object" && typeof l.emit == "function") {
      l.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  }, Oe = {
    map: X,
    forEach: function(w, L, V) {
      X(
        w,
        function() {
          L.apply(this, arguments);
        },
        V
      );
    },
    count: function(w) {
      var L = 0;
      return X(w, function() {
        L++;
      }), L;
    },
    toArray: function(w) {
      return X(w, function(L) {
        return L;
      }) || [];
    },
    only: function(w) {
      if (!Te(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return ie.Activity = C, ie.Children = Oe, ie.Component = K, ie.Fragment = o, ie.Profiler = d, ie.PureComponent = F, ie.StrictMode = c, ie.Suspense = y, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return W.H.useMemoCache(w);
    }
  }, ie.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ie.cacheSignal = function() {
    return null;
  }, ie.cloneElement = function(w, L, V) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var Z = D({}, w.props), ae = w.key;
    if (L != null)
      for (se in L.key !== void 0 && (ae = "" + L.key), L)
        !ye.call(L, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && L.ref === void 0 || (Z[se] = L[se]);
    var se = arguments.length - 2;
    if (se === 1) Z.children = V;
    else if (1 < se) {
      for (var ce = Array(se), qe = 0; qe < se; qe++)
        ce[qe] = arguments[qe + 2];
      Z.children = ce;
    }
    return Be(w.type, ae, Z);
  }, ie.createContext = function(w) {
    return w = {
      $$typeof: p,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: m,
      _context: w
    }, w;
  }, ie.createElement = function(w, L, V) {
    var Z, ae = {}, se = null;
    if (L != null)
      for (Z in L.key !== void 0 && (se = "" + L.key), L)
        ye.call(L, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ae[Z] = L[Z]);
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = V;
    else if (1 < ce) {
      for (var qe = Array(ce), P = 0; P < ce; P++)
        qe[P] = arguments[P + 2];
      ae.children = qe;
    }
    if (w && w.defaultProps)
      for (Z in ce = w.defaultProps, ce)
        ae[Z] === void 0 && (ae[Z] = ce[Z]);
    return Be(w, se, ae);
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(w) {
    return { $$typeof: b, render: w };
  }, ie.isValidElement = Te, ie.lazy = function(w) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: w },
      _init: ge
    };
  }, ie.memo = function(w, L) {
    return {
      $$typeof: v,
      type: w,
      compare: L === void 0 ? null : L
    };
  }, ie.startTransition = function(w) {
    var L = W.T, V = {};
    W.T = V;
    try {
      var Z = w(), ae = W.S;
      ae !== null && ae(V, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ne, Re);
    } catch (se) {
      Re(se);
    } finally {
      L !== null && V.types !== null && (L.types = V.types), W.T = L;
    }
  }, ie.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, ie.use = function(w) {
    return W.H.use(w);
  }, ie.useActionState = function(w, L, V) {
    return W.H.useActionState(w, L, V);
  }, ie.useCallback = function(w, L) {
    return W.H.useCallback(w, L);
  }, ie.useContext = function(w) {
    return W.H.useContext(w);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(w, L) {
    return W.H.useDeferredValue(w, L);
  }, ie.useEffect = function(w, L) {
    return W.H.useEffect(w, L);
  }, ie.useEffectEvent = function(w) {
    return W.H.useEffectEvent(w);
  }, ie.useId = function() {
    return W.H.useId();
  }, ie.useImperativeHandle = function(w, L, V) {
    return W.H.useImperativeHandle(w, L, V);
  }, ie.useInsertionEffect = function(w, L) {
    return W.H.useInsertionEffect(w, L);
  }, ie.useLayoutEffect = function(w, L) {
    return W.H.useLayoutEffect(w, L);
  }, ie.useMemo = function(w, L) {
    return W.H.useMemo(w, L);
  }, ie.useOptimistic = function(w, L) {
    return W.H.useOptimistic(w, L);
  }, ie.useReducer = function(w, L, V) {
    return W.H.useReducer(w, L, V);
  }, ie.useRef = function(w) {
    return W.H.useRef(w);
  }, ie.useState = function(w) {
    return W.H.useState(w);
  }, ie.useSyncExternalStore = function(w, L, V) {
    return W.H.useSyncExternalStore(
      w,
      L,
      V
    );
  }, ie.useTransition = function() {
    return W.H.useTransition();
  }, ie.version = "19.2.3", ie;
}
var M0;
function yc() {
  return M0 || (M0 = 1, Qo.exports = Bp()), Qo.exports;
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
    return typeof c == "string" ? c : Ni(c);
  }
  return Yp(
    r,
    s,
    null,
    l
  );
}
function Ze(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function an(l, r) {
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
function z0(l, r) {
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
function Ni({
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
  let { window: c = document.defaultView, v5Compat: d = !1 } = o, m = c.history, p = "POP", b = null, y = v();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function v() {
    return (m.state || { idx: null }).idx;
  }
  function S() {
    p = "POP";
    let D = v(), G = D == null ? null : D - y;
    y = D, b && b({ action: p, location: j.location, delta: G });
  }
  function C(D, G) {
    p = "PUSH";
    let K = uc(j.location, D, G);
    y = v() + 1;
    let Q = z0(K, y), F = j.createHref(K);
    try {
      m.pushState(Q, "", F);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError")
        throw I;
      c.location.assign(F);
    }
    d && b && b({ action: p, location: j.location, delta: 1 });
  }
  function k(D, G) {
    p = "REPLACE";
    let K = uc(j.location, D, G);
    y = v();
    let Q = z0(K, y), F = j.createHref(K);
    m.replaceState(Q, "", F), d && b && b({ action: p, location: j.location, delta: 0 });
  }
  function A(D) {
    return Xp(D);
  }
  let j = {
    get action() {
      return p;
    },
    get location() {
      return l(c, m);
    },
    listen(D) {
      if (b)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(j0, S), b = D, () => {
        c.removeEventListener(j0, S), b = null;
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
  return j;
}
function Xp(l, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Ze(s, "No window.location.(origin|href) available to create URL");
  let o = typeof l == "string" ? l : Ni(l);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = s + o), new URL(o, s);
}
function bh(l, r, s = "/") {
  return Vp(l, r, s, !1);
}
function Vp(l, r, s, o) {
  let c = typeof r == "string" ? xl(r) : r, d = jn(c.pathname || "/", s);
  if (d == null)
    return null;
  let m = vh(l);
  Kp(m);
  let p = null;
  for (let b = 0; p == null && b < m.length; ++b) {
    let y = n1(d);
    p = e1(
      m[b],
      y,
      o
    );
  }
  return p;
}
function vh(l, r = [], s = [], o = "", c = !1) {
  let d = (m, p, b = c, y) => {
    let v = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: p,
      route: m
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(o) && b)
        return;
      Ze(
        v.relativePath.startsWith(o),
        `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), v.relativePath = v.relativePath.slice(o.length);
    }
    let S = Un([o, v.relativePath]), C = s.concat(v);
    m.children && m.children.length > 0 && (Ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
    ), vh(
      m.children,
      r,
      C,
      S,
      b
    )), !(m.path == null && !m.index) && r.push({
      path: S,
      score: Wp(S, m.index),
      routesMeta: C
    });
  };
  return l.forEach((m, p) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, p);
    else
      for (let b of Eh(m.path))
        d(m, p, !0, b);
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
      (b) => b === "" ? d : [d, b].join("/")
    )
  ), c && p.push(...m), p.map(
    (b) => l.startsWith("/") && b === "" ? "/" : b
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
var Qp = /^:[\w-]+$/, Zp = 3, Jp = 2, $p = 1, Fp = 10, Ip = -2, L0 = (l) => l === "*";
function Wp(l, r) {
  let s = l.split("/"), o = s.length;
  return s.some(L0) && (o += Ip), r && (o += Jp), s.filter((c) => !L0(c)).reduce(
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
    let b = o[p], y = p === o.length - 1, v = d === "/" ? r : r.slice(d.length) || "/", S = bu(
      { path: b.relativePath, caseSensitive: b.caseSensitive, end: y },
      v
    ), C = b.route;
    if (!S && y && s && !o[o.length - 1].route.index && (S = bu(
      {
        path: b.relativePath,
        caseSensitive: b.caseSensitive,
        end: !1
      },
      v
    )), !S)
      return null;
    Object.assign(c, S.params), m.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: Un([d, S.pathname]),
      pathnameBase: r1(
        Un([d, S.pathnameBase])
      ),
      route: C
    }), S.pathnameBase !== "/" && (d = Un([d, S.pathnameBase]));
  }
  return m;
}
function bu(l, r) {
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
      (y, { paramName: v, isOptional: S }, C) => {
        if (v === "*") {
          let A = p[C] || "";
          m = d.slice(0, d.length - A.length).replace(/(.)\/+$/, "$1");
        }
        const k = p[C];
        return S && !k ? y[v] = void 0 : y[v] = (k || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: l
  };
}
function t1(l, r = !1, s = !0) {
  an(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, p, b) => (o.push({ paramName: p, isOptional: b != null }), b ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (o.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function n1(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return an(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function jn(l, r) {
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
        s = s.replace(/\/\/+/g, "/"), an(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${s}`
        );
      }
      s.startsWith("/") ? d = H0(s.substring(1), "/") : d = H0(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: u1(o),
    hash: s1(c)
  };
}
function H0(l, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
  }), s.length > 1 ? s.join("/") : "/";
}
function Zo(l, r, s, o) {
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
  typeof l == "string" ? c = xl(l) : (c = { ...l }, Ze(
    !c.pathname || !c.pathname.includes("?"),
    Zo("?", "pathname", "search", c)
  ), Ze(
    !c.pathname || !c.pathname.includes("#"),
    Zo("#", "pathname", "hash", c)
  ), Ze(
    !c.search || !c.search.includes("#"),
    Zo("#", "search", "hash", c)
  ));
  let d = l === "" || c.pathname === "", m = d ? "/" : c.pathname, p;
  if (m == null)
    p = s;
  else {
    let S = r.length - 1;
    if (!o && m.startsWith("..")) {
      let C = m.split("/");
      for (; C[0] === ".."; )
        C.shift(), S -= 1;
      c.pathname = C.join("/");
    }
    p = S >= 0 ? r[S] : "/";
  }
  let b = l1(c, p), y = m && m !== "/" && m.endsWith("/"), v = (d || m === ".") && s.endsWith("/");
  return !b.pathname.endsWith("/") && (y || v) && (b.pathname += "/"), b;
}
var Un = (l) => l.join("/").replace(/\/\/+/g, "/"), r1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), u1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, s1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, o1 = class {
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
      let d = new URL(window.location.href), m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), p = jn(m.pathname, r);
      m.origin === d.origin && p != null ? s = p + m.search + m.hash : c = !0;
    } catch {
      an(
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
var wu = x.createContext(null);
wu.displayName = "DataRouterState";
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
var Ui = x.createContext(
  null
);
Ui.displayName = "Location";
var zn = x.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
zn.displayName = "Route";
var pc = x.createContext(null);
pc.displayName = "RouteError";
var Nh = "REACT_ROUTER_ERROR", y1 = "REDIRECT", p1 = "ROUTE_ERROR_RESPONSE";
function b1(l) {
  if (l.startsWith(`${Nh}:${y1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function v1(l) {
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
  Ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = x.useContext(It), { hash: c, pathname: d, search: m } = ji(l, { relative: r }), p = d;
  return s !== "/" && (p = d === "/" ? s : Un([s, d])), o.createHref({ pathname: p, search: m, hash: c });
}
function Mi() {
  return x.useContext(Ui) != null;
}
function Ma() {
  return Ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), x.useContext(Ui).location;
}
var _h = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oh(l) {
  x.useContext(It).static || x.useLayoutEffect(l);
}
function S1() {
  let { isDataRoute: l } = x.useContext(zn);
  return l ? j1() : w1();
}
function w1() {
  Ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = x.useContext(Rl), { basename: r, navigator: s } = x.useContext(It), { matches: o } = x.useContext(zn), { pathname: c } = Ma(), d = JSON.stringify(wh(o)), m = x.useRef(!1);
  return Oh(() => {
    m.current = !0;
  }), x.useCallback(
    (b, y = {}) => {
      if (an(m.current, _h), !m.current) return;
      if (typeof b == "number") {
        s.go(b);
        return;
      }
      let v = xh(
        b,
        JSON.parse(d),
        c,
        y.relative === "path"
      );
      l == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : Un([r, v.pathname])), (y.replace ? s.replace : s.push)(
        v,
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
function ji(l, { relative: r } = {}) {
  let { matches: s } = x.useContext(zn), { pathname: o } = Ma(), c = JSON.stringify(wh(s));
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
  Ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = x.useContext(It), { matches: m } = x.useContext(zn), p = m[m.length - 1], b = p ? p.params : {}, y = p ? p.pathname : "/", v = p ? p.pathnameBase : "/", S = p && p.route;
  {
    let K = S && S.path || "";
    Mh(
      y,
      !S || K.endsWith("*") || K.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K === "/" ? "*" : `${K}/*`}">.`
    );
  }
  let C = Ma(), k;
  if (r) {
    let K = typeof r == "string" ? xl(r) : r;
    Ze(
      v === "/" || K.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${K.pathname}" was given in the \`location\` prop.`
    ), k = K;
  } else
    k = C;
  let A = k.pathname || "/", j = A;
  if (v !== "/") {
    let K = v.replace(/^\//, "").split("/");
    j = "/" + A.replace(/^\//, "").split("/").slice(K.length).join("/");
  }
  let D = bh(l, { pathname: j });
  an(
    S || D != null,
    `No routes matched location "${k.pathname}${k.search}${k.hash}" `
  ), an(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let G = N1(
    D && D.map(
      (K) => Object.assign({}, K, {
        params: Object.assign({}, b, K.params),
        pathname: Un([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            K.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : K.pathname
        ]),
        pathnameBase: K.pathnameBase === "/" ? v : Un([
          v,
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
    Ui.Provider,
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
  let l = M1(), r = c1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
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
      const s = v1(l.digest);
      s && (l = s);
    }
    let r = l !== void 0 ? /* @__PURE__ */ x.createElement(zn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ x.createElement(
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
var Jo = /* @__PURE__ */ new WeakMap();
function A1({
  children: l,
  error: r
}) {
  let { basename: s } = x.useContext(It);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = b1(r.digest);
    if (o) {
      let c = Jo.get(r);
      if (c) throw c;
      let d = Th(o.location, s);
      if (Rh && !Jo.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw Jo.set(r, m), m;
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
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ x.createElement(zn.Provider, { value: l }, s);
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
    let v = d.findIndex(
      (S) => S.route.id && m?.[S.route.id] !== void 0
    );
    Ze(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, v + 1)
    );
  }
  let p = !1, b = -1;
  if (s)
    for (let v = 0; v < d.length; v++) {
      let S = d[v];
      if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (b = v), S.route.id) {
        let { loaderData: C, errors: k } = s, A = S.route.loader && !C.hasOwnProperty(S.route.id) && (!k || k[S.route.id] === void 0);
        if (S.route.lazy || A) {
          p = !0, b >= 0 ? d = d.slice(0, b + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && o ? (v, S) => {
    o(v, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: f1(s.matches),
      errorInfo: S
    });
  } : void 0;
  return d.reduceRight(
    (v, S, C) => {
      let k, A = !1, j = null, D = null;
      s && (k = m && S.route.id ? m[S.route.id] : void 0, j = S.route.errorElement || T1, p && (b < 0 && C === 0 ? (Mh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), A = !0, D = null) : b === C && (A = !0, D = S.route.hydrateFallbackElement || null)));
      let G = r.concat(d.slice(0, C + 1)), K = () => {
        let Q;
        return k ? Q = j : A ? Q = D : S.route.Component ? Q = /* @__PURE__ */ x.createElement(S.route.Component, null) : S.route.element ? Q = S.route.element : Q = v, /* @__PURE__ */ x.createElement(
          C1,
          {
            match: S,
            routeContext: {
              outlet: v,
              matches: G,
              isDataRoute: s != null
            },
            children: Q
          }
        );
      };
      return s && (S.route.ErrorBoundary || S.route.errorElement || C === 0) ? /* @__PURE__ */ x.createElement(
        Uh,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: j,
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
function bc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _1(l) {
  let r = x.useContext(Rl);
  return Ze(r, bc(l)), r;
}
function O1(l) {
  let r = x.useContext(wu);
  return Ze(r, bc(l)), r;
}
function D1(l) {
  let r = x.useContext(zn);
  return Ze(r, bc(l)), r;
}
function vc(l) {
  let r = D1(l), s = r.matches[r.matches.length - 1];
  return Ze(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function U1() {
  return vc(
    "useRouteId"
    /* UseRouteId */
  );
}
function M1() {
  let l = x.useContext(pc), r = O1(
    "useRouteError"
    /* UseRouteError */
  ), s = vc(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[s];
}
function j1() {
  let { router: l } = _1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = vc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = x.useRef(!1);
  return Oh(() => {
    s.current = !0;
  }), x.useCallback(
    async (c, d = {}) => {
      an(s.current, _h), s.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...d }));
    },
    [l, r]
  );
}
var B0 = {};
function Mh(l, r, s) {
  !r && !B0[l] && (B0[l] = !0, an(!1, s));
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
function jh(l) {
  Ze(
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
  Ze(
    !Mi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = l.replace(/^\/*/, "/"), b = x.useMemo(
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
    search: v = "",
    hash: S = "",
    state: C = null,
    key: k = "default"
  } = s, A = x.useMemo(() => {
    let j = jn(y, p);
    return j == null ? null : {
      location: {
        pathname: j,
        search: v,
        hash: S,
        state: C,
        key: k
      },
      navigationType: o
    };
  }, [p, y, v, S, C, k, o]);
  return an(
    A != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`
  ), A == null ? null : /* @__PURE__ */ x.createElement(It.Provider, { value: b }, /* @__PURE__ */ x.createElement(Ui.Provider, { children: r, value: A }));
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
    Ze(
      o.type === jh,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ze(
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
function xu(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function B1(l) {
  return xu(l) && l.tagName.toLowerCase() === "button";
}
function q1(l) {
  return xu(l) && l.tagName.toLowerCase() === "form";
}
function k1(l) {
  return xu(l) && l.tagName.toLowerCase() === "input";
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
function $o(l) {
  return l != null && !V1.has(l) ? (an(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`
  ), null) : l;
}
function K1(l, r) {
  let s, o, c, d, m;
  if (q1(l)) {
    let p = l.getAttribute("action");
    o = p ? jn(p, r) : null, s = l.getAttribute("method") || cu, c = $o(l.getAttribute("enctype")) || fu, d = new FormData(l);
  } else if (B1(l) || k1(l) && (l.type === "submit" || l.type === "image")) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = l.getAttribute("formaction") || p.getAttribute("action");
    if (o = b ? jn(b, r) : null, s = l.getAttribute("formmethod") || p.getAttribute("method") || cu, c = $o(l.getAttribute("formenctype")) || $o(p.getAttribute("enctype")) || fu, d = new FormData(p, l), !X1()) {
      let { name: y, type: v, value: S } = l;
      if (v === "image") {
        let C = y ? `${y}.` : "";
        d.append(`${C}x`, "0"), d.append(`${C}y`, "0");
      } else y && d.append(y, S);
    }
  } else {
    if (xu(l))
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
  return o.pathname === "/" ? o.pathname = `_root.${s}` : r && jn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`, o;
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
function q0(l, r, s, o, c, d) {
  let m = (b, y) => s[y] ? b.route.id !== s[y].route.id : !0, p = (b, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== b.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== b.params["*"]
  );
  return d === "assets" ? r.filter(
    (b, y) => m(b, y) || p(b, y)
  ) : d === "data" ? r.filter((b, y) => {
    let v = o.routes[b.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (m(b, y) || p(b, y))
      return !0;
    if (b.route.shouldRevalidate) {
      let S = b.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(l, window.origin),
        nextParams: b.params,
        defaultShouldRevalidate: !0
      });
      if (typeof S == "boolean")
        return S;
    }
    return !0;
  }) : [];
}
function F1(l, r, { includeHydrateFallback: s } = {}) {
  return I1(
    l.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let d = [c.module];
      return c.clientActionModule && (d = d.concat(c.clientActionModule)), c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (d = d.concat(c.hydrateFallbackModule)), c.imports && (d = d.concat(c.imports)), d;
    }).flat(1)
  );
}
function I1(l) {
  return [...new Set(l)];
}
function W1(l) {
  let r = {}, s = Object.keys(l).sort();
  for (let o of s)
    r[o] = l[o];
  return r;
}
function P1(l, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((o, c) => {
    let d = JSON.stringify(W1(c));
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
function eb() {
  let l = x.useContext(wu);
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
function tb(l, r) {
  let s = x.useContext(Sc), [o, c] = x.useState(!1), [d, m] = x.useState(!1), { onFocus: p, onBlur: b, onMouseEnter: y, onMouseLeave: v, onTouchStart: S } = r, C = x.useRef(null);
  x.useEffect(() => {
    if (l === "render" && m(!0), l === "viewport") {
      let j = (G) => {
        G.forEach((K) => {
          m(K.isIntersecting);
        });
      }, D = new IntersectionObserver(j, { threshold: 0.5 });
      return C.current && D.observe(C.current), () => {
        D.disconnect();
      };
    }
  }, [l]), x.useEffect(() => {
    if (o) {
      let j = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(j);
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
      onFocus: wi(p, k),
      onBlur: wi(b, A),
      onMouseEnter: wi(y, k),
      onMouseLeave: wi(v, A),
      onTouchStart: wi(S, k)
    }
  ] : [!1, C, {}];
}
function wi(l, r) {
  return (s) => {
    l && l(s), s.defaultPrevented || r(s);
  };
}
function nb({ page: l, ...r }) {
  let { router: s } = zh(), o = x.useMemo(
    () => bh(s.routes, l, s.basename),
    [s.routes, l, s.basename]
  );
  return o ? /* @__PURE__ */ x.createElement(lb, { page: l, matches: o, ...r }) : null;
}
function ab(l) {
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
function lb({
  page: l,
  matches: r,
  ...s
}) {
  let o = Ma(), { manifest: c, routeModules: d } = Lh(), { basename: m } = zh(), { loaderData: p, matches: b } = eb(), y = x.useMemo(
    () => q0(
      l,
      r,
      b,
      c,
      o,
      "data"
    ),
    [l, r, b, c, o]
  ), v = x.useMemo(
    () => q0(
      l,
      r,
      b,
      c,
      o,
      "assets"
    ),
    [l, r, b, c, o]
  ), S = x.useMemo(() => {
    if (l === o.pathname + o.search + o.hash)
      return [];
    let A = /* @__PURE__ */ new Set(), j = !1;
    if (r.forEach((G) => {
      let K = c.routes[G.route.id];
      !K || !K.hasLoader || (!y.some((Q) => Q.route.id === G.route.id) && G.route.id in p && d[G.route.id]?.shouldRevalidate || K.hasClientLoader ? j = !0 : A.add(G.route.id));
    }), A.size === 0)
      return [];
    let D = Q1(l, m, "data");
    return j && A.size > 0 && D.searchParams.set(
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
    () => F1(v, c),
    [v, c]
  ), k = ab(v);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, S.map((A) => /* @__PURE__ */ x.createElement("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...s })), C.map((A) => /* @__PURE__ */ x.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })), k.map(({ key: A, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ x.createElement("link", { key: A, nonce: s.nonce, ...j })
  )));
}
function ib(...l) {
  return (r) => {
    l.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var rb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  rb && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function ub({
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
  }), b = x.useCallback(
    (y) => {
      s === !1 ? p(y) : x.startTransition(() => p(y));
    },
    [s]
  );
  return x.useLayoutEffect(() => d.listen(b), [d, b]), /* @__PURE__ */ x.createElement(
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
    target: b,
    to: y,
    preventScrollReset: v,
    viewTransition: S,
    unstable_defaultShouldRevalidate: C,
    ...k
  }, A) {
    let { basename: j, unstable_useTransitions: D } = x.useContext(It), G = typeof y == "string" && Hh.test(y), K = Th(y, j);
    y = K.to;
    let Q = E1(y, { relative: c }), [F, I, he] = tb(
      o,
      k
    ), ne = fb(y, {
      replace: m,
      state: p,
      target: b,
      preventScrollReset: v,
      relative: c,
      viewTransition: S,
      unstable_defaultShouldRevalidate: C,
      unstable_useTransitions: D
    });
    function W(Be) {
      r && r(Be), Be.defaultPrevented || ne(Be);
    }
    let ye = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ x.createElement(
        "a",
        {
          ...k,
          ...he,
          href: K.absoluteURL || Q,
          onClick: K.isExternal || d ? r : W,
          ref: ib(A, I),
          target: b,
          "data-discover": !G && s === "render" ? "true" : void 0
        }
      )
    );
    return F && !G ? /* @__PURE__ */ x.createElement(x.Fragment, null, ye, /* @__PURE__ */ x.createElement(nb, { page: Q })) : ye;
  }
);
Bh.displayName = "Link";
var sb = x.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: c = !1,
    style: d,
    to: m,
    viewTransition: p,
    children: b,
    ...y
  }, v) {
    let S = ji(m, { relative: y.relative }), C = Ma(), k = x.useContext(wu), { navigator: A, basename: j } = x.useContext(It), D = k != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    yb(S) && p === !0, G = A.encodeLocation ? A.encodeLocation(S).pathname : S.pathname, K = C.pathname, Q = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null;
    s || (K = K.toLowerCase(), Q = Q ? Q.toLowerCase() : null, G = G.toLowerCase()), Q && j && (Q = jn(Q, j) || Q);
    const F = G !== "/" && G.endsWith("/") ? G.length - 1 : G.length;
    let I = K === G || !c && K.startsWith(G) && K.charAt(F) === "/", he = Q != null && (Q === G || !c && Q.startsWith(G) && Q.charAt(G.length) === "/"), ne = {
      isActive: I,
      isPending: he,
      isTransitioning: D
    }, W = I ? r : void 0, ye;
    typeof o == "function" ? ye = o(ne) : ye = [
      o,
      I ? "active" : null,
      he ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Be = typeof d == "function" ? d(ne) : d;
    return /* @__PURE__ */ x.createElement(
      Bh,
      {
        ...y,
        "aria-current": W,
        className: ye,
        ref: v,
        style: Be,
        to: m,
        viewTransition: p
      },
      typeof b == "function" ? b(ne) : b
    );
  }
);
sb.displayName = "NavLink";
var ob = x.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: d,
    method: m = cu,
    action: p,
    onSubmit: b,
    relative: y,
    preventScrollReset: v,
    viewTransition: S,
    unstable_defaultShouldRevalidate: C,
    ...k
  }, A) => {
    let { unstable_useTransitions: j } = x.useContext(It), D = hb(), G = gb(p, { relative: y }), K = m.toLowerCase() === "get" ? "get" : "post", Q = typeof p == "string" && Hh.test(p), F = (I) => {
      if (b && b(I), I.defaultPrevented) return;
      I.preventDefault();
      let he = I.nativeEvent.submitter, ne = he?.getAttribute("formmethod") || m, W = () => D(he || I.currentTarget, {
        fetcherKey: r,
        method: ne,
        navigate: s,
        replace: c,
        state: d,
        relative: y,
        preventScrollReset: v,
        viewTransition: S,
        unstable_defaultShouldRevalidate: C
      });
      j && s !== !1 ? x.startTransition(() => W()) : W();
    };
    return /* @__PURE__ */ x.createElement(
      "form",
      {
        ref: A,
        method: K,
        action: G,
        onSubmit: o ? b : F,
        ...k,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
ob.displayName = "Form";
function cb(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qh(l) {
  let r = x.useContext(Rl);
  return Ze(r, cb(l)), r;
}
function fb(l, {
  target: r,
  replace: s,
  state: o,
  preventScrollReset: c,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: b
} = {}) {
  let y = S1(), v = Ma(), S = ji(l, { relative: d });
  return x.useCallback(
    (C) => {
      if (Y1(C, r)) {
        C.preventDefault();
        let k = s !== void 0 ? s : Ni(v) === Ni(S), A = () => y(l, {
          replace: k,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: p
        });
        b ? x.startTransition(() => A()) : A();
      }
    },
    [
      v,
      y,
      S,
      s,
      o,
      r,
      l,
      c,
      d,
      m,
      p,
      b
    ]
  );
}
var db = 0, mb = () => `__${String(++db)}__`;
function hb() {
  let { router: l } = qh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = x.useContext(It), s = U1(), o = l.fetch, c = l.navigate;
  return x.useCallback(
    async (d, m = {}) => {
      let { action: p, method: b, encType: y, formData: v, body: S } = K1(
        d,
        r
      );
      if (m.navigate === !1) {
        let C = m.fetcherKey || mb();
        await o(C, s, m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: S,
          formMethod: m.method || b,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await c(m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: S,
          formMethod: m.method || b,
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
function gb(l, { relative: r } = {}) {
  let { basename: s } = x.useContext(It), o = x.useContext(zn);
  Ze(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...ji(l || ".", { relative: r }) }, m = Ma();
  if (l == null) {
    d.search = m.search;
    let p = new URLSearchParams(d.search), b = p.getAll("index");
    if (b.some((v) => v === "")) {
      p.delete("index"), b.filter((S) => S).forEach((S) => p.append("index", S));
      let v = p.toString();
      d.search = v ? `?${v}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : Un([s, d.pathname])), Ni(d);
}
function yb(l, { relative: r } = {}) {
  let s = x.useContext(Ch);
  Ze(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = qh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = ji(l, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = jn(s.currentLocation.pathname, o) || s.currentLocation.pathname, m = jn(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return bu(c.pathname, m) != null || bu(c.pathname, d) != null;
}
var Fo = { exports: {} }, yt = {};
var k0;
function pb() {
  if (k0) return yt;
  k0 = 1;
  var l = yc();
  function r(b) {
    var y = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + b + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function d(b, y, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: b,
      containerInfo: y,
      implementation: v
    };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(b, y) {
    if (b === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, yt.createPortal = function(b, y) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(b, y, null, v);
  }, yt.flushSync = function(b) {
    var y = m.T, v = o.p;
    try {
      if (m.T = null, o.p = 2, b) return b();
    } finally {
      m.T = y, o.p = v, o.d.f();
    }
  }, yt.preconnect = function(b, y) {
    typeof b == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(b, y));
  }, yt.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, yt.preinit = function(b, y) {
    if (typeof b == "string" && y && typeof y.as == "string") {
      var v = y.as, S = p(v, y.crossOrigin), C = typeof y.integrity == "string" ? y.integrity : void 0, k = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      v === "style" ? o.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: S,
          integrity: C,
          fetchPriority: k
        }
      ) : v === "script" && o.d.X(b, {
        crossOrigin: S,
        integrity: C,
        fetchPriority: k,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, yt.preinitModule = function(b, y) {
    if (typeof b == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var v = p(
            y.as,
            y.crossOrigin
          );
          o.d.M(b, {
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(b);
  }, yt.preload = function(b, y) {
    if (typeof b == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var v = y.as, S = p(v, y.crossOrigin);
      o.d.L(b, v, {
        crossOrigin: S,
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
  }, yt.preloadModule = function(b, y) {
    if (typeof b == "string")
      if (y) {
        var v = p(y.as, y.crossOrigin);
        o.d.m(b, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: v,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(b);
  }, yt.requestFormReset = function(b) {
    o.d.r(b);
  }, yt.unstable_batchedUpdates = function(b, y) {
    return b(y);
  }, yt.useFormState = function(b, y, v) {
    return m.H.useFormState(b, y, v);
  }, yt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, yt.version = "19.2.3", yt;
}
var G0;
function bb() {
  if (G0) return Fo.exports;
  G0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Fo.exports = pb(), Fo.exports;
}
var Io = { exports: {} }, xi = {}, Wo = { exports: {} }, Po = {};
var Y0;
function vb() {
  return Y0 || (Y0 = 1, (function(l) {
    function r(Y, q) {
      var X = Y.length;
      Y.push(q);
      e: for (; 0 < X; ) {
        var ge = X - 1 >>> 1, Re = Y[ge];
        if (0 < c(Re, q))
          Y[ge] = q, Y[X] = Re, X = ge;
        else break e;
      }
    }
    function s(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function o(Y) {
      if (Y.length === 0) return null;
      var q = Y[0], X = Y.pop();
      if (X !== q) {
        Y[0] = X;
        e: for (var ge = 0, Re = Y.length, Oe = Re >>> 1; ge < Oe; ) {
          var w = 2 * (ge + 1) - 1, L = Y[w], V = w + 1, Z = Y[V];
          if (0 > c(L, X))
            V < Re && 0 > c(Z, L) ? (Y[ge] = Z, Y[V] = X, ge = V) : (Y[ge] = L, Y[w] = X, ge = w);
          else if (V < Re && 0 > c(Z, X))
            Y[ge] = Z, Y[V] = X, ge = V;
          else break e;
        }
      }
      return q;
    }
    function c(Y, q) {
      var X = Y.sortIndex - q.sortIndex;
      return X !== 0 ? X : Y.id - q.id;
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
    var b = [], y = [], v = 1, S = null, C = 3, k = !1, A = !1, j = !1, D = !1, G = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function F(Y) {
      for (var q = s(y); q !== null; ) {
        if (q.callback === null) o(y);
        else if (q.startTime <= Y)
          o(y), q.sortIndex = q.expirationTime, r(b, q);
        else break;
        q = s(y);
      }
    }
    function I(Y) {
      if (j = !1, F(Y), !A)
        if (s(b) !== null)
          A = !0, he || (he = !0, Te());
        else {
          var q = s(y);
          q !== null && _e(I, q.startTime - Y);
        }
    }
    var he = !1, ne = -1, W = 5, ye = -1;
    function Be() {
      return D ? !0 : !(l.unstable_now() - ye < W);
    }
    function it() {
      if (D = !1, he) {
        var Y = l.unstable_now();
        ye = Y;
        var q = !0;
        try {
          e: {
            A = !1, j && (j = !1, K(ne), ne = -1), k = !0;
            var X = C;
            try {
              t: {
                for (F(Y), S = s(b); S !== null && !(S.expirationTime > Y && Be()); ) {
                  var ge = S.callback;
                  if (typeof ge == "function") {
                    S.callback = null, C = S.priorityLevel;
                    var Re = ge(
                      S.expirationTime <= Y
                    );
                    if (Y = l.unstable_now(), typeof Re == "function") {
                      S.callback = Re, F(Y), q = !0;
                      break t;
                    }
                    S === s(b) && o(b), F(Y);
                  } else o(b);
                  S = s(b);
                }
                if (S !== null) q = !0;
                else {
                  var Oe = s(y);
                  Oe !== null && _e(
                    I,
                    Oe.startTime - Y
                  ), q = !1;
                }
              }
              break e;
            } finally {
              S = null, C = X, k = !1;
            }
            q = void 0;
          }
        } finally {
          q ? Te() : he = !1;
        }
      }
    }
    var Te;
    if (typeof Q == "function")
      Te = function() {
        Q(it);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), xe = ue.port2;
      ue.port1.onmessage = it, Te = function() {
        xe.postMessage(null);
      };
    } else
      Te = function() {
        G(it, 0);
      };
    function _e(Y, q) {
      ne = G(function() {
        Y(l.unstable_now());
      }, q);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, l.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : W = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_next = function(Y) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = C;
      }
      var X = C;
      C = q;
      try {
        return Y();
      } finally {
        C = X;
      }
    }, l.unstable_requestPaint = function() {
      D = !0;
    }, l.unstable_runWithPriority = function(Y, q) {
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
        return q();
      } finally {
        C = X;
      }
    }, l.unstable_scheduleCallback = function(Y, q, X) {
      var ge = l.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ge + X : ge) : X = ge, Y) {
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
        id: v++,
        callback: q,
        priorityLevel: Y,
        startTime: X,
        expirationTime: Re,
        sortIndex: -1
      }, X > ge ? (Y.sortIndex = X, r(y, Y), s(b) === null && Y === s(y) && (j ? (K(ne), ne = -1) : j = !0, _e(I, X - ge))) : (Y.sortIndex = Re, r(b, Y), A || k || (A = !0, he || (he = !0, Te()))), Y;
    }, l.unstable_shouldYield = Be, l.unstable_wrapCallback = function(Y) {
      var q = C;
      return function() {
        var X = C;
        C = q;
        try {
          return Y.apply(this, arguments);
        } finally {
          C = X;
        }
      };
    };
  })(Po)), Po;
}
var X0;
function Eb() {
  return X0 || (X0 = 1, Wo.exports = vb()), Wo.exports;
}
var V0;
function Sb() {
  if (V0) return xi;
  V0 = 1;
  var l = {};
  var r = Eb(), s = yc(), o = bb();
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
  function b(e) {
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
  function v(e) {
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
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), ye = /* @__PURE__ */ Symbol.for("react.lazy"), Be = /* @__PURE__ */ Symbol.for("react.activity"), it = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Te = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = Te && e[Te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var xe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function _e(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
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
      case ne:
        return "SuspenseList";
      case Be:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case I:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case W:
          return t = e.displayName || null, t !== null ? t : _e(e.type) || "Memo";
        case ye:
          t = e._payload, e = e._init;
          try {
            return _e(e(t));
          } catch {
          }
      }
    return null;
  }
  var Y = Array.isArray, q = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], Oe = -1;
  function w(e) {
    return { current: e };
  }
  function L(e) {
    0 > Oe || (e.current = Re[Oe], Re[Oe] = null, Oe--);
  }
  function V(e, t) {
    Oe++, Re[Oe] = e.current, e.current = t;
  }
  var Z = w(null), ae = w(null), se = w(null), ce = w(null);
  function qe(e, t) {
    switch (V(se, t), V(ae, e), V(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Pm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Pm(t), e = e0(t, e);
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
  function P() {
    L(Z), L(ae), L(se);
  }
  function mn(e) {
    e.memoizedState !== null && V(ce, e);
    var t = Z.current, n = e0(t, e.type);
    t !== n && (V(ae, e), V(Z, n));
  }
  function Wt(e) {
    ae.current === e && (L(Z), L(ae)), ce.current === e && (L(ce), pi._currentValue = ge);
  }
  var sa, oa;
  function le(e) {
    if (sa === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        sa = t && t[1] || "", oa = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + sa + e + oa;
  }
  var Ke = !1;
  function rn(e, t) {
    if (!e || Ke) return "";
    Ke = !0;
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
                  var z = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      Ke = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? le(n) : "";
  }
  function Du(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return le(e.type);
      case 16:
        return le("Lazy");
      case 13:
        return e.child !== t && t !== null ? le("Suspense Fallback") : le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 15:
        return rn(e.type, !1);
      case 11:
        return rn(e.type.render, !1);
      case 1:
        return rn(e.type, !0);
      case 31:
        return le("Activity");
      default:
        return "";
    }
  }
  function ki(e) {
    try {
      var t = "", n = null;
      do
        t += Du(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var oe = Object.prototype.hasOwnProperty, Et = r.unstable_scheduleCallback, rt = r.unstable_cancelCallback, za = r.unstable_shouldYield, ca = r.unstable_requestPaint, bt = r.unstable_now, gg = r.unstable_getCurrentPriorityLevel, Oc = r.unstable_ImmediatePriority, Dc = r.unstable_UserBlockingPriority, Gi = r.unstable_NormalPriority, yg = r.unstable_LowPriority, Uc = r.unstable_IdlePriority, pg = r.log, bg = r.unstable_setDisableYieldValue, _l = null, Dt = null;
  function Ln(e) {
    if (typeof pg == "function" && bg(e), Dt && typeof Dt.setStrictMode == "function")
      try {
        Dt.setStrictMode(_l, e);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : Sg, vg = Math.log, Eg = Math.LN2;
  function Sg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vg(e) / Eg | 0) | 0;
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
  function Ol(e, t) {
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
  function Mc() {
    var e = Vi;
    return Vi <<= 1, (Vi & 62914560) === 0 && (Vi = 4194304), e;
  }
  function Uu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Dl(e, t) {
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
          var M = O[z];
          M !== null && (M.lane &= -536870913);
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
  function zc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Ut(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function Lc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Mu(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Mu(e) {
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
  function Hc() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : x0(e.type));
  }
  function Bc(e, t) {
    var n = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = n;
    }
  }
  var Hn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Hn, St = "__reactProps$" + Hn, La = "__reactContainer$" + Hn, zu = "__reactEvents$" + Hn, Rg = "__reactListeners$" + Hn, Tg = "__reactHandles$" + Hn, qc = "__reactResources$" + Hn, Ul = "__reactMarker$" + Hn;
  function Lu(e) {
    delete e[ct], delete e[St], delete e[zu], delete e[Rg], delete e[Tg];
  }
  function Ha(e) {
    var t = e[ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[La] || n[ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = u0(e); e !== null; ) {
            if (n = e[ct]) return n;
            e = u0(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ba(e) {
    if (e = e[ct] || e[La]) {
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
  function qa(e) {
    var t = e[qc];
    return t || (t = e[qc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Ul] = !0;
  }
  var kc = /* @__PURE__ */ new Set(), Gc = {};
  function da(e, t) {
    ka(e, t), ka(e + "Capture", t);
  }
  function ka(e, t) {
    for (Gc[e] = t, e = 0; e < t.length; e++)
      kc.add(t[e]);
  }
  var Ag = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Yc = {}, Xc = {};
  function Cg(e) {
    return oe.call(Xc, e) ? !0 : oe.call(Yc, e) ? !1 : Ag.test(e) ? Xc[e] = !0 : (Yc[e] = !0, !1);
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
  function hn(e, t, n, a) {
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
  function Vc(e) {
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
  function Hu(e) {
    if (!e._valueTracker) {
      var t = Vc(e) ? "checked" : "value";
      e._valueTracker = Ng(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Kc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Vc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
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
  function Gt(e) {
    return e.replace(
      _g,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(e, t, n, a, i, u, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? qu(e, f, kt(t)) : n != null ? qu(e, f, kt(n)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + kt(h) : e.removeAttribute("name");
  }
  function Qc(e, t, n, a, i, u, f, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Hu(e);
        return;
      }
      n = n != null ? "" + kt(n) : "", t = t != null ? "" + kt(t) : n, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Hu(e);
  }
  function qu(e, t, n) {
    t === "number" && Ji(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ga(e, t, n, a) {
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
  function Zc(e, t, n) {
    if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + kt(n) : "";
  }
  function Jc(e, t, n, a) {
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
    n = kt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Hu(e);
  }
  function Ya(e, t) {
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
  function $c(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Og.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Fc(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && $c(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && $c(e, u, t[u]);
  }
  function ku(e) {
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
  function gn() {
  }
  var Gu = null;
  function Yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, Va = null;
  function Ic(e) {
    var t = Ba(e);
    if (t && (e = t.stateNode)) {
      var n = e[St] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Bu(
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
              'input[name="' + Gt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[St] || null;
                if (!i) throw Error(c(90));
                Bu(
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
              a = n[t], a.form === e.form && Kc(a);
          }
          break e;
        case "textarea":
          Zc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ga(e, !!n.multiple, t, !1);
      }
    }
  }
  var Xu = !1;
  function Wc(e, t, n) {
    if (Xu) return e(t, n);
    Xu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Xu = !1, (Xa !== null || Va !== null) && (Lr(), Xa && (t = Xa, e = Va, Va = Xa = null, Ic(t), e)))
        for (t = 0; t < e.length; t++) Ic(e[t]);
    }
  }
  function jl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[St] || null;
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
  var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vu = !1;
  if (yn)
    try {
      var zl = {};
      Object.defineProperty(zl, "passive", {
        get: function() {
          Vu = !0;
        }
      }), window.addEventListener("test", zl, zl), window.removeEventListener("test", zl, zl);
    } catch {
      Vu = !1;
    }
  var Bn = null, Ku = null, Fi = null;
  function Pc() {
    if (Fi) return Fi;
    var e, t = Ku, n = t.length, a, i = "value" in Bn ? Bn.value : Bn.textContent, u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var f = n - e;
    for (a = 1; a <= f && t[n - a] === i[u - a]; a++) ;
    return Fi = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ii(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Wi() {
    return !0;
  }
  function ef() {
    return !1;
  }
  function wt(e) {
    function t(n, a, i, u, f) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Wi : ef, this.isPropagationStopped = ef, this;
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
  var ma = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pi = wt(ma), Ll = C({}, ma, { view: 0, detail: 0 }), Mg = wt(Ll), Qu, Zu, Hl, er = C({}, Ll, {
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
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Hl && (Hl && e.type === "mousemove" ? (Qu = e.screenX - Hl.screenX, Zu = e.screenY - Hl.screenY) : Zu = Qu = 0, Hl = e), Qu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Zu;
    }
  }), tf = wt(er), jg = C({}, er, { dataTransfer: 0 }), zg = wt(jg), Lg = C({}, Ll, { relatedTarget: 0 }), Ju = wt(Lg), Hg = C({}, ma, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bg = wt(Hg), qg = C({}, ma, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), kg = wt(qg), Gg = C({}, ma, { data: 0 }), nf = wt(Gg), Yg = {
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
  function $u() {
    return Kg;
  }
  var Qg = C({}, Ll, {
    key: function(e) {
      if (e.key) {
        var t = Yg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ii(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(e) {
      return e.type === "keypress" ? Ii(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Zg = wt(Qg), Jg = C({}, er, {
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
  }), af = wt(Jg), $g = C({}, Ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), Fg = wt($g), Ig = C({}, ma, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wg = wt(Ig), Pg = C({}, er, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ey = wt(Pg), ty = C({}, ma, {
    newState: 0,
    oldState: 0
  }), ny = wt(ty), ay = [9, 13, 27, 32], Fu = yn && "CompositionEvent" in window, Bl = null;
  yn && "documentMode" in document && (Bl = document.documentMode);
  var ly = yn && "TextEvent" in window && !Bl, lf = yn && (!Fu || Bl && 8 < Bl && 11 >= Bl), rf = " ", uf = !1;
  function sf(e, t) {
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
  function of(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function iy(e, t) {
    switch (e) {
      case "compositionend":
        return of(t);
      case "keypress":
        return t.which !== 32 ? null : (uf = !0, rf);
      case "textInput":
        return e = t.data, e === rf && uf ? null : e;
      default:
        return null;
    }
  }
  function ry(e, t) {
    if (Ka)
      return e === "compositionend" || !Fu && sf(e, t) ? (e = Pc(), Fi = Ku = Bn = null, Ka = !1, e) : null;
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
        return lf && t.locale !== "ko" ? null : t.data;
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
  function cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uy[e.type] : t === "textarea";
  }
  function ff(e, t, n, a) {
    Xa ? Va ? Va.push(a) : Va = [a] : Xa = a, t = Xr(t, "onChange"), 0 < t.length && (n = new Pi(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ql = null, kl = null;
  function sy(e) {
    Zm(e, 0);
  }
  function tr(e) {
    var t = Ml(e);
    if (Kc(t)) return e;
  }
  function df(e, t) {
    if (e === "change") return t;
  }
  var mf = !1;
  if (yn) {
    var Iu;
    if (yn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var hf = document.createElement("div");
        hf.setAttribute("oninput", "return;"), Wu = typeof hf.oninput == "function";
      }
      Iu = Wu;
    } else Iu = !1;
    mf = Iu && (!document.documentMode || 9 < document.documentMode);
  }
  function gf() {
    ql && (ql.detachEvent("onpropertychange", yf), kl = ql = null);
  }
  function yf(e) {
    if (e.propertyName === "value" && tr(kl)) {
      var t = [];
      ff(
        t,
        kl,
        e,
        Yu(e)
      ), Wc(sy, t);
    }
  }
  function oy(e, t, n) {
    e === "focusin" ? (gf(), ql = t, kl = n, ql.attachEvent("onpropertychange", yf)) : e === "focusout" && gf();
  }
  function cy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tr(kl);
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
  var Mt = typeof Object.is == "function" ? Object.is : my;
  function Gl(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!oe.call(t, i) || !Mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function pf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bf(e, t) {
    var n = pf(e);
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
      n = pf(n);
    }
  }
  function vf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ef(e) {
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
  function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var hy = yn && "documentMode" in document && 11 >= document.documentMode, Qa = null, es = null, Yl = null, ts = !1;
  function Sf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ts || Qa == null || Qa !== Ji(a) || (a = Qa, "selectionStart" in a && Pu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Yl && Gl(Yl, a) || (Yl = a, a = Xr(es, "onSelect"), 0 < a.length && (t = new Pi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Qa)));
  }
  function ha(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Za = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionrun: ha("Transition", "TransitionRun"),
    transitionstart: ha("Transition", "TransitionStart"),
    transitioncancel: ha("Transition", "TransitionCancel"),
    transitionend: ha("Transition", "TransitionEnd")
  }, ns = {}, wf = {};
  yn && (wf = document.createElement("div").style, "AnimationEvent" in window || (delete Za.animationend.animation, delete Za.animationiteration.animation, delete Za.animationstart.animation), "TransitionEvent" in window || delete Za.transitionend.transition);
  function ga(e) {
    if (ns[e]) return ns[e];
    if (!Za[e]) return e;
    var t = Za[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in wf)
        return ns[e] = t[n];
    return e;
  }
  var xf = ga("animationend"), Rf = ga("animationiteration"), Tf = ga("animationstart"), gy = ga("transitionrun"), yy = ga("transitionstart"), py = ga("transitioncancel"), Af = ga("transitionend"), Cf = /* @__PURE__ */ new Map(), as = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  as.push("scrollEnd");
  function Pt(e, t) {
    Cf.set(e, t), da(t, [e]);
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
  }, Yt = [], Ja = 0, ls = 0;
  function ar() {
    for (var e = Ja, t = ls = Ja = 0; t < e; ) {
      var n = Yt[t];
      Yt[t++] = null;
      var a = Yt[t];
      Yt[t++] = null;
      var i = Yt[t];
      Yt[t++] = null;
      var u = Yt[t];
      if (Yt[t++] = null, a !== null && i !== null) {
        var f = a.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
      }
      u !== 0 && Nf(n, i, u);
    }
  }
  function lr(e, t, n, a) {
    Yt[Ja++] = e, Yt[Ja++] = t, Yt[Ja++] = n, Yt[Ja++] = a, ls |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function is(e, t, n, a) {
    return lr(e, t, n, a), ir(e);
  }
  function ya(e, t) {
    return lr(e, null, null, t), ir(e);
  }
  function Nf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - Ut(n), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function ir(e) {
    if (50 < ci)
      throw ci = 0, go = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var $a = {};
  function by(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(e, t, n, a) {
    return new by(e, t, n, a);
  }
  function rs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = jt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function _f(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function rr(e, t, n, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") rs(e) && (f = 1);
    else if (typeof e == "string")
      f = xp(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Be:
          return e = jt(31, n, t, i), e.elementType = Be, e.lanes = u, e;
        case D:
          return pa(n.children, i, u, t);
        case G:
          f = 8, i |= 24;
          break;
        case K:
          return e = jt(12, n, t, i | 2), e.elementType = K, e.lanes = u, e;
        case he:
          return e = jt(13, n, t, i), e.elementType = he, e.lanes = u, e;
        case ne:
          return e = jt(19, n, t, i), e.elementType = ne, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case F:
                f = 10;
                break e;
              case Q:
                f = 9;
                break e;
              case I:
                f = 11;
                break e;
              case W:
                f = 14;
                break e;
              case ye:
                f = 16, a = null;
                break e;
            }
          f = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = jt(f, n, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function pa(e, t, n, a) {
    return e = jt(7, e, a, t), e.lanes = n, e;
  }
  function us(e, t, n) {
    return e = jt(6, e, null, t), e.lanes = n, e;
  }
  function Of(e) {
    var t = jt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ss(e, t, n) {
    return t = jt(
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
  var Df = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Df.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: ki(t)
      }, Df.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ki(t)
    };
  }
  var Fa = [], Ia = 0, ur = null, Xl = 0, Vt = [], Kt = 0, qn = null, un = 1, sn = "";
  function bn(e, t) {
    Fa[Ia++] = Xl, Fa[Ia++] = ur, ur = e, Xl = t;
  }
  function Uf(e, t, n) {
    Vt[Kt++] = un, Vt[Kt++] = sn, Vt[Kt++] = qn, qn = e;
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
  function os(e) {
    e.return !== null && (bn(e, 1), Uf(e, 1, 0));
  }
  function cs(e) {
    for (; e === ur; )
      ur = Fa[--Ia], Fa[Ia] = null, Xl = Fa[--Ia], Fa[Ia] = null;
    for (; e === qn; )
      qn = Vt[--Kt], Vt[Kt] = null, sn = Vt[--Kt], Vt[Kt] = null, un = Vt[--Kt], Vt[Kt] = null;
  }
  function Mf(e, t) {
    Vt[Kt++] = un, Vt[Kt++] = sn, Vt[Kt++] = qn, un = t.id, sn = t.overflow, qn = e;
  }
  var ft = null, ke = null, we = !1, kn = null, Qt = !1, fs = Error(c(519));
  function Gn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Vl(Xt(t, e)), fs;
  }
  function jf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[ct] = e, t[St] = a, n) {
      case "dialog":
        be("cancel", t), be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        be("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < di.length; n++)
          be(di[n], t);
        break;
      case "source":
        be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        be("error", t), be("load", t);
        break;
      case "details":
        be("toggle", t);
        break;
      case "input":
        be("invalid", t), Qc(
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
        be("invalid", t);
        break;
      case "textarea":
        be("invalid", t), Jc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Im(t.textContent, n) ? (a.popover != null && (be("beforetoggle", t), be("toggle", t)), a.onScroll != null && be("scroll", t), a.onScrollEnd != null && be("scrollend", t), a.onClick != null && (t.onclick = gn), t = !0) : t = !1, t || Gn(e, !0);
  }
  function zf(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
        case 5:
        case 31:
        case 13:
          Qt = !1;
          return;
        case 27:
        case 3:
          Qt = !0;
          return;
        default:
          ft = ft.return;
      }
  }
  function Wa(e) {
    if (e !== ft) return !1;
    if (!we) return zf(e), we = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Oo(e.type, e.memoizedProps)), n = !n), n && ke && Gn(e), zf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      ke = r0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      ke = r0(e);
    } else
      t === 27 ? (t = ke, ta(e.type) ? (e = zo, zo = null, ke = e) : ke = t) : ke = ft ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ba() {
    ke = ft = null, we = !1;
  }
  function ds() {
    var e = kn;
    return e !== null && (At === null ? At = e : At.push.apply(
      At,
      e
    ), kn = null), e;
  }
  function Vl(e) {
    kn === null ? kn = [e] : kn.push(e);
  }
  var ms = w(null), va = null, vn = null;
  function Yn(e, t, n) {
    V(ms, t._currentValue), t._currentValue = n;
  }
  function En(e) {
    e._currentValue = ms.current, L(ms);
  }
  function hs(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function gs(e, t, n, a) {
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
              u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), hs(
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
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), hs(f, n, e), f = null;
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
  function Pa(e, t, n, a) {
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
      } else if (i === ce.current) {
        if (f = i.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(pi) : e = [pi]);
      }
      i = i.return;
    }
    e !== null && gs(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function sr(e) {
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
  function Ea(e) {
    va = e, vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function dt(e) {
    return Lf(va, e);
  }
  function or(e, t) {
    return va === null && Ea(e), Lf(e, t);
  }
  function Lf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, vn === null) {
      if (e === null) throw Error(c(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return n;
  }
  var vy = typeof AbortController < "u" ? AbortController : function() {
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
  function ys() {
    return {
      controller: new vy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Kl(e) {
    e.refCount--, e.refCount === 0 && Ey(Sy, function() {
      e.controller.abort();
    });
  }
  var Ql = null, ps = 0, el = 0, tl = null;
  function wy(e, t) {
    if (Ql === null) {
      var n = Ql = [];
      ps = 0, el = So(), tl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ps++, t.then(Hf, Hf), t;
  }
  function Hf() {
    if (--ps === 0 && Ql !== null) {
      tl !== null && (tl.status = "fulfilled");
      var e = Ql;
      Ql = null, el = 0, tl = null;
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
  var Bf = q.S;
  q.S = function(e, t) {
    Sm = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && wy(e, t), Bf !== null && Bf(e, t);
  };
  var Sa = w(null);
  function bs() {
    var e = Sa.current;
    return e !== null ? e : Le.pooledCache;
  }
  function cr(e, t) {
    t === null ? V(Sa, Sa.current) : V(Sa, t.pool);
  }
  function qf() {
    var e = bs();
    return e === null ? null : { parent: Pe._currentValue, pool: e };
  }
  var nl = Error(c(460)), vs = Error(c(474)), fr = Error(c(542)), dr = { then: function() {
  } };
  function kf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Gf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(gn, gn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Xf(e), e;
      default:
        if (typeof t.status == "string") t.then(gn, gn);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Xf(e), e;
        }
        throw xa = t, nl;
    }
  }
  function wa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (xa = n, nl) : n;
    }
  }
  var xa = null;
  function Yf() {
    if (xa === null) throw Error(c(459));
    var e = xa;
    return xa = null, e;
  }
  function Xf(e) {
    if (e === nl || e === fr)
      throw Error(c(483));
  }
  var al = null, Zl = 0;
  function mr(e) {
    var t = Zl;
    return Zl += 1, al === null && (al = []), Gf(al, e, t);
  }
  function Jl(e, t) {
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
  function Vf(e) {
    function t(T, R) {
      if (e) {
        var N = T.deletions;
        N === null ? (T.deletions = [R], T.flags |= 16) : N.push(R);
      }
    }
    function n(T, R) {
      if (!e) return null;
      for (; R !== null; )
        t(T, R), R = R.sibling;
      return null;
    }
    function a(T) {
      for (var R = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? R.set(T.key, T) : R.set(T.index, T), T = T.sibling;
      return R;
    }
    function i(T, R) {
      return T = pn(T, R), T.index = 0, T.sibling = null, T;
    }
    function u(T, R, N) {
      return T.index = N, e ? (N = T.alternate, N !== null ? (N = N.index, N < R ? (T.flags |= 67108866, R) : N) : (T.flags |= 67108866, R)) : (T.flags |= 1048576, R);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, R, N, H) {
      return R === null || R.tag !== 6 ? (R = us(N, T.mode, H), R.return = T, R) : (R = i(R, N), R.return = T, R);
    }
    function E(T, R, N, H) {
      var ee = N.type;
      return ee === D ? z(
        T,
        R,
        N.props.children,
        H,
        N.key
      ) : R !== null && (R.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === ye && wa(ee) === R.type) ? (R = i(R, N.props), Jl(R, N), R.return = T, R) : (R = rr(
        N.type,
        N.key,
        N.props,
        null,
        T.mode,
        H
      ), Jl(R, N), R.return = T, R);
    }
    function _(T, R, N, H) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== N.containerInfo || R.stateNode.implementation !== N.implementation ? (R = ss(N, T.mode, H), R.return = T, R) : (R = i(R, N.children || []), R.return = T, R);
    }
    function z(T, R, N, H, ee) {
      return R === null || R.tag !== 7 ? (R = pa(
        N,
        T.mode,
        H,
        ee
      ), R.return = T, R) : (R = i(R, N), R.return = T, R);
    }
    function B(T, R, N) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = us(
          "" + R,
          T.mode,
          N
        ), R.return = T, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            return N = rr(
              R.type,
              R.key,
              R.props,
              null,
              T.mode,
              N
            ), Jl(N, R), N.return = T, N;
          case j:
            return R = ss(
              R,
              T.mode,
              N
            ), R.return = T, R;
          case ye:
            return R = wa(R), B(T, R, N);
        }
        if (Y(R) || ue(R))
          return R = pa(
            R,
            T.mode,
            N,
            null
          ), R.return = T, R;
        if (typeof R.then == "function")
          return B(T, mr(R), N);
        if (R.$$typeof === F)
          return B(
            T,
            or(T, R),
            N
          );
        hr(T, R);
      }
      return null;
    }
    function O(T, R, N, H) {
      var ee = R !== null ? R.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return ee !== null ? null : h(T, R, "" + N, H);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            return N.key === ee ? E(T, R, N, H) : null;
          case j:
            return N.key === ee ? _(T, R, N, H) : null;
          case ye:
            return N = wa(N), O(T, R, N, H);
        }
        if (Y(N) || ue(N))
          return ee !== null ? null : z(T, R, N, H, null);
        if (typeof N.then == "function")
          return O(
            T,
            R,
            mr(N),
            H
          );
        if (N.$$typeof === F)
          return O(
            T,
            R,
            or(T, N),
            H
          );
        hr(T, N);
      }
      return null;
    }
    function M(T, R, N, H, ee) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return T = T.get(N) || null, h(R, T, "" + H, ee);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            return T = T.get(
              H.key === null ? N : H.key
            ) || null, E(R, T, H, ee);
          case j:
            return T = T.get(
              H.key === null ? N : H.key
            ) || null, _(R, T, H, ee);
          case ye:
            return H = wa(H), M(
              T,
              R,
              N,
              H,
              ee
            );
        }
        if (Y(H) || ue(H))
          return T = T.get(N) || null, z(R, T, H, ee, null);
        if (typeof H.then == "function")
          return M(
            T,
            R,
            N,
            mr(H),
            ee
          );
        if (H.$$typeof === F)
          return M(
            T,
            R,
            N,
            or(R, H),
            ee
          );
        hr(R, H);
      }
      return null;
    }
    function J(T, R, N, H) {
      for (var ee = null, Ae = null, $ = R, me = R = 0, Se = null; $ !== null && me < N.length; me++) {
        $.index > me ? (Se = $, $ = null) : Se = $.sibling;
        var Ce = O(
          T,
          $,
          N[me],
          H
        );
        if (Ce === null) {
          $ === null && ($ = Se);
          break;
        }
        e && $ && Ce.alternate === null && t(T, $), R = u(Ce, R, me), Ae === null ? ee = Ce : Ae.sibling = Ce, Ae = Ce, $ = Se;
      }
      if (me === N.length)
        return n(T, $), we && bn(T, me), ee;
      if ($ === null) {
        for (; me < N.length; me++)
          $ = B(T, N[me], H), $ !== null && (R = u(
            $,
            R,
            me
          ), Ae === null ? ee = $ : Ae.sibling = $, Ae = $);
        return we && bn(T, me), ee;
      }
      for ($ = a($); me < N.length; me++)
        Se = M(
          $,
          T,
          me,
          N[me],
          H
        ), Se !== null && (e && Se.alternate !== null && $.delete(
          Se.key === null ? me : Se.key
        ), R = u(
          Se,
          R,
          me
        ), Ae === null ? ee = Se : Ae.sibling = Se, Ae = Se);
      return e && $.forEach(function(ra) {
        return t(T, ra);
      }), we && bn(T, me), ee;
    }
    function te(T, R, N, H) {
      if (N == null) throw Error(c(151));
      for (var ee = null, Ae = null, $ = R, me = R = 0, Se = null, Ce = N.next(); $ !== null && !Ce.done; me++, Ce = N.next()) {
        $.index > me ? (Se = $, $ = null) : Se = $.sibling;
        var ra = O(T, $, Ce.value, H);
        if (ra === null) {
          $ === null && ($ = Se);
          break;
        }
        e && $ && ra.alternate === null && t(T, $), R = u(ra, R, me), Ae === null ? ee = ra : Ae.sibling = ra, Ae = ra, $ = Se;
      }
      if (Ce.done)
        return n(T, $), we && bn(T, me), ee;
      if ($ === null) {
        for (; !Ce.done; me++, Ce = N.next())
          Ce = B(T, Ce.value, H), Ce !== null && (R = u(Ce, R, me), Ae === null ? ee = Ce : Ae.sibling = Ce, Ae = Ce);
        return we && bn(T, me), ee;
      }
      for ($ = a($); !Ce.done; me++, Ce = N.next())
        Ce = M($, T, me, Ce.value, H), Ce !== null && (e && Ce.alternate !== null && $.delete(Ce.key === null ? me : Ce.key), R = u(Ce, R, me), Ae === null ? ee = Ce : Ae.sibling = Ce, Ae = Ce);
      return e && $.forEach(function(jp) {
        return t(T, jp);
      }), we && bn(T, me), ee;
    }
    function ze(T, R, N, H) {
      if (typeof N == "object" && N !== null && N.type === D && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            e: {
              for (var ee = N.key; R !== null; ) {
                if (R.key === ee) {
                  if (ee = N.type, ee === D) {
                    if (R.tag === 7) {
                      n(
                        T,
                        R.sibling
                      ), H = i(
                        R,
                        N.props.children
                      ), H.return = T, T = H;
                      break e;
                    }
                  } else if (R.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === ye && wa(ee) === R.type) {
                    n(
                      T,
                      R.sibling
                    ), H = i(R, N.props), Jl(H, N), H.return = T, T = H;
                    break e;
                  }
                  n(T, R);
                  break;
                } else t(T, R);
                R = R.sibling;
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
              ), Jl(H, N), H.return = T, T = H);
            }
            return f(T);
          case j:
            e: {
              for (ee = N.key; R !== null; ) {
                if (R.key === ee)
                  if (R.tag === 4 && R.stateNode.containerInfo === N.containerInfo && R.stateNode.implementation === N.implementation) {
                    n(
                      T,
                      R.sibling
                    ), H = i(R, N.children || []), H.return = T, T = H;
                    break e;
                  } else {
                    n(T, R);
                    break;
                  }
                else t(T, R);
                R = R.sibling;
              }
              H = ss(N, T.mode, H), H.return = T, T = H;
            }
            return f(T);
          case ye:
            return N = wa(N), ze(
              T,
              R,
              N,
              H
            );
        }
        if (Y(N))
          return J(
            T,
            R,
            N,
            H
          );
        if (ue(N)) {
          if (ee = ue(N), typeof ee != "function") throw Error(c(150));
          return N = ee.call(N), te(
            T,
            R,
            N,
            H
          );
        }
        if (typeof N.then == "function")
          return ze(
            T,
            R,
            mr(N),
            H
          );
        if (N.$$typeof === F)
          return ze(
            T,
            R,
            or(T, N),
            H
          );
        hr(T, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, R !== null && R.tag === 6 ? (n(T, R.sibling), H = i(R, N), H.return = T, T = H) : (n(T, R), H = us(N, T.mode, H), H.return = T, T = H), f(T)) : n(T, R);
    }
    return function(T, R, N, H) {
      try {
        Zl = 0;
        var ee = ze(
          T,
          R,
          N,
          H
        );
        return al = null, ee;
      } catch ($) {
        if ($ === nl || $ === fr) throw $;
        var Ae = jt(29, $, null, T.mode);
        return Ae.lanes = H, Ae.return = T, Ae;
      }
    };
  }
  var Ra = Vf(!0), Kf = Vf(!1), Xn = !1;
  function Es(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ss(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Vn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ne & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = ir(e), Nf(e, null, n), t;
    }
    return lr(e, a, t, n), ir(e);
  }
  function $l(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, zc(e, n);
    }
  }
  function ws(e, t) {
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
  var xs = !1;
  function Fl() {
    if (xs) {
      var e = tl;
      if (e !== null) throw e;
    }
  }
  function Il(e, t, n, a) {
    xs = !1;
    var i = e.updateQueue;
    Xn = !1;
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
        var O = h.lane & -536870913, M = O !== h.lane;
        if (M ? (Ee & O) === O : (a & O) === O) {
          O !== 0 && O === el && (xs = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, te = h;
            O = t;
            var ze = n;
            switch (te.tag) {
              case 1:
                if (J = te.payload, typeof J == "function") {
                  B = J.call(ze, B, O);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = te.payload, O = typeof J == "function" ? J.call(ze, B, O) : J, O == null) break e;
                B = C({}, B, O);
                break e;
              case 2:
                Xn = !0;
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
          }, z === null ? (_ = z = M, E = B) : z = z.next = M, f |= O;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      z === null && (E = B), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = z, u === null && (i.shared.lanes = 0), Fn |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Qf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Zf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Qf(n[e], t);
  }
  var ll = w(null), gr = w(0);
  function Jf(e, t) {
    e = _n, V(gr, e), V(ll, t), _n = e | t.baseLanes;
  }
  function Rs() {
    V(gr, _n), V(ll, ll.current);
  }
  function Ts() {
    _n = gr.current, L(ll), L(gr);
  }
  var zt = w(null), Zt = null;
  function Qn(e) {
    var t = e.alternate;
    V(Ie, Ie.current & 1), V(zt, e), Zt === null && (t === null || ll.current !== null || t.memoizedState !== null) && (Zt = e);
  }
  function As(e) {
    V(Ie, Ie.current), V(zt, e), Zt === null && (Zt = e);
  }
  function $f(e) {
    e.tag === 22 ? (V(Ie, Ie.current), V(zt, e), Zt === null && (Zt = e)) : Zn();
  }
  function Zn() {
    V(Ie, Ie.current), V(zt, zt.current);
  }
  function Lt(e) {
    L(zt), Zt === e && (Zt = null), L(Ie);
  }
  var Ie = w(0);
  function yr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Mo(n) || jo(n)))
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
  var Sn = 0, fe = null, Me = null, et = null, pr = !1, il = !1, Ta = !1, br = 0, Wl = 0, rl = null, Ry = 0;
  function Je() {
    throw Error(c(321));
  }
  function Cs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Ns(e, t, n, a, i, u) {
    return Sn = u, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? Ud : Xs, Ta = !1, u = n(a, i), Ta = !1, il && (u = If(
      t,
      n,
      a,
      i
    )), Ff(e), u;
  }
  function Ff(e) {
    q.H = ti;
    var t = Me !== null && Me.next !== null;
    if (Sn = 0, et = Me = fe = null, pr = !1, Wl = 0, rl = null, t) throw Error(c(300));
    e === null || tt || (e = e.dependencies, e !== null && sr(e) && (tt = !0));
  }
  function If(e, t, n, a) {
    fe = e;
    var i = 0;
    do {
      if (il && (rl = null), Wl = 0, il = !1, 25 <= i) throw Error(c(301));
      if (i += 1, et = Me = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      q.H = Md, u = t(n, a);
    } while (il);
    return u;
  }
  function Ty() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Pl(t) : t, e = e.useState()[0], (Me !== null ? Me.memoizedState : null) !== e && (fe.flags |= 1024), t;
  }
  function _s() {
    var e = br !== 0;
    return br = 0, e;
  }
  function Os(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Ds(e) {
    if (pr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      pr = !1;
    }
    Sn = 0, et = Me = fe = null, il = !1, Wl = br = 0, rl = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? fe.memoizedState = et = e : et = et.next = e, et;
  }
  function We() {
    if (Me === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = et === null ? fe.memoizedState : et.next;
    if (t !== null)
      et = t, Me = e;
    else {
      if (e === null)
        throw fe.alternate === null ? Error(c(467)) : Error(c(310));
      Me = e, e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null
      }, et === null ? fe.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function vr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pl(e) {
    var t = Wl;
    return Wl += 1, rl === null && (rl = []), e = Gf(rl, e, t), t = fe, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? Ud : Xs), e;
  }
  function Er(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pl(e);
      if (e.$$typeof === F) return dt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Us(e) {
    var t = null, n = fe.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = fe.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = vr(), fe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = it;
    return t.index++, n;
  }
  function wn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Sr(e) {
    var t = We();
    return Ms(t, Me, e);
  }
  function Ms(e, t, n) {
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
        if (B !== _.lane ? (Ee & B) === B : (Sn & B) === B) {
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
            }), B === el && (z = !0);
          else if ((Sn & O) === O) {
            _ = _.next, O === el && (z = !0);
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
            }, E === null ? (h = E = B, f = u) : E = E.next = B, fe.lanes |= O, Fn |= O;
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
          }, E === null ? (h = E = O, f = u) : E = E.next = O, fe.lanes |= B, Fn |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = h, !Mt(u, e.memoizedState) && (tt = !0, z && (n = tl, n !== null)))
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
      Mt(u, t.memoizedState) || (tt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Wf(e, t, n) {
    var a = fe, i = We(), u = we;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var f = !Mt(
      (Me || i).memoizedState,
      n
    );
    if (f && (i.memoizedState = n, tt = !0), i = i.queue, Hs(td.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || et !== null && et.memoizedState.tag & 1) {
      if (a.flags |= 2048, ul(
        9,
        { destroy: void 0 },
        ed.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), Le === null) throw Error(c(349));
      u || (Sn & 127) !== 0 || Pf(a, t, n);
    }
    return n;
  }
  function Pf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = vr(), fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ed(e, t, n, a) {
    t.value = n, t.getSnapshot = a, nd(t) && ad(e);
  }
  function td(e, t, n) {
    return n(function() {
      nd(t) && ad(e);
    });
  }
  function nd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function ad(e) {
    var t = ya(e, 2);
    t !== null && Ct(t, e, 2);
  }
  function zs(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ta) {
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
      lastRenderedReducer: wn,
      lastRenderedState: e
    }, t;
  }
  function ld(e, t, n, a) {
    return e.baseState = n, Ms(
      e,
      Me,
      typeof a == "function" ? a : wn
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
      q.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, id(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function id(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = q.T, f = {};
      q.T = f;
      try {
        var h = n(i, a), E = q.S;
        E !== null && E(f, h), rd(e, t, h);
      } catch (_) {
        Ls(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), q.T = u;
      }
    } else
      try {
        u = n(i, a), rd(e, t, u);
      } catch (_) {
        Ls(e, t, _);
      }
  }
  function rd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        ud(e, t, a);
      },
      function(a) {
        return Ls(e, t, a);
      }
    ) : ud(e, t, n);
  }
  function ud(e, t, n) {
    t.status = "fulfilled", t.value = n, sd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, id(e, n)));
  }
  function Ls(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, sd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function sd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function od(e, t) {
    return t;
  }
  function cd(e, t) {
    if (we) {
      var n = Le.formState;
      if (n !== null) {
        e: {
          var a = fe;
          if (we) {
            if (ke) {
              t: {
                for (var i = ke, u = Qt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = Jt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                ke = Jt(
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
    return n = vt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: od,
      lastRenderedState: t
    }, n.queue = a, n = _d.bind(
      null,
      fe,
      a
    ), a.dispatch = n, a = zs(!1), u = Ys.bind(
      null,
      fe,
      !1,
      a.queue
    ), a = vt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = Ay.bind(
      null,
      fe,
      i,
      u,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function fd(e) {
    var t = We();
    return dd(t, Me, e);
  }
  function dd(e, t, n) {
    if (t = Ms(
      e,
      t,
      od
    )[0], e = Sr(wn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Pl(t);
      } catch (f) {
        throw f === nl ? fr : f;
      }
    else a = t;
    t = We();
    var i = t.queue, u = i.dispatch;
    return n !== t.memoizedState && (fe.flags |= 2048, ul(
      9,
      { destroy: void 0 },
      Cy.bind(null, i, n),
      null
    )), [a, u, e];
  }
  function Cy(e, t) {
    e.action = t;
  }
  function md(e) {
    var t = We(), n = Me;
    if (n !== null)
      return dd(t, n, e);
    We(), t = t.memoizedState, n = We();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function ul(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = fe.updateQueue, t === null && (t = vr(), fe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function hd() {
    return We().memoizedState;
  }
  function wr(e, t, n, a) {
    var i = vt();
    fe.flags |= e, i.memoizedState = ul(
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
    Me !== null && a !== null && Cs(a, Me.memoizedState.deps) ? i.memoizedState = ul(t, u, n, a) : (fe.flags |= e, i.memoizedState = ul(
      1 | t,
      u,
      n,
      a
    ));
  }
  function gd(e, t) {
    wr(8390656, 8, e, t);
  }
  function Hs(e, t) {
    xr(2048, 8, e, t);
  }
  function Ny(e) {
    fe.flags |= 4;
    var t = fe.updateQueue;
    if (t === null)
      t = vr(), fe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function yd(e) {
    var t = We().memoizedState;
    return Ny({ ref: t, nextImpl: e }), function() {
      if ((Ne & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function pd(e, t) {
    return xr(4, 2, e, t);
  }
  function bd(e, t) {
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
  function Ed(e, t, n) {
    n = n != null ? n.concat([e]) : null, xr(4, 4, vd.bind(null, t, e), n);
  }
  function Bs() {
  }
  function Sd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Cs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function wd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Cs(t, a[1]))
      return a[0];
    if (a = e(), Ta) {
      Ln(!0);
      try {
        e();
      } finally {
        Ln(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function qs(e, t, n) {
    return n === void 0 || (Sn & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = xm(), fe.lanes |= e, Fn |= e, n);
  }
  function xd(e, t, n, a) {
    return Mt(n, t) ? n : ll.current !== null ? (e = qs(e, n, a), Mt(e, t) || (tt = !0), e) : (Sn & 42) === 0 || (Sn & 1073741824) !== 0 && (Ee & 261930) === 0 ? (tt = !0, e.memoizedState = n) : (e = xm(), fe.lanes |= e, Fn |= e, t);
  }
  function Rd(e, t, n, a, i) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var f = q.T, h = {};
    q.T = h, Ys(e, !1, t, n);
    try {
      var E = i(), _ = q.S;
      if (_ !== null && _(h, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var z = xy(
          E,
          a
        );
        ei(
          e,
          t,
          z,
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
      X.p = u, f !== null && h.types !== null && (f.types = h.types), q.T = f;
    }
  }
  function _y() {
  }
  function ks(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Td(e).queue;
    Rd(
      e,
      i,
      t,
      ge,
      n === null ? _y : function() {
        return Ad(e), n(a);
      }
    );
  }
  function Td(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ge,
      baseState: ge,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wn,
        lastRenderedState: ge
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
        lastRenderedReducer: wn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Ad(e) {
    var t = Td(e);
    t.next === null && (t = e.alternate.memoizedState), ei(
      e,
      t.next.queue,
      {},
      qt()
    );
  }
  function Gs() {
    return dt(pi);
  }
  function Cd() {
    return We().memoizedState;
  }
  function Nd() {
    return We().memoizedState;
  }
  function Oy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = qt();
          e = Vn(n);
          var a = Kn(t, e, n);
          a !== null && (Ct(a, t, n), $l(a, t, n)), t = { cache: ys() }, e.payload = t;
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
    }, Rr(e) ? Od(t, n) : (n = is(e, t, n, a), n !== null && (Ct(n, e, a), Dd(n, t, a)));
  }
  function _d(e, t, n) {
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
    if (Rr(e)) Od(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, h = u(f, n);
          if (i.hasEagerState = !0, i.eagerState = h, Mt(h, f))
            return lr(e, t, i, 0), Le === null && ar(), !1;
        } catch {
        }
      if (n = is(e, t, i, a), n !== null)
        return Ct(n, e, a), Dd(n, t, a), !0;
    }
    return !1;
  }
  function Ys(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: So(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rr(e)) {
      if (t) throw Error(c(479));
    } else
      t = is(
        e,
        n,
        a,
        2
      ), t !== null && Ct(t, e, 2);
  }
  function Rr(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Od(e, t) {
    il = pr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Dd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, zc(e, n);
    }
  }
  var ti = {
    readContext: dt,
    use: Er,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useLayoutEffect: Je,
    useInsertionEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useSyncExternalStore: Je,
    useId: Je,
    useHostTransitionStatus: Je,
    useFormState: Je,
    useActionState: Je,
    useOptimistic: Je,
    useMemoCache: Je,
    useCacheRefresh: Je
  };
  ti.useEffectEvent = Je;
  var Ud = {
    readContext: dt,
    use: Er,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: dt,
    useEffect: gd,
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
      var a = vt();
      if (n !== void 0) {
        var i = n(t);
        if (Ta) {
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
      }, a.queue = e, e = e.dispatch = Dy.bind(
        null,
        fe,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = vt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = zs(e);
      var t = e.queue, n = _d.bind(null, fe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Bs,
    useDeferredValue: function(e, t) {
      var n = vt();
      return qs(n, e, t);
    },
    useTransition: function() {
      var e = zs(!1);
      return e = Rd.bind(
        null,
        fe,
        e.queue,
        !0,
        !1
      ), vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = fe, i = vt();
      if (we) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Le === null)
          throw Error(c(349));
        (Ee & 127) !== 0 || Pf(a, t, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return i.queue = u, gd(td.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, ul(
        9,
        { destroy: void 0 },
        ed.bind(
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
      var e = vt(), t = Le.identifierPrefix;
      if (we) {
        var n = sn, a = un;
        n = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ry++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Gs,
    useFormState: cd,
    useActionState: cd,
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
      return t.queue = n, t = Ys.bind(
        null,
        fe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Us,
    useCacheRefresh: function() {
      return vt().memoizedState = Oy.bind(
        null,
        fe
      );
    },
    useEffectEvent: function(e) {
      var t = vt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ne & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Xs = {
    readContext: dt,
    use: Er,
    useCallback: Sd,
    useContext: dt,
    useEffect: Hs,
    useImperativeHandle: Ed,
    useInsertionEffect: pd,
    useLayoutEffect: bd,
    useMemo: wd,
    useReducer: Sr,
    useRef: hd,
    useState: function() {
      return Sr(wn);
    },
    useDebugValue: Bs,
    useDeferredValue: function(e, t) {
      var n = We();
      return xd(
        n,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Sr(wn)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Pl(e),
        t
      ];
    },
    useSyncExternalStore: Wf,
    useId: Cd,
    useHostTransitionStatus: Gs,
    useFormState: fd,
    useActionState: fd,
    useOptimistic: function(e, t) {
      var n = We();
      return ld(n, Me, e, t);
    },
    useMemoCache: Us,
    useCacheRefresh: Nd
  };
  Xs.useEffectEvent = yd;
  var Md = {
    readContext: dt,
    use: Er,
    useCallback: Sd,
    useContext: dt,
    useEffect: Hs,
    useImperativeHandle: Ed,
    useInsertionEffect: pd,
    useLayoutEffect: bd,
    useMemo: wd,
    useReducer: js,
    useRef: hd,
    useState: function() {
      return js(wn);
    },
    useDebugValue: Bs,
    useDeferredValue: function(e, t) {
      var n = We();
      return Me === null ? qs(n, e, t) : xd(
        n,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = js(wn)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Pl(e),
        t
      ];
    },
    useSyncExternalStore: Wf,
    useId: Cd,
    useHostTransitionStatus: Gs,
    useFormState: md,
    useActionState: md,
    useOptimistic: function(e, t) {
      var n = We();
      return Me !== null ? ld(n, Me, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Us,
    useCacheRefresh: Nd
  };
  Md.useEffectEvent = yd;
  function Vs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ks = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Vn(a);
      i.payload = t, n != null && (i.callback = n), t = Kn(e, i, a), t !== null && (Ct(t, e, a), $l(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Vn(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kn(e, i, a), t !== null && (Ct(t, e, a), $l(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = qt(), a = Vn(n);
      a.tag = 2, t != null && (a.callback = t), t = Kn(e, a, n), t !== null && (Ct(t, e, n), $l(t, e, n));
    }
  };
  function jd(e, t, n, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Gl(n, a) || !Gl(i, u) : !0;
  }
  function zd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
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
  function Ld(e) {
    nr(e);
  }
  function Hd(e) {
    console.error(e);
  }
  function Bd(e) {
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
  function qd(e, t, n) {
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
  function Qs(e, t, n) {
    return n = Vn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Tr(e, t);
    }, n;
  }
  function kd(e) {
    return e = Vn(e), e.tag = 3, e;
  }
  function Gd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        qd(t, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      qd(t, n, a), typeof i != "function" && (In === null ? In = /* @__PURE__ */ new Set([this]) : In.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Uy(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Pa(
        t,
        n,
        i,
        !0
      ), n = zt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Zt === null ? Hr() : n.alternate === null && $e === 0 && ($e = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === dr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), bo(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === dr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), bo(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return bo(e, a, i), Hr(), !1;
    }
    if (we)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== fs && (e = Error(c(422), { cause: a }), Vl(Xt(e, n)))) : (a !== fs && (t = Error(c(423), {
        cause: a
      }), Vl(
        Xt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Xt(a, n), i = Qs(
        e.stateNode,
        a,
        i
      ), ws(e, i), $e !== 4 && ($e = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Xt(u, n), oi === null ? oi = [u] : oi.push(u), $e !== 4 && ($e = 2), t === null) return !0;
    a = Xt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Qs(n.stateNode, a, e), ws(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (In === null || !In.has(u))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = kd(i), Gd(
              i,
              e,
              n,
              a
            ), ws(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zs = Error(c(461)), tt = !1;
  function mt(e, t, n, a) {
    t.child = e === null ? Kf(t, null, n, a) : Ra(
      t,
      e.child,
      n,
      a
    );
  }
  function Yd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a)
        h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return Ea(t), a = Ns(
      e,
      t,
      n,
      f,
      u,
      i
    ), h = _s(), e !== null && !tt ? (Os(e, t, i), xn(e, t, i)) : (we && h && os(t), t.flags |= 1, mt(e, t, a, i), t.child);
  }
  function Xd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !rs(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Vd(
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
    if (u = e.child, !to(e, i)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Gl, n(f, a) && e.ref === t.ref)
        return xn(e, t, i);
    }
    return t.flags |= 1, e = pn(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Vd(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Gl(u, a) && e.ref === t.ref)
        if (tt = !1, t.pendingProps = a = u, to(e, i))
          (e.flags & 131072) !== 0 && (tt = !0);
        else
          return t.lanes = e.lanes, xn(e, t, i);
    }
    return Js(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Kd(e, t, n, a) {
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
        return Qd(
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
        ), u !== null ? Jf(t, u) : Rs(), $f(t);
      else
        return a = t.lanes = 536870912, Qd(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (cr(t, u.cachePool), Jf(t, u), Zn(), t.memoizedState = null) : (e !== null && cr(t, null), Rs(), Zn());
    return mt(e, t, i, n), t.child;
  }
  function ni(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Qd(e, t, n, a, i) {
    var u = bs();
    return u = u === null ? null : { parent: Pe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && cr(t, null), Rs(), $f(t), e !== null && Pa(e, t, a, !0), t.childLanes = i, null;
  }
  function Ar(e, t) {
    return t = Nr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Zd(e, t, n) {
    return Ra(t, e.child, null, n), e = Ar(t, t.pendingProps), e.flags |= 2, Lt(t), t.memoizedState = null, e;
  }
  function My(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (we) {
        if (a.mode === "hidden")
          return e = Ar(t, a), t.lanes = 536870912, ni(null, e);
        if (As(t), (e = ke) ? (e = i0(
          e,
          Qt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: qn !== null ? { id: un, overflow: sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Of(e), n.return = t, t.child = n, ft = t, ke = null)) : e = null, e === null) throw Gn(t);
        return t.lanes = 536870912, null;
      }
      return Ar(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (As(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Zd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (tt || Pa(e, t, n, !1), i = (n & e.childLanes) !== 0, tt || i) {
        if (a = Le, a !== null && (f = Lc(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ya(e, f), Ct(a, e, f), Zs;
        Hr(), t = Zd(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, ke = Jt(f.nextSibling), ft = t, we = !0, kn = null, Qt = !1, e !== null && Mf(t, e), t = Ar(t, a), t.flags |= 4096;
      return t;
    }
    return e = pn(e.child, {
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
  function Js(e, t, n, a, i) {
    return Ea(t), n = Ns(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = _s(), e !== null && !tt ? (Os(e, t, i), xn(e, t, i)) : (we && a && os(t), t.flags |= 1, mt(e, t, n, i), t.child);
  }
  function Jd(e, t, n, a, i, u) {
    return Ea(t), t.updateQueue = null, n = If(
      t,
      a,
      n,
      i
    ), Ff(e), a = _s(), e !== null && !tt ? (Os(e, t, u), xn(e, t, u)) : (we && a && os(t), t.flags |= 1, mt(e, t, n, u), t.child);
  }
  function $d(e, t, n, a, i) {
    if (Ea(t), t.stateNode === null) {
      var u = $a, f = n.contextType;
      typeof f == "object" && f !== null && (u = dt(f)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ks, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Es(t), f = n.contextType, u.context = typeof f == "object" && f !== null ? dt(f) : $a, u.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Vs(
        t,
        n,
        f,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Ks.enqueueReplaceState(u, u.state, null), Il(t, a, u, i), Fl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps, E = Aa(n, h);
      u.props = E;
      var _ = u.context, z = n.contextType;
      f = $a, typeof z == "object" && z !== null && (f = dt(z));
      var B = n.getDerivedStateFromProps;
      z = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || _ !== f) && zd(
        t,
        u,
        a,
        f
      ), Xn = !1;
      var O = t.memoizedState;
      u.state = O, Il(t, a, u, i), Fl(), _ = t.memoizedState, h || O !== _ || Xn ? (typeof B == "function" && (Vs(
        t,
        n,
        B,
        a
      ), _ = t.memoizedState), (E = Xn || jd(
        t,
        n,
        E,
        a,
        O,
        _,
        f
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Ss(e, t), f = t.memoizedProps, z = Aa(n, f), u.props = z, B = t.pendingProps, O = u.context, _ = n.contextType, E = $a, typeof _ == "object" && _ !== null && (E = dt(_)), h = n.getDerivedStateFromProps, (_ = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && zd(
        t,
        u,
        a,
        E
      ), Xn = !1, O = t.memoizedState, u.state = O, Il(t, a, u, i), Fl();
      var M = t.memoizedState;
      f !== B || O !== M || Xn || e !== null && e.dependencies !== null && sr(e.dependencies) ? (typeof h == "function" && (Vs(
        t,
        n,
        h,
        a
      ), M = t.memoizedState), (z = Xn || jd(
        t,
        n,
        z,
        a,
        O,
        M,
        E
      ) || e !== null && e.dependencies !== null && sr(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = E, a = z) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
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
    )) : mt(e, t, n, i), t.memoizedState = u.state, e = t.child) : e = xn(
      e,
      t,
      i
    ), e;
  }
  function Fd(e, t, n, a) {
    return ba(), t.flags |= 256, mt(e, t, n, a), t.child;
  }
  var $s = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Fs(e) {
    return { baseLanes: e, cachePool: qf() };
  }
  function Is(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Bt), e;
  }
  function Id(e, t, n) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (we) {
        if (i ? Qn(t) : Zn(), (e = ke) ? (e = i0(
          e,
          Qt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: qn !== null ? { id: un, overflow: sn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Of(e), n.return = t, t.child = n, ft = t, ke = null)) : e = null, e === null) throw Gn(t);
        return jo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = a.children;
      return a = a.fallback, i ? (Zn(), i = t.mode, h = Nr(
        { mode: "hidden", children: h },
        i
      ), a = pa(
        a,
        i,
        n,
        null
      ), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = Fs(n), a.childLanes = Is(
        e,
        f,
        n
      ), t.memoizedState = $s, ni(null, a)) : (Qn(t), Ws(t, h));
    }
    var E = e.memoizedState;
    if (E !== null && (h = E.dehydrated, h !== null)) {
      if (u)
        t.flags & 256 ? (Qn(t), t.flags &= -257, t = Ps(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Zn(), t.child = e.child, t.flags |= 128, t = null) : (Zn(), h = a.fallback, i = t.mode, a = Nr(
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
        ), a = t.child, a.memoizedState = Fs(n), a.childLanes = Is(
          e,
          f,
          n
        ), t.memoizedState = $s, t = ni(null, a));
      else if (Qn(t), jo(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(c(419)), a.stack = "", a.digest = f, Vl({ value: a, source: null, stack: null }), t = Ps(
          e,
          t,
          n
        );
      } else if (tt || Pa(e, t, n, !1), f = (n & e.childLanes) !== 0, tt || f) {
        if (f = Le, f !== null && (a = Lc(f, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, ya(e, a), Ct(f, e, a), Zs;
        Mo(h) || Hr(), t = Ps(
          e,
          t,
          n
        );
      } else
        Mo(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, ke = Jt(
          h.nextSibling
        ), ft = t, we = !0, kn = null, Qt = !1, e !== null && Mf(t, e), t = Ws(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Zn(), h = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = pn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? h = pn(
      _,
      h
    ) : (h = pa(
      h,
      i,
      n,
      null
    ), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, ni(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = Fs(n) : (i = h.cachePool, i !== null ? (E = Pe._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = qf(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: i
    }), a.memoizedState = h, a.childLanes = Is(
      e,
      f,
      n
    ), t.memoizedState = $s, ni(e.child, a)) : (Qn(t), n = e.child, e = n.sibling, n = pn(n, {
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
    return e = jt(22, e, null, t), e.lanes = 0, e;
  }
  function Ps(e, t, n) {
    return Ra(t, e.child, null, n), e = Ws(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Wd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), hs(e.return, t, n);
  }
  function eo(e, t, n, a, i, u) {
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
  function Pd(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Ie.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Ie, f), mt(e, t, a, n), a = we ? Xl : 0, !h && e !== null && (e.flags & 128) !== 0)
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
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), eo(
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
        eo(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        eo(
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
  function xn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Pa(
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
      for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = pn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function to(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && sr(e)));
  }
  function jy(e, t, n) {
    switch (t.tag) {
      case 3:
        qe(t, t.stateNode.containerInfo), Yn(t, Pe, e.memoizedState.cache), ba();
        break;
      case 27:
      case 5:
        mn(t);
        break;
      case 4:
        qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Yn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, As(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Qn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Id(e, t, n) : (Qn(t), e = xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Qn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Pa(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return Pd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), V(Ie, Ie.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Kd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Yn(t, Pe, e.memoizedState.cache);
    }
    return xn(e, t, n);
  }
  function em(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        tt = !0;
      else {
        if (!to(e, n) && (t.flags & 128) === 0)
          return tt = !1, jy(
            e,
            t,
            n
          );
        tt = (e.flags & 131072) !== 0;
      }
    else
      tt = !1, we && (t.flags & 1048576) !== 0 && Uf(t, Xl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = wa(t.elementType), t.type = e, typeof e == "function")
            rs(e) ? (a = Aa(e, a), t.tag = 1, t = $d(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Js(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === I) {
                t.tag = 11, t = Yd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === W) {
                t.tag = 14, t = Xd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = _e(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Js(
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
        ), $d(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (qe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, Ss(e, t), Il(t, a, null, n);
          var f = t.memoizedState;
          if (a = f.cache, Yn(t, Pe, a), a !== u.cache && gs(
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
              t = Fd(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Xt(
                Error(c(424)),
                t
              ), Vl(i), t = Fd(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ke = Jt(e.firstChild), ft = t, we = !0, kn = null, Qt = !0, n = Kf(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ba(), a === i) {
              t = xn(
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
        return Cr(e, t), e === null ? (n = f0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : we || (n = t.type, e = t.pendingProps, a = Vr(
          se.current
        ).createElement(n), a[ct] = t, a[St] = e, ht(a, n, e), ut(a), t.stateNode = a) : t.memoizedState = f0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return mn(t), e === null && we && (a = t.stateNode = s0(
          t.type,
          t.pendingProps,
          se.current
        ), ft = t, Qt = !0, i = ke, ta(t.type) ? (zo = i, ke = Jt(a.firstChild)) : ke = i), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Cr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && we && ((i = a = ke) && (a = cp(
          a,
          t.type,
          t.pendingProps,
          Qt
        ), a !== null ? (t.stateNode = a, ft = t, ke = Jt(a.firstChild), Qt = !1, i = !0) : i = !1), i || Gn(t)), mn(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Oo(i, u) ? a = null : f !== null && Oo(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = Ns(
          e,
          t,
          Ty,
          null,
          null,
          n
        ), pi._currentValue = i), Cr(e, t), mt(e, t, a, n), t.child;
      case 6:
        return e === null && we && ((e = n = ke) && (n = fp(
          n,
          t.pendingProps,
          Qt
        ), n !== null ? (t.stateNode = n, ft = t, ke = null, e = !0) : e = !1), e || Gn(t)), null;
      case 13:
        return Id(e, t, n);
      case 4:
        return qe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Ra(
          t,
          null,
          a,
          n
        ) : mt(e, t, a, n), t.child;
      case 11:
        return Yd(
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
        return a = t.pendingProps, Yn(t, t.type, a.value), mt(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, Ea(t), i = dt(i), a = a(i), t.flags |= 1, mt(e, t, a, n), t.child;
      case 14:
        return Xd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Vd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Pd(e, t, n);
      case 31:
        return My(e, t, n);
      case 22:
        return Kd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ea(t), a = dt(Pe), e === null ? (i = bs(), i === null && (i = Le, u = ys(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), t.memoizedState = { parent: a, cache: i }, Es(t), Yn(t, Pe, i)) : ((e.lanes & n) !== 0 && (Ss(e, t), Il(t, null, null, n), Fl()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Yn(t, Pe, a)) : (a = u.cache, Yn(t, Pe, a), a !== i.cache && gs(
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
  function Rn(e) {
    e.flags |= 4;
  }
  function no(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Cm()) e.flags |= 8192;
        else
          throw xa = dr, vs;
    } else e.flags &= -16777217;
  }
  function tm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !y0(t))
      if (Cm()) e.flags |= 8192;
      else
        throw xa = dr, vs;
  }
  function _r(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Mc() : 536870912, e.lanes |= t, fl |= t);
  }
  function ai(e, t) {
    if (!we)
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
  function zy(e, t, n) {
    var a = t.pendingProps;
    switch (cs(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), En(Pe), P(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Wa(t) ? Rn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ds())), Ge(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (Rn(t), u !== null ? (Ge(t), tm(t, u)) : (Ge(t), no(
          t,
          i,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (Rn(t), Ge(t), tm(t, u)) : (Ge(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Rn(t), Ge(t), no(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (Wt(t), n = se.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Rn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ge(t), null;
          }
          e = Z.current, Wa(t) ? jf(t) : (e = s0(i, a, n), t.stateNode = e, Rn(t));
        }
        return Ge(t), null;
      case 5:
        if (Wt(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Rn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ge(t), null;
          }
          if (u = Z.current, Wa(t))
            jf(t);
          else {
            var f = Vr(
              se.current
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
            u[ct] = t, u[St] = a;
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
            a && Rn(t);
          }
        }
        return Ge(t), no(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Rn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = se.current, Wa(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = ft, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[ct] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Im(e.nodeValue, n)), e || Gn(t, !0);
          } else
            e = Vr(e).createTextNode(
              a
            ), e[ct] = t, t.stateNode = e;
        }
        return Ge(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Wa(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ct] = t;
            } else
              ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), e = !1;
          } else
            n = ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ge(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Wa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[ct] = t;
            } else
              ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), i = !1;
          } else
            i = ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
        }
        return Lt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), _r(t, t.updateQueue), Ge(t), null);
      case 4:
        return P(), e === null && To(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return En(t.type), Ge(t), null;
      case 19:
        if (L(Ie), a = t.memoizedState, a === null) return Ge(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) ai(a, !1);
          else {
            if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = yr(e), u !== null) {
                  for (t.flags |= 128, ai(a, !1), e = u.updateQueue, t.updateQueue = e, _r(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    _f(n, e), n = n.sibling;
                  return V(
                    Ie,
                    Ie.current & 1 | 2
                  ), we && bn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && bt() > jr && (t.flags |= 128, i = !0, ai(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = yr(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, _r(t, e), ai(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !we)
                return Ge(t), null;
            } else
              2 * bt() - a.renderingStartTime > jr && n !== 536870912 && (t.flags |= 128, i = !0, ai(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = bt(), e.sibling = null, n = Ie.current, V(
          Ie,
          i ? n & 1 | 2 : n & 1
        ), we && bn(t, a.treeForkCount), e) : (Ge(t), null);
      case 22:
      case 23:
        return Lt(t), Ts(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), n = t.updateQueue, n !== null && _r(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && L(Sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), En(Pe), Ge(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Ly(e, t) {
    switch (cs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return En(Pe), P(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Wt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Lt(t), t.alternate === null)
            throw Error(c(340));
          ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Lt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(Ie), null;
      case 4:
        return P(), null;
      case 10:
        return En(t.type), null;
      case 22:
      case 23:
        return Lt(t), Ts(), e !== null && L(Sa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return En(Pe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nm(e, t) {
    switch (cs(t), t.tag) {
      case 3:
        En(Pe), P();
        break;
      case 26:
      case 27:
      case 5:
        Wt(t);
        break;
      case 4:
        P();
        break;
      case 31:
        t.memoizedState !== null && Lt(t);
        break;
      case 13:
        Lt(t);
        break;
      case 19:
        L(Ie);
        break;
      case 10:
        En(t.type);
        break;
      case 22:
      case 23:
        Lt(t), Ts(), e !== null && L(Sa);
        break;
      case 24:
        En(Pe);
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
      Ue(t, t.return, h);
    }
  }
  function Jn(e, t, n) {
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
                Ue(
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
      Ue(t, t.return, z);
    }
  }
  function am(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Zf(t, n);
      } catch (a) {
        Ue(e, e.return, a);
      }
    }
  }
  function lm(e, t, n) {
    n.props = Aa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ue(e, t, a);
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
      Ue(e, t, i);
    }
  }
  function on(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Ue(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Ue(e, t, i);
        }
      else n.current = null;
  }
  function im(e) {
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
      Ue(e, e.return, i);
    }
  }
  function ao(e, t, n) {
    try {
      var a = e.stateNode;
      lp(a, e.type, n, t), a[St] = t;
    } catch (i) {
      Ue(e, e.return, i);
    }
  }
  function rm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ta(e.type) || e.tag === 4;
  }
  function lo(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || rm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ta(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gn));
    else if (a !== 4 && (a === 27 && ta(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (io(e, t, n), e = e.sibling; e !== null; )
        io(e, t, n), e = e.sibling;
  }
  function Or(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && ta(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Or(e, t, n), e = e.sibling; e !== null; )
        Or(e, t, n), e = e.sibling;
  }
  function um(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ht(t, a, n), t[ct] = e, t[St] = n;
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  var Tn = !1, nt = !1, ro = !1, sm = typeof WeakSet == "function" ? WeakSet : Set, st = null;
  function Hy(e, t) {
    if (e = e.containerInfo, No = Ir, e = Ef(e), Pu(e)) {
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
              for (var M; B !== n || i !== 0 && B.nodeType !== 3 || (h = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (E = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (M = B.firstChild) !== null; )
                O = B, B = M;
              for (; ; ) {
                if (B === e) break t;
                if (O === n && ++_ === i && (h = f), O === u && ++z === a && (E = f), (M = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = M;
            }
            n = h === -1 || E === -1 ? null : { start: h, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (_o = { focusedElem: e, selectionRange: n }, Ir = !1, st = t; st !== null; )
      if (t = st, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, st = e;
      else
        for (; st !== null; ) {
          switch (t = st, u = t.alternate, e = t.flags, t.tag) {
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
                } catch (te) {
                  Ue(
                    n,
                    n.return,
                    te
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Uo(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uo(e);
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
            e.return = t.return, st = e;
            break;
          }
          st = t.return;
        }
  }
  function om(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Cn(e, n), a & 4 && li(5, n);
        break;
      case 1:
        if (Cn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Ue(n, n.return, f);
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
              Ue(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && am(n), a & 512 && ii(n, n.return);
        break;
      case 3:
        if (Cn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Zf(e, t);
          } catch (f) {
            Ue(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && um(n);
      case 26:
      case 5:
        Cn(e, n), t === null && a & 4 && im(n), a & 512 && ii(n, n.return);
        break;
      case 12:
        Cn(e, n);
        break;
      case 31:
        Cn(e, n), a & 4 && dm(e, n);
        break;
      case 13:
        Cn(e, n), a & 4 && mm(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Qy.bind(
          null,
          n
        ), dp(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Tn, !a) {
          t = t !== null && t.memoizedState !== null || nt, i = Tn;
          var u = nt;
          Tn = a, (nt = t) && !u ? Nn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Cn(e, n), Tn = i, nt = u;
        }
        break;
      case 30:
        break;
      default:
        Cn(e, n);
    }
  }
  function cm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, cm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Lu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, xt = !1;
  function An(e, t, n) {
    for (n = n.child; n !== null; )
      fm(e, t, n), n = n.sibling;
  }
  function fm(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(_l, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        nt || on(n, t), An(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        nt || on(n, t);
        var a = Xe, i = xt;
        ta(n.type) && (Xe = n.stateNode, xt = !1), An(
          e,
          t,
          n
        ), hi(n.stateNode), Xe = a, xt = i;
        break;
      case 5:
        nt || on(n, t);
      case 6:
        if (a = Xe, i = xt, Xe = null, An(
          e,
          t,
          n
        ), Xe = a, xt = i, Xe !== null)
          if (xt)
            try {
              (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
            } catch (u) {
              Ue(
                n,
                t,
                u
              );
            }
          else
            try {
              Xe.removeChild(n.stateNode);
            } catch (u) {
              Ue(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Xe !== null && (xt ? (e = Xe, a0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), vl(e)) : a0(Xe, n.stateNode));
        break;
      case 4:
        a = Xe, i = xt, Xe = n.stateNode.containerInfo, xt = !0, An(
          e,
          t,
          n
        ), Xe = a, xt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Jn(2, n, t), nt || Jn(4, n, t), An(
          e,
          t,
          n
        );
        break;
      case 1:
        nt || (on(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && lm(
          n,
          t,
          a
        )), An(
          e,
          t,
          n
        );
        break;
      case 21:
        An(
          e,
          t,
          n
        );
        break;
      case 22:
        nt = (a = nt) || n.memoizedState !== null, An(
          e,
          t,
          n
        ), nt = a;
        break;
      default:
        An(
          e,
          t,
          n
        );
    }
  }
  function dm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vl(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
    }
  }
  function mm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vl(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
  }
  function By(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new sm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new sm()), t;
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
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], u = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (ta(h.type)) {
                Xe = h.stateNode, xt = !1;
                break e;
              }
              break;
            case 5:
              Xe = h.stateNode, xt = !1;
              break e;
            case 3:
            case 4:
              Xe = h.stateNode.containerInfo, xt = !0;
              break e;
          }
          h = h.return;
        }
        if (Xe === null) throw Error(c(160));
        fm(u, f, i), Xe = null, xt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        hm(t, e), t = t.sibling;
  }
  var en = null;
  function hm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Tt(e), a & 4 && (Jn(3, e, e.return), li(3, e), Jn(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Tt(e), a & 512 && (nt || n === null || on(n, n.return)), a & 64 && Tn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = en;
        if (Rt(t, e), Tt(e), a & 512 && (nt || n === null || on(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Ul] || u[ct] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ht(u, a, n), u[ct] = e, ut(u), a = u;
                      break e;
                    case "link":
                      var f = h0(
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
                      if (f = h0(
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
                  u[ct] = e, ut(u), a = u;
                }
                e.stateNode = a;
              } else
                g0(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = m0(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? g0(
              i,
              e.type,
              e.stateNode
            ) : m0(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ao(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Rt(t, e), Tt(e), a & 512 && (nt || n === null || on(n, n.return)), n !== null && a & 4 && ao(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Tt(e), a & 512 && (nt || n === null || on(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Ya(i, "");
          } catch (J) {
            Ue(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, ao(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (ro = !0);
        break;
      case 6:
        if (Rt(t, e), Tt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (J) {
            Ue(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Zr = null, i = en, en = Kr(t.containerInfo), Rt(t, e), en = i, Tt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            vl(t.containerInfo);
          } catch (J) {
            Ue(e, e.return, J);
          }
        ro && (ro = !1, gm(e));
        break;
      case 4:
        a = en, en = Kr(
          e.stateNode.containerInfo
        ), Rt(t, e), Tt(e), en = a;
        break;
      case 12:
        Rt(t, e), Tt(e);
        break;
      case 31:
        Rt(t, e), Tt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Dr(e, a)));
        break;
      case 13:
        Rt(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Mr = bt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Dr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = Tn, z = nt;
        if (Tn = _ || i, nt = z || E, Rt(t, e), nt = z, Tn = _, Tt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || Tn || nt || Ca(e)), n = null, t = e; ; ) {
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
                  Ue(E, E.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (J) {
                  Ue(E, E.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var M = E.stateNode;
                  i ? l0(M, !0) : l0(E.stateNode, !1);
                } catch (J) {
                  Ue(E, E.return, J);
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
        Rt(t, e), Tt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Dr(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(t, e), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (rm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, u = lo(e);
            Or(e, u, i);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ya(f, ""), n.flags &= -33);
            var h = lo(e);
            Or(e, h, f);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, _ = lo(e);
            io(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        Ue(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        gm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Cn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        om(e, t.alternate, t), t = t.sibling;
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jn(4, t, t.return), Ca(t);
          break;
        case 1:
          on(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && lm(
            t,
            t.return,
            n
          ), Ca(t);
          break;
        case 27:
          hi(t.stateNode);
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
  function Nn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Nn(
            i,
            u,
            n
          ), li(4, u);
          break;
        case 1:
          if (Nn(
            i,
            u,
            n
          ), a = u, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              Ue(a, a.return, _);
            }
          if (a = u, i = a.updateQueue, i !== null) {
            var h = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Qf(E[i], h);
            } catch (_) {
              Ue(a, a.return, _);
            }
          }
          n && f & 64 && am(u), ii(u, u.return);
          break;
        case 27:
          um(u);
        case 26:
        case 5:
          Nn(
            i,
            u,
            n
          ), n && a === null && f & 4 && im(u), ii(u, u.return);
          break;
        case 12:
          Nn(
            i,
            u,
            n
          );
          break;
        case 31:
          Nn(
            i,
            u,
            n
          ), n && f & 4 && dm(i, u);
          break;
        case 13:
          Nn(
            i,
            u,
            n
          ), n && f & 4 && mm(i, u);
          break;
        case 22:
          u.memoizedState === null && Nn(
            i,
            u,
            n
          ), ii(u, u.return);
          break;
        case 30:
          break;
        default:
          Nn(
            i,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function uo(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Kl(n));
  }
  function so(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Kl(e));
  }
  function tn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ym(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function ym(e, t, n, a) {
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
            Ue(t, t.return, E);
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
        ) : (u._visibility |= 2, sl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && uo(f, t);
        break;
      case 24:
        tn(
          e,
          t,
          n,
          a
        ), i & 2048 && so(t.alternate, t);
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
  function sl(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, h = n, E = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          sl(
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
          var z = f.stateNode;
          f.memoizedState !== null ? z._visibility & 2 ? sl(
            u,
            f,
            h,
            E,
            i
          ) : ri(
            u,
            f
          ) : (z._visibility |= 2, sl(
            u,
            f,
            h,
            E,
            i
          )), i && _ & 2048 && uo(
            f.alternate,
            f
          );
          break;
        case 24:
          sl(
            u,
            f,
            h,
            E,
            i
          ), i && _ & 2048 && so(f.alternate, f);
          break;
        default:
          sl(
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
            ri(n, a), i & 2048 && uo(
              a.alternate,
              a
            );
            break;
          case 24:
            ri(n, a), i & 2048 && so(a.alternate, a);
            break;
          default:
            ri(n, a);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function ol(e, t, n) {
    if (e.subtreeFlags & ui)
      for (e = e.child; e !== null; )
        pm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function pm(e, t, n) {
    switch (e.tag) {
      case 26:
        ol(
          e,
          t,
          n
        ), e.flags & ui && e.memoizedState !== null && Rp(
          n,
          en,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ol(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = en;
        en = Kr(e.stateNode.containerInfo), ol(
          e,
          t,
          n
        ), en = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ui, ui = 16777216, ol(
          e,
          t,
          n
        ), ui = a) : ol(
          e,
          t,
          n
        ));
        break;
      default:
        ol(
          e,
          t,
          n
        );
    }
  }
  function bm(e) {
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
          st = a, Em(
            a,
            e
          );
        }
      bm(e);
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
        si(e), e.flags & 2048 && Jn(9, e, e.return);
        break;
      case 3:
        si(e);
        break;
      case 12:
        si(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ur(e)) : si(e);
        break;
      default:
        si(e);
    }
  }
  function Ur(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          st = a, Em(
            a,
            e
          );
        }
      bm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, t, t.return), Ur(t);
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
  function Em(e, t) {
    for (; st !== null; ) {
      var n = st;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, n, t);
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
      if (a = n.child, a !== null) a.return = n, st = a;
      else
        e: for (n = e; st !== null; ) {
          a = st;
          var i = a.sibling, u = a.return;
          if (cm(a), a === n) {
            st = null;
            break e;
          }
          if (i !== null) {
            i.return = u, st = i;
            break e;
          }
          st = u;
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
  }, ky = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, Le = null, pe = null, Ee = 0, De = 0, Ht = null, $n = !1, cl = !1, oo = !1, _n = 0, $e = 0, Fn = 0, Na = 0, co = 0, Bt = 0, fl = 0, oi = null, At = null, fo = !1, Mr = 0, Sm = 0, jr = 1 / 0, zr = null, In = null, lt = 0, Wn = null, dl = null, On = 0, mo = 0, ho = null, wm = null, ci = 0, go = null;
  function qt() {
    return (Ne & 2) !== 0 && Ee !== 0 ? Ee & -Ee : q.T !== null ? So() : Hc();
  }
  function xm() {
    if (Bt === 0)
      if ((Ee & 536870912) === 0 || we) {
        var e = Xi;
        Xi <<= 1, (Xi & 3932160) === 0 && (Xi = 262144), Bt = e;
      } else Bt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), Bt;
  }
  function Ct(e, t, n) {
    (e === Le && (De === 2 || De === 9) || e.cancelPendingCommit !== null) && (ml(e, 0), Pn(
      e,
      Ee,
      Bt,
      !1
    )), Dl(e, n), ((Ne & 2) === 0 || e !== Le) && (e === Le && ((Ne & 2) === 0 && (Na |= n), $e === 4 && Pn(
      e,
      Ee,
      Bt,
      !1
    )), cn(e));
  }
  function Rm(e, t, n) {
    if ((Ne & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ol(e, t), i = a ? Xy(e, t) : po(e, t, !0), u = a;
    do {
      if (i === 0) {
        cl && !a && Pn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Gy(n)) {
          i = po(e, t, !1), u = !1;
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
              if (E && (ml(h, f).flags |= 256), f = po(
                h,
                f,
                !1
              ), f !== 2) {
                if (oo && !E) {
                  h.errorRecoveryDisabledLanes |= u, Na |= u, i = 4;
                  break e;
                }
                u = At, At = i, u !== null && (At === null ? At = u : At.push.apply(
                  At,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          ml(e, 0), Pn(e, t, 0, !0);
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
              Pn(
                a,
                t,
                Bt,
                !$n
              );
              break e;
            case 2:
              At = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = Mr + 300 - bt(), 10 < i)) {
            if (Pn(
              a,
              t,
              Bt,
              !$n
            ), Ki(a, 0, !0) !== 0) break e;
            On = t, a.timeoutHandle = t0(
              Tm.bind(
                null,
                a,
                n,
                At,
                zr,
                fo,
                t,
                Bt,
                Na,
                fl,
                $n,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          Tm(
            a,
            n,
            At,
            zr,
            fo,
            t,
            Bt,
            Na,
            fl,
            $n,
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
  function Tm(e, t, n, a, i, u, f, h, E, _, z, B, O, M) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: gn
      }, pm(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? Mr - bt() : (u & 4194048) === u ? Sm - bt() : 0;
      if (J = Tp(
        B,
        J
      ), J !== null) {
        On = u, e.cancelPendingCommit = J(
          Mm.bind(
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
            M
          )
        ), Pn(e, u, f, !_);
        return;
      }
    }
    Mm(
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
  function Pn(e, t, n, a) {
    t &= ~co, t &= ~Na, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - Ut(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    n !== 0 && jc(e, n, t);
  }
  function Lr() {
    return (Ne & 6) === 0 ? (fi(0), !1) : !0;
  }
  function yo() {
    if (pe !== null) {
      if (De === 0)
        var e = pe.return;
      else
        e = pe, vn = va = null, Ds(e), al = null, Zl = 0, e = pe;
      for (; e !== null; )
        nm(e.alternate, e), e = e.return;
      pe = null;
    }
  }
  function ml(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, up(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), On = 0, yo(), Le = e, pe = n = pn(e.current, null), Ee = t, De = 0, Ht = null, $n = !1, cl = Ol(e, t), oo = !1, fl = Bt = co = Na = Fn = $e = 0, At = oi = null, fo = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ut(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return _n = t, ar(), n;
  }
  function Am(e, t) {
    fe = null, q.H = ti, t === nl || t === fr ? (t = Yf(), De = 3) : t === vs ? (t = Yf(), De = 4) : De = t === Zs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, pe === null && ($e = 1, Tr(
      e,
      Xt(t, e.current)
    ));
  }
  function Cm() {
    var e = zt.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Zt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Zt : !1;
  }
  function Nm() {
    var e = q.H;
    return q.H = ti, e === null ? ti : e;
  }
  function _m() {
    var e = q.A;
    return q.A = qy, e;
  }
  function Hr() {
    $e = 4, $n || (Ee & 4194048) !== Ee && zt.current !== null || (cl = !0), (Fn & 134217727) === 0 && (Na & 134217727) === 0 || Le === null || Pn(
      Le,
      Ee,
      Bt,
      !1
    );
  }
  function po(e, t, n) {
    var a = Ne;
    Ne |= 2;
    var i = Nm(), u = _m();
    (Le !== e || Ee !== t) && (zr = null, ml(e, t)), t = !1;
    var f = $e;
    e: do
      try {
        if (De !== 0 && pe !== null) {
          var h = pe, E = Ht;
          switch (De) {
            case 8:
              yo(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var _ = De;
              if (De = 0, Ht = null, hl(e, h, E, _), n && cl) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = De, De = 0, Ht = null, hl(e, h, E, _);
          }
        }
        Yy(), f = $e;
        break;
      } catch (z) {
        Am(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = va = null, Ne = a, q.H = i, q.A = u, pe === null && (Le = null, Ee = 0, ar()), f;
  }
  function Yy() {
    for (; pe !== null; ) Om(pe);
  }
  function Xy(e, t) {
    var n = Ne;
    Ne |= 2;
    var a = Nm(), i = _m();
    Le !== e || Ee !== t ? (zr = null, jr = bt() + 500, ml(e, t)) : cl = Ol(
      e,
      t
    );
    e: do
      try {
        if (De !== 0 && pe !== null) {
          t = pe;
          var u = Ht;
          t: switch (De) {
            case 1:
              De = 0, Ht = null, hl(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (kf(u)) {
                De = 0, Ht = null, Dm(t);
                break;
              }
              t = function() {
                De !== 2 && De !== 9 || Le !== e || (De = 7), cn(e);
              }, u.then(t, t);
              break e;
            case 3:
              De = 7;
              break e;
            case 4:
              De = 5;
              break e;
            case 7:
              kf(u) ? (De = 0, Ht = null, Dm(t)) : (De = 0, Ht = null, hl(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (pe.tag) {
                case 26:
                  f = pe.memoizedState;
                case 5:
                case 27:
                  var h = pe;
                  if (f ? y0(f) : h.stateNode.complete) {
                    De = 0, Ht = null;
                    var E = h.sibling;
                    if (E !== null) pe = E;
                    else {
                      var _ = h.return;
                      _ !== null ? (pe = _, Br(_)) : pe = null;
                    }
                    break t;
                  }
              }
              De = 0, Ht = null, hl(e, t, u, 5);
              break;
            case 6:
              De = 0, Ht = null, hl(e, t, u, 6);
              break;
            case 8:
              yo(), $e = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Vy();
        break;
      } catch (z) {
        Am(e, z);
      }
    while (!0);
    return vn = va = null, q.H = a, q.A = i, Ne = n, pe !== null ? 0 : (Le = null, Ee = 0, ar(), $e);
  }
  function Vy() {
    for (; pe !== null && !za(); )
      Om(pe);
  }
  function Om(e) {
    var t = em(e.alternate, e, _n);
    e.memoizedProps = e.pendingProps, t === null ? Br(e) : pe = t;
  }
  function Dm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = Jd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        Ds(t);
      default:
        nm(n, t), t = pe = _f(t, _n), t = em(n, t, _n);
    }
    e.memoizedProps = e.pendingProps, t === null ? Br(e) : pe = t;
  }
  function hl(e, t, n, a) {
    vn = va = null, Ds(t), al = null, Zl = 0;
    var i = t.return;
    try {
      if (Uy(
        e,
        i,
        t,
        n,
        Ee
      )) {
        $e = 1, Tr(
          e,
          Xt(n, e.current)
        ), pe = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw pe = i, u;
      $e = 1, Tr(
        e,
        Xt(n, e.current)
      ), pe = null;
      return;
    }
    t.flags & 32768 ? (we || a === 1 ? e = !0 : cl || (Ee & 536870912) !== 0 ? e = !1 : ($n = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Um(t, e)) : Br(t);
  }
  function Br(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Um(
          t,
          $n
        );
        return;
      }
      e = t.return;
      var n = zy(
        t.alternate,
        t,
        _n
      );
      if (n !== null) {
        pe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Um(e, t) {
    do {
      var n = Ly(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, pe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        pe = e;
        return;
      }
      pe = e = n;
    } while (e !== null);
    $e = 6, pe = null;
  }
  function Mm(e, t, n, a, i, u, f, h, E) {
    e.cancelPendingCommit = null;
    do
      qr();
    while (lt !== 0);
    if ((Ne & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= ls, xg(
        e,
        n,
        u,
        f,
        h,
        E
      ), e === Le && (pe = Le = null, Ee = 0), dl = t, Wn = e, On = n, mo = u, ho = i, wm = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Jy(Gi, function() {
        return Bm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = q.T, q.T = null, i = X.p, X.p = 2, f = Ne, Ne |= 4;
        try {
          Hy(e, t, n);
        } finally {
          Ne = f, X.p = i, q.T = a;
        }
      }
      lt = 1, jm(), zm(), Lm();
    }
  }
  function jm() {
    if (lt === 1) {
      lt = 0;
      var e = Wn, t = dl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null;
        var a = X.p;
        X.p = 2;
        var i = Ne;
        Ne |= 4;
        try {
          hm(t, e);
          var u = _o, f = Ef(e.containerInfo), h = u.focusedElem, E = u.selectionRange;
          if (f !== h && h && h.ownerDocument && vf(
            h.ownerDocument.documentElement,
            h
          )) {
            if (E !== null && Pu(h)) {
              var _ = E.start, z = E.end;
              if (z === void 0 && (z = _), "selectionStart" in h)
                h.selectionStart = _, h.selectionEnd = Math.min(
                  z,
                  h.value.length
                );
              else {
                var B = h.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), J = h.textContent.length, te = Math.min(E.start, J), ze = E.end === void 0 ? te : Math.min(E.end, J);
                  !M.extend && te > ze && (f = ze, ze = te, te = f);
                  var T = bf(
                    h,
                    te
                  ), R = bf(
                    h,
                    ze
                  );
                  if (T && R && (M.rangeCount !== 1 || M.anchorNode !== T.node || M.anchorOffset !== T.offset || M.focusNode !== R.node || M.focusOffset !== R.offset)) {
                    var N = B.createRange();
                    N.setStart(T.node, T.offset), M.removeAllRanges(), te > ze ? (M.addRange(N), M.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset), M.addRange(N));
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
          Ir = !!No, _o = No = null;
        } finally {
          Ne = i, X.p = a, q.T = n;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function zm() {
    if (lt === 2) {
      lt = 0;
      var e = Wn, t = dl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = q.T, q.T = null;
        var a = X.p;
        X.p = 2;
        var i = Ne;
        Ne |= 4;
        try {
          om(e, t.alternate, t);
        } finally {
          Ne = i, X.p = a, q.T = n;
        }
      }
      lt = 3;
    }
  }
  function Lm() {
    if (lt === 4 || lt === 3) {
      lt = 0, ca();
      var e = Wn, t = dl, n = On, a = wm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, dl = Wn = null, Hm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (In = null), ju(n), t = t.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
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
        t = q.T, i = X.p, X.p = 2, q.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          q.T = t, X.p = i;
        }
      }
      (On & 3) !== 0 && qr(), cn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === go ? ci++ : (ci = 0, go = e) : ci = 0, fi(0);
    }
  }
  function Hm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Kl(t)));
  }
  function qr() {
    return jm(), zm(), Lm(), Bm();
  }
  function Bm() {
    if (lt !== 5) return !1;
    var e = Wn, t = mo;
    mo = 0;
    var n = ju(On), a = q.T, i = X.p;
    try {
      X.p = 32 > n ? 32 : n, q.T = null, n = ho, ho = null;
      var u = Wn, f = On;
      if (lt = 0, dl = Wn = null, On = 0, (Ne & 6) !== 0) throw Error(c(331));
      var h = Ne;
      if (Ne |= 4, vm(u.current), ym(
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
      X.p = i, q.T = a, Hm(e, t);
    }
  }
  function qm(e, t, n) {
    t = Xt(n, t), t = Qs(e.stateNode, t, 2), e = Kn(e, t, 2), e !== null && (Dl(e, 2), cn(e));
  }
  function Ue(e, t, n) {
    if (e.tag === 3)
      qm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (In === null || !In.has(a))) {
            e = Xt(n, e), n = kd(2), a = Kn(t, n, 2), a !== null && (Gd(
              n,
              a,
              t,
              e
            ), Dl(a, 2), cn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function bo(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new ky();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (oo = !0, i.add(n), e = Ky.bind(null, e, t, n), t.then(e, e));
  }
  function Ky(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Le === e && (Ee & n) === n && ($e === 4 || $e === 3 && (Ee & 62914560) === Ee && 300 > bt() - Mr ? (Ne & 2) === 0 && ml(e, 0) : co |= n, fl === Ee && (fl = 0)), cn(e);
  }
  function km(e, t) {
    t === 0 && (t = Mc()), e = ya(e, t), e !== null && (Dl(e, t), cn(e));
  }
  function Qy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), km(e, n);
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
    a !== null && a.delete(t), km(e, n);
  }
  function Jy(e, t) {
    return Et(e, t);
  }
  var kr = null, gl = null, vo = !1, Gr = !1, Eo = !1, ea = 0;
  function cn(e) {
    e !== gl && e.next === null && (gl === null ? kr = gl = e : gl = gl.next = e), Gr = !0, vo || (vo = !0, Fy());
  }
  function fi(e, t) {
    if (!Eo && Gr) {
      Eo = !0;
      do
        for (var n = !1, a = kr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, h = a.pingedLanes;
              u = (1 << 31 - Ut(42 | e) + 1) - 1, u &= i & ~(f & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Vm(a, u));
          } else
            u = Ee, u = Ki(
              a,
              a === Le ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ol(a, u) || (n = !0, Vm(a, u));
          a = a.next;
        }
      while (n);
      Eo = !1;
    }
  }
  function $y() {
    Gm();
  }
  function Gm() {
    Gr = vo = !1;
    var e = 0;
    ea !== 0 && rp() && (e = ea);
    for (var t = bt(), n = null, a = kr; a !== null; ) {
      var i = a.next, u = Ym(a, t);
      u === 0 ? (a.next = null, n === null ? kr = i : n.next = i, i === null && (gl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (Gr = !0)), a = i;
    }
    lt !== 0 && lt !== 5 || fi(e), ea !== 0 && (ea = 0);
  }
  function Ym(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ut(u), h = 1 << f, E = i[f];
      E === -1 ? ((h & n) === 0 || (h & a) !== 0) && (i[f] = wg(h, t)) : E <= t && (e.expiredLanes |= h), u &= ~h;
    }
    if (t = Le, n = Ee, n = Ki(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (De === 2 || De === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && rt(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ol(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && rt(a), ju(n)) {
        case 2:
        case 8:
          n = Dc;
          break;
        case 32:
          n = Gi;
          break;
        case 268435456:
          n = Uc;
          break;
        default:
          n = Gi;
      }
      return a = Xm.bind(null, e), n = Et(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && rt(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Xm(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (qr() && e.callbackNode !== n)
      return null;
    var a = Ee;
    return a = Ki(
      e,
      e === Le ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Rm(e, a, t), Ym(e, bt()), e.callbackNode != null && e.callbackNode === n ? Xm.bind(null, e) : null);
  }
  function Vm(e, t) {
    if (qr()) return null;
    Rm(e, t, !0);
  }
  function Fy() {
    sp(function() {
      (Ne & 6) !== 0 ? Et(
        Oc,
        $y
      ) : Gm();
    });
  }
  function So() {
    if (ea === 0) {
      var e = el;
      e === 0 && (e = Yi, Yi <<= 1, (Yi & 261888) === 0 && (Yi = 256)), ea = e;
    }
    return ea;
  }
  function Km(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : $i("" + e);
  }
  function Qm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Iy(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var u = Km(
        (i[St] || null).action
      ), f = a.submitter;
      f && (t = (t = f[St] || null) ? Km(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
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
                if (ea !== 0) {
                  var E = f ? Qm(i, f) : new FormData(i);
                  ks(
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
                typeof u == "function" && (h.preventDefault(), E = f ? Qm(i, f) : new FormData(i), ks(
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
  for (var wo = 0; wo < as.length; wo++) {
    var xo = as[wo], Wy = xo.toLowerCase(), Py = xo[0].toUpperCase() + xo.slice(1);
    Pt(
      Wy,
      "on" + Py
    );
  }
  Pt(xf, "onAnimationEnd"), Pt(Rf, "onAnimationIteration"), Pt(Tf, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(gy, "onTransitionRun"), Pt(yy, "onTransitionStart"), Pt(py, "onTransitionCancel"), Pt(Af, "onTransitionEnd"), ka("onMouseEnter", ["mouseout", "mouseover"]), ka("onMouseLeave", ["mouseout", "mouseover"]), ka("onPointerEnter", ["pointerout", "pointerover"]), ka("onPointerLeave", ["pointerout", "pointerover"]), da(
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
  var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ep = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di)
  );
  function Zm(e, t) {
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
  function be(e, t) {
    var n = t[zu];
    n === void 0 && (n = t[zu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Jm(t, e, 2, !1), n.add(a));
  }
  function Ro(e, t, n) {
    var a = 0;
    t && (a |= 4), Jm(
      n,
      e,
      a,
      t
    );
  }
  var Yr = "_reactListening" + Math.random().toString(36).slice(2);
  function To(e) {
    if (!e[Yr]) {
      e[Yr] = !0, kc.forEach(function(n) {
        n !== "selectionchange" && (ep.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yr] || (t[Yr] = !0, Ro("selectionchange", !1, t));
    }
  }
  function Jm(e, t, n, a) {
    switch (x0(t)) {
      case 2:
        var i = Np;
        break;
      case 8:
        i = _p;
        break;
      default:
        i = ko;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function Ao(e, t, n, a, i) {
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
            if (f = Ha(h), f === null) return;
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
      var _ = u, z = Yu(n), B = [];
      e: {
        var O = Cf.get(e);
        if (O !== void 0) {
          var M = Pi, J = e;
          switch (e) {
            case "keypress":
              if (Ii(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Zg;
              break;
            case "focusin":
              J = "focus", M = Ju;
              break;
            case "focusout":
              J = "blur", M = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              M = Ju;
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
              M = tf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Fg;
              break;
            case xf:
            case Rf:
            case Tf:
              M = Bg;
              break;
            case Af:
              M = Wg;
              break;
            case "scroll":
            case "scrollend":
              M = Mg;
              break;
            case "wheel":
              M = ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = kg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = af;
              break;
            case "toggle":
            case "beforetoggle":
              M = ny;
          }
          var te = (t & 4) !== 0, ze = !te && (e === "scroll" || e === "scrollend"), T = te ? O !== null ? O + "Capture" : null : O;
          te = [];
          for (var R = _, N; R !== null; ) {
            var H = R;
            if (N = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || N === null || T === null || (H = jl(R, T), H != null && te.push(
              mi(R, H, N)
            )), ze) break;
            R = R.return;
          }
          0 < te.length && (O = new M(
            O,
            J,
            null,
            n,
            z
          ), B.push({ event: O, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && n !== Gu && (J = n.relatedTarget || n.fromElement) && (Ha(J) || J[La]))
            break e;
          if ((M || O) && (O = z.window === z ? z : (O = z.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (J = n.relatedTarget || n.toElement, M = _, J = J ? Ha(J) : null, J !== null && (ze = m(J), te = J.tag, J !== ze || te !== 5 && te !== 27 && te !== 6) && (J = null)) : (M = null, J = _), M !== J)) {
            if (te = tf, H = "onMouseLeave", T = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (te = af, H = "onPointerLeave", T = "onPointerEnter", R = "pointer"), ze = M == null ? O : Ml(M), N = J == null ? O : Ml(J), O = new te(
              H,
              R + "leave",
              M,
              n,
              z
            ), O.target = ze, O.relatedTarget = N, H = null, Ha(z) === _ && (te = new te(
              T,
              R + "enter",
              J,
              n,
              z
            ), te.target = N, te.relatedTarget = ze, H = te), ze = H, M && J)
              t: {
                for (te = tp, T = M, R = J, N = 0, H = T; H; H = te(H))
                  N++;
                H = 0;
                for (var ee = R; ee; ee = te(ee))
                  H++;
                for (; 0 < N - H; )
                  T = te(T), N--;
                for (; 0 < H - N; )
                  R = te(R), H--;
                for (; N--; ) {
                  if (T === R || R !== null && T === R.alternate) {
                    te = T;
                    break t;
                  }
                  T = te(T), R = te(R);
                }
                te = null;
              }
            else te = null;
            M !== null && $m(
              B,
              O,
              M,
              te,
              !1
            ), J !== null && ze !== null && $m(
              B,
              ze,
              J,
              te,
              !0
            );
          }
        }
        e: {
          if (O = _ ? Ml(_) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var Ae = df;
          else if (cf(O))
            if (mf)
              Ae = dy;
            else {
              Ae = cy;
              var $ = oy;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? _ && ku(_.elementType) && (Ae = df) : Ae = fy;
          if (Ae && (Ae = Ae(e, _))) {
            ff(
              B,
              Ae,
              n,
              z
            );
            break e;
          }
          $ && $(e, O, _), e === "focusout" && _ && O.type === "number" && _.memoizedProps.value != null && qu(O, "number", O.value);
        }
        switch ($ = _ ? Ml(_) : window, e) {
          case "focusin":
            (cf($) || $.contentEditable === "true") && (Qa = $, es = _, Yl = null);
            break;
          case "focusout":
            Yl = es = Qa = null;
            break;
          case "mousedown":
            ts = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ts = !1, Sf(B, n, z);
            break;
          case "selectionchange":
            if (hy) break;
          case "keydown":
          case "keyup":
            Sf(B, n, z);
        }
        var me;
        if (Fu)
          e: {
            switch (e) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          Ka ? sf(e, n) && (Se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Se = "onCompositionStart");
        Se && (lf && n.locale !== "ko" && (Ka || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Ka && (me = Pc()) : (Bn = z, Ku = "value" in Bn ? Bn.value : Bn.textContent, Ka = !0)), $ = Xr(_, Se), 0 < $.length && (Se = new nf(
          Se,
          e,
          null,
          n,
          z
        ), B.push({ event: Se, listeners: $ }), me ? Se.data = me : (me = of(n), me !== null && (Se.data = me)))), (me = ly ? iy(e, n) : ry(e, n)) && (Se = Xr(_, "onBeforeInput"), 0 < Se.length && ($ = new nf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), B.push({
          event: $,
          listeners: Se
        }), $.data = me)), Iy(
          B,
          e,
          _,
          n,
          z
        );
      }
      Zm(B, t);
    });
  }
  function mi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Xr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = jl(e, n), i != null && a.unshift(
        mi(e, i, u)
      ), i = jl(e, t), i != null && a.push(
        mi(e, i, u)
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
  function $m(e, t, n, a, i) {
    for (var u = t._reactName, f = []; n !== null && n !== a; ) {
      var h = n, E = h.alternate, _ = h.stateNode;
      if (h = h.tag, E !== null && E === a) break;
      h !== 5 && h !== 26 && h !== 27 || _ === null || (E = _, i ? (_ = jl(n, u), _ != null && f.unshift(
        mi(n, _, E)
      )) : i || (_ = jl(n, u), _ != null && f.push(
        mi(n, _, E)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var np = /\r\n?/g, ap = /\u0000|\uFFFD/g;
  function Fm(e) {
    return (typeof e == "string" ? e : "" + e).replace(np, `
`).replace(ap, "");
  }
  function Im(e, t) {
    return t = Fm(t), Fm(e) === t;
  }
  function je(e, t, n, a, i, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ya(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ya(e, "" + a);
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
        Fc(e, a, u);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && je(e, t, "name", i.name, i, null), je(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), je(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), je(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (je(e, t, "encType", i.encType, i, null), je(e, t, "method", i.method, i, null), je(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = $i("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = gn);
        break;
      case "onScroll":
        a != null && be("scroll", e);
        break;
      case "onScrollEnd":
        a != null && be("scrollend", e);
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
        be("beforetoggle", e), be("toggle", e), Qi(e, "popover", a);
        break;
      case "xlinkActuate":
        hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        hn(
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
  function Co(e, t, n, a, i, u) {
    switch (n) {
      case "style":
        Fc(e, a, u);
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
        typeof a == "string" ? Ya(e, a) : (typeof a == "number" || typeof a == "bigint") && Ya(e, "" + a);
        break;
      case "onScroll":
        a != null && be("scroll", e);
        break;
      case "onScrollEnd":
        a != null && be("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = gn);
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
        if (!Gc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), u = e[St] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
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
        be("error", e), be("load", e);
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
                  je(e, t, u, f, n, null);
              }
          }
        i && je(e, t, "srcSet", n.srcSet, n, null), a && je(e, t, "src", n.src, n, null);
        return;
      case "input":
        be("invalid", e);
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
                  je(e, t, a, z, n, null);
              }
          }
        Qc(
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
        be("invalid", e), a = f = u = null;
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
                je(e, t, i, h, n, null);
            }
        t = u, n = f, e.multiple = !!a, t != null ? Ga(e, !!a, t, !1) : n != null && Ga(e, !!a, n, !0);
        return;
      case "textarea":
        be("invalid", e), u = i = a = null;
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
                je(e, t, f, h, n, null);
            }
        Jc(e, a, i, u);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : je(e, t, E, a, n, null));
        return;
      case "dialog":
        be("beforetoggle", e), be("toggle", e), be("cancel", e), be("close", e);
        break;
      case "iframe":
      case "object":
        be("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < di.length; a++)
          be(di[a], e);
        break;
      case "image":
        be("error", e), be("load", e);
        break;
      case "details":
        be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        be("error", e), be("load", e);
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
                je(e, t, _, a, n, null);
            }
        return;
      default:
        if (ku(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (a = n[z], a !== void 0 && Co(
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
      n.hasOwnProperty(h) && (a = n[h], a != null && je(e, t, h, a, n, null));
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
                a.hasOwnProperty(M) || je(e, t, M, null, a, B);
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
                z = M;
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
                M !== B && je(
                  e,
                  t,
                  O,
                  M,
                  a,
                  B
                );
            }
        }
        Bu(
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
        M = f = h = O = null;
        for (u in n)
          if (E = n[u], n.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = E;
              default:
                a.hasOwnProperty(u) || je(
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
                u !== E && je(
                  e,
                  t,
                  i,
                  u,
                  a,
                  E
                );
            }
        t = h, n = f, a = M, O != null ? Ga(e, !!n, O, !1) : !!a != !!n && (t != null ? Ga(e, !!n, t, !0) : Ga(e, !!n, n ? [] : "", !1));
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
                je(e, t, h, null, a, i);
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
                i !== u && je(e, t, f, i, a, u);
            }
        Zc(e, O, M);
        return;
      case "option":
        for (var J in n)
          O = n[J], n.hasOwnProperty(J) && O != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : je(
            e,
            t,
            J,
            null,
            a,
            O
          ));
        for (E in a)
          O = a[E], M = n[E], a.hasOwnProperty(E) && O !== M && (O != null || M != null) && (E === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : je(
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
        for (var te in n)
          O = n[te], n.hasOwnProperty(te) && O != null && !a.hasOwnProperty(te) && je(e, t, te, null, a, O);
        for (_ in a)
          if (O = a[_], M = n[_], a.hasOwnProperty(_) && O !== M && (O != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(c(137, t));
                break;
              default:
                je(
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
        if (ku(t)) {
          for (var ze in n)
            O = n[ze], n.hasOwnProperty(ze) && O !== void 0 && !a.hasOwnProperty(ze) && Co(
              e,
              t,
              ze,
              void 0,
              a,
              O
            );
          for (z in a)
            O = a[z], M = n[z], !a.hasOwnProperty(z) || O === M || O === void 0 && M === void 0 || Co(
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
    for (var T in n)
      O = n[T], n.hasOwnProperty(T) && O != null && !a.hasOwnProperty(T) && je(e, t, T, null, a, O);
    for (B in a)
      O = a[B], M = n[B], !a.hasOwnProperty(B) || O === M || O == null && M == null || je(e, t, B, O, a, M);
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
  var No = null, _o = null;
  function Vr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function e0(e, t) {
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
  function Oo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Do = null;
  function rp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Do ? !1 : (Do = e, !0) : (Do = null, !1);
  }
  var t0 = typeof setTimeout == "function" ? setTimeout : void 0, up = typeof clearTimeout == "function" ? clearTimeout : void 0, n0 = typeof Promise == "function" ? Promise : void 0, sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof n0 < "u" ? function(e) {
    return n0.resolve(null).then(e).catch(op);
  } : t0;
  function op(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ta(e) {
    return e === "head";
  }
  function a0(e, t) {
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
    vl(t);
  }
  function l0(e, t) {
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
  function Uo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uo(n), Lu(n);
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
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function fp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function i0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mo(e) {
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
  function Jt(e) {
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
  function r0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Jt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function u0(e) {
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
  function s0(e, t, n) {
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
  function hi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Lu(e);
  }
  var $t = /* @__PURE__ */ new Map(), o0 = /* @__PURE__ */ new Set();
  function Kr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Dn = X.d;
  X.d = {
    f: mp,
    r: hp,
    D: gp,
    C: yp,
    L: pp,
    m: bp,
    X: Ep,
    S: vp,
    M: Sp
  };
  function mp() {
    var e = Dn.f(), t = Lr();
    return e || t;
  }
  function hp(e) {
    var t = Ba(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ad(t) : Dn.r(e);
  }
  var yl = typeof document > "u" ? null : document;
  function c0(e, t, n) {
    var a = yl;
    if (a && typeof t == "string" && t) {
      var i = Gt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), o0.has(i) || (o0.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ht(t, "link", e), ut(t), a.head.appendChild(t)));
    }
  }
  function gp(e) {
    Dn.D(e), c0("dns-prefetch", e, null);
  }
  function yp(e, t) {
    Dn.C(e, t), c0("preconnect", e, t);
  }
  function pp(e, t, n) {
    Dn.L(e, t, n);
    var a = yl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Gt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Gt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Gt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Gt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = pl(e);
          break;
        case "script":
          u = bl(e);
      }
      $t.has(u) || (e = C(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), $t.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(gi(u)) || t === "script" && a.querySelector(yi(u)) || (t = a.createElement("link"), ht(t, "link", e), ut(t), a.head.appendChild(t)));
    }
  }
  function bp(e, t) {
    Dn.m(e, t);
    var n = yl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Gt(a) + '"][href="' + Gt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = bl(e);
      }
      if (!$t.has(u) && (e = C({ rel: "modulepreload", href: e }, t), $t.set(u, e), n.querySelector(i) === null)) {
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
        a = n.createElement("link"), ht(a, "link", e), ut(a), n.head.appendChild(a);
      }
    }
  }
  function vp(e, t, n) {
    Dn.S(e, t, n);
    var a = yl;
    if (a && e) {
      var i = qa(a).hoistableStyles, u = pl(e);
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
          ), (n = $t.get(u)) && Lo(e, n);
          var E = f = a.createElement("link");
          ut(E), ht(E, "link", e), E._p = new Promise(function(_, z) {
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
    Dn.X(e, t);
    var n = yl;
    if (n && e) {
      var a = qa(n).hoistableScripts, i = bl(e), u = a.get(i);
      u || (u = n.querySelector(yi(i)), u || (e = C({ src: e, async: !0 }, t), (t = $t.get(i)) && Ho(e, t), u = n.createElement("script"), ut(u), ht(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function Sp(e, t) {
    Dn.M(e, t);
    var n = yl;
    if (n && e) {
      var a = qa(n).hoistableScripts, i = bl(e), u = a.get(i);
      u || (u = n.querySelector(yi(i)), u || (e = C({ src: e, async: !0, type: "module" }, t), (t = $t.get(i)) && Ho(e, t), u = n.createElement("script"), ut(u), ht(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function f0(e, t, n, a) {
    var i = (i = se.current) ? Kr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = pl(n.href), n = qa(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = pl(n.href);
          var u = qa(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            gi(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), $t.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, $t.set(e, n), u || wp(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bl(n), n = qa(
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
  function pl(e) {
    return 'href="' + Gt(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function d0(e) {
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
    }), ht(t, "link", n), ut(t), e.head.appendChild(t));
  }
  function bl(e) {
    return '[src="' + Gt(e) + '"]';
  }
  function yi(e) {
    return "script[async]" + e;
  }
  function m0(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Gt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, ut(a), a;
          var i = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ut(a), ht(a, "style", i), Qr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = pl(n.href);
          var u = e.querySelector(
            gi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ut(u), u;
          a = d0(n), (i = $t.get(i)) && Lo(a, i), u = (e.ownerDocument || e).createElement("link"), ut(u);
          var f = u;
          return f._p = new Promise(function(h, E) {
            f.onload = h, f.onerror = E;
          }), ht(u, "link", a), t.state.loading |= 4, Qr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = bl(n.src), (i = e.querySelector(
            yi(u)
          )) ? (t.instance = i, ut(i), i) : (a = n, (i = $t.get(u)) && (a = C({}, n), Ho(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), ut(i), ht(i, "link", a), e.head.appendChild(i), t.instance = i);
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
  function Lo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ho(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Zr = null;
  function h0(e, t, n) {
    if (Zr === null) {
      var a = /* @__PURE__ */ new Map(), i = Zr = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Zr, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[Ul] || u[ct] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var h = a.get(f);
        h ? h.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function g0(e, t, n) {
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
  function y0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Rp(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = pl(a.href), u = t.querySelector(
          gi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Jr.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, ut(u);
          return;
        }
        u = t.ownerDocument || t, a = d0(a), (i = $t.get(i)) && Lo(a, i), u = u.createElement("link"), ut(u);
        var f = u;
        f._p = new Promise(function(h, E) {
          f.onload = h, f.onerror = E;
        }), ht(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Jr.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Bo = 0;
  function Tp(e, t) {
    return e.stylesheets && e.count === 0 && Fr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Fr(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Bo === 0 && (Bo = 62500 * ip());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Fr(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Bo ? 50 : 800) + t
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
  var pi = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: ge,
    _currentValue2: ge,
    _threadCount: 0
  };
  function Cp(e, t, n, a, i, u, f, h, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uu(0), this.hiddenUpdates = Uu(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function p0(e, t, n, a, i, u, f, h, E, _, z, B) {
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
    ), t = 1, u === !0 && (t |= 24), u = jt(3, null, null, t), e.current = u, u.stateNode = e, t = ys(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Es(u), e;
  }
  function b0(e) {
    return e ? (e = $a, e) : $a;
  }
  function v0(e, t, n, a, i, u) {
    i = b0(i), a.context === null ? a.context = i : a.pendingContext = i, a = Vn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Kn(e, a, t), n !== null && (Ct(n, e, t), $l(n, e, t));
  }
  function E0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function qo(e, t) {
    E0(e, t), (e = e.alternate) && E0(e, t);
  }
  function S0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ya(e, 67108864);
      t !== null && Ct(t, e, 67108864), qo(e, 67108864);
    }
  }
  function w0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = Mu(t);
      var n = ya(e, t);
      n !== null && Ct(n, e, t), qo(e, t);
    }
  }
  var Ir = !0;
  function Np(e, t, n, a) {
    var i = q.T;
    q.T = null;
    var u = X.p;
    try {
      X.p = 2, ko(e, t, n, a);
    } finally {
      X.p = u, q.T = i;
    }
  }
  function _p(e, t, n, a) {
    var i = q.T;
    q.T = null;
    var u = X.p;
    try {
      X.p = 8, ko(e, t, n, a);
    } finally {
      X.p = u, q.T = i;
    }
  }
  function ko(e, t, n, a) {
    if (Ir) {
      var i = Go(a);
      if (i === null)
        Ao(
          e,
          t,
          a,
          Wr,
          n
        ), R0(e, a);
      else if (Dp(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (R0(e, a), t & 4 && -1 < Op.indexOf(e)) {
        for (; i !== null; ) {
          var u = Ba(i);
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
                    cn(u), (Ne & 6) === 0 && (jr = bt() + 500, fi(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = ya(u, 2), h !== null && Ct(h, u, 2), Lr(), qo(u, 2);
            }
          if (u = Go(a), u === null && Ao(
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
        Ao(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Go(e) {
    return e = Yu(e), Yo(e);
  }
  var Wr = null;
  function Yo(e) {
    if (Wr = null, e = Ha(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = b(t), e !== null) return e;
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
  function x0(e) {
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
          case Oc:
            return 2;
          case Dc:
            return 8;
          case Gi:
          case yg:
            return 32;
          case Uc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xo = !1, na = null, aa = null, la = null, bi = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), ia = [], Op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function R0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        na = null;
        break;
      case "dragenter":
      case "dragleave":
        aa = null;
        break;
      case "mouseover":
      case "mouseout":
        la = null;
        break;
      case "pointerover":
      case "pointerout":
        bi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vi.delete(t.pointerId);
    }
  }
  function Ei(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Ba(t), t !== null && S0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Dp(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return na = Ei(
          na,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return aa = Ei(
          aa,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return la = Ei(
          la,
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
          Ei(
            bi.get(u) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, vi.set(
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
    }
    return !1;
  }
  function T0(e) {
    var t = Ha(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Bc(e.priority, function() {
              w0(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Bc(e.priority, function() {
              w0(n);
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
      var n = Go(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Gu = a, n.target.dispatchEvent(a), Gu = null;
      } else
        return t = Ba(n), t !== null && S0(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function A0(e, t, n) {
    Pr(e) && n.delete(t);
  }
  function Up() {
    Xo = !1, na !== null && Pr(na) && (na = null), aa !== null && Pr(aa) && (aa = null), la !== null && Pr(la) && (la = null), bi.forEach(A0), vi.forEach(A0);
  }
  function eu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xo || (Xo = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Up
    )));
  }
  var tu = null;
  function C0(e) {
    tu !== e && (tu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        tu === e && (tu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Yo(a || n) === null)
              continue;
            break;
          }
          var u = Ba(n);
          u !== null && (e.splice(t, 3), t -= 3, ks(
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
    na !== null && eu(na, e), aa !== null && eu(aa, e), la !== null && eu(la, e), bi.forEach(t), vi.forEach(t);
    for (var n = 0; n < ia.length; n++) {
      var a = ia[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ia.length && (n = ia[0], n.blockedOn === null); )
      T0(n), n.blockedOn === null && ia.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], u = n[a + 1], f = i[St] || null;
        if (typeof u == "function")
          f || C0(n);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[St] || null)
              h = f.formAction;
            else if (Yo(i) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? n[a + 1] = h : (n.splice(a, 3), a -= 3), C0(n);
        }
      }
  }
  function N0() {
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
  function Vo(e) {
    this._internalRoot = e;
  }
  nu.prototype.render = Vo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = qt();
    v0(n, a, e, t, null, null);
  }, nu.prototype.unmount = Vo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      v0(e.current, 2, null, e, null, null), Lr(), t[La] = null;
    }
  };
  function nu(e) {
    this._internalRoot = e;
  }
  nu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Hc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ia.length && t !== 0 && t < ia[n].priority; n++) ;
      ia.splice(n, 0, e), n === 0 && T0(e);
    }
  };
  var _0 = s.version;
  if (_0 !== "19.2.3")
    throw Error(
      c(
        527,
        _0,
        "19.2.3"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Mp = {
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
        _l = au.inject(
          Mp
        ), Dt = au;
      } catch {
      }
  }
  return xi.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", i = Ld, u = Hd, f = Bd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = p0(
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
      N0
    ), e[La] = t.current, To(e), new Vo(t);
  }, xi.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, i = "", u = Ld, f = Hd, h = Bd, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), t = p0(
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
      N0
    ), t.context = b0(null), n = t.current, a = qt(), a = Mu(a), i = Vn(a), i.callback = null, Kn(n, i, a), n = a, t.current.lanes = n, Dl(t, n), cn(t), e[La] = t.current, To(e), new nu(t);
  }, xi.version = "19.2.3", xi;
}
var K0;
function wb() {
  if (K0) return Io.exports;
  K0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Io.exports = Sb(), Io.exports;
}
var xb = wb();
function Rb(l = {}) {
  const { nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c } = l, [d, m] = x.useState(!1), p = x.useRef(o);
  p.current = o;
  const b = x.useRef(c);
  return b.current = c, x.useEffect(() => {
    const y = document.createElement("script");
    return y.src = "https://accounts.google.com/gsi/client", s && (y.src += `?hl=${s}`), y.async = !0, y.defer = !0, y.nonce = r, y.onload = () => {
      var v;
      m(!0), (v = p.current) === null || v === void 0 || v.call(p);
    }, y.onerror = () => {
      var v;
      m(!1), (v = b.current) === null || v === void 0 || v.call(b);
    }, document.body.appendChild(y), () => {
      document.body.removeChild(y);
    };
  }, [r]), d;
}
const kh = x.createContext(null);
function Tb({ clientId: l, nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c, children: d }) {
  const m = Rb({
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
function Ab() {
  const l = x.useContext(kh);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function Cb({ flow: l = "implicit", scope: r = "", onSuccess: s, onError: o, onNonOAuthError: c, overrideScope: d, state: m, ...p }) {
  const { clientId: b, scriptLoadedSuccessfully: y } = Ab(), v = x.useRef(), S = x.useRef(s);
  S.current = s;
  const C = x.useRef(o);
  C.current = o;
  const k = x.useRef(c);
  k.current = c, x.useEffect(() => {
    var D, G;
    if (!y)
      return;
    const K = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (G = (D = window?.google) === null || D === void 0 ? void 0 : D.accounts) === null || G === void 0 ? void 0 : G.oauth2[K]({
      client_id: b,
      scope: d ? r : `openid profile email ${r}`,
      callback: (F) => {
        var I, he;
        if (F.error)
          return (I = C.current) === null || I === void 0 ? void 0 : I.call(C, F);
        (he = S.current) === null || he === void 0 || he.call(S, F);
      },
      error_callback: (F) => {
        var I;
        (I = k.current) === null || I === void 0 || I.call(k, F);
      },
      state: m,
      ...p
    });
    v.current = Q;
  }, [b, y, l, r, m]);
  const A = x.useCallback((D) => {
    var G;
    return (G = v.current) === null || G === void 0 ? void 0 : G.requestAccessToken(D);
  }, []), j = x.useCallback(() => {
    var D;
    return (D = v.current) === null || D === void 0 ? void 0 : D.requestCode();
  }, []);
  return l === "implicit" ? A : j;
}
var re = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(re || {}), gt = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(gt || {}), at = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(at || {}), Ft = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(Ft || {}), wc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(wc || {}), ua = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(ua || {}), _i = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(_i || {});
const ve = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, Ye = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, du = {
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
}, Ru = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, iu = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ci = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, El = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Q0 = /[!@#$%^&*._-]/, Z0 = /^[A-Za-z0-9!@#$%^&*._-]+$/, Oi = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, Nb = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Ri = {
  COURSES: "/courses"
}, Fe = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, Mn = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, _b = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Ob = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, Ve = {
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
  RESET_LINK_FAILED: "Failed to send reset link. Please try again.",
  // Brand Configuration Errors
  BRAND_CONFIG_TITLE: "We're having trouble signing you in",
  BRAND_CONFIG_MESSAGE: "It looks like this sign-in form isn't set up correctly for this site. Please contact support if this issue persists."
}, vu = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, Qe = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]",
  BRAND_CONFIG: "[BrandConfig]"
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
  ariaLabel: b,
  mainButtonStyle: y
}) => {
  const v = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", S = {
    [gt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [gt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [gt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, C = m ? `identity-widget-button ${v} ${S[c]} ${m}` : `identity-widget-button ${v} ${S[c]}`, k = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...m ? m.split(/\s+/).map((j) => j.trim()).filter((j) => j.startsWith("identity-widget-")) : []
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
      "aria-label": b || (typeof l == "string" ? l : void 0),
      "aria-disabled": s,
      style: { ...y, borderStyle: "solid !important" },
      children: p || l
    }
  );
}, nn = x.forwardRef((l, r) => {
  const {
    label: s,
    startIcon: o,
    endIcon: c,
    error: d,
    helperText: m,
    optional: p,
    className: b,
    options: y,
    id: v,
    ...S
  } = l, C = !!d || !!m, k = S.type === "select" || !!y, A = v || `input-${Math.random().toString(36).substr(2, 9)}`, j = `${A}-error`, D = `${A}-helper`;
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${b || ""}`,
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
                  "aria-label": typeof s == "string" ? s : S["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? j : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: C ? "#d64545" : "#cbd5d5",
                    ...S.style
                  },
                  ...S,
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
                  "aria-label": typeof s == "string" ? s : S["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? j : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: C ? "#d64545" : "#cbd5d5",
                    ...S.style
                  },
                  ...S
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
            id: j,
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
}), Db = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", dn = ({
  type: l,
  title: r,
  message: s,
  actionText: o,
  onActionClick: c,
  onClose: d,
  className: m = "",
  children: p
}) => {
  const b = () => {
    switch (l) {
      case re.SUCCESS:
        return {
          bg: "bg-green-50!",
          border: "border-l-4! border-l-green-500!",
          titleText: "text-green-900!",
          text: "text-green-700!",
          iconBg: "bg-green-100!",
          iconColor: "text-green-600!",
          actionColor: "text-green-700!",
          actionHover: "hover:text-green-800!",
          closeButtonHover: "hover:text-green-800!"
        };
      case re.WARNING:
        return {
          bg: "bg-yellow-50!",
          border: "border-l-4! border-l-yellow-500!",
          titleText: "text-yellow-900!",
          text: "text-yellow-700!",
          iconBg: "bg-yellow-100!",
          iconColor: "text-yellow-600!",
          actionColor: "text-yellow-700!",
          actionHover: "hover:text-yellow-800!",
          closeButtonHover: "hover:text-yellow-800!"
        };
      case re.ERROR:
        return {
          bg: "bg-red-50!",
          border: "border-l-4! border-l-red-500!",
          titleText: "text-red-900!",
          text: "text-red-700!",
          iconBg: "bg-red-100!",
          iconColor: "text-red-600!",
          actionColor: "text-red-700!",
          actionHover: "hover:text-red-800!",
          closeButtonHover: "hover:text-red-800!"
        };
      case re.INFO:
      default:
        return {
          bg: "bg-cyan-50!",
          border: "border-l-4! border-l-cyan-500!",
          titleText: "text-gray-900!",
          text: "text-gray-600!",
          iconBg: "bg-cyan-100!",
          iconColor: "text-cyan-600!",
          actionColor: "text-cyan-600!",
          actionHover: "hover:text-cyan-700!",
          closeButtonHover: "hover:text-cyan-700!"
        };
    }
  }, y = () => {
    switch (l) {
      case re.SUCCESS:
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
      case re.WARNING:
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
      case re.ERROR:
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
      case re.INFO:
      default:
        return /* @__PURE__ */ g.jsx(
          "img",
          {
            part: "identity-widget-banner-icon-image",
            src: Db,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, v = b(), S = () => {
    switch (l) {
      case re.ERROR:
        return ua.ALERT;
      case re.WARNING:
      case re.INFO:
        return ua.STATUS;
      case re.SUCCESS:
        return ua.STATUS;
      default:
        return ua.STATUS;
    }
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: S(),
      "aria-live": l === re.ERROR ? _i.ASSERTIVE : _i.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! ${r ? "items-start!" : "items-center!"} max-[500px]:items-start! py-3! px-4! rounded! ${v.bg} ${v.border} ${m}`,
      children: [
        /* @__PURE__ */ g.jsx(
          "div",
          {
            part: "identity-widget-banner-icon",
            className: `identity-widget-banner-icon flex-shrink-0! ${r ? "mt-0.5!" : ""} ${v.iconColor}!`,
            "aria-hidden": "true",
            children: y()
          }
        ),
        /* @__PURE__ */ g.jsxs(
          "div",
          {
            part: "identity-widget-banner-content",
            className: "identity-widget-banner-content ml-3! flex-1! flex! flex-col! gap-0.5!",
            children: [
              r && /* @__PURE__ */ g.jsx(
                "span",
                {
                  part: "identity-widget-banner-title",
                  className: `identity-widget-banner-title text-sm! font-bold! ${v.titleText}`,
                  children: r
                }
              ),
              /* @__PURE__ */ g.jsxs(
                "div",
                {
                  part: "identity-widget-banner-message-row",
                  className: "identity-widget-banner-message-row flex! items-center! gap-2! flex-wrap!",
                  children: [
                    /* @__PURE__ */ g.jsx(
                      "span",
                      {
                        part: "identity-widget-banner-message",
                        className: `identity-widget-banner-message text-sm! font-medium! ${v.text}`,
                        children: s
                      }
                    ),
                    o && c && /* @__PURE__ */ g.jsx(
                      "button",
                      {
                        part: "identity-widget-banner-action",
                        type: "button",
                        onClick: c,
                        "aria-label": o,
                        className: `identity-widget-banner-action text-sm! font-medium! ${v.actionColor} ${v.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! max-[500px]:whitespace-normal! shadow-none!`,
                        children: o
                      }
                    ),
                    o && !c && /* @__PURE__ */ g.jsx(
                      "span",
                      {
                        part: "identity-widget-banner-action",
                        className: `identity-widget-banner-action text-sm! font-semibold! ${v.actionColor}`,
                        children: o
                      }
                    ),
                    p
                  ]
                }
              )
            ]
          }
        ),
        d && /* @__PURE__ */ g.jsxs(
          "button",
          {
            part: "identity-widget-banner-close",
            type: "button",
            onClick: d,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${v.iconColor} ${v.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
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
}, oc = ({ type: l, message: r, duration: s = 5e3, onClose: o, className: c = "" }) => {
  const [d, m] = x.useState(!1), [p, b] = x.useState(!1);
  x.useEffect(() => {
    setTimeout(() => m(!0), Oi.ANIMATION_ENTRANCE_DELAY);
    const A = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(A);
  }, [s]);
  const y = () => {
    b(!0), setTimeout(() => {
      m(!1), o && o();
    }, Oi.ANIMATION_EXIT_DURATION);
  }, v = () => {
    switch (l) {
      case re.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case re.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case re.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      case re.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, S = () => {
    switch (l) {
      case re.SUCCESS:
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
      case re.WARNING:
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
      case re.ERROR:
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
      case re.INFO:
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
  }, C = v(), k = () => {
    switch (l) {
      case re.ERROR:
        return ua.ALERT;
      case re.WARNING:
      case re.INFO:
      case re.SUCCESS:
        return ua.STATUS;
      default:
        return ua.STATUS;
    }
  };
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: k(),
      "aria-live": l === re.ERROR ? _i.ASSERTIVE : _i.POLITE,
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
                children: S()
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
class Ai extends Error {
}
Ai.prototype.name = "InvalidTokenError";
function Ub(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, s) => {
    let o = s.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function Mb(l) {
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
    return Ub(r);
  } catch {
    return atob(r);
  }
}
function zi(l, r) {
  if (typeof l != "string")
    throw new Ai("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, o = l.split(".")[s];
  if (typeof o != "string")
    throw new Ai(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = Mb(o);
  } catch (d) {
    throw new Ai(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ai(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Yh() {
  const l = window.location.hostname;
  if (l === Mn.HOSTNAME || l === Mn.IP || Mn.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function jb() {
  const l = window.location.hostname;
  return l === Mn.HOSTNAME || l === Mn.IP || Mn.IP_PATTERN.test(l) || l.startsWith(`${Fe.DEV}.`) || l.startsWith(`${Fe.DEV}-`) ? Ft.DEV : l.startsWith(`${Fe.TEST}.`) || l.startsWith(`${Fe.TEST}-`) ? Ft.TEST : l.startsWith(`${Fe.STAGE}.`) || l.startsWith(`${Fe.STAGE}-`) ? Ft.STAGE : Ft.PROD;
}
function uu() {
  const l = window.location.href, r = new URL(l), s = r.hostname;
  if (s.startsWith(`${Fe.DEV}.`)) {
    const o = s.replace(`${Fe.DEV}.`, `${Fe.DEV_LEARN}.`);
    return `${r.protocol}//${o}${Ri.COURSES}`;
  } else if (s.startsWith(`${Fe.TEST}.`)) {
    const o = s.replace(`${Fe.TEST}.`, `${Fe.TEST_LEARN}.`);
    return `${r.protocol}//${o}${Ri.COURSES}`;
  } else if (s.startsWith(`${Fe.STAGE}.`)) {
    const o = s.replace(`${Fe.STAGE}.`, `${Fe.STAGE_LEARN}.`);
    return `${r.protocol}//${o}${Ri.COURSES}`;
  } else if (s.split(".").length === 2) {
    const c = `${Fe.LEARN}.${s}`;
    return `${r.protocol}//${c}${Ri.COURSES}`;
  } else
    return `${r.protocol}//${s}${Ri.COURSES}`;
}
function _a(l, r, s, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + s);
  const d = Yh(), m = d ? `; domain=${d}` : "", p = window.location.protocol === "https:" ? "; secure" : "", b = o ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${b}; expires=${c.toUTCString()}; path=/${m}${p}; SameSite=Strict`;
}
function Nt(l, r = !0) {
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
var J0 = {};
const { toString: zb } = Object.prototype, { getPrototypeOf: xc } = Object, { iterator: Tu, toStringTag: Vh } = Symbol, Au = /* @__PURE__ */ ((l) => (r) => {
  const s = zb.call(r);
  return l[s] || (l[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ln = (l) => (l = l.toLowerCase(), (r) => Au(r) === l), Cu = (l) => (r) => typeof r === l, { isArray: Al } = Array, wl = Cu("undefined");
function Li(l) {
  return l !== null && !wl(l) && l.constructor !== null && !wl(l.constructor) && _t(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const Kh = ln("ArrayBuffer");
function Lb(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Kh(l.buffer), r;
}
const Hb = Cu("string"), _t = Cu("function"), Qh = Cu("number"), Hi = (l) => l !== null && typeof l == "object", Bb = (l) => l === !0 || l === !1, mu = (l) => {
  if (Au(l) !== "object")
    return !1;
  const r = xc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Vh in l) && !(Tu in l);
}, qb = (l) => {
  if (!Hi(l) || Li(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, kb = ln("Date"), Gb = ln("File"), Yb = ln("Blob"), Xb = ln("FileList"), Vb = (l) => Hi(l) && _t(l.pipe), Kb = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || _t(l.append) && ((r = Au(l)) === "formdata" || // detect form-data instance
  r === "object" && _t(l.toString) && l.toString() === "[object FormData]"));
}, Qb = ln("URLSearchParams"), [Zb, Jb, $b, Fb] = ["ReadableStream", "Request", "Response", "Headers"].map(ln), Ib = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bi(l, r, { allOwnKeys: s = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let o, c;
  if (typeof l != "object" && (l = [l]), Al(l))
    for (o = 0, c = l.length; o < c; o++)
      r.call(null, l[o], o, l);
  else {
    if (Li(l))
      return;
    const d = s ? Object.getOwnPropertyNames(l) : Object.keys(l), m = d.length;
    let p;
    for (o = 0; o < m; o++)
      p = d[o], r.call(null, l[p], p, l);
  }
}
function Zh(l, r) {
  if (Li(l))
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
function cc() {
  const { caseless: l, skipUndefined: r } = Jh(this) && this || {}, s = {}, o = (c, d) => {
    const m = l && Zh(s, d) || d;
    mu(s[m]) && mu(c) ? s[m] = cc(s[m], c) : mu(c) ? s[m] = cc({}, c) : Al(c) ? s[m] = c.slice() : (!r || !wl(c)) && (s[m] = c);
  };
  for (let c = 0, d = arguments.length; c < d; c++)
    arguments[c] && Bi(arguments[c], o);
  return s;
}
const Wb = (l, r, s, { allOwnKeys: o } = {}) => (Bi(r, (c, d) => {
  s && _t(c) ? l[d] = Xh(c, s) : l[d] = c;
}, { allOwnKeys: o }), l), Pb = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), ev = (l, r, s, o) => {
  l.prototype = Object.create(r.prototype, o), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: r.prototype
  }), s && Object.assign(l.prototype, s);
}, tv = (l, r, s, o) => {
  let c, d, m;
  const p = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), d = c.length; d-- > 0; )
      m = c[d], (!o || o(m, l, r)) && !p[m] && (r[m] = l[m], p[m] = !0);
    l = s !== !1 && xc(l);
  } while (l && (!s || s(l, r)) && l !== Object.prototype);
  return r;
}, nv = (l, r, s) => {
  l = String(l), (s === void 0 || s > l.length) && (s = l.length), s -= r.length;
  const o = l.indexOf(r, s);
  return o !== -1 && o === s;
}, av = (l) => {
  if (!l) return null;
  if (Al(l)) return l;
  let r = l.length;
  if (!Qh(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = l[r];
  return s;
}, lv = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && xc(Uint8Array)), iv = (l, r) => {
  const o = (l && l[Tu]).call(l);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const d = c.value;
    r.call(l, d[0], d[1]);
  }
}, rv = (l, r) => {
  let s;
  const o = [];
  for (; (s = l.exec(r)) !== null; )
    o.push(s);
  return o;
}, uv = ln("HTMLFormElement"), sv = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, c) {
    return o.toUpperCase() + c;
  }
), $0 = (({ hasOwnProperty: l }) => (r, s) => l.call(r, s))(Object.prototype), ov = ln("RegExp"), $h = (l, r) => {
  const s = Object.getOwnPropertyDescriptors(l), o = {};
  Bi(s, (c, d) => {
    let m;
    (m = r(c, d, l)) !== !1 && (o[d] = m || c);
  }), Object.defineProperties(l, o);
}, cv = (l) => {
  $h(l, (r, s) => {
    if (_t(l) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const o = l[s];
    if (_t(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, fv = (l, r) => {
  const s = {}, o = (c) => {
    c.forEach((d) => {
      s[d] = !0;
    });
  };
  return Al(l) ? o(l) : o(String(l).split(r)), s;
}, dv = () => {
}, mv = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function hv(l) {
  return !!(l && _t(l.append) && l[Vh] === "FormData" && l[Tu]);
}
const gv = (l) => {
  const r = new Array(10), s = (o, c) => {
    if (Hi(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (Li(o))
        return o;
      if (!("toJSON" in o)) {
        r[c] = o;
        const d = Al(o) ? [] : {};
        return Bi(o, (m, p) => {
          const b = s(m, c + 1);
          !wl(b) && (d[p] = b);
        }), r[c] = void 0, d;
      }
    }
    return o;
  };
  return s(l, 0);
}, yv = ln("AsyncFunction"), pv = (l) => l && (Hi(l) || _t(l)) && _t(l.then) && _t(l.catch), Fh = ((l, r) => l ? setImmediate : r ? ((s, o) => (Oa.addEventListener("message", ({ source: c, data: d }) => {
  c === Oa && d === s && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), Oa.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  _t(Oa.postMessage)
), bv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oa) : typeof J0 < "u" && J0.nextTick || Fh, vv = (l) => l != null && _t(l[Tu]), U = {
  isArray: Al,
  isArrayBuffer: Kh,
  isBuffer: Li,
  isFormData: Kb,
  isArrayBufferView: Lb,
  isString: Hb,
  isNumber: Qh,
  isBoolean: Bb,
  isObject: Hi,
  isPlainObject: mu,
  isEmptyObject: qb,
  isReadableStream: Zb,
  isRequest: Jb,
  isResponse: $b,
  isHeaders: Fb,
  isUndefined: wl,
  isDate: kb,
  isFile: Gb,
  isBlob: Yb,
  isRegExp: ov,
  isFunction: _t,
  isStream: Vb,
  isURLSearchParams: Qb,
  isTypedArray: lv,
  isFileList: Xb,
  forEach: Bi,
  merge: cc,
  extend: Wb,
  trim: Ib,
  stripBOM: Pb,
  inherits: ev,
  toFlatObject: tv,
  kindOf: Au,
  kindOfTest: ln,
  endsWith: nv,
  toArray: av,
  forEachEntry: iv,
  matchAll: rv,
  isHTMLForm: uv,
  hasOwnProperty: $0,
  hasOwnProp: $0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $h,
  freezeMethods: cv,
  toObjectSet: fv,
  toCamelCase: sv,
  noop: dv,
  toFiniteNumber: mv,
  findKey: Zh,
  global: Oa,
  isContextDefined: Jh,
  isSpecCompliantForm: hv,
  toJSONObject: gv,
  isAsyncFn: yv,
  isThenable: pv,
  setImmediate: Fh,
  asap: bv,
  isIterable: vv
};
function de(l, r, s, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
}
U.inherits(de, Error, {
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
const Ih = de.prototype, Wh = {};
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
  Wh[l] = { value: l };
});
Object.defineProperties(de, Wh);
Object.defineProperty(Ih, "isAxiosError", { value: !0 });
de.from = (l, r, s, o, c, d) => {
  const m = Object.create(Ih);
  U.toFlatObject(l, m, function(v) {
    return v !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = l && l.message ? l.message : "Error", b = r == null && l ? l.code : r;
  return de.call(m, p, b, s, o, c), l && m.cause == null && Object.defineProperty(m, "cause", { value: l, configurable: !0 }), m.name = l && l.name || "Error", d && Object.assign(m, d), m;
};
const Ev = null;
function fc(l) {
  return U.isPlainObject(l) || U.isArray(l);
}
function Ph(l) {
  return U.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function F0(l, r, s) {
  return l ? l.concat(r).map(function(c, d) {
    return c = Ph(c), !s && d ? "[" + c + "]" : c;
  }).join(s ? "." : "") : r;
}
function Sv(l) {
  return U.isArray(l) && !l.some(fc);
}
const wv = U.toFlatObject(U, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Nu(l, r, s) {
  if (!U.isObject(l))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = U.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, D) {
    return !U.isUndefined(D[j]);
  });
  const o = s.metaTokens, c = s.visitor || v, d = s.dots, m = s.indexes, b = (s.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(r);
  if (!U.isFunction(c))
    throw new TypeError("visitor must be a function");
  function y(A) {
    if (A === null) return "";
    if (U.isDate(A))
      return A.toISOString();
    if (U.isBoolean(A))
      return A.toString();
    if (!b && U.isBlob(A))
      throw new de("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(A) || U.isTypedArray(A) ? b && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function v(A, j, D) {
    let G = A;
    if (A && !D && typeof A == "object") {
      if (U.endsWith(j, "{}"))
        j = o ? j : j.slice(0, -2), A = JSON.stringify(A);
      else if (U.isArray(A) && Sv(A) || (U.isFileList(A) || U.endsWith(j, "[]")) && (G = U.toArray(A)))
        return j = Ph(j), G.forEach(function(Q, F) {
          !(U.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? F0([j], F, d) : m === null ? j : j + "[]",
            y(Q)
          );
        }), !1;
    }
    return fc(A) ? !0 : (r.append(F0(D, j, d), y(A)), !1);
  }
  const S = [], C = Object.assign(wv, {
    defaultVisitor: v,
    convertValue: y,
    isVisitable: fc
  });
  function k(A, j) {
    if (!U.isUndefined(A)) {
      if (S.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      S.push(A), U.forEach(A, function(G, K) {
        (!(U.isUndefined(G) || G === null) && c.call(
          r,
          G,
          U.isString(K) ? K.trim() : K,
          j,
          C
        )) === !0 && k(G, j ? j.concat(K) : [K]);
      }), S.pop();
    }
  }
  if (!U.isObject(l))
    throw new TypeError("data must be an object");
  return k(l), r;
}
function I0(l) {
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
  this._pairs = [], l && Nu(l, this, r);
}
const eg = Rc.prototype;
eg.append = function(r, s) {
  this._pairs.push([r, s]);
};
eg.toString = function(r) {
  const s = r ? function(o) {
    return r.call(this, o, I0);
  } : I0;
  return this._pairs.map(function(c) {
    return s(c[0]) + "=" + s(c[1]);
  }, "").join("&");
};
function xv(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function tg(l, r, s) {
  if (!r)
    return l;
  const o = s && s.encode || xv;
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
}, Rv = typeof URLSearchParams < "u" ? URLSearchParams : Rc, Tv = typeof FormData < "u" ? FormData : null, Av = typeof Blob < "u" ? Blob : null, Cv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rv,
    FormData: Tv,
    Blob: Av
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Tc = typeof window < "u" && typeof document < "u", dc = typeof navigator == "object" && navigator || void 0, Nv = Tc && (!dc || ["ReactNative", "NativeScript", "NS"].indexOf(dc.product) < 0), _v = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ov = Tc && window.location.href || "http://localhost", Dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tc,
  hasStandardBrowserEnv: Nv,
  hasStandardBrowserWebWorkerEnv: _v,
  navigator: dc,
  origin: Ov
}, Symbol.toStringTag, { value: "Module" })), pt = {
  ...Dv,
  ...Cv
};
function Uv(l, r) {
  return Nu(l, new pt.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return pt.isNode && U.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Mv(l) {
  return U.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function jv(l) {
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
    const p = Number.isFinite(+m), b = d >= s.length;
    return m = !m && U.isArray(c) ? c.length : m, b ? (U.hasOwnProp(c, m) ? c[m] = [c[m], o] : c[m] = o, !p) : ((!c[m] || !U.isObject(c[m])) && (c[m] = []), r(s, o, c[m], d) && U.isArray(c[m]) && (c[m] = jv(c[m])), !p);
  }
  if (U.isFormData(l) && U.isFunction(l.entries)) {
    const s = {};
    return U.forEachEntry(l, (o, c) => {
      r(Mv(o), c, s, 0);
    }), s;
  }
  return null;
}
function zv(l, r, s) {
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
        return Uv(r, this.formSerializer).toString();
      if ((p = U.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return Nu(
          p ? { "files[]": r } : r,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return d || c ? (s.setContentType("application/json", !1), zv(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || qi.transitional, o = s && s.forcedJSONParsing, c = this.responseType === "json";
    if (U.isResponse(r) || U.isReadableStream(r))
      return r;
    if (r && U.isString(r) && (o && !this.responseType || c)) {
      const m = !(s && s.silentJSONParsing) && c;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (p) {
        if (m)
          throw p.name === "SyntaxError" ? de.from(p, de.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
  qi.headers[l] = {};
});
const Lv = U.toObjectSet([
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
]), Hv = (l) => {
  const r = {};
  let s, o, c;
  return l && l.split(`
`).forEach(function(m) {
    c = m.indexOf(":"), s = m.substring(0, c).trim().toLowerCase(), o = m.substring(c + 1).trim(), !(!s || r[s] && Lv[s]) && (s === "set-cookie" ? r[s] ? r[s].push(o) : r[s] = [o] : r[s] = r[s] ? r[s] + ", " + o : o);
  }), r;
}, P0 = /* @__PURE__ */ Symbol("internals");
function Ti(l) {
  return l && String(l).trim().toLowerCase();
}
function hu(l) {
  return l === !1 || l == null ? l : U.isArray(l) ? l.map(hu) : String(l);
}
function Bv(l) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = s.exec(l); )
    r[o[1]] = o[2];
  return r;
}
const qv = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
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
function kv(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, o) => s.toUpperCase() + o);
}
function Gv(l, r) {
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
let Ot = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, o) {
    const c = this;
    function d(p, b, y) {
      const v = Ti(b);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const S = U.findKey(c, v);
      (!S || c[S] === void 0 || y === !0 || y === void 0 && c[S] !== !1) && (c[S || b] = hu(p));
    }
    const m = (p, b) => U.forEach(p, (y, v) => d(y, v, b));
    if (U.isPlainObject(r) || r instanceof this.constructor)
      m(r, s);
    else if (U.isString(r) && (r = r.trim()) && !qv(r))
      m(Hv(r), s);
    else if (U.isObject(r) && U.isIterable(r)) {
      let p = {}, b, y;
      for (const v of r) {
        if (!U.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = v[0]] = (b = p[y]) ? U.isArray(b) ? [...b, v[1]] : [b, v[1]] : v[1];
      }
      m(p, s);
    } else
      r != null && d(s, r, o);
    return this;
  }
  get(r, s) {
    if (r = Ti(r), r) {
      const o = U.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!s)
          return c;
        if (s === !0)
          return Bv(c);
        if (U.isFunction(s))
          return s.call(this, c, o);
        if (U.isRegExp(s))
          return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = Ti(r), r) {
      const o = U.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!s || ac(this, this[o], o, s)));
    }
    return !1;
  }
  delete(r, s) {
    const o = this;
    let c = !1;
    function d(m) {
      if (m = Ti(m), m) {
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
        s[m] = hu(c), delete s[d];
        return;
      }
      const p = r ? kv(d) : String(d).trim();
      p !== d && delete s[d], s[p] = hu(c), o[p] = !0;
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
    const o = (this[P0] = this[P0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function d(m) {
      const p = Ti(m);
      o[p] || (Gv(c, m), o[p] = !0);
    }
    return U.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
Ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Ot.prototype, ({ value: l }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(o) {
      this[s] = o;
    }
  };
});
U.freezeMethods(Ot);
function lc(l, r) {
  const s = this || qi, o = r || s, c = Ot.from(o.headers);
  let d = o.data;
  return U.forEach(l, function(p) {
    d = p.call(s, d, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), d;
}
function lg(l) {
  return !!(l && l.__CANCEL__);
}
function Cl(l, r, s) {
  de.call(this, l ?? "canceled", de.ERR_CANCELED, r, s), this.name = "CanceledError";
}
U.inherits(Cl, de, {
  __CANCEL__: !0
});
function ig(l, r, s) {
  const o = s.config.validateStatus;
  !s.status || !o || o(s.status) ? l(s) : r(new de(
    "Request failed with status code " + s.status,
    [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function Yv(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function Xv(l, r) {
  l = l || 10;
  const s = new Array(l), o = new Array(l);
  let c = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(b) {
    const y = Date.now(), v = o[d];
    m || (m = y), s[c] = b, o[c] = y;
    let S = d, C = 0;
    for (; S !== c; )
      C += s[S++], S = S % l;
    if (c = (c + 1) % l, c === d && (d = (d + 1) % l), y - m < r)
      return;
    const k = v && y - v;
    return k ? Math.round(C * 1e3 / k) : void 0;
  };
}
function Vv(l, r) {
  let s = 0, o = 1e3 / r, c, d;
  const m = (y, v = Date.now()) => {
    s = v, c = null, d && (clearTimeout(d), d = null), l(...y);
  };
  return [(...y) => {
    const v = Date.now(), S = v - s;
    S >= o ? m(y, v) : (c = y, d || (d = setTimeout(() => {
      d = null, m(c);
    }, o - S)));
  }, () => c && m(c)];
}
const Eu = (l, r, s = 3) => {
  let o = 0;
  const c = Xv(50, 250);
  return Vv((d) => {
    const m = d.loaded, p = d.lengthComputable ? d.total : void 0, b = m - o, y = c(b), v = m <= p;
    o = m;
    const S = {
      loaded: m,
      total: p,
      progress: p ? m / p : void 0,
      bytes: b,
      rate: y || void 0,
      estimated: y && p && v ? (p - m) / y : void 0,
      event: d,
      lengthComputable: p != null,
      [r ? "download" : "upload"]: !0
    };
    l(S);
  }, s);
}, eh = (l, r) => {
  const s = l != null;
  return [(o) => r[0]({
    lengthComputable: s,
    total: l,
    loaded: o
  }), r[1]];
}, th = (l) => (...r) => U.asap(() => l(...r)), Kv = pt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (s) => (s = new URL(s, pt.origin), l.protocol === s.protocol && l.host === s.host && (r || l.port === s.port)))(
  new URL(pt.origin),
  pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)
) : () => !0, Qv = pt.hasStandardBrowserEnv ? (
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
function Zv(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Jv(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function rg(l, r, s) {
  let o = !Zv(r);
  return l && (o || s == !1) ? Jv(l, r) : r;
}
const nh = (l) => l instanceof Ot ? { ...l } : l;
function Ua(l, r) {
  r = r || {};
  const s = {};
  function o(y, v, S, C) {
    return U.isPlainObject(y) && U.isPlainObject(v) ? U.merge.call({ caseless: C }, y, v) : U.isPlainObject(v) ? U.merge({}, v) : U.isArray(v) ? v.slice() : v;
  }
  function c(y, v, S, C) {
    if (U.isUndefined(v)) {
      if (!U.isUndefined(y))
        return o(void 0, y, S, C);
    } else return o(y, v, S, C);
  }
  function d(y, v) {
    if (!U.isUndefined(v))
      return o(void 0, v);
  }
  function m(y, v) {
    if (U.isUndefined(v)) {
      if (!U.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, v);
  }
  function p(y, v, S) {
    if (S in r)
      return o(y, v);
    if (S in l)
      return o(void 0, y);
  }
  const b = {
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
    headers: (y, v, S) => c(nh(y), nh(v), S, !0)
  };
  return U.forEach(Object.keys({ ...l, ...r }), function(v) {
    const S = b[v] || c, C = S(l[v], r[v], v);
    U.isUndefined(C) && S !== p || (s[v] = C);
  }), s;
}
const ug = (l) => {
  const r = Ua({}, l);
  let { data: s, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: d, headers: m, auth: p } = r;
  if (r.headers = m = Ot.from(m), r.url = tg(rg(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), p && m.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), U.isFormData(s)) {
    if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (U.isFunction(s.getHeaders)) {
      const b = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(b).forEach(([v, S]) => {
        y.includes(v.toLowerCase()) && m.set(v, S);
      });
    }
  }
  if (pt.hasStandardBrowserEnv && (o && U.isFunction(o) && (o = o(r)), o || o !== !1 && Kv(r.url))) {
    const b = c && d && Qv.read(d);
    b && m.set(c, b);
  }
  return r;
}, $v = typeof XMLHttpRequest < "u", Fv = $v && function(l) {
  return new Promise(function(s, o) {
    const c = ug(l);
    let d = c.data;
    const m = Ot.from(c.headers).normalize();
    let { responseType: p, onUploadProgress: b, onDownloadProgress: y } = c, v, S, C, k, A;
    function j() {
      k && k(), A && A(), c.cancelToken && c.cancelToken.unsubscribe(v), c.signal && c.signal.removeEventListener("abort", v);
    }
    let D = new XMLHttpRequest();
    D.open(c.method.toUpperCase(), c.url, !0), D.timeout = c.timeout;
    function G() {
      if (!D)
        return;
      const Q = Ot.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), I = {
        data: !p || p === "text" || p === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: Q,
        config: l,
        request: D
      };
      ig(function(ne) {
        s(ne), j();
      }, function(ne) {
        o(ne), j();
      }, I), D = null;
    }
    "onloadend" in D ? D.onloadend = G : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, D.onabort = function() {
      D && (o(new de("Request aborted", de.ECONNABORTED, l, D)), D = null);
    }, D.onerror = function(F) {
      const I = F && F.message ? F.message : "Network Error", he = new de(I, de.ERR_NETWORK, l, D);
      he.event = F || null, o(he), D = null;
    }, D.ontimeout = function() {
      let F = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const I = c.transitional || ng;
      c.timeoutErrorMessage && (F = c.timeoutErrorMessage), o(new de(
        F,
        I.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
        l,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && U.forEach(m.toJSON(), function(F, I) {
      D.setRequestHeader(I, F);
    }), U.isUndefined(c.withCredentials) || (D.withCredentials = !!c.withCredentials), p && p !== "json" && (D.responseType = c.responseType), y && ([C, A] = Eu(y, !0), D.addEventListener("progress", C)), b && D.upload && ([S, k] = Eu(b), D.upload.addEventListener("progress", S), D.upload.addEventListener("loadend", k)), (c.cancelToken || c.signal) && (v = (Q) => {
      D && (o(!Q || Q.type ? new Cl(null, l, D) : Q), D.abort(), D = null);
    }, c.cancelToken && c.cancelToken.subscribe(v), c.signal && (c.signal.aborted ? v() : c.signal.addEventListener("abort", v)));
    const K = Yv(c.url);
    if (K && pt.protocols.indexOf(K) === -1) {
      o(new de("Unsupported protocol " + K + ":", de.ERR_BAD_REQUEST, l));
      return;
    }
    D.send(d || null);
  });
}, Iv = (l, r) => {
  const { length: s } = l = l ? l.filter(Boolean) : [];
  if (r || s) {
    let o = new AbortController(), c;
    const d = function(y) {
      if (!c) {
        c = !0, p();
        const v = y instanceof Error ? y : this.reason;
        o.abort(v instanceof de ? v : new Cl(v instanceof Error ? v.message : v));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new de(`timeout ${r} of ms exceeded`, de.ETIMEDOUT));
    }, r);
    const p = () => {
      l && (m && clearTimeout(m), m = null, l.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), l = null);
    };
    l.forEach((y) => y.addEventListener("abort", d));
    const { signal: b } = o;
    return b.unsubscribe = () => U.asap(p), b;
  }
}, Wv = function* (l, r) {
  let s = l.byteLength;
  if (s < r) {
    yield l;
    return;
  }
  let o = 0, c;
  for (; o < s; )
    c = o + r, yield l.slice(o, c), o = c;
}, Pv = async function* (l, r) {
  for await (const s of eE(l))
    yield* Wv(s, r);
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
}, ah = (l, r, s, o) => {
  const c = Pv(l, r);
  let d = 0, m, p = (b) => {
    m || (m = !0, o && o(b));
  };
  return new ReadableStream({
    async pull(b) {
      try {
        const { done: y, value: v } = await c.next();
        if (y) {
          p(), b.close();
          return;
        }
        let S = v.byteLength;
        if (s) {
          let C = d += S;
          s(C);
        }
        b.enqueue(new Uint8Array(v));
      } catch (y) {
        throw p(y), y;
      }
    },
    cancel(b) {
      return p(b), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, lh = 64 * 1024, { isFunction: ou } = U, tE = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(U.global), {
  ReadableStream: ih,
  TextEncoder: rh
} = U.global, uh = (l, ...r) => {
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
  const p = c && ou(ih), b = c && (typeof rh == "function" ? /* @__PURE__ */ ((A) => (j) => A.encode(j))(new rh()) : async (A) => new Uint8Array(await new s(A).arrayBuffer())), y = d && p && uh(() => {
    let A = !1;
    const j = new s(pt.origin, {
      body: new ih(),
      method: "POST",
      get duplex() {
        return A = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !j;
  }), v = m && p && uh(() => U.isReadableStream(new o("").body)), S = {
    stream: v && ((A) => A.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
    !S[A] && (S[A] = (j, D) => {
      let G = j && j[A];
      if (G)
        return G.call(j);
      throw new de(`Response type '${A}' is not supported`, de.ERR_NOT_SUPPORT, D);
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
      return (await b(A)).byteLength;
  }, k = async (A, j) => {
    const D = U.toFiniteNumber(A.getContentLength());
    return D ?? C(j);
  };
  return async (A) => {
    let {
      url: j,
      method: D,
      data: G,
      signal: K,
      cancelToken: Q,
      timeout: F,
      onDownloadProgress: I,
      onUploadProgress: he,
      responseType: ne,
      headers: W,
      withCredentials: ye = "same-origin",
      fetchOptions: Be
    } = ug(A), it = r || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let Te = Iv([K, Q && Q.toAbortSignal()], F), ue = null;
    const xe = Te && Te.unsubscribe && (() => {
      Te.unsubscribe();
    });
    let _e;
    try {
      if (he && y && D !== "get" && D !== "head" && (_e = await k(W, G)) !== 0) {
        let Oe = new s(j, {
          method: "POST",
          body: G,
          duplex: "half"
        }), w;
        if (U.isFormData(G) && (w = Oe.headers.get("content-type")) && W.setContentType(w), Oe.body) {
          const [L, V] = eh(
            _e,
            Eu(th(he))
          );
          G = ah(Oe.body, lh, L, V);
        }
      }
      U.isString(ye) || (ye = ye ? "include" : "omit");
      const Y = d && "credentials" in s.prototype, q = {
        ...Be,
        signal: Te,
        method: D.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: G,
        duplex: "half",
        credentials: Y ? ye : void 0
      };
      ue = d && new s(j, q);
      let X = await (d ? it(ue, Be) : it(j, q));
      const ge = v && (ne === "stream" || ne === "response");
      if (v && (I || ge && xe)) {
        const Oe = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Oe[Z] = X[Z];
        });
        const w = U.toFiniteNumber(X.headers.get("content-length")), [L, V] = I && eh(
          w,
          Eu(th(I), !0)
        ) || [];
        X = new o(
          ah(X.body, lh, L, () => {
            V && V(), xe && xe();
          }),
          Oe
        );
      }
      ne = ne || "text";
      let Re = await S[U.findKey(S, ne) || "text"](X, A);
      return !ge && xe && xe(), await new Promise((Oe, w) => {
        ig(Oe, w, {
          data: Re,
          headers: Ot.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: A,
          request: ue
        });
      });
    } catch (Y) {
      throw xe && xe(), Y && Y.name === "TypeError" && /Load failed|fetch/i.test(Y.message) ? Object.assign(
        new de("Network Error", de.ERR_NETWORK, A, ue),
        {
          cause: Y.cause || Y
        }
      ) : de.from(Y, Y && Y.code, A, ue);
    }
  };
}, aE = /* @__PURE__ */ new Map(), sg = (l) => {
  let r = l && l.env || {};
  const { fetch: s, Request: o, Response: c } = r, d = [
    o,
    c,
    s
  ];
  let m = d.length, p = m, b, y, v = aE;
  for (; p--; )
    b = d[p], y = v.get(b), y === void 0 && v.set(b, y = p ? /* @__PURE__ */ new Map() : nE(r)), v = y;
  return y;
};
sg();
const Ac = {
  http: Ev,
  xhr: Fv,
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
const sh = (l) => `- ${l}`, lE = (l) => U.isFunction(l) || l === null || l === !1;
function iE(l, r) {
  l = U.isArray(l) ? l : [l];
  const { length: s } = l;
  let o, c;
  const d = {};
  for (let m = 0; m < s; m++) {
    o = l[m];
    let p;
    if (c = o, !lE(o) && (c = Ac[(p = String(o)).toLowerCase()], c === void 0))
      throw new de(`Unknown adapter '${p}'`);
    if (c && (U.isFunction(c) || (c = c.get(r))))
      break;
    d[p || "#" + m] = c;
  }
  if (!c) {
    const m = Object.entries(d).map(
      ([b, y]) => `adapter ${b} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = s ? m.length > 1 ? `since :
` + m.map(sh).join(`
`) : " " + sh(m[0]) : "as no adapter specified";
    throw new de(
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
function oh(l) {
  return ic(l), l.headers = Ot.from(l.headers), l.data = lc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), og.getAdapter(l.adapter || qi.adapter, l)(l).then(function(o) {
    return ic(l), o.data = lc.call(
      l,
      l.transformResponse,
      o
    ), o.headers = Ot.from(o.headers), o;
  }, function(o) {
    return lg(o) || (ic(l), o && o.response && (o.response.data = lc.call(
      l,
      l.transformResponse,
      o.response
    ), o.response.headers = Ot.from(o.response.headers))), Promise.reject(o);
  });
}
const cg = "1.13.2", _u = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  _u[l] = function(o) {
    return typeof o === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const ch = {};
_u.transitional = function(r, s, o) {
  function c(d, m) {
    return "[Axios v" + cg + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, p) => {
    if (r === !1)
      throw new de(
        c(m, " has been removed" + (s ? " in " + s : "")),
        de.ERR_DEPRECATED
      );
    return s && !ch[m] && (ch[m] = !0, console.warn(
      c(
        m,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, m, p) : !0;
  };
};
_u.spelling = function(r) {
  return (s, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function rE(l, r, s) {
  if (typeof l != "object")
    throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(l);
  let c = o.length;
  for (; c-- > 0; ) {
    const d = o[c], m = r[d];
    if (m) {
      const p = l[d], b = p === void 0 || m(p, d, l);
      if (b !== !0)
        throw new de("option " + d + " must be " + b, de.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new de("Unknown option " + d, de.ERR_BAD_OPTION);
  }
}
const gu = {
  assertOptions: rE,
  validators: _u
}, fn = gu.validators;
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
    o !== void 0 && gu.assertOptions(o, {
      silentJSONParsing: fn.transitional(fn.boolean),
      forcedJSONParsing: fn.transitional(fn.boolean),
      clarifyTimeoutError: fn.transitional(fn.boolean)
    }, !1), c != null && (U.isFunction(c) ? s.paramsSerializer = {
      serialize: c
    } : gu.assertOptions(c, {
      encode: fn.function,
      serialize: fn.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), gu.assertOptions(s, {
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
    ), s.headers = Ot.concat(m, d);
    const p = [];
    let b = !0;
    this.interceptors.request.forEach(function(j) {
      typeof j.runWhen == "function" && j.runWhen(s) === !1 || (b = b && j.synchronous, p.unshift(j.fulfilled, j.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let v, S = 0, C;
    if (!b) {
      const A = [oh.bind(this), void 0];
      for (A.unshift(...p), A.push(...y), C = A.length, v = Promise.resolve(s); S < C; )
        v = v.then(A[S++], A[S++]);
      return v;
    }
    C = p.length;
    let k = s;
    for (; S < C; ) {
      const A = p[S++], j = p[S++];
      try {
        k = A(k);
      } catch (D) {
        j.call(this, D);
        break;
      }
    }
    try {
      v = oh.call(this, k);
    } catch (A) {
      return Promise.reject(A);
    }
    for (S = 0, C = y.length; S < C; )
      v = v.then(y[S++], y[S++]);
    return v;
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
function dg(l) {
  const r = new Da(l), s = Xh(Da.prototype.request, r);
  return U.extend(s, Da.prototype, r, { allOwnKeys: !0 }), U.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(c) {
    return dg(Ua(l, c));
  }, s;
}
const He = dg(qi);
He.Axios = Da;
He.CanceledError = Cl;
He.CancelToken = uE;
He.isCancel = lg;
He.VERSION = cg;
He.toFormData = Nu;
He.AxiosError = de;
He.Cancel = He.CanceledError;
He.all = function(r) {
  return Promise.all(r);
};
He.spread = sE;
He.isAxiosError = oE;
He.mergeConfig = Ua;
He.AxiosHeaders = Ot;
He.formToJSON = (l) => ag(U.isHTMLForm(l) ? new FormData(l) : l);
He.getAdapter = og.getAdapter;
He.HttpStatusCode = mc;
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
function fh() {
  localStorage.removeItem(ve.AUTHORITY_OVERRIDE);
}
function mE() {
  const l = dE();
  if (l && Object.values(Ft).includes(l))
    return l;
  const r = window.location.hostname;
  return r === Mn.HOSTNAME || r === Mn.IP || Mn.IP_PATTERN.test(r) || r.startsWith(`${Fe.DEV}.`) || r.startsWith(`${Fe.DEV}-`) ? Ft.DEV : r.startsWith(`${Fe.TEST}.`) || r.startsWith(`${Fe.TEST}-`) ? Ft.TEST : r.startsWith(`${Fe.STAGE}.`) || r.startsWith(`${Fe.STAGE}-`) ? Ft.STAGE : Ft.PROD;
}
function hE(l) {
  if (mg === wc.TEST)
    return "";
  const r = mE();
  return l.startsWith("/global") ? Ob[r] : _b[r];
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
async function ja() {
  const l = localStorage.getItem(ve.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), s = await gE(r?.domain);
  return {
    [du.X_BRAND_ID]: s?.subsidiaryName,
    [du.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [du.X_BRAND_DOMAIN]: r?.domain
  };
}
const yE = async (l, r) => {
  const s = Nl(Tl.AUTH), o = { username: l, password: r };
  try {
    const c = await He.post(s, o, {
      headers: await ja()
    }), d = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: d || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === Ru.UNAUTHORIZED ? new Error(Ve.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(Ve.AUTH_FAILED);
  }
}, pE = async (l) => {
  const r = Nl(Tl.REGISTER);
  try {
    return (await He.post(r, l, {
      headers: await ja()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === Ru.INTERNAL_SERVER_ERROR ? new Error(Ve.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(Ve.REGISTRATION_FAILED);
  }
}, Cc = async (l) => {
  const r = Nl(Tl.CHECK_EMAIL);
  try {
    return (await He.post(
      r,
      { email: l },
      {
        headers: await ja()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, dh = async (l) => {
  const r = Nl(Tl.FORGOT_PASSWORD), s = { email: l };
  try {
    return (await He.post(r, s, {
      headers: await ja()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === Ru.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(Ve.RESET_LINK_FAILED);
  }
}, bE = async (l) => {
  const r = Nl(Tl.REFRESH_TOKEN), s = { refresh_token: l };
  try {
    const o = await He.post(r, s, {
      headers: await ja()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, vE = async (l) => {
  const r = Nl(Tl.LOGOUT), s = { refresh_token: l };
  try {
    return (await He.post(r, s, {
      headers: await ja()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === Ru.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, EE = () => {
  try {
    const l = Nt(Ye.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = zi(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch (l) {
    return console.error(`${Qe.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, Su = () => Nt(Ye.REFRESH_TOKEN, !1) || localStorage.getItem(ve.REFRESH_TOKEN), Di = (l) => {
  try {
    const r = zi(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch {
    return !0;
  }
}, hc = (l) => !Di(l);
let yu = null;
const Sl = () => {
  yu && (clearInterval(yu), yu = null);
}, Nc = async (l) => {
  try {
    const r = l || Su();
    if (!r)
      return !1;
    const s = await bE(r);
    if (!s?.tokens?.access_token)
      return !1;
    const o = s.tokens, c = pu(o.access_token);
    if (!c)
      return !1;
    const d = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    _a(Ye.ACCESS_TOKEN, o.access_token, d, !0);
    const m = s.x_credential || c.decoded.x_credentials;
    if (m && _a(Ye.X_CREDENTIAL, m, d, !1), localStorage.setItem(ve.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      ve.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(ve.REFRESH_TOKEN, o.refresh_token);
      const p = 720 * 60 * 60;
      _a(Ye.REFRESH_TOKEN, o.refresh_token, p, !0), localStorage.getItem(ve.REFRESH_TOKEN_TIME) && localStorage.setItem(ve.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Qe.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, SE = async () => {
  const l = Su();
  if (!(Nt(Ye.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN)) || !l || !hc(l))
    return Sl(), !0;
  Sl();
  const s = 180 * 1e3;
  return yu = setInterval(async () => {
    const o = Su();
    if (!(Nt(Ye.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN))) {
      Sl();
      return;
    }
    if (!o || !hc(o)) {
      Sl();
      return;
    }
    const d = Nt(Ye.X_CREDENTIAL, !1) || Nt(Ye.X_CREDENTIAL_OLD, !1), m = Nt(Ye.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN);
    (!d || Di(d) || !m || Di(m)) && await Nc(o);
  }, s), () => Sl();
}, mh = (l) => {
  try {
    if (!localStorage.getItem(ve.REFRESH_TOKEN_TIME))
      return console.log(
        `${Qe.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Qe.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = Nt(Ye.X_CREDENTIAL, !1) || Nt(Ye.X_CREDENTIAL_OLD, !1), o = Nt(Ye.ACCESS_TOKEN, !1);
    let c = null, d = !1;
    if (o && (c = o), s && (d = !0), c || (c = localStorage.getItem(ve.ACCESS_TOKEN)), !c || !d)
      return !1;
    const m = localStorage.getItem(ve.ACCESS_TOKEN_EXPIRES);
    if (m && Date.now() >= parseInt(m))
      return !1;
    try {
      const p = zi(c), b = Math.floor(Date.now() / 1e3);
      return !(!p.exp || b >= p.exp);
    } catch (p) {
      return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, p), !1;
    }
  } catch (r) {
    return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, wE = async (l) => {
  if (mh(l))
    return !0;
  try {
    if (!localStorage.getItem(ve.REFRESH_TOKEN_TIME))
      return !1;
    const o = Su();
    if (!o || !hc(o))
      return !1;
    const c = Nt(Ye.X_CREDENTIAL, !1) || Nt(Ye.X_CREDENTIAL_OLD, !1), d = Nt(Ye.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN), m = !c || Di(c), p = !d || Di(d);
    return !m && !p || !await Nc(o) ? !1 : mh(l);
  } catch (s) {
    return console.error(
      `${Qe.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      s
    ), !1;
  }
}, xE = () => {
  try {
    const l = localStorage.getItem(ve.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < Nb.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${Qe.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, RE = () => {
  su(Ye.ACCESS_TOKEN), su(Ye.X_CREDENTIAL), su(Ye.X_CREDENTIAL_OLD), su(Ye.REFRESH_TOKEN), [
    ve.REFRESH_TOKEN,
    ve.REFRESH_TOKEN_TIME,
    ve.ACCESS_TOKEN,
    ve.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Qe.AUTH} All authentication tokens and state cleared`);
}, hg = async (l, r, s = !1) => {
  const o = await yE(l, r), { tokens: c, x_credential: d } = o;
  if (c.access_token) {
    const m = zi(c.access_token), p = (m.exp || 0) - Math.floor(Date.now() / 1e3);
    _a(Ye.ACCESS_TOKEN, c.access_token, p, !0);
    const b = d || m.x_credentials;
    b ? (_a(Ye.X_CREDENTIAL, b, p, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), b && _a(Ye.X_CREDENTIAL, b, p, !1), localStorage.setItem(ve.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      ve.ACCESS_TOKEN_EXPIRES,
      (Date.now() + p * 1e3).toString()
    ), localStorage.setItem(ve.REFRESH_TOKEN, c.refresh_token);
    const y = 720 * 60 * 60;
    _a(Ye.REFRESH_TOKEN, c.refresh_token, y, !0), s && c.refresh_token ? (localStorage.setItem(ve.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Qe.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(ve.REFRESH_TOKEN_TIME), console.log(
      `${Qe.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, pu = (l) => {
  try {
    const r = zi(l);
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
      `${Qe.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
};
function _c() {
  const [l, r] = x.useState(!1);
  return x.useEffect(() => {
    ja().then((s) => {
      s[du.X_BRAND_ID] || r(!0);
    }).catch((s) => {
      console.error(Qe.BRAND_CONFIG, "Failed to load brand configuration:", s), r(!0);
    });
  }, []), l;
}
const Ou = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", gc = (l) => {
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
  const [p, b] = x.useState(m), [y, v] = x.useState(""), [S, C] = x.useState(""), [k, A] = x.useState(""), [j, D] = x.useState(!1), [G, K] = x.useState(""), [Q, F] = x.useState(""), [I, he] = x.useState(!1), [ne, W] = x.useState(!1), [ye, Be] = x.useState(!1), [it, Te] = x.useState(!1), [ue, xe] = x.useState(!1), [_e, Y] = x.useState(!1), [q, X] = x.useState(!1), [ge, Re] = x.useState(""), [Oe, w] = x.useState(!1), [L, V] = x.useState(""), [Z, ae] = x.useState(re.INFO), se = x.useRef(null), ce = x.useRef(null), qe = _c(), P = {
    length: k.length >= iu.MIN_LENGTH && k.length <= iu.MAX_LENGTH,
    hasNumber: El.NUMBER.test(k),
    hasUppercase: El.UPPERCASE.test(k),
    hasLowercase: El.LOWERCASE.test(k),
    hasSpecialChar: Q0.test(k),
    onlyAllowedChars: Z0.test(k) || k === "",
    differentFromUsername: p ? k !== p && k !== p.split("@")[0] : !0
  }, Wt = ((oe) => {
    if (!oe) return { strength: "", color: "", width: ru.EMPTY };
    if (P.length && P.hasNumber && P.hasUppercase && P.hasLowercase && P.hasSpecialChar && P.onlyAllowedChars && P.differentFromUsername)
      return {
        strength: tc.STRONG,
        color: nc.STRONG,
        width: ru.STRONG
      };
    let rt = 0;
    return P.length && rt++, P.hasNumber && rt++, P.hasUppercase && rt++, P.hasLowercase && rt++, P.hasSpecialChar && rt++, P.onlyAllowedChars && rt++, P.differentFromUsername && rt++, rt <= 2 ? {
      strength: tc.WEAK,
      color: nc.WEAK,
      width: ru.WEAK
    } : {
      strength: tc.GOOD,
      color: nc.GOOD,
      width: ru.GOOD
    };
  })(k), sa = (oe) => oe ? oe.length < iu.MIN_LENGTH || oe.length > iu.MAX_LENGTH ? { isValid: !1, error: Ve.PASSWORD_LENGTH } : El.UPPERCASE.test(oe) ? El.LOWERCASE.test(oe) ? El.NUMBER.test(oe) ? Q0.test(oe) ? Z0.test(oe) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: Ve.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: Ve.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: Ve.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: Ve.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: Ve.PASSWORD_UPPERCASE
  } : { isValid: !1, error: Ve.PASSWORD_REQUIRED };
  x.useEffect(() => {
    if (!qe) {
      if (ce.current && clearTimeout(ce.current), !p) {
        Te(!1), xe(!1), X(!1), Re("");
        return;
      }
      if (!Ci.test(p)) {
        Te(!1), xe(!1);
        return;
      }
      return ce.current = setTimeout(async () => {
        Y(!0);
        try {
          (await Cc(p)).exists ? (xe(!0), Te(!0)) : (xe(!1), Te(!1));
        } catch (oe) {
          console.error(`${Qe.CREATE_ACCOUNT} Email check failed:`, oe);
          const Et = oe instanceof Error ? oe.message : "Unable to verify email. You can still proceed with registration.";
          X(!0), Re(Et), Te(!0), xe(!1);
        } finally {
          Y(!1);
        }
      }, Oi.EMAIL_CHECK_DEBOUNCE), () => {
        ce.current && clearTimeout(ce.current);
      };
    }
  }, [p, qe]);
  const oa = p && Ci.test(p);
  x.useEffect(() => {
    const oe = (Et) => {
      Et.key === "Escape" && s();
    };
    return document.addEventListener("keydown", oe), () => document.removeEventListener("keydown", oe);
  }, [s]);
  const le = (oe) => {
    oe.target === se.current && s();
  }, Ke = async (oe) => {
    if (oe.preventDefault(), qe) return;
    if (Be(!0), !p || !y || !S) {
      r("Please fill in all required fields");
      return;
    }
    const Et = sa(k);
    if (!Et.isValid) {
      F(Et.error), r(Et.error), D(!1);
      return;
    }
    if (!Ci.test(p)) {
      K(Ve.EMAIL_INVALID), r(Ve.EMAIL_INVALID);
      return;
    }
    D(!0), K(""), V("");
    try {
      const rt = p.split("@")[0], za = await pE({
        username: rt,
        email: p,
        firstName: y,
        lastName: S,
        password: k
      });
      console.log(
        `${Qe.CREATE_ACCOUNT} Registration successful:`,
        za.message
      );
      try {
        const ca = await hg(p, k, Oe);
        l(ca);
      } catch (ca) {
        console.error(
          `${Qe.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ca
        );
        const bt = ca instanceof Error ? ca.message : "Auto-login failed";
        r(bt);
      }
    } catch (rt) {
      console.error(`${Qe.CREATE_ACCOUNT} Registration failed:`, rt);
      const za = rt instanceof Error ? rt.message : Ve.REGISTRATION_FAILED;
      V(za), ae(re.ERROR), r(za);
    } finally {
      D(!1);
    }
  }, rn = (oe) => {
    if (oe.key === "CapsLock" && oe.type === "keydown") {
      W((Et) => !Et);
      return;
    }
    oe.key !== "CapsLock" && W(gc(oe));
  }, Du = (oe) => {
    W(gc(oe));
  }, ki = () => {
    W(!1);
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    L && /* @__PURE__ */ g.jsx(
      oc,
      {
        type: Z,
        message: L,
        duration: Oi.TOAST_DEFAULT_DURATION,
        onClose: () => V("")
      }
    ),
    /* @__PURE__ */ g.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: se,
        onMouseDown: le,
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
                  onSubmit: Ke,
                  className: "identity-widget-create-account-form space-y-4!",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ g.jsx(
                          nn,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: p,
                            onChange: (oe) => {
                              b(oe.target.value), K("");
                            },
                            placeholder: "Enter email address",
                            disabled: j,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: ye && !p ? "Required" : G || "",
                            endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                              _e && /* @__PURE__ */ g.jsx(Gh, {}),
                              !_e && !ue && !q && p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && /* @__PURE__ */ g.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: Ou,
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
                    qe && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: re.ERROR,
                        title: Ve.BRAND_CONFIG_TITLE,
                        message: Ve.BRAND_CONFIG_MESSAGE,
                        className: "identity-widget-create-account-brand-error-banner mb-4!"
                      }
                    ),
                    !qe && it && ue && !q && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: re.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          Te(!1), o(p);
                        },
                        onClose: () => Te(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    !qe && it && q && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: re.ERROR,
                        message: ge,
                        onClose: () => {
                          Te(!1), X(!1), Re("");
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
                            nn,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: y,
                              onChange: (oe) => v(oe.target.value),
                              placeholder: "First Name",
                              disabled: j,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: ye && !y ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ g.jsx(
                            nn,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: S,
                              onChange: (oe) => C(oe.target.value),
                              placeholder: "Last Name",
                              disabled: j,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: ye && !S ? "Required" : ""
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
                                nn,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: I ? "text" : "password",
                                  value: k,
                                  onChange: (oe) => {
                                    A(oe.target.value), F("");
                                  },
                                  onKeyDown: rn,
                                  onKeyUp: rn,
                                  onFocus: Du,
                                  onBlur: ki,
                                  placeholder: "Enter Password...",
                                  disabled: j,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: Q,
                                  endIcon: /* @__PURE__ */ g.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => he(!I),
                                      className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": I ? "Hide password" : "Show password",
                                      children: I ? /* @__PURE__ */ g.jsx(
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
                              ne && /* @__PURE__ */ g.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: vu.CAPS_LOCK_ON
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
                                          width: Wt.width,
                                          backgroundColor: Wt.color
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
                                    style: { color: Wt.color },
                                    children: Wt.strength
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
                                          "data-satisfied": P.length ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.length ? /* @__PURE__ */ g.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${P.length ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": P.hasNumber ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.hasNumber ? /* @__PURE__ */ g.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${P.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": P.hasUppercase ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.hasUppercase ? /* @__PURE__ */ g.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${P.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": P.hasSpecialChar ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.hasSpecialChar ? /* @__PURE__ */ g.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${P.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": P.onlyAllowedChars ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.onlyAllowedChars ? /* @__PURE__ */ g.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${P.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": P.differentFromUsername ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.differentFromUsername ? /* @__PURE__ */ g.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${P.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
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
                                  checked: Oe,
                                  onChange: (oe) => w(oe.target.checked),
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
                        disabled: j || ue || !oa || qe,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                        children: j ? /* @__PURE__ */ g.jsxs(
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
                        disabled: j,
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
    L && /* @__PURE__ */ g.jsx(oc, { message: L, type: Z, onClose: () => V("") })
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
    const p = (b) => {
      b.key === "Escape" && c();
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
                    src: Ou,
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
  handleClose: s,
  onCreateAccount: o
}) => {
  const [c, d] = x.useState(l || ""), [m, p] = x.useState(!1), [b, y] = x.useState(!1), [v, S] = x.useState(""), [C, k] = x.useState(!1), [A, j] = x.useState(!1), [D, G] = x.useState(!1), [K, Q] = x.useState(!1), [F, I] = x.useState(""), [he, ne] = x.useState(!1), W = _c(), ye = x.useRef(null);
  x.useEffect(() => {
    const ue = (xe) => {
      xe.key === "Escape" && s();
    };
    return document.addEventListener("keydown", ue), () => document.removeEventListener("keydown", ue);
  }, [s]), x.useEffect(() => {
    if (W) return;
    const ue = Ci.test(c);
    if (G(ue), !ue || !c) {
      j(!1), Q(!1), I(""), ne(!1);
      return;
    }
    const xe = setTimeout(async () => {
      k(!0);
      try {
        const _e = await Cc(c);
        console.log("[ResetPassword] Email check response:", _e), _e.exists ? (j(!0), ne(!1)) : (j(!1), ne(!0)), console.log("[ResetPassword] Email exists:", _e.exists);
      } catch (_e) {
        console.error("[ResetPassword] Error checking email:", _e);
        const Y = _e instanceof Error ? _e.message : "Unable to verify email. Please try again.";
        Q(!0), I(Y), ne(!0), j(!1);
      } finally {
        k(!1);
      }
    }, Oi.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(xe);
  }, [c, W]);
  const Be = (ue) => {
    ue.target === ye.current && s();
  }, it = async (ue) => {
    if (ue.preventDefault(), !W) {
      if (!c) {
        S(Ve.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await dh(c), console.log("[ResetPassword] Reset link sent to:", c), y(!0);
      } catch (xe) {
        console.error("[ResetPassword] Failed to send reset link:", xe);
        const _e = xe instanceof Error ? xe.message : Ve.RESET_LINK_FAILED;
        S(_e);
      } finally {
        p(!1);
      }
    }
  }, Te = async () => {
    p(!0), S("");
    try {
      await dh(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (ue) {
      console.error("[ResetPassword] Failed to resend reset link:", ue), y(!1);
      const xe = ue instanceof Error ? ue.message : Ve.RESET_LINK_FAILED;
      S(xe);
    } finally {
      p(!1);
    }
  };
  return b ? /* @__PURE__ */ g.jsx(
    AE,
    {
      email: c,
      loading: m,
      onResendLink: Te,
      onBack: r,
      onClose: s
    }
  ) : /* @__PURE__ */ g.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: ye,
      onMouseDown: Be,
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
                onSubmit: it,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ g.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ g.jsx(
                        nn,
                        {
                          label: "Email Address",
                          id: "reset-email",
                          type: "email",
                          value: c,
                          onChange: (ue) => {
                            d(ue.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: m,
                          className: "identity-widget-reset-password-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                            C && /* @__PURE__ */ g.jsx(
                              "div",
                              {
                                part: "identity-widget-reset-password-email-loading",
                                className: "identity-widget-reset-password-email-loading animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!",
                                role: "status",
                                "aria-label": "Checking email"
                              }
                            ),
                            !C && A && D && !K && /* @__PURE__ */ g.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: Ou,
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
                  W && /* @__PURE__ */ g.jsx(
                    dn,
                    {
                      type: re.ERROR,
                      title: Ve.BRAND_CONFIG_TITLE,
                      message: Ve.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-reset-password-brand-error-banner mb-4!"
                    }
                  ),
                  !W && he && !A && D && !K && /* @__PURE__ */ g.jsx(
                    dn,
                    {
                      type: re.INFO,
                      message: vu.EMAIL_NOT_FOUND,
                      actionText: o ? "Let's create one to continue?" : void 0,
                      onActionClick: o ? () => {
                        ne(!1), o();
                      } : void 0,
                      onClose: () => ne(!1),
                      className: "identity-widget-reset-password-email-not-found-banner mb-4!"
                    }
                  ),
                  !W && he && K && /* @__PURE__ */ g.jsx(
                    dn,
                    {
                      type: re.ERROR,
                      message: F,
                      onClose: () => {
                        ne(!1), Q(!1), I("");
                      },
                      className: "identity-widget-reset-password-email-check-error-banner mb-4!"
                    }
                  ),
                  v && /* @__PURE__ */ g.jsx(
                    dn,
                    {
                      type: re.ERROR,
                      message: v,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => S(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    ot,
                    {
                      type: at.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: m || !c || !D || !A || W,
                      className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ResetPassword] Button state:", {
                          loading: m,
                          email: c,
                          isEmailValid: D,
                          emailExists: A
                        });
                      },
                      children: m ? /* @__PURE__ */ g.jsxs(
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
                      disabled: m,
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
}, hh = ({ children: l }) => /* @__PURE__ */ g.jsx(
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
    const b = (y) => {
      y.key === "Escape" && r();
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [r]), x.useEffect(() => {
    let b;
    return c < o.length ? b = setTimeout(() => d((y) => y + 1), 120) : b = setTimeout(() => d(0), 1200), () => clearTimeout(b);
  }, [c]);
  const p = (b) => {
    b.target === s.current && r();
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
                  /* @__PURE__ */ g.jsx("li", { children: "You have multiple accounts" }),
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
                    /* @__PURE__ */ g.jsx(nn, { label: "Email or Username", value: "name@email.com", disabled: !0 }),
                    /* @__PURE__ */ g.jsx(nn, { label: "Password", value: "••••••••", disabled: !0 }),
                    /* @__PURE__ */ g.jsxs("div", { className: "flex! items-center! justify-between! text-sm!", children: [
                      /* @__PURE__ */ g.jsxs("label", { className: "flex! items-center! text-gray-500!", children: [
                        /* @__PURE__ */ g.jsx("input", { type: "checkbox", disabled: !0, className: "mr-2!" }),
                        "Remember me"
                      ] }),
                      /* @__PURE__ */ g.jsx(
                        "span",
                        {
                          className: "relative! inline-flex! items-center!",
                          style: { animation: "helpCenterClick 1.3s ease-in-out infinite" },
                          children: /* @__PURE__ */ g.jsx(ot, { type: at.BUTTON, variant: gt.LINK, disabled: !0, children: "Forgot Password?" })
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
                        nn,
                        {
                          label: "Email Address",
                          value: m,
                          disabled: !0,
                          endIcon: /* @__PURE__ */ g.jsx("span", { className: "text-gray-500! animate-pulse!", children: "|" })
                        }
                      )
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
                  /* @__PURE__ */ g.jsx(nn, { label: "Email Address", value: m, disabled: !0 }),
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
  const [b, y] = x.useState(m), [v, S] = x.useState(""), [C, k] = x.useState(!1), [A, j] = x.useState(!1), [D, G] = x.useState(!1), [K, Q] = x.useState(""), [F, I] = x.useState(!1), [he, ne] = x.useState(!1), [W, ye] = x.useState(!1), [Be, it] = x.useState(!1), [Te, ue] = x.useState(!1), [xe, _e] = x.useState(!1), [Y, q] = x.useState(!1), [X, ge] = x.useState(!1), [Re, Oe] = x.useState(""), [w, L] = x.useState(""), [V, Z] = x.useState(re.INFO), ae = _c(), se = x.useRef(null), ce = x.useRef(null), qe = Cb({
    flow: "auth-code",
    onSuccess: (le) => {
      console.log("[EmbeddedLogin] Google auth-code response received", le), L(
        "Google sign-in completed. Connect this credential to your backend login flow."
      ), Z(re.INFO), Q("");
    },
    onError: (le) => {
      const Ke = le.error_description || le.error || "Google sign-in failed.";
      L(Ke), Z(re.ERROR), r(Ke);
    },
    onNonOAuthError: (le) => {
      const Ke = `Google sign-in failed: ${le.type}`;
      L(Ke), Z(re.ERROR), r(Ke);
    }
  });
  x.useEffect(() => {
    if (!ae) {
      if (ce.current && clearTimeout(ce.current), !b) {
        ue(!1), q(!1), ge(!1), Oe("");
        return;
      }
      if (!b.includes("@")) {
        ue(!0), q(!1);
        return;
      }
      if (!Ci.test(b)) {
        ue(!1), q(!1);
        return;
      }
      return ce.current = setTimeout(async () => {
        _e(!0);
        try {
          (await Cc(b)).exists ? (ue(!0), q(!1)) : (ue(!1), q(!0));
        } catch (le) {
          console.error("[EmbeddedLogin] Email check failed:", le);
          const Ke = le instanceof Error ? le.message : "Unable to verify email. You can still proceed with login.";
          ge(!0), Oe(Ke), q(!0), ue(!1);
        } finally {
          _e(!1);
        }
      }, 500), () => {
        ce.current && clearTimeout(ce.current);
      };
    }
  }, [b, ae]);
  const mn = b && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b);
  x.useEffect(() => {
    const le = (Ke) => {
      Ke.key === "Escape" && s();
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [s]);
  const Wt = (le) => {
    le.target === se.current && s();
  }, sa = async (le) => {
    if (le.preventDefault(), !ae) {
      if (!b || !v) {
        Q("Please enter both username/email and password"), r("Please enter both username/email and password");
        return;
      }
      k(!0), Q("");
      try {
        const Ke = await hg(b, v, F);
        l(Ke);
      } catch (Ke) {
        console.error("[EmbeddedLogin] Login failed:", Ke);
        const rn = Ke instanceof Error ? Ke.message : "Authentication failed";
        Q(rn), L(rn), Z(re.ERROR), r(rn);
      } finally {
        k(!1);
      }
    }
  }, oa = (le) => {
    if (le.key === "CapsLock" && le.type === "keydown") {
      G((Ke) => !Ke);
      return;
    }
    le.key !== "CapsLock" && G(gc(le));
  };
  return W ? /* @__PURE__ */ g.jsx(
    CE,
    {
      email: b,
      onBack: () => ye(!1),
      handleClose: s,
      onCreateAccount: () => {
        ye(!1), ne(!0);
      }
    }
  ) : Be ? /* @__PURE__ */ g.jsx(NE, { onBack: () => it(!1), handleClose: s }) : he ? /* @__PURE__ */ g.jsx(
    TE,
    {
      onSuccess: (le) => {
        ne(!1), l(le);
      },
      onError: r,
      handleClose: s,
      onSignIn: (le) => {
        ne(!1), le && y(le);
      },
      authority: o,
      initialEmail: b
    }
  ) : /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: se,
      onMouseDown: Wt,
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
                  onSubmit: sa,
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
                              onClick: () => qe(),
                              disabled: C || ae,
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
                          nn,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: b,
                            onChange: (le) => y(le.target.value),
                            placeholder: "Enter email or username",
                            disabled: C,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                              xe && /* @__PURE__ */ g.jsx(Gh, {}),
                              !xe && Te && mn && !X && /* @__PURE__ */ g.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: Ou,
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
                    ae && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: re.ERROR,
                        title: Ve.BRAND_CONFIG_TITLE,
                        message: Ve.BRAND_CONFIG_MESSAGE,
                        className: "mb-4!"
                      }
                    ),
                    !ae && Y && !Te && mn && !X && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: re.INFO,
                        message: vu.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          q(!1), ne(!0);
                        },
                        onClose: () => q(!1),
                        className: "mb-4!"
                      }
                    ),
                    !ae && Y && X && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: re.ERROR,
                        message: Re,
                        onClose: () => {
                          q(!1), ge(!1), Oe("");
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
                                nn,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: A ? "text" : "password",
                                  value: v,
                                  onChange: (le) => {
                                    S(le.target.value), Q("");
                                  },
                                  onKeyDown: oa,
                                  onKeyUp: oa,
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
                                      onClick: () => j(!A),
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
                                  children: vu.CAPS_LOCK_ON
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
                                    onChange: (le) => I(le.target.checked),
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
                              onClick: (le) => {
                                le.preventDefault(), ye(!0);
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
                        disabled: C || !b || ae,
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
                        onClick: () => ne(!0),
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
                            onClick: () => it(!0),
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
        w && /* @__PURE__ */ g.jsx(oc, { message: w, type: V, onClose: () => L("") })
      ]
    }
  );
}, DE = (l) => {
  const { authority: r, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = l, [d, m] = x.useState(!1);
  x.useEffect(() => (r ? (fE(r), console.log(`${Qe.AUTH} Authority override set to: ${r}`)) : (fh(), console.log(`${Qe.AUTH} Using automatic authority detection`)), () => {
    fh();
  }), [r]), x.useEffect(() => {
    let v;
    return (async () => {
      const C = await SE();
      typeof C == "function" && (v = C);
    })(), () => {
      v && v();
    };
  }, [d]), x.useEffect(() => {
    (async () => {
      try {
        const S = !EE();
        if (c && c(S), await wE()) {
          m(!0);
          const A = l.redirectUrl || uu();
          if (l.autoRedirection)
            window.location.href = A;
          else if (o && l.redirectUrl) {
            const j = l.redirectUrl || uu(), D = localStorage.getItem(ve.ACCESS_TOKEN);
            if (D) {
              const G = pu(D);
              G && o(j, G);
            }
          }
          return;
        }
        if (xE()) {
          if (await Nc()) {
            const j = localStorage.getItem(ve.ACCESS_TOKEN);
            if (!j)
              return;
            const D = pu(j);
            if (!D)
              return;
            console.log(`${Qe.AUTH} Auto-login successful`), m(!0), c && c(!0);
            const G = l.redirectUrl || uu();
            o && (console.log(
              `${Qe.AUTH} Triggering onRedirect callback with user session:`,
              D
            ), o(G, D)), l.autoRedirection && (window.location.href = G);
          }
        } else
          localStorage.removeItem(ve.REFRESH_TOKEN), localStorage.removeItem(ve.REFRESH_TOKEN_TIME);
      } catch (S) {
        console.error(`${Qe.AUTH} Auto-login failed:`, S), localStorage.removeItem(ve.REFRESH_TOKEN), localStorage.removeItem(ve.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), x.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const p = () => {
    l.handleClose && l.handleClose(), m(!0);
    const v = l.redirectUrl || uu();
    if (o) {
      const S = localStorage.getItem(ve.ACCESS_TOKEN);
      if (S) {
        const C = pu(S);
        C && o(v, C);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = v;
    }, 100);
  }, b = (v) => {
    console.log(`${Qe.AUTH} Embedded login error:`, v);
  }, y = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ g.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ g.jsx(H1, { children: /* @__PURE__ */ g.jsx(
    jh,
    {
      path: "*",
      element: /* @__PURE__ */ g.jsx(x.Fragment, { children: l.showLogin && !d && /* @__PURE__ */ g.jsx(
        OE,
        {
          onSuccess: p,
          onError: b,
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
        (b) => b.folder.toLowerCase() === r.toLowerCase() || b.token.toLowerCase() === r.toLowerCase()
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
      m.styles.forEach((b) => {
        let y = b.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), p.style.setProperty(`--${b.name}`, y);
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
        "googleClientId",
        "redirect-url",
        "login-title",
        "login-subtitle"
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
      s.appendChild(c), this.root = xb.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
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
          const o = Nt(Ye.REFRESH_TOKEN, !0) || localStorage.getItem(ve.REFRESH_TOKEN);
          o ? (await vE(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
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
      const o = this.getAttribute("authority") || jb(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: o,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirect-url") || this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("login-title") || this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("login-subtitle") || this.getAttribute("loginSubtitle") || void 0,
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
        /* @__PURE__ */ g.jsx(Tb, { clientId: s.googleClientId || yh, children: /* @__PURE__ */ g.jsx(ub, { children: /* @__PURE__ */ g.jsx(x.StrictMode, { children: /* @__PURE__ */ g.jsx(DE, { ...s }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
