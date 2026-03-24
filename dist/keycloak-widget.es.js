
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-amber-600:oklch(66.6% .179 58.318);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-4{left:calc(var(--spacing)*4)}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-4{margin-block:calc(var(--spacing)*4)}.my-4\\!{margin-block:calc(var(--spacing)*4)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-0\\.5\\!{margin-top:calc(var(--spacing)*.5)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20{width:calc(var(--spacing)*20)}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl{max-width:var(--container-2xl)}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-default{cursor:default}.cursor-default\\!{cursor:default!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc{list-style-type:disc}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.flex-wrap{flex-wrap:wrap}.flex-wrap\\!{flex-wrap:wrap!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-start{align-items:flex-start}.items-start\\!{align-items:flex-start!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5\\!{gap:calc(var(--spacing)*.5)!important}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\!{gap:calc(var(--spacing)*1)!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.border-l-green-500{border-left-color:var(--color-green-500)}.border-l-green-500\\!{border-left-color:var(--color-green-500)!important}.border-l-red-500{border-left-color:var(--color-red-500)}.border-l-red-500\\!{border-left-color:var(--color-red-500)!important}.border-l-yellow-500{border-left-color:var(--color-yellow-500)}.border-l-yellow-500\\!{border-left-color:var(--color-yellow-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-6{padding:calc(var(--spacing)*6)}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5{padding-inline:calc(var(--spacing)*5)}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4{padding-block:calc(var(--spacing)*4)}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--banner-error-text\\)\\]\\!{color:var(--banner-error-text)!important}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-amber-600{color:var(--color-amber-600)}.text-amber-600\\!{color:var(--color-amber-600)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400{color:var(--color-blue-400)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-green-900\\!{color:var(--color-green-900)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-red-900\\!{color:var(--color-red-900)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-900{color:var(--color-yellow-900)}.text-yellow-900\\!{color:var(--color-yellow-900)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:underline\\!:hover{text-decoration-line:underline!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-30\\!:disabled{opacity:.3!important}.disabled\\:opacity-50:disabled{opacity:.5}@media not all and (min-width:500px){.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
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
var Fo = { exports: {} }, Ni = {};
var D0;
function Hp() {
  if (D0) return Ni;
  D0 = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(o, c, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: l,
      type: o,
      key: h,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return Ni.Fragment = r, Ni.jsx = u, Ni.jsxs = u, Ni;
}
var j0;
function Bp() {
  return j0 || (j0 = 1, Fo.exports = Hp()), Fo.exports;
}
var m = Bp(), Jo = { exports: {} }, ue = {}, U0;
function kp() {
  if (U0) return ue;
  U0 = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function A(w) {
    return w === null || typeof w != "object" ? null : (w = k && w[k] || w["@@iterator"], typeof w == "function" ? w : null);
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
  }, D = Object.assign, X = {};
  function V(w, L, K) {
    this.props = w, this.context = L, this.refs = X, this.updater = K || z;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(w, L) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, L, "setState");
  }, V.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = V.prototype;
  function F(w, L, K) {
    this.props = w, this.context = L, this.refs = X, this.updater = K || z;
  }
  var I = F.prototype = new Q();
  I.constructor = F, D(I, V.prototype), I.isPureReactComponent = !0;
  var he = Array.isArray;
  function ne() {
  }
  var W = { H: null, A: null, T: null, S: null }, ge = Object.prototype.hasOwnProperty;
  function Ae(w, L, K) {
    var Z = K.ref;
    return {
      $$typeof: r,
      type: w,
      key: L,
      ref: Z !== void 0 ? Z : null,
      props: K
    };
  }
  function at(w, L) {
    return Ae(w.type, L, w.props);
  }
  function we(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function Ne(w) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(K) {
      return L[K];
    });
  }
  var He = /\/+/g;
  function Ze(w, L) {
    return typeof w == "object" && w !== null && w.key != null ? Ne("" + w.key) : L.toString(36);
  }
  function G(w) {
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
  function H(w, L, K, Z, ae) {
    var ue = typeof w;
    (ue === "undefined" || ue === "boolean") && (w = null);
    var ce = !1;
    if (w === null) ce = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          re = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case r:
            case u:
              re = !0;
              break;
            case x:
              return ce = w._init, H(
                ce(w._payload),
                L,
                K,
                Z,
                he
              );
          }
      }
    if (ce)
      return ae = ae(w), ce = Z === "" ? "." + Ze(w, 0) : Z, he(ae) ? (K = "", ce != null && (K = ce.replace(He, "$&/") + "/"), H(ae, L, K, "", function(mn) {
        return mn;
      })) : ae != null && (we(ae) && (ae = at(
        ae,
        K + (ae.key == null || w && w.key === ae.key ? "" : ("" + ae.key).replace(
          He,
          "$&/"
        ) + "/") + ce
      )), L.push(ae)), 1;
    ce = 0;
    var Be = Z === "" ? "." : Z + ":";
    if (he(w))
      for (var P = 0; P < w.length; P++)
        Z = w[P], ue = Be + Ze(Z, P), ce += H(
          Z,
          L,
          K,
          ue,
          ae
        );
    else if (P = A(w), typeof P == "function")
      for (w = P.call(w), P = 0; !(Z = w.next()).done; )
        Z = Z.value, ue = Be + Ze(Z, P++), ce += H(
          Z,
          L,
          K,
          ue,
          ae
        );
    else if (ue === "object") {
      if (typeof w.then == "function")
        return H(
          G(w),
          L,
          K,
          Z,
          he
        );
      throw L = String(w), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return re;
  }
  function Y(w, L, K) {
    if (w == null) return w;
    var Z = [], ae = 0;
    return H(w, Z, "", "", function(ue) {
      return L.call(K, ue, ae++);
    }), Z;
  }
  function oe(w) {
    if (w._status === -1) {
      var L = w._result;
      L = L(), L.then(
        function(K) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = K);
        },
        function(K) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = K);
        }
      ), w._status === -1 && (w._status = 0, w._result = L);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var xe = typeof reportError == "function" ? reportError : function(w) {
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
  }, _e = {
    map: Y,
    forEach: function(w, L, K) {
      Y(
        w,
        function() {
          L.apply(this, arguments);
        },
        K
      );
    },
    count: function(w) {
      var L = 0;
      return Y(w, function() {
        L++;
      }), L;
    },
    toArray: function(w) {
      return Y(w, function(L) {
        return L;
      }) || [];
    },
    only: function(w) {
      if (!we(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return ie.Activity = C, ie.Children = _e, ie.Component = V, ie.Fragment = o, ie.Profiler = d, ie.PureComponent = F, ie.StrictMode = c, ie.Suspense = y, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return W.H.useMemoCache(w);
    }
  }, ie.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ie.cloneElement = function(w, L, K) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var Z = D({}, w.props), ae = w.key;
    if (L != null)
      for (ue in L.key !== void 0 && (ae = "" + L.key), L)
        !ge.call(L, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && L.ref === void 0 || (Z[ue] = L[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) Z.children = K;
    else if (1 < ue) {
      for (var ce = Array(ue), Be = 0; Be < ue; Be++)
        ce[Be] = arguments[Be + 2];
      Z.children = ce;
    }
    return Ae(w.type, ae, Z);
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
  }, ie.createElement = function(w, L, K) {
    var Z, ae = {}, ue = null;
    if (L != null)
      for (Z in L.key !== void 0 && (ue = "" + L.key), L)
        ge.call(L, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ae[Z] = L[Z]);
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = K;
    else if (1 < ce) {
      for (var Be = Array(ce), P = 0; P < ce; P++)
        Be[P] = arguments[P + 2];
      ae.children = Be;
    }
    if (w && w.defaultProps)
      for (Z in ce = w.defaultProps, ce)
        ae[Z] === void 0 && (ae[Z] = ce[Z]);
    return Ae(w, ue, ae);
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(w) {
    return { $$typeof: b, render: w };
  }, ie.isValidElement = we, ie.lazy = function(w) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: w },
      _init: oe
    };
  }, ie.memo = function(w, L) {
    return {
      $$typeof: v,
      type: w,
      compare: L === void 0 ? null : L
    };
  }, ie.startTransition = function(w) {
    var L = W.T, K = {};
    W.T = K;
    try {
      var Z = w(), ae = W.S;
      ae !== null && ae(K, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ne, xe);
    } catch (ue) {
      xe(ue);
    } finally {
      L !== null && K.types !== null && (L.types = K.types), W.T = L;
    }
  }, ie.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, ie.use = function(w) {
    return W.H.use(w);
  }, ie.useActionState = function(w, L, K) {
    return W.H.useActionState(w, L, K);
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
  }, ie.useImperativeHandle = function(w, L, K) {
    return W.H.useImperativeHandle(w, L, K);
  }, ie.useInsertionEffect = function(w, L) {
    return W.H.useInsertionEffect(w, L);
  }, ie.useLayoutEffect = function(w, L) {
    return W.H.useLayoutEffect(w, L);
  }, ie.useMemo = function(w, L) {
    return W.H.useMemo(w, L);
  }, ie.useOptimistic = function(w, L) {
    return W.H.useOptimistic(w, L);
  }, ie.useReducer = function(w, L, K) {
    return W.H.useReducer(w, L, K);
  }, ie.useRef = function(w) {
    return W.H.useRef(w);
  }, ie.useState = function(w) {
    return W.H.useState(w);
  }, ie.useSyncExternalStore = function(w, L, K) {
    return W.H.useSyncExternalStore(
      w,
      L,
      K
    );
  }, ue.useTransition = function() {
    return F.H.useTransition();
  }, ue.version = "19.2.3", ue;
}
var M0;
function vc() {
  return M0 || (M0 = 1, Jo.exports = kp()), Jo.exports;
}
var S = yc();
const qp = /* @__PURE__ */ Lp(S);
var j0 = "popstate";
function kp(l = {}) {
  function r(o, c) {
    let { pathname: f, search: h, hash: p } = o.location;
    return cc(
      "",
      { pathname: f, search: h, hash: p },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function u(o, c) {
    return typeof c == "string" ? c : ji(c);
  }
  return Vp(
    r,
    u,
    null,
    l
  );
}
function Fe(l, r) {
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
function Yp() {
  return Math.random().toString(36).substring(2, 10);
}
function z0(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r
  };
}
function cc(l, r, u = null, o) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? _l(r) : r,
    state: u,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || Yp()
  };
}
function ji({
  pathname: l = "/",
  search: r = "",
  hash: u = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), u && u !== "#" && (l += u.charAt(0) === "#" ? u : "#" + u), l;
}
function _l(l) {
  let r = {};
  if (l) {
    let u = l.indexOf("#");
    u >= 0 && (r.hash = l.substring(u), l = l.substring(0, u));
    let o = l.indexOf("?");
    o >= 0 && (r.search = l.substring(o), l = l.substring(0, o)), l && (r.pathname = l);
  }
  return r;
}
function Vp(l, r, u, o = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = o, h = c.history, p = "POP", b = null, y = v();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function v() {
    return (h.state || { idx: null }).idx;
  }
  function x() {
    p = "POP";
    let D = v(), X = D == null ? null : D - y;
    y = D, b && b({ action: p, location: z.location, delta: X });
  }
  function C(D, X) {
    p = "PUSH";
    let V = uc(z.location, D, X);
    y = v() + 1;
    let Q = L0(V, y), F = z.createHref(V);
    try {
      h.pushState(Q, "", W);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError")
        throw $;
      c.location.assign(W);
    }
    d && b && b({ action: p, location: z.location, delta: 1 });
  }
  function k(D, X) {
    p = "REPLACE";
    let V = uc(z.location, D, X);
    y = v();
    let Q = L0(V, y), F = z.createHref(V);
    m.replaceState(Q, "", F), d && b && b({ action: p, location: z.location, delta: 0 });
  }
  function N(O) {
    return Xp(O);
  }
  let z = {
    get action() {
      return p;
    },
    get location() {
      return l(c, h);
    },
    listen(O) {
      if (b)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(j0, x), b = D, () => {
        c.removeEventListener(j0, x), b = null;
      };
    },
    createHref(O) {
      return r(c, O);
    },
    createURL: N,
    encodeLocation(O) {
      let V = N(O);
      return {
        pathname: V.pathname,
        search: V.search,
        hash: V.hash
      };
    },
    push: C,
    replace: k,
    go(D) {
      return m.go(D);
    }
  };
  return z;
}
function Xp(l, r = !1) {
  let u = "http://localhost";
  typeof window < "u" && (u = window.location.origin !== "null" ? window.location.origin : window.location.href), Fe(u, "No window.location.(origin|href) available to create URL");
  let o = typeof l == "string" ? l : ji(l);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = u + o), new URL(o, u);
}
function Eh(l, r, u = "/") {
  return Kp(l, r, u, !1);
}
function Kp(l, r, u, o) {
  let c = typeof r == "string" ? _l(r) : r, f = Mn(c.pathname || "/", u);
  if (f == null)
    return null;
  let h = wh(l);
  Qp(h);
  let p = null;
  for (let b = 0; p == null && b < h.length; ++b) {
    let y = a1(f);
    p = t1(
      h[b],
      y,
      o
    );
  }
  return p;
}
function wh(l, r = [], u = [], o = "", c = !1) {
  let f = (h, p, b = c, y) => {
    let v = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(o) && b)
        return;
      Fe(
        v.relativePath.startsWith(o),
        `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), v.relativePath = v.relativePath.slice(o.length);
    }
    let x = Un([o, v.relativePath]), C = s.concat(v);
    m.children && m.children.length > 0 && (Qe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), vh(
      m.children,
      r,
      C,
      x,
      b
    )), !(m.path == null && !m.index) && r.push({
      path: x,
      score: Wp(x, m.index),
      routesMeta: C
    });
  };
  return l.forEach((h, p) => {
    if (h.path === "" || !h.path?.includes("?"))
      f(h, p);
    else
      for (let b of Sh(h.path))
        f(h, p, !0, b);
  }), r;
}
function Sh(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [u, ...o] = r, c = u.endsWith("?"), f = u.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [f, ""] : [f];
  let h = Sh(o.join("/")), p = [];
  return p.push(
    ...h.map(
      (b) => b === "" ? f : [f, b].join("/")
    )
  ), c && p.push(...h), p.map(
    (b) => l.startsWith("/") && b === "" ? "/" : b
  );
}
function Qp(l) {
  l.sort(
    (r, u) => r.score !== u.score ? u.score - r.score : e1(
      r.routesMeta.map((o) => o.childrenIndex),
      u.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Zp = /^:[\w-]+$/, Fp = 3, Jp = 2, $p = 1, Ip = 10, Wp = -2, H0 = (l) => l === "*";
function Pp(l, r) {
  let u = l.split("/"), o = u.length;
  return u.some(H0) && (o += Wp), r && (o += Jp), u.filter((c) => !H0(c)).reduce(
    (c, f) => c + (Zp.test(f) ? Fp : f === "" ? $p : Ip),
    o
  );
}
function e1(l, r) {
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
function t1(l, r, u = !1) {
  let { routesMeta: o } = l, c = {}, f = "/", h = [];
  for (let p = 0; p < o.length; ++p) {
    let b = o[p], y = p === o.length - 1, v = d === "/" ? r : r.slice(d.length) || "/", x = bu(
      { path: b.relativePath, caseSensitive: b.caseSensitive, end: y },
      v
    ), C = b.route;
    if (!x && y && s && !o[o.length - 1].route.index && (x = bu(
      {
        path: b.relativePath,
        caseSensitive: b.caseSensitive,
        end: !1
      },
      v
    )), !x)
      return null;
    Object.assign(c, x.params), m.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: Un([d, x.pathname]),
      pathnameBase: r1(
        Un([d, x.pathnameBase])
      ),
      route: C
    }), x.pathnameBase !== "/" && (d = Un([d, x.pathnameBase]));
  }
  return h;
}
function Ss(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [u, o] = n1(
    l.path,
    l.caseSensitive,
    l.end
  ), c = r.match(u);
  if (!c) return null;
  let f = c[0], h = f.replace(/(.)\/+$/, "$1"), p = c.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: v, isOptional: x }, C) => {
        if (v === "*") {
          let A = p[C] || "";
          m = d.slice(0, d.length - A.length).replace(/(.)\/+$/, "$1");
        }
        const k = p[C];
        return x && !k ? y[v] = void 0 : y[v] = (k || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: h,
    pattern: l
  };
}
function n1(l, r = !1, u = !0) {
  ln(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, p, b) => (o.push({ paramName: p, isOptional: b != null }), b ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (o.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : u ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function a1(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return ln(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function Mn(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let u = r.endsWith("/") ? r.length - 1 : r.length, o = l.charAt(u);
  return o && o !== "/" ? null : l.slice(u) || "/";
}
var xh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, l1 = (l) => xh.test(l);
function i1(l, r = "/") {
  let {
    pathname: u,
    search: o = "",
    hash: c = ""
  } = typeof l == "string" ? _l(l) : l, f;
  if (u)
    if (l1(u))
      f = u;
    else {
      if (u.includes("//")) {
        let h = u;
        u = u.replace(/\/\/+/g, "/"), ln(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${u}`
        );
      }
      u.startsWith("/") ? f = B0(u.substring(1), "/") : f = B0(u, r);
    }
  else
    f = r;
  return {
    pathname: f,
    search: u1(o),
    hash: o1(c)
  };
}
function B0(l, r) {
  let u = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? u.length > 1 && u.pop() : c !== "." && u.push(c);
  }), u.length > 1 ? u.join("/") : "/";
}
function $o(l, r, u, o) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function r1(l) {
  return l.filter(
    (r, u) => u === 0 || r.route.path && r.route.path.length > 0
  );
}
function Rh(l) {
  let r = r1(l);
  return r.map(
    (u, o) => o === r.length - 1 ? u.pathname : u.pathnameBase
  );
}
function Th(l, r, u, o = !1) {
  let c;
  typeof l == "string" ? c = _l(l) : (c = { ...l }, Fe(
    !c.pathname || !c.pathname.includes("?"),
    $o("?", "pathname", "search", c)
  ), Fe(
    !c.pathname || !c.pathname.includes("#"),
    $o("#", "pathname", "hash", c)
  ), Fe(
    !c.search || !c.search.includes("#"),
    $o("#", "search", "hash", c)
  ));
  let f = l === "" || c.pathname === "", h = f ? "/" : c.pathname, p;
  if (h == null)
    p = u;
  else {
    let x = r.length - 1;
    if (!o && m.startsWith("..")) {
      let C = m.split("/");
      for (; C[0] === ".."; )
        C.shift(), x -= 1;
      c.pathname = C.join("/");
    }
    p = x >= 0 ? r[x] : "/";
  }
  let b = i1(c, p), y = h && h !== "/" && h.endsWith("/"), v = (f || h === ".") && u.endsWith("/");
  return !b.pathname.endsWith("/") && (y || v) && (b.pathname += "/"), b;
}
var jn = (l) => l.join("/").replace(/\/\/+/g, "/"), s1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), u1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, o1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, c1 = class {
  constructor(l, r, u, o = !1) {
    this.status = l, this.statusText = r || "", this.internal = o, u instanceof Error ? (this.data = u.toString(), this.error = u) : this.data = u;
  }
};
function d1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function f1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Nh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ch(l, r) {
  let u = l;
  if (typeof u != "string" || !xh.test(u))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: u
    };
  let o = u, c = !1;
  if (Nh)
    try {
      let f = new URL(window.location.href), h = u.startsWith("//") ? new URL(f.protocol + u) : new URL(u), p = Mn(h.pathname, r);
      h.origin === f.origin && p != null ? u = p + h.search + h.hash : c = !0;
    } catch {
      ln(
        !1,
        `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: c,
    to: u
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
var m1 = [
  "GET",
  ...Ah
];
new Set(d1);
var Tl = S.createContext(null);
Tl.displayName = "DataRouter";
var wu = S.createContext(null);
wu.displayName = "DataRouterState";
var m1 = S.createContext(!1), Ch = S.createContext({
  isTransitioning: !1
});
Ch.displayName = "ViewTransition";
var h1 = S.createContext(
  /* @__PURE__ */ new Map()
);
h1.displayName = "Fetchers";
var g1 = S.createContext(null);
g1.displayName = "Await";
var It = S.createContext(
  null
);
It.displayName = "Navigation";
var Ui = S.createContext(
  null
);
Ui.displayName = "Location";
var Ln = S.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ln.displayName = "Route";
var pc = S.createContext(null);
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
function E1(l) {
  if (l.startsWith(
    `${Nh}:${p1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new c1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function w1(l, { relative: r } = {}) {
  Fe(
    Hi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = S.useContext(It), { hash: c, pathname: d, search: m } = ji(l, { relative: r }), p = d;
  return s !== "/" && (p = d === "/" ? s : Un([s, d])), o.createHref({ pathname: p, search: m, hash: c });
}
function Mi() {
  return S.useContext(Ui) != null;
}
function za() {
  return Fe(
    Hi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), S.useContext(Ui).location;
}
var _h = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oh(l) {
  S.useContext(It).static || S.useLayoutEffect(l);
}
function S1() {
  let { isDataRoute: l } = S.useContext(Ln);
  return l ? j1() : w1();
}
function x1() {
  Fe(
    Hi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = S.useContext(Tl), { basename: r, navigator: s } = S.useContext(It), { matches: o } = S.useContext(Ln), { pathname: c } = ja(), d = JSON.stringify(wh(o)), m = S.useRef(!1);
  return Oh(() => {
    m.current = !0;
  }), S.useCallback(
    (b, y = {}) => {
      if (ln(h.current, Dh), !h.current) return;
      if (typeof b == "number") {
        u.go(b);
        return;
      }
      let v = Th(
        b,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      l == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : jn([r, v.pathname])), (y.replace ? u.replace : u.push)(
        v,
        y.state,
        y
      );
    },
    [
      r,
      u,
      f,
      c,
      l
    ]
  );
}
S.createContext(null);
function ji(l, { relative: r } = {}) {
  let { matches: s } = S.useContext(Ln), { pathname: o } = ja(), c = JSON.stringify(wh(s));
  return S.useMemo(
    () => xh(
      l,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [l, c, o, r]
  );
}
function R1(l, r) {
  return Uh(l, r);
}
function Uh(l, r, u, o, c) {
  Fe(
    Hi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = S.useContext(It), { matches: m } = S.useContext(Ln), p = m[m.length - 1], b = p ? p.params : {}, y = p ? p.pathname : "/", v = p ? p.pathnameBase : "/", x = p && p.route;
  {
    let V = x && x.path || "";
    Mh(
      y,
      !x || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let C = ja(), k;
  if (r) {
    let V = typeof r == "string" ? Rl(r) : r;
    Qe(
      v === "/" || V.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), k = V;
  } else
    k = C;
  let A = k.pathname || "/", z = A;
  if (v !== "/") {
    let V = v.replace(/^\//, "").split("/");
    z = "/" + A.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let D = bh(l, { pathname: z });
  an(
    x || D != null,
    `No routes matched location "${k.pathname}${k.search}${k.hash}" `
  ), an(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let X = N1(
    D && D.map(
      (V) => Object.assign({}, V, {
        params: Object.assign({}, b, V.params),
        pathname: Un([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathname
        ]),
        pathnameBase: V.pathnameBase === "/" ? v : Un([
          v,
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
    h,
    u,
    o,
    c
  );
  return r && X ? /* @__PURE__ */ S.createElement(
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
    V
  ) : V;
}
function T1() {
  let l = M1(), r = d1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), u = l instanceof Error ? l.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, f = { padding: "2px 4px", backgroundColor: o }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), m = /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ S.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ S.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ S.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ S.createElement("pre", { style: c }, s) : null, m);
}
var T1 = /* @__PURE__ */ S.createElement(R1, null), Uh = class extends S.Component {
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
      const u = E1(l.digest);
      u && (l = u);
    }
    let r = l !== void 0 ? /* @__PURE__ */ S.createElement(Ln.Provider, { value: this.props.routeContext }, /* @__PURE__ */ S.createElement(
      pc.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ S.createElement(A1, { error: l }, r) : r;
  }
};
Mh.contextType = h1;
var Io = /* @__PURE__ */ new WeakMap();
function C1({
  children: l,
  error: r
}) {
  let { basename: s } = S.useContext(It);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = v1(r.digest);
    if (o) {
      let c = Io.get(r);
      if (c) throw c;
      let f = Ch(o.location, u);
      if (Nh && !Io.get(r))
        if (f.isExternal || o.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: o.replace
            })
          );
          throw Io.set(r, h), h;
        }
      return /* @__PURE__ */ S.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${f.absoluteURL || f.to}`
        }
      );
    }
  }
  return l;
}
function C1({ routeContext: l, match: r, children: s }) {
  let o = S.useContext(Tl);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ S.createElement(Ln.Provider, { value: l }, s);
}
function N1(l, r = [], s = null, o = null, c = null) {
  if (l == null) {
    if (!u)
      return null;
    if (u.errors)
      l = u.matches;
    else if (r.length === 0 && !u.initialized && u.matches.length > 0)
      l = u.matches;
    else
      return null;
  }
  let d = l, m = s?.errors;
  if (m != null) {
    let v = d.findIndex(
      (x) => x.route.id && m?.[x.route.id] !== void 0
    );
    Fe(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, v + 1)
    );
  }
  let p = !1, b = -1;
  if (s)
    for (let v = 0; v < d.length; v++) {
      let x = d[v];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (b = v), x.route.id) {
        let { loaderData: C, errors: k } = s, A = x.route.loader && !C.hasOwnProperty(x.route.id) && (!k || k[x.route.id] === void 0);
        if (x.route.lazy || A) {
          p = !0, b >= 0 ? d = d.slice(0, b + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && o ? (v, x) => {
    o(v, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: f1(s.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (v, x, C) => {
      let k, A = !1, z = null, D = null;
      s && (k = m && x.route.id ? m[x.route.id] : void 0, z = x.route.errorElement || T1, p && (b < 0 && C === 0 ? (Mh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), A = !0, D = null) : b === C && (A = !0, D = x.route.hydrateFallbackElement || null)));
      let X = r.concat(d.slice(0, C + 1)), V = () => {
        let Q;
        return k ? Q = z : A ? Q = D : x.route.Component ? Q = /* @__PURE__ */ S.createElement(x.route.Component, null) : x.route.element ? Q = x.route.element : Q = v, /* @__PURE__ */ S.createElement(
          C1,
          {
            match: x,
            routeContext: {
              outlet: v,
              matches: V,
              isDataRoute: u != null
            },
            children: Q
          }
        );
      };
      return s && (x.route.ErrorBoundary || x.route.errorElement || C === 0) ? /* @__PURE__ */ S.createElement(
        Uh,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: z,
          error: k,
          children: V(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
          onError: y
        }
      ) : V();
    },
    null
  );
}
function wc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _1(l) {
  let r = S.useContext(Tl);
  return Qe(r, bc(l)), r;
}
function O1(l) {
  let r = S.useContext(wu);
  return Qe(r, bc(l)), r;
}
function D1(l) {
  let r = S.useContext(Ln);
  return Qe(r, bc(l)), r;
}
function j1(l) {
  let r = w.useContext(Ln);
  return Fe(r, wc(l)), r;
}
function Sc(l) {
  let r = j1(l), u = r.matches[r.matches.length - 1];
  return Fe(
    u.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), u.route.id;
}
function U1() {
  return Sc(
    "useRouteId"
    /* UseRouteId */
  );
}
function M1() {
  let l = S.useContext(pc), r = O1(
    "useRouteError"
    /* UseRouteError */
  ), u = Sc(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[u];
}
function L1() {
  let { router: l } = O1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Sc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = S.useRef(!1);
  return Oh(() => {
    s.current = !0;
  }), S.useCallback(
    async (c, d = {}) => {
      an(s.current, _h), s.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...d }));
    },
    [l, r]
  );
}
var k0 = {};
function Lh(l, r, u) {
  !r && !k0[l] && (k0[l] = !0, ln(!1, u));
}
S.memo(L1);
function L1({
  routes: l,
  future: r,
  state: u,
  onError: o
}) {
  return Uh(l, void 0, u, o, r);
}
function zh(l) {
  Fe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function H1({
  basename: l = "/",
  children: r = null,
  location: u,
  navigationType: o = "POP",
  navigator: c,
  static: f = !1,
  unstable_useTransitions: h
}) {
  Fe(
    !Hi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = l.replace(/^\/*/, "/"), b = S.useMemo(
    () => ({
      basename: p,
      navigator: c,
      static: f,
      unstable_useTransitions: h,
      future: {}
    }),
    [p, c, f, h]
  );
  typeof u == "string" && (u = _l(u));
  let {
    pathname: y = "/",
    search: v = "",
    hash: x = "",
    state: C = null,
    key: k = "default"
  } = s, A = S.useMemo(() => {
    let z = jn(y, p);
    return z == null ? null : {
      location: {
        pathname: z,
        search: v,
        hash: x,
        state: C,
        key: k
      },
      navigationType: o
    };
  }, [p, y, v, x, C, k, o]);
  return an(
    A != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), A == null ? null : /* @__PURE__ */ S.createElement(It.Provider, { value: b }, /* @__PURE__ */ S.createElement(Ui.Provider, { children: r, value: A }));
}
function B1({
  children: l,
  location: r
}) {
  return R1(dc(l), r);
}
function sc(l, r = []) {
  let s = [];
  return S.Children.forEach(l, (o, c) => {
    if (!S.isValidElement(o))
      return;
    let d = [...r, c];
    if (o.type === S.Fragment) {
      s.push.apply(
        s,
        sc(o.props.children, d)
      );
      return;
    }
    Fe(
      o.type === zh,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Fe(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let h = {
      id: o.props.id || f.join("-"),
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
    o.props.children && (h.children = dc(
      o.props.children,
      f
    )), u.push(h);
  }), u;
}
var hs = "get", gs = "application/x-www-form-urlencoded";
function Ns(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function k1(l) {
  return Ns(l) && l.tagName.toLowerCase() === "button";
}
function q1(l) {
  return Ns(l) && l.tagName.toLowerCase() === "form";
}
function G1(l) {
  return Ns(l) && l.tagName.toLowerCase() === "input";
}
function Y1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function V1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Y1(l);
}
var us = null;
function X1() {
  if (us === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), us = !1;
    } catch {
      us = !0;
    }
  return us;
}
var K1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Wo(l) {
  return l != null && !K1.has(l) ? (ln(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gs}"`
  ), null) : l;
}
function Q1(l, r) {
  let u, o, c, f, h;
  if (q1(l)) {
    let p = l.getAttribute("action");
    o = p ? Mn(p, r) : null, u = l.getAttribute("method") || hs, c = Wo(l.getAttribute("enctype")) || gs, f = new FormData(l);
  } else if (k1(l) || G1(l) && (l.type === "submit" || l.type === "image")) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = l.getAttribute("formaction") || p.getAttribute("action");
    if (o = b ? jn(b, r) : null, s = l.getAttribute("formmethod") || p.getAttribute("method") || cu, c = $o(l.getAttribute("formenctype")) || $o(p.getAttribute("enctype")) || fu, d = new FormData(p, l), !X1()) {
      let { name: y, type: v, value: x } = l;
      if (v === "image") {
        let C = y ? `${y}.` : "";
        d.append(`${C}x`, "0"), d.append(`${C}y`, "0");
      } else y && d.append(y, x);
    }
  } else {
    if (Ns(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    u = hs, o = null, c = gs, h = l;
  }
  return f && c === "text/plain" && (h = f, f = void 0), { action: o, method: u.toLowerCase(), encType: c, formData: f, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function xc(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function Z1(l, r, u) {
  let o = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return o.pathname === "/" ? o.pathname = `_root.${u}` : r && Mn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${u}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${u}`, o;
}
async function F1(l, r) {
  if (l.id in r)
    return r[l.id];
  try {
    let u = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return r[l.id] = u, u;
  } catch (u) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(u), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function J1(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function $1(l, r, u) {
  let o = await Promise.all(
    l.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let h = await F1(f, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return eb(
    o.flat(1).filter(J1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function q0(l, r, u, o, c, f) {
  let h = (b, y) => u[y] ? b.route.id !== u[y].route.id : !0, p = (b, y) => (
    // param change, /users/123 -> /users/456
    u[y].pathname !== b.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    u[y].route.path?.endsWith("*") && u[y].params["*"] !== b.params["*"]
  );
  return f === "assets" ? r.filter(
    (b, y) => h(b, y) || p(b, y)
  ) : f === "data" ? r.filter((b, y) => {
    let v = o.routes[b.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (h(b, y) || p(b, y))
      return !0;
    if (b.route.shouldRevalidate) {
      let x = b.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: u[0]?.params || {},
        nextUrl: new URL(l, window.origin),
        nextParams: b.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function I1(l, r, { includeHydrateFallback: u } = {}) {
  return W1(
    l.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), u && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function W1(l) {
  return [...new Set(l)];
}
function P1(l) {
  let r = {}, u = Object.keys(l).sort();
  for (let o of u)
    r[o] = l[o];
  return r;
}
function eb(l, r) {
  let u = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((o, c) => {
    let f = JSON.stringify(P1(c));
    return u.has(f) || (u.add(f), o.push({ key: f, link: c })), o;
  }, []);
}
function Lh() {
  let l = S.useContext(Tl);
  return Ec(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function eb() {
  let l = S.useContext(wu);
  return Ec(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Sc = S.createContext(void 0);
Sc.displayName = "FrameworkContext";
function zh() {
  let l = S.useContext(Sc);
  return Ec(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function tb(l, r) {
  let s = S.useContext(Sc), [o, c] = S.useState(!1), [d, m] = S.useState(!1), { onFocus: p, onBlur: b, onMouseEnter: y, onMouseLeave: v, onTouchStart: x } = r, C = S.useRef(null);
  S.useEffect(() => {
    if (l === "render" && m(!0), l === "viewport") {
      let z = (X) => {
        X.forEach((V) => {
          m(V.isIntersecting);
        });
      }, D = new IntersectionObserver(z, { threshold: 0.5 });
      return C.current && D.observe(C.current), () => {
        D.disconnect();
      };
    }
  }, [l]), S.useEffect(() => {
    if (o) {
      let z = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(z);
      };
    }
  }, [o]);
  let k = () => {
    c(!0);
  }, N = () => {
    c(!1), h(!1);
  };
  return s ? l !== "intent" ? [d, C, {}] : [
    d,
    C,
    {
      onFocus: xi(p, k),
      onBlur: xi(b, A),
      onMouseEnter: xi(y, k),
      onMouseLeave: xi(v, A),
      onTouchStart: xi(x, k)
    }
  ] : [!1, C, {}];
}
function Ci(l, r) {
  return (u) => {
    l && l(u), u.defaultPrevented || r(u);
  };
}
function nb({ page: l, ...r }) {
  let { router: s } = Lh(), o = S.useMemo(
    () => bh(s.routes, l, s.basename),
    [s.routes, l, s.basename]
  );
  return o ? /* @__PURE__ */ S.createElement(lb, { page: l, matches: o, ...r }) : null;
}
function ab(l) {
  let { manifest: r, routeModules: s } = zh(), [o, c] = S.useState([]);
  return S.useEffect(() => {
    let d = !1;
    return $1(l, r, s).then(
      (m) => {
        d || c(m);
      }
    ), () => {
      f = !0;
    };
  }, [l, r, u]), o;
}
function ib({
  page: l,
  matches: r,
  ...u
}) {
  let o = ja(), { manifest: c, routeModules: d } = zh(), { basename: m } = Lh(), { loaderData: p, matches: b } = eb(), y = S.useMemo(
    () => q0(
      l,
      r,
      b,
      c,
      o,
      "data"
    ),
    [l, r, b, c, o]
  ), v = S.useMemo(
    () => q0(
      l,
      r,
      b,
      c,
      o,
      "assets"
    ),
    [l, r, b, c, o]
  ), x = S.useMemo(() => {
    if (l === o.pathname + o.search + o.hash)
      return [];
    let A = /* @__PURE__ */ new Set(), z = !1;
    if (r.forEach((X) => {
      let V = c.routes[X.route.id];
      !V || !V.hasLoader || (!y.some((Q) => Q.route.id === X.route.id) && X.route.id in p && d[X.route.id]?.shouldRevalidate || V.hasClientLoader ? z = !0 : A.add(X.route.id));
    }), A.size === 0)
      return [];
    let D = Q1(l, m, "data");
    return z && A.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((V) => N.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [O.pathname + O.search];
  }, [
    h,
    p,
    o,
    c,
    y,
    r,
    l,
    d
  ]), C = S.useMemo(
    () => F1(v, c),
    [v, c]
  ), k = ab(v);
  return /* @__PURE__ */ S.createElement(S.Fragment, null, x.map((A) => /* @__PURE__ */ S.createElement("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...s })), C.map((A) => /* @__PURE__ */ S.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })), k.map(({ key: A, link: z }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ S.createElement("link", { key: A, nonce: s.nonce, ...z })
  )));
}
function rb(...l) {
  return (r) => {
    l.forEach((u) => {
      typeof u == "function" ? u(r) : u != null && (u.current = r);
    });
  };
}
var sb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  sb && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function ub({
  basename: l,
  children: r,
  unstable_useTransitions: u,
  window: o
}) {
  let c = S.useRef();
  c.current == null && (c.current = kp({ window: o, v5Compat: !0 }));
  let d = c.current, [m, p] = S.useState({
    action: d.action,
    location: d.location
  }), b = S.useCallback(
    (y) => {
      s === !1 ? p(y) : S.startTransition(() => p(y));
    },
    [u]
  );
  return S.useLayoutEffect(() => d.listen(b), [d, b]), /* @__PURE__ */ S.createElement(
    z1,
    {
      basename: l,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      unstable_useTransitions: u
    }
  );
}
var Hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Bh = S.forwardRef(
  function({
    onClick: r,
    discover: u = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: f,
    replace: h,
    state: p,
    target: b,
    to: y,
    preventScrollReset: v,
    viewTransition: x,
    unstable_defaultShouldRevalidate: C,
    ...k
  }, A) {
    let { basename: z, unstable_useTransitions: D } = S.useContext(It), X = typeof y == "string" && Hh.test(y), V = Th(y, z);
    y = V.to;
    let Q = E1(y, { relative: c }), [F, I, he] = tb(
      o,
      k
    ), ne = fb(y, {
      replace: m,
      state: p,
      target: b,
      preventScrollReset: v,
      relative: c,
      viewTransition: x,
      unstable_defaultShouldRevalidate: C,
      unstable_useTransitions: D
    });
    function F(ye) {
      r && r(ye), ye.defaultPrevented || ee(ye);
    }
    let de = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ S.createElement(
        "a",
        {
          ...k,
          ...he,
          href: V.absoluteURL || Q,
          onClick: V.isExternal || d ? r : W,
          ref: ib(A, I),
          target: b,
          "data-discover": !V && u === "render" ? "true" : void 0
        }
      )
    );
    return F && !X ? /* @__PURE__ */ S.createElement(S.Fragment, null, ge, /* @__PURE__ */ S.createElement(nb, { page: Q })) : ge;
  }
);
Bh.displayName = "Link";
var sb = S.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: u = !1,
    className: o = "",
    end: c = !1,
    style: f,
    to: h,
    viewTransition: p,
    children: b,
    ...y
  }, v) {
    let x = ji(m, { relative: y.relative }), C = ja(), k = S.useContext(wu), { navigator: A, basename: z } = S.useContext(It), D = k != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    yb(x) && p === !0, X = A.encodeLocation ? A.encodeLocation(x).pathname : x.pathname, V = C.pathname, Q = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null;
    s || (V = V.toLowerCase(), Q = Q ? Q.toLowerCase() : null, X = X.toLowerCase()), Q && z && (Q = jn(Q, z) || Q);
    const F = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
    let I = V === X || !c && V.startsWith(X) && V.charAt(F) === "/", he = Q != null && (Q === X || !c && Q.startsWith(X) && Q.charAt(X.length) === "/"), ne = {
      isActive: I,
      isPending: he,
      isTransitioning: D
    }, W = I ? r : void 0, ge;
    typeof o == "function" ? ge = o(ne) : ge = [
      o,
      $ ? "active" : null,
      oe ? "pending" : null,
      O ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Ae = typeof d == "function" ? d(ne) : d;
    return /* @__PURE__ */ S.createElement(
      Bh,
      {
        ...y,
        "aria-current": F,
        className: de,
        ref: v,
        style: ye,
        to: h,
        viewTransition: p
      },
      typeof b == "function" ? b(ee) : b
    );
  }
);
sb.displayName = "NavLink";
var ob = S.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: u,
    reloadDocument: o,
    replace: c,
    state: f,
    method: h = hs,
    action: p,
    onSubmit: b,
    relative: y,
    preventScrollReset: v,
    viewTransition: x,
    unstable_defaultShouldRevalidate: C,
    ...k
  }, A) => {
    let { unstable_useTransitions: z } = S.useContext(It), D = hb(), X = gb(p, { relative: y }), V = m.toLowerCase() === "get" ? "get" : "post", Q = typeof p == "string" && Hh.test(p), F = (I) => {
      if (b && b(I), I.defaultPrevented) return;
      I.preventDefault();
      let he = I.nativeEvent.submitter, ne = he?.getAttribute("formmethod") || m, W = () => D(he || I.currentTarget, {
        fetcherKey: r,
        method: ee,
        navigate: u,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: v,
        viewTransition: x,
        unstable_defaultShouldRevalidate: C
      });
      z && s !== !1 ? S.startTransition(() => W()) : W();
    };
    return /* @__PURE__ */ S.createElement(
      "form",
      {
        ref: A,
        method: V,
        action: X,
        onSubmit: o ? b : F,
        ...k,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
cb.displayName = "Form";
function db(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function qh(l) {
  let r = S.useContext(Tl);
  return Qe(r, cb(l)), r;
}
function fb(l, {
  target: r,
  replace: u,
  state: o,
  preventScrollReset: c,
  relative: f,
  viewTransition: h,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: b
} = {}) {
  let y = S1(), v = ja(), x = ji(l, { relative: d });
  return S.useCallback(
    (C) => {
      if (Y1(C, r)) {
        C.preventDefault();
        let k = s !== void 0 ? s : _i(v) === _i(x), A = () => y(l, {
          replace: k,
          state: o,
          preventScrollReset: c,
          relative: f,
          viewTransition: h,
          unstable_defaultShouldRevalidate: p
        });
        b ? S.startTransition(() => A()) : A();
      }
    },
    [
      v,
      y,
      x,
      s,
      o,
      r,
      l,
      c,
      f,
      h,
      p,
      b
    ]
  );
}
var mb = 0, hb = () => `__${String(++mb)}__`;
function gb() {
  let { router: l } = Gh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = S.useContext(It), s = U1(), o = l.fetch, c = l.navigate;
  return S.useCallback(
    async (d, m = {}) => {
      let { action: p, method: b, encType: y, formData: v, body: x } = K1(
        d,
        r
      );
      if (m.navigate === !1) {
        let C = m.fetcherKey || mb();
        await o(C, s, m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: x,
          formMethod: m.method || b,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await c(h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: v,
          body: x,
          formMethod: m.method || b,
          formEncType: m.encType || y,
          replace: m.replace,
          state: m.state,
          fromRouteId: s,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [o, c, r, u]
  );
}
function gb(l, { relative: r } = {}) {
  let { basename: s } = S.useContext(It), o = S.useContext(Ln);
  Qe(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...ji(l || ".", { relative: r }) }, m = ja();
  if (l == null) {
    f.search = h.search;
    let p = new URLSearchParams(f.search), b = p.getAll("index");
    if (b.some((v) => v === "")) {
      p.delete("index"), b.filter((x) => x).forEach((x) => p.append("index", x));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), u !== "/" && (f.pathname = f.pathname === "/" ? u : jn([u, f.pathname])), ji(f);
}
function yb(l, { relative: r } = {}) {
  let s = S.useContext(Ch);
  Qe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Gh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = Bi(l, { relative: r });
  if (!u.isTransitioning)
    return !1;
  let f = Mn(u.currentLocation.pathname, o) || u.currentLocation.pathname, h = Mn(u.nextLocation.pathname, o) || u.nextLocation.pathname;
  return Ss(c.pathname, h) != null || Ss(c.pathname, f) != null;
}
var Po = { exports: {} }, yt = {};
var G0;
function bb() {
  if (G0) return yt;
  G0 = 1;
  var l = vc();
  function r(b) {
    var y = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + b + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var o = {
    d: {
      f: u,
      r: function() {
        throw Error(r(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(b, y, v) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: b,
      containerInfo: y,
      implementation: v
    };
  }
  var h = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(b, y) {
    if (b === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, yt.createPortal = function(b, y) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return f(b, y, null, v);
  }, yt.flushSync = function(b) {
    var y = h.T, v = o.p;
    try {
      if (h.T = null, o.p = 2, b) return b();
    } finally {
      h.T = y, o.p = v, o.d.f();
    }
  }, yt.preconnect = function(b, y) {
    typeof b == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(b, y));
  }, yt.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, yt.preinit = function(b, y) {
    if (typeof b == "string" && y && typeof y.as == "string") {
      var v = y.as, x = p(v, y.crossOrigin), C = typeof y.integrity == "string" ? y.integrity : void 0, k = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      v === "style" ? o.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: x,
          integrity: C,
          fetchPriority: k
        }
      ) : v === "script" && o.d.X(b, {
        crossOrigin: x,
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
      var v = y.as, x = p(v, y.crossOrigin);
      o.d.L(b, v, {
        crossOrigin: x,
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
    return h.H.useFormState(b, y, v);
  }, yt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, yt.version = "19.2.3", yt;
}
var Y0;
function vb() {
  if (Y0) return Po.exports;
  Y0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Po.exports = bb(), Po.exports;
}
var Io = { exports: {} }, Ri = {}, Wo = { exports: {} }, Po = {};
var Y0;
function vb() {
  return Y0 || (Y0 = 1, (function(l) {
    function r(G, H) {
      var Y = G.length;
      G.push(H);
      e: for (; 0 < Y; ) {
        var oe = Y - 1 >>> 1, xe = G[oe];
        if (0 < c(xe, H))
          G[oe] = H, G[Y] = xe, Y = oe;
        else break e;
      }
    }
    function s(G) {
      return G.length === 0 ? null : G[0];
    }
    function o(G) {
      if (G.length === 0) return null;
      var H = G[0], Y = G.pop();
      if (Y !== H) {
        G[0] = Y;
        e: for (var oe = 0, xe = G.length, _e = xe >>> 1; oe < _e; ) {
          var w = 2 * (oe + 1) - 1, L = G[w], K = w + 1, Z = G[K];
          if (0 > c(L, Y))
            K < xe && 0 > c(Z, L) ? (G[oe] = Z, G[K] = Y, oe = K) : (G[oe] = L, G[w] = Y, oe = w);
          else if (K < xe && 0 > c(Z, Y))
            G[oe] = Z, G[K] = Y, oe = K;
          else break e;
        }
      }
      return H;
    }
    function c(G, H) {
      var Y = G.sortIndex - H.sortIndex;
      return Y !== 0 ? Y : G.id - H.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      l.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, p = h.now();
      l.unstable_now = function() {
        return h.now() - p;
      };
    }
    var b = [], y = [], v = 1, x = null, C = 3, k = !1, A = !1, z = !1, D = !1, X = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function F(G) {
      for (var H = s(y); H !== null; ) {
        if (H.callback === null) o(y);
        else if (H.startTime <= G)
          o(y), H.sortIndex = H.expirationTime, r(b, H);
        else break;
        H = u(y);
      }
    }
    function I(G) {
      if (z = !1, F(G), !A)
        if (s(b) !== null)
          A = !0, he || (he = !0, we());
        else {
          var H = s(y);
          H !== null && Ze(I, H.startTime - G);
        }
    }
    var oe = !1, ee = -1, F = 5, de = -1;
    function ye() {
      return O ? !0 : !(l.unstable_now() - de < F);
    }
    function at() {
      if (D = !1, he) {
        var G = l.unstable_now();
        ge = G;
        var H = !0;
        try {
          e: {
            A = !1, z && (z = !1, V(ne), ne = -1), k = !0;
            var Y = C;
            try {
              t: {
                for (F(G), x = s(b); x !== null && !(x.expirationTime > G && Ae()); ) {
                  var oe = x.callback;
                  if (typeof oe == "function") {
                    x.callback = null, C = x.priorityLevel;
                    var xe = oe(
                      x.expirationTime <= G
                    );
                    if (G = l.unstable_now(), typeof xe == "function") {
                      x.callback = xe, F(G), H = !0;
                      break t;
                    }
                    x === s(b) && o(b), F(G);
                  } else o(b);
                  x = s(b);
                }
                if (x !== null) H = !0;
                else {
                  var _e = s(y);
                  _e !== null && Ze(
                    I,
                    _e.startTime - G
                  ), H = !1;
                }
              }
              break e;
            } finally {
              x = null, C = Y, k = !1;
            }
            H = void 0;
          }
        } finally {
          H ? pe() : oe = !1;
        }
      }
    }
    var pe;
    if (typeof Q == "function")
      pe = function() {
        Q(Ke);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), He = Ne.port2;
      Ne.port1.onmessage = at, we = function() {
        He.postMessage(null);
      };
    } else
      pe = function() {
        V(Ke, 0);
      };
    function Ze(G, H) {
      ne = X(function() {
        G(l.unstable_now());
      }, H);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, l.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : W = 0 < G ? Math.floor(1e3 / G) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_next = function(G) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = C;
      }
      var Y = C;
      C = H;
      try {
        return G();
      } finally {
        C = Y;
      }
    }, l.unstable_requestPaint = function() {
      D = !0;
    }, l.unstable_runWithPriority = function(G, H) {
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
      var Y = C;
      C = G;
      try {
        return H();
      } finally {
        C = Y;
      }
    }, l.unstable_scheduleCallback = function(G, H, Y) {
      var oe = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? oe + Y : oe) : Y = oe, G) {
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
      return xe = Y + xe, G = {
        id: v++,
        callback: H,
        priorityLevel: G,
        startTime: Y,
        expirationTime: xe,
        sortIndex: -1
      }, Y > oe ? (G.sortIndex = Y, r(y, G), s(b) === null && G === s(y) && (z ? (V(ne), ne = -1) : z = !0, Ze(I, Y - oe))) : (G.sortIndex = xe, r(b, G), A || k || (A = !0, he || (he = !0, we()))), G;
    }, l.unstable_shouldYield = Ae, l.unstable_wrapCallback = function(G) {
      var H = C;
      return function() {
        var Y = C;
        C = H;
        try {
          return G.apply(this, arguments);
        } finally {
          C = Y;
        }
      };
    };
  })(nc)), nc;
}
var X0;
function wb() {
  return X0 || (X0 = 1, tc.exports = Eb()), tc.exports;
}
var K0;
function Sb() {
  if (K0) return Ai;
  K0 = 1;
  var l = {};
  var r = wb(), u = vc(), o = vb();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function h(e) {
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
    if (h(e) !== e)
      throw Error(c(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (a = i.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return y(i), e;
          if (s === a) return y(i), t;
          s = s.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = i, a = s;
      else {
        for (var d = !1, g = i.child; g; ) {
          if (g === n) {
            d = !0, n = i, a = s;
            break;
          }
          if (g === a) {
            d = !0, a = i, n = s;
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = s.child; g; ) {
            if (g === n) {
              d = !0, n = s, a = i;
              break;
            }
            if (g === a) {
              d = !0, a = s, n = i;
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = x(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), ge = /* @__PURE__ */ Symbol.for("react.lazy"), Ae = /* @__PURE__ */ Symbol.for("react.activity"), at = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), we = Symbol.iterator;
  function Ne(e) {
    return e === null || typeof e != "object" ? null : (e = we && e[we] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var He = /* @__PURE__ */ Symbol.for("react.client.reference");
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === He ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case V:
        return "Profiler";
      case X:
        return "Profiler";
      case V:
        return "StrictMode";
      case oe:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case ye:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case W:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case $:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : je(e.type) || "Memo";
        case de:
          t = e._payload, e = e._init;
          try {
            return je(e(t));
          } catch {
          }
      }
    return null;
  }
  var G = Array.isArray, H = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, xe = [], _e = -1;
  function w(e) {
    return { current: e };
  }
  function L(e) {
    0 > _e || (e.current = xe[_e], xe[_e] = null, _e--);
  }
  function K(e, t) {
    _e++, xe[_e] = e.current, e.current = t;
  }
  var Z = w(null), ae = w(null), ue = w(null), ce = w(null);
  function Be(e, t) {
    switch (K(ue, t), K(ae, e), K(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? e0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = e0(t), e = t0(t, e);
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
    L(Z), K(Z, e);
  }
  function P() {
    L(Z), L(ae), L(ue);
  }
  function mn(e) {
    e.memoizedState !== null && K(ce, e);
    var t = Z.current, n = e0(t, e.type);
    t !== n && (K(ae, e), K(Z, n));
  }
  function Wt(e) {
    ae.current === e && (L(Z), L(ae)), ce.current === e && (L(ce), bi._currentValue = oe);
  }
  var Hn, ka;
  function en(e) {
    if (Hn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Hn = t && t[1] || "", ka = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Hn + e + ka;
  }
  var Bn = !1;
  function se(e, t) {
    if (!e || Bn) return "";
    Bn = !0;
    var n = Error.prepareStackTrace;
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
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (U) {
                  D = U;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (q = e()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (U) {
            if (U && D && typeof U.stack == "string")
              return [U.stack, D.stack];
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
      var s = a.DetermineComponentFrameRoot(), d = s[0], g = s[1];
      if (d && g) {
        var E = d.split(`
`), _ = g.split(`
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
                  var j = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      Bn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? en(n) : "";
  }
  function We(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return en(e.type);
      case 16:
        return en("Lazy");
      case 13:
        return e.child !== t && t !== null ? en("Suspense Fallback") : en("Suspense");
      case 19:
        return en("SuspenseList");
      case 0:
      case 15:
        return se(e.type, !1);
      case 11:
        return se(e.type.render, !1);
      case 1:
        return se(e.type, !0);
      case 31:
        return en("Activity");
      default:
        return "";
    }
  }
  function kn(e) {
    try {
      var t = "", n = null;
      do
        t += We(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ce = Object.prototype.hasOwnProperty, Et = r.unstable_scheduleCallback, st = r.unstable_cancelCallback, qa = r.unstable_shouldYield, ma = r.unstable_requestPaint, bt = r.unstable_now, yg = r.unstable_getCurrentPriorityLevel, Dc = r.unstable_ImmediatePriority, jc = r.unstable_UserBlockingPriority, Ki = r.unstable_NormalPriority, pg = r.unstable_LowPriority, Uc = r.unstable_IdlePriority, bg = r.log, vg = r.unstable_setDisableYieldValue, Ml = null, jt = null;
  function qn(e) {
    if (typeof bg == "function" && vg(e), jt && typeof jt.setStrictMode == "function")
      try {
        jt.setStrictMode(Ml, e);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : Sg, Eg = Math.log, wg = Math.LN2;
  function Sg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Eg(e) / wg | 0) | 0;
  }
  var Qi = 256, Zi = 262144, Fi = 4194304;
  function ha(e) {
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
  function Ji(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, s = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return g !== 0 ? (a = g & ~s, a !== 0 ? i = ha(a) : (d &= g, d !== 0 ? i = ha(d) : n || (n = g & ~e, n !== 0 && (i = ha(n))))) : (g = a & ~s, g !== 0 ? i = ha(g) : d !== 0 ? i = ha(d) : n || (n = a & ~e, n !== 0 && (i = ha(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && (s = i & -i, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function Ll(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function xg(e, t) {
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
    var e = Fi;
    return Fi <<= 1, (Fi & 62914560) === 0 && (Fi = 4194304), e;
  }
  function Ls(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function zl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Rg(e, t, n, a, i, s) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var h = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var j = 31 - Ut(n), q = 1 << j;
      h[j] = 0, E[j] = -1;
      var O = _[j];
      if (O !== null)
        for (_[j] = null, j = 0; j < O.length; j++) {
          var M = O[j];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~q;
    }
    a !== 0 && Lc(e, a, 0), s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t));
  }
  function Lc(e, t, n) {
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
  function Hc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : zs(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function zs(e) {
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
  function Hs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Bc() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : R0(e.type));
  }
  function kc(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var Gn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + Gn, wt = "__reactProps$" + Gn, Ga = "__reactContainer$" + Gn, Bs = "__reactEvents$" + Gn, Tg = "__reactListeners$" + Gn, Ng = "__reactHandles$" + Gn, qc = "__reactResources$" + Gn, Hl = "__reactMarker$" + Gn;
  function ks(e) {
    delete e[dt], delete e[wt], delete e[Bs], delete e[Tg], delete e[Ng];
  }
  function Ya(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ga] || n[dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = u0(e); e !== null; ) {
            if (n = e[dt]) return n;
            e = u0(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Va(e) {
    if (e = e[dt] || e[Ga]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Bl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Xa(e) {
    var t = e[qc];
    return t || (t = e[qc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ut(e) {
    e[Hl] = !0;
  }
  var Gc = /* @__PURE__ */ new Set(), Yc = {};
  function ga(e, t) {
    Ka(e, t), Ka(e + "Capture", t);
  }
  function Ka(e, t) {
    for (Yc[e] = t, e = 0; e < t.length; e++)
      Gc.add(t[e]);
  }
  var Cg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Yc = {}, Xc = {};
  function Cg(e) {
    return se.call(Xc, e) ? !0 : se.call(Yc, e) ? !1 : Ag.test(e) ? Xc[e] = !0 : (Yc[e] = !0, !1);
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
  function Ii(e, t, n) {
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
  function Kc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ng(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var i = a.get, s = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(d) {
          n = "" + d, s.call(this, d);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(d) {
          n = "" + d;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function qs(e) {
    if (!e._valueTracker) {
      var t = Vc(e) ? "checked" : "value";
      e._valueTracker = Ng(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Qc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Kc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Wi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Og = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      Og,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gs(e, t, n, a, i, s, d, g) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Gt(t)) : e.value !== "" + Gt(t) && (e.value = "" + Gt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ys(e, d, Gt(t)) : n != null ? Ys(e, d, Gt(n)) : a != null && e.removeAttribute("value"), i == null && s != null && (e.defaultChecked = !!s), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Gt(g) : e.removeAttribute("name");
  }
  function Zc(e, t, n, a, i, s, d, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        qs(e);
        return;
      }
      n = n != null ? "" + Gt(n) : "", t = t != null ? "" + Gt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = g ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), qs(e);
  }
  function Ys(e, t, n) {
    t === "number" && Wi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Qa(e, t, n, a) {
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
  function Fc(e, t, n) {
    if (t != null && (t = "" + Gt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Gt(n) : "";
  }
  function Jc(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (G(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Gt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), qs(e);
  }
  function Za(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $c(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Dg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Ic(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && $c(e, i, a);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && $c(e, s, t[s]);
  }
  function Vs(e) {
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
  var jg = /* @__PURE__ */ new Map([
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
  function Pi(e) {
    return Ug.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function gn() {
  }
  var Xs = null;
  function Ks(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fa = null, Ja = null;
  function Wc(e) {
    var t = Va(e);
    if (t && (e = t.stateNode)) {
      var n = e[wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Gs(
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
                var i = a[wt] || null;
                if (!i) throw Error(c(90));
                Gs(
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
              a = n[t], a.form === e.form && Qc(a);
          }
          break e;
        case "textarea":
          Fc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Qa(e, !!n.multiple, t, !1);
      }
    }
  }
  var Qs = !1;
  function Pc(e, t, n) {
    if (Qs) return e(t, n);
    Qs = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Qs = !1, (Fa !== null || Ja !== null) && (qr(), Fa && (t = Fa, e = Ja, Ja = Fa = null, Wc(t), e)))
        for (t = 0; t < e.length; t++) Wc(e[t]);
    }
  }
  function kl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[wt] || null;
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
  var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zs = !1;
  if (yn)
    try {
      var ql = {};
      Object.defineProperty(ql, "passive", {
        get: function() {
          Zs = !0;
        }
      }), window.addEventListener("test", ql, ql), window.removeEventListener("test", ql, ql);
    } catch {
      Zs = !1;
    }
  var Yn = null, Fs = null, er = null;
  function ed() {
    if (er) return er;
    var e, t = Fs, n = t.length, a, i = "value" in Yn ? Yn.value : Yn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === i[s - a]; a++) ;
    return er = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function tr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function nr() {
    return !0;
  }
  function td() {
    return !1;
  }
  function St(e) {
    function t(n, a, i, s, d) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = s, this.target = d, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? nr : td, this.isPropagationStopped = td, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = nr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = nr);
      },
      persist: function() {
      },
      isPersistent: nr
    }), t;
  }
  var ya = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pi = wt(ma), Hl = C({}, ma, { view: 0, detail: 0 }), Mg = wt(Hl), Qu, Zu, Bl, er = C({}, Hl, {
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
    getModifierState: Ws,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yl && (Yl && e.type === "mousemove" ? (Js = e.screenX - Yl.screenX, $s = e.screenY - Yl.screenY) : $s = Js = 0, Yl = e), Js);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $s;
    }
  }), tf = wt(er), jg = C({}, er, { dataTransfer: 0 }), Lg = wt(jg), zg = C({}, Hl, { relatedTarget: 0 }), Ju = wt(zg), Hg = C({}, ma, {
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
  }, Kg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Qg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kg[e]) ? !!t[e] : !1;
  }
  function Ws() {
    return Qg;
  }
  var Qg = C({}, Hl, {
    key: function(e) {
      if (e.key) {
        var t = Vg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ws,
    charCode: function(e) {
      return e.type === "keypress" ? tr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
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
  }), af = wt(Jg), $g = C({}, Hl, {
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
  }), ay = St(ny), ly = [9, 13, 27, 32], Ps = yn && "CompositionEvent" in window, Vl = null;
  yn && "documentMode" in document && (Vl = document.documentMode);
  var iy = yn && "TextEvent" in window && !Vl, id = yn && (!Ps || Vl && 8 < Vl && 11 >= Vl), rd = " ", sd = !1;
  function ud(e, t) {
    switch (e) {
      case "keyup":
        return ly.indexOf(t.keyCode) !== -1;
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
  function od(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function ry(e, t) {
    switch (e) {
      case "compositionend":
        return od(t);
      case "keypress":
        return t.which !== 32 ? null : (sd = !0, rd);
      case "textInput":
        return e = t.data, e === rd && sd ? null : e;
      default:
        return null;
    }
  }
  function sy(e, t) {
    if ($a)
      return e === "compositionend" || !Ps && ud(e, t) ? (e = ed(), er = Fs = Yn = null, $a = !1, e) : null;
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
        return id && t.locale !== "ko" ? null : t.data;
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
  function cd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uy[e.type] : t === "textarea";
  }
  function dd(e, t, n, a) {
    Fa ? Ja ? Ja.push(a) : Ja = [a] : Fa = a, t = Zr(t, "onChange"), 0 < t.length && (n = new ar(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Xl = null, Kl = null;
  function oy(e) {
    Fm(e, 0);
  }
  function ir(e) {
    var t = Bl(e);
    if (Qc(t)) return e;
  }
  function fd(e, t) {
    if (e === "change") return t;
  }
  var md = !1;
  if (yn) {
    var eu;
    if (yn) {
      var tu = "oninput" in document;
      if (!tu) {
        var hd = document.createElement("div");
        hd.setAttribute("oninput", "return;"), tu = typeof hd.oninput == "function";
      }
      eu = tu;
    } else eu = !1;
    md = eu && (!document.documentMode || 9 < document.documentMode);
  }
  function gd() {
    Xl && (Xl.detachEvent("onpropertychange", yd), Kl = Xl = null);
  }
  function yd(e) {
    if (e.propertyName === "value" && ir(Kl)) {
      var t = [];
      dd(
        t,
        Kl,
        e,
        Ks(e)
      ), Pc(oy, t);
    }
  }
  function cy(e, t, n) {
    e === "focusin" ? (gd(), Xl = t, Kl = n, Xl.attachEvent("onpropertychange", yd)) : e === "focusout" && gd();
  }
  function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ir(Kl);
  }
  function fy(e, t) {
    if (e === "click") return ir(t);
  }
  function my(e, t) {
    if (e === "input" || e === "change")
      return ir(t);
  }
  function hy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : hy;
  function Ql(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!ce.call(t, i) || !Mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function pd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bd(e, t) {
    var n = pd(e);
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
      n = pd(n);
    }
  }
  function vd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ed(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Wi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Wi(e.document);
    }
    return t;
  }
  function nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gy = yn && "documentMode" in document && 11 >= document.documentMode, Ia = null, au = null, Zl = null, lu = !1;
  function wd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    lu || Ia == null || Ia !== Wi(a) || (a = Ia, "selectionStart" in a && nu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Zl && Ql(Zl, a) || (Zl = a, a = Zr(au, "onSelect"), 0 < a.length && (t = new ar(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ia)));
  }
  function pa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Wa = {
    animationend: pa("Animation", "AnimationEnd"),
    animationiteration: pa("Animation", "AnimationIteration"),
    animationstart: pa("Animation", "AnimationStart"),
    transitionrun: pa("Transition", "TransitionRun"),
    transitionstart: pa("Transition", "TransitionStart"),
    transitioncancel: pa("Transition", "TransitionCancel"),
    transitionend: pa("Transition", "TransitionEnd")
  }, iu = {}, Sd = {};
  yn && (Sd = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function ba(e) {
    if (iu[e]) return iu[e];
    if (!Wa[e]) return e;
    var t = Wa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Sd)
        return iu[e] = t[n];
    return e;
  }
  var xf = ga("animationend"), Rf = ga("animationiteration"), Tf = ga("animationstart"), gy = ga("transitionrun"), yy = ga("transitionstart"), py = ga("transitioncancel"), Af = ga("transitionend"), Cf = /* @__PURE__ */ new Map(), as = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  as.push("scrollEnd");
  function Pt(e, t) {
    Cf.set(e, t), da(t, [e]);
  }
  var rr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Vt = [], Pa = 0, su = 0;
  function sr() {
    for (var e = Pa, t = su = Pa = 0; t < e; ) {
      var n = Vt[t];
      Vt[t++] = null;
      var a = Vt[t];
      Vt[t++] = null;
      var i = Vt[t];
      Vt[t++] = null;
      var s = Vt[t];
      if (Vt[t++] = null, a !== null && i !== null) {
        var d = a.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), a.pending = i;
      }
      u !== 0 && Nf(n, i, u);
    }
  }
  function ur(e, t, n, a) {
    Vt[Pa++] = e, Vt[Pa++] = t, Vt[Pa++] = n, Vt[Pa++] = a, su |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function uu(e, t, n, a) {
    return ur(e, t, n, a), or(e);
  }
  function va(e, t) {
    return ur(e, null, null, t), or(e);
  }
  function Nf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, s = e.return; s !== null; )
      s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (i = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, i && t !== null && (i = 31 - Ut(n), e = s.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), s) : null;
  }
  function or(e) {
    if (50 < gi)
      throw gi = 0, bo = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var el = {};
  function vy(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new vy(e, t, n, a);
  }
  function ou(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function _d(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function cr(e, t, n, a, i, s) {
    var d = 0;
    if (a = e, typeof e == "function") ou(e) && (d = 1);
    else if (typeof e == "string")
      d = Rp(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ye:
          return e = Lt(31, n, t, i), e.elementType = ye, e.lanes = s, e;
        case O:
          return Ea(n.children, i, s, t);
        case V:
          d = 8, i |= 24;
          break;
        case V:
          return e = jt(12, n, t, i | 2), e.elementType = V, e.lanes = u, e;
        case he:
          return e = jt(13, n, t, i), e.elementType = he, e.lanes = u, e;
        case ne:
          return e = jt(19, n, t, i), e.elementType = ne, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                d = 10;
                break e;
              case Q:
                d = 9;
                break e;
              case $:
                d = 11;
                break e;
              case F:
                d = 14;
                break e;
              case de:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Lt(d, n, t, i), t.elementType = e, t.type = a, t.lanes = s, t;
  }
  function Ea(e, t, n, a) {
    return e = Lt(7, e, a, t), e.lanes = n, e;
  }
  function cu(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function Od(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function du(e, t, n) {
    return t = Lt(
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
  var Dd = /* @__PURE__ */ new WeakMap();
  function Xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Dd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: kn(t)
      }, Dd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: kn(t)
    };
  }
  var tl = [], nl = 0, dr = null, Fl = 0, Kt = [], Qt = 0, Vn = null, un = 1, on = "";
  function bn(e, t) {
    tl[nl++] = Fl, tl[nl++] = dr, dr = e, Fl = t;
  }
  function jd(e, t, n) {
    Kt[Qt++] = un, Kt[Qt++] = on, Kt[Qt++] = Vn, Vn = e;
    var a = un;
    e = on;
    var i = 32 - Ut(a) - 1;
    a &= ~(1 << i), n += 1;
    var s = 32 - Ut(t) + i;
    if (30 < s) {
      var d = i - i % 5;
      s = (a & (1 << d) - 1).toString(32), a >>= d, i -= d, un = 1 << 32 - Ut(t) + i | n << i | a, on = s + e;
    } else
      un = 1 << s | n << i | a, on = e;
  }
  function fu(e) {
    e.return !== null && (bn(e, 1), jd(e, 1, 0));
  }
  function mu(e) {
    for (; e === dr; )
      dr = tl[--nl], tl[nl] = null, Fl = tl[--nl], tl[nl] = null;
    for (; e === Vn; )
      Vn = Kt[--Qt], Kt[Qt] = null, on = Kt[--Qt], Kt[Qt] = null, un = Kt[--Qt], Kt[Qt] = null;
  }
  function Ud(e, t) {
    Kt[Qt++] = un, Kt[Qt++] = on, Kt[Qt++] = Vn, un = t.id, on = t.overflow, Vn = e;
  }
  var ft = null, Ge = null, Re = !1, Xn = null, Zt = !1, hu = Error(c(519));
  function Kn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Jl(Xt(t, e)), hu;
  }
  function Md(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[dt] = e, t[wt] = a, n) {
      case "dialog":
        ve("cancel", t), ve("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < pi.length; n++)
          ve(pi[n], t);
        break;
      case "source":
        ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ve("error", t), ve("load", t);
        break;
      case "details":
        ve("toggle", t);
        break;
      case "input":
        ve("invalid", t), Zc(
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
        ve("invalid", t);
        break;
      case "textarea":
        ve("invalid", t), Jc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Wm(t.textContent, n) ? (a.popover != null && (ve("beforetoggle", t), ve("toggle", t)), a.onScroll != null && ve("scroll", t), a.onScrollEnd != null && ve("scrollend", t), a.onClick != null && (t.onclick = gn), t = !0) : t = !1, t || Kn(e, !0);
  }
  function Ld(e) {
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
  function al(e) {
    if (e !== ft) return !1;
    if (!Re) return Ld(e), Re = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Uo(e.type, e.memoizedProps)), n = !n), n && Ge && Kn(e), Ld(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ge = s0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ge = s0(e);
    } else
      t === 27 ? (t = Ge, ia(e.type) ? (e = Bo, Bo = null, Ge = e) : Ge = t) : Ge = ft ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function wa() {
    Ge = ft = null, Re = !1;
  }
  function gu() {
    var e = Xn;
    return e !== null && (Nt === null ? Nt = e : Nt.push.apply(
      Nt,
      e
    ), Xn = null), e;
  }
  function Jl(e) {
    Xn === null ? Xn = [e] : Xn.push(e);
  }
  var ms = w(null), va = null, vn = null;
  function Yn(e, t, n) {
    K(ms, t._currentValue), t._currentValue = n;
  }
  function En(e) {
    e._currentValue = ms.current, L(ms);
  }
  function pu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function bu(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var s = i.dependencies;
      if (s !== null) {
        var d = i.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var g = s;
          s = i;
          for (var E = 0; E < t.length; E++)
            if (g.context === t[E]) {
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), pu(
                s.return,
                n,
                e
              ), a || (d = null);
              break e;
            }
          s = g.next;
        }
      } else if (i.tag === 18) {
        if (d = i.return, d === null) throw Error(c(341));
        d.lanes |= n, s = d.alternate, s !== null && (s.lanes |= n), pu(d, n, e), d = null;
      } else d = i.child;
      if (d !== null) d.return = i;
      else
        for (d = i; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (i = d.sibling, i !== null) {
            i.return = d.return, d = i;
            break;
          }
          d = d.return;
        }
      i = d;
    }
  }
  function ll(e, t, n, a) {
    e = null;
    for (var i = t, s = !1; i !== null; ) {
      if (!s) {
        if ((i.flags & 524288) !== 0) s = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var d = i.alternate;
        if (d === null) throw Error(c(387));
        if (d = d.memoizedProps, d !== null) {
          var g = i.type;
          Mt(i.pendingProps.value, d.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (i === re.current) {
        if (d = i.alternate, d === null) throw Error(c(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Si) : e = [Si]);
      }
      i = i.return;
    }
    e !== null && bu(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function fr(e) {
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
  function xa(e) {
    Sa = e, vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function mt(e) {
    return zd(Sa, e);
  }
  function mr(e, t) {
    return Sa === null && xa(e), zd(e, t);
  }
  function zd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, vn === null) {
      if (e === null) throw Error(c(308));
      vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else vn = vn.next = t;
    return n;
  }
  var Ey = typeof AbortController < "u" ? AbortController : function() {
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
  }, wy = r.unstable_scheduleCallback, Sy = r.unstable_NormalPriority, nt = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function vu() {
    return {
      controller: new Ey(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $l(e) {
    e.refCount--, e.refCount === 0 && wy(Sy, function() {
      e.controller.abort();
    });
  }
  var Il = null, Eu = 0, il = 0, rl = null;
  function xy(e, t) {
    if (Il === null) {
      var n = Il = [];
      Eu = 0, il = Ro(), rl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Eu++, t.then(Hd, Hd), t;
  }
  function Hd() {
    if (--Eu === 0 && Il !== null) {
      rl !== null && (rl.status = "fulfilled");
      var e = Il;
      Il = null, il = 0, rl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ry(e, t) {
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
  var Bd = H.S;
  H.S = function(e, t) {
    Sm = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && xy(e, t), Bd !== null && Bd(e, t);
  };
  var Sa = w(null);
  function bs() {
    var e = Sa.current;
    return e !== null ? e : Le.pooledCache;
  }
  function cr(e, t) {
    t === null ? K(Sa, Sa.current) : K(Sa, t.pool);
  }
  function kd() {
    var e = wu();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var sl = Error(c(460)), Su = Error(c(474)), gr = Error(c(542)), yr = { then: function() {
  } };
  function qd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Gd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(gn, gn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Vd(e), e;
      default:
        if (typeof t.status == "string") t.then(gn, gn);
        else {
          if (e = Be, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Vd(e), e;
        }
        throw Na = t, sl;
    }
  }
  function Ta(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Na = n, sl) : n;
    }
  }
  var Na = null;
  function Yd() {
    if (Na === null) throw Error(c(459));
    var e = Na;
    return Na = null, e;
  }
  function Vd(e) {
    if (e === sl || e === gr)
      throw Error(c(483));
  }
  var ul = null, Wl = 0;
  function pr(e) {
    var t = Wl;
    return Wl += 1, ul === null && (ul = []), Gd(ul, e, t);
  }
  function Pl(e, t) {
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
  function Xd(e) {
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
    function d(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, R, N, B) {
      return R === null || R.tag !== 6 ? (R = us(N, T.mode, B), R.return = T, R) : (R = i(R, N), R.return = T, R);
    }
    function E(T, R, N, B) {
      var ee = N.type;
      return ee === D ? j(
        T,
        R,
        N.props.children,
        B,
        N.key
      ) : R !== null && (R.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === ge && wa(ee) === R.type) ? (R = i(R, N.props), $l(R, N), R.return = T, R) : (R = rr(
        N.type,
        N.key,
        N.props,
        null,
        T.mode,
        B
      ), $l(R, N), R.return = T, R);
    }
    function _(T, R, N, B) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== N.containerInfo || R.stateNode.implementation !== N.implementation ? (R = ss(N, T.mode, B), R.return = T, R) : (R = i(R, N.children || []), R.return = T, R);
    }
    function j(T, R, N, B, ee) {
      return R === null || R.tag !== 7 ? (R = pa(
        N,
        T.mode,
        B,
        ee
      ), R.return = T, R) : (R = i(R, N), R.return = T, R);
    }
    function q(T, R, N) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = cu(
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
            ), $l(N, R), N.return = T, N;
          case z:
            return R = ss(
              R,
              T.mode,
              N
            ), R.return = T, R;
          case ge:
            return R = wa(R), q(T, R, N);
        }
        if (G(R) || Ne(R))
          return R = pa(
            R,
            T.mode,
            N,
            null
          ), R.return = T, R;
        if (typeof R.then == "function")
          return q(T, mr(R), N);
        if (R.$$typeof === F)
          return q(
            T,
            or(T, R),
            N
          );
        br(T, R);
      }
      return null;
    }
    function O(T, R, N, B) {
      var ee = R !== null ? R.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return ee !== null ? null : h(T, R, "" + N, B);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            return N.key === ee ? E(T, R, N, B) : null;
          case z:
            return N.key === ee ? _(T, R, N, B) : null;
          case ge:
            return N = wa(N), O(T, R, N, B);
        }
        if (G(N) || Ne(N))
          return ee !== null ? null : j(T, R, N, B, null);
        if (typeof N.then == "function")
          return O(
            T,
            R,
            mr(N),
            B
          );
        if (N.$$typeof === F)
          return O(
            T,
            R,
            or(T, N),
            B
          );
        hr(T, N);
      }
      return null;
    }
    function M(T, R, N, B, ee) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return T = T.get(N) || null, h(R, T, "" + B, ee);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case A:
            return T = T.get(
              B.key === null ? N : B.key
            ) || null, E(R, T, B, ee);
          case z:
            return T = T.get(
              B.key === null ? N : B.key
            ) || null, _(R, T, B, ee);
          case ge:
            return B = wa(B), M(
              T,
              R,
              N,
              B,
              ee
            );
        }
        if (G(B) || Ne(B))
          return T = T.get(N) || null, j(R, T, B, ee, null);
        if (typeof B.then == "function")
          return M(
            T,
            R,
            N,
            mr(B),
            ee
          );
        if (k.$$typeof === W)
          return U(
            T,
            R,
            N,
            or(R, B),
            ee
          );
        br(R, k);
      }
      return null;
    }
    function J(T, R, N, B) {
      for (var ee = null, Re = null, $ = R, me = R = 0, Ee = null; $ !== null && me < N.length; me++) {
        $.index > me ? (Ee = $, $ = null) : Ee = $.sibling;
        var Te = O(
          T,
          $,
          N[me],
          B
        );
        if (Ne === null) {
          I === null && (I = Se);
          break;
        }
        e && I && Ne.alternate === null && t(T, I), R = s(Ne, R, ge), Te === null ? te = Ne : Te.sibling = Ne, Te = Ne, I = Se;
      }
      if (me === N.length)
        return n(T, $), Se && bn(T, me), ee;
      if ($ === null) {
        for (; me < N.length; me++)
          $ = q(T, N[me], B), $ !== null && (R = u(
            $,
            R,
            ge
          ), Te === null ? te = I : Te.sibling = I, Te = I);
        return Re && bn(T, ge), te;
      }
      for ($ = a($); me < N.length; me++)
        Ee = M(
          $,
          T,
          me,
          N[me],
          B
        ), Ee !== null && (e && Ee.alternate !== null && $.delete(
          Ee.key === null ? me : Ee.key
        ), R = u(
          Ee,
          R,
          ge
        ), Te === null ? te = Se : Te.sibling = Se, Te = Se);
      return e && I.forEach(function(ca) {
        return t(T, ca);
      }), Re && bn(T, ge), te;
    }
    function te(T, R, N, B) {
      if (N == null) throw Error(c(151));
      for (var ee = null, Re = null, $ = R, me = R = 0, Ee = null, Te = N.next(); $ !== null && !Te.done; me++, Te = N.next()) {
        $.index > me ? (Ee = $, $ = null) : Ee = $.sibling;
        var ra = O(T, $, Te.value, B);
        if (ra === null) {
          $ === null && ($ = Ee);
          break;
        }
        e && I && ca.alternate === null && t(T, I), R = s(ca, R, ge), Te === null ? te = ca : Te.sibling = ca, Te = ca, I = Se;
      }
      if (Te.done)
        return n(T, $), Se && bn(T, me), ee;
      if ($ === null) {
        for (; !Te.done; me++, Te = N.next())
          Te = q(T, Te.value, B), Te !== null && (R = u(Te, R, me), Re === null ? ee = Te : Re.sibling = Te, Re = Te);
        return Se && bn(T, me), ee;
      }
      for ($ = a($); !Te.done; me++, Te = N.next())
        Te = M($, T, me, Te.value, B), Te !== null && (e && Te.alternate !== null && $.delete(Te.key === null ? me : Te.key), R = u(Te, R, me), Re === null ? ee = Te : Re.sibling = Te, Re = Te);
      return e && $.forEach(function(jp) {
        return t(T, jp);
      }), Se && bn(T, me), ee;
    }
    function je(T, R, N, B) {
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
                      ), k = i(
                        R,
                        N.props.children
                      ), B.return = T, T = B;
                      break e;
                    }
                  } else if (R.elementType === te || typeof te == "object" && te !== null && te.$$typeof === de && Ta(te) === R.type) {
                    n(
                      T,
                      R.sibling
                    ), B = i(R, N.props), $l(B, N), B.return = T, T = B;
                    break e;
                  }
                  n(T, R);
                  break;
                } else t(T, R);
                R = R.sibling;
              }
              N.type === D ? (B = pa(
                N.props.children,
                T.mode,
                B,
                N.key
              ), B.return = T, T = B) : (B = rr(
                N.type,
                N.key,
                N.props,
                null,
                T.mode,
                B
              ), $l(B, N), B.return = T, T = B);
            }
            return f(T);
          case z:
            e: {
              for (ee = N.key; R !== null; ) {
                if (R.key === ee)
                  if (R.tag === 4 && R.stateNode.containerInfo === N.containerInfo && R.stateNode.implementation === N.implementation) {
                    n(
                      T,
                      R.sibling
                    ), B = i(R, N.children || []), B.return = T, T = B;
                    break e;
                  } else {
                    n(T, R);
                    break;
                  }
                else t(T, R);
                R = R.sibling;
              }
              B = ss(N, T.mode, B), B.return = T, T = B;
            }
            return f(T);
          case ge:
            return N = wa(N), je(
              T,
              R,
              N,
              B
            );
        }
        if (G(N))
          return J(
            T,
            R,
            N,
            B
          );
        if (Ne(N)) {
          if (ee = Ne(N), typeof ee != "function") throw Error(c(150));
          return N = ee.call(N), te(
            T,
            R,
            N,
            B
          );
        }
        if (typeof N.then == "function")
          return je(
            T,
            R,
            mr(N),
            B
          );
        if (N.$$typeof === F)
          return je(
            T,
            R,
            or(T, N),
            B
          );
        hr(T, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, R !== null && R.tag === 6 ? (n(T, R.sibling), B = i(R, N), B.return = T, T = B) : (n(T, R), B = us(N, T.mode, B), B.return = T, T = B), f(T)) : n(T, R);
    }
    return function(T, R, N, B) {
      try {
        Wl = 0;
        var te = Le(
          T,
          R,
          N,
          B
        );
        return ul = null, te;
      } catch (I) {
        if (I === sl || I === gr) throw I;
        var Te = Lt(29, I, null, T.mode);
        return Te.lanes = k, Te.return = T, Te;
      }
    };
  }
  var Ca = Xd(!0), Kd = Xd(!1), Zn = !1;
  function xu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ru(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Fn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Jn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ce & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = ir(e), Nf(e, null, n), t;
    }
    return ur(e, a, t, n), or(e);
  }
  function ei(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, zc(e, n);
    }
  }
  function Tu(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var i = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? i = s = d : s = s.next = d, n = n.next;
        } while (n !== null);
        s === null ? i = s = t : s = s.next = t;
      } else i = s = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Nu = !1;
  function ti() {
    if (Nu) {
      var e = rl;
      if (e !== null) throw e;
    }
  }
  function ni(e, t, n, a) {
    Nu = !1;
    var i = e.updateQueue;
    Zn = !1;
    var s = i.firstBaseUpdate, d = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var E = h, _ = E.next;
      E.next = null, f === null ? u = _ : f.next = _, f = E;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, h = j.lastBaseUpdate, h !== f && (h === null ? j.firstBaseUpdate = _ : h.next = _, j.lastBaseUpdate = E));
    }
    if (s !== null) {
      var q = i.baseState;
      f = 0, j = _ = E = null, h = u;
      do {
        var O = h.lane & -536870913, M = O !== h.lane;
        if (M ? (ve & O) === O : (a & O) === O) {
          O !== 0 && O === tl && (xs = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ne = g;
            D = t;
            var Le = n;
            switch (ne.tag) {
              case 1:
                if (J = ne.payload, typeof J == "function") {
                  q = J.call(Le, q, D);
                  break e;
                }
                q = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = te.payload, O = typeof J == "function" ? J.call(je, q, O) : J, O == null) break e;
                q = C({}, q, O);
                break e;
              case 2:
                Zn = !0;
            }
          }
          D = g.callback, D !== null && (e.flags |= 64, U && (e.flags |= 8192), U = i.callbacks, U === null ? i.callbacks = [D] : U.push(D));
        } else
          U = {
            lane: D,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, j === null ? (_ = j = M, E = q) : j = j.next = M, f |= O;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          U = g, g = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      j === null && (E = q), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = j, u === null && (i.shared.lanes = 0), Fn |= f, e.lanes = f, e.memoizedState = q;
    }
  }
  function Qd(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Zd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Qd(n[e], t);
  }
  var il = w(null), gr = w(0);
  function Jf(e, t) {
    e = _n, K(gr, e), K(il, t), _n = e | t.baseLanes;
  }
  function Rs() {
    K(gr, _n), K(il, il.current);
  }
  function Ts() {
    _n = gr.current, L(il), L(gr);
  }
  var Lt = w(null), Zt = null;
  function Qn(e) {
    var t = e.alternate;
    K(Ie, Ie.current & 1), K(Lt, e), Zt === null && (t === null || il.current !== null || t.memoizedState !== null) && (Zt = e);
  }
  function As(e) {
    K(Ie, Ie.current), K(Lt, e), Zt === null && (Zt = e);
  }
  function $f(e) {
    e.tag === 22 ? (K(Ie, Ie.current), K(Lt, e), Zt === null && (Zt = e)) : Zn();
  }
  function Zn() {
    K(Ie, Ie.current), K(Lt, Lt.current);
  }
  function zt(e) {
    L(Lt), Zt === e && (Zt = null), L(Ie);
  }
  var Ie = w(0);
  function yr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || zo(n) || Ho(n)))
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
  var wn = 0, fe = null, Ue = null, at = null, wr = !1, cl = !1, Aa = !1, Sr = 0, ai = 0, dl = null, Ty = 0;
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
    return Sn = u, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? Ud : Xs, Ta = !1, u = n(a, i), Ta = !1, rl && (u = If(
      t,
      n,
      a,
      i
    )), $d(e), s;
  }
  function $d(e) {
    H.H = ri;
    var t = Ue !== null && Ue.next !== null;
    if (wn = 0, at = Ue = fe = null, wr = !1, ai = 0, dl = null, t) throw Error(c(300));
    e === null || lt || (e = e.dependencies, e !== null && fr(e) && (lt = !0));
  }
  function Id(e, t, n, a) {
    fe = e;
    var i = 0;
    do {
      if (cl && (dl = null), ai = 0, cl = !1, 25 <= i) throw Error(c(301));
      if (i += 1, at = Ue = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      H.H = Mf, s = t(n, a);
    } while (cl);
    return s;
  }
  function Ny() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? li(t) : t, e = e.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== e && (fe.flags |= 1024), t;
  }
  function ju() {
    var e = Sr !== 0;
    return Sr = 0, e;
  }
  function Uu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Mu(e) {
    if (wr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      wr = !1;
    }
    wn = 0, at = Ue = fe = null, cl = !1, ai = Sr = 0, dl = null;
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? fe.memoizedState = at = e : at = at.next = e, at;
  }
  function et() {
    if (Ue === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = at === null ? fe.memoizedState : at.next;
    if (t !== null)
      at = t, Ue = e;
    else {
      if (e === null)
        throw fe.alternate === null ? Error(c(467)) : Error(c(310));
      Ue = e, e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }, at === null ? fe.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function xr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function li(e) {
    var t = ai;
    return ai += 1, dl === null && (dl = []), e = Gd(dl, e, t), t = fe, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? Uf : Qu), e;
  }
  function Rr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return li(e);
      if (e.$$typeof === W) return mt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Lu(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = xr(), fe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Ke;
    return t.index++, n;
  }
  function Sn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Tr(e) {
    var t = et();
    return zu(t, Ue, e);
  }
  function zu(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue, s = a.pending;
    if (s !== null) {
      if (i !== null) {
        var d = i.next;
        i.next = s.next, s.next = d;
      }
      t.baseQueue = i = s, a.pending = null;
    }
    if (s = e.baseState, i === null) e.memoizedState = s;
    else {
      t = i.next;
      var h = f = null, E = null, _ = t, j = !1;
      do {
        var q = _.lane & -536870913;
        if (q !== _.lane ? (we & q) === q : (wn & q) === q) {
          var D = _.revertLane;
          if (D === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), q === tl && (j = !0);
          else if ((Sn & O) === O) {
            _ = _.next, O === tl && (j = !0);
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
            }, E === null ? (g = E = q, d = s) : E = E.next = q, fe.lanes |= D, ea |= D;
          q = _.action, Aa && n(s, q), s = _.hasEagerState ? _.eagerState : n(s, q);
        } else
          D = {
            lane: q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (g = E = D, d = s) : E = E.next = D, fe.lanes |= q, ea |= q;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = h, !Mt(u, e.memoizedState) && (tt = !0, j && (n = nl, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = d, e.baseQueue = E, a.lastRenderedState = s;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Hu(e) {
    var t = et(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = i = i.next;
      do
        s = e(s, d.action), d = d.next;
      while (d !== i);
      Mt(s, t.memoizedState) || (lt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, a];
  }
  function Wd(e, t, n) {
    var a = fe, i = et(), s = Re;
    if (s) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var d = !Mt(
      (Ue || i).memoizedState,
      n
    );
    if (d && (i.memoizedState = n, lt = !0), i = i.queue, qu(tf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || d || at !== null && at.memoizedState.tag & 1) {
      if (a.flags |= 2048, fl(
        9,
        { destroy: void 0 },
        ef.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), Be === null) throw Error(c(349));
      s || (wn & 127) !== 0 || Pd(a, t, n);
    }
    return n;
  }
  function Pd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = xr(), fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ef(e, t, n, a) {
    t.value = n, t.getSnapshot = a, nf(t) && af(e);
  }
  function tf(e, t, n) {
    return n(function() {
      nf(t) && af(e);
    });
  }
  function nf(e) {
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
  function Bu(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Aa) {
        qn(!0);
        try {
          n();
        } finally {
          qn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sn,
      lastRenderedState: e
    }, t;
  }
  function lf(e, t, n, a) {
    return e.baseState = n, zu(
      e,
      Ue,
      typeof a == "function" ? a : Sn
    );
  }
  function Cy(e, t, n, a, i) {
    if (Ar(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          s.listeners.push(d);
        }
      };
      H.T !== null ? n(!0) : s.isTransition = !1, a(s), n = t.pending, n === null ? (s.next = t.pending = s, rf(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function rf(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var s = H.T, d = {};
      H.T = d;
      try {
        var g = n(i, a), E = H.S;
        E !== null && E(d, g), sf(e, t, g);
      } catch (_) {
        ku(e, t, _);
      } finally {
        s !== null && d.types !== null && (s.types = d.types), H.T = s;
      }
    } else
      try {
        s = n(i, a), sf(e, t, s);
      } catch (_) {
        ku(e, t, _);
      }
  }
  function sf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        uf(e, t, a);
      },
      function(a) {
        return ku(e, t, a);
      }
    ) : uf(e, t, n);
  }
  function uf(e, t, n) {
    t.status = "fulfilled", t.value = n, of(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, rf(e, n)));
  }
  function ku(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, of(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function of(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function cf(e, t) {
    return t;
  }
  function df(e, t) {
    if (Re) {
      var n = Be.formState;
      if (n !== null) {
        e: {
          var a = fe;
          if (Re) {
            if (Ge) {
              t: {
                for (var i = Ge, s = Zt; i.nodeType !== 8; ) {
                  if (!s) {
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
                s = i.data, i = s === "F!" || s === "F" ? i : null;
              }
              if (i) {
                Ge = Jt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Kn(a);
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
      lastRenderedReducer: cf,
      lastRenderedState: t
    }, n.queue = a, n = Of.bind(
      null,
      fe,
      a
    ), a.dispatch = n, a = Bu(!1), s = Ku.bind(
      null,
      fe,
      !1,
      a.queue
    ), a = vt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = Cy.bind(
      null,
      fe,
      i,
      s,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function ff(e) {
    var t = et();
    return mf(t, Ue, e);
  }
  function mf(e, t, n) {
    if (t = zu(
      e,
      t,
      cf
    )[0], e = Tr(Sn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = li(t);
      } catch (d) {
        throw d === sl ? gr : d;
      }
    else a = t;
    t = et();
    var i = t.queue, s = i.dispatch;
    return n !== t.memoizedState && (fe.flags |= 2048, fl(
      9,
      { destroy: void 0 },
      Cy.bind(null, i, n),
      null
    )), [a, s, e];
  }
  function Cy(e, t) {
    e.action = t;
  }
  function hf(e) {
    var t = et(), n = Ue;
    if (n !== null)
      return mf(t, n, e);
    et(), t = t.memoizedState, n = et();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function fl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = fe.updateQueue, t === null && (t = xr(), fe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function gf() {
    return et().memoizedState;
  }
  function Nr(e, t, n, a) {
    var i = vt();
    fe.flags |= e, i.memoizedState = fl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Cr(e, t, n, a) {
    var i = et();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Ue !== null && a !== null && Cs(a, Ue.memoizedState.deps) ? i.memoizedState = sl(t, u, n, a) : (fe.flags |= e, i.memoizedState = sl(
      1 | t,
      s,
      n,
      a
    ));
  }
  function yf(e, t) {
    Nr(8390656, 8, e, t);
  }
  function qu(e, t) {
    Cr(2048, 8, e, t);
  }
  function Ny(e) {
    fe.flags |= 4;
    var t = fe.updateQueue;
    if (t === null)
      t = xr(), fe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function yd(e) {
    var t = We().memoizedState;
    return Ny({ ref: t, nextImpl: e }), function() {
      if ((Ce & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function bf(e, t) {
    return Cr(4, 2, e, t);
  }
  function vf(e, t) {
    return Cr(4, 4, e, t);
  }
  function Ef(e, t) {
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
  function wf(e, t, n) {
    n = n != null ? n.concat([e]) : null, Cr(4, 4, Ef.bind(null, t, e), n);
  }
  function Gu() {
  }
  function Sf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Cs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function xf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Cs(t, a[1]))
      return a[0];
    if (a = e(), Aa) {
      qn(!0);
      try {
        e();
      } finally {
        qn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Yu(e, t, n) {
    return n === void 0 || (wn & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Rm(), fe.lanes |= e, ea |= e, n);
  }
  function Rf(e, t, n, a) {
    return Mt(n, t) ? n : ol.current !== null ? (e = Yu(e, n, a), Mt(e, t) || (lt = !0), e) : (wn & 42) === 0 || (wn & 1073741824) !== 0 && (we & 261930) === 0 ? (lt = !0, e.memoizedState = n) : (e = Rm(), fe.lanes |= e, ea |= e, t);
  }
  function Tf(e, t, n, a, i) {
    var s = G.p;
    G.p = s !== 0 && 8 > s ? s : 8;
    var d = H.T, g = {};
    H.T = g, Ku(e, !1, t, n);
    try {
      var E = i(), _ = H.S;
      if (_ !== null && _(h, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var j = xy(
          E,
          a
        );
        ii(
          e,
          t,
          j,
          qt(e)
        );
      } else
        ii(
          e,
          t,
          a,
          qt(e)
        );
    } catch (q) {
      ii(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: q },
        qt()
      );
    } finally {
      G.p = s, d !== null && g.types !== null && (d.types = g.types), H.T = d;
    }
  }
  function Oy() {
  }
  function Vu(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Nf(e).queue;
    Tf(
      e,
      i,
      t,
      ae,
      n === null ? Oy : function() {
        return Cf(e), n(a);
      }
    );
  }
  function Nf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: ae
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
        lastRenderedReducer: Sn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Cf(e) {
    var t = Nf(e);
    t.next === null && (t = e.alternate.memoizedState), ii(
      e,
      t.next.queue,
      {},
      qt()
    );
  }
  function Xu() {
    return mt(Si);
  }
  function Cd() {
    return We().memoizedState;
  }
  function Nd() {
    return We().memoizedState;
  }
  function Dy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = qt();
          e = Vn(n);
          var a = Kn(t, e, n);
          a !== null && (Ct(a, t, n), Fl(a, t, n)), t = { cache: ys() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function jy(e, t, n) {
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
  function Of(e, t, n) {
    var a = qt();
    ii(e, t, n, a);
  }
  function ii(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ar(e)) Df(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var d = t.lastRenderedState, g = s(d, n);
          if (i.hasEagerState = !0, i.eagerState = g, Mt(g, d))
            return ur(e, t, i, 0), Be === null && sr(), !1;
        } catch {
        }
      if (n = is(e, t, i, a), n !== null)
        return Ct(n, e, a), Dd(n, t, a), !0;
    }
    return !1;
  }
  function Ku(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ro(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ar(e)) {
      if (t) throw Error(c(479));
    } else
      t = uu(
        e,
        n,
        a,
        2
      ), t !== null && Ct(t, e, 2);
  }
  function Ar(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Df(e, t) {
    cl = wr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function jf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, zc(e, n);
    }
  }
  var ri = {
    readContext: mt,
    use: Rr,
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
  ri.useEffectEvent = Je;
  var Uf = {
    readContext: mt,
    use: Rr,
    useCallback: function(e, t) {
      return vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: mt,
    useEffect: yf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Nr(
        4194308,
        4,
        Ef.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Nr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Nr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = vt();
      t = t === void 0 ? null : t;
      var a = e();
      if (Aa) {
        qn(!0);
        try {
          e();
        } finally {
          qn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = vt();
      if (n !== void 0) {
        var i = n(t);
        if (Aa) {
          qn(!0);
          try {
            n(t);
          } finally {
            qn(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = jy.bind(
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
      e = Bu(e);
      var t = e.queue, n = Of.bind(null, fe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var n = vt();
      return Yu(n, e, t);
    },
    useTransition: function() {
      var e = Bu(!1);
      return e = Tf.bind(
        null,
        fe,
        e.queue,
        !0,
        !1
      ), vt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = fe, i = vt();
      if (Re) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Be === null)
          throw Error(c(349));
        (we & 127) !== 0 || Pd(a, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return i.queue = s, yf(tf.bind(null, a, s, e), [
        e
      ]), a.flags |= 2048, fl(
        9,
        { destroy: void 0 },
        ef.bind(
          null,
          a,
          s,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = vt(), t = Be.identifierPrefix;
      if (Re) {
        var n = on, a = un;
        n = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ty++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xu,
    useFormState: df,
    useActionState: df,
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
      return t.queue = n, t = Ku.bind(
        null,
        fe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Lu,
    useCacheRefresh: function() {
      return vt().memoizedState = Dy.bind(
        null,
        fe
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
  }, Qu = {
    readContext: mt,
    use: Rr,
    useCallback: Sf,
    useContext: mt,
    useEffect: qu,
    useImperativeHandle: wf,
    useInsertionEffect: bf,
    useLayoutEffect: vf,
    useMemo: xf,
    useReducer: Tr,
    useRef: gf,
    useState: function() {
      return Tr(Sn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var n = et();
      return Rf(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Tr(Sn)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : li(e),
        t
      ];
    },
    useSyncExternalStore: Wf,
    useId: Cd,
    useHostTransitionStatus: Gs,
    useFormState: fd,
    useActionState: fd,
    useOptimistic: function(e, t) {
      var n = et();
      return lf(n, Ue, e, t);
    },
    useMemoCache: Us,
    useCacheRefresh: Nd
  };
  Qu.useEffectEvent = pf;
  var Mf = {
    readContext: mt,
    use: Rr,
    useCallback: Sf,
    useContext: mt,
    useEffect: qu,
    useImperativeHandle: wf,
    useInsertionEffect: bf,
    useLayoutEffect: vf,
    useMemo: xf,
    useReducer: Hu,
    useRef: gf,
    useState: function() {
      return Hu(Sn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(e, t) {
      var n = et();
      return Ue === null ? Yu(n, e, t) : Rf(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hu(Sn)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : li(e),
        t
      ];
    },
    useSyncExternalStore: Wf,
    useId: Cd,
    useHostTransitionStatus: Gs,
    useFormState: md,
    useActionState: md,
    useOptimistic: function(e, t) {
      var n = et();
      return Ue !== null ? lf(n, Ue, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Us,
    useCacheRefresh: Nd
  };
  Md.useEffectEvent = yd;
  function Vs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Fu = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Vn(a);
      i.payload = t, n != null && (i.callback = n), t = Kn(e, i, a), t !== null && (Ct(t, e, a), Fl(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Vn(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kn(e, i, a), t !== null && (Ct(t, e, a), Fl(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = qt(), a = Vn(n);
      a.tag = 2, t != null && (a.callback = t), t = Kn(e, a, n), t !== null && (Ct(t, e, n), Fl(t, e, n));
    }
  };
  function Lf(e, t, n, a, i, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, s, d) : t.prototype && t.prototype.isPureReactComponent ? !Ql(n, a) || !Ql(i, s) : !0;
  }
  function zf(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Fu.enqueueReplaceState(t, t.state, null);
  }
  function _a(e, t) {
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
  function Hf(e) {
    rr(e);
  }
  function Bf(e) {
    console.error(e);
  }
  function kf(e) {
    rr(e);
  }
  function _r(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function qf(e, t, n) {
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
  function Ju(e, t, n) {
    return n = Fn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      _r(e, t);
    }, n;
  }
  function Gf(e) {
    return e = Fn(e), e.tag = 3, e;
  }
  function Yf(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = a.value;
      e.payload = function() {
        return i(s);
      }, e.callback = function() {
        qf(t, n, a);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      qf(t, n, a), typeof i != "function" && (ta === null ? ta = /* @__PURE__ */ new Set([this]) : ta.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Uy(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && ll(
        t,
        n,
        i,
        !0
      ), n = zt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ft === null ? Gr() : n.alternate === null && $e === 0 && ($e = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === yr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), wo(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === yr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), wo(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return wo(e, a, i), Gr(), !1;
    }
    if (Re)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== hu && (e = Error(c(422), { cause: a }), Jl(Xt(e, n)))) : (a !== hu && (t = Error(c(423), {
        cause: a
      }), Jl(
        Xt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Xt(a, n), i = Ju(
        e.stateNode,
        a,
        i
      ), Tu(e, i), $e !== 4 && ($e = 2)), !1;
    var s = Error(c(520), { cause: a });
    if (s = Xt(s, n), hi === null ? hi = [s] : hi.push(s), $e !== 4 && ($e = 2), t === null) return !0;
    a = Xt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Ju(n.stateNode, a, e), Tu(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ta === null || !ta.has(s))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Gf(i), Yf(
              i,
              e,
              n,
              a
            ), Tu(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var $u = Error(c(461)), lt = !1;
  function ht(e, t, n, a) {
    t.child = e === null ? Kd(t, null, n, a) : Ca(
      t,
      e.child,
      n,
      a
    );
  }
  function Vf(e, t, n, a, i) {
    n = n.render;
    var s = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a)
        h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return Ea(t), a = Ns(
      e,
      t,
      n,
      d,
      s,
      i
    ), g = ju(), e !== null && !lt ? (Uu(e, t, i), xn(e, t, i)) : (Re && g && fu(t), t.flags |= 1, ht(e, t, a, i), t.child);
  }
  function Xf(e, t, n, a, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !ou(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, Kf(
        e,
        t,
        s,
        a,
        i
      )) : (e = cr(
        n.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !lo(e, i)) {
      var d = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ql, n(d, a) && e.ref === t.ref)
        return xn(e, t, i);
    }
    return t.flags |= 1, e = pn(s, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Kf(e, t, n, a, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ql(s, a) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = a = s, lo(e, i))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, xn(e, t, i);
    }
    return Iu(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Qf(e, t, n, a) {
    var i = a.children, s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, i = 0; a !== null; )
            i = i | a.lanes | a.childLanes, a = a.sibling;
          a = i & ~s;
        } else a = 0, t.child = null;
        return Zf(
          e,
          t,
          s,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && hr(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? Fd(t, s) : Cu(), Jd(t);
      else
        return a = t.lanes = 536870912, Zf(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          a
        );
    } else
      s !== null ? (hr(t, s.cachePool), Fd(t, s), In(), t.memoizedState = null) : (e !== null && hr(t, null), Cu(), In());
    return ht(e, t, i, n), t.child;
  }
  function si(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Zf(e, t, n, a, i) {
    var s = wu();
    return s = s === null ? null : { parent: nt._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && hr(t, null), Cu(), Jd(t), e !== null && ll(e, t, a, !0), t.childLanes = i, null;
  }
  function Ar(e, t) {
    return t = Nr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ff(e, t, n) {
    return Ca(t, e.child, null, n), e = Or(t, t.pendingProps), e.flags |= 2, Ht(t), t.memoizedState = null, e;
  }
  function My(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Re) {
        if (a.mode === "hidden")
          return e = Or(t, a), t.lanes = 536870912, si(null, e);
        if (_u(t), (e = Ge) ? (e = r0(
          e,
          Zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Vn !== null ? { id: un, overflow: on } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Od(e), n.return = t, t.child = n, ft = t, Ge = null)) : e = null, e === null) throw Kn(t);
        return t.lanes = 536870912, null;
      }
      return Or(t, a);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if (_u(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Ff(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (tt || el(e, t, n, !1), i = (n & e.childLanes) !== 0, tt || i) {
        if (a = Le, a !== null && (f = zc(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ya(e, f), Ct(a, e, f), Zs;
        Hr(), t = Zd(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Ge = Jt(d.nextSibling), ft = t, Re = !0, Xn = null, Zt = !1, e !== null && Ud(t, e), t = Or(t, a), t.flags |= 4096;
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
    ), a = ju(), e !== null && !lt ? (Uu(e, t, i), xn(e, t, i)) : (Re && a && fu(t), t.flags |= 1, ht(e, t, n, i), t.child);
  }
  function Jf(e, t, n, a, i, s) {
    return xa(t), t.updateQueue = null, n = Id(
      t,
      a,
      n,
      i
    ), $d(e), a = ju(), e !== null && !lt ? (Uu(e, t, s), xn(e, t, s)) : (Re && a && fu(t), t.flags |= 1, ht(e, t, n, s), t.child);
  }
  function $f(e, t, n, a, i) {
    if (xa(t), t.stateNode === null) {
      var s = el, d = n.contextType;
      typeof d == "object" && d !== null && (s = mt(d)), s = new n(a, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Fu, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = a, s.state = t.memoizedState, s.refs = {}, xu(t), d = n.contextType, s.context = typeof d == "object" && d !== null ? mt(d) : el, s.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Zu(
        t,
        n,
        d,
        a
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (d = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), d !== s.state && Fu.enqueueReplaceState(s, s.state, null), ni(t, a, s, i), ti(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps, E = Aa(n, h);
      u.props = E;
      var _ = u.context, j = n.contextType;
      f = Fa, typeof j == "object" && j !== null && (f = ft(j));
      var q = n.getDerivedStateFromProps;
      j = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, j || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || _ !== f) && Ld(
        t,
        s,
        a,
        d
      ), Zn = !1;
      var D = t.memoizedState;
      s.state = D, ni(t, a, s, i), ti(), _ = t.memoizedState, g || D !== _ || Zn ? (typeof q == "function" && (Zu(
        t,
        n,
        q,
        a
      ), _ = t.memoizedState), (E = Zn || Lf(
        t,
        n,
        E,
        a,
        D,
        _,
        f
      )) ? (j || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Ss(e, t), f = t.memoizedProps, j = Aa(n, f), u.props = j, q = t.pendingProps, O = u.context, _ = n.contextType, E = Fa, typeof _ == "object" && _ !== null && (E = ft(_)), h = n.getDerivedStateFromProps, (_ = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== q || O !== E) && Ld(
        t,
        s,
        a,
        E
      ), Zn = !1, D = t.memoizedState, s.state = D, ni(t, a, s, i), ti();
      var U = t.memoizedState;
      d !== q || D !== U || Zn || e !== null && e.dependencies !== null && fr(e.dependencies) ? (typeof g == "function" && (Zu(
        t,
        n,
        g,
        a
      ), M = t.memoizedState), (j = Xn || jd(
        t,
        n,
        j,
        a,
        D,
        U,
        E
      ) || e !== null && e.dependencies !== null && fr(e.dependencies)) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, U, E), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        a,
        U,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = E, a = j) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Cr(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Ra(
      t,
      e.child,
      null,
      i
    ), t.child = Ca(
      t,
      null,
      n,
      i
    )) : ht(e, t, n, i), t.memoizedState = s.state, e = t.child) : e = xn(
      e,
      t,
      i
    ), e;
  }
  function If(e, t, n, a) {
    return wa(), t.flags |= 256, ht(e, t, n, a), t.child;
  }
  var Wu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pu(e) {
    return { baseLanes: e, cachePool: kd() };
  }
  function eo(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= kt), e;
  }
  function Wf(e, t, n) {
    var a = t.pendingProps, i = !1, s = (t.flags & 128) !== 0, d;
    if ((d = s) || (d = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Re) {
        if (i ? $n(t) : In(), (e = Ge) ? (e = r0(
          e,
          Zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Vn !== null ? { id: un, overflow: on } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Od(e), n.return = t, t.child = n, ft = t, Ge = null)) : e = null, e === null) throw Kn(t);
        return Ho(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = a.children;
      return a = a.fallback, i ? (Zn(), i = t.mode, h = Nr(
        { mode: "hidden", children: h },
        i
      ), a = Ea(
        a,
        i,
        n,
        null
      ), g.return = t, a.return = t, g.sibling = a, t.child = g, a = t.child, a.memoizedState = Pu(n), a.childLanes = eo(
        e,
        d,
        n
      ), t.memoizedState = Wu, si(null, a)) : ($n(t), to(t, g));
    }
    var E = e.memoizedState;
    if (E !== null && (g = E.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? ($n(t), t.flags &= -257, t = no(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Zn(), t.child = e.child, t.flags |= 128, t = null) : (Zn(), h = a.fallback, i = t.mode, a = Nr(
          { mode: "visible", children: a.children },
          i
        ), g = Ea(
          g,
          i,
          n,
          null
        ), g.flags |= 2, a.return = t, g.return = t, a.sibling = g, t.child = a, Ca(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = Pu(n), a.childLanes = eo(
          e,
          d,
          n
        ), t.memoizedState = Wu, t = si(null, a));
      else if ($n(t), Ho(g)) {
        if (d = g.nextSibling && g.nextSibling.dataset, d) var _ = d.dgst;
        d = _, a = Error(c(419)), a.stack = "", a.digest = d, Jl({ value: a, source: null, stack: null }), t = no(
          e,
          t,
          n
        );
      } else if (tt || el(e, t, n, !1), f = (n & e.childLanes) !== 0, tt || f) {
        if (f = Le, f !== null && (a = zc(f, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, ya(e, a), Ct(f, e, a), Zs;
        Mo(h) || Hr(), t = Ps(
          e,
          t,
          n
        );
      } else
        zo(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Ge = Jt(
          g.nextSibling
        ), ft = t, Re = !0, Xn = null, Zt = !1, e !== null && Ud(t, e), t = to(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (In(), g = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = pn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? g = pn(
      _,
      g
    ) : (g = Ea(
      g,
      i,
      n,
      null
    ), g.flags |= 2), g.return = t, a.return = t, a.sibling = g, t.child = a, si(null, a), a = t.child, g = e.child.memoizedState, g === null ? g = Pu(n) : (i = g.cachePool, i !== null ? (E = nt._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = kd(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: i
    }), a.memoizedState = g, a.childLanes = eo(
      e,
      d,
      n
    ), t.memoizedState = Wu, si(e.child, a)) : ($n(t), n = e.child, e = n.sibling, n = pn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
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
  function no(e, t, n) {
    return Ca(t, e.child, null, n), e = to(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Pf(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), pu(e.return, t, n);
  }
  function ao(e, t, n, a, i, s) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i,
      treeForkCount: s
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = n, d.tailMode = i, d.treeForkCount = s);
  }
  function em(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, s = a.tail;
    a = a.children;
    var f = Ie.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, K(Ie, f), dt(e, t, a, n), a = Se ? Vl : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Pf(e, n, t);
        else if (e.tag === 19)
          Pf(e, n, t);
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
          e = n.alternate, e !== null && Er(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ao(
          t,
          !1,
          i,
          n,
          s,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Er(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        ao(
          t,
          !0,
          n,
          null,
          s,
          a
        );
        break;
      case "together":
        ao(
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
    if (e !== null && (t.dependencies = e.dependencies), ea |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ll(
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
  function lo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && fr(e)));
  }
  function Ly(e, t, n) {
    switch (t.tag) {
      case 3:
        qe(t, t.stateNode.containerInfo), Qn(t, nt, e.memoizedState.cache), wa();
        break;
      case 27:
      case 5:
        zn(t);
        break;
      case 4:
        qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Qn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, _u(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? ($n(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Wf(e, t, n) : ($n(t), e = xn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        $n(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (ll(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return em(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K(Ie, Ie.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Qf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Qn(t, nt, e.memoizedState.cache);
    }
    return xn(e, t, n);
  }
  function tm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!lo(e, n) && (t.flags & 128) === 0)
          return lt = !1, Ly(
            e,
            t,
            n
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, Re && (t.flags & 1048576) !== 0 && jd(t, Fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Ta(t.elementType), t.type = e, typeof e == "function")
            ou(e) ? (a = _a(e, a), t.tag = 1, t = $f(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Iu(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === $) {
                t.tag = 11, t = Vf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === F) {
                t.tag = 14, t = Xf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = je(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Iu(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = _a(
          a,
          t.pendingProps
        ), $f(
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
          var s = t.memoizedState;
          i = s.element, Ru(e, t), ni(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, Qn(t, nt, a), a !== s.cache && bu(
            t,
            [nt],
            n,
            !0
          ), ti(), a = d.element, s.isDehydrated)
            if (s = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = If(
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
              ), Jl(i), t = If(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ge = Jt(e.firstChild), ft = t, Re = !0, Xn = null, Zt = !0, n = Kd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (wa(), a === i) {
              t = xn(
                e,
                t,
                n
              );
              break e;
            }
            ht(e, t, a, n);
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
        )) ? t.memoizedState = n : Re || (n = t.type, e = t.pendingProps, a = Fr(
          ie.current
        ).createElement(n), a[dt] = t, a[wt] = e, gt(a, n, e), ut(a), t.stateNode = a) : t.memoizedState = f0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return zn(t), e === null && Re && (a = t.stateNode = o0(
          t.type,
          t.pendingProps,
          ie.current
        ), ft = t, Zt = !0, i = Ge, ia(t.type) ? (Bo = i, Ge = Jt(a.firstChild)) : Ge = i), ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), Cr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Re && ((i = a = Ge) && (a = dp(
          a,
          t.type,
          t.pendingProps,
          Qt
        ), a !== null ? (t.stateNode = a, ct = t, qe = Jt(a.firstChild), Qt = !1, i = !0) : i = !1), i || Gn(t)), mn(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Oo(i, u) ? a = null : f !== null && Oo(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = Ns(
          e,
          t,
          Ny,
          null,
          null,
          n
        ), bi._currentValue = i), Cr(e, t), dt(e, t, a, n), t.child;
      case 6:
        return e === null && Re && ((e = n = Ge) && (n = fp(
          n,
          t.pendingProps,
          Zt
        ), n !== null ? (t.stateNode = n, ft = t, Ge = null, e = !0) : e = !1), e || Kn(t)), null;
      case 13:
        return Wf(e, t, n);
      case 4:
        return qe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Ca(
          t,
          null,
          a,
          n
        ) : ht(e, t, a, n), t.child;
      case 11:
        return Vf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return ht(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ht(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, Qn(t, t.type, a.value), ht(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, xa(t), i = mt(i), a = a(i), t.flags |= 1, ht(e, t, a, n), t.child;
      case 14:
        return Xf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Kf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return em(e, t, n);
      case 31:
        return My(e, t, n);
      case 22:
        return Qf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return xa(t), a = mt(nt), e === null ? (i = wu(), i === null && (i = Be, s = vu(), i.pooledCache = s, s.refCount++, s !== null && (i.pooledCacheLanes |= n), i = s), t.memoizedState = { parent: a, cache: i }, xu(t), Qn(t, nt, i)) : ((e.lanes & n) !== 0 && (Ru(e, t), ni(t, null, null, n), ti()), i = e.memoizedState, s = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Qn(t, nt, a)) : (a = s.cache, Qn(t, nt, a), a !== i.cache && bu(
          t,
          [nt],
          n,
          !0
        ))), ht(
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
  function io(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Cm()) e.flags |= 8192;
        else
          throw Na = yr, Su;
    } else e.flags &= -16777217;
  }
  function nm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !y0(t))
      if (Cm()) e.flags |= 8192;
      else
        throw Na = yr, Su;
  }
  function Ur(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Mc() : 536870912, e.lanes |= t, yl |= t);
  }
  function ui(e, t) {
    if (!Re)
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
  function Ye(e) {
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
    switch (mu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ye(t), null;
      case 1:
        return Ye(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), En(nt), P(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (al(t) ? Rn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gu())), Ye(t), null;
      case 26:
        var i = t.type, s = t.memoizedState;
        return e === null ? (Rn(t), s !== null ? (Ye(t), nm(t, s)) : (Ye(t), io(
          t,
          i,
          null,
          a,
          n
        ))) : s ? s !== e.memoizedState ? (Rn(t), Ye(t), nm(t, s)) : (Ye(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Rn(t), Ye(t), io(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (sn(t), n = ie.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Rn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ye(t), null;
          }
          e = Z.current, al(t) ? Md(t) : (e = o0(i, a, n), t.stateNode = e, Rn(t));
        }
        return Ye(t), null;
      case 5:
        if (sn(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Rn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ye(t), null;
          }
          if (s = Z.current, al(t))
            Md(t);
          else {
            var d = Fr(
              ie.current
            );
            switch (s) {
              case 1:
                s = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                s = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    s = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    s = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    s = d.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof a.is == "string" ? d.createElement("select", {
                      is: a.is
                    }) : d.createElement("select"), a.multiple ? s.multiple = !0 : a.size && (s.size = a.size);
                    break;
                  default:
                    s = typeof a.is == "string" ? d.createElement(i, { is: a.is }) : d.createElement(i);
                }
            }
            s[dt] = t, s[wt] = a;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                s.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = s;
            e: switch (gt(s, i, a), i) {
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
        return Ye(t), io(
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
          if (e = ie.current, al(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = ft, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[dt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Wm(e.nodeValue, n)), e || Kn(t, !0);
          } else
            e = Fr(e).createTextNode(
              a
            ), e[dt] = t, t.stateNode = e;
        }
        return Ye(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = al(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[dt] = t;
            } else
              wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), e = !1;
          } else
            n = gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ye(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = al(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[dt] = t;
            } else
              wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ye(t), i = !1;
          } else
            i = gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return Ht(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ur(t, t.updateQueue), Ye(t), null);
      case 4:
        return P(), e === null && Ao(t.stateNode.containerInfo), Ye(t), null;
      case 10:
        return En(t.type), Ye(t), null;
      case 19:
        if (L(Ie), a = t.memoizedState, a === null) return ke(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) li(a, !1);
          else {
            if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = yr(e), u !== null) {
                  for (t.flags |= 128, li(a, !1), e = u.updateQueue, t.updateQueue = e, _r(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    _f(n, e), n = n.sibling;
                  return K(
                    Ie,
                    Ie.current & 1 | 2
                  ), Se && bn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && bt() > Br && (t.flags |= 128, i = !0, ui(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Er(s), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ur(t, e), ui(a, !0), a.tail === null && a.tailMode === "hidden" && !s.alternate && !Re)
                return Ye(t), null;
            } else
              2 * bt() - a.renderingStartTime > Br && n !== 536870912 && (t.flags |= 128, i = !0, ui(a, !1), t.lanes = 4194304);
          a.isBackwards ? (s.sibling = t.child, t.child = s) : (e = a.last, e !== null ? e.sibling = s : t.child = s, a.last = s);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = bt(), e.sibling = null, n = Ie.current, K(
          Ie,
          i ? n & 1 | 2 : n & 1
        ), Re && bn(t, a.treeForkCount), e) : (Ye(t), null);
      case 22:
      case 23:
        return zt(t), Ts(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), n = t.updateQueue, n !== null && _r(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && L(Sa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), En(nt), Ye(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Hy(e, t) {
    switch (mu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return En(nt), P(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return sn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ht(t), t.alternate === null)
            throw Error(c(340));
          wa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ht(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          wa();
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
        return zt(t), Ts(), e !== null && L(Sa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return En(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function am(e, t) {
    switch (mu(t), t.tag) {
      case 3:
        En(nt), P();
        break;
      case 26:
      case 27:
      case 5:
        sn(t);
        break;
      case 4:
        P();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        L(Ie);
        break;
      case 10:
        En(t.type);
        break;
      case 22:
      case 23:
        zt(t), Ts(), e !== null && L(Sa);
        break;
      case 24:
        En(nt);
    }
  }
  function oi(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var s = n.create, d = n.inst;
            a = s(), d.destroy = a;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (g) {
      De(t, t.return, g);
    }
  }
  function Wn(e, t, n) {
    try {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst, g = d.destroy;
            if (g !== void 0) {
              d.destroy = void 0, i = t;
              var E = n, _ = g;
              try {
                _();
              } catch (j) {
                De(
                  i,
                  E,
                  j
                );
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (j) {
      De(t, t.return, j);
    }
  }
  function lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Zd(t, n);
      } catch (a) {
        De(e, e.return, a);
      }
    }
  }
  function im(e, t, n) {
    n.props = _a(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      De(e, t, a);
    }
  }
  function ci(e, t) {
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
  function cn(e, t) {
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
  function rm(e) {
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
  function ro(e, t, n) {
    try {
      var a = e.stateNode;
      ip(a, e.type, n, t), a[wt] = t;
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function sm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ia(e.type) || e.tag === 4;
  }
  function so(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ia(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gn));
    else if (a !== 4 && (a === 27 && ia(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (uo(e, t, n), e = e.sibling; e !== null; )
        uo(e, t, n), e = e.sibling;
  }
  function Mr(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && ia(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Mr(e, t, n), e = e.sibling; e !== null; )
        Mr(e, t, n), e = e.sibling;
  }
  function um(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      gt(t, a, n), t[dt] = e, t[wt] = n;
    } catch (s) {
      De(e, e.return, s);
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
            var i = a.anchorOffset, s = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0, h = -1, E = -1, _ = 0, j = 0, q = e, O = null;
            t: for (; ; ) {
              for (var U; q !== n || i !== 0 && q.nodeType !== 3 || (g = d + i), q !== s || a !== 0 && q.nodeType !== 3 || (E = d + a), q.nodeType === 3 && (d += q.nodeValue.length), (U = q.firstChild) !== null; )
                D = q, q = U;
              for (; ; ) {
                if (q === e) break t;
                if (O === n && ++_ === i && (h = f), O === u && ++j === a && (E = f), (M = q.nextSibling) !== null) break;
                q = O, O = q.parentNode;
              }
              q = U;
            }
            n = g === -1 || E === -1 ? null : { start: g, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (jo = { focusedElem: e, selectionRange: n }, ts = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  i = e[n], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, n = t, i = s.memoizedProps, s = s.memoizedState, a = n.stateNode;
                try {
                  var J = _a(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    s
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
                  Lo(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lo(e);
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
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function cm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Cn(e, n), a & 4 && ii(5, n);
        break;
      case 1:
        if (Cn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              De(n, n.return, d);
            }
          else {
            var i = _a(
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
            } catch (d) {
              De(
                n,
                n.return,
                d
              );
            }
          }
        a & 64 && lm(n), a & 512 && ci(n, n.return);
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
            Zd(e, t);
          } catch (d) {
            De(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && um(n);
      case 26:
      case 5:
        Cn(e, n), t === null && a & 4 && im(n), a & 512 && ri(n, n.return);
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
        ), mp(e, n))));
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
  function dm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ks(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, xt = !1;
  function Nn(e, t, n) {
    for (n = n.child; n !== null; )
      fm(e, t, n), n = n.sibling;
  }
  function fm(e, t, n) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(Ml, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        it || cn(n, t), Nn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        it || cn(n, t);
        var a = Xe, i = xt;
        ia(n.type) && (Xe = n.stateNode, xt = !1), Nn(
          e,
          t,
          n
        ), vi(n.stateNode), Xe = a, xt = i;
        break;
      case 5:
        it || cn(n, t);
      case 6:
        if (a = Xe, i = xt, Xe = null, Nn(
          e,
          t,
          n
        ), Xe = a, xt = i, Xe !== null)
          if (xt)
            try {
              (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
            } catch (s) {
              De(
                n,
                t,
                s
              );
            }
          else
            try {
              Xe.removeChild(n.stateNode);
            } catch (s) {
              De(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        Xe !== null && (xt ? (e = Xe, l0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Rl(e)) : l0(Xe, n.stateNode));
        break;
      case 4:
        a = Xe, i = xt, Xe = n.stateNode.containerInfo, xt = !0, Nn(
          e,
          t,
          n
        ), Xe = a, xt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wn(2, n, t), it || Wn(4, n, t), Nn(
          e,
          t,
          n
        );
        break;
      case 1:
        it || (cn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && im(
          n,
          t,
          a
        )), Nn(
          e,
          t,
          n
        );
        break;
      case 21:
        Nn(
          e,
          t,
          n
        );
        break;
      case 22:
        it = (a = it) || n.memoizedState !== null, Nn(
          e,
          t,
          n
        ), it = a;
        break;
      default:
        Nn(
          e,
          t,
          n
        );
    }
  }
  function mm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Rl(e);
      } catch (n) {
        De(t, t.return, n);
      }
    }
  }
  function hm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rl(e);
      } catch (n) {
        De(t, t.return, n);
      }
  }
  function ky(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new om()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new om()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Lr(e, t) {
    var n = ky(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Fy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], s = e, d = t, g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ia(g.type)) {
                Xe = g.stateNode, xt = !1;
                break e;
              }
              break;
            case 5:
              Xe = g.stateNode, xt = !1;
              break e;
            case 3:
            case 4:
              Xe = g.stateNode.containerInfo, xt = !0;
              break e;
          }
          g = g.return;
        }
        if (Xe === null) throw Error(c(160));
        fm(s, d, i), Xe = null, xt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        gm(t, e), t = t.sibling;
  }
  var nn = null;
  function gm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Tt(e), a & 4 && (Wn(3, e, e.return), oi(3, e), Wn(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Tt(e), a & 512 && (it || n === null || cn(n, n.return)), a & 64 && Tn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = nn;
        if (Rt(t, e), Tt(e), a & 512 && (it || n === null || cn(n, n.return)), a & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      s = i.getElementsByTagName("title")[0], (!s || s[Hl] || s[dt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = i.createElement(a), i.head.insertBefore(
                        s,
                        i.querySelector("head > title")
                      )), gt(s, a, n), s[dt] = e, ut(s), a = s;
                      break e;
                    case "link":
                      var d = g0(
                        "link",
                        "href",
                        i
                      ).get(a + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (s = d[g], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      s = i.createElement(a), gt(s, a, n), i.head.appendChild(s);
                      break;
                    case "meta":
                      if (d = g0(
                        "meta",
                        "content",
                        i
                      ).get(a + (n.content || ""))) {
                        for (g = 0; g < d.length; g++)
                          if (s = d[g], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      s = i.createElement(a), gt(s, a, n), i.head.appendChild(s);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  s[dt] = e, ut(s), a = s;
                }
                e.stateNode = a;
              } else
                y0(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = h0(
                i,
                a,
                e.memoizedProps
              );
          else
            s !== a ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, a === null ? y0(
              i,
              e.type,
              e.stateNode
            ) : h0(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ro(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Rt(t, e), Tt(e), a & 512 && (it || n === null || cn(n, n.return)), n !== null && a & 4 && ro(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Tt(e), a & 512 && (it || n === null || cn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Za(i, "");
          } catch (J) {
            De(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, ro(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (oo = !0);
        break;
      case 6:
        if (Rt(t, e), Tt(e), a & 4) {
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
        if (Ir = null, i = nn, nn = Jr(t.containerInfo), Rt(t, e), nn = i, Tt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Rl(t.containerInfo);
          } catch (J) {
            De(e, e.return, J);
          }
        oo && (oo = !1, ym(e));
        break;
      case 4:
        a = nn, nn = Jr(
          e.stateNode.containerInfo
        ), Rt(t, e), Tt(e), nn = a;
        break;
      case 12:
        Rt(t, e), Tt(e);
        break;
      case 31:
        Rt(t, e), Tt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Lr(e, a)));
        break;
      case 13:
        Rt(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Hr = bt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Lr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = Tn, j = nt;
        if (Tn = _ || i, nt = j || E, Rt(t, e), nt = j, Tn = _, Tt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || Tn || nt || Ca(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (s = E.stateNode, i)
                    d = s.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = E.stateNode;
                    var q = E.memoizedProps.style, D = q != null && q.hasOwnProperty("display") ? q.display : null;
                    g.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
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
                  var U = E.stateNode;
                  i ? i0(U, !0) : i0(E.stateNode, !1);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Lr(e, n))));
        break;
      case 19:
        Rt(t, e), Tt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Lr(e, a)));
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
          if (sm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, s = so(e);
            Mr(e, s, i);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Za(d, ""), n.flags &= -33);
            var g = so(e);
            Mr(e, g, d);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, _ = so(e);
            uo(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (j) {
        De(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ym(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ym(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Cn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        cm(e, t.alternate, t), t = t.sibling;
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
          cn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && im(
            t,
            t.return,
            n
          ), Ca(t);
          break;
        case 27:
          vi(t.stateNode);
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
      var a = t.alternate, i = e, s = t, d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Nn(
            i,
            s,
            n
          ), oi(4, s);
          break;
        case 1:
          if (Nn(
            i,
            s,
            n
          ), a = s, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              De(a, a.return, _);
            }
          if (a = s, i = a.updateQueue, i !== null) {
            var g = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Qd(E[i], g);
            } catch (_) {
              De(a, a.return, _);
            }
          }
          n && d & 64 && lm(s), ci(s, s.return);
          break;
        case 27:
          um(s);
        case 26:
        case 5:
          Nn(
            i,
            s,
            n
          ), n && a === null && d & 4 && rm(s), ci(s, s.return);
          break;
        case 12:
          Nn(
            i,
            s,
            n
          );
          break;
        case 31:
          Nn(
            i,
            s,
            n
          ), n && d & 4 && mm(i, s);
          break;
        case 13:
          Nn(
            i,
            s,
            n
          ), n && d & 4 && hm(i, s);
          break;
        case 22:
          u.memoizedState === null && Nn(
            i,
            s,
            n
          ), ci(s, s.return);
          break;
        case 30:
          break;
        default:
          Nn(
            i,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function co(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && $l(n));
  }
  function fo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $l(e));
  }
  function an(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        pm(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function pm(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        an(
          e,
          t,
          n,
          a
        ), i & 2048 && oi(9, t);
        break;
      case 1:
        an(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        an(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $l(e)));
        break;
      case 12:
        if (i & 2048) {
          an(
            e,
            t,
            n,
            a
          ), e = t.stateNode;
          try {
            var s = t.memoizedProps, d = s.id, g = s.onPostCommit;
            typeof g == "function" && g(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (E) {
            De(t, t.return, E);
          }
        } else
          an(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        an(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        an(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, d = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? an(
          e,
          t,
          n,
          a
        ) : di(e, t) : s._visibility & 2 ? an(
          e,
          t,
          n,
          a
        ) : (s._visibility |= 2, ml(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && co(d, t);
        break;
      case 24:
        an(
          e,
          t,
          n,
          a
        ), i & 2048 && fo(t.alternate, t);
        break;
      default:
        an(
          e,
          t,
          n,
          a
        );
    }
  }
  function ml(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, d = t, g = n, E = a, _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ml(
            s,
            d,
            g,
            E,
            i
          ), oi(8, d);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? ol(
            u,
            f,
            h,
            E,
            i
          ) : ui(
            u,
            f
          ) : (j._visibility |= 2, ol(
            u,
            f,
            h,
            E,
            i
          )), i && _ & 2048 && co(
            d.alternate,
            d
          );
          break;
        case 24:
          ml(
            s,
            d,
            g,
            E,
            i
          ), i && _ & 2048 && fo(d.alternate, d);
          break;
        default:
          ml(
            s,
            d,
            g,
            E,
            i
          );
      }
      t = t.sibling;
    }
  }
  function di(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            di(n, a), i & 2048 && co(
              a.alternate,
              a
            );
            break;
          case 24:
            di(n, a), i & 2048 && fo(a.alternate, a);
            break;
          default:
            di(n, a);
        }
        t = t.sibling;
      }
  }
  var fi = 8192;
  function hl(e, t, n) {
    if (e.subtreeFlags & fi)
      for (e = e.child; e !== null; )
        bm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function bm(e, t, n) {
    switch (e.tag) {
      case 26:
        hl(
          e,
          t,
          n
        ), e.flags & fi && e.memoizedState !== null && Tp(
          n,
          nn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        hl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = nn;
        nn = Jr(e.stateNode.containerInfo), hl(
          e,
          t,
          n
        ), nn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = fi, fi = 16777216, hl(
          e,
          t,
          n
        ), fi = a) : hl(
          e,
          t,
          n
        ));
        break;
      default:
        hl(
          e,
          t,
          n
        );
    }
  }
  function vm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function mi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ot = a, wm(
            a,
            e
          );
        }
      vm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Em(e), e = e.sibling;
  }
  function Em(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        mi(e), e.flags & 2048 && Wn(9, e, e.return);
        break;
      case 3:
        mi(e);
        break;
      case 12:
        mi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, zr(e)) : mi(e);
        break;
      default:
        mi(e);
    }
  }
  function zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ot = a, wm(
            a,
            e
          );
        }
      vm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, t, t.return), zr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, zr(t));
          break;
        default:
          zr(t);
      }
      e = e.sibling;
    }
  }
  function wm(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $l(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ot = a;
      else
        e: for (n = e; ot !== null; ) {
          a = ot;
          var i = a.sibling, s = a.return;
          if (dm(a), a === n) {
            ot = null;
            break e;
          }
          if (i !== null) {
            i.return = s, ot = i;
            break e;
          }
          ot = s;
        }
    }
  }
  var qy = {
    getCacheForType: function(e) {
      var t = mt(nt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return mt(nt).controller.signal;
    }
  }, ky = typeof WeakMap == "function" ? WeakMap : Map, Ce = 0, Le = null, ye = null, ve = 0, Oe = 0, Ht = null, $n = !1, fl = !1, oo = !1, _n = 0, $e = 0, Fn = 0, Na = 0, co = 0, Bt = 0, dl = 0, ci = null, At = null, fo = !1, Mr = 0, Sm = 0, jr = 1 / 0, Lr = null, In = null, lt = 0, Wn = null, ml = null, On = 0, mo = 0, ho = null, wm = null, fi = 0, go = null;
  function qt() {
    return (Ce & 2) !== 0 && ve !== 0 ? ve & -ve : H.T !== null ? So() : Hc();
  }
  function Rm() {
    if (kt === 0)
      if ((we & 536870912) === 0 || Re) {
        var e = Zi;
        Zi <<= 1, (Zi & 3932160) === 0 && (Zi = 262144), kt = e;
      } else kt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), kt;
  }
  function Ct(e, t, n) {
    (e === Le && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (hl(e, 0), Pn(
      e,
      we,
      kt,
      !1
    )), Ul(e, n), ((Ce & 2) === 0 || e !== Le) && (e === Le && ((Ce & 2) === 0 && (Na |= n), $e === 4 && Pn(
      e,
      we,
      kt,
      !1
    )), dn(e));
  }
  function Rm(e, t, n) {
    if ((Ce & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Dl(e, t), i = a ? Xy(e, t) : po(e, t, !0), u = a;
    do {
      if (i === 0) {
        gl && !a && aa(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !Yy(n)) {
          i = Eo(e, t, !1), s = !1;
          continue;
        }
        if (i === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              i = hi;
              var E = g.current.memoizedState.isDehydrated;
              if (E && (bl(g, d).flags |= 256), d = Eo(
                g,
                d,
                !1
              ), f !== 2) {
                if (oo && !E) {
                  h.errorRecoveryDisabledLanes |= u, Na |= u, i = 4;
                  break e;
                }
                s = Nt, Nt = i, s !== null && (Nt === null ? Nt = s : Nt.push.apply(
                  Nt,
                  s
                ));
              }
              i = d;
            }
            if (s = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          bl(e, 0), aa(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, s = i, s) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              aa(
                a,
                t,
                kt,
                !Pn
              );
              break e;
            case 2:
              Nt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = Hr + 300 - bt(), 10 < i)) {
            if (aa(
              a,
              t,
              kt,
              !Pn
            ), Ji(a, 0, !0) !== 0) break e;
            On = t, a.timeoutHandle = n0(
              Nm.bind(
                null,
                a,
                n,
                Nt,
                kr,
                go,
                t,
                Bt,
                Na,
                dl,
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
          Nm(
            a,
            n,
            Nt,
            kr,
            go,
            t,
            Bt,
            Na,
            dl,
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
    dn(e);
  }
  function Tm(e, t, n, a, i, u, f, h, E, _, j, q, O, M) {
    if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: gn
      }, bm(
        t,
        s,
        q
      );
      var J = (s & 62914560) === s ? Hr - bt() : (s & 4194048) === s ? Sm - bt() : 0;
      if (J = Np(
        q,
        J
      ), J !== null) {
        On = s, e.cancelPendingCommit = J(
          Mm.bind(
            null,
            e,
            t,
            s,
            n,
            a,
            i,
            d,
            g,
            E,
            j,
            q,
            null,
            D,
            U
          )
        ), aa(e, s, d, !_);
        return;
      }
    }
    Mm(
      e,
      t,
      s,
      n,
      a,
      i,
      d,
      g,
      E
    );
  }
  function Yy(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], s = i.getSnapshot;
          i = i.value;
          try {
            if (!Mt(s(), i)) return !1;
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
      var s = 31 - Ut(i), d = 1 << s;
      a[s] = -1, i &= ~d;
    }
    n !== 0 && Lc(e, n, t);
  }
  function zr() {
    return (Ce & 6) === 0 ? (di(0), !1) : !0;
  }
  function vo() {
    if (be !== null) {
      if (Oe === 0)
        var e = be.return;
      else
        e = be, vn = Sa = null, Mu(e), ul = null, Wl = 0, e = be;
      for (; e !== null; )
        am(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function bl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, up(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), On = 0, yo(), Le = e, ye = n = pn(e.current, null), ve = t, Oe = 0, Ht = null, $n = !1, fl = Dl(e, t), oo = !1, dl = Bt = co = Na = Fn = $e = 0, At = ci = null, fo = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ut(a), s = 1 << i;
        t |= e[i], a &= ~s;
      }
    return _n = t, sr(), n;
  }
  function Cm(e, t) {
    fe = null, H.H = ri, t === sl || t === gr ? (t = Yd(), Oe = 3) : t === Su ? (t = Yd(), Oe = 4) : Oe = t === $u ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Bt = t, be === null && ($e = 1, _r(
      e,
      Xt(t, e.current)
    ));
  }
  function Cm() {
    var e = Lt.current;
    return e === null ? !0 : (ve & 4194048) === ve ? Zt === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === Zt : !1;
  }
  function Nm() {
    var e = H.H;
    return H.H = ni, e === null ? ni : e;
  }
  function _m() {
    var e = H.H;
    return H.H = ri, e === null ? ri : e;
  }
  function Om() {
    var e = H.A;
    return H.A = qy, e;
  }
  function Hr() {
    $e = 4, $n || (ve & 4194048) !== ve && Lt.current !== null || (fl = !0), (Fn & 134217727) === 0 && (Na & 134217727) === 0 || Le === null || Pn(
      Le,
      ve,
      Bt,
      !1
    );
  }
  function po(e, t, n) {
    var a = Ce;
    Ce |= 2;
    var i = Nm(), u = _m();
    (Le !== e || ve !== t) && (Lr = null, hl(e, t)), t = !1;
    var f = $e;
    e: do
      try {
        if (Oe !== 0 && be !== null) {
          var g = be, E = Bt;
          switch (Oe) {
            case 8:
              vo(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var _ = Oe;
              if (Oe = 0, Bt = null, vl(e, g, E, _), n && gl) {
                d = 0;
                break e;
              }
              break;
            default:
              _ = Oe, Oe = 0, Bt = null, vl(e, g, E, _);
          }
        }
        Vy(), d = $e;
        break;
      } catch (j) {
        Am(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, vn = va = null, Ce = a, H.H = i, H.A = u, ye === null && (Le = null, ve = 0, ar()), f;
  }
  function Vy() {
    for (; be !== null; ) Dm(be);
  }
  function Xy(e, t) {
    var n = Ce;
    Ce |= 2;
    var a = Nm(), i = _m();
    Le !== e || ve !== t ? (Lr = null, jr = bt() + 500, hl(e, t)) : fl = Dl(
      e,
      t
    );
    e: do
      try {
        if (Oe !== 0 && be !== null) {
          t = be;
          var s = Bt;
          t: switch (Oe) {
            case 1:
              Oe = 0, Bt = null, vl(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (qd(s)) {
                Oe = 0, Bt = null, jm(t);
                break;
              }
              t = function() {
                Oe !== 2 && Oe !== 9 || Be !== e || (Oe = 7), dn(e);
              }, s.then(t, t);
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              qd(s) ? (Oe = 0, Bt = null, jm(t)) : (Oe = 0, Bt = null, vl(e, t, s, 7));
              break;
            case 5:
              var d = null;
              switch (be.tag) {
                case 26:
                  d = be.memoizedState;
                case 5:
                case 27:
                  var g = be;
                  if (d ? p0(d) : g.stateNode.complete) {
                    Oe = 0, Bt = null;
                    var E = g.sibling;
                    if (E !== null) be = E;
                    else {
                      var _ = g.return;
                      _ !== null ? (be = _, Yr(_)) : be = null;
                    }
                    break t;
                  }
              }
              Oe = 0, Bt = null, vl(e, t, s, 5);
              break;
            case 6:
              Oe = 0, Bt = null, vl(e, t, s, 6);
              break;
            case 8:
              vo(), $e = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Ky();
        break;
      } catch (j) {
        Am(e, j);
      }
    while (!0);
    return vn = va = null, H.H = a, H.A = i, Ce = n, ye !== null ? 0 : (Le = null, ve = 0, ar(), $e);
  }
  function Ky() {
    for (; be !== null && !qa(); )
      Dm(be);
  }
  function Dm(e) {
    var t = tm(e.alternate, e, _n);
    e.memoizedProps = e.pendingProps, t === null ? Yr(e) : be = t;
  }
  function jm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jf(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          we
        );
        break;
      case 11:
        t = Jf(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          we
        );
        break;
      case 5:
        Mu(t);
      default:
        am(n, t), t = be = _d(t, _n), t = tm(n, t, _n);
    }
    e.memoizedProps = e.pendingProps, t === null ? Yr(e) : be = t;
  }
  function vl(e, t, n, a) {
    vn = Sa = null, Mu(t), ul = null, Wl = 0;
    var i = t.return;
    try {
      if (Uy(
        e,
        i,
        t,
        n,
        we
      )) {
        $e = 1, _r(
          e,
          Xt(n, e.current)
        ), be = null;
        return;
      }
    } catch (s) {
      if (i !== null) throw be = i, s;
      $e = 1, _r(
        e,
        Xt(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Re || a === 1 ? e = !0 : gl || (we & 536870912) !== 0 ? e = !1 : (Pn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Um(t, e)) : Yr(t);
  }
  function Yr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Um(
          t,
          Pn
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
        be = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Um(e, t) {
    do {
      var n = Hy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    $e = 6, be = null;
  }
  function Mm(e, t, n, a, i, s, d, g, E) {
    e.cancelPendingCommit = null;
    do
      qr();
    while (lt !== 0);
    if ((Ce & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (s = t.lanes | t.childLanes, s |= su, Rg(
        e,
        n,
        s,
        d,
        g,
        E
      ), e === Be && (be = Be = null, we = 0), pl = t, na = e, On = n, yo = s, po = i, xm = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Jy(Ki, function() {
        return km(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = H.T, H.T = null, i = Y.p, Y.p = 2, f = Ce, Ce |= 4;
        try {
          By(e, t, n);
        } finally {
          Ce = f, Y.p = i, H.T = a;
        }
      }
      rt = 1, Lm(), zm(), Hm();
    }
  }
  function Lm() {
    if (rt === 1) {
      rt = 0;
      var e = na, t = pl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = H.T, H.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          gm(t, e);
          var s = jo, d = Ed(e.containerInfo), g = s.focusedElem, E = s.selectionRange;
          if (d !== g && g && g.ownerDocument && vd(
            g.ownerDocument.documentElement,
            g
          )) {
            if (E !== null && Pu(h)) {
              var _ = E.start, j = E.end;
              if (j === void 0 && (j = _), "selectionStart" in h)
                h.selectionStart = _, h.selectionEnd = Math.min(
                  j,
                  h.value.length
                );
              else {
                var q = g.ownerDocument || document, D = q && q.defaultView || window;
                if (D.getSelection) {
                  var U = D.getSelection(), J = g.textContent.length, ne = Math.min(E.start, J), Le = E.end === void 0 ? ne : Math.min(E.end, J);
                  !U.extend && ne > Le && (d = Le, Le = ne, ne = d);
                  var T = bd(
                    g,
                    ne
                  ), R = bd(
                    g,
                    Le
                  );
                  if (T && R && (M.rangeCount !== 1 || M.anchorNode !== T.node || M.anchorOffset !== T.offset || M.focusNode !== R.node || M.focusOffset !== R.offset)) {
                    var N = q.createRange();
                    N.setStart(T.node, T.offset), M.removeAllRanges(), te > je ? (M.addRange(N), M.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset), M.addRange(N));
                  }
                }
              }
            }
            for (q = [], U = g; U = U.parentNode; )
              U.nodeType === 1 && q.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < q.length; g++) {
              var k = q[g];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          Ir = !!No, _o = No = null;
        } finally {
          Ce = i, Y.p = a, H.T = n;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function Lm() {
    if (lt === 2) {
      lt = 0;
      var e = Wn, t = ml, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = H.T, H.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          om(e, t.alternate, t);
        } finally {
          Ce = i, Y.p = a, H.T = n;
        }
      }
      lt = 3;
    }
  }
  function zm() {
    if (rt === 2) {
      rt = 0;
      var e = na, t = pl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = H.T, H.T = null;
        var a = G.p;
        G.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          cm(e, t.alternate, t);
        } finally {
          Ce = i, G.p = a, H.T = n;
        }
      }
      rt = 3;
    }
  }
  function Hm() {
    if (rt === 4 || rt === 3) {
      rt = 0, ma();
      var e = na, t = pl, n = On, a = xm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rt = 5 : (rt = 0, pl = na = null, Bm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (ta = null), Hs(n), t = t.stateNode, jt && typeof jt.onCommitFiberRoot == "function")
        try {
          jt.onCommitFiberRoot(
            Ml,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = H.T, i = G.p, G.p = 2, H.T = null;
        try {
          for (var s = e.onRecoverableError, d = 0; d < a.length; d++) {
            var g = a[d];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          H.T = t, G.p = i;
        }
      }
      (On & 3) !== 0 && Vr(), dn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === bo ? gi++ : (gi = 0, bo = e) : gi = 0, yi(0);
    }
  }
  function Bm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $l(t)));
  }
  function Vr() {
    return Lm(), zm(), Hm(), km();
  }
  function km() {
    if (rt !== 5) return !1;
    var e = na, t = yo;
    yo = 0;
    var n = Hs(On), a = H.T, i = G.p;
    try {
      Y.p = 32 > n ? 32 : n, H.T = null, n = ho, ho = null;
      var u = Wn, f = On;
      if (lt = 0, ml = Wn = null, On = 0, (Ce & 6) !== 0) throw Error(c(331));
      var h = Ce;
      if (Ce |= 4, vm(u.current), ym(
        u,
        u.current,
        f,
        n
      ), Ce = h, di(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        try {
          jt.onPostCommitFiberRoot(Ml, s);
        } catch {
        }
      return !0;
    } finally {
      G.p = i, H.T = a, Bm(e, t);
    }
  }
  function qm(e, t, n) {
    t = Xt(n, t), t = Ju(e.stateNode, t, 2), e = Jn(e, t, 2), e !== null && (zl(e, 2), dn(e));
  }
  function De(e, t, n) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ta === null || !ta.has(a))) {
            e = Xt(n, e), n = Gf(2), a = Jn(t, n, 2), a !== null && (Yf(
              n,
              a,
              t,
              e
            ), zl(a, 2), dn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function wo(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Gy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (mo = !0, i.add(n), e = Qy.bind(null, e, t, n), t.then(e, e));
  }
  function Qy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Le === e && (ve & n) === n && ($e === 4 || $e === 3 && (ve & 62914560) === ve && 300 > bt() - Mr ? (Ce & 2) === 0 && hl(e, 0) : co |= n, dl === ve && (dl = 0)), cn(e);
  }
  function Gm(e, t) {
    t === 0 && (t = Mc()), e = va(e, t), e !== null && (zl(e, t), dn(e));
  }
  function Zy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Gm(e, n);
  }
  function Fy(e, t) {
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
    a !== null && a.delete(t), Gm(e, n);
  }
  function Jy(e, t) {
    return Et(e, t);
  }
  var Xr = null, El = null, So = !1, Kr = !1, xo = !1, la = 0;
  function dn(e) {
    e !== El && e.next === null && (El === null ? Xr = El = e : El = El.next = e), Kr = !0, So || (So = !0, Iy());
  }
  function yi(e, t) {
    if (!xo && Kr) {
      xo = !0;
      do
        for (var n = !1, a = Xr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var d = a.suspendedLanes, g = a.pingedLanes;
              s = (1 << 31 - Ut(42 | e) + 1) - 1, s &= i & ~(d & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, Km(a, s));
          } else
            s = we, s = Ji(
              a,
              a === Be ? s : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (s & 3) === 0 || Ll(a, s) || (n = !0, Km(a, s));
          a = a.next;
        }
      while (n);
      xo = !1;
    }
  }
  function $y() {
    Ym();
  }
  function Ym() {
    Kr = So = !1;
    var e = 0;
    la !== 0 && sp() && (e = la);
    for (var t = bt(), n = null, a = Xr; a !== null; ) {
      var i = a.next, s = Vm(a, t);
      s === 0 ? (a.next = null, n === null ? Xr = i : n.next = i, i === null && (El = n)) : (n = a, (e !== 0 || (s & 3) !== 0) && (Kr = !0)), a = i;
    }
    rt !== 0 && rt !== 5 || yi(e), la !== 0 && (la = 0);
  }
  function Vm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - Ut(s), g = 1 << d, E = i[d];
      E === -1 ? ((g & n) === 0 || (g & a) !== 0) && (i[d] = xg(g, t)) : E <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = Be, n = we, n = Ji(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && st(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ll(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && st(a), Hs(n)) {
        case 2:
        case 8:
          n = jc;
          break;
        case 32:
          n = Ki;
          break;
        case 268435456:
          n = Uc;
          break;
        default:
          n = Ki;
      }
      return a = Xm.bind(null, e), n = Et(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && st(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Xm(e, t) {
    if (rt !== 0 && rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Vr() && e.callbackNode !== n)
      return null;
    var a = we;
    return a = Ji(
      e,
      e === Be ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Tm(e, a, t), Vm(e, bt()), e.callbackNode != null && e.callbackNode === n ? Xm.bind(null, e) : null);
  }
  function Km(e, t) {
    if (Vr()) return null;
    Tm(e, t, !0);
  }
  function Fy() {
    sp(function() {
      (Ce & 6) !== 0 ? Et(
        Oc,
        $y
      ) : Ym();
    });
  }
  function Ro() {
    if (la === 0) {
      var e = il;
      e === 0 && (e = Qi, Qi <<= 1, (Qi & 261888) === 0 && (Qi = 256)), la = e;
    }
    return la;
  }
  function Qm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pi("" + e);
  }
  function Zm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Wy(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var s = Qm(
        (i[wt] || null).action
      ), d = a.submitter;
      d && (t = (t = d[wt] || null) ? Qm(t.formAction) : d.getAttribute("formAction"), t !== null && (s = t, d = null));
      var g = new ar(
        "action",
        "action",
        null,
        a,
        i
      );
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (la !== 0) {
                  var E = d ? Zm(i, d) : new FormData(i);
                  Vu(
                    n,
                    {
                      pending: !0,
                      data: E,
                      method: i.method,
                      action: s
                    },
                    null,
                    E
                  );
                }
              } else
                typeof s == "function" && (g.preventDefault(), E = d ? Zm(i, d) : new FormData(i), Vu(
                  n,
                  {
                    pending: !0,
                    data: E,
                    method: i.method,
                    action: s
                  },
                  s,
                  E
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var To = 0; To < ru.length; To++) {
    var No = ru[To], Py = No.toLowerCase(), ep = No[0].toUpperCase() + No.slice(1);
    tn(
      Py,
      "on" + ep
    );
  }
  tn(xd, "onAnimationEnd"), tn(Rd, "onAnimationIteration"), tn(Td, "onAnimationStart"), tn("dblclick", "onDoubleClick"), tn("focusin", "onFocus"), tn("focusout", "onBlur"), tn(yy, "onTransitionRun"), tn(py, "onTransitionStart"), tn(by, "onTransitionCancel"), tn(Nd, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ga("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), tp = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pi)
  );
  function Fm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], i = a.event;
      a = a.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var g = a[d], E = g.instance, _ = g.currentTarget;
            if (g = g.listener, E !== s && i.isPropagationStopped())
              break e;
            s = g, i.currentTarget = _;
            try {
              u(i);
            } catch (j) {
              nr(j);
            }
            i.currentTarget = null, s = E;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (g = a[d], E = g.instance, _ = g.currentTarget, g = g.listener, E !== s && i.isPropagationStopped())
              break e;
            s = g, i.currentTarget = _;
            try {
              u(i);
            } catch (j) {
              nr(j);
            }
            i.currentTarget = null, s = E;
          }
      }
    }
  }
  function ve(e, t) {
    var n = t[Bs];
    n === void 0 && (n = t[Bs] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Jm(t, e, 2, !1), n.add(a));
  }
  function Co(e, t, n) {
    var a = 0;
    t && (a |= 4), Jm(
      n,
      e,
      a,
      t
    );
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ao(e) {
    if (!e[Qr]) {
      e[Qr] = !0, Gc.forEach(function(n) {
        n !== "selectionchange" && (tp.has(n) || Co(n, !1, e), Co(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qr] || (t[Qr] = !0, Co("selectionchange", !1, t));
    }
  }
  function Jm(e, t, n, a) {
    switch (R0(t)) {
      case 2:
        var i = Np;
        break;
      case 8:
        i = Op;
        break;
      default:
        i = Vo;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Zs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function _o(e, t, n, a, i) {
    var s = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var g = a.stateNode.containerInfo;
          if (g === i) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var E = d.tag;
              if ((E === 3 || E === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (d = Ya(g), d === null) return;
            if (E = d.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = s = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Wc(function() {
      var _ = u, j = Yu(n), q = [];
      e: {
        var O = Cf.get(e);
        if (O !== void 0) {
          var M = Pi, J = e;
          switch (e) {
            case "keypress":
              if (tr(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Fg;
              break;
            case "focusin":
              J = "focus", U = Is;
              break;
            case "focusout":
              J = "blur", U = Is;
              break;
            case "beforeblur":
            case "afterblur":
              U = Is;
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
              U = nd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Ig;
              break;
            case xd:
            case Rd:
            case Td:
              U = kg;
              break;
            case Nd:
              U = Pg;
              break;
            case "scroll":
            case "scrollend":
              U = Mg;
              break;
            case "wheel":
              U = ty;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Gg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = ld;
              break;
            case "toggle":
            case "beforetoggle":
              U = ay;
          }
          var te = (t & 4) !== 0, je = !te && (e === "scroll" || e === "scrollend"), T = te ? O !== null ? O + "Capture" : null : O;
          te = [];
          for (var R = _, N; R !== null; ) {
            var B = R;
            if (N = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || N === null || T === null || (B = Ll(R, T), B != null && te.push(
              hi(R, B, N)
            )), je) break;
            R = R.return;
          }
          0 < ne.length && (D = new U(
            D,
            J,
            null,
            n,
            j
          ), q.push({ event: O, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (D = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", D && n !== Xs && (J = n.relatedTarget || n.fromElement) && (Ya(J) || J[Ga]))
            break e;
          if ((M || O) && (O = j.window === j ? j : (O = j.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (J = n.relatedTarget || n.toElement, M = _, J = J ? Ba(J) : null, J !== null && (je = m(J), te = J.tag, J !== je || te !== 5 && te !== 27 && te !== 6) && (J = null)) : (M = null, J = _), M !== J)) {
            if (te = tf, B = "onMouseLeave", T = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (te = af, B = "onPointerLeave", T = "onPointerEnter", R = "pointer"), je = M == null ? O : jl(M), N = J == null ? O : jl(J), O = new te(
              B,
              R + "leave",
              U,
              n,
              j
            ), O.target = je, O.relatedTarget = N, B = null, Ba(j) === _ && (te = new te(
              T,
              R + "enter",
              J,
              n,
              j
            ), te.target = N, te.relatedTarget = je, B = te), je = B, M && J)
              t: {
                for (te = tp, T = M, R = J, N = 0, B = T; B; B = te(B))
                  N++;
                B = 0;
                for (var ee = R; ee; ee = te(ee))
                  B++;
                for (; 0 < N - B; )
                  T = te(T), N--;
                for (; 0 < B - N; )
                  R = te(R), B--;
                for (; N--; ) {
                  if (T === R || R !== null && T === R.alternate) {
                    ne = T;
                    break t;
                  }
                  T = ne(T), R = ne(R);
                }
                ne = null;
              }
            else ne = null;
            U !== null && $m(
              q,
              D,
              U,
              ne,
              !1
            ), J !== null && Le !== null && $m(
              q,
              Le,
              J,
              ne,
              !0
            );
          }
        }
        e: {
          if (D = _ ? Bl(_) : window, U = D.nodeName && D.nodeName.toLowerCase(), U === "select" || U === "input" && D.type === "file")
            var Te = fd;
          else if (cd(D))
            if (md)
              Te = my;
            else {
              Te = dy;
              var I = cy;
            }
          else
            U = D.nodeName, !U || U.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? _ && Vs(_.elementType) && (Te = fd) : Te = fy;
          if (Te && (Te = Te(e, _))) {
            dd(
              q,
              Te,
              n,
              j
            );
            break e;
          }
          I && I(e, D, _), e === "focusout" && _ && D.type === "number" && _.memoizedProps.value != null && Ys(D, "number", D.value);
        }
        switch (I = _ ? Bl(_) : window, e) {
          case "focusin":
            (cd(I) || I.contentEditable === "true") && (Ia = I, au = _, Zl = null);
            break;
          case "focusout":
            Zl = au = Ia = null;
            break;
          case "mousedown":
            lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ts = !1, Sf(q, n, j);
            break;
          case "selectionchange":
            if (gy) break;
          case "keydown":
          case "keyup":
            Sf(q, n, j);
        }
        var ge;
        if (Ps)
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
          Qa ? sf(e, n) && (Ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (lf && n.locale !== "ko" && (Qa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Qa && (me = Pc()) : (Bn = j, Ku = "value" in Bn ? Bn.value : Bn.textContent, Qa = !0)), $ = Xr(_, Ee), 0 < $.length && (Ee = new nf(
          Ee,
          e,
          null,
          n,
          j
        ), q.push({ event: Ee, listeners: $ }), me ? Ee.data = me : (me = of(n), me !== null && (Ee.data = me)))), (me = ly ? iy(e, n) : ry(e, n)) && (Ee = Xr(_, "onBeforeInput"), 0 < Ee.length && ($ = new nf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          j
        ), q.push({
          event: I,
          listeners: Se
        }), I.data = ge)), Wy(
          q,
          e,
          _,
          n,
          j
        );
      }
      Fm(q, t);
    });
  }
  function bi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, s = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || s === null || (i = kl(e, n), i != null && a.unshift(
        bi(e, i, s)
      ), i = kl(e, t), i != null && a.push(
        bi(e, i, s)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function np(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function $m(e, t, n, a, i) {
    for (var s = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n, E = g.alternate, _ = g.stateNode;
      if (g = g.tag, E !== null && E === a) break;
      g !== 5 && g !== 26 && g !== 27 || _ === null || (E = _, i ? (_ = kl(n, s), _ != null && d.unshift(
        bi(n, _, E)
      )) : i || (_ = kl(n, s), _ != null && d.push(
        bi(n, _, E)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var ap = /\r\n?/g, lp = /\u0000|\uFFFD/g;
  function Im(e) {
    return (typeof e == "string" ? e : "" + e).replace(ap, `
`).replace(lp, "");
  }
  function Wm(e, t) {
    return t = Im(t), Im(e) === t;
  }
  function Me(e, t, n, a, i, s) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Za(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Za(e, "" + a);
        break;
      case "className":
        Ii(e, "class", a);
        break;
      case "tabIndex":
        Ii(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ii(e, n, a);
        break;
      case "style":
        Ic(e, a, s);
        break;
      case "data":
        if (t !== "object") {
          Ii(e, "data", a);
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
        a = Pi("" + a), e.setAttribute(n, a);
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
          typeof s == "function" && (n === "formAction" ? (t !== "input" && Me(e, t, "name", i.name, i, null), Me(
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
        a = Pi("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = gn);
        break;
      case "onScroll":
        a != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
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
        n = Pi("" + a), e.setAttributeNS(
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
        ve("beforetoggle", e), ve("toggle", e), $i(e, "popover", a);
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
        $i(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = jg.get(n) || n, $i(e, n, a));
    }
  }
  function Co(e, t, n, a, i, u) {
    switch (n) {
      case "style":
        Ic(e, a, s);
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
        typeof a == "string" ? Za(e, a) : (typeof a == "number" || typeof a == "bigint") && Za(e, "" + a);
        break;
      case "onScroll":
        a != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
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
        if (!Yc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), s = e[wt] || null, s = s != null ? s[n] : null, typeof s == "function" && e.removeEventListener(t, s, i), typeof a == "function")) {
              typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : $i(e, n, a);
          }
    }
  }
  function gt(e, t, n) {
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
        ve("error", e), ve("load", e);
        var a = !1, i = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var d = n[s];
            if (d != null)
              switch (s) {
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
                  Me(e, t, s, d, n, null);
              }
          }
        i && Me(e, t, "srcSet", n.srcSet, n, null), a && Me(e, t, "src", n.src, n, null);
        return;
      case "input":
        ve("invalid", e);
        var g = s = d = i = null, E = null, _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var j = n[a];
            if (j != null)
              switch (a) {
                case "name":
                  i = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  E = j;
                  break;
                case "defaultChecked":
                  _ = j;
                  break;
                case "value":
                  u = j;
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
                  Me(e, t, a, j, n, null);
              }
          }
        Zc(
          e,
          s,
          g,
          E,
          _,
          d,
          i,
          !1
        );
        return;
      case "select":
        ve("invalid", e), a = d = s = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (g = n[i], g != null))
            switch (i) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                a = g;
              default:
                Me(e, t, i, g, n, null);
            }
        t = s, n = d, e.multiple = !!a, t != null ? Qa(e, !!a, t, !1) : n != null && Qa(e, !!a, n, !0);
        return;
      case "textarea":
        ve("invalid", e), s = i = a = null;
        for (d in n)
          if (n.hasOwnProperty(d) && (g = n[d], g != null))
            switch (d) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(c(91));
                break;
              default:
                Me(e, t, d, g, n, null);
            }
        Jc(e, a, i, s);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Me(e, t, E, a, n, null));
        return;
      case "dialog":
        ve("beforetoggle", e), ve("toggle", e), ve("cancel", e), ve("close", e);
        break;
      case "iframe":
      case "object":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < pi.length; a++)
          ve(pi[a], e);
        break;
      case "image":
        ve("error", e), ve("load", e);
        break;
      case "details":
        ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ve("error", e), ve("load", e);
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
        if (ku(t)) {
          for (j in n)
            n.hasOwnProperty(j) && (a = n[j], a !== void 0 && Co(
              e,
              t,
              j,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (a = n[g], a != null && Me(e, t, g, a, n, null));
  }
  function ip(e, t, n, a) {
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
        var i = null, u = null, f = null, h = null, E = null, _ = null, j = null;
        for (M in n) {
          var q = n[M];
          if (n.hasOwnProperty(M) && q != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = q;
              default:
                a.hasOwnProperty(U) || Me(e, t, U, null, a, q);
            }
        }
        for (var D in a) {
          var U = a[D];
          if (q = n[D], a.hasOwnProperty(D) && (U != null || q != null))
            switch (D) {
              case "type":
                s = U;
                break;
              case "name":
                i = U;
                break;
              case "checked":
                _ = U;
                break;
              case "defaultChecked":
                j = M;
                break;
              case "value":
                d = U;
                break;
              case "defaultValue":
                g = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(c(137, t));
                break;
              default:
                U !== q && Me(
                  e,
                  t,
                  D,
                  U,
                  a,
                  q
                );
            }
        }
        Gs(
          e,
          d,
          g,
          E,
          _,
          j,
          u,
          i
        );
        return;
      case "select":
        U = d = g = D = null;
        for (s in n)
          if (E = n[s], n.hasOwnProperty(s) && E != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                U = E;
              default:
                a.hasOwnProperty(s) || Me(
                  e,
                  t,
                  s,
                  null,
                  a,
                  E
                );
            }
        for (i in a)
          if (s = a[i], E = n[i], a.hasOwnProperty(i) && (s != null || E != null))
            switch (i) {
              case "value":
                D = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                d = s;
              default:
                s !== E && Me(
                  e,
                  t,
                  i,
                  s,
                  a,
                  E
                );
            }
        t = g, n = d, a = U, D != null ? Qa(e, !!n, D, !1) : !!a != !!n && (t != null ? Qa(e, !!n, t, !0) : Qa(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = D = null;
        for (g in n)
          if (i = n[g], n.hasOwnProperty(g) && i != null && !a.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(e, t, g, null, a, i);
            }
        for (d in a)
          if (i = a[d], s = n[d], a.hasOwnProperty(d) && (i != null || s != null))
            switch (d) {
              case "value":
                D = i;
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
                i !== s && Me(e, t, d, i, a, s);
            }
        Fc(e, D, U);
        return;
      case "option":
        for (var J in n)
          D = n[J], n.hasOwnProperty(J) && D != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Me(
            e,
            t,
            J,
            null,
            a,
            D
          ));
        for (E in a)
          D = a[E], U = n[E], a.hasOwnProperty(E) && D !== U && (D != null || U != null) && (E === "selected" ? e.selected = D && typeof D != "function" && typeof D != "symbol" : Me(
            e,
            t,
            E,
            D,
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
        for (var ne in n)
          D = n[ne], n.hasOwnProperty(ne) && D != null && !a.hasOwnProperty(ne) && Me(e, t, ne, null, a, D);
        for (_ in a)
          if (D = a[_], U = n[_], a.hasOwnProperty(_) && D !== U && (D != null || U != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(c(137, t));
                break;
              default:
                Me(
                  e,
                  t,
                  _,
                  D,
                  a,
                  U
                );
            }
        return;
      default:
        if (ku(t)) {
          for (var je in n)
            O = n[je], n.hasOwnProperty(je) && O !== void 0 && !a.hasOwnProperty(je) && Co(
              e,
              t,
              Le,
              void 0,
              a,
              D
            );
          for (j in a)
            O = a[j], M = n[j], !a.hasOwnProperty(j) || O === M || O === void 0 && M === void 0 || Co(
              e,
              t,
              j,
              O,
              a,
              U
            );
          return;
        }
    }
    for (var T in n)
      D = n[T], n.hasOwnProperty(T) && D != null && !a.hasOwnProperty(T) && Me(e, t, T, null, a, D);
    for (q in a)
      D = a[q], U = n[q], !a.hasOwnProperty(q) || D === U || D == null && U == null || Me(e, t, q, D, a, U);
  }
  function Pm(e) {
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
  function rp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], s = i.transferSize, d = i.initiatorType, g = i.duration;
        if (s && g && Pm(d)) {
          for (d = 0, g = i.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], _ = E.startTime;
            if (_ > h) break;
            var j = E.transferSize, q = E.initiatorType;
            j && Wm(q) && (E = E.responseEnd, f += j * (E < h ? 1 : (h - _) / (E - _)));
          }
          if (--a, t += 8 * (s + d) / (i.duration / 1e3), e++, 10 < e) break;
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
  function e0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function t0(e, t) {
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
  function Uo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Mo = null;
  function sp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Mo ? !1 : (Mo = e, !0) : (Mo = null, !1);
  }
  var n0 = typeof setTimeout == "function" ? setTimeout : void 0, up = typeof clearTimeout == "function" ? clearTimeout : void 0, a0 = typeof Promise == "function" ? Promise : void 0, op = typeof queueMicrotask == "function" ? queueMicrotask : typeof a0 < "u" ? function(e) {
    return a0.resolve(null).then(e).catch(cp);
  } : n0;
  function cp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ia(e) {
    return e === "head";
  }
  function l0(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), Rl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          vi(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, vi(n);
          for (var s = n.firstChild; s; ) {
            var d = s.nextSibling, g = s.nodeName;
            s[Hl] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = d;
          }
        } else
          n === "body" && vi(e.ownerDocument.body);
      n = i;
    } while (n);
    Rl(t);
  }
  function i0(e, t) {
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
  function Lo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lo(n), ks(n);
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
  function dp(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Hl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (s !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === s)
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
  function r0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function zo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ho(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function mp(e, t) {
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
  var Bo = null;
  function s0(e) {
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
  function o0(e, t, n) {
    switch (t = Fr(n), e) {
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
  function vi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ks(e);
  }
  var $t = /* @__PURE__ */ new Map(), c0 = /* @__PURE__ */ new Set();
  function Jr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Dn = G.d;
  G.d = {
    f: hp,
    r: gp,
    D: yp,
    C: pp,
    L: bp,
    m: vp,
    X: wp,
    S: Ep,
    M: Sp
  };
  function hp() {
    var e = Dn.f(), t = qr();
    return e || t;
  }
  function gp(e) {
    var t = Va(e);
    t !== null && t.tag === 5 && t.type === "form" ? Cf(t) : Dn.r(e);
  }
  var wl = typeof document > "u" ? null : document;
  function d0(e, t, n) {
    var a = wl;
    if (a && typeof t == "string" && t) {
      var i = Yt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), c0.has(i) || (c0.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), gt(t, "link", e), ut(t), a.head.appendChild(t)));
    }
  }
  function yp(e) {
    Dn.D(e), d0("dns-prefetch", e, null);
  }
  function pp(e, t) {
    Dn.C(e, t), d0("preconnect", e, t);
  }
  function bp(e, t, n) {
    Dn.L(e, t, n);
    var a = wl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Yt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Yt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Yt(e) + '"]';
      var s = i;
      switch (t) {
        case "style":
          s = Sl(e);
          break;
        case "script":
          s = xl(e);
      }
      $t.has(u) || (e = C(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), $t.set(s, e), a.querySelector(i) !== null || t === "style" && a.querySelector(Ei(s)) || t === "script" && a.querySelector(wi(s)) || (t = a.createElement("link"), gt(t, "link", e), ut(t), a.head.appendChild(t)));
    }
  }
  function vp(e, t) {
    Dn.m(e, t);
    var n = wl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Yt(a) + '"][href="' + Yt(e) + '"]', s = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = xl(e);
      }
      if (!$t.has(u) && (e = C({ rel: "modulepreload", href: e }, t), $t.set(u, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(wi(s)))
              return;
        }
        a = n.createElement("link"), gt(a, "link", e), ut(a), n.head.appendChild(a);
      }
    }
  }
  function Ep(e, t, n) {
    Dn.S(e, t, n);
    var a = wl;
    if (a && e) {
      var i = Xa(a).hoistableStyles, s = Sl(e);
      t = t || "default";
      var d = i.get(s);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = a.querySelector(
          Ei(s)
        ))
          g.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = $t.get(u)) && zo(e, n);
          var E = f = a.createElement("link");
          ut(E), mt(E, "link", e), E._p = new Promise(function(_, j) {
            E.onload = _, E.onerror = j;
          }), E.addEventListener("load", function() {
            g.loading |= 1;
          }), E.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, $r(d, t, a);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: g
        }, i.set(s, d);
      }
    }
  }
  function wp(e, t) {
    Dn.X(e, t);
    var n = wl;
    if (n && e) {
      var a = ka(n).hoistableScripts, i = vl(e), u = a.get(i);
      u || (u = n.querySelector(pi(i)), u || (e = C({ src: e, async: !0 }, t), (t = $t.get(i)) && Ho(e, t), u = n.createElement("script"), ut(u), mt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function Sp(e, t) {
    Dn.M(e, t);
    var n = wl;
    if (n && e) {
      var a = ka(n).hoistableScripts, i = vl(e), u = a.get(i);
      u || (u = n.querySelector(pi(i)), u || (e = C({ src: e, async: !0, type: "module" }, t), (t = $t.get(i)) && Ho(e, t), u = n.createElement("script"), ut(u), mt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function f0(e, t, n, a) {
    var i = (i = ie.current) ? Jr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Sl(n.href), n = Xa(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Sl(n.href);
          var s = Xa(
            i
          ).hoistableStyles, d = s.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, d), (s = i.querySelector(
            Ei(e)
          )) && !s._p && (d.instance = s, d.state.loading = 5), $t.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, $t.set(e, n), s || xp(
            i,
            e,
            n,
            d.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return d;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xl(n), n = Xa(
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
  function Sl(e) {
    return 'href="' + Yt(e) + '"';
  }
  function Ei(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function d0(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function xp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), gt(t, "link", n), ut(t), e.head.appendChild(t));
  }
  function xl(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function wi(e) {
    return "script[async]" + e;
  }
  function h0(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Yt(n.href) + '"]'
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
          ), ut(a), gt(a, "style", i), $r(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = Sl(n.href);
          var s = e.querySelector(
            Ei(i)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, ut(s), s;
          a = m0(n), (i = $t.get(i)) && ko(a, i), s = (e.ownerDocument || e).createElement("link"), ut(s);
          var d = s;
          return d._p = new Promise(function(g, E) {
            d.onload = g, d.onerror = E;
          }), gt(s, "link", a), t.state.loading |= 4, $r(s, n.precedence, e), t.instance = s;
        case "script":
          return u = vl(n.src), (i = e.querySelector(
            pi(u)
          )) ? (t.instance = i, ut(i), i) : (a = n, (i = $t.get(u)) && (a = C({}, n), Ho(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), ut(i), mt(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, $r(a, n.precedence, e));
    return t.instance;
  }
  function $r(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, s = i, d = 0; d < a.length; d++) {
      var g = a[d];
      if (g.dataset.precedence === t) s = g;
      else if (s !== i) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ko(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ir = null;
  function g0(e, t, n) {
    if (Ir === null) {
      var a = /* @__PURE__ */ new Map(), i = Ir = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Ir, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var s = n[i];
      if (!(s[Hl] || s[dt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = s.getAttribute(t) || "";
        d = e + d;
        var g = a.get(d);
        g ? g.push(s) : a.set(d, [s]);
      }
    }
    return a;
  }
  function y0(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Rp(e, t, n) {
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
  function p0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Tp(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = Sl(a.href), s = t.querySelector(
          Ei(i)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Wr.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, ut(s);
          return;
        }
        s = t.ownerDocument || t, a = m0(a), (i = $t.get(i)) && ko(a, i), s = s.createElement("link"), ut(s);
        var d = s;
        d._p = new Promise(function(g, E) {
          d.onload = g, d.onerror = E;
        }), gt(s, "link", a), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Wr.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Go = 0;
  function Np(e, t) {
    return e.stylesheets && e.count === 0 && es(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && es(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Go === 0 && (Go = 62500 * rp());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && es(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > Go ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Wr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) es(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Pr = null;
  function es(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Pr = /* @__PURE__ */ new Map(), t.forEach(Cp, e), Pr = null, Wr.call(e));
  }
  function Cp(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Pr.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Pr.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < i.length; s++) {
          var d = i[s];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d);
        }
        a && n.set(null, a);
      }
      i = t.instance, d = i.getAttribute("data-precedence"), s = n.get(d) || a, s === a && n.set(null, i), n.set(d, i), this.count++, a = Wr.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), s ? s.parentNode.insertBefore(i, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Si = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0
  };
  function Cp(e, t, n, a, i, u, f, h, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uu(0), this.hiddenUpdates = Uu(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function p0(e, t, n, a, i, u, f, h, E, _, j, q) {
    return e = new Cp(
      e,
      t,
      n,
      d,
      E,
      _,
      j,
      q,
      g
    ), t = 1, s === !0 && (t |= 24), s = Lt(3, null, null, t), e.current = s, s.stateNode = e, t = vu(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, xu(s), e;
  }
  function v0(e) {
    return e ? (e = el, e) : el;
  }
  function v0(e, t, n, a, i, u) {
    i = b0(i), a.context === null ? a.context = i : a.pendingContext = i, a = Vn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Kn(e, a, t), n !== null && (Ct(n, e, t), Fl(n, e, t));
  }
  function w0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yo(e, t) {
    w0(e, t), (e = e.alternate) && w0(e, t);
  }
  function S0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ya(e, 67108864);
      t !== null && Ct(t, e, 67108864), qo(e, 67108864);
    }
  }
  function x0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = Mu(t);
      var n = ya(e, t);
      n !== null && Ct(n, e, t), qo(e, t);
    }
  }
  var Ir = !0;
  function Np(e, t, n, a) {
    var i = H.T;
    H.T = null;
    var u = Y.p;
    try {
      Y.p = 2, ko(e, t, n, a);
    } finally {
      Y.p = u, H.T = i;
    }
  }
  var ts = !0;
  function _p(e, t, n, a) {
    var i = H.T;
    H.T = null;
    var s = G.p;
    try {
      G.p = 2, Vo(e, t, n, a);
    } finally {
      G.p = s, H.T = i;
    }
  }
  function Op(e, t, n, a) {
    var i = H.T;
    H.T = null;
    var s = G.p;
    try {
      G.p = 8, Vo(e, t, n, a);
    } finally {
      G.p = s, H.T = i;
    }
  }
  function Vo(e, t, n, a) {
    if (ts) {
      var i = Xo(a);
      if (i === null)
        _o(
          e,
          t,
          a,
          ns,
          n
        ), T0(e, a);
      else if (jp(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (T0(e, a), t & 4 && -1 < Dp.indexOf(e)) {
        for (; i !== null; ) {
          var s = Va(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var d = ha(s.pendingLanes);
                  if (d !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var E = 1 << 31 - Ut(d);
                      g.entanglements[1] |= E, d &= ~E;
                    }
                    cn(u), (Ce & 6) === 0 && (jr = bt() + 500, di(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = ya(u, 2), h !== null && Ct(h, u, 2), zr(), qo(u, 2);
            }
          if (s = Xo(a), s === null && _o(
            e,
            t,
            a,
            ns,
            n
          ), s === i) break;
          i = s;
        }
        i !== null && a.stopPropagation();
      } else
        _o(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Xo(e) {
    return e = Ks(e), Ko(e);
  }
  var ns = null;
  function Ko(e) {
    if (ns = null, e = Ya(e), e !== null) {
      var t = h(e);
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
    return ns = e, null;
  }
  function R0(e) {
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
        switch (yg()) {
          case Dc:
            return 2;
          case jc:
            return 8;
          case Ki:
          case pg:
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
  var Qo = !1, ra = null, sa = null, ua = null, xi = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), oa = [], Dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function T0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        xi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(t.pointerId);
    }
  }
  function Ti(e, t, n, a, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [i]
    }, t !== null && (t = Va(t), t !== null && S0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function jp(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ra = Ti(
          ra,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return sa = Ti(
          sa,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return ua = Ti(
          ua,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var s = i.pointerId;
        return xi.set(
          s,
          Ti(
            xi.get(s) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return s = i.pointerId, Ri.set(
          s,
          Ti(
            Ri.get(s) || null,
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
  function N0(e) {
    var t = Ya(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, kc(e.priority, function() {
              x0(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, kc(e.priority, function() {
              x0(n);
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
  function as(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Xo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Xs = a, n.target.dispatchEvent(a), Xs = null;
      } else
        return t = Va(n), t !== null && S0(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function C0(e, t, n) {
    as(e) && n.delete(t);
  }
  function Up() {
    Qo = !1, ra !== null && as(ra) && (ra = null), sa !== null && as(sa) && (sa = null), ua !== null && as(ua) && (ua = null), xi.forEach(C0), Ri.forEach(C0);
  }
  function ls(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qo || (Qo = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Up
    )));
  }
  var tu = null;
  function C0(e) {
    tu !== e && (tu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        is === e && (is = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Ko(a || n) === null)
              continue;
            break;
          }
          var s = Va(n);
          s !== null && (e.splice(t, 3), t -= 3, Vu(
            s,
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
  function Rl(e) {
    function t(E) {
      return ls(E, e);
    }
    ra !== null && ls(ra, e), sa !== null && ls(sa, e), ua !== null && ls(ua, e), xi.forEach(t), Ri.forEach(t);
    for (var n = 0; n < oa.length; n++) {
      var a = oa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < oa.length && (n = oa[0], n.blockedOn === null); )
      N0(n), n.blockedOn === null && oa.shift();
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
          return new Promise(function(d) {
            return i = d;
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
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
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
  function Zo(e) {
    this._internalRoot = e;
  }
  rs.prototype.render = Zo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = qt();
    E0(n, a, e, t, null, null);
  }, rs.prototype.unmount = Zo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      E0(e.current, 2, null, e, null, null), qr(), t[Ga] = null;
    }
  };
  function rs(e) {
    this._internalRoot = e;
  }
  rs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Bc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < oa.length && t !== 0 && t < oa[n].priority; n++) ;
      oa.splice(n, 0, e), n === 0 && N0(e);
    }
  };
  var O0 = u.version;
  if (O0 !== "19.2.3")
    throw Error(
      c(
        527,
        O0,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = v(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Mp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ss.isDisabled && ss.supportsFiber)
      try {
        Ml = ss.inject(
          Mp
        ), jt = ss;
      } catch {
      }
  }
  return Ai.createRoot = function(e, t) {
    if (!f(e)) throw Error(c(299));
    var n = !1, a = "", i = Hf, s = Bf, d = kf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = b0(
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
    ), e[Ha] = t.current, To(e), new Vo(t);
  }, Ri.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, i = "", u = zd, f = Hd, h = Bd, E = null;
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
    ), t.context = b0(null), n = t.current, a = qt(), a = Mu(a), i = Vn(a), i.callback = null, Kn(n, i, a), n = a, t.current.lanes = n, Ul(t, n), cn(t), e[Ha] = t.current, To(e), new nu(t);
  }, Ri.version = "19.2.3", Ri;
}
var Q0;
function xb() {
  if (Q0) return ec.exports;
  Q0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), ec.exports = Sb(), ec.exports;
}
var xb = wb();
function Rb(l = {}) {
  const { nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c } = l, [d, m] = S.useState(!1), p = S.useRef(o);
  p.current = o;
  const b = S.useRef(c);
  return b.current = c, S.useEffect(() => {
    const y = document.createElement("script");
    return y.src = "https://accounts.google.com/gsi/client", u && (y.src += `?hl=${u}`), y.async = !0, y.defer = !0, y.nonce = r, y.onload = () => {
      var v;
      h(!0), (v = p.current) === null || v === void 0 || v.call(p);
    }, y.onerror = () => {
      var v;
      h(!1), (v = b.current) === null || v === void 0 || v.call(b);
    }, document.body.appendChild(y), () => {
      document.body.removeChild(y);
    };
  }, [r]), f;
}
const kh = S.createContext(null);
function Tb({ clientId: l, nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c, children: d }) {
  const m = Rb({
    nonce: r,
    onScriptLoadSuccess: o,
    onScriptLoadError: c,
    locale: s
  }), p = S.useMemo(() => ({
    locale: s,
    clientId: l,
    scriptLoadedSuccessfully: h
  }), [l, h]);
  return qp.createElement(Yh.Provider, { value: p }, f);
}
function Ab() {
  const l = S.useContext(kh);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function Cb({ flow: l = "implicit", scope: r = "", onSuccess: s, onError: o, onNonOAuthError: c, overrideScope: d, state: m, ...p }) {
  const { clientId: b, scriptLoadedSuccessfully: y } = Ab(), v = S.useRef(), x = S.useRef(s);
  x.current = s;
  const C = S.useRef(o);
  C.current = o;
  const k = S.useRef(c);
  k.current = c, S.useEffect(() => {
    var D, X;
    if (!y)
      return;
    const V = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (X = (D = window?.google) === null || D === void 0 ? void 0 : D.accounts) === null || X === void 0 ? void 0 : X.oauth2[V]({
      client_id: b,
      scope: d ? r : `openid profile email ${r}`,
      callback: (F) => {
        var I, he;
        if (F.error)
          return (I = C.current) === null || I === void 0 ? void 0 : I.call(C, F);
        (he = x.current) === null || he === void 0 || he.call(x, F);
      },
      error_callback: (F) => {
        var I;
        (I = k.current) === null || I === void 0 || I.call(k, F);
      },
      state: h,
      ...p
    });
    v.current = Q;
  }, [b, y, l, r, m]);
  const A = S.useCallback((D) => {
    var X;
    return (X = v.current) === null || X === void 0 ? void 0 : X.requestAccessToken(D);
  }, []), z = S.useCallback(() => {
    var D;
    return (D = v.current) === null || D === void 0 ? void 0 : D.requestCode();
  }, []);
  return l === "implicit" ? A : z;
}
var le = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(le || {}), ct = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(ct || {}), Ze = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(Ze || {}), It = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(It || {}), Tc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(Tc || {}), da = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(da || {}), Ui = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(Ui || {});
const Ee = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, Ve = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, ys = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, Ha = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  FORGOT_USERNAME: "/api/forgot-username",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout"
}, ki = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, os = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ni = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Sl = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Z0 = /[!@#$%^&*._-]/, F0 = /^[A-Za-z0-9!@#$%^&*._-]+$/, mn = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300,
  TOKEN_REFRESH_MAX_AGE_DAYS: 7,
  RESEND_COOLDOWN_SECONDS: 30
}, Nb = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, _i = {
  COURSES: "/courses"
}, Ie = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, Un = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, Ob = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Db = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, Ae = {
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
  // Forgot Username Errors
  USERNAME_RECOVERY_FAILED: "Failed to send verification link. Please try again.",
  // Brand Configuration Errors
  BRAND_CONFIG_TITLE: "We're having trouble signing you in",
  BRAND_CONFIG_MESSAGE: "It looks like this sign-in form isn't set up correctly for this site. Please contact support if this issue persists."
}, Mi = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, Qe = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  FORGOT_USERNAME: "[ForgotUsername]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]",
  BRAND_CONFIG: "[BrandConfig]"
}, ac = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, lc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, ic = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, cs = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, tt = ({
  label: l,
  onClick: r,
  disabled: u,
  type: o = Ze.BUTTON,
  variant: c = ct.PRIMARY,
  part: f,
  className: h,
  children: p,
  ariaLabel: b,
  mainButtonStyle: y
}) => {
  const v = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-30! disabled:cursor-not-allowed!", x = {
    [pt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [pt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [pt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, C = m ? `identity-widget-button ${v} ${x[c]} ${m}` : `identity-widget-button ${v} ${x[c]}`, k = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...m ? m.split(/\s+/).map((z) => z.trim()).filter((z) => z.startsWith("identity-widget-")) : []
      ].filter(Boolean)
    )
  ).join(" "), A = d || k;
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      className: C,
      onClick: r,
      disabled: u,
      type: o,
      part: N,
      "aria-label": b || (typeof l == "string" ? l : void 0),
      "aria-disabled": u,
      style: { ...y, borderStyle: "solid !important" },
      children: p || l
    }
  );
}, nn = S.forwardRef((l, r) => {
  const {
    label: u,
    startIcon: o,
    endIcon: c,
    error: f,
    helperText: h,
    optional: p,
    className: b,
    options: y,
    id: v,
    ...x
  } = l, C = !!d || !!m, k = x.type === "select" || !!y, A = v || `input-${Math.random().toString(36).substr(2, 9)}`, z = `${A}-error`, D = `${A}-helper`;
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${b || ""}`,
      children: [
        u && /* @__PURE__ */ m.jsxs(
          "label",
          {
            htmlFor: N,
            part: "identity-widget-input-label",
            className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
            children: [
              u,
              " ",
              p && /* @__PURE__ */ m.jsx(
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
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            part: "identity-widget-input-container",
            className: "identity-widget-input-container flex! items-center! relative!",
            children: [
              o && /* @__PURE__ */ m.jsx(
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
                  id: N,
                  part: "identity-widget-input-select",
                  "aria-label": typeof s == "string" ? s : x["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? z : void 0,
                  "aria-required": x.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: C ? "#d64545" : "#cbd5d5",
                    ...x.style
                  },
                  ...x,
                  children: y && y.map((X) => /* @__PURE__ */ g.jsx(
                    "option",
                    {
                      part: "identity-widget-input-option",
                      className: "identity-widget-input-option",
                      value: V.value,
                      children: V.label
                    },
                    V.value
                  ))
                }
              ) : /* @__PURE__ */ m.jsx(
                "input",
                {
                  ref: r,
                  id: N,
                  part: "identity-widget-input-field",
                  "aria-label": typeof s == "string" ? s : x["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? z : void 0,
                  "aria-required": x.required,
                  className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: C ? "#d64545" : "#cbd5d5",
                    ...x.style
                  },
                  ...x
                }
              ),
              c && /* @__PURE__ */ m.jsx(
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
        f && typeof f == "string" && /* @__PURE__ */ m.jsx(
          "div",
          {
            id: z,
            role: "alert",
            "aria-live": "polite",
            part: "identity-widget-input-error",
            className: "identity-widget-input-error text-[#d64545] text-[13px]! mt-1.5! text-left!",
            children: f
          }
        ),
        !f && h && /* @__PURE__ */ m.jsx(
          "div",
          {
            id: O,
            role: "status",
            "aria-live": "polite",
            part: "identity-widget-input-helper",
            className: "identity-widget-input-helper text-[#d64545] text-[13px]! mt-1.5! text-left!",
            children: h
          }
        )
      ]
    }
  );
}), jb = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", _t = ({
  type: l,
  title: r,
  message: u,
  actionText: o,
  onActionClick: c,
  onClose: f,
  className: h = "",
  children: p
}) => {
  const b = () => {
    switch (l) {
      case le.SUCCESS:
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
      case le.WARNING:
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
      case le.ERROR:
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
      case le.INFO:
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
      case le.SUCCESS:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case le.WARNING:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case le.ERROR:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case le.INFO:
      default:
        return /* @__PURE__ */ m.jsx(
          "img",
          {
            part: "identity-widget-banner-icon-image",
            src: jb,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, v = b(), x = () => {
    switch (l) {
      case le.ERROR:
        return da.ALERT;
      case le.WARNING:
      case le.INFO:
        return da.STATUS;
      case le.SUCCESS:
        return da.STATUS;
      default:
        return da.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: x(),
      "aria-live": l === re.ERROR ? Oi.ASSERTIVE : Oi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! ${r ? "items-start!" : "items-center!"} max-[500px]:items-start! py-3! px-4! rounded! ${v.bg} ${v.border} ${h}`,
      children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            part: "identity-widget-banner-icon",
            className: `identity-widget-banner-icon flex-shrink-0! ${r ? "mt-0.5!" : ""} ${v.iconColor}!`,
            "aria-hidden": "true",
            children: y()
          }
        ),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            part: "identity-widget-banner-content",
            className: "identity-widget-banner-content ml-3! flex-1! flex! flex-col! gap-0.5!",
            children: [
              r && /* @__PURE__ */ m.jsx(
                "span",
                {
                  part: "identity-widget-banner-title",
                  className: `identity-widget-banner-title text-sm! font-bold! ${v.titleText}`,
                  children: r
                }
              ),
              /* @__PURE__ */ m.jsxs(
                "div",
                {
                  part: "identity-widget-banner-message-row",
                  className: "identity-widget-banner-message-row flex! items-center! gap-2! flex-wrap!",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "span",
                      {
                        part: "identity-widget-banner-message",
                        className: `identity-widget-banner-message text-sm! font-medium! ${v.text}`,
                        children: u
                      }
                    ),
                    o && c && /* @__PURE__ */ m.jsx(
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
                    o && !c && /* @__PURE__ */ m.jsx(
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
        f && /* @__PURE__ */ m.jsxs(
          "button",
          {
            part: "identity-widget-banner-close",
            type: "button",
            onClick: f,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${v.iconColor} ${v.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ m.jsx(
                "span",
                {
                  part: "identity-widget-banner-close-text",
                  className: "identity-widget-banner-close-text sr-only",
                  children: "Dismiss"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "svg",
                {
                  part: "identity-widget-banner-close-icon",
                  className: "identity-widget-banner-close-icon w-5! h-5!",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ m.jsx(
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
  const [d, m] = S.useState(!1), [p, b] = S.useState(!1);
  S.useEffect(() => {
    setTimeout(() => m(!0), Da.ANIMATION_ENTRANCE_DELAY);
    const A = setTimeout(() => {
      y();
    }, u);
    return () => clearTimeout(N);
  }, [u]);
  const y = () => {
    b(!0), setTimeout(() => {
      h(!1), o && o();
    }, mn.ANIMATION_EXIT_DURATION);
  }, v = () => {
    switch (l) {
      case le.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case le.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case le.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      case le.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, x = () => {
    switch (l) {
      case le.SUCCESS:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case le.WARNING:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case le.ERROR:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case le.INFO:
      default:
        return /* @__PURE__ */ m.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ m.jsx(
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
      case le.ERROR:
        return da.ALERT;
      case le.WARNING:
      case le.INFO:
      case le.SUCCESS:
        return da.STATUS;
      default:
        return da.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: k(),
      "aria-live": l === re.ERROR ? Oi.ASSERTIVE : Oi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${ac.Z_INDEX}]! transition-all! duration-300! ${f && !p ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: ac.MAX_WIDTH, width: ac.WIDTH },
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-toast-body",
          className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${C.bg}`,
          children: [
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-toast-icon",
                className: `identity-widget-toast-icon flex-shrink-0! ${C.icon}`,
                "aria-hidden": "true",
                children: x()
              }
            ),
            /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsxs(
              "button",
              {
                part: "identity-widget-toast-close",
                type: "button",
                onClick: y,
                "aria-label": "Close notification",
                className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${C.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
                children: [
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      part: "identity-widget-toast-close-text",
                      className: "identity-widget-toast-close-text sr-only",
                      children: "Close"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "svg",
                    {
                      part: "identity-widget-toast-close-icon",
                      className: "identity-widget-toast-close-icon w-5! h-5!",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ m.jsx(
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
}, Cs = () => /* @__PURE__ */ m.jsx(
  "span",
  {
    part: "identity-widget-loader",
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ m.jsx("span", { part: "identity-widget-loader-text", className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class Ci extends Error {
}
Ci.prototype.name = "InvalidTokenError";
function Ub(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, u) => {
    let o = u.charCodeAt(0).toString(16).toUpperCase();
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
function qi(l, r) {
  if (typeof l != "string")
    throw new Ci("Invalid token specified: must be a string");
  r || (r = {});
  const u = r.header === !0 ? 0 : 1, o = l.split(".")[u];
  if (typeof o != "string")
    throw new Ci(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = Mb(o);
  } catch (d) {
    throw new Ci(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ci(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Vh() {
  const l = window.location.hostname;
  if (l === Un.HOSTNAME || l === Un.IP || Un.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Lb() {
  const l = window.location.hostname;
  return l === Un.HOSTNAME || l === Un.IP || Un.IP_PATTERN.test(l) || l.startsWith(`${Ie.DEV}.`) || l.startsWith(`${Ie.DEV}-`) ? It.DEV : l.startsWith(`${Ie.TEST}.`) || l.startsWith(`${Ie.TEST}-`) ? It.TEST : l.startsWith(`${Ie.STAGE}.`) || l.startsWith(`${Ie.STAGE}-`) ? It.STAGE : It.PROD;
}
function ds() {
  const l = window.location.href, r = new URL(l), u = r.hostname;
  if (u.startsWith(`${Ie.DEV}.`)) {
    const o = u.replace(`${Ie.DEV}.`, `${Ie.DEV_LEARN}.`);
    return `${r.protocol}//${o}${_i.COURSES}`;
  } else if (u.startsWith(`${Ie.TEST}.`)) {
    const o = u.replace(`${Ie.TEST}.`, `${Ie.TEST_LEARN}.`);
    return `${r.protocol}//${o}${_i.COURSES}`;
  } else if (u.startsWith(`${Ie.STAGE}.`)) {
    const o = u.replace(`${Ie.STAGE}.`, `${Ie.STAGE_LEARN}.`);
    return `${r.protocol}//${o}${_i.COURSES}`;
  } else if (u.split(".").length === 2) {
    const c = `${Ie.LEARN}.${u}`;
    return `${r.protocol}//${c}${_i.COURSES}`;
  } else
    return `${r.protocol}//${u}${_i.COURSES}`;
}
function ja(l, r, u, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + u);
  const f = Vh(), h = f ? `; domain=${f}` : "", p = window.location.protocol === "https:" ? "; secure" : "", b = o ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${b}; expires=${c.toUTCString()}; path=/${h}${p}; SameSite=Strict`;
}
function Nt(l, r = !0) {
  const s = document.cookie.split(";");
  for (const o of s) {
    const c = o.trim();
    if (c.startsWith(`${l}=`)) {
      const f = c.substring(l.length + 1);
      return r ? decodeURIComponent(f) : f;
    }
  }
  return null;
}
function fs(l) {
  const r = Vh(), u = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${u}`;
}
function Xh(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var J0 = {};
const { toString: Lb } = Object.prototype, { getPrototypeOf: xc } = Object, { iterator: Tu, toStringTag: Vh } = Symbol, Au = /* @__PURE__ */ ((l) => (r) => {
  const s = Lb.call(r);
  return l[s] || (l[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ln = (l) => (l = l.toLowerCase(), (r) => Au(r) === l), Cu = (l) => (r) => typeof r === l, { isArray: Cl } = Array, xl = Cu("undefined");
function zi(l) {
  return l !== null && !xl(l) && l.constructor !== null && !xl(l.constructor) && _t(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const Qh = rn("ArrayBuffer");
function Hb(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Qh(l.buffer), r;
}
const Hb = Cu("string"), _t = Cu("function"), Qh = Cu("number"), Hi = (l) => l !== null && typeof l == "object", Bb = (l) => l === !0 || l === !1, mu = (l) => {
  if (Au(l) !== "object")
    return !1;
  const r = Nc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Kh in l) && !(As in l);
}, qb = (l) => {
  if (!Yi(l) || Gi(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, Gb = rn("Date"), Yb = rn("File"), Vb = rn("Blob"), Xb = rn("FileList"), Kb = (l) => Yi(l) && Ot(l.pipe), Qb = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || Ot(l.append) && ((r = _s(l)) === "formdata" || // detect form-data instance
  r === "object" && Ot(l.toString) && l.toString() === "[object FormData]"));
}, Zb = rn("URLSearchParams"), [Fb, Jb, $b, Ib] = ["ReadableStream", "Request", "Response", "Headers"].map(rn), Wb = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vi(l, r, { allOwnKeys: u = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let o, c;
  if (typeof l != "object" && (l = [l]), Cl(l))
    for (o = 0, c = l.length; o < c; o++)
      r.call(null, l[o], o, l);
  else {
    if (Gi(l))
      return;
    const f = u ? Object.getOwnPropertyNames(l) : Object.keys(l), h = f.length;
    let p;
    for (o = 0; o < h; o++)
      p = f[o], r.call(null, l[p], p, l);
  }
}
function Fh(l, r) {
  if (Gi(l))
    return null;
  r = r.toLowerCase();
  const u = Object.keys(l);
  let o = u.length, c;
  for (; o-- > 0; )
    if (c = u[o], r === c.toLowerCase())
      return c;
  return null;
}
const Oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jh = (l) => !xl(l) && l !== Oa;
function cc() {
  const { caseless: l, skipUndefined: r } = Jh(this) && this || {}, s = {}, o = (c, d) => {
    const m = l && Zh(s, d) || d;
    mu(s[m]) && mu(c) ? s[m] = cc(s[m], c) : mu(c) ? s[m] = cc({}, c) : Cl(c) ? s[m] = c.slice() : (!r || !xl(c)) && (s[m] = c);
  };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && Vi(arguments[c], o);
  return u;
}
const Pb = (l, r, u, { allOwnKeys: o } = {}) => (Vi(r, (c, f) => {
  u && Ot(c) ? l[f] = Xh(c, u) : l[f] = c;
}, { allOwnKeys: o }), l), ev = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), tv = (l, r, u, o) => {
  l.prototype = Object.create(r.prototype, o), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: r.prototype
  }), u && Object.assign(l.prototype, u);
}, nv = (l, r, u, o) => {
  let c, f, h;
  const p = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), f = c.length; f-- > 0; )
      h = c[f], (!o || o(h, l, r)) && !p[h] && (r[h] = l[h], p[h] = !0);
    l = u !== !1 && Nc(l);
  } while (l && (!u || u(l, r)) && l !== Object.prototype);
  return r;
}, av = (l, r, u) => {
  l = String(l), (u === void 0 || u > l.length) && (u = l.length), u -= r.length;
  const o = l.indexOf(r, u);
  return o !== -1 && o === u;
}, lv = (l) => {
  if (!l) return null;
  if (Cl(l)) return l;
  let r = l.length;
  if (!Zh(r)) return null;
  const u = new Array(r);
  for (; r-- > 0; )
    u[r] = l[r];
  return u;
}, iv = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && Nc(Uint8Array)), rv = (l, r) => {
  const o = (l && l[As]).call(l);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const f = c.value;
    r.call(l, f[0], f[1]);
  }
}, sv = (l, r) => {
  let u;
  const o = [];
  for (; (u = l.exec(r)) !== null; )
    o.push(u);
  return o;
}, uv = rn("HTMLFormElement"), ov = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, o, c) {
    return o.toUpperCase() + c;
  }
), $0 = (({ hasOwnProperty: l }) => (r, u) => l.call(r, u))(Object.prototype), cv = rn("RegExp"), $h = (l, r) => {
  const u = Object.getOwnPropertyDescriptors(l), o = {};
  Vi(u, (c, f) => {
    let h;
    (h = r(c, f, l)) !== !1 && (o[f] = h || c);
  }), Object.defineProperties(l, o);
}, dv = (l) => {
  $h(l, (r, u) => {
    if (Ot(l) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const o = l[u];
    if (Ot(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, fv = (l, r) => {
  const u = {}, o = (c) => {
    c.forEach((f) => {
      u[f] = !0;
    });
  };
  return Cl(l) ? o(l) : o(String(l).split(r)), s;
}, dv = () => {
}, mv = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function hv(l) {
  return !!(l && _t(l.append) && l[Vh] === "FormData" && l[Tu]);
}
const yv = (l) => {
  const r = new Array(10), u = (o, c) => {
    if (Yi(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (Gi(o))
        return o;
      if (!("toJSON" in o)) {
        r[c] = o;
        const d = Cl(o) ? [] : {};
        return Bi(o, (m, p) => {
          const b = s(m, c + 1);
          !xl(b) && (d[p] = b);
        }), r[c] = void 0, d;
      }
    }
    return o;
  };
  return u(l, 0);
}, pv = rn("AsyncFunction"), bv = (l) => l && (Yi(l) || Ot(l)) && Ot(l.then) && Ot(l.catch), Ih = ((l, r) => l ? setImmediate : r ? ((u, o) => (Ua.addEventListener("message", ({ source: c, data: f }) => {
  c === Ua && f === u && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), Ua.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  _t(Oa.postMessage)
), bv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Oa) : typeof J0 < "u" && J0.nextTick || Fh, vv = (l) => l != null && _t(l[Tu]), U = {
  isArray: Cl,
  isArrayBuffer: Kh,
  isBuffer: zi,
  isFormData: Kb,
  isArrayBufferView: zb,
  isString: Hb,
  isNumber: Qh,
  isBoolean: Bb,
  isObject: Hi,
  isPlainObject: mu,
  isEmptyObject: qb,
  isReadableStream: Fb,
  isRequest: Jb,
  isResponse: $b,
  isHeaders: Ib,
  isUndefined: Al,
  isDate: Gb,
  isFile: Yb,
  isBlob: Vb,
  isRegExp: cv,
  isFunction: Ot,
  isStream: Kb,
  isURLSearchParams: Zb,
  isTypedArray: iv,
  isFileList: Xb,
  forEach: Vi,
  merge: mc,
  extend: Pb,
  trim: Wb,
  stripBOM: ev,
  inherits: tv,
  toFlatObject: nv,
  kindOf: _s,
  kindOfTest: rn,
  endsWith: av,
  toArray: lv,
  forEachEntry: rv,
  matchAll: sv,
  isHTMLForm: uv,
  hasOwnProperty: $0,
  hasOwnProp: $0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $h,
  freezeMethods: dv,
  toObjectSet: fv,
  toCamelCase: ov,
  noop: mv,
  toFiniteNumber: hv,
  findKey: Fh,
  global: Ua,
  isContextDefined: Jh,
  isSpecCompliantForm: gv,
  toJSONObject: yv,
  isAsyncFn: pv,
  isThenable: bv,
  setImmediate: Ih,
  asap: vv,
  isIterable: Ev
};
function me(l, r, u, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), u && (this.config = u), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
}
j.inherits(me, Error, {
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
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Wh = me.prototype, Ph = {};
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
  Ph[l] = { value: l };
});
Object.defineProperties(me, Ph);
Object.defineProperty(Wh, "isAxiosError", { value: !0 });
me.from = (l, r, u, o, c, f) => {
  const h = Object.create(Wh);
  j.toFlatObject(l, h, function(v) {
    return v !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = l && l.message ? l.message : "Error", b = r == null && l ? l.code : r;
  return me.call(h, p, b, u, o, c), l && h.cause == null && Object.defineProperty(h, "cause", { value: l, configurable: !0 }), h.name = l && l.name || "Error", f && Object.assign(h, f), h;
};
const wv = null;
function hc(l) {
  return j.isPlainObject(l) || j.isArray(l);
}
function eg(l) {
  return j.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function I0(l, r, u) {
  return l ? l.concat(r).map(function(c, f) {
    return c = eg(c), !u && f ? "[" + c + "]" : c;
  }).join(u ? "." : "") : r;
}
function Sv(l) {
  return j.isArray(l) && !l.some(hc);
}
const xv = j.toFlatObject(j, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Nu(l, r, s) {
  if (!U.isObject(l))
    throw new TypeError("target must be an object");
  r = r || new FormData(), u = j.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(z, D) {
    return !U.isUndefined(D[z]);
  });
  const o = u.metaTokens, c = u.visitor || v, f = u.dots, h = u.indexes, b = (u.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(r);
  if (!j.isFunction(c))
    throw new TypeError("visitor must be a function");
  function y(N) {
    if (N === null) return "";
    if (j.isDate(N))
      return N.toISOString();
    if (j.isBoolean(N))
      return N.toString();
    if (!b && j.isBlob(N))
      throw new me("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(N) || j.isTypedArray(N) ? b && typeof Blob == "function" ? new Blob([N]) : Buffer.from(N) : N;
  }
  function v(A, z, D) {
    let X = A;
    if (A && !D && typeof A == "object") {
      if (U.endsWith(z, "{}"))
        z = o ? z : z.slice(0, -2), A = JSON.stringify(A);
      else if (U.isArray(A) && Sv(A) || (U.isFileList(A) || U.endsWith(z, "[]")) && (X = U.toArray(A)))
        return z = Ph(z), X.forEach(function(Q, F) {
          !(U.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? F0([z], F, d) : m === null ? z : z + "[]",
            y(Q)
          );
        }), !1;
    }
    return fc(A) ? !0 : (r.append(F0(D, z, d), y(A)), !1);
  }
  const x = [], C = Object.assign(wv, {
    defaultVisitor: v,
    convertValue: y,
    isVisitable: hc
  });
  function k(A, z) {
    if (!U.isUndefined(A)) {
      if (x.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + z.join("."));
      x.push(A), U.forEach(A, function(X, V) {
        (!(U.isUndefined(X) || X === null) && c.call(
          r,
          X,
          U.isString(V) ? V.trim() : V,
          z,
          C
        )) === !0 && k(X, z ? z.concat(V) : [V]);
      }), x.pop();
    }
  }
  if (!j.isObject(l))
    throw new TypeError("data must be an object");
  return k(l), r;
}
function W0(l) {
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
const tg = Cc.prototype;
tg.append = function(r, u) {
  this._pairs.push([r, u]);
};
tg.toString = function(r) {
  const u = r ? function(o) {
    return r.call(this, o, W0);
  } : W0;
  return this._pairs.map(function(c) {
    return u(c[0]) + "=" + u(c[1]);
  }, "").join("&");
};
function Rv(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ng(l, r, u) {
  if (!r)
    return l;
  const o = u && u.encode || Rv;
  j.isFunction(u) && (u = {
    serialize: u
  });
  const c = u && u.serialize;
  let f;
  if (c ? f = c(r, u) : f = j.isURLSearchParams(r) ? r.toString() : new Cc(r, u).toString(o), f) {
    const h = l.indexOf("#");
    h !== -1 && (l = l.slice(0, h)), l += (l.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return l;
}
class P0 {
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
  use(r, u, o) {
    return this.handlers.push({
      fulfilled: r,
      rejected: u,
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
    j.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const ag = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rv = typeof URLSearchParams < "u" ? URLSearchParams : Rc, Tv = typeof FormData < "u" ? FormData : null, Av = typeof Blob < "u" ? Blob : null, Cv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Tv,
    FormData: Nv,
    Blob: Cv
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
}, Symbol.toStringTag, { value: "Module" })), yt = {
  ...Dv,
  ...Cv
};
function Uv(l, r) {
  return Nu(l, new yt.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return yt.isNode && U.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Mv(l) {
  return j.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Lv(l) {
  const r = {}, u = Object.keys(l);
  let o;
  const c = u.length;
  let f;
  for (o = 0; o < c; o++)
    f = u[o], r[f] = l[f];
  return r;
}
function lg(l) {
  function r(u, o, c, f) {
    let h = u[f++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), b = f >= u.length;
    return h = !h && j.isArray(c) ? c.length : h, b ? (j.hasOwnProp(c, h) ? c[h] = [c[h], o] : c[h] = o, !p) : ((!c[h] || !j.isObject(c[h])) && (c[h] = []), r(u, o, c[h], f) && j.isArray(c[h]) && (c[h] = Lv(c[h])), !p);
  }
  if (j.isFormData(l) && j.isFunction(l.entries)) {
    const u = {};
    return j.forEachEntry(l, (o, c) => {
      r(Mv(o), c, u, 0);
    }), u;
  }
  return null;
}
function zv(l, r, u) {
  if (j.isString(l))
    try {
      return (r || JSON.parse)(l), j.trim(l);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (u || JSON.stringify)(l);
}
const Xi = {
  transitional: ag,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, u) {
    const o = u.getContentType() || "", c = o.indexOf("application/json") > -1, f = j.isObject(r);
    if (f && j.isHTMLForm(r) && (r = new FormData(r)), j.isFormData(r))
      return c ? JSON.stringify(lg(r)) : r;
    if (j.isArrayBuffer(r) || j.isBuffer(r) || j.isStream(r) || j.isFile(r) || j.isBlob(r) || j.isReadableStream(r))
      return r;
    if (j.isArrayBufferView(r))
      return r.buffer;
    if (j.isURLSearchParams(r))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let p;
    if (f) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Uv(r, this.formSerializer).toString();
      if ((p = j.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return Nu(
          p ? { "files[]": r } : r,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return f || c ? (u.setContentType("application/json", !1), zv(r)) : r;
  }],
  transformResponse: [function(r) {
    const u = this.transitional || Xi.transitional, o = u && u.forcedJSONParsing, c = this.responseType === "json";
    if (j.isResponse(r) || j.isReadableStream(r))
      return r;
    if (r && j.isString(r) && (o && !this.responseType || c)) {
      const h = !(u && u.silentJSONParsing) && c;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (p) {
        if (h)
          throw p.name === "SyntaxError" ? me.from(p, me.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
j.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  Xi.headers[l] = {};
});
const Hv = j.toObjectSet([
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
]), Bv = (l) => {
  const r = {};
  let u, o, c;
  return l && l.split(`
`).forEach(function(h) {
    c = h.indexOf(":"), u = h.substring(0, c).trim().toLowerCase(), o = h.substring(c + 1).trim(), !(!u || r[u] && Hv[u]) && (u === "set-cookie" ? r[u] ? r[u].push(o) : r[u] = [o] : r[u] = r[u] ? r[u] + ", " + o : o);
  }), r;
}, eh = /* @__PURE__ */ Symbol("internals");
function Oi(l) {
  return l && String(l).trim().toLowerCase();
}
function bs(l) {
  return l === !1 || l == null ? l : j.isArray(l) ? l.map(bs) : String(l);
}
function kv(l) {
  const r = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = u.exec(l); )
    r[o[1]] = o[2];
  return r;
}
const qv = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function rc(l, r, u, o, c) {
  if (j.isFunction(o))
    return o.call(this, r, u);
  if (c && (r = u), !!j.isString(r)) {
    if (j.isString(o))
      return r.indexOf(o) !== -1;
    if (j.isRegExp(o))
      return o.test(r);
  }
}
function Gv(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, u, o) => u.toUpperCase() + o);
}
function Yv(l, r) {
  const u = j.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(l, o + u, {
      value: function(c, f, h) {
        return this[o].call(this, r, c, f, h);
      },
      configurable: !0
    });
  });
}
let Dt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, u, o) {
    const c = this;
    function f(p, b, y) {
      const v = Oi(b);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const x = U.findKey(c, v);
      (!x || c[x] === void 0 || y === !0 || y === void 0 && c[x] !== !1) && (c[x || b] = hu(p));
    }
    const h = (p, b) => j.forEach(p, (y, v) => f(y, v, b));
    if (j.isPlainObject(r) || r instanceof this.constructor)
      h(r, u);
    else if (j.isString(r) && (r = r.trim()) && !qv(r))
      h(Bv(r), u);
    else if (j.isObject(r) && j.isIterable(r)) {
      let p = {}, b, y;
      for (const v of r) {
        if (!j.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = v[0]] = (b = p[y]) ? j.isArray(b) ? [...b, v[1]] : [b, v[1]] : v[1];
      }
      h(p, u);
    } else
      r != null && f(u, r, o);
    return this;
  }
  get(r, u) {
    if (r = Oi(r), r) {
      const o = j.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!u)
          return c;
        if (u === !0)
          return kv(c);
        if (j.isFunction(u))
          return u.call(this, c, o);
        if (j.isRegExp(u))
          return u.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, u) {
    if (r = Oi(r), r) {
      const o = j.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!u || rc(this, this[o], o, u)));
    }
    return !1;
  }
  delete(r, u) {
    const o = this;
    let c = !1;
    function f(h) {
      if (h = Oi(h), h) {
        const p = j.findKey(o, h);
        p && (!u || rc(o, o[p], p, u)) && (delete o[p], c = !0);
      }
    }
    return j.isArray(r) ? r.forEach(f) : f(r), c;
  }
  clear(r) {
    const u = Object.keys(this);
    let o = u.length, c = !1;
    for (; o--; ) {
      const f = u[o];
      (!r || rc(this, this[f], f, r, !0)) && (delete this[f], c = !0);
    }
    return c;
  }
  normalize(r) {
    const u = this, o = {};
    return j.forEach(this, (c, f) => {
      const h = j.findKey(o, f);
      if (h) {
        u[h] = bs(c), delete u[f];
        return;
      }
      const p = r ? Gv(f) : String(f).trim();
      p !== f && delete u[f], u[p] = bs(c), o[p] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const u = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (o, c) => {
      o != null && o !== !1 && (u[c] = r && j.isArray(o) ? o.join(", ") : o);
    }), u;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, u]) => r + ": " + u).join(`
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
  static concat(r, ...u) {
    const o = new this(r);
    return u.forEach((c) => o.set(c)), o;
  }
  static accessor(r) {
    const o = (this[eh] = this[eh] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function f(h) {
      const p = Oi(h);
      o[p] || (Yv(c, h), o[p] = !0);
    }
    return j.isArray(r) ? r.forEach(f) : f(r), this;
  }
};
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(Dt.prototype, ({ value: l }, r) => {
  let u = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(o) {
      this[u] = o;
    }
  };
});
j.freezeMethods(Dt);
function sc(l, r) {
  const u = this || Xi, o = r || u, c = Dt.from(o.headers);
  let f = o.data;
  return j.forEach(l, function(p) {
    f = p.call(u, f, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), f;
}
function ig(l) {
  return !!(l && l.__CANCEL__);
}
function Nl(l, r, s) {
  de.call(this, l ?? "canceled", de.ERR_CANCELED, r, s), this.name = "CanceledError";
}
U.inherits(Nl, de, {
  __CANCEL__: !0
});
function rg(l, r, u) {
  const o = u.config.validateStatus;
  !u.status || !o || o(u.status) ? l(u) : r(new me(
    "Request failed with status code " + u.status,
    [me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function Vv(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function Xv(l, r) {
  l = l || 10;
  const u = new Array(l), o = new Array(l);
  let c = 0, f = 0, h;
  return r = r !== void 0 ? r : 1e3, function(b) {
    const y = Date.now(), v = o[d];
    m || (m = y), s[c] = b, o[c] = y;
    let x = d, C = 0;
    for (; x !== c; )
      C += s[x++], x = x % l;
    if (c = (c + 1) % l, c === d && (d = (d + 1) % l), y - m < r)
      return;
    const k = v && y - v;
    return k ? Math.round(C * 1e3 / k) : void 0;
  };
}
function Kv(l, r) {
  let u = 0, o = 1e3 / r, c, f;
  const h = (y, v = Date.now()) => {
    u = v, c = null, f && (clearTimeout(f), f = null), l(...y);
  };
  return [(...y) => {
    const v = Date.now(), x = v - s;
    x >= o ? m(y, v) : (c = y, d || (d = setTimeout(() => {
      d = null, m(c);
    }, o - x)));
  }, () => c && m(c)];
}
const xs = (l, r, u = 3) => {
  let o = 0;
  const c = Xv(50, 250);
  return Vv((d) => {
    const m = d.loaded, p = d.lengthComputable ? d.total : void 0, b = m - o, y = c(b), v = m <= p;
    o = m;
    const x = {
      loaded: m,
      total: p,
      progress: p ? h / p : void 0,
      bytes: b,
      rate: y || void 0,
      estimated: y && p && v ? (p - h) / y : void 0,
      event: f,
      lengthComputable: p != null,
      [r ? "download" : "upload"]: !0
    };
    l(x);
  }, s);
}, eh = (l, r) => {
  const s = l != null;
  return [(o) => r[0]({
    lengthComputable: u,
    total: l,
    loaded: o
  }), r[1]];
}, nh = (l) => (...r) => j.asap(() => l(...r)), Qv = pt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (u) => (u = new URL(u, pt.origin), l.protocol === u.protocol && l.host === u.host && (r || l.port === u.port)))(
  new URL(pt.origin),
  pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)
) : () => !0, Zv = pt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, r, u, o, c, f, h) {
      if (typeof document > "u") return;
      const p = [`${l}=${encodeURIComponent(r)}`];
      j.isNumber(u) && p.push(`expires=${new Date(u).toUTCString()}`), j.isString(o) && p.push(`path=${o}`), j.isString(c) && p.push(`domain=${c}`), f === !0 && p.push("secure"), j.isString(h) && p.push(`SameSite=${h}`), document.cookie = p.join("; ");
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
function Fv(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Jv(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function sg(l, r, u) {
  let o = !Fv(r);
  return l && (o || u == !1) ? Jv(l, r) : r;
}
const ah = (l) => l instanceof Dt ? { ...l } : l;
function La(l, r) {
  r = r || {};
  const s = {};
  function o(y, v, x, C) {
    return U.isPlainObject(y) && U.isPlainObject(v) ? U.merge.call({ caseless: C }, y, v) : U.isPlainObject(v) ? U.merge({}, v) : U.isArray(v) ? v.slice() : v;
  }
  function c(y, v, x, C) {
    if (U.isUndefined(v)) {
      if (!U.isUndefined(y))
        return o(void 0, y, x, C);
    } else return o(y, v, x, C);
  }
  function f(y, v) {
    if (!j.isUndefined(v))
      return o(void 0, v);
  }
  function h(y, v) {
    if (j.isUndefined(v)) {
      if (!j.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, v);
  }
  function p(y, v, x) {
    if (x in r)
      return o(y, v);
    if (x in l)
      return o(void 0, y);
  }
  const b = {
    url: f,
    method: f,
    data: f,
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
    validateStatus: p,
    headers: (y, v, x) => c(nh(y), nh(v), x, !0)
  };
  return U.forEach(Object.keys({ ...l, ...r }), function(v) {
    const x = b[v] || c, C = x(l[v], r[v], v);
    U.isUndefined(C) && x !== p || (s[v] = C);
  }), s;
}
const ug = (l) => {
  const r = La({}, l);
  let { data: u, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: f, headers: h, auth: p } = r;
  if (r.headers = h = Dt.from(h), r.url = ng(sg(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), p && h.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), U.isFormData(s)) {
    if (yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (U.isFunction(s.getHeaders)) {
      const b = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(b).forEach(([v, x]) => {
        y.includes(v.toLowerCase()) && m.set(v, x);
      });
    }
  }
  if (pt.hasStandardBrowserEnv && (o && j.isFunction(o) && (o = o(r)), o || o !== !1 && Qv(r.url))) {
    const b = c && f && Zv.read(f);
    b && h.set(c, b);
  }
  return r;
}, $v = typeof XMLHttpRequest < "u", Iv = $v && function(l) {
  return new Promise(function(u, o) {
    const c = ug(l);
    let d = c.data;
    const m = Ot.from(c.headers).normalize();
    let { responseType: p, onUploadProgress: b, onDownloadProgress: y } = c, v, x, C, k, A;
    function z() {
      k && k(), A && A(), c.cancelToken && c.cancelToken.unsubscribe(v), c.signal && c.signal.removeEventListener("abort", v);
    }
    let O = new XMLHttpRequest();
    O.open(c.method.toUpperCase(), c.url, !0), O.timeout = c.timeout;
    function V() {
      if (!O)
        return;
      const Q = Dt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), $ = {
        data: !p || p === "text" || p === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: Q,
        config: l,
        request: O
      };
      ig(function(ne) {
        s(ne), z();
      }, function(ne) {
        o(ne), z();
      }, I), D = null;
    }
    "onloadend" in O ? O.onloadend = V : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, O.onabort = function() {
      O && (o(new me("Request aborted", me.ECONNABORTED, l, O)), O = null);
    }, O.onerror = function(W) {
      const $ = W && W.message ? W.message : "Network Error", oe = new me($, me.ERR_NETWORK, l, O);
      oe.event = W || null, o(oe), O = null;
    }, O.ontimeout = function() {
      let W = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const $ = c.transitional || ag;
      c.timeoutErrorMessage && (W = c.timeoutErrorMessage), o(new me(
        W,
        $.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,
        l,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && U.forEach(m.toJSON(), function(F, I) {
      D.setRequestHeader(I, F);
    }), U.isUndefined(c.withCredentials) || (D.withCredentials = !!c.withCredentials), p && p !== "json" && (D.responseType = c.responseType), y && ([C, A] = Eu(y, !0), D.addEventListener("progress", C)), b && D.upload && ([x, k] = Eu(b), D.upload.addEventListener("progress", x), D.upload.addEventListener("loadend", k)), (c.cancelToken || c.signal) && (v = (Q) => {
      D && (o(!Q || Q.type ? new Nl(null, l, D) : Q), D.abort(), D = null);
    }, c.cancelToken && c.cancelToken.subscribe(v), c.signal && (c.signal.aborted ? v() : c.signal.addEventListener("abort", v)));
    const V = Yv(c.url);
    if (V && yt.protocols.indexOf(V) === -1) {
      o(new de("Unsupported protocol " + V + ":", de.ERR_BAD_REQUEST, l));
      return;
    }
    O.send(f || null);
  });
}, Wv = (l, r) => {
  const { length: u } = l = l ? l.filter(Boolean) : [];
  if (r || u) {
    let o = new AbortController(), c;
    const f = function(y) {
      if (!c) {
        c = !0, p();
        const v = y instanceof Error ? y : this.reason;
        o.abort(v instanceof de ? v : new Nl(v instanceof Error ? v.message : v));
      }
    };
    let h = r && setTimeout(() => {
      h = null, f(new me(`timeout ${r} of ms exceeded`, me.ETIMEDOUT));
    }, r);
    const p = () => {
      l && (h && clearTimeout(h), h = null, l.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(f) : y.removeEventListener("abort", f);
      }), l = null);
    };
    l.forEach((y) => y.addEventListener("abort", f));
    const { signal: b } = o;
    return b.unsubscribe = () => j.asap(p), b;
  }
}, Pv = function* (l, r) {
  let u = l.byteLength;
  if (u < r) {
    yield l;
    return;
  }
  let o = 0, c;
  for (; o < u; )
    c = o + r, yield l.slice(o, c), o = c;
}, eE = async function* (l, r) {
  for await (const u of tE(l))
    yield* Pv(u, r);
}, tE = async function* (l) {
  if (l[Symbol.asyncIterator]) {
    yield* l;
    return;
  }
  const r = l.getReader();
  try {
    for (; ; ) {
      const { done: u, value: o } = await r.read();
      if (u)
        break;
      yield o;
    }
  } finally {
    await r.cancel();
  }
}, lh = (l, r, u, o) => {
  const c = eE(l, r);
  let f = 0, h, p = (b) => {
    h || (h = !0, o && o(b));
  };
  return new ReadableStream({
    async pull(b) {
      try {
        const { done: y, value: v } = await c.next();
        if (y) {
          p(), b.close();
          return;
        }
        let x = v.byteLength;
        if (s) {
          let C = d += x;
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
}, ih = 64 * 1024, { isFunction: ms } = j, nE = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(j.global), {
  ReadableStream: rh,
  TextEncoder: sh
} = j.global, uh = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, aE = (l) => {
  l = j.merge.call({
    skipUndefined: !0
  }, nE, l);
  const { fetch: r, Request: u, Response: o } = l, c = r ? ms(r) : typeof fetch == "function", f = ms(u), h = ms(o);
  if (!c)
    return !1;
  const p = c && ou(ih), b = c && (typeof rh == "function" ? /* @__PURE__ */ ((A) => (z) => A.encode(z))(new rh()) : async (A) => new Uint8Array(await new s(A).arrayBuffer())), y = d && p && uh(() => {
    let A = !1;
    const z = new s(yt.origin, {
      body: new ih(),
      method: "POST",
      get duplex() {
        return N = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !z;
  }), v = m && p && uh(() => U.isReadableStream(new o("").body)), x = {
    stream: v && ((A) => A.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
    !x[A] && (x[A] = (z, D) => {
      let X = z && z[A];
      if (X)
        return X.call(z);
      throw new de(`Response type '${A}' is not supported`, de.ERR_NOT_SUPPORT, D);
    });
  });
  const C = async (A) => {
    if (A == null)
      return 0;
    if (j.isBlob(N))
      return N.size;
    if (j.isSpecCompliantForm(N))
      return (await new u(pt.origin, {
        method: "POST",
        body: N
      }).arrayBuffer()).byteLength;
    if (U.isArrayBufferView(A) || U.isArrayBuffer(A))
      return A.byteLength;
    if (U.isURLSearchParams(A) && (A = A + ""), U.isString(A))
      return (await b(A)).byteLength;
  }, k = async (A, z) => {
    const D = U.toFiniteNumber(A.getContentLength());
    return D ?? C(z);
  };
  return async (N) => {
    let {
      url: z,
      method: D,
      data: X,
      signal: V,
      cancelToken: Q,
      timeout: F,
      onDownloadProgress: I,
      onUploadProgress: he,
      responseType: ne,
      headers: W,
      withCredentials: ge = "same-origin",
      fetchOptions: Ae
    } = ug(A), at = r || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let we = Iv([V, Q && Q.toAbortSignal()], F), Ne = null;
    const He = we && we.unsubscribe && (() => {
      we.unsubscribe();
    });
    let je;
    try {
      if (he && y && D !== "get" && D !== "head" && (Ze = await k(W, X)) !== 0) {
        let _e = new s(z, {
          method: "POST",
          body: V,
          duplex: "half"
        }), w;
        if (U.isFormData(X) && (w = _e.headers.get("content-type")) && W.setContentType(w), _e.body) {
          const [L, K] = eh(
            Ze,
            Eu(th(he))
          );
          X = ah(_e.body, lh, L, K);
        }
      }
      U.isString(ge) || (ge = ge ? "include" : "omit");
      const G = d && "credentials" in s.prototype, H = {
        ...Ae,
        signal: we,
        method: D.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: X,
        duplex: "half",
        credentials: G ? ge : void 0
      };
      Ne = d && new s(z, H);
      let Y = await (d ? at(Ne, Ae) : at(z, H));
      const oe = v && (ne === "stream" || ne === "response");
      if (v && (I || oe && He)) {
        const _e = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          _e[Z] = G[Z];
        });
        const w = U.toFiniteNumber(Y.headers.get("content-length")), [L, K] = I && eh(
          w,
          Eu(th(I), !0)
        ) || [];
        Y = new o(
          ah(Y.body, lh, L, () => {
            K && K(), He && He();
          }),
          _e
        );
      }
      ne = ne || "text";
      let xe = await x[U.findKey(x, ne) || "text"](Y, A);
      return !oe && He && He(), await new Promise((_e, w) => {
        ig(_e, w, {
          data: xe,
          headers: Ot.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: A,
          request: Ne
        });
      });
    } catch (G) {
      throw He && He(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new de("Network Error", de.ERR_NETWORK, A, Ne),
        {
          cause: G.cause || G
        }
      ) : de.from(G, G && G.code, A, Ne);
    }
  };
}, lE = /* @__PURE__ */ new Map(), og = (l) => {
  let r = l && l.env || {};
  const { fetch: u, Request: o, Response: c } = r, f = [
    o,
    c,
    u
  ];
  let h = f.length, p = h, b, y, v = lE;
  for (; p--; )
    b = f[p], y = v.get(b), y === void 0 && v.set(b, y = p ? /* @__PURE__ */ new Map() : aE(r)), v = y;
  return y;
};
og();
const _c = {
  http: wv,
  xhr: Iv,
  fetch: {
    get: og
  }
};
j.forEach(_c, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const oh = (l) => `- ${l}`, iE = (l) => j.isFunction(l) || l === null || l === !1;
function rE(l, r) {
  l = j.isArray(l) ? l : [l];
  const { length: u } = l;
  let o, c;
  const f = {};
  for (let h = 0; h < u; h++) {
    o = l[h];
    let p;
    if (c = o, !iE(o) && (c = _c[(p = String(o)).toLowerCase()], c === void 0))
      throw new me(`Unknown adapter '${p}'`);
    if (c && (j.isFunction(c) || (c = c.get(r))))
      break;
    f[p || "#" + h] = c;
  }
  if (!c) {
    const h = Object.entries(f).map(
      ([b, y]) => `adapter ${b} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = u ? h.length > 1 ? `since :
` + h.map(oh).join(`
`) : " " + oh(h[0]) : "as no adapter specified";
    throw new me(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const cg = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: rE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: _c
};
function uc(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Nl(null, l);
}
function ch(l) {
  return uc(l), l.headers = Dt.from(l.headers), l.data = sc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), cg.getAdapter(l.adapter || Xi.adapter, l)(l).then(function(o) {
    return uc(l), o.data = sc.call(
      l,
      l.transformResponse,
      o
    ), o.headers = Dt.from(o.headers), o;
  }, function(o) {
    return ig(o) || (uc(l), o && o.response && (o.response.data = sc.call(
      l,
      l.transformResponse,
      o.response
    ), o.response.headers = Dt.from(o.response.headers))), Promise.reject(o);
  });
}
const dg = "1.13.2", js = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  js[l] = function(o) {
    return typeof o === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const dh = {};
js.transitional = function(r, u, o) {
  function c(f, h) {
    return "[Axios v" + dg + "] Transitional option '" + f + "'" + h + (o ? ". " + o : "");
  }
  return (f, h, p) => {
    if (r === !1)
      throw new me(
        c(h, " has been removed" + (u ? " in " + u : "")),
        me.ERR_DEPRECATED
      );
    return u && !dh[h] && (dh[h] = !0, console.warn(
      c(
        h,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), r ? r(f, h, p) : !0;
  };
};
js.spelling = function(r) {
  return (u, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function sE(l, r, u) {
  if (typeof l != "object")
    throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(l);
  let c = o.length;
  for (; c-- > 0; ) {
    const f = o[c], h = r[f];
    if (h) {
      const p = l[f], b = p === void 0 || h(p, f, l);
      if (b !== !0)
        throw new me("option " + f + " must be " + b, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new me("Unknown option " + f, me.ERR_BAD_OPTION);
  }
}
const vs = {
  assertOptions: sE,
  validators: js
}, fn = vs.validators;
let Ma = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new P0(),
      response: new P0()
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
  async request(r, u) {
    try {
      return await this._request(r, u);
    } catch (o) {
      if (o instanceof Error) {
        let c = {};
        Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error();
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? f && !String(o.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + f) : o.stack = f;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(r, u) {
    typeof r == "string" ? (u = u || {}, u.url = r) : u = r || {}, u = La(this.defaults, u);
    const { transitional: o, paramsSerializer: c, headers: f } = u;
    o !== void 0 && vs.assertOptions(o, {
      silentJSONParsing: fn.transitional(fn.boolean),
      forcedJSONParsing: fn.transitional(fn.boolean),
      clarifyTimeoutError: fn.transitional(fn.boolean)
    }, !1), c != null && (j.isFunction(c) ? u.paramsSerializer = {
      serialize: c
    } : vs.assertOptions(c, {
      encode: fn.function,
      serialize: fn.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), vs.assertOptions(u, {
      baseUrl: fn.spelling("baseURL"),
      withXsrfToken: fn.spelling("withXSRFToken")
    }, !0), u.method = (u.method || this.defaults.method || "get").toLowerCase();
    let h = f && j.merge(
      f.common,
      f[u.method]
    );
    f && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (N) => {
        delete f[N];
      }
    ), u.headers = Dt.concat(h, f);
    const p = [];
    let b = !0;
    this.interceptors.request.forEach(function(z) {
      typeof z.runWhen == "function" && z.runWhen(s) === !1 || (b = b && z.synchronous, p.unshift(z.fulfilled, z.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(z) {
      y.push(z.fulfilled, z.rejected);
    });
    let v, x = 0, C;
    if (!b) {
      const A = [oh.bind(this), void 0];
      for (A.unshift(...p), A.push(...y), C = A.length, v = Promise.resolve(s); x < C; )
        v = v.then(A[x++], A[x++]);
      return v;
    }
    C = p.length;
    let k = s;
    for (; x < C; ) {
      const A = p[x++], z = p[x++];
      try {
        k = A(k);
      } catch (D) {
        z.call(this, D);
        break;
      }
    }
    try {
      v = oh.call(this, k);
    } catch (A) {
      return Promise.reject(A);
    }
    for (x = 0, C = y.length; x < C; )
      v = v.then(y[x++], y[x++]);
    return v;
  }
  getUri(r) {
    r = La(this.defaults, r);
    const u = sg(r.baseURL, r.url, r.allowAbsoluteUrls);
    return ng(u, r.params, r.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(r) {
  Ma.prototype[r] = function(u, o) {
    return this.request(La(o || {}, {
      method: r,
      url: u,
      data: (o || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(r) {
  function u(o) {
    return function(f, h, p) {
      return this.request(La(p || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  Ma.prototype[r] = u(), Ma.prototype[r + "Form"] = u(!0);
});
let uE = class fg {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function(f) {
      u = f;
    });
    const o = this;
    this.promise.then((c) => {
      if (!o._listeners) return;
      let f = o._listeners.length;
      for (; f-- > 0; )
        o._listeners[f](c);
      o._listeners = null;
    }), this.promise.then = (c) => {
      let f;
      const h = new Promise((p) => {
        o.subscribe(p), f = p;
      }).then(c);
      return m.cancel = function() {
        o.unsubscribe(d);
      }, m;
    }, r(function(d, m, p) {
      o.reason || (o.reason = new Nl(d, m, p), s(o.reason));
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
    const u = this._listeners.indexOf(r);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), u = (o) => {
      r.abort(o);
    };
    return this.subscribe(u), r.signal.unsubscribe = () => this.unsubscribe(u), r.signal;
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
function oE(l) {
  return function(u) {
    return l.apply(null, u);
  };
}
function cE(l) {
  return j.isObject(l) && l.isAxiosError === !0;
}
const yc = {
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
Object.entries(yc).forEach(([l, r]) => {
  yc[r] = l;
});
function mg(l) {
  const r = new Ma(l), u = Xh(Ma.prototype.request, r);
  return j.extend(u, Ma.prototype, r, { allOwnKeys: !0 }), j.extend(u, r, null, { allOwnKeys: !0 }), u.create = function(c) {
    return mg(La(l, c));
  }, u;
}
const ze = dg(qi);
ze.Axios = Ua;
ze.CanceledError = Nl;
ze.CancelToken = uE;
ze.isCancel = lg;
ze.VERSION = cg;
ze.toFormData = Nu;
ze.AxiosError = de;
ze.Cancel = ze.CanceledError;
ze.all = function(r) {
  return Promise.all(r);
};
ke.spread = oE;
ke.isAxiosError = cE;
ke.mergeConfig = La;
ke.AxiosHeaders = Dt;
ke.formToJSON = (l) => lg(j.isHTMLForm(l) ? new FormData(l) : l);
ke.getAdapter = cg.getAdapter;
ke.HttpStatusCode = yc;
ke.default = ke;
const {
  Axios: BE,
  AxiosError: kE,
  CanceledError: qE,
  isCancel: GE,
  CancelToken: YE,
  VERSION: VE,
  all: XE,
  Cancel: KE,
  isAxiosError: QE,
  spread: ZE,
  toFormData: FE,
  AxiosHeaders: JE,
  HttpStatusCode: $E,
  formToJSON: IE,
  getAdapter: WE,
  mergeConfig: PE
} = ke, dE = [
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
], hg = "WEBCOMPONENT";
function fE(l) {
  l ? localStorage.setItem(Ee.AUTHORITY_OVERRIDE, l) : localStorage.removeItem(Ee.AUTHORITY_OVERRIDE);
}
function mE() {
  return localStorage.getItem(Ee.AUTHORITY_OVERRIDE);
}
function fh() {
  localStorage.removeItem(Ee.AUTHORITY_OVERRIDE);
}
function hE() {
  const l = mE();
  if (l && Object.values(It).includes(l))
    return l;
  const r = window.location.hostname;
  return r === Un.HOSTNAME || r === Un.IP || Un.IP_PATTERN.test(r) || r.startsWith(`${Ie.DEV}.`) || r.startsWith(`${Ie.DEV}-`) ? It.DEV : r.startsWith(`${Ie.TEST}.`) || r.startsWith(`${Ie.TEST}-`) ? It.TEST : r.startsWith(`${Ie.STAGE}.`) || r.startsWith(`${Ie.STAGE}-`) ? It.STAGE : It.PROD;
}
function gE(l) {
  if (hg === Tc.TEST)
    return "";
  const r = hE();
  return l.startsWith("/global") ? Db[r] : Ob[r];
}
const Ba = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return hg === Tc.TEST ? r : `${gE(r)}${r}`;
}, yE = async (l) => {
  try {
    return dE?.find(
      (u) => u?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function fa() {
  const l = localStorage.getItem(Ee.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), u = await yE(r?.domain);
  return {
    [ys.X_BRAND_ID]: u?.subsidiaryName,
    [ys.X_SUBSIDIARY_ID]: u?.subsidiaryId?.toString(),
    [ys.X_BRAND_DOMAIN]: r?.domain
  };
}
const pE = async (l, r) => {
  const u = Ba(Ha.AUTH), o = { username: l, password: r };
  try {
    const c = await ke.post(u, o, {
      headers: await fa()
    }), f = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: f || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === ki.UNAUTHORIZED ? new Error(Ae.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(Ae.AUTH_FAILED);
  }
}, bE = async (l) => {
  const r = Ba(Ha.REGISTER);
  try {
    return (await ke.post(r, l, {
      headers: await fa()
    })).data;
  } catch (u) {
    throw console.error("Error during registration:", u), u.response?.data?.details?.errorMessage ? new Error(u.response.data.details.errorMessage) : u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.details ? new Error(u.response.data.details) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === ki.INTERNAL_SERVER_ERROR ? new Error(Ae.REGISTRATION_FAILED_RETRY) : u.message ? new Error(u.message) : new Error(Ae.REGISTRATION_FAILED);
  }
}, Cc = async (l) => {
  const r = _l(Al.CHECK_EMAIL);
  try {
    return (await ke.post(
      r,
      { email: l },
      {
        headers: await fa()
      }
    )).data;
  } catch (u) {
    throw console.error("Error checking email:", u), u.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : u.response?.status === 403 ? new Error("Access denied to email verification service") : u.response?.status === 500 ? new Error("Email verification service encountered an error") : u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.message ? new Error(`Email verification failed: ${u.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, mh = async (l) => {
  const r = Ba(Ha.FORGOT_PASSWORD), u = { email: l };
  try {
    return (await ke.post(r, u, {
      headers: await fa()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === ki.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(Ae.RESET_LINK_FAILED);
  }
}, hh = async (l) => {
  const r = Ba(Ha.FORGOT_USERNAME), u = { email: l };
  try {
    return (await ke.post(r, u, {
      headers: await fa()
    })).data;
  } catch (o) {
    throw console.error("Error sending username verification:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === ki.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(Ae.USERNAME_RECOVERY_FAILED);
  }
}, vE = async (l) => {
  const r = Ba(Ha.REFRESH_TOKEN), u = { refresh_token: l };
  try {
    const o = await ke.post(r, u, {
      headers: await fa()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, EE = async (l) => {
  const r = Ba(Ha.LOGOUT), u = { refresh_token: l };
  try {
    return (await ke.post(r, u, {
      headers: await fa()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === ki.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, wE = () => {
  try {
    const l = Nt(Ge.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = qi(l), u = Math.floor(Date.now() / 1e3);
    return !r.exp || u >= r.exp;
  } catch (l) {
    return console.error(`${Qe.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, Su = () => Nt(Ge.REFRESH_TOKEN, !1) || localStorage.getItem(be.REFRESH_TOKEN), Di = (l) => {
  try {
    const r = qi(l), u = Math.floor(Date.now() / 1e3);
    return !r.exp || u >= r.exp;
  } catch {
    return !0;
  }
}, hc = (l) => !Di(l);
let yu = null;
const wl = () => {
  yu && (clearInterval(yu), yu = null);
}, Nc = async (l) => {
  try {
    const r = l || Rs();
    if (!r)
      return !1;
    const u = await vE(r);
    if (!u?.tokens?.access_token)
      return !1;
    const o = u.tokens, c = ws(o.access_token);
    if (!c)
      return !1;
    const f = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (f <= 0)
      return !1;
    ja(Ve.ACCESS_TOKEN, o.access_token, f, !0);
    const h = u.x_credential || c.decoded.x_credentials;
    if (h && ja(Ve.X_CREDENTIAL, h, f, !1), localStorage.setItem(Ee.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      Ee.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(Ee.REFRESH_TOKEN, o.refresh_token);
      const p = 720 * 60 * 60;
      ja(Ve.REFRESH_TOKEN, o.refresh_token, p, !0), localStorage.getItem(Ee.REFRESH_TOKEN_TIME) && localStorage.setItem(Ee.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Qe.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, SE = async () => {
  const l = Su();
  if (!(Nt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(be.ACCESS_TOKEN)) || !l || !hc(l))
    return wl(), !0;
  wl();
  const s = 180 * 1e3;
  return yu = setInterval(async () => {
    const o = Su();
    if (!(Nt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(be.ACCESS_TOKEN))) {
      wl();
      return;
    }
    if (!o || !pc(o)) {
      Nl();
      return;
    }
    const d = Nt(Ge.X_CREDENTIAL, !1) || Nt(Ge.X_CREDENTIAL_OLD, !1), m = Nt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(be.ACCESS_TOKEN);
    (!d || Di(d) || !m || Di(m)) && await Nc(o);
  }, s), () => wl();
}, mh = (l) => {
  try {
    if (!localStorage.getItem(Ee.REFRESH_TOKEN_TIME))
      return console.log(
        `${Qe.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Ke.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = Nt(Ge.X_CREDENTIAL, !1) || Nt(Ge.X_CREDENTIAL_OLD, !1), o = Nt(Ge.ACCESS_TOKEN, !1);
    let c = null, d = !1;
    if (o && (c = o), s && (d = !0), c || (c = localStorage.getItem(be.ACCESS_TOKEN)), !c || !d)
      return !1;
    const h = localStorage.getItem(Ee.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const p = qi(c), b = Math.floor(Date.now() / 1e3);
      return !(!p.exp || b >= p.exp);
    } catch (p) {
      return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, p), !1;
    }
  } catch (r) {
    return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, xE = async (l) => {
  if (gh(l))
    return !0;
  try {
    if (!localStorage.getItem(Ee.REFRESH_TOKEN_TIME))
      return !1;
    const o = Rs();
    if (!o || !pc(o))
      return !1;
    const c = Nt(Ge.X_CREDENTIAL, !1) || Nt(Ge.X_CREDENTIAL_OLD, !1), d = Nt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(be.ACCESS_TOKEN), m = !c || Di(c), p = !d || Di(d);
    return !m && !p || !await Nc(o) ? !1 : mh(l);
  } catch (s) {
    return console.error(
      `${Qe.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      u
    ), !1;
  }
}, xE = () => {
  try {
    const l = localStorage.getItem(be.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < Nb.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${Ke.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, RE = () => {
  su(Ge.ACCESS_TOKEN), su(Ge.X_CREDENTIAL), su(Ge.X_CREDENTIAL_OLD), su(Ge.REFRESH_TOKEN), [
    be.REFRESH_TOKEN,
    be.REFRESH_TOKEN_TIME,
    be.ACCESS_TOKEN,
    be.ACCESS_TOKEN_EXPIRES,
    "user_info"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Qe.AUTH} All authentication tokens and state cleared`);
}, gg = async (l, r, u = !1) => {
  const o = await pE(l, r), { tokens: c, x_credential: f } = o;
  if (c.access_token) {
    const h = qi(c.access_token), p = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    ja(Ve.ACCESS_TOKEN, c.access_token, p, !0);
    const b = f || h.x_credentials;
    b ? (ja(Ve.X_CREDENTIAL, b, p, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), b && ja(Ve.X_CREDENTIAL, b, p, !1), localStorage.setItem(Ee.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      Ee.ACCESS_TOKEN_EXPIRES,
      (Date.now() + p * 1e3).toString()
    ), localStorage.setItem(Ee.REFRESH_TOKEN, c.refresh_token);
    const y = 720 * 60 * 60;
    ja(Ve.REFRESH_TOKEN, c.refresh_token, y, !0), u && c.refresh_token ? (localStorage.setItem(Ee.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Qe.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(Ee.REFRESH_TOKEN_TIME), console.log(
      `${Qe.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, ws = (l) => {
  try {
    const r = qi(l);
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
  const [l, r] = S.useState(!1);
  return S.useEffect(() => {
    La().then((s) => {
      s[du.X_BRAND_ID] || r(!0);
    }).catch((s) => {
      console.error(Ke.BRAND_CONFIG, "Failed to load brand configuration:", s), r(!0);
    });
  }, []), l;
}
const Ul = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", bc = (l) => {
  if (!l || typeof l != "object")
    return !1;
  const r = l;
  return typeof r.getModifierState != "function" ? !1 : r.getModifierState("CapsLock");
}, NE = ({
  onSuccess: l,
  onError: r,
  handleClose: u,
  onSignIn: o,
  title: c = "Create your account",
  subtitle: f = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [p, b] = S.useState(m), [y, v] = S.useState(""), [x, C] = S.useState(""), [k, A] = S.useState(""), [z, D] = S.useState(!1), [X, V] = S.useState(""), [Q, F] = S.useState(""), [I, he] = S.useState(!1), [ne, W] = S.useState(!1), [ge, Ae] = S.useState(!1), [at, we] = S.useState(!1), [Ne, He] = S.useState(!1), [Ze, G] = S.useState(!1), [H, Y] = S.useState(!1), [oe, xe] = S.useState(""), [_e, w] = S.useState(!1), [L, K] = S.useState(""), [Z, ae] = S.useState(re.INFO), ue = S.useRef(null), ce = S.useRef(null), Be = _c(), P = {
    length: k.length >= iu.MIN_LENGTH && k.length <= iu.MAX_LENGTH,
    hasNumber: Sl.NUMBER.test(k),
    hasUppercase: Sl.UPPERCASE.test(k),
    hasLowercase: Sl.LOWERCASE.test(k),
    hasSpecialChar: Q0.test(k),
    onlyAllowedChars: Z0.test(k) || k === "",
    differentFromUsername: p ? k !== p && k !== p.split("@")[0] : !0
  }, Wt = ((se) => {
    if (!se) return { strength: "", color: "", width: ru.EMPTY };
    if (P.length && P.hasNumber && P.hasUppercase && P.hasLowercase && P.hasSpecialChar && P.onlyAllowedChars && P.differentFromUsername)
      return {
        strength: lc.STRONG,
        color: ic.STRONG,
        width: cs.STRONG
      };
    let st = 0;
    return P.length && st++, P.hasNumber && st++, P.hasUppercase && st++, P.hasLowercase && st++, P.hasSpecialChar && st++, P.onlyAllowedChars && st++, P.differentFromUsername && st++, st <= 2 ? {
      strength: lc.WEAK,
      color: ic.WEAK,
      width: cs.WEAK
    } : {
      strength: lc.GOOD,
      color: ic.GOOD,
      width: cs.GOOD
    };
  })(k), sa = (se) => se ? se.length < iu.MIN_LENGTH || se.length > iu.MAX_LENGTH ? { isValid: !1, error: Xe.PASSWORD_LENGTH } : Sl.UPPERCASE.test(se) ? Sl.LOWERCASE.test(se) ? Sl.NUMBER.test(se) ? Q0.test(se) ? Z0.test(se) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: Ae.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: Ae.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: Ae.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: Ae.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: Xe.PASSWORD_UPPERCASE
  } : { isValid: !1, error: Xe.PASSWORD_REQUIRED };
  S.useEffect(() => {
    if (!Be) {
      if (ce.current && clearTimeout(ce.current), !p) {
        we(!1), He(!1), Y(!1), xe("");
        return;
      }
      if (!Ni.test(p)) {
        we(!1), He(!1);
        return;
      }
      return ce.current = setTimeout(async () => {
        G(!0);
        try {
          (await Cc(p)).exists ? (He(!0), we(!0)) : (He(!1), we(!1));
        } catch (se) {
          console.error(`${Ke.CREATE_ACCOUNT} Email check failed:`, se);
          const Et = se instanceof Error ? se.message : "Unable to verify email. You can still proceed with registration.";
          Y(!0), xe(Et), we(!0), He(!1);
        } finally {
          G(!1);
        }
      }, mn.EMAIL_CHECK_DEBOUNCE), () => {
        re.current && clearTimeout(re.current);
      };
    }
  }, [p, Be]);
  const oa = p && Ni.test(p);
  S.useEffect(() => {
    const se = (Et) => {
      Et.key === "Escape" && s();
    };
    return document.addEventListener("keydown", se), () => document.removeEventListener("keydown", se);
  }, [s]);
  const le = (se) => {
    se.target === ue.current && s();
  }, Ve = async (se) => {
    if (se.preventDefault(), Be) return;
    if (Ae(!0), !p || !y || !x) {
      r("Please fill in all required fields");
      return;
    }
    const Et = sa(k);
    if (!Et.isValid) {
      W(Et.error), r(Et.error), O(!1);
      return;
    }
    if (!Ni.test(p)) {
      V(Xe.EMAIL_INVALID), r(Xe.EMAIL_INVALID);
      return;
    }
    D(!0), V(""), K("");
    try {
      const st = p.split("@")[0], qa = await bE({
        username: st,
        email: p,
        firstName: y,
        lastName: x,
        password: k
      });
      console.log(
        `${Qe.CREATE_ACCOUNT} Registration successful:`,
        qa.message
      );
      try {
        const ca = await hg(p, k, _e);
        l(ca);
      } catch (ca) {
        console.error(
          `${Qe.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ma
        );
        const bt = ma instanceof Error ? ma.message : "Auto-login failed";
        r(bt);
      }
    } catch (rt) {
      console.error(`${Ke.CREATE_ACCOUNT} Registration failed:`, rt);
      const za = rt instanceof Error ? rt.message : Xe.REGISTRATION_FAILED;
      K(za), ae(re.ERROR), r(za);
    } finally {
      O(!1);
    }
  }, se = (ce) => {
    if (ce.key === "CapsLock" && ce.type === "keydown") {
      F((Et) => !Et);
      return;
    }
    ce.key !== "CapsLock" && F(bc(ce));
  }, We = (ce) => {
    F(bc(ce));
  }, kn = () => {
    F(!1);
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    L && /* @__PURE__ */ g.jsx(
      oc,
      {
        type: Z,
        message: L,
        duration: Da.TOAST_DEFAULT_DURATION,
        onClose: () => K("")
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ie,
        onMouseDown: en,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "create-account-dialog-title",
        children: /* @__PURE__ */ m.jsxs(
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
              /* @__PURE__ */ m.jsx(
                tt,
                {
                  onClick: u,
                  variant: ct.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Ze.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ m.jsx(
                    "svg",
                    {
                      part: "identity-widget-create-account-close-icon",
                      className: "identity-widget-create-account-close-icon w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ m.jsx(
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
              /* @__PURE__ */ m.jsxs(
                "div",
                {
                  part: "identity-widget-create-account-header",
                  className: "identity-widget-create-account-header mb-6! text-center!",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "h2",
                      {
                        id: "create-account-dialog-title",
                        part: "identity-widget-create-account-title",
                        className: "identity-widget-create-account-title text-2xl! font-bold! text-gray-800! mb-1!",
                        children: c
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      "p",
                      {
                        part: "identity-widget-create-account-subtitle",
                        className: "identity-widget-create-account-subtitle text-sm! text-gray-600! mt-1!",
                        children: f
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ m.jsxs(
                "form",
                {
                  part: "identity-widget-create-account-form",
                  onSubmit: Bn,
                  className: "identity-widget-create-account-form space-y-4!",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ m.jsx(
                          Wt,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: p,
                            onChange: (se) => {
                              b(se.target.value), V("");
                            },
                            placeholder: "Enter email address",
                            disabled: z,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: ge && !p ? "Required" : X || "",
                            endIcon: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                              Ze && /* @__PURE__ */ g.jsx(Gh, {}),
                              !Ze && !Ne && !H && p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && /* @__PURE__ */ g.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: Ul,
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
                    qe && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        title: Ae.BRAND_CONFIG_TITLE,
                        message: Ae.BRAND_CONFIG_MESSAGE,
                        className: "identity-widget-create-account-brand-error-banner mb-4!"
                      }
                    ),
                    !Be && at && Ne && !H && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: le.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          pe(!1), o(p);
                        },
                        onClose: () => pe(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    !qe && Ke && H && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        message: ae,
                        onClose: () => {
                          pe(!1), G(!1), xe("");
                        },
                        className: "identity-widget-create-account-error-banner mb-4!"
                      }
                    ),
                    /* @__PURE__ */ m.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-name-row",
                        className: "identity-widget-create-account-name-row flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0",
                        children: [
                          /* @__PURE__ */ m.jsx(
                            Wt,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: y,
                              onChange: (ce) => v(ce.target.value),
                              placeholder: "First Name",
                              disabled: z,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: de && !y ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            Wt,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: x,
                              onChange: (se) => C(se.target.value),
                              placeholder: "Last Name",
                              disabled: z,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: ge && !x ? "Required" : ""
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-password-field",
                        className: "identity-widget-create-account-password-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ m.jsxs(
                          "div",
                          {
                            part: "identity-widget-create-account-password-input-wrap",
                            className: "identity-widget-create-account-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ m.jsx(
                                Wt,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: I ? "text" : "password",
                                  value: k,
                                  onChange: (se) => {
                                    A(se.target.value), F("");
                                  },
                                  onKeyDown: se,
                                  onKeyUp: se,
                                  onFocus: We,
                                  onBlur: kn,
                                  placeholder: "Enter Password...",
                                  disabled: z,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: Q,
                                  endIcon: /* @__PURE__ */ m.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => oe(!$),
                                      className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": $ ? "Hide password" : "Show password",
                                      children: $ ? /* @__PURE__ */ m.jsx(
                                        "svg",
                                        {
                                          part: "identity-widget-create-account-password-hide-icon",
                                          className: "identity-widget-create-account-password-hide-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ m.jsx(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            }
                                          )
                                        }
                                      ) : /* @__PURE__ */ m.jsxs(
                                        "svg",
                                        {
                                          part: "identity-widget-create-account-password-show-icon",
                                          className: "identity-widget-create-account-password-show-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: [
                                            /* @__PURE__ */ m.jsx(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                              ee && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Mi.CAPS_LOCK_ON
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
                          /* @__PURE__ */ m.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-strength-row",
                              className: "identity-widget-create-account-strength-row flex! items-center! justify-between! mb-2!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-create-account-strength-track",
                                    className: "identity-widget-create-account-strength-track w-full! bg-gray-200! rounded-full! h-2! mr-3!",
                                    children: /* @__PURE__ */ m.jsx(
                                      "div",
                                      {
                                        part: "identity-widget-create-account-strength-fill",
                                        className: "identity-widget-create-account-strength-fill h-2! rounded-full! transition-all! duration-300!",
                                        style: {
                                          width: sn.width,
                                          backgroundColor: sn.color
                                        }
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ m.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-create-account-strength-label",
                                    className: "identity-widget-create-account-strength-label text-sm! font-medium! whitespace-nowrap!",
                                    style: { color: sn.color },
                                    children: sn.strength
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ m.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-requirements",
                              className: "identity-widget-create-account-requirements mt-3!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "p",
                                  {
                                    part: "identity-widget-create-account-requirements-title",
                                    className: "identity-widget-create-account-requirements-title text-sm! font-medium! text-gray-700! mb-2!",
                                    children: "Password must:"
                                  }
                                ),
                                /* @__PURE__ */ m.jsxs(
                                  "ul",
                                  {
                                    part: "identity-widget-create-account-requirements-list",
                                    className: "identity-widget-create-account-requirements-list space-y-1!",
                                    children: [
                                      /* @__PURE__ */ m.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": P.length ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.length ? /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                                      /* @__PURE__ */ m.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": P.hasNumber ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.hasNumber ? /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                                      /* @__PURE__ */ m.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": P.hasUppercase ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.hasUppercase ? /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                                      /* @__PURE__ */ m.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": P.hasSpecialChar ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.hasSpecialChar ? /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                                      /* @__PURE__ */ m.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": P.onlyAllowedChars ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.onlyAllowedChars ? /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                                      /* @__PURE__ */ m.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": P.differentFromUsername ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            P.differentFromUsername ? /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ m.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ m.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-remember-row",
                        className: "identity-widget-create-account-remember-row flex! items-center! mt-4! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ m.jsxs(
                          "label",
                          {
                            part: "identity-widget-create-account-remember-label",
                            className: "identity-widget-create-account-remember-label flex! items-center! m-0!",
                            children: [
                              /* @__PURE__ */ m.jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  part: "identity-widget-create-account-remember-checkbox",
                                  checked: _e,
                                  onChange: (se) => w(se.target.checked),
                                  className: "identity-widget-create-account-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                  "aria-label": "Remember me"
                                }
                              ),
                              /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsx(
                      tt,
                      {
                        type: it.SUBMIT,
                        disabled: z || Ne || !oa || Be,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! m-0!",
                        children: z ? /* @__PURE__ */ g.jsxs(
                          "span",
                          {
                            part: "identity-widget-create-account-submit-loading",
                            className: "identity-widget-create-account-submit-loading flex! items-center! justify-center!",
                            children: [
                              /* @__PURE__ */ m.jsxs(
                                "svg",
                                {
                                  part: "identity-widget-create-account-submit-spinner",
                                  className: "identity-widget-create-account-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    /* @__PURE__ */ m.jsx(
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
                                    /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-divider",
                        className: "identity-widget-create-account-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ m.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-line-wrap",
                              className: "identity-widget-create-account-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ m.jsx(
                                "div",
                                {
                                  part: "identity-widget-create-account-divider-line",
                                  className: "identity-widget-create-account-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-text-wrap",
                              className: "identity-widget-create-account-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsx(
                      tt,
                      {
                        type: Ze.BUTTON,
                        variant: ct.OUTLINE,
                        onClick: () => o(p),
                        disabled: z,
                        part: "identity-widget-create-account-signin-button",
                        className: "identity-widget-create-account-signin-button w-full! flex! items-center! justify-center! gap-3!",
                        children: /* @__PURE__ */ m.jsx(
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
    L && /* @__PURE__ */ g.jsx(oc, { message: L, type: Z, onClose: () => K("") })
  ] });
}, CE = ({
  email: l,
  loading: r,
  cooldown: u,
  onResendLink: o,
  onBack: c,
  onClose: f
}) => {
  const m = S.useRef(null);
  S.useEffect(() => {
    const b = (y) => {
      y.key === "Escape" && f();
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [f]);
  const p = (b) => {
    b.target === h.current && f();
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-reset-success-overlay",
      className: "identity-widget-reset-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: h,
      onMouseDown: p,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-reset-success-modal",
          className: "identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ m.jsx(
              tt,
              {
                onClick: f,
                variant: ct.LINK,
                part: "identity-widget-reset-success-close-button",
                className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ze.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    part: "identity-widget-reset-success-close-icon",
                    className: "identity-widget-reset-success-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-reset-success-icon-wrap",
                className: "identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!",
                children: /* @__PURE__ */ m.jsx(
                  "img",
                  {
                    part: "identity-widget-reset-success-icon",
                    src: Ul,
                    alt: "Success",
                    "aria-hidden": "true",
                    className: "identity-widget-reset-success-icon w-16! h-16!"
                  }
                )
              }
            ),
            /* @__PURE__ */ m.jsxs(
              "div",
              {
                part: "identity-widget-reset-success-header",
                className: "identity-widget-reset-success-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "h2",
                    {
                      part: "identity-widget-reset-success-title",
                      id: "reset-success-dialog-title",
                      className: "identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!",
                      children: "Check your email"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-subtitle",
                      className: "identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!",
                      children: "We've sent a password reset link to"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-email",
                      className: "identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!",
                      children: l
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-copy",
                      className: "identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!",
                      children: "Follow the instructions in the email to reset your password and return to checkout."
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
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
            u > 0 && /* @__PURE__ */ m.jsx(
              "p",
              {
                part: "identity-widget-reset-success-cooldown-message",
                className: "identity-widget-reset-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!",
                role: "status",
                "aria-live": "polite",
                children: /* @__PURE__ */ m.jsxs("b", { children: [
                  "We've already sent a reset link. Try again in ",
                  u,
                  "s"
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              tt,
              {
                type: Ze.BUTTON,
                onClick: o,
                disabled: r || u > 0,
                ariaLabel: "Resend password reset link",
                part: "identity-widget-submit-button identity-widget-reset-success-resend-button",
                className: "identity-widget-submit-button identity-widget-reset-success-resend-button w-full! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! m-0! mb-4!",
                children: r ? /* @__PURE__ */ m.jsxs(
                  "span",
                  {
                    part: "identity-widget-reset-success-resend-loading",
                    className: "identity-widget-reset-success-resend-loading flex! items-center! justify-center!",
                    children: [
                      /* @__PURE__ */ m.jsxs(
                        "svg",
                        {
                          part: "identity-widget-reset-success-resend-spinner",
                          className: "identity-widget-reset-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ m.jsx(
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
                            /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsx(
              tt,
              {
                type: Ze.BUTTON,
                variant: ct.OUTLINE,
                onClick: c,
                disabled: r,
                part: "identity-widget-reset-success-back-button",
                className: "identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ m.jsx(
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
  handleClose: u,
  onCreateAccount: o
}) => {
  const [c, d] = S.useState(l || ""), [m, p] = S.useState(!1), [b, y] = S.useState(!1), [v, x] = S.useState(""), [C, k] = S.useState(!1), [A, z] = S.useState(!1), [D, X] = S.useState(!1), [V, Q] = S.useState(!1), [F, I] = S.useState(""), [he, ne] = S.useState(!1), [W, ge] = S.useState(0), Ae = _c(), at = S.useRef(null), we = S.useRef(null);
  S.useEffect(() => {
    if (!(W <= 0))
      return we.current = setTimeout(() => {
        ge((G) => G - 1);
      }, 1e3), () => {
        pe.current && clearTimeout(pe.current);
      };
  }, [W]), S.useEffect(() => {
    const G = (H) => {
      H.key === "Escape" && s();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [s]), S.useEffect(() => {
    if (Ae) return;
    const G = Ni.test(c);
    if (X(G), !G || !c) {
      z(!1), Q(!1), I(""), ne(!1);
      return;
    }
    const H = setTimeout(async () => {
      k(!0);
      try {
        const Y = await Cc(c);
        console.log("[ResetPassword] Email check response:", Y), Y.exists ? (z(!0), ne(!1)) : (z(!1), ne(!0)), console.log("[ResetPassword] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ResetPassword] Error checking email:", Y);
        const oe = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), I(oe), ne(!0), z(!1);
      } finally {
        k(!1);
      }
    }, mn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(H);
  }, [c, Ae]);
  const Ne = (G) => {
    G.target === at.current && s();
  }, He = async (G) => {
    if (G.preventDefault(), !Ae) {
      if (!c) {
        x(Xe.EMAIL_REQUIRED);
        return;
      }
      p(!0), x("");
      try {
        await mh(c), console.log("[ResetPassword] Reset link sent to:", c), de(mn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (H) {
        console.error("[ResetPassword] Failed to send reset link:", H);
        const Y = H instanceof Error ? H.message : Xe.RESET_LINK_FAILED;
        x(Y);
      } finally {
        p(!1);
      }
    }
  }, Ze = async () => {
    if (!(W > 0)) {
      p(!0), x("");
      try {
        await dh(c), console.log("[ResetPassword] Reset link resent to:", c), ge(Da.RESEND_COOLDOWN_SECONDS);
      } catch (G) {
        console.error("[ResetPassword] Failed to resend reset link:", G), y(!1);
        const H = G instanceof Error ? G.message : Xe.RESET_LINK_FAILED;
        x(H);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    CE,
    {
      email: c,
      loading: h,
      cooldown: F,
      onResendLink: je,
      onBack: r,
      onClose: u
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: at,
      onMouseDown: Ne,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-reset-password-modal",
          className: "identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ m.jsx(
              tt,
              {
                onClick: u,
                variant: ct.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ze.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    part: "identity-widget-reset-password-close-icon",
                    className: "identity-widget-reset-password-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsxs(
              "div",
              {
                part: "identity-widget-reset-password-header",
                className: "identity-widget-reset-password-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "h2",
                    {
                      id: "reset-password-dialog-title",
                      part: "identity-widget-reset-password-title",
                      className: "identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!",
                      children: "Reset your password"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsxs(
              "form",
              {
                part: "identity-widget-reset-password-form",
                onSubmit: He,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ m.jsx(
                        Wt,
                        {
                          label: "Email Address",
                          id: "reset-email",
                          type: "email",
                          value: c,
                          onChange: (G) => {
                            d(G.target.value), x("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
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
                            !C && A && D && !V && /* @__PURE__ */ g.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: Ul,
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
                  ye && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      title: Ae.BRAND_CONFIG_TITLE,
                      message: Ae.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-reset-password-brand-error-banner mb-4!"
                    }
                  ),
                  !Ae && he && !A && D && !V && /* @__PURE__ */ g.jsx(
                    dn,
                    {
                      type: le.INFO,
                      message: Mi.EMAIL_NOT_FOUND,
                      actionText: o ? "Let's create one to continue?" : void 0,
                      onActionClick: o ? () => {
                        ee(!1), o();
                      } : void 0,
                      onClose: () => ee(!1),
                      className: "identity-widget-reset-password-email-not-found-banner mb-4!"
                    }
                  ),
                  !Ae && he && V && /* @__PURE__ */ g.jsx(
                    dn,
                    {
                      type: le.ERROR,
                      message: W,
                      onClose: () => {
                        ee(!1), Q(!1), $("");
                      },
                      className: "identity-widget-reset-password-email-check-error-banner mb-4!"
                    }
                  ),
                  v && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      message: v,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => x(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  F > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-reset-password-cooldown-message",
                      className: "identity-widget-reset-password-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "We've already sent a reset link. Try again in ",
                        F,
                        "s"
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    tt,
                    {
                      type: Ze.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: h || !c || !O || !N || ye || F > 0,
                      className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ResetPassword] Button state:", {
                          loading: h,
                          email: c,
                          isEmailValid: O,
                          emailExists: N
                        });
                      },
                      children: h ? /* @__PURE__ */ m.jsxs(
                        "span",
                        {
                          part: "identity-widget-reset-password-submit-loading",
                          className: "identity-widget-reset-password-submit-loading flex! items-center! justify-center!",
                          children: [
                            /* @__PURE__ */ m.jsxs(
                              "svg",
                              {
                                part: "identity-widget-reset-password-submit-spinner",
                                className: "identity-widget-reset-password-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                  /* @__PURE__ */ m.jsx(
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
                                  /* @__PURE__ */ m.jsx(
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
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-divider",
                      className: "identity-widget-reset-password-divider border-t! border-gray-200! my-4!"
                    }
                  ),
                  /* @__PURE__ */ m.jsxs(
                    "div",
                    {
                      part: "identity-widget-reset-password-help-section",
                      className: "identity-widget-reset-password-help-section",
                      children: [
                        /* @__PURE__ */ m.jsx(
                          "h3",
                          {
                            part: "identity-widget-reset-password-help-title",
                            className: "identity-widget-reset-password-help-title text-base! font-bold! text-gray-800! mb-1!",
                            children: "Forgot Email?"
                          }
                        ),
                        /* @__PURE__ */ m.jsxs(
                          "p",
                          {
                            part: "identity-widget-reset-password-help-desc",
                            className: "identity-widget-reset-password-help-desc text-sm! text-gray-600!",
                            children: [
                              "If you no longer have access to the email address on file or have forgotten which one you used, please",
                              " ",
                              /* @__PURE__ */ m.jsx(
                                "a",
                                {
                                  href: "/contact-us",
                                  part: "identity-widget-reset-password-support-link",
                                  className: "identity-widget-reset-password-support-link text-[var(--button-primary-bg)]! hover:underline!",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "contact our support team"
                                }
                              ),
                              "."
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-back-wrap",
                      className: "identity-widget-reset-password-back-wrap flex! justify-center! mt-4!",
                      children: /* @__PURE__ */ m.jsx(
                        "a",
                        {
                          href: "#",
                          part: "identity-widget-reset-password-back-link",
                          className: "identity-widget-reset-password-back-link text-[var(--button-primary-bg)]! hover:underline! text-sm! font-medium! flex! items-center! gap-1!",
                          onClick: (L) => {
                            L.preventDefault(), r();
                          },
                          children: "← Back to login"
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
  const s = S.useRef(null), o = "name@email.com", [c, d] = S.useState(0), m = o.slice(0, c);
  S.useEffect(() => {
    const b = (y) => {
      y.key === "Escape" && f();
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [r]), S.useEffect(() => {
    let b;
    return c < o.length ? b = setTimeout(() => d((y) => y + 1), 120) : b = setTimeout(() => d(0), 1200), () => clearTimeout(b);
  }, [c]);
  const p = (b) => {
    b.target === h.current && f();
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-success-overlay",
      className: "identity-widget-forgot-username-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: h,
      onMouseDown: p,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "forgot-username-success-dialog-title",
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-forgot-username-success-modal",
          className: "identity-widget-forgot-username-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ m.jsx(
              tt,
              {
                onClick: f,
                variant: ct.LINK,
                part: "identity-widget-forgot-username-success-close-button",
                className: "identity-widget-forgot-username-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ze.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    part: "identity-widget-forgot-username-success-close-icon",
                    className: "identity-widget-forgot-username-success-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-forgot-username-success-icon-wrap",
                className: "identity-widget-forgot-username-success-icon-wrap flex! justify-center! mb-4!",
                children: /* @__PURE__ */ m.jsx(
                  "img",
                  {
                    part: "identity-widget-forgot-username-success-icon",
                    src: Ul,
                    alt: "Success",
                    "aria-hidden": "true",
                    className: "identity-widget-forgot-username-success-icon w-16! h-16!"
                  }
                )
              }
            ),
            /* @__PURE__ */ m.jsxs(
              "div",
              {
                part: "identity-widget-forgot-username-success-header",
                className: "identity-widget-forgot-username-success-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "h2",
                    {
                      part: "identity-widget-forgot-username-success-title",
                      id: "forgot-username-success-dialog-title",
                      className: "identity-widget-forgot-username-success-title text-2xl! font-bold! text-gray-800! mb-3!",
                      children: "Check your email"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-subtitle",
                      className: "identity-widget-forgot-username-success-subtitle text-base! text-gray-700! mb-2!",
                      children: "We've sent a verification link to"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-email",
                      className: "identity-widget-forgot-username-success-email text-base! font-semibold! text-gray-900! mb-4!",
                      children: l
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-copy",
                      className: "identity-widget-forgot-username-success-copy text-sm! text-gray-800! mb-2!",
                      children: "Follow the instructions in the email to recover your username."
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-note",
                      className: "identity-widget-forgot-username-success-note text-xs! text-gray-500!",
                      children: "Didn't receive the email? Check your spam folder or try again in a few minutes."
                    }
                  )
                ]
              }
            ),
            u > 0 && /* @__PURE__ */ m.jsx(
              "p",
              {
                part: "identity-widget-forgot-username-success-cooldown-message",
                className: "identity-widget-forgot-username-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!",
                role: "status",
                "aria-live": "polite",
                children: /* @__PURE__ */ m.jsxs("b", { children: [
                  "We've already sent a verification link. Try again in ",
                  u,
                  "s"
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              tt,
              {
                type: Ze.BUTTON,
                onClick: o,
                disabled: r || u > 0,
                ariaLabel: "Resend username verification link",
                part: "identity-widget-submit-button identity-widget-forgot-username-success-resend-button",
                className: "identity-widget-submit-button identity-widget-forgot-username-success-resend-button w-full! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! m-0! mb-4!",
                children: r ? /* @__PURE__ */ m.jsxs(
                  "span",
                  {
                    part: "identity-widget-forgot-username-success-resend-loading",
                    className: "identity-widget-forgot-username-success-resend-loading flex! items-center! justify-center!",
                    children: [
                      /* @__PURE__ */ m.jsxs(
                        "svg",
                        {
                          part: "identity-widget-forgot-username-success-resend-spinner",
                          className: "identity-widget-forgot-username-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ m.jsx(
                              "circle",
                              {
                                part: "identity-widget-forgot-username-success-resend-spinner-track",
                                className: "identity-widget-forgot-username-success-resend-spinner-track opacity-25!",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                              }
                            ),
                            /* @__PURE__ */ m.jsx(
                              "path",
                              {
                                part: "identity-widget-forgot-username-success-resend-spinner-fill",
                                className: "identity-widget-forgot-username-success-resend-spinner-fill opacity-75!",
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
            /* @__PURE__ */ m.jsx(
              tt,
              {
                type: Ze.BUTTON,
                variant: ct.OUTLINE,
                onClick: c,
                disabled: r,
                part: "identity-widget-forgot-username-success-back-button",
                className: "identity-widget-forgot-username-success-back-button w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ m.jsx(
                  "span",
                  {
                    part: "identity-widget-forgot-username-success-back-text",
                    className: "identity-widget-forgot-username-success-back-text",
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
}, OE = ({
  email: l,
  onBack: r,
  handleClose: u,
  onCreateAccount: o
}) => {
  const [c, f] = w.useState(l || ""), [h, p] = w.useState(!1), [b, y] = w.useState(!1), [v, S] = w.useState(""), [C, Y] = w.useState(!1), [N, M] = w.useState(!1), [O, V] = w.useState(!1), [X, Q] = w.useState(!1), [W, $] = w.useState(""), [oe, ee] = w.useState(!1), [F, de] = w.useState(0), ye = Ms(), Ke = w.useRef(null), pe = w.useRef(null);
  w.useEffect(() => {
    if (!(F <= 0))
      return pe.current = setTimeout(() => {
        de((L) => L - 1);
      }, 1e3), () => {
        pe.current && clearTimeout(pe.current);
      };
  }, [F]), w.useEffect(() => {
    const L = (H) => {
      H.key === "Escape" && u();
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [u]), w.useEffect(() => {
    if (ye) return;
    const L = Cl.test(c);
    if (V(L), !L || !c) {
      M(!1), Q(!1), $(""), ee(!1);
      return;
    }
    const H = setTimeout(async () => {
      Y(!0);
      try {
        const G = await Us(c);
        console.log("[ForgotUsername] Email check response:", G), G.exists ? (M(!0), ee(!1)) : (M(!1), ee(!0)), console.log("[ForgotUsername] Email exists:", G.exists);
      } catch (G) {
        console.error("[ForgotUsername] Error checking email:", G);
        const ae = G instanceof Error ? G.message : "Unable to verify email. Please try again.";
        Q(!0), $(ae), ee(!0), M(!1);
      } finally {
        Y(!1);
      }
    }, mn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(H);
  }, [c, ye]);
  const ze = (L) => {
    L.target === Ke.current && u();
  }, He = async (L) => {
    if (L.preventDefault(), !ye) {
      if (!c) {
        S(Ae.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await hh(c), console.log("[ForgotUsername] Verification link sent to:", c), de(mn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (H) {
        console.error("[ForgotUsername] Failed to send verification link:", H);
        const G = H instanceof Error ? H.message : Ae.USERNAME_RECOVERY_FAILED;
        S(G);
      } finally {
        p(!1);
      }
    }
  }, je = async () => {
    if (!(F > 0)) {
      p(!0), S("");
      try {
        await hh(c), console.log("[ForgotUsername] Verification link resent to:", c), de(mn.RESEND_COOLDOWN_SECONDS);
      } catch (L) {
        console.error("[ForgotUsername] Failed to resend verification link:", L), y(!1);
        const H = L instanceof Error ? L.message : Ae.USERNAME_RECOVERY_FAILED;
        S(H);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    _E,
    {
      email: c,
      loading: h,
      cooldown: F,
      onResendLink: je,
      onBack: r,
      onClose: u
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-overlay",
      className: "identity-widget-forgot-username-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ke,
      onMouseDown: ze,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "forgot-username-dialog-title",
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-forgot-username-modal",
          className: "identity-widget-forgot-username-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ m.jsx(
              tt,
              {
                onClick: u,
                variant: ct.LINK,
                part: "identity-widget-forgot-username-close-button",
                className: "identity-widget-forgot-username-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ze.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    part: "identity-widget-forgot-username-close-icon",
                    className: "identity-widget-forgot-username-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsxs(
              "div",
              {
                part: "identity-widget-forgot-username-header",
                className: "identity-widget-forgot-username-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "h2",
                    {
                      id: "forgot-username-dialog-title",
                      part: "identity-widget-forgot-username-title",
                      className: "identity-widget-forgot-username-title text-2xl! font-bold! text-gray-800! mb-2!",
                      children: "Forgot Username?"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-subtitle",
                      className: "identity-widget-forgot-username-subtitle text-sm! text-gray-600!",
                      children: "We're here to help you get back into your account securely."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs(
              "div",
              {
                part: "identity-widget-forgot-username-section",
                className: "identity-widget-forgot-username-section mb-4!",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "h3",
                    {
                      part: "identity-widget-forgot-username-section-title",
                      className: "identity-widget-forgot-username-section-title text-base! font-bold! text-gray-800! mb-1!",
                      children: "Forgot Username?"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-section-desc",
                      className: "identity-widget-forgot-username-section-desc text-sm! text-gray-600!",
                      children: "Enter the email address associated with your account."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ m.jsxs(
              "form",
              {
                part: "identity-widget-forgot-username-form",
                onSubmit: He,
                className: "identity-widget-forgot-username-form space-y-4!",
                "aria-label": "Forgot username form",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-email-field",
                      className: "identity-widget-forgot-username-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ m.jsx(
                        Wt,
                        {
                          label: "Email Address",
                          id: "forgot-username-email",
                          type: "email",
                          value: c,
                          onChange: (L) => {
                            f(L.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
                          className: "identity-widget-forgot-username-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                            C && /* @__PURE__ */ m.jsx(Cs, {}),
                            !C && N && O && !X && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-forgot-username-email-verified-icon",
                                className: "identity-widget-forgot-username-email-verified-icon",
                                src: Ul,
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
                  ye && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      title: Ae.BRAND_CONFIG_TITLE,
                      message: Ae.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-forgot-username-brand-error-banner mb-4!"
                    }
                  ),
                  !ye && oe && !N && O && !X && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.INFO,
                      message: Mi.EMAIL_NOT_FOUND,
                      actionText: o ? "Let's create one to continue?" : void 0,
                      onActionClick: o ? () => {
                        ee(!1), o();
                      } : void 0,
                      onClose: () => ee(!1),
                      className: "identity-widget-forgot-username-email-not-found-banner mb-4!"
                    }
                  ),
                  !ye && oe && X && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      message: W,
                      onClose: () => {
                        ee(!1), Q(!1), $("");
                      },
                      className: "identity-widget-forgot-username-email-check-error-banner mb-4!"
                    }
                  ),
                  v && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      message: v,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => S(""),
                      className: "identity-widget-forgot-username-submit-error-banner mb-4!"
                    }
                  ),
                  F > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-forgot-username-cooldown-message",
                      className: "identity-widget-forgot-username-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "We've already sent a verification link. Try again in ",
                        F,
                        "s"
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    tt,
                    {
                      type: Ze.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-forgot-username-submit-button",
                      disabled: h || !c || !O || !N || ye || F > 0,
                      className: "identity-widget-submit-button identity-widget-forgot-username-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ForgotUsername] Button state:", {
                          loading: h,
                          email: c,
                          isEmailValid: O,
                          emailExists: N
                        });
                      },
                      children: h ? /* @__PURE__ */ m.jsxs(
                        "span",
                        {
                          part: "identity-widget-forgot-username-submit-loading",
                          className: "identity-widget-forgot-username-submit-loading flex! items-center! justify-center!",
                          children: [
                            /* @__PURE__ */ m.jsxs(
                              "svg",
                              {
                                part: "identity-widget-forgot-username-submit-spinner",
                                className: "identity-widget-forgot-username-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                  /* @__PURE__ */ m.jsx(
                                    "circle",
                                    {
                                      part: "identity-widget-forgot-username-submit-spinner-track",
                                      className: "identity-widget-forgot-username-submit-spinner-track opacity-25!",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4"
                                    }
                                  ),
                                  /* @__PURE__ */ m.jsx(
                                    "path",
                                    {
                                      part: "identity-widget-forgot-username-submit-spinner-fill",
                                      className: "identity-widget-forgot-username-submit-spinner-fill opacity-75!",
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
                      ) : "Receive Verification Link"
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-divider",
                      className: "identity-widget-forgot-username-divider border-t! border-gray-200! my-4!"
                    }
                  ),
                  /* @__PURE__ */ m.jsxs(
                    "div",
                    {
                      part: "identity-widget-forgot-username-help-section",
                      className: "identity-widget-forgot-username-help-section",
                      children: [
                        /* @__PURE__ */ m.jsx(
                          "h3",
                          {
                            part: "identity-widget-forgot-username-help-title",
                            className: "identity-widget-forgot-username-help-title text-base! font-bold! text-gray-800! mb-1!",
                            children: "Forgot Email?"
                          }
                        ),
                        /* @__PURE__ */ m.jsxs(
                          "p",
                          {
                            part: "identity-widget-forgot-username-help-desc",
                            className: "identity-widget-forgot-username-help-desc text-sm! text-gray-600!",
                            children: [
                              "If you no longer have access to the email address on file or have forgotten which one you used, please",
                              " ",
                              /* @__PURE__ */ m.jsx(
                                "a",
                                {
                                  href: "/contact-us",
                                  part: "identity-widget-forgot-username-support-link",
                                  className: "identity-widget-forgot-username-support-link text-[var(--button-primary-bg)]! hover:underline!",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "contact our support team"
                                }
                              ),
                              "."
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-back-wrap",
                      className: "identity-widget-forgot-username-back-wrap flex! justify-center! mt-4!",
                      children: /* @__PURE__ */ m.jsx(
                        "a",
                        {
                          href: "#",
                          part: "identity-widget-forgot-username-back-link",
                          className: "identity-widget-forgot-username-back-link text-[var(--button-primary-bg)]! hover:underline! text-sm! font-medium! flex! items-center! gap-1!",
                          onClick: (L) => {
                            L.preventDefault(), r();
                          },
                          children: "← Back to login"
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
}, yh = ({ children: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "px-1! rounded-sm! font-medium!",
    style: { backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" },
    children: l
  }
), oc = ({ label: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!",
    style: {
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)"
    },
    children: l
  }
), DE = ({ onBack: l, handleClose: r }) => {
  const u = w.useRef(null), o = "name@email.com", [c, f] = w.useState(0), h = o.slice(0, c);
  w.useEffect(() => {
    const b = (y) => {
      y.key === "Escape" && r();
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [r]), w.useEffect(() => {
    let b;
    return c < o.length ? b = setTimeout(() => f((y) => y + 1), 120) : b = setTimeout(() => f(0), 1200), () => clearTimeout(b);
  }, [c]);
  const p = (b) => {
    b.target === u.current && r();
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-help-center-overlay",
      className: "identity-widget-help-center-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: u,
      onMouseDown: p,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "help-center-dialog-title",
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-help-center-modal",
          className: "identity-widget-help-center-modal bg-white! rounded-lg! p-8! w-full! max-w-2xl! relative! max-h-[90vh]! overflow-y-auto! border! border-solid! border-gray-200! shadow-lg!",
          role: "document",
          children: [
            /* @__PURE__ */ m.jsx("style", { children: `@keyframes helpCenterClick { 0%,100% { transform: scale(1); } 45% { transform: scale(0.97); } 65% { transform: scale(1.01); } }
            @keyframes helpCenterInputFocus { 0%,100% { box-shadow: 0 0 0 0 rgba(120,120,120,0); } 50% { box-shadow: 0 0 0 3px rgba(120,120,120,0.12); } }` }),
            /* @__PURE__ */ m.jsx(
              tt,
              {
                onClick: r,
                variant: ct.LINK,
                part: "identity-widget-help-center-close-button",
                className: "identity-widget-help-center-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ze.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ m.jsx(
                  "svg",
                  {
                    part: "identity-widget-help-center-close-icon",
                    className: "identity-widget-help-center-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ m.jsx(
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
            /* @__PURE__ */ m.jsxs("div", { className: "mb-6! text-center! border-b! border-solid! border-gray-200! pb-5!", children: [
              /* @__PURE__ */ m.jsx(
                "h2",
                {
                  id: "help-center-dialog-title",
                  part: "identity-widget-help-center-title",
                  className: "identity-widget-help-center-title text-2xl! font-bold! text-gray-800! mb-2!",
                  children: "Help Center"
                }
              ),
              /* @__PURE__ */ m.jsx(
                "p",
                {
                  part: "identity-widget-help-center-subtitle",
                  className: "identity-widget-help-center-subtitle text-sm! text-gray-600!",
                  children: "Having trouble logging in to your account? Follow these troubleshooting steps."
                }
              )
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "space-y-6! text-left!", children: [
              /* @__PURE__ */ m.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-4!", children: [
                /* @__PURE__ */ m.jsx("h3", { className: "text-base! font-bold! text-gray-800!", children: "Common reasons sign in fails" }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Whether you're a member, guest, or viewer, there are a few things that might be happening when sign in fails:" }),
                /* @__PURE__ */ m.jsxs("ul", { className: "list-disc! pl-6! text-sm! text-gray-700! space-y-1!", children: [
                  /* @__PURE__ */ m.jsx("li", { children: "You have multiple accounts" }),
                  /* @__PURE__ */ m.jsx("li", { children: "You're using the wrong email address or username" }),
                  /* @__PURE__ */ m.jsx("li", { children: "You forgot your password" }),
                  /* @__PURE__ */ m.jsx("li", { children: "Your account access may require additional verification" })
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Here are the recommended steps to troubleshoot." })
              ] }),
              /* @__PURE__ */ m.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!", children: [
                /* @__PURE__ */ m.jsx("h3", { className: "text-lg! font-bold! text-gray-800!", children: "Check your email address or username" }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Occasionally, we find that someone is attempting to sign in with an incorrect email address or username." }),
                /* @__PURE__ */ m.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  /* @__PURE__ */ m.jsx("strong", { children: "Solution:" }),
                  " Try logging in with other email addresses or usernames you might have used. If you have multiple email addresses redirected to one inbox, try each of them."
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!", children: [
                /* @__PURE__ */ m.jsx("h3", { className: "text-lg! font-bold! text-gray-800!", children: "Reset your password" }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "If you are sure you are using the correct email address or username, you might have forgotten your password. No problem." }),
                /* @__PURE__ */ m.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  /* @__PURE__ */ m.jsx("strong", { children: "Solution:" }),
                  " Click the",
                  " ",
                  /* @__PURE__ */ m.jsx(yh, { children: '"Forgot Password?"' }),
                  " link on the login page to start the password reset process."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(oc, { label: "Step 1" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-4!", children: "Continue to login" }),
                  /* @__PURE__ */ m.jsxs("div", { className: "space-y-3!", children: [
                    /* @__PURE__ */ m.jsx(Wt, { label: "Email or Username", value: "name@email.com", disabled: !0 }),
                    /* @__PURE__ */ m.jsx(Wt, { label: "Password", value: "••••••••", disabled: !0 }),
                    /* @__PURE__ */ m.jsxs("div", { className: "flex! items-center! justify-between! text-sm!", children: [
                      /* @__PURE__ */ m.jsxs("label", { className: "flex! items-center! text-gray-500!", children: [
                        /* @__PURE__ */ m.jsx("input", { type: "checkbox", disabled: !0, className: "mr-2!" }),
                        "Remember me"
                      ] }),
                      /* @__PURE__ */ m.jsx(
                        "span",
                        {
                          className: "relative! inline-flex! items-center!",
                          style: { animation: "helpCenterClick 1.3s ease-in-out infinite" },
                          children: /* @__PURE__ */ m.jsx("span", { className: "text-sm! font-medium! cursor-default!", children: "Forgot Password?" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ m.jsx(tt, { type: Ze.BUTTON, disabled: !0, className: "w-full!", children: "Sign In" })
                  ] })
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, enter your account email address. It should look something like this:" }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(oc, { label: "Step 2" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      className: "rounded-md!",
                      style: { animation: "helpCenterInputFocus 1.4s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(
                        Wt,
                        {
                          label: "Email Address",
                          value: h,
                          disabled: !0,
                          endIcon: /* @__PURE__ */ m.jsx("span", { className: "text-gray-500! animate-pulse!", children: "|" })
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  "Then click on ",
                  /* @__PURE__ */ m.jsx(yh, { children: '"Send reset link"' }),
                  "."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(oc, { label: "Step 3" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(Wt, { label: "Email Address", value: h, disabled: !0 }),
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      className: "block!",
                      style: { animation: "helpCenterClick 1.2s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(tt, { type: Ze.BUTTON, disabled: !0, className: "w-full! mt-4!", children: "Send reset link" })
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, you will receive an email with instructions to reset your password." })
              ] })
            ] }),
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-help-center-tip",
                className: "identity-widget-help-center-tip mt-6! mb-6! rounded-lg! border! border-solid! border-green-300! bg-green-50! px-5! py-4!",
                role: "note",
                "aria-label": "Password reset tip",
                children: /* @__PURE__ */ m.jsxs("p", { className: "m-0! text-sm! leading-[1.5]! text-gray-800! font-medium!", children: [
                  /* @__PURE__ */ m.jsx("strong", { children: "Tip:" }),
                  ` Double-check that the email address written in the field above the "Reset Password" button is the correct address! You will have to check that account's inbox to continue this process.`
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              tt,
              {
                type: Ze.BUTTON,
                variant: ct.OUTLINE,
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
}, jE = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", UE = ({
  onSuccess: l,
  onError: r,
  handleClose: u,
  authority: o,
  title: c = "Continue to login",
  subtitle: f = "Continue by signing in.",
  initialEmail: h = "",
  enableGoogleLogin: p = !0
}) => {
  const [b, y] = S.useState(m), [v, x] = S.useState(""), [C, k] = S.useState(!1), [A, z] = S.useState(!1), [D, X] = S.useState(!1), [V, Q] = S.useState(""), [F, I] = S.useState(!1), [he, ne] = S.useState(!1), [W, ge] = S.useState(!1), [Ae, at] = S.useState(!1), [we, Ne] = S.useState(!1), [He, Ze] = S.useState(!1), [G, H] = S.useState(!1), [Y, oe] = S.useState(!1), [xe, _e] = S.useState(""), [w, L] = S.useState(""), [K, Z] = S.useState(re.INFO), ae = _c(), ue = S.useRef(null), ce = S.useRef(null), Be = Cb({
    flow: "auth-code",
    onSuccess: (le) => {
      console.log("[EmbeddedLogin] Google auth-code response received", le), L(
        "Google sign-in completed. Connect this credential to your backend login flow."
      ), ie(le.INFO), Q("");
    },
    onError: (le) => {
      const Ve = le.error_description || le.error || "Google sign-in failed.";
      L(Ve), Z(re.ERROR), r(Ve);
    },
    onNonOAuthError: (le) => {
      const Ve = `Google sign-in failed: ${le.type}`;
      L(Ve), Z(re.ERROR), r(Ve);
    }
  });
  S.useEffect(() => {
    if (!ae) {
      if (ce.current && clearTimeout(ce.current), !b) {
        Ne(!1), H(!1), oe(!1), _e("");
        return;
      }
      if (!b.includes("@")) {
        Ne(!0), H(!1);
        return;
      }
      if (!Ni.test(b)) {
        Ne(!1), H(!1);
        return;
      }
      return P.current = setTimeout(async () => {
        H(!0);
        try {
          (await Cc(b)).exists ? (Ne(!0), H(!1)) : (Ne(!1), H(!0));
        } catch (le) {
          console.error("[EmbeddedLogin] Email check failed:", le);
          const Ve = le instanceof Error ? le.message : "Unable to verify email. You can still proceed with login.";
          oe(!0), _e(Ve), H(!0), Ne(!1);
        } finally {
          H(!1);
        }
      }, 500), () => {
        P.current && clearTimeout(P.current);
      };
    }
  }, [b, ae]);
  const mn = b && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b);
  S.useEffect(() => {
    const le = (Ve) => {
      Ve.key === "Escape" && s();
    };
    return document.addEventListener("keydown", se), () => document.removeEventListener("keydown", se);
  }, [u]);
  const ka = (se) => {
    se.target === qe.current && u();
  }, en = async (se) => {
    if (se.preventDefault(), !re) {
      if (!b || !v) {
        Q("Please enter both username/email and password"), r("Please enter both username/email and password");
        return;
      }
      k(!0), Q("");
      try {
        const Ve = await hg(b, v, F);
        l(Ve);
      } catch (Ve) {
        console.error("[EmbeddedLogin] Login failed:", Ve);
        const rn = Ve instanceof Error ? Ve.message : "Authentication failed";
        Q(rn), L(rn), Z(re.ERROR), r(rn);
      } finally {
        k(!1);
      }
    }
  }, Bn = (se) => {
    if (se.key === "CapsLock" && se.type === "keydown") {
      V((We) => !We);
      return;
    }
    se.key !== "CapsLock" && V(bc(se));
  };
  return W ? /* @__PURE__ */ g.jsx(
    CE,
    {
      email: b,
      onBack: () => de(!1),
      handleClose: u,
      onCreateAccount: () => {
        de(!1), ee(!0);
      }
    }
  ) : Ae ? /* @__PURE__ */ g.jsx(NE, { onBack: () => at(!1), handleClose: s }) : he ? /* @__PURE__ */ g.jsx(
    TE,
    {
      email: b,
      onBack: () => Ke(!1),
      handleClose: u,
      onCreateAccount: () => {
        Ke(!1), ee(!0);
      }
    }
  ) : pe ? /* @__PURE__ */ m.jsx(DE, { onBack: () => ze(!1), handleClose: u }) : oe ? /* @__PURE__ */ m.jsx(
    NE,
    {
      onSuccess: (se) => {
        ee(!1), l(se);
      },
      onError: r,
      handleClose: u,
      onSignIn: (se) => {
        ee(!1), se && y(se);
      },
      authority: o,
      initialEmail: b
    }
  ) : /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: qe,
      onMouseDown: ka,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            part: "identity-widget-login-modal",
            className: "identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
            role: "document",
            children: [
              /* @__PURE__ */ m.jsx(
                tt,
                {
                  onClick: u,
                  variant: ct.LINK,
                  part: "identity-widget-login-close-button",
                  className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                  type: Ze.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ m.jsx(
                    "svg",
                    {
                      part: "identity-widget-login-close-icon",
                      className: "identity-widget-login-close-icon w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ m.jsx(
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
              /* @__PURE__ */ m.jsxs(
                "div",
                {
                  part: "identity-widget-login-header",
                  className: "identity-widget-login-header mb-3! text-center!",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "h2",
                      {
                        part: "identity-widget-login-title",
                        id: "login-dialog-title",
                        className: "identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!",
                        children: c
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      "p",
                      {
                        part: "identity-widget-login-subtitle",
                        className: "identity-widget-login-subtitle text-sm! text-gray-600! mt-1!",
                        children: f
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ m.jsxs(
                "form",
                {
                  part: "identity-widget-login-form",
                  onSubmit: en,
                  className: "identity-widget-login-form space-y-2!",
                  "aria-label": "Login form",
                  children: [
                    p && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                      /* @__PURE__ */ m.jsx(
                        "div",
                        {
                          part: "identity-widget-google-section",
                          className: "identity-widget-google-section mt-0! mb-4! hidden! justify-center!",
                          children: /* @__PURE__ */ m.jsxs(
                            tt,
                            {
                              type: Ze.BUTTON,
                              variant: ct.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => Be(),
                              disabled: C || ae,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: jE,
                                    alt: "Google",
                                    className: "identity-widget-google-icon w-[18px]! h-[18px]!"
                                  }
                                ),
                                /* @__PURE__ */ m.jsx("span", { part: "identity-widget-google-text", className: "identity-widget-google-text", children: "Sign in with Google" })
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ m.jsxs(
                        "div",
                        {
                          part: "identity-widget-login-divider",
                          className: "identity-widget-login-divider relative! mt-2! mb-4! hidden!",
                          children: [
                            /* @__PURE__ */ m.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-line-wrap",
                                className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!",
                                children: /* @__PURE__ */ m.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-login-divider-line",
                                    className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ m.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-text-wrap",
                                className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!",
                                children: /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-login-email-field",
                        className: "identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ m.jsx(
                          Wt,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: b,
                            onChange: (se) => y(se.target.value),
                            placeholder: "Enter email or username",
                            disabled: C,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              L && /* @__PURE__ */ m.jsx(Cs, {}),
                              !L && He && Hn && !xe && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: Ul,
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
                    re && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        title: Ae.BRAND_CONFIG_TITLE,
                        message: Ae.BRAND_CONFIG_MESSAGE,
                        className: "mb-4!"
                      }
                    ),
                    !ae && G && !we && mn && !Y && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: le.INFO,
                        message: Mi.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          ae(!1), ee(!0);
                        },
                        onClose: () => ae(!1),
                        className: "mb-4!"
                      }
                    ),
                    !ae && G && Y && /* @__PURE__ */ g.jsx(
                      dn,
                      {
                        type: le.ERROR,
                        message: x,
                        onClose: () => {
                          ae(!1), _e(!1), B("");
                        },
                        className: "mb-4!"
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-login-password-field",
                        className: "identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!",
                        children: /* @__PURE__ */ m.jsxs(
                          "div",
                          {
                            part: "identity-widget-login-password-input-wrap",
                            className: "identity-widget-login-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ m.jsx(
                                Wt,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: N ? "text" : "password",
                                  value: v,
                                  onChange: (le) => {
                                    x(le.target.value), Q("");
                                  },
                                  onKeyDown: Bn,
                                  onKeyUp: Bn,
                                  placeholder: "Enter Password...",
                                  disabled: C,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: V,
                                  endIcon: /* @__PURE__ */ g.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-login-password-toggle",
                                      onClick: () => z(!A),
                                      className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": N ? "Hide password" : "Show password",
                                      children: N ? /* @__PURE__ */ m.jsx(
                                        "svg",
                                        {
                                          part: "identity-widget-login-password-hide-icon",
                                          className: "identity-widget-login-password-hide-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ m.jsx(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            }
                                          )
                                        }
                                      ) : /* @__PURE__ */ m.jsxs(
                                        "svg",
                                        {
                                          part: "identity-widget-login-password-show-icon",
                                          className: "identity-widget-login-password-show-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: [
                                            /* @__PURE__ */ m.jsx(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            ),
                                            /* @__PURE__ */ m.jsx(
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
                              O && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Mi.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ m.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-meta-row",
                        className: "identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!",
                        children: [
                          /* @__PURE__ */ m.jsxs(
                            "label",
                            {
                              part: "identity-widget-login-remember-label",
                              className: "identity-widget-login-remember-label flex! items-center! m-0!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "input",
                                  {
                                    type: "checkbox",
                                    part: "identity-widget-login-remember-checkbox",
                                    checked: W,
                                    onChange: (se) => $(se.target.checked),
                                    className: "identity-widget-login-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                    "aria-label": "Remember me"
                                  }
                                ),
                                /* @__PURE__ */ m.jsx(
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
                          /* @__PURE__ */ m.jsxs(
                            "div",
                            {
                              part: "identity-widget-login-forgot-links",
                              className: "identity-widget-login-forgot-links flex! items-center! gap-1!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "a",
                                  {
                                    href: "#",
                                    part: "identity-widget-login-forgot-password-link",
                                    className: "identity-widget-login-forgot-password-link no-underline! --button-primary-text!",
                                    style: {
                                      fontWeight: "500"
                                    },
                                    onClick: (se) => {
                                      se.preventDefault(), de(!0);
                                    },
                                    children: "Forgot Password"
                                  }
                                ),
                                /* @__PURE__ */ m.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-login-forgot-separator",
                                    className: "identity-widget-login-forgot-separator text-gray-400!",
                                    children: "or"
                                  }
                                ),
                                /* @__PURE__ */ m.jsx(
                                  "a",
                                  {
                                    href: "#",
                                    part: "identity-widget-login-forgot-username-link",
                                    className: "identity-widget-login-forgot-username-link no-underline! --button-primary-text!",
                                    style: {
                                      fontWeight: "500"
                                    },
                                    onClick: (se) => {
                                      se.preventDefault(), Ke(!0);
                                    },
                                    children: "Username?"
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      tt,
                      {
                        type: Ze.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: C || !b || ae,
                        className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!",
                        children: C ? /* @__PURE__ */ g.jsxs(
                          "span",
                          {
                            part: "identity-widget-login-submit-loading",
                            className: "identity-widget-login-submit-loading flex! items-center! justify-center!",
                            children: [
                              /* @__PURE__ */ m.jsxs(
                                "svg",
                                {
                                  part: "identity-widget-login-submit-spinner",
                                  className: "identity-widget-login-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    /* @__PURE__ */ m.jsx(
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
                                    /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-bottom-divider",
                        className: "identity-widget-login-bottom-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ m.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-line-wrap",
                              className: "identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ m.jsx(
                                "div",
                                {
                                  part: "identity-widget-login-bottom-divider-line",
                                  className: "identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-text-wrap",
                              className: "identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ m.jsx(
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
                    /* @__PURE__ */ m.jsx(
                      tt,
                      {
                        type: Ze.BUTTON,
                        variant: ct.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => ne(!0),
                        disabled: C,
                        className: "identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!",
                        children: /* @__PURE__ */ m.jsx(
                          "span",
                          {
                            part: "identity-widget-login-create-account-text",
                            className: "identity-widget-login-create-account-text",
                            children: "Create an Account"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-login-help-center-wrap",
                        className: "identity-widget-login-help-center-wrap text-center! mt-4!",
                        children: /* @__PURE__ */ m.jsxs(
                          "button",
                          {
                            type: "button",
                            part: "identity-widget-login-help-center-button",
                            className: "identity-widget-login-help-center-button group bg-transparent! border-none! p-0! text-sm! font-normal! cursor-pointer!",
                            onClick: () => ze(!0),
                            children: [
                              /* @__PURE__ */ m.jsx("span", { className: "font-bold!", children: "Can't log in? " }),
                              /* @__PURE__ */ m.jsx("span", { className: "text-[var(--button-primary-bg)]! font-bold! transition-all! duration-150! group-hover:underline!", children: "Visit our help center" })
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
        w && /* @__PURE__ */ g.jsx(oc, { message: w, type: K, onClose: () => L("") })
      ]
    }
  );
}, DE = (l) => {
  const { authority: r, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = l, [d, m] = S.useState(!1), [p, b] = S.useState(l.logoutCounter ?? 0);
  (l.logoutCounter ?? 0) !== p && (b(l.logoutCounter ?? 0), m(!1)), S.useEffect(() => (r ? (fE(r), console.log(`${Ke.AUTH} Authority override set to: ${r}`)) : (fh(), console.log(`${Ke.AUTH} Using automatic authority detection`)), () => {
    fh();
  }), [r]), S.useEffect(() => {
    let C;
    return (async () => {
      const A = await SE();
      typeof A == "function" && (C = A);
    })(), () => {
      C && C();
    };
  }, [d]), S.useEffect(() => {
    (async () => {
      try {
        const k = !EE();
        if (c && c(k), await wE()) {
          m(!0);
          const D = l.redirectUrl || uu();
          if (l.autoRedirection)
            window.location.href = D;
          else if (o && l.redirectUrl) {
            const X = l.redirectUrl || uu(), V = localStorage.getItem(be.ACCESS_TOKEN);
            if (V) {
              const Q = pu(V);
              Q && o(X, Q);
            }
          }
          return;
        }
        if (xE()) {
          if (await Nc()) {
            const X = localStorage.getItem(be.ACCESS_TOKEN);
            if (!X)
              return;
            const V = pu(X);
            if (!V)
              return;
            console.log(`${Ke.AUTH} Auto-login successful`), m(!0), c && c(!0);
            const Q = l.redirectUrl || uu();
            o && (console.log(
              `${Ke.AUTH} Triggering onRedirect callback with user session:`,
              V
            ), o(Q, V)), l.autoRedirection && (window.location.href = Q);
          }
        } else
          localStorage.removeItem(be.REFRESH_TOKEN), localStorage.removeItem(be.REFRESH_TOKEN_TIME);
      } catch (k) {
        console.error(`${Ke.AUTH} Auto-login failed:`, k), localStorage.removeItem(be.REFRESH_TOKEN), localStorage.removeItem(be.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), S.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const y = () => {
    l.handleClose && l.handleClose(), m(!0);
    const C = l.redirectUrl || uu();
    if (o) {
      const k = localStorage.getItem(be.ACCESS_TOKEN);
      if (k) {
        const A = pu(k);
        A && o(C, A);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = C;
    }, 100);
  }, v = (C) => {
    console.log(`${Ke.AUTH} Embedded login error:`, C);
  }, x = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ m.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ m.jsx(B1, { children: /* @__PURE__ */ m.jsx(
    zh,
    {
      path: "*",
      element: /* @__PURE__ */ g.jsx(S.Fragment, { children: l.showLogin && !d && /* @__PURE__ */ g.jsx(
        OE,
        {
          onSuccess: y,
          onError: v,
          handleClose: x,
          authority: r,
          title: l.loginTitle,
          subtitle: l.loginSubtitle,
          enableGoogleLogin: !!l.googleClientId
        }
      ) })
    }
  ) }) });
};
class LE {
  cdnBaseUrl;
  currentBrand = null;
  styleElement = null;
  shadowRoot = null;
  constructor(r = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", u) {
    this.cdnBaseUrl = r.replace(/\/$/, ""), this.shadowRoot = u || null;
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
      const r = await this.getBrands(), u = window.location.hostname, o = r.find(
        (c) => u.includes(c.domain) || c.domain.includes(u)
      );
      return o ? (localStorage.setItem("subsidiary", o.token), o.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${u}`), null);
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
      const c = `${this.cdnBaseUrl}/${o.folder}/theme.json`, f = await fetch(c);
      if (!f.ok)
        throw new Error(`Failed to fetch theme: ${f.statusText}`);
      const h = await f.json(), p = document.documentElement;
      h.styles.forEach((b) => {
        let y = b.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), p.style.setProperty(`--${b.name}`, y);
      }), this.currentBrand = o, console.log(`[ThemeWidget] Theme loaded for brand: ${o.name}`);
    } catch (u) {
      throw console.error("[ThemeWidget] Error loading theme:", u), u;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const u = r.styles.map((c) => {
      const f = this.formatStyleValue(c.value);
      return `  --${c.name}: ${f};`;
    }).join(`
`), o = `@theme {
${u}
}

:host {
${u}
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
async function ph(l) {
  const r = new LE(l.cdnBaseUrl, l.shadowRoot), u = l.brandFolder || l.brandToken;
  if (u)
    await r.loadTheme(u);
  else if (l.autoDetect) {
    const o = await r.detectBrandFromDomain();
    o && await r.loadTheme(o);
  }
  return r;
}
const bh = "832956972051-o6rtl5uehltu7di3cmrvao44mdh54911.apps.googleusercontent.com", vh = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class l extends HTMLElement {
    root = null;
    isLogoutInProgress = !1;
    logoutCounter = 0;
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
      const u = this.attachShadow({ mode: "open" });
      if (vh) {
        const f = document.createElement("style");
        f.textContent = vh, u.appendChild(f);
      }
      this.applyCustomPrimaryColor(u);
      const o = this.getAttribute("subsidiary");
      o && o.trim() !== "" ? this.loadTheme(o, u) : this.loadThemeFromDomain(u);
      const c = document.createElement("div");
      u.appendChild(c), this.root = Rb.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
    }
    applyCustomPrimaryColor(u) {
      const o = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (o && o.trim() !== "") {
        const c = document.createElement("style");
        let f = o.trim();
        /^[0-9A-Fa-f]{6}$/.test(f) && (f = `#${f}`), c.textContent = `
          :host {
            --color-primary: ${f};
            --color-primary-light: ${f};
            --button-primary-bg: ${f};
            --button-primary-bg-hover: ${f};
            --color-border-focus: ${f};
          }
        `, u.appendChild(c), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(u, o) {
      try {
        await ph({
          brandFolder: u,
          shadowRoot: o
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(u) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await ph({
          shadowRoot: u,
          autoDetect: !0
        });
      } catch (o) {
        console.error("[Widget] Failed to auto-detect theme:", o), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(u, o, c) {
      if (o !== c) {
        if (u === "custom-primary-color" || u === "customPrimaryColor") {
          const f = this.shadowRoot;
          f && this.applyCustomPrimaryColor(f);
        }
        this.render();
      }
    }
    disconnectedCallback() {
      this.removeEventListener("logout", this.handleExternalLogoutEvent), this.root && (this.root.unmount(), this.root = null);
    }
    handleExternalLogoutEvent = async (u) => {
      const o = u;
      u.target === this && (o.detail?.initiatedByWidget || await this.executeLogout("event"));
    };
    async executeLogout(u) {
      if (!this.isLogoutInProgress) {
        this.isLogoutInProgress = !0;
        try {
          const o = Nt(Ge.REFRESH_TOKEN, !0) || localStorage.getItem(be.REFRESH_TOKEN);
          o ? (await vE(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (o) {
          console.error("[Widget] Logout API call failed:", o);
        } finally {
          const o = localStorage.getItem("brand_data");
          RE(), sessionStorage.clear(), o && localStorage.setItem("brand_data", o), this.logoutCounter++, this.render(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
          const c = new CustomEvent("logout", {
            detail: { initiatedByWidget: !0, trigger: s },
            bubbles: !0,
            composed: !0
          });
          this.dispatchEvent(c), this.isLogoutInProgress = !1;
        }
      }
    }
    handleRedirect = (u, o) => {
      this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(u, o));
      const c = new CustomEvent("redirect", {
        detail: {
          url: u,
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
      const u = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(u), this.removeAttribute("show-login");
    };
    handleTokenValidity = (u) => {
      this.onTokenValidityCheck && this.onTokenValidityCheck(u);
      const o = new CustomEvent("is-token-valid", {
        detail: u,
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o);
    };
    getProps() {
      const o = this.getAttribute("authority") || Lb(), f = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: o,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirect-url") || this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("login-title") || this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("login-subtitle") || this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: f,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || bh,
        onRedirect: this.handleRedirect,
        onTokenValidityCheck: this.handleTokenValidity,
        handleClose: this.handleClose,
        logoutCounter: this.logoutCounter
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
      const u = this.getProps();
      this.root.render(
        /* @__PURE__ */ g.jsx(Tb, { clientId: s.googleClientId || yh, children: /* @__PURE__ */ g.jsx(ub, { children: /* @__PURE__ */ g.jsx(S.StrictMode, { children: /* @__PURE__ */ g.jsx(DE, { ...s }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
