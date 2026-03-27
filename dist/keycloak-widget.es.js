
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-amber-600:oklch(66.6% .179 58.318);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-4{left:calc(var(--spacing)*4)}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-4{margin-block:calc(var(--spacing)*4)}.my-4\\!{margin-block:calc(var(--spacing)*4)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-0\\.5\\!{margin-top:calc(var(--spacing)*.5)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20{width:calc(var(--spacing)*20)}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl{max-width:var(--container-2xl)}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-default{cursor:default}.cursor-default\\!{cursor:default!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc{list-style-type:disc}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.flex-wrap{flex-wrap:wrap}.flex-wrap\\!{flex-wrap:wrap!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-start{align-items:flex-start}.items-start\\!{align-items:flex-start!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5\\!{gap:calc(var(--spacing)*.5)!important}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\!{gap:calc(var(--spacing)*1)!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.border-l-green-500{border-left-color:var(--color-green-500)}.border-l-green-500\\!{border-left-color:var(--color-green-500)!important}.border-l-red-500{border-left-color:var(--color-red-500)}.border-l-red-500\\!{border-left-color:var(--color-red-500)!important}.border-l-yellow-500{border-left-color:var(--color-yellow-500)}.border-l-yellow-500\\!{border-left-color:var(--color-yellow-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-6{padding:calc(var(--spacing)*6)}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5{padding-inline:calc(var(--spacing)*5)}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4{padding-block:calc(var(--spacing)*4)}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--banner-error-text\\)\\]\\!{color:var(--banner-error-text)!important}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-amber-600{color:var(--color-amber-600)}.text-amber-600\\!{color:var(--color-amber-600)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400{color:var(--color-blue-400)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-green-900\\!{color:var(--color-green-900)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-red-900\\!{color:var(--color-red-900)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-900{color:var(--color-yellow-900)}.text-yellow-900\\!{color:var(--color-yellow-900)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:underline\\!:hover{text-decoration-line:underline!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-30\\!:disabled{opacity:.3!important}.disabled\\:opacity-50:disabled{opacity:.5}@media not all and (min-width:500px){.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function Hp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Fu = { exports: {} }, Ci = {};
var jh;
function Bp() {
  if (jh) return Ci;
  jh = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(u, c, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      f = {};
      for (var p in c)
        p !== "key" && (f[p] = c[p]);
    } else f = c;
    return c = f.ref, {
      $$typeof: l,
      type: u,
      key: h,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return Ci.Fragment = r, Ci.jsx = o, Ci.jsxs = o, Ci;
}
var Dh;
function kp() {
  return Dh || (Dh = 1, Fu.exports = Bp()), Fu.exports;
}
var m = kp(), Ju = { exports: {} }, ue = {}, Uh;
function qp() {
  if (Uh) return ue;
  Uh = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function T(x) {
    return x === null || typeof x != "object" ? null : (x = q && x[q] || x["@@iterator"], typeof x == "function" ? x : null);
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
  }, O = Object.assign, K = {};
  function V(x, B, X) {
    this.props = x, this.context = B, this.refs = K, this.updater = X || L;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(x, B) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, B, "setState");
  }, V.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = V.prototype;
  function P(x, B, X) {
    this.props = x, this.context = B, this.refs = K, this.updater = X || L;
  }
  var F = P.prototype = new Q();
  F.constructor = P, O(F, V.prototype), F.isPureReactComponent = !0;
  var re = Array.isArray;
  function ne() {
  }
  var J = { H: null, A: null, T: null, S: null }, se = Object.prototype.hasOwnProperty;
  function pe(x, B, X) {
    var Z = X.ref;
    return {
      $$typeof: r,
      type: x,
      key: B,
      ref: Z !== void 0 ? Z : null,
      props: X
    };
  }
  function Je(x, B) {
    return pe(x.type, B, x.props);
  }
  function ve(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function Me(x) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(X) {
      return B[X];
    });
  }
  var Ge = /\/+/g;
  function Qe(x, B) {
    return typeof x == "object" && x !== null && x.key != null ? Me("" + x.key) : B.toString(36);
  }
  function M(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(ne, ne) : (x.status = "pending", x.then(
          function(B) {
            x.status === "pending" && (x.status = "fulfilled", x.value = B);
          },
          function(B) {
            x.status === "pending" && (x.status = "rejected", x.reason = B);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function z(x, B, X, Z, fe) {
    var ie = typeof x;
    (ie === "undefined" || ie === "boolean") && (x = null);
    var be = !1;
    if (x === null) be = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case r:
            case o:
              be = !0;
              break;
            case S:
              return be = x._init, z(
                be(x._payload),
                B,
                X,
                Z,
                fe
              );
          }
      }
    if (be)
      return fe = fe(x), be = Z === "" ? "." + Qe(x, 0) : Z, re(fe) ? (X = "", be != null && (X = be.replace(Ge, "$&/") + "/"), z(fe, B, X, "", function(yn) {
        return yn;
      })) : fe != null && (ve(fe) && (fe = Je(
        fe,
        X + (fe.key == null || x && x.key === fe.key ? "" : ("" + fe.key).replace(
          Ge,
          "$&/"
        ) + "/") + be
      )), B.push(fe)), 1;
    be = 0;
    var _e = Z === "" ? "." : Z + ":";
    if (re(x))
      for (var $ = 0; $ < x.length; $++)
        Z = x[$], ie = _e + Qe(Z, $), be += z(
          Z,
          B,
          X,
          ie,
          fe
        );
    else if ($ = T(x), typeof $ == "function")
      for (x = $.call(x), $ = 0; !(Z = x.next()).done; )
        Z = Z.value, ie = _e + Qe(Z, $++), be += z(
          Z,
          B,
          X,
          ie,
          fe
        );
    else if (ie === "object") {
      if (typeof x.then == "function")
        return z(
          M(x),
          B,
          X,
          Z,
          fe
        );
      throw B = String(x), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function Y(x, B, X) {
    if (x == null) return x;
    var Z = [], fe = 0;
    return z(x, Z, "", "", function(ie) {
      return B.call(X, ie, fe++);
    }), Z;
  }
  function ce(x) {
    if (x._status === -1) {
      var B = x._result;
      B = B(), B.then(
        function(X) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = X);
        },
        function(X) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = X);
        }
      ), x._status === -1 && (x._status = 0, x._result = B);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var Ne = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof l == "object" && typeof l.emit == "function") {
      l.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, Re = {
    map: Y,
    forEach: function(x, B, X) {
      Y(
        x,
        function() {
          B.apply(this, arguments);
        },
        X
      );
    },
    count: function(x) {
      var B = 0;
      return Y(x, function() {
        B++;
      }), B;
    },
    toArray: function(x) {
      return Y(x, function(B) {
        return B;
      }) || [];
    },
    only: function(x) {
      if (!ve(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return ue.Activity = C, ue.Children = Re, ue.Component = V, ue.Fragment = u, ue.Profiler = f, ue.PureComponent = P, ue.StrictMode = c, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return J.H.useMemoCache(x);
    }
  }, ue.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(x, B, X) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var Z = O({}, x.props), fe = x.key;
    if (B != null)
      for (ie in B.key !== void 0 && (fe = "" + B.key), B)
        !se.call(B, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && B.ref === void 0 || (Z[ie] = B[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) Z.children = X;
    else if (1 < ie) {
      for (var be = Array(ie), _e = 0; _e < ie; _e++)
        be[_e] = arguments[_e + 2];
      Z.children = be;
    }
    return pe(x.type, fe, Z);
  }, ue.createContext = function(x) {
    return x = {
      $$typeof: p,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: h,
      _context: x
    }, x;
  }, ue.createElement = function(x, B, X) {
    var Z, fe = {}, ie = null;
    if (B != null)
      for (Z in B.key !== void 0 && (ie = "" + B.key), B)
        se.call(B, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (fe[Z] = B[Z]);
    var be = arguments.length - 2;
    if (be === 1) fe.children = X;
    else if (1 < be) {
      for (var _e = Array(be), $ = 0; $ < be; $++)
        _e[$] = arguments[$ + 2];
      fe.children = _e;
    }
    if (x && x.defaultProps)
      for (Z in be = x.defaultProps, be)
        fe[Z] === void 0 && (fe[Z] = be[Z]);
    return pe(x, ie, fe);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(x) {
    return { $$typeof: b, render: x };
  }, ue.isValidElement = ve, ue.lazy = function(x) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: x },
      _init: ce
    };
  }, ue.memo = function(x, B) {
    return {
      $$typeof: v,
      type: x,
      compare: B === void 0 ? null : B
    };
  }, ue.startTransition = function(x) {
    var B = J.T, X = {};
    J.T = X;
    try {
      var Z = x(), fe = J.S;
      fe !== null && fe(X, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ne, Ne);
    } catch (ie) {
      Ne(ie);
    } finally {
      B !== null && X.types !== null && (B.types = X.types), J.T = B;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, ue.use = function(x) {
    return J.H.use(x);
  }, ue.useActionState = function(x, B, X) {
    return J.H.useActionState(x, B, X);
  }, ue.useCallback = function(x, B) {
    return J.H.useCallback(x, B);
  }, ue.useContext = function(x) {
    return J.H.useContext(x);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(x, B) {
    return J.H.useDeferredValue(x, B);
  }, ue.useEffect = function(x, B) {
    return J.H.useEffect(x, B);
  }, ue.useEffectEvent = function(x) {
    return J.H.useEffectEvent(x);
  }, ue.useId = function() {
    return J.H.useId();
  }, ue.useImperativeHandle = function(x, B, X) {
    return J.H.useImperativeHandle(x, B, X);
  }, ue.useInsertionEffect = function(x, B) {
    return J.H.useInsertionEffect(x, B);
  }, ue.useLayoutEffect = function(x, B) {
    return J.H.useLayoutEffect(x, B);
  }, ue.useMemo = function(x, B) {
    return J.H.useMemo(x, B);
  }, ue.useOptimistic = function(x, B) {
    return J.H.useOptimistic(x, B);
  }, ue.useReducer = function(x, B, X) {
    return J.H.useReducer(x, B, X);
  }, ue.useRef = function(x) {
    return J.H.useRef(x);
  }, ue.useState = function(x) {
    return J.H.useState(x);
  }, ue.useSyncExternalStore = function(x, B, X) {
    return J.H.useSyncExternalStore(
      x,
      B,
      X
    );
  }, ue.useTransition = function() {
    return J.H.useTransition();
  }, ue.version = "19.2.3", ue;
}
var Mh;
function vc() {
  return Mh || (Mh = 1, Ju.exports = qp()), Ju.exports;
}
var E = vc();
const Gp = /* @__PURE__ */ Hp(E);
var Lh = "popstate";
function Yp(l = {}) {
  function r(u, c) {
    let { pathname: f, search: h, hash: p } = u.location;
    return cc(
      "",
      { pathname: f, search: h, hash: p },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function o(u, c) {
    return typeof c == "string" ? c : Ui(c);
  }
  return Vp(
    r,
    o,
    null,
    l
  );
}
function Ie(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function rn(l, r) {
  if (!l) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Kp() {
  return Math.random().toString(36).substring(2, 10);
}
function zh(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r
  };
}
function cc(l, r, o = null, u) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Al(r) : r,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || u || Kp()
  };
}
function Ui({
  pathname: l = "/",
  search: r = "",
  hash: o = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o), l;
}
function Al(l) {
  let r = {};
  if (l) {
    let o = l.indexOf("#");
    o >= 0 && (r.hash = l.substring(o), l = l.substring(0, o));
    let u = l.indexOf("?");
    u >= 0 && (r.search = l.substring(u), l = l.substring(0, u)), l && (r.pathname = l);
  }
  return r;
}
function Vp(l, r, o, u = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = u, h = c.history, p = "POP", b = null, y = v();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function v() {
    return (h.state || { idx: null }).idx;
  }
  function S() {
    p = "POP";
    let O = v(), K = O == null ? null : O - y;
    y = O, b && b({ action: p, location: L.location, delta: K });
  }
  function C(O, K) {
    p = "PUSH";
    let V = cc(L.location, O, K);
    y = v() + 1;
    let Q = zh(V, y), P = L.createHref(V);
    try {
      h.pushState(Q, "", P);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError")
        throw F;
      c.location.assign(P);
    }
    f && b && b({ action: p, location: L.location, delta: 1 });
  }
  function q(O, K) {
    p = "REPLACE";
    let V = cc(L.location, O, K);
    y = v();
    let Q = zh(V, y), P = L.createHref(V);
    h.replaceState(Q, "", P), f && b && b({ action: p, location: L.location, delta: 0 });
  }
  function T(O) {
    return Xp(O);
  }
  let L = {
    get action() {
      return p;
    },
    get location() {
      return l(c, h);
    },
    listen(O) {
      if (b)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(Lh, S), b = O, () => {
        c.removeEventListener(Lh, S), b = null;
      };
    },
    createHref(O) {
      return r(c, O);
    },
    createURL: T,
    encodeLocation(O) {
      let K = T(O);
      return {
        pathname: K.pathname,
        search: K.search,
        hash: K.hash
      };
    },
    push: C,
    replace: q,
    go(O) {
      return h.go(O);
    }
  };
  return L;
}
function Xp(l, r = !1) {
  let o = "http://localhost";
  typeof window < "u" && (o = window.location.origin !== "null" ? window.location.origin : window.location.href), Ie(o, "No window.location.(origin|href) available to create URL");
  let u = typeof l == "string" ? l : Ui(l);
  return u = u.replace(/ $/, "%20"), !r && u.startsWith("//") && (u = o + u), new URL(u, o);
}
function w0(l, r, o = "/") {
  return Qp(l, r, o, !1);
}
function Qp(l, r, o, u) {
  let c = typeof r == "string" ? Al(r) : r, f = Hn(c.pathname || "/", o);
  if (f == null)
    return null;
  let h = S0(l);
  Zp(h);
  let p = null;
  for (let b = 0; p == null && b < h.length; ++b) {
    let y = l1(f);
    p = n1(
      h[b],
      y,
      u
    );
  }
  return p;
}
function S0(l, r = [], o = [], u = "", c = !1) {
  let f = (h, p, b = c, y) => {
    let v = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(u) && b)
        return;
      Ie(
        v.relativePath.startsWith(u),
        `Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), v.relativePath = v.relativePath.slice(u.length);
    }
    let S = Ln([u, v.relativePath]), C = o.concat(v);
    h.children && h.children.length > 0 && (Ie(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
    ), S0(
      h.children,
      r,
      C,
      S,
      b
    )), !(h.path == null && !h.index) && r.push({
      path: S,
      score: e1(S, h.index),
      routesMeta: C
    });
  };
  return l.forEach((h, p) => {
    if (h.path === "" || !h.path?.includes("?"))
      f(h, p);
    else
      for (let b of x0(h.path))
        f(h, p, !0, b);
  }), r;
}
function x0(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [o, ...u] = r, c = o.endsWith("?"), f = o.replace(/\?$/, "");
  if (u.length === 0)
    return c ? [f, ""] : [f];
  let h = x0(u.join("/")), p = [];
  return p.push(
    ...h.map(
      (b) => b === "" ? f : [f, b].join("/")
    )
  ), c && p.push(...h), p.map(
    (b) => l.startsWith("/") && b === "" ? "/" : b
  );
}
function Zp(l) {
  l.sort(
    (r, o) => r.score !== o.score ? o.score - r.score : t1(
      r.routesMeta.map((u) => u.childrenIndex),
      o.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var Fp = /^:[\w-]+$/, Jp = 3, Ip = 2, $p = 1, Wp = 10, Pp = -2, Hh = (l) => l === "*";
function e1(l, r) {
  let o = l.split("/"), u = o.length;
  return o.some(Hh) && (u += Pp), r && (u += Ip), o.filter((c) => !Hh(c)).reduce(
    (c, f) => c + (Fp.test(f) ? Jp : f === "" ? $p : Wp),
    u
  );
}
function t1(l, r) {
  return l.length === r.length && l.slice(0, -1).every((u, c) => u === r[c]) ? (
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
function n1(l, r, o = !1) {
  let { routesMeta: u } = l, c = {}, f = "/", h = [];
  for (let p = 0; p < u.length; ++p) {
    let b = u[p], y = p === u.length - 1, v = f === "/" ? r : r.slice(f.length) || "/", S = Ss(
      { path: b.relativePath, caseSensitive: b.caseSensitive, end: y },
      v
    ), C = b.route;
    if (!S && y && o && !u[u.length - 1].route.index && (S = Ss(
      {
        path: b.relativePath,
        caseSensitive: b.caseSensitive,
        end: !1
      },
      v
    )), !S)
      return null;
    Object.assign(c, S.params), h.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: Ln([f, S.pathname]),
      pathnameBase: o1(
        Ln([f, S.pathnameBase])
      ),
      route: C
    }), S.pathnameBase !== "/" && (f = Ln([f, S.pathnameBase]));
  }
  return h;
}
function Ss(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [o, u] = a1(
    l.path,
    l.caseSensitive,
    l.end
  ), c = r.match(o);
  if (!c) return null;
  let f = c[0], h = f.replace(/(.)\/+$/, "$1"), p = c.slice(1);
  return {
    params: u.reduce(
      (y, { paramName: v, isOptional: S }, C) => {
        if (v === "*") {
          let T = p[C] || "";
          h = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
        }
        const q = p[C];
        return S && !q ? y[v] = void 0 : y[v] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: h,
    pattern: l
  };
}
function a1(l, r = !1, o = !0) {
  rn(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let u = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, p, b) => (u.push({ paramName: p, isOptional: b != null }), b ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (u.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), u];
}
function l1(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return rn(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function Hn(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length, u = l.charAt(o);
  return u && u !== "/" ? null : l.slice(o) || "/";
}
var R0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, i1 = (l) => R0.test(l);
function r1(l, r = "/") {
  let {
    pathname: o,
    search: u = "",
    hash: c = ""
  } = typeof l == "string" ? Al(l) : l, f;
  if (o)
    if (i1(o))
      f = o;
    else {
      if (o.includes("//")) {
        let h = o;
        o = o.replace(/\/\/+/g, "/"), rn(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${o}`
        );
      }
      o.startsWith("/") ? f = Bh(o.substring(1), "/") : f = Bh(o, r);
    }
  else
    f = r;
  return {
    pathname: f,
    search: u1(u),
    hash: c1(c)
  };
}
function Bh(l, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c);
  }), o.length > 1 ? o.join("/") : "/";
}
function Iu(l, r, o, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function s1(l) {
  return l.filter(
    (r, o) => o === 0 || r.route.path && r.route.path.length > 0
  );
}
function T0(l) {
  let r = s1(l);
  return r.map(
    (o, u) => u === r.length - 1 ? o.pathname : o.pathnameBase
  );
}
function N0(l, r, o, u = !1) {
  let c;
  typeof l == "string" ? c = Al(l) : (c = { ...l }, Ie(
    !c.pathname || !c.pathname.includes("?"),
    Iu("?", "pathname", "search", c)
  ), Ie(
    !c.pathname || !c.pathname.includes("#"),
    Iu("#", "pathname", "hash", c)
  ), Ie(
    !c.search || !c.search.includes("#"),
    Iu("#", "search", "hash", c)
  ));
  let f = l === "" || c.pathname === "", h = f ? "/" : c.pathname, p;
  if (h == null)
    p = o;
  else {
    let S = r.length - 1;
    if (!u && h.startsWith("..")) {
      let C = h.split("/");
      for (; C[0] === ".."; )
        C.shift(), S -= 1;
      c.pathname = C.join("/");
    }
    p = S >= 0 ? r[S] : "/";
  }
  let b = r1(c, p), y = h && h !== "/" && h.endsWith("/"), v = (f || h === ".") && o.endsWith("/");
  return !b.pathname.endsWith("/") && (y || v) && (b.pathname += "/"), b;
}
var Ln = (l) => l.join("/").replace(/\/\/+/g, "/"), o1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), u1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, c1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, d1 = class {
  constructor(l, r, o, u = !1) {
    this.status = l, this.statusText = r || "", this.internal = u, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
};
function f1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function m1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var C0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function A0(l, r) {
  let o = l;
  if (typeof o != "string" || !R0.test(o))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: o
    };
  let u = o, c = !1;
  if (C0)
    try {
      let f = new URL(window.location.href), h = o.startsWith("//") ? new URL(f.protocol + o) : new URL(o), p = Hn(h.pathname, r);
      h.origin === f.origin && p != null ? o = p + h.search + h.hash : c = !0;
    } catch {
      rn(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: u,
    isExternal: c,
    to: o
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var _0 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  _0
);
var h1 = [
  "GET",
  ..._0
];
new Set(h1);
var _l = E.createContext(null);
_l.displayName = "DataRouter";
var Ts = E.createContext(null);
Ts.displayName = "DataRouterState";
var g1 = E.createContext(!1), O0 = E.createContext({
  isTransitioning: !1
});
O0.displayName = "ViewTransition";
var y1 = E.createContext(
  /* @__PURE__ */ new Map()
);
y1.displayName = "Fetchers";
var p1 = E.createContext(null);
p1.displayName = "Await";
var tn = E.createContext(
  null
);
tn.displayName = "Navigation";
var Hi = E.createContext(
  null
);
Hi.displayName = "Location";
var Bn = E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Bn.displayName = "Route";
var Ec = E.createContext(null);
Ec.displayName = "RouteError";
var j0 = "REACT_ROUTER_ERROR", b1 = "REDIRECT", v1 = "ROUTE_ERROR_RESPONSE";
function E1(l) {
  if (l.startsWith(`${j0}:${b1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function w1(l) {
  if (l.startsWith(
    `${j0}:${v1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new d1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function S1(l, { relative: r } = {}) {
  Ie(
    Bi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: u } = E.useContext(tn), { hash: c, pathname: f, search: h } = ki(l, { relative: r }), p = f;
  return o !== "/" && (p = f === "/" ? o : Ln([o, f])), u.createHref({ pathname: p, search: h, hash: c });
}
function Bi() {
  return E.useContext(Hi) != null;
}
function ka() {
  return Ie(
    Bi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), E.useContext(Hi).location;
}
var D0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function U0(l) {
  E.useContext(tn).static || E.useLayoutEffect(l);
}
function x1() {
  let { isDataRoute: l } = E.useContext(Bn);
  return l ? z1() : R1();
}
function R1() {
  Ie(
    Bi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = E.useContext(_l), { basename: r, navigator: o } = E.useContext(tn), { matches: u } = E.useContext(Bn), { pathname: c } = ka(), f = JSON.stringify(T0(u)), h = E.useRef(!1);
  return U0(() => {
    h.current = !0;
  }), E.useCallback(
    (b, y = {}) => {
      if (rn(h.current, D0), !h.current) return;
      if (typeof b == "number") {
        o.go(b);
        return;
      }
      let v = N0(
        b,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      l == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : Ln([r, v.pathname])), (y.replace ? o.replace : o.push)(
        v,
        y.state,
        y
      );
    },
    [
      r,
      o,
      f,
      c,
      l
    ]
  );
}
E.createContext(null);
function ki(l, { relative: r } = {}) {
  let { matches: o } = E.useContext(Bn), { pathname: u } = ka(), c = JSON.stringify(T0(o));
  return E.useMemo(
    () => N0(
      l,
      JSON.parse(c),
      u,
      r === "path"
    ),
    [l, c, u, r]
  );
}
function T1(l, r) {
  return M0(l, r);
}
function M0(l, r, o, u, c) {
  Ie(
    Bi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = E.useContext(tn), { matches: h } = E.useContext(Bn), p = h[h.length - 1], b = p ? p.params : {}, y = p ? p.pathname : "/", v = p ? p.pathnameBase : "/", S = p && p.route;
  {
    let V = S && S.path || "";
    z0(
      y,
      !S || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let C = ka(), q;
  if (r) {
    let V = typeof r == "string" ? Al(r) : r;
    Ie(
      v === "/" || V.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), q = V;
  } else
    q = C;
  let T = q.pathname || "/", L = T;
  if (v !== "/") {
    let V = v.replace(/^\//, "").split("/");
    L = "/" + T.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let O = w0(l, { pathname: L });
  rn(
    S || O != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), rn(
    O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let K = O1(
    O && O.map(
      (V) => Object.assign({}, V, {
        params: Object.assign({}, b, V.params),
        pathname: Ln([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathname
        ]),
        pathnameBase: V.pathnameBase === "/" ? v : Ln([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            V.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathnameBase
        ])
      })
    ),
    h,
    o,
    u,
    c
  );
  return r && K ? /* @__PURE__ */ E.createElement(
    Hi.Provider,
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
    K
  ) : K;
}
function N1() {
  let l = L1(), r = f1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), o = l instanceof Error ? l.stack : null, u = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: u }, f = { padding: "2px 4px", backgroundColor: u }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), h = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", { style: { fontStyle: "italic" } }, r), o ? /* @__PURE__ */ E.createElement("pre", { style: c }, o) : null, h);
}
var C1 = /* @__PURE__ */ E.createElement(N1, null), L0 = class extends E.Component {
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
      const o = w1(l.digest);
      o && (l = o);
    }
    let r = l !== void 0 ? /* @__PURE__ */ E.createElement(Bn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ E.createElement(
      Ec.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ E.createElement(A1, { error: l }, r) : r;
  }
};
L0.contextType = g1;
var $u = /* @__PURE__ */ new WeakMap();
function A1({
  children: l,
  error: r
}) {
  let { basename: o } = E.useContext(tn);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let u = E1(r.digest);
    if (u) {
      let c = $u.get(r);
      if (c) throw c;
      let f = A0(u.location, o);
      if (C0 && !$u.get(r))
        if (f.isExternal || u.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: u.replace
            })
          );
          throw $u.set(r, h), h;
        }
      return /* @__PURE__ */ E.createElement(
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
function _1({ routeContext: l, match: r, children: o }) {
  let u = E.useContext(_l);
  return u && u.static && u.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ E.createElement(Bn.Provider, { value: l }, o);
}
function O1(l, r = [], o = null, u = null, c = null) {
  if (l == null) {
    if (!o)
      return null;
    if (o.errors)
      l = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      l = o.matches;
    else
      return null;
  }
  let f = l, h = o?.errors;
  if (h != null) {
    let v = f.findIndex(
      (S) => S.route.id && h?.[S.route.id] !== void 0
    );
    Ie(
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
  if (o)
    for (let v = 0; v < f.length; v++) {
      let S = f[v];
      if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (b = v), S.route.id) {
        let { loaderData: C, errors: q } = o, T = S.route.loader && !C.hasOwnProperty(S.route.id) && (!q || q[S.route.id] === void 0);
        if (S.route.lazy || T) {
          p = !0, b >= 0 ? f = f.slice(0, b + 1) : f = [f[0]];
          break;
        }
      }
    }
  let y = o && u ? (v, S) => {
    u(v, {
      location: o.location,
      params: o.matches?.[0]?.params ?? {},
      unstable_pattern: m1(o.matches),
      errorInfo: S
    });
  } : void 0;
  return f.reduceRight(
    (v, S, C) => {
      let q, T = !1, L = null, O = null;
      o && (q = h && S.route.id ? h[S.route.id] : void 0, L = S.route.errorElement || C1, p && (b < 0 && C === 0 ? (z0(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), T = !0, O = null) : b === C && (T = !0, O = S.route.hydrateFallbackElement || null)));
      let K = r.concat(f.slice(0, C + 1)), V = () => {
        let Q;
        return q ? Q = L : T ? Q = O : S.route.Component ? Q = /* @__PURE__ */ E.createElement(S.route.Component, null) : S.route.element ? Q = S.route.element : Q = v, /* @__PURE__ */ E.createElement(
          _1,
          {
            match: S,
            routeContext: {
              outlet: v,
              matches: K,
              isDataRoute: o != null
            },
            children: Q
          }
        );
      };
      return o && (S.route.ErrorBoundary || S.route.errorElement || C === 0) ? /* @__PURE__ */ E.createElement(
        L0,
        {
          location: o.location,
          revalidation: o.revalidation,
          component: L,
          error: q,
          children: V(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
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
function j1(l) {
  let r = E.useContext(_l);
  return Ie(r, wc(l)), r;
}
function D1(l) {
  let r = E.useContext(Ts);
  return Ie(r, wc(l)), r;
}
function U1(l) {
  let r = E.useContext(Bn);
  return Ie(r, wc(l)), r;
}
function Sc(l) {
  let r = U1(l), o = r.matches[r.matches.length - 1];
  return Ie(
    o.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function M1() {
  return Sc(
    "useRouteId"
    /* UseRouteId */
  );
}
function L1() {
  let l = E.useContext(Ec), r = D1(
    "useRouteError"
    /* UseRouteError */
  ), o = Sc(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[o];
}
function z1() {
  let { router: l } = j1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Sc(
    "useNavigate"
    /* UseNavigateStable */
  ), o = E.useRef(!1);
  return U0(() => {
    o.current = !0;
  }), E.useCallback(
    async (c, f = {}) => {
      rn(o.current, D0), o.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...f }));
    },
    [l, r]
  );
}
var kh = {};
function z0(l, r, o) {
  !r && !kh[l] && (kh[l] = !0, rn(!1, o));
}
E.memo(H1);
function H1({
  routes: l,
  future: r,
  state: o,
  onError: u
}) {
  return M0(l, void 0, o, u, r);
}
function H0(l) {
  Ie(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function B1({
  basename: l = "/",
  children: r = null,
  location: o,
  navigationType: u = "POP",
  navigator: c,
  static: f = !1,
  unstable_useTransitions: h
}) {
  Ie(
    !Bi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = l.replace(/^\/*/, "/"), b = E.useMemo(
    () => ({
      basename: p,
      navigator: c,
      static: f,
      unstable_useTransitions: h,
      future: {}
    }),
    [p, c, f, h]
  );
  typeof o == "string" && (o = Al(o));
  let {
    pathname: y = "/",
    search: v = "",
    hash: S = "",
    state: C = null,
    key: q = "default"
  } = o, T = E.useMemo(() => {
    let L = Hn(y, p);
    return L == null ? null : {
      location: {
        pathname: L,
        search: v,
        hash: S,
        state: C,
        key: q
      },
      navigationType: u
    };
  }, [p, y, v, S, C, q, u]);
  return rn(
    T != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`
  ), T == null ? null : /* @__PURE__ */ E.createElement(tn.Provider, { value: b }, /* @__PURE__ */ E.createElement(Hi.Provider, { children: r, value: T }));
}
function k1({
  children: l,
  location: r
}) {
  return T1(dc(l), r);
}
function dc(l, r = []) {
  let o = [];
  return E.Children.forEach(l, (u, c) => {
    if (!E.isValidElement(u))
      return;
    let f = [...r, c];
    if (u.type === E.Fragment) {
      o.push.apply(
        o,
        dc(u.props.children, f)
      );
      return;
    }
    Ie(
      u.type === H0,
      `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ie(
      !u.props.index || !u.props.children,
      "An index route cannot have child routes."
    );
    let h = {
      id: u.props.id || f.join("-"),
      caseSensitive: u.props.caseSensitive,
      element: u.props.element,
      Component: u.props.Component,
      index: u.props.index,
      path: u.props.path,
      middleware: u.props.middleware,
      loader: u.props.loader,
      action: u.props.action,
      hydrateFallbackElement: u.props.hydrateFallbackElement,
      HydrateFallback: u.props.HydrateFallback,
      errorElement: u.props.errorElement,
      ErrorBoundary: u.props.ErrorBoundary,
      hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
      shouldRevalidate: u.props.shouldRevalidate,
      handle: u.props.handle,
      lazy: u.props.lazy
    };
    u.props.children && (h.children = dc(
      u.props.children,
      f
    )), o.push(h);
  }), o;
}
var hs = "get", gs = "application/x-www-form-urlencoded";
function Ns(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function q1(l) {
  return Ns(l) && l.tagName.toLowerCase() === "button";
}
function G1(l) {
  return Ns(l) && l.tagName.toLowerCase() === "form";
}
function Y1(l) {
  return Ns(l) && l.tagName.toLowerCase() === "input";
}
function K1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function V1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !K1(l);
}
var os = null;
function X1() {
  if (os === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), os = !1;
    } catch {
      os = !0;
    }
  return os;
}
var Q1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Wu(l) {
  return l != null && !Q1.has(l) ? (rn(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gs}"`
  ), null) : l;
}
function Z1(l, r) {
  let o, u, c, f, h;
  if (G1(l)) {
    let p = l.getAttribute("action");
    u = p ? Hn(p, r) : null, o = l.getAttribute("method") || hs, c = Wu(l.getAttribute("enctype")) || gs, f = new FormData(l);
  } else if (q1(l) || Y1(l) && (l.type === "submit" || l.type === "image")) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = l.getAttribute("formaction") || p.getAttribute("action");
    if (u = b ? Hn(b, r) : null, o = l.getAttribute("formmethod") || p.getAttribute("method") || hs, c = Wu(l.getAttribute("formenctype")) || Wu(p.getAttribute("enctype")) || gs, f = new FormData(p, l), !X1()) {
      let { name: y, type: v, value: S } = l;
      if (v === "image") {
        let C = y ? `${y}.` : "";
        f.append(`${C}x`, "0"), f.append(`${C}y`, "0");
      } else y && f.append(y, S);
    }
  } else {
    if (Ns(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = hs, u = null, c = gs, h = l;
  }
  return f && c === "text/plain" && (h = f, f = void 0), { action: u, method: o.toLowerCase(), encType: c, formData: f, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function xc(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function F1(l, r, o) {
  let u = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return u.pathname === "/" ? u.pathname = `_root.${o}` : r && Hn(u.pathname, r) === "/" ? u.pathname = `${r.replace(/\/$/, "")}/_root.${o}` : u.pathname = `${u.pathname.replace(/\/$/, "")}.${o}`, u;
}
async function J1(l, r) {
  if (l.id in r)
    return r[l.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return r[l.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function I1(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function $1(l, r, o) {
  let u = await Promise.all(
    l.map(async (c) => {
      let f = r.routes[c.route.id];
      if (f) {
        let h = await J1(f, o);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return tb(
    u.flat(1).filter(I1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function qh(l, r, o, u, c, f) {
  let h = (b, y) => o[y] ? b.route.id !== o[y].route.id : !0, p = (b, y) => (
    // param change, /users/123 -> /users/456
    o[y].pathname !== b.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    o[y].route.path?.endsWith("*") && o[y].params["*"] !== b.params["*"]
  );
  return f === "assets" ? r.filter(
    (b, y) => h(b, y) || p(b, y)
  ) : f === "data" ? r.filter((b, y) => {
    let v = u.routes[b.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (h(b, y) || p(b, y))
      return !0;
    if (b.route.shouldRevalidate) {
      let S = b.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: o[0]?.params || {},
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
function W1(l, r, { includeHydrateFallback: o } = {}) {
  return P1(
    l.map((u) => {
      let c = r.routes[u.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), o && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function P1(l) {
  return [...new Set(l)];
}
function eb(l) {
  let r = {}, o = Object.keys(l).sort();
  for (let u of o)
    r[u] = l[u];
  return r;
}
function tb(l, r) {
  let o = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((u, c) => {
    let f = JSON.stringify(eb(c));
    return o.has(f) || (o.add(f), u.push({ key: f, link: c })), u;
  }, []);
}
function B0() {
  let l = E.useContext(_l);
  return xc(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function nb() {
  let l = E.useContext(Ts);
  return xc(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Rc = E.createContext(void 0);
Rc.displayName = "FrameworkContext";
function k0() {
  let l = E.useContext(Rc);
  return xc(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function ab(l, r) {
  let o = E.useContext(Rc), [u, c] = E.useState(!1), [f, h] = E.useState(!1), { onFocus: p, onBlur: b, onMouseEnter: y, onMouseLeave: v, onTouchStart: S } = r, C = E.useRef(null);
  E.useEffect(() => {
    if (l === "render" && h(!0), l === "viewport") {
      let L = (K) => {
        K.forEach((V) => {
          h(V.isIntersecting);
        });
      }, O = new IntersectionObserver(L, { threshold: 0.5 });
      return C.current && O.observe(C.current), () => {
        O.disconnect();
      };
    }
  }, [l]), E.useEffect(() => {
    if (u) {
      let L = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [u]);
  let q = () => {
    c(!0);
  }, T = () => {
    c(!1), h(!1);
  };
  return o ? l !== "intent" ? [f, C, {}] : [
    f,
    C,
    {
      onFocus: Ai(p, q),
      onBlur: Ai(b, T),
      onMouseEnter: Ai(y, q),
      onMouseLeave: Ai(v, T),
      onTouchStart: Ai(S, q)
    }
  ] : [!1, C, {}];
}
function Ai(l, r) {
  return (o) => {
    l && l(o), o.defaultPrevented || r(o);
  };
}
function lb({ page: l, ...r }) {
  let { router: o } = B0(), u = E.useMemo(
    () => w0(o.routes, l, o.basename),
    [o.routes, l, o.basename]
  );
  return u ? /* @__PURE__ */ E.createElement(rb, { page: l, matches: u, ...r }) : null;
}
function ib(l) {
  let { manifest: r, routeModules: o } = k0(), [u, c] = E.useState([]);
  return E.useEffect(() => {
    let f = !1;
    return $1(l, r, o).then(
      (h) => {
        f || c(h);
      }
    ), () => {
      f = !0;
    };
  }, [l, r, o]), u;
}
function rb({
  page: l,
  matches: r,
  ...o
}) {
  let u = ka(), { manifest: c, routeModules: f } = k0(), { basename: h } = B0(), { loaderData: p, matches: b } = nb(), y = E.useMemo(
    () => qh(
      l,
      r,
      b,
      c,
      u,
      "data"
    ),
    [l, r, b, c, u]
  ), v = E.useMemo(
    () => qh(
      l,
      r,
      b,
      c,
      u,
      "assets"
    ),
    [l, r, b, c, u]
  ), S = E.useMemo(() => {
    if (l === u.pathname + u.search + u.hash)
      return [];
    let T = /* @__PURE__ */ new Set(), L = !1;
    if (r.forEach((K) => {
      let V = c.routes[K.route.id];
      !V || !V.hasLoader || (!y.some((Q) => Q.route.id === K.route.id) && K.route.id in p && f[K.route.id]?.shouldRevalidate || V.hasClientLoader ? L = !0 : T.add(K.route.id));
    }), T.size === 0)
      return [];
    let O = F1(l, h, "data");
    return L && T.size > 0 && O.searchParams.set(
      "_routes",
      r.filter((K) => T.has(K.route.id)).map((K) => K.route.id).join(",")
    ), [O.pathname + O.search];
  }, [
    h,
    p,
    u,
    c,
    y,
    r,
    l,
    f
  ]), C = E.useMemo(
    () => W1(v, c),
    [v, c]
  ), q = ib(v);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, S.map((T) => /* @__PURE__ */ E.createElement("link", { key: T, rel: "prefetch", as: "fetch", href: T, ...o })), C.map((T) => /* @__PURE__ */ E.createElement("link", { key: T, rel: "modulepreload", href: T, ...o })), q.map(({ key: T, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ E.createElement("link", { key: T, nonce: o.nonce, ...L })
  )));
}
function sb(...l) {
  return (r) => {
    l.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var ob = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ob && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function ub({
  basename: l,
  children: r,
  unstable_useTransitions: o,
  window: u
}) {
  let c = E.useRef();
  c.current == null && (c.current = Yp({ window: u, v5Compat: !0 }));
  let f = c.current, [h, p] = E.useState({
    action: f.action,
    location: f.location
  }), b = E.useCallback(
    (y) => {
      o === !1 ? p(y) : E.startTransition(() => p(y));
    },
    [o]
  );
  return E.useLayoutEffect(() => f.listen(b), [f, b]), /* @__PURE__ */ E.createElement(
    B1,
    {
      basename: l,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      unstable_useTransitions: o
    }
  );
}
var q0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, G0 = E.forwardRef(
  function({
    onClick: r,
    discover: o = "render",
    prefetch: u = "none",
    relative: c,
    reloadDocument: f,
    replace: h,
    state: p,
    target: b,
    to: y,
    preventScrollReset: v,
    viewTransition: S,
    unstable_defaultShouldRevalidate: C,
    ...q
  }, T) {
    let { basename: L, unstable_useTransitions: O } = E.useContext(tn), K = typeof y == "string" && q0.test(y), V = A0(y, L);
    y = V.to;
    let Q = S1(y, { relative: c }), [P, F, re] = ab(
      u,
      q
    ), ne = mb(y, {
      replace: h,
      state: p,
      target: b,
      preventScrollReset: v,
      relative: c,
      viewTransition: S,
      unstable_defaultShouldRevalidate: C,
      unstable_useTransitions: O
    });
    function J(pe) {
      r && r(pe), pe.defaultPrevented || ne(pe);
    }
    let se = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ E.createElement(
        "a",
        {
          ...q,
          ...re,
          href: V.absoluteURL || Q,
          onClick: V.isExternal || f ? r : J,
          ref: sb(T, F),
          target: b,
          "data-discover": !K && o === "render" ? "true" : void 0
        }
      )
    );
    return P && !K ? /* @__PURE__ */ E.createElement(E.Fragment, null, se, /* @__PURE__ */ E.createElement(lb, { page: Q })) : se;
  }
);
G0.displayName = "Link";
var cb = E.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: u = "",
    end: c = !1,
    style: f,
    to: h,
    viewTransition: p,
    children: b,
    ...y
  }, v) {
    let S = ki(h, { relative: y.relative }), C = ka(), q = E.useContext(Ts), { navigator: T, basename: L } = E.useContext(tn), O = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    bb(S) && p === !0, K = T.encodeLocation ? T.encodeLocation(S).pathname : S.pathname, V = C.pathname, Q = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    o || (V = V.toLowerCase(), Q = Q ? Q.toLowerCase() : null, K = K.toLowerCase()), Q && L && (Q = Hn(Q, L) || Q);
    const P = K !== "/" && K.endsWith("/") ? K.length - 1 : K.length;
    let F = V === K || !c && V.startsWith(K) && V.charAt(P) === "/", re = Q != null && (Q === K || !c && Q.startsWith(K) && Q.charAt(K.length) === "/"), ne = {
      isActive: F,
      isPending: re,
      isTransitioning: O
    }, J = F ? r : void 0, se;
    typeof u == "function" ? se = u(ne) : se = [
      u,
      F ? "active" : null,
      re ? "pending" : null,
      O ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof f == "function" ? f(ne) : f;
    return /* @__PURE__ */ E.createElement(
      G0,
      {
        ...y,
        "aria-current": J,
        className: se,
        ref: v,
        style: pe,
        to: h,
        viewTransition: p
      },
      typeof b == "function" ? b(ne) : b
    );
  }
);
cb.displayName = "NavLink";
var db = E.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: o,
    reloadDocument: u,
    replace: c,
    state: f,
    method: h = hs,
    action: p,
    onSubmit: b,
    relative: y,
    preventScrollReset: v,
    viewTransition: S,
    unstable_defaultShouldRevalidate: C,
    ...q
  }, T) => {
    let { unstable_useTransitions: L } = E.useContext(tn), O = yb(), K = pb(p, { relative: y }), V = h.toLowerCase() === "get" ? "get" : "post", Q = typeof p == "string" && q0.test(p), P = (F) => {
      if (b && b(F), F.defaultPrevented) return;
      F.preventDefault();
      let re = F.nativeEvent.submitter, ne = re?.getAttribute("formmethod") || h, J = () => O(re || F.currentTarget, {
        fetcherKey: r,
        method: ne,
        navigate: o,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: v,
        viewTransition: S,
        unstable_defaultShouldRevalidate: C
      });
      L && o !== !1 ? E.startTransition(() => J()) : J();
    };
    return /* @__PURE__ */ E.createElement(
      "form",
      {
        ref: T,
        method: V,
        action: K,
        onSubmit: u ? b : P,
        ...q,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
db.displayName = "Form";
function fb(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Y0(l) {
  let r = E.useContext(_l);
  return Ie(r, fb(l)), r;
}
function mb(l, {
  target: r,
  replace: o,
  state: u,
  preventScrollReset: c,
  relative: f,
  viewTransition: h,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: b
} = {}) {
  let y = x1(), v = ka(), S = ki(l, { relative: f });
  return E.useCallback(
    (C) => {
      if (V1(C, r)) {
        C.preventDefault();
        let q = o !== void 0 ? o : Ui(v) === Ui(S), T = () => y(l, {
          replace: q,
          state: u,
          preventScrollReset: c,
          relative: f,
          viewTransition: h,
          unstable_defaultShouldRevalidate: p
        });
        b ? E.startTransition(() => T()) : T();
      }
    },
    [
      v,
      y,
      S,
      o,
      u,
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
var hb = 0, gb = () => `__${String(++hb)}__`;
function yb() {
  let { router: l } = Y0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = E.useContext(tn), o = M1(), u = l.fetch, c = l.navigate;
  return E.useCallback(
    async (f, h = {}) => {
      let { action: p, method: b, encType: y, formData: v, body: S } = Z1(
        f,
        r
      );
      if (h.navigate === !1) {
        let C = h.fetcherKey || gb();
        await u(C, o, h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: v,
          body: S,
          formMethod: h.method || b,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await c(h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: v,
          body: S,
          formMethod: h.method || b,
          formEncType: h.encType || y,
          replace: h.replace,
          state: h.state,
          fromRouteId: o,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition
        });
    },
    [u, c, r, o]
  );
}
function pb(l, { relative: r } = {}) {
  let { basename: o } = E.useContext(tn), u = E.useContext(Bn);
  Ie(u, "useFormAction must be used inside a RouteContext");
  let [c] = u.matches.slice(-1), f = { ...ki(l || ".", { relative: r }) }, h = ka();
  if (l == null) {
    f.search = h.search;
    let p = new URLSearchParams(f.search), b = p.getAll("index");
    if (b.some((v) => v === "")) {
      p.delete("index"), b.filter((S) => S).forEach((S) => p.append("index", S));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (f.pathname = f.pathname === "/" ? o : Ln([o, f.pathname])), Ui(f);
}
function bb(l, { relative: r } = {}) {
  let o = E.useContext(O0);
  Ie(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Y0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = ki(l, { relative: r });
  if (!o.isTransitioning)
    return !1;
  let f = Hn(o.currentLocation.pathname, u) || o.currentLocation.pathname, h = Hn(o.nextLocation.pathname, u) || o.nextLocation.pathname;
  return Ss(c.pathname, h) != null || Ss(c.pathname, f) != null;
}
var Pu = { exports: {} }, bt = {};
var Gh;
function vb() {
  if (Gh) return bt;
  Gh = 1;
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
  function o() {
  }
  var u = {
    d: {
      f: o,
      r: function() {
        throw Error(r(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function f(b, y, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
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
  return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, bt.createPortal = function(b, y) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return f(b, y, null, v);
  }, bt.flushSync = function(b) {
    var y = h.T, v = u.p;
    try {
      if (h.T = null, u.p = 2, b) return b();
    } finally {
      h.T = y, u.p = v, u.d.f();
    }
  }, bt.preconnect = function(b, y) {
    typeof b == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, u.d.C(b, y));
  }, bt.prefetchDNS = function(b) {
    typeof b == "string" && u.d.D(b);
  }, bt.preinit = function(b, y) {
    if (typeof b == "string" && y && typeof y.as == "string") {
      var v = y.as, S = p(v, y.crossOrigin), C = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      v === "style" ? u.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: S,
          integrity: C,
          fetchPriority: q
        }
      ) : v === "script" && u.d.X(b, {
        crossOrigin: S,
        integrity: C,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, bt.preinitModule = function(b, y) {
    if (typeof b == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var v = p(
            y.as,
            y.crossOrigin
          );
          u.d.M(b, {
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && u.d.M(b);
  }, bt.preload = function(b, y) {
    if (typeof b == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var v = y.as, S = p(v, y.crossOrigin);
      u.d.L(b, v, {
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
  }, bt.preloadModule = function(b, y) {
    if (typeof b == "string")
      if (y) {
        var v = p(y.as, y.crossOrigin);
        u.d.m(b, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: v,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else u.d.m(b);
  }, bt.requestFormReset = function(b) {
    u.d.r(b);
  }, bt.unstable_batchedUpdates = function(b, y) {
    return b(y);
  }, bt.useFormState = function(b, y, v) {
    return h.H.useFormState(b, y, v);
  }, bt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, bt.version = "19.2.3", bt;
}
var Yh;
function Eb() {
  if (Yh) return Pu.exports;
  Yh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Pu.exports = vb(), Pu.exports;
}
var ec = { exports: {} }, _i = {}, tc = { exports: {} }, nc = {};
var Kh;
function wb() {
  return Kh || (Kh = 1, (function(l) {
    function r(M, z) {
      var Y = M.length;
      M.push(z);
      e: for (; 0 < Y; ) {
        var ce = Y - 1 >>> 1, Ne = M[ce];
        if (0 < c(Ne, z))
          M[ce] = z, M[Y] = Ne, Y = ce;
        else break e;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function u(M) {
      if (M.length === 0) return null;
      var z = M[0], Y = M.pop();
      if (Y !== z) {
        M[0] = Y;
        e: for (var ce = 0, Ne = M.length, Re = Ne >>> 1; ce < Re; ) {
          var x = 2 * (ce + 1) - 1, B = M[x], X = x + 1, Z = M[X];
          if (0 > c(B, Y))
            X < Ne && 0 > c(Z, B) ? (M[ce] = Z, M[X] = Y, ce = X) : (M[ce] = B, M[x] = Y, ce = x);
          else if (X < Ne && 0 > c(Z, Y))
            M[ce] = Z, M[X] = Y, ce = X;
          else break e;
        }
      }
      return z;
    }
    function c(M, z) {
      var Y = M.sortIndex - z.sortIndex;
      return Y !== 0 ? Y : M.id - z.id;
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
    var b = [], y = [], v = 1, S = null, C = 3, q = !1, T = !1, L = !1, O = !1, K = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function P(M) {
      for (var z = o(y); z !== null; ) {
        if (z.callback === null) u(y);
        else if (z.startTime <= M)
          u(y), z.sortIndex = z.expirationTime, r(b, z);
        else break;
        z = o(y);
      }
    }
    function F(M) {
      if (L = !1, P(M), !T)
        if (o(b) !== null)
          T = !0, re || (re = !0, ve());
        else {
          var z = o(y);
          z !== null && Qe(F, z.startTime - M);
        }
    }
    var re = !1, ne = -1, J = 5, se = -1;
    function pe() {
      return O ? !0 : !(l.unstable_now() - se < J);
    }
    function Je() {
      if (O = !1, re) {
        var M = l.unstable_now();
        se = M;
        var z = !0;
        try {
          e: {
            T = !1, L && (L = !1, V(ne), ne = -1), q = !0;
            var Y = C;
            try {
              t: {
                for (P(M), S = o(b); S !== null && !(S.expirationTime > M && pe()); ) {
                  var ce = S.callback;
                  if (typeof ce == "function") {
                    S.callback = null, C = S.priorityLevel;
                    var Ne = ce(
                      S.expirationTime <= M
                    );
                    if (M = l.unstable_now(), typeof Ne == "function") {
                      S.callback = Ne, P(M), z = !0;
                      break t;
                    }
                    S === o(b) && u(b), P(M);
                  } else u(b);
                  S = o(b);
                }
                if (S !== null) z = !0;
                else {
                  var Re = o(y);
                  Re !== null && Qe(
                    F,
                    Re.startTime - M
                  ), z = !1;
                }
              }
              break e;
            } finally {
              S = null, C = Y, q = !1;
            }
            z = void 0;
          }
        } finally {
          z ? ve() : re = !1;
        }
      }
    }
    var ve;
    if (typeof Q == "function")
      ve = function() {
        Q(Je);
      };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), Ge = Me.port2;
      Me.port1.onmessage = Je, ve = function() {
        Ge.postMessage(null);
      };
    } else
      ve = function() {
        K(Je, 0);
      };
    function Qe(M, z) {
      ne = K(function() {
        M(l.unstable_now());
      }, z);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, l.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < M ? Math.floor(1e3 / M) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_next = function(M) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = C;
      }
      var Y = C;
      C = z;
      try {
        return M();
      } finally {
        C = Y;
      }
    }, l.unstable_requestPaint = function() {
      O = !0;
    }, l.unstable_runWithPriority = function(M, z) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Y = C;
      C = M;
      try {
        return z();
      } finally {
        C = Y;
      }
    }, l.unstable_scheduleCallback = function(M, z, Y) {
      var ce = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? ce + Y : ce) : Y = ce, M) {
        case 1:
          var Ne = -1;
          break;
        case 2:
          Ne = 250;
          break;
        case 5:
          Ne = 1073741823;
          break;
        case 4:
          Ne = 1e4;
          break;
        default:
          Ne = 5e3;
      }
      return Ne = Y + Ne, M = {
        id: v++,
        callback: z,
        priorityLevel: M,
        startTime: Y,
        expirationTime: Ne,
        sortIndex: -1
      }, Y > ce ? (M.sortIndex = Y, r(y, M), o(b) === null && M === o(y) && (L ? (V(ne), ne = -1) : L = !0, Qe(F, Y - ce))) : (M.sortIndex = Ne, r(b, M), T || q || (T = !0, re || (re = !0, ve()))), M;
    }, l.unstable_shouldYield = pe, l.unstable_wrapCallback = function(M) {
      var z = C;
      return function() {
        var Y = C;
        C = z;
        try {
          return M.apply(this, arguments);
        } finally {
          C = Y;
        }
      };
    };
  })(nc)), nc;
}
var Vh;
function Sb() {
  return Vh || (Vh = 1, tc.exports = wb()), tc.exports;
}
var Xh;
function xb() {
  if (Xh) return _i;
  Xh = 1;
  var l = {};
  var r = Sb(), o = vc(), u = Eb();
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
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), re = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), J = /* @__PURE__ */ Symbol.for("react.memo"), se = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.activity"), Je = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function Me(e) {
    return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ge = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case V:
        return "Profiler";
      case K:
        return "StrictMode";
      case re:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case pe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case P:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case se:
          t = e._payload, e = e._init;
          try {
            return Qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var M = Array.isArray, z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ne = [], Re = -1;
  function x(e) {
    return { current: e };
  }
  function B(e) {
    0 > Re || (e.current = Ne[Re], Ne[Re] = null, Re--);
  }
  function X(e, t) {
    Re++, Ne[Re] = e.current, e.current = t;
  }
  var Z = x(null), fe = x(null), ie = x(null), be = x(null);
  function _e(e, t) {
    switch (X(ie, t), X(fe, e), X(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? eh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = eh(t), e = th(t, e);
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
    B(Z), X(Z, e);
  }
  function $() {
    B(Z), B(fe), B(ie);
  }
  function yn(e) {
    e.memoizedState !== null && X(be, e);
    var t = Z.current, n = th(t, e.type);
    t !== n && (X(fe, e), X(Z, n));
  }
  function wt(e) {
    fe.current === e && (B(Z), B(fe)), be.current === e && (B(be), xi._currentValue = ce);
  }
  var qn, on;
  function Ut(e) {
    if (qn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        qn = t && t[1] || "", on = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + qn + e + on;
  }
  var ya = !1;
  function Gn(e, t) {
    if (!e || ya) return "";
    ya = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (U) {
                  var j = U;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (U) {
                  j = U;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                j = U;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (U) {
            if (U && j && typeof U.stack == "string")
              return [U.stack, j.stack];
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
        var w = d.split(`
`), _ = g.split(`
`);
        for (i = a = 0; a < w.length && !w[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < _.length && !_[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === w.length || i === _.length)
          for (a = w.length - 1, i = _.length - 1; 1 <= a && 0 <= i && w[a] !== _[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (w[a] !== _[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || w[a] !== _[i]) {
                  var H = `
` + w[a].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ya = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ut(n) : "";
  }
  function Vi(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ut(e.type);
      case 16:
        return Ut("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ut("Suspense Fallback") : Ut("Suspense");
      case 19:
        return Ut("SuspenseList");
      case 0:
      case 15:
        return Gn(e.type, !1);
      case 11:
        return Gn(e.type.render, !1);
      case 1:
        return Gn(e.type, !0);
      case 31:
        return Ut("Activity");
      default:
        return "";
    }
  }
  function pa(e) {
    try {
      var t = "", n = null;
      do
        t += Vi(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var oe = Object.prototype.hasOwnProperty, pt = r.unstable_scheduleCallback, tt = r.unstable_cancelCallback, ee = r.unstable_shouldYield, ye = r.unstable_requestPaint, Ye = r.unstable_now, pg = r.unstable_getCurrentPriorityLevel, jc = r.unstable_ImmediatePriority, Dc = r.unstable_UserBlockingPriority, Xi = r.unstable_NormalPriority, bg = r.unstable_LowPriority, Uc = r.unstable_IdlePriority, vg = r.log, Eg = r.unstable_setDisableYieldValue, Ll = null, Mt = null;
  function Yn(e) {
    if (typeof vg == "function" && Eg(e), Mt && typeof Mt.setStrictMode == "function")
      try {
        Mt.setStrictMode(Ll, e);
      } catch {
      }
  }
  var Lt = Math.clz32 ? Math.clz32 : xg, wg = Math.log, Sg = Math.LN2;
  function xg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wg(e) / Sg | 0) | 0;
  }
  var Qi = 256, Zi = 262144, Fi = 4194304;
  function ba(e) {
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
    return g !== 0 ? (a = g & ~s, a !== 0 ? i = ba(a) : (d &= g, d !== 0 ? i = ba(d) : n || (n = g & ~e, n !== 0 && (i = ba(n))))) : (g = a & ~s, g !== 0 ? i = ba(g) : d !== 0 ? i = ba(d) : n || (n = a & ~e, n !== 0 && (i = ba(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && (s = i & -i, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function zl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Rg(e, t) {
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
  function Hl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Tg(e, t, n, a, i, s) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, w = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var H = 31 - Lt(n), G = 1 << H;
      g[H] = 0, w[H] = -1;
      var j = _[H];
      if (j !== null)
        for (_[H] = null, H = 0; H < j.length; H++) {
          var U = j[H];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~G;
    }
    a !== 0 && Lc(e, a, 0), s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t));
  }
  function Lc(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Lt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function zc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Lt(n), i = 1 << a;
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
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Rh(e.type));
  }
  function kc(e, t) {
    var n = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = n;
    }
  }
  var Kn = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Kn, St = "__reactProps$" + Kn, qa = "__reactContainer$" + Kn, Bs = "__reactEvents$" + Kn, Ng = "__reactListeners$" + Kn, Cg = "__reactHandles$" + Kn, qc = "__reactResources$" + Kn, Bl = "__reactMarker$" + Kn;
  function ks(e) {
    delete e[ft], delete e[St], delete e[Bs], delete e[Ng], delete e[Cg];
  }
  function Ga(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[qa] || n[ft]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = oh(e); e !== null; ) {
            if (n = e[ft]) return n;
            e = oh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ya(e) {
    if (e = e[ft] || e[qa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function kl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Ka(e) {
    var t = e[qc];
    return t || (t = e[qc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[Bl] = !0;
  }
  var Gc = /* @__PURE__ */ new Set(), Yc = {};
  function va(e, t) {
    Va(e, t), Va(e + "Capture", t);
  }
  function Va(e, t) {
    for (Yc[e] = t, e = 0; e < t.length; e++)
      Gc.add(t[e]);
  }
  var Ag = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Kc = {}, Vc = {};
  function _g(e) {
    return oe.call(Vc, e) ? !0 : oe.call(Kc, e) ? !1 : Ag.test(e) ? Vc[e] = !0 : (Kc[e] = !0, !1);
  }
  function Ii(e, t, n) {
    if (_g(t))
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
  function $i(e, t, n) {
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
  function pn(e, t, n, a) {
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
  function Kt(e) {
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
  function Og(e, t, n) {
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
      var t = Xc(e) ? "checked" : "value";
      e._valueTracker = Og(
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
    return e && (a = Xc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Wi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var jg = /[\n"\\]/g;
  function Vt(e) {
    return e.replace(
      jg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gs(e, t, n, a, i, s, d, g) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ys(e, d, Kt(t)) : n != null ? Ys(e, d, Kt(n)) : a != null && e.removeAttribute("value"), i == null && s != null && (e.defaultChecked = !!s), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Kt(g) : e.removeAttribute("name");
  }
  function Zc(e, t, n, a, i, s, d, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        qs(e);
        return;
      }
      n = n != null ? "" + Kt(n) : "", t = t != null ? "" + Kt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = g ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), qs(e);
  }
  function Ys(e, t, n) {
    t === "number" && Wi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Xa(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
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
    if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Kt(n) : "";
  }
  function Jc(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (M(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Kt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), qs(e);
  }
  function Qa(e, t) {
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
  function Ic(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Dg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function $c(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && Ic(e, i, a);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && Ic(e, s, t[s]);
  }
  function Ks(e) {
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
  var Ug = /* @__PURE__ */ new Map([
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
  ]), Mg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pi(e) {
    return Mg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function bn() {
  }
  var Vs = null;
  function Xs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Za = null, Fa = null;
  function Wc(e) {
    var t = Ya(e);
    if (t && (e = t.stateNode)) {
      var n = e[St] || null;
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
              'input[name="' + Vt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[St] || null;
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
          t = n.value, t != null && Xa(e, !!n.multiple, t, !1);
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
      if (Qs = !1, (Za !== null || Fa !== null) && (qr(), Za && (t = Za, e = Fa, Fa = Za = null, Wc(t), e)))
        for (t = 0; t < e.length; t++) Wc(e[t]);
    }
  }
  function ql(e, t) {
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
  var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zs = !1;
  if (vn)
    try {
      var Gl = {};
      Object.defineProperty(Gl, "passive", {
        get: function() {
          Zs = !0;
        }
      }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
    } catch {
      Zs = !1;
    }
  var Vn = null, Fs = null, er = null;
  function ed() {
    if (er) return er;
    var e, t = Fs, n = t.length, a, i = "value" in Vn ? Vn.value : Vn.textContent, s = i.length;
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
  function xt(e) {
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
  var Ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ar = xt(Ea), Yl = C({}, Ea, { view: 0, detail: 0 }), Lg = xt(Yl), Js, Is, Kl, lr = C({}, Yl, {
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
      return "movementX" in e ? e.movementX : (e !== Kl && (Kl && e.type === "mousemove" ? (Js = e.screenX - Kl.screenX, Is = e.screenY - Kl.screenY) : Is = Js = 0, Kl = e), Js);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Is;
    }
  }), nd = xt(lr), zg = C({}, lr, { dataTransfer: 0 }), Hg = xt(zg), Bg = C({}, Yl, { relatedTarget: 0 }), $s = xt(Bg), kg = C({}, Ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qg = xt(kg), Gg = C({}, Ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Yg = xt(Gg), Kg = C({}, Ea, { data: 0 }), ad = xt(Kg), Vg = {
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
  }, Qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Zg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qg[e]) ? !!t[e] : !1;
  }
  function Ws() {
    return Zg;
  }
  var Fg = C({}, Yl, {
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
  }), Jg = xt(Fg), Ig = C({}, lr, {
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
  }), ld = xt(Ig), $g = C({}, Yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ws
  }), Wg = xt($g), Pg = C({}, Ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = xt(Pg), ty = C({}, lr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ny = xt(ty), ay = C({}, Ea, {
    newState: 0,
    oldState: 0
  }), ly = xt(ay), iy = [9, 13, 27, 32], Ps = vn && "CompositionEvent" in window, Vl = null;
  vn && "documentMode" in document && (Vl = document.documentMode);
  var ry = vn && "TextEvent" in window && !Vl, id = vn && (!Ps || Vl && 8 < Vl && 11 >= Vl), rd = " ", sd = !1;
  function od(e, t) {
    switch (e) {
      case "keyup":
        return iy.indexOf(t.keyCode) !== -1;
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
  function ud(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function sy(e, t) {
    switch (e) {
      case "compositionend":
        return ud(t);
      case "keypress":
        return t.which !== 32 ? null : (sd = !0, rd);
      case "textInput":
        return e = t.data, e === rd && sd ? null : e;
      default:
        return null;
    }
  }
  function oy(e, t) {
    if (Ja)
      return e === "compositionend" || !Ps && od(e, t) ? (e = ed(), er = Fs = Vn = null, Ja = !1, e) : null;
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
    Za ? Fa ? Fa.push(a) : Fa = [a] : Za = a, t = Zr(t, "onChange"), 0 < t.length && (n = new ar(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Xl = null, Ql = null;
  function cy(e) {
    Fm(e, 0);
  }
  function ir(e) {
    var t = kl(e);
    if (Qc(t)) return e;
  }
  function fd(e, t) {
    if (e === "change") return t;
  }
  var md = !1;
  if (vn) {
    var eo;
    if (vn) {
      var to = "oninput" in document;
      if (!to) {
        var hd = document.createElement("div");
        hd.setAttribute("oninput", "return;"), to = typeof hd.oninput == "function";
      }
      eo = to;
    } else eo = !1;
    md = eo && (!document.documentMode || 9 < document.documentMode);
  }
  function gd() {
    Xl && (Xl.detachEvent("onpropertychange", yd), Ql = Xl = null);
  }
  function yd(e) {
    if (e.propertyName === "value" && ir(Ql)) {
      var t = [];
      dd(
        t,
        Ql,
        e,
        Xs(e)
      ), Pc(cy, t);
    }
  }
  function dy(e, t, n) {
    e === "focusin" ? (gd(), Xl = t, Ql = n, Xl.attachEvent("onpropertychange", yd)) : e === "focusout" && gd();
  }
  function fy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ir(Ql);
  }
  function my(e, t) {
    if (e === "click") return ir(t);
  }
  function hy(e, t) {
    if (e === "input" || e === "change")
      return ir(t);
  }
  function gy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : gy;
  function Zl(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!oe.call(t, i) || !zt(e[i], t[i]))
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
  function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var yy = vn && "documentMode" in document && 11 >= document.documentMode, Ia = null, ao = null, Fl = null, lo = !1;
  function wd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    lo || Ia == null || Ia !== Wi(a) || (a = Ia, "selectionStart" in a && no(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Fl && Zl(Fl, a) || (Fl = a, a = Zr(ao, "onSelect"), 0 < a.length && (t = new ar(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ia)));
  }
  function wa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $a = {
    animationend: wa("Animation", "AnimationEnd"),
    animationiteration: wa("Animation", "AnimationIteration"),
    animationstart: wa("Animation", "AnimationStart"),
    transitionrun: wa("Transition", "TransitionRun"),
    transitionstart: wa("Transition", "TransitionStart"),
    transitioncancel: wa("Transition", "TransitionCancel"),
    transitionend: wa("Transition", "TransitionEnd")
  }, io = {}, Sd = {};
  vn && (Sd = document.createElement("div").style, "AnimationEvent" in window || (delete $a.animationend.animation, delete $a.animationiteration.animation, delete $a.animationstart.animation), "TransitionEvent" in window || delete $a.transitionend.transition);
  function Sa(e) {
    if (io[e]) return io[e];
    if (!$a[e]) return e;
    var t = $a[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Sd)
        return io[e] = t[n];
    return e;
  }
  var xd = Sa("animationend"), Rd = Sa("animationiteration"), Td = Sa("animationstart"), py = Sa("transitionrun"), by = Sa("transitionstart"), vy = Sa("transitioncancel"), Nd = Sa("transitionend"), Cd = /* @__PURE__ */ new Map(), ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ro.push("scrollEnd");
  function nn(e, t) {
    Cd.set(e, t), va(t, [e]);
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
  }, Xt = [], Wa = 0, so = 0;
  function sr() {
    for (var e = Wa, t = so = Wa = 0; t < e; ) {
      var n = Xt[t];
      Xt[t++] = null;
      var a = Xt[t];
      Xt[t++] = null;
      var i = Xt[t];
      Xt[t++] = null;
      var s = Xt[t];
      if (Xt[t++] = null, a !== null && i !== null) {
        var d = a.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), a.pending = i;
      }
      s !== 0 && Ad(n, i, s);
    }
  }
  function or(e, t, n, a) {
    Xt[Wa++] = e, Xt[Wa++] = t, Xt[Wa++] = n, Xt[Wa++] = a, so |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function oo(e, t, n, a) {
    return or(e, t, n, a), ur(e);
  }
  function xa(e, t) {
    return or(e, null, null, t), ur(e);
  }
  function Ad(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, s = e.return; s !== null; )
      s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (i = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, i && t !== null && (i = 31 - Lt(n), e = s.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), s) : null;
  }
  function ur(e) {
    if (50 < yi)
      throw yi = 0, bu = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pa = {};
  function Ey(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, a) {
    return new Ey(e, t, n, a);
  }
  function uo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function En(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
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
    if (a = e, typeof e == "function") uo(e) && (d = 1);
    else if (typeof e == "string")
      d = Tp(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case pe:
          return e = Ht(31, n, t, i), e.elementType = pe, e.lanes = s, e;
        case O:
          return Ra(n.children, i, s, t);
        case K:
          d = 8, i |= 24;
          break;
        case V:
          return e = Ht(12, n, t, i | 2), e.elementType = V, e.lanes = s, e;
        case re:
          return e = Ht(13, n, t, i), e.elementType = re, e.lanes = s, e;
        case ne:
          return e = Ht(19, n, t, i), e.elementType = ne, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case P:
                d = 10;
                break e;
              case Q:
                d = 9;
                break e;
              case F:
                d = 11;
                break e;
              case J:
                d = 14;
                break e;
              case se:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ht(d, n, t, i), t.elementType = e, t.type = a, t.lanes = s, t;
  }
  function Ra(e, t, n, a) {
    return e = Ht(7, e, a, t), e.lanes = n, e;
  }
  function co(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function Od(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function fo(e, t, n) {
    return t = Ht(
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
  var jd = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = jd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: pa(t)
      }, jd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: pa(t)
    };
  }
  var el = [], tl = 0, dr = null, Jl = 0, Zt = [], Ft = 0, Xn = null, un = 1, cn = "";
  function wn(e, t) {
    el[tl++] = Jl, el[tl++] = dr, dr = e, Jl = t;
  }
  function Dd(e, t, n) {
    Zt[Ft++] = un, Zt[Ft++] = cn, Zt[Ft++] = Xn, Xn = e;
    var a = un;
    e = cn;
    var i = 32 - Lt(a) - 1;
    a &= ~(1 << i), n += 1;
    var s = 32 - Lt(t) + i;
    if (30 < s) {
      var d = i - i % 5;
      s = (a & (1 << d) - 1).toString(32), a >>= d, i -= d, un = 1 << 32 - Lt(t) + i | n << i | a, cn = s + e;
    } else
      un = 1 << s | n << i | a, cn = e;
  }
  function mo(e) {
    e.return !== null && (wn(e, 1), Dd(e, 1, 0));
  }
  function ho(e) {
    for (; e === dr; )
      dr = el[--tl], el[tl] = null, Jl = el[--tl], el[tl] = null;
    for (; e === Xn; )
      Xn = Zt[--Ft], Zt[Ft] = null, cn = Zt[--Ft], Zt[Ft] = null, un = Zt[--Ft], Zt[Ft] = null;
  }
  function Ud(e, t) {
    Zt[Ft++] = un, Zt[Ft++] = cn, Zt[Ft++] = Xn, un = t.id, cn = t.overflow, Xn = e;
  }
  var mt = null, Ke = null, Te = !1, Qn = null, Jt = !1, go = Error(c(519));
  function Zn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Il(Qt(t, e)), go;
  }
  function Md(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[ft] = e, t[St] = a, n) {
      case "dialog":
        we("cancel", t), we("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        we("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < bi.length; n++)
          we(bi[n], t);
        break;
      case "source":
        we("error", t);
        break;
      case "img":
      case "image":
      case "link":
        we("error", t), we("load", t);
        break;
      case "details":
        we("toggle", t);
        break;
      case "input":
        we("invalid", t), Zc(
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
        we("invalid", t);
        break;
      case "textarea":
        we("invalid", t), Jc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Wm(t.textContent, n) ? (a.popover != null && (we("beforetoggle", t), we("toggle", t)), a.onScroll != null && we("scroll", t), a.onScrollEnd != null && we("scrollend", t), a.onClick != null && (t.onclick = bn), t = !0) : t = !1, t || Zn(e, !0);
  }
  function Ld(e) {
    for (mt = e.return; mt; )
      switch (mt.tag) {
        case 5:
        case 31:
        case 13:
          Jt = !1;
          return;
        case 27:
        case 3:
          Jt = !0;
          return;
        default:
          mt = mt.return;
      }
  }
  function nl(e) {
    if (e !== mt) return !1;
    if (!Te) return Ld(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Uu(e.type, e.memoizedProps)), n = !n), n && Ke && Zn(e), Ld(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ke = sh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ke = sh(e);
    } else
      t === 27 ? (t = Ke, sa(e.type) ? (e = Bu, Bu = null, Ke = e) : Ke = t) : Ke = mt ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ta() {
    Ke = mt = null, Te = !1;
  }
  function yo() {
    var e = Qn;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), Qn = null), e;
  }
  function Il(e) {
    Qn === null ? Qn = [e] : Qn.push(e);
  }
  var po = x(null), Na = null, Sn = null;
  function Fn(e, t, n) {
    X(po, t._currentValue), t._currentValue = n;
  }
  function xn(e) {
    e._currentValue = po.current, B(po);
  }
  function bo(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function vo(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var s = i.dependencies;
      if (s !== null) {
        var d = i.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var g = s;
          s = i;
          for (var w = 0; w < t.length; w++)
            if (g.context === t[w]) {
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), bo(
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
        d.lanes |= n, s = d.alternate, s !== null && (s.lanes |= n), bo(d, n, e), d = null;
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
  function al(e, t, n, a) {
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
          zt(i.pendingProps.value, d.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (i === be.current) {
        if (d = i.alternate, d === null) throw Error(c(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(xi) : e = [xi]);
      }
      i = i.return;
    }
    e !== null && vo(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function fr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!zt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ca(e) {
    Na = e, Sn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ht(e) {
    return zd(Na, e);
  }
  function mr(e, t) {
    return Na === null && Ca(e), zd(e, t);
  }
  function zd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Sn === null) {
      if (e === null) throw Error(c(308));
      Sn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Sn = Sn.next = t;
    return n;
  }
  var wy = typeof AbortController < "u" ? AbortController : function() {
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
  }, Sy = r.unstable_scheduleCallback, xy = r.unstable_NormalPriority, lt = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Eo() {
    return {
      controller: new wy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $l(e) {
    e.refCount--, e.refCount === 0 && Sy(xy, function() {
      e.controller.abort();
    });
  }
  var Wl = null, wo = 0, ll = 0, il = null;
  function Ry(e, t) {
    if (Wl === null) {
      var n = Wl = [];
      wo = 0, ll = Ru(), il = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return wo++, t.then(Hd, Hd), t;
  }
  function Hd() {
    if (--wo === 0 && Wl !== null) {
      il !== null && (il.status = "fulfilled");
      var e = Wl;
      Wl = null, ll = 0, il = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ty(e, t) {
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
  var Bd = z.S;
  z.S = function(e, t) {
    Sm = Ye(), typeof t == "object" && t !== null && typeof t.then == "function" && Ry(e, t), Bd !== null && Bd(e, t);
  };
  var Aa = x(null);
  function So() {
    var e = Aa.current;
    return e !== null ? e : qe.pooledCache;
  }
  function hr(e, t) {
    t === null ? X(Aa, Aa.current) : X(Aa, t.pool);
  }
  function kd() {
    var e = So();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var rl = Error(c(460)), xo = Error(c(474)), gr = Error(c(542)), yr = { then: function() {
  } };
  function qd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Gd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bn, bn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Kd(e), e;
      default:
        if (typeof t.status == "string") t.then(bn, bn);
        else {
          if (e = qe, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Kd(e), e;
        }
        throw Oa = t, rl;
    }
  }
  function _a(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Oa = n, rl) : n;
    }
  }
  var Oa = null;
  function Yd() {
    if (Oa === null) throw Error(c(459));
    var e = Oa;
    return Oa = null, e;
  }
  function Kd(e) {
    if (e === rl || e === gr)
      throw Error(c(483));
  }
  var sl = null, Pl = 0;
  function pr(e) {
    var t = Pl;
    return Pl += 1, sl === null && (sl = []), Gd(sl, e, t);
  }
  function ei(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function br(e, t) {
    throw t.$$typeof === q ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Vd(e) {
    function t(N, R) {
      if (e) {
        var A = N.deletions;
        A === null ? (N.deletions = [R], N.flags |= 16) : A.push(R);
      }
    }
    function n(N, R) {
      if (!e) return null;
      for (; R !== null; )
        t(N, R), R = R.sibling;
      return null;
    }
    function a(N) {
      for (var R = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? R.set(N.key, N) : R.set(N.index, N), N = N.sibling;
      return R;
    }
    function i(N, R) {
      return N = En(N, R), N.index = 0, N.sibling = null, N;
    }
    function s(N, R, A) {
      return N.index = A, e ? (A = N.alternate, A !== null ? (A = A.index, A < R ? (N.flags |= 67108866, R) : A) : (N.flags |= 67108866, R)) : (N.flags |= 1048576, R);
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function g(N, R, A, k) {
      return R === null || R.tag !== 6 ? (R = co(A, N.mode, k), R.return = N, R) : (R = i(R, A), R.return = N, R);
    }
    function w(N, R, A, k) {
      var te = A.type;
      return te === O ? H(
        N,
        R,
        A.props.children,
        k,
        A.key
      ) : R !== null && (R.elementType === te || typeof te == "object" && te !== null && te.$$typeof === se && _a(te) === R.type) ? (R = i(R, A.props), ei(R, A), R.return = N, R) : (R = cr(
        A.type,
        A.key,
        A.props,
        null,
        N.mode,
        k
      ), ei(R, A), R.return = N, R);
    }
    function _(N, R, A, k) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== A.containerInfo || R.stateNode.implementation !== A.implementation ? (R = fo(A, N.mode, k), R.return = N, R) : (R = i(R, A.children || []), R.return = N, R);
    }
    function H(N, R, A, k, te) {
      return R === null || R.tag !== 7 ? (R = Ra(
        A,
        N.mode,
        k,
        te
      ), R.return = N, R) : (R = i(R, A), R.return = N, R);
    }
    function G(N, R, A) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = co(
          "" + R,
          N.mode,
          A
        ), R.return = N, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case T:
            return A = cr(
              R.type,
              R.key,
              R.props,
              null,
              N.mode,
              A
            ), ei(A, R), A.return = N, A;
          case L:
            return R = fo(
              R,
              N.mode,
              A
            ), R.return = N, R;
          case se:
            return R = _a(R), G(N, R, A);
        }
        if (M(R) || Me(R))
          return R = Ra(
            R,
            N.mode,
            A,
            null
          ), R.return = N, R;
        if (typeof R.then == "function")
          return G(N, pr(R), A);
        if (R.$$typeof === P)
          return G(
            N,
            mr(N, R),
            A
          );
        br(N, R);
      }
      return null;
    }
    function j(N, R, A, k) {
      var te = R !== null ? R.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return te !== null ? null : g(N, R, "" + A, k);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            return A.key === te ? w(N, R, A, k) : null;
          case L:
            return A.key === te ? _(N, R, A, k) : null;
          case se:
            return A = _a(A), j(N, R, A, k);
        }
        if (M(A) || Me(A))
          return te !== null ? null : H(N, R, A, k, null);
        if (typeof A.then == "function")
          return j(
            N,
            R,
            pr(A),
            k
          );
        if (A.$$typeof === P)
          return j(
            N,
            R,
            mr(N, A),
            k
          );
        br(N, A);
      }
      return null;
    }
    function U(N, R, A, k, te) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return N = N.get(A) || null, g(R, N, "" + k, te);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case T:
            return N = N.get(
              k.key === null ? A : k.key
            ) || null, w(R, N, k, te);
          case L:
            return N = N.get(
              k.key === null ? A : k.key
            ) || null, _(R, N, k, te);
          case se:
            return k = _a(k), U(
              N,
              R,
              A,
              k,
              te
            );
        }
        if (M(k) || Me(k))
          return N = N.get(A) || null, H(R, N, k, te, null);
        if (typeof k.then == "function")
          return U(
            N,
            R,
            A,
            pr(k),
            te
          );
        if (k.$$typeof === P)
          return U(
            N,
            R,
            A,
            mr(R, k),
            te
          );
        br(R, k);
      }
      return null;
    }
    function I(N, R, A, k) {
      for (var te = null, Ce = null, W = R, ge = R = 0, xe = null; W !== null && ge < A.length; ge++) {
        W.index > ge ? (xe = W, W = null) : xe = W.sibling;
        var Ae = j(
          N,
          W,
          A[ge],
          k
        );
        if (Ae === null) {
          W === null && (W = xe);
          break;
        }
        e && W && Ae.alternate === null && t(N, W), R = s(Ae, R, ge), Ce === null ? te = Ae : Ce.sibling = Ae, Ce = Ae, W = xe;
      }
      if (ge === A.length)
        return n(N, W), Te && wn(N, ge), te;
      if (W === null) {
        for (; ge < A.length; ge++)
          W = G(N, A[ge], k), W !== null && (R = s(
            W,
            R,
            ge
          ), Ce === null ? te = W : Ce.sibling = W, Ce = W);
        return Te && wn(N, ge), te;
      }
      for (W = a(W); ge < A.length; ge++)
        xe = U(
          W,
          N,
          ge,
          A[ge],
          k
        ), xe !== null && (e && xe.alternate !== null && W.delete(
          xe.key === null ? ge : xe.key
        ), R = s(
          xe,
          R,
          ge
        ), Ce === null ? te = xe : Ce.sibling = xe, Ce = xe);
      return e && W.forEach(function(fa) {
        return t(N, fa);
      }), Te && wn(N, ge), te;
    }
    function ae(N, R, A, k) {
      if (A == null) throw Error(c(151));
      for (var te = null, Ce = null, W = R, ge = R = 0, xe = null, Ae = A.next(); W !== null && !Ae.done; ge++, Ae = A.next()) {
        W.index > ge ? (xe = W, W = null) : xe = W.sibling;
        var fa = j(N, W, Ae.value, k);
        if (fa === null) {
          W === null && (W = xe);
          break;
        }
        e && W && fa.alternate === null && t(N, W), R = s(fa, R, ge), Ce === null ? te = fa : Ce.sibling = fa, Ce = fa, W = xe;
      }
      if (Ae.done)
        return n(N, W), Te && wn(N, ge), te;
      if (W === null) {
        for (; !Ae.done; ge++, Ae = A.next())
          Ae = G(N, Ae.value, k), Ae !== null && (R = s(Ae, R, ge), Ce === null ? te = Ae : Ce.sibling = Ae, Ce = Ae);
        return Te && wn(N, ge), te;
      }
      for (W = a(W); !Ae.done; ge++, Ae = A.next())
        Ae = U(W, N, ge, Ae.value, k), Ae !== null && (e && Ae.alternate !== null && W.delete(Ae.key === null ? ge : Ae.key), R = s(Ae, R, ge), Ce === null ? te = Ae : Ce.sibling = Ae, Ce = Ae);
      return e && W.forEach(function(zp) {
        return t(N, zp);
      }), Te && wn(N, ge), te;
    }
    function He(N, R, A, k) {
      if (typeof A == "object" && A !== null && A.type === O && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            e: {
              for (var te = A.key; R !== null; ) {
                if (R.key === te) {
                  if (te = A.type, te === O) {
                    if (R.tag === 7) {
                      n(
                        N,
                        R.sibling
                      ), k = i(
                        R,
                        A.props.children
                      ), k.return = N, N = k;
                      break e;
                    }
                  } else if (R.elementType === te || typeof te == "object" && te !== null && te.$$typeof === se && _a(te) === R.type) {
                    n(
                      N,
                      R.sibling
                    ), k = i(R, A.props), ei(k, A), k.return = N, N = k;
                    break e;
                  }
                  n(N, R);
                  break;
                } else t(N, R);
                R = R.sibling;
              }
              A.type === O ? (k = Ra(
                A.props.children,
                N.mode,
                k,
                A.key
              ), k.return = N, N = k) : (k = cr(
                A.type,
                A.key,
                A.props,
                null,
                N.mode,
                k
              ), ei(k, A), k.return = N, N = k);
            }
            return d(N);
          case L:
            e: {
              for (te = A.key; R !== null; ) {
                if (R.key === te)
                  if (R.tag === 4 && R.stateNode.containerInfo === A.containerInfo && R.stateNode.implementation === A.implementation) {
                    n(
                      N,
                      R.sibling
                    ), k = i(R, A.children || []), k.return = N, N = k;
                    break e;
                  } else {
                    n(N, R);
                    break;
                  }
                else t(N, R);
                R = R.sibling;
              }
              k = fo(A, N.mode, k), k.return = N, N = k;
            }
            return d(N);
          case se:
            return A = _a(A), He(
              N,
              R,
              A,
              k
            );
        }
        if (M(A))
          return I(
            N,
            R,
            A,
            k
          );
        if (Me(A)) {
          if (te = Me(A), typeof te != "function") throw Error(c(150));
          return A = te.call(A), ae(
            N,
            R,
            A,
            k
          );
        }
        if (typeof A.then == "function")
          return He(
            N,
            R,
            pr(A),
            k
          );
        if (A.$$typeof === P)
          return He(
            N,
            R,
            mr(N, A),
            k
          );
        br(N, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, R !== null && R.tag === 6 ? (n(N, R.sibling), k = i(R, A), k.return = N, N = k) : (n(N, R), k = co(A, N.mode, k), k.return = N, N = k), d(N)) : n(N, R);
    }
    return function(N, R, A, k) {
      try {
        Pl = 0;
        var te = He(
          N,
          R,
          A,
          k
        );
        return sl = null, te;
      } catch (W) {
        if (W === rl || W === gr) throw W;
        var Ce = Ht(29, W, null, N.mode);
        return Ce.lanes = k, Ce.return = N, Ce;
      }
    };
  }
  var ja = Vd(!0), Xd = Vd(!1), Jn = !1;
  function Ro(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function To(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function In(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function $n(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Oe & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = ur(e), Ad(e, null, n), t;
    }
    return or(e, a, t, n), ur(e);
  }
  function ti(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, zc(e, n);
    }
  }
  function No(e, t) {
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
  var Co = !1;
  function ni() {
    if (Co) {
      var e = il;
      if (e !== null) throw e;
    }
  }
  function ai(e, t, n, a) {
    Co = !1;
    var i = e.updateQueue;
    Jn = !1;
    var s = i.firstBaseUpdate, d = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var w = g, _ = w.next;
      w.next = null, d === null ? s = _ : d.next = _, d = w;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, g = H.lastBaseUpdate, g !== d && (g === null ? H.firstBaseUpdate = _ : g.next = _, H.lastBaseUpdate = w));
    }
    if (s !== null) {
      var G = i.baseState;
      d = 0, H = _ = w = null, g = s;
      do {
        var j = g.lane & -536870913, U = j !== g.lane;
        if (U ? (Se & j) === j : (a & j) === j) {
          j !== 0 && j === ll && (Co = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var I = e, ae = g;
            j = t;
            var He = n;
            switch (ae.tag) {
              case 1:
                if (I = ae.payload, typeof I == "function") {
                  G = I.call(He, G, j);
                  break e;
                }
                G = I;
                break e;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = ae.payload, j = typeof I == "function" ? I.call(He, G, j) : I, j == null) break e;
                G = C({}, G, j);
                break e;
              case 2:
                Jn = !0;
            }
          }
          j = g.callback, j !== null && (e.flags |= 64, U && (e.flags |= 8192), U = i.callbacks, U === null ? i.callbacks = [j] : U.push(j));
        } else
          U = {
            lane: j,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, H === null ? (_ = H = U, w = G) : H = H.next = U, d |= j;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null)
            break;
          U = g, g = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      H === null && (w = G), i.baseState = w, i.firstBaseUpdate = _, i.lastBaseUpdate = H, s === null && (i.shared.lanes = 0), na |= d, e.lanes = d, e.memoizedState = G;
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
  var ol = x(null), vr = x(0);
  function Fd(e, t) {
    e = Dn, X(vr, e), X(ol, t), Dn = e | t.baseLanes;
  }
  function Ao() {
    X(vr, Dn), X(ol, ol.current);
  }
  function _o() {
    Dn = vr.current, B(ol), B(vr);
  }
  var Bt = x(null), It = null;
  function Wn(e) {
    var t = e.alternate;
    X(nt, nt.current & 1), X(Bt, e), It === null && (t === null || ol.current !== null || t.memoizedState !== null) && (It = e);
  }
  function Oo(e) {
    X(nt, nt.current), X(Bt, e), It === null && (It = e);
  }
  function Jd(e) {
    e.tag === 22 ? (X(nt, nt.current), X(Bt, e), It === null && (It = e)) : Pn();
  }
  function Pn() {
    X(nt, nt.current), X(Bt, Bt.current);
  }
  function kt(e) {
    B(Bt), It === e && (It = null), B(nt);
  }
  var nt = x(0);
  function Er(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || zu(n) || Hu(n)))
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
  var Rn = 0, me = null, Le = null, it = null, wr = !1, ul = !1, Da = !1, Sr = 0, li = 0, cl = null, Ny = 0;
  function $e() {
    throw Error(c(321));
  }
  function jo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function Do(e, t, n, a, i, s) {
    return Rn = s, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? Uf : Zo, Da = !1, s = n(a, i), Da = !1, ul && (s = $d(
      t,
      n,
      a,
      i
    )), Id(e), s;
  }
  function Id(e) {
    z.H = si;
    var t = Le !== null && Le.next !== null;
    if (Rn = 0, it = Le = me = null, wr = !1, li = 0, cl = null, t) throw Error(c(300));
    e === null || rt || (e = e.dependencies, e !== null && fr(e) && (rt = !0));
  }
  function $d(e, t, n, a) {
    me = e;
    var i = 0;
    do {
      if (ul && (cl = null), li = 0, ul = !1, 25 <= i) throw Error(c(301));
      if (i += 1, it = Le = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      z.H = Mf, s = t(n, a);
    } while (ul);
    return s;
  }
  function Cy() {
    var e = z.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ii(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (me.flags |= 1024), t;
  }
  function Uo() {
    var e = Sr !== 0;
    return Sr = 0, e;
  }
  function Mo(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Lo(e) {
    if (wr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      wr = !1;
    }
    Rn = 0, it = Le = me = null, ul = !1, li = Sr = 0, cl = null;
  }
  function Et() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? me.memoizedState = it = e : it = it.next = e, it;
  }
  function at() {
    if (Le === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = it === null ? me.memoizedState : it.next;
    if (t !== null)
      it = t, Le = e;
    else {
      if (e === null)
        throw me.alternate === null ? Error(c(467)) : Error(c(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, it === null ? me.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function xr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ii(e) {
    var t = li;
    return li += 1, cl === null && (cl = []), e = Gd(cl, e, t), t = me, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Uf : Zo), e;
  }
  function Rr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ii(e);
      if (e.$$typeof === P) return ht(e);
    }
    throw Error(c(438, String(e)));
  }
  function zo(e) {
    var t = null, n = me.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = me.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = xr(), me.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Je;
    return t.index++, n;
  }
  function Tn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Tr(e) {
    var t = at();
    return Ho(t, Le, e);
  }
  function Ho(e, t, n) {
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
      var g = d = null, w = null, _ = t, H = !1;
      do {
        var G = _.lane & -536870913;
        if (G !== _.lane ? (Se & G) === G : (Rn & G) === G) {
          var j = _.revertLane;
          if (j === 0)
            w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), G === ll && (H = !0);
          else if ((Rn & j) === j) {
            _ = _.next, j === ll && (H = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, w === null ? (g = w = G, d = s) : w = w.next = G, me.lanes |= j, na |= j;
          G = _.action, Da && n(s, G), s = _.hasEagerState ? _.eagerState : n(s, G);
        } else
          j = {
            lane: G,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, w === null ? (g = w = j, d = s) : w = w.next = j, me.lanes |= G, na |= G;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (w === null ? d = s : w.next = g, !zt(s, e.memoizedState) && (rt = !0, H && (n = il, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = d, e.baseQueue = w, a.lastRenderedState = s;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Bo(e) {
    var t = at(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = i = i.next;
      do
        s = e(s, d.action), d = d.next;
      while (d !== i);
      zt(s, t.memoizedState) || (rt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, a];
  }
  function Wd(e, t, n) {
    var a = me, i = at(), s = Te;
    if (s) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var d = !zt(
      (Le || i).memoizedState,
      n
    );
    if (d && (i.memoizedState = n, rt = !0), i = i.queue, Go(tf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || d || it !== null && it.memoizedState.tag & 1) {
      if (a.flags |= 2048, dl(
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
      ), qe === null) throw Error(c(349));
      s || (Rn & 127) !== 0 || Pd(a, t, n);
    }
    return n;
  }
  function Pd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = xr(), me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function af(e) {
    var t = xa(e, 2);
    t !== null && At(t, e, 2);
  }
  function ko(e) {
    var t = Et();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Da) {
        Yn(!0);
        try {
          n();
        } finally {
          Yn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tn,
      lastRenderedState: e
    }, t;
  }
  function lf(e, t, n, a) {
    return e.baseState = n, Ho(
      e,
      Le,
      typeof a == "function" ? a : Tn
    );
  }
  function Ay(e, t, n, a, i) {
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
      z.T !== null ? n(!0) : s.isTransition = !1, a(s), n = t.pending, n === null ? (s.next = t.pending = s, rf(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function rf(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var s = z.T, d = {};
      z.T = d;
      try {
        var g = n(i, a), w = z.S;
        w !== null && w(d, g), sf(e, t, g);
      } catch (_) {
        qo(e, t, _);
      } finally {
        s !== null && d.types !== null && (s.types = d.types), z.T = s;
      }
    } else
      try {
        s = n(i, a), sf(e, t, s);
      } catch (_) {
        qo(e, t, _);
      }
  }
  function sf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        of(e, t, a);
      },
      function(a) {
        return qo(e, t, a);
      }
    ) : of(e, t, n);
  }
  function of(e, t, n) {
    t.status = "fulfilled", t.value = n, uf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, rf(e, n)));
  }
  function qo(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, uf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function uf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function cf(e, t) {
    return t;
  }
  function df(e, t) {
    if (Te) {
      var n = qe.formState;
      if (n !== null) {
        e: {
          var a = me;
          if (Te) {
            if (Ke) {
              t: {
                for (var i = Ke, s = Jt; i.nodeType !== 8; ) {
                  if (!s) {
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
                s = i.data, i = s === "F!" || s === "F" ? i : null;
              }
              if (i) {
                Ke = $t(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Zn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = Et(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cf,
      lastRenderedState: t
    }, n.queue = a, n = Of.bind(
      null,
      me,
      a
    ), a.dispatch = n, a = ko(!1), s = Qo.bind(
      null,
      me,
      !1,
      a.queue
    ), a = Et(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = Ay.bind(
      null,
      me,
      i,
      s,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function ff(e) {
    var t = at();
    return mf(t, Le, e);
  }
  function mf(e, t, n) {
    if (t = Ho(
      e,
      t,
      cf
    )[0], e = Tr(Tn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ii(t);
      } catch (d) {
        throw d === rl ? gr : d;
      }
    else a = t;
    t = at();
    var i = t.queue, s = i.dispatch;
    return n !== t.memoizedState && (me.flags |= 2048, dl(
      9,
      { destroy: void 0 },
      _y.bind(null, i, n),
      null
    )), [a, s, e];
  }
  function _y(e, t) {
    e.action = t;
  }
  function hf(e) {
    var t = at(), n = Le;
    if (n !== null)
      return mf(t, n, e);
    at(), t = t.memoizedState, n = at();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function dl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = me.updateQueue, t === null && (t = xr(), me.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function gf() {
    return at().memoizedState;
  }
  function Nr(e, t, n, a) {
    var i = Et();
    me.flags |= e, i.memoizedState = dl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Cr(e, t, n, a) {
    var i = at();
    a = a === void 0 ? null : a;
    var s = i.memoizedState.inst;
    Le !== null && a !== null && jo(a, Le.memoizedState.deps) ? i.memoizedState = dl(t, s, n, a) : (me.flags |= e, i.memoizedState = dl(
      1 | t,
      s,
      n,
      a
    ));
  }
  function yf(e, t) {
    Nr(8390656, 8, e, t);
  }
  function Go(e, t) {
    Cr(2048, 8, e, t);
  }
  function Oy(e) {
    me.flags |= 4;
    var t = me.updateQueue;
    if (t === null)
      t = xr(), me.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function pf(e) {
    var t = at().memoizedState;
    return Oy({ ref: t, nextImpl: e }), function() {
      if ((Oe & 2) !== 0) throw Error(c(440));
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
  function Yo() {
  }
  function Sf(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && jo(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function xf(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && jo(t, a[1]))
      return a[0];
    if (a = e(), Da) {
      Yn(!0);
      try {
        e();
      } finally {
        Yn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Ko(e, t, n) {
    return n === void 0 || (Rn & 1073741824) !== 0 && (Se & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Rm(), me.lanes |= e, na |= e, n);
  }
  function Rf(e, t, n, a) {
    return zt(n, t) ? n : ol.current !== null ? (e = Ko(e, n, a), zt(e, t) || (rt = !0), e) : (Rn & 42) === 0 || (Rn & 1073741824) !== 0 && (Se & 261930) === 0 ? (rt = !0, e.memoizedState = n) : (e = Rm(), me.lanes |= e, na |= e, t);
  }
  function Tf(e, t, n, a, i) {
    var s = Y.p;
    Y.p = s !== 0 && 8 > s ? s : 8;
    var d = z.T, g = {};
    z.T = g, Qo(e, !1, t, n);
    try {
      var w = i(), _ = z.S;
      if (_ !== null && _(g, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var H = Ty(
          w,
          a
        );
        ri(
          e,
          t,
          H,
          Yt(e)
        );
      } else
        ri(
          e,
          t,
          a,
          Yt(e)
        );
    } catch (G) {
      ri(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        Yt()
      );
    } finally {
      Y.p = s, d !== null && g.types !== null && (d.types = g.types), z.T = d;
    }
  }
  function jy() {
  }
  function Vo(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Nf(e).queue;
    Tf(
      e,
      i,
      t,
      ce,
      n === null ? jy : function() {
        return Cf(e), n(a);
      }
    );
  }
  function Nf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: ce
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
        lastRenderedReducer: Tn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Cf(e) {
    var t = Nf(e);
    t.next === null && (t = e.alternate.memoizedState), ri(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function Xo() {
    return ht(xi);
  }
  function Af() {
    return at().memoizedState;
  }
  function _f() {
    return at().memoizedState;
  }
  function Dy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Yt();
          e = In(n);
          var a = $n(t, e, n);
          a !== null && (At(a, t, n), ti(a, t, n)), t = { cache: Eo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Uy(e, t, n) {
    var a = Yt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ar(e) ? jf(t, n) : (n = oo(e, t, n, a), n !== null && (At(n, e, a), Df(n, t, a)));
  }
  function Of(e, t, n) {
    var a = Yt();
    ri(e, t, n, a);
  }
  function ri(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ar(e)) jf(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var d = t.lastRenderedState, g = s(d, n);
          if (i.hasEagerState = !0, i.eagerState = g, zt(g, d))
            return or(e, t, i, 0), qe === null && sr(), !1;
        } catch {
        }
      if (n = oo(e, t, i, a), n !== null)
        return At(n, e, a), Df(n, t, a), !0;
    }
    return !1;
  }
  function Qo(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ru(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ar(e)) {
      if (t) throw Error(c(479));
    } else
      t = oo(
        e,
        n,
        a,
        2
      ), t !== null && At(t, e, 2);
  }
  function Ar(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function jf(e, t) {
    ul = wr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Df(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, zc(e, n);
    }
  }
  var si = {
    readContext: ht,
    use: Rr,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e
  };
  si.useEffectEvent = $e;
  var Uf = {
    readContext: ht,
    use: Rr,
    useCallback: function(e, t) {
      return Et().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ht,
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
      var n = Et();
      t = t === void 0 ? null : t;
      var a = e();
      if (Da) {
        Yn(!0);
        try {
          e();
        } finally {
          Yn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = Et();
      if (n !== void 0) {
        var i = n(t);
        if (Da) {
          Yn(!0);
          try {
            n(t);
          } finally {
            Yn(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = Uy.bind(
        null,
        me,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = Et();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = ko(e);
      var t = e.queue, n = Of.bind(null, me, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Yo,
    useDeferredValue: function(e, t) {
      var n = Et();
      return Ko(n, e, t);
    },
    useTransition: function() {
      var e = ko(!1);
      return e = Tf.bind(
        null,
        me,
        e.queue,
        !0,
        !1
      ), Et().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = me, i = Et();
      if (Te) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), qe === null)
          throw Error(c(349));
        (Se & 127) !== 0 || Pd(a, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return i.queue = s, yf(tf.bind(null, a, s, e), [
        e
      ]), a.flags |= 2048, dl(
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
      var e = Et(), t = qe.identifierPrefix;
      if (Te) {
        var n = cn, a = un;
        n = (a & ~(1 << 32 - Lt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ny++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xo,
    useFormState: df,
    useActionState: df,
    useOptimistic: function(e) {
      var t = Et();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Qo.bind(
        null,
        me,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: zo,
    useCacheRefresh: function() {
      return Et().memoizedState = Dy.bind(
        null,
        me
      );
    },
    useEffectEvent: function(e) {
      var t = Et(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Oe & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Zo = {
    readContext: ht,
    use: Rr,
    useCallback: Sf,
    useContext: ht,
    useEffect: Go,
    useImperativeHandle: wf,
    useInsertionEffect: bf,
    useLayoutEffect: vf,
    useMemo: xf,
    useReducer: Tr,
    useRef: gf,
    useState: function() {
      return Tr(Tn);
    },
    useDebugValue: Yo,
    useDeferredValue: function(e, t) {
      var n = at();
      return Rf(
        n,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Tr(Tn)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : ii(e),
        t
      ];
    },
    useSyncExternalStore: Wd,
    useId: Af,
    useHostTransitionStatus: Xo,
    useFormState: ff,
    useActionState: ff,
    useOptimistic: function(e, t) {
      var n = at();
      return lf(n, Le, e, t);
    },
    useMemoCache: zo,
    useCacheRefresh: _f
  };
  Zo.useEffectEvent = pf;
  var Mf = {
    readContext: ht,
    use: Rr,
    useCallback: Sf,
    useContext: ht,
    useEffect: Go,
    useImperativeHandle: wf,
    useInsertionEffect: bf,
    useLayoutEffect: vf,
    useMemo: xf,
    useReducer: Bo,
    useRef: gf,
    useState: function() {
      return Bo(Tn);
    },
    useDebugValue: Yo,
    useDeferredValue: function(e, t) {
      var n = at();
      return Le === null ? Ko(n, e, t) : Rf(
        n,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bo(Tn)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : ii(e),
        t
      ];
    },
    useSyncExternalStore: Wd,
    useId: Af,
    useHostTransitionStatus: Xo,
    useFormState: hf,
    useActionState: hf,
    useOptimistic: function(e, t) {
      var n = at();
      return Le !== null ? lf(n, Le, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: zo,
    useCacheRefresh: _f
  };
  Mf.useEffectEvent = pf;
  function Fo(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Jo = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), i = In(a);
      i.payload = t, n != null && (i.callback = n), t = $n(e, i, a), t !== null && (At(t, e, a), ti(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Yt(), i = In(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = $n(e, i, a), t !== null && (At(t, e, a), ti(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Yt(), a = In(n);
      a.tag = 2, t != null && (a.callback = t), t = $n(e, a, n), t !== null && (At(t, e, n), ti(t, e, n));
    }
  };
  function Lf(e, t, n, a, i, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, s, d) : t.prototype && t.prototype.isPureReactComponent ? !Zl(n, a) || !Zl(i, s) : !0;
  }
  function zf(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
  }
  function Ua(e, t) {
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
  function Io(e, t, n) {
    return n = In(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      _r(e, t);
    }, n;
  }
  function Gf(e) {
    return e = In(e), e.tag = 3, e;
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
      qf(t, n, a), typeof i != "function" && (aa === null ? aa = /* @__PURE__ */ new Set([this]) : aa.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function My(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && al(
        t,
        n,
        i,
        !0
      ), n = Bt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return It === null ? Gr() : n.alternate === null && We === 0 && (We = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === yr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), wu(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === yr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), wu(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return wu(e, a, i), Gr(), !1;
    }
    if (Te)
      return t = Bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== go && (e = Error(c(422), { cause: a }), Il(Qt(e, n)))) : (a !== go && (t = Error(c(423), {
        cause: a
      }), Il(
        Qt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Qt(a, n), i = Io(
        e.stateNode,
        a,
        i
      ), No(e, i), We !== 4 && (We = 2)), !1;
    var s = Error(c(520), { cause: a });
    if (s = Qt(s, n), gi === null ? gi = [s] : gi.push(s), We !== 4 && (We = 2), t === null) return !0;
    a = Qt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Io(n.stateNode, a, e), No(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (aa === null || !aa.has(s))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Gf(i), Yf(
              i,
              e,
              n,
              a
            ), No(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var $o = Error(c(461)), rt = !1;
  function gt(e, t, n, a) {
    t.child = e === null ? Xd(t, null, n, a) : ja(
      t,
      e.child,
      n,
      a
    );
  }
  function Kf(e, t, n, a, i) {
    n = n.render;
    var s = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var g in a)
        g !== "ref" && (d[g] = a[g]);
    } else d = a;
    return Ca(t), a = Do(
      e,
      t,
      n,
      d,
      s,
      i
    ), g = Uo(), e !== null && !rt ? (Mo(e, t, i), Nn(e, t, i)) : (Te && g && mo(t), t.flags |= 1, gt(e, t, a, i), t.child);
  }
  function Vf(e, t, n, a, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !uo(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, Xf(
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
    if (s = e.child, !iu(e, i)) {
      var d = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Zl, n(d, a) && e.ref === t.ref)
        return Nn(e, t, i);
    }
    return t.flags |= 1, e = En(s, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Xf(e, t, n, a, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Zl(s, a) && e.ref === t.ref)
        if (rt = !1, t.pendingProps = a = s, iu(e, i))
          (e.flags & 131072) !== 0 && (rt = !0);
        else
          return t.lanes = e.lanes, Nn(e, t, i);
    }
    return Wo(
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
        ), s !== null ? Fd(t, s) : Ao(), Jd(t);
      else
        return a = t.lanes = 536870912, Zf(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          a
        );
    } else
      s !== null ? (hr(t, s.cachePool), Fd(t, s), Pn(), t.memoizedState = null) : (e !== null && hr(t, null), Ao(), Pn());
    return gt(e, t, i, n), t.child;
  }
  function oi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Zf(e, t, n, a, i) {
    var s = So();
    return s = s === null ? null : { parent: lt._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && hr(t, null), Ao(), Jd(t), e !== null && al(e, t, a, !0), t.childLanes = i, null;
  }
  function Or(e, t) {
    return t = Dr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ff(e, t, n) {
    return ja(t, e.child, null, n), e = Or(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
  }
  function Ly(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (a.mode === "hidden")
          return e = Or(t, a), t.lanes = 536870912, oi(null, e);
        if (Oo(t), (e = Ke) ? (e = rh(
          e,
          Jt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Xn !== null ? { id: un, overflow: cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Od(e), n.return = t, t.child = n, mt = t, Ke = null)) : e = null, e === null) throw Zn(t);
        return t.lanes = 536870912, null;
      }
      return Or(t, a);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if (Oo(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Ff(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (rt || al(e, t, n, !1), i = (n & e.childLanes) !== 0, rt || i) {
        if (a = qe, a !== null && (d = Hc(a, n), d !== 0 && d !== s.retryLane))
          throw s.retryLane = d, xa(e, d), At(a, e, d), $o;
        Gr(), t = Ff(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Ke = $t(d.nextSibling), mt = t, Te = !0, Qn = null, Jt = !1, e !== null && Ud(t, e), t = Or(t, a), t.flags |= 4096;
      return t;
    }
    return e = En(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function jr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Wo(e, t, n, a, i) {
    return Ca(t), n = Do(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = Uo(), e !== null && !rt ? (Mo(e, t, i), Nn(e, t, i)) : (Te && a && mo(t), t.flags |= 1, gt(e, t, n, i), t.child);
  }
  function Jf(e, t, n, a, i, s) {
    return Ca(t), t.updateQueue = null, n = $d(
      t,
      a,
      n,
      i
    ), Id(e), a = Uo(), e !== null && !rt ? (Mo(e, t, s), Nn(e, t, s)) : (Te && a && mo(t), t.flags |= 1, gt(e, t, n, s), t.child);
  }
  function If(e, t, n, a, i) {
    if (Ca(t), t.stateNode === null) {
      var s = Pa, d = n.contextType;
      typeof d == "object" && d !== null && (s = ht(d)), s = new n(a, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Jo, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = a, s.state = t.memoizedState, s.refs = {}, Ro(t), d = n.contextType, s.context = typeof d == "object" && d !== null ? ht(d) : Pa, s.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Fo(
        t,
        n,
        d,
        a
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (d = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), d !== s.state && Jo.enqueueReplaceState(s, s.state, null), ai(t, a, s, i), ni(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, w = Ua(n, g);
      s.props = w;
      var _ = s.context, H = n.contextType;
      d = Pa, typeof H == "object" && H !== null && (d = ht(H));
      var G = n.getDerivedStateFromProps;
      H = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, H || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || _ !== d) && zf(
        t,
        s,
        a,
        d
      ), Jn = !1;
      var j = t.memoizedState;
      s.state = j, ai(t, a, s, i), ni(), _ = t.memoizedState, g || j !== _ || Jn ? (typeof G == "function" && (Fo(
        t,
        n,
        G,
        a
      ), _ = t.memoizedState), (w = Jn || Lf(
        t,
        n,
        w,
        a,
        j,
        _,
        d
      )) ? (H || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), s.props = a, s.state = _, s.context = d, a = w) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      s = t.stateNode, To(e, t), d = t.memoizedProps, H = Ua(n, d), s.props = H, G = t.pendingProps, j = s.context, _ = n.contextType, w = Pa, typeof _ == "object" && _ !== null && (w = ht(_)), g = n.getDerivedStateFromProps, (_ = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (d !== G || j !== w) && zf(
        t,
        s,
        a,
        w
      ), Jn = !1, j = t.memoizedState, s.state = j, ai(t, a, s, i), ni();
      var U = t.memoizedState;
      d !== G || j !== U || Jn || e !== null && e.dependencies !== null && fr(e.dependencies) ? (typeof g == "function" && (Fo(
        t,
        n,
        g,
        a
      ), U = t.memoizedState), (H = Jn || Lf(
        t,
        n,
        H,
        a,
        j,
        U,
        w
      ) || e !== null && e.dependencies !== null && fr(e.dependencies)) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, U, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        a,
        U,
        w
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), s.props = a, s.state = U, s.context = w, a = H) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return s = a, jr(e, t), a = (t.flags & 128) !== 0, s || a ? (s = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && a ? (t.child = ja(
      t,
      e.child,
      null,
      i
    ), t.child = ja(
      t,
      null,
      n,
      i
    )) : gt(e, t, n, i), t.memoizedState = s.state, e = t.child) : e = Nn(
      e,
      t,
      i
    ), e;
  }
  function $f(e, t, n, a) {
    return Ta(), t.flags |= 256, gt(e, t, n, a), t.child;
  }
  var Po = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function eu(e) {
    return { baseLanes: e, cachePool: kd() };
  }
  function tu(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e;
  }
  function Wf(e, t, n) {
    var a = t.pendingProps, i = !1, s = (t.flags & 128) !== 0, d;
    if ((d = s) || (d = e !== null && e.memoizedState === null ? !1 : (nt.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (i ? Wn(t) : Pn(), (e = Ke) ? (e = rh(
          e,
          Jt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Xn !== null ? { id: un, overflow: cn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Od(e), n.return = t, t.child = n, mt = t, Ke = null)) : e = null, e === null) throw Zn(t);
        return Hu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = a.children;
      return a = a.fallback, i ? (Pn(), i = t.mode, g = Dr(
        { mode: "hidden", children: g },
        i
      ), a = Ra(
        a,
        i,
        n,
        null
      ), g.return = t, a.return = t, g.sibling = a, t.child = g, a = t.child, a.memoizedState = eu(n), a.childLanes = tu(
        e,
        d,
        n
      ), t.memoizedState = Po, oi(null, a)) : (Wn(t), nu(t, g));
    }
    var w = e.memoizedState;
    if (w !== null && (g = w.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (Wn(t), t.flags &= -257, t = au(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), g = a.fallback, i = t.mode, a = Dr(
          { mode: "visible", children: a.children },
          i
        ), g = Ra(
          g,
          i,
          n,
          null
        ), g.flags |= 2, a.return = t, g.return = t, a.sibling = g, t.child = a, ja(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = eu(n), a.childLanes = tu(
          e,
          d,
          n
        ), t.memoizedState = Po, t = oi(null, a));
      else if (Wn(t), Hu(g)) {
        if (d = g.nextSibling && g.nextSibling.dataset, d) var _ = d.dgst;
        d = _, a = Error(c(419)), a.stack = "", a.digest = d, Il({ value: a, source: null, stack: null }), t = au(
          e,
          t,
          n
        );
      } else if (rt || al(e, t, n, !1), d = (n & e.childLanes) !== 0, rt || d) {
        if (d = qe, d !== null && (a = Hc(d, n), a !== 0 && a !== w.retryLane))
          throw w.retryLane = a, xa(e, a), At(d, e, a), $o;
        zu(g) || Gr(), t = au(
          e,
          t,
          n
        );
      } else
        zu(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, Ke = $t(
          g.nextSibling
        ), mt = t, Te = !0, Qn = null, Jt = !1, e !== null && Ud(t, e), t = nu(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Pn(), g = a.fallback, i = t.mode, w = e.child, _ = w.sibling, a = En(w, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = w.subtreeFlags & 65011712, _ !== null ? g = En(
      _,
      g
    ) : (g = Ra(
      g,
      i,
      n,
      null
    ), g.flags |= 2), g.return = t, a.return = t, a.sibling = g, t.child = a, oi(null, a), a = t.child, g = e.child.memoizedState, g === null ? g = eu(n) : (i = g.cachePool, i !== null ? (w = lt._currentValue, i = i.parent !== w ? { parent: w, pool: w } : i) : i = kd(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: i
    }), a.memoizedState = g, a.childLanes = tu(
      e,
      d,
      n
    ), t.memoizedState = Po, oi(e.child, a)) : (Wn(t), n = e.child, e = n.sibling, n = En(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function nu(e, t) {
    return t = Dr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Dr(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function au(e, t, n) {
    return ja(t, e.child, null, n), e = nu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Pf(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), bo(e.return, t, n);
  }
  function lu(e, t, n, a, i, s) {
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
    var d = nt.current, g = (d & 2) !== 0;
    if (g ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, X(nt, d), gt(e, t, a, n), a = Te ? Jl : 0, !g && e !== null && (e.flags & 128) !== 0)
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
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), lu(
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
        lu(
          t,
          !0,
          n,
          null,
          s,
          a
        );
        break;
      case "together":
        lu(
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
  function Nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), na |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (al(
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
      for (e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = En(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function iu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && fr(e)));
  }
  function zy(e, t, n) {
    switch (t.tag) {
      case 3:
        _e(t, t.stateNode.containerInfo), Fn(t, lt, e.memoizedState.cache), Ta();
        break;
      case 27:
      case 5:
        yn(t);
        break;
      case 4:
        _e(t, t.stateNode.containerInfo);
        break;
      case 10:
        Fn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Oo(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Wn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Wf(e, t, n) : (Wn(t), e = Nn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Wn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (al(
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
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(nt, nt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Qf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Fn(t, lt, e.memoizedState.cache);
    }
    return Nn(e, t, n);
  }
  function tm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        rt = !0;
      else {
        if (!iu(e, n) && (t.flags & 128) === 0)
          return rt = !1, zy(
            e,
            t,
            n
          );
        rt = (e.flags & 131072) !== 0;
      }
    else
      rt = !1, Te && (t.flags & 1048576) !== 0 && Dd(t, Jl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = _a(t.elementType), t.type = e, typeof e == "function")
            uo(e) ? (a = Ua(e, a), t.tag = 1, t = If(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Wo(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === F) {
                t.tag = 11, t = Kf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === J) {
                t.tag = 14, t = Vf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Qe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wo(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = Ua(
          a,
          t.pendingProps
        ), If(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (_e(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var s = t.memoizedState;
          i = s.element, To(e, t), ai(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, Fn(t, lt, a), a !== s.cache && vo(
            t,
            [lt],
            n,
            !0
          ), ni(), a = d.element, s.isDehydrated)
            if (s = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = $f(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Qt(
                Error(c(424)),
                t
              ), Il(i), t = $f(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ke = $t(e.firstChild), mt = t, Te = !0, Qn = null, Jt = !0, n = Xd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ta(), a === i) {
              t = Nn(
                e,
                t,
                n
              );
              break e;
            }
            gt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return jr(e, t), e === null ? (n = fh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, a = Fr(
          ie.current
        ).createElement(n), a[ft] = t, a[St] = e, yt(a, n, e), ct(a), t.stateNode = a) : t.memoizedState = fh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return yn(t), e === null && Te && (a = t.stateNode = uh(
          t.type,
          t.pendingProps,
          ie.current
        ), mt = t, Jt = !0, i = Ke, sa(t.type) ? (Bu = i, Ke = $t(a.firstChild)) : Ke = i), gt(
          e,
          t,
          t.pendingProps.children,
          n
        ), jr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((i = a = Ke) && (a = fp(
          a,
          t.type,
          t.pendingProps,
          Jt
        ), a !== null ? (t.stateNode = a, mt = t, Ke = $t(a.firstChild), Jt = !1, i = !0) : i = !1), i || Zn(t)), yn(t), i = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = s.children, Uu(i, s) ? a = null : d !== null && Uu(i, d) && (t.flags |= 32), t.memoizedState !== null && (i = Do(
          e,
          t,
          Cy,
          null,
          null,
          n
        ), xi._currentValue = i), jr(e, t), gt(e, t, a, n), t.child;
      case 6:
        return e === null && Te && ((e = n = Ke) && (n = mp(
          n,
          t.pendingProps,
          Jt
        ), n !== null ? (t.stateNode = n, mt = t, Ke = null, e = !0) : e = !1), e || Zn(t)), null;
      case 13:
        return Wf(e, t, n);
      case 4:
        return _e(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ja(
          t,
          null,
          a,
          n
        ) : gt(e, t, a, n), t.child;
      case 11:
        return Kf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return gt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return gt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return gt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, Fn(t, t.type, a.value), gt(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, Ca(t), i = ht(i), a = a(i), t.flags |= 1, gt(e, t, a, n), t.child;
      case 14:
        return Vf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Xf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return em(e, t, n);
      case 31:
        return Ly(e, t, n);
      case 22:
        return Qf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ca(t), a = ht(lt), e === null ? (i = So(), i === null && (i = qe, s = Eo(), i.pooledCache = s, s.refCount++, s !== null && (i.pooledCacheLanes |= n), i = s), t.memoizedState = { parent: a, cache: i }, Ro(t), Fn(t, lt, i)) : ((e.lanes & n) !== 0 && (To(e, t), ai(t, null, null, n), ni()), i = e.memoizedState, s = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Fn(t, lt, a)) : (a = s.cache, Fn(t, lt, a), a !== i.cache && vo(
          t,
          [lt],
          n,
          !0
        ))), gt(
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
  function Cn(e) {
    e.flags |= 4;
  }
  function ru(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Am()) e.flags |= 8192;
        else
          throw Oa = yr, xo;
    } else e.flags &= -16777217;
  }
  function nm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !ph(t))
      if (Am()) e.flags |= 8192;
      else
        throw Oa = yr, xo;
  }
  function Ur(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Mc() : 536870912, e.lanes |= t, gl |= t);
  }
  function ui(e, t) {
    if (!Te)
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
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Hy(e, t, n) {
    var a = t.pendingProps;
    switch (ho(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ve(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xn(lt), $(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (nl(t) ? Cn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yo())), Ve(t), null;
      case 26:
        var i = t.type, s = t.memoizedState;
        return e === null ? (Cn(t), s !== null ? (Ve(t), nm(t, s)) : (Ve(t), ru(
          t,
          i,
          null,
          a,
          n
        ))) : s ? s !== e.memoizedState ? (Cn(t), Ve(t), nm(t, s)) : (Ve(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Cn(t), Ve(t), ru(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (wt(t), n = ie.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Cn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ve(t), null;
          }
          e = Z.current, nl(t) ? Md(t) : (e = uh(i, a, n), t.stateNode = e, Cn(t));
        }
        return Ve(t), null;
      case 5:
        if (wt(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Cn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ve(t), null;
          }
          if (s = Z.current, nl(t))
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
            s[ft] = t, s[St] = a;
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
            e: switch (yt(s, i, a), i) {
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
            a && Cn(t);
          }
        }
        return Ve(t), ru(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Cn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = ie.current, nl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = mt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Wm(e.nodeValue, n)), e || Zn(t, !0);
          } else
            e = Fr(e).createTextNode(
              a
            ), e[ft] = t, t.stateNode = e;
        }
        return Ve(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = nl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ft] = t;
            } else
              Ta(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), e = !1;
          } else
            n = yo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ve(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = nl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[ft] = t;
            } else
              Ta(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ve(t), i = !1;
          } else
            i = yo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (kt(t), t) : (kt(t), null);
        }
        return kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ur(t, t.updateQueue), Ve(t), null);
      case 4:
        return $(), e === null && Au(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return xn(t.type), Ve(t), null;
      case 19:
        if (B(nt), a = t.memoizedState, a === null) return Ve(t), null;
        if (i = (t.flags & 128) !== 0, s = a.rendering, s === null)
          if (i) ui(a, !1);
          else {
            if (We !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Er(e), s !== null) {
                  for (t.flags |= 128, ui(a, !1), e = s.updateQueue, t.updateQueue = e, Ur(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    _d(n, e), n = n.sibling;
                  return X(
                    nt,
                    nt.current & 1 | 2
                  ), Te && wn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ye() > Br && (t.flags |= 128, i = !0, ui(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Er(s), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ur(t, e), ui(a, !0), a.tail === null && a.tailMode === "hidden" && !s.alternate && !Te)
                return Ve(t), null;
            } else
              2 * Ye() - a.renderingStartTime > Br && n !== 536870912 && (t.flags |= 128, i = !0, ui(a, !1), t.lanes = 4194304);
          a.isBackwards ? (s.sibling = t.child, t.child = s) : (e = a.last, e !== null ? e.sibling = s : t.child = s, a.last = s);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ye(), e.sibling = null, n = nt.current, X(
          nt,
          i ? n & 1 | 2 : n & 1
        ), Te && wn(t, a.treeForkCount), e) : (Ve(t), null);
      case 22:
      case 23:
        return kt(t), _o(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), n = t.updateQueue, n !== null && Ur(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(Aa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), xn(lt), Ve(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function By(e, t) {
    switch (ho(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return xn(lt), $(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return wt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (kt(t), t.alternate === null)
            throw Error(c(340));
          Ta();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Ta();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(nt), null;
      case 4:
        return $(), null;
      case 10:
        return xn(t.type), null;
      case 22:
      case 23:
        return kt(t), _o(), e !== null && B(Aa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return xn(lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function am(e, t) {
    switch (ho(t), t.tag) {
      case 3:
        xn(lt), $();
        break;
      case 26:
      case 27:
      case 5:
        wt(t);
        break;
      case 4:
        $();
        break;
      case 31:
        t.memoizedState !== null && kt(t);
        break;
      case 13:
        kt(t);
        break;
      case 19:
        B(nt);
        break;
      case 10:
        xn(t.type);
        break;
      case 22:
      case 23:
        kt(t), _o(), e !== null && B(Aa);
        break;
      case 24:
        xn(lt);
    }
  }
  function ci(e, t) {
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
      Ue(t, t.return, g);
    }
  }
  function ea(e, t, n) {
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
              var w = n, _ = g;
              try {
                _();
              } catch (H) {
                Ue(
                  i,
                  w,
                  H
                );
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (H) {
      Ue(t, t.return, H);
    }
  }
  function lm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Zd(t, n);
      } catch (a) {
        Ue(e, e.return, a);
      }
    }
  }
  function im(e, t, n) {
    n.props = Ua(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ue(e, t, a);
    }
  }
  function di(e, t) {
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
  function dn(e, t) {
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
      Ue(e, e.return, i);
    }
  }
  function su(e, t, n) {
    try {
      var a = e.stateNode;
      rp(a, e.type, n, t), a[St] = t;
    } catch (i) {
      Ue(e, e.return, i);
    }
  }
  function sm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && sa(e.type) || e.tag === 4;
  }
  function ou(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bn));
    else if (a !== 4 && (a === 27 && sa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (uu(e, t, n), e = e.sibling; e !== null; )
        uu(e, t, n), e = e.sibling;
  }
  function Mr(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && sa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Mr(e, t, n), e = e.sibling; e !== null; )
        Mr(e, t, n), e = e.sibling;
  }
  function om(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      yt(t, a, n), t[ft] = e, t[St] = n;
    } catch (s) {
      Ue(e, e.return, s);
    }
  }
  var An = !1, st = !1, cu = !1, um = typeof WeakSet == "function" ? WeakSet : Set, dt = null;
  function ky(e, t) {
    if (e = e.containerInfo, ju = ts, e = Ed(e), no(e)) {
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
            var d = 0, g = -1, w = -1, _ = 0, H = 0, G = e, j = null;
            t: for (; ; ) {
              for (var U; G !== n || i !== 0 && G.nodeType !== 3 || (g = d + i), G !== s || a !== 0 && G.nodeType !== 3 || (w = d + a), G.nodeType === 3 && (d += G.nodeValue.length), (U = G.firstChild) !== null; )
                j = G, G = U;
              for (; ; ) {
                if (G === e) break t;
                if (j === n && ++_ === i && (g = d), j === s && ++H === a && (w = d), (U = G.nextSibling) !== null) break;
                G = j, j = G.parentNode;
              }
              G = U;
            }
            n = g === -1 || w === -1 ? null : { start: g, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Du = { focusedElem: e, selectionRange: n }, ts = !1, dt = t; dt !== null; )
      if (t = dt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, dt = e;
      else
        for (; dt !== null; ) {
          switch (t = dt, s = t.alternate, e = t.flags, t.tag) {
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
                  var I = Ua(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    I,
                    s
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ae) {
                  Ue(
                    n,
                    n.return,
                    ae
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Lu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lu(e);
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
            e.return = t.return, dt = e;
            break;
          }
          dt = t.return;
        }
  }
  function cm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        On(e, n), a & 4 && ci(5, n);
        break;
      case 1:
        if (On(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Ue(n, n.return, d);
            }
          else {
            var i = Ua(
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
              Ue(
                n,
                n.return,
                d
              );
            }
          }
        a & 64 && lm(n), a & 512 && di(n, n.return);
        break;
      case 3:
        if (On(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Ue(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && om(n);
      case 26:
      case 5:
        On(e, n), t === null && a & 4 && rm(n), a & 512 && di(n, n.return);
        break;
      case 12:
        On(e, n);
        break;
      case 31:
        On(e, n), a & 4 && mm(e, n);
        break;
      case 13:
        On(e, n), a & 4 && hm(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Fy.bind(
          null,
          n
        ), hp(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || An, !a) {
          t = t !== null && t.memoizedState !== null || st, i = An;
          var s = st;
          An = a, (st = t) && !s ? jn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : On(e, n), An = i, st = s;
        }
        break;
      case 30:
        break;
      default:
        On(e, n);
    }
  }
  function dm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ks(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, Rt = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; )
      fm(e, t, n), n = n.sibling;
  }
  function fm(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
      try {
        Mt.onCommitFiberUnmount(Ll, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        st || dn(n, t), _n(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        st || dn(n, t);
        var a = Ze, i = Rt;
        sa(n.type) && (Ze = n.stateNode, Rt = !1), _n(
          e,
          t,
          n
        ), Ei(n.stateNode), Ze = a, Rt = i;
        break;
      case 5:
        st || dn(n, t);
      case 6:
        if (a = Ze, i = Rt, Ze = null, _n(
          e,
          t,
          n
        ), Ze = a, Rt = i, Ze !== null)
          if (Rt)
            try {
              (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(n.stateNode);
            } catch (s) {
              Ue(
                n,
                t,
                s
              );
            }
          else
            try {
              Ze.removeChild(n.stateNode);
            } catch (s) {
              Ue(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        Ze !== null && (Rt ? (e = Ze, lh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), xl(e)) : lh(Ze, n.stateNode));
        break;
      case 4:
        a = Ze, i = Rt, Ze = n.stateNode.containerInfo, Rt = !0, _n(
          e,
          t,
          n
        ), Ze = a, Rt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ea(2, n, t), st || ea(4, n, t), _n(
          e,
          t,
          n
        );
        break;
      case 1:
        st || (dn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && im(
          n,
          t,
          a
        )), _n(
          e,
          t,
          n
        );
        break;
      case 21:
        _n(
          e,
          t,
          n
        );
        break;
      case 22:
        st = (a = st) || n.memoizedState !== null, _n(
          e,
          t,
          n
        ), st = a;
        break;
      default:
        _n(
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
        xl(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
    }
  }
  function hm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        xl(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
  }
  function qy(e) {
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
  function Lr(e, t) {
    var n = qy(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Jy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], s = e, d = t, g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (sa(g.type)) {
                Ze = g.stateNode, Rt = !1;
                break e;
              }
              break;
            case 5:
              Ze = g.stateNode, Rt = !1;
              break e;
            case 3:
            case 4:
              Ze = g.stateNode.containerInfo, Rt = !0;
              break e;
          }
          g = g.return;
        }
        if (Ze === null) throw Error(c(160));
        fm(s, d, i), Ze = null, Rt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        gm(t, e), t = t.sibling;
  }
  var an = null;
  function gm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), Nt(e), a & 4 && (ea(3, e, e.return), ci(3, e), ea(5, e, e.return));
        break;
      case 1:
        Tt(t, e), Nt(e), a & 512 && (st || n === null || dn(n, n.return)), a & 64 && An && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = an;
        if (Tt(t, e), Nt(e), a & 512 && (st || n === null || dn(n, n.return)), a & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      s = i.getElementsByTagName("title")[0], (!s || s[Bl] || s[ft] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = i.createElement(a), i.head.insertBefore(
                        s,
                        i.querySelector("head > title")
                      )), yt(s, a, n), s[ft] = e, ct(s), a = s;
                      break e;
                    case "link":
                      var d = gh(
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
                      s = i.createElement(a), yt(s, a, n), i.head.appendChild(s);
                      break;
                    case "meta":
                      if (d = gh(
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
                      s = i.createElement(a), yt(s, a, n), i.head.appendChild(s);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  s[ft] = e, ct(s), a = s;
                }
                e.stateNode = a;
              } else
                yh(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = hh(
                i,
                a,
                e.memoizedProps
              );
          else
            s !== a ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, a === null ? yh(
              i,
              e.type,
              e.stateNode
            ) : hh(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && su(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), Nt(e), a & 512 && (st || n === null || dn(n, n.return)), n !== null && a & 4 && su(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), Nt(e), a & 512 && (st || n === null || dn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Qa(i, "");
          } catch (I) {
            Ue(e, e.return, I);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, su(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (cu = !0);
        break;
      case 6:
        if (Tt(t, e), Nt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (I) {
            Ue(e, e.return, I);
          }
        }
        break;
      case 3:
        if ($r = null, i = an, an = Jr(t.containerInfo), Tt(t, e), an = i, Nt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            xl(t.containerInfo);
          } catch (I) {
            Ue(e, e.return, I);
          }
        cu && (cu = !1, ym(e));
        break;
      case 4:
        a = an, an = Jr(
          e.stateNode.containerInfo
        ), Tt(t, e), Nt(e), an = a;
        break;
      case 12:
        Tt(t, e), Nt(e);
        break;
      case 31:
        Tt(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Lr(e, a)));
        break;
      case 13:
        Tt(t, e), Nt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Hr = Ye()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Lr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var w = n !== null && n.memoizedState !== null, _ = An, H = st;
        if (An = _ || i, st = H || w, Tt(t, e), st = H, An = _, Nt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || w || An || st || Ma(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                w = n = t;
                try {
                  if (s = w.stateNode, i)
                    d = s.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = w.stateNode;
                    var G = w.memoizedProps.style, j = G != null && G.hasOwnProperty("display") ? G.display : null;
                    g.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (I) {
                  Ue(w, w.return, I);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = i ? "" : w.memoizedProps;
                } catch (I) {
                  Ue(w, w.return, I);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                w = t;
                try {
                  var U = w.stateNode;
                  i ? ih(U, !0) : ih(w.stateNode, !1);
                } catch (I) {
                  Ue(w, w.return, I);
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
        Tt(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Lr(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tt(t, e), Nt(e);
    }
  }
  function Nt(e) {
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
            var i = n.stateNode, s = ou(e);
            Mr(e, s, i);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Qa(d, ""), n.flags &= -33);
            var g = ou(e);
            Mr(e, g, d);
            break;
          case 3:
          case 4:
            var w = n.stateNode.containerInfo, _ = ou(e);
            uu(
              e,
              _,
              w
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (H) {
        Ue(e, e.return, H);
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
  function On(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        cm(e, t.alternate, t), t = t.sibling;
  }
  function Ma(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, t, t.return), Ma(t);
          break;
        case 1:
          dn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && im(
            t,
            t.return,
            n
          ), Ma(t);
          break;
        case 27:
          Ei(t.stateNode);
        case 26:
        case 5:
          dn(t, t.return), Ma(t);
          break;
        case 22:
          t.memoizedState === null && Ma(t);
          break;
        case 30:
          Ma(t);
          break;
        default:
          Ma(t);
      }
      e = e.sibling;
    }
  }
  function jn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, s = t, d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          jn(
            i,
            s,
            n
          ), ci(4, s);
          break;
        case 1:
          if (jn(
            i,
            s,
            n
          ), a = s, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              Ue(a, a.return, _);
            }
          if (a = s, i = a.updateQueue, i !== null) {
            var g = a.stateNode;
            try {
              var w = i.shared.hiddenCallbacks;
              if (w !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < w.length; i++)
                  Qd(w[i], g);
            } catch (_) {
              Ue(a, a.return, _);
            }
          }
          n && d & 64 && lm(s), di(s, s.return);
          break;
        case 27:
          om(s);
        case 26:
        case 5:
          jn(
            i,
            s,
            n
          ), n && a === null && d & 4 && rm(s), di(s, s.return);
          break;
        case 12:
          jn(
            i,
            s,
            n
          );
          break;
        case 31:
          jn(
            i,
            s,
            n
          ), n && d & 4 && mm(i, s);
          break;
        case 13:
          jn(
            i,
            s,
            n
          ), n && d & 4 && hm(i, s);
          break;
        case 22:
          s.memoizedState === null && jn(
            i,
            s,
            n
          ), di(s, s.return);
          break;
        case 30:
          break;
        default:
          jn(
            i,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function du(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && $l(n));
  }
  function fu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $l(e));
  }
  function ln(e, t, n, a) {
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
        ln(
          e,
          t,
          n,
          a
        ), i & 2048 && ci(9, t);
        break;
      case 1:
        ln(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        ln(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && $l(e)));
        break;
      case 12:
        if (i & 2048) {
          ln(
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
          } catch (w) {
            Ue(t, t.return, w);
          }
        } else
          ln(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        ln(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        ln(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, d = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? ln(
          e,
          t,
          n,
          a
        ) : fi(e, t) : s._visibility & 2 ? ln(
          e,
          t,
          n,
          a
        ) : (s._visibility |= 2, fl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && du(d, t);
        break;
      case 24:
        ln(
          e,
          t,
          n,
          a
        ), i & 2048 && fu(t.alternate, t);
        break;
      default:
        ln(
          e,
          t,
          n,
          a
        );
    }
  }
  function fl(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, d = t, g = n, w = a, _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          fl(
            s,
            d,
            g,
            w,
            i
          ), ci(8, d);
          break;
        case 23:
          break;
        case 22:
          var H = d.stateNode;
          d.memoizedState !== null ? H._visibility & 2 ? fl(
            s,
            d,
            g,
            w,
            i
          ) : fi(
            s,
            d
          ) : (H._visibility |= 2, fl(
            s,
            d,
            g,
            w,
            i
          )), i && _ & 2048 && du(
            d.alternate,
            d
          );
          break;
        case 24:
          fl(
            s,
            d,
            g,
            w,
            i
          ), i && _ & 2048 && fu(d.alternate, d);
          break;
        default:
          fl(
            s,
            d,
            g,
            w,
            i
          );
      }
      t = t.sibling;
    }
  }
  function fi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            fi(n, a), i & 2048 && du(
              a.alternate,
              a
            );
            break;
          case 24:
            fi(n, a), i & 2048 && fu(a.alternate, a);
            break;
          default:
            fi(n, a);
        }
        t = t.sibling;
      }
  }
  var mi = 8192;
  function ml(e, t, n) {
    if (e.subtreeFlags & mi)
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
        ml(
          e,
          t,
          n
        ), e.flags & mi && e.memoizedState !== null && Np(
          n,
          an,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ml(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = an;
        an = Jr(e.stateNode.containerInfo), ml(
          e,
          t,
          n
        ), an = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = mi, mi = 16777216, ml(
          e,
          t,
          n
        ), mi = a) : ml(
          e,
          t,
          n
        ));
        break;
      default:
        ml(
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
  function hi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          dt = a, wm(
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
        hi(e), e.flags & 2048 && ea(9, e, e.return);
        break;
      case 3:
        hi(e);
        break;
      case 12:
        hi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, zr(e)) : hi(e);
        break;
      default:
        hi(e);
    }
  }
  function zr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          dt = a, wm(
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
          ea(8, t, t.return), zr(t);
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
    for (; dt !== null; ) {
      var n = dt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, n, t);
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
      if (a = n.child, a !== null) a.return = n, dt = a;
      else
        e: for (n = e; dt !== null; ) {
          a = dt;
          var i = a.sibling, s = a.return;
          if (dm(a), a === n) {
            dt = null;
            break e;
          }
          if (i !== null) {
            i.return = s, dt = i;
            break e;
          }
          dt = s;
        }
    }
  }
  var Gy = {
    getCacheForType: function(e) {
      var t = ht(lt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ht(lt).controller.signal;
    }
  }, Yy = typeof WeakMap == "function" ? WeakMap : Map, Oe = 0, qe = null, Ee = null, Se = 0, De = 0, qt = null, ta = !1, hl = !1, mu = !1, Dn = 0, We = 0, na = 0, La = 0, hu = 0, Gt = 0, gl = 0, gi = null, Ct = null, gu = !1, Hr = 0, Sm = 0, Br = 1 / 0, kr = null, aa = null, ot = 0, la = null, yl = null, Un = 0, yu = 0, pu = null, xm = null, yi = 0, bu = null;
  function Yt() {
    return (Oe & 2) !== 0 && Se !== 0 ? Se & -Se : z.T !== null ? Ru() : Bc();
  }
  function Rm() {
    if (Gt === 0)
      if ((Se & 536870912) === 0 || Te) {
        var e = Zi;
        Zi <<= 1, (Zi & 3932160) === 0 && (Zi = 262144), Gt = e;
      } else Gt = 536870912;
    return e = Bt.current, e !== null && (e.flags |= 32), Gt;
  }
  function At(e, t, n) {
    (e === qe && (De === 2 || De === 9) || e.cancelPendingCommit !== null) && (pl(e, 0), ia(
      e,
      Se,
      Gt,
      !1
    )), Hl(e, n), ((Oe & 2) === 0 || e !== qe) && (e === qe && ((Oe & 2) === 0 && (La |= n), We === 4 && ia(
      e,
      Se,
      Gt,
      !1
    )), fn(e));
  }
  function Tm(e, t, n) {
    if ((Oe & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || zl(e, t), i = a ? Xy(e, t) : Eu(e, t, !0), s = a;
    do {
      if (i === 0) {
        hl && !a && ia(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !Ky(n)) {
          i = Eu(e, t, !1), s = !1;
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
              i = gi;
              var w = g.current.memoizedState.isDehydrated;
              if (w && (pl(g, d).flags |= 256), d = Eu(
                g,
                d,
                !1
              ), d !== 2) {
                if (mu && !w) {
                  g.errorRecoveryDisabledLanes |= s, La |= s, i = 4;
                  break e;
                }
                s = Ct, Ct = i, s !== null && (Ct === null ? Ct = s : Ct.push.apply(
                  Ct,
                  s
                ));
              }
              i = d;
            }
            if (s = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          pl(e, 0), ia(e, t, 0, !0);
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
              ia(
                a,
                t,
                Gt,
                !ta
              );
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = Hr + 300 - Ye(), 10 < i)) {
            if (ia(
              a,
              t,
              Gt,
              !ta
            ), Ji(a, 0, !0) !== 0) break e;
            Un = t, a.timeoutHandle = nh(
              Nm.bind(
                null,
                a,
                n,
                Ct,
                kr,
                gu,
                t,
                Gt,
                La,
                gl,
                ta,
                s,
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
            Ct,
            kr,
            gu,
            t,
            Gt,
            La,
            gl,
            ta,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    fn(e);
  }
  function Nm(e, t, n, a, i, s, d, g, w, _, H, G, j, U) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: bn
      }, bm(
        t,
        s,
        G
      );
      var I = (s & 62914560) === s ? Hr - Ye() : (s & 4194048) === s ? Sm - Ye() : 0;
      if (I = Cp(
        G,
        I
      ), I !== null) {
        Un = s, e.cancelPendingCommit = I(
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
            w,
            H,
            G,
            null,
            j,
            U
          )
        ), ia(e, s, d, !_);
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
      w
    );
  }
  function Ky(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], s = i.getSnapshot;
          i = i.value;
          try {
            if (!zt(s(), i)) return !1;
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
  function ia(e, t, n, a) {
    t &= ~hu, t &= ~La, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var s = 31 - Lt(i), d = 1 << s;
      a[s] = -1, i &= ~d;
    }
    n !== 0 && Lc(e, n, t);
  }
  function qr() {
    return (Oe & 6) === 0 ? (pi(0), !1) : !0;
  }
  function vu() {
    if (Ee !== null) {
      if (De === 0)
        var e = Ee.return;
      else
        e = Ee, Sn = Na = null, Lo(e), sl = null, Pl = 0, e = Ee;
      for (; e !== null; )
        am(e.alternate, e), e = e.return;
      Ee = null;
    }
  }
  function pl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, up(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, vu(), qe = e, Ee = n = En(e.current, null), Se = t, De = 0, qt = null, ta = !1, hl = zl(e, t), mu = !1, gl = Gt = hu = La = na = We = 0, Ct = gi = null, gu = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Lt(a), s = 1 << i;
        t |= e[i], a &= ~s;
      }
    return Dn = t, sr(), n;
  }
  function Cm(e, t) {
    me = null, z.H = si, t === rl || t === gr ? (t = Yd(), De = 3) : t === xo ? (t = Yd(), De = 4) : De = t === $o ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, qt = t, Ee === null && (We = 1, _r(
      e,
      Qt(t, e.current)
    ));
  }
  function Am() {
    var e = Bt.current;
    return e === null ? !0 : (Se & 4194048) === Se ? It === null : (Se & 62914560) === Se || (Se & 536870912) !== 0 ? e === It : !1;
  }
  function _m() {
    var e = z.H;
    return z.H = si, e === null ? si : e;
  }
  function Om() {
    var e = z.A;
    return z.A = Gy, e;
  }
  function Gr() {
    We = 4, ta || (Se & 4194048) !== Se && Bt.current !== null || (hl = !0), (na & 134217727) === 0 && (La & 134217727) === 0 || qe === null || ia(
      qe,
      Se,
      Gt,
      !1
    );
  }
  function Eu(e, t, n) {
    var a = Oe;
    Oe |= 2;
    var i = _m(), s = Om();
    (qe !== e || Se !== t) && (kr = null, pl(e, t)), t = !1;
    var d = We;
    e: do
      try {
        if (De !== 0 && Ee !== null) {
          var g = Ee, w = qt;
          switch (De) {
            case 8:
              vu(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var _ = De;
              if (De = 0, qt = null, bl(e, g, w, _), n && hl) {
                d = 0;
                break e;
              }
              break;
            default:
              _ = De, De = 0, qt = null, bl(e, g, w, _);
          }
        }
        Vy(), d = We;
        break;
      } catch (H) {
        Cm(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Sn = Na = null, Oe = a, z.H = i, z.A = s, Ee === null && (qe = null, Se = 0, sr()), d;
  }
  function Vy() {
    for (; Ee !== null; ) jm(Ee);
  }
  function Xy(e, t) {
    var n = Oe;
    Oe |= 2;
    var a = _m(), i = Om();
    qe !== e || Se !== t ? (kr = null, Br = Ye() + 500, pl(e, t)) : hl = zl(
      e,
      t
    );
    e: do
      try {
        if (De !== 0 && Ee !== null) {
          t = Ee;
          var s = qt;
          t: switch (De) {
            case 1:
              De = 0, qt = null, bl(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (qd(s)) {
                De = 0, qt = null, Dm(t);
                break;
              }
              t = function() {
                De !== 2 && De !== 9 || qe !== e || (De = 7), fn(e);
              }, s.then(t, t);
              break e;
            case 3:
              De = 7;
              break e;
            case 4:
              De = 5;
              break e;
            case 7:
              qd(s) ? (De = 0, qt = null, Dm(t)) : (De = 0, qt = null, bl(e, t, s, 7));
              break;
            case 5:
              var d = null;
              switch (Ee.tag) {
                case 26:
                  d = Ee.memoizedState;
                case 5:
                case 27:
                  var g = Ee;
                  if (d ? ph(d) : g.stateNode.complete) {
                    De = 0, qt = null;
                    var w = g.sibling;
                    if (w !== null) Ee = w;
                    else {
                      var _ = g.return;
                      _ !== null ? (Ee = _, Yr(_)) : Ee = null;
                    }
                    break t;
                  }
              }
              De = 0, qt = null, bl(e, t, s, 5);
              break;
            case 6:
              De = 0, qt = null, bl(e, t, s, 6);
              break;
            case 8:
              vu(), We = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Qy();
        break;
      } catch (H) {
        Cm(e, H);
      }
    while (!0);
    return Sn = Na = null, z.H = a, z.A = i, Oe = n, Ee !== null ? 0 : (qe = null, Se = 0, sr(), We);
  }
  function Qy() {
    for (; Ee !== null && !ee(); )
      jm(Ee);
  }
  function jm(e) {
    var t = tm(e.alternate, e, Dn);
    e.memoizedProps = e.pendingProps, t === null ? Yr(e) : Ee = t;
  }
  function Dm(e) {
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
          Se
        );
        break;
      case 11:
        t = Jf(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Se
        );
        break;
      case 5:
        Lo(t);
      default:
        am(n, t), t = Ee = _d(t, Dn), t = tm(n, t, Dn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Yr(e) : Ee = t;
  }
  function bl(e, t, n, a) {
    Sn = Na = null, Lo(t), sl = null, Pl = 0;
    var i = t.return;
    try {
      if (My(
        e,
        i,
        t,
        n,
        Se
      )) {
        We = 1, _r(
          e,
          Qt(n, e.current)
        ), Ee = null;
        return;
      }
    } catch (s) {
      if (i !== null) throw Ee = i, s;
      We = 1, _r(
        e,
        Qt(n, e.current)
      ), Ee = null;
      return;
    }
    t.flags & 32768 ? (Te || a === 1 ? e = !0 : hl || (Se & 536870912) !== 0 ? e = !1 : (ta = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Um(t, e)) : Yr(t);
  }
  function Yr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Um(
          t,
          ta
        );
        return;
      }
      e = t.return;
      var n = Hy(
        t.alternate,
        t,
        Dn
      );
      if (n !== null) {
        Ee = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function Um(e, t) {
    do {
      var n = By(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Ee = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ee = e;
        return;
      }
      Ee = e = n;
    } while (e !== null);
    We = 6, Ee = null;
  }
  function Mm(e, t, n, a, i, s, d, g, w) {
    e.cancelPendingCommit = null;
    do
      Kr();
    while (ot !== 0);
    if ((Oe & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (s = t.lanes | t.childLanes, s |= so, Tg(
        e,
        n,
        s,
        d,
        g,
        w
      ), e === qe && (Ee = qe = null, Se = 0), yl = t, la = e, Un = n, yu = s, pu = i, xm = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Iy(Xi, function() {
        return km(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, i = Y.p, Y.p = 2, d = Oe, Oe |= 4;
        try {
          ky(e, t, n);
        } finally {
          Oe = d, Y.p = i, z.T = a;
        }
      }
      ot = 1, Lm(), zm(), Hm();
    }
  }
  function Lm() {
    if (ot === 1) {
      ot = 0;
      var e = la, t = yl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = z.T, z.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Oe;
        Oe |= 4;
        try {
          gm(t, e);
          var s = Du, d = Ed(e.containerInfo), g = s.focusedElem, w = s.selectionRange;
          if (d !== g && g && g.ownerDocument && vd(
            g.ownerDocument.documentElement,
            g
          )) {
            if (w !== null && no(g)) {
              var _ = w.start, H = w.end;
              if (H === void 0 && (H = _), "selectionStart" in g)
                g.selectionStart = _, g.selectionEnd = Math.min(
                  H,
                  g.value.length
                );
              else {
                var G = g.ownerDocument || document, j = G && G.defaultView || window;
                if (j.getSelection) {
                  var U = j.getSelection(), I = g.textContent.length, ae = Math.min(w.start, I), He = w.end === void 0 ? ae : Math.min(w.end, I);
                  !U.extend && ae > He && (d = He, He = ae, ae = d);
                  var N = bd(
                    g,
                    ae
                  ), R = bd(
                    g,
                    He
                  );
                  if (N && R && (U.rangeCount !== 1 || U.anchorNode !== N.node || U.anchorOffset !== N.offset || U.focusNode !== R.node || U.focusOffset !== R.offset)) {
                    var A = G.createRange();
                    A.setStart(N.node, N.offset), U.removeAllRanges(), ae > He ? (U.addRange(A), U.extend(R.node, R.offset)) : (A.setEnd(R.node, R.offset), U.addRange(A));
                  }
                }
              }
            }
            for (G = [], U = g; U = U.parentNode; )
              U.nodeType === 1 && G.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < G.length; g++) {
              var k = G[g];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          ts = !!ju, Du = ju = null;
        } finally {
          Oe = i, Y.p = a, z.T = n;
        }
      }
      e.current = t, ot = 2;
    }
  }
  function zm() {
    if (ot === 2) {
      ot = 0;
      var e = la, t = yl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = z.T, z.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Oe;
        Oe |= 4;
        try {
          cm(e, t.alternate, t);
        } finally {
          Oe = i, Y.p = a, z.T = n;
        }
      }
      ot = 3;
    }
  }
  function Hm() {
    if (ot === 4 || ot === 3) {
      ot = 0, ye();
      var e = la, t = yl, n = Un, a = xm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, yl = la = null, Bm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (aa = null), Hs(n), t = t.stateNode, Mt && typeof Mt.onCommitFiberRoot == "function")
        try {
          Mt.onCommitFiberRoot(
            Ll,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = z.T, i = Y.p, Y.p = 2, z.T = null;
        try {
          for (var s = e.onRecoverableError, d = 0; d < a.length; d++) {
            var g = a[d];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          z.T = t, Y.p = i;
        }
      }
      (Un & 3) !== 0 && Kr(), fn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === bu ? yi++ : (yi = 0, bu = e) : yi = 0, pi(0);
    }
  }
  function Bm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, $l(t)));
  }
  function Kr() {
    return Lm(), zm(), Hm(), km();
  }
  function km() {
    if (ot !== 5) return !1;
    var e = la, t = yu;
    yu = 0;
    var n = Hs(Un), a = z.T, i = Y.p;
    try {
      Y.p = 32 > n ? 32 : n, z.T = null, n = pu, pu = null;
      var s = la, d = Un;
      if (ot = 0, yl = la = null, Un = 0, (Oe & 6) !== 0) throw Error(c(331));
      var g = Oe;
      if (Oe |= 4, Em(s.current), pm(
        s,
        s.current,
        d,
        n
      ), Oe = g, pi(0, !1), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        try {
          Mt.onPostCommitFiberRoot(Ll, s);
        } catch {
        }
      return !0;
    } finally {
      Y.p = i, z.T = a, Bm(e, t);
    }
  }
  function qm(e, t, n) {
    t = Qt(n, t), t = Io(e.stateNode, t, 2), e = $n(e, t, 2), e !== null && (Hl(e, 2), fn(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (aa === null || !aa.has(a))) {
            e = Qt(n, e), n = Gf(2), a = $n(t, n, 2), a !== null && (Yf(
              n,
              a,
              t,
              e
            ), Hl(a, 2), fn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function wu(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Yy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (mu = !0, i.add(n), e = Zy.bind(null, e, t, n), t.then(e, e));
  }
  function Zy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, qe === e && (Se & n) === n && (We === 4 || We === 3 && (Se & 62914560) === Se && 300 > Ye() - Hr ? (Oe & 2) === 0 && pl(e, 0) : hu |= n, gl === Se && (gl = 0)), fn(e);
  }
  function Gm(e, t) {
    t === 0 && (t = Mc()), e = xa(e, t), e !== null && (Hl(e, t), fn(e));
  }
  function Fy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Gm(e, n);
  }
  function Jy(e, t) {
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
  function Iy(e, t) {
    return pt(e, t);
  }
  var Vr = null, vl = null, Su = !1, Xr = !1, xu = !1, ra = 0;
  function fn(e) {
    e !== vl && e.next === null && (vl === null ? Vr = vl = e : vl = vl.next = e), Xr = !0, Su || (Su = !0, Wy());
  }
  function pi(e, t) {
    if (!xu && Xr) {
      xu = !0;
      do
        for (var n = !1, a = Vr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var d = a.suspendedLanes, g = a.pingedLanes;
              s = (1 << 31 - Lt(42 | e) + 1) - 1, s &= i & ~(d & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, Xm(a, s));
          } else
            s = Se, s = Ji(
              a,
              a === qe ? s : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (s & 3) === 0 || zl(a, s) || (n = !0, Xm(a, s));
          a = a.next;
        }
      while (n);
      xu = !1;
    }
  }
  function $y() {
    Ym();
  }
  function Ym() {
    Xr = Su = !1;
    var e = 0;
    ra !== 0 && op() && (e = ra);
    for (var t = Ye(), n = null, a = Vr; a !== null; ) {
      var i = a.next, s = Km(a, t);
      s === 0 ? (a.next = null, n === null ? Vr = i : n.next = i, i === null && (vl = n)) : (n = a, (e !== 0 || (s & 3) !== 0) && (Xr = !0)), a = i;
    }
    ot !== 0 && ot !== 5 || pi(e), ra !== 0 && (ra = 0);
  }
  function Km(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - Lt(s), g = 1 << d, w = i[d];
      w === -1 ? ((g & n) === 0 || (g & a) !== 0) && (i[d] = Rg(g, t)) : w <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = qe, n = Se, n = Ji(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (De === 2 || De === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && tt(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || zl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && tt(a), Hs(n)) {
        case 2:
        case 8:
          n = Dc;
          break;
        case 32:
          n = Xi;
          break;
        case 268435456:
          n = Uc;
          break;
        default:
          n = Xi;
      }
      return a = Vm.bind(null, e), n = pt(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && tt(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Vm(e, t) {
    if (ot !== 0 && ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Kr() && e.callbackNode !== n)
      return null;
    var a = Se;
    return a = Ji(
      e,
      e === qe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Tm(e, a, t), Km(e, Ye()), e.callbackNode != null && e.callbackNode === n ? Vm.bind(null, e) : null);
  }
  function Xm(e, t) {
    if (Kr()) return null;
    Tm(e, t, !0);
  }
  function Wy() {
    cp(function() {
      (Oe & 6) !== 0 ? pt(
        jc,
        $y
      ) : Ym();
    });
  }
  function Ru() {
    if (ra === 0) {
      var e = ll;
      e === 0 && (e = Qi, Qi <<= 1, (Qi & 261888) === 0 && (Qi = 256)), ra = e;
    }
    return ra;
  }
  function Qm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pi("" + e);
  }
  function Zm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Py(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var s = Qm(
        (i[St] || null).action
      ), d = a.submitter;
      d && (t = (t = d[St] || null) ? Qm(t.formAction) : d.getAttribute("formAction"), t !== null && (s = t, d = null));
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
                if (ra !== 0) {
                  var w = d ? Zm(i, d) : new FormData(i);
                  Vo(
                    n,
                    {
                      pending: !0,
                      data: w,
                      method: i.method,
                      action: s
                    },
                    null,
                    w
                  );
                }
              } else
                typeof s == "function" && (g.preventDefault(), w = d ? Zm(i, d) : new FormData(i), Vo(
                  n,
                  {
                    pending: !0,
                    data: w,
                    method: i.method,
                    action: s
                  },
                  s,
                  w
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var Tu = 0; Tu < ro.length; Tu++) {
    var Nu = ro[Tu], ep = Nu.toLowerCase(), tp = Nu[0].toUpperCase() + Nu.slice(1);
    nn(
      ep,
      "on" + tp
    );
  }
  nn(xd, "onAnimationEnd"), nn(Rd, "onAnimationIteration"), nn(Td, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(py, "onTransitionRun"), nn(by, "onTransitionStart"), nn(vy, "onTransitionCancel"), nn(Nd, "onTransitionEnd"), Va("onMouseEnter", ["mouseout", "mouseover"]), Va("onMouseLeave", ["mouseout", "mouseover"]), Va("onPointerEnter", ["pointerout", "pointerover"]), Va("onPointerLeave", ["pointerout", "pointerover"]), va(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), va(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), va("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), va(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), va(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), va(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), np = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi)
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
            var g = a[d], w = g.instance, _ = g.currentTarget;
            if (g = g.listener, w !== s && i.isPropagationStopped())
              break e;
            s = g, i.currentTarget = _;
            try {
              s(i);
            } catch (H) {
              rr(H);
            }
            i.currentTarget = null, s = w;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (g = a[d], w = g.instance, _ = g.currentTarget, g = g.listener, w !== s && i.isPropagationStopped())
              break e;
            s = g, i.currentTarget = _;
            try {
              s(i);
            } catch (H) {
              rr(H);
            }
            i.currentTarget = null, s = w;
          }
      }
    }
  }
  function we(e, t) {
    var n = t[Bs];
    n === void 0 && (n = t[Bs] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Jm(t, e, 2, !1), n.add(a));
  }
  function Cu(e, t, n) {
    var a = 0;
    t && (a |= 4), Jm(
      n,
      e,
      a,
      t
    );
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function Au(e) {
    if (!e[Qr]) {
      e[Qr] = !0, Gc.forEach(function(n) {
        n !== "selectionchange" && (np.has(n) || Cu(n, !1, e), Cu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qr] || (t[Qr] = !0, Cu("selectionchange", !1, t));
    }
  }
  function Jm(e, t, n, a) {
    switch (Rh(t)) {
      case 2:
        var i = Op;
        break;
      case 8:
        i = jp;
        break;
      default:
        i = Ku;
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
  function _u(e, t, n, a, i) {
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
              var w = d.tag;
              if ((w === 3 || w === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (d = Ga(g), d === null) return;
            if (w = d.tag, w === 5 || w === 6 || w === 26 || w === 27) {
              a = s = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Pc(function() {
      var _ = s, H = Xs(n), G = [];
      e: {
        var j = Cd.get(e);
        if (j !== void 0) {
          var U = ar, I = e;
          switch (e) {
            case "keypress":
              if (tr(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Jg;
              break;
            case "focusin":
              I = "focus", U = $s;
              break;
            case "focusout":
              I = "blur", U = $s;
              break;
            case "beforeblur":
            case "afterblur":
              U = $s;
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
              U = Hg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Wg;
              break;
            case xd:
            case Rd:
            case Td:
              U = qg;
              break;
            case Nd:
              U = ey;
              break;
            case "scroll":
            case "scrollend":
              U = Lg;
              break;
            case "wheel":
              U = ny;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Yg;
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
              U = ly;
          }
          var ae = (t & 4) !== 0, He = !ae && (e === "scroll" || e === "scrollend"), N = ae ? j !== null ? j + "Capture" : null : j;
          ae = [];
          for (var R = _, A; R !== null; ) {
            var k = R;
            if (A = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || A === null || N === null || (k = ql(R, N), k != null && ae.push(
              vi(R, k, A)
            )), He) break;
            R = R.return;
          }
          0 < ae.length && (j = new U(
            j,
            I,
            null,
            n,
            H
          ), G.push({ event: j, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", j && n !== Vs && (I = n.relatedTarget || n.fromElement) && (Ga(I) || I[qa]))
            break e;
          if ((U || j) && (j = H.window === H ? H : (j = H.ownerDocument) ? j.defaultView || j.parentWindow : window, U ? (I = n.relatedTarget || n.toElement, U = _, I = I ? Ga(I) : null, I !== null && (He = h(I), ae = I.tag, I !== He || ae !== 5 && ae !== 27 && ae !== 6) && (I = null)) : (U = null, I = _), U !== I)) {
            if (ae = nd, k = "onMouseLeave", N = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ae = ld, k = "onPointerLeave", N = "onPointerEnter", R = "pointer"), He = U == null ? j : kl(U), A = I == null ? j : kl(I), j = new ae(
              k,
              R + "leave",
              U,
              n,
              H
            ), j.target = He, j.relatedTarget = A, k = null, Ga(H) === _ && (ae = new ae(
              N,
              R + "enter",
              I,
              n,
              H
            ), ae.target = A, ae.relatedTarget = He, k = ae), He = k, U && I)
              t: {
                for (ae = ap, N = U, R = I, A = 0, k = N; k; k = ae(k))
                  A++;
                k = 0;
                for (var te = R; te; te = ae(te))
                  k++;
                for (; 0 < A - k; )
                  N = ae(N), A--;
                for (; 0 < k - A; )
                  R = ae(R), k--;
                for (; A--; ) {
                  if (N === R || R !== null && N === R.alternate) {
                    ae = N;
                    break t;
                  }
                  N = ae(N), R = ae(R);
                }
                ae = null;
              }
            else ae = null;
            U !== null && Im(
              G,
              j,
              U,
              ae,
              !1
            ), I !== null && He !== null && Im(
              G,
              He,
              I,
              ae,
              !0
            );
          }
        }
        e: {
          if (j = _ ? kl(_) : window, U = j.nodeName && j.nodeName.toLowerCase(), U === "select" || U === "input" && j.type === "file")
            var Ce = fd;
          else if (cd(j))
            if (md)
              Ce = hy;
            else {
              Ce = fy;
              var W = dy;
            }
          else
            U = j.nodeName, !U || U.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? _ && Ks(_.elementType) && (Ce = fd) : Ce = my;
          if (Ce && (Ce = Ce(e, _))) {
            dd(
              G,
              Ce,
              n,
              H
            );
            break e;
          }
          W && W(e, j, _), e === "focusout" && _ && j.type === "number" && _.memoizedProps.value != null && Ys(j, "number", j.value);
        }
        switch (W = _ ? kl(_) : window, e) {
          case "focusin":
            (cd(W) || W.contentEditable === "true") && (Ia = W, ao = _, Fl = null);
            break;
          case "focusout":
            Fl = ao = Ia = null;
            break;
          case "mousedown":
            lo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lo = !1, wd(G, n, H);
            break;
          case "selectionchange":
            if (yy) break;
          case "keydown":
          case "keyup":
            wd(G, n, H);
        }
        var ge;
        if (Ps)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          Ja ? od(e, n) && (xe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (xe = "onCompositionStart");
        xe && (id && n.locale !== "ko" && (Ja || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ja && (ge = ed()) : (Vn = H, Fs = "value" in Vn ? Vn.value : Vn.textContent, Ja = !0)), W = Zr(_, xe), 0 < W.length && (xe = new ad(
          xe,
          e,
          null,
          n,
          H
        ), G.push({ event: xe, listeners: W }), ge ? xe.data = ge : (ge = ud(n), ge !== null && (xe.data = ge)))), (ge = ry ? sy(e, n) : oy(e, n)) && (xe = Zr(_, "onBeforeInput"), 0 < xe.length && (W = new ad(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          H
        ), G.push({
          event: W,
          listeners: xe
        }), W.data = ge)), Py(
          G,
          e,
          _,
          n,
          H
        );
      }
      Fm(G, t);
    });
  }
  function vi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, s = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || s === null || (i = ql(e, n), i != null && a.unshift(
        vi(e, i, s)
      ), i = ql(e, t), i != null && a.push(
        vi(e, i, s)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function ap(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Im(e, t, n, a, i) {
    for (var s = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n, w = g.alternate, _ = g.stateNode;
      if (g = g.tag, w !== null && w === a) break;
      g !== 5 && g !== 26 && g !== 27 || _ === null || (w = _, i ? (_ = ql(n, s), _ != null && d.unshift(
        vi(n, _, w)
      )) : i || (_ = ql(n, s), _ != null && d.push(
        vi(n, _, w)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var lp = /\r\n?/g, ip = /\u0000|\uFFFD/g;
  function $m(e) {
    return (typeof e == "string" ? e : "" + e).replace(lp, `
`).replace(ip, "");
  }
  function Wm(e, t) {
    return t = $m(t), $m(e) === t;
  }
  function ze(e, t, n, a, i, s) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Qa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Qa(e, "" + a);
        break;
      case "className":
        $i(e, "class", a);
        break;
      case "tabIndex":
        $i(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $i(e, n, a);
        break;
      case "style":
        $c(e, a, s);
        break;
      case "data":
        if (t !== "object") {
          $i(e, "data", a);
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
          typeof s == "function" && (n === "formAction" ? (t !== "input" && ze(e, t, "name", i.name, i, null), ze(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), ze(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), ze(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (ze(e, t, "encType", i.encType, i, null), ze(e, t, "method", i.method, i, null), ze(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Pi("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = bn);
        break;
      case "onScroll":
        a != null && we("scroll", e);
        break;
      case "onScrollEnd":
        a != null && we("scrollend", e);
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
        we("beforetoggle", e), we("toggle", e), Ii(e, "popover", a);
        break;
      case "xlinkActuate":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ii(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ug.get(n) || n, Ii(e, n, a));
    }
  }
  function Ou(e, t, n, a, i, s) {
    switch (n) {
      case "style":
        $c(e, a, s);
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
        typeof a == "string" ? Qa(e, a) : (typeof a == "number" || typeof a == "bigint") && Qa(e, "" + a);
        break;
      case "onScroll":
        a != null && we("scroll", e);
        break;
      case "onScrollEnd":
        a != null && we("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = bn);
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
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), s = e[St] || null, s = s != null ? s[n] : null, typeof s == "function" && e.removeEventListener(t, s, i), typeof a == "function")) {
              typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ii(e, n, a);
          }
    }
  }
  function yt(e, t, n) {
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
        we("error", e), we("load", e);
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
                  ze(e, t, s, d, n, null);
              }
          }
        i && ze(e, t, "srcSet", n.srcSet, n, null), a && ze(e, t, "src", n.src, n, null);
        return;
      case "input":
        we("invalid", e);
        var g = s = d = i = null, w = null, _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var H = n[a];
            if (H != null)
              switch (a) {
                case "name":
                  i = H;
                  break;
                case "type":
                  d = H;
                  break;
                case "checked":
                  w = H;
                  break;
                case "defaultChecked":
                  _ = H;
                  break;
                case "value":
                  s = H;
                  break;
                case "defaultValue":
                  g = H;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(c(137, t));
                  break;
                default:
                  ze(e, t, a, H, n, null);
              }
          }
        Zc(
          e,
          s,
          g,
          w,
          _,
          d,
          i,
          !1
        );
        return;
      case "select":
        we("invalid", e), a = d = s = null;
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
                ze(e, t, i, g, n, null);
            }
        t = s, n = d, e.multiple = !!a, t != null ? Xa(e, !!a, t, !1) : n != null && Xa(e, !!a, n, !0);
        return;
      case "textarea":
        we("invalid", e), s = i = a = null;
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
                ze(e, t, d, g, n, null);
            }
        Jc(e, a, i, s);
        return;
      case "option":
        for (w in n)
          n.hasOwnProperty(w) && (a = n[w], a != null) && (w === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : ze(e, t, w, a, n, null));
        return;
      case "dialog":
        we("beforetoggle", e), we("toggle", e), we("cancel", e), we("close", e);
        break;
      case "iframe":
      case "object":
        we("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bi.length; a++)
          we(bi[a], e);
        break;
      case "image":
        we("error", e), we("load", e);
        break;
      case "details":
        we("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        we("error", e), we("load", e);
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
                ze(e, t, _, a, n, null);
            }
        return;
      default:
        if (Ks(t)) {
          for (H in n)
            n.hasOwnProperty(H) && (a = n[H], a !== void 0 && Ou(
              e,
              t,
              H,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (a = n[g], a != null && ze(e, t, g, a, n, null));
  }
  function rp(e, t, n, a) {
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
        var i = null, s = null, d = null, g = null, w = null, _ = null, H = null;
        for (U in n) {
          var G = n[U];
          if (n.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = G;
              default:
                a.hasOwnProperty(U) || ze(e, t, U, null, a, G);
            }
        }
        for (var j in a) {
          var U = a[j];
          if (G = n[j], a.hasOwnProperty(j) && (U != null || G != null))
            switch (j) {
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
                H = U;
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
                U !== G && ze(
                  e,
                  t,
                  j,
                  U,
                  a,
                  G
                );
            }
        }
        Gs(
          e,
          d,
          g,
          w,
          _,
          H,
          s,
          i
        );
        return;
      case "select":
        U = d = g = j = null;
        for (s in n)
          if (w = n[s], n.hasOwnProperty(s) && w != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                U = w;
              default:
                a.hasOwnProperty(s) || ze(
                  e,
                  t,
                  s,
                  null,
                  a,
                  w
                );
            }
        for (i in a)
          if (s = a[i], w = n[i], a.hasOwnProperty(i) && (s != null || w != null))
            switch (i) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                d = s;
              default:
                s !== w && ze(
                  e,
                  t,
                  i,
                  s,
                  a,
                  w
                );
            }
        t = g, n = d, a = U, j != null ? Xa(e, !!n, j, !1) : !!a != !!n && (t != null ? Xa(e, !!n, t, !0) : Xa(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = j = null;
        for (g in n)
          if (i = n[g], n.hasOwnProperty(g) && i != null && !a.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, g, null, a, i);
            }
        for (d in a)
          if (i = a[d], s = n[d], a.hasOwnProperty(d) && (i != null || s != null))
            switch (d) {
              case "value":
                j = i;
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
                i !== s && ze(e, t, d, i, a, s);
            }
        Fc(e, j, U);
        return;
      case "option":
        for (var I in n)
          j = n[I], n.hasOwnProperty(I) && j != null && !a.hasOwnProperty(I) && (I === "selected" ? e.selected = !1 : ze(
            e,
            t,
            I,
            null,
            a,
            j
          ));
        for (w in a)
          j = a[w], U = n[w], a.hasOwnProperty(w) && j !== U && (j != null || U != null) && (w === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : ze(
            e,
            t,
            w,
            j,
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
        for (var ae in n)
          j = n[ae], n.hasOwnProperty(ae) && j != null && !a.hasOwnProperty(ae) && ze(e, t, ae, null, a, j);
        for (_ in a)
          if (j = a[_], U = n[_], a.hasOwnProperty(_) && j !== U && (j != null || U != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(c(137, t));
                break;
              default:
                ze(
                  e,
                  t,
                  _,
                  j,
                  a,
                  U
                );
            }
        return;
      default:
        if (Ks(t)) {
          for (var He in n)
            j = n[He], n.hasOwnProperty(He) && j !== void 0 && !a.hasOwnProperty(He) && Ou(
              e,
              t,
              He,
              void 0,
              a,
              j
            );
          for (H in a)
            j = a[H], U = n[H], !a.hasOwnProperty(H) || j === U || j === void 0 && U === void 0 || Ou(
              e,
              t,
              H,
              j,
              a,
              U
            );
          return;
        }
    }
    for (var N in n)
      j = n[N], n.hasOwnProperty(N) && j != null && !a.hasOwnProperty(N) && ze(e, t, N, null, a, j);
    for (G in a)
      j = a[G], U = n[G], !a.hasOwnProperty(G) || j === U || j == null && U == null || ze(e, t, G, j, a, U);
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
  function sp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], s = i.transferSize, d = i.initiatorType, g = i.duration;
        if (s && g && Pm(d)) {
          for (d = 0, g = i.responseEnd, a += 1; a < n.length; a++) {
            var w = n[a], _ = w.startTime;
            if (_ > g) break;
            var H = w.transferSize, G = w.initiatorType;
            H && Pm(G) && (w = w.responseEnd, d += H * (w < g ? 1 : (g - _) / (w - _)));
          }
          if (--a, t += 8 * (s + d) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ju = null, Du = null;
  function Fr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function eh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function th(e, t) {
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
  function Uu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Mu = null;
  function op() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Mu ? !1 : (Mu = e, !0) : (Mu = null, !1);
  }
  var nh = typeof setTimeout == "function" ? setTimeout : void 0, up = typeof clearTimeout == "function" ? clearTimeout : void 0, ah = typeof Promise == "function" ? Promise : void 0, cp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ah < "u" ? function(e) {
    return ah.resolve(null).then(e).catch(dp);
  } : nh;
  function dp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function sa(e) {
    return e === "head";
  }
  function lh(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), xl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Ei(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Ei(n);
          for (var s = n.firstChild; s; ) {
            var d = s.nextSibling, g = s.nodeName;
            s[Bl] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = d;
          }
        } else
          n === "body" && Ei(e.ownerDocument.body);
      n = i;
    } while (n);
    xl(t);
  }
  function ih(e, t) {
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
  function Lu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lu(n), ks(n);
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
  function fp(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Bl])
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
      if (e = $t(e.nextSibling), e === null) break;
    }
    return null;
  }
  function mp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function rh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function zu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function hp(e, t) {
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
  var Bu = null;
  function sh(e) {
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
  function oh(e) {
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
  function uh(e, t, n) {
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
  function Ei(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ks(e);
  }
  var Wt = /* @__PURE__ */ new Map(), ch = /* @__PURE__ */ new Set();
  function Jr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Mn = Y.d;
  Y.d = {
    f: gp,
    r: yp,
    D: pp,
    C: bp,
    L: vp,
    m: Ep,
    X: Sp,
    S: wp,
    M: xp
  };
  function gp() {
    var e = Mn.f(), t = qr();
    return e || t;
  }
  function yp(e) {
    var t = Ya(e);
    t !== null && t.tag === 5 && t.type === "form" ? Cf(t) : Mn.r(e);
  }
  var El = typeof document > "u" ? null : document;
  function dh(e, t, n) {
    var a = El;
    if (a && typeof t == "string" && t) {
      var i = Vt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), ch.has(i) || (ch.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), yt(t, "link", e), ct(t), a.head.appendChild(t)));
    }
  }
  function pp(e) {
    Mn.D(e), dh("dns-prefetch", e, null);
  }
  function bp(e, t) {
    Mn.C(e, t), dh("preconnect", e, t);
  }
  function vp(e, t, n) {
    Mn.L(e, t, n);
    var a = El;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Vt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Vt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Vt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Vt(e) + '"]';
      var s = i;
      switch (t) {
        case "style":
          s = wl(e);
          break;
        case "script":
          s = Sl(e);
      }
      Wt.has(s) || (e = C(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Wt.set(s, e), a.querySelector(i) !== null || t === "style" && a.querySelector(wi(s)) || t === "script" && a.querySelector(Si(s)) || (t = a.createElement("link"), yt(t, "link", e), ct(t), a.head.appendChild(t)));
    }
  }
  function Ep(e, t) {
    Mn.m(e, t);
    var n = El;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Vt(a) + '"][href="' + Vt(e) + '"]', s = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Sl(e);
      }
      if (!Wt.has(s) && (e = C({ rel: "modulepreload", href: e }, t), Wt.set(s, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Si(s)))
              return;
        }
        a = n.createElement("link"), yt(a, "link", e), ct(a), n.head.appendChild(a);
      }
    }
  }
  function wp(e, t, n) {
    Mn.S(e, t, n);
    var a = El;
    if (a && e) {
      var i = Ka(a).hoistableStyles, s = wl(e);
      t = t || "default";
      var d = i.get(s);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = a.querySelector(
          wi(s)
        ))
          g.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Wt.get(s)) && ku(e, n);
          var w = d = a.createElement("link");
          ct(w), yt(w, "link", e), w._p = new Promise(function(_, H) {
            w.onload = _, w.onerror = H;
          }), w.addEventListener("load", function() {
            g.loading |= 1;
          }), w.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Ir(d, t, a);
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
  function Sp(e, t) {
    Mn.X(e, t);
    var n = El;
    if (n && e) {
      var a = Ka(n).hoistableScripts, i = Sl(e), s = a.get(i);
      s || (s = n.querySelector(Si(i)), s || (e = C({ src: e, async: !0 }, t), (t = Wt.get(i)) && qu(e, t), s = n.createElement("script"), ct(s), yt(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function xp(e, t) {
    Mn.M(e, t);
    var n = El;
    if (n && e) {
      var a = Ka(n).hoistableScripts, i = Sl(e), s = a.get(i);
      s || (s = n.querySelector(Si(i)), s || (e = C({ src: e, async: !0, type: "module" }, t), (t = Wt.get(i)) && qu(e, t), s = n.createElement("script"), ct(s), yt(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function fh(e, t, n, a) {
    var i = (i = ie.current) ? Jr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = wl(n.href), n = Ka(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = wl(n.href);
          var s = Ka(
            i
          ).hoistableStyles, d = s.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, d), (s = i.querySelector(
            wi(e)
          )) && !s._p && (d.instance = s, d.state.loading = 5), Wt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Wt.set(e, n), s || Rp(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sl(n), n = Ka(
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
  function wl(e) {
    return 'href="' + Vt(e) + '"';
  }
  function wi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function mh(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Rp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), yt(t, "link", n), ct(t), e.head.appendChild(t));
  }
  function Sl(e) {
    return '[src="' + Vt(e) + '"]';
  }
  function Si(e) {
    return "script[async]" + e;
  }
  function hh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Vt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, ct(a), a;
          var i = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ct(a), yt(a, "style", i), Ir(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = wl(n.href);
          var s = e.querySelector(
            wi(i)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, ct(s), s;
          a = mh(n), (i = Wt.get(i)) && ku(a, i), s = (e.ownerDocument || e).createElement("link"), ct(s);
          var d = s;
          return d._p = new Promise(function(g, w) {
            d.onload = g, d.onerror = w;
          }), yt(s, "link", a), t.state.loading |= 4, Ir(s, n.precedence, e), t.instance = s;
        case "script":
          return s = Sl(n.src), (i = e.querySelector(
            Si(s)
          )) ? (t.instance = i, ct(i), i) : (a = n, (i = Wt.get(s)) && (a = C({}, n), qu(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), ct(i), yt(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ir(a, n.precedence, e));
    return t.instance;
  }
  function Ir(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, s = i, d = 0; d < a.length; d++) {
      var g = a[d];
      if (g.dataset.precedence === t) s = g;
      else if (s !== i) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ku(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var $r = null;
  function gh(e, t, n) {
    if ($r === null) {
      var a = /* @__PURE__ */ new Map(), i = $r = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = $r, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var s = n[i];
      if (!(s[Bl] || s[ft] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = s.getAttribute(t) || "";
        d = e + d;
        var g = a.get(d);
        g ? g.push(s) : a.set(d, [s]);
      }
    }
    return a;
  }
  function yh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Tp(e, t, n) {
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
  function ph(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Np(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = wl(a.href), s = t.querySelector(
          wi(i)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Wr.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, ct(s);
          return;
        }
        s = t.ownerDocument || t, a = mh(a), (i = Wt.get(i)) && ku(a, i), s = s.createElement("link"), ct(s);
        var d = s;
        d._p = new Promise(function(g, w) {
          d.onload = g, d.onerror = w;
        }), yt(s, "link", a), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Wr.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Gu = 0;
  function Cp(e, t) {
    return e.stylesheets && e.count === 0 && es(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && es(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Gu === 0 && (Gu = 62500 * sp());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && es(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > Gu ? 50 : 800) + t
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Pr = /* @__PURE__ */ new Map(), t.forEach(Ap, e), Pr = null, Wr.call(e));
  }
  function Ap(e, t) {
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
  var xi = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function _p(e, t, n, a, i, s, d, g, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ls(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ls(0), this.hiddenUpdates = Ls(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = s, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function bh(e, t, n, a, i, s, d, g, w, _, H, G) {
    return e = new _p(
      e,
      t,
      n,
      d,
      w,
      _,
      H,
      G,
      g
    ), t = 1, s === !0 && (t |= 24), s = Ht(3, null, null, t), e.current = s, s.stateNode = e, t = Eo(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Ro(s), e;
  }
  function vh(e) {
    return e ? (e = Pa, e) : Pa;
  }
  function Eh(e, t, n, a, i, s) {
    i = vh(i), a.context === null ? a.context = i : a.pendingContext = i, a = In(t), a.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (a.callback = s), n = $n(e, a, t), n !== null && (At(n, e, t), ti(n, e, t));
  }
  function wh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yu(e, t) {
    wh(e, t), (e = e.alternate) && wh(e, t);
  }
  function Sh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xa(e, 67108864);
      t !== null && At(t, e, 67108864), Yu(e, 67108864);
    }
  }
  function xh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = zs(t);
      var n = xa(e, t);
      n !== null && At(n, e, t), Yu(e, t);
    }
  }
  var ts = !0;
  function Op(e, t, n, a) {
    var i = z.T;
    z.T = null;
    var s = Y.p;
    try {
      Y.p = 2, Ku(e, t, n, a);
    } finally {
      Y.p = s, z.T = i;
    }
  }
  function jp(e, t, n, a) {
    var i = z.T;
    z.T = null;
    var s = Y.p;
    try {
      Y.p = 8, Ku(e, t, n, a);
    } finally {
      Y.p = s, z.T = i;
    }
  }
  function Ku(e, t, n, a) {
    if (ts) {
      var i = Vu(a);
      if (i === null)
        _u(
          e,
          t,
          a,
          ns,
          n
        ), Th(e, a);
      else if (Up(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (Th(e, a), t & 4 && -1 < Dp.indexOf(e)) {
        for (; i !== null; ) {
          var s = Ya(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var d = ba(s.pendingLanes);
                  if (d !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var w = 1 << 31 - Lt(d);
                      g.entanglements[1] |= w, d &= ~w;
                    }
                    fn(s), (Oe & 6) === 0 && (Br = Ye() + 500, pi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = xa(s, 2), g !== null && At(g, s, 2), qr(), Yu(s, 2);
            }
          if (s = Vu(a), s === null && _u(
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
        _u(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Vu(e) {
    return e = Xs(e), Xu(e);
  }
  var ns = null;
  function Xu(e) {
    if (ns = null, e = Ga(e), e !== null) {
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
  function Rh(e) {
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
        switch (pg()) {
          case jc:
            return 2;
          case Dc:
            return 8;
          case Xi:
          case bg:
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
  var Qu = !1, oa = null, ua = null, ca = null, Ri = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map(), da = [], Dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Th(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        oa = null;
        break;
      case "dragenter":
      case "dragleave":
        ua = null;
        break;
      case "mouseover":
      case "mouseout":
        ca = null;
        break;
      case "pointerover":
      case "pointerout":
        Ri.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ti.delete(t.pointerId);
    }
  }
  function Ni(e, t, n, a, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [i]
    }, t !== null && (t = Ya(t), t !== null && Sh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Up(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return oa = Ni(
          oa,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return ua = Ni(
          ua,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return ca = Ni(
          ca,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var s = i.pointerId;
        return Ri.set(
          s,
          Ni(
            Ri.get(s) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return s = i.pointerId, Ti.set(
          s,
          Ni(
            Ti.get(s) || null,
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
  function Nh(e) {
    var t = Ga(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, kc(e.priority, function() {
              xh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, kc(e.priority, function() {
              xh(n);
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
      var n = Vu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Vs = a, n.target.dispatchEvent(a), Vs = null;
      } else
        return t = Ya(n), t !== null && Sh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ch(e, t, n) {
    as(e) && n.delete(t);
  }
  function Mp() {
    Qu = !1, oa !== null && as(oa) && (oa = null), ua !== null && as(ua) && (ua = null), ca !== null && as(ca) && (ca = null), Ri.forEach(Ch), Ti.forEach(Ch);
  }
  function ls(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qu || (Qu = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Mp
    )));
  }
  var is = null;
  function Ah(e) {
    is !== e && (is = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        is === e && (is = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Xu(a || n) === null)
              continue;
            break;
          }
          var s = Ya(n);
          s !== null && (e.splice(t, 3), t -= 3, Vo(
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
  function xl(e) {
    function t(w) {
      return ls(w, e);
    }
    oa !== null && ls(oa, e), ua !== null && ls(ua, e), ca !== null && ls(ca, e), Ri.forEach(t), Ti.forEach(t);
    for (var n = 0; n < da.length; n++) {
      var a = da[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < da.length && (n = da[0], n.blockedOn === null); )
      Nh(n), n.blockedOn === null && da.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], s = n[a + 1], d = i[St] || null;
        if (typeof s == "function")
          d || Ah(n);
        else if (d) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (i = s, d = s[St] || null)
              g = d.formAction;
            else if (Xu(i) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? n[a + 1] = g : (n.splice(a, 3), a -= 3), Ah(n);
        }
      }
  }
  function _h() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
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
  function Zu(e) {
    this._internalRoot = e;
  }
  rs.prototype.render = Zu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Yt();
    Eh(n, a, e, t, null, null);
  }, rs.prototype.unmount = Zu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Eh(e.current, 2, null, e, null, null), qr(), t[qa] = null;
    }
  };
  function rs(e) {
    this._internalRoot = e;
  }
  rs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Bc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < da.length && t !== 0 && t < da[n].priority; n++) ;
      da.splice(n, 0, e), n === 0 && Nh(e);
    }
  };
  var Oh = o.version;
  if (Oh !== "19.2.3")
    throw Error(
      c(
        527,
        Oh,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Lp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ss.isDisabled && ss.supportsFiber)
      try {
        Ll = ss.inject(
          Lp
        ), Mt = ss;
      } catch {
      }
  }
  return _i.createRoot = function(e, t) {
    if (!f(e)) throw Error(c(299));
    var n = !1, a = "", i = Hf, s = Bf, d = kf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = bh(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      i,
      s,
      d,
      _h
    ), e[qa] = t.current, Au(e), new Zu(t);
  }, _i.hydrateRoot = function(e, t, n) {
    if (!f(e)) throw Error(c(299));
    var a = !1, i = "", s = Hf, d = Bf, g = kf, w = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (w = n.formState)), t = bh(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      i,
      w,
      s,
      d,
      g,
      _h
    ), t.context = vh(null), n = t.current, a = Yt(), a = zs(a), i = In(a), i.callback = null, $n(n, i, a), n = a, t.current.lanes = n, Hl(t, n), fn(t), e[qa] = t.current, Au(e), new rs(t);
  }, _i.version = "19.2.3", _i;
}
var Qh;
function Rb() {
  if (Qh) return ec.exports;
  Qh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), ec.exports = xb(), ec.exports;
}
var Tb = Rb();
function Nb(l = {}) {
  const { nonce: r, locale: o, onScriptLoadSuccess: u, onScriptLoadError: c } = l, [f, h] = E.useState(!1), p = E.useRef(u);
  p.current = u;
  const b = E.useRef(c);
  return b.current = c, E.useEffect(() => {
    const y = document.createElement("script");
    return y.src = "https://accounts.google.com/gsi/client", o && (y.src += `?hl=${o}`), y.async = !0, y.defer = !0, y.nonce = r, y.onload = () => {
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
const K0 = E.createContext(null);
function Cb({ clientId: l, nonce: r, locale: o, onScriptLoadSuccess: u, onScriptLoadError: c, children: f }) {
  const h = Nb({
    nonce: r,
    onScriptLoadSuccess: u,
    onScriptLoadError: c,
    locale: o
  }), p = E.useMemo(() => ({
    locale: o,
    clientId: l,
    scriptLoadedSuccessfully: h
  }), [l, h]);
  return Gp.createElement(K0.Provider, { value: p }, f);
}
function Ab() {
  const l = E.useContext(K0);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function _b({ flow: l = "implicit", scope: r = "", onSuccess: o, onError: u, onNonOAuthError: c, overrideScope: f, state: h, ...p }) {
  const { clientId: b, scriptLoadedSuccessfully: y } = Ab(), v = E.useRef(), S = E.useRef(o);
  S.current = o;
  const C = E.useRef(u);
  C.current = u;
  const q = E.useRef(c);
  q.current = c, E.useEffect(() => {
    var O, K;
    if (!y)
      return;
    const V = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (K = (O = window?.google) === null || O === void 0 ? void 0 : O.accounts) === null || K === void 0 ? void 0 : K.oauth2[V]({
      client_id: b,
      scope: f ? r : `openid profile email ${r}`,
      callback: (P) => {
        var F, re;
        if (P.error)
          return (F = C.current) === null || F === void 0 ? void 0 : F.call(C, P);
        (re = S.current) === null || re === void 0 || re.call(S, P);
      },
      error_callback: (P) => {
        var F;
        (F = q.current) === null || F === void 0 || F.call(q, P);
      },
      state: h,
      ...p
    });
    v.current = Q;
  }, [b, y, l, r, h]);
  const T = E.useCallback((O) => {
    var K;
    return (K = v.current) === null || K === void 0 ? void 0 : K.requestAccessToken(O);
  }, []), L = E.useCallback(() => {
    var O;
    return (O = v.current) === null || O === void 0 ? void 0 : O.requestCode();
  }, []);
  return l === "implicit" ? T : L;
}
var le = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(le || {}), ut = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(ut || {}), Fe = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(Fe || {}), Pt = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(Pt || {}), Tc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(Tc || {}), ma = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(ma || {}), Mi = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(Mi || {});
const de = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override",
  THEME_LOADED: "theme_loaded"
}, Be = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, ys = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, ha = {
  AUTH: "/api/auth",
  GOOGLE_AUTH: "/api/auth/google",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  FORGOT_USERNAME: "/api/forgot-username",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout"
}, Ol = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, us = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Nl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Rl = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Zh = /[!@#$%^&*._-]/, Fh = /^[A-Za-z0-9!@#$%^&*._-]+$/, gn = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300,
  TOKEN_REFRESH_MAX_AGE_DAYS: 7,
  RESEND_COOLDOWN_SECONDS: 30
}, Ob = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Oi = {
  COURSES: "/courses"
}, Pe = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, zn = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, jb = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Db = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, je = {
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
}, Li = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, Xe = {
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
}, et = ({
  label: l,
  onClick: r,
  disabled: o,
  type: u = Fe.BUTTON,
  variant: c = ut.PRIMARY,
  part: f,
  className: h,
  children: p,
  ariaLabel: b,
  mainButtonStyle: y
}) => {
  const v = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-30! disabled:cursor-not-allowed!", S = {
    [ut.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [ut.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [ut.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, C = h ? `identity-widget-button ${v} ${S[c]} ${h}` : `identity-widget-button ${v} ${S[c]}`, q = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...h ? h.split(/\s+/).map((L) => L.trim()).filter((L) => L.startsWith("identity-widget-")) : []
      ].filter(Boolean)
    )
  ).join(" "), T = f || q;
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      className: C,
      onClick: r,
      disabled: o,
      type: u,
      part: T,
      "aria-label": b || (typeof l == "string" ? l : void 0),
      "aria-disabled": o,
      style: { ...y, borderStyle: "solid !important" },
      children: p || l
    }
  );
}, en = E.forwardRef((l, r) => {
  const {
    label: o,
    startIcon: u,
    endIcon: c,
    error: f,
    helperText: h,
    optional: p,
    className: b,
    options: y,
    id: v,
    ...S
  } = l, C = !!f || !!h, q = S.type === "select" || !!y, T = v || `input-${Math.random().toString(36).substr(2, 9)}`, L = `${T}-error`, O = `${T}-helper`;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${b || ""}`,
      children: [
        o && /* @__PURE__ */ m.jsxs(
          "label",
          {
            htmlFor: T,
            part: "identity-widget-input-label",
            className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
            children: [
              o,
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
              u && /* @__PURE__ */ m.jsx(
                "span",
                {
                  part: "identity-widget-input-start-icon",
                  className: "identity-widget-input-start-icon flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
                  style: { top: "50%", transform: "translateY(-50%)" },
                  "aria-hidden": !0,
                  children: u
                }
              ),
              q ? /* @__PURE__ */ m.jsx(
                "select",
                {
                  ref: r,
                  id: T,
                  part: "identity-widget-input-select",
                  "aria-label": typeof o == "string" ? o : S["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? L : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: C ? "#d64545" : "#cbd5d5",
                    ...S.style
                  },
                  ...S,
                  children: y && y.map((K) => /* @__PURE__ */ m.jsx(
                    "option",
                    {
                      part: "identity-widget-input-option",
                      className: "identity-widget-input-option",
                      value: K.value,
                      children: K.label
                    },
                    K.value
                  ))
                }
              ) : /* @__PURE__ */ m.jsx(
                "input",
                {
                  ref: r,
                  id: T,
                  part: "identity-widget-input-field",
                  "aria-label": typeof o == "string" ? o : S["aria-label"],
                  "aria-invalid": C,
                  "aria-describedby": C ? L : void 0,
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
            id: L,
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
}), Ub = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Ot = ({
  type: l,
  title: r,
  message: o,
  actionText: u,
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
            src: Ub,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, v = b(), S = () => {
    switch (l) {
      case le.ERROR:
        return ma.ALERT;
      case le.WARNING:
      case le.INFO:
        return ma.STATUS;
      case le.SUCCESS:
        return ma.STATUS;
      default:
        return ma.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: S(),
      "aria-live": l === le.ERROR ? Mi.ASSERTIVE : Mi.POLITE,
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
                        children: o
                      }
                    ),
                    u && c && /* @__PURE__ */ m.jsx(
                      "button",
                      {
                        part: "identity-widget-banner-action",
                        type: "button",
                        onClick: c,
                        "aria-label": u,
                        className: `identity-widget-banner-action text-sm! font-medium! ${v.actionColor} ${v.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! max-[500px]:whitespace-normal! shadow-none!`,
                        children: u
                      }
                    ),
                    u && !c && /* @__PURE__ */ m.jsx(
                      "span",
                      {
                        part: "identity-widget-banner-action",
                        className: `identity-widget-banner-action text-sm! font-semibold! ${v.actionColor}`,
                        children: u
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
}, fc = ({ type: l, message: r, duration: o = 5e3, onClose: u, className: c = "" }) => {
  const [f, h] = E.useState(!1), [p, b] = E.useState(!1);
  E.useEffect(() => {
    setTimeout(() => h(!0), gn.ANIMATION_ENTRANCE_DELAY);
    const T = setTimeout(() => {
      y();
    }, o);
    return () => clearTimeout(T);
  }, [o]);
  const y = () => {
    b(!0), setTimeout(() => {
      h(!1), u && u();
    }, gn.ANIMATION_EXIT_DURATION);
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
  }, S = () => {
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
  }, C = v(), q = () => {
    switch (l) {
      case le.ERROR:
        return ma.ALERT;
      case le.WARNING:
      case le.INFO:
      case le.SUCCESS:
        return ma.STATUS;
      default:
        return ma.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: q(),
      "aria-live": l === le.ERROR ? Mi.ASSERTIVE : Mi.POLITE,
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
                children: S()
              }
            ),
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-toast-content",
                className: `identity-widget-toast-content ml-3! flex-1! ${C.text}`,
                children: /* @__PURE__ */ m.jsx(
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
class Di extends Error {
}
Di.prototype.name = "InvalidTokenError";
function Mb(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, o) => {
    let u = o.charCodeAt(0).toString(16).toUpperCase();
    return u.length < 2 && (u = "0" + u), "%" + u;
  }));
}
function Lb(l) {
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
    return Mb(r);
  } catch {
    return atob(r);
  }
}
function jl(l, r) {
  if (typeof l != "string")
    throw new Di("Invalid token specified: must be a string");
  r || (r = {});
  const o = r.header === !0 ? 0 : 1, u = l.split(".")[o];
  if (typeof u != "string")
    throw new Di(`Invalid token specified: missing part #${o + 1}`);
  let c;
  try {
    c = Lb(u);
  } catch (f) {
    throw new Di(`Invalid token specified: invalid base64 for part #${o + 1} (${f.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (f) {
    throw new Di(`Invalid token specified: invalid json for part #${o + 1} (${f.message})`);
  }
}
function V0() {
  const l = window.location.hostname;
  if (l === zn.HOSTNAME || l === zn.IP || zn.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function zb() {
  const l = window.location.hostname;
  return l === zn.HOSTNAME || l === zn.IP || zn.IP_PATTERN.test(l) || l.startsWith(`${Pe.DEV}.`) || l.startsWith(`${Pe.DEV}-`) ? Pt.DEV : l.startsWith(`${Pe.TEST}.`) || l.startsWith(`${Pe.TEST}-`) ? Pt.TEST : l.startsWith(`${Pe.STAGE}.`) || l.startsWith(`${Pe.STAGE}-`) ? Pt.STAGE : Pt.PROD;
}
function ds() {
  const l = window.location.href, r = new URL(l), o = r.hostname;
  if (o.startsWith(`${Pe.DEV}.`)) {
    const u = o.replace(`${Pe.DEV}.`, `${Pe.DEV_LEARN}.`);
    return `${r.protocol}//${u}${Oi.COURSES}`;
  } else if (o.startsWith(`${Pe.TEST}.`)) {
    const u = o.replace(`${Pe.TEST}.`, `${Pe.TEST_LEARN}.`);
    return `${r.protocol}//${u}${Oi.COURSES}`;
  } else if (o.startsWith(`${Pe.STAGE}.`)) {
    const u = o.replace(`${Pe.STAGE}.`, `${Pe.STAGE_LEARN}.`);
    return `${r.protocol}//${u}${Oi.COURSES}`;
  } else if (o.split(".").length === 2) {
    const c = `${Pe.LEARN}.${o}`;
    return `${r.protocol}//${c}${Oi.COURSES}`;
  } else
    return `${r.protocol}//${o}${Oi.COURSES}`;
}
function hn(l, r, o, u = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + o);
  const f = V0(), h = f ? `; domain=${f}` : "", p = window.location.protocol === "https:" ? "; secure" : "", b = u ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${b}; expires=${c.toUTCString()}; path=/${h}${p}; SameSite=Strict`;
}
function _t(l, r = !0) {
  const o = document.cookie.split(";");
  for (const u of o) {
    const c = u.trim();
    if (c.startsWith(`${l}=`)) {
      const f = c.substring(l.length + 1);
      return r ? decodeURIComponent(f) : f;
    }
  }
  return null;
}
function fs(l) {
  const r = V0(), o = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${o}`;
}
function X0(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var Jh = {};
const { toString: Hb } = Object.prototype, { getPrototypeOf: Nc } = Object, { iterator: As, toStringTag: Q0 } = Symbol, _s = /* @__PURE__ */ ((l) => (r) => {
  const o = Hb.call(r);
  return l[o] || (l[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (l) => (l = l.toLowerCase(), (r) => _s(r) === l), Os = (l) => (r) => typeof r === l, { isArray: Dl } = Array, Cl = Os("undefined");
function qi(l) {
  return l !== null && !Cl(l) && l.constructor !== null && !Cl(l.constructor) && jt(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const Z0 = sn("ArrayBuffer");
function Bb(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Z0(l.buffer), r;
}
const kb = Os("string"), jt = Os("function"), F0 = Os("number"), Gi = (l) => l !== null && typeof l == "object", qb = (l) => l === !0 || l === !1, ps = (l) => {
  if (_s(l) !== "object")
    return !1;
  const r = Nc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Q0 in l) && !(As in l);
}, Gb = (l) => {
  if (!Gi(l) || qi(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, Yb = sn("Date"), Kb = sn("File"), Vb = sn("Blob"), Xb = sn("FileList"), Qb = (l) => Gi(l) && jt(l.pipe), Zb = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || jt(l.append) && ((r = _s(l)) === "formdata" || // detect form-data instance
  r === "object" && jt(l.toString) && l.toString() === "[object FormData]"));
}, Fb = sn("URLSearchParams"), [Jb, Ib, $b, Wb] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), Pb = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yi(l, r, { allOwnKeys: o = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let u, c;
  if (typeof l != "object" && (l = [l]), Dl(l))
    for (u = 0, c = l.length; u < c; u++)
      r.call(null, l[u], u, l);
  else {
    if (qi(l))
      return;
    const f = o ? Object.getOwnPropertyNames(l) : Object.keys(l), h = f.length;
    let p;
    for (u = 0; u < h; u++)
      p = f[u], r.call(null, l[p], p, l);
  }
}
function J0(l, r) {
  if (qi(l))
    return null;
  r = r.toLowerCase();
  const o = Object.keys(l);
  let u = o.length, c;
  for (; u-- > 0; )
    if (c = o[u], r === c.toLowerCase())
      return c;
  return null;
}
const za = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, I0 = (l) => !Cl(l) && l !== za;
function mc() {
  const { caseless: l, skipUndefined: r } = I0(this) && this || {}, o = {}, u = (c, f) => {
    const h = l && J0(o, f) || f;
    ps(o[h]) && ps(c) ? o[h] = mc(o[h], c) : ps(c) ? o[h] = mc({}, c) : Dl(c) ? o[h] = c.slice() : (!r || !Cl(c)) && (o[h] = c);
  };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && Yi(arguments[c], u);
  return o;
}
const ev = (l, r, o, { allOwnKeys: u } = {}) => (Yi(r, (c, f) => {
  o && jt(c) ? l[f] = X0(c, o) : l[f] = c;
}, { allOwnKeys: u }), l), tv = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), nv = (l, r, o, u) => {
  l.prototype = Object.create(r.prototype, u), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: r.prototype
  }), o && Object.assign(l.prototype, o);
}, av = (l, r, o, u) => {
  let c, f, h;
  const p = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), f = c.length; f-- > 0; )
      h = c[f], (!u || u(h, l, r)) && !p[h] && (r[h] = l[h], p[h] = !0);
    l = o !== !1 && Nc(l);
  } while (l && (!o || o(l, r)) && l !== Object.prototype);
  return r;
}, lv = (l, r, o) => {
  l = String(l), (o === void 0 || o > l.length) && (o = l.length), o -= r.length;
  const u = l.indexOf(r, o);
  return u !== -1 && u === o;
}, iv = (l) => {
  if (!l) return null;
  if (Dl(l)) return l;
  let r = l.length;
  if (!F0(r)) return null;
  const o = new Array(r);
  for (; r-- > 0; )
    o[r] = l[r];
  return o;
}, rv = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && Nc(Uint8Array)), sv = (l, r) => {
  const u = (l && l[As]).call(l);
  let c;
  for (; (c = u.next()) && !c.done; ) {
    const f = c.value;
    r.call(l, f[0], f[1]);
  }
}, ov = (l, r) => {
  let o;
  const u = [];
  for (; (o = l.exec(r)) !== null; )
    u.push(o);
  return u;
}, uv = sn("HTMLFormElement"), cv = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, u, c) {
    return u.toUpperCase() + c;
  }
), Ih = (({ hasOwnProperty: l }) => (r, o) => l.call(r, o))(Object.prototype), dv = sn("RegExp"), $0 = (l, r) => {
  const o = Object.getOwnPropertyDescriptors(l), u = {};
  Yi(o, (c, f) => {
    let h;
    (h = r(c, f, l)) !== !1 && (u[f] = h || c);
  }), Object.defineProperties(l, u);
}, fv = (l) => {
  $0(l, (r, o) => {
    if (jt(l) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const u = l[o];
    if (jt(u)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, mv = (l, r) => {
  const o = {}, u = (c) => {
    c.forEach((f) => {
      o[f] = !0;
    });
  };
  return Dl(l) ? u(l) : u(String(l).split(r)), o;
}, hv = () => {
}, gv = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function yv(l) {
  return !!(l && jt(l.append) && l[Q0] === "FormData" && l[As]);
}
const pv = (l) => {
  const r = new Array(10), o = (u, c) => {
    if (Gi(u)) {
      if (r.indexOf(u) >= 0)
        return;
      if (qi(u))
        return u;
      if (!("toJSON" in u)) {
        r[c] = u;
        const f = Dl(u) ? [] : {};
        return Yi(u, (h, p) => {
          const b = o(h, c + 1);
          !Cl(b) && (f[p] = b);
        }), r[c] = void 0, f;
      }
    }
    return u;
  };
  return o(l, 0);
}, bv = sn("AsyncFunction"), vv = (l) => l && (Gi(l) || jt(l)) && jt(l.then) && jt(l.catch), W0 = ((l, r) => l ? setImmediate : r ? ((o, u) => (za.addEventListener("message", ({ source: c, data: f }) => {
  c === za && f === o && u.length && u.shift()();
}, !1), (c) => {
  u.push(c), za.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  jt(za.postMessage)
), Ev = typeof queueMicrotask < "u" ? queueMicrotask.bind(za) : typeof Jh < "u" && Jh.nextTick || W0, wv = (l) => l != null && jt(l[As]), D = {
  isArray: Dl,
  isArrayBuffer: Z0,
  isBuffer: qi,
  isFormData: Zb,
  isArrayBufferView: Bb,
  isString: kb,
  isNumber: F0,
  isBoolean: qb,
  isObject: Gi,
  isPlainObject: ps,
  isEmptyObject: Gb,
  isReadableStream: Jb,
  isRequest: Ib,
  isResponse: $b,
  isHeaders: Wb,
  isUndefined: Cl,
  isDate: Yb,
  isFile: Kb,
  isBlob: Vb,
  isRegExp: dv,
  isFunction: jt,
  isStream: Qb,
  isURLSearchParams: Fb,
  isTypedArray: rv,
  isFileList: Xb,
  forEach: Yi,
  merge: mc,
  extend: ev,
  trim: Pb,
  stripBOM: tv,
  inherits: nv,
  toFlatObject: av,
  kindOf: _s,
  kindOfTest: sn,
  endsWith: lv,
  toArray: iv,
  forEachEntry: sv,
  matchAll: ov,
  isHTMLForm: uv,
  hasOwnProperty: Ih,
  hasOwnProp: Ih,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $0,
  freezeMethods: fv,
  toObjectSet: mv,
  toCamelCase: cv,
  noop: hv,
  toFiniteNumber: gv,
  findKey: J0,
  global: za,
  isContextDefined: I0,
  isSpecCompliantForm: yv,
  toJSONObject: pv,
  isAsyncFn: bv,
  isThenable: vv,
  setImmediate: W0,
  asap: Ev,
  isIterable: wv
};
function he(l, r, o, u, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), u && (this.request = u), c && (this.response = c, this.status = c.status ? c.status : null);
}
D.inherits(he, Error, {
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
const P0 = he.prototype, eg = {};
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
  eg[l] = { value: l };
});
Object.defineProperties(he, eg);
Object.defineProperty(P0, "isAxiosError", { value: !0 });
he.from = (l, r, o, u, c, f) => {
  const h = Object.create(P0);
  D.toFlatObject(l, h, function(v) {
    return v !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = l && l.message ? l.message : "Error", b = r == null && l ? l.code : r;
  return he.call(h, p, b, o, u, c), l && h.cause == null && Object.defineProperty(h, "cause", { value: l, configurable: !0 }), h.name = l && l.name || "Error", f && Object.assign(h, f), h;
};
const Sv = null;
function hc(l) {
  return D.isPlainObject(l) || D.isArray(l);
}
function tg(l) {
  return D.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function $h(l, r, o) {
  return l ? l.concat(r).map(function(c, f) {
    return c = tg(c), !o && f ? "[" + c + "]" : c;
  }).join(o ? "." : "") : r;
}
function xv(l) {
  return D.isArray(l) && !l.some(hc);
}
const Rv = D.toFlatObject(D, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function js(l, r, o) {
  if (!D.isObject(l))
    throw new TypeError("target must be an object");
  r = r || new FormData(), o = D.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, O) {
    return !D.isUndefined(O[L]);
  });
  const u = o.metaTokens, c = o.visitor || v, f = o.dots, h = o.indexes, b = (o.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(r);
  if (!D.isFunction(c))
    throw new TypeError("visitor must be a function");
  function y(T) {
    if (T === null) return "";
    if (D.isDate(T))
      return T.toISOString();
    if (D.isBoolean(T))
      return T.toString();
    if (!b && D.isBlob(T))
      throw new he("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(T) || D.isTypedArray(T) ? b && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T;
  }
  function v(T, L, O) {
    let K = T;
    if (T && !O && typeof T == "object") {
      if (D.endsWith(L, "{}"))
        L = u ? L : L.slice(0, -2), T = JSON.stringify(T);
      else if (D.isArray(T) && xv(T) || (D.isFileList(T) || D.endsWith(L, "[]")) && (K = D.toArray(T)))
        return L = tg(L), K.forEach(function(Q, P) {
          !(D.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? $h([L], P, f) : h === null ? L : L + "[]",
            y(Q)
          );
        }), !1;
    }
    return hc(T) ? !0 : (r.append($h(O, L, f), y(T)), !1);
  }
  const S = [], C = Object.assign(Rv, {
    defaultVisitor: v,
    convertValue: y,
    isVisitable: hc
  });
  function q(T, L) {
    if (!D.isUndefined(T)) {
      if (S.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      S.push(T), D.forEach(T, function(K, V) {
        (!(D.isUndefined(K) || K === null) && c.call(
          r,
          K,
          D.isString(V) ? V.trim() : V,
          L,
          C
        )) === !0 && q(K, L ? L.concat(V) : [V]);
      }), S.pop();
    }
  }
  if (!D.isObject(l))
    throw new TypeError("data must be an object");
  return q(l), r;
}
function Wh(l) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function(u) {
    return r[u];
  });
}
function Cc(l, r) {
  this._pairs = [], l && js(l, this, r);
}
const ng = Cc.prototype;
ng.append = function(r, o) {
  this._pairs.push([r, o]);
};
ng.toString = function(r) {
  const o = r ? function(u) {
    return r.call(this, u, Wh);
  } : Wh;
  return this._pairs.map(function(c) {
    return o(c[0]) + "=" + o(c[1]);
  }, "").join("&");
};
function Tv(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ag(l, r, o) {
  if (!r)
    return l;
  const u = o && o.encode || Tv;
  D.isFunction(o) && (o = {
    serialize: o
  });
  const c = o && o.serialize;
  let f;
  if (c ? f = c(r, o) : f = D.isURLSearchParams(r) ? r.toString() : new Cc(r, o).toString(u), f) {
    const h = l.indexOf("#");
    h !== -1 && (l = l.slice(0, h)), l += (l.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return l;
}
class Ph {
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
  use(r, o, u) {
    return this.handlers.push({
      fulfilled: r,
      rejected: o,
      synchronous: u ? u.synchronous : !1,
      runWhen: u ? u.runWhen : null
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
    D.forEach(this.handlers, function(u) {
      u !== null && r(u);
    });
  }
}
const lg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nv = typeof URLSearchParams < "u" ? URLSearchParams : Cc, Cv = typeof FormData < "u" ? FormData : null, Av = typeof Blob < "u" ? Blob : null, _v = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Nv,
    FormData: Cv,
    Blob: Av
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ac = typeof window < "u" && typeof document < "u", gc = typeof navigator == "object" && navigator || void 0, Ov = Ac && (!gc || ["ReactNative", "NativeScript", "NS"].indexOf(gc.product) < 0), jv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Dv = Ac && window.location.href || "http://localhost", Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ac,
  hasStandardBrowserEnv: Ov,
  hasStandardBrowserWebWorkerEnv: jv,
  navigator: gc,
  origin: Dv
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...Uv,
  ..._v
};
function Mv(l, r) {
  return js(l, new vt.classes.URLSearchParams(), {
    visitor: function(o, u, c, f) {
      return vt.isNode && D.isBuffer(o) ? (this.append(u, o.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Lv(l) {
  return D.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function zv(l) {
  const r = {}, o = Object.keys(l);
  let u;
  const c = o.length;
  let f;
  for (u = 0; u < c; u++)
    f = o[u], r[f] = l[f];
  return r;
}
function ig(l) {
  function r(o, u, c, f) {
    let h = o[f++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), b = f >= o.length;
    return h = !h && D.isArray(c) ? c.length : h, b ? (D.hasOwnProp(c, h) ? c[h] = [c[h], u] : c[h] = u, !p) : ((!c[h] || !D.isObject(c[h])) && (c[h] = []), r(o, u, c[h], f) && D.isArray(c[h]) && (c[h] = zv(c[h])), !p);
  }
  if (D.isFormData(l) && D.isFunction(l.entries)) {
    const o = {};
    return D.forEachEntry(l, (u, c) => {
      r(Lv(u), c, o, 0);
    }), o;
  }
  return null;
}
function Hv(l, r, o) {
  if (D.isString(l))
    try {
      return (r || JSON.parse)(l), D.trim(l);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (o || JSON.stringify)(l);
}
const Ki = {
  transitional: lg,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, o) {
    const u = o.getContentType() || "", c = u.indexOf("application/json") > -1, f = D.isObject(r);
    if (f && D.isHTMLForm(r) && (r = new FormData(r)), D.isFormData(r))
      return c ? JSON.stringify(ig(r)) : r;
    if (D.isArrayBuffer(r) || D.isBuffer(r) || D.isStream(r) || D.isFile(r) || D.isBlob(r) || D.isReadableStream(r))
      return r;
    if (D.isArrayBufferView(r))
      return r.buffer;
    if (D.isURLSearchParams(r))
      return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let p;
    if (f) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return Mv(r, this.formSerializer).toString();
      if ((p = D.isFileList(r)) || u.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return js(
          p ? { "files[]": r } : r,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return f || c ? (o.setContentType("application/json", !1), Hv(r)) : r;
  }],
  transformResponse: [function(r) {
    const o = this.transitional || Ki.transitional, u = o && o.forcedJSONParsing, c = this.responseType === "json";
    if (D.isResponse(r) || D.isReadableStream(r))
      return r;
    if (r && D.isString(r) && (u && !this.responseType || c)) {
      const h = !(o && o.silentJSONParsing) && c;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (p) {
        if (h)
          throw p.name === "SyntaxError" ? he.from(p, he.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
    FormData: vt.classes.FormData,
    Blob: vt.classes.Blob
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
D.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  Ki.headers[l] = {};
});
const Bv = D.toObjectSet([
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
]), kv = (l) => {
  const r = {};
  let o, u, c;
  return l && l.split(`
`).forEach(function(h) {
    c = h.indexOf(":"), o = h.substring(0, c).trim().toLowerCase(), u = h.substring(c + 1).trim(), !(!o || r[o] && Bv[o]) && (o === "set-cookie" ? r[o] ? r[o].push(u) : r[o] = [u] : r[o] = r[o] ? r[o] + ", " + u : u);
  }), r;
}, e0 = /* @__PURE__ */ Symbol("internals");
function ji(l) {
  return l && String(l).trim().toLowerCase();
}
function bs(l) {
  return l === !1 || l == null ? l : D.isArray(l) ? l.map(bs) : String(l);
}
function qv(l) {
  const r = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = o.exec(l); )
    r[u[1]] = u[2];
  return r;
}
const Gv = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function rc(l, r, o, u, c) {
  if (D.isFunction(u))
    return u.call(this, r, o);
  if (c && (r = o), !!D.isString(r)) {
    if (D.isString(u))
      return r.indexOf(u) !== -1;
    if (D.isRegExp(u))
      return u.test(r);
  }
}
function Yv(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, o, u) => o.toUpperCase() + u);
}
function Kv(l, r) {
  const o = D.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(l, u + o, {
      value: function(c, f, h) {
        return this[u].call(this, r, c, f, h);
      },
      configurable: !0
    });
  });
}
let Dt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, o, u) {
    const c = this;
    function f(p, b, y) {
      const v = ji(b);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const S = D.findKey(c, v);
      (!S || c[S] === void 0 || y === !0 || y === void 0 && c[S] !== !1) && (c[S || b] = bs(p));
    }
    const h = (p, b) => D.forEach(p, (y, v) => f(y, v, b));
    if (D.isPlainObject(r) || r instanceof this.constructor)
      h(r, o);
    else if (D.isString(r) && (r = r.trim()) && !Gv(r))
      h(kv(r), o);
    else if (D.isObject(r) && D.isIterable(r)) {
      let p = {}, b, y;
      for (const v of r) {
        if (!D.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = v[0]] = (b = p[y]) ? D.isArray(b) ? [...b, v[1]] : [b, v[1]] : v[1];
      }
      h(p, o);
    } else
      r != null && f(o, r, u);
    return this;
  }
  get(r, o) {
    if (r = ji(r), r) {
      const u = D.findKey(this, r);
      if (u) {
        const c = this[u];
        if (!o)
          return c;
        if (o === !0)
          return qv(c);
        if (D.isFunction(o))
          return o.call(this, c, u);
        if (D.isRegExp(o))
          return o.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, o) {
    if (r = ji(r), r) {
      const u = D.findKey(this, r);
      return !!(u && this[u] !== void 0 && (!o || rc(this, this[u], u, o)));
    }
    return !1;
  }
  delete(r, o) {
    const u = this;
    let c = !1;
    function f(h) {
      if (h = ji(h), h) {
        const p = D.findKey(u, h);
        p && (!o || rc(u, u[p], p, o)) && (delete u[p], c = !0);
      }
    }
    return D.isArray(r) ? r.forEach(f) : f(r), c;
  }
  clear(r) {
    const o = Object.keys(this);
    let u = o.length, c = !1;
    for (; u--; ) {
      const f = o[u];
      (!r || rc(this, this[f], f, r, !0)) && (delete this[f], c = !0);
    }
    return c;
  }
  normalize(r) {
    const o = this, u = {};
    return D.forEach(this, (c, f) => {
      const h = D.findKey(u, f);
      if (h) {
        o[h] = bs(c), delete o[f];
        return;
      }
      const p = r ? Yv(f) : String(f).trim();
      p !== f && delete o[f], o[p] = bs(c), u[p] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const o = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (u, c) => {
      u != null && u !== !1 && (o[c] = r && D.isArray(u) ? u.join(", ") : u);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, o]) => r + ": " + o).join(`
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
  static concat(r, ...o) {
    const u = new this(r);
    return o.forEach((c) => u.set(c)), u;
  }
  static accessor(r) {
    const u = (this[e0] = this[e0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function f(h) {
      const p = ji(h);
      u[p] || (Kv(c, h), u[p] = !0);
    }
    return D.isArray(r) ? r.forEach(f) : f(r), this;
  }
};
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(Dt.prototype, ({ value: l }, r) => {
  let o = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(u) {
      this[o] = u;
    }
  };
});
D.freezeMethods(Dt);
function sc(l, r) {
  const o = this || Ki, u = r || o, c = Dt.from(u.headers);
  let f = u.data;
  return D.forEach(l, function(p) {
    f = p.call(o, f, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), f;
}
function rg(l) {
  return !!(l && l.__CANCEL__);
}
function Ul(l, r, o) {
  he.call(this, l ?? "canceled", he.ERR_CANCELED, r, o), this.name = "CanceledError";
}
D.inherits(Ul, he, {
  __CANCEL__: !0
});
function sg(l, r, o) {
  const u = o.config.validateStatus;
  !o.status || !u || u(o.status) ? l(o) : r(new he(
    "Request failed with status code " + o.status,
    [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function Vv(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function Xv(l, r) {
  l = l || 10;
  const o = new Array(l), u = new Array(l);
  let c = 0, f = 0, h;
  return r = r !== void 0 ? r : 1e3, function(b) {
    const y = Date.now(), v = u[f];
    h || (h = y), o[c] = b, u[c] = y;
    let S = f, C = 0;
    for (; S !== c; )
      C += o[S++], S = S % l;
    if (c = (c + 1) % l, c === f && (f = (f + 1) % l), y - h < r)
      return;
    const q = v && y - v;
    return q ? Math.round(C * 1e3 / q) : void 0;
  };
}
function Qv(l, r) {
  let o = 0, u = 1e3 / r, c, f;
  const h = (y, v = Date.now()) => {
    o = v, c = null, f && (clearTimeout(f), f = null), l(...y);
  };
  return [(...y) => {
    const v = Date.now(), S = v - o;
    S >= u ? h(y, v) : (c = y, f || (f = setTimeout(() => {
      f = null, h(c);
    }, u - S)));
  }, () => c && h(c)];
}
const xs = (l, r, o = 3) => {
  let u = 0;
  const c = Xv(50, 250);
  return Qv((f) => {
    const h = f.loaded, p = f.lengthComputable ? f.total : void 0, b = h - u, y = c(b), v = h <= p;
    u = h;
    const S = {
      loaded: h,
      total: p,
      progress: p ? h / p : void 0,
      bytes: b,
      rate: y || void 0,
      estimated: y && p && v ? (p - h) / y : void 0,
      event: f,
      lengthComputable: p != null,
      [r ? "download" : "upload"]: !0
    };
    l(S);
  }, o);
}, t0 = (l, r) => {
  const o = l != null;
  return [(u) => r[0]({
    lengthComputable: o,
    total: l,
    loaded: u
  }), r[1]];
}, n0 = (l) => (...r) => D.asap(() => l(...r)), Zv = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (o) => (o = new URL(o, vt.origin), l.protocol === o.protocol && l.host === o.host && (r || l.port === o.port)))(
  new URL(vt.origin),
  vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent)
) : () => !0, Fv = vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, r, o, u, c, f, h) {
      if (typeof document > "u") return;
      const p = [`${l}=${encodeURIComponent(r)}`];
      D.isNumber(o) && p.push(`expires=${new Date(o).toUTCString()}`), D.isString(u) && p.push(`path=${u}`), D.isString(c) && p.push(`domain=${c}`), f === !0 && p.push("secure"), D.isString(h) && p.push(`SameSite=${h}`), document.cookie = p.join("; ");
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
function Jv(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Iv(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function og(l, r, o) {
  let u = !Jv(r);
  return l && (u || o == !1) ? Iv(l, r) : r;
}
const a0 = (l) => l instanceof Dt ? { ...l } : l;
function Ba(l, r) {
  r = r || {};
  const o = {};
  function u(y, v, S, C) {
    return D.isPlainObject(y) && D.isPlainObject(v) ? D.merge.call({ caseless: C }, y, v) : D.isPlainObject(v) ? D.merge({}, v) : D.isArray(v) ? v.slice() : v;
  }
  function c(y, v, S, C) {
    if (D.isUndefined(v)) {
      if (!D.isUndefined(y))
        return u(void 0, y, S, C);
    } else return u(y, v, S, C);
  }
  function f(y, v) {
    if (!D.isUndefined(v))
      return u(void 0, v);
  }
  function h(y, v) {
    if (D.isUndefined(v)) {
      if (!D.isUndefined(y))
        return u(void 0, y);
    } else return u(void 0, v);
  }
  function p(y, v, S) {
    if (S in r)
      return u(y, v);
    if (S in l)
      return u(void 0, y);
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
    headers: (y, v, S) => c(a0(y), a0(v), S, !0)
  };
  return D.forEach(Object.keys({ ...l, ...r }), function(v) {
    const S = b[v] || c, C = S(l[v], r[v], v);
    D.isUndefined(C) && S !== p || (o[v] = C);
  }), o;
}
const ug = (l) => {
  const r = Ba({}, l);
  let { data: o, withXSRFToken: u, xsrfHeaderName: c, xsrfCookieName: f, headers: h, auth: p } = r;
  if (r.headers = h = Dt.from(h), r.url = ag(og(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), p && h.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), D.isFormData(o)) {
    if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (D.isFunction(o.getHeaders)) {
      const b = o.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(b).forEach(([v, S]) => {
        y.includes(v.toLowerCase()) && h.set(v, S);
      });
    }
  }
  if (vt.hasStandardBrowserEnv && (u && D.isFunction(u) && (u = u(r)), u || u !== !1 && Zv(r.url))) {
    const b = c && f && Fv.read(f);
    b && h.set(c, b);
  }
  return r;
}, $v = typeof XMLHttpRequest < "u", Wv = $v && function(l) {
  return new Promise(function(o, u) {
    const c = ug(l);
    let f = c.data;
    const h = Dt.from(c.headers).normalize();
    let { responseType: p, onUploadProgress: b, onDownloadProgress: y } = c, v, S, C, q, T;
    function L() {
      q && q(), T && T(), c.cancelToken && c.cancelToken.unsubscribe(v), c.signal && c.signal.removeEventListener("abort", v);
    }
    let O = new XMLHttpRequest();
    O.open(c.method.toUpperCase(), c.url, !0), O.timeout = c.timeout;
    function K() {
      if (!O)
        return;
      const Q = Dt.from(
        "getAllResponseHeaders" in O && O.getAllResponseHeaders()
      ), F = {
        data: !p || p === "text" || p === "json" ? O.responseText : O.response,
        status: O.status,
        statusText: O.statusText,
        headers: Q,
        config: l,
        request: O
      };
      sg(function(ne) {
        o(ne), L();
      }, function(ne) {
        u(ne), L();
      }, F), O = null;
    }
    "onloadend" in O ? O.onloadend = K : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(K);
    }, O.onabort = function() {
      O && (u(new he("Request aborted", he.ECONNABORTED, l, O)), O = null);
    }, O.onerror = function(P) {
      const F = P && P.message ? P.message : "Network Error", re = new he(F, he.ERR_NETWORK, l, O);
      re.event = P || null, u(re), O = null;
    }, O.ontimeout = function() {
      let P = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const F = c.transitional || lg;
      c.timeoutErrorMessage && (P = c.timeoutErrorMessage), u(new he(
        P,
        F.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
        l,
        O
      )), O = null;
    }, f === void 0 && h.setContentType(null), "setRequestHeader" in O && D.forEach(h.toJSON(), function(P, F) {
      O.setRequestHeader(F, P);
    }), D.isUndefined(c.withCredentials) || (O.withCredentials = !!c.withCredentials), p && p !== "json" && (O.responseType = c.responseType), y && ([C, T] = xs(y, !0), O.addEventListener("progress", C)), b && O.upload && ([S, q] = xs(b), O.upload.addEventListener("progress", S), O.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (v = (Q) => {
      O && (u(!Q || Q.type ? new Ul(null, l, O) : Q), O.abort(), O = null);
    }, c.cancelToken && c.cancelToken.subscribe(v), c.signal && (c.signal.aborted ? v() : c.signal.addEventListener("abort", v)));
    const V = Vv(c.url);
    if (V && vt.protocols.indexOf(V) === -1) {
      u(new he("Unsupported protocol " + V + ":", he.ERR_BAD_REQUEST, l));
      return;
    }
    O.send(f || null);
  });
}, Pv = (l, r) => {
  const { length: o } = l = l ? l.filter(Boolean) : [];
  if (r || o) {
    let u = new AbortController(), c;
    const f = function(y) {
      if (!c) {
        c = !0, p();
        const v = y instanceof Error ? y : this.reason;
        u.abort(v instanceof he ? v : new Ul(v instanceof Error ? v.message : v));
      }
    };
    let h = r && setTimeout(() => {
      h = null, f(new he(`timeout ${r} of ms exceeded`, he.ETIMEDOUT));
    }, r);
    const p = () => {
      l && (h && clearTimeout(h), h = null, l.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(f) : y.removeEventListener("abort", f);
      }), l = null);
    };
    l.forEach((y) => y.addEventListener("abort", f));
    const { signal: b } = u;
    return b.unsubscribe = () => D.asap(p), b;
  }
}, eE = function* (l, r) {
  let o = l.byteLength;
  if (o < r) {
    yield l;
    return;
  }
  let u = 0, c;
  for (; u < o; )
    c = u + r, yield l.slice(u, c), u = c;
}, tE = async function* (l, r) {
  for await (const o of nE(l))
    yield* eE(o, r);
}, nE = async function* (l) {
  if (l[Symbol.asyncIterator]) {
    yield* l;
    return;
  }
  const r = l.getReader();
  try {
    for (; ; ) {
      const { done: o, value: u } = await r.read();
      if (o)
        break;
      yield u;
    }
  } finally {
    await r.cancel();
  }
}, l0 = (l, r, o, u) => {
  const c = tE(l, r);
  let f = 0, h, p = (b) => {
    h || (h = !0, u && u(b));
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
        if (o) {
          let C = f += S;
          o(C);
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
}, i0 = 64 * 1024, { isFunction: ms } = D, aE = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(D.global), {
  ReadableStream: r0,
  TextEncoder: s0
} = D.global, o0 = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, lE = (l) => {
  l = D.merge.call({
    skipUndefined: !0
  }, aE, l);
  const { fetch: r, Request: o, Response: u } = l, c = r ? ms(r) : typeof fetch == "function", f = ms(o), h = ms(u);
  if (!c)
    return !1;
  const p = c && ms(r0), b = c && (typeof s0 == "function" ? /* @__PURE__ */ ((T) => (L) => T.encode(L))(new s0()) : async (T) => new Uint8Array(await new o(T).arrayBuffer())), y = f && p && o0(() => {
    let T = !1;
    const L = new o(vt.origin, {
      body: new r0(),
      method: "POST",
      get duplex() {
        return T = !0, "half";
      }
    }).headers.has("Content-Type");
    return T && !L;
  }), v = h && p && o0(() => D.isReadableStream(new u("").body)), S = {
    stream: v && ((T) => T.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((T) => {
    !S[T] && (S[T] = (L, O) => {
      let K = L && L[T];
      if (K)
        return K.call(L);
      throw new he(`Response type '${T}' is not supported`, he.ERR_NOT_SUPPORT, O);
    });
  });
  const C = async (T) => {
    if (T == null)
      return 0;
    if (D.isBlob(T))
      return T.size;
    if (D.isSpecCompliantForm(T))
      return (await new o(vt.origin, {
        method: "POST",
        body: T
      }).arrayBuffer()).byteLength;
    if (D.isArrayBufferView(T) || D.isArrayBuffer(T))
      return T.byteLength;
    if (D.isURLSearchParams(T) && (T = T + ""), D.isString(T))
      return (await b(T)).byteLength;
  }, q = async (T, L) => {
    const O = D.toFiniteNumber(T.getContentLength());
    return O ?? C(L);
  };
  return async (T) => {
    let {
      url: L,
      method: O,
      data: K,
      signal: V,
      cancelToken: Q,
      timeout: P,
      onDownloadProgress: F,
      onUploadProgress: re,
      responseType: ne,
      headers: J,
      withCredentials: se = "same-origin",
      fetchOptions: pe
    } = ug(T), Je = r || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let ve = Pv([V, Q && Q.toAbortSignal()], P), Me = null;
    const Ge = ve && ve.unsubscribe && (() => {
      ve.unsubscribe();
    });
    let Qe;
    try {
      if (re && y && O !== "get" && O !== "head" && (Qe = await q(J, K)) !== 0) {
        let Re = new o(L, {
          method: "POST",
          body: K,
          duplex: "half"
        }), x;
        if (D.isFormData(K) && (x = Re.headers.get("content-type")) && J.setContentType(x), Re.body) {
          const [B, X] = t0(
            Qe,
            xs(n0(re))
          );
          K = l0(Re.body, i0, B, X);
        }
      }
      D.isString(se) || (se = se ? "include" : "omit");
      const M = f && "credentials" in o.prototype, z = {
        ...pe,
        signal: ve,
        method: O.toUpperCase(),
        headers: J.normalize().toJSON(),
        body: K,
        duplex: "half",
        credentials: M ? se : void 0
      };
      Me = f && new o(L, z);
      let Y = await (f ? Je(Me, pe) : Je(L, z));
      const ce = v && (ne === "stream" || ne === "response");
      if (v && (F || ce && Ge)) {
        const Re = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Re[Z] = Y[Z];
        });
        const x = D.toFiniteNumber(Y.headers.get("content-length")), [B, X] = F && t0(
          x,
          xs(n0(F), !0)
        ) || [];
        Y = new u(
          l0(Y.body, i0, B, () => {
            X && X(), Ge && Ge();
          }),
          Re
        );
      }
      ne = ne || "text";
      let Ne = await S[D.findKey(S, ne) || "text"](Y, T);
      return !ce && Ge && Ge(), await new Promise((Re, x) => {
        sg(Re, x, {
          data: Ne,
          headers: Dt.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: T,
          request: Me
        });
      });
    } catch (M) {
      throw Ge && Ge(), M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new he("Network Error", he.ERR_NETWORK, T, Me),
        {
          cause: M.cause || M
        }
      ) : he.from(M, M && M.code, T, Me);
    }
  };
}, iE = /* @__PURE__ */ new Map(), cg = (l) => {
  let r = l && l.env || {};
  const { fetch: o, Request: u, Response: c } = r, f = [
    u,
    c,
    o
  ];
  let h = f.length, p = h, b, y, v = iE;
  for (; p--; )
    b = f[p], y = v.get(b), y === void 0 && v.set(b, y = p ? /* @__PURE__ */ new Map() : lE(r)), v = y;
  return y;
};
cg();
const _c = {
  http: Sv,
  xhr: Wv,
  fetch: {
    get: cg
  }
};
D.forEach(_c, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const u0 = (l) => `- ${l}`, rE = (l) => D.isFunction(l) || l === null || l === !1;
function sE(l, r) {
  l = D.isArray(l) ? l : [l];
  const { length: o } = l;
  let u, c;
  const f = {};
  for (let h = 0; h < o; h++) {
    u = l[h];
    let p;
    if (c = u, !rE(u) && (c = _c[(p = String(u)).toLowerCase()], c === void 0))
      throw new he(`Unknown adapter '${p}'`);
    if (c && (D.isFunction(c) || (c = c.get(r))))
      break;
    f[p || "#" + h] = c;
  }
  if (!c) {
    const h = Object.entries(f).map(
      ([b, y]) => `adapter ${b} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = o ? h.length > 1 ? `since :
` + h.map(u0).join(`
`) : " " + u0(h[0]) : "as no adapter specified";
    throw new he(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const dg = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: sE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: _c
};
function oc(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new Ul(null, l);
}
function c0(l) {
  return oc(l), l.headers = Dt.from(l.headers), l.data = sc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), dg.getAdapter(l.adapter || Ki.adapter, l)(l).then(function(u) {
    return oc(l), u.data = sc.call(
      l,
      l.transformResponse,
      u
    ), u.headers = Dt.from(u.headers), u;
  }, function(u) {
    return rg(u) || (oc(l), u && u.response && (u.response.data = sc.call(
      l,
      l.transformResponse,
      u.response
    ), u.response.headers = Dt.from(u.response.headers))), Promise.reject(u);
  });
}
const fg = "1.13.2", Ds = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  Ds[l] = function(u) {
    return typeof u === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const d0 = {};
Ds.transitional = function(r, o, u) {
  function c(f, h) {
    return "[Axios v" + fg + "] Transitional option '" + f + "'" + h + (u ? ". " + u : "");
  }
  return (f, h, p) => {
    if (r === !1)
      throw new he(
        c(h, " has been removed" + (o ? " in " + o : "")),
        he.ERR_DEPRECATED
      );
    return o && !d0[h] && (d0[h] = !0, console.warn(
      c(
        h,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(f, h, p) : !0;
  };
};
Ds.spelling = function(r) {
  return (o, u) => (console.warn(`${u} is likely a misspelling of ${r}`), !0);
};
function oE(l, r, o) {
  if (typeof l != "object")
    throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(l);
  let c = u.length;
  for (; c-- > 0; ) {
    const f = u[c], h = r[f];
    if (h) {
      const p = l[f], b = p === void 0 || h(p, f, l);
      if (b !== !0)
        throw new he("option " + f + " must be " + b, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new he("Unknown option " + f, he.ERR_BAD_OPTION);
  }
}
const vs = {
  assertOptions: oE,
  validators: Ds
}, mn = vs.validators;
let Ha = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Ph(),
      response: new Ph()
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
  async request(r, o) {
    try {
      return await this._request(r, o);
    } catch (u) {
      if (u instanceof Error) {
        let c = {};
        Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error();
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack ? f && !String(u.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (u.stack += `
` + f) : u.stack = f;
        } catch {
        }
      }
      throw u;
    }
  }
  _request(r, o) {
    typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = Ba(this.defaults, o);
    const { transitional: u, paramsSerializer: c, headers: f } = o;
    u !== void 0 && vs.assertOptions(u, {
      silentJSONParsing: mn.transitional(mn.boolean),
      forcedJSONParsing: mn.transitional(mn.boolean),
      clarifyTimeoutError: mn.transitional(mn.boolean)
    }, !1), c != null && (D.isFunction(c) ? o.paramsSerializer = {
      serialize: c
    } : vs.assertOptions(c, {
      encode: mn.function,
      serialize: mn.function
    }, !0)), o.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : o.allowAbsoluteUrls = !0), vs.assertOptions(o, {
      baseUrl: mn.spelling("baseURL"),
      withXsrfToken: mn.spelling("withXSRFToken")
    }, !0), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let h = f && D.merge(
      f.common,
      f[o.method]
    );
    f && D.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete f[T];
      }
    ), o.headers = Dt.concat(h, f);
    const p = [];
    let b = !0;
    this.interceptors.request.forEach(function(L) {
      typeof L.runWhen == "function" && L.runWhen(o) === !1 || (b = b && L.synchronous, p.unshift(L.fulfilled, L.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(L) {
      y.push(L.fulfilled, L.rejected);
    });
    let v, S = 0, C;
    if (!b) {
      const T = [c0.bind(this), void 0];
      for (T.unshift(...p), T.push(...y), C = T.length, v = Promise.resolve(o); S < C; )
        v = v.then(T[S++], T[S++]);
      return v;
    }
    C = p.length;
    let q = o;
    for (; S < C; ) {
      const T = p[S++], L = p[S++];
      try {
        q = T(q);
      } catch (O) {
        L.call(this, O);
        break;
      }
    }
    try {
      v = c0.call(this, q);
    } catch (T) {
      return Promise.reject(T);
    }
    for (S = 0, C = y.length; S < C; )
      v = v.then(y[S++], y[S++]);
    return v;
  }
  getUri(r) {
    r = Ba(this.defaults, r);
    const o = og(r.baseURL, r.url, r.allowAbsoluteUrls);
    return ag(o, r.params, r.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(r) {
  Ha.prototype[r] = function(o, u) {
    return this.request(Ba(u || {}, {
      method: r,
      url: o,
      data: (u || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(r) {
  function o(u) {
    return function(f, h, p) {
      return this.request(Ba(p || {}, {
        method: r,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  Ha.prototype[r] = o(), Ha.prototype[r + "Form"] = o(!0);
});
let uE = class mg {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(f) {
      o = f;
    });
    const u = this;
    this.promise.then((c) => {
      if (!u._listeners) return;
      let f = u._listeners.length;
      for (; f-- > 0; )
        u._listeners[f](c);
      u._listeners = null;
    }), this.promise.then = (c) => {
      let f;
      const h = new Promise((p) => {
        u.subscribe(p), f = p;
      }).then(c);
      return h.cancel = function() {
        u.unsubscribe(f);
      }, h;
    }, r(function(f, h, p) {
      u.reason || (u.reason = new Ul(f, h, p), o(u.reason));
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
    const o = this._listeners.indexOf(r);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), o = (u) => {
      r.abort(u);
    };
    return this.subscribe(o), r.signal.unsubscribe = () => this.unsubscribe(o), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new mg(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function cE(l) {
  return function(o) {
    return l.apply(null, o);
  };
}
function dE(l) {
  return D.isObject(l) && l.isAxiosError === !0;
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
function hg(l) {
  const r = new Ha(l), o = X0(Ha.prototype.request, r);
  return D.extend(o, Ha.prototype, r, { allOwnKeys: !0 }), D.extend(o, r, null, { allOwnKeys: !0 }), o.create = function(c) {
    return hg(Ba(l, c));
  }, o;
}
const ke = hg(Ki);
ke.Axios = Ha;
ke.CanceledError = Ul;
ke.CancelToken = uE;
ke.isCancel = rg;
ke.VERSION = fg;
ke.toFormData = js;
ke.AxiosError = he;
ke.Cancel = ke.CanceledError;
ke.all = function(r) {
  return Promise.all(r);
};
ke.spread = cE;
ke.isAxiosError = dE;
ke.mergeConfig = Ba;
ke.AxiosHeaders = Dt;
ke.formToJSON = (l) => ig(D.isHTMLForm(l) ? new FormData(l) : l);
ke.getAdapter = dg.getAdapter;
ke.HttpStatusCode = yc;
ke.default = ke;
const {
  Axios: KE,
  AxiosError: VE,
  CanceledError: XE,
  isCancel: QE,
  CancelToken: ZE,
  VERSION: FE,
  all: JE,
  Cancel: IE,
  isAxiosError: $E,
  spread: WE,
  toFormData: PE,
  AxiosHeaders: ew,
  HttpStatusCode: tw,
  formToJSON: nw,
  getAdapter: aw,
  mergeConfig: lw
} = ke, fE = [
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
], gg = "WEBCOMPONENT";
function mE(l) {
  l ? localStorage.setItem(de.AUTHORITY_OVERRIDE, l) : localStorage.removeItem(de.AUTHORITY_OVERRIDE);
}
function hE() {
  return localStorage.getItem(de.AUTHORITY_OVERRIDE);
}
function f0() {
  localStorage.removeItem(de.AUTHORITY_OVERRIDE);
}
function gE() {
  const l = hE();
  if (l && Object.values(Pt).includes(l))
    return l;
  const r = window.location.hostname;
  return r === zn.HOSTNAME || r === zn.IP || zn.IP_PATTERN.test(r) || r.startsWith(`${Pe.DEV}.`) || r.startsWith(`${Pe.DEV}-`) ? Pt.DEV : r.startsWith(`${Pe.TEST}.`) || r.startsWith(`${Pe.TEST}-`) ? Pt.TEST : r.startsWith(`${Pe.STAGE}.`) || r.startsWith(`${Pe.STAGE}-`) ? Pt.STAGE : Pt.PROD;
}
function yE(l) {
  if (gg === Tc.TEST)
    return "";
  const r = gE();
  return l.startsWith("/global") ? Db[r] : jb[r];
}
const ga = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return gg === Tc.TEST ? r : `${yE(r)}${r}`;
}, pE = async (l) => {
  try {
    return fE?.find(
      (o) => o?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function kn() {
  const l = localStorage.getItem(de.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), o = await pE(r?.domain);
  return {
    [ys.X_BRAND_ID]: o?.subsidiaryName,
    [ys.X_SUBSIDIARY_ID]: o?.subsidiaryId?.toString(),
    [ys.X_BRAND_DOMAIN]: r?.domain
  };
}
const bE = async (l, r) => {
  const o = ga(ha.AUTH), u = { username: l, password: r };
  try {
    const c = await ke.post(o, u, {
      headers: await kn()
    }), f = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: f || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === Ol.UNAUTHORIZED ? new Error(je.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(je.AUTH_FAILED);
  }
}, vE = async (l) => {
  const r = ga(ha.REGISTER);
  try {
    return (await ke.post(r, l, {
      headers: await kn()
    })).data;
  } catch (o) {
    throw console.error("Error during registration:", o), o.response?.data?.details?.errorMessage ? new Error(o.response.data.details.errorMessage) : o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.details ? new Error(o.response.data.details) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === Ol.INTERNAL_SERVER_ERROR ? new Error(je.REGISTRATION_FAILED_RETRY) : o.message ? new Error(o.message) : new Error(je.REGISTRATION_FAILED);
  }
}, Us = async (l) => {
  const r = ga(ha.CHECK_EMAIL);
  try {
    return (await ke.post(
      r,
      { email: l },
      {
        headers: await kn()
      }
    )).data;
  } catch (o) {
    throw console.error("Error checking email:", o), o.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : o.response?.status === 403 ? new Error("Access denied to email verification service") : o.response?.status === 500 ? new Error("Email verification service encountered an error") : o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.message ? new Error(`Email verification failed: ${o.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, m0 = async (l) => {
  const r = ga(ha.FORGOT_PASSWORD), o = { email: l };
  try {
    return (await ke.post(r, o, {
      headers: await kn()
    })).data;
  } catch (u) {
    throw console.error("Error sending password reset:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === Ol.NOT_FOUND ? new Error("We couldn't find an account with that email.") : u.message ? new Error(u.message) : new Error(je.RESET_LINK_FAILED);
  }
}, h0 = async (l) => {
  const r = ga(ha.FORGOT_USERNAME), o = { email: l };
  try {
    return (await ke.post(r, o, {
      headers: await kn()
    })).data;
  } catch (u) {
    throw console.error("Error sending username verification:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === Ol.NOT_FOUND ? new Error("We couldn't find an account with that email.") : u.message ? new Error(u.message) : new Error(je.USERNAME_RECOVERY_FAILED);
  }
}, EE = async (l) => {
  const r = ga(ha.GOOGLE_AUTH);
  try {
    const o = await ke.post(
      r,
      { code: l },
      {
        headers: await kn()
      }
    );
    return {
      ...o.data,
      x_credential: o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during Google auth:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === Ol.UNAUTHORIZED ? new Error("Google authentication failed. Please try again.") : o.message ? new Error(o.message) : new Error(je.AUTH_FAILED);
  }
}, wE = async (l) => {
  const r = ga(ha.REFRESH_TOKEN), o = { refresh_token: l };
  try {
    const u = await ke.post(r, o, {
      headers: await kn()
    }), c = u.headers["x-credential"] || u.headers["X-Credential"];
    return {
      ...u.data,
      x_credential: c || u.data.x_credential
    };
  } catch (u) {
    throw console.error("Error during token refresh:", u), u;
  }
}, SE = async (l) => {
  const r = ga(ha.LOGOUT), o = { refresh_token: l };
  try {
    return (await ke.post(r, o, {
      headers: await kn()
    })).data;
  } catch (u) {
    throw console.error("Error during logout:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === Ol.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : u.message ? new Error(u.message) : new Error("Logout failed");
  }
}, xE = () => {
  try {
    const l = _t(Be.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = jl(l), o = Math.floor(Date.now() / 1e3);
    return !r.exp || o >= r.exp;
  } catch (l) {
    return console.error(`${Xe.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, Rs = () => _t(Be.REFRESH_TOKEN, !1) || localStorage.getItem(de.REFRESH_TOKEN), zi = (l) => {
  try {
    const r = jl(l), o = Math.floor(Date.now() / 1e3);
    return !r.exp || o >= r.exp;
  } catch {
    return !0;
  }
}, pc = (l) => !zi(l);
let Es = null;
const Tl = () => {
  Es && (clearInterval(Es), Es = null);
}, Oc = async (l) => {
  try {
    const r = l || Rs();
    if (!r)
      return !1;
    const o = await wE(r);
    if (!o?.tokens?.access_token)
      return !1;
    const u = o.tokens, c = ws(u.access_token);
    if (!c)
      return !1;
    const f = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (f <= 0)
      return !1;
    hn(Be.ACCESS_TOKEN, u.access_token, f, !0);
    const h = o.x_credential || c.decoded.x_credentials;
    if (h && hn(Be.X_CREDENTIAL, h, f, !1), localStorage.setItem(de.ACCESS_TOKEN, u.access_token), localStorage.setItem(
      de.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    ), u.refresh_token) {
      localStorage.setItem(de.REFRESH_TOKEN, u.refresh_token);
      const p = 720 * 60 * 60;
      hn(Be.REFRESH_TOKEN, u.refresh_token, p, !0), localStorage.getItem(de.REFRESH_TOKEN_TIME) && localStorage.setItem(de.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Xe.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, RE = async () => {
  const l = Rs();
  if (!(_t(Be.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN)) || !l || !pc(l))
    return Tl(), !0;
  Tl();
  const o = 180 * 1e3;
  return Es = setInterval(async () => {
    const u = Rs();
    if (!(_t(Be.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN))) {
      Tl();
      return;
    }
    if (!u || !pc(u)) {
      Tl();
      return;
    }
    const f = _t(Be.X_CREDENTIAL, !1) || _t(Be.X_CREDENTIAL_OLD, !1), h = _t(Be.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN);
    (!f || zi(f) || !h || zi(h)) && await Oc(u);
  }, o), () => Tl();
}, g0 = (l) => {
  try {
    if (!localStorage.getItem(de.REFRESH_TOKEN_TIME))
      return console.log(
        `${Xe.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Xe.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const o = _t(Be.X_CREDENTIAL, !1) || _t(Be.X_CREDENTIAL_OLD, !1), u = _t(Be.ACCESS_TOKEN, !1);
    let c = null, f = !1;
    if (u && (c = u), o && (f = !0), c || (c = localStorage.getItem(de.ACCESS_TOKEN)), !c || !f)
      return !1;
    const h = localStorage.getItem(de.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const p = jl(c), b = Math.floor(Date.now() / 1e3);
      return !(!p.exp || b >= p.exp);
    } catch (p) {
      return console.error(`${Xe.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, p), !1;
    }
  } catch (r) {
    return console.error(`${Xe.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, TE = async (l) => {
  if (g0(l))
    return !0;
  try {
    if (!localStorage.getItem(de.REFRESH_TOKEN_TIME))
      return !1;
    const u = Rs();
    if (!u || !pc(u))
      return !1;
    const c = _t(Be.X_CREDENTIAL, !1) || _t(Be.X_CREDENTIAL_OLD, !1), f = _t(Be.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN), h = !c || zi(c), p = !f || zi(f);
    return !h && !p || !await Oc(u) ? !1 : g0(l);
  } catch (o) {
    return console.error(
      `${Xe.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      o
    ), !1;
  }
}, NE = () => {
  try {
    const l = localStorage.getItem(de.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < Ob.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${Xe.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, CE = () => {
  fs(Be.ACCESS_TOKEN), fs(Be.X_CREDENTIAL), fs(Be.X_CREDENTIAL_OLD), fs(Be.REFRESH_TOKEN), [
    de.REFRESH_TOKEN,
    de.REFRESH_TOKEN_TIME,
    de.ACCESS_TOKEN,
    de.ACCESS_TOKEN_EXPIRES,
    "user_info"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Xe.AUTH} All authentication tokens and state cleared`);
}, yg = async (l, r, o = !1) => {
  const u = await bE(l, r), { tokens: c, x_credential: f } = u;
  if (c.access_token) {
    const h = jl(c.access_token), p = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    hn(Be.ACCESS_TOKEN, c.access_token, p, !0);
    const b = f || h.x_credentials;
    b ? (hn(Be.X_CREDENTIAL, b, p, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), b && hn(Be.X_CREDENTIAL, b, p, !1), localStorage.setItem(de.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      de.ACCESS_TOKEN_EXPIRES,
      (Date.now() + p * 1e3).toString()
    ), localStorage.setItem(de.REFRESH_TOKEN, c.refresh_token);
    const y = 720 * 60 * 60;
    hn(Be.REFRESH_TOKEN, c.refresh_token, y, !0), o && c.refresh_token ? (localStorage.setItem(de.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Xe.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(de.REFRESH_TOKEN_TIME), console.log(
      `${Xe.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, AE = async (l, r = !0) => {
  const o = await EE(l), { tokens: u, x_credential: c } = o;
  if (u.access_token) {
    const f = jl(u.access_token), h = (f.exp || 0) - Math.floor(Date.now() / 1e3);
    hn(Be.ACCESS_TOKEN, u.access_token, h, !0);
    const p = c || f.x_credentials;
    p && hn(Be.X_CREDENTIAL, p, h, !1), localStorage.setItem(de.ACCESS_TOKEN, u.access_token), localStorage.setItem(
      de.ACCESS_TOKEN_EXPIRES,
      (Date.now() + h * 1e3).toString()
    ), localStorage.setItem(de.REFRESH_TOKEN, u.refresh_token);
    const b = 720 * 60 * 60;
    hn(Be.REFRESH_TOKEN, u.refresh_token, b, !0), r && u.refresh_token ? (localStorage.setItem(de.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Xe.AUTH} Google login - Remember Me enabled`)) : (localStorage.removeItem(de.REFRESH_TOKEN_TIME), console.log(`${Xe.AUTH} Google login - Remember Me disabled`));
  }
  return u;
}, ws = (l) => {
  try {
    const r = jl(l);
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
      `${Xe.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
};
function y0(l) {
  kn().then((r) => {
    r[ys.X_BRAND_ID] || l(!0);
  }).catch((r) => {
    console.error(Xe.BRAND_CONFIG, "Failed to load brand configuration:", r), l(!0);
  });
}
function Ms() {
  const [l, r] = E.useState(!1);
  return E.useEffect(() => {
    if (sessionStorage.getItem(de.THEME_LOADED)) {
      y0(r);
      return;
    }
    const o = () => {
      y0(r);
    };
    return window.addEventListener("theme-loaded", o), () => window.removeEventListener("theme-loaded", o);
  }, []), l;
}
const Ml = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", bc = (l) => {
  if (!l || typeof l != "object")
    return !1;
  const r = l;
  return typeof r.getModifierState != "function" ? !1 : r.getModifierState("CapsLock");
}, _E = ({
  onSuccess: l,
  onError: r,
  handleClose: o,
  onSignIn: u,
  title: c = "Create your account",
  subtitle: f = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [p, b] = E.useState(h), [y, v] = E.useState(""), [S, C] = E.useState(""), [q, T] = E.useState(""), [L, O] = E.useState(!1), [K, V] = E.useState(""), [Q, P] = E.useState(""), [F, re] = E.useState(!1), [ne, J] = E.useState(!1), [se, pe] = E.useState(!1), [Je, ve] = E.useState(!1), [Me, Ge] = E.useState(!1), [Qe, M] = E.useState(!1), [z, Y] = E.useState(!1), [ce, Ne] = E.useState(""), [Re, x] = E.useState(!1), [B, X] = E.useState(""), [Z, fe] = E.useState(le.INFO), ie = E.useRef(null), be = E.useRef(null), _e = Ms(), $ = {
    length: q.length >= us.MIN_LENGTH && q.length <= us.MAX_LENGTH,
    hasNumber: Rl.NUMBER.test(q),
    hasUppercase: Rl.UPPERCASE.test(q),
    hasLowercase: Rl.LOWERCASE.test(q),
    hasSpecialChar: Zh.test(q),
    onlyAllowedChars: Fh.test(q) || q === "",
    differentFromUsername: p ? q !== p && q !== p.split("@")[0] : !0
  }, wt = ((oe) => {
    if (!oe) return { strength: "", color: "", width: cs.EMPTY };
    if ($.length && $.hasNumber && $.hasUppercase && $.hasLowercase && $.hasSpecialChar && $.onlyAllowedChars && $.differentFromUsername)
      return {
        strength: lc.STRONG,
        color: ic.STRONG,
        width: cs.STRONG
      };
    let tt = 0;
    return $.length && tt++, $.hasNumber && tt++, $.hasUppercase && tt++, $.hasLowercase && tt++, $.hasSpecialChar && tt++, $.onlyAllowedChars && tt++, $.differentFromUsername && tt++, tt <= 2 ? {
      strength: lc.WEAK,
      color: ic.WEAK,
      width: cs.WEAK
    } : {
      strength: lc.GOOD,
      color: ic.GOOD,
      width: cs.GOOD
    };
  })(q), qn = (oe) => oe ? oe.length < us.MIN_LENGTH || oe.length > us.MAX_LENGTH ? { isValid: !1, error: je.PASSWORD_LENGTH } : Rl.UPPERCASE.test(oe) ? Rl.LOWERCASE.test(oe) ? Rl.NUMBER.test(oe) ? Zh.test(oe) ? Fh.test(oe) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: je.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: je.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: je.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: je.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: je.PASSWORD_UPPERCASE
  } : { isValid: !1, error: je.PASSWORD_REQUIRED };
  E.useEffect(() => {
    if (!_e) {
      if (be.current && clearTimeout(be.current), !p) {
        ve(!1), Ge(!1), Y(!1), Ne("");
        return;
      }
      if (!Nl.test(p)) {
        ve(!1), Ge(!1);
        return;
      }
      return be.current = setTimeout(async () => {
        M(!0);
        try {
          (await Us(p)).exists ? (Ge(!0), ve(!0)) : (Ge(!1), ve(!1));
        } catch (oe) {
          console.error(`${Xe.CREATE_ACCOUNT} Email check failed:`, oe);
          const pt = oe instanceof Error ? oe.message : "Unable to verify email. You can still proceed with registration.";
          Y(!0), Ne(pt), ve(!0), Ge(!1);
        } finally {
          M(!1);
        }
      }, gn.EMAIL_CHECK_DEBOUNCE), () => {
        be.current && clearTimeout(be.current);
      };
    }
  }, [p, _e]);
  const on = p && Nl.test(p);
  E.useEffect(() => {
    const oe = (pt) => {
      pt.key === "Escape" && o();
    };
    return document.addEventListener("keydown", oe), () => document.removeEventListener("keydown", oe);
  }, [o]);
  const Ut = (oe) => {
    oe.target === ie.current && o();
  }, ya = async (oe) => {
    if (oe.preventDefault(), _e) return;
    if (pe(!0), !p || !y || !S) {
      r("Please fill in all required fields");
      return;
    }
    const pt = qn(q);
    if (!pt.isValid) {
      P(pt.error), r(pt.error), O(!1);
      return;
    }
    if (!Nl.test(p)) {
      V(je.EMAIL_INVALID), r(je.EMAIL_INVALID);
      return;
    }
    O(!0), V(""), X("");
    try {
      const tt = p.split("@")[0], ee = await vE({
        username: tt,
        email: p,
        firstName: y,
        lastName: S,
        password: q
      });
      console.log(
        `${Xe.CREATE_ACCOUNT} Registration successful:`,
        ee.message
      );
      try {
        const ye = await yg(p, q, Re);
        l(ye);
      } catch (ye) {
        console.error(
          `${Xe.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ye
        );
        const Ye = ye instanceof Error ? ye.message : "Auto-login failed";
        r(Ye);
      }
    } catch (tt) {
      console.error(`${Xe.CREATE_ACCOUNT} Registration failed:`, tt);
      const ee = tt instanceof Error ? tt.message : je.REGISTRATION_FAILED;
      X(ee), fe(le.ERROR), r(ee);
    } finally {
      O(!1);
    }
  }, Gn = (oe) => {
    if (oe.key === "CapsLock" && oe.type === "keydown") {
      J((pt) => !pt);
      return;
    }
    oe.key !== "CapsLock" && J(bc(oe));
  }, Vi = (oe) => {
    J(bc(oe));
  }, pa = () => {
    J(!1);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    B && /* @__PURE__ */ m.jsx(
      fc,
      {
        type: Z,
        message: B,
        duration: gn.TOAST_DEFAULT_DURATION,
        onClose: () => X("")
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ie,
        onMouseDown: Ut,
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
                et,
                {
                  onClick: o,
                  variant: ut.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Fe.BUTTON,
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
                  onSubmit: ya,
                  className: "identity-widget-create-account-form space-y-4!",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ m.jsx(
                          en,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: p,
                            onChange: (oe) => {
                              b(oe.target.value), V("");
                            },
                            placeholder: "Enter email address",
                            disabled: L,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: se && !p ? "Required" : K || "",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              Qe && /* @__PURE__ */ m.jsx(Cs, {}),
                              !Qe && !Me && !z && p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: Ml,
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
                    _e && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        title: je.BRAND_CONFIG_TITLE,
                        message: je.BRAND_CONFIG_MESSAGE,
                        className: "identity-widget-create-account-brand-error-banner mb-4!"
                      }
                    ),
                    !_e && Je && Me && !z && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          ve(!1), u(p);
                        },
                        onClose: () => ve(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    !_e && Je && z && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        message: ce,
                        onClose: () => {
                          ve(!1), Y(!1), Ne("");
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
                            en,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: y,
                              onChange: (oe) => v(oe.target.value),
                              placeholder: "First Name",
                              disabled: L,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: se && !y ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            en,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: S,
                              onChange: (oe) => C(oe.target.value),
                              placeholder: "Last Name",
                              disabled: L,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: se && !S ? "Required" : ""
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
                                en,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: F ? "text" : "password",
                                  value: q,
                                  onChange: (oe) => {
                                    T(oe.target.value), P("");
                                  },
                                  onKeyDown: Gn,
                                  onKeyUp: Gn,
                                  onFocus: Vi,
                                  onBlur: pa,
                                  placeholder: "Enter Password...",
                                  disabled: L,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: Q,
                                  endIcon: /* @__PURE__ */ m.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => re(!F),
                                      className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": F ? "Hide password" : "Show password",
                                      children: F ? /* @__PURE__ */ m.jsx(
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
                              ne && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Li.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    q && /* @__PURE__ */ m.jsxs(
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
                                          width: wt.width,
                                          backgroundColor: wt.color
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
                                    style: { color: wt.color },
                                    children: wt.strength
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
                                          "data-satisfied": $.length ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            $.length ? /* @__PURE__ */ m.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${$.length ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": $.hasNumber ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            $.hasNumber ? /* @__PURE__ */ m.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${$.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": $.hasUppercase ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            $.hasUppercase ? /* @__PURE__ */ m.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${$.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": $.hasSpecialChar ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            $.hasSpecialChar ? /* @__PURE__ */ m.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${$.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": $.onlyAllowedChars ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            $.onlyAllowedChars ? /* @__PURE__ */ m.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${$.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
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
                                          "data-satisfied": $.differentFromUsername ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            $.differentFromUsername ? /* @__PURE__ */ m.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${$.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
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
                                  checked: Re,
                                  onChange: (oe) => x(oe.target.checked),
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
                      et,
                      {
                        type: Fe.SUBMIT,
                        disabled: L || Me || !on || _e,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! m-0!",
                        children: L ? /* @__PURE__ */ m.jsxs(
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
                      et,
                      {
                        type: Fe.BUTTON,
                        variant: ut.OUTLINE,
                        onClick: () => u(p),
                        disabled: L,
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
    B && /* @__PURE__ */ m.jsx(fc, { message: B, type: Z, onClose: () => X("") })
  ] });
}, OE = ({
  email: l,
  loading: r,
  cooldown: o,
  onResendLink: u,
  onBack: c,
  onClose: f
}) => {
  const h = E.useRef(null);
  E.useEffect(() => {
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
              et,
              {
                onClick: f,
                variant: ut.LINK,
                part: "identity-widget-reset-success-close-button",
                className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Fe.BUTTON,
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
                    src: Ml,
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
            o > 0 && /* @__PURE__ */ m.jsx(
              "p",
              {
                part: "identity-widget-reset-success-cooldown-message",
                className: "identity-widget-reset-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!",
                role: "status",
                "aria-live": "polite",
                children: /* @__PURE__ */ m.jsxs("b", { children: [
                  "We've already sent a reset link. Try again in ",
                  o,
                  "s"
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              et,
              {
                type: Fe.BUTTON,
                onClick: u,
                disabled: r || o > 0,
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
              et,
              {
                type: Fe.BUTTON,
                variant: ut.OUTLINE,
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
}, jE = ({
  email: l,
  onBack: r,
  handleClose: o,
  onCreateAccount: u
}) => {
  const [c, f] = E.useState(l || ""), [h, p] = E.useState(!1), [b, y] = E.useState(!1), [v, S] = E.useState(""), [C, q] = E.useState(!1), [T, L] = E.useState(!1), [O, K] = E.useState(!1), [V, Q] = E.useState(!1), [P, F] = E.useState(""), [re, ne] = E.useState(!1), [J, se] = E.useState(0), pe = Ms(), Je = E.useRef(null), ve = E.useRef(null);
  E.useEffect(() => {
    if (!(J <= 0))
      return ve.current = setTimeout(() => {
        se((M) => M - 1);
      }, 1e3), () => {
        ve.current && clearTimeout(ve.current);
      };
  }, [J]), E.useEffect(() => {
    const M = (z) => {
      z.key === "Escape" && o();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [o]), E.useEffect(() => {
    if (pe) return;
    const M = Nl.test(c);
    if (K(M), !M || !c) {
      L(!1), Q(!1), F(""), ne(!1);
      return;
    }
    const z = setTimeout(async () => {
      q(!0);
      try {
        const Y = await Us(c);
        console.log("[ResetPassword] Email check response:", Y), Y.exists ? (L(!0), ne(!1)) : (L(!1), ne(!0)), console.log("[ResetPassword] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ResetPassword] Error checking email:", Y);
        const ce = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), F(ce), ne(!0), L(!1);
      } finally {
        q(!1);
      }
    }, gn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(z);
  }, [c, pe]);
  const Me = (M) => {
    M.target === Je.current && o();
  }, Ge = async (M) => {
    if (M.preventDefault(), !pe) {
      if (!c) {
        S(je.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await m0(c), console.log("[ResetPassword] Reset link sent to:", c), se(gn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (z) {
        console.error("[ResetPassword] Failed to send reset link:", z);
        const Y = z instanceof Error ? z.message : je.RESET_LINK_FAILED;
        S(Y);
      } finally {
        p(!1);
      }
    }
  }, Qe = async () => {
    if (!(J > 0)) {
      p(!0), S("");
      try {
        await m0(c), console.log("[ResetPassword] Reset link resent to:", c), se(gn.RESEND_COOLDOWN_SECONDS);
      } catch (M) {
        console.error("[ResetPassword] Failed to resend reset link:", M), y(!1);
        const z = M instanceof Error ? M.message : je.RESET_LINK_FAILED;
        S(z);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    OE,
    {
      email: c,
      loading: h,
      cooldown: J,
      onResendLink: Qe,
      onBack: r,
      onClose: o
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Je,
      onMouseDown: Me,
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
              et,
              {
                onClick: o,
                variant: ut.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Fe.BUTTON,
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
                onSubmit: Ge,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ m.jsx(
                        en,
                        {
                          label: "Email Address",
                          id: "reset-email",
                          type: "email",
                          value: c,
                          onChange: (M) => {
                            f(M.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
                          className: "identity-widget-reset-password-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                            C && /* @__PURE__ */ m.jsx(Cs, {}),
                            !C && T && O && !V && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: Ml,
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
                  pe && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      title: je.BRAND_CONFIG_TITLE,
                      message: je.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-reset-password-brand-error-banner mb-4!"
                    }
                  ),
                  !pe && re && !T && O && !V && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.INFO,
                      message: Li.EMAIL_NOT_FOUND,
                      actionText: u ? "Let's create one to continue?" : void 0,
                      onActionClick: u ? () => {
                        ne(!1), u();
                      } : void 0,
                      onClose: () => ne(!1),
                      className: "identity-widget-reset-password-email-not-found-banner mb-4!"
                    }
                  ),
                  !pe && re && V && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      message: P,
                      onClose: () => {
                        ne(!1), Q(!1), F("");
                      },
                      className: "identity-widget-reset-password-email-check-error-banner mb-4!"
                    }
                  ),
                  v && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      message: v,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => S(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  J > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-reset-password-cooldown-message",
                      className: "identity-widget-reset-password-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "We've already sent a reset link. Try again in ",
                        J,
                        "s"
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    et,
                    {
                      type: Fe.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: h || !c || !O || !T || pe || J > 0,
                      className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ResetPassword] Button state:", {
                          loading: h,
                          email: c,
                          isEmailValid: O,
                          emailExists: T
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
                          onClick: (M) => {
                            M.preventDefault(), r();
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
}, DE = ({
  email: l,
  loading: r,
  cooldown: o,
  onResendLink: u,
  onBack: c,
  onClose: f
}) => {
  const h = E.useRef(null);
  E.useEffect(() => {
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
              et,
              {
                onClick: f,
                variant: ut.LINK,
                part: "identity-widget-forgot-username-success-close-button",
                className: "identity-widget-forgot-username-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Fe.BUTTON,
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
                    src: Ml,
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
            o > 0 && /* @__PURE__ */ m.jsx(
              "p",
              {
                part: "identity-widget-forgot-username-success-cooldown-message",
                className: "identity-widget-forgot-username-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!",
                role: "status",
                "aria-live": "polite",
                children: /* @__PURE__ */ m.jsxs("b", { children: [
                  "We've already sent a verification link. Try again in ",
                  o,
                  "s"
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              et,
              {
                type: Fe.BUTTON,
                onClick: u,
                disabled: r || o > 0,
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
              et,
              {
                type: Fe.BUTTON,
                variant: ut.OUTLINE,
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
}, UE = ({
  email: l,
  onBack: r,
  handleClose: o,
  onCreateAccount: u
}) => {
  const [c, f] = E.useState(l || ""), [h, p] = E.useState(!1), [b, y] = E.useState(!1), [v, S] = E.useState(""), [C, q] = E.useState(!1), [T, L] = E.useState(!1), [O, K] = E.useState(!1), [V, Q] = E.useState(!1), [P, F] = E.useState(""), [re, ne] = E.useState(!1), [J, se] = E.useState(0), pe = Ms(), Je = E.useRef(null), ve = E.useRef(null);
  E.useEffect(() => {
    if (!(J <= 0))
      return ve.current = setTimeout(() => {
        se((M) => M - 1);
      }, 1e3), () => {
        ve.current && clearTimeout(ve.current);
      };
  }, [J]), E.useEffect(() => {
    const M = (z) => {
      z.key === "Escape" && o();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [o]), E.useEffect(() => {
    if (pe) return;
    const M = Nl.test(c);
    if (K(M), !M || !c) {
      L(!1), Q(!1), F(""), ne(!1);
      return;
    }
    const z = setTimeout(async () => {
      q(!0);
      try {
        const Y = await Us(c);
        console.log("[ForgotUsername] Email check response:", Y), Y.exists ? (L(!0), ne(!1)) : (L(!1), ne(!0)), console.log("[ForgotUsername] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ForgotUsername] Error checking email:", Y);
        const ce = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), F(ce), ne(!0), L(!1);
      } finally {
        q(!1);
      }
    }, gn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(z);
  }, [c, pe]);
  const Me = (M) => {
    M.target === Je.current && o();
  }, Ge = async (M) => {
    if (M.preventDefault(), !pe) {
      if (!c) {
        S(je.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await h0(c), console.log("[ForgotUsername] Verification link sent to:", c), se(gn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (z) {
        console.error("[ForgotUsername] Failed to send verification link:", z);
        const Y = z instanceof Error ? z.message : je.USERNAME_RECOVERY_FAILED;
        S(Y);
      } finally {
        p(!1);
      }
    }
  }, Qe = async () => {
    if (!(J > 0)) {
      p(!0), S("");
      try {
        await h0(c), console.log("[ForgotUsername] Verification link resent to:", c), se(gn.RESEND_COOLDOWN_SECONDS);
      } catch (M) {
        console.error("[ForgotUsername] Failed to resend verification link:", M), y(!1);
        const z = M instanceof Error ? M.message : je.USERNAME_RECOVERY_FAILED;
        S(z);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    DE,
    {
      email: c,
      loading: h,
      cooldown: J,
      onResendLink: Qe,
      onBack: r,
      onClose: o
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-overlay",
      className: "identity-widget-forgot-username-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Je,
      onMouseDown: Me,
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
              et,
              {
                onClick: o,
                variant: ut.LINK,
                part: "identity-widget-forgot-username-close-button",
                className: "identity-widget-forgot-username-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Fe.BUTTON,
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
                onSubmit: Ge,
                className: "identity-widget-forgot-username-form space-y-4!",
                "aria-label": "Forgot username form",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-email-field",
                      className: "identity-widget-forgot-username-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ m.jsx(
                        en,
                        {
                          label: "Email Address",
                          id: "forgot-username-email",
                          type: "email",
                          value: c,
                          onChange: (M) => {
                            f(M.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
                          className: "identity-widget-forgot-username-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                            C && /* @__PURE__ */ m.jsx(Cs, {}),
                            !C && T && O && !V && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-forgot-username-email-verified-icon",
                                className: "identity-widget-forgot-username-email-verified-icon",
                                src: Ml,
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
                  pe && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      title: je.BRAND_CONFIG_TITLE,
                      message: je.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-forgot-username-brand-error-banner mb-4!"
                    }
                  ),
                  !pe && re && !T && O && !V && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.INFO,
                      message: Li.EMAIL_NOT_FOUND,
                      actionText: u ? "Let's create one to continue?" : void 0,
                      onActionClick: u ? () => {
                        ne(!1), u();
                      } : void 0,
                      onClose: () => ne(!1),
                      className: "identity-widget-forgot-username-email-not-found-banner mb-4!"
                    }
                  ),
                  !pe && re && V && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      message: P,
                      onClose: () => {
                        ne(!1), Q(!1), F("");
                      },
                      className: "identity-widget-forgot-username-email-check-error-banner mb-4!"
                    }
                  ),
                  v && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      message: v,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => S(""),
                      className: "identity-widget-forgot-username-submit-error-banner mb-4!"
                    }
                  ),
                  J > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-forgot-username-cooldown-message",
                      className: "identity-widget-forgot-username-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "We've already sent a verification link. Try again in ",
                        J,
                        "s"
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    et,
                    {
                      type: Fe.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-forgot-username-submit-button",
                      disabled: h || !c || !O || !T || pe || J > 0,
                      className: "identity-widget-submit-button identity-widget-forgot-username-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ForgotUsername] Button state:", {
                          loading: h,
                          email: c,
                          isEmailValid: O,
                          emailExists: T
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
                          onClick: (M) => {
                            M.preventDefault(), r();
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
}, p0 = ({ children: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "px-1! rounded-sm! font-medium!",
    style: { backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" },
    children: l
  }
), uc = ({ label: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!",
    style: {
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)"
    },
    children: l
  }
), ME = ({ onBack: l, handleClose: r }) => {
  const o = E.useRef(null), u = "name@email.com", [c, f] = E.useState(0), h = u.slice(0, c);
  E.useEffect(() => {
    const b = (y) => {
      y.key === "Escape" && r();
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [r]), E.useEffect(() => {
    let b;
    return c < u.length ? b = setTimeout(() => f((y) => y + 1), 120) : b = setTimeout(() => f(0), 1200), () => clearTimeout(b);
  }, [c]);
  const p = (b) => {
    b.target === o.current && r();
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-help-center-overlay",
      className: "identity-widget-help-center-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: o,
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
              et,
              {
                onClick: r,
                variant: ut.LINK,
                part: "identity-widget-help-center-close-button",
                className: "identity-widget-help-center-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Fe.BUTTON,
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
                  /* @__PURE__ */ m.jsx(p0, { children: '"Forgot Password?"' }),
                  " link on the login page to start the password reset process."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(uc, { label: "Step 1" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-4!", children: "Continue to login" }),
                  /* @__PURE__ */ m.jsxs("div", { className: "space-y-3!", children: [
                    /* @__PURE__ */ m.jsx(en, { label: "Email or Username", value: "name@email.com", disabled: !0 }),
                    /* @__PURE__ */ m.jsx(en, { label: "Password", value: "••••••••", disabled: !0 }),
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
                    /* @__PURE__ */ m.jsx(et, { type: Fe.BUTTON, disabled: !0, className: "w-full!", children: "Sign In" })
                  ] })
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, enter your account email address. It should look something like this:" }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(uc, { label: "Step 2" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      className: "rounded-md!",
                      style: { animation: "helpCenterInputFocus 1.4s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(
                        en,
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
                  /* @__PURE__ */ m.jsx(p0, { children: '"Send reset link"' }),
                  "."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(uc, { label: "Step 3" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(en, { label: "Email Address", value: h, disabled: !0 }),
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      className: "block!",
                      style: { animation: "helpCenterClick 1.2s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(et, { type: Fe.BUTTON, disabled: !0, className: "w-full! mt-4!", children: "Send reset link" })
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
              et,
              {
                type: Fe.BUTTON,
                variant: ut.OUTLINE,
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
}, LE = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", zE = ({
  onSuccess: l,
  onError: r,
  handleClose: o,
  authority: u,
  title: c = "Continue to login",
  subtitle: f = "Continue by signing in.",
  initialEmail: h = "",
  enableGoogleLogin: p = !0,
  enableAppleLogin: b = !1,
  appleClientId: y
}) => {
  const [v, S] = E.useState(h), [C, q] = E.useState(""), [T, L] = E.useState(!1), [O, K] = E.useState(!1), [V, Q] = E.useState(!1), [P, F] = E.useState(""), [re, ne] = E.useState(!1), [J, se] = E.useState(!1), [pe, Je] = E.useState(!1), [ve, Me] = E.useState(!1), [Ge, Qe] = E.useState(!1), [M, z] = E.useState(!1), [Y, ce] = E.useState(!1), [Ne, Re] = E.useState(!1), [x, B] = E.useState(!1), [X, Z] = E.useState(""), [fe, ie] = E.useState(""), [be, _e] = E.useState(le.INFO), $ = Ms(), [yn, wt] = E.useState(!1), qn = E.useRef(null), on = E.useRef(null), Ut = E.useRef(!1);
  E.useEffect(() => {
    if (!b || !y || Ut.current) return;
    if (document.querySelector(
      'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]'
    )) {
      Ut.current = !0;
      return;
    }
    const ye = document.createElement("script");
    ye.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", ye.async = !0, ye.onload = () => {
      Ut.current = !0;
    }, document.head.appendChild(ye);
  }, [b, y]);
  const ya = async () => {
    try {
      const ee = window.AppleID;
      if (!ee) {
        const Ye = "Apple Sign In SDK not loaded. Please try again.";
        ie(Ye), _e(le.ERROR), r(Ye);
        return;
      }
      ee.auth.init({
        clientId: y,
        scope: "name email",
        redirectURI: window.location.origin,
        usePopup: !0
      });
      const ye = await ee.auth.signIn();
      console.log("[EmbeddedLogin] Apple auth response received", ye), ie(
        "Apple sign-in completed. Connect this credential to your backend login flow."
      ), _e(le.INFO), F("");
    } catch (ee) {
      if (ee?.error === "popup_closed_by_user")
        return;
      const ye = ee?.error || (ee instanceof Error ? ee.message : "Apple sign-in failed.");
      ie(ye), _e(le.ERROR), r(ye);
    }
  }, Gn = _b({
    onSuccess: async (ee) => {
      try {
        const ye = await AE(ee.code, re);
        l(ye);
      } catch (ye) {
        const Ye = ye instanceof Error ? ye.message : "Google sign-in failed";
        ie(Ye), _e(le.ERROR), r(Ye);
      } finally {
        wt(!1);
      }
    },
    onError: (ee) => {
      const ye = ee?.error_description || ee?.error || "Google sign-in failed.";
      ie(ye), _e(le.ERROR), r(ye), wt(!1);
    },
    onNonOAuthError: (ee) => {
      const ye = `Google sign-in failed: ${ee.type}`;
      ie(ye), _e(le.ERROR), r(ye), wt(!1);
    },
    flow: "auth-code"
  });
  E.useEffect(() => {
    if (!$) {
      if (on.current && clearTimeout(on.current), !v) {
        z(!1), Re(!1), B(!1), Z("");
        return;
      }
      if (!v.includes("@")) {
        z(!0), Re(!1);
        return;
      }
      if (!Nl.test(v)) {
        z(!1), Re(!1);
        return;
      }
      return on.current = setTimeout(async () => {
        ce(!0);
        try {
          (await Us(v)).exists ? (z(!0), Re(!1)) : (z(!1), Re(!0));
        } catch (ee) {
          console.error("[EmbeddedLogin] Email check failed:", ee);
          const ye = ee instanceof Error ? ee.message : "Unable to verify email. You can still proceed with login.";
          B(!0), Z(ye), Re(!0), z(!1);
        } finally {
          ce(!1);
        }
      }, 500), () => {
        on.current && clearTimeout(on.current);
      };
    }
  }, [v, $]);
  const pa = v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  E.useEffect(() => {
    const ee = (ye) => {
      ye.key === "Escape" && o();
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [o]);
  const oe = (ee) => {
    ee.target === qn.current && o();
  }, pt = async (ee) => {
    if (ee.preventDefault(), !$) {
      if (!v || !C) {
        F("Please enter both username/email and password"), r("Please enter both username/email and password");
        return;
      }
      L(!0), F("");
      try {
        const ye = await yg(v, C, re);
        l(ye);
      } catch (ye) {
        console.error("[EmbeddedLogin] Login failed:", ye);
        const Ye = ye instanceof Error ? ye.message : "Authentication failed";
        F(Ye), ie(Ye), _e(le.ERROR), r(Ye);
      } finally {
        L(!1);
      }
    }
  }, tt = (ee) => {
    if (ee.key === "CapsLock" && ee.type === "keydown") {
      Q((ye) => !ye);
      return;
    }
    ee.key !== "CapsLock" && Q(bc(ee));
  };
  return pe ? /* @__PURE__ */ m.jsx(
    jE,
    {
      email: v,
      onBack: () => Je(!1),
      handleClose: o,
      onCreateAccount: () => {
        Je(!1), se(!0);
      }
    }
  ) : ve ? /* @__PURE__ */ m.jsx(
    UE,
    {
      email: v,
      onBack: () => Me(!1),
      handleClose: o,
      onCreateAccount: () => {
        Me(!1), se(!0);
      }
    }
  ) : Ge ? /* @__PURE__ */ m.jsx(ME, { onBack: () => Qe(!1), handleClose: o }) : J ? /* @__PURE__ */ m.jsx(
    _E,
    {
      onSuccess: (ee) => {
        se(!1), l(ee);
      },
      onError: r,
      handleClose: o,
      onSignIn: (ee) => {
        se(!1), ee && S(ee);
      },
      authority: u,
      initialEmail: v
    }
  ) : /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: qn,
      onMouseDown: oe,
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
                et,
                {
                  onClick: o,
                  variant: ut.LINK,
                  part: "identity-widget-login-close-button",
                  className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                  type: Fe.BUTTON,
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
                  onSubmit: pt,
                  className: "identity-widget-login-form space-y-2!",
                  "aria-label": "Login form",
                  children: [
                    p && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                      /* @__PURE__ */ m.jsx(
                        "div",
                        {
                          part: "identity-widget-google-section",
                          className: "identity-widget-google-section mt-0! mb-4! justify-center! hidden!",
                          children: /* @__PURE__ */ m.jsxs(
                            et,
                            {
                              type: Fe.BUTTON,
                              variant: ut.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => {
                                wt(!0), Gn();
                              },
                              disabled: T || yn || $,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: LE,
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
                    b && y && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                      /* @__PURE__ */ m.jsx(
                        "div",
                        {
                          part: "identity-widget-apple-section",
                          className: "identity-widget-apple-section mt-0! mb-4! flex! justify-center! hidden!",
                          children: /* @__PURE__ */ m.jsxs(
                            et,
                            {
                              type: Fe.BUTTON,
                              variant: ut.OUTLINE,
                              part: "identity-widget-apple-button",
                              onClick: ya,
                              disabled: T || $,
                              className: "identity-widget-apple-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "svg",
                                  {
                                    part: "identity-widget-apple-icon",
                                    className: "identity-widget-apple-icon",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    width: "18",
                                    height: "18",
                                    style: { width: 18, height: 18, flexShrink: 0 },
                                    "aria-hidden": "true",
                                    children: /* @__PURE__ */ m.jsx("path", { d: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" })
                                  }
                                ),
                                /* @__PURE__ */ m.jsx("span", { part: "identity-widget-apple-text", className: "identity-widget-apple-text", children: "Sign in with Apple" })
                              ]
                            }
                          )
                        }
                      ),
                      !p && /* @__PURE__ */ m.jsxs(
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
                          en,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: v,
                            onChange: (ee) => S(ee.target.value),
                            placeholder: "Enter email or username",
                            disabled: T,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              Y && /* @__PURE__ */ m.jsx(Cs, {}),
                              !Y && M && pa && !x && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: Ml,
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
                    $ && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        title: je.BRAND_CONFIG_TITLE,
                        message: je.BRAND_CONFIG_MESSAGE,
                        className: "mb-4!"
                      }
                    ),
                    !$ && Ne && !M && pa && !x && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.INFO,
                        message: Li.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          Re(!1), se(!0);
                        },
                        onClose: () => Re(!1),
                        className: "mb-4!"
                      }
                    ),
                    !$ && Ne && x && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        message: X,
                        onClose: () => {
                          Re(!1), B(!1), Z("");
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
                                en,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: O ? "text" : "password",
                                  value: C,
                                  onChange: (ee) => {
                                    q(ee.target.value), F("");
                                  },
                                  onKeyDown: tt,
                                  onKeyUp: tt,
                                  placeholder: "Enter Password...",
                                  disabled: T,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: P,
                                  endIcon: /* @__PURE__ */ m.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-login-password-toggle",
                                      onClick: () => K(!O),
                                      className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": O ? "Hide password" : "Show password",
                                      children: O ? /* @__PURE__ */ m.jsx(
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
                              V && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Li.CAPS_LOCK_ON
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
                                    checked: re,
                                    onChange: (ee) => ne(ee.target.checked),
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
                                    onClick: (ee) => {
                                      ee.preventDefault(), Je(!0);
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
                                    onClick: (ee) => {
                                      ee.preventDefault(), Me(!0);
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
                      et,
                      {
                        type: Fe.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: T || !v || $,
                        className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!",
                        children: T ? /* @__PURE__ */ m.jsxs(
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
                      et,
                      {
                        type: Fe.BUTTON,
                        variant: ut.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => se(!0),
                        disabled: T || yn,
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
                            onClick: () => Qe(!0),
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
        fe && /* @__PURE__ */ m.jsx(fc, { message: fe, type: be, onClose: () => ie("") })
      ]
    }
  );
}, HE = (l) => {
  const { authority: r, subsidiary: o, onRedirect: u, onTokenValidityCheck: c } = l, [f, h] = E.useState(!1), [p, b] = E.useState(l.logoutCounter ?? 0);
  (l.logoutCounter ?? 0) !== p && (b(l.logoutCounter ?? 0), h(!1)), E.useEffect(() => (r ? (mE(r), console.log(`${Xe.AUTH} Authority override set to: ${r}`)) : (f0(), console.log(`${Xe.AUTH} Using automatic authority detection`)), () => {
    f0();
  }), [r]), E.useEffect(() => {
    let C;
    return (async () => {
      const T = await RE();
      typeof T == "function" && (C = T);
    })(), () => {
      C && C();
    };
  }, [f]), E.useEffect(() => {
    (async () => {
      try {
        const q = !xE();
        if (c && c(q), await TE()) {
          h(!0);
          const O = l.redirectUrl || ds();
          if (l.autoRedirection)
            window.location.href = O;
          else if (u && l.redirectUrl) {
            const K = l.redirectUrl || ds(), V = localStorage.getItem(de.ACCESS_TOKEN);
            if (V) {
              const Q = ws(V);
              Q && u(K, Q);
            }
          }
          return;
        }
        if (NE()) {
          if (await Oc()) {
            const K = localStorage.getItem(de.ACCESS_TOKEN);
            if (!K)
              return;
            const V = ws(K);
            if (!V)
              return;
            console.log(`${Xe.AUTH} Auto-login successful`), h(!0), c && c(!0);
            const Q = l.redirectUrl || ds();
            u && (console.log(
              `${Xe.AUTH} Triggering onRedirect callback with user session:`,
              V
            ), u(Q, V)), l.autoRedirection && (window.location.href = Q);
          }
        } else
          localStorage.removeItem(de.REFRESH_TOKEN), localStorage.removeItem(de.REFRESH_TOKEN_TIME);
      } catch (q) {
        console.error(`${Xe.AUTH} Auto-login failed:`, q), localStorage.removeItem(de.REFRESH_TOKEN), localStorage.removeItem(de.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), E.useEffect(() => {
    r && localStorage.setItem("authority", r), o && localStorage.setItem("subsidiary", o);
  }, [r, o]);
  const y = () => {
    l.handleClose && l.handleClose(), h(!0);
    const C = l.redirectUrl || ds();
    if (u) {
      const q = localStorage.getItem(de.ACCESS_TOKEN);
      if (q) {
        const T = ws(q);
        T && u(C, T);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = C;
    }, 100);
  }, v = (C) => {
    console.log(`${Xe.AUTH} Embedded login error:`, C);
  }, S = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ m.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ m.jsx(k1, { children: /* @__PURE__ */ m.jsx(
    H0,
    {
      path: "*",
      element: /* @__PURE__ */ m.jsx(E.Fragment, { children: l.showLogin && !f && /* @__PURE__ */ m.jsx(
        zE,
        {
          onSuccess: y,
          onError: v,
          handleClose: S,
          authority: r,
          title: l.loginTitle,
          subtitle: l.loginSubtitle,
          enableGoogleLogin: !!l.googleClientId,
          enableAppleLogin: !!l.appleClientId,
          appleClientId: l.appleClientId
        }
      ) })
    }
  ) }) });
};
class BE {
  cdnBaseUrl;
  currentBrand = null;
  styleElement = null;
  shadowRoot = null;
  constructor(r = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", o) {
    this.cdnBaseUrl = r.replace(/\/$/, ""), this.shadowRoot = o || null;
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
      const r = await this.getBrands(), o = window.location.hostname, u = r.find(
        (c) => o.includes(c.domain) || c.domain.includes(o)
      );
      return u ? (localStorage.setItem("subsidiary", u.token), u.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${o}`), null);
    } catch (r) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", r), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(r) {
    try {
      const u = (await this.getBrands()).find(
        (b) => b.folder.toLowerCase() === r.toLowerCase() || b.token.toLowerCase() === r.toLowerCase()
      );
      if (!u) {
        console.warn(`[ThemeWidget] Brand not found: ${r}. Using default theme.`), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
        return;
      }
      localStorage.setItem("subsidiary", u.token), localStorage.setItem(
        "brand_data",
        JSON.stringify({
          id: u.folder,
          // Use folder name (e.g., "elite") instead of token (e.g., "dev-elite")
          domain: u.domain,
          name: u.name
        })
      );
      const c = `${this.cdnBaseUrl}/${u.folder}/theme.json`, f = await fetch(c);
      if (!f.ok)
        throw new Error(`Failed to fetch theme: ${f.statusText}`);
      const h = await f.json(), p = document.documentElement;
      h.styles.forEach((b) => {
        let y = b.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), p.style.setProperty(`--${b.name}`, y);
      }), this.currentBrand = u, console.log(`[ThemeWidget] Theme loaded for brand: ${u.name}`), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
    } catch (o) {
      throw console.error("[ThemeWidget] Error loading theme:", o), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")), o;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const o = r.styles.map((c) => {
      const f = this.formatStyleValue(c.value);
      return `  --${c.name}: ${f};`;
    }).join(`
`), u = `@theme {
${o}
}

:host {
${o}
}`;
    this.removeTheme(), this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-theme-widget", "true"), this.styleElement.textContent = u, this.shadowRoot ? this.shadowRoot.appendChild(this.styleElement) : document.head.appendChild(this.styleElement);
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
async function b0(l) {
  const r = new BE(l.cdnBaseUrl, l.shadowRoot), o = l.brandFolder || l.brandToken;
  if (o)
    await r.loadTheme(o);
  else if (l.autoDetect) {
    const u = await r.detectBrandFromDomain();
    u ? await r.loadTheme(u) : (sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")));
  } else
    sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
  return r;
}
const v0 = "78855141571-24q2sm9rjc9ghfobta3f5cjm0fb06e3h.apps.googleusercontent.com", kE = "com.colibri.identity.widget", qE = ({
  clientId: l,
  children: r
}) => l ? /* @__PURE__ */ m.jsx(Cb, { clientId: l, children: r }) : /* @__PURE__ */ m.jsx(m.Fragment, { children: r }), E0 = typeof window < "u" && window.__widgetStyles?.widget || "";
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
        "apple-client-id",
        "appleClientId",
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
      const o = this.attachShadow({ mode: "open" });
      if (E0) {
        const f = document.createElement("style");
        f.textContent = E0, o.appendChild(f);
      }
      this.applyCustomPrimaryColor(o);
      const u = this.getAttribute("subsidiary");
      u && u.trim() !== "" ? this.loadTheme(u, o) : this.loadThemeFromDomain(o);
      const c = document.createElement("div");
      o.appendChild(c), this.root = Tb.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
    }
    applyCustomPrimaryColor(o) {
      const u = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (u && u.trim() !== "") {
        const c = document.createElement("style");
        let f = u.trim();
        /^[0-9A-Fa-f]{6}$/.test(f) && (f = `#${f}`), c.textContent = `
          :host {
            --color-primary: ${f};
            --color-primary-light: ${f};
            --button-primary-bg: ${f};
            --button-primary-bg-hover: ${f};
            --color-border-focus: ${f};
          }
        `, o.appendChild(c), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(o, u) {
      try {
        await b0({
          brandFolder: o,
          shadowRoot: u
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(o) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await b0({
          shadowRoot: o,
          autoDetect: !0
        });
      } catch (u) {
        console.error("[Widget] Failed to auto-detect theme:", u), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(o, u, c) {
      if (u !== c) {
        if (o === "custom-primary-color" || o === "customPrimaryColor") {
          const f = this.shadowRoot;
          f && this.applyCustomPrimaryColor(f);
        }
        this.render();
      }
    }
    disconnectedCallback() {
      this.removeEventListener("logout", this.handleExternalLogoutEvent), this.root && (this.root.unmount(), this.root = null);
    }
    handleExternalLogoutEvent = async (o) => {
      const u = o;
      o.target === this && (u.detail?.initiatedByWidget || await this.executeLogout("event"));
    };
    async executeLogout(o) {
      if (!this.isLogoutInProgress) {
        this.isLogoutInProgress = !0;
        try {
          const u = _t(Be.REFRESH_TOKEN, !0) || localStorage.getItem(de.REFRESH_TOKEN);
          u ? (await SE(u), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (u) {
          console.error("[Widget] Logout API call failed:", u);
        } finally {
          const u = localStorage.getItem("brand_data");
          CE(), sessionStorage.clear(), u && localStorage.setItem("brand_data", u), this.logoutCounter++, this.render(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
          const c = new CustomEvent("logout", {
            detail: { initiatedByWidget: !0, trigger: o },
            bubbles: !0,
            composed: !0
          });
          this.dispatchEvent(c), this.isLogoutInProgress = !1;
        }
      }
    }
    handleRedirect = (o, u) => {
      this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(o, u));
      const c = new CustomEvent("redirect", {
        detail: {
          url: o,
          userSession: u,
          tokens: { access_token: u?.access_token },
          userInfo: u?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c), console.log("[Widget] Redirect event dispatched");
    };
    handleClose = () => {
      this.onClose && (console.log("[Widget] Calling onClose function prop"), this.onClose());
      const o = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o), this.removeAttribute("show-login");
    };
    handleTokenValidity = (o) => {
      this.onTokenValidityCheck && this.onTokenValidityCheck(o);
      const u = new CustomEvent("is-token-valid", {
        detail: o,
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(u);
    };
    getProps() {
      const u = this.getAttribute("authority") || zb(), f = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: u,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirect-url") || this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("login-title") || this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("login-subtitle") || this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: f,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || v0,
        appleClientId: this.getAttribute("apple-client-id") || this.getAttribute("appleClientId") || kE,
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
      const o = this.getProps();
      this.root.render(
        /* @__PURE__ */ m.jsx(qE, { clientId: o.googleClientId || v0, children: /* @__PURE__ */ m.jsx(ub, { children: /* @__PURE__ */ m.jsx(E.StrictMode, { children: /* @__PURE__ */ m.jsx(HE, { ...o }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
