
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-amber-600:oklch(66.6% .179 58.318);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.pointer-events-none\\!{pointer-events:none!important}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-4{left:calc(var(--spacing)*4)}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[2100\\]\\!{z-index:2100!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-4{margin-block:calc(var(--spacing)*4)}.my-4\\!{margin-block:calc(var(--spacing)*4)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-0\\.5\\!{margin-top:calc(var(--spacing)*.5)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-12{height:calc(var(--spacing)*12)}.h-12\\!{height:calc(var(--spacing)*12)!important}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-12{width:calc(var(--spacing)*12)}.w-12\\!{width:calc(var(--spacing)*12)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20{width:calc(var(--spacing)*20)}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl{max-width:var(--container-2xl)}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.max-w-md{max-width:var(--container-md)}.max-w-md\\!{max-width:var(--container-md)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-default{cursor:default}.cursor-default\\!{cursor:default!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc{list-style-type:disc}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.flex-wrap{flex-wrap:wrap}.flex-wrap\\!{flex-wrap:wrap!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-start{align-items:flex-start}.items-start\\!{align-items:flex-start!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5\\!{gap:calc(var(--spacing)*.5)!important}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\!{gap:calc(var(--spacing)*1)!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.border-l-green-500{border-left-color:var(--color-green-500)}.border-l-green-500\\!{border-left-color:var(--color-green-500)!important}.border-l-red-500{border-left-color:var(--color-red-500)}.border-l-red-500\\!{border-left-color:var(--color-red-500)!important}.border-l-yellow-500{border-left-color:var(--color-yellow-500)}.border-l-yellow-500\\!{border-left-color:var(--color-yellow-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-5{padding:calc(var(--spacing)*5)}.p-5\\!{padding:calc(var(--spacing)*5)!important}.p-6{padding:calc(var(--spacing)*6)}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5{padding-inline:calc(var(--spacing)*5)}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4{padding-block:calc(var(--spacing)*4)}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[\\#d64545\\]\\!{color:#d64545!important}.text-\\[var\\(--banner-error-text\\)\\]\\!{color:var(--banner-error-text)!important}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-amber-600{color:var(--color-amber-600)}.text-amber-600\\!{color:var(--color-amber-600)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400{color:var(--color-blue-400)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-green-900\\!{color:var(--color-green-900)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-red-900\\!{color:var(--color-red-900)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-500{color:var(--color-yellow-500)}.text-yellow-500\\!{color:var(--color-yellow-500)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-900{color:var(--color-yellow-900)}.text-yellow-900\\!{color:var(--color-yellow-900)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-200\\!{--tw-duration:.2s!important;transition-duration:.2s!important}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:border-gray-400\\!:hover{border-color:var(--color-gray-400)!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:underline\\!:hover{text-decoration-line:underline!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-30\\!:disabled{opacity:.3!important}.disabled\\:opacity-50:disabled{opacity:.5}@media not all and (min-width:500px){.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-\\[3px\\]\\!::-webkit-scrollbar{width:3px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-200\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-200)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:hidden\\!::-webkit-scrollbar-track{display:none!important}}.identity-widget-create-account-phone-input.PhoneInput{--PhoneInput-color--focus:#03b2cb;--PhoneInputCountrySelectArrow-width:.3em;--PhoneInputCountrySelectArrow-borderWidth:1px;--PhoneInputCountryFlag-aspectRatio:1.5;--PhoneInputCountryFlag-height:1em;--PhoneInputCountryFlag-borderWidth:1px;--PhoneInputCountryFlag-borderColor:#00000080;align-items:center;gap:.5rem;display:flex}.identity-widget-create-account-phone-input .PhoneInputCountryIcon{width:1.5em;height:1em;overflow:hidden}.identity-widget-create-account-phone-input .PhoneInputCountryIcon img,.identity-widget-create-account-phone-input .PhoneInputCountryIcon svg{object-fit:cover;width:100%;height:100%}.identity-widget-create-account-phone-input .PhoneInputCountry{background:#fff;border:1px solid #cbd5d5;border-radius:.375rem;align-items:center;gap:.25rem;padding:.625rem .75rem;display:flex;position:relative}.identity-widget-create-account-phone-input .PhoneInputCountrySelect{z-index:1;opacity:0;cursor:pointer;border:0;width:100%;height:100%;position:absolute;top:0;left:0}.identity-widget-create-account-phone-input .PhoneInputCountrySelect[disabled]{cursor:default}.identity-widget-create-account-phone-input .PhoneInputCountrySelectArrow{border-style:solid;border-color:inherit;opacity:.45;border-width:0 1px 1px 0;width:.3em;height:.3em;margin-left:.35em;display:block;transform:rotate(45deg)}.identity-widget-create-account-phone-input .PhoneInputInput{box-sizing:border-box;background:#fff;border:1px solid #cbd5d5;border-radius:.375rem;outline:none;flex:1;min-width:0;padding:.625rem 2.5rem .625rem .75rem;font-size:.875rem}.identity-widget-create-account-phone-input .PhoneInputInput:focus{box-shadow:0 0 0 3px #3b82f614}.identity-widget-create-account-phone-input.PhoneInput--error .PhoneInputCountry,.identity-widget-create-account-phone-input.PhoneInput--error .PhoneInputInput{border-color:#d64545}.identity-widget-create-account-form>*+*{margin-top:0}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}.identity-widget-create-account-modal::-webkit-scrollbar{width:3px;height:3px}.identity-widget-login-modal::-webkit-scrollbar{width:3px;height:3px}.identity-widget-create-account-modal::-webkit-scrollbar-track{display:none}.identity-widget-login-modal::-webkit-scrollbar-track{display:none}.identity-widget-create-account-modal::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:9999px}.identity-widget-login-modal::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:9999px}.identity-widget-create-account-modal::-webkit-scrollbar-thumb:hover{background:#d1d5db}.identity-widget-login-modal::-webkit-scrollbar-thumb:hover{background:#d1d5db}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function Vd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xc = { exports: {} }, ul = {};
var ch;
function W2() {
  if (ch) return ul;
  ch = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(l, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var h in u)
        h !== "key" && (c[h] = u[h]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: l,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return ul.Fragment = a, ul.jsx = r, ul.jsxs = r, ul;
}
var dh;
function J2() {
  return dh || (dh = 1, Xc.exports = W2()), Xc.exports;
}
var y = J2(), Zc = { exports: {} }, me = {}, fh;
function e4() {
  if (fh) return me;
  fh = 1;
  var n = {};
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), _ = Symbol.iterator;
  function E(x) {
    return x === null || typeof x != "object" ? null : (x = _ && x[_] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, M = {};
  function H(x, B, Y) {
    this.props = x, this.context = B, this.refs = M, this.updater = Y || A;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(x, B) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, B, "setState");
  }, H.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function q() {
  }
  q.prototype = H.prototype;
  function Z(x, B, Y) {
    this.props = x, this.context = B, this.refs = M, this.updater = Y || A;
  }
  var V = Z.prototype = new q();
  V.constructor = Z, C(V, H.prototype), V.isPureReactComponent = !0;
  var ee = Array.isArray;
  function W() {
  }
  var X = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function se(x, B, Y) {
    var Q = Y.ref;
    return {
      $$typeof: a,
      type: x,
      key: B,
      ref: Q !== void 0 ? Q : null,
      props: Y
    };
  }
  function Pe(x, B) {
    return se(x.type, B, x.props);
  }
  function ve(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function _e(x) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(Y) {
      return B[Y];
    });
  }
  var ke = /\/+/g;
  function qe(x, B) {
    return typeof x == "object" && x !== null && x.key != null ? _e("" + x.key) : B.toString(36);
  }
  function P(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(W, W) : (x.status = "pending", x.then(
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
  function k(x, B, Y, Q, de) {
    var ce = typeof x;
    (ce === "undefined" || ce === "boolean") && (x = null);
    var Ee = !1;
    if (x === null) Ee = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case r:
              Ee = !0;
              break;
            case $:
              return Ee = x._init, k(
                Ee(x._payload),
                B,
                Y,
                Q,
                de
              );
          }
      }
    if (Ee)
      return de = de(x), Ee = Q === "" ? "." + qe(x, 0) : Q, ee(de) ? (Y = "", Ee != null && (Y = Ee.replace(ke, "$&/") + "/"), k(de, B, Y, "", function(Ft) {
        return Ft;
      })) : de != null && (ve(de) && (de = Pe(
        de,
        Y + (de.key == null || x && x.key === de.key ? "" : ("" + de.key).replace(
          ke,
          "$&/"
        ) + "/") + Ee
      )), B.push(de)), 1;
    Ee = 0;
    var Ze = Q === "" ? "." : Q + ":";
    if (ee(x))
      for (var Ie = 0; Ie < x.length; Ie++)
        Q = x[Ie], ce = Ze + qe(Q, Ie), Ee += k(
          Q,
          B,
          Y,
          ce,
          de
        );
    else if (Ie = E(x), typeof Ie == "function")
      for (x = Ie.call(x), Ie = 0; !(Q = x.next()).done; )
        Q = Q.value, ce = Ze + qe(Q, Ie++), Ee += k(
          Q,
          B,
          Y,
          ce,
          de
        );
    else if (ce === "object") {
      if (typeof x.then == "function")
        return k(
          P(x),
          B,
          Y,
          Q,
          de
        );
      throw B = String(x), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function G(x, B, Y) {
    if (x == null) return x;
    var Q = [], de = 0;
    return k(x, Q, "", "", function(ce) {
      return B.call(Y, ce, de++);
    }), Q;
  }
  function fe(x) {
    if (x._status === -1) {
      var B = x._result;
      B = B(), B.then(
        function(Y) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = Y);
        },
        function(Y) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = Y);
        }
      ), x._status === -1 && (x._status = 0, x._result = B);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var Oe = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, Ae = {
    map: G,
    forEach: function(x, B, Y) {
      G(
        x,
        function() {
          B.apply(this, arguments);
        },
        Y
      );
    },
    count: function(x) {
      var B = 0;
      return G(x, function() {
        B++;
      }), B;
    },
    toArray: function(x) {
      return G(x, function(B) {
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
  return me.Activity = N, me.Children = Ae, me.Component = H, me.Fragment = l, me.Profiler = c, me.PureComponent = Z, me.StrictMode = u, me.Suspense = g, me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return X.H.useMemoCache(x);
    }
  }, me.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, me.cacheSignal = function() {
    return null;
  }, me.cloneElement = function(x, B, Y) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var Q = C({}, x.props), de = x.key;
    if (B != null)
      for (ce in B.key !== void 0 && (de = "" + B.key), B)
        !ae.call(B, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && B.ref === void 0 || (Q[ce] = B[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) Q.children = Y;
    else if (1 < ce) {
      for (var Ee = Array(ce), Ze = 0; Ze < ce; Ze++)
        Ee[Ze] = arguments[Ze + 2];
      Q.children = Ee;
    }
    return se(x.type, de, Q);
  }, me.createContext = function(x) {
    return x = {
      $$typeof: h,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: f,
      _context: x
    }, x;
  }, me.createElement = function(x, B, Y) {
    var Q, de = {}, ce = null;
    if (B != null)
      for (Q in B.key !== void 0 && (ce = "" + B.key), B)
        ae.call(B, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (de[Q] = B[Q]);
    var Ee = arguments.length - 2;
    if (Ee === 1) de.children = Y;
    else if (1 < Ee) {
      for (var Ze = Array(Ee), Ie = 0; Ie < Ee; Ie++)
        Ze[Ie] = arguments[Ie + 2];
      de.children = Ze;
    }
    if (x && x.defaultProps)
      for (Q in Ee = x.defaultProps, Ee)
        de[Q] === void 0 && (de[Q] = Ee[Q]);
    return se(x, ce, de);
  }, me.createRef = function() {
    return { current: null };
  }, me.forwardRef = function(x) {
    return { $$typeof: p, render: x };
  }, me.isValidElement = ve, me.lazy = function(x) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: x },
      _init: fe
    };
  }, me.memo = function(x, B) {
    return {
      $$typeof: b,
      type: x,
      compare: B === void 0 ? null : B
    };
  }, me.startTransition = function(x) {
    var B = X.T, Y = {};
    X.T = Y;
    try {
      var Q = x(), de = X.S;
      de !== null && de(Y, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(W, Oe);
    } catch (ce) {
      Oe(ce);
    } finally {
      B !== null && Y.types !== null && (B.types = Y.types), X.T = B;
    }
  }, me.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, me.use = function(x) {
    return X.H.use(x);
  }, me.useActionState = function(x, B, Y) {
    return X.H.useActionState(x, B, Y);
  }, me.useCallback = function(x, B) {
    return X.H.useCallback(x, B);
  }, me.useContext = function(x) {
    return X.H.useContext(x);
  }, me.useDebugValue = function() {
  }, me.useDeferredValue = function(x, B) {
    return X.H.useDeferredValue(x, B);
  }, me.useEffect = function(x, B) {
    return X.H.useEffect(x, B);
  }, me.useEffectEvent = function(x) {
    return X.H.useEffectEvent(x);
  }, me.useId = function() {
    return X.H.useId();
  }, me.useImperativeHandle = function(x, B, Y) {
    return X.H.useImperativeHandle(x, B, Y);
  }, me.useInsertionEffect = function(x, B) {
    return X.H.useInsertionEffect(x, B);
  }, me.useLayoutEffect = function(x, B) {
    return X.H.useLayoutEffect(x, B);
  }, me.useMemo = function(x, B) {
    return X.H.useMemo(x, B);
  }, me.useOptimistic = function(x, B) {
    return X.H.useOptimistic(x, B);
  }, me.useReducer = function(x, B, Y) {
    return X.H.useReducer(x, B, Y);
  }, me.useRef = function(x) {
    return X.H.useRef(x);
  }, me.useState = function(x) {
    return X.H.useState(x);
  }, me.useSyncExternalStore = function(x, B, Y) {
    return X.H.useSyncExternalStore(
      x,
      B,
      Y
    );
  }, me.useTransition = function() {
    return X.H.useTransition();
  }, me.version = "19.2.3", me;
}
var mh;
function Yd() {
  return mh || (mh = 1, Zc.exports = e4()), Zc.exports;
}
var w = Yd();
const ue = /* @__PURE__ */ Vd(w);
var hh = "popstate";
function t4(n = {}) {
  function a(l, u) {
    let { pathname: c, search: f, hash: h } = l.location;
    return bd(
      "",
      { pathname: c, search: f, hash: h },
      // state defaults to `null` because `window.history.state` does
      u.state && u.state.usr || null,
      u.state && u.state.key || "default"
    );
  }
  function r(l, u) {
    return typeof u == "string" ? u : ml(u);
  }
  return a4(
    a,
    r,
    null,
    n
  );
}
function Je(n, a) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(a);
}
function Nn(n, a) {
  if (!n) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function n4() {
  return Math.random().toString(36).substring(2, 10);
}
function gh(n, a) {
  return {
    usr: n.state,
    key: n.key,
    idx: a
  };
}
function bd(n, a, r = null, l) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? di(a) : a,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || l || n4()
  };
}
function ml({
  pathname: n = "/",
  search: a = "",
  hash: r = ""
}) {
  return a && a !== "?" && (n += a.charAt(0) === "?" ? a : "?" + a), r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r), n;
}
function di(n) {
  let a = {};
  if (n) {
    let r = n.indexOf("#");
    r >= 0 && (a.hash = n.substring(r), n = n.substring(0, r));
    let l = n.indexOf("?");
    l >= 0 && (a.search = n.substring(l), n = n.substring(0, l)), n && (a.pathname = n);
  }
  return a;
}
function a4(n, a, r, l = {}) {
  let { window: u = document.defaultView, v5Compat: c = !1 } = l, f = u.history, h = "POP", p = null, g = b();
  g == null && (g = 0, f.replaceState({ ...f.state, idx: g }, ""));
  function b() {
    return (f.state || { idx: null }).idx;
  }
  function $() {
    h = "POP";
    let C = b(), M = C == null ? null : C - g;
    g = C, p && p({ action: h, location: A.location, delta: M });
  }
  function N(C, M) {
    h = "PUSH";
    let H = bd(A.location, C, M);
    g = b() + 1;
    let q = gh(H, g), Z = A.createHref(H);
    try {
      f.pushState(q, "", Z);
    } catch (V) {
      if (V instanceof DOMException && V.name === "DataCloneError")
        throw V;
      u.location.assign(Z);
    }
    c && p && p({ action: h, location: A.location, delta: 1 });
  }
  function _(C, M) {
    h = "REPLACE";
    let H = bd(A.location, C, M);
    g = b();
    let q = gh(H, g), Z = A.createHref(H);
    f.replaceState(q, "", Z), c && p && p({ action: h, location: A.location, delta: 0 });
  }
  function E(C) {
    return r4(C);
  }
  let A = {
    get action() {
      return h;
    },
    get location() {
      return n(u, f);
    },
    listen(C) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return u.addEventListener(hh, $), p = C, () => {
        u.removeEventListener(hh, $), p = null;
      };
    },
    createHref(C) {
      return a(u, C);
    },
    createURL: E,
    encodeLocation(C) {
      let M = E(C);
      return {
        pathname: M.pathname,
        search: M.search,
        hash: M.hash
      };
    },
    push: N,
    replace: _,
    go(C) {
      return f.go(C);
    }
  };
  return A;
}
function r4(n, a = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), Je(r, "No window.location.(origin|href) available to create URL");
  let l = typeof n == "string" ? n : ml(n);
  return l = l.replace(/ $/, "%20"), !a && l.startsWith("//") && (l = r + l), new URL(l, r);
}
function ey(n, a, r = "/") {
  return i4(n, a, r, !1);
}
function i4(n, a, r, l) {
  let u = typeof a == "string" ? di(a) : a, c = ia(u.pathname || "/", r);
  if (c == null)
    return null;
  let f = ty(n);
  l4(f);
  let h = null;
  for (let p = 0; h == null && p < f.length; ++p) {
    let g = p4(c);
    h = g4(
      f[p],
      g,
      l
    );
  }
  return h;
}
function ty(n, a = [], r = [], l = "", u = !1) {
  let c = (f, h, p = u, g) => {
    let b = {
      relativePath: g === void 0 ? f.path || "" : g,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(l) && p)
        return;
      Je(
        b.relativePath.startsWith(l),
        `Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(l.length);
    }
    let $ = na([l, b.relativePath]), N = r.concat(b);
    f.children && f.children.length > 0 && (Je(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${$}".`
    ), ty(
      f.children,
      a,
      N,
      $,
      p
    )), !(f.path == null && !f.index) && a.push({
      path: $,
      score: m4($, f.index),
      routesMeta: N
    });
  };
  return n.forEach((f, h) => {
    if (f.path === "" || !f.path?.includes("?"))
      c(f, h);
    else
      for (let p of ny(f.path))
        c(f, h, !0, p);
  }), a;
}
function ny(n) {
  let a = n.split("/");
  if (a.length === 0) return [];
  let [r, ...l] = a, u = r.endsWith("?"), c = r.replace(/\?$/, "");
  if (l.length === 0)
    return u ? [c, ""] : [c];
  let f = ny(l.join("/")), h = [];
  return h.push(
    ...f.map(
      (p) => p === "" ? c : [c, p].join("/")
    )
  ), u && h.push(...f), h.map(
    (p) => n.startsWith("/") && p === "" ? "/" : p
  );
}
function l4(n) {
  n.sort(
    (a, r) => a.score !== r.score ? r.score - a.score : h4(
      a.routesMeta.map((l) => l.childrenIndex),
      r.routesMeta.map((l) => l.childrenIndex)
    )
  );
}
var o4 = /^:[\w-]+$/, u4 = 3, s4 = 2, c4 = 1, d4 = 10, f4 = -2, yh = (n) => n === "*";
function m4(n, a) {
  let r = n.split("/"), l = r.length;
  return r.some(yh) && (l += f4), a && (l += s4), r.filter((u) => !yh(u)).reduce(
    (u, c) => u + (o4.test(c) ? u4 : c === "" ? c4 : d4),
    l
  );
}
function h4(n, a) {
  return n.length === a.length && n.slice(0, -1).every((l, u) => l === a[u]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    n[n.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function g4(n, a, r = !1) {
  let { routesMeta: l } = n, u = {}, c = "/", f = [];
  for (let h = 0; h < l.length; ++h) {
    let p = l[h], g = h === l.length - 1, b = c === "/" ? a : a.slice(c.length) || "/", $ = du(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
      b
    ), N = p.route;
    if (!$ && g && r && !l[l.length - 1].route.index && ($ = du(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !$)
      return null;
    Object.assign(u, $.params), f.push({
      // TODO: Can this as be avoided?
      params: u,
      pathname: na([c, $.pathname]),
      pathnameBase: w4(
        na([c, $.pathnameBase])
      ),
      route: N
    }), $.pathnameBase !== "/" && (c = na([c, $.pathnameBase]));
  }
  return f;
}
function du(n, a) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [r, l] = y4(
    n.path,
    n.caseSensitive,
    n.end
  ), u = a.match(r);
  if (!u) return null;
  let c = u[0], f = c.replace(/(.)\/+$/, "$1"), h = u.slice(1);
  return {
    params: l.reduce(
      (g, { paramName: b, isOptional: $ }, N) => {
        if (b === "*") {
          let E = h[N] || "";
          f = c.slice(0, c.length - E.length).replace(/(.)\/+$/, "$1");
        }
        const _ = h[N];
        return $ && !_ ? g[b] = void 0 : g[b] = (_ || "").replace(/%2F/g, "/"), g;
      },
      {}
    ),
    pathname: c,
    pathnameBase: f,
    pattern: n
  };
}
function y4(n, a = !1, r = !0) {
  Nn(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let l = [], u = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (f, h, p) => (l.push({ paramName: h, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return n.endsWith("*") ? (l.push({ paramName: "*" }), u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? u += "\\/*$" : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"), [new RegExp(u, a ? void 0 : "i"), l];
}
function p4(n) {
  try {
    return n.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Nn(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), n;
  }
}
function ia(n, a) {
  if (a === "/") return n;
  if (!n.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let r = a.endsWith("/") ? a.length - 1 : a.length, l = n.charAt(r);
  return l && l !== "/" ? null : n.slice(r) || "/";
}
var ay = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, v4 = (n) => ay.test(n);
function b4(n, a = "/") {
  let {
    pathname: r,
    search: l = "",
    hash: u = ""
  } = typeof n == "string" ? di(n) : n, c;
  if (r)
    if (v4(r))
      c = r;
    else {
      if (r.includes("//")) {
        let f = r;
        r = r.replace(/\/\/+/g, "/"), Nn(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${f} -> ${r}`
        );
      }
      r.startsWith("/") ? c = ph(r.substring(1), "/") : c = ph(r, a);
    }
  else
    c = a;
  return {
    pathname: c,
    search: E4(l),
    hash: S4(u)
  };
}
function ph(n, a) {
  let r = a.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((u) => {
    u === ".." ? r.length > 1 && r.pop() : u !== "." && r.push(u);
  }), r.length > 1 ? r.join("/") : "/";
}
function Qc(n, a, r, l) {
  return `Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    l
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $4(n) {
  return n.filter(
    (a, r) => r === 0 || a.route.path && a.route.path.length > 0
  );
}
function ry(n) {
  let a = $4(n);
  return a.map(
    (r, l) => l === a.length - 1 ? r.pathname : r.pathnameBase
  );
}
function iy(n, a, r, l = !1) {
  let u;
  typeof n == "string" ? u = di(n) : (u = { ...n }, Je(
    !u.pathname || !u.pathname.includes("?"),
    Qc("?", "pathname", "search", u)
  ), Je(
    !u.pathname || !u.pathname.includes("#"),
    Qc("#", "pathname", "hash", u)
  ), Je(
    !u.search || !u.search.includes("#"),
    Qc("#", "search", "hash", u)
  ));
  let c = n === "" || u.pathname === "", f = c ? "/" : u.pathname, h;
  if (f == null)
    h = r;
  else {
    let $ = a.length - 1;
    if (!l && f.startsWith("..")) {
      let N = f.split("/");
      for (; N[0] === ".."; )
        N.shift(), $ -= 1;
      u.pathname = N.join("/");
    }
    h = $ >= 0 ? a[$] : "/";
  }
  let p = b4(u, h), g = f && f !== "/" && f.endsWith("/"), b = (c || f === ".") && r.endsWith("/");
  return !p.pathname.endsWith("/") && (g || b) && (p.pathname += "/"), p;
}
var na = (n) => n.join("/").replace(/\/\/+/g, "/"), w4 = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), E4 = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, S4 = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n, C4 = class {
  constructor(n, a, r, l = !1) {
    this.status = n, this.statusText = a || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function N4(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
function x4(n) {
  return n.map((a) => a.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ly = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function oy(n, a) {
  let r = n;
  if (typeof r != "string" || !ay.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let l = r, u = !1;
  if (ly)
    try {
      let c = new URL(window.location.href), f = r.startsWith("//") ? new URL(c.protocol + r) : new URL(r), h = ia(f.pathname, a);
      f.origin === c.origin && h != null ? r = h + f.search + f.hash : u = !0;
    } catch {
      Nn(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: l,
    isExternal: u,
    to: r
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var uy = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  uy
);
var T4 = [
  "GET",
  ...uy
];
new Set(T4);
var fi = w.createContext(null);
fi.displayName = "DataRouter";
var wu = w.createContext(null);
wu.displayName = "DataRouterState";
var O4 = w.createContext(!1), sy = w.createContext({
  isTransitioning: !1
});
sy.displayName = "ViewTransition";
var A4 = w.createContext(
  /* @__PURE__ */ new Map()
);
A4.displayName = "Fetchers";
var R4 = w.createContext(null);
R4.displayName = "Await";
var yn = w.createContext(
  null
);
yn.displayName = "Navigation";
var Rl = w.createContext(
  null
);
Rl.displayName = "Location";
var ua = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ua.displayName = "Route";
var Xd = w.createContext(null);
Xd.displayName = "RouteError";
var cy = "REACT_ROUTER_ERROR", _4 = "REDIRECT", j4 = "ROUTE_ERROR_RESPONSE";
function D4(n) {
  if (n.startsWith(`${cy}:${_4}:{`))
    try {
      let a = JSON.parse(n.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function M4(n) {
  if (n.startsWith(
    `${cy}:${j4}:{`
  ))
    try {
      let a = JSON.parse(n.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new C4(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function L4(n, { relative: a } = {}) {
  Je(
    _l(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: l } = w.useContext(yn), { hash: u, pathname: c, search: f } = jl(n, { relative: a }), h = c;
  return r !== "/" && (h = c === "/" ? r : na([r, c])), l.createHref({ pathname: h, search: f, hash: u });
}
function _l() {
  return w.useContext(Rl) != null;
}
function sr() {
  return Je(
    _l(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), w.useContext(Rl).location;
}
var dy = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function fy(n) {
  w.useContext(yn).static || w.useLayoutEffect(n);
}
function U4() {
  let { isDataRoute: n } = w.useContext(ua);
  return n ? X4() : P4();
}
function P4() {
  Je(
    _l(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = w.useContext(fi), { basename: a, navigator: r } = w.useContext(yn), { matches: l } = w.useContext(ua), { pathname: u } = sr(), c = JSON.stringify(ry(l)), f = w.useRef(!1);
  return fy(() => {
    f.current = !0;
  }), w.useCallback(
    (p, g = {}) => {
      if (Nn(f.current, dy), !f.current) return;
      if (typeof p == "number") {
        r.go(p);
        return;
      }
      let b = iy(
        p,
        JSON.parse(c),
        u,
        g.relative === "path"
      );
      n == null && a !== "/" && (b.pathname = b.pathname === "/" ? a : na([a, b.pathname])), (g.replace ? r.replace : r.push)(
        b,
        g.state,
        g
      );
    },
    [
      a,
      r,
      c,
      u,
      n
    ]
  );
}
w.createContext(null);
function jl(n, { relative: a } = {}) {
  let { matches: r } = w.useContext(ua), { pathname: l } = sr(), u = JSON.stringify(ry(r));
  return w.useMemo(
    () => iy(
      n,
      JSON.parse(u),
      l,
      a === "path"
    ),
    [n, u, l, a]
  );
}
function k4(n, a) {
  return my(n, a);
}
function my(n, a, r, l, u) {
  Je(
    _l(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = w.useContext(yn), { matches: f } = w.useContext(ua), h = f[f.length - 1], p = h ? h.params : {}, g = h ? h.pathname : "/", b = h ? h.pathnameBase : "/", $ = h && h.route;
  {
    let H = $ && $.path || "";
    gy(
      g,
      !$ || H.endsWith("*") || H.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === "/" ? "*" : `${H}/*`}">.`
    );
  }
  let N = sr(), _;
  if (a) {
    let H = typeof a == "string" ? di(a) : a;
    Je(
      b === "/" || H.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`
    ), _ = H;
  } else
    _ = N;
  let E = _.pathname || "/", A = E;
  if (b !== "/") {
    let H = b.replace(/^\//, "").split("/");
    A = "/" + E.replace(/^\//, "").split("/").slice(H.length).join("/");
  }
  let C = ey(n, { pathname: A });
  Nn(
    $ || C != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Nn(
    C == null || C[C.length - 1].route.element !== void 0 || C[C.length - 1].route.Component !== void 0 || C[C.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let M = F4(
    C && C.map(
      (H) => Object.assign({}, H, {
        params: Object.assign({}, p, H.params),
        pathname: na([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            H.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : H.pathname
        ]),
        pathnameBase: H.pathnameBase === "/" ? b : na([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            H.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : H.pathnameBase
        ])
      })
    ),
    f,
    r,
    l,
    u
  );
  return a && M ? /* @__PURE__ */ w.createElement(
    Rl.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ..._
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    M
  ) : M;
}
function I4() {
  let n = Y4(), a = N4(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), r = n instanceof Error ? n.stack : null, l = "rgba(200,200,200, 0.5)", u = { padding: "0.5rem", backgroundColor: l }, c = { padding: "2px 4px", backgroundColor: l }, f = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), f = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ w.createElement("code", { style: c }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ w.createElement("code", { style: c }, "errorElement"), " prop on your route.")), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ w.createElement("h3", { style: { fontStyle: "italic" } }, a), r ? /* @__PURE__ */ w.createElement("pre", { style: u }, r) : null, f);
}
var B4 = /* @__PURE__ */ w.createElement(I4, null), hy = class extends w.Component {
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
  static getDerivedStateFromProps(n, a) {
    return a.location !== n.location || a.revalidation !== "idle" && n.revalidation === "idle" ? {
      error: n.error,
      location: n.location,
      revalidation: n.revalidation
    } : {
      error: n.error !== void 0 ? n.error : a.error,
      location: a.location,
      revalidation: n.revalidation || a.revalidation
    };
  }
  componentDidCatch(n, a) {
    this.props.onError ? this.props.onError(n, a) : console.error(
      "React Router caught the following error during render",
      n
    );
  }
  render() {
    let n = this.state.error;
    if (this.context && typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
      const r = M4(n.digest);
      r && (n = r);
    }
    let a = n !== void 0 ? /* @__PURE__ */ w.createElement(ua.Provider, { value: this.props.routeContext }, /* @__PURE__ */ w.createElement(
      Xd.Provider,
      {
        value: n,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ w.createElement(H4, { error: n }, a) : a;
  }
};
hy.contextType = O4;
var Wc = /* @__PURE__ */ new WeakMap();
function H4({
  children: n,
  error: a
}) {
  let { basename: r } = w.useContext(yn);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let l = D4(a.digest);
    if (l) {
      let u = Wc.get(a);
      if (u) throw u;
      let c = oy(l.location, r);
      if (ly && !Wc.get(a))
        if (c.isExternal || l.reloadDocument)
          window.location.href = c.absoluteURL || c.to;
        else {
          const f = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(c.to, {
              replace: l.replace
            })
          );
          throw Wc.set(a, f), f;
        }
      return /* @__PURE__ */ w.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${c.absoluteURL || c.to}`
        }
      );
    }
  }
  return n;
}
function z4({ routeContext: n, match: a, children: r }) {
  let l = w.useContext(fi);
  return l && l.static && l.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ w.createElement(ua.Provider, { value: n }, r);
}
function F4(n, a = [], r = null, l = null, u = null) {
  if (n == null) {
    if (!r)
      return null;
    if (r.errors)
      n = r.matches;
    else if (a.length === 0 && !r.initialized && r.matches.length > 0)
      n = r.matches;
    else
      return null;
  }
  let c = n, f = r?.errors;
  if (f != null) {
    let b = c.findIndex(
      ($) => $.route.id && f?.[$.route.id] !== void 0
    );
    Je(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), c = c.slice(
      0,
      Math.min(c.length, b + 1)
    );
  }
  let h = !1, p = -1;
  if (r)
    for (let b = 0; b < c.length; b++) {
      let $ = c[b];
      if (($.route.HydrateFallback || $.route.hydrateFallbackElement) && (p = b), $.route.id) {
        let { loaderData: N, errors: _ } = r, E = $.route.loader && !N.hasOwnProperty($.route.id) && (!_ || _[$.route.id] === void 0);
        if ($.route.lazy || E) {
          h = !0, p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  let g = r && l ? (b, $) => {
    l(b, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      unstable_pattern: x4(r.matches),
      errorInfo: $
    });
  } : void 0;
  return c.reduceRight(
    (b, $, N) => {
      let _, E = !1, A = null, C = null;
      r && (_ = f && $.route.id ? f[$.route.id] : void 0, A = $.route.errorElement || B4, h && (p < 0 && N === 0 ? (gy(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), E = !0, C = null) : p === N && (E = !0, C = $.route.hydrateFallbackElement || null)));
      let M = a.concat(c.slice(0, N + 1)), H = () => {
        let q;
        return _ ? q = A : E ? q = C : $.route.Component ? q = /* @__PURE__ */ w.createElement($.route.Component, null) : $.route.element ? q = $.route.element : q = b, /* @__PURE__ */ w.createElement(
          z4,
          {
            match: $,
            routeContext: {
              outlet: b,
              matches: M,
              isDataRoute: r != null
            },
            children: q
          }
        );
      };
      return r && ($.route.ErrorBoundary || $.route.errorElement || N === 0) ? /* @__PURE__ */ w.createElement(
        hy,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: A,
          error: _,
          children: H(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          onError: g
        }
      ) : H();
    },
    null
  );
}
function Zd(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function G4(n) {
  let a = w.useContext(fi);
  return Je(a, Zd(n)), a;
}
function q4(n) {
  let a = w.useContext(wu);
  return Je(a, Zd(n)), a;
}
function K4(n) {
  let a = w.useContext(ua);
  return Je(a, Zd(n)), a;
}
function Qd(n) {
  let a = K4(n), r = a.matches[a.matches.length - 1];
  return Je(
    r.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function V4() {
  return Qd(
    "useRouteId"
    /* UseRouteId */
  );
}
function Y4() {
  let n = w.useContext(Xd), a = q4(
    "useRouteError"
    /* UseRouteError */
  ), r = Qd(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : a.errors?.[r];
}
function X4() {
  let { router: n } = G4(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Qd(
    "useNavigate"
    /* UseNavigateStable */
  ), r = w.useRef(!1);
  return fy(() => {
    r.current = !0;
  }), w.useCallback(
    async (u, c = {}) => {
      Nn(r.current, dy), r.current && (typeof u == "number" ? await n.navigate(u) : await n.navigate(u, { fromRouteId: a, ...c }));
    },
    [n, a]
  );
}
var vh = {};
function gy(n, a, r) {
  !a && !vh[n] && (vh[n] = !0, Nn(!1, r));
}
w.memo(Z4);
function Z4({
  routes: n,
  future: a,
  state: r,
  onError: l
}) {
  return my(n, void 0, r, l, a);
}
function yy(n) {
  Je(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Q4({
  basename: n = "/",
  children: a = null,
  location: r,
  navigationType: l = "POP",
  navigator: u,
  static: c = !1,
  unstable_useTransitions: f
}) {
  Je(
    !_l(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = n.replace(/^\/*/, "/"), p = w.useMemo(
    () => ({
      basename: h,
      navigator: u,
      static: c,
      unstable_useTransitions: f,
      future: {}
    }),
    [h, u, c, f]
  );
  typeof r == "string" && (r = di(r));
  let {
    pathname: g = "/",
    search: b = "",
    hash: $ = "",
    state: N = null,
    key: _ = "default"
  } = r, E = w.useMemo(() => {
    let A = ia(g, h);
    return A == null ? null : {
      location: {
        pathname: A,
        search: b,
        hash: $,
        state: N,
        key: _
      },
      navigationType: l
    };
  }, [h, g, b, $, N, _, l]);
  return Nn(
    E != null,
    `<Router basename="${h}"> is not able to match the URL "${g}${b}${$}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ w.createElement(yn.Provider, { value: p }, /* @__PURE__ */ w.createElement(Rl.Provider, { children: a, value: E }));
}
function W4({
  children: n,
  location: a
}) {
  return k4($d(n), a);
}
function $d(n, a = []) {
  let r = [];
  return w.Children.forEach(n, (l, u) => {
    if (!w.isValidElement(l))
      return;
    let c = [...a, u];
    if (l.type === w.Fragment) {
      r.push.apply(
        r,
        $d(l.props.children, c)
      );
      return;
    }
    Je(
      l.type === yy,
      `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Je(
      !l.props.index || !l.props.children,
      "An index route cannot have child routes."
    );
    let f = {
      id: l.props.id || c.join("-"),
      caseSensitive: l.props.caseSensitive,
      element: l.props.element,
      Component: l.props.Component,
      index: l.props.index,
      path: l.props.path,
      middleware: l.props.middleware,
      loader: l.props.loader,
      action: l.props.action,
      hydrateFallbackElement: l.props.hydrateFallbackElement,
      HydrateFallback: l.props.HydrateFallback,
      errorElement: l.props.errorElement,
      ErrorBoundary: l.props.ErrorBoundary,
      hasErrorBoundary: l.props.hasErrorBoundary === !0 || l.props.ErrorBoundary != null || l.props.errorElement != null,
      shouldRevalidate: l.props.shouldRevalidate,
      handle: l.props.handle,
      lazy: l.props.lazy
    };
    l.props.children && (f.children = $d(
      l.props.children,
      c
    )), r.push(f);
  }), r;
}
var ru = "get", iu = "application/x-www-form-urlencoded";
function Eu(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function J4(n) {
  return Eu(n) && n.tagName.toLowerCase() === "button";
}
function ev(n) {
  return Eu(n) && n.tagName.toLowerCase() === "form";
}
function tv(n) {
  return Eu(n) && n.tagName.toLowerCase() === "input";
}
function nv(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function av(n, a) {
  return n.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !nv(n);
}
var Wo = null;
function rv() {
  if (Wo === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Wo = !1;
    } catch {
      Wo = !0;
    }
  return Wo;
}
var iv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Jc(n) {
  return n != null && !iv.has(n) ? (Nn(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`
  ), null) : n;
}
function lv(n, a) {
  let r, l, u, c, f;
  if (ev(n)) {
    let h = n.getAttribute("action");
    l = h ? ia(h, a) : null, r = n.getAttribute("method") || ru, u = Jc(n.getAttribute("enctype")) || iu, c = new FormData(n);
  } else if (J4(n) || tv(n) && (n.type === "submit" || n.type === "image")) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = n.getAttribute("formaction") || h.getAttribute("action");
    if (l = p ? ia(p, a) : null, r = n.getAttribute("formmethod") || h.getAttribute("method") || ru, u = Jc(n.getAttribute("formenctype")) || Jc(h.getAttribute("enctype")) || iu, c = new FormData(h, n), !rv()) {
      let { name: g, type: b, value: $ } = n;
      if (b === "image") {
        let N = g ? `${g}.` : "";
        c.append(`${N}x`, "0"), c.append(`${N}y`, "0");
      } else g && c.append(g, $);
    }
  } else {
    if (Eu(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = ru, l = null, u = iu, f = n;
  }
  return c && u === "text/plain" && (f = c, c = void 0), { action: l, method: r.toLowerCase(), encType: u, formData: c, body: f };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Wd(n, a) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(a);
}
function ov(n, a, r) {
  let l = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return l.pathname === "/" ? l.pathname = `_root.${r}` : a && ia(l.pathname, a) === "/" ? l.pathname = `${a.replace(/\/$/, "")}/_root.${r}` : l.pathname = `${l.pathname.replace(/\/$/, "")}.${r}`, l;
}
async function uv(n, a) {
  if (n.id in a)
    return a[n.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      n.module
    );
    return a[n.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${n.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function sv(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function cv(n, a, r) {
  let l = await Promise.all(
    n.map(async (u) => {
      let c = a.routes[u.route.id];
      if (c) {
        let f = await uv(c, r);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return hv(
    l.flat(1).filter(sv).filter((u) => u.rel === "stylesheet" || u.rel === "preload").map(
      (u) => u.rel === "stylesheet" ? { ...u, rel: "prefetch", as: "style" } : { ...u, rel: "prefetch" }
    )
  );
}
function bh(n, a, r, l, u, c) {
  let f = (p, g) => r[g] ? p.route.id !== r[g].route.id : !0, h = (p, g) => (
    // param change, /users/123 -> /users/456
    r[g].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[g].route.path?.endsWith("*") && r[g].params["*"] !== p.params["*"]
  );
  return c === "assets" ? a.filter(
    (p, g) => f(p, g) || h(p, g)
  ) : c === "data" ? a.filter((p, g) => {
    let b = l.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (f(p, g) || h(p, g))
      return !0;
    if (p.route.shouldRevalidate) {
      let $ = p.route.shouldRevalidate({
        currentUrl: new URL(
          u.pathname + u.search + u.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
        nextUrl: new URL(n, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof $ == "boolean")
        return $;
    }
    return !0;
  }) : [];
}
function dv(n, a, { includeHydrateFallback: r } = {}) {
  return fv(
    n.map((l) => {
      let u = a.routes[l.route.id];
      if (!u) return [];
      let c = [u.module];
      return u.clientActionModule && (c = c.concat(u.clientActionModule)), u.clientLoaderModule && (c = c.concat(u.clientLoaderModule)), r && u.hydrateFallbackModule && (c = c.concat(u.hydrateFallbackModule)), u.imports && (c = c.concat(u.imports)), c;
    }).flat(1)
  );
}
function fv(n) {
  return [...new Set(n)];
}
function mv(n) {
  let a = {}, r = Object.keys(n).sort();
  for (let l of r)
    a[l] = n[l];
  return a;
}
function hv(n, a) {
  let r = /* @__PURE__ */ new Set();
  return new Set(a), n.reduce((l, u) => {
    let c = JSON.stringify(mv(u));
    return r.has(c) || (r.add(c), l.push({ key: c, link: u })), l;
  }, []);
}
function py() {
  let n = w.useContext(fi);
  return Wd(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function gv() {
  let n = w.useContext(wu);
  return Wd(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var Jd = w.createContext(void 0);
Jd.displayName = "FrameworkContext";
function vy() {
  let n = w.useContext(Jd);
  return Wd(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function yv(n, a) {
  let r = w.useContext(Jd), [l, u] = w.useState(!1), [c, f] = w.useState(!1), { onFocus: h, onBlur: p, onMouseEnter: g, onMouseLeave: b, onTouchStart: $ } = a, N = w.useRef(null);
  w.useEffect(() => {
    if (n === "render" && f(!0), n === "viewport") {
      let A = (M) => {
        M.forEach((H) => {
          f(H.isIntersecting);
        });
      }, C = new IntersectionObserver(A, { threshold: 0.5 });
      return N.current && C.observe(N.current), () => {
        C.disconnect();
      };
    }
  }, [n]), w.useEffect(() => {
    if (l) {
      let A = setTimeout(() => {
        f(!0);
      }, 100);
      return () => {
        clearTimeout(A);
      };
    }
  }, [l]);
  let _ = () => {
    u(!0);
  }, E = () => {
    u(!1), f(!1);
  };
  return r ? n !== "intent" ? [c, N, {}] : [
    c,
    N,
    {
      onFocus: sl(h, _),
      onBlur: sl(p, E),
      onMouseEnter: sl(g, _),
      onMouseLeave: sl(b, E),
      onTouchStart: sl($, _)
    }
  ] : [!1, N, {}];
}
function sl(n, a) {
  return (r) => {
    n && n(r), r.defaultPrevented || a(r);
  };
}
function pv({ page: n, ...a }) {
  let { router: r } = py(), l = w.useMemo(
    () => ey(r.routes, n, r.basename),
    [r.routes, n, r.basename]
  );
  return l ? /* @__PURE__ */ w.createElement(bv, { page: n, matches: l, ...a }) : null;
}
function vv(n) {
  let { manifest: a, routeModules: r } = vy(), [l, u] = w.useState([]);
  return w.useEffect(() => {
    let c = !1;
    return cv(n, a, r).then(
      (f) => {
        c || u(f);
      }
    ), () => {
      c = !0;
    };
  }, [n, a, r]), l;
}
function bv({
  page: n,
  matches: a,
  ...r
}) {
  let l = sr(), { manifest: u, routeModules: c } = vy(), { basename: f } = py(), { loaderData: h, matches: p } = gv(), g = w.useMemo(
    () => bh(
      n,
      a,
      p,
      u,
      l,
      "data"
    ),
    [n, a, p, u, l]
  ), b = w.useMemo(
    () => bh(
      n,
      a,
      p,
      u,
      l,
      "assets"
    ),
    [n, a, p, u, l]
  ), $ = w.useMemo(() => {
    if (n === l.pathname + l.search + l.hash)
      return [];
    let E = /* @__PURE__ */ new Set(), A = !1;
    if (a.forEach((M) => {
      let H = u.routes[M.route.id];
      !H || !H.hasLoader || (!g.some((q) => q.route.id === M.route.id) && M.route.id in h && c[M.route.id]?.shouldRevalidate || H.hasClientLoader ? A = !0 : E.add(M.route.id));
    }), E.size === 0)
      return [];
    let C = ov(n, f, "data");
    return A && E.size > 0 && C.searchParams.set(
      "_routes",
      a.filter((M) => E.has(M.route.id)).map((M) => M.route.id).join(",")
    ), [C.pathname + C.search];
  }, [
    f,
    h,
    l,
    u,
    g,
    a,
    n,
    c
  ]), N = w.useMemo(
    () => dv(b, u),
    [b, u]
  ), _ = vv(b);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, $.map((E) => /* @__PURE__ */ w.createElement("link", { key: E, rel: "prefetch", as: "fetch", href: E, ...r })), N.map((E) => /* @__PURE__ */ w.createElement("link", { key: E, rel: "modulepreload", href: E, ...r })), _.map(({ key: E, link: A }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ w.createElement("link", { key: E, nonce: r.nonce, ...A })
  )));
}
function $v(...n) {
  return (a) => {
    n.forEach((r) => {
      typeof r == "function" ? r(a) : r != null && (r.current = a);
    });
  };
}
var wv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  wv && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function Ev({
  basename: n,
  children: a,
  unstable_useTransitions: r,
  window: l
}) {
  let u = w.useRef();
  u.current == null && (u.current = t4({ window: l, v5Compat: !0 }));
  let c = u.current, [f, h] = w.useState({
    action: c.action,
    location: c.location
  }), p = w.useCallback(
    (g) => {
      r === !1 ? h(g) : w.startTransition(() => h(g));
    },
    [r]
  );
  return w.useLayoutEffect(() => c.listen(p), [c, p]), /* @__PURE__ */ w.createElement(
    Q4,
    {
      basename: n,
      children: a,
      location: f.location,
      navigationType: f.action,
      navigator: c,
      unstable_useTransitions: r
    }
  );
}
var by = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $y = w.forwardRef(
  function({
    onClick: a,
    discover: r = "render",
    prefetch: l = "none",
    relative: u,
    reloadDocument: c,
    replace: f,
    state: h,
    target: p,
    to: g,
    preventScrollReset: b,
    viewTransition: $,
    unstable_defaultShouldRevalidate: N,
    ..._
  }, E) {
    let { basename: A, unstable_useTransitions: C } = w.useContext(yn), M = typeof g == "string" && by.test(g), H = oy(g, A);
    g = H.to;
    let q = L4(g, { relative: u }), [Z, V, ee] = yv(
      l,
      _
    ), W = xv(g, {
      replace: f,
      state: h,
      target: p,
      preventScrollReset: b,
      relative: u,
      viewTransition: $,
      unstable_defaultShouldRevalidate: N,
      unstable_useTransitions: C
    });
    function X(se) {
      a && a(se), se.defaultPrevented || W(se);
    }
    let ae = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ w.createElement(
        "a",
        {
          ..._,
          ...ee,
          href: H.absoluteURL || q,
          onClick: H.isExternal || c ? a : X,
          ref: $v(E, V),
          target: p,
          "data-discover": !M && r === "render" ? "true" : void 0
        }
      )
    );
    return Z && !M ? /* @__PURE__ */ w.createElement(w.Fragment, null, ae, /* @__PURE__ */ w.createElement(pv, { page: q })) : ae;
  }
);
$y.displayName = "Link";
var Sv = w.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: r = !1,
    className: l = "",
    end: u = !1,
    style: c,
    to: f,
    viewTransition: h,
    children: p,
    ...g
  }, b) {
    let $ = jl(f, { relative: g.relative }), N = sr(), _ = w.useContext(wu), { navigator: E, basename: A } = w.useContext(yn), C = _ != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _v($) && h === !0, M = E.encodeLocation ? E.encodeLocation($).pathname : $.pathname, H = N.pathname, q = _ && _.navigation && _.navigation.location ? _.navigation.location.pathname : null;
    r || (H = H.toLowerCase(), q = q ? q.toLowerCase() : null, M = M.toLowerCase()), q && A && (q = ia(q, A) || q);
    const Z = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let V = H === M || !u && H.startsWith(M) && H.charAt(Z) === "/", ee = q != null && (q === M || !u && q.startsWith(M) && q.charAt(M.length) === "/"), W = {
      isActive: V,
      isPending: ee,
      isTransitioning: C
    }, X = V ? a : void 0, ae;
    typeof l == "function" ? ae = l(W) : ae = [
      l,
      V ? "active" : null,
      ee ? "pending" : null,
      C ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let se = typeof c == "function" ? c(W) : c;
    return /* @__PURE__ */ w.createElement(
      $y,
      {
        ...g,
        "aria-current": X,
        className: ae,
        ref: b,
        style: se,
        to: f,
        viewTransition: h
      },
      typeof p == "function" ? p(W) : p
    );
  }
);
Sv.displayName = "NavLink";
var Cv = w.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: a,
    navigate: r,
    reloadDocument: l,
    replace: u,
    state: c,
    method: f = ru,
    action: h,
    onSubmit: p,
    relative: g,
    preventScrollReset: b,
    viewTransition: $,
    unstable_defaultShouldRevalidate: N,
    ..._
  }, E) => {
    let { unstable_useTransitions: A } = w.useContext(yn), C = Av(), M = Rv(h, { relative: g }), H = f.toLowerCase() === "get" ? "get" : "post", q = typeof h == "string" && by.test(h), Z = (V) => {
      if (p && p(V), V.defaultPrevented) return;
      V.preventDefault();
      let ee = V.nativeEvent.submitter, W = ee?.getAttribute("formmethod") || f, X = () => C(ee || V.currentTarget, {
        fetcherKey: a,
        method: W,
        navigate: r,
        replace: u,
        state: c,
        relative: g,
        preventScrollReset: b,
        viewTransition: $,
        unstable_defaultShouldRevalidate: N
      });
      A && r !== !1 ? w.startTransition(() => X()) : X();
    };
    return /* @__PURE__ */ w.createElement(
      "form",
      {
        ref: E,
        method: H,
        action: M,
        onSubmit: l ? p : Z,
        ..._,
        "data-discover": !q && n === "render" ? "true" : void 0
      }
    );
  }
);
Cv.displayName = "Form";
function Nv(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wy(n) {
  let a = w.useContext(fi);
  return Je(a, Nv(n)), a;
}
function xv(n, {
  target: a,
  replace: r,
  state: l,
  preventScrollReset: u,
  relative: c,
  viewTransition: f,
  unstable_defaultShouldRevalidate: h,
  unstable_useTransitions: p
} = {}) {
  let g = U4(), b = sr(), $ = jl(n, { relative: c });
  return w.useCallback(
    (N) => {
      if (av(N, a)) {
        N.preventDefault();
        let _ = r !== void 0 ? r : ml(b) === ml($), E = () => g(n, {
          replace: _,
          state: l,
          preventScrollReset: u,
          relative: c,
          viewTransition: f,
          unstable_defaultShouldRevalidate: h
        });
        p ? w.startTransition(() => E()) : E();
      }
    },
    [
      b,
      g,
      $,
      r,
      l,
      a,
      n,
      u,
      c,
      f,
      h,
      p
    ]
  );
}
var Tv = 0, Ov = () => `__${String(++Tv)}__`;
function Av() {
  let { router: n } = wy(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = w.useContext(yn), r = V4(), l = n.fetch, u = n.navigate;
  return w.useCallback(
    async (c, f = {}) => {
      let { action: h, method: p, encType: g, formData: b, body: $ } = lv(
        c,
        a
      );
      if (f.navigate === !1) {
        let N = f.fetcherKey || Ov();
        await l(N, r, f.action || h, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: b,
          body: $,
          formMethod: f.method || p,
          formEncType: f.encType || g,
          flushSync: f.flushSync
        });
      } else
        await u(f.action || h, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: b,
          body: $,
          formMethod: f.method || p,
          formEncType: f.encType || g,
          replace: f.replace,
          state: f.state,
          fromRouteId: r,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition
        });
    },
    [l, u, a, r]
  );
}
function Rv(n, { relative: a } = {}) {
  let { basename: r } = w.useContext(yn), l = w.useContext(ua);
  Je(l, "useFormAction must be used inside a RouteContext");
  let [u] = l.matches.slice(-1), c = { ...jl(n || ".", { relative: a }) }, f = sr();
  if (n == null) {
    c.search = f.search;
    let h = new URLSearchParams(c.search), p = h.getAll("index");
    if (p.some((b) => b === "")) {
      h.delete("index"), p.filter(($) => $).forEach(($) => h.append("index", $));
      let b = h.toString();
      c.search = b ? `?${b}` : "";
    }
  }
  return (!n || n === ".") && u.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (c.pathname = c.pathname === "/" ? r : na([r, c.pathname])), ml(c);
}
function _v(n, { relative: a } = {}) {
  let r = w.useContext(sy);
  Je(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: l } = wy(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), u = jl(n, { relative: a });
  if (!r.isTransitioning)
    return !1;
  let c = ia(r.currentLocation.pathname, l) || r.currentLocation.pathname, f = ia(r.nextLocation.pathname, l) || r.nextLocation.pathname;
  return du(u.pathname, f) != null || du(u.pathname, c) != null;
}
var ed = { exports: {} }, Et = {};
var $h;
function jv() {
  if ($h) return Et;
  $h = 1;
  var n = Yd();
  function a(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var l = {
    d: {
      f: r,
      r: function() {
        throw Error(a(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, u = /* @__PURE__ */ Symbol.for("react.portal");
  function c(p, g, b) {
    var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: $ == null ? null : "" + $,
      children: p,
      containerInfo: g,
      implementation: b
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, g) {
    if (p === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Et.createPortal = function(p, g) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(a(299));
    return c(p, g, null, b);
  }, Et.flushSync = function(p) {
    var g = f.T, b = l.p;
    try {
      if (f.T = null, l.p = 2, p) return p();
    } finally {
      f.T = g, l.p = b, l.d.f();
    }
  }, Et.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, l.d.C(p, g));
  }, Et.prefetchDNS = function(p) {
    typeof p == "string" && l.d.D(p);
  }, Et.preinit = function(p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var b = g.as, $ = h(b, g.crossOrigin), N = typeof g.integrity == "string" ? g.integrity : void 0, _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      b === "style" ? l.d.S(
        p,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: $,
          integrity: N,
          fetchPriority: _
        }
      ) : b === "script" && l.d.X(p, {
        crossOrigin: $,
        integrity: N,
        fetchPriority: _,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Et.preinitModule = function(p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var b = h(
            g.as,
            g.crossOrigin
          );
          l.d.M(p, {
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && l.d.M(p);
  }, Et.preload = function(p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var b = g.as, $ = h(b, g.crossOrigin);
      l.d.L(p, b, {
        crossOrigin: $,
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
  }, Et.preloadModule = function(p, g) {
    if (typeof p == "string")
      if (g) {
        var b = h(g.as, g.crossOrigin);
        l.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else l.d.m(p);
  }, Et.requestFormReset = function(p) {
    l.d.r(p);
  }, Et.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, Et.useFormState = function(p, g, b) {
    return f.H.useFormState(p, g, b);
  }, Et.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Et.version = "19.2.3", Et;
}
var wh;
function Dv() {
  if (wh) return ed.exports;
  wh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), ed.exports = jv(), ed.exports;
}
var td = { exports: {} }, cl = {}, nd = { exports: {} }, ad = {};
var Eh;
function Mv() {
  return Eh || (Eh = 1, (function(n) {
    function a(P, k) {
      var G = P.length;
      P.push(k);
      e: for (; 0 < G; ) {
        var fe = G - 1 >>> 1, Oe = P[fe];
        if (0 < u(Oe, k))
          P[fe] = k, P[G] = Oe, G = fe;
        else break e;
      }
    }
    function r(P) {
      return P.length === 0 ? null : P[0];
    }
    function l(P) {
      if (P.length === 0) return null;
      var k = P[0], G = P.pop();
      if (G !== k) {
        P[0] = G;
        e: for (var fe = 0, Oe = P.length, Ae = Oe >>> 1; fe < Ae; ) {
          var x = 2 * (fe + 1) - 1, B = P[x], Y = x + 1, Q = P[Y];
          if (0 > u(B, G))
            Y < Oe && 0 > u(Q, B) ? (P[fe] = Q, P[Y] = G, fe = Y) : (P[fe] = B, P[x] = G, fe = x);
          else if (Y < Oe && 0 > u(Q, G))
            P[fe] = Q, P[Y] = G, fe = Y;
          else break e;
        }
      }
      return k;
    }
    function u(P, k) {
      var G = P.sortIndex - k.sortIndex;
      return G !== 0 ? G : P.id - k.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, h = f.now();
      n.unstable_now = function() {
        return f.now() - h;
      };
    }
    var p = [], g = [], b = 1, $ = null, N = 3, _ = !1, E = !1, A = !1, C = !1, M = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function Z(P) {
      for (var k = r(g); k !== null; ) {
        if (k.callback === null) l(g);
        else if (k.startTime <= P)
          l(g), k.sortIndex = k.expirationTime, a(p, k);
        else break;
        k = r(g);
      }
    }
    function V(P) {
      if (A = !1, Z(P), !E)
        if (r(p) !== null)
          E = !0, ee || (ee = !0, ve());
        else {
          var k = r(g);
          k !== null && qe(V, k.startTime - P);
        }
    }
    var ee = !1, W = -1, X = 5, ae = -1;
    function se() {
      return C ? !0 : !(n.unstable_now() - ae < X);
    }
    function Pe() {
      if (C = !1, ee) {
        var P = n.unstable_now();
        ae = P;
        var k = !0;
        try {
          e: {
            E = !1, A && (A = !1, H(W), W = -1), _ = !0;
            var G = N;
            try {
              t: {
                for (Z(P), $ = r(p); $ !== null && !($.expirationTime > P && se()); ) {
                  var fe = $.callback;
                  if (typeof fe == "function") {
                    $.callback = null, N = $.priorityLevel;
                    var Oe = fe(
                      $.expirationTime <= P
                    );
                    if (P = n.unstable_now(), typeof Oe == "function") {
                      $.callback = Oe, Z(P), k = !0;
                      break t;
                    }
                    $ === r(p) && l(p), Z(P);
                  } else l(p);
                  $ = r(p);
                }
                if ($ !== null) k = !0;
                else {
                  var Ae = r(g);
                  Ae !== null && qe(
                    V,
                    Ae.startTime - P
                  ), k = !1;
                }
              }
              break e;
            } finally {
              $ = null, N = G, _ = !1;
            }
            k = void 0;
          }
        } finally {
          k ? ve() : ee = !1;
        }
      }
    }
    var ve;
    if (typeof q == "function")
      ve = function() {
        q(Pe);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), ke = _e.port2;
      _e.port1.onmessage = Pe, ve = function() {
        ke.postMessage(null);
      };
    } else
      ve = function() {
        M(Pe, 0);
      };
    function qe(P, k) {
      W = M(function() {
        P(n.unstable_now());
      }, k);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, n.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : X = 0 < P ? Math.floor(1e3 / P) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, n.unstable_next = function(P) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = N;
      }
      var G = N;
      N = k;
      try {
        return P();
      } finally {
        N = G;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(P, k) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var G = N;
      N = P;
      try {
        return k();
      } finally {
        N = G;
      }
    }, n.unstable_scheduleCallback = function(P, k, G) {
      var fe = n.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? fe + G : fe) : G = fe, P) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return Oe = G + Oe, P = {
        id: b++,
        callback: k,
        priorityLevel: P,
        startTime: G,
        expirationTime: Oe,
        sortIndex: -1
      }, G > fe ? (P.sortIndex = G, a(g, P), r(p) === null && P === r(g) && (A ? (H(W), W = -1) : A = !0, qe(V, G - fe))) : (P.sortIndex = Oe, a(p, P), E || _ || (E = !0, ee || (ee = !0, ve()))), P;
    }, n.unstable_shouldYield = se, n.unstable_wrapCallback = function(P) {
      var k = N;
      return function() {
        var G = N;
        N = k;
        try {
          return P.apply(this, arguments);
        } finally {
          N = G;
        }
      };
    };
  })(ad)), ad;
}
var Sh;
function Lv() {
  return Sh || (Sh = 1, nd.exports = Mv()), nd.exports;
}
var Ch;
function Uv() {
  if (Ch) return cl;
  Ch = 1;
  var n = {};
  var a = Lv(), r = Yd(), l = Dv();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function h(e) {
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
    if (f(e) !== e)
      throw Error(u(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var s = i.return;
      if (s === null) break;
      var d = s.alternate;
      if (d === null) {
        if (o = s.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (s.child === d.child) {
        for (d = s.child; d; ) {
          if (d === i) return g(s), e;
          if (d === o) return g(s), t;
          d = d.sibling;
        }
        throw Error(u(188));
      }
      if (i.return !== o.return) i = s, o = d;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === i) {
            m = !0, i = s, o = d;
            break;
          }
          if (v === o) {
            m = !0, o = s, i = d;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = d.child; v; ) {
            if (v === i) {
              m = !0, i = d, o = s;
              break;
            }
            if (v === o) {
              m = !0, o = d, i = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(u(189));
        }
      }
      if (i.alternate !== o) throw Error(u(190));
    }
    if (i.tag !== 3) throw Error(u(188));
    return i.stateNode.current === i ? e : t;
  }
  function $(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = $(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign, _ = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Pe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ke = /* @__PURE__ */ Symbol.for("react.client.reference");
  function qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ke ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case H:
        return "Profiler";
      case M:
        return "StrictMode";
      case ee:
        return "Suspense";
      case W:
        return "SuspenseList";
      case se:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case Z:
          return e.displayName || "Context";
        case q:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case X:
          return t = e.displayName || null, t !== null ? t : qe(e.type) || "Memo";
        case ae:
          t = e._payload, e = e._init;
          try {
            return qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var P = Array.isArray, k = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Oe = [], Ae = -1;
  function x(e) {
    return { current: e };
  }
  function B(e) {
    0 > Ae || (e.current = Oe[Ae], Oe[Ae] = null, Ae--);
  }
  function Y(e, t) {
    Ae++, Oe[Ae] = e.current, e.current = t;
  }
  var Q = x(null), de = x(null), ce = x(null), Ee = x(null);
  function Ze(e, t) {
    switch (Y(ce, t), Y(de, e), Y(Q, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Dm(t), e = Mm(t, e);
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
    B(Q), Y(Q, e);
  }
  function Ie() {
    B(Q), B(de), B(ce);
  }
  function Ft(e) {
    e.memoizedState !== null && Y(Ee, e);
    var t = Q.current, i = Mm(t, e.type);
    t !== i && (Y(de, e), Y(Q, i));
  }
  function tn(e) {
    de.current === e && (B(Q), B(de)), Ee.current === e && (B(Ee), rl._currentValue = fe);
  }
  var Tn, jt;
  function xt(e) {
    if (Tn === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        Tn = t && t[1] || "", jt = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Tn + e + jt;
  }
  var Gt = !1;
  function sa(e, t) {
    if (!e || Gt) return "";
    Gt = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (U) {
                  D = U;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (F = e()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (U) {
            if (U && D && typeof U.stack == "string")
              return [U.stack, D.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = o.DetermineComponentFrameRoot(), m = d[0], v = d[1];
      if (m && v) {
        var S = m.split(`
`), j = v.split(`
`);
        for (s = o = 0; o < S.length && !S[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; s < j.length && !j[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (o === S.length || s === j.length)
          for (o = S.length - 1, s = j.length - 1; 1 <= o && 0 <= s && S[o] !== j[s]; )
            s--;
        for (; 1 <= o && 0 <= s; o--, s--)
          if (S[o] !== j[s]) {
            if (o !== 1 || s !== 1)
              do
                if (o--, s--, 0 > s || S[o] !== j[s]) {
                  var I = `
` + S[o].replace(" at new ", " at ");
                  return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), I;
                }
              while (1 <= o && 0 <= s);
            break;
          }
      }
    } finally {
      Gt = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? xt(i) : "";
  }
  function dr(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xt(e.type);
      case 16:
        return xt("Lazy");
      case 13:
        return e.child !== t && t !== null ? xt("Suspense Fallback") : xt("Suspense");
      case 19:
        return xt("SuspenseList");
      case 0:
      case 15:
        return sa(e.type, !1);
      case 11:
        return sa(e.type.render, !1);
      case 1:
        return sa(e.type, !0);
      case 31:
        return xt("Activity");
      default:
        return "";
    }
  }
  function ca(e) {
    try {
      var t = "", i = null;
      do
        t += dr(e, i), i = e, e = e.return;
      while (e);
      return t;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var Tt = Object.prototype.hasOwnProperty, qt = a.unstable_scheduleCallback, Ot = a.unstable_cancelCallback, Se = a.unstable_shouldYield, Uu = a.unstable_requestPaint, nt = a.unstable_now, yi = a.unstable_getCurrentPriorityLevel, da = a.unstable_ImmediatePriority, Ia = a.unstable_UserBlockingPriority, re = a.unstable_NormalPriority, pe = a.unstable_LowPriority, $t = a.unstable_IdlePriority, fr = a.log, mr = a.unstable_setDisableYieldValue, On = null, At = null;
  function ne(e) {
    if (typeof fr == "function" && mr(e), At && typeof At.setStrictMode == "function")
      try {
        At.setStrictMode(On, e);
      } catch {
      }
  }
  var Re = Math.clz32 ? Math.clz32 : Pl, wt = Math.log, Un = Math.LN2;
  function Pl(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wt(e) / Un | 0) | 0;
  }
  var hr = 256, An = 262144, gr = 4194304;
  function Ba(e) {
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
  function kl(e, t, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var s = 0, d = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var v = o & 134217727;
    return v !== 0 ? (o = v & ~d, o !== 0 ? s = Ba(o) : (m &= v, m !== 0 ? s = Ba(m) : i || (i = v & ~e, i !== 0 && (s = Ba(i))))) : (v = o & ~d, v !== 0 ? s = Ba(v) : m !== 0 ? s = Ba(m) : i || (i = o & ~e, i !== 0 && (s = Ba(i)))), s === 0 ? 0 : t !== 0 && t !== s && (t & d) === 0 && (d = s & -s, i = t & -t, d >= i || d === 32 && (i & 4194048) !== 0) ? t : s;
  }
  function pi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ip(e, t) {
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
  function hf() {
    var e = gr;
    return gr <<= 1, (gr & 62914560) === 0 && (gr = 4194304), e;
  }
  function Pu(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function vi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Bp(e, t, i, o, s, d) {
    var m = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var v = e.entanglements, S = e.expirationTimes, j = e.hiddenUpdates;
    for (i = m & ~i; 0 < i; ) {
      var I = 31 - Re(i), F = 1 << I;
      v[I] = 0, S[I] = -1;
      var D = j[I];
      if (D !== null)
        for (j[I] = null, I = 0; I < D.length; I++) {
          var U = D[I];
          U !== null && (U.lane &= -536870913);
        }
      i &= ~F;
    }
    o !== 0 && gf(e, o, 0), d !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(m & ~t));
  }
  function gf(e, t, i) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Re(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 261930;
  }
  function yf(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var o = 31 - Re(i), s = 1 << o;
      s & t | e[o] & t && (e[o] |= t), i &= ~s;
    }
  }
  function pf(e, t) {
    var i = t & -t;
    return i = (i & 42) !== 0 ? 1 : ku(i), (i & (e.suspendedLanes | t)) !== 0 ? 0 : i;
  }
  function ku(e) {
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
  function Iu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vf() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ah(e.type));
  }
  function bf(e, t) {
    var i = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = i;
    }
  }
  var fa = Math.random().toString(36).slice(2), gt = "__reactFiber$" + fa, Dt = "__reactProps$" + fa, yr = "__reactContainer$" + fa, Bu = "__reactEvents$" + fa, Hp = "__reactListeners$" + fa, zp = "__reactHandles$" + fa, $f = "__reactResources$" + fa, bi = "__reactMarker$" + fa;
  function Hu(e) {
    delete e[gt], delete e[Dt], delete e[Bu], delete e[Hp], delete e[zp];
  }
  function pr(e) {
    var t = e[gt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[yr] || i[gt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
          for (e = Hm(e); e !== null; ) {
            if (i = e[gt]) return i;
            e = Hm(e);
          }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function vr(e) {
    if (e = e[gt] || e[yr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function $i(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function br(e) {
    var t = e[$f];
    return t || (t = e[$f] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function mt(e) {
    e[bi] = !0;
  }
  var wf = /* @__PURE__ */ new Set(), Ef = {};
  function Ha(e, t) {
    $r(e, t), $r(e + "Capture", t);
  }
  function $r(e, t) {
    for (Ef[e] = t, e = 0; e < t.length; e++)
      wf.add(t[e]);
  }
  var Fp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sf = {}, Cf = {};
  function Gp(e) {
    return Tt.call(Cf, e) ? !0 : Tt.call(Sf, e) ? !1 : Fp.test(e) ? Cf[e] = !0 : (Sf[e] = !0, !1);
  }
  function Il(e, t, i) {
    if (Gp(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + i);
      }
  }
  function Bl(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + i);
    }
  }
  function Pn(e, t, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, "" + o);
    }
  }
  function nn(e) {
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
  function Nf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function qp(e, t, i) {
    var o = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var s = o.get, d = o.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          i = "" + m, d.call(this, m);
        }
      }), Object.defineProperty(e, t, {
        enumerable: o.enumerable
      }), {
        getValue: function() {
          return i;
        },
        setValue: function(m) {
          i = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function zu(e) {
    if (!e._valueTracker) {
      var t = Nf(e) ? "checked" : "value";
      e._valueTracker = qp(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function xf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), o = "";
    return e && (o = Nf(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1;
  }
  function Hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Kp = /[\n"\\]/g;
  function an(e) {
    return e.replace(
      Kp,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fu(e, t, i, o, s, d, m, v) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + nn(t)) : e.value !== "" + nn(t) && (e.value = "" + nn(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? Gu(e, m, nn(t)) : i != null ? Gu(e, m, nn(i)) : o != null && e.removeAttribute("value"), s == null && d != null && (e.defaultChecked = !!d), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + nn(v) : e.removeAttribute("name");
  }
  function Tf(e, t, i, o, s, d, m, v) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || i != null) {
      if (!(d !== "submit" && d !== "reset" || t != null)) {
        zu(e);
        return;
      }
      i = i != null ? "" + nn(i) : "", t = t != null ? "" + nn(t) : i, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? s, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = v ? e.checked : !!o, e.defaultChecked = !!o, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), zu(e);
  }
  function Gu(e, t, i) {
    t === "number" && Hl(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function wr(e, t, i, o) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < i.length; s++)
        t["$" + i[s]] = !0;
      for (i = 0; i < e.length; i++)
        s = t.hasOwnProperty("$" + e[i].value), e[i].selected !== s && (e[i].selected = s), s && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + nn(i), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === i) {
          e[s].selected = !0, o && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Of(e, t, i) {
    if (t != null && (t = "" + nn(t), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + nn(i) : "";
  }
  function Af(e, t, i, o) {
    if (t == null) {
      if (o != null) {
        if (i != null) throw Error(u(92));
        if (P(o)) {
          if (1 < o.length) throw Error(u(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), t = i;
    }
    i = nn(t), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o), zu(e);
  }
  function Er(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Vp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rf(e, t, i) {
    var o = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, i) : typeof i != "number" || i === 0 || Vp.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px";
  }
  function _f(e, t, i) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var s in t)
        o = t[s], t.hasOwnProperty(s) && i[s] !== o && Rf(e, s, o);
    } else
      for (var d in t)
        t.hasOwnProperty(d) && Rf(e, d, t[d]);
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
  var Yp = /* @__PURE__ */ new Map([
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
  ]), Xp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zl(e) {
    return Xp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function kn() {
  }
  var Ku = null;
  function Vu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Sr = null, Cr = null;
  function jf(e) {
    var t = vr(e);
    if (t && (e = t.stateNode)) {
      var i = e[Dt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Fu(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), t = i.name, i.type === "radio" && t != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + an(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < i.length; t++) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var s = o[Dt] || null;
                if (!s) throw Error(u(90));
                Fu(
                  o,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < i.length; t++)
              o = i[t], o.form === e.form && xf(o);
          }
          break e;
        case "textarea":
          Of(e, i.value, i.defaultValue);
          break e;
        case "select":
          t = i.value, t != null && wr(e, !!i.multiple, t, !1);
      }
    }
  }
  var Yu = !1;
  function Df(e, t, i) {
    if (Yu) return e(t, i);
    Yu = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (Yu = !1, (Sr !== null || Cr !== null) && (Ro(), Sr && (t = Sr, e = Cr, Cr = Sr = null, jf(t), e)))
        for (t = 0; t < e.length; t++) jf(e[t]);
    }
  }
  function wi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[Dt] || null;
    if (o === null) return null;
    i = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        u(231, t, typeof i)
      );
    return i;
  }
  var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (In)
    try {
      var Ei = {};
      Object.defineProperty(Ei, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", Ei, Ei), window.removeEventListener("test", Ei, Ei);
    } catch {
      Xu = !1;
    }
  var ma = null, Zu = null, Fl = null;
  function Mf() {
    if (Fl) return Fl;
    var e, t = Zu, i = t.length, o, s = "value" in ma ? ma.value : ma.textContent, d = s.length;
    for (e = 0; e < i && t[e] === s[e]; e++) ;
    var m = i - e;
    for (o = 1; o <= m && t[i - o] === s[d - o]; o++) ;
    return Fl = s.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Gl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ql() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function Mt(e) {
    function t(i, o, s, d, m) {
      this._reactName = i, this._targetInst = s, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var v in e)
        e.hasOwnProperty(v) && (i = e[v], this[v] = i ? i(d) : d[v]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ql : Lf, this.isPropagationStopped = Lf, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = ql);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = ql);
      },
      persist: function() {
      },
      isPersistent: ql
    }), t;
  }
  var za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Kl = Mt(za), Si = N({}, za, { view: 0, detail: 0 }), Zp = Mt(Si), Qu, Wu, Ci, Vl = N({}, Si, {
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
    getModifierState: es,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ci && (Ci && e.type === "mousemove" ? (Qu = e.screenX - Ci.screenX, Wu = e.screenY - Ci.screenY) : Wu = Qu = 0, Ci = e), Qu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wu;
    }
  }), Uf = Mt(Vl), Qp = N({}, Vl, { dataTransfer: 0 }), Wp = Mt(Qp), Jp = N({}, Si, { relatedTarget: 0 }), Ju = Mt(Jp), e3 = N({}, za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), t3 = Mt(e3), n3 = N({}, za, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), a3 = Mt(n3), r3 = N({}, za, { data: 0 }), Pf = Mt(r3), i3 = {
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
  }, l3 = {
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
  }, o3 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function u3(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = o3[e]) ? !!t[e] : !1;
  }
  function es() {
    return u3;
  }
  var s3 = N({}, Si, {
    key: function(e) {
      if (e.key) {
        var t = i3[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? l3[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: es,
    charCode: function(e) {
      return e.type === "keypress" ? Gl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), c3 = Mt(s3), d3 = N({}, Vl, {
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
  }), kf = Mt(d3), f3 = N({}, Si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: es
  }), m3 = Mt(f3), h3 = N({}, za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), g3 = Mt(h3), y3 = N({}, Vl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), p3 = Mt(y3), v3 = N({}, za, {
    newState: 0,
    oldState: 0
  }), b3 = Mt(v3), $3 = [9, 13, 27, 32], ts = In && "CompositionEvent" in window, Ni = null;
  In && "documentMode" in document && (Ni = document.documentMode);
  var w3 = In && "TextEvent" in window && !Ni, If = In && (!ts || Ni && 8 < Ni && 11 >= Ni), Bf = " ", Hf = !1;
  function zf(e, t) {
    switch (e) {
      case "keyup":
        return $3.indexOf(t.keyCode) !== -1;
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
  function Ff(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nr = !1;
  function E3(e, t) {
    switch (e) {
      case "compositionend":
        return Ff(t);
      case "keypress":
        return t.which !== 32 ? null : (Hf = !0, Bf);
      case "textInput":
        return e = t.data, e === Bf && Hf ? null : e;
      default:
        return null;
    }
  }
  function S3(e, t) {
    if (Nr)
      return e === "compositionend" || !ts && zf(e, t) ? (e = Mf(), Fl = Zu = ma = null, Nr = !1, e) : null;
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
        return If && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var C3 = {
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
  function Gf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!C3[e.type] : t === "textarea";
  }
  function qf(e, t, i, o) {
    Sr ? Cr ? Cr.push(o) : Cr = [o] : Sr = o, t = Po(t, "onChange"), 0 < t.length && (i = new Kl(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: t }));
  }
  var xi = null, Ti = null;
  function N3(e) {
    Tm(e, 0);
  }
  function Yl(e) {
    var t = $i(e);
    if (xf(t)) return e;
  }
  function Kf(e, t) {
    if (e === "change") return t;
  }
  var Vf = !1;
  if (In) {
    var ns;
    if (In) {
      var as = "oninput" in document;
      if (!as) {
        var Yf = document.createElement("div");
        Yf.setAttribute("oninput", "return;"), as = typeof Yf.oninput == "function";
      }
      ns = as;
    } else ns = !1;
    Vf = ns && (!document.documentMode || 9 < document.documentMode);
  }
  function Xf() {
    xi && (xi.detachEvent("onpropertychange", Zf), Ti = xi = null);
  }
  function Zf(e) {
    if (e.propertyName === "value" && Yl(Ti)) {
      var t = [];
      qf(
        t,
        Ti,
        e,
        Vu(e)
      ), Df(N3, t);
    }
  }
  function x3(e, t, i) {
    e === "focusin" ? (Xf(), xi = t, Ti = i, xi.attachEvent("onpropertychange", Zf)) : e === "focusout" && Xf();
  }
  function T3(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Yl(Ti);
  }
  function O3(e, t) {
    if (e === "click") return Yl(t);
  }
  function A3(e, t) {
    if (e === "input" || e === "change")
      return Yl(t);
  }
  function R3(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Kt = typeof Object.is == "function" ? Object.is : R3;
  function Oi(e, t) {
    if (Kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var s = i[o];
      if (!Tt.call(t, s) || !Kt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Qf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wf(e, t) {
    var i = Qf(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= t && o >= t)
          return { node: i, offset: t - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Qf(i);
    }
  }
  function Jf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function e0(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Hl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Hl(e.document);
    }
    return t;
  }
  function rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var _3 = In && "documentMode" in document && 11 >= document.documentMode, xr = null, is = null, Ai = null, ls = !1;
  function t0(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    ls || xr == null || xr !== Hl(o) || (o = xr, "selectionStart" in o && rs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ai && Oi(Ai, o) || (Ai = o, o = Po(is, "onSelect"), 0 < o.length && (t = new Kl(
      "onSelect",
      "select",
      null,
      t,
      i
    ), e.push({ event: t, listeners: o }), t.target = xr)));
  }
  function Fa(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var Tr = {
    animationend: Fa("Animation", "AnimationEnd"),
    animationiteration: Fa("Animation", "AnimationIteration"),
    animationstart: Fa("Animation", "AnimationStart"),
    transitionrun: Fa("Transition", "TransitionRun"),
    transitionstart: Fa("Transition", "TransitionStart"),
    transitioncancel: Fa("Transition", "TransitionCancel"),
    transitionend: Fa("Transition", "TransitionEnd")
  }, os = {}, n0 = {};
  In && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete Tr.animationend.animation, delete Tr.animationiteration.animation, delete Tr.animationstart.animation), "TransitionEvent" in window || delete Tr.transitionend.transition);
  function Ga(e) {
    if (os[e]) return os[e];
    if (!Tr[e]) return e;
    var t = Tr[e], i;
    for (i in t)
      if (t.hasOwnProperty(i) && i in n0)
        return os[e] = t[i];
    return e;
  }
  var a0 = Ga("animationend"), r0 = Ga("animationiteration"), i0 = Ga("animationstart"), j3 = Ga("transitionrun"), D3 = Ga("transitionstart"), M3 = Ga("transitioncancel"), l0 = Ga("transitionend"), o0 = /* @__PURE__ */ new Map(), us = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  us.push("scrollEnd");
  function vn(e, t) {
    o0.set(e, t), Ha(t, [e]);
  }
  var Xl = typeof reportError == "function" ? reportError : function(e) {
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
  }, rn = [], Or = 0, ss = 0;
  function Zl() {
    for (var e = Or, t = ss = Or = 0; t < e; ) {
      var i = rn[t];
      rn[t++] = null;
      var o = rn[t];
      rn[t++] = null;
      var s = rn[t];
      rn[t++] = null;
      var d = rn[t];
      if (rn[t++] = null, o !== null && s !== null) {
        var m = o.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), o.pending = s;
      }
      d !== 0 && u0(i, s, d);
    }
  }
  function Ql(e, t, i, o) {
    rn[Or++] = e, rn[Or++] = t, rn[Or++] = i, rn[Or++] = o, ss |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function cs(e, t, i, o) {
    return Ql(e, t, i, o), Wl(e);
  }
  function qa(e, t) {
    return Ql(e, null, null, t), Wl(e);
  }
  function u0(e, t, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var s = !1, d = e.return; d !== null; )
      d.childLanes |= i, o = d.alternate, o !== null && (o.childLanes |= i), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (s = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, s && t !== null && (s = 31 - Re(i), e = d.hiddenUpdates, o = e[s], o === null ? e[s] = [t] : o.push(t), t.lane = i | 536870912), d) : null;
  }
  function Wl(e) {
    if (50 < Qi)
      throw Qi = 0, bc = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ar = {};
  function L3(e, t, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vt(e, t, i, o) {
    return new L3(e, t, i, o);
  }
  function ds(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bn(e, t) {
    var i = e.alternate;
    return i === null ? (i = Vt(
      e.tag,
      t,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function s0(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Jl(e, t, i, o, s, d) {
    var m = 0;
    if (o = e, typeof e == "function") ds(e) && (m = 1);
    else if (typeof e == "string")
      m = B2(
        e,
        i,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case se:
          return e = Vt(31, i, t, s), e.elementType = se, e.lanes = d, e;
        case C:
          return Ka(i.children, s, d, t);
        case M:
          m = 8, s |= 24;
          break;
        case H:
          return e = Vt(12, i, t, s | 2), e.elementType = H, e.lanes = d, e;
        case ee:
          return e = Vt(13, i, t, s), e.elementType = ee, e.lanes = d, e;
        case W:
          return e = Vt(19, i, t, s), e.elementType = W, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                m = 10;
                break e;
              case q:
                m = 9;
                break e;
              case V:
                m = 11;
                break e;
              case X:
                m = 14;
                break e;
              case ae:
                m = 16, o = null;
                break e;
            }
          m = 29, i = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = Vt(m, i, t, s), t.elementType = e, t.type = o, t.lanes = d, t;
  }
  function Ka(e, t, i, o) {
    return e = Vt(7, e, o, t), e.lanes = i, e;
  }
  function fs(e, t, i) {
    return e = Vt(6, e, null, t), e.lanes = i, e;
  }
  function c0(e) {
    var t = Vt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ms(e, t, i) {
    return t = Vt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = i, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var d0 = /* @__PURE__ */ new WeakMap();
  function ln(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = d0.get(e);
      return i !== void 0 ? i : (t = {
        value: e,
        source: t,
        stack: ca(t)
      }, d0.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ca(t)
    };
  }
  var Rr = [], _r = 0, eo = null, Ri = 0, on = [], un = 0, ha = null, Rn = 1, _n = "";
  function Hn(e, t) {
    Rr[_r++] = Ri, Rr[_r++] = eo, eo = e, Ri = t;
  }
  function f0(e, t, i) {
    on[un++] = Rn, on[un++] = _n, on[un++] = ha, ha = e;
    var o = Rn;
    e = _n;
    var s = 32 - Re(o) - 1;
    o &= ~(1 << s), i += 1;
    var d = 32 - Re(t) + s;
    if (30 < d) {
      var m = s - s % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, s -= m, Rn = 1 << 32 - Re(t) + s | i << s | o, _n = d + e;
    } else
      Rn = 1 << d | i << s | o, _n = e;
  }
  function hs(e) {
    e.return !== null && (Hn(e, 1), f0(e, 1, 0));
  }
  function gs(e) {
    for (; e === eo; )
      eo = Rr[--_r], Rr[_r] = null, Ri = Rr[--_r], Rr[_r] = null;
    for (; e === ha; )
      ha = on[--un], on[un] = null, _n = on[--un], on[un] = null, Rn = on[--un], on[un] = null;
  }
  function m0(e, t) {
    on[un++] = Rn, on[un++] = _n, on[un++] = ha, Rn = t.id, _n = t.overflow, ha = e;
  }
  var yt = null, Ye = null, Te = !1, ga = null, sn = !1, ys = Error(u(519));
  function ya(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _i(ln(t, e)), ys;
  }
  function h0(e) {
    var t = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (t[gt] = e, t[Dt] = o, i) {
      case "dialog":
        $e("cancel", t), $e("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $e("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ji.length; i++)
          $e(Ji[i], t);
        break;
      case "source":
        $e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $e("error", t), $e("load", t);
        break;
      case "details":
        $e("toggle", t);
        break;
      case "input":
        $e("invalid", t), Tf(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        );
        break;
      case "select":
        $e("invalid", t);
        break;
      case "textarea":
        $e("invalid", t), Af(t, o.value, o.defaultValue, o.children);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || o.suppressHydrationWarning === !0 || _m(t.textContent, i) ? (o.popover != null && ($e("beforetoggle", t), $e("toggle", t)), o.onScroll != null && $e("scroll", t), o.onScrollEnd != null && $e("scrollend", t), o.onClick != null && (t.onclick = kn), t = !0) : t = !1, t || ya(e, !0);
  }
  function g0(e) {
    for (yt = e.return; yt; )
      switch (yt.tag) {
        case 5:
        case 31:
        case 13:
          sn = !1;
          return;
        case 27:
        case 3:
          sn = !0;
          return;
        default:
          yt = yt.return;
      }
  }
  function jr(e) {
    if (e !== yt) return !1;
    if (!Te) return g0(e), Te = !0, !1;
    var t = e.tag, i;
    if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Mc(e.type, e.memoizedProps)), i = !i), i && Ye && ya(e), g0(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ye = Bm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ye = Bm(e);
    } else
      t === 27 ? (t = Ye, Ra(e.type) ? (e = Ic, Ic = null, Ye = e) : Ye = t) : Ye = yt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Va() {
    Ye = yt = null, Te = !1;
  }
  function ps() {
    var e = ga;
    return e !== null && (kt === null ? kt = e : kt.push.apply(
      kt,
      e
    ), ga = null), e;
  }
  function _i(e) {
    ga === null ? ga = [e] : ga.push(e);
  }
  var vs = x(null), Ya = null, zn = null;
  function pa(e, t, i) {
    Y(vs, t._currentValue), t._currentValue = i;
  }
  function Fn(e) {
    e._currentValue = vs.current, B(vs);
  }
  function bs(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function $s(e, t, i, o) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var d = s.dependencies;
      if (d !== null) {
        var m = s.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var v = d;
          d = s;
          for (var S = 0; S < t.length; S++)
            if (v.context === t[S]) {
              d.lanes |= i, v = d.alternate, v !== null && (v.lanes |= i), bs(
                d.return,
                i,
                e
              ), o || (m = null);
              break e;
            }
          d = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(u(341));
        m.lanes |= i, d = m.alternate, d !== null && (d.lanes |= i), bs(m, i, e), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Dr(e, t, i, o) {
    e = null;
    for (var s = t, d = !1; s !== null; ) {
      if (!d) {
        if ((s.flags & 524288) !== 0) d = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(u(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Kt(s.pendingProps.value, m.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (s === Ee.current) {
        if (m = s.alternate, m === null) throw Error(u(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(rl) : e = [rl]);
      }
      s = s.return;
    }
    e !== null && $s(
      t,
      e,
      i,
      o
    ), t.flags |= 262144;
  }
  function to(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Kt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Xa(e) {
    Ya = e, zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return y0(Ya, e);
  }
  function no(e, t) {
    return Ya === null && Xa(e), y0(e, t);
  }
  function y0(e, t) {
    var i = t._currentValue;
    if (t = { context: t, memoizedValue: i, next: null }, zn === null) {
      if (e === null) throw Error(u(308));
      zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else zn = zn.next = t;
    return i;
  }
  var U3 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, P3 = a.unstable_scheduleCallback, k3 = a.unstable_NormalPriority, lt = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ws() {
    return {
      controller: new U3(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ji(e) {
    e.refCount--, e.refCount === 0 && P3(k3, function() {
      e.controller.abort();
    });
  }
  var Di = null, Es = 0, Mr = 0, Lr = null;
  function I3(e, t) {
    if (Di === null) {
      var i = Di = [];
      Es = 0, Mr = Nc(), Lr = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Es++, t.then(p0, p0), t;
  }
  function p0() {
    if (--Es === 0 && Di !== null) {
      Lr !== null && (Lr.status = "fulfilled");
      var e = Di;
      Di = null, Mr = 0, Lr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function B3(e, t) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        i.push(s);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = t;
        for (var s = 0; s < i.length; s++) (0, i[s])(t);
      },
      function(s) {
        for (o.status = "rejected", o.reason = s, s = 0; s < i.length; s++)
          (0, i[s])(void 0);
      }
    ), o;
  }
  var v0 = k.S;
  k.S = function(e, t) {
    tm = nt(), typeof t == "object" && t !== null && typeof t.then == "function" && I3(e, t), v0 !== null && v0(e, t);
  };
  var Za = x(null);
  function Ss() {
    var e = Za.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function ao(e, t) {
    t === null ? Y(Za, Za.current) : Y(Za, t.pool);
  }
  function b0() {
    var e = Ss();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var Ur = Error(u(460)), Cs = Error(u(474)), ro = Error(u(542)), io = { then: function() {
  } };
  function $0(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function w0(e, t, i) {
    switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(kn, kn), t = i), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, S0(e), e;
      default:
        if (typeof t.status == "string") t.then(kn, kn);
        else {
          if (e = Ke, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(o) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = o;
              }
            },
            function(o) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = o;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, S0(e), e;
        }
        throw Wa = t, Ur;
    }
  }
  function Qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Wa = i, Ur) : i;
    }
  }
  var Wa = null;
  function E0() {
    if (Wa === null) throw Error(u(459));
    var e = Wa;
    return Wa = null, e;
  }
  function S0(e) {
    if (e === Ur || e === ro)
      throw Error(u(483));
  }
  var Pr = null, Mi = 0;
  function lo(e) {
    var t = Mi;
    return Mi += 1, Pr === null && (Pr = []), w0(Pr, e, t);
  }
  function Li(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function oo(e, t) {
    throw t.$$typeof === _ ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function C0(e) {
    function t(O, T) {
      if (e) {
        var R = O.deletions;
        R === null ? (O.deletions = [T], O.flags |= 16) : R.push(T);
      }
    }
    function i(O, T) {
      if (!e) return null;
      for (; T !== null; )
        t(O, T), T = T.sibling;
      return null;
    }
    function o(O) {
      for (var T = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? T.set(O.key, O) : T.set(O.index, O), O = O.sibling;
      return T;
    }
    function s(O, T) {
      return O = Bn(O, T), O.index = 0, O.sibling = null, O;
    }
    function d(O, T, R) {
      return O.index = R, e ? (R = O.alternate, R !== null ? (R = R.index, R < T ? (O.flags |= 67108866, T) : R) : (O.flags |= 67108866, T)) : (O.flags |= 1048576, T);
    }
    function m(O) {
      return e && O.alternate === null && (O.flags |= 67108866), O;
    }
    function v(O, T, R, z) {
      return T === null || T.tag !== 6 ? (T = fs(R, O.mode, z), T.return = O, T) : (T = s(T, R), T.return = O, T);
    }
    function S(O, T, R, z) {
      var ie = R.type;
      return ie === C ? I(
        O,
        T,
        R.props.children,
        z,
        R.key
      ) : T !== null && (T.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === ae && Qa(ie) === T.type) ? (T = s(T, R.props), Li(T, R), T.return = O, T) : (T = Jl(
        R.type,
        R.key,
        R.props,
        null,
        O.mode,
        z
      ), Li(T, R), T.return = O, T);
    }
    function j(O, T, R, z) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = ms(R, O.mode, z), T.return = O, T) : (T = s(T, R.children || []), T.return = O, T);
    }
    function I(O, T, R, z, ie) {
      return T === null || T.tag !== 7 ? (T = Ka(
        R,
        O.mode,
        z,
        ie
      ), T.return = O, T) : (T = s(T, R), T.return = O, T);
    }
    function F(O, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = fs(
          "" + T,
          O.mode,
          R
        ), T.return = O, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case E:
            return R = Jl(
              T.type,
              T.key,
              T.props,
              null,
              O.mode,
              R
            ), Li(R, T), R.return = O, R;
          case A:
            return T = ms(
              T,
              O.mode,
              R
            ), T.return = O, T;
          case ae:
            return T = Qa(T), F(O, T, R);
        }
        if (P(T) || _e(T))
          return T = Ka(
            T,
            O.mode,
            R,
            null
          ), T.return = O, T;
        if (typeof T.then == "function")
          return F(O, lo(T), R);
        if (T.$$typeof === Z)
          return F(
            O,
            no(O, T),
            R
          );
        oo(O, T);
      }
      return null;
    }
    function D(O, T, R, z) {
      var ie = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return ie !== null ? null : v(O, T, "" + R, z);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case E:
            return R.key === ie ? S(O, T, R, z) : null;
          case A:
            return R.key === ie ? j(O, T, R, z) : null;
          case ae:
            return R = Qa(R), D(O, T, R, z);
        }
        if (P(R) || _e(R))
          return ie !== null ? null : I(O, T, R, z, null);
        if (typeof R.then == "function")
          return D(
            O,
            T,
            lo(R),
            z
          );
        if (R.$$typeof === Z)
          return D(
            O,
            T,
            no(O, R),
            z
          );
        oo(O, R);
      }
      return null;
    }
    function U(O, T, R, z, ie) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return O = O.get(R) || null, v(T, O, "" + z, ie);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            return O = O.get(
              z.key === null ? R : z.key
            ) || null, S(T, O, z, ie);
          case A:
            return O = O.get(
              z.key === null ? R : z.key
            ) || null, j(T, O, z, ie);
          case ae:
            return z = Qa(z), U(
              O,
              T,
              R,
              z,
              ie
            );
        }
        if (P(z) || _e(z))
          return O = O.get(R) || null, I(T, O, z, ie, null);
        if (typeof z.then == "function")
          return U(
            O,
            T,
            R,
            lo(z),
            ie
          );
        if (z.$$typeof === Z)
          return U(
            O,
            T,
            R,
            no(T, z),
            ie
          );
        oo(T, z);
      }
      return null;
    }
    function J(O, T, R, z) {
      for (var ie = null, je = null, te = T, ye = T = 0, Ne = null; te !== null && ye < R.length; ye++) {
        te.index > ye ? (Ne = te, te = null) : Ne = te.sibling;
        var De = D(
          O,
          te,
          R[ye],
          z
        );
        if (De === null) {
          te === null && (te = Ne);
          break;
        }
        e && te && De.alternate === null && t(O, te), T = d(De, T, ye), je === null ? ie = De : je.sibling = De, je = De, te = Ne;
      }
      if (ye === R.length)
        return i(O, te), Te && Hn(O, ye), ie;
      if (te === null) {
        for (; ye < R.length; ye++)
          te = F(O, R[ye], z), te !== null && (T = d(
            te,
            T,
            ye
          ), je === null ? ie = te : je.sibling = te, je = te);
        return Te && Hn(O, ye), ie;
      }
      for (te = o(te); ye < R.length; ye++)
        Ne = U(
          te,
          O,
          ye,
          R[ye],
          z
        ), Ne !== null && (e && Ne.alternate !== null && te.delete(
          Ne.key === null ? ye : Ne.key
        ), T = d(
          Ne,
          T,
          ye
        ), je === null ? ie = Ne : je.sibling = Ne, je = Ne);
      return e && te.forEach(function(La) {
        return t(O, La);
      }), Te && Hn(O, ye), ie;
    }
    function le(O, T, R, z) {
      if (R == null) throw Error(u(151));
      for (var ie = null, je = null, te = T, ye = T = 0, Ne = null, De = R.next(); te !== null && !De.done; ye++, De = R.next()) {
        te.index > ye ? (Ne = te, te = null) : Ne = te.sibling;
        var La = D(O, te, De.value, z);
        if (La === null) {
          te === null && (te = Ne);
          break;
        }
        e && te && La.alternate === null && t(O, te), T = d(La, T, ye), je === null ? ie = La : je.sibling = La, je = La, te = Ne;
      }
      if (De.done)
        return i(O, te), Te && Hn(O, ye), ie;
      if (te === null) {
        for (; !De.done; ye++, De = R.next())
          De = F(O, De.value, z), De !== null && (T = d(De, T, ye), je === null ? ie = De : je.sibling = De, je = De);
        return Te && Hn(O, ye), ie;
      }
      for (te = o(te); !De.done; ye++, De = R.next())
        De = U(te, O, ye, De.value, z), De !== null && (e && De.alternate !== null && te.delete(De.key === null ? ye : De.key), T = d(De, T, ye), je === null ? ie = De : je.sibling = De, je = De);
      return e && te.forEach(function(Q2) {
        return t(O, Q2);
      }), Te && Hn(O, ye), ie;
    }
    function Ge(O, T, R, z) {
      if (typeof R == "object" && R !== null && R.type === C && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case E:
            e: {
              for (var ie = R.key; T !== null; ) {
                if (T.key === ie) {
                  if (ie = R.type, ie === C) {
                    if (T.tag === 7) {
                      i(
                        O,
                        T.sibling
                      ), z = s(
                        T,
                        R.props.children
                      ), z.return = O, O = z;
                      break e;
                    }
                  } else if (T.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === ae && Qa(ie) === T.type) {
                    i(
                      O,
                      T.sibling
                    ), z = s(T, R.props), Li(z, R), z.return = O, O = z;
                    break e;
                  }
                  i(O, T);
                  break;
                } else t(O, T);
                T = T.sibling;
              }
              R.type === C ? (z = Ka(
                R.props.children,
                O.mode,
                z,
                R.key
              ), z.return = O, O = z) : (z = Jl(
                R.type,
                R.key,
                R.props,
                null,
                O.mode,
                z
              ), Li(z, R), z.return = O, O = z);
            }
            return m(O);
          case A:
            e: {
              for (ie = R.key; T !== null; ) {
                if (T.key === ie)
                  if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                    i(
                      O,
                      T.sibling
                    ), z = s(T, R.children || []), z.return = O, O = z;
                    break e;
                  } else {
                    i(O, T);
                    break;
                  }
                else t(O, T);
                T = T.sibling;
              }
              z = ms(R, O.mode, z), z.return = O, O = z;
            }
            return m(O);
          case ae:
            return R = Qa(R), Ge(
              O,
              T,
              R,
              z
            );
        }
        if (P(R))
          return J(
            O,
            T,
            R,
            z
          );
        if (_e(R)) {
          if (ie = _e(R), typeof ie != "function") throw Error(u(150));
          return R = ie.call(R), le(
            O,
            T,
            R,
            z
          );
        }
        if (typeof R.then == "function")
          return Ge(
            O,
            T,
            lo(R),
            z
          );
        if (R.$$typeof === Z)
          return Ge(
            O,
            T,
            no(O, R),
            z
          );
        oo(O, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (i(O, T.sibling), z = s(T, R), z.return = O, O = z) : (i(O, T), z = fs(R, O.mode, z), z.return = O, O = z), m(O)) : i(O, T);
    }
    return function(O, T, R, z) {
      try {
        Mi = 0;
        var ie = Ge(
          O,
          T,
          R,
          z
        );
        return Pr = null, ie;
      } catch (te) {
        if (te === Ur || te === ro) throw te;
        var je = Vt(29, te, null, O.mode);
        return je.lanes = z, je.return = O, je;
      }
    };
  }
  var Ja = C0(!0), N0 = C0(!1), va = !1;
  function Ns(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ba(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function $a(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Ue & 2) !== 0) {
      var s = o.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, t = Wl(e), u0(e, null, i), t;
    }
    return Ql(e, o, t, i), Wl(e);
  }
  function Ui(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, yf(e, i);
    }
  }
  function Ts(e, t) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var s = null, d = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var m = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          d === null ? s = d = m : d = d.next = m, i = i.next;
        } while (i !== null);
        d === null ? s = d = t : d = d.next = t;
      } else s = d = t;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  var Os = !1;
  function Pi() {
    if (Os) {
      var e = Lr;
      if (e !== null) throw e;
    }
  }
  function ki(e, t, i, o) {
    Os = !1;
    var s = e.updateQueue;
    va = !1;
    var d = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var S = v, j = S.next;
      S.next = null, m === null ? d = j : m.next = j, m = S;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, v = I.lastBaseUpdate, v !== m && (v === null ? I.firstBaseUpdate = j : v.next = j, I.lastBaseUpdate = S));
    }
    if (d !== null) {
      var F = s.baseState;
      m = 0, I = j = S = null, v = d;
      do {
        var D = v.lane & -536870913, U = D !== v.lane;
        if (U ? (Ce & D) === D : (o & D) === D) {
          D !== 0 && D === Mr && (Os = !0), I !== null && (I = I.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, le = v;
            D = t;
            var Ge = i;
            switch (le.tag) {
              case 1:
                if (J = le.payload, typeof J == "function") {
                  F = J.call(Ge, F, D);
                  break e;
                }
                F = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = le.payload, D = typeof J == "function" ? J.call(Ge, F, D) : J, D == null) break e;
                F = N({}, F, D);
                break e;
              case 2:
                va = !0;
            }
          }
          D = v.callback, D !== null && (e.flags |= 64, U && (e.flags |= 8192), U = s.callbacks, U === null ? s.callbacks = [D] : U.push(D));
        } else
          U = {
            lane: D,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, I === null ? (j = I = U, S = F) : I = I.next = U, m |= D;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          U = v, v = U.next, U.next = null, s.lastBaseUpdate = U, s.shared.pending = null;
        }
      } while (!0);
      I === null && (S = F), s.baseState = S, s.firstBaseUpdate = j, s.lastBaseUpdate = I, d === null && (s.shared.lanes = 0), Na |= m, e.lanes = m, e.memoizedState = F;
    }
  }
  function x0(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function T0(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        x0(i[e], t);
  }
  var kr = x(null), uo = x(0);
  function O0(e, t) {
    e = Wn, Y(uo, e), Y(kr, t), Wn = e | t.baseLanes;
  }
  function As() {
    Y(uo, Wn), Y(kr, kr.current);
  }
  function Rs() {
    Wn = uo.current, B(kr), B(uo);
  }
  var Yt = x(null), cn = null;
  function wa(e) {
    var t = e.alternate;
    Y(at, at.current & 1), Y(Yt, e), cn === null && (t === null || kr.current !== null || t.memoizedState !== null) && (cn = e);
  }
  function _s(e) {
    Y(at, at.current), Y(Yt, e), cn === null && (cn = e);
  }
  function A0(e) {
    e.tag === 22 ? (Y(at, at.current), Y(Yt, e), cn === null && (cn = e)) : Ea();
  }
  function Ea() {
    Y(at, at.current), Y(Yt, Yt.current);
  }
  function Xt(e) {
    B(Yt), cn === e && (cn = null), B(at);
  }
  var at = x(0);
  function so(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || Pc(i) || kc(i)))
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
  var Gn = 0, he = null, ze = null, ot = null, co = !1, Ir = !1, er = !1, fo = 0, Ii = 0, Br = null, H3 = 0;
  function et() {
    throw Error(u(321));
  }
  function js(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!Kt(e[i], t[i])) return !1;
    return !0;
  }
  function Ds(e, t, i, o, s, d) {
    return Gn = d, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? f1 : Ys, er = !1, d = i(o, s), er = !1, Ir && (d = _0(
      t,
      i,
      o,
      s
    )), R0(e), d;
  }
  function R0(e) {
    k.H = zi;
    var t = ze !== null && ze.next !== null;
    if (Gn = 0, ot = ze = he = null, co = !1, Ii = 0, Br = null, t) throw Error(u(300));
    e === null || ut || (e = e.dependencies, e !== null && to(e) && (ut = !0));
  }
  function _0(e, t, i, o) {
    he = e;
    var s = 0;
    do {
      if (Ir && (Br = null), Ii = 0, Ir = !1, 25 <= s) throw Error(u(301));
      if (s += 1, ot = ze = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      k.H = m1, d = t(i, o);
    } while (Ir);
    return d;
  }
  function z3() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Bi(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (he.flags |= 1024), t;
  }
  function Ms() {
    var e = fo !== 0;
    return fo = 0, e;
  }
  function Ls(e, t, i) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i;
  }
  function Us(e) {
    if (co) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      co = !1;
    }
    Gn = 0, ot = ze = he = null, Ir = !1, Ii = fo = 0, Br = null;
  }
  function Rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ot === null ? he.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function rt() {
    if (ze === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = ot === null ? he.memoizedState : ot.next;
    if (t !== null)
      ot = t, ze = e;
    else {
      if (e === null)
        throw he.alternate === null ? Error(u(467)) : Error(u(310));
      ze = e, e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }, ot === null ? he.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function mo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Bi(e) {
    var t = Ii;
    return Ii += 1, Br === null && (Br = []), e = w0(Br, e, t), t = he, (ot === null ? t.memoizedState : ot.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? f1 : Ys), e;
  }
  function ho(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Bi(e);
      if (e.$$typeof === Z) return pt(e);
    }
    throw Error(u(438, String(e)));
  }
  function Ps(e) {
    var t = null, i = he.updateQueue;
    if (i !== null && (t = i.memoCache), t == null) {
      var o = he.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), i === null && (i = mo(), he.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
      for (i = t.data[t.index] = Array(e), o = 0; o < e; o++)
        i[o] = Pe;
    return t.index++, i;
  }
  function qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function go(e) {
    var t = rt();
    return ks(t, ze, e);
  }
  function ks(e, t, i) {
    var o = e.queue;
    if (o === null) throw Error(u(311));
    o.lastRenderedReducer = i;
    var s = e.baseQueue, d = o.pending;
    if (d !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = d.next, d.next = m;
      }
      t.baseQueue = s = d, o.pending = null;
    }
    if (d = e.baseState, s === null) e.memoizedState = d;
    else {
      t = s.next;
      var v = m = null, S = null, j = t, I = !1;
      do {
        var F = j.lane & -536870913;
        if (F !== j.lane ? (Ce & F) === F : (Gn & F) === F) {
          var D = j.revertLane;
          if (D === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), F === Mr && (I = !0);
          else if ((Gn & D) === D) {
            j = j.next, D === Mr && (I = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, S === null ? (v = S = F, m = d) : S = S.next = F, he.lanes |= D, Na |= D;
          F = j.action, er && i(d, F), d = j.hasEagerState ? j.eagerState : i(d, F);
        } else
          D = {
            lane: F,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, S === null ? (v = S = D, m = d) : S = S.next = D, he.lanes |= F, Na |= F;
        j = j.next;
      } while (j !== null && j !== t);
      if (S === null ? m = d : S.next = v, !Kt(d, e.memoizedState) && (ut = !0, I && (i = Lr, i !== null)))
        throw i;
      e.memoizedState = d, e.baseState = m, e.baseQueue = S, o.lastRenderedState = d;
    }
    return s === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Is(e) {
    var t = rt(), i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, s = i.pending, d = t.memoizedState;
    if (s !== null) {
      i.pending = null;
      var m = s = s.next;
      do
        d = e(d, m.action), m = m.next;
      while (m !== s);
      Kt(d, t.memoizedState) || (ut = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), i.lastRenderedState = d;
    }
    return [d, o];
  }
  function j0(e, t, i) {
    var o = he, s = rt(), d = Te;
    if (d) {
      if (i === void 0) throw Error(u(407));
      i = i();
    } else i = t();
    var m = !Kt(
      (ze || s).memoizedState,
      i
    );
    if (m && (s.memoizedState = i, ut = !0), s = s.queue, zs(L0.bind(null, o, s, e), [
      e
    ]), s.getSnapshot !== t || m || ot !== null && ot.memoizedState.tag & 1) {
      if (o.flags |= 2048, Hr(
        9,
        { destroy: void 0 },
        M0.bind(
          null,
          o,
          s,
          i,
          t
        ),
        null
      ), Ke === null) throw Error(u(349));
      d || (Gn & 127) !== 0 || D0(o, t, i);
    }
    return i;
  }
  function D0(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = he.updateQueue, t === null ? (t = mo(), he.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function M0(e, t, i, o) {
    t.value = i, t.getSnapshot = o, U0(t) && P0(e);
  }
  function L0(e, t, i) {
    return i(function() {
      U0(t) && P0(e);
    });
  }
  function U0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Kt(e, i);
    } catch {
      return !0;
    }
  }
  function P0(e) {
    var t = qa(e, 2);
    t !== null && It(t, e, 2);
  }
  function Bs(e) {
    var t = Rt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), er) {
        ne(!0);
        try {
          i();
        } finally {
          ne(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e
    }, t;
  }
  function k0(e, t, i, o) {
    return e.baseState = i, ks(
      e,
      ze,
      typeof o == "function" ? o : qn
    );
  }
  function F3(e, t, i, o, s) {
    if (vo(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var d = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          d.listeners.push(m);
        }
      };
      k.T !== null ? i(!0) : d.isTransition = !1, o(d), i = t.pending, i === null ? (d.next = t.pending = d, I0(t, d)) : (d.next = i.next, t.pending = i.next = d);
    }
  }
  function I0(e, t) {
    var i = t.action, o = t.payload, s = e.state;
    if (t.isTransition) {
      var d = k.T, m = {};
      k.T = m;
      try {
        var v = i(s, o), S = k.S;
        S !== null && S(m, v), B0(e, t, v);
      } catch (j) {
        Hs(e, t, j);
      } finally {
        d !== null && m.types !== null && (d.types = m.types), k.T = d;
      }
    } else
      try {
        d = i(s, o), B0(e, t, d);
      } catch (j) {
        Hs(e, t, j);
      }
  }
  function B0(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        H0(e, t, o);
      },
      function(o) {
        return Hs(e, t, o);
      }
    ) : H0(e, t, i);
  }
  function H0(e, t, i) {
    t.status = "fulfilled", t.value = i, z0(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, I0(e, i)));
  }
  function Hs(e, t, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = i, z0(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function z0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function F0(e, t) {
    return t;
  }
  function G0(e, t) {
    if (Te) {
      var i = Ke.formState;
      if (i !== null) {
        e: {
          var o = he;
          if (Te) {
            if (Ye) {
              t: {
                for (var s = Ye, d = sn; s.nodeType !== 8; ) {
                  if (!d) {
                    s = null;
                    break t;
                  }
                  if (s = dn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                d = s.data, s = d === "F!" || d === "F" ? s : null;
              }
              if (s) {
                Ye = dn(
                  s.nextSibling
                ), o = s.data === "F!";
                break e;
              }
            }
            ya(o);
          }
          o = !1;
        }
        o && (t = i[0]);
      }
    }
    return i = Rt(), i.memoizedState = i.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: F0,
      lastRenderedState: t
    }, i.queue = o, i = s1.bind(
      null,
      he,
      o
    ), o.dispatch = i, o = Bs(!1), d = Vs.bind(
      null,
      he,
      !1,
      o.queue
    ), o = Rt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = s, i = F3.bind(
      null,
      he,
      s,
      d,
      i
    ), s.dispatch = i, o.memoizedState = e, [t, i, !1];
  }
  function q0(e) {
    var t = rt();
    return K0(t, ze, e);
  }
  function K0(e, t, i) {
    if (t = ks(
      e,
      t,
      F0
    )[0], e = go(qn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = Bi(t);
      } catch (m) {
        throw m === Ur ? ro : m;
      }
    else o = t;
    t = rt();
    var s = t.queue, d = s.dispatch;
    return i !== t.memoizedState && (he.flags |= 2048, Hr(
      9,
      { destroy: void 0 },
      G3.bind(null, s, i),
      null
    )), [o, d, e];
  }
  function G3(e, t) {
    e.action = t;
  }
  function V0(e) {
    var t = rt(), i = ze;
    if (i !== null)
      return K0(t, i, e);
    rt(), t = t.memoizedState, i = rt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [t, o, !1];
  }
  function Hr(e, t, i, o) {
    return e = { tag: e, create: i, deps: o, inst: t, next: null }, t = he.updateQueue, t === null && (t = mo(), he.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e), e;
  }
  function Y0() {
    return rt().memoizedState;
  }
  function yo(e, t, i, o) {
    var s = Rt();
    he.flags |= e, s.memoizedState = Hr(
      1 | t,
      { destroy: void 0 },
      i,
      o === void 0 ? null : o
    );
  }
  function po(e, t, i, o) {
    var s = rt();
    o = o === void 0 ? null : o;
    var d = s.memoizedState.inst;
    ze !== null && o !== null && js(o, ze.memoizedState.deps) ? s.memoizedState = Hr(t, d, i, o) : (he.flags |= e, s.memoizedState = Hr(
      1 | t,
      d,
      i,
      o
    ));
  }
  function X0(e, t) {
    yo(8390656, 8, e, t);
  }
  function zs(e, t) {
    po(2048, 8, e, t);
  }
  function q3(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null)
      t = mo(), he.updateQueue = t, t.events = [e];
    else {
      var i = t.events;
      i === null ? t.events = [e] : i.push(e);
    }
  }
  function Z0(e) {
    var t = rt().memoizedState;
    return q3({ ref: t, nextImpl: e }), function() {
      if ((Ue & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Q0(e, t) {
    return po(4, 2, e, t);
  }
  function W0(e, t) {
    return po(4, 4, e, t);
  }
  function J0(e, t) {
    if (typeof t == "function") {
      e = e();
      var i = t(e);
      return function() {
        typeof i == "function" ? i() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function e1(e, t, i) {
    i = i != null ? i.concat([e]) : null, po(4, 4, J0.bind(null, t, e), i);
  }
  function Fs() {
  }
  function t1(e, t) {
    var i = rt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return t !== null && js(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e);
  }
  function n1(e, t) {
    var i = rt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    if (t !== null && js(t, o[1]))
      return o[0];
    if (o = e(), er) {
      ne(!0);
      try {
        e();
      } finally {
        ne(!1);
      }
    }
    return i.memoizedState = [o, t], o;
  }
  function Gs(e, t, i) {
    return i === void 0 || (Gn & 1073741824) !== 0 && (Ce & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = i, e = am(), he.lanes |= e, Na |= e, i);
  }
  function a1(e, t, i, o) {
    return Kt(i, t) ? i : kr.current !== null ? (e = Gs(e, i, o), Kt(e, t) || (ut = !0), e) : (Gn & 42) === 0 || (Gn & 1073741824) !== 0 && (Ce & 261930) === 0 ? (ut = !0, e.memoizedState = i) : (e = am(), he.lanes |= e, Na |= e, t);
  }
  function r1(e, t, i, o, s) {
    var d = G.p;
    G.p = d !== 0 && 8 > d ? d : 8;
    var m = k.T, v = {};
    k.T = v, Vs(e, !1, t, i);
    try {
      var S = s(), j = k.S;
      if (j !== null && j(v, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var I = B3(
          S,
          o
        );
        Hi(
          e,
          t,
          I,
          Wt(e)
        );
      } else
        Hi(
          e,
          t,
          o,
          Wt(e)
        );
    } catch (F) {
      Hi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: F },
        Wt()
      );
    } finally {
      G.p = d, m !== null && v.types !== null && (m.types = v.types), k.T = m;
    }
  }
  function K3() {
  }
  function qs(e, t, i, o) {
    if (e.tag !== 5) throw Error(u(476));
    var s = i1(e).queue;
    r1(
      e,
      s,
      t,
      fe,
      i === null ? K3 : function() {
        return l1(e), i(o);
      }
    );
  }
  function i1(e) {
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
        lastRenderedReducer: qn,
        lastRenderedState: fe
      },
      next: null
    };
    var i = {};
    return t.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function l1(e) {
    var t = i1(e);
    t.next === null && (t = e.alternate.memoizedState), Hi(
      e,
      t.next.queue,
      {},
      Wt()
    );
  }
  function Ks() {
    return pt(rl);
  }
  function o1() {
    return rt().memoizedState;
  }
  function u1() {
    return rt().memoizedState;
  }
  function V3(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = Wt();
          e = ba(i);
          var o = $a(t, e, i);
          o !== null && (It(o, t, i), Ui(o, t, i)), t = { cache: ws() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Y3(e, t, i) {
    var o = Wt();
    i = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(e) ? c1(t, i) : (i = cs(e, t, i, o), i !== null && (It(i, e, o), d1(i, t, o)));
  }
  function s1(e, t, i) {
    var o = Wt();
    Hi(e, t, i, o);
  }
  function Hi(e, t, i, o) {
    var s = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vo(e)) c1(t, s);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var m = t.lastRenderedState, v = d(m, i);
          if (s.hasEagerState = !0, s.eagerState = v, Kt(v, m))
            return Ql(e, t, s, 0), Ke === null && Zl(), !1;
        } catch {
        }
      if (i = cs(e, t, s, o), i !== null)
        return It(i, e, o), d1(i, t, o), !0;
    }
    return !1;
  }
  function Vs(e, t, i, o) {
    if (o = {
      lane: 2,
      revertLane: Nc(),
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(e)) {
      if (t) throw Error(u(479));
    } else
      t = cs(
        e,
        i,
        o,
        2
      ), t !== null && It(t, e, 2);
  }
  function vo(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function c1(e, t) {
    Ir = co = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function d1(e, t, i) {
    if ((i & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, yf(e, i);
    }
  }
  var zi = {
    readContext: pt,
    use: ho,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useLayoutEffect: et,
    useInsertionEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useSyncExternalStore: et,
    useId: et,
    useHostTransitionStatus: et,
    useFormState: et,
    useActionState: et,
    useOptimistic: et,
    useMemoCache: et,
    useCacheRefresh: et
  };
  zi.useEffectEvent = et;
  var f1 = {
    readContext: pt,
    use: ho,
    useCallback: function(e, t) {
      return Rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: X0,
    useImperativeHandle: function(e, t, i) {
      i = i != null ? i.concat([e]) : null, yo(
        4194308,
        4,
        J0.bind(null, t, e),
        i
      );
    },
    useLayoutEffect: function(e, t) {
      return yo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      yo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var i = Rt();
      t = t === void 0 ? null : t;
      var o = e();
      if (er) {
        ne(!0);
        try {
          e();
        } finally {
          ne(!1);
        }
      }
      return i.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, i) {
      var o = Rt();
      if (i !== void 0) {
        var s = i(t);
        if (er) {
          ne(!0);
          try {
            i(t);
          } finally {
            ne(!1);
          }
        }
      } else s = t;
      return o.memoizedState = o.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, o.queue = e, e = e.dispatch = Y3.bind(
        null,
        he,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = Rt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Bs(e);
      var t = e.queue, i = s1.bind(null, he, t);
      return t.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Fs,
    useDeferredValue: function(e, t) {
      var i = Rt();
      return Gs(i, e, t);
    },
    useTransition: function() {
      var e = Bs(!1);
      return e = r1.bind(
        null,
        he,
        e.queue,
        !0,
        !1
      ), Rt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, i) {
      var o = he, s = Rt();
      if (Te) {
        if (i === void 0)
          throw Error(u(407));
        i = i();
      } else {
        if (i = t(), Ke === null)
          throw Error(u(349));
        (Ce & 127) !== 0 || D0(o, t, i);
      }
      s.memoizedState = i;
      var d = { value: i, getSnapshot: t };
      return s.queue = d, X0(L0.bind(null, o, d, e), [
        e
      ]), o.flags |= 2048, Hr(
        9,
        { destroy: void 0 },
        M0.bind(
          null,
          o,
          d,
          i,
          t
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Rt(), t = Ke.identifierPrefix;
      if (Te) {
        var i = _n, o = Rn;
        i = (o & ~(1 << 32 - Re(o) - 1)).toString(32) + i, t = "_" + t + "R_" + i, i = fo++, 0 < i && (t += "H" + i.toString(32)), t += "_";
      } else
        i = H3++, t = "_" + t + "r_" + i.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ks,
    useFormState: G0,
    useActionState: G0,
    useOptimistic: function(e) {
      var t = Rt();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = i, t = Vs.bind(
        null,
        he,
        !0,
        i
      ), i.dispatch = t, [e, t];
    },
    useMemoCache: Ps,
    useCacheRefresh: function() {
      return Rt().memoizedState = V3.bind(
        null,
        he
      );
    },
    useEffectEvent: function(e) {
      var t = Rt(), i = { impl: e };
      return t.memoizedState = i, function() {
        if ((Ue & 2) !== 0)
          throw Error(u(440));
        return i.impl.apply(void 0, arguments);
      };
    }
  }, Ys = {
    readContext: pt,
    use: ho,
    useCallback: t1,
    useContext: pt,
    useEffect: zs,
    useImperativeHandle: e1,
    useInsertionEffect: Q0,
    useLayoutEffect: W0,
    useMemo: n1,
    useReducer: go,
    useRef: Y0,
    useState: function() {
      return go(qn);
    },
    useDebugValue: Fs,
    useDeferredValue: function(e, t) {
      var i = rt();
      return a1(
        i,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = go(qn)[0], t = rt().memoizedState;
      return [
        typeof e == "boolean" ? e : Bi(e),
        t
      ];
    },
    useSyncExternalStore: j0,
    useId: o1,
    useHostTransitionStatus: Ks,
    useFormState: q0,
    useActionState: q0,
    useOptimistic: function(e, t) {
      var i = rt();
      return k0(i, ze, e, t);
    },
    useMemoCache: Ps,
    useCacheRefresh: u1
  };
  Ys.useEffectEvent = Z0;
  var m1 = {
    readContext: pt,
    use: ho,
    useCallback: t1,
    useContext: pt,
    useEffect: zs,
    useImperativeHandle: e1,
    useInsertionEffect: Q0,
    useLayoutEffect: W0,
    useMemo: n1,
    useReducer: Is,
    useRef: Y0,
    useState: function() {
      return Is(qn);
    },
    useDebugValue: Fs,
    useDeferredValue: function(e, t) {
      var i = rt();
      return ze === null ? Gs(i, e, t) : a1(
        i,
        ze.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Is(qn)[0], t = rt().memoizedState;
      return [
        typeof e == "boolean" ? e : Bi(e),
        t
      ];
    },
    useSyncExternalStore: j0,
    useId: o1,
    useHostTransitionStatus: Ks,
    useFormState: V0,
    useActionState: V0,
    useOptimistic: function(e, t) {
      var i = rt();
      return ze !== null ? k0(i, ze, e, t) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Ps,
    useCacheRefresh: u1
  };
  m1.useEffectEvent = Z0;
  function Xs(e, t, i, o) {
    t = e.memoizedState, i = i(o, t), i = i == null ? t : N({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Zs = {
    enqueueSetState: function(e, t, i) {
      e = e._reactInternals;
      var o = Wt(), s = ba(o);
      s.payload = t, i != null && (s.callback = i), t = $a(e, s, o), t !== null && (It(t, e, o), Ui(t, e, o));
    },
    enqueueReplaceState: function(e, t, i) {
      e = e._reactInternals;
      var o = Wt(), s = ba(o);
      s.tag = 1, s.payload = t, i != null && (s.callback = i), t = $a(e, s, o), t !== null && (It(t, e, o), Ui(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var i = Wt(), o = ba(i);
      o.tag = 2, t != null && (o.callback = t), t = $a(e, o, i), t !== null && (It(t, e, i), Ui(t, e, i));
    }
  };
  function h1(e, t, i, o, s, d, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, d, m) : t.prototype && t.prototype.isPureReactComponent ? !Oi(i, o) || !Oi(s, d) : !0;
  }
  function g1(e, t, i, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && Zs.enqueueReplaceState(t, t.state, null);
  }
  function tr(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var o in t)
        o !== "ref" && (i[o] = t[o]);
    }
    if (e = e.defaultProps) {
      i === t && (i = N({}, i));
      for (var s in e)
        i[s] === void 0 && (i[s] = e[s]);
    }
    return i;
  }
  function y1(e) {
    Xl(e);
  }
  function p1(e) {
    console.error(e);
  }
  function v1(e) {
    Xl(e);
  }
  function bo(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function b1(e, t, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Qs(e, t, i) {
    return i = ba(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      bo(e, t);
    }, i;
  }
  function $1(e) {
    return e = ba(e), e.tag = 3, e;
  }
  function w1(e, t, i, o) {
    var s = i.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var d = o.value;
      e.payload = function() {
        return s(d);
      }, e.callback = function() {
        b1(t, i, o);
      };
    }
    var m = i.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      b1(t, i, o), typeof s != "function" && (xa === null ? xa = /* @__PURE__ */ new Set([this]) : xa.add(this));
      var v = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function X3(e, t, i, o, s) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = i.alternate, t !== null && Dr(
        t,
        i,
        s,
        !0
      ), i = Yt.current, i !== null) {
        switch (i.tag) {
          case 31:
          case 13:
            return cn === null ? _o() : i.alternate === null && tt === 0 && (tt = 3), i.flags &= -257, i.flags |= 65536, i.lanes = s, o === io ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), Ec(e, o, s)), !1;
          case 22:
            return i.flags |= 65536, o === io ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Ec(e, o, s)), !1;
        }
        throw Error(u(435, i.tag));
      }
      return Ec(e, o, s), _o(), !1;
    }
    if (Te)
      return t = Yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, o !== ys && (e = Error(u(422), { cause: o }), _i(ln(e, i)))) : (o !== ys && (t = Error(u(423), {
        cause: o
      }), _i(
        ln(t, i)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, o = ln(o, i), s = Qs(
        e.stateNode,
        o,
        s
      ), Ts(e, s), tt !== 4 && (tt = 2)), !1;
    var d = Error(u(520), { cause: o });
    if (d = ln(d, i), Zi === null ? Zi = [d] : Zi.push(d), tt !== 4 && (tt = 2), t === null) return !0;
    o = ln(o, i), i = t;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = s & -s, i.lanes |= e, e = Qs(i.stateNode, o, e), Ts(i, e), !1;
        case 1:
          if (t = i.type, d = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (xa === null || !xa.has(d))))
            return i.flags |= 65536, s &= -s, i.lanes |= s, s = $1(s), w1(
              s,
              e,
              i,
              o
            ), Ts(i, s), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Ws = Error(u(461)), ut = !1;
  function vt(e, t, i, o) {
    t.child = e === null ? N0(t, null, i, o) : Ja(
      t,
      e.child,
      i,
      o
    );
  }
  function E1(e, t, i, o, s) {
    i = i.render;
    var d = t.ref;
    if ("ref" in o) {
      var m = {};
      for (var v in o)
        v !== "ref" && (m[v] = o[v]);
    } else m = o;
    return Xa(t), o = Ds(
      e,
      t,
      i,
      m,
      d,
      s
    ), v = Ms(), e !== null && !ut ? (Ls(e, t, s), Kn(e, t, s)) : (Te && v && hs(t), t.flags |= 1, vt(e, t, o, s), t.child);
  }
  function S1(e, t, i, o, s) {
    if (e === null) {
      var d = i.type;
      return typeof d == "function" && !ds(d) && d.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = d, C1(
        e,
        t,
        d,
        o,
        s
      )) : (e = Jl(
        i.type,
        null,
        o,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !lc(e, s)) {
      var m = d.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Oi, i(m, o) && e.ref === t.ref)
        return Kn(e, t, s);
    }
    return t.flags |= 1, e = Bn(d, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function C1(e, t, i, o, s) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Oi(d, o) && e.ref === t.ref)
        if (ut = !1, t.pendingProps = o = d, lc(e, s))
          (e.flags & 131072) !== 0 && (ut = !0);
        else
          return t.lanes = e.lanes, Kn(e, t, s);
    }
    return Js(
      e,
      t,
      i,
      o,
      s
    );
  }
  function N1(e, t, i, o) {
    var s = o.children, d = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (d = d !== null ? d.baseLanes | i : i, e !== null) {
          for (o = t.child = e.child, s = 0; o !== null; )
            s = s | o.lanes | o.childLanes, o = o.sibling;
          o = s & ~d;
        } else o = 0, t.child = null;
        return x1(
          e,
          t,
          d,
          i,
          o
        );
      }
      if ((i & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ao(
          t,
          d !== null ? d.cachePool : null
        ), d !== null ? O0(t, d) : As(), A0(t);
      else
        return o = t.lanes = 536870912, x1(
          e,
          t,
          d !== null ? d.baseLanes | i : i,
          i,
          o
        );
    } else
      d !== null ? (ao(t, d.cachePool), O0(t, d), Ea(), t.memoizedState = null) : (e !== null && ao(t, null), As(), Ea());
    return vt(e, t, s, i), t.child;
  }
  function Fi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function x1(e, t, i, o, s) {
    var d = Ss();
    return d = d === null ? null : { parent: lt._currentValue, pool: d }, t.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && ao(t, null), As(), A0(t), e !== null && Dr(e, t, o, !0), t.childLanes = s, null;
  }
  function $o(e, t) {
    return t = Eo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function T1(e, t, i) {
    return Ja(t, e.child, null, i), e = $o(t, t.pendingProps), e.flags |= 2, Xt(t), t.memoizedState = null, e;
  }
  function Z3(e, t, i) {
    var o = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (o.mode === "hidden")
          return e = $o(t, o), t.lanes = 536870912, Fi(null, e);
        if (_s(t), (e = Ye) ? (e = Im(
          e,
          sn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ha !== null ? { id: Rn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = c0(e), i.return = t, t.child = i, yt = t, Ye = null)) : e = null, e === null) throw ya(t);
        return t.lanes = 536870912, null;
      }
      return $o(t, o);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var m = d.dehydrated;
      if (_s(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = T1(
            e,
            t,
            i
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (ut || Dr(e, t, i, !1), s = (i & e.childLanes) !== 0, ut || s) {
        if (o = Ke, o !== null && (m = pf(o, i), m !== 0 && m !== d.retryLane))
          throw d.retryLane = m, qa(e, m), It(o, e, m), Ws;
        _o(), t = T1(
          e,
          t,
          i
        );
      } else
        e = d.treeContext, Ye = dn(m.nextSibling), yt = t, Te = !0, ga = null, sn = !1, e !== null && m0(t, e), t = $o(t, o), t.flags |= 4096;
      return t;
    }
    return e = Bn(e.child, {
      mode: o.mode,
      children: o.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function wo(e, t) {
    var i = t.ref;
    if (i === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(u(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function Js(e, t, i, o, s) {
    return Xa(t), i = Ds(
      e,
      t,
      i,
      o,
      void 0,
      s
    ), o = Ms(), e !== null && !ut ? (Ls(e, t, s), Kn(e, t, s)) : (Te && o && hs(t), t.flags |= 1, vt(e, t, i, s), t.child);
  }
  function O1(e, t, i, o, s, d) {
    return Xa(t), t.updateQueue = null, i = _0(
      t,
      o,
      i,
      s
    ), R0(e), o = Ms(), e !== null && !ut ? (Ls(e, t, d), Kn(e, t, d)) : (Te && o && hs(t), t.flags |= 1, vt(e, t, i, d), t.child);
  }
  function A1(e, t, i, o, s) {
    if (Xa(t), t.stateNode === null) {
      var d = Ar, m = i.contextType;
      typeof m == "object" && m !== null && (d = pt(m)), d = new i(o, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Zs, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = o, d.state = t.memoizedState, d.refs = {}, Ns(t), m = i.contextType, d.context = typeof m == "object" && m !== null ? pt(m) : Ar, d.state = t.memoizedState, m = i.getDerivedStateFromProps, typeof m == "function" && (Xs(
        t,
        i,
        m,
        o
      ), d.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (m = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), m !== d.state && Zs.enqueueReplaceState(d, d.state, null), ki(t, o, d, s), Pi(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      d = t.stateNode;
      var v = t.memoizedProps, S = tr(i, v);
      d.props = S;
      var j = d.context, I = i.contextType;
      m = Ar, typeof I == "object" && I !== null && (m = pt(I));
      var F = i.getDerivedStateFromProps;
      I = typeof F == "function" || typeof d.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, I || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v || j !== m) && g1(
        t,
        d,
        o,
        m
      ), va = !1;
      var D = t.memoizedState;
      d.state = D, ki(t, o, d, s), Pi(), j = t.memoizedState, v || D !== j || va ? (typeof F == "function" && (Xs(
        t,
        i,
        F,
        o
      ), j = t.memoizedState), (S = va || h1(
        t,
        i,
        S,
        o,
        D,
        j,
        m
      )) ? (I || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = j), d.props = o, d.state = j, d.context = m, o = S) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      d = t.stateNode, xs(e, t), m = t.memoizedProps, I = tr(i, m), d.props = I, F = t.pendingProps, D = d.context, j = i.contextType, S = Ar, typeof j == "object" && j !== null && (S = pt(j)), v = i.getDerivedStateFromProps, (j = typeof v == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (m !== F || D !== S) && g1(
        t,
        d,
        o,
        S
      ), va = !1, D = t.memoizedState, d.state = D, ki(t, o, d, s), Pi();
      var U = t.memoizedState;
      m !== F || D !== U || va || e !== null && e.dependencies !== null && to(e.dependencies) ? (typeof v == "function" && (Xs(
        t,
        i,
        v,
        o
      ), U = t.memoizedState), (I = va || h1(
        t,
        i,
        I,
        o,
        D,
        U,
        S
      ) || e !== null && e.dependencies !== null && to(e.dependencies)) ? (j || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, U, S), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        o,
        U,
        S
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = U), d.props = o, d.state = U, d.context = S, o = I) : (typeof d.componentDidUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return d = o, wo(e, t), o = (t.flags & 128) !== 0, d || o ? (d = t.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && o ? (t.child = Ja(
      t,
      e.child,
      null,
      s
    ), t.child = Ja(
      t,
      null,
      i,
      s
    )) : vt(e, t, i, s), t.memoizedState = d.state, e = t.child) : e = Kn(
      e,
      t,
      s
    ), e;
  }
  function R1(e, t, i, o) {
    return Va(), t.flags |= 256, vt(e, t, i, o), t.child;
  }
  var ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tc(e) {
    return { baseLanes: e, cachePool: b0() };
  }
  function nc(e, t, i) {
    return e = e !== null ? e.childLanes & ~i : 0, t && (e |= Qt), e;
  }
  function _1(e, t, i) {
    var o = t.pendingProps, s = !1, d = (t.flags & 128) !== 0, m;
    if ((m = d) || (m = e !== null && e.memoizedState === null ? !1 : (at.current & 2) !== 0), m && (s = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (s ? wa(t) : Ea(), (e = Ye) ? (e = Im(
          e,
          sn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ha !== null ? { id: Rn, overflow: _n } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = c0(e), i.return = t, t.child = i, yt = t, Ye = null)) : e = null, e === null) throw ya(t);
        return kc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var v = o.children;
      return o = o.fallback, s ? (Ea(), s = t.mode, v = Eo(
        { mode: "hidden", children: v },
        s
      ), o = Ka(
        o,
        s,
        i,
        null
      ), v.return = t, o.return = t, v.sibling = o, t.child = v, o = t.child, o.memoizedState = tc(i), o.childLanes = nc(
        e,
        m,
        i
      ), t.memoizedState = ec, Fi(null, o)) : (wa(t), ac(t, v));
    }
    var S = e.memoizedState;
    if (S !== null && (v = S.dehydrated, v !== null)) {
      if (d)
        t.flags & 256 ? (wa(t), t.flags &= -257, t = rc(
          e,
          t,
          i
        )) : t.memoizedState !== null ? (Ea(), t.child = e.child, t.flags |= 128, t = null) : (Ea(), v = o.fallback, s = t.mode, o = Eo(
          { mode: "visible", children: o.children },
          s
        ), v = Ka(
          v,
          s,
          i,
          null
        ), v.flags |= 2, o.return = t, v.return = t, o.sibling = v, t.child = o, Ja(
          t,
          e.child,
          null,
          i
        ), o = t.child, o.memoizedState = tc(i), o.childLanes = nc(
          e,
          m,
          i
        ), t.memoizedState = ec, t = Fi(null, o));
      else if (wa(t), kc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var j = m.dgst;
        m = j, o = Error(u(419)), o.stack = "", o.digest = m, _i({ value: o, source: null, stack: null }), t = rc(
          e,
          t,
          i
        );
      } else if (ut || Dr(e, t, i, !1), m = (i & e.childLanes) !== 0, ut || m) {
        if (m = Ke, m !== null && (o = pf(m, i), o !== 0 && o !== S.retryLane))
          throw S.retryLane = o, qa(e, o), It(m, e, o), Ws;
        Pc(v) || _o(), t = rc(
          e,
          t,
          i
        );
      } else
        Pc(v) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ye = dn(
          v.nextSibling
        ), yt = t, Te = !0, ga = null, sn = !1, e !== null && m0(t, e), t = ac(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (Ea(), v = o.fallback, s = t.mode, S = e.child, j = S.sibling, o = Bn(S, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = S.subtreeFlags & 65011712, j !== null ? v = Bn(
      j,
      v
    ) : (v = Ka(
      v,
      s,
      i,
      null
    ), v.flags |= 2), v.return = t, o.return = t, o.sibling = v, t.child = o, Fi(null, o), o = t.child, v = e.child.memoizedState, v === null ? v = tc(i) : (s = v.cachePool, s !== null ? (S = lt._currentValue, s = s.parent !== S ? { parent: S, pool: S } : s) : s = b0(), v = {
      baseLanes: v.baseLanes | i,
      cachePool: s
    }), o.memoizedState = v, o.childLanes = nc(
      e,
      m,
      i
    ), t.memoizedState = ec, Fi(e.child, o)) : (wa(t), i = e.child, e = i.sibling, i = Bn(i, {
      mode: "visible",
      children: o.children
    }), i.return = t, i.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = i, t.memoizedState = null, i);
  }
  function ac(e, t) {
    return t = Eo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Eo(e, t) {
    return e = Vt(22, e, null, t), e.lanes = 0, e;
  }
  function rc(e, t, i) {
    return Ja(t, e.child, null, i), e = ac(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function j1(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), bs(e.return, t, i);
  }
  function ic(e, t, i, o, s, d) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: s,
      treeForkCount: d
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = o, m.tail = i, m.tailMode = s, m.treeForkCount = d);
  }
  function D1(e, t, i) {
    var o = t.pendingProps, s = o.revealOrder, d = o.tail;
    o = o.children;
    var m = at.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, Y(at, m), vt(e, t, o, i), o = Te ? Ri : 0, !v && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && j1(e, i, t);
        else if (e.tag === 19)
          j1(e, i, t);
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
    switch (s) {
      case "forwards":
        for (i = t.child, s = null; i !== null; )
          e = i.alternate, e !== null && so(e) === null && (s = i), i = i.sibling;
        i = s, i === null ? (s = t.child, t.child = null) : (s = i.sibling, i.sibling = null), ic(
          t,
          !1,
          s,
          i,
          d,
          o
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && so(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = i, i = s, s = e;
        }
        ic(
          t,
          !0,
          i,
          null,
          d,
          o
        );
        break;
      case "together":
        ic(
          t,
          !1,
          null,
          null,
          void 0,
          o
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Kn(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Na |= t.lanes, (i & t.childLanes) === 0)
      if (e !== null) {
        if (Dr(
          e,
          t,
          i,
          !1
        ), (i & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, i = Bn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        e = e.sibling, i = i.sibling = Bn(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function lc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && to(e)));
  }
  function Q3(e, t, i) {
    switch (t.tag) {
      case 3:
        Ze(t, t.stateNode.containerInfo), pa(t, lt, e.memoizedState.cache), Va();
        break;
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        Ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        pa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, _s(t), null;
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (wa(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? _1(e, t, i) : (wa(t), e = Kn(
            e,
            t,
            i
          ), e !== null ? e.sibling : null);
        wa(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (o = (i & t.childLanes) !== 0, o || (Dr(
          e,
          t,
          i,
          !1
        ), o = (i & t.childLanes) !== 0), s) {
          if (o)
            return D1(
              e,
              t,
              i
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Y(at, at.current), o) break;
        return null;
      case 22:
        return t.lanes = 0, N1(
          e,
          t,
          i,
          t.pendingProps
        );
      case 24:
        pa(t, lt, e.memoizedState.cache);
    }
    return Kn(e, t, i);
  }
  function M1(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ut = !0;
      else {
        if (!lc(e, i) && (t.flags & 128) === 0)
          return ut = !1, Q3(
            e,
            t,
            i
          );
        ut = (e.flags & 131072) !== 0;
      }
    else
      ut = !1, Te && (t.flags & 1048576) !== 0 && f0(t, Ri, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            ds(e) ? (o = tr(e, o), t.tag = 1, t = A1(
              null,
              t,
              e,
              o,
              i
            )) : (t.tag = 0, t = Js(
              null,
              t,
              e,
              o,
              i
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === V) {
                t.tag = 11, t = E1(
                  null,
                  t,
                  e,
                  o,
                  i
                );
                break e;
              } else if (s === X) {
                t.tag = 14, t = S1(
                  null,
                  t,
                  e,
                  o,
                  i
                );
                break e;
              }
            }
            throw t = qe(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Js(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 1:
        return o = t.type, s = tr(
          o,
          t.pendingProps
        ), A1(
          e,
          t,
          o,
          s,
          i
        );
      case 3:
        e: {
          if (Ze(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          o = t.pendingProps;
          var d = t.memoizedState;
          s = d.element, xs(e, t), ki(t, o, null, i);
          var m = t.memoizedState;
          if (o = m.cache, pa(t, lt, o), o !== d.cache && $s(
            t,
            [lt],
            i,
            !0
          ), Pi(), o = m.element, d.isDehydrated)
            if (d = {
              element: o,
              isDehydrated: !1,
              cache: m.cache
            }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              t = R1(
                e,
                t,
                o,
                i
              );
              break e;
            } else if (o !== s) {
              s = ln(
                Error(u(424)),
                t
              ), _i(s), t = R1(
                e,
                t,
                o,
                i
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ye = dn(e.firstChild), yt = t, Te = !0, ga = null, sn = !0, i = N0(
                t,
                null,
                o,
                i
              ), t.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (Va(), o === s) {
              t = Kn(
                e,
                t,
                i
              );
              break e;
            }
            vt(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return wo(e, t), e === null ? (i = qm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = i : Te || (i = t.type, e = t.pendingProps, o = ko(
          ce.current
        ).createElement(i), o[gt] = t, o[Dt] = e, bt(o, i, e), mt(o), t.stateNode = o) : t.memoizedState = qm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ft(t), e === null && Te && (o = t.stateNode = zm(
          t.type,
          t.pendingProps,
          ce.current
        ), yt = t, sn = !0, s = Ye, Ra(t.type) ? (Ic = s, Ye = dn(o.firstChild)) : Ye = s), vt(
          e,
          t,
          t.pendingProps.children,
          i
        ), wo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((s = o = Ye) && (o = T2(
          o,
          t.type,
          t.pendingProps,
          sn
        ), o !== null ? (t.stateNode = o, yt = t, Ye = dn(o.firstChild), sn = !1, s = !0) : s = !1), s || ya(t)), Ft(t), s = t.type, d = t.pendingProps, m = e !== null ? e.memoizedProps : null, o = d.children, Mc(s, d) ? o = null : m !== null && Mc(s, m) && (t.flags |= 32), t.memoizedState !== null && (s = Ds(
          e,
          t,
          z3,
          null,
          null,
          i
        ), rl._currentValue = s), wo(e, t), vt(e, t, o, i), t.child;
      case 6:
        return e === null && Te && ((e = i = Ye) && (i = O2(
          i,
          t.pendingProps,
          sn
        ), i !== null ? (t.stateNode = i, yt = t, Ye = null, e = !0) : e = !1), e || ya(t)), null;
      case 13:
        return _1(e, t, i);
      case 4:
        return Ze(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = Ja(
          t,
          null,
          o,
          i
        ) : vt(e, t, o, i), t.child;
      case 11:
        return E1(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 7:
        return vt(
          e,
          t,
          t.pendingProps,
          i
        ), t.child;
      case 8:
        return vt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 12:
        return vt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 10:
        return o = t.pendingProps, pa(t, t.type, o.value), vt(e, t, o.children, i), t.child;
      case 9:
        return s = t.type._context, o = t.pendingProps.children, Xa(t), s = pt(s), o = o(s), t.flags |= 1, vt(e, t, o, i), t.child;
      case 14:
        return S1(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 15:
        return C1(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 19:
        return D1(e, t, i);
      case 31:
        return Z3(e, t, i);
      case 22:
        return N1(
          e,
          t,
          i,
          t.pendingProps
        );
      case 24:
        return Xa(t), o = pt(lt), e === null ? (s = Ss(), s === null && (s = Ke, d = ws(), s.pooledCache = d, d.refCount++, d !== null && (s.pooledCacheLanes |= i), s = d), t.memoizedState = { parent: o, cache: s }, Ns(t), pa(t, lt, s)) : ((e.lanes & i) !== 0 && (xs(e, t), ki(t, null, null, i), Pi()), s = e.memoizedState, d = t.memoizedState, s.parent !== o ? (s = { parent: o, cache: o }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), pa(t, lt, o)) : (o = d.cache, pa(t, lt, o), o !== s.cache && $s(
          t,
          [lt],
          i,
          !0
        ))), vt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Vn(e) {
    e.flags |= 4;
  }
  function oc(e, t, i, o, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (om()) e.flags |= 8192;
        else
          throw Wa = io, Cs;
    } else e.flags &= -16777217;
  }
  function L1(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zm(t))
      if (om()) e.flags |= 8192;
      else
        throw Wa = io, Cs;
  }
  function So(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? hf() : 536870912, e.lanes |= t, qr |= t);
  }
  function Gi(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), t = t.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (t)
      for (var s = e.child; s !== null; )
        i |= s.lanes | s.childLanes, o |= s.subtreeFlags & 65011712, o |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        i |= s.lanes | s.childLanes, o |= s.subtreeFlags, o |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, t;
  }
  function W3(e, t, i) {
    var o = t.pendingProps;
    switch (gs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xe(t), null;
      case 1:
        return Xe(t), null;
      case 3:
        return i = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), Fn(lt), Ie(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (jr(t) ? Vn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ps())), Xe(t), null;
      case 26:
        var s = t.type, d = t.memoizedState;
        return e === null ? (Vn(t), d !== null ? (Xe(t), L1(t, d)) : (Xe(t), oc(
          t,
          s,
          null,
          o,
          i
        ))) : d ? d !== e.memoizedState ? (Vn(t), Xe(t), L1(t, d)) : (Xe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== o && Vn(t), Xe(t), oc(
          t,
          s,
          e,
          o,
          i
        )), null;
      case 27:
        if (tn(t), i = ce.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && Vn(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Xe(t), null;
          }
          e = Q.current, jr(t) ? h0(t) : (e = zm(s, o, i), t.stateNode = e, Vn(t));
        }
        return Xe(t), null;
      case 5:
        if (tn(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && Vn(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Xe(t), null;
          }
          if (d = Q.current, jr(t))
            h0(t);
          else {
            var m = ko(
              ce.current
            );
            switch (d) {
              case 1:
                d = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                d = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    d = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    d = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    d = m.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(
                      d.firstChild
                    );
                    break;
                  case "select":
                    d = typeof o.is == "string" ? m.createElement("select", {
                      is: o.is
                    }) : m.createElement("select"), o.multiple ? d.multiple = !0 : o.size && (d.size = o.size);
                    break;
                  default:
                    d = typeof o.is == "string" ? m.createElement(s, { is: o.is }) : m.createElement(s);
                }
            }
            d[gt] = t, d[Dt] = o;
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                d.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            t.stateNode = d;
            e: switch (bt(d, s, o), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Vn(t);
          }
        }
        return Xe(t), oc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          i
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && Vn(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = ce.current, jr(t)) {
            if (e = t.stateNode, i = t.memoizedProps, o = null, s = yt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  o = s.memoizedProps;
              }
            e[gt] = t, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || _m(e.nodeValue, i)), e || ya(t, !0);
          } else
            e = ko(e).createTextNode(
              o
            ), e[gt] = t, t.stateNode = e;
        }
        return Xe(t), null;
      case 31:
        if (i = t.memoizedState, e === null || e.memoizedState !== null) {
          if (o = jr(t), i !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[gt] = t;
            } else
              Va(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), e = !1;
          } else
            i = ps(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), e = !0;
          if (!e)
            return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Xe(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = jr(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(u(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
              s[gt] = t;
            } else
              Va(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), s = !1;
          } else
            s = ps(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
        }
        return Xt(t), (t.flags & 128) !== 0 ? (t.lanes = i, t) : (i = o !== null, e = e !== null && e.memoizedState !== null, i && (o = t.child, s = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (s = o.alternate.memoizedState.cachePool.pool), d = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (d = o.memoizedState.cachePool.pool), d !== s && (o.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), So(t, t.updateQueue), Xe(t), null);
      case 4:
        return Ie(), e === null && Ac(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return Fn(t.type), Xe(t), null;
      case 19:
        if (B(at), o = t.memoizedState, o === null) return Xe(t), null;
        if (s = (t.flags & 128) !== 0, d = o.rendering, d === null)
          if (s) Gi(o, !1);
          else {
            if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = so(e), d !== null) {
                  for (t.flags |= 128, Gi(o, !1), e = d.updateQueue, t.updateQueue = e, So(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null; )
                    s0(i, e), i = i.sibling;
                  return Y(
                    at,
                    at.current & 1 | 2
                  ), Te && Hn(t, o.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && nt() > Oo && (t.flags |= 128, s = !0, Gi(o, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = so(d), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, So(t, e), Gi(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !Te)
                return Xe(t), null;
            } else
              2 * nt() - o.renderingStartTime > Oo && i !== 536870912 && (t.flags |= 128, s = !0, Gi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (d.sibling = t.child, t.child = d) : (e = o.last, e !== null ? e.sibling = d : t.child = d, o.last = d);
        }
        return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = nt(), e.sibling = null, i = at.current, Y(
          at,
          s ? i & 1 | 2 : i & 1
        ), Te && Hn(t, o.treeForkCount), e) : (Xe(t), null);
      case 22:
      case 23:
        return Xt(t), Rs(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), i = t.updateQueue, i !== null && So(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== i && (t.flags |= 2048), e !== null && B(Za), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Fn(lt), Xe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function J3(e, t) {
    switch (gs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Fn(lt), Ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return tn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Xt(t), t.alternate === null)
            throw Error(u(340));
          Va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Xt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          Va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(at), null;
      case 4:
        return Ie(), null;
      case 10:
        return Fn(t.type), null;
      case 22:
      case 23:
        return Xt(t), Rs(), e !== null && B(Za), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Fn(lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function U1(e, t) {
    switch (gs(t), t.tag) {
      case 3:
        Fn(lt), Ie();
        break;
      case 26:
      case 27:
      case 5:
        tn(t);
        break;
      case 4:
        Ie();
        break;
      case 31:
        t.memoizedState !== null && Xt(t);
        break;
      case 13:
        Xt(t);
        break;
      case 19:
        B(at);
        break;
      case 10:
        Fn(t.type);
        break;
      case 22:
      case 23:
        Xt(t), Rs(), e !== null && B(Za);
        break;
      case 24:
        Fn(lt);
    }
  }
  function qi(e, t) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        i = s;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var d = i.create, m = i.inst;
            o = d(), m.destroy = o;
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (v) {
      He(t, t.return, v);
    }
  }
  function Sa(e, t, i) {
    try {
      var o = t.updateQueue, s = o !== null ? o.lastEffect : null;
      if (s !== null) {
        var d = s.next;
        o = d;
        do {
          if ((o.tag & e) === e) {
            var m = o.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = t;
              var S = i, j = v;
              try {
                j();
              } catch (I) {
                He(
                  s,
                  S,
                  I
                );
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (I) {
      He(t, t.return, I);
    }
  }
  function P1(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        T0(t, i);
      } catch (o) {
        He(e, e.return, o);
      }
    }
  }
  function k1(e, t, i) {
    i.props = tr(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      He(e, t, o);
    }
  }
  function Ki(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(o) : i.current = o;
      }
    } catch (s) {
      He(e, t, s);
    }
  }
  function jn(e, t) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (s) {
          He(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (s) {
          He(e, t, s);
        }
      else i.current = null;
  }
  function I1(e) {
    var t = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (s) {
      He(e, e.return, s);
    }
  }
  function uc(e, t, i) {
    try {
      var o = e.stateNode;
      w2(o, e.type, i, t), o[Dt] = t;
    } catch (s) {
      He(e, e.return, s);
    }
  }
  function B1(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ra(e.type) || e.tag === 4;
  }
  function sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || B1(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ra(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cc(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = kn));
    else if (o !== 4 && (o === 27 && Ra(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
      for (cc(e, t, i), e = e.sibling; e !== null; )
        cc(e, t, i), e = e.sibling;
  }
  function Co(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Ra(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (Co(e, t, i), e = e.sibling; e !== null; )
        Co(e, t, i), e = e.sibling;
  }
  function H1(e) {
    var t = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      bt(t, o, i), t[gt] = e, t[Dt] = i;
    } catch (d) {
      He(e, e.return, d);
    }
  }
  var Yn = !1, st = !1, dc = !1, z1 = typeof WeakSet == "function" ? WeakSet : Set, ht = null;
  function e2(e, t) {
    if (e = e.containerInfo, jc = qo, e = e0(e), rs(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var s = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break e;
            }
            var m = 0, v = -1, S = -1, j = 0, I = 0, F = e, D = null;
            t: for (; ; ) {
              for (var U; F !== i || s !== 0 && F.nodeType !== 3 || (v = m + s), F !== d || o !== 0 && F.nodeType !== 3 || (S = m + o), F.nodeType === 3 && (m += F.nodeValue.length), (U = F.firstChild) !== null; )
                D = F, F = U;
              for (; ; ) {
                if (F === e) break t;
                if (D === i && ++j === s && (v = m), D === d && ++I === o && (S = m), (U = F.nextSibling) !== null) break;
                F = D, D = F.parentNode;
              }
              F = U;
            }
            i = v === -1 || S === -1 ? null : { start: v, end: S };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Dc = { focusedElem: e, selectionRange: i }, qo = !1, ht = t; ht !== null; )
      if (t = ht, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ht = e;
      else
        for (; ht !== null; ) {
          switch (t = ht, d = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (i = 0; i < e.length; i++)
                  s = e[i], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                e = void 0, i = t, s = d.memoizedProps, d = d.memoizedState, o = i.stateNode;
                try {
                  var J = tr(
                    i.type,
                    s
                  );
                  e = o.getSnapshotBeforeUpdate(
                    J,
                    d
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  He(
                    i,
                    i.return,
                    le
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Uc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uc(e);
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
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ht = e;
            break;
          }
          ht = t.return;
        }
  }
  function F1(e, t, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Zn(e, i), o & 4 && qi(5, i);
        break;
      case 1:
        if (Zn(e, i), o & 4)
          if (e = i.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (m) {
              He(i, i.return, m);
            }
          else {
            var s = tr(
              i.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              He(
                i,
                i.return,
                m
              );
            }
          }
        o & 64 && P1(i), o & 512 && Ki(i, i.return);
        break;
      case 3:
        if (Zn(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
          if (t = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            T0(e, t);
          } catch (m) {
            He(i, i.return, m);
          }
        }
        break;
      case 27:
        t === null && o & 4 && H1(i);
      case 26:
      case 5:
        Zn(e, i), t === null && o & 4 && I1(i), o & 512 && Ki(i, i.return);
        break;
      case 12:
        Zn(e, i);
        break;
      case 31:
        Zn(e, i), o & 4 && K1(e, i);
        break;
      case 13:
        Zn(e, i), o & 4 && V1(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = s2.bind(
          null,
          i
        ), A2(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || Yn, !o) {
          t = t !== null && t.memoizedState !== null || st, s = Yn;
          var d = st;
          Yn = o, (st = t) && !d ? Qn(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Zn(e, i), Yn = s, st = d;
        }
        break;
      case 30:
        break;
      default:
        Zn(e, i);
    }
  }
  function G1(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, G1(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Hu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Qe = null, Lt = !1;
  function Xn(e, t, i) {
    for (i = i.child; i !== null; )
      q1(e, t, i), i = i.sibling;
  }
  function q1(e, t, i) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(On, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        st || jn(i, t), Xn(
          e,
          t,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        st || jn(i, t);
        var o = Qe, s = Lt;
        Ra(i.type) && (Qe = i.stateNode, Lt = !1), Xn(
          e,
          t,
          i
        ), tl(i.stateNode), Qe = o, Lt = s;
        break;
      case 5:
        st || jn(i, t);
      case 6:
        if (o = Qe, s = Lt, Qe = null, Xn(
          e,
          t,
          i
        ), Qe = o, Lt = s, Qe !== null)
          if (Lt)
            try {
              (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === "HTML" ? Qe.ownerDocument.body : Qe).removeChild(i.stateNode);
            } catch (d) {
              He(
                i,
                t,
                d
              );
            }
          else
            try {
              Qe.removeChild(i.stateNode);
            } catch (d) {
              He(
                i,
                t,
                d
              );
            }
        break;
      case 18:
        Qe !== null && (Lt ? (e = Qe, Pm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Jr(e)) : Pm(Qe, i.stateNode));
        break;
      case 4:
        o = Qe, s = Lt, Qe = i.stateNode.containerInfo, Lt = !0, Xn(
          e,
          t,
          i
        ), Qe = o, Lt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sa(2, i, t), st || Sa(4, i, t), Xn(
          e,
          t,
          i
        );
        break;
      case 1:
        st || (jn(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function" && k1(
          i,
          t,
          o
        )), Xn(
          e,
          t,
          i
        );
        break;
      case 21:
        Xn(
          e,
          t,
          i
        );
        break;
      case 22:
        st = (o = st) || i.memoizedState !== null, Xn(
          e,
          t,
          i
        ), st = o;
        break;
      default:
        Xn(
          e,
          t,
          i
        );
    }
  }
  function K1(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Jr(e);
      } catch (i) {
        He(t, t.return, i);
      }
    }
  }
  function V1(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Jr(e);
      } catch (i) {
        He(t, t.return, i);
      }
  }
  function t2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new z1()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new z1()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function No(e, t) {
    var i = t2(e);
    t.forEach(function(o) {
      if (!i.has(o)) {
        i.add(o);
        var s = c2.bind(null, e, o);
        o.then(s, s);
      }
    });
  }
  function Ut(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var s = i[o], d = e, m = t, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Ra(v.type)) {
                Qe = v.stateNode, Lt = !1;
                break e;
              }
              break;
            case 5:
              Qe = v.stateNode, Lt = !1;
              break e;
            case 3:
            case 4:
              Qe = v.stateNode.containerInfo, Lt = !0;
              break e;
          }
          v = v.return;
        }
        if (Qe === null) throw Error(u(160));
        q1(d, m, s), Qe = null, Lt = !1, d = s.alternate, d !== null && (d.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Y1(t, e), t = t.sibling;
  }
  var bn = null;
  function Y1(e, t) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ut(t, e), Pt(e), o & 4 && (Sa(3, e, e.return), qi(3, e), Sa(5, e, e.return));
        break;
      case 1:
        Ut(t, e), Pt(e), o & 512 && (st || i === null || jn(i, i.return)), o & 64 && Yn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var s = bn;
        if (Ut(t, e), Pt(e), o & 512 && (st || i === null || jn(i, i.return)), o & 4) {
          var d = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (o) {
                    case "title":
                      d = s.getElementsByTagName("title")[0], (!d || d[bi] || d[gt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = s.createElement(o), s.head.insertBefore(
                        d,
                        s.querySelector("head > title")
                      )), bt(d, o, i), d[gt] = e, mt(d), o = d;
                      break e;
                    case "link":
                      var m = Ym(
                        "link",
                        "href",
                        s
                      ).get(o + (i.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (d = m[v], d.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && d.getAttribute("rel") === (i.rel == null ? null : i.rel) && d.getAttribute("title") === (i.title == null ? null : i.title) && d.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      d = s.createElement(o), bt(d, o, i), s.head.appendChild(d);
                      break;
                    case "meta":
                      if (m = Ym(
                        "meta",
                        "content",
                        s
                      ).get(o + (i.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (d = m[v], d.getAttribute("content") === (i.content == null ? null : "" + i.content) && d.getAttribute("name") === (i.name == null ? null : i.name) && d.getAttribute("property") === (i.property == null ? null : i.property) && d.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && d.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      d = s.createElement(o), bt(d, o, i), s.head.appendChild(d);
                      break;
                    default:
                      throw Error(u(468, o));
                  }
                  d[gt] = e, mt(d), o = d;
                }
                e.stateNode = o;
              } else
                Xm(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Vm(
                s,
                o,
                e.memoizedProps
              );
          else
            d !== o ? (d === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : d.count--, o === null ? Xm(
              s,
              e.type,
              e.stateNode
            ) : Vm(
              s,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && uc(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        Ut(t, e), Pt(e), o & 512 && (st || i === null || jn(i, i.return)), i !== null && o & 4 && uc(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (Ut(t, e), Pt(e), o & 512 && (st || i === null || jn(i, i.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            Er(s, "");
          } catch (J) {
            He(e, e.return, J);
          }
        }
        o & 4 && e.stateNode != null && (s = e.memoizedProps, uc(
          e,
          s,
          i !== null ? i.memoizedProps : s
        )), o & 1024 && (dc = !0);
        break;
      case 6:
        if (Ut(t, e), Pt(e), o & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (J) {
            He(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Ho = null, s = bn, bn = Io(t.containerInfo), Ut(t, e), bn = s, Pt(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Jr(t.containerInfo);
          } catch (J) {
            He(e, e.return, J);
          }
        dc && (dc = !1, X1(e));
        break;
      case 4:
        o = bn, bn = Io(
          e.stateNode.containerInfo
        ), Ut(t, e), Pt(e), bn = o;
        break;
      case 12:
        Ut(t, e), Pt(e);
        break;
      case 31:
        Ut(t, e), Pt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, No(e, o)));
        break;
      case 13:
        Ut(t, e), Pt(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (To = nt()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, No(e, o)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var S = i !== null && i.memoizedState !== null, j = Yn, I = st;
        if (Yn = j || s, st = I || S, Ut(t, e), st = I, Yn = j, Pt(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (i === null || S || Yn || st || nr(e)), i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                S = i = t;
                try {
                  if (d = S.stateNode, s)
                    m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = S.stateNode;
                    var F = S.memoizedProps.style, D = F != null && F.hasOwnProperty("display") ? F.display : null;
                    v.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (J) {
                  He(S, S.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (J) {
                  He(S, S.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (i === null) {
                S = t;
                try {
                  var U = S.stateNode;
                  s ? km(U, !0) : km(S.stateNode, !1);
                } catch (J) {
                  He(S, S.return, J);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), t = t.return;
            }
            i === t && (i = null), t.sibling.return = t.return, t = t.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, No(e, i))));
        break;
      case 19:
        Ut(t, e), Pt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, No(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ut(t, e), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (B1(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(u(160));
        switch (i.tag) {
          case 27:
            var s = i.stateNode, d = sc(e);
            Co(e, d, s);
            break;
          case 5:
            var m = i.stateNode;
            i.flags & 32 && (Er(m, ""), i.flags &= -33);
            var v = sc(e);
            Co(e, v, m);
            break;
          case 3:
          case 4:
            var S = i.stateNode.containerInfo, j = sc(e);
            cc(
              e,
              j,
              S
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (I) {
        He(e, e.return, I);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function X1(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        X1(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Zn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        F1(e, t.alternate, t), t = t.sibling;
  }
  function nr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sa(4, t, t.return), nr(t);
          break;
        case 1:
          jn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && k1(
            t,
            t.return,
            i
          ), nr(t);
          break;
        case 27:
          tl(t.stateNode);
        case 26:
        case 5:
          jn(t, t.return), nr(t);
          break;
        case 22:
          t.memoizedState === null && nr(t);
          break;
        case 30:
          nr(t);
          break;
        default:
          nr(t);
      }
      e = e.sibling;
    }
  }
  function Qn(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, s = e, d = t, m = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Qn(
            s,
            d,
            i
          ), qi(4, d);
          break;
        case 1:
          if (Qn(
            s,
            d,
            i
          ), o = d, s = o.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (j) {
              He(o, o.return, j);
            }
          if (o = d, s = o.updateQueue, s !== null) {
            var v = o.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  x0(S[s], v);
            } catch (j) {
              He(o, o.return, j);
            }
          }
          i && m & 64 && P1(d), Ki(d, d.return);
          break;
        case 27:
          H1(d);
        case 26:
        case 5:
          Qn(
            s,
            d,
            i
          ), i && o === null && m & 4 && I1(d), Ki(d, d.return);
          break;
        case 12:
          Qn(
            s,
            d,
            i
          );
          break;
        case 31:
          Qn(
            s,
            d,
            i
          ), i && m & 4 && K1(s, d);
          break;
        case 13:
          Qn(
            s,
            d,
            i
          ), i && m & 4 && V1(s, d);
          break;
        case 22:
          d.memoizedState === null && Qn(
            s,
            d,
            i
          ), Ki(d, d.return);
          break;
        case 30:
          break;
        default:
          Qn(
            s,
            d,
            i
          );
      }
      t = t.sibling;
    }
  }
  function fc(e, t) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && ji(i));
  }
  function mc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ji(e));
  }
  function $n(e, t, i, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Z1(
          e,
          t,
          i,
          o
        ), t = t.sibling;
  }
  function Z1(e, t, i, o) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          e,
          t,
          i,
          o
        ), s & 2048 && qi(9, t);
        break;
      case 1:
        $n(
          e,
          t,
          i,
          o
        );
        break;
      case 3:
        $n(
          e,
          t,
          i,
          o
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ji(e)));
        break;
      case 12:
        if (s & 2048) {
          $n(
            e,
            t,
            i,
            o
          ), e = t.stateNode;
          try {
            var d = t.memoizedProps, m = d.id, v = d.onPostCommit;
            typeof v == "function" && v(
              m,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            He(t, t.return, S);
          }
        } else
          $n(
            e,
            t,
            i,
            o
          );
        break;
      case 31:
        $n(
          e,
          t,
          i,
          o
        );
        break;
      case 13:
        $n(
          e,
          t,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        d = t.stateNode, m = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? $n(
          e,
          t,
          i,
          o
        ) : Vi(e, t) : d._visibility & 2 ? $n(
          e,
          t,
          i,
          o
        ) : (d._visibility |= 2, zr(
          e,
          t,
          i,
          o,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && fc(m, t);
        break;
      case 24:
        $n(
          e,
          t,
          i,
          o
        ), s & 2048 && mc(t.alternate, t);
        break;
      default:
        $n(
          e,
          t,
          i,
          o
        );
    }
  }
  function zr(e, t, i, o, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var d = e, m = t, v = i, S = o, j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          zr(
            d,
            m,
            v,
            S,
            s
          ), qi(8, m);
          break;
        case 23:
          break;
        case 22:
          var I = m.stateNode;
          m.memoizedState !== null ? I._visibility & 2 ? zr(
            d,
            m,
            v,
            S,
            s
          ) : Vi(
            d,
            m
          ) : (I._visibility |= 2, zr(
            d,
            m,
            v,
            S,
            s
          )), s && j & 2048 && fc(
            m.alternate,
            m
          );
          break;
        case 24:
          zr(
            d,
            m,
            v,
            S,
            s
          ), s && j & 2048 && mc(m.alternate, m);
          break;
        default:
          zr(
            d,
            m,
            v,
            S,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Vi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e, o = t, s = o.flags;
        switch (o.tag) {
          case 22:
            Vi(i, o), s & 2048 && fc(
              o.alternate,
              o
            );
            break;
          case 24:
            Vi(i, o), s & 2048 && mc(o.alternate, o);
            break;
          default:
            Vi(i, o);
        }
        t = t.sibling;
      }
  }
  var Yi = 8192;
  function Fr(e, t, i) {
    if (e.subtreeFlags & Yi)
      for (e = e.child; e !== null; )
        Q1(
          e,
          t,
          i
        ), e = e.sibling;
  }
  function Q1(e, t, i) {
    switch (e.tag) {
      case 26:
        Fr(
          e,
          t,
          i
        ), e.flags & Yi && e.memoizedState !== null && H2(
          i,
          bn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Fr(
          e,
          t,
          i
        );
        break;
      case 3:
      case 4:
        var o = bn;
        bn = Io(e.stateNode.containerInfo), Fr(
          e,
          t,
          i
        ), bn = o;
        break;
      case 22:
        e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = Yi, Yi = 16777216, Fr(
          e,
          t,
          i
        ), Yi = o) : Fr(
          e,
          t,
          i
        ));
        break;
      default:
        Fr(
          e,
          t,
          i
        );
    }
  }
  function W1(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Xi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          ht = o, em(
            o,
            e
          );
        }
      W1(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        J1(e), e = e.sibling;
  }
  function J1(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xi(e), e.flags & 2048 && Sa(9, e, e.return);
        break;
      case 3:
        Xi(e);
        break;
      case 12:
        Xi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, xo(e)) : Xi(e);
        break;
      default:
        Xi(e);
    }
  }
  function xo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          ht = o, em(
            o,
            e
          );
        }
      W1(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Sa(8, t, t.return), xo(t);
          break;
        case 22:
          i = t.stateNode, i._visibility & 2 && (i._visibility &= -3, xo(t));
          break;
        default:
          xo(t);
      }
      e = e.sibling;
    }
  }
  function em(e, t) {
    for (; ht !== null; ) {
      var i = ht;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Sa(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ji(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, ht = o;
      else
        e: for (i = e; ht !== null; ) {
          o = ht;
          var s = o.sibling, d = o.return;
          if (G1(o), o === i) {
            ht = null;
            break e;
          }
          if (s !== null) {
            s.return = d, ht = s;
            break e;
          }
          ht = d;
        }
    }
  }
  var n2 = {
    getCacheForType: function(e) {
      var t = pt(lt), i = t.data.get(e);
      return i === void 0 && (i = e(), t.data.set(e, i)), i;
    },
    cacheSignal: function() {
      return pt(lt).controller.signal;
    }
  }, a2 = typeof WeakMap == "function" ? WeakMap : Map, Ue = 0, Ke = null, be = null, Ce = 0, Be = 0, Zt = null, Ca = !1, Gr = !1, hc = !1, Wn = 0, tt = 0, Na = 0, ar = 0, gc = 0, Qt = 0, qr = 0, Zi = null, kt = null, yc = !1, To = 0, tm = 0, Oo = 1 / 0, Ao = null, xa = null, dt = 0, Ta = null, Kr = null, Jn = 0, pc = 0, vc = null, nm = null, Qi = 0, bc = null;
  function Wt() {
    return (Ue & 2) !== 0 && Ce !== 0 ? Ce & -Ce : k.T !== null ? Nc() : vf();
  }
  function am() {
    if (Qt === 0)
      if ((Ce & 536870912) === 0 || Te) {
        var e = An;
        An <<= 1, (An & 3932160) === 0 && (An = 262144), Qt = e;
      } else Qt = 536870912;
    return e = Yt.current, e !== null && (e.flags |= 32), Qt;
  }
  function It(e, t, i) {
    (e === Ke && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (Vr(e, 0), Oa(
      e,
      Ce,
      Qt,
      !1
    )), vi(e, i), ((Ue & 2) === 0 || e !== Ke) && (e === Ke && ((Ue & 2) === 0 && (ar |= i), tt === 4 && Oa(
      e,
      Ce,
      Qt,
      !1
    )), Dn(e));
  }
  function rm(e, t, i) {
    if ((Ue & 6) !== 0) throw Error(u(327));
    var o = !i && (t & 127) === 0 && (t & e.expiredLanes) === 0 || pi(e, t), s = o ? l2(e, t) : wc(e, t, !0), d = o;
    do {
      if (s === 0) {
        Gr && !o && Oa(e, t, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, d && !r2(i)) {
          s = wc(e, t, !1), d = !1;
          continue;
        }
        if (s === 2) {
          if (d = t, e.errorRecoveryDisabledLanes & d)
            var m = 0;
          else
            m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var v = e;
              s = Zi;
              var S = v.current.memoizedState.isDehydrated;
              if (S && (Vr(v, m).flags |= 256), m = wc(
                v,
                m,
                !1
              ), m !== 2) {
                if (hc && !S) {
                  v.errorRecoveryDisabledLanes |= d, ar |= d, s = 4;
                  break e;
                }
                d = kt, kt = s, d !== null && (kt === null ? kt = d : kt.push.apply(
                  kt,
                  d
                ));
              }
              s = m;
            }
            if (d = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Vr(e, 0), Oa(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, d = s, d) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Oa(
                o,
                t,
                Qt,
                !Ca
              );
              break e;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (s = To + 300 - nt(), 10 < s)) {
            if (Oa(
              o,
              t,
              Qt,
              !Ca
            ), kl(o, 0, !0) !== 0) break e;
            Jn = t, o.timeoutHandle = Lm(
              im.bind(
                null,
                o,
                i,
                kt,
                Ao,
                yc,
                t,
                Qt,
                ar,
                qr,
                Ca,
                d,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          im(
            o,
            i,
            kt,
            Ao,
            yc,
            t,
            Qt,
            ar,
            qr,
            Ca,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dn(e);
  }
  function im(e, t, i, o, s, d, m, v, S, j, I, F, D, U) {
    if (e.timeoutHandle = -1, F = t.subtreeFlags, F & 8192 || (F & 16785408) === 16785408) {
      F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: kn
      }, Q1(
        t,
        d,
        F
      );
      var J = (d & 62914560) === d ? To - nt() : (d & 4194048) === d ? tm - nt() : 0;
      if (J = z2(
        F,
        J
      ), J !== null) {
        Jn = d, e.cancelPendingCommit = J(
          mm.bind(
            null,
            e,
            t,
            d,
            i,
            o,
            s,
            m,
            v,
            S,
            I,
            F,
            null,
            D,
            U
          )
        ), Oa(e, d, m, !j);
        return;
      }
    }
    mm(
      e,
      t,
      d,
      i,
      o,
      s,
      m,
      v,
      S
    );
  }
  function r2(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var s = i[o], d = s.getSnapshot;
          s = s.value;
          try {
            if (!Kt(d(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null)
        i.return = t, t = i;
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
  function Oa(e, t, i, o) {
    t &= ~gc, t &= ~ar, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var d = 31 - Re(s), m = 1 << d;
      o[d] = -1, s &= ~m;
    }
    i !== 0 && gf(e, i, t);
  }
  function Ro() {
    return (Ue & 6) === 0 ? (Wi(0), !1) : !0;
  }
  function $c() {
    if (be !== null) {
      if (Be === 0)
        var e = be.return;
      else
        e = be, zn = Ya = null, Us(e), Pr = null, Mi = 0, e = be;
      for (; e !== null; )
        U1(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function Vr(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, C2(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), Jn = 0, $c(), Ke = e, be = i = Bn(e.current, null), Ce = t, Be = 0, Zt = null, Ca = !1, Gr = pi(e, t), hc = !1, qr = Qt = gc = ar = Na = tt = 0, kt = Zi = null, yc = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var s = 31 - Re(o), d = 1 << s;
        t |= e[s], o &= ~d;
      }
    return Wn = t, Zl(), i;
  }
  function lm(e, t) {
    he = null, k.H = zi, t === Ur || t === ro ? (t = E0(), Be = 3) : t === Cs ? (t = E0(), Be = 4) : Be = t === Ws ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Zt = t, be === null && (tt = 1, bo(
      e,
      ln(t, e.current)
    ));
  }
  function om() {
    var e = Yt.current;
    return e === null ? !0 : (Ce & 4194048) === Ce ? cn === null : (Ce & 62914560) === Ce || (Ce & 536870912) !== 0 ? e === cn : !1;
  }
  function um() {
    var e = k.H;
    return k.H = zi, e === null ? zi : e;
  }
  function sm() {
    var e = k.A;
    return k.A = n2, e;
  }
  function _o() {
    tt = 4, Ca || (Ce & 4194048) !== Ce && Yt.current !== null || (Gr = !0), (Na & 134217727) === 0 && (ar & 134217727) === 0 || Ke === null || Oa(
      Ke,
      Ce,
      Qt,
      !1
    );
  }
  function wc(e, t, i) {
    var o = Ue;
    Ue |= 2;
    var s = um(), d = sm();
    (Ke !== e || Ce !== t) && (Ao = null, Vr(e, t)), t = !1;
    var m = tt;
    e: do
      try {
        if (Be !== 0 && be !== null) {
          var v = be, S = Zt;
          switch (Be) {
            case 8:
              $c(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Yt.current === null && (t = !0);
              var j = Be;
              if (Be = 0, Zt = null, Yr(e, v, S, j), i && Gr) {
                m = 0;
                break e;
              }
              break;
            default:
              j = Be, Be = 0, Zt = null, Yr(e, v, S, j);
          }
        }
        i2(), m = tt;
        break;
      } catch (I) {
        lm(e, I);
      }
    while (!0);
    return t && e.shellSuspendCounter++, zn = Ya = null, Ue = o, k.H = s, k.A = d, be === null && (Ke = null, Ce = 0, Zl()), m;
  }
  function i2() {
    for (; be !== null; ) cm(be);
  }
  function l2(e, t) {
    var i = Ue;
    Ue |= 2;
    var o = um(), s = sm();
    Ke !== e || Ce !== t ? (Ao = null, Oo = nt() + 500, Vr(e, t)) : Gr = pi(
      e,
      t
    );
    e: do
      try {
        if (Be !== 0 && be !== null) {
          t = be;
          var d = Zt;
          t: switch (Be) {
            case 1:
              Be = 0, Zt = null, Yr(e, t, d, 1);
              break;
            case 2:
            case 9:
              if ($0(d)) {
                Be = 0, Zt = null, dm(t);
                break;
              }
              t = function() {
                Be !== 2 && Be !== 9 || Ke !== e || (Be = 7), Dn(e);
              }, d.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              $0(d) ? (Be = 0, Zt = null, dm(t)) : (Be = 0, Zt = null, Yr(e, t, d, 7));
              break;
            case 5:
              var m = null;
              switch (be.tag) {
                case 26:
                  m = be.memoizedState;
                case 5:
                case 27:
                  var v = be;
                  if (m ? Zm(m) : v.stateNode.complete) {
                    Be = 0, Zt = null;
                    var S = v.sibling;
                    if (S !== null) be = S;
                    else {
                      var j = v.return;
                      j !== null ? (be = j, jo(j)) : be = null;
                    }
                    break t;
                  }
              }
              Be = 0, Zt = null, Yr(e, t, d, 5);
              break;
            case 6:
              Be = 0, Zt = null, Yr(e, t, d, 6);
              break;
            case 8:
              $c(), tt = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        o2();
        break;
      } catch (I) {
        lm(e, I);
      }
    while (!0);
    return zn = Ya = null, k.H = o, k.A = s, Ue = i, be !== null ? 0 : (Ke = null, Ce = 0, Zl(), tt);
  }
  function o2() {
    for (; be !== null && !Se(); )
      cm(be);
  }
  function cm(e) {
    var t = M1(e.alternate, e, Wn);
    e.memoizedProps = e.pendingProps, t === null ? jo(e) : be = t;
  }
  function dm(e) {
    var t = e, i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = O1(
          i,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ce
        );
        break;
      case 11:
        t = O1(
          i,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ce
        );
        break;
      case 5:
        Us(t);
      default:
        U1(i, t), t = be = s0(t, Wn), t = M1(i, t, Wn);
    }
    e.memoizedProps = e.pendingProps, t === null ? jo(e) : be = t;
  }
  function Yr(e, t, i, o) {
    zn = Ya = null, Us(t), Pr = null, Mi = 0;
    var s = t.return;
    try {
      if (X3(
        e,
        s,
        t,
        i,
        Ce
      )) {
        tt = 1, bo(
          e,
          ln(i, e.current)
        ), be = null;
        return;
      }
    } catch (d) {
      if (s !== null) throw be = s, d;
      tt = 1, bo(
        e,
        ln(i, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Te || o === 1 ? e = !0 : Gr || (Ce & 536870912) !== 0 ? e = !1 : (Ca = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Yt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), fm(t, e)) : jo(t);
  }
  function jo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fm(
          t,
          Ca
        );
        return;
      }
      e = t.return;
      var i = W3(
        t.alternate,
        t,
        Wn
      );
      if (i !== null) {
        be = i;
        return;
      }
      if (t = t.sibling, t !== null) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function fm(e, t) {
    do {
      var i = J3(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, be = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !t && (e = e.sibling, e !== null)) {
        be = e;
        return;
      }
      be = e = i;
    } while (e !== null);
    tt = 6, be = null;
  }
  function mm(e, t, i, o, s, d, m, v, S) {
    e.cancelPendingCommit = null;
    do
      Do();
    while (dt !== 0);
    if ((Ue & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (d = t.lanes | t.childLanes, d |= ss, Bp(
        e,
        i,
        d,
        m,
        v,
        S
      ), e === Ke && (be = Ke = null, Ce = 0), Kr = t, Ta = e, Jn = i, pc = d, vc = s, nm = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, d2(re, function() {
        return vm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = k.T, k.T = null, s = G.p, G.p = 2, m = Ue, Ue |= 4;
        try {
          e2(e, t, i);
        } finally {
          Ue = m, G.p = s, k.T = o;
        }
      }
      dt = 1, hm(), gm(), ym();
    }
  }
  function hm() {
    if (dt === 1) {
      dt = 0;
      var e = Ta, t = Kr, i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        i = k.T, k.T = null;
        var o = G.p;
        G.p = 2;
        var s = Ue;
        Ue |= 4;
        try {
          Y1(t, e);
          var d = Dc, m = e0(e.containerInfo), v = d.focusedElem, S = d.selectionRange;
          if (m !== v && v && v.ownerDocument && Jf(
            v.ownerDocument.documentElement,
            v
          )) {
            if (S !== null && rs(v)) {
              var j = S.start, I = S.end;
              if (I === void 0 && (I = j), "selectionStart" in v)
                v.selectionStart = j, v.selectionEnd = Math.min(
                  I,
                  v.value.length
                );
              else {
                var F = v.ownerDocument || document, D = F && F.defaultView || window;
                if (D.getSelection) {
                  var U = D.getSelection(), J = v.textContent.length, le = Math.min(S.start, J), Ge = S.end === void 0 ? le : Math.min(S.end, J);
                  !U.extend && le > Ge && (m = Ge, Ge = le, le = m);
                  var O = Wf(
                    v,
                    le
                  ), T = Wf(
                    v,
                    Ge
                  );
                  if (O && T && (U.rangeCount !== 1 || U.anchorNode !== O.node || U.anchorOffset !== O.offset || U.focusNode !== T.node || U.focusOffset !== T.offset)) {
                    var R = F.createRange();
                    R.setStart(O.node, O.offset), U.removeAllRanges(), le > Ge ? (U.addRange(R), U.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), U.addRange(R));
                  }
                }
              }
            }
            for (F = [], U = v; U = U.parentNode; )
              U.nodeType === 1 && F.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < F.length; v++) {
              var z = F[v];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qo = !!jc, Dc = jc = null;
        } finally {
          Ue = s, G.p = o, k.T = i;
        }
      }
      e.current = t, dt = 2;
    }
  }
  function gm() {
    if (dt === 2) {
      dt = 0;
      var e = Ta, t = Kr, i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        i = k.T, k.T = null;
        var o = G.p;
        G.p = 2;
        var s = Ue;
        Ue |= 4;
        try {
          F1(e, t.alternate, t);
        } finally {
          Ue = s, G.p = o, k.T = i;
        }
      }
      dt = 3;
    }
  }
  function ym() {
    if (dt === 4 || dt === 3) {
      dt = 0, Uu();
      var e = Ta, t = Kr, i = Jn, o = nm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? dt = 5 : (dt = 0, Kr = Ta = null, pm(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (xa = null), Iu(i), t = t.stateNode, At && typeof At.onCommitFiberRoot == "function")
        try {
          At.onCommitFiberRoot(
            On,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = k.T, s = G.p, G.p = 2, k.T = null;
        try {
          for (var d = e.onRecoverableError, m = 0; m < o.length; m++) {
            var v = o[m];
            d(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          k.T = t, G.p = s;
        }
      }
      (Jn & 3) !== 0 && Do(), Dn(e), s = e.pendingLanes, (i & 261930) !== 0 && (s & 42) !== 0 ? e === bc ? Qi++ : (Qi = 0, bc = e) : Qi = 0, Wi(0);
    }
  }
  function pm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ji(t)));
  }
  function Do() {
    return hm(), gm(), ym(), vm();
  }
  function vm() {
    if (dt !== 5) return !1;
    var e = Ta, t = pc;
    pc = 0;
    var i = Iu(Jn), o = k.T, s = G.p;
    try {
      G.p = 32 > i ? 32 : i, k.T = null, i = vc, vc = null;
      var d = Ta, m = Jn;
      if (dt = 0, Kr = Ta = null, Jn = 0, (Ue & 6) !== 0) throw Error(u(331));
      var v = Ue;
      if (Ue |= 4, J1(d.current), Z1(
        d,
        d.current,
        m,
        i
      ), Ue = v, Wi(0, !1), At && typeof At.onPostCommitFiberRoot == "function")
        try {
          At.onPostCommitFiberRoot(On, d);
        } catch {
        }
      return !0;
    } finally {
      G.p = s, k.T = o, pm(e, t);
    }
  }
  function bm(e, t, i) {
    t = ln(i, t), t = Qs(e.stateNode, t, 2), e = $a(e, t, 2), e !== null && (vi(e, 2), Dn(e));
  }
  function He(e, t, i) {
    if (e.tag === 3)
      bm(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          bm(
            t,
            e,
            i
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (xa === null || !xa.has(o))) {
            e = ln(i, e), i = $1(2), o = $a(t, i, 2), o !== null && (w1(
              i,
              o,
              t,
              e
            ), vi(o, 2), Dn(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ec(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new a2();
      var s = /* @__PURE__ */ new Set();
      o.set(t, s);
    } else
      s = o.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), o.set(t, s));
    s.has(i) || (hc = !0, s.add(i), e = u2.bind(null, e, t, i), t.then(e, e));
  }
  function u2(e, t, i) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, Ke === e && (Ce & i) === i && (tt === 4 || tt === 3 && (Ce & 62914560) === Ce && 300 > nt() - To ? (Ue & 2) === 0 && Vr(e, 0) : gc |= i, qr === Ce && (qr = 0)), Dn(e);
  }
  function $m(e, t) {
    t === 0 && (t = hf()), e = qa(e, t), e !== null && (vi(e, t), Dn(e));
  }
  function s2(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), $m(e, i);
  }
  function c2(e, t) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode, s = e.memoizedState;
        s !== null && (i = s.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    o !== null && o.delete(t), $m(e, i);
  }
  function d2(e, t) {
    return qt(e, t);
  }
  var Mo = null, Xr = null, Sc = !1, Lo = !1, Cc = !1, Aa = 0;
  function Dn(e) {
    e !== Xr && e.next === null && (Xr === null ? Mo = Xr = e : Xr = Xr.next = e), Lo = !0, Sc || (Sc = !0, m2());
  }
  function Wi(e, t) {
    if (!Cc && Lo) {
      Cc = !0;
      do
        for (var i = !1, o = Mo; o !== null; ) {
          if (e !== 0) {
            var s = o.pendingLanes;
            if (s === 0) var d = 0;
            else {
              var m = o.suspendedLanes, v = o.pingedLanes;
              d = (1 << 31 - Re(42 | e) + 1) - 1, d &= s & ~(m & ~v), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (i = !0, Cm(o, d));
          } else
            d = Ce, d = kl(
              o,
              o === Ke ? d : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (d & 3) === 0 || pi(o, d) || (i = !0, Cm(o, d));
          o = o.next;
        }
      while (i);
      Cc = !1;
    }
  }
  function f2() {
    wm();
  }
  function wm() {
    Lo = Sc = !1;
    var e = 0;
    Aa !== 0 && S2() && (e = Aa);
    for (var t = nt(), i = null, o = Mo; o !== null; ) {
      var s = o.next, d = Em(o, t);
      d === 0 ? (o.next = null, i === null ? Mo = s : i.next = s, s === null && (Xr = i)) : (i = o, (e !== 0 || (d & 3) !== 0) && (Lo = !0)), o = s;
    }
    dt !== 0 && dt !== 5 || Wi(e), Aa !== 0 && (Aa = 0);
  }
  function Em(e, t) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var m = 31 - Re(d), v = 1 << m, S = s[m];
      S === -1 ? ((v & i) === 0 || (v & o) !== 0) && (s[m] = Ip(v, t)) : S <= t && (e.expiredLanes |= v), d &= ~v;
    }
    if (t = Ke, i = Ce, i = kl(
      e,
      e === t ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && Ot(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || pi(e, i)) {
      if (t = i & -i, t === e.callbackPriority) return t;
      switch (o !== null && Ot(o), Iu(i)) {
        case 2:
        case 8:
          i = Ia;
          break;
        case 32:
          i = re;
          break;
        case 268435456:
          i = $t;
          break;
        default:
          i = re;
      }
      return o = Sm.bind(null, e), i = qt(i, o), e.callbackPriority = t, e.callbackNode = i, t;
    }
    return o !== null && o !== null && Ot(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Sm(e, t) {
    if (dt !== 0 && dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (Do() && e.callbackNode !== i)
      return null;
    var o = Ce;
    return o = kl(
      e,
      e === Ke ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (rm(e, o, t), Em(e, nt()), e.callbackNode != null && e.callbackNode === i ? Sm.bind(null, e) : null);
  }
  function Cm(e, t) {
    if (Do()) return null;
    rm(e, t, !0);
  }
  function m2() {
    N2(function() {
      (Ue & 6) !== 0 ? qt(
        da,
        f2
      ) : wm();
    });
  }
  function Nc() {
    if (Aa === 0) {
      var e = Mr;
      e === 0 && (e = hr, hr <<= 1, (hr & 261888) === 0 && (hr = 256)), Aa = e;
    }
    return Aa;
  }
  function Nm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zl("" + e);
  }
  function xm(e, t) {
    var i = t.ownerDocument.createElement("input");
    return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function h2(e, t, i, o, s) {
    if (t === "submit" && i && i.stateNode === s) {
      var d = Nm(
        (s[Dt] || null).action
      ), m = o.submitter;
      m && (t = (t = m[Dt] || null) ? Nm(t.formAction) : m.getAttribute("formAction"), t !== null && (d = t, m = null));
      var v = new Kl(
        "action",
        "action",
        null,
        o,
        s
      );
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Aa !== 0) {
                  var S = m ? xm(s, m) : new FormData(s);
                  qs(
                    i,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: d
                    },
                    null,
                    S
                  );
                }
              } else
                typeof d == "function" && (v.preventDefault(), S = m ? xm(s, m) : new FormData(s), qs(
                  i,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: d
                  },
                  d,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var xc = 0; xc < us.length; xc++) {
    var Tc = us[xc], g2 = Tc.toLowerCase(), y2 = Tc[0].toUpperCase() + Tc.slice(1);
    vn(
      g2,
      "on" + y2
    );
  }
  vn(a0, "onAnimationEnd"), vn(r0, "onAnimationIteration"), vn(i0, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(j3, "onTransitionRun"), vn(D3, "onTransitionStart"), vn(M3, "onTransitionCancel"), vn(l0, "onTransitionEnd"), $r("onMouseEnter", ["mouseout", "mouseover"]), $r("onMouseLeave", ["mouseout", "mouseover"]), $r("onPointerEnter", ["pointerout", "pointerover"]), $r("onPointerLeave", ["pointerout", "pointerover"]), Ha(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ha(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ha("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ha(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ha(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ha(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), p2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ji)
  );
  function Tm(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], s = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var m = o.length - 1; 0 <= m; m--) {
            var v = o[m], S = v.instance, j = v.currentTarget;
            if (v = v.listener, S !== d && s.isPropagationStopped())
              break e;
            d = v, s.currentTarget = j;
            try {
              d(s);
            } catch (I) {
              Xl(I);
            }
            s.currentTarget = null, d = S;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (v = o[m], S = v.instance, j = v.currentTarget, v = v.listener, S !== d && s.isPropagationStopped())
              break e;
            d = v, s.currentTarget = j;
            try {
              d(s);
            } catch (I) {
              Xl(I);
            }
            s.currentTarget = null, d = S;
          }
      }
    }
  }
  function $e(e, t) {
    var i = t[Bu];
    i === void 0 && (i = t[Bu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Om(t, e, 2, !1), i.add(o));
  }
  function Oc(e, t, i) {
    var o = 0;
    t && (o |= 4), Om(
      i,
      e,
      o,
      t
    );
  }
  var Uo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ac(e) {
    if (!e[Uo]) {
      e[Uo] = !0, wf.forEach(function(i) {
        i !== "selectionchange" && (p2.has(i) || Oc(i, !1, e), Oc(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Uo] || (t[Uo] = !0, Oc("selectionchange", !1, t));
    }
  }
  function Om(e, t, i, o) {
    switch (ah(t)) {
      case 2:
        var s = q2;
        break;
      case 8:
        s = K2;
        break;
      default:
        s = Gc;
    }
    i = s.bind(
      null,
      t,
      i,
      e
    ), s = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), o ? s !== void 0 ? e.addEventListener(t, i, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, i, !0) : s !== void 0 ? e.addEventListener(t, i, {
      passive: s
    }) : e.addEventListener(t, i, !1);
  }
  function Rc(e, t, i, o, s) {
    var d = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var m = o.tag;
        if (m === 3 || m === 4) {
          var v = o.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = o.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = pr(v), m === null) return;
            if (S = m.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              o = d = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Df(function() {
      var j = d, I = Vu(i), F = [];
      e: {
        var D = o0.get(e);
        if (D !== void 0) {
          var U = Kl, J = e;
          switch (e) {
            case "keypress":
              if (Gl(i) === 0) break e;
            case "keydown":
            case "keyup":
              U = c3;
              break;
            case "focusin":
              J = "focus", U = Ju;
              break;
            case "focusout":
              J = "blur", U = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              U = Ju;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Uf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = m3;
              break;
            case a0:
            case r0:
            case i0:
              U = t3;
              break;
            case l0:
              U = g3;
              break;
            case "scroll":
            case "scrollend":
              U = Zp;
              break;
            case "wheel":
              U = p3;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = a3;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = kf;
              break;
            case "toggle":
            case "beforetoggle":
              U = b3;
          }
          var le = (t & 4) !== 0, Ge = !le && (e === "scroll" || e === "scrollend"), O = le ? D !== null ? D + "Capture" : null : D;
          le = [];
          for (var T = j, R; T !== null; ) {
            var z = T;
            if (R = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || R === null || O === null || (z = wi(T, O), z != null && le.push(
              el(T, z, R)
            )), Ge) break;
            T = T.return;
          }
          0 < le.length && (D = new U(
            D,
            J,
            null,
            i,
            I
          ), F.push({ event: D, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (D = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", D && i !== Ku && (J = i.relatedTarget || i.fromElement) && (pr(J) || J[yr]))
            break e;
          if ((U || D) && (D = I.window === I ? I : (D = I.ownerDocument) ? D.defaultView || D.parentWindow : window, U ? (J = i.relatedTarget || i.toElement, U = j, J = J ? pr(J) : null, J !== null && (Ge = f(J), le = J.tag, J !== Ge || le !== 5 && le !== 27 && le !== 6) && (J = null)) : (U = null, J = j), U !== J)) {
            if (le = Uf, z = "onMouseLeave", O = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (le = kf, z = "onPointerLeave", O = "onPointerEnter", T = "pointer"), Ge = U == null ? D : $i(U), R = J == null ? D : $i(J), D = new le(
              z,
              T + "leave",
              U,
              i,
              I
            ), D.target = Ge, D.relatedTarget = R, z = null, pr(I) === j && (le = new le(
              O,
              T + "enter",
              J,
              i,
              I
            ), le.target = R, le.relatedTarget = Ge, z = le), Ge = z, U && J)
              t: {
                for (le = v2, O = U, T = J, R = 0, z = O; z; z = le(z))
                  R++;
                z = 0;
                for (var ie = T; ie; ie = le(ie))
                  z++;
                for (; 0 < R - z; )
                  O = le(O), R--;
                for (; 0 < z - R; )
                  T = le(T), z--;
                for (; R--; ) {
                  if (O === T || T !== null && O === T.alternate) {
                    le = O;
                    break t;
                  }
                  O = le(O), T = le(T);
                }
                le = null;
              }
            else le = null;
            U !== null && Am(
              F,
              D,
              U,
              le,
              !1
            ), J !== null && Ge !== null && Am(
              F,
              Ge,
              J,
              le,
              !0
            );
          }
        }
        e: {
          if (D = j ? $i(j) : window, U = D.nodeName && D.nodeName.toLowerCase(), U === "select" || U === "input" && D.type === "file")
            var je = Kf;
          else if (Gf(D))
            if (Vf)
              je = A3;
            else {
              je = T3;
              var te = x3;
            }
          else
            U = D.nodeName, !U || U.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? j && qu(j.elementType) && (je = Kf) : je = O3;
          if (je && (je = je(e, j))) {
            qf(
              F,
              je,
              i,
              I
            );
            break e;
          }
          te && te(e, D, j), e === "focusout" && j && D.type === "number" && j.memoizedProps.value != null && Gu(D, "number", D.value);
        }
        switch (te = j ? $i(j) : window, e) {
          case "focusin":
            (Gf(te) || te.contentEditable === "true") && (xr = te, is = j, Ai = null);
            break;
          case "focusout":
            Ai = is = xr = null;
            break;
          case "mousedown":
            ls = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ls = !1, t0(F, i, I);
            break;
          case "selectionchange":
            if (_3) break;
          case "keydown":
          case "keyup":
            t0(F, i, I);
        }
        var ye;
        if (ts)
          e: {
            switch (e) {
              case "compositionstart":
                var Ne = "onCompositionStart";
                break e;
              case "compositionend":
                Ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ne = "onCompositionUpdate";
                break e;
            }
            Ne = void 0;
          }
        else
          Nr ? zf(e, i) && (Ne = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (If && i.locale !== "ko" && (Nr || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Nr && (ye = Mf()) : (ma = I, Zu = "value" in ma ? ma.value : ma.textContent, Nr = !0)), te = Po(j, Ne), 0 < te.length && (Ne = new Pf(
          Ne,
          e,
          null,
          i,
          I
        ), F.push({ event: Ne, listeners: te }), ye ? Ne.data = ye : (ye = Ff(i), ye !== null && (Ne.data = ye)))), (ye = w3 ? E3(e, i) : S3(e, i)) && (Ne = Po(j, "onBeforeInput"), 0 < Ne.length && (te = new Pf(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          I
        ), F.push({
          event: te,
          listeners: Ne
        }), te.data = ye)), h2(
          F,
          e,
          j,
          i,
          I
        );
      }
      Tm(F, t);
    });
  }
  function el(e, t, i) {
    return {
      instance: e,
      listener: t,
      currentTarget: i
    };
  }
  function Po(e, t) {
    for (var i = t + "Capture", o = []; e !== null; ) {
      var s = e, d = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || d === null || (s = wi(e, i), s != null && o.unshift(
        el(e, s, d)
      ), s = wi(e, t), s != null && o.push(
        el(e, s, d)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function v2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Am(e, t, i, o, s) {
    for (var d = t._reactName, m = []; i !== null && i !== o; ) {
      var v = i, S = v.alternate, j = v.stateNode;
      if (v = v.tag, S !== null && S === o) break;
      v !== 5 && v !== 26 && v !== 27 || j === null || (S = j, s ? (j = wi(i, d), j != null && m.unshift(
        el(i, j, S)
      )) : s || (j = wi(i, d), j != null && m.push(
        el(i, j, S)
      ))), i = i.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var b2 = /\r\n?/g, $2 = /\u0000|\uFFFD/g;
  function Rm(e) {
    return (typeof e == "string" ? e : "" + e).replace(b2, `
`).replace($2, "");
  }
  function _m(e, t) {
    return t = Rm(t), Rm(e) === t;
  }
  function Fe(e, t, i, o, s, d) {
    switch (i) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Er(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Er(e, "" + o);
        break;
      case "className":
        Bl(e, "class", o);
        break;
      case "tabIndex":
        Bl(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bl(e, i, o);
        break;
      case "style":
        _f(e, o, d);
        break;
      case "data":
        if (t !== "object") {
          Bl(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = zl("" + o), e.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (i === "formAction" ? (t !== "input" && Fe(e, t, "name", s.name, s, null), Fe(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Fe(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Fe(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Fe(e, t, "encType", s.encType, s, null), Fe(e, t, "method", s.method, s, null), Fe(e, t, "target", s.target, s, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = zl("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = kn);
        break;
      case "onScroll":
        o != null && $e("scroll", e);
        break;
      case "onScrollEnd":
        o != null && $e("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(u(61));
          if (i = o.__html, i != null) {
            if (s.children != null) throw Error(u(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = zl("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "" + o) : e.removeAttribute(i);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(i) : e.setAttribute(i, o);
        break;
      case "popover":
        $e("beforetoggle", e), $e("toggle", e), Il(e, "popover", o);
        break;
      case "xlinkActuate":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        Il(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = Yp.get(i) || i, Il(e, i, o));
    }
  }
  function _c(e, t, i, o, s, d) {
    switch (i) {
      case "style":
        _f(e, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(u(61));
          if (i = o.__html, i != null) {
            if (s.children != null) throw Error(u(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Er(e, o) : (typeof o == "number" || typeof o == "bigint") && Er(e, "" + o);
        break;
      case "onScroll":
        o != null && $e("scroll", e);
        break;
      case "onScrollEnd":
        o != null && $e("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = kn);
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
        if (!Ef.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (s = i.endsWith("Capture"), t = i.slice(2, s ? i.length - 7 : void 0), d = e[Dt] || null, d = d != null ? d[i] : null, typeof d == "function" && e.removeEventListener(t, d, s), typeof o == "function")) {
              typeof d != "function" && d !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, o, s);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : Il(e, i, o);
          }
    }
  }
  function bt(e, t, i) {
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
        $e("error", e), $e("load", e);
        var o = !1, s = !1, d;
        for (d in i)
          if (i.hasOwnProperty(d)) {
            var m = i[d];
            if (m != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Fe(e, t, d, m, i, null);
              }
          }
        s && Fe(e, t, "srcSet", i.srcSet, i, null), o && Fe(e, t, "src", i.src, i, null);
        return;
      case "input":
        $e("invalid", e);
        var v = d = m = s = null, S = null, j = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var I = i[o];
            if (I != null)
              switch (o) {
                case "name":
                  s = I;
                  break;
                case "type":
                  m = I;
                  break;
                case "checked":
                  S = I;
                  break;
                case "defaultChecked":
                  j = I;
                  break;
                case "value":
                  d = I;
                  break;
                case "defaultValue":
                  v = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Fe(e, t, o, I, i, null);
              }
          }
        Tf(
          e,
          d,
          v,
          S,
          j,
          m,
          s,
          !1
        );
        return;
      case "select":
        $e("invalid", e), o = m = d = null;
        for (s in i)
          if (i.hasOwnProperty(s) && (v = i[s], v != null))
            switch (s) {
              case "value":
                d = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                o = v;
              default:
                Fe(e, t, s, v, i, null);
            }
        t = d, i = m, e.multiple = !!o, t != null ? wr(e, !!o, t, !1) : i != null && wr(e, !!o, i, !0);
        return;
      case "textarea":
        $e("invalid", e), d = s = o = null;
        for (m in i)
          if (i.hasOwnProperty(m) && (v = i[m], v != null))
            switch (m) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                d = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                Fe(e, t, m, v, i, null);
            }
        Af(e, o, s, d);
        return;
      case "option":
        for (S in i)
          i.hasOwnProperty(S) && (o = i[S], o != null) && (S === "selected" ? e.selected = o && typeof o != "function" && typeof o != "symbol" : Fe(e, t, S, o, i, null));
        return;
      case "dialog":
        $e("beforetoggle", e), $e("toggle", e), $e("cancel", e), $e("close", e);
        break;
      case "iframe":
      case "object":
        $e("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ji.length; o++)
          $e(Ji[o], e);
        break;
      case "image":
        $e("error", e), $e("load", e);
        break;
      case "details":
        $e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        $e("error", e), $e("load", e);
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
        for (j in i)
          if (i.hasOwnProperty(j) && (o = i[j], o != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Fe(e, t, j, o, i, null);
            }
        return;
      default:
        if (qu(t)) {
          for (I in i)
            i.hasOwnProperty(I) && (o = i[I], o !== void 0 && _c(
              e,
              t,
              I,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (v in i)
      i.hasOwnProperty(v) && (o = i[v], o != null && Fe(e, t, v, o, i, null));
  }
  function w2(e, t, i, o) {
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
        var s = null, d = null, m = null, v = null, S = null, j = null, I = null;
        for (U in i) {
          var F = i[U];
          if (i.hasOwnProperty(U) && F != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = F;
              default:
                o.hasOwnProperty(U) || Fe(e, t, U, null, o, F);
            }
        }
        for (var D in o) {
          var U = o[D];
          if (F = i[D], o.hasOwnProperty(D) && (U != null || F != null))
            switch (D) {
              case "type":
                d = U;
                break;
              case "name":
                s = U;
                break;
              case "checked":
                j = U;
                break;
              case "defaultChecked":
                I = U;
                break;
              case "value":
                m = U;
                break;
              case "defaultValue":
                v = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(u(137, t));
                break;
              default:
                U !== F && Fe(
                  e,
                  t,
                  D,
                  U,
                  o,
                  F
                );
            }
        }
        Fu(
          e,
          m,
          v,
          S,
          j,
          I,
          d,
          s
        );
        return;
      case "select":
        U = m = v = D = null;
        for (d in i)
          if (S = i[d], i.hasOwnProperty(d) && S != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                U = S;
              default:
                o.hasOwnProperty(d) || Fe(
                  e,
                  t,
                  d,
                  null,
                  o,
                  S
                );
            }
        for (s in o)
          if (d = o[s], S = i[s], o.hasOwnProperty(s) && (d != null || S != null))
            switch (s) {
              case "value":
                D = d;
                break;
              case "defaultValue":
                v = d;
                break;
              case "multiple":
                m = d;
              default:
                d !== S && Fe(
                  e,
                  t,
                  s,
                  d,
                  o,
                  S
                );
            }
        t = v, i = m, o = U, D != null ? wr(e, !!i, D, !1) : !!o != !!i && (t != null ? wr(e, !!i, t, !0) : wr(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        U = D = null;
        for (v in i)
          if (s = i[v], i.hasOwnProperty(v) && s != null && !o.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Fe(e, t, v, null, o, s);
            }
        for (m in o)
          if (s = o[m], d = i[m], o.hasOwnProperty(m) && (s != null || d != null))
            switch (m) {
              case "value":
                D = s;
                break;
              case "defaultValue":
                U = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== d && Fe(e, t, m, s, o, d);
            }
        Of(e, D, U);
        return;
      case "option":
        for (var J in i)
          D = i[J], i.hasOwnProperty(J) && D != null && !o.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Fe(
            e,
            t,
            J,
            null,
            o,
            D
          ));
        for (S in o)
          D = o[S], U = i[S], o.hasOwnProperty(S) && D !== U && (D != null || U != null) && (S === "selected" ? e.selected = D && typeof D != "function" && typeof D != "symbol" : Fe(
            e,
            t,
            S,
            D,
            o,
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
        for (var le in i)
          D = i[le], i.hasOwnProperty(le) && D != null && !o.hasOwnProperty(le) && Fe(e, t, le, null, o, D);
        for (j in o)
          if (D = o[j], U = i[j], o.hasOwnProperty(j) && D !== U && (D != null || U != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(u(137, t));
                break;
              default:
                Fe(
                  e,
                  t,
                  j,
                  D,
                  o,
                  U
                );
            }
        return;
      default:
        if (qu(t)) {
          for (var Ge in i)
            D = i[Ge], i.hasOwnProperty(Ge) && D !== void 0 && !o.hasOwnProperty(Ge) && _c(
              e,
              t,
              Ge,
              void 0,
              o,
              D
            );
          for (I in o)
            D = o[I], U = i[I], !o.hasOwnProperty(I) || D === U || D === void 0 && U === void 0 || _c(
              e,
              t,
              I,
              D,
              o,
              U
            );
          return;
        }
    }
    for (var O in i)
      D = i[O], i.hasOwnProperty(O) && D != null && !o.hasOwnProperty(O) && Fe(e, t, O, null, o, D);
    for (F in o)
      D = o[F], U = i[F], !o.hasOwnProperty(F) || D === U || D == null && U == null || Fe(e, t, F, D, o, U);
  }
  function jm(e) {
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
  function E2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, i = performance.getEntriesByType("resource"), o = 0; o < i.length; o++) {
        var s = i[o], d = s.transferSize, m = s.initiatorType, v = s.duration;
        if (d && v && jm(m)) {
          for (m = 0, v = s.responseEnd, o += 1; o < i.length; o++) {
            var S = i[o], j = S.startTime;
            if (j > v) break;
            var I = S.transferSize, F = S.initiatorType;
            I && jm(F) && (S = S.responseEnd, m += I * (S < v ? 1 : (v - j) / (S - j)));
          }
          if (--o, t += 8 * (d + m) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var jc = null, Dc = null;
  function ko(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mm(e, t) {
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
  function Mc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = null;
  function S2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Lc ? !1 : (Lc = e, !0) : (Lc = null, !1);
  }
  var Lm = typeof setTimeout == "function" ? setTimeout : void 0, C2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Um = typeof Promise == "function" ? Promise : void 0, N2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Um < "u" ? function(e) {
    return Um.resolve(null).then(e).catch(x2);
  } : Lm;
  function x2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ra(e) {
    return e === "head";
  }
  function Pm(e, t) {
    var i = t, o = 0;
    do {
      var s = i.nextSibling;
      if (e.removeChild(i), s && s.nodeType === 8)
        if (i = s.data, i === "/$" || i === "/&") {
          if (o === 0) {
            e.removeChild(s), Jr(t);
            return;
          }
          o--;
        } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&")
          o++;
        else if (i === "html")
          tl(e.ownerDocument.documentElement);
        else if (i === "head") {
          i = e.ownerDocument.head, tl(i);
          for (var d = i.firstChild; d; ) {
            var m = d.nextSibling, v = d.nodeName;
            d[bi] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || i.removeChild(d), d = m;
          }
        } else
          i === "body" && tl(e.ownerDocument.body);
      i = s;
    } while (i);
    Jr(t);
  }
  function km(e, t) {
    var i = e;
    e = 0;
    do {
      var o = i.nextSibling;
      if (i.nodeType === 1 ? t ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (t ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), o && o.nodeType === 8)
        if (i = o.data, i === "/$") {
          if (e === 0) break;
          e--;
        } else
          i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
      i = o;
    } while (i);
  }
  function Uc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (t = t.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uc(i), Hu(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function T2(e, t, i, o) {
    for (; e.nodeType === 1; ) {
      var s = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[bi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function O2(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Im(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function kc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function A2(e, t) {
    var i = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || i.readyState !== "loading")
      t();
    else {
      var o = function() {
        t(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function dn(e) {
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
  var Ic = null;
  function Bm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "/$" || i === "/&") {
          if (t === 0)
            return dn(e.nextSibling);
          t--;
        } else
          i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Hm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (t === 0) return e;
          t--;
        } else i !== "/$" && i !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function zm(e, t, i) {
    switch (t = ko(i), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function tl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Hu(e);
  }
  var fn = /* @__PURE__ */ new Map(), Fm = /* @__PURE__ */ new Set();
  function Io(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ea = G.d;
  G.d = {
    f: R2,
    r: _2,
    D: j2,
    C: D2,
    L: M2,
    m: L2,
    X: P2,
    S: U2,
    M: k2
  };
  function R2() {
    var e = ea.f(), t = Ro();
    return e || t;
  }
  function _2(e) {
    var t = vr(e);
    t !== null && t.tag === 5 && t.type === "form" ? l1(t) : ea.r(e);
  }
  var Zr = typeof document > "u" ? null : document;
  function Gm(e, t, i) {
    var o = Zr;
    if (o && typeof t == "string" && t) {
      var s = an(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof i == "string" && (s += '[crossorigin="' + i + '"]'), Fm.has(s) || (Fm.add(s), e = { rel: e, crossOrigin: i, href: t }, o.querySelector(s) === null && (t = o.createElement("link"), bt(t, "link", e), mt(t), o.head.appendChild(t)));
    }
  }
  function j2(e) {
    ea.D(e), Gm("dns-prefetch", e, null);
  }
  function D2(e, t) {
    ea.C(e, t), Gm("preconnect", e, t);
  }
  function M2(e, t, i) {
    ea.L(e, t, i);
    var o = Zr;
    if (o && e && t) {
      var s = 'link[rel="preload"][as="' + an(t) + '"]';
      t === "image" && i && i.imageSrcSet ? (s += '[imagesrcset="' + an(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (s += '[imagesizes="' + an(
        i.imageSizes
      ) + '"]')) : s += '[href="' + an(e) + '"]';
      var d = s;
      switch (t) {
        case "style":
          d = Qr(e);
          break;
        case "script":
          d = Wr(e);
      }
      fn.has(d) || (e = N(
        {
          rel: "preload",
          href: t === "image" && i && i.imageSrcSet ? void 0 : e,
          as: t
        },
        i
      ), fn.set(d, e), o.querySelector(s) !== null || t === "style" && o.querySelector(nl(d)) || t === "script" && o.querySelector(al(d)) || (t = o.createElement("link"), bt(t, "link", e), mt(t), o.head.appendChild(t)));
    }
  }
  function L2(e, t) {
    ea.m(e, t);
    var i = Zr;
    if (i && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + an(o) + '"][href="' + an(e) + '"]', d = s;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Wr(e);
      }
      if (!fn.has(d) && (e = N({ rel: "modulepreload", href: e }, t), fn.set(d, e), i.querySelector(s) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(al(d)))
              return;
        }
        o = i.createElement("link"), bt(o, "link", e), mt(o), i.head.appendChild(o);
      }
    }
  }
  function U2(e, t, i) {
    ea.S(e, t, i);
    var o = Zr;
    if (o && e) {
      var s = br(o).hoistableStyles, d = Qr(e);
      t = t || "default";
      var m = s.get(d);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = o.querySelector(
          nl(d)
        ))
          v.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            i
          ), (i = fn.get(d)) && Bc(e, i);
          var S = m = o.createElement("link");
          mt(S), bt(S, "link", e), S._p = new Promise(function(j, I) {
            S.onload = j, S.onerror = I;
          }), S.addEventListener("load", function() {
            v.loading |= 1;
          }), S.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Bo(m, t, o);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(d, m);
      }
    }
  }
  function P2(e, t) {
    ea.X(e, t);
    var i = Zr;
    if (i && e) {
      var o = br(i).hoistableScripts, s = Wr(e), d = o.get(s);
      d || (d = i.querySelector(al(s)), d || (e = N({ src: e, async: !0 }, t), (t = fn.get(s)) && Hc(e, t), d = i.createElement("script"), mt(d), bt(d, "link", e), i.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(s, d));
    }
  }
  function k2(e, t) {
    ea.M(e, t);
    var i = Zr;
    if (i && e) {
      var o = br(i).hoistableScripts, s = Wr(e), d = o.get(s);
      d || (d = i.querySelector(al(s)), d || (e = N({ src: e, async: !0, type: "module" }, t), (t = fn.get(s)) && Hc(e, t), d = i.createElement("script"), mt(d), bt(d, "link", e), i.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, o.set(s, d));
    }
  }
  function qm(e, t, i, o) {
    var s = (s = ce.current) ? Io(s) : null;
    if (!s) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (t = Qr(i.href), i = br(
          s
        ).hoistableStyles, o = i.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Qr(i.href);
          var d = br(
            s
          ).hoistableStyles, m = d.get(e);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, m), (d = s.querySelector(
            nl(e)
          )) && !d._p && (m.instance = d, m.state.loading = 5), fn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, fn.set(e, i), d || I2(
            s,
            e,
            i,
            m.state
          ))), t && o === null)
            throw Error(u(528, ""));
          return m;
        }
        if (t && o !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Wr(i), i = br(
          s
        ).hoistableScripts, o = i.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function Qr(e) {
    return 'href="' + an(e) + '"';
  }
  function nl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Km(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function I2(e, t, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), bt(t, "link", i), mt(t), e.head.appendChild(t));
  }
  function Wr(e) {
    return '[src="' + an(e) + '"]';
  }
  function al(e) {
    return "script[async]" + e;
  }
  function Vm(e, t, i) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + an(i.href) + '"]'
          );
          if (o)
            return t.instance = o, mt(o), o;
          var s = N({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), mt(o), bt(o, "style", s), Bo(o, i.precedence, e), t.instance = o;
        case "stylesheet":
          s = Qr(i.href);
          var d = e.querySelector(
            nl(s)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, mt(d), d;
          o = Km(i), (s = fn.get(s)) && Bc(o, s), d = (e.ownerDocument || e).createElement("link"), mt(d);
          var m = d;
          return m._p = new Promise(function(v, S) {
            m.onload = v, m.onerror = S;
          }), bt(d, "link", o), t.state.loading |= 4, Bo(d, i.precedence, e), t.instance = d;
        case "script":
          return d = Wr(i.src), (s = e.querySelector(
            al(d)
          )) ? (t.instance = s, mt(s), s) : (o = i, (s = fn.get(d)) && (o = N({}, i), Hc(o, s)), e = e.ownerDocument || e, s = e.createElement("script"), mt(s), bt(s, "link", o), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, Bo(o, i.precedence, e));
    return t.instance;
  }
  function Bo(e, t, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = o.length ? o[o.length - 1] : null, d = s, m = 0; m < o.length; m++) {
      var v = o[m];
      if (v.dataset.precedence === t) d = v;
      else if (d !== s) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild));
  }
  function Bc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Hc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ho = null;
  function Ym(e, t, i) {
    if (Ho === null) {
      var o = /* @__PURE__ */ new Map(), s = Ho = /* @__PURE__ */ new Map();
      s.set(i, o);
    } else
      s = Ho, o = s.get(i), o || (o = /* @__PURE__ */ new Map(), s.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), s = 0; s < i.length; s++) {
      var d = i[s];
      if (!(d[bi] || d[gt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = d.getAttribute(t) || "";
        m = e + m;
        var v = o.get(m);
        v ? v.push(d) : o.set(m, [d]);
      }
    }
    return o;
  }
  function Xm(e, t, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function B2(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
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
  function Zm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function H2(e, t, i, o) {
    if (i.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (i.state.loading & 4) === 0) {
      if (i.instance === null) {
        var s = Qr(o.href), d = t.querySelector(
          nl(s)
        );
        if (d) {
          t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zo.bind(e), t.then(e, e)), i.state.loading |= 4, i.instance = d, mt(d);
          return;
        }
        d = t.ownerDocument || t, o = Km(o), (s = fn.get(s)) && Bc(o, s), d = d.createElement("link"), mt(d);
        var m = d;
        m._p = new Promise(function(v, S) {
          m.onload = v, m.onerror = S;
        }), bt(d, "link", o), i.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(i, t), (t = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++, i = zo.bind(e), t.addEventListener("load", i), t.addEventListener("error", i));
    }
  }
  var zc = 0;
  function z2(e, t) {
    return e.stylesheets && e.count === 0 && Go(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(i) {
      var o = setTimeout(function() {
        if (e.stylesheets && Go(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + t);
      0 < e.imgBytes && zc === 0 && (zc = 62500 * E2());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Go(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > zc ? 50 : 800) + t
      );
      return e.unsuspend = i, function() {
        e.unsuspend = null, clearTimeout(o), clearTimeout(s);
      };
    } : null;
  }
  function zo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Go(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Fo = null;
  function Go(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Fo = /* @__PURE__ */ new Map(), t.forEach(F2, e), Fo = null, zo.call(e));
  }
  function F2(e, t) {
    if (!(t.state.loading & 4)) {
      var i = Fo.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), Fo.set(e, i);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < s.length; d++) {
          var m = s[d];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (i.set(m.dataset.precedence, m), o = m);
        }
        o && i.set(null, o);
      }
      s = t.instance, m = s.getAttribute("data-precedence"), d = i.get(m) || o, d === o && i.set(null, s), i.set(m, s), this.count++, o = zo.bind(this), s.addEventListener("load", o), s.addEventListener("error", o), d ? d.parentNode.insertBefore(s, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var rl = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0
  };
  function G2(e, t, i, o, s, d, m, v, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = o, this.onUncaughtError = s, this.onCaughtError = d, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qm(e, t, i, o, s, d, m, v, S, j, I, F) {
    return e = new G2(
      e,
      t,
      i,
      m,
      S,
      j,
      I,
      F,
      v
    ), t = 1, d === !0 && (t |= 24), d = Vt(3, null, null, t), e.current = d, d.stateNode = e, t = ws(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: t
    }, Ns(d), e;
  }
  function Wm(e) {
    return e ? (e = Ar, e) : Ar;
  }
  function Jm(e, t, i, o, s, d) {
    s = Wm(s), o.context === null ? o.context = s : o.pendingContext = s, o = ba(t), o.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (o.callback = d), i = $a(e, o, t), i !== null && (It(i, e, t), Ui(i, e, t));
  }
  function eh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Fc(e, t) {
    eh(e, t), (e = e.alternate) && eh(e, t);
  }
  function th(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && It(t, e, 67108864), Fc(e, 67108864);
    }
  }
  function nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wt();
      t = ku(t);
      var i = qa(e, t);
      i !== null && It(i, e, t), Fc(e, t);
    }
  }
  var qo = !0;
  function q2(e, t, i, o) {
    var s = k.T;
    k.T = null;
    var d = G.p;
    try {
      G.p = 2, Gc(e, t, i, o);
    } finally {
      G.p = d, k.T = s;
    }
  }
  function K2(e, t, i, o) {
    var s = k.T;
    k.T = null;
    var d = G.p;
    try {
      G.p = 8, Gc(e, t, i, o);
    } finally {
      G.p = d, k.T = s;
    }
  }
  function Gc(e, t, i, o) {
    if (qo) {
      var s = qc(o);
      if (s === null)
        Rc(
          e,
          t,
          o,
          Ko,
          i
        ), rh(e, o);
      else if (Y2(
        s,
        e,
        t,
        i,
        o
      ))
        o.stopPropagation();
      else if (rh(e, o), t & 4 && -1 < V2.indexOf(e)) {
        for (; s !== null; ) {
          var d = vr(s);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var m = Ba(d.pendingLanes);
                  if (m !== 0) {
                    var v = d;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var S = 1 << 31 - Re(m);
                      v.entanglements[1] |= S, m &= ~S;
                    }
                    Dn(d), (Ue & 6) === 0 && (Oo = nt() + 500, Wi(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = qa(d, 2), v !== null && It(v, d, 2), Ro(), Fc(d, 2);
            }
          if (d = qc(o), d === null && Rc(
            e,
            t,
            o,
            Ko,
            i
          ), d === s) break;
          s = d;
        }
        s !== null && o.stopPropagation();
      } else
        Rc(
          e,
          t,
          o,
          null,
          i
        );
    }
  }
  function qc(e) {
    return e = Vu(e), Kc(e);
  }
  var Ko = null;
  function Kc(e) {
    if (Ko = null, e = pr(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (i === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Ko = e, null;
  }
  function ah(e) {
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
        switch (yi()) {
          case da:
            return 2;
          case Ia:
            return 8;
          case re:
          case pe:
            return 32;
          case $t:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = !1, _a = null, ja = null, Da = null, il = /* @__PURE__ */ new Map(), ll = /* @__PURE__ */ new Map(), Ma = [], V2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _a = null;
        break;
      case "dragenter":
      case "dragleave":
        ja = null;
        break;
      case "mouseover":
      case "mouseout":
        Da = null;
        break;
      case "pointerover":
      case "pointerout":
        il.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ll.delete(t.pointerId);
    }
  }
  function ol(e, t, i, o, s, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: t,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: d,
      targetContainers: [s]
    }, t !== null && (t = vr(t), t !== null && th(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function Y2(e, t, i, o, s) {
    switch (t) {
      case "focusin":
        return _a = ol(
          _a,
          e,
          t,
          i,
          o,
          s
        ), !0;
      case "dragenter":
        return ja = ol(
          ja,
          e,
          t,
          i,
          o,
          s
        ), !0;
      case "mouseover":
        return Da = ol(
          Da,
          e,
          t,
          i,
          o,
          s
        ), !0;
      case "pointerover":
        var d = s.pointerId;
        return il.set(
          d,
          ol(
            il.get(d) || null,
            e,
            t,
            i,
            o,
            s
          )
        ), !0;
      case "gotpointercapture":
        return d = s.pointerId, ll.set(
          d,
          ol(
            ll.get(d) || null,
            e,
            t,
            i,
            o,
            s
          )
        ), !0;
    }
    return !1;
  }
  function ih(e) {
    var t = pr(e.target);
    if (t !== null) {
      var i = f(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = h(i), t !== null) {
            e.blockedOn = t, bf(e.priority, function() {
              nh(i);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(i), t !== null) {
            e.blockedOn = t, bf(e.priority, function() {
              nh(i);
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = qc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Ku = o, i.target.dispatchEvent(o), Ku = null;
      } else
        return t = vr(i), t !== null && th(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function lh(e, t, i) {
    Vo(e) && i.delete(t);
  }
  function X2() {
    Vc = !1, _a !== null && Vo(_a) && (_a = null), ja !== null && Vo(ja) && (ja = null), Da !== null && Vo(Da) && (Da = null), il.forEach(lh), ll.forEach(lh);
  }
  function Yo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vc || (Vc = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      X2
    )));
  }
  var Xo = null;
  function oh(e) {
    Xo !== e && (Xo = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Xo === e && (Xo = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t], o = e[t + 1], s = e[t + 2];
          if (typeof o != "function") {
            if (Kc(o || i) === null)
              continue;
            break;
          }
          var d = vr(i);
          d !== null && (e.splice(t, 3), t -= 3, qs(
            d,
            {
              pending: !0,
              data: s,
              method: i.method,
              action: o
            },
            o,
            s
          ));
        }
      }
    ));
  }
  function Jr(e) {
    function t(S) {
      return Yo(S, e);
    }
    _a !== null && Yo(_a, e), ja !== null && Yo(ja, e), Da !== null && Yo(Da, e), il.forEach(t), ll.forEach(t);
    for (var i = 0; i < Ma.length; i++) {
      var o = Ma[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Ma.length && (i = Ma[0], i.blockedOn === null); )
      ih(i), i.blockedOn === null && Ma.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var s = i[o], d = i[o + 1], m = s[Dt] || null;
        if (typeof d == "function")
          m || oh(i);
        else if (m) {
          var v = null;
          if (d && d.hasAttribute("formAction")) {
            if (s = d, m = d[Dt] || null)
              v = m.formAction;
            else if (Kc(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? i[o + 1] = v : (i.splice(o, 3), o -= 3), oh(i);
        }
      }
  }
  function uh() {
    function e(d) {
      d.canIntercept && d.info === "react-transition" && d.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), o || setTimeout(i, 20);
    }
    function i() {
      if (!o && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, {
          state: d.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var o = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(i, 100), function() {
        o = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function Yc(e) {
    this._internalRoot = e;
  }
  Zo.prototype.render = Yc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var i = t.current, o = Wt();
    Jm(i, o, e, t, null, null);
  }, Zo.prototype.unmount = Yc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Jm(e.current, 2, null, e, null, null), Ro(), t[yr] = null;
    }
  };
  function Zo(e) {
    this._internalRoot = e;
  }
  Zo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vf();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Ma.length && t !== 0 && t < Ma[i].priority; i++) ;
      Ma.splice(i, 0, e), i === 0 && ih(e);
    }
  };
  var sh = r.version;
  if (sh !== "19.2.3")
    throw Error(
      u(
        527,
        sh,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = b(t), e = e !== null ? $(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Z2 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        On = Qo.inject(
          Z2
        ), At = Qo;
      } catch {
      }
  }
  return cl.createRoot = function(e, t) {
    if (!c(e)) throw Error(u(299));
    var i = !1, o = "", s = y1, d = p1, m = v1;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = Qm(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      null,
      s,
      d,
      m,
      uh
    ), e[yr] = t.current, Ac(e), new Yc(t);
  }, cl.hydrateRoot = function(e, t, i) {
    if (!c(e)) throw Error(u(299));
    var o = !1, s = "", d = y1, m = p1, v = v1, S = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (s = i.identifierPrefix), i.onUncaughtError !== void 0 && (d = i.onUncaughtError), i.onCaughtError !== void 0 && (m = i.onCaughtError), i.onRecoverableError !== void 0 && (v = i.onRecoverableError), i.formState !== void 0 && (S = i.formState)), t = Qm(
      e,
      1,
      !0,
      t,
      i ?? null,
      o,
      s,
      S,
      d,
      m,
      v,
      uh
    ), t.context = Wm(null), i = t.current, o = Wt(), o = ku(o), s = ba(o), s.callback = null, $a(i, s, o), i = o, t.current.lanes = i, vi(t, i), Dn(t), e[yr] = t.current, Ac(e), new Zo(t);
  }, cl.version = "19.2.3", cl;
}
var Nh;
function Pv() {
  if (Nh) return td.exports;
  Nh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), td.exports = Uv(), td.exports;
}
var kv = Pv();
function Iv(n = {}) {
  const { nonce: a, locale: r, onScriptLoadSuccess: l, onScriptLoadError: u } = n, [c, f] = w.useState(!1), h = w.useRef(l);
  h.current = l;
  const p = w.useRef(u);
  return p.current = u, w.useEffect(() => {
    const g = document.createElement("script");
    return g.src = "https://accounts.google.com/gsi/client", r && (g.src += `?hl=${r}`), g.async = !0, g.defer = !0, g.nonce = a, g.onload = () => {
      var b;
      f(!0), (b = h.current) === null || b === void 0 || b.call(h);
    }, g.onerror = () => {
      var b;
      f(!1), (b = p.current) === null || b === void 0 || b.call(p);
    }, document.body.appendChild(g), () => {
      document.body.removeChild(g);
    };
  }, [a]), c;
}
const Ey = w.createContext(null);
function Bv({ clientId: n, nonce: a, locale: r, onScriptLoadSuccess: l, onScriptLoadError: u, children: c }) {
  const f = Iv({
    nonce: a,
    onScriptLoadSuccess: l,
    onScriptLoadError: u,
    locale: r
  }), h = w.useMemo(() => ({
    locale: r,
    clientId: n,
    scriptLoadedSuccessfully: f
  }), [n, f]);
  return ue.createElement(Ey.Provider, { value: h }, c);
}
function Hv() {
  const n = w.useContext(Ey);
  if (!n)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return n;
}
function zv({ flow: n = "implicit", scope: a = "", onSuccess: r, onError: l, onNonOAuthError: u, overrideScope: c, state: f, ...h }) {
  const { clientId: p, scriptLoadedSuccessfully: g } = Hv(), b = w.useRef(), $ = w.useRef(r);
  $.current = r;
  const N = w.useRef(l);
  N.current = l;
  const _ = w.useRef(u);
  _.current = u, w.useEffect(() => {
    var C, M;
    if (!g)
      return;
    const H = n === "implicit" ? "initTokenClient" : "initCodeClient", q = (M = (C = window?.google) === null || C === void 0 ? void 0 : C.accounts) === null || M === void 0 ? void 0 : M.oauth2[H]({
      client_id: p,
      scope: c ? a : `openid profile email ${a}`,
      callback: (Z) => {
        var V, ee;
        if (Z.error)
          return (V = N.current) === null || V === void 0 ? void 0 : V.call(N, Z);
        (ee = $.current) === null || ee === void 0 || ee.call($, Z);
      },
      error_callback: (Z) => {
        var V;
        (V = _.current) === null || V === void 0 || V.call(_, Z);
      },
      state: f,
      ...h
    });
    b.current = q;
  }, [p, g, n, a, f]);
  const E = w.useCallback((C) => {
    var M;
    return (M = b.current) === null || M === void 0 ? void 0 : M.requestAccessToken(C);
  }, []), A = w.useCallback(() => {
    var C;
    return (C = b.current) === null || C === void 0 ? void 0 : C.requestCode();
  }, []);
  return n === "implicit" ? E : A;
}
var oe = /* @__PURE__ */ ((n) => (n.SUCCESS = "success", n.WARNING = "warning", n.ERROR = "error", n.INFO = "info", n))(oe || {}), it = /* @__PURE__ */ ((n) => (n.PRIMARY = "primary", n.OUTLINE = "outline", n.LINK = "link", n))(it || {}), Ve = /* @__PURE__ */ ((n) => (n.BUTTON = "button", n.SUBMIT = "submit", n.RESET = "reset", n))(Ve || {}), mn = /* @__PURE__ */ ((n) => (n.DEV = "dev", n.TEST = "test", n.STAGE = "stage", n.PROD = "prod", n))(mn || {}), ef = /* @__PURE__ */ ((n) => (n.TEST = "TEST", n.WEBCOMPONENT = "WEBCOMPONENT", n))(ef || {}), Ua = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.STATUS = "status", n))(Ua || {}), hl = /* @__PURE__ */ ((n) => (n.ASSERTIVE = "assertive", n.POLITE = "polite", n.OFF = "off", n))(hl || {});
const ft = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  IAM_AUTHORITY_OVERRIDE: "iam_authority_override",
  THEME_LOADED: "theme_loaded"
}, xe = {
  ACCESS_TOKEN: "access_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN: "refresh_token",
  REFRESH_TOKEN_TIME: "refresh_token_time"
}, ri = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain",
  X_AUTHORITY: "X-Authority"
}, Ln = {
  AUTH: "/api/auth",
  GOOGLE_AUTH: "/api/auth/google",
  APPLE_AUTH: "/api/auth/apple",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  CHECK_PHONE: "/api/check-phone",
  FORGOT_PASSWORD: "/api/forgot-password",
  FORGOT_USERNAME: "/api/forgot-username",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout"
}, cr = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, ni = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15,
  MIN_PART_LENGTH_FOR_NAME_CHECK: 2
}, ii = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Jt = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[!@#$%^&*._\-]/,
  ALLOWED_CHARS: /^[A-Za-z0-9!@#$%^&*._\-]+$/,
  NO_SPACES: /\s/,
  NO_TRIPLE: /(.)\1\1/
}, xh = /[!@#$%^&*._-]/, Th = /^[A-Za-z0-9!@#$%^&*._-]+$/, Sn = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300,
  TOKEN_REFRESH_MAX_AGE_DAYS: 7,
  RESEND_COOLDOWN_SECONDS: 30
}, la = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7,
  ONE_DAY_MS: 1440 * 60 * 1e3,
  // 1 day in milliseconds
  THIRTY_DAYS_SECONDS: 720 * 60 * 60
  // 30 days in seconds
}, hn = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage"
}, aa = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, Fv = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Oh = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, Gv = {
  dev: "https://dev-ecomm-api.colibrilearning.com",
  test: "https://test-ecomm-api.colibrilearning.com",
  stage: "https://stage-ecomm-api.colibrilearning.com",
  prod: "https://ecomm-api.colibrilearning.com"
}, Me = {
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
}, gl = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, we = {
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
}, rd = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, id = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, ld = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, Jo = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, We = ({
  label: n,
  onClick: a,
  disabled: r,
  type: l = Ve.BUTTON,
  variant: u = it.PRIMARY,
  part: c,
  className: f,
  children: h,
  ariaLabel: p,
  mainButtonStyle: g
}) => {
  const b = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-30! disabled:cursor-not-allowed!", $ = {
    [it.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [it.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [it.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, N = f ? `identity-widget-button ${b} ${$[u]} ${f}` : `identity-widget-button ${b} ${$[u]}`, _ = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...f ? f.split(/\s+/).map((A) => A.trim()).filter((A) => A.startsWith("identity-widget-")) : []
      ].filter(Boolean)
    )
  ).join(" "), E = c || _;
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      className: N,
      onClick: a,
      disabled: r,
      type: l,
      part: E,
      "aria-label": p || (typeof n == "string" ? n : void 0),
      "aria-disabled": r,
      style: { ...g, borderStyle: "solid !important" },
      children: h || n
    }
  );
}, gn = w.forwardRef((n, a) => {
  const {
    label: r,
    startIcon: l,
    endIcon: u,
    error: c,
    helperText: f,
    optional: h,
    className: p,
    options: g,
    id: b,
    ...$
  } = n, N = !!c || !!f, _ = $.type === "select" || !!g, E = b || `input-${Math.random().toString(36).substr(2, 9)}`, A = `${E}-error`, C = `${E}-helper`;
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${p || ""}`,
      children: [
        r && /* @__PURE__ */ y.jsxs(
          "label",
          {
            htmlFor: E,
            part: "identity-widget-input-label",
            className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
            children: [
              r,
              " ",
              h && /* @__PURE__ */ y.jsx(
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
        /* @__PURE__ */ y.jsxs(
          "div",
          {
            part: "identity-widget-input-container",
            className: "identity-widget-input-container flex! items-center! relative!",
            children: [
              l && /* @__PURE__ */ y.jsx(
                "span",
                {
                  part: "identity-widget-input-start-icon",
                  className: "identity-widget-input-start-icon flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
                  style: { top: "50%", transform: "translateY(-50%)" },
                  "aria-hidden": !0,
                  children: l
                }
              ),
              _ ? /* @__PURE__ */ y.jsx(
                "select",
                {
                  ref: a,
                  id: E,
                  part: "identity-widget-input-select",
                  "aria-label": typeof r == "string" ? r : $["aria-label"],
                  "aria-invalid": N,
                  "aria-describedby": N ? A : void 0,
                  "aria-required": $.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: N ? "#d64545" : "#cbd5d5",
                    ...$.style
                  },
                  ...$,
                  children: g && g.map((M) => /* @__PURE__ */ y.jsx(
                    "option",
                    {
                      part: "identity-widget-input-option",
                      className: "identity-widget-input-option",
                      value: M.value,
                      children: M.label
                    },
                    M.value
                  ))
                }
              ) : /* @__PURE__ */ y.jsx(
                "input",
                {
                  ref: a,
                  id: E,
                  part: "identity-widget-input-field",
                  "aria-label": typeof r == "string" ? r : $["aria-label"],
                  "aria-invalid": N,
                  "aria-describedby": N ? A : void 0,
                  "aria-required": $.required,
                  className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: N ? "#d64545" : "#cbd5d5",
                    ...$.style
                  },
                  ...$
                }
              ),
              u && /* @__PURE__ */ y.jsx(
                "span",
                {
                  part: "identity-widget-input-end-icon",
                  className: "identity-widget-input-end-icon flex! items-center! justify-center! absolute! right-2.5! pointer-events-auto! z-2!",
                  style: { top: "50%", transform: "translateY(-50%)" },
                  "aria-hidden": !0,
                  children: u
                }
              )
            ]
          }
        ),
        c && typeof c == "string" && /* @__PURE__ */ y.jsx(
          "div",
          {
            id: A,
            role: "alert",
            "aria-live": "polite",
            part: "identity-widget-input-error",
            className: "identity-widget-input-error text-[#d64545] text-[13px]! mt-1.5! text-left!",
            children: c
          }
        ),
        !c && f && /* @__PURE__ */ y.jsx(
          "div",
          {
            id: C,
            role: "status",
            "aria-live": "polite",
            part: "identity-widget-input-helper",
            className: "identity-widget-input-helper text-[#d64545] text-[13px]! mt-1.5! text-left!",
            children: f
          }
        )
      ]
    }
  );
}), qv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Bt = ({
  type: n,
  title: a,
  message: r,
  actionText: l,
  onActionClick: u,
  onClose: c,
  className: f = "",
  children: h
}) => {
  const p = () => {
    switch (n) {
      case oe.SUCCESS:
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
      case oe.WARNING:
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
      case oe.ERROR:
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
      case oe.INFO:
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
  }, g = () => {
    switch (n) {
      case oe.SUCCESS:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case oe.WARNING:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case oe.ERROR:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case oe.INFO:
      default:
        return /* @__PURE__ */ y.jsx(
          "img",
          {
            part: "identity-widget-banner-icon-image",
            src: qv,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, b = p(), $ = () => {
    switch (n) {
      case oe.ERROR:
        return Ua.ALERT;
      case oe.WARNING:
      case oe.INFO:
        return Ua.STATUS;
      case oe.SUCCESS:
        return Ua.STATUS;
      default:
        return Ua.STATUS;
    }
  };
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: $(),
      "aria-live": n === oe.ERROR ? hl.ASSERTIVE : hl.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! ${a ? "items-start!" : "items-center!"} max-[500px]:items-start! py-3! px-4! rounded! ${b.bg} ${b.border} ${f}`,
      children: [
        /* @__PURE__ */ y.jsx(
          "div",
          {
            part: "identity-widget-banner-icon",
            className: `identity-widget-banner-icon flex-shrink-0! ${a ? "mt-0.5!" : ""} ${b.iconColor}!`,
            "aria-hidden": "true",
            children: g()
          }
        ),
        /* @__PURE__ */ y.jsxs(
          "div",
          {
            part: "identity-widget-banner-content",
            className: "identity-widget-banner-content ml-3! flex-1! flex! flex-col! gap-0.5!",
            children: [
              a && /* @__PURE__ */ y.jsx(
                "span",
                {
                  part: "identity-widget-banner-title",
                  className: `identity-widget-banner-title text-sm! font-bold! ${b.titleText}`,
                  children: a
                }
              ),
              /* @__PURE__ */ y.jsxs(
                "div",
                {
                  part: "identity-widget-banner-message-row",
                  className: "identity-widget-banner-message-row flex! items-center! gap-2! flex-wrap!",
                  children: [
                    /* @__PURE__ */ y.jsx(
                      "span",
                      {
                        part: "identity-widget-banner-message",
                        className: `identity-widget-banner-message text-sm! font-medium! ${b.text}`,
                        children: r
                      }
                    ),
                    l && u && /* @__PURE__ */ y.jsx(
                      "button",
                      {
                        part: "identity-widget-banner-action",
                        type: "button",
                        onClick: u,
                        "aria-label": l,
                        className: `identity-widget-banner-action text-sm! font-medium! ${b.actionColor} ${b.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! max-[500px]:whitespace-normal! shadow-none!`,
                        children: l
                      }
                    ),
                    l && !u && /* @__PURE__ */ y.jsx(
                      "span",
                      {
                        part: "identity-widget-banner-action",
                        className: `identity-widget-banner-action text-sm! font-semibold! ${b.actionColor}`,
                        children: l
                      }
                    ),
                    h
                  ]
                }
              )
            ]
          }
        ),
        c && /* @__PURE__ */ y.jsxs(
          "button",
          {
            part: "identity-widget-banner-close",
            type: "button",
            onClick: c,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${b.iconColor} ${b.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ y.jsx(
                "span",
                {
                  part: "identity-widget-banner-close-text",
                  className: "identity-widget-banner-close-text sr-only",
                  children: "Dismiss"
                }
              ),
              /* @__PURE__ */ y.jsx(
                "svg",
                {
                  part: "identity-widget-banner-close-icon",
                  className: "identity-widget-banner-close-icon w-5! h-5!",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ y.jsx(
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
}, wd = ({ type: n, message: a, duration: r = 5e3, onClose: l, className: u = "" }) => {
  const [c, f] = w.useState(!1), [h, p] = w.useState(!1);
  w.useEffect(() => {
    setTimeout(() => f(!0), Sn.ANIMATION_ENTRANCE_DELAY);
    const E = setTimeout(() => {
      g();
    }, r);
    return () => clearTimeout(E);
  }, [r]);
  const g = () => {
    p(!0), setTimeout(() => {
      f(!1), l && l();
    }, Sn.ANIMATION_EXIT_DURATION);
  }, b = () => {
    switch (n) {
      case oe.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case oe.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case oe.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      case oe.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, $ = () => {
    switch (n) {
      case oe.SUCCESS:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case oe.WARNING:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case oe.ERROR:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case oe.INFO:
      default:
        return /* @__PURE__ */ y.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ y.jsx(
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
  }, N = b(), _ = () => {
    switch (n) {
      case oe.ERROR:
        return Ua.ALERT;
      case oe.WARNING:
      case oe.INFO:
      case oe.SUCCESS:
        return Ua.STATUS;
      default:
        return Ua.STATUS;
    }
  };
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: _(),
      "aria-live": n === oe.ERROR ? hl.ASSERTIVE : hl.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${rd.Z_INDEX}]! transition-all! duration-300! ${c && !h ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${u}`,
      style: { maxWidth: rd.MAX_WIDTH, width: rd.WIDTH },
      children: /* @__PURE__ */ y.jsxs(
        "div",
        {
          part: "identity-widget-toast-body",
          className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${N.bg}`,
          children: [
            /* @__PURE__ */ y.jsx(
              "div",
              {
                part: "identity-widget-toast-icon",
                className: `identity-widget-toast-icon flex-shrink-0! ${N.icon}`,
                "aria-hidden": "true",
                children: $()
              }
            ),
            /* @__PURE__ */ y.jsx(
              "div",
              {
                part: "identity-widget-toast-content",
                className: `identity-widget-toast-content ml-3! flex-1! ${N.text}`,
                children: /* @__PURE__ */ y.jsx(
                  "p",
                  {
                    part: "identity-widget-toast-message",
                    className: "identity-widget-toast-message text-sm! font-medium!",
                    children: a
                  }
                )
              }
            ),
            /* @__PURE__ */ y.jsxs(
              "button",
              {
                part: "identity-widget-toast-close",
                type: "button",
                onClick: g,
                "aria-label": "Close notification",
                className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${N.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
                children: [
                  /* @__PURE__ */ y.jsx(
                    "span",
                    {
                      part: "identity-widget-toast-close-text",
                      className: "identity-widget-toast-close-text sr-only",
                      children: "Close"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "svg",
                    {
                      part: "identity-widget-toast-close-icon",
                      className: "identity-widget-toast-close-icon w-5! h-5!",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ y.jsx(
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
}, yl = () => /* @__PURE__ */ y.jsx(
  "span",
  {
    part: "identity-widget-loader",
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ y.jsx("span", { part: "identity-widget-loader-text", className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class fl extends Error {
}
fl.prototype.name = "InvalidTokenError";
function Kv(n) {
  return decodeURIComponent(atob(n).replace(/(.)/g, (a, r) => {
    let l = r.charCodeAt(0).toString(16).toUpperCase();
    return l.length < 2 && (l = "0" + l), "%" + l;
  }));
}
function Vv(n) {
  let a = n.replace(/-/g, "+").replace(/_/g, "/");
  switch (a.length % 4) {
    case 0:
      break;
    case 2:
      a += "==";
      break;
    case 3:
      a += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return Kv(a);
  } catch {
    return atob(a);
  }
}
function Pa(n, a) {
  if (typeof n != "string")
    throw new fl("Invalid token specified: must be a string");
  a || (a = {});
  const r = a.header === !0 ? 0 : 1, l = n.split(".")[r];
  if (typeof l != "string")
    throw new fl(`Invalid token specified: missing part #${r + 1}`);
  let u;
  try {
    u = Vv(l);
  } catch (c) {
    throw new fl(`Invalid token specified: invalid base64 for part #${r + 1} (${c.message})`);
  }
  try {
    return JSON.parse(u);
  } catch (c) {
    throw new fl(`Invalid token specified: invalid json for part #${r + 1} (${c.message})`);
  }
}
function Sy() {
  const n = window.location.hostname;
  if (n === aa.HOSTNAME || n === aa.IP || aa.IP_PATTERN.test(n))
    return "";
  const a = n.split(".");
  return a.length >= 2 ? "." + a.slice(-2).join(".") : "";
}
function Yv() {
  const n = window.location.hostname;
  return n === aa.HOSTNAME || n === aa.IP || aa.IP_PATTERN.test(n) || n.startsWith(`${hn.DEV}.`) || n.startsWith(`${hn.DEV}-`) ? mn.DEV : n.startsWith(`${hn.TEST}.`) || n.startsWith(`${hn.TEST}-`) ? mn.TEST : n.startsWith(`${hn.STAGE}.`) || n.startsWith(`${hn.STAGE}-`) ? mn.STAGE : mn.PROD;
}
function St(n, a, r, l = !0) {
  const u = /* @__PURE__ */ new Date();
  u.setSeconds(u.getSeconds() + r);
  const c = Sy(), f = c ? `; domain=${c}` : "", h = window.location.protocol === "https:" ? "; secure" : "", p = l ? encodeURIComponent(a) : a;
  document.cookie = `${n}=${p}; expires=${u.toUTCString()}; path=/${f}${h}; SameSite=Strict`;
}
function Nt(n, a = !0) {
  const r = document.cookie.split(";");
  for (const l of r) {
    const u = l.trim();
    if (u.startsWith(`${n}=`)) {
      const c = u.substring(n.length + 1);
      return a ? decodeURIComponent(c) : c;
    }
  }
  return null;
}
function eu(n) {
  const a = Sy(), r = a ? `; domain=${a}` : "";
  document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${r}`;
}
function Cy(n, a) {
  return function() {
    return n.apply(a, arguments);
  };
}
var Ah = {};
const { toString: Xv } = Object.prototype, { getPrototypeOf: tf } = Object, { iterator: Su, toStringTag: Ny } = Symbol, Cu = /* @__PURE__ */ ((n) => (a) => {
  const r = Xv.call(a);
  return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xn = (n) => (n = n.toLowerCase(), (a) => Cu(a) === n), Nu = (n) => (a) => typeof a === n, { isArray: mi } = Array, ui = Nu("undefined");
function Dl(n) {
  return n !== null && !ui(n) && n.constructor !== null && !ui(n.constructor) && Ht(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const xy = xn("ArrayBuffer");
function Zv(n) {
  let a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && xy(n.buffer), a;
}
const Qv = Nu("string"), Ht = Nu("function"), Ty = Nu("number"), Ml = (n) => n !== null && typeof n == "object", Wv = (n) => n === !0 || n === !1, lu = (n) => {
  if (Cu(n) !== "object")
    return !1;
  const a = tf(n);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Ny in n) && !(Su in n);
}, Jv = (n) => {
  if (!Ml(n) || Dl(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, eb = xn("Date"), tb = xn("File"), nb = xn("Blob"), ab = xn("FileList"), rb = (n) => Ml(n) && Ht(n.pipe), ib = (n) => {
  let a;
  return n && (typeof FormData == "function" && n instanceof FormData || Ht(n.append) && ((a = Cu(n)) === "formdata" || // detect form-data instance
  a === "object" && Ht(n.toString) && n.toString() === "[object FormData]"));
}, lb = xn("URLSearchParams"), [ob, ub, sb, cb] = ["ReadableStream", "Request", "Response", "Headers"].map(xn), db = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ll(n, a, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let l, u;
  if (typeof n != "object" && (n = [n]), mi(n))
    for (l = 0, u = n.length; l < u; l++)
      a.call(null, n[l], l, n);
  else {
    if (Dl(n))
      return;
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n), f = c.length;
    let h;
    for (l = 0; l < f; l++)
      h = c[l], a.call(null, n[h], h, n);
  }
}
function Oy(n, a) {
  if (Dl(n))
    return null;
  a = a.toLowerCase();
  const r = Object.keys(n);
  let l = r.length, u;
  for (; l-- > 0; )
    if (u = r[l], a === u.toLowerCase())
      return u;
  return null;
}
const rr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ay = (n) => !ui(n) && n !== rr;
function Ed() {
  const { caseless: n, skipUndefined: a } = Ay(this) && this || {}, r = {}, l = (u, c) => {
    const f = n && Oy(r, c) || c;
    lu(r[f]) && lu(u) ? r[f] = Ed(r[f], u) : lu(u) ? r[f] = Ed({}, u) : mi(u) ? r[f] = u.slice() : (!a || !ui(u)) && (r[f] = u);
  };
  for (let u = 0, c = arguments.length; u < c; u++)
    arguments[u] && Ll(arguments[u], l);
  return r;
}
const fb = (n, a, r, { allOwnKeys: l } = {}) => (Ll(a, (u, c) => {
  r && Ht(u) ? n[c] = Cy(u, r) : n[c] = u;
}, { allOwnKeys: l }), n), mb = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), hb = (n, a, r, l) => {
  n.prototype = Object.create(a.prototype, l), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: a.prototype
  }), r && Object.assign(n.prototype, r);
}, gb = (n, a, r, l) => {
  let u, c, f;
  const h = {};
  if (a = a || {}, n == null) return a;
  do {
    for (u = Object.getOwnPropertyNames(n), c = u.length; c-- > 0; )
      f = u[c], (!l || l(f, n, a)) && !h[f] && (a[f] = n[f], h[f] = !0);
    n = r !== !1 && tf(n);
  } while (n && (!r || r(n, a)) && n !== Object.prototype);
  return a;
}, yb = (n, a, r) => {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= a.length;
  const l = n.indexOf(a, r);
  return l !== -1 && l === r;
}, pb = (n) => {
  if (!n) return null;
  if (mi(n)) return n;
  let a = n.length;
  if (!Ty(a)) return null;
  const r = new Array(a);
  for (; a-- > 0; )
    r[a] = n[a];
  return r;
}, vb = /* @__PURE__ */ ((n) => (a) => n && a instanceof n)(typeof Uint8Array < "u" && tf(Uint8Array)), bb = (n, a) => {
  const l = (n && n[Su]).call(n);
  let u;
  for (; (u = l.next()) && !u.done; ) {
    const c = u.value;
    a.call(n, c[0], c[1]);
  }
}, $b = (n, a) => {
  let r;
  const l = [];
  for (; (r = n.exec(a)) !== null; )
    l.push(r);
  return l;
}, wb = xn("HTMLFormElement"), Eb = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, l, u) {
    return l.toUpperCase() + u;
  }
), Rh = (({ hasOwnProperty: n }) => (a, r) => n.call(a, r))(Object.prototype), Sb = xn("RegExp"), Ry = (n, a) => {
  const r = Object.getOwnPropertyDescriptors(n), l = {};
  Ll(r, (u, c) => {
    let f;
    (f = a(u, c, n)) !== !1 && (l[c] = f || u);
  }), Object.defineProperties(n, l);
}, Cb = (n) => {
  Ry(n, (a, r) => {
    if (Ht(n) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const l = n[r];
    if (Ht(l)) {
      if (a.enumerable = !1, "writable" in a) {
        a.writable = !1;
        return;
      }
      a.set || (a.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Nb = (n, a) => {
  const r = {}, l = (u) => {
    u.forEach((c) => {
      r[c] = !0;
    });
  };
  return mi(n) ? l(n) : l(String(n).split(a)), r;
}, xb = () => {
}, Tb = (n, a) => n != null && Number.isFinite(n = +n) ? n : a;
function Ob(n) {
  return !!(n && Ht(n.append) && n[Ny] === "FormData" && n[Su]);
}
const Ab = (n) => {
  const a = new Array(10), r = (l, u) => {
    if (Ml(l)) {
      if (a.indexOf(l) >= 0)
        return;
      if (Dl(l))
        return l;
      if (!("toJSON" in l)) {
        a[u] = l;
        const c = mi(l) ? [] : {};
        return Ll(l, (f, h) => {
          const p = r(f, u + 1);
          !ui(p) && (c[h] = p);
        }), a[u] = void 0, c;
      }
    }
    return l;
  };
  return r(n, 0);
}, Rb = xn("AsyncFunction"), _b = (n) => n && (Ml(n) || Ht(n)) && Ht(n.then) && Ht(n.catch), _y = ((n, a) => n ? setImmediate : a ? ((r, l) => (rr.addEventListener("message", ({ source: u, data: c }) => {
  u === rr && c === r && l.length && l.shift()();
}, !1), (u) => {
  l.push(u), rr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ht(rr.postMessage)
), jb = typeof queueMicrotask < "u" ? queueMicrotask.bind(rr) : typeof Ah < "u" && Ah.nextTick || _y, Db = (n) => n != null && Ht(n[Su]), L = {
  isArray: mi,
  isArrayBuffer: xy,
  isBuffer: Dl,
  isFormData: ib,
  isArrayBufferView: Zv,
  isString: Qv,
  isNumber: Ty,
  isBoolean: Wv,
  isObject: Ml,
  isPlainObject: lu,
  isEmptyObject: Jv,
  isReadableStream: ob,
  isRequest: ub,
  isResponse: sb,
  isHeaders: cb,
  isUndefined: ui,
  isDate: eb,
  isFile: tb,
  isBlob: nb,
  isRegExp: Sb,
  isFunction: Ht,
  isStream: rb,
  isURLSearchParams: lb,
  isTypedArray: vb,
  isFileList: ab,
  forEach: Ll,
  merge: Ed,
  extend: fb,
  trim: db,
  stripBOM: mb,
  inherits: hb,
  toFlatObject: gb,
  kindOf: Cu,
  kindOfTest: xn,
  endsWith: yb,
  toArray: pb,
  forEachEntry: bb,
  matchAll: $b,
  isHTMLForm: wb,
  hasOwnProperty: Rh,
  hasOwnProp: Rh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ry,
  freezeMethods: Cb,
  toObjectSet: Nb,
  toCamelCase: Eb,
  noop: xb,
  toFiniteNumber: Tb,
  findKey: Oy,
  global: rr,
  isContextDefined: Ay,
  isSpecCompliantForm: Ob,
  toJSONObject: Ab,
  isAsyncFn: Rb,
  isThenable: _b,
  setImmediate: _y,
  asap: jb,
  isIterable: Db
};
function ge(n, a, r, l, u) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", a && (this.code = a), r && (this.config = r), l && (this.request = l), u && (this.response = u, this.status = u.status ? u.status : null);
}
L.inherits(ge, Error, {
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
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const jy = ge.prototype, Dy = {};
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
  Dy[n] = { value: n };
});
Object.defineProperties(ge, Dy);
Object.defineProperty(jy, "isAxiosError", { value: !0 });
ge.from = (n, a, r, l, u, c) => {
  const f = Object.create(jy);
  L.toFlatObject(n, f, function(b) {
    return b !== Error.prototype;
  }, (g) => g !== "isAxiosError");
  const h = n && n.message ? n.message : "Error", p = a == null && n ? n.code : a;
  return ge.call(f, h, p, r, l, u), n && f.cause == null && Object.defineProperty(f, "cause", { value: n, configurable: !0 }), f.name = n && n.name || "Error", c && Object.assign(f, c), f;
};
const Mb = null;
function Sd(n) {
  return L.isPlainObject(n) || L.isArray(n);
}
function My(n) {
  return L.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function _h(n, a, r) {
  return n ? n.concat(a).map(function(u, c) {
    return u = My(u), !r && c ? "[" + u + "]" : u;
  }).join(r ? "." : "") : a;
}
function Lb(n) {
  return L.isArray(n) && !n.some(Sd);
}
const Ub = L.toFlatObject(L, {}, null, function(a) {
  return /^is[A-Z]/.test(a);
});
function xu(n, a, r) {
  if (!L.isObject(n))
    throw new TypeError("target must be an object");
  a = a || new FormData(), r = L.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(A, C) {
    return !L.isUndefined(C[A]);
  });
  const l = r.metaTokens, u = r.visitor || b, c = r.dots, f = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(a);
  if (!L.isFunction(u))
    throw new TypeError("visitor must be a function");
  function g(E) {
    if (E === null) return "";
    if (L.isDate(E))
      return E.toISOString();
    if (L.isBoolean(E))
      return E.toString();
    if (!p && L.isBlob(E))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(E) || L.isTypedArray(E) ? p && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function b(E, A, C) {
    let M = E;
    if (E && !C && typeof E == "object") {
      if (L.endsWith(A, "{}"))
        A = l ? A : A.slice(0, -2), E = JSON.stringify(E);
      else if (L.isArray(E) && Lb(E) || (L.isFileList(E) || L.endsWith(A, "[]")) && (M = L.toArray(E)))
        return A = My(A), M.forEach(function(q, Z) {
          !(L.isUndefined(q) || q === null) && a.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? _h([A], Z, c) : f === null ? A : A + "[]",
            g(q)
          );
        }), !1;
    }
    return Sd(E) ? !0 : (a.append(_h(C, A, c), g(E)), !1);
  }
  const $ = [], N = Object.assign(Ub, {
    defaultVisitor: b,
    convertValue: g,
    isVisitable: Sd
  });
  function _(E, A) {
    if (!L.isUndefined(E)) {
      if ($.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + A.join("."));
      $.push(E), L.forEach(E, function(M, H) {
        (!(L.isUndefined(M) || M === null) && u.call(
          a,
          M,
          L.isString(H) ? H.trim() : H,
          A,
          N
        )) === !0 && _(M, A ? A.concat(H) : [H]);
      }), $.pop();
    }
  }
  if (!L.isObject(n))
    throw new TypeError("data must be an object");
  return _(n), a;
}
function jh(n) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(l) {
    return a[l];
  });
}
function nf(n, a) {
  this._pairs = [], n && xu(n, this, a);
}
const Ly = nf.prototype;
Ly.append = function(a, r) {
  this._pairs.push([a, r]);
};
Ly.toString = function(a) {
  const r = a ? function(l) {
    return a.call(this, l, jh);
  } : jh;
  return this._pairs.map(function(u) {
    return r(u[0]) + "=" + r(u[1]);
  }, "").join("&");
};
function Pb(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Uy(n, a, r) {
  if (!a)
    return n;
  const l = r && r.encode || Pb;
  L.isFunction(r) && (r = {
    serialize: r
  });
  const u = r && r.serialize;
  let c;
  if (u ? c = u(a, r) : c = L.isURLSearchParams(a) ? a.toString() : new nf(a, r).toString(l), c) {
    const f = n.indexOf("#");
    f !== -1 && (n = n.slice(0, f)), n += (n.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return n;
}
class Dh {
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
  use(a, r, l) {
    return this.handlers.push({
      fulfilled: a,
      rejected: r,
      synchronous: l ? l.synchronous : !1,
      runWhen: l ? l.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
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
  forEach(a) {
    L.forEach(this.handlers, function(l) {
      l !== null && a(l);
    });
  }
}
const Py = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kb = typeof URLSearchParams < "u" ? URLSearchParams : nf, Ib = typeof FormData < "u" ? FormData : null, Bb = typeof Blob < "u" ? Blob : null, Hb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kb,
    FormData: Ib,
    Blob: Bb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, af = typeof window < "u" && typeof document < "u", Cd = typeof navigator == "object" && navigator || void 0, zb = af && (!Cd || ["ReactNative", "NativeScript", "NS"].indexOf(Cd.product) < 0), Fb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gb = af && window.location.href || "http://localhost", qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: af,
  hasStandardBrowserEnv: zb,
  hasStandardBrowserWebWorkerEnv: Fb,
  navigator: Cd,
  origin: Gb
}, Symbol.toStringTag, { value: "Module" })), Ct = {
  ...qb,
  ...Hb
};
function Kb(n, a) {
  return xu(n, new Ct.classes.URLSearchParams(), {
    visitor: function(r, l, u, c) {
      return Ct.isNode && L.isBuffer(r) ? (this.append(l, r.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    },
    ...a
  });
}
function Vb(n) {
  return L.matchAll(/\w+|\[(\w*)]/g, n).map((a) => a[0] === "[]" ? "" : a[1] || a[0]);
}
function Yb(n) {
  const a = {}, r = Object.keys(n);
  let l;
  const u = r.length;
  let c;
  for (l = 0; l < u; l++)
    c = r[l], a[c] = n[c];
  return a;
}
function ky(n) {
  function a(r, l, u, c) {
    let f = r[c++];
    if (f === "__proto__") return !0;
    const h = Number.isFinite(+f), p = c >= r.length;
    return f = !f && L.isArray(u) ? u.length : f, p ? (L.hasOwnProp(u, f) ? u[f] = [u[f], l] : u[f] = l, !h) : ((!u[f] || !L.isObject(u[f])) && (u[f] = []), a(r, l, u[f], c) && L.isArray(u[f]) && (u[f] = Yb(u[f])), !h);
  }
  if (L.isFormData(n) && L.isFunction(n.entries)) {
    const r = {};
    return L.forEachEntry(n, (l, u) => {
      a(Vb(l), u, r, 0);
    }), r;
  }
  return null;
}
function Xb(n, a, r) {
  if (L.isString(n))
    try {
      return (a || JSON.parse)(n), L.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (r || JSON.stringify)(n);
}
const Ul = {
  transitional: Py,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(a, r) {
    const l = r.getContentType() || "", u = l.indexOf("application/json") > -1, c = L.isObject(a);
    if (c && L.isHTMLForm(a) && (a = new FormData(a)), L.isFormData(a))
      return u ? JSON.stringify(ky(a)) : a;
    if (L.isArrayBuffer(a) || L.isBuffer(a) || L.isStream(a) || L.isFile(a) || L.isBlob(a) || L.isReadableStream(a))
      return a;
    if (L.isArrayBufferView(a))
      return a.buffer;
    if (L.isURLSearchParams(a))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
    let h;
    if (c) {
      if (l.indexOf("application/x-www-form-urlencoded") > -1)
        return Kb(a, this.formSerializer).toString();
      if ((h = L.isFileList(a)) || l.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return xu(
          h ? { "files[]": a } : a,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return c || u ? (r.setContentType("application/json", !1), Xb(a)) : a;
  }],
  transformResponse: [function(a) {
    const r = this.transitional || Ul.transitional, l = r && r.forcedJSONParsing, u = this.responseType === "json";
    if (L.isResponse(a) || L.isReadableStream(a))
      return a;
    if (a && L.isString(a) && (l && !this.responseType || u)) {
      const f = !(r && r.silentJSONParsing) && u;
      try {
        return JSON.parse(a, this.parseReviver);
      } catch (h) {
        if (f)
          throw h.name === "SyntaxError" ? ge.from(h, ge.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return a;
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
    FormData: Ct.classes.FormData,
    Blob: Ct.classes.Blob
  },
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ul.headers[n] = {};
});
const Zb = L.toObjectSet([
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
]), Qb = (n) => {
  const a = {};
  let r, l, u;
  return n && n.split(`
`).forEach(function(f) {
    u = f.indexOf(":"), r = f.substring(0, u).trim().toLowerCase(), l = f.substring(u + 1).trim(), !(!r || a[r] && Zb[r]) && (r === "set-cookie" ? a[r] ? a[r].push(l) : a[r] = [l] : a[r] = a[r] ? a[r] + ", " + l : l);
  }), a;
}, Mh = /* @__PURE__ */ Symbol("internals");
function dl(n) {
  return n && String(n).trim().toLowerCase();
}
function ou(n) {
  return n === !1 || n == null ? n : L.isArray(n) ? n.map(ou) : String(n);
}
function Wb(n) {
  const a = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = r.exec(n); )
    a[l[1]] = l[2];
  return a;
}
const Jb = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function od(n, a, r, l, u) {
  if (L.isFunction(l))
    return l.call(this, a, r);
  if (u && (a = r), !!L.isString(a)) {
    if (L.isString(l))
      return a.indexOf(l) !== -1;
    if (L.isRegExp(l))
      return l.test(a);
  }
}
function e8(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, r, l) => r.toUpperCase() + l);
}
function t8(n, a) {
  const r = L.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(n, l + r, {
      value: function(u, c, f) {
        return this[l].call(this, a, u, c, f);
      },
      configurable: !0
    });
  });
}
let zt = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, r, l) {
    const u = this;
    function c(h, p, g) {
      const b = dl(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const $ = L.findKey(u, b);
      (!$ || u[$] === void 0 || g === !0 || g === void 0 && u[$] !== !1) && (u[$ || p] = ou(h));
    }
    const f = (h, p) => L.forEach(h, (g, b) => c(g, b, p));
    if (L.isPlainObject(a) || a instanceof this.constructor)
      f(a, r);
    else if (L.isString(a) && (a = a.trim()) && !Jb(a))
      f(Qb(a), r);
    else if (L.isObject(a) && L.isIterable(a)) {
      let h = {}, p, g;
      for (const b of a) {
        if (!L.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        h[g = b[0]] = (p = h[g]) ? L.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      f(h, r);
    } else
      a != null && c(r, a, l);
    return this;
  }
  get(a, r) {
    if (a = dl(a), a) {
      const l = L.findKey(this, a);
      if (l) {
        const u = this[l];
        if (!r)
          return u;
        if (r === !0)
          return Wb(u);
        if (L.isFunction(r))
          return r.call(this, u, l);
        if (L.isRegExp(r))
          return r.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, r) {
    if (a = dl(a), a) {
      const l = L.findKey(this, a);
      return !!(l && this[l] !== void 0 && (!r || od(this, this[l], l, r)));
    }
    return !1;
  }
  delete(a, r) {
    const l = this;
    let u = !1;
    function c(f) {
      if (f = dl(f), f) {
        const h = L.findKey(l, f);
        h && (!r || od(l, l[h], h, r)) && (delete l[h], u = !0);
      }
    }
    return L.isArray(a) ? a.forEach(c) : c(a), u;
  }
  clear(a) {
    const r = Object.keys(this);
    let l = r.length, u = !1;
    for (; l--; ) {
      const c = r[l];
      (!a || od(this, this[c], c, a, !0)) && (delete this[c], u = !0);
    }
    return u;
  }
  normalize(a) {
    const r = this, l = {};
    return L.forEach(this, (u, c) => {
      const f = L.findKey(l, c);
      if (f) {
        r[f] = ou(u), delete r[c];
        return;
      }
      const h = a ? e8(c) : String(c).trim();
      h !== c && delete r[c], r[h] = ou(u), l[h] = !0;
    }), this;
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const r = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (l, u) => {
      l != null && l !== !1 && (r[u] = a && L.isArray(l) ? l.join(", ") : l);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, r]) => a + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...r) {
    const l = new this(a);
    return r.forEach((u) => l.set(u)), l;
  }
  static accessor(a) {
    const l = (this[Mh] = this[Mh] = {
      accessors: {}
    }).accessors, u = this.prototype;
    function c(f) {
      const h = dl(f);
      l[h] || (t8(u, f), l[h] = !0);
    }
    return L.isArray(a) ? a.forEach(c) : c(a), this;
  }
};
zt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(zt.prototype, ({ value: n }, a) => {
  let r = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => n,
    set(l) {
      this[r] = l;
    }
  };
});
L.freezeMethods(zt);
function ud(n, a) {
  const r = this || Ul, l = a || r, u = zt.from(l.headers);
  let c = l.data;
  return L.forEach(n, function(h) {
    c = h.call(r, c, u.normalize(), a ? a.status : void 0);
  }), u.normalize(), c;
}
function Iy(n) {
  return !!(n && n.__CANCEL__);
}
function hi(n, a, r) {
  ge.call(this, n ?? "canceled", ge.ERR_CANCELED, a, r), this.name = "CanceledError";
}
L.inherits(hi, ge, {
  __CANCEL__: !0
});
function By(n, a, r) {
  const l = r.config.validateStatus;
  !r.status || !l || l(r.status) ? n(r) : a(new ge(
    "Request failed with status code " + r.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function n8(n) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return a && a[1] || "";
}
function a8(n, a) {
  n = n || 10;
  const r = new Array(n), l = new Array(n);
  let u = 0, c = 0, f;
  return a = a !== void 0 ? a : 1e3, function(p) {
    const g = Date.now(), b = l[c];
    f || (f = g), r[u] = p, l[u] = g;
    let $ = c, N = 0;
    for (; $ !== u; )
      N += r[$++], $ = $ % n;
    if (u = (u + 1) % n, u === c && (c = (c + 1) % n), g - f < a)
      return;
    const _ = b && g - b;
    return _ ? Math.round(N * 1e3 / _) : void 0;
  };
}
function r8(n, a) {
  let r = 0, l = 1e3 / a, u, c;
  const f = (g, b = Date.now()) => {
    r = b, u = null, c && (clearTimeout(c), c = null), n(...g);
  };
  return [(...g) => {
    const b = Date.now(), $ = b - r;
    $ >= l ? f(g, b) : (u = g, c || (c = setTimeout(() => {
      c = null, f(u);
    }, l - $)));
  }, () => u && f(u)];
}
const fu = (n, a, r = 3) => {
  let l = 0;
  const u = a8(50, 250);
  return r8((c) => {
    const f = c.loaded, h = c.lengthComputable ? c.total : void 0, p = f - l, g = u(p), b = f <= h;
    l = f;
    const $ = {
      loaded: f,
      total: h,
      progress: h ? f / h : void 0,
      bytes: p,
      rate: g || void 0,
      estimated: g && h && b ? (h - f) / g : void 0,
      event: c,
      lengthComputable: h != null,
      [a ? "download" : "upload"]: !0
    };
    n($);
  }, r);
}, Lh = (n, a) => {
  const r = n != null;
  return [(l) => a[0]({
    lengthComputable: r,
    total: n,
    loaded: l
  }), a[1]];
}, Uh = (n) => (...a) => L.asap(() => n(...a)), i8 = Ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, a) => (r) => (r = new URL(r, Ct.origin), n.protocol === r.protocol && n.host === r.host && (a || n.port === r.port)))(
  new URL(Ct.origin),
  Ct.navigator && /(msie|trident)/i.test(Ct.navigator.userAgent)
) : () => !0, l8 = Ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, a, r, l, u, c, f) {
      if (typeof document > "u") return;
      const h = [`${n}=${encodeURIComponent(a)}`];
      L.isNumber(r) && h.push(`expires=${new Date(r).toUTCString()}`), L.isString(l) && h.push(`path=${l}`), L.isString(u) && h.push(`domain=${u}`), c === !0 && h.push("secure"), L.isString(f) && h.push(`SameSite=${f}`), document.cookie = h.join("; ");
    },
    read(n) {
      if (typeof document > "u") return null;
      const a = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
      return a ? decodeURIComponent(a[1]) : null;
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
function o8(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function u8(n, a) {
  return a ? n.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : n;
}
function Hy(n, a, r) {
  let l = !o8(a);
  return n && (l || r == !1) ? u8(n, a) : a;
}
const Ph = (n) => n instanceof zt ? { ...n } : n;
function or(n, a) {
  a = a || {};
  const r = {};
  function l(g, b, $, N) {
    return L.isPlainObject(g) && L.isPlainObject(b) ? L.merge.call({ caseless: N }, g, b) : L.isPlainObject(b) ? L.merge({}, b) : L.isArray(b) ? b.slice() : b;
  }
  function u(g, b, $, N) {
    if (L.isUndefined(b)) {
      if (!L.isUndefined(g))
        return l(void 0, g, $, N);
    } else return l(g, b, $, N);
  }
  function c(g, b) {
    if (!L.isUndefined(b))
      return l(void 0, b);
  }
  function f(g, b) {
    if (L.isUndefined(b)) {
      if (!L.isUndefined(g))
        return l(void 0, g);
    } else return l(void 0, b);
  }
  function h(g, b, $) {
    if ($ in a)
      return l(g, b);
    if ($ in n)
      return l(void 0, g);
  }
  const p = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: h,
    headers: (g, b, $) => u(Ph(g), Ph(b), $, !0)
  };
  return L.forEach(Object.keys({ ...n, ...a }), function(b) {
    const $ = p[b] || u, N = $(n[b], a[b], b);
    L.isUndefined(N) && $ !== h || (r[b] = N);
  }), r;
}
const zy = (n) => {
  const a = or({}, n);
  let { data: r, withXSRFToken: l, xsrfHeaderName: u, xsrfCookieName: c, headers: f, auth: h } = a;
  if (a.headers = f = zt.from(f), a.url = Uy(Hy(a.baseURL, a.url, a.allowAbsoluteUrls), n.params, n.paramsSerializer), h && f.set(
    "Authorization",
    "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))
  ), L.isFormData(r)) {
    if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if (L.isFunction(r.getHeaders)) {
      const p = r.getHeaders(), g = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, $]) => {
        g.includes(b.toLowerCase()) && f.set(b, $);
      });
    }
  }
  if (Ct.hasStandardBrowserEnv && (l && L.isFunction(l) && (l = l(a)), l || l !== !1 && i8(a.url))) {
    const p = u && c && l8.read(c);
    p && f.set(u, p);
  }
  return a;
}, s8 = typeof XMLHttpRequest < "u", c8 = s8 && function(n) {
  return new Promise(function(r, l) {
    const u = zy(n);
    let c = u.data;
    const f = zt.from(u.headers).normalize();
    let { responseType: h, onUploadProgress: p, onDownloadProgress: g } = u, b, $, N, _, E;
    function A() {
      _ && _(), E && E(), u.cancelToken && u.cancelToken.unsubscribe(b), u.signal && u.signal.removeEventListener("abort", b);
    }
    let C = new XMLHttpRequest();
    C.open(u.method.toUpperCase(), u.url, !0), C.timeout = u.timeout;
    function M() {
      if (!C)
        return;
      const q = zt.from(
        "getAllResponseHeaders" in C && C.getAllResponseHeaders()
      ), V = {
        data: !h || h === "text" || h === "json" ? C.responseText : C.response,
        status: C.status,
        statusText: C.statusText,
        headers: q,
        config: n,
        request: C
      };
      By(function(W) {
        r(W), A();
      }, function(W) {
        l(W), A();
      }, V), C = null;
    }
    "onloadend" in C ? C.onloadend = M : C.onreadystatechange = function() {
      !C || C.readyState !== 4 || C.status === 0 && !(C.responseURL && C.responseURL.indexOf("file:") === 0) || setTimeout(M);
    }, C.onabort = function() {
      C && (l(new ge("Request aborted", ge.ECONNABORTED, n, C)), C = null);
    }, C.onerror = function(Z) {
      const V = Z && Z.message ? Z.message : "Network Error", ee = new ge(V, ge.ERR_NETWORK, n, C);
      ee.event = Z || null, l(ee), C = null;
    }, C.ontimeout = function() {
      let Z = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
      const V = u.transitional || Py;
      u.timeoutErrorMessage && (Z = u.timeoutErrorMessage), l(new ge(
        Z,
        V.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        n,
        C
      )), C = null;
    }, c === void 0 && f.setContentType(null), "setRequestHeader" in C && L.forEach(f.toJSON(), function(Z, V) {
      C.setRequestHeader(V, Z);
    }), L.isUndefined(u.withCredentials) || (C.withCredentials = !!u.withCredentials), h && h !== "json" && (C.responseType = u.responseType), g && ([N, E] = fu(g, !0), C.addEventListener("progress", N)), p && C.upload && ([$, _] = fu(p), C.upload.addEventListener("progress", $), C.upload.addEventListener("loadend", _)), (u.cancelToken || u.signal) && (b = (q) => {
      C && (l(!q || q.type ? new hi(null, n, C) : q), C.abort(), C = null);
    }, u.cancelToken && u.cancelToken.subscribe(b), u.signal && (u.signal.aborted ? b() : u.signal.addEventListener("abort", b)));
    const H = n8(u.url);
    if (H && Ct.protocols.indexOf(H) === -1) {
      l(new ge("Unsupported protocol " + H + ":", ge.ERR_BAD_REQUEST, n));
      return;
    }
    C.send(c || null);
  });
}, d8 = (n, a) => {
  const { length: r } = n = n ? n.filter(Boolean) : [];
  if (a || r) {
    let l = new AbortController(), u;
    const c = function(g) {
      if (!u) {
        u = !0, h();
        const b = g instanceof Error ? g : this.reason;
        l.abort(b instanceof ge ? b : new hi(b instanceof Error ? b.message : b));
      }
    };
    let f = a && setTimeout(() => {
      f = null, c(new ge(`timeout ${a} of ms exceeded`, ge.ETIMEDOUT));
    }, a);
    const h = () => {
      n && (f && clearTimeout(f), f = null, n.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(c) : g.removeEventListener("abort", c);
      }), n = null);
    };
    n.forEach((g) => g.addEventListener("abort", c));
    const { signal: p } = l;
    return p.unsubscribe = () => L.asap(h), p;
  }
}, f8 = function* (n, a) {
  let r = n.byteLength;
  if (r < a) {
    yield n;
    return;
  }
  let l = 0, u;
  for (; l < r; )
    u = l + a, yield n.slice(l, u), l = u;
}, m8 = async function* (n, a) {
  for await (const r of h8(n))
    yield* f8(r, a);
}, h8 = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const a = n.getReader();
  try {
    for (; ; ) {
      const { done: r, value: l } = await a.read();
      if (r)
        break;
      yield l;
    }
  } finally {
    await a.cancel();
  }
}, kh = (n, a, r, l) => {
  const u = m8(n, a);
  let c = 0, f, h = (p) => {
    f || (f = !0, l && l(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: g, value: b } = await u.next();
        if (g) {
          h(), p.close();
          return;
        }
        let $ = b.byteLength;
        if (r) {
          let N = c += $;
          r(N);
        }
        p.enqueue(new Uint8Array(b));
      } catch (g) {
        throw h(g), g;
      }
    },
    cancel(p) {
      return h(p), u.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ih = 64 * 1024, { isFunction: tu } = L, g8 = (({ Request: n, Response: a }) => ({
  Request: n,
  Response: a
}))(L.global), {
  ReadableStream: Bh,
  TextEncoder: Hh
} = L.global, zh = (n, ...a) => {
  try {
    return !!n(...a);
  } catch {
    return !1;
  }
}, y8 = (n) => {
  n = L.merge.call({
    skipUndefined: !0
  }, g8, n);
  const { fetch: a, Request: r, Response: l } = n, u = a ? tu(a) : typeof fetch == "function", c = tu(r), f = tu(l);
  if (!u)
    return !1;
  const h = u && tu(Bh), p = u && (typeof Hh == "function" ? /* @__PURE__ */ ((E) => (A) => E.encode(A))(new Hh()) : async (E) => new Uint8Array(await new r(E).arrayBuffer())), g = c && h && zh(() => {
    let E = !1;
    const A = new r(Ct.origin, {
      body: new Bh(),
      method: "POST",
      get duplex() {
        return E = !0, "half";
      }
    }).headers.has("Content-Type");
    return E && !A;
  }), b = f && h && zh(() => L.isReadableStream(new l("").body)), $ = {
    stream: b && ((E) => E.body)
  };
  u && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((E) => {
    !$[E] && ($[E] = (A, C) => {
      let M = A && A[E];
      if (M)
        return M.call(A);
      throw new ge(`Response type '${E}' is not supported`, ge.ERR_NOT_SUPPORT, C);
    });
  });
  const N = async (E) => {
    if (E == null)
      return 0;
    if (L.isBlob(E))
      return E.size;
    if (L.isSpecCompliantForm(E))
      return (await new r(Ct.origin, {
        method: "POST",
        body: E
      }).arrayBuffer()).byteLength;
    if (L.isArrayBufferView(E) || L.isArrayBuffer(E))
      return E.byteLength;
    if (L.isURLSearchParams(E) && (E = E + ""), L.isString(E))
      return (await p(E)).byteLength;
  }, _ = async (E, A) => {
    const C = L.toFiniteNumber(E.getContentLength());
    return C ?? N(A);
  };
  return async (E) => {
    let {
      url: A,
      method: C,
      data: M,
      signal: H,
      cancelToken: q,
      timeout: Z,
      onDownloadProgress: V,
      onUploadProgress: ee,
      responseType: W,
      headers: X,
      withCredentials: ae = "same-origin",
      fetchOptions: se
    } = zy(E), Pe = a || fetch;
    W = W ? (W + "").toLowerCase() : "text";
    let ve = d8([H, q && q.toAbortSignal()], Z), _e = null;
    const ke = ve && ve.unsubscribe && (() => {
      ve.unsubscribe();
    });
    let qe;
    try {
      if (ee && g && C !== "get" && C !== "head" && (qe = await _(X, M)) !== 0) {
        let Ae = new r(A, {
          method: "POST",
          body: M,
          duplex: "half"
        }), x;
        if (L.isFormData(M) && (x = Ae.headers.get("content-type")) && X.setContentType(x), Ae.body) {
          const [B, Y] = Lh(
            qe,
            fu(Uh(ee))
          );
          M = kh(Ae.body, Ih, B, Y);
        }
      }
      L.isString(ae) || (ae = ae ? "include" : "omit");
      const P = c && "credentials" in r.prototype, k = {
        ...se,
        signal: ve,
        method: C.toUpperCase(),
        headers: X.normalize().toJSON(),
        body: M,
        duplex: "half",
        credentials: P ? ae : void 0
      };
      _e = c && new r(A, k);
      let G = await (c ? Pe(_e, se) : Pe(A, k));
      const fe = b && (W === "stream" || W === "response");
      if (b && (V || fe && ke)) {
        const Ae = {};
        ["status", "statusText", "headers"].forEach((Q) => {
          Ae[Q] = G[Q];
        });
        const x = L.toFiniteNumber(G.headers.get("content-length")), [B, Y] = V && Lh(
          x,
          fu(Uh(V), !0)
        ) || [];
        G = new l(
          kh(G.body, Ih, B, () => {
            Y && Y(), ke && ke();
          }),
          Ae
        );
      }
      W = W || "text";
      let Oe = await $[L.findKey($, W) || "text"](G, E);
      return !fe && ke && ke(), await new Promise((Ae, x) => {
        By(Ae, x, {
          data: Oe,
          headers: zt.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: E,
          request: _e
        });
      });
    } catch (P) {
      throw ke && ke(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new ge("Network Error", ge.ERR_NETWORK, E, _e),
        {
          cause: P.cause || P
        }
      ) : ge.from(P, P && P.code, E, _e);
    }
  };
}, p8 = /* @__PURE__ */ new Map(), Fy = (n) => {
  let a = n && n.env || {};
  const { fetch: r, Request: l, Response: u } = a, c = [
    l,
    u,
    r
  ];
  let f = c.length, h = f, p, g, b = p8;
  for (; h--; )
    p = c[h], g = b.get(p), g === void 0 && b.set(p, g = h ? /* @__PURE__ */ new Map() : y8(a)), b = g;
  return g;
};
Fy();
const rf = {
  http: Mb,
  xhr: c8,
  fetch: {
    get: Fy
  }
};
L.forEach(rf, (n, a) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: a });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: a });
  }
});
const Fh = (n) => `- ${n}`, v8 = (n) => L.isFunction(n) || n === null || n === !1;
function b8(n, a) {
  n = L.isArray(n) ? n : [n];
  const { length: r } = n;
  let l, u;
  const c = {};
  for (let f = 0; f < r; f++) {
    l = n[f];
    let h;
    if (u = l, !v8(l) && (u = rf[(h = String(l)).toLowerCase()], u === void 0))
      throw new ge(`Unknown adapter '${h}'`);
    if (u && (L.isFunction(u) || (u = u.get(a))))
      break;
    c[h || "#" + f] = u;
  }
  if (!u) {
    const f = Object.entries(c).map(
      ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let h = r ? f.length > 1 ? `since :
` + f.map(Fh).join(`
`) : " " + Fh(f[0]) : "as no adapter specified";
    throw new ge(
      "There is no suitable adapter to dispatch the request " + h,
      "ERR_NOT_SUPPORT"
    );
  }
  return u;
}
const Gy = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: b8,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: rf
};
function sd(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new hi(null, n);
}
function Gh(n) {
  return sd(n), n.headers = zt.from(n.headers), n.data = ud.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Gy.getAdapter(n.adapter || Ul.adapter, n)(n).then(function(l) {
    return sd(n), l.data = ud.call(
      n,
      n.transformResponse,
      l
    ), l.headers = zt.from(l.headers), l;
  }, function(l) {
    return Iy(l) || (sd(n), l && l.response && (l.response.data = ud.call(
      n,
      n.transformResponse,
      l.response
    ), l.response.headers = zt.from(l.response.headers))), Promise.reject(l);
  });
}
const qy = "1.13.2", Tu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, a) => {
  Tu[n] = function(l) {
    return typeof l === n || "a" + (a < 1 ? "n " : " ") + n;
  };
});
const qh = {};
Tu.transitional = function(a, r, l) {
  function u(c, f) {
    return "[Axios v" + qy + "] Transitional option '" + c + "'" + f + (l ? ". " + l : "");
  }
  return (c, f, h) => {
    if (a === !1)
      throw new ge(
        u(f, " has been removed" + (r ? " in " + r : "")),
        ge.ERR_DEPRECATED
      );
    return r && !qh[f] && (qh[f] = !0, console.warn(
      u(
        f,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), a ? a(c, f, h) : !0;
  };
};
Tu.spelling = function(a) {
  return (r, l) => (console.warn(`${l} is likely a misspelling of ${a}`), !0);
};
function $8(n, a, r) {
  if (typeof n != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let u = l.length;
  for (; u-- > 0; ) {
    const c = l[u], f = a[c];
    if (f) {
      const h = n[c], p = h === void 0 || f(h, c, n);
      if (p !== !0)
        throw new ge("option " + c + " must be " + p, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ge("Unknown option " + c, ge.ERR_BAD_OPTION);
  }
}
const uu = {
  assertOptions: $8,
  validators: Tu
}, Mn = uu.validators;
let ir = class {
  constructor(a) {
    this.defaults = a || {}, this.interceptors = {
      request: new Dh(),
      response: new Dh()
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
  async request(a, r) {
    try {
      return await this._request(a, r);
    } catch (l) {
      if (l instanceof Error) {
        let u = {};
        Error.captureStackTrace ? Error.captureStackTrace(u) : u = new Error();
        const c = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack ? c && !String(l.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + c) : l.stack = c;
        } catch {
        }
      }
      throw l;
    }
  }
  _request(a, r) {
    typeof a == "string" ? (r = r || {}, r.url = a) : r = a || {}, r = or(this.defaults, r);
    const { transitional: l, paramsSerializer: u, headers: c } = r;
    l !== void 0 && uu.assertOptions(l, {
      silentJSONParsing: Mn.transitional(Mn.boolean),
      forcedJSONParsing: Mn.transitional(Mn.boolean),
      clarifyTimeoutError: Mn.transitional(Mn.boolean)
    }, !1), u != null && (L.isFunction(u) ? r.paramsSerializer = {
      serialize: u
    } : uu.assertOptions(u, {
      encode: Mn.function,
      serialize: Mn.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), uu.assertOptions(r, {
      baseUrl: Mn.spelling("baseURL"),
      withXsrfToken: Mn.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let f = c && L.merge(
      c.common,
      c[r.method]
    );
    c && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete c[E];
      }
    ), r.headers = zt.concat(f, c);
    const h = [];
    let p = !0;
    this.interceptors.request.forEach(function(A) {
      typeof A.runWhen == "function" && A.runWhen(r) === !1 || (p = p && A.synchronous, h.unshift(A.fulfilled, A.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(A) {
      g.push(A.fulfilled, A.rejected);
    });
    let b, $ = 0, N;
    if (!p) {
      const E = [Gh.bind(this), void 0];
      for (E.unshift(...h), E.push(...g), N = E.length, b = Promise.resolve(r); $ < N; )
        b = b.then(E[$++], E[$++]);
      return b;
    }
    N = h.length;
    let _ = r;
    for (; $ < N; ) {
      const E = h[$++], A = h[$++];
      try {
        _ = E(_);
      } catch (C) {
        A.call(this, C);
        break;
      }
    }
    try {
      b = Gh.call(this, _);
    } catch (E) {
      return Promise.reject(E);
    }
    for ($ = 0, N = g.length; $ < N; )
      b = b.then(g[$++], g[$++]);
    return b;
  }
  getUri(a) {
    a = or(this.defaults, a);
    const r = Hy(a.baseURL, a.url, a.allowAbsoluteUrls);
    return Uy(r, a.params, a.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(a) {
  ir.prototype[a] = function(r, l) {
    return this.request(or(l || {}, {
      method: a,
      url: r,
      data: (l || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(a) {
  function r(l) {
    return function(c, f, h) {
      return this.request(or(h || {}, {
        method: a,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: f
      }));
    };
  }
  ir.prototype[a] = r(), ir.prototype[a + "Form"] = r(!0);
});
let w8 = class Ky {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(c) {
      r = c;
    });
    const l = this;
    this.promise.then((u) => {
      if (!l._listeners) return;
      let c = l._listeners.length;
      for (; c-- > 0; )
        l._listeners[c](u);
      l._listeners = null;
    }), this.promise.then = (u) => {
      let c;
      const f = new Promise((h) => {
        l.subscribe(h), c = h;
      }).then(u);
      return f.cancel = function() {
        l.unsubscribe(c);
      }, f;
    }, a(function(c, f, h) {
      l.reason || (l.reason = new hi(c, f, h), r(l.reason));
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
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(a) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(a);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const a = new AbortController(), r = (l) => {
      a.abort(l);
    };
    return this.subscribe(r), a.signal.unsubscribe = () => this.unsubscribe(r), a.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let a;
    return {
      token: new Ky(function(u) {
        a = u;
      }),
      cancel: a
    };
  }
};
function E8(n) {
  return function(r) {
    return n.apply(null, r);
  };
}
function S8(n) {
  return L.isObject(n) && n.isAxiosError === !0;
}
const Nd = {
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
Object.entries(Nd).forEach(([n, a]) => {
  Nd[a] = n;
});
function Vy(n) {
  const a = new ir(n), r = Cy(ir.prototype.request, a);
  return L.extend(r, ir.prototype, a, { allOwnKeys: !0 }), L.extend(r, a, null, { allOwnKeys: !0 }), r.create = function(u) {
    return Vy(or(n, u));
  }, r;
}
const Le = Vy(Ul);
Le.Axios = ir;
Le.CanceledError = hi;
Le.CancelToken = w8;
Le.isCancel = Iy;
Le.VERSION = qy;
Le.toFormData = xu;
Le.AxiosError = ge;
Le.Cancel = Le.CanceledError;
Le.all = function(a) {
  return Promise.all(a);
};
Le.spread = E8;
Le.isAxiosError = S8;
Le.mergeConfig = or;
Le.AxiosHeaders = zt;
Le.formToJSON = (n) => ky(L.isHTMLForm(n) ? new FormData(n) : n);
Le.getAdapter = Gy.getAdapter;
Le.HttpStatusCode = Nd;
Le.default = Le;
const {
  Axios: Tw,
  AxiosError: Ow,
  CanceledError: Aw,
  isCancel: Rw,
  CancelToken: _w,
  VERSION: jw,
  all: Dw,
  Cancel: Mw,
  isAxiosError: Lw,
  spread: Uw,
  toFormData: Pw,
  AxiosHeaders: kw,
  HttpStatusCode: Iw,
  formToJSON: Bw,
  getAdapter: Hw,
  mergeConfig: zw
} = Le, C8 = [
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
], Yy = "WEBCOMPONENT";
function N8(n) {
  n ? localStorage.setItem(ft.IAM_AUTHORITY_OVERRIDE, n) : localStorage.removeItem(ft.IAM_AUTHORITY_OVERRIDE);
}
function x8() {
  return localStorage.getItem(ft.IAM_AUTHORITY_OVERRIDE);
}
function Kh() {
  localStorage.removeItem(ft.IAM_AUTHORITY_OVERRIDE);
}
function T8() {
  const n = x8();
  if (n && Object.values(mn).includes(n))
    return n;
  const a = window.location.hostname;
  return a === aa.HOSTNAME || a === aa.IP || aa.IP_PATTERN.test(a) || a.startsWith(`${hn.DEV}.`) || a.startsWith(`${hn.DEV}-`) ? mn.DEV : a.startsWith(`${hn.TEST}.`) || a.startsWith(`${hn.TEST}-`) ? mn.TEST : a.startsWith(`${hn.STAGE}.`) || a.startsWith(`${hn.STAGE}-`) ? mn.STAGE : mn.PROD;
}
function O8(n) {
  if (Yy === ef.TEST)
    return "";
  const a = T8();
  return n.startsWith("/global") || n.startsWith("/learner") ? Oh[a] : n.startsWith("/core/ecommerce") ? Gv[a] : Fv[a];
}
const pn = (n) => {
  const a = n.startsWith("/") ? n : `/${n}`;
  return Yy === ef.TEST ? a : `${O8(a)}${a}`;
}, A8 = async (n) => {
  try {
    return C8?.find(
      (r) => r?.siteURL?.includes(n)
    );
  } catch (a) {
    console.error("Error fetching subsidiaries:", a);
  }
};
async function en() {
  const n = localStorage.getItem(ft.BRAND_DATA);
  if (!n)
    return {};
  const a = JSON.parse(n), r = await A8(a?.domain);
  return {
    [ri.X_BRAND_ID]: r?.subsidiaryName,
    [ri.X_SUBSIDIARY_ID]: r?.subsidiaryId?.toString(),
    [ri.X_BRAND_DOMAIN]: a?.domain
  };
}
const R8 = async (n, a) => {
  const r = pn(Ln.AUTH), l = { username: n, password: a };
  try {
    return (await Le.post(r, l, {
      headers: await en()
    })).data;
  } catch (u) {
    throw console.error("Error during auth login:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === cr.UNAUTHORIZED ? new Error(Me.INVALID_CREDENTIALS) : u.message ? new Error(u.message) : new Error(Me.AUTH_FAILED);
  }
}, _8 = async (n) => {
  const a = pn(Ln.REGISTER);
  try {
    return (await Le.post(a, n, {
      headers: await en()
    })).data;
  } catch (r) {
    throw console.error("Error during registration:", r), r.response?.data?.details?.errorMessage ? new Error(r.response.data.details.errorMessage) : r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.details ? new Error(r.response.data.details) : r.response?.data?.message ? new Error(r.response.data.message) : r.response?.status === cr.INTERNAL_SERVER_ERROR ? new Error(Me.REGISTRATION_FAILED_RETRY) : r.message ? new Error(r.message) : new Error(Me.REGISTRATION_FAILED);
  }
}, Ou = async (n) => {
  const a = pn(Ln.CHECK_EMAIL);
  try {
    return (await Le.post(
      a,
      { email: n },
      {
        headers: await en()
      }
    )).data;
  } catch (r) {
    throw console.error("Error checking email:", r), r.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : r.response?.status === 403 ? new Error("Access denied to email verification service") : r.response?.status === 500 ? new Error("Email verification service encountered an error") : r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.message ? new Error(r.response.data.message) : r.message ? new Error(`Email verification failed: ${r.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, j8 = async (n) => {
  const a = pn(Ln.CHECK_PHONE);
  try {
    return (await Le.post(
      a,
      { DayPhone: n },
      {
        headers: await en()
      }
    )).data;
  } catch (r) {
    throw console.error("Error checking phone:", r), r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.message ? new Error(r.response.data.message) : r.message ? new Error(`Phone verification failed: ${r.message}`) : new Error("Unable to verify phone number. Please try again.");
  }
}, Vh = async (n) => {
  const a = pn(Ln.FORGOT_PASSWORD), r = { email: n };
  try {
    return (await Le.post(a, r, {
      headers: await en()
    })).data;
  } catch (l) {
    throw console.error("Error sending password reset:", l), l.response?.data?.error ? new Error(l.response.data.error) : l.response?.data?.message ? new Error(l.response.data.message) : l.response?.status === cr.NOT_FOUND ? new Error("We couldn't find an account with that email.") : l.message ? new Error(l.message) : new Error(Me.RESET_LINK_FAILED);
  }
}, Yh = async (n) => {
  const a = pn(Ln.FORGOT_USERNAME), r = { email: n };
  try {
    return (await Le.post(a, r, {
      headers: await en()
    })).data;
  } catch (l) {
    throw console.error("Error sending username verification:", l), l.response?.data?.error ? new Error(l.response.data.error) : l.response?.data?.message ? new Error(l.response.data.message) : l.response?.status === cr.NOT_FOUND ? new Error("We couldn't find an account with that email.") : l.message ? new Error(l.message) : new Error(Me.USERNAME_RECOVERY_FAILED);
  }
}, D8 = async (n) => {
  const a = pn(Ln.GOOGLE_AUTH);
  try {
    return (await Le.post(
      a,
      { code: n },
      {
        headers: await en()
      }
    )).data;
  } catch (r) {
    throw console.error("Error during Google auth:", r), r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.message ? new Error(r.response.data.message) : r.response?.status === cr.UNAUTHORIZED ? new Error("Google authentication failed. Please try again.") : r.message ? new Error(r.message) : new Error(Me.AUTH_FAILED);
  }
}, M8 = async (n, a) => {
  const r = pn(Ln.APPLE_AUTH);
  try {
    return (await Le.post(
      r,
      { code: n, user: a },
      {
        headers: await en()
      }
    )).data;
  } catch (l) {
    throw console.error("Error during Apple auth:", l), l.response?.data?.error ? new Error(l.response.data.error) : l.response?.data?.message ? new Error(l.response.data.message) : l.response?.status === cr.UNAUTHORIZED ? new Error("Apple authentication failed. Please try again.") : l.message ? new Error(l.message) : new Error(Me.AUTH_FAILED);
  }
}, L8 = async (n) => {
  const a = pn(Ln.REFRESH_TOKEN), r = { refresh_token: n };
  try {
    return (await Le.post(a, r, {
      headers: await en()
    })).data;
  } catch (l) {
    throw console.error("Error during token refresh:", l), l;
  }
}, U8 = async (n) => {
  const a = pn(Ln.LOGOUT), r = { refresh_token: n };
  try {
    return (await Le.post(a, r, {
      headers: await en()
    })).data;
  } catch (l) {
    throw console.error("Error during logout:", l), l.response?.data?.error ? new Error(l.response.data.error) : l.response?.data?.message ? new Error(l.response.data.message) : l.response?.status === cr.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : l.message ? new Error(l.message) : new Error("Logout failed");
  }
}, P8 = async (n) => {
  const a = pn("/learner/enrollments"), r = {
    includeCertificates: !0,
    includeRules: !0,
    includeSchedules: !0,
    offset: 50,
    limit: 50,
    sort: !0
  };
  try {
    const l = await en();
    console.log("Brand headers retrieved:", l);
    const u = await Le.get(a, {
      params: r,
      headers: {
        Accept: "text/plain",
        "X-Host": l[ri.X_BRAND_ID] || "westernschools",
        "X-Refresh-Cache": "true",
        "X-Test-Mode": "false",
        Authorization: `Bearer ${n}`
      },
      withCredentials: !1,
      validateStatus: () => !0
    });
    return console.log("Enrollments response:", u.status, u.data), u.data;
  } catch (l) {
    throw console.error("Error fetching enrollments:", l), l.response?.data?.error ? new Error(l.response.data.error) : l.response?.data?.message ? new Error(l.response.data.message) : l.message ? new Error(l.message) : new Error("Failed to fetch enrollments");
  }
}, k8 = async (n) => {
  console.log("*** fetchCheckout CALLED ***");
  const a = pn("/core/ecommerce/cart/items");
  try {
    const r = await en(), l = await Le.get(a, {
      params: { onlyCheck: !0 },
      headers: {
        Accept: "application/json",
        "X-Host": r[ri.X_BRAND_DOMAIN] || "westernschools",
        "X-Access-Token": n,
        // 🔥 Disable caching
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0"
      },
      withCredentials: !1
    });
    return console.log("Checkout response:", l.status, l.data), l.data;
  } catch (r) {
    throw console.error("Error fetching checkout:", r), r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.message ? new Error(r.response.data.message) : r.message ? new Error(r.message) : new Error("Failed to fetch checkout data");
  }
}, I8 = () => {
  try {
    const n = Nt(xe.REFRESH_TOKEN, !1);
    if (!n)
      return !0;
    const a = Pa(n), r = Math.floor(Date.now() / 1e3);
    return !a.exp || r >= a.exp;
  } catch (n) {
    return console.error(`${we.TOKEN} isRefreshTokenExpiredFromCookie Error:`, n), !0;
  }
}, mu = () => Nt(xe.REFRESH_TOKEN, !1), Xy = (n) => {
  try {
    const a = Pa(n), r = Math.floor(Date.now() / 1e3);
    return !a.exp || r >= a.exp;
  } catch {
    return !0;
  }
}, xd = (n) => !Xy(n);
let su = null;
const nu = () => {
  su && (clearTimeout(su), su = null);
}, lf = async (n) => {
  try {
    const a = n || mu();
    if (!a)
      return !1;
    const r = await L8(a);
    if (!r?.tokens?.access_token)
      return !1;
    const l = r.tokens, u = Td(l.access_token);
    if (!u)
      return !1;
    const c = (u.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (c <= 0)
      return !1;
    St(xe.ACCESS_TOKEN, l.access_token, c, !0);
    const f = (Date.now() + c * 1e3).toString();
    if (St(xe.ACCESS_TOKEN_EXPIRES, f, c, !0), l.refresh_token) {
      St(xe.REFRESH_TOKEN, l.refresh_token, 2592e3, !0);
      const p = Nt(xe.REFRESH_TOKEN_TIME, !1);
      if (p && !(Date.now() - parseInt(p) >= la.ONE_DAY_MS)) {
        const $ = Date.now().toString();
        St(
          xe.REFRESH_TOKEN_TIME,
          $,
          Math.ceil(la.ONE_DAY_MS / 1e3),
          !0
        );
      }
    }
    return !0;
  } catch (a) {
    return console.error(`${we.TOKEN} refreshAuthenticationState Error:`, a), !1;
  }
}, B8 = async () => {
  const n = mu(), a = Nt(xe.ACCESS_TOKEN, !1);
  if (!a || !n || !xd(n))
    return nu(), () => nu();
  nu();
  const r = 120, l = (u) => {
    try {
      const c = Pa(u);
      if (!c.exp) return;
      const f = Math.floor(Date.now() / 1e3), h = c.exp - f, p = Math.max(0, (h - r) * 1e3);
      su = setTimeout(async () => {
        const g = mu();
        if (!Nt(xe.ACCESS_TOKEN, !1) || !g || !xd(g))
          return;
        if (await lf(g)) {
          const N = Nt(xe.ACCESS_TOKEN, !1);
          N && l(N);
        }
      }, p);
    } catch {
    }
  };
  return l(a), () => nu();
};
function H8(n, a) {
  const r = {
    length: n.length >= ni.MIN_LENGTH,
    upper: Jt.UPPERCASE.test(n),
    lower: Jt.LOWERCASE.test(n),
    number: Jt.NUMBER.test(n),
    noSpaces: !Jt.NO_SPACES.test(n),
    noTriple: !Jt.NO_TRIPLE.test(n),
    special: Jt.SPECIAL_CHAR.test(n) && Jt.ALLOWED_CHARS.test(n),
    noNameParts: !0
  }, l = n.toLowerCase();
  if (a && a.displayName) {
    const u = a.displayName.split(/\s+/).filter((c) => c.length >= ni.MIN_PART_LENGTH_FOR_NAME_CHECK);
    for (const c of u)
      if (c && l.includes(c.toLowerCase())) {
        r.noNameParts = !1;
        break;
      }
  }
  return r;
}
const Xh = (n) => {
  try {
    const a = Nt(xe.REFRESH_TOKEN_TIME, !1);
    if (!a)
      return console.log(
        `${we.CHECK_TOKEN_AND_REDIRECT} No session timestamp - requires manual login`
      ), !1;
    const r = Date.now() - parseInt(a), l = la.ONE_DAY_MS;
    if (r >= l)
      return console.log(
        `${we.CHECK_TOKEN_AND_REDIRECT} Session expired (older than 1 day) - requires manual login`
      ), !1;
    console.log(`${we.CHECK_TOKEN_AND_REDIRECT} Valid session found - validating tokens`);
    const u = Nt(xe.ACCESS_TOKEN, !1);
    let c = null;
    if (u && (c = u), !c)
      return !1;
    const f = Nt(xe.ACCESS_TOKEN_EXPIRES, !1);
    if (f && Date.now() >= parseInt(f))
      return !1;
    try {
      const h = Pa(c), p = Math.floor(Date.now() / 1e3);
      return !(!h.exp || p >= h.exp);
    } catch (h) {
      return console.error(`${we.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, h), !1;
    }
  } catch (a) {
    return console.error(`${we.CHECK_TOKEN_AND_REDIRECT} Error:`, a), !1;
  }
}, z8 = async (n) => {
  if (Xh(n))
    return !0;
  try {
    const r = Nt(xe.REFRESH_TOKEN_TIME, !1);
    if (!r || Date.now() - parseInt(r) >= la.ONE_DAY_MS)
      return !1;
    const u = mu();
    if (!u || !xd(u))
      return !1;
    const c = Nt(xe.ACCESS_TOKEN, !1);
    return !(!c || Xy(c)) || !await lf(u) ? !1 : Xh(n);
  } catch (r) {
    return console.error(
      `${we.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      r
    ), !1;
  }
}, F8 = () => {
  try {
    const n = Nt(xe.REFRESH_TOKEN_TIME, !1);
    return n ? Date.now() - parseInt(n) < la.ONE_DAY_MS : !1;
  } catch (n) {
    return console.error(`${we.TOKEN} isRefreshTokenValid Error:`, n), !1;
  }
}, G8 = () => {
  eu(xe.ACCESS_TOKEN), eu(xe.ACCESS_TOKEN_EXPIRES), eu(xe.REFRESH_TOKEN), eu(xe.REFRESH_TOKEN_TIME), [
    ft.REFRESH_TOKEN,
    ft.REFRESH_TOKEN_TIME,
    ft.ACCESS_TOKEN,
    ft.ACCESS_TOKEN_EXPIRES,
    "user_info"
  ].forEach((a) => {
    localStorage.removeItem(a);
  }), console.log(`${we.AUTH} All authentication tokens and state cleared`);
}, Zy = async (n, a, r = !1) => {
  const l = await R8(n, a), { tokens: u } = l;
  if (u.access_token) {
    const f = (Pa(u.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    St(xe.ACCESS_TOKEN, u.access_token, f, !0);
    const h = (Date.now() + f * 1e3).toString();
    St(xe.ACCESS_TOKEN_EXPIRES, h, f, !0);
    const p = 720 * 60 * 60;
    if (St(xe.REFRESH_TOKEN, u.refresh_token, p, !0), u.refresh_token) {
      const g = Date.now().toString();
      r ? (St(
        xe.REFRESH_TOKEN_TIME,
        g,
        la.THIRTY_DAYS_SECONDS,
        !0
      ), console.log(`${we.AUTH} Remember Me enabled - auto-login will work for 30 days`)) : (St(
        xe.REFRESH_TOKEN_TIME,
        g,
        Math.ceil(la.ONE_DAY_MS / 1e3),
        // Convert to seconds
        !0
      ), console.log(`${we.AUTH} Remember Me disabled - auto-login will work for 1 day`));
    }
  }
  return u;
}, q8 = async (n, a = !0) => {
  const r = await D8(n), { tokens: l } = r;
  if (l.access_token) {
    const c = (Pa(l.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    St(xe.ACCESS_TOKEN, l.access_token, c, !0);
    const f = (Date.now() + c * 1e3).toString();
    St(xe.ACCESS_TOKEN_EXPIRES, f, c, !0);
    const h = 720 * 60 * 60;
    if (St(xe.REFRESH_TOKEN, l.refresh_token, h, !0), l.refresh_token) {
      const p = Date.now().toString();
      a ? (St(
        xe.REFRESH_TOKEN_TIME,
        p,
        la.THIRTY_DAYS_SECONDS,
        !0
      ), console.log(`${we.AUTH} Google login - Remember Me enabled for 30 days`)) : (St(
        xe.REFRESH_TOKEN_TIME,
        p,
        Math.ceil(la.ONE_DAY_MS / 1e3),
        // Convert to seconds
        !0
      ), console.log(`${we.AUTH} Google login - auto-login will work for 1 day`));
    }
  }
  return l;
}, K8 = async (n, a, r = !0) => {
  const l = await M8(n, a), { tokens: u } = l;
  if (u.access_token) {
    const f = (Pa(u.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    St(xe.ACCESS_TOKEN, u.access_token, f, !0), localStorage.setItem(ft.ACCESS_TOKEN, u.access_token), localStorage.setItem(
      ft.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    ), localStorage.setItem(ft.REFRESH_TOKEN, u.refresh_token);
    const h = 720 * 60 * 60;
    St(xe.REFRESH_TOKEN, u.refresh_token, h, !0), r && u.refresh_token ? (localStorage.setItem(ft.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${we.AUTH} Apple login - Remember Me enabled`)) : (localStorage.removeItem(ft.REFRESH_TOKEN_TIME), console.log(`${we.AUTH} Apple login - Remember Me disabled`));
  }
  return u;
}, Td = (n) => {
  try {
    const a = Pa(n);
    return {
      access_token: n,
      userInfo: {
        studentId: a.studentId,
        sub: a.sub,
        email_verified: a.email_verified,
        name: a.name,
        preferred_username: a.preferred_username,
        given_name: a.given_name,
        family_name: a.family_name,
        email: a.email
      },
      // Include token metadata for operations like cookie expiry
      decoded: {
        exp: a.exp
      }
    };
  } catch (a) {
    return console.error(
      `${we.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      a
    ), null;
  }
}, V8 = ({ onResetPassword: n, onContinue: a }) => /* @__PURE__ */ y.jsx(
  "div",
  {
    part: "identity-widget-weak-password-overlay",
    className: "identity-widget-weak-password-overlay fixed! inset-0! bg-[#0000004f]! flex! items-center! justify-center! z-[2100]! p-4!",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "weak-password-dialog-title",
    children: /* @__PURE__ */ y.jsxs(
      "div",
      {
        part: "identity-widget-weak-password-modal",
        className: "identity-widget-weak-password-modal bg-white! rounded-lg! p-8! w-full! max-w-md! relative! text-center!",
        role: "document",
        children: [
          /* @__PURE__ */ y.jsx(
            "div",
            {
              part: "identity-widget-weak-password-icon-wrap",
              className: "identity-widget-weak-password-icon-wrap flex! justify-center! mb-4!",
              children: /* @__PURE__ */ y.jsx(
                "svg",
                {
                  className: "w-12! h-12! text-yellow-500!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ y.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ y.jsx(
            "h3",
            {
              id: "weak-password-dialog-title",
              part: "identity-widget-weak-password-title",
              className: "identity-widget-weak-password-title text-lg! font-bold! text-gray-800! mb-2!",
              children: "Weak Password Detected"
            }
          ),
          /* @__PURE__ */ y.jsx(
            "p",
            {
              part: "identity-widget-weak-password-message",
              className: "identity-widget-weak-password-message text-sm! text-gray-600! mb-6!",
              children: "Your password is weak. Would you like to reset it before proceeding?"
            }
          ),
          /* @__PURE__ */ y.jsxs(
            "div",
            {
              part: "identity-widget-weak-password-actions",
              className: "identity-widget-weak-password-actions flex! gap-3! justify-center!",
              children: [
                /* @__PURE__ */ y.jsx(
                  We,
                  {
                    type: Ve.BUTTON,
                    variant: it.OUTLINE,
                    part: "identity-widget-weak-password-no-button",
                    onClick: a,
                    className: "identity-widget-weak-password-no-button flex-1! m-0! py-2.5! px-5! text-sm! font-semibold! rounded-lg! shadow-none! border! border-solid! border-gray-300! text-gray-700! bg-white! hover:bg-gray-50! hover:border-gray-400! transition-colors! duration-200!",
                    children: "No, Continue"
                  }
                ),
                /* @__PURE__ */ y.jsx(
                  We,
                  {
                    type: Ve.BUTTON,
                    variant: it.PRIMARY,
                    part: "identity-widget-weak-password-yes-button",
                    onClick: n,
                    className: "identity-widget-weak-password-yes-button flex-1! m-0! py-2.5! px-5! text-sm! font-semibold! rounded-lg! shadow-none! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! transition-colors! duration-200!",
                    children: "Yes, Reset Password"
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
function Zh(n) {
  en().then((a) => {
    a[ri.X_BRAND_ID] || n(!0);
  }).catch((a) => {
    console.error(we.BRAND_CONFIG, "Failed to load brand configuration:", a), n(!0);
  });
}
function Au() {
  const [n, a] = w.useState(!1);
  return w.useEffect(() => {
    if (sessionStorage.getItem(ft.THEME_LOADED)) {
      Zh(a);
      return;
    }
    const r = () => {
      Zh(a);
    };
    return window.addEventListener("theme-loaded", r), () => window.removeEventListener("theme-loaded", r);
  }, []), n;
}
const Qy = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[024-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "(?:01\\d|8)\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], BL: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], CF: ["236", "00", "8776\\d{4}|(?:[27]\\d|61)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-8]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|80[6-9]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "[235]\\d{8}|800\\d{5,6}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2358]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|80[6-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689])\\d|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["16|[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "8\\d{13}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["20"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{4})(\\d{5})", "$1-$2", ["892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8(?:0[0-7]|9)"], "0$1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, "[5-8]"], MC: ["377", "00", "(?:[3489]|[67]\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[67]"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["11|2[16]"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[78]\\d{8}|[2-9]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["3[289]|4[246-8]|61|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "[3489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|[6-9]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[3689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "(?:[0-57-9]\\d|66)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-579]|61)", "5(?:[0-579]|61[06])", "5(?:[0-579]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["826"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["83"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["82"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[25]0|37|49|8[09]"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:274[27]|(?:472|983)[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|5[12]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
var cd = { exports: {} }, dd, Qh;
function Y8() {
  if (Qh) return dd;
  Qh = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dd = n, dd;
}
var fd, Wh;
function X8() {
  if (Wh) return fd;
  Wh = 1;
  var n = /* @__PURE__ */ Y8();
  function a() {
  }
  function r() {
  }
  return r.resetWarningCache = a, fd = function() {
    function l(f, h, p, g, b, $) {
      if ($ !== n) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    l.isRequired = l;
    function u() {
      return l;
    }
    var c = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: u,
      element: l,
      elementType: l,
      instanceOf: u,
      node: l,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: r,
      resetWarningCache: a
    };
    return c.PropTypes = c, c;
  }, fd;
}
var Jh;
function Z8() {
  return Jh || (Jh = 1, cd.exports = /* @__PURE__ */ X8()()), cd.exports;
}
var Q8 = /* @__PURE__ */ Z8();
const K = /* @__PURE__ */ Vd(Q8);
var md = { exports: {} };
var eg;
function W8() {
  return eg || (eg = 1, (function(n) {
    (function() {
      var a = {}.hasOwnProperty;
      function r() {
        for (var c = "", f = 0; f < arguments.length; f++) {
          var h = arguments[f];
          h && (c = u(c, l(h)));
        }
        return c;
      }
      function l(c) {
        if (typeof c == "string" || typeof c == "number")
          return c;
        if (typeof c != "object")
          return "";
        if (Array.isArray(c))
          return r.apply(null, c);
        if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
          return c.toString();
        var f = "";
        for (var h in c)
          a.call(c, h) && c[h] && (f = u(f, h));
        return f;
      }
      function u(c, f) {
        return f ? c ? c + " " + f : c + f : c;
      }
      n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
    })();
  })(md)), md.exports;
}
var J8 = W8();
const hu = /* @__PURE__ */ Vd(J8);
function e9(n, a, r) {
  switch (r) {
    case "Backspace":
      a > 0 && (n = n.slice(0, a - 1) + n.slice(a), a--);
      break;
    case "Delete":
      n = n.slice(0, a) + n.slice(a + 1);
      break;
  }
  return {
    value: n,
    caret: a
  };
}
function t9(n, a, r) {
  for (var l = {}, u = "", c = 0, f = 0; f < n.length; ) {
    var h = r(n[f], u, l);
    h !== void 0 && (u += h, a !== void 0 && (a === f ? c = u.length - 1 : a > f && (c = u.length))), f++;
  }
  a === void 0 && (c = u.length);
  var p = {
    value: u,
    caret: c
  };
  return p;
}
function n9(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = a9(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a9(n, a) {
  if (n) {
    if (typeof n == "string") return tg(n, a);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set") return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tg(n, a);
  }
}
function tg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = new Array(a); r < a; r++)
    l[r] = n[r];
  return l;
}
function Od(n, a) {
  for (var r = 0, l = n9(a.split("")), u; !(u = l()).done; ) {
    var c = u.value;
    c === n && r++;
  }
  return r;
}
function r9(n, a) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "x", l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", u = n.length, c = Od("(", n), f = Od(")", n), h = c - f; h > 0 && u < a.length; )
    n += a[u].replace(r, l), a[u] === ")" && h--, u++;
  return n;
}
function i9(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = l9(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l9(n, a) {
  if (n) {
    if (typeof n == "string") return ng(n, a);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set") return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ng(n, a);
  }
}
function ng(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = new Array(a); r < a; r++)
    l[r] = n[r];
  return l;
}
function o9(n) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", r = arguments.length > 2 ? arguments[2] : void 0;
  if (!n)
    return function(u) {
      return {
        text: u
      };
    };
  var l = Od(a, n);
  return function(u) {
    if (!u)
      return {
        text: "",
        template: n
      };
    for (var c = 0, f = "", h = i9(n.split("")), p; !(p = h()).done; ) {
      var g = p.value;
      if (g !== a) {
        f += g;
        continue;
      }
      if (f += u[c], c++, c === u.length && u.length < l)
        break;
    }
    return r && (f = r9(f, n)), {
      text: f,
      template: n
    };
  };
}
function u9(n, a, r) {
  typeof r == "string" && (r = o9(r));
  var l = r(n) || {}, u = l.text, c = l.template;
  if (u === void 0 && (u = n), c)
    if (a === void 0)
      a = u.length;
    else {
      for (var f = 0, h = !1, p = -1; f < u.length && f < c.length; ) {
        if (u[f] !== c[f]) {
          if (a === 0) {
            h = !0, a = f;
            break;
          }
          p = f, a--;
        }
        f++;
      }
      h || (a = p + 1);
    }
  return {
    text: u,
    caret: a
  };
}
function s9(n) {
  return n.hasAttribute("readonly");
}
function c9(n) {
  if (n.selectionStart !== n.selectionEnd)
    return {
      start: n.selectionStart,
      end: n.selectionEnd
    };
}
var ag = {
  Backspace: 8,
  Delete: 46
};
function d9(n) {
  switch (n.keyCode) {
    case ag.Backspace:
      return "Backspace";
    case ag.Delete:
      return "Delete";
  }
}
function f9(n) {
  return n.selectionStart;
}
function Wy(n, a) {
  a !== void 0 && (m9() ? setTimeout(function() {
    return n.setSelectionRange(a, a);
  }, 0) : n.setSelectionRange(a, a));
}
function m9() {
  if (typeof navigator < "u")
    return h9.test(navigator.userAgent);
}
var h9 = /Android/i;
function g9(n, a, r, l, u) {
  Ad(a, r, l, void 0, u);
}
function y9(n, a, r, l, u) {
  if (!s9(a)) {
    var c = d9(n);
    switch (c) {
      case "Delete":
      case "Backspace":
        n.preventDefault();
        var f = c9(a);
        return f ? (p9(a, f), Ad(a, r, l, void 0, u)) : Ad(a, r, l, c, u);
    }
  }
}
function p9(n, a) {
  var r = n.value;
  r = r.slice(0, a.start) + r.slice(a.end), n.value = r, Wy(n, a.start);
}
function Ad(n, a, r, l, u) {
  var c = t9(n.value, f9(n), a), f = c.value, h = c.caret;
  if (l) {
    var p = e9(f, h, l);
    f = p.value, h = p.caret;
  }
  var g = u9(f, h, r), b = g.text;
  h = g.caret, n.value = b, Wy(n, h), u && u(f);
}
var v9 = ["ref", "parse", "format", "value", "defaultValue", "controlled", "onChange", "onKeyDown"];
function rg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function ei(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? rg(Object(r), !0).forEach(function(l) {
      b9(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function b9(n, a, r) {
  return a in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function $9(n, a) {
  if (n == null) return {};
  var r = w9(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function w9(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function E9(n) {
  var a = n.ref, r = n.parse, l = n.format, u = n.value, c = n.defaultValue, f = n.controlled, h = f === void 0 ? !0 : f, p = n.onChange, g = n.onKeyDown, b = $9(n, v9), $ = w.useRef(), N = w.useCallback(function(C) {
    $.current = C, a && (typeof a == "function" ? a(C) : a.current = C);
  }, [a]), _ = w.useCallback(function(C) {
    return g9(C, $.current, r, l, p);
  }, [$, r, l, p]), E = w.useCallback(function(C) {
    if (g && g(C), !C.defaultPrevented)
      return y9(C, $.current, r, l, p);
  }, [$, r, l, p, g]), A = ei(ei({}, b), {}, {
    ref: N,
    onChange: _,
    onKeyDown: E
  });
  return h ? ei(ei({}, A), {}, {
    value: l(ig(u) ? "" : u).text
  }) : ei(ei({}, A), {}, {
    defaultValue: l(ig(c) ? "" : c).text
  });
}
function ig(n) {
  return n == null;
}
var S9 = ["inputComponent", "parse", "format", "value", "defaultValue", "onChange", "controlled", "onKeyDown", "type"];
function lg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function C9(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? lg(Object(r), !0).forEach(function(l) {
      N9(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function N9(n, a, r) {
  return a in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function x9(n, a) {
  if (n == null) return {};
  var r = T9(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function T9(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function gu(n, a) {
  var r = n.inputComponent, l = r === void 0 ? "input" : r, u = n.parse, c = n.format, f = n.value, h = n.defaultValue, p = n.onChange, g = n.controlled, b = n.onKeyDown, $ = n.type, N = $ === void 0 ? "text" : $, _ = x9(n, S9), E = E9(C9({
    ref: a,
    parse: u,
    format: c,
    value: f,
    defaultValue: h,
    onChange: p,
    controlled: g,
    onKeyDown: b,
    type: N
  }, _));
  return /* @__PURE__ */ ue.createElement(l, E);
}
gu = /* @__PURE__ */ ue.forwardRef(gu);
gu.propTypes = {
  // Parses a single characher of `<input/>` text.
  parse: K.func.isRequired,
  // Formats `value` into `<input/>` text.
  format: K.func.isRequired,
  // Renders `<input/>` by default.
  inputComponent: K.elementType,
  // `<input/>` `type` attribute.
  type: K.string,
  // Is parsed from <input/> text.
  value: K.string,
  // An initial value for an "uncontrolled" <input/>.
  defaultValue: K.string,
  // This handler is called each time `<input/>` text is changed.
  onChange: K.func,
  // Whether this input should be "controlled" or "uncontrolled".
  // The default value is `true` meaning "uncontrolled".
  controlled: K.bool,
  // Passthrough
  onKeyDown: K.func,
  onCut: K.func,
  onPaste: K.func
};
function og(n, a) {
  n = n.split("-"), a = a.split("-");
  for (var r = n[0].split("."), l = a[0].split("."), u = 0; u < 3; u++) {
    var c = Number(r[u]), f = Number(l[u]);
    if (c > f) return 1;
    if (f > c) return -1;
    if (!isNaN(c) && isNaN(f)) return 1;
    if (isNaN(c) && !isNaN(f)) return -1;
  }
  return n[1] && a[1] ? n[1] > a[1] ? 1 : n[1] < a[1] ? -1 : 0 : !n[1] && a[1] ? 1 : n[1] && !a[1] ? -1 : 0;
}
var O9 = {}.constructor;
function lr(n) {
  return n != null && n.constructor === O9;
}
function si(n) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, si(n);
}
function Ru(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function A9(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, R9(l.key), l);
  }
}
function _u(n, a, r) {
  return a && A9(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function R9(n) {
  var a = _9(n, "string");
  return si(a) == "symbol" ? a : a + "";
}
function _9(n, a) {
  if (si(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (si(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var j9 = "1.2.0", D9 = "1.7.35", ug = " ext. ", M9 = /^\d+$/, ct = /* @__PURE__ */ (function() {
  function n(a) {
    Ru(this, n), Jy(a), this.metadata = a, tp.call(this, a);
  }
  return _u(n, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(r) {
        return r !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(r) {
      return this.metadata.countries[r];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(r) {
      return this.getCountryMetadata(r) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(r) {
      if (this.getCountryCodesForCallingCode(r))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[r])
          return !0;
      } else {
        var l = this.countryCallingCodes()[r];
        if (l && l.length === 1 && l[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(r) {
      return this.nonGeographic() ? !!this.nonGeographic()[r] : !this.getCountryCodesForCallingCode(r);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(r) {
      return this.selectNumberingPlan(r);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(r, l) {
      if (r && M9.test(r) && (l = r, r = null), r && r !== "001") {
        if (!this.hasCountry(r))
          throw new Error("Unknown country: ".concat(r));
        this.numberingPlan = new sg(this.getCountryMetadata(r), this);
      } else if (l) {
        if (!this.hasCallingCode(l))
          throw new Error("Unknown calling code: ".concat(l));
        this.numberingPlan = new sg(this.getNumberingPlanMetadata(l), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(r) {
      var l = this.countryCallingCodes()[r];
      if (l)
        return l.length === 1 && l[0].length === 3 ? void 0 : l;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(r) {
      var l = this.getCountryCodesForCallingCode(r);
      if (l)
        return l[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(r) {
      var l = this.getCountryCodeForCallingCode(r);
      if (l)
        return this.getCountryMetadata(l);
      if (this.nonGeographic()) {
        var u = this.nonGeographic()[r];
        if (u)
          return u;
      } else {
        var c = this.countryCallingCodes()[r];
        if (c && c.length === 1 && c[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(r) {
      return this.numberingPlan.type(r);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(r) {
      return this.selectNumberingPlan(r);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]);
})(), sg = /* @__PURE__ */ (function() {
  function n(a, r) {
    Ru(this, n), this.globalMetadataObject = r, this.metadata = a, tp.call(this, r.metadata);
  }
  return _u(n, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(r) {
      return r[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var r = this, l = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return l.map(function(u) {
        return new L9(u, r);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(r) {
      return r[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(r) {
      if (this.hasTypes() && cg(this.types(), r))
        return new P9(cg(this.types(), r), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? ug : this.metadata[13] || ug;
    }
  }]);
})(), L9 = /* @__PURE__ */ (function() {
  function n(a, r) {
    Ru(this, n), this._format = a, this.metadata = r;
  }
  return _u(n, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !U9.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]);
})(), U9 = /^\(?\$1\)?$/, P9 = /* @__PURE__ */ (function() {
  function n(a, r) {
    Ru(this, n), this.type = a, this.metadata = r;
  }
  return _u(n, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
})();
function cg(n, a) {
  switch (a) {
    case "FIXED_LINE":
      return n[0];
    case "MOBILE":
      return n[1];
    case "TOLL_FREE":
      return n[2];
    case "PREMIUM_RATE":
      return n[3];
    case "PERSONAL_NUMBER":
      return n[4];
    case "VOICEMAIL":
      return n[5];
    case "UAN":
      return n[6];
    case "PAGER":
      return n[7];
    case "VOIP":
      return n[8];
    case "SHARED_COST":
      return n[9];
  }
}
function Jy(n) {
  if (!n)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!lr(n) || !lr(n.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(lr(n) ? "an object of shape: { " + Object.keys(n).join(", ") + " }" : "a " + k9(n) + ": " + n, "."));
}
var k9 = function(a) {
  return si(a);
};
function ka(n, a) {
  if (a = new ct(a), a.hasCountry(n))
    return a.selectNumberingPlan(n).countryCallingCode();
  throw new Error("Unknown country: ".concat(n));
}
function ep(n, a) {
  return a.countries.hasOwnProperty(n);
}
function tp(n) {
  var a = n.version;
  typeof a == "number" ? (this.v1 = a === 1, this.v2 = a === 2, this.v3 = a === 3, this.v4 = a === 4) : a ? og(a, j9) === -1 ? this.v2 = !0 : og(a, D9) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
function ju(n, a, r) {
  return I9(n, a, void 0, r);
}
function I9(n, a, r, l) {
  a && (l = new ct(l.metadata), l.selectNumberingPlan(a));
  var u = l.type(r), c = u && u.possibleLengths() || l.possibleLengths();
  if (!c)
    return "IS_POSSIBLE";
  var f = n.length, h = c[0];
  return h === f ? "IS_POSSIBLE" : h > f ? "TOO_SHORT" : c[c.length - 1] < f ? "TOO_LONG" : c.indexOf(f, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function B9(n, a, r) {
  if (a === void 0 && (a = {}), r = new ct(r), a.v2) {
    if (!n.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    r.selectNumberingPlan(n.countryCallingCode);
  } else {
    if (!n.phone)
      return !1;
    if (n.country) {
      if (!r.hasCountry(n.country))
        throw new Error("Unknown country: ".concat(n.country));
      r.selectNumberingPlan(n.country);
    } else {
      if (!n.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      r.selectNumberingPlan(n.countryCallingCode);
    }
  }
  if (r.possibleLengths())
    return np(n.phone || n.nationalNumber, n.country, r);
  if (n.countryCallingCode && r.isNonGeographicCallingCode(n.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function np(n, a, r) {
  return ju(n, a, r) === "IS_POSSIBLE";
}
function oa(n, a) {
  return n = n || "", new RegExp("^(?:" + a + ")$").test(n);
}
function H9(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = z9(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z9(n, a) {
  if (n) {
    if (typeof n == "string") return dg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? dg(n, a) : void 0;
  }
}
function dg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
var F9 = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function of(n, a, r) {
  if (a = a || {}, !(!n.country && !n.countryCallingCode)) {
    r = new ct(r), r.selectNumberingPlan(n.country, n.countryCallingCode);
    var l = a.v2 ? n.nationalNumber : n.phone;
    if (oa(l, r.nationalNumberPattern())) {
      if (hd(l, "FIXED_LINE", r))
        return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || hd(l, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var u = H9(F9), c; !(c = u()).done; ) {
        var f = c.value;
        if (hd(l, f, r))
          return f;
      }
    }
  }
}
function hd(n, a, r) {
  var l = r.type(a);
  return !l || !l.pattern() || l.possibleLengths() && l.possibleLengths().indexOf(n.length) < 0 ? !1 : oa(n, l.pattern());
}
function G9(n, a, r) {
  if (a = a || {}, r = new ct(r), r.selectNumberingPlan(n.country, n.countryCallingCode), r.hasTypes())
    return of(n, a, r.metadata) !== void 0;
  var l = a.v2 ? n.nationalNumber : n.phone;
  return oa(l, r.nationalNumberPattern());
}
function q9(n, a, r) {
  var l = new ct(r), u = l.getCountryCodesForCallingCode(n);
  return u ? u.filter(function(c) {
    return K9(a, c, r);
  }) : [];
}
function K9(n, a, r) {
  var l = new ct(r);
  return l.selectNumberingPlan(a), l.numberingPlan.possibleLengths().indexOf(n.length) >= 0;
}
var uf = 2, V9 = 17, Y9 = 3, _t = "0-9０-９٠-٩۰-۹", X9 = "-‐-―−ー－", Z9 = "／/", Q9 = "．.", W9 = "  ­​⁠　", J9 = "()（）［］\\[\\]", e6 = "~⁓∼～", Cn = "".concat(X9).concat(Z9).concat(Q9).concat(W9).concat(J9).concat(e6), Du = "+＋", t6 = new RegExp("([" + _t + "])");
function ap(n, a, r, l) {
  if (a) {
    var u = new ct(l);
    u.selectNumberingPlan(a, r);
    var c = new RegExp(u.IDDPrefix());
    if (n.search(c) === 0) {
      n = n.slice(n.match(c)[0].length);
      var f = n.match(t6);
      if (!(f && f[1] != null && f[1].length > 0 && f[1] === "0"))
        return n;
    }
  }
}
function Rd(n, a) {
  if (n && a.numberingPlan.nationalPrefixForParsing()) {
    var r = new RegExp("^(?:" + a.numberingPlan.nationalPrefixForParsing() + ")"), l = r.exec(n);
    if (l) {
      var u, c, f = l.length - 1, h = f > 0 && l[f];
      if (a.nationalPrefixTransformRule() && h)
        u = n.replace(r, a.nationalPrefixTransformRule()), f > 1 && (c = l[1]);
      else {
        var p = l[0];
        u = n.slice(p.length), h && (c = l[1]);
      }
      var g;
      if (h) {
        var b = n.indexOf(l[1]), $ = n.slice(0, b);
        $ === a.numberingPlan.nationalPrefix() && (g = a.numberingPlan.nationalPrefix());
      } else
        g = l[0];
      return {
        nationalNumber: u,
        nationalPrefix: g,
        carrierCode: c
      };
    }
  }
  return {
    nationalNumber: n
  };
}
function n6(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = a6(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a6(n, a) {
  if (n) {
    if (typeof n == "string") return fg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? fg(n, a) : void 0;
  }
}
function fg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function rp(n, a) {
  var r = a.countries, l = a.metadata;
  l = new ct(l);
  for (var u = n6(r), c; !(c = u()).done; ) {
    var f = c.value;
    if (l.selectNumberingPlan(f), l.leadingDigits()) {
      if (n && n.search(l.leadingDigits()) === 0)
        return f;
    } else if (of({
      phone: n,
      country: f
    }, void 0, l.metadata))
      return f;
  }
}
function sf(n, a) {
  var r = a.nationalNumber, l = a.metadata, u = l.getCountryCodesForCallingCode(n);
  if (u)
    return u.length === 1 ? u[0] : rp(r, {
      countries: u,
      metadata: l.metadata
    });
}
function _d(n, a, r) {
  var l = Rd(n, r), u = l.carrierCode, c = l.nationalNumber;
  if (c !== n) {
    if (!r6(n, c, r))
      return {
        nationalNumber: n
      };
    if (r.numberingPlan.possibleLengths() && (a || (a = sf(r.numberingPlan.callingCode(), {
      nationalNumber: c,
      metadata: r
    })), !i6(c, a, r)))
      return {
        nationalNumber: n
      };
  }
  return {
    nationalNumber: c,
    carrierCode: u
  };
}
function r6(n, a, r) {
  return !(oa(n, r.nationalNumberPattern()) && !oa(a, r.nationalNumberPattern()));
}
function i6(n, a, r) {
  switch (ju(n, a, r)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function ip(n, a, r, l, u) {
  var c = a || r ? ka(a || r, u) : l;
  if (n.indexOf(c) === 0) {
    u = new ct(u), u.selectNumberingPlan(a || r, c);
    var f = n.slice(c.length), h = _d(f, a, u), p = h.nationalNumber, g = _d(n, a, u), b = g.nationalNumber;
    if (!oa(b, u.nationalNumberPattern()) && oa(p, u.nationalNumberPattern()) || ju(b, a, u) === "TOO_LONG")
      return {
        countryCallingCode: c,
        number: f
      };
  }
  return {
    number: n
  };
}
function cf(n, a, r, l, u) {
  if (!n)
    return {};
  var c;
  if (n[0] !== "+") {
    var f = ap(n, a || r, l, u);
    if (f && f !== n)
      c = !0, n = "+" + f;
    else {
      if (a || r || l) {
        var h = ip(n, a, r, l, u), p = h.countryCallingCode, g = h.number;
        if (p)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: p,
            number: g
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: n
      };
    }
  }
  if (n[1] === "0")
    return {};
  u = new ct(u);
  for (var b = 2; b - 1 <= Y9 && b <= n.length; ) {
    var $ = n.slice(1, b);
    if (u.hasCallingCode($))
      return u.selectNumberingPlan($), {
        countryCallingCodeSource: c ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: $,
        number: n.slice(b)
      };
    b++;
  }
  return {};
}
function lp(n) {
  return n.replace(new RegExp("[".concat(Cn, "]+"), "g"), " ").trim();
}
var op = /(\$\d)/;
function up(n, a, r) {
  var l = r.useInternationalFormat, u = r.withNationalPrefix;
  r.carrierCode, r.metadata;
  var c = n.replace(new RegExp(a.pattern()), l ? a.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    u && a.nationalPrefixFormattingRule() ? a.format().replace(op, a.nationalPrefixFormattingRule()) : a.format()
  ));
  return l ? lp(c) : c;
}
var l6 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function o6(n, a, r) {
  var l = new ct(r);
  if (l.selectNumberingPlan(n, a), l.defaultIDDPrefix())
    return l.defaultIDDPrefix();
  if (l6.test(l.IDDPrefix()))
    return l.IDDPrefix();
}
var u6 = ";ext=", ti = function(a) {
  return "([".concat(_t, "]{1,").concat(a, "})");
};
function sp(n) {
  var a = "20", r = "15", l = "9", u = "6", c = "[  \\t,]*", f = "[:\\.．]?[  \\t,-]*", h = "#?", p = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", g = "(?:[xｘ#＃~～]|int|ｉｎｔ)", b = "[- ]+", $ = "[  \\t]*", N = "(?:,{2}|;)", _ = u6 + ti(a), E = c + p + f + ti(a) + h, A = c + g + f + ti(l) + h, C = b + ti(u) + "#", M = $ + N + f + ti(r) + h, H = $ + "(?:,)+" + f + ti(l) + h;
  return _ + "|" + E + "|" + A + "|" + C + "|" + M + "|" + H;
}
var s6 = "[" + _t + "]{" + uf + "}", c6 = "[" + Du + "]{0,1}(?:[" + Cn + "]*[" + _t + "]){3,}[" + Cn + _t + "]*", d6 = new RegExp("^[" + Du + "]{0,1}(?:[" + Cn + "]*[" + _t + "]){1,2}$", "i"), f6 = c6 + // Phone number extensions
"(?:" + sp() + ")?", m6 = new RegExp(
  // Either a short two-digit-only phone number
  "^" + s6 + "$|^" + f6 + "$",
  "i"
);
function h6(n) {
  return n.length >= uf && m6.test(n);
}
function g6(n) {
  return d6.test(n);
}
function y6(n) {
  var a = n.number, r = n.ext;
  if (!a)
    return "";
  if (a[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(a).concat(r ? ";ext=" + r : "");
}
var mg = {
  formatExtension: function(a, r, l) {
    return "".concat(a).concat(l.ext()).concat(r);
  }
};
function p6(n, a, r, l) {
  if (r ? r = $6({}, mg, r) : r = mg, l = new ct(l), n.country && n.country !== "001") {
    if (!l.hasCountry(n.country))
      throw new Error("Unknown country: ".concat(n.country));
    l.selectNumberingPlan(n.country);
  } else if (n.countryCallingCode)
    l.selectNumberingPlan(n.countryCallingCode);
  else return n.phone || "";
  var u = l.countryCallingCode(), c = r.v2 ? n.nationalNumber : n.phone, f;
  switch (a) {
    case "NATIONAL":
      return c ? (f = yu(c, n.carrierCode, "NATIONAL", l, r), gd(f, n.ext, l, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return c ? (f = yu(c, null, "INTERNATIONAL", l, r), f = "+".concat(u, " ").concat(f), gd(f, n.ext, l, r.formatExtension)) : "+".concat(u);
    case "E.164":
      return "+".concat(u).concat(c);
    case "RFC3966":
      return y6({
        number: "+".concat(u).concat(c),
        ext: n.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?
    case "IDD":
      if (!r.fromCountry)
        return;
      var h = b6(c, n.carrierCode, u, r.fromCountry, l);
      return h ? gd(h, n.ext, l, r.formatExtension) : void 0;
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(a, '"'));
  }
}
function yu(n, a, r, l, u) {
  var c = v6(l.formats(), n);
  return c ? up(n, c, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(c.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && u && u.nationalPrefix === !1),
    carrierCode: a,
    metadata: l
  }) : n;
}
function v6(n, a) {
  return w6(n, function(r) {
    if (r.leadingDigitsPatterns().length > 0) {
      var l = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
      if (a.search(l) !== 0)
        return !1;
    }
    return oa(a, r.pattern());
  });
}
function gd(n, a, r, l) {
  return a ? l(n, a, r) : n;
}
function b6(n, a, r, l, u) {
  var c = ka(l, u.metadata);
  if (c === r) {
    var f = yu(n, a, "NATIONAL", u);
    return r === "1" ? r + " " + f : f;
  }
  var h = o6(l, void 0, u.metadata);
  if (h)
    return "".concat(h, " ").concat(r, " ").concat(yu(n, null, "INTERNATIONAL", u));
}
function $6() {
  for (var n = 1, a = arguments.length, r = new Array(a), l = 0; l < a; l++)
    r[l] = arguments[l];
  for (; n < r.length; ) {
    if (r[n])
      for (var u in r[n])
        r[0][u] = r[n][u];
    n++;
  }
  return r[0];
}
function w6(n, a) {
  for (var r = 0; r < n.length; ) {
    if (a(n[r]))
      return n[r];
    r++;
  }
}
function pl(n) {
  "@babel/helpers - typeof";
  return pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, pl(n);
}
function hg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function gg(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? hg(Object(r), !0).forEach(function(l) {
      E6(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function E6(n, a, r) {
  return (a = cp(a)) in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function S6(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function C6(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, cp(l.key), l);
  }
}
function N6(n, a, r) {
  return a && C6(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function cp(n) {
  var a = x6(n, "string");
  return pl(a) == "symbol" ? a : a + "";
}
function x6(n, a) {
  if (pl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (pl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var dp = /* @__PURE__ */ (function() {
  function n(a, r, l) {
    if (S6(this, n), !a)
      throw new TypeError("First argument is required");
    if (typeof a != "string")
      throw new TypeError("First argument must be a string");
    if (a[0] === "+" && !r)
      throw new TypeError("`metadata` argument not passed");
    if (lr(r) && lr(r.countries)) {
      l = r;
      var u = a;
      if (!A6.test(u))
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      var c = cf(u, void 0, void 0, void 0, l), f = c.countryCallingCode, h = c.number;
      if (r = h, a = f, !r)
        throw new Error("Invalid `number` argument passed: too short");
    }
    if (!r)
      throw new TypeError("`nationalNumber` argument is required");
    if (typeof r != "string")
      throw new TypeError("`nationalNumber` argument must be a string");
    Jy(l);
    var p = O6(a, l), g = p.country, b = p.countryCallingCode;
    this.country = g, this.countryCallingCode = b, this.nationalNumber = r, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return l;
    };
  }
  return N6(n, [{
    key: "setExt",
    value: function(r) {
      this.ext = r;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : q9(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return B9(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return G9(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var r = new ct(this.getMetadata());
      return r.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(r) {
      return this.number === r.number && this.ext === r.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return of(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(r, l) {
      return p6(this, r, l ? gg(gg({}, l), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(r) {
      return this.format("NATIONAL", r);
    }
  }, {
    key: "formatInternational",
    value: function(r) {
      return this.format("INTERNATIONAL", r);
    }
  }, {
    key: "getURI",
    value: function(r) {
      return this.format("RFC3966", r);
    }
  }]);
})(), T6 = function(a) {
  return /^[A-Z]{2}$/.test(a);
};
function O6(n, a) {
  var r, l, u = new ct(a);
  return T6(n) ? (r = n, u.selectNumberingPlan(r), l = u.countryCallingCode()) : l = n, {
    country: r,
    countryCallingCode: l
  };
}
var A6 = /^\+\d+$/;
function jd(n) {
  "@babel/helpers - typeof";
  return jd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, jd(n);
}
function R6(n, a, r) {
  return Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function _6(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function j6(n, a, r) {
  return a = bl(a), D6(n, df() ? Reflect.construct(a, r || [], bl(n).constructor) : a.apply(n, r));
}
function D6(n, a) {
  if (a && (jd(a) == "object" || typeof a == "function")) return a;
  if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return M6(n);
}
function M6(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function L6(n, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(a && a.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), a && vl(n, a);
}
function Dd(n) {
  var a = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Dd = function(l) {
    if (l === null || !P6(l)) return l;
    if (typeof l != "function") throw new TypeError("Super expression must either be null or a function");
    if (a !== void 0) {
      if (a.has(l)) return a.get(l);
      a.set(l, u);
    }
    function u() {
      return U6(l, arguments, bl(this).constructor);
    }
    return u.prototype = Object.create(l.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), vl(u, l);
  }, Dd(n);
}
function U6(n, a, r) {
  if (df()) return Reflect.construct.apply(null, arguments);
  var l = [null];
  l.push.apply(l, a);
  var u = new (n.bind.apply(n, l))();
  return r && vl(u, r.prototype), u;
}
function df() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (df = function() {
    return !!n;
  })();
}
function P6(n) {
  try {
    return Function.toString.call(n).indexOf("[native code]") !== -1;
  } catch {
    return typeof n == "function";
  }
}
function vl(n, a) {
  return vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, l) {
    return r.__proto__ = l, r;
  }, vl(n, a);
}
function bl(n) {
  return bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
    return a.__proto__ || Object.getPrototypeOf(a);
  }, bl(n);
}
var ta = /* @__PURE__ */ (function(n) {
  function a(r) {
    var l;
    return _6(this, a), l = j6(this, a, [r]), Object.setPrototypeOf(l, a.prototype), l.name = l.constructor.name, l;
  }
  return L6(a, n), R6(a);
})(/* @__PURE__ */ Dd(Error)), yg = new RegExp("(?:" + sp() + ")$", "i");
function k6(n) {
  var a = n.search(yg);
  if (a < 0)
    return {};
  for (var r = n.slice(0, a), l = n.match(yg), u = 1; u < l.length; ) {
    if (l[u])
      return {
        number: r,
        ext: l[u]
      };
    u++;
  }
}
function I6(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = B6(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B6(n, a) {
  if (n) {
    if (typeof n == "string") return pg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pg(n, a) : void 0;
  }
}
function pg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
var H6 = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function fp(n) {
  return H6[n];
}
function pu(n) {
  for (var a = "", r = I6(n.split("")), l; !(l = r()).done; ) {
    var u = l.value, c = fp(u);
    c && (a += c);
  }
  return a;
}
function z6(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = F6(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F6(n, a) {
  if (n) {
    if (typeof n == "string") return vg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vg(n, a) : void 0;
  }
}
function vg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function Md(n) {
  for (var a = "", r = z6(n.split("")), l; !(l = r()).done; ) {
    var u = l.value;
    a += mp(u, a) || "";
  }
  return a;
}
function mp(n, a, r) {
  if (n === "+") {
    if (a) {
      typeof r == "function" && r("end");
      return;
    }
    return "+";
  }
  return fp(n);
}
var hp = "+", G6 = "[\\-\\.\\(\\)]?", bg = "([" + _t + "]|" + G6 + ")", q6 = "^\\" + hp + bg + "*[" + _t + "]" + bg + "*$", K6 = new RegExp(q6, "g"), Ld = _t, V6 = "[" + Ld + "]+((\\-)*[" + Ld + "])*", Y6 = "a-zA-Z", X6 = "[" + Y6 + "]+((\\-)*[" + Ld + "])*", Z6 = "^(" + V6 + "\\.)*" + X6 + "\\.?$", Q6 = new RegExp(Z6, "g"), $g = "tel:", Ud = ";phone-context=", W6 = ";isub=";
function J6(n) {
  var a = n.indexOf(Ud);
  if (a < 0)
    return null;
  var r = a + Ud.length;
  if (r >= n.length)
    return "";
  var l = n.indexOf(";", r);
  return l >= 0 ? n.substring(r, l) : n.substring(r);
}
function e5(n) {
  return n === null ? !0 : n.length === 0 ? !1 : K6.test(n) || Q6.test(n);
}
function t5(n, a) {
  var r = a.extractFormattedPhoneNumber, l = J6(n);
  if (!e5(l))
    throw new ta("NOT_A_NUMBER");
  var u;
  if (l === null)
    u = r(n) || "";
  else {
    u = "", l.charAt(0) === hp && (u += l);
    var c = n.indexOf($g), f;
    c >= 0 ? f = c + $g.length : f = 0;
    var h = n.indexOf(Ud);
    u += n.substring(f, h);
  }
  var p = u.indexOf(W6);
  if (p > 0 && (u = u.substring(0, p)), u !== "")
    return u;
}
var n5 = 250, a5 = new RegExp("[" + Du + _t + "]"), r5 = new RegExp("[^" + _t + "#]+$");
function i5(n, a, r) {
  if (a = a || {}, r = new ct(r), a.defaultCountry && !r.hasCountry(a.defaultCountry))
    throw a.v2 ? new ta("INVALID_COUNTRY") : new Error("Unknown country: ".concat(a.defaultCountry));
  var l = o5(n, a.v2, a.extract), u = l.number, c = l.ext, f = l.error;
  if (!u) {
    if (a.v2)
      throw f === "TOO_SHORT" ? new ta("TOO_SHORT") : new ta("NOT_A_NUMBER");
    return {};
  }
  var h = s5(u, a.defaultCountry, a.defaultCallingCode, r), p = h.country, g = h.nationalNumber, b = h.countryCallingCode, $ = h.countryCallingCodeSource, N = h.carrierCode;
  if (!r.hasSelectedNumberingPlan()) {
    if (a.v2)
      throw new ta("INVALID_COUNTRY");
    return {};
  }
  if (!g || g.length < uf) {
    if (a.v2)
      throw new ta("TOO_SHORT");
    return {};
  }
  if (g.length > V9) {
    if (a.v2)
      throw new ta("TOO_LONG");
    return {};
  }
  if (a.v2) {
    var _ = new dp(b, g, r.metadata);
    return p && (_.country = p), N && (_.carrierCode = N), c && (_.ext = c), _.__countryCallingCodeSource = $, _;
  }
  var E = (a.extended ? r.hasSelectedNumberingPlan() : p) ? oa(g, r.nationalNumberPattern()) : !1;
  return a.extended ? {
    country: p,
    countryCallingCode: b,
    carrierCode: N,
    valid: E,
    possible: E ? !0 : !!(a.extended === !0 && r.possibleLengths() && np(g, p, r)),
    phone: g,
    ext: c
  } : E ? u5(p, g, c) : {};
}
function l5(n, a, r) {
  if (n) {
    if (n.length > n5) {
      if (r)
        throw new ta("TOO_LONG");
      return;
    }
    if (a === !1)
      return n;
    var l = n.search(a5);
    if (!(l < 0))
      return n.slice(l).replace(r5, "");
  }
}
function o5(n, a, r) {
  var l = t5(n, {
    extractFormattedPhoneNumber: function(f) {
      return l5(f, r, a);
    }
  });
  if (!l)
    return {};
  if (!h6(l))
    return g6(l) ? {
      error: "TOO_SHORT"
    } : {};
  var u = k6(l);
  return u.ext ? u : {
    number: l
  };
}
function u5(n, a, r) {
  var l = {
    country: n,
    phone: a
  };
  return r && (l.ext = r), l;
}
function s5(n, a, r, l) {
  var u = cf(Md(n), void 0, a, r, l.metadata), c = u.countryCallingCodeSource, f = u.countryCallingCode, h = u.number, p;
  if (f)
    l.selectNumberingPlan(f);
  else if (h && (a || r))
    l.selectNumberingPlan(a, r), a && (p = a), f = r || ka(a, l.metadata);
  else return {};
  if (!h)
    return {
      countryCallingCodeSource: c,
      countryCallingCode: f
    };
  var g = _d(Md(h), p, l), b = g.nationalNumber, $ = g.carrierCode, N = sf(f, {
    nationalNumber: b,
    metadata: l
  });
  return N && (p = N, N === "001" || l.selectNumberingPlan(p)), {
    country: p,
    countryCallingCode: f,
    countryCallingCodeSource: c,
    nationalNumber: b,
    carrierCode: $
  };
}
function $l(n) {
  "@babel/helpers - typeof";
  return $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, $l(n);
}
function wg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function Eg(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? wg(Object(r), !0).forEach(function(l) {
      c5(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : wg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function c5(n, a, r) {
  return (a = d5(a)) in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function d5(n) {
  var a = f5(n, "string");
  return $l(a) == "symbol" ? a : a + "";
}
function f5(n, a) {
  if ($l(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if ($l(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function m5(n, a, r) {
  return i5(n, Eg(Eg({}, a), {}, {
    v2: !0
  }), r);
}
function wl(n) {
  "@babel/helpers - typeof";
  return wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, wl(n);
}
function Sg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function h5(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Sg(Object(r), !0).forEach(function(l) {
      g5(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function g5(n, a, r) {
  return (a = y5(a)) in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function y5(n) {
  var a = p5(n, "string");
  return wl(a) == "symbol" ? a : a + "";
}
function p5(n, a) {
  if (wl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (wl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function v5(n, a) {
  return E5(n) || w5(n, a) || $5(n, a) || b5();
}
function b5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $5(n, a) {
  if (n) {
    if (typeof n == "string") return Cg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Cg(n, a) : void 0;
  }
}
function Cg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function w5(n, a) {
  var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r != null) {
    var l, u, c, f, h = [], p = !0, g = !1;
    try {
      if (c = (r = r.call(n)).next, a !== 0) for (; !(p = (l = c.call(r)).done) && (h.push(l.value), h.length !== a); p = !0) ;
    } catch (b) {
      g = !0, u = b;
    } finally {
      try {
        if (!p && r.return != null && (f = r.return(), Object(f) !== f)) return;
      } finally {
        if (g) throw u;
      }
    }
    return h;
  }
}
function E5(n) {
  if (Array.isArray(n)) return n;
}
function S5(n) {
  var a = Array.prototype.slice.call(n), r = v5(a, 4), l = r[0], u = r[1], c = r[2], f = r[3], h, p, g;
  if (typeof l == "string")
    h = l;
  else throw new TypeError("A text for parsing must be a string.");
  if (!u || typeof u == "string")
    f ? (p = c, g = f) : (p = void 0, g = c), u && (p = h5({
      defaultCountry: u
    }, p));
  else if (lr(u))
    c ? (p = u, g = c) : g = u;
  else throw new Error("Invalid second argument: ".concat(u));
  return {
    text: h,
    options: p,
    metadata: g
  };
}
function El(n) {
  "@babel/helpers - typeof";
  return El = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, El(n);
}
function Ng(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function xg(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Ng(Object(r), !0).forEach(function(l) {
      C5(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function C5(n, a, r) {
  return (a = N5(a)) in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function N5(n) {
  var a = x5(n, "string");
  return El(a) == "symbol" ? a : a + "";
}
function x5(n, a) {
  if (El(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (El(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function T5(n, a, r) {
  a && a.defaultCountry && !ep(a.defaultCountry, r) && (a = xg(xg({}, a), {}, {
    defaultCountry: void 0
  }));
  try {
    return m5(n, a, r);
  } catch (l) {
    if (!(l instanceof ta)) throw l;
  }
}
function gp() {
  var n = S5(arguments), a = n.text, r = n.options, l = n.metadata;
  return T5(a, r, l);
}
function Sl(n) {
  "@babel/helpers - typeof";
  return Sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Sl(n);
}
function O5(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function A5(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, _5(l.key), l);
  }
}
function R5(n, a, r) {
  return a && A5(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function _5(n) {
  var a = j5(n, "string");
  return Sl(a) == "symbol" ? a : a + "";
}
function j5(n, a) {
  if (Sl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (Sl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var D5 = /* @__PURE__ */ (function() {
  function n(a) {
    var r = a.onCountryChange, l = a.onCallingCodeChange;
    O5(this, n), this.onCountryChange = r, this.onCallingCodeChange = l;
  }
  return R5(n, [{
    key: "reset",
    value: function(r) {
      var l = r.country, u = r.callingCode;
      this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(l, u);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function() {
      this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberIsModified = !1, this.nationalPrefix = void 0, this.carrierCode = void 0, this.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix = void 0;
    }
  }, {
    key: "update",
    value: function(r) {
      for (var l = 0, u = Object.keys(r); l < u.length; l++) {
        var c = u[l];
        this[c] = r[c];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function(r, l) {
      this.setCountry(r), this.setCallingCode(l);
    }
  }, {
    key: "setCountry",
    value: function(r) {
      this.country = r, this.onCountryChange(r);
    }
  }, {
    key: "setCallingCode",
    value: function(r) {
      this.callingCode = r, this.onCallingCodeChange(r, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function(r, l) {
      this.international = !0, this.initCountryAndCallingCode(r, l);
    }
  }, {
    key: "appendDigits",
    value: function(r) {
      this.digits += r;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function(r) {
      this.nationalSignificantNumber += r;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function() {
      return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function() {
      return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits;
    }
  }]);
})();
function M5(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = L5(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L5(n, a) {
  if (n) {
    if (typeof n == "string") return Tg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Tg(n, a) : void 0;
  }
}
function Tg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
var En = "x", yd = new RegExp(En);
function cu(n, a) {
  if (a < 1)
    return "";
  for (var r = ""; a > 1; )
    a & 1 && (r += n), a >>= 1, n += n;
  return r + n;
}
function Og(n, a) {
  return n[a] === ")" && a++, U5(n.slice(0, a));
}
function U5(n) {
  for (var a = [], r = 0; r < n.length; )
    n[r] === "(" ? a.push(r) : n[r] === ")" && a.pop(), r++;
  var l = 0, u = "";
  a.push(n.length);
  for (var c = 0, f = a; c < f.length; c++) {
    var h = f[c];
    u += n.slice(l, h), l = h + 1;
  }
  return u;
}
function P5(n, a, r) {
  for (var l = M5(r.split("")), u; !(u = l()).done; ) {
    var c = u.value;
    if (n.slice(a + 1).search(yd) < 0)
      return;
    a = n.search(yd), n = n.replace(yd, c);
  }
  return [n, a];
}
function k5(n, a, r) {
  var l = r.metadata, u = r.shouldTryNationalPrefixFormattingRule, c = r.getSeparatorAfterNationalPrefix, f = new RegExp("^(?:".concat(a.pattern(), ")$"));
  if (f.test(n.nationalSignificantNumber))
    return B5(n, a, {
      metadata: l,
      shouldTryNationalPrefixFormattingRule: u,
      getSeparatorAfterNationalPrefix: c
    });
}
function I5(n, a, r) {
  return ju(n, a, r) === "IS_POSSIBLE";
}
function B5(n, a, r) {
  var l = r.metadata, u = r.shouldTryNationalPrefixFormattingRule, c = r.getSeparatorAfterNationalPrefix;
  if (n.nationalSignificantNumber, n.international, n.nationalPrefix, n.carrierCode, u(a)) {
    var f = Ag(n, a, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: c,
      metadata: l
    });
    if (f)
      return f;
  }
  return Ag(n, a, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: c,
    metadata: l
  });
}
function Ag(n, a, r) {
  var l = r.metadata, u = r.useNationalPrefixFormattingRule, c = r.getSeparatorAfterNationalPrefix, f = up(n.nationalSignificantNumber, a, {
    carrierCode: n.carrierCode,
    useInternationalFormat: n.international,
    withNationalPrefix: u,
    metadata: l
  });
  if (u || (n.nationalPrefix ? f = n.nationalPrefix + c(a) + f : n.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix && (f = n.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix + " " + f)), H5(f, n))
    return f;
}
function H5(n, a) {
  return pu(n) === a.getNationalDigits();
}
function Cl(n) {
  "@babel/helpers - typeof";
  return Cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Cl(n);
}
function z5(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function F5(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, q5(l.key), l);
  }
}
function G5(n, a, r) {
  return a && F5(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function q5(n) {
  var a = K5(n, "string");
  return Cl(a) == "symbol" ? a : a + "";
}
function K5(n, a) {
  if (Cl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (Cl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var V5 = /* @__PURE__ */ (function() {
  function n() {
    z5(this, n);
  }
  return G5(n, [{
    key: "parse",
    value: function(r) {
      if (this.context = [{
        or: !0,
        instructions: []
      }], this.parsePattern(r), this.context.length !== 1)
        throw new Error("Non-finalized contexts left when pattern parse ended");
      var l = this.context[0], u = l.branches, c = l.instructions;
      if (u)
        return {
          op: "|",
          args: u.concat([pd(c)])
        };
      if (c.length === 0)
        throw new Error("Pattern is required");
      return c.length === 1 ? c[0] : c;
    }
  }, {
    key: "startContext",
    value: function(r) {
      this.context.push(r);
    }
  }, {
    key: "endContext",
    value: function() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function(r) {
      if (!r)
        throw new Error("Pattern is required");
      var l = r.match(Z5);
      if (!l) {
        if (X5.test(r))
          throw new Error("Illegal characters found in a pattern: ".concat(r));
        this.getContext().instructions = this.getContext().instructions.concat(r.split(""));
        return;
      }
      var u = l[1], c = r.slice(0, l.index), f = r.slice(l.index + u.length);
      switch (u) {
        case "(?:":
          c && this.parsePattern(c), this.startContext({
            or: !0,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or)
            throw new Error('")" operator must be preceded by "(?:" operator');
          if (c && this.parsePattern(c), this.getContext().instructions.length === 0)
            throw new Error('No instructions found after "|" operator in an "or" group');
          var h = this.getContext(), p = h.branches;
          p.push(pd(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
            op: "|",
            args: p
          });
          break;
        case "|":
          if (!this.getContext().or)
            throw new Error('"|" operator can only be used inside "or" groups');
          if (c && this.parsePattern(c), !this.getContext().branches)
            if (this.context.length === 1)
              this.getContext().branches = [];
            else
              throw new Error('"branches" not found in an "or" group context');
          this.getContext().branches.push(pd(this.getContext().instructions)), this.getContext().instructions = [];
          break;
        case "[":
          c && this.parsePattern(c), this.startContext({
            oneOfSet: !0
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet)
            throw new Error('"]" operator must be preceded by "[" operator');
          this.endContext(), this.getContext().instructions.push({
            op: "[]",
            args: Y5(c)
          });
          break;
        /* istanbul ignore next */
        default:
          throw new Error("Unknown operator: ".concat(u));
      }
      f && this.parsePattern(f);
    }
  }]);
})();
function Y5(n) {
  for (var a = [], r = 0; r < n.length; ) {
    if (n[r] === "-") {
      if (r === 0 || r === n.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(n));
      for (var l = n[r - 1].charCodeAt(0) + 1, u = n[r + 1].charCodeAt(0) - 1, c = l; c <= u; )
        a.push(String.fromCharCode(c)), c++;
    } else
      a.push(n[r]);
    r++;
  }
  return a;
}
var X5 = /[\(\)\[\]\?\:\|]/, Z5 = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function pd(n) {
  return n.length === 1 ? n[0] : n;
}
function Rg(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = Q5(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q5(n, a) {
  if (n) {
    if (typeof n == "string") return _g(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _g(n, a) : void 0;
  }
}
function _g(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function Nl(n) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Nl(n);
}
function W5(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function J5(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, t$(l.key), l);
  }
}
function e$(n, a, r) {
  return a && J5(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function t$(n) {
  var a = n$(n, "string");
  return Nl(a) == "symbol" ? a : a + "";
}
function n$(n, a) {
  if (Nl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (Nl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var a$ = /* @__PURE__ */ (function() {
  function n(a) {
    W5(this, n), this.matchTree = new V5().parse(a);
  }
  return e$(n, [{
    key: "match",
    value: function(r) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = l.allowOverflow;
      if (!r)
        throw new Error("String is required");
      var c = Pd(r.split(""), this.matchTree, !0);
      if (c && c.match && delete c.matchedChars, !(c && c.overflow && !u))
        return c;
    }
  }]);
})();
function Pd(n, a, r) {
  if (typeof a == "string") {
    var l = n.join("");
    return a.indexOf(l) === 0 ? n.length === a.length ? {
      match: !0,
      matchedChars: n
    } : {
      partialMatch: !0
      // matchedChars: characters
    } : l.indexOf(a) === 0 ? r && n.length > a.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: n.slice(0, a.length)
    } : void 0;
  }
  if (Array.isArray(a)) {
    for (var u = n.slice(), c = 0; c < a.length; ) {
      var f = a[c], h = Pd(u, f, r && c === a.length - 1);
      if (h) {
        if (h.overflow)
          return h;
        if (h.match) {
          if (u = u.slice(h.matchedChars.length), u.length === 0)
            return c === a.length - 1 ? {
              match: !0,
              matchedChars: n
            } : {
              partialMatch: !0
              // matchedChars: characters
            };
        } else {
          if (h.partialMatch)
            return {
              partialMatch: !0
              // matchedChars: characters
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(h, null, 2)));
        }
      } else return;
      c++;
    }
    return r ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: n.slice(0, n.length - u.length)
    };
  }
  switch (a.op) {
    case "|":
      for (var p, g = Rg(a.args), b; !(b = g()).done; ) {
        var $ = b.value, N = Pd(n, $, r);
        if (N) {
          if (N.overflow)
            return N;
          if (N.match)
            return {
              match: !0,
              matchedChars: N.matchedChars
            };
          if (N.partialMatch)
            p = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(N, null, 2)));
        }
      }
      return p ? {
        partialMatch: !0
        // matchedChars: ...
      } : void 0;
    case "[]":
      for (var _ = Rg(a.args), E; !(E = _()).done; ) {
        var A = E.value;
        if (n[0] === A)
          return n.length === 1 ? {
            match: !0,
            matchedChars: n
          } : r ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [A]
          };
      }
      return;
    /* istanbul ignore next */
    default:
      throw new Error("Unsupported instruction tree: ".concat(a));
  }
}
function xl(n) {
  "@babel/helpers - typeof";
  return xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, xl(n);
}
function jg(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = r$(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r$(n, a) {
  if (n) {
    if (typeof n == "string") return Dg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Dg(n, a) : void 0;
  }
}
function Dg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function i$(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function l$(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, u$(l.key), l);
  }
}
function o$(n, a, r) {
  return a && l$(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function u$(n) {
  var a = s$(n, "string");
  return xl(a) == "symbol" ? a : a + "";
}
function s$(n, a) {
  if (xl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (xl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var kd = "9", c$ = 15, d$ = cu(kd, c$), f$ = /[- ]/, m$ = function() {
  return /\[([^\[\]])*\]/g;
}, h$ = function() {
  return /\d(?=[^,}][^,}])/g;
}, g$ = new RegExp("[" + Cn + "]*\\$1[" + Cn + "]*(\\$\\d[" + Cn + "]*)*$"), Mg = 3, y$ = /* @__PURE__ */ (function() {
  function n(a) {
    a.state;
    var r = a.metadata;
    i$(this, n), this.metadata = r, this.resetFormat();
  }
  return o$(n, [{
    key: "resetFormat",
    value: function() {
      this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function(r, l) {
      this.resetFormat(), r ? (this.isNANP = r.callingCode() === "1", this.matchingFormats = r.formats(), l.nationalSignificantNumber && this.narrowDownMatchingFormats(l)) : (this.isNANP = void 0, this.matchingFormats = []);
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function(r, l) {
      var u = this;
      if (I5(l.nationalSignificantNumber, l.country, this.metadata))
        for (var c = jg(this.matchingFormats), f; !(f = c()).done; ) {
          var h = f.value, p = k5(l, h, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function(b) {
              return u.shouldTryNationalPrefixFormattingRule(b, {
                international: l.international,
                nationalPrefix: l.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function(b) {
              return u.getSeparatorAfterNationalPrefix(b);
            }
          });
          if (p)
            return this.resetFormat(), this.chosenFormat = h, this.setNationalNumberTemplate(p.replace(/\d/g, En), l), this.populatedNationalNumberTemplate = p, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(En), p;
        }
      return this.formatNationalNumberWithNextDigits(r, l);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function(r, l) {
      var u = this.chosenFormat, c = this.chooseFormat(l);
      if (c)
        return c === u ? this.formatNextNationalNumberDigits(r) : this.formatNextNationalNumberDigits(l.getNationalDigits());
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function(r) {
      var l = this, u = r.nationalSignificantNumber, c = r.nationalPrefix, f = r.international, h = u, p = h.length - Mg;
      p < 0 && (p = 0), this.matchingFormats = this.matchingFormats.filter(function(g) {
        return l.formatSuits(g, f, c) && l.formatMatches(g, h, p);
      }), this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat();
    }
  }, {
    key: "formatSuits",
    value: function(r, l, u) {
      return !(u && !r.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !r.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !l && !u && r.nationalPrefixIsMandatoryWhenFormattingInNationalFormat());
    }
  }, {
    key: "formatMatches",
    value: function(r, l, u) {
      var c = r.leadingDigitsPatterns().length;
      if (c === 0)
        return !0;
      u = Math.min(u, c - 1);
      var f = r.leadingDigitsPatterns()[u];
      if (l.length < Mg)
        try {
          return new a$(f).match(l, {
            allowOverflow: !0
          }) !== void 0;
        } catch (h) {
          return console.error(h), !0;
        }
      return new RegExp("^(".concat(f, ")")).test(l);
    }
  }, {
    key: "getFormatFormat",
    value: function(r, l) {
      return l ? r.internationalFormat() : r.format();
    }
  }, {
    key: "chooseFormat",
    value: function(r) {
      for (var l = this, u = function() {
        var g = h.value;
        return l.chosenFormat === g ? 0 : g$.test(l.getFormatFormat(g, r.international)) ? l.createTemplateForFormat(g, r) ? (l.chosenFormat = g, 0) : (l.matchingFormats = l.matchingFormats.filter(function(b) {
          return b !== g;
        }), 1) : 1;
      }, c, f = jg(this.matchingFormats.slice()), h; !(h = f()).done && (c = u(), c !== 0); )
        ;
      return this.chosenFormat || this.resetFormat(), this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function(r, l) {
      if (!(r.pattern().indexOf("|") >= 0)) {
        var u = this.getTemplateForFormat(r, l);
        if (u)
          return this.setNationalNumberTemplate(u, l), !0;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function(r) {
      return this.isNANP || r && r.nationalPrefixFormattingRule() && f$.test(r.nationalPrefixFormattingRule()) ? " " : "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function(r, l) {
      var u = r.IDDPrefix, c = r.missingPlus;
      return u ? l && l.spacing === !1 ? u : u + " " : c ? "" : "+";
    }
  }, {
    key: "getTemplate",
    value: function(r) {
      if (this.template) {
        for (var l = -1, u = 0, c = r.international ? this.getInternationalPrefixBeforeCountryCallingCode(r, {
          spacing: !1
        }) : ""; u < c.length + r.getDigitsWithoutInternationalPrefix().length; )
          l = this.template.indexOf(En, l + 1), u++;
        return Og(this.template, l + 1);
      }
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function(r, l) {
      this.nationalNumberTemplate = r, this.populatedNationalNumberTemplate = r, this.populatedNationalNumberTemplatePosition = -1, l.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(l).replace(/[\d\+]/g, En) + cu(En, l.callingCode.length) + " " + r : this.template = r;
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function(r, l) {
      var u = l.nationalSignificantNumber, c = l.international, f = l.nationalPrefix, h = l.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix, p = r.pattern();
      p = p.replace(m$(), "\\d").replace(h$(), "\\d");
      var g = d$.match(p)[0];
      if (!(u.length > g.length)) {
        var b = new RegExp("^" + p + "$"), $ = u.replace(/\d/g, kd);
        b.test($) && (g = $);
        var N = this.getFormatFormat(r, c), _;
        if (this.shouldTryNationalPrefixFormattingRule(r, {
          international: c,
          nationalPrefix: f
        })) {
          var E = N.replace(op, r.nationalPrefixFormattingRule());
          if (pu(r.nationalPrefixFormattingRule()) === (f || "") + pu("$1") && (N = E, _ = !0, f))
            for (var A = f.length; A > 0; )
              N = N.replace(/\d/, En), A--;
        }
        var C = g.replace(new RegExp(p), N).replace(new RegExp(kd, "g"), En);
        return _ || (h ? C = cu(En, h.length) + " " + C : f && (C = cu(En, f.length) + this.getSeparatorAfterNationalPrefix(r) + C)), c && (C = lp(C)), C;
      }
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function(r) {
      var l = P5(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, r);
      if (!l) {
        this.resetFormat();
        return;
      }
      return this.populatedNationalNumberTemplate = l[0], this.populatedNationalNumberTemplatePosition = l[1], Og(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function(r, l) {
      var u = l.international, c = l.nationalPrefix;
      if (r.nationalPrefixFormattingRule()) {
        var f = r.usesNationalPrefix();
        if (f && c || !f && !u)
          return !0;
      }
    }
  }]);
})();
function Tl(n) {
  "@babel/helpers - typeof";
  return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Tl(n);
}
function yp(n, a) {
  return $$(n) || b$(n, a) || v$(n, a) || p$();
}
function p$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v$(n, a) {
  if (n) {
    if (typeof n == "string") return Lg(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Lg(n, a) : void 0;
  }
}
function Lg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function b$(n, a) {
  var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r != null) {
    var l, u, c, f, h = [], p = !0, g = !1;
    try {
      if (c = (r = r.call(n)).next, a !== 0) for (; !(p = (l = c.call(r)).done) && (h.push(l.value), h.length !== a); p = !0) ;
    } catch (b) {
      g = !0, u = b;
    } finally {
      try {
        if (!p && r.return != null && (f = r.return(), Object(f) !== f)) return;
      } finally {
        if (g) throw u;
      }
    }
    return h;
  }
}
function $$(n) {
  if (Array.isArray(n)) return n;
}
function w$(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function E$(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, C$(l.key), l);
  }
}
function S$(n, a, r) {
  return a && E$(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function C$(n) {
  var a = N$(n, "string");
  return Tl(a) == "symbol" ? a : a + "";
}
function N$(n, a) {
  if (Tl(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (Tl(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var x$ = "[" + Cn + _t + "]+", T$ = new RegExp("^" + x$ + "$", "i"), O$ = "(?:[" + Du + "][" + Cn + _t + "]*|[" + Cn + _t + "]+)", A$ = new RegExp("[^" + Cn + _t + "]+.*$"), R$ = /[^\d\[\]]/, _$ = /* @__PURE__ */ (function() {
  function n(a) {
    var r = a.defaultCountry, l = a.defaultCallingCode, u = a.metadata, c = a.onNationalSignificantNumberChange;
    w$(this, n), this.defaultCountry = r, this.defaultCallingCode = l, this.metadata = u, this.onNationalSignificantNumberChange = c;
  }
  return S$(n, [{
    key: "input",
    value: function(r, l) {
      var u = M$(r), c = yp(u, 2), f = c[0], h = c[1], p = pu(f), g;
      return h && (l.digits || (l.startInternationalNumber(void 0, void 0), p || (g = !0))), p && this.inputDigits(p, l), {
        digits: p,
        justLeadingPlus: g
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function(r, l) {
      var u = l.digits, c = u.length < 3 && u.length + r.length >= 3;
      if (l.appendDigits(r), c && this.extractIddPrefix(l), this.isWaitingForCountryCallingCode(l)) {
        if (!this.extractCountryCallingCode(l))
          return;
      } else
        l.appendNationalSignificantNumberDigits(r);
      l.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(l.getNationalDigits(), function(f) {
        return l.update(f);
      });
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function(r) {
      var l = r.international, u = r.callingCode;
      return l && !u;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function(r) {
      var l = cf("+" + r.getDigitsWithoutInternationalPrefix(), r.country, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), u = l.countryCallingCode, c = l.number;
      if (u)
        return r.setCallingCode(u), r.update({
          nationalSignificantNumber: c
        }), !0;
    }
  }, {
    key: "reset",
    value: function(r) {
      if (r) {
        this.hasSelectedNumberingPlan = !0;
        var l = r._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = l && R$.test(l);
      } else
        this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function(r, l) {
      if (this.hasSelectedNumberingPlan) {
        var u = Rd(r, this.metadata), c = u.nationalPrefix, f = u.nationalNumber, h = u.carrierCode;
        if (f !== r)
          return this.onExtractedNationalNumber(c, h, f, r, l), !0;
      }
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function(r, l, u) {
      if (!this.hasExtractedNationalSignificantNumber)
        return this.extractNationalSignificantNumber(r, u);
      if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        var c = Rd(r, this.metadata), f = c.nationalPrefix, h = c.nationalNumber, p = c.carrierCode;
        if (h !== l)
          return this.onExtractedNationalNumber(f, p, h, r, u), !0;
      }
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function(r, l, u, c, f) {
      var h = !1, p, g = c.lastIndexOf(u);
      if (g < 0 || g !== c.length - u.length)
        h = !0;
      else {
        var b = c.slice(0, g);
        b && b !== r && (p = b);
      }
      f({
        nationalPrefix: r,
        carrierCode: l,
        nationalSignificantNumber: u,
        nationalSignificantNumberIsModified: h,
        prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix: p
      }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function(r) {
      if (this.extractAnotherNationalSignificantNumber(r.getNationalDigits(), r.nationalSignificantNumber, function(l) {
        return r.update(l);
      }))
        return !0;
      if (this.extractIddPrefix(r))
        return this.extractCallingCodeAndNationalSignificantNumber(r), !0;
      if (this.fixMissingPlus(r))
        return this.extractCallingCodeAndNationalSignificantNumber(r), !0;
    }
  }, {
    key: "extractIddPrefix",
    value: function(r) {
      var l = r.international, u = r.IDDPrefix, c = r.digits;
      if (r.nationalSignificantNumber, !(l || u)) {
        var f = ap(c, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
        if (f !== void 0 && f !== c)
          return r.update({
            IDDPrefix: c.slice(0, c.length - f.length)
          }), this.startInternationalNumber(r, {
            country: void 0,
            callingCode: void 0
          }), !0;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function(r) {
      if (!r.international) {
        var l = ip(r.digits, r.country, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), u = l.countryCallingCode;
        if (u)
          return r.update({
            missingPlus: !0
          }), this.startInternationalNumber(r, {
            country: r.country,
            callingCode: u
          }), !0;
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function(r, l) {
      var u = l.country, c = l.callingCode;
      r.startInternationalNumber(u, c), r.nationalSignificantNumber && (r.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0);
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function(r) {
      this.extractCountryCallingCode(r) && this.extractNationalSignificantNumber(r.getNationalDigits(), function(l) {
        return r.update(l);
      });
    }
  }]);
})();
function j$(n) {
  var a = n.search(O$);
  if (!(a < 0)) {
    n = n.slice(a);
    var r;
    return n[0] === "+" && (r = !0, n = n.slice(1)), n = n.replace(A$, ""), r && (n = "+" + n), n;
  }
}
function D$(n) {
  var a = j$(n) || "";
  return a[0] === "+" ? [a.slice(1), !0] : [a];
}
function M$(n) {
  var a = D$(n), r = yp(a, 2), l = r[0], u = r[1];
  return T$.test(l) || (l = ""), [l, u];
}
function Ol(n) {
  "@babel/helpers - typeof";
  return Ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Ol(n);
}
function L$(n, a) {
  return I$(n) || k$(n, a) || P$(n, a) || U$();
}
function U$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P$(n, a) {
  if (n) {
    if (typeof n == "string") return Ug(n, a);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ug(n, a) : void 0;
  }
}
function Ug(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function k$(n, a) {
  var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r != null) {
    var l, u, c, f, h = [], p = !0, g = !1;
    try {
      if (c = (r = r.call(n)).next, a !== 0) for (; !(p = (l = c.call(r)).done) && (h.push(l.value), h.length !== a); p = !0) ;
    } catch (b) {
      g = !0, u = b;
    } finally {
      try {
        if (!p && r.return != null && (f = r.return(), Object(f) !== f)) return;
      } finally {
        if (g) throw u;
      }
    }
    return h;
  }
}
function I$(n) {
  if (Array.isArray(n)) return n;
}
function B$(n, a) {
  if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function H$(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, F$(l.key), l);
  }
}
function z$(n, a, r) {
  return a && H$(n.prototype, a), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function F$(n) {
  var a = G$(n, "string");
  return Ol(a) == "symbol" ? a : a + "";
}
function G$(n, a) {
  if (Ol(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (Ol(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
var gi = /* @__PURE__ */ (function() {
  function n(a, r) {
    B$(this, n), this.metadata = new ct(r);
    var l = this.getCountryAndCallingCode(a), u = L$(l, 2), c = u[0], f = u[1];
    this.defaultCountry = c, this.defaultCallingCode = f, this.reset();
  }
  return z$(n, [{
    key: "getCountryAndCallingCode",
    value: function(r) {
      var l, u;
      return r && (lr(r) ? (l = r.defaultCountry, u = r.defaultCallingCode) : l = r), l && !this.metadata.hasCountry(l) && (l = void 0), [l, u];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function(r) {
      var l = this.parser.input(r, this.state), u = l.digits, c = l.justLeadingPlus;
      if (c)
        this.formattedOutput = "+";
      else if (u) {
        this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
        var f;
        if (this.metadata.hasSelectedNumberingPlan() && (f = this.formatter.format(u, this.state)), f === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
          this.determineTheCountryIfNeeded();
          var h = this.state.getNationalDigits();
          h && (f = this.formatter.format(h, this.state));
        }
        this.formattedOutput = f ? this.getFullNumber(f) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function() {
      var r = this;
      return this.state = new D5({
        onCountryChange: function(u) {
          r.country = u;
        },
        onCallingCodeChange: function(u, c) {
          r.metadata.selectNumberingPlan(c, u), r.formatter.reset(r.metadata.numberingPlan, r.state), r.parser.reset(r.metadata.numberingPlan);
        }
      }), this.formatter = new y$({
        state: this.state,
        metadata: this.metadata
      }), this.parser = new _$({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function() {
          r.determineTheCountryIfNeeded(), r.formatter.reset(r.metadata.numberingPlan, r.state);
        }
      }), this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      }), this.formattedOutput = "", this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function() {
      if (this.isInternational())
        return this.state.callingCode;
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function() {
      var r = this.state.digits;
      if (r)
        return this._getCountry();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function() {
      var r = this.state.country;
      return r;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function() {
      (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry();
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function(r) {
      var l = this;
      if (this.isInternational()) {
        var u = function(h) {
          return l.formatter.getInternationalPrefixBeforeCountryCallingCode(l.state, {
            spacing: !!h
          }) + h;
        }, c = this.state.callingCode;
        return u(c ? r ? "".concat(c, " ").concat(r) : c : "".concat(this.state.getDigitsWithoutInternationalPrefix()));
      }
      return r;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function() {
      var r = this.state, l = r.nationalSignificantNumber, u = r.prefixBeforeNationalSignificantNumberThatIsNotNationalPrefix, c = r.nationalPrefix, f = l, h = u || c;
      return h && (f = h + f), f;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function() {
      var r = this.state.nationalSignificantNumberIsModified;
      return this.getFullNumber(r ? this.state.getNationalDigits() : this.getNonFormattedNationalNumberWithPrefix());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function() {
      var r = this.getNonFormattedNumber();
      if (r)
        return r.replace(/[\+\d]/g, En);
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function() {
      var r = this.state.callingCode, l = this.metadata.getCountryCodesForCallingCode(r);
      return l && l.length > 1;
    }
    // Determines the exact country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function() {
      this.state.setCountry(sf(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        metadata: this.metadata
      }));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function() {
      var r = this.state, l = r.digits, u = r.callingCode, c = r.country, f = r.nationalSignificantNumber;
      if (l) {
        if (this.isInternational())
          return u ? "+" + u + f : "+" + l;
        if (c || u) {
          var h = c ? this.metadata.countryCallingCode() : u;
          return "+" + h + f;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function() {
      var r = this.state, l = r.nationalSignificantNumber, u = r.carrierCode, c = r.callingCode, f = this._getCountry();
      if (l && !(!f && !c)) {
        if (f && f === this.defaultCountry) {
          var h = new ct(this.metadata.metadata);
          h.selectNumberingPlan(f);
          var p = h.numberingPlan.callingCode(), g = this.metadata.getCountryCodesForCallingCode(p);
          if (g.length > 1) {
            var b = rp(l, {
              countries: g,
              metadata: this.metadata.metadata
            });
            b && (f = b);
          }
        }
        var $ = new dp(f || c, l, this.metadata.metadata);
        return u && ($.carrierCode = u), $;
      }
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function() {
      var r = this.getNumber();
      return r ? r.isPossible() : !1;
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function() {
      var r = this.getNumber();
      return r ? r.isValid() : !1;
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]);
})();
function Pg(n) {
  return new ct(n).getCountries();
}
function q$(n, a, r) {
  return r || (r = a, a = void 0), new gi(a, r).input(n);
}
function pp(n) {
  var a = n.inputFormat, r = n.country, l = n.metadata;
  return a === "NATIONAL_PART_OF_INTERNATIONAL" ? "+".concat(ka(r, l)) : "";
}
function Id(n, a) {
  return a && (n = n.slice(a.length), n[0] === " " && (n = n.slice(1))), n;
}
function K$(n, a, r) {
  if (!(r && r.ignoreRest)) {
    var l = function(c) {
      r && c === "end" && (r.ignoreRest = !0);
    };
    return mp(n, a, l);
  }
}
function vp(n) {
  var a = n.onKeyDown, r = n.inputFormat;
  return w.useCallback(function(l) {
    if (l.keyCode === Y$ && r === "INTERNATIONAL" && l.target instanceof HTMLInputElement && V$(l.target) === X$.length) {
      l.preventDefault();
      return;
    }
    a && a(l);
  }, [a, r]);
}
function V$(n) {
  return n.selectionStart;
}
var Y$ = 8, X$ = "+", Z$ = ["onKeyDown", "country", "inputFormat", "metadata", "international", "withCountryCallingCode"];
function Bd() {
  return Bd = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, Bd.apply(this, arguments);
}
function Q$(n, a) {
  if (n == null) return {};
  var r = W$(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function W$(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function J$(n) {
  function a(r, l) {
    var u = r.onKeyDown, c = r.country, f = r.inputFormat, h = r.metadata, p = h === void 0 ? n : h;
    r.international, r.withCountryCallingCode;
    var g = Q$(r, Z$), b = w.useCallback(function(N) {
      var _ = new gi(c, p), E = pp({
        inputFormat: f,
        country: c,
        metadata: p
      }), A = _.input(E + N), C = _.getTemplate();
      return E && (A = Id(A, E), C && (C = Id(C, E))), {
        text: A,
        template: C
      };
    }, [c, p]), $ = vp({
      onKeyDown: u,
      inputFormat: f
    });
    return /* @__PURE__ */ ue.createElement(gu, Bd({}, g, {
      ref: l,
      parse: K$,
      format: b,
      onKeyDown: $
    }));
  }
  return a = /* @__PURE__ */ ue.forwardRef(a), a.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: K.string.isRequired,
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: K.func.isRequired,
    /**
     * A function of `event: Event`.
     * Handles `keydown` events.
     */
    onKeyDown: K.func,
    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * This property should've been called `defaultCountry`
     * because it only applies when the user inputs a phone number in a national format
     * and is completely ignored when the user inputs a phone number in an international format.
     */
    country: K.string,
    /**
     * The format that the input field value is being input/output in.
     */
    inputFormat: K.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: K.object
  }, a;
}
const e7 = J$();
var t7 = ["value", "onChange", "onKeyDown", "country", "inputFormat", "metadata", "inputComponent", "international", "withCountryCallingCode"];
function Hd() {
  return Hd = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, Hd.apply(this, arguments);
}
function n7(n, a) {
  if (n == null) return {};
  var r = a7(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function a7(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function r7(n) {
  function a(r, l) {
    var u = r.value, c = r.onChange, f = r.onKeyDown, h = r.country, p = r.inputFormat, g = r.metadata, b = g === void 0 ? n : g, $ = r.inputComponent, N = $ === void 0 ? "input" : $;
    r.international, r.withCountryCallingCode;
    var _ = n7(r, t7), E = pp({
      inputFormat: p,
      country: h,
      metadata: b
    }), A = w.useCallback(function(M) {
      var H = Md(M.target.value);
      if (H === u) {
        var q = kg(E, H, h, b);
        q.indexOf(M.target.value) === 0 && (H = H.slice(0, -1));
      }
      c(H);
    }, [E, u, c, h, b]), C = vp({
      onKeyDown: f,
      inputFormat: p
    });
    return /* @__PURE__ */ ue.createElement(N, Hd({}, _, {
      ref: l,
      value: kg(E, u, h, b),
      onChange: A,
      onKeyDown: C
    }));
  }
  return a = /* @__PURE__ */ ue.forwardRef(a), a.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: K.string.isRequired,
    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: K.func.isRequired,
    /**
     * A function of `event: Event`.
     * Handles `keydown` events.
     */
    onKeyDown: K.func,
    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * This property should've been called `defaultCountry`
     * because it only applies when the user inputs a phone number in a national format
     * and is completely ignored when the user inputs a phone number in an international format.
     */
    country: K.string,
    /**
     * The format that the input field value is being input/output in.
     */
    inputFormat: K.oneOf(["INTERNATIONAL", "NATIONAL_PART_OF_INTERNATIONAL", "NATIONAL", "INTERNATIONAL_OR_NATIONAL"]).isRequired,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: K.object,
    /**
     * The `<input/>` component.
     */
    inputComponent: K.elementType
  }, a;
}
const i7 = r7();
function kg(n, a, r, l) {
  return Id(q$(n + a, r, l), n);
}
function l7(n) {
  return Ig(n[0]) + Ig(n[1]);
}
function Ig(n) {
  return String.fromCodePoint(127397 + n.toUpperCase().charCodeAt(0));
}
var o7 = ["value", "onChange", "options", "disabled", "readOnly"], u7 = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];
function s7(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = c7(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c7(n, a) {
  if (n) {
    if (typeof n == "string") return Bg(n, a);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set") return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bg(n, a);
  }
}
function Bg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = new Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function vu() {
  return vu = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, vu.apply(this, arguments);
}
function bp(n, a) {
  if (n == null) return {};
  var r = d7(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function d7(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function $p(n) {
  var a = n.value, r = n.onChange, l = n.options, u = n.disabled, c = n.readOnly, f = bp(n, o7), h = w.useCallback(function(p) {
    var g = p.target.value;
    r(g === "ZZ" ? void 0 : g);
  }, [r]);
  return w.useMemo(function() {
    return Ep(l, a);
  }, [l, a]), /* @__PURE__ */ ue.createElement("select", vu({}, f, {
    disabled: u || c,
    readOnly: c,
    value: a || "ZZ",
    onChange: h
  }), l.map(function(p) {
    var g = p.value, b = p.label, $ = p.divider;
    return /* @__PURE__ */ ue.createElement("option", {
      key: $ ? "|" : g || "ZZ",
      value: $ ? "|" : g || "ZZ",
      disabled: !!$,
      style: $ ? f7 : void 0
    }, b);
  }));
}
$p.propTypes = {
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value: K.string,
  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: K.func.isRequired,
  // `<select/>` options.
  options: K.arrayOf(K.shape({
    value: K.string,
    label: K.string,
    divider: K.bool
  })).isRequired,
  // `readonly` attribute doesn't work on a `<select/>`.
  // https://github.com/catamphetamine/react-phone-number-input/issues/419#issuecomment-1764384480
  // https://www.delftstack.com/howto/html/html-select-readonly/
  // To work around that, if `readOnly: true` property is passed
  // to this component, it behaves analogous to `disabled: true`.
  disabled: K.bool,
  readOnly: K.bool
};
var f7 = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit"
};
function wp(n) {
  var a = n.value, r = n.options, l = n.className, u = n.iconComponent;
  n.getIconAspectRatio;
  var c = n.arrowComponent, f = c === void 0 ? m7 : c, h = n.unicodeFlags, p = bp(n, u7), g = w.useMemo(function() {
    return Ep(r, a);
  }, [r, a]);
  return /* @__PURE__ */ ue.createElement("div", {
    className: "PhoneInputCountry"
  }, /* @__PURE__ */ ue.createElement($p, vu({}, p, {
    value: a,
    options: r,
    className: hu("PhoneInputCountrySelect", l)
  })), g && (h && a ? /* @__PURE__ */ ue.createElement("div", {
    className: "PhoneInputCountryIconUnicode"
  }, l7(a)) : /* @__PURE__ */ ue.createElement(u, {
    "aria-hidden": !0,
    country: a,
    label: g.label,
    aspectRatio: h ? 1 : void 0
  })), /* @__PURE__ */ ue.createElement(f, null));
}
wp.propTypes = {
  // Country flag component.
  iconComponent: K.elementType,
  // Select arrow component.
  arrowComponent: K.elementType,
  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: K.bool
};
function m7() {
  return /* @__PURE__ */ ue.createElement("div", {
    className: "PhoneInputCountrySelectArrow"
  });
}
function Ep(n, a) {
  for (var r = s7(n), l; !(l = r()).done; ) {
    var u = l.value;
    if (!u.divider && h7(u.value, a))
      return u;
  }
}
function h7(n, a) {
  return n == null ? a == null : n === a;
}
var g7 = ["country", "countryName", "flags", "flagUrl"];
function zd() {
  return zd = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, zd.apply(this, arguments);
}
function y7(n, a) {
  if (n == null) return {};
  var r = p7(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function p7(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function ff(n) {
  var a = n.country, r = n.countryName, l = n.flags, u = n.flagUrl, c = y7(n, g7);
  return l && l[a] ? l[a]({
    title: r
  }) : /* @__PURE__ */ ue.createElement("img", zd({}, c, {
    alt: r,
    role: r ? void 0 : "presentation",
    src: u.replace("{XX}", a).replace("{xx}", a.toLowerCase())
  }));
}
ff.propTypes = {
  // The country to be selected by default.
  // Two-letter country code ("ISO 3166-1 alpha-2").
  country: K.string.isRequired,
  // Will be HTML `title` attribute of the `<img/>`.
  countryName: K.string.isRequired,
  // Country flag icon components.
  // By default flag icons are inserted as `<img/>`s
  // with their `src` pointed to `country-flag-icons` gitlab pages website.
  // There might be cases (e.g. an offline application)
  // where having a large (3 megabyte) `<svg/>` flags
  // bundle is more appropriate.
  // `import flags from 'react-phone-number-input/flags'`.
  flags: K.objectOf(K.elementType),
  // A URL for a country flag icon.
  // By default it points to `country-flag-icons` gitlab pages website.
  flagUrl: K.string.isRequired
};
var v7 = ["aspectRatio"], b7 = ["title"], $7 = ["title"];
function bu() {
  return bu = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, bu.apply(this, arguments);
}
function mf(n, a) {
  if (n == null) return {};
  var r = w7(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function w7(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function Mu(n) {
  var a = n.aspectRatio, r = mf(n, v7);
  return a === 1 ? /* @__PURE__ */ ue.createElement(Cp, r) : /* @__PURE__ */ ue.createElement(Sp, r);
}
Mu.propTypes = {
  title: K.string.isRequired,
  aspectRatio: K.number
};
function Sp(n) {
  var a = n.title, r = mf(n, b7);
  return /* @__PURE__ */ ue.createElement("svg", bu({}, r, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 75 50"
  }), /* @__PURE__ */ ue.createElement("title", null, a), /* @__PURE__ */ ue.createElement("g", {
    className: "PhoneInputInternationalIconGlobe",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  }, /* @__PURE__ */ ue.createElement("path", {
    strokeLinecap: "round",
    d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
  }), /* @__PURE__ */ ue.createElement("path", {
    d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
  }), /* @__PURE__ */ ue.createElement("line", {
    x1: "26",
    y1: "25",
    x2: "74",
    y2: "25"
  }), /* @__PURE__ */ ue.createElement("line", {
    x1: "50",
    y1: "1",
    x2: "50",
    y2: "49"
  }), /* @__PURE__ */ ue.createElement("path", {
    strokeLinecap: "round",
    d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
  }), /* @__PURE__ */ ue.createElement("path", {
    strokeLinecap: "round",
    d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
  })), /* @__PURE__ */ ue.createElement("path", {
    className: "PhoneInputInternationalIconPhone",
    stroke: "none",
    fill: "currentColor",
    d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
  }));
}
Sp.propTypes = {
  title: K.string.isRequired
};
function Cp(n) {
  var a = n.title, r = mf(n, $7);
  return /* @__PURE__ */ ue.createElement("svg", bu({}, r, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50"
  }), /* @__PURE__ */ ue.createElement("title", null, a), /* @__PURE__ */ ue.createElement("g", {
    className: "PhoneInputInternationalIconGlobe",
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /* @__PURE__ */ ue.createElement("path", {
    d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
  }), /* @__PURE__ */ ue.createElement("path", {
    d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
  }), /* @__PURE__ */ ue.createElement("path", {
    d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
  }), /* @__PURE__ */ ue.createElement("path", {
    d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
  }), /* @__PURE__ */ ue.createElement("line", {
    x1: "27.8",
    y1: "0.85",
    x2: "27.8",
    y2: "34.61"
  }), /* @__PURE__ */ ue.createElement("line", {
    x1: "15.2",
    y1: "22.23",
    x2: "49.15",
    y2: "22.23"
  })), /* @__PURE__ */ ue.createElement("path", {
    className: "PhoneInputInternationalIconPhone",
    stroke: "transparent",
    fill: "currentColor",
    d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
  }));
}
Cp.propTypes = {
  title: K.string.isRequired
};
function E7(n) {
  if (n.length < 2 || n[0] !== "+")
    return !1;
  for (var a = 1; a < n.length; ) {
    var r = n.charCodeAt(a);
    if (!(r >= 48 && r <= 57)) return !1;
    a++;
  }
  return !0;
}
function Np(n) {
  E7(n) || console.error("[react-phone-number-input] Expected the initial `value` to be a E.164 phone number. Got", n);
}
function S7(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = C7(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C7(n, a) {
  if (n) {
    if (typeof n == "string") return Hg(n, a);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set") return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hg(n, a);
  }
}
function Hg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = new Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function N7(n, a) {
  if (!a)
    return n;
  for (var r = [], l = [], u = r, c = function() {
    var g = h.value;
    if (g === "|")
      u.push({
        divider: !0
      });
    else if (g === "..." || g === "…")
      u = l;
    else {
      var b;
      g === "🌐" ? b = void 0 : b = g;
      var $ = n.indexOf(n.filter(function(_) {
        return _.value === b;
      })[0]), N = n[$];
      n.splice($, 1), u.push(N);
    }
  }, f = S7(a), h; !(h = f()).done; )
    c();
  return r.concat(n).concat(l);
}
function x7(n, a) {
  if (n && (n = n.filter(function(r) {
    switch (r) {
      case "🌐":
      case "|":
      case "...":
      case "…":
        return !0;
      default:
        return Lu(r, a);
    }
  }), n.length > 0))
    return n;
}
function Lu(n, a) {
  return ep(n, a) ? !0 : (console.error("Country not found: ".concat(n)), !1);
}
function xp(n, a) {
  return n && (n = n.filter(function(r) {
    return Lu(r, a);
  }), n.length === 0 && (n = void 0)), n;
}
var T7 = ["country", "label", "aspectRatio"];
function Fd() {
  return Fd = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, Fd.apply(this, arguments);
}
function O7(n, a) {
  if (n == null) return {};
  var r = A7(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function A7(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function Tp(n) {
  var a = n.flags, r = n.flagUrl, l = n.flagComponent, u = n.internationalIcon;
  function c(f) {
    var h = f.country, p = f.label, g = f.aspectRatio, b = O7(f, T7), $ = u === Mu ? g : void 0;
    return /* @__PURE__ */ ue.createElement("div", Fd({}, b, {
      className: hu("PhoneInputCountryIcon", {
        "PhoneInputCountryIcon--square": $ === 1,
        "PhoneInputCountryIcon--border": h
      })
    }), h ? /* @__PURE__ */ ue.createElement(l, {
      country: h,
      countryName: p,
      flags: a,
      flagUrl: r,
      className: "PhoneInputCountryIconImg"
    }) : /* @__PURE__ */ ue.createElement(u, {
      title: p,
      aspectRatio: $,
      className: "PhoneInputCountryIconImg"
    }));
  }
  return c.propTypes = {
    country: K.string,
    label: K.string.isRequired,
    aspectRatio: K.number
  }, c;
}
Tp({
  // Must be equal to `defaultProps.flagUrl` in `./PhoneInputWithCountry.js`.
  flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
  flagComponent: ff,
  internationalIcon: Mu
});
function R7(n, a) {
  var r = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r) return (r = r.call(n)).next.bind(r);
  if (Array.isArray(n) || (r = _7(n)) || a) {
    r && (n = r);
    var l = 0;
    return function() {
      return l >= n.length ? { done: !0 } : { done: !1, value: n[l++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _7(n, a) {
  if (n) {
    if (typeof n == "string") return zg(n, a);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set") return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zg(n, a);
  }
}
function zg(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var r = 0, l = new Array(a); r < a; r++) l[r] = n[r];
  return l;
}
function j7(n, a) {
  for (var r = R7(n), l; !(l = r()).done; ) {
    var u = l.value;
    u && D7(u, a);
  }
}
function D7(n, a) {
  typeof n == "function" ? n(a) : n.current = a;
}
var Op = K.shape({
  country_calling_codes: K.object.isRequired,
  countries: K.object.isRequired
}), Ap = K.objectOf(K.string);
function ra(n, a) {
  var r = "+" + ka(n, a);
  return r;
}
function M7(n) {
  var a = n.value, r = n.phoneNumber, l = n.defaultCountry, u = n.getAnyCountry, c = n.countries, f = n.required, h = n.metadata, p;
  return r && r.country ? p = r.country : l && (!a || li(a, l, h)) && (p = l), c && c.indexOf(p) < 0 && (p = void 0), !p && f && c && c.length > 0 && (p = u()), p;
}
function L7(n) {
  var a = n.countries, r = n.countryNames, l = n.addInternationalOption, u = n.compareStringsLocales, c = n.compareStrings;
  c || (c = z7);
  var f = a.map(function(h) {
    return {
      value: h,
      // All `locale` country names included in this library
      // include all countries (this is checked at build time).
      // The only case when a country name might be missing
      // is when a developer supplies their own `labels` property.
      // To guard against such cases, a missing country name
      // is substituted by country code.
      label: r[h] || h
    };
  });
  return f.sort(function(h, p) {
    return c(h.label, p.label, u);
  }), l && f.unshift({
    label: r.ZZ
  }), f;
}
function Rp(n, a) {
  return gp(n || "", a);
}
function U7(n) {
  return n.formatNational().replace(/\D/g, "");
}
function P7(n, a) {
  var r = a.prevCountry, l = a.newCountry, u = a.metadata, c = a.useNationalFormat;
  if (r === l)
    return n;
  if (!n)
    return c ? "" : l ? ra(l, u) : "";
  if (l) {
    if (n[0] === "+") {
      if (c)
        return n.indexOf("+" + ka(l, u)) === 0 ? F7(n, l, u) : "";
      if (r) {
        var f = ra(l, u);
        return n.indexOf(f) === 0 ? n : f;
      } else {
        var h = ra(l, u);
        return n.indexOf(h) === 0 ? n : h;
      }
    }
  } else if (n[0] !== "+")
    return ai(n, r, u) || "";
  return n;
}
function ai(n, a, r) {
  if (n) {
    if (n[0] === "+") {
      if (n === "+")
        return;
      var l = new gi(a, r);
      return l.input(n), l.getNumberValue();
    }
    if (a) {
      var u = jp(n, a, r);
      return "+".concat(ka(a, r)).concat(u || "");
    }
  }
}
function k7(n, a, r) {
  var l = jp(n, a, r);
  if (l) {
    var u = l.length - I7(a, r);
    if (u > 0)
      return n.slice(0, n.length - u);
  }
  return n;
}
function I7(n, a) {
  return a = new ct(a), a.selectNumberingPlan(n), a.numberingPlan.possibleLengths()[a.numberingPlan.possibleLengths().length - 1];
}
function _p(n, a) {
  var r = a.country, l = a.countries, u = a.defaultCountry, c = a.latestCountrySelectedByUser, f = a.required, h = a.metadata;
  if (n === "+")
    return r;
  var p = H7(n, h);
  if (p)
    return !l || l.indexOf(p) >= 0 ? p : void 0;
  if (r) {
    if (li(n, r, h)) {
      if (c && li(n, c, h))
        return c;
      if (u && li(n, u, h))
        return u;
      if (!f)
        return;
    } else if (!f)
      return;
  }
  return r;
}
function B7(n, a) {
  var r = a.prevPhoneDigits, l = a.country, u = a.defaultCountry, c = a.latestCountrySelectedByUser, f = a.countryRequired, h = a.getAnyCountry, p = a.countries, g = a.international, b = a.limitMaxLength, $ = a.countryCallingCodeEditable, N = a.metadata;
  if (g && $ === !1 && l) {
    var _ = ra(l, N);
    if (n.indexOf(_) !== 0) {
      var E, A = n && n[0] !== "+";
      return A ? (n = _ + n, E = ai(n, l, N)) : n = _, {
        phoneDigits: n,
        value: E,
        country: l
      };
    }
  }
  g === !1 && l && n && n[0] === "+" && (n = Fg(n, l, N)), n && l && b && (n = k7(n, l, N)), n && n[0] !== "+" && (!l || g) && (n = "+" + n), !n && r && r[0] === "+" && (g ? l = void 0 : l = u), n === "+" && r && r[0] === "+" && r.length > 1 && (l = void 0);
  var C;
  return n && (n[0] === "+" && (n === "+" || l && ra(l, N).indexOf(n) === 0) ? C = void 0 : C = ai(n, l, N)), C && (l = _p(C, {
    country: l,
    countries: p,
    defaultCountry: u,
    latestCountrySelectedByUser: c,
    // `countryRequired` flag is not passed here.
    // Instead, it's explicitly checked a bit later in the code.
    required: !1,
    metadata: N
  }), g === !1 && l && n && n[0] === "+" && (n = Fg(n, l, N), C = ai(n, l, N))), !l && f && (l = u || h()), {
    // `phoneDigits` returned here are a "normalized" version of the original `phoneDigits`.
    // The returned `phoneDigits` shouldn't be used anywhere except for passing it as
    // `prevPhoneDigits` parameter to this same function on next input change event.
    phoneDigits: n,
    country: l,
    value: C
  };
}
function Fg(n, a, r) {
  if (n.indexOf(ra(a, r)) === 0) {
    var l = new gi(a, r);
    l.input(n);
    var u = l.getNumber();
    return u ? u.formatNational().replace(/\D/g, "") : "";
  } else
    return n.replace(/\D/g, "");
}
function H7(n, a) {
  var r = new gi(null, a);
  return r.input(n), r.getCountry();
}
function z7(n, a, r) {
  return String.prototype.localeCompare ? n.localeCompare(a, r) : n < a ? -1 : n > a ? 1 : 0;
}
function F7(n, a, r) {
  if (a) {
    var l = "+" + ka(a, r);
    if (n.length < l.length) {
      if (l.indexOf(n) === 0)
        return "";
    } else if (n.indexOf(l) === 0)
      return n.slice(l.length);
  }
  for (var u = 0, c = Object.keys(r.country_calling_codes); u < c.length; u++) {
    var f = c[u];
    if (n.indexOf(f) === 1)
      return n.slice(1 + f.length);
  }
  return "";
}
function jp(n, a, r) {
  var l = new gi(a, r);
  l.input(n);
  var u = l.getNumber();
  return u && u.nationalNumber;
}
function li(n, a, r) {
  for (var l = ra(a, r), u = 0; u < n.length && u < l.length; ) {
    if (n[u] !== l[u])
      return !1;
    u++;
  }
  return !0;
}
function Dp(n) {
  var a = n.value, r = n.phoneNumber, l = n.defaultCountry, u = n.international, c = n.useNationalFormat, f = n.metadata;
  return (u === !1 || c) && r && r.country ? U7(r) : !a && u && l ? ra(l, f) : a;
}
function Al(n) {
  "@babel/helpers - typeof";
  return Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Al(n);
}
function Gg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function au(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Gg(Object(r), !0).forEach(function(l) {
      G7(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function G7(n, a, r) {
  return a = q7(a), a in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function q7(n) {
  var a = K7(n, "string");
  return Al(a) == "symbol" ? a : a + "";
}
function K7(n, a) {
  if (Al(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (Al(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function V7(n, a, r) {
  var l = n.metadata, u = n.countries, c = n.defaultCountry, f = n.value, h = n.reset, p = n.international, g = n.displayInitialValueAsLocalNumber, b = n.initialValueFormat, $ = a.defaultCountry, N = a.value, _ = a.reset;
  r.country;
  var E = r.value, A = r.hasUserSelectedACountry, C = r.latestCountrySelectedByUser, M = function(Pe) {
    return Dp(au(au({}, Pe), {}, {
      international: p,
      useNationalFormat: g || b === "national",
      metadata: l
    }));
  };
  if (h !== _)
    return {
      phoneDigits: M({
        value: void 0,
        defaultCountry: c
      }),
      value: void 0,
      country: c,
      latestCountrySelectedByUser: void 0,
      hasUserSelectedACountry: void 0
    };
  if (c !== $) {
    var H = !c || Lu(c, l), q = (
      // By default, "no value has been entered" means `value` is `undefined`.
      !E || // When `international` is `true`, and some country has been pre-selected,
      // then the `<input/>` contains a pre-filled value of `+${countryCallingCode}${leadingDigits}`,
      // so in case of `international` being `true`, "the user hasn't entered anything" situation
      // doesn't just mean `value` is `undefined`, but could also mean `value` is `+${countryCallingCode}`.
      p && E === M({
        value: void 0,
        defaultCountry: $
      })
    ), Z = !f && q;
    if (!A && H && Z)
      return {
        country: c,
        // If `phoneDigits` is empty, then automatically select the new `country`
        // and set `phoneDigits` to `+{getCountryCallingCode(newCountry)}`.
        // The code assumes that "no phone number has been entered by the user",
        // and no `value` property has been passed, so the `phoneNumber` parameter
        // of `_getInitialPhoneDigits({ value, phoneNumber, ... })` is `undefined`.
        phoneDigits: M({
          value: void 0,
          defaultCountry: c
        }),
        // `value` is `undefined` and it stays so.
        value: void 0
      };
  }
  if (!qg(f, N) && !qg(f, E)) {
    var V, ee;
    if (f) {
      f && Np(f), V = Rp(f, l);
      var W = xp(u, l);
      V && V.country ? (!W || W.indexOf(V.country) >= 0) && (ee = V.country) : (ee = _p(f, {
        country: void 0,
        countries: W,
        metadata: l
      }), ee || c && f.indexOf(ra(c, l)) === 0 && (ee = c));
    }
    var X;
    if (f) {
      if (C) {
        var ae = ee ? C === ee : li(f, C, l);
        ae ? ee || (ee = C) : X = {
          latestCountrySelectedByUser: void 0
        };
      }
    } else
      X = {
        latestCountrySelectedByUser: void 0,
        hasUserSelectedACountry: void 0
      };
    return au(au({}, X), {}, {
      phoneDigits: M({
        phoneNumber: V,
        value: f,
        defaultCountry: c
      }),
      value: f,
      country: f ? ee : c
    });
  }
}
function qg(n, a) {
  return n === null && (n = void 0), a === null && (a = void 0), n === a;
}
var Y7 = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "containerComponentProps", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];
function ci(n) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, ci(n);
}
function Kg(n, a) {
  var r = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    a && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function Mp(n) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Kg(Object(r), !0).forEach(function(l) {
      wn(n, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return n;
}
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, oi.apply(this, arguments);
}
function X7(n, a) {
  if (n == null) return {};
  var r = Z7(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function Z7(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function Q7(n, a) {
  if (!(n instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function Vg(n, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, Up(l.key), l);
  }
}
function W7(n, a, r) {
  return a && Vg(n.prototype, a), r && Vg(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function J7(n, a, r) {
  return a = $u(a), ew(n, Lp() ? Reflect.construct(a, r || [], $u(n).constructor) : a.apply(n, r));
}
function ew(n, a) {
  if (a && (ci(a) === "object" || typeof a == "function"))
    return a;
  if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tw(n);
}
function tw(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Lp() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lp = function() {
    return !!n;
  })();
}
function $u(n) {
  return $u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $u(n);
}
function nw(n, a) {
  if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(a && a.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), a && Gd(n, a);
}
function Gd(n, a) {
  return Gd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
    return l.__proto__ = u, l;
  }, Gd(n, a);
}
function wn(n, a, r) {
  return a = Up(a), a in n ? Object.defineProperty(n, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = r, n;
}
function Up(n) {
  var a = aw(n, "string");
  return ci(a) == "symbol" ? a : a + "";
}
function aw(n, a) {
  if (ci(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(n, a);
    if (ci(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
var rw = /* @__PURE__ */ (function(n) {
  function a(r) {
    var l;
    Q7(this, a), l = J7(this, a, [r]), wn(l, "setInputRef", function(C) {
      j7([l.props.inputRef, l.inputRef], C);
    }), wn(l, "isCountrySupportedWithError", function(C) {
      var M = l.props.metadata;
      return Lu(C, M);
    }), wn(l, "onCountryChange", function(C) {
      var M = l.props, H = M.international, q = M.metadata, Z = M.onChange, V = M.focusInputOnCountrySelection, ee = l.state, W = ee.phoneDigits, X = ee.country, ae = P7(W, {
        prevCountry: X,
        newCountry: C,
        metadata: q,
        // Convert the phone number to "national" format
        // when the user changes the selected country by hand.
        useNationalFormat: !H
      }), se = ai(ae, C, q);
      V && l.inputRef.current.focus(), l.setState({
        country: C,
        latestCountrySelectedByUser: C,
        hasUserSelectedACountry: !0,
        phoneDigits: ae,
        value: se
      }, function() {
        Z(se);
      });
    }), wn(l, "onChange", function(C) {
      var M = l.props, H = M.defaultCountry, q = M.onChange, Z = M.addInternationalOption, V = M.international, ee = M.limitMaxLength, W = M.countryCallingCodeEditable, X = M.metadata, ae = l.state, se = ae.countries, Pe = ae.phoneDigits, ve = ae.country, _e = ae.latestCountrySelectedByUser, ke = B7(C, {
        prevPhoneDigits: Pe,
        country: ve,
        countryRequired: !Z,
        defaultCountry: H,
        latestCountrySelectedByUser: _e,
        getAnyCountry: function() {
          return l.getFirstSupportedCountry({
            countries: se
          });
        },
        countries: se,
        international: V,
        limitMaxLength: ee,
        countryCallingCodeEditable: W,
        metadata: X
      }), qe = ke.phoneDigits, P = ke.country, k = ke.value, G = {
        phoneDigits: qe,
        value: k,
        country: P
      };
      _e && k && !li(k, _e, X) && (G.latestCountrySelectedByUser = void 0), W === !1 && !k && qe === l.state.phoneDigits && (G.forceRerender = {}), l.setState(
        G,
        // Update the new `value` property.
        // Doing it after the `state` has been updated
        // because `onChange()` will trigger `getDerivedStateFromProps()`
        // with the new `value` which will be compared to `state.value` there.
        function() {
          return q(k);
        }
      );
    }), wn(l, "_onFocus", function() {
      return l.setState({
        isFocused: !0
      });
    }), wn(l, "_onBlur", function() {
      return l.setState({
        isFocused: !1
      });
    }), wn(l, "onFocus", function(C) {
      l._onFocus();
      var M = l.props.onFocus;
      M && M(C);
    }), wn(l, "onBlur", function(C) {
      var M = l.props.onBlur;
      l._onBlur(), M && M(C);
    }), wn(l, "onCountryFocus", function(C) {
      l._onFocus();
      var M = l.props.countrySelectProps;
      if (M) {
        var H = M.onFocus;
        H && H(C);
      }
    }), wn(l, "onCountryBlur", function(C) {
      l._onBlur();
      var M = l.props.countrySelectProps;
      if (M) {
        var H = M.onBlur;
        H && H(C);
      }
    }), l.inputRef = /* @__PURE__ */ ue.createRef();
    var u = l.props, c = u.value;
    u.labels;
    var f = u.international, h = u.addInternationalOption, p = u.displayInitialValueAsLocalNumber, g = u.initialValueFormat, b = u.metadata, $ = l.props, N = $.defaultCountry, _ = $.countries;
    N && (l.isCountrySupportedWithError(N) || (N = void 0)), c && Np(c), _ = xp(_, b);
    var E = Rp(c, b);
    l.CountryIcon = Tp(l.props);
    var A = M7({
      value: c,
      phoneNumber: E,
      defaultCountry: N,
      required: !h,
      countries: _ || Pg(b),
      getAnyCountry: function() {
        return l.getFirstSupportedCountry({
          countries: _
        });
      },
      metadata: b
    });
    return l.state = {
      // Workaround for `this.props` inside `getDerivedStateFromProps()`.
      props: l.props,
      // The country selected.
      country: A,
      // `countries` are stored in `this.state` because they're filtered.
      // For example, a developer might theoretically pass some unsupported
      // countries as part of the `countries` property, and because of that
      // the component uses `this.state.countries` (which are filtered)
      // instead of `this.props.countries`
      // (which could potentially contain unsupported countries).
      countries: _,
      // `phoneDigits` state property holds non-formatted user's input.
      // The reason is that there's no way of finding out
      // in which form should `value` be displayed: international or national.
      // E.g. if `value` is `+78005553535` then it could be input
      // by a user both as `8 (800) 555-35-35` and `+7 800 555 35 35`.
      // Hence storing just `value` is not sufficient for correct formatting.
      // E.g. if a user entered `8 (800) 555-35-35`
      // then value is `+78005553535` and `phoneDigits` are `88005553535`
      // and if a user entered `+7 800 555 35 35`
      // then value is `+78005553535` and `phoneDigits` are `+78005553535`.
      phoneDigits: Dp({
        value: c,
        phoneNumber: E,
        defaultCountry: N,
        international: f,
        useNationalFormat: p || g === "national",
        metadata: b
      }),
      // `value` property is duplicated in state.
      // The reason is that `getDerivedStateFromProps()`
      // needs this `value` to compare to the new `value` property
      // to find out if `phoneDigits` needs updating:
      // If the `value` property was changed externally
      // then it won't be equal to `state.value`
      // in which case `phoneDigits` and `country` should be updated.
      value: c
    }, l;
  }
  return nw(a, n), W7(a, [{
    key: "componentDidMount",
    value: function() {
      var l = this.props.onCountryChange, u = this.props.defaultCountry, c = this.state.country;
      l && (u && (this.isCountrySupportedWithError(u) || (u = void 0)), c !== u && l(c));
    }
  }, {
    key: "componentDidUpdate",
    value: function(l, u) {
      var c = this.props.onCountryChange, f = this.state.country;
      c && f !== u.country && c(f);
    }
  }, {
    key: "getCountrySelectOptions",
    value: function(l) {
      var u = l.countries, c = this.props, f = c.international, h = c.countryCallingCodeEditable, p = c.countryOptionsOrder, g = c.addInternationalOption, b = c.labels, $ = c.locales, N = c.metadata;
      return this.useMemoCountrySelectOptions(function() {
        return N7(L7({
          countries: u || Pg(N),
          countryNames: b,
          addInternationalOption: f && h === !1 ? !1 : g,
          compareStringsLocales: $
          // compareStrings
        }), x7(p, N));
      }, [u, p, g, b, N]);
    }
  }, {
    key: "useMemoCountrySelectOptions",
    value: function(l, u) {
      return (!this.countrySelectOptionsMemoDependencies || !lw(u, this.countrySelectOptionsMemoDependencies)) && (this.countrySelectOptionsMemo = l(), this.countrySelectOptionsMemoDependencies = u), this.countrySelectOptionsMemo;
    }
  }, {
    key: "getFirstSupportedCountry",
    value: function(l) {
      var u = l.countries, c = this.getCountrySelectOptions({
        countries: u
      });
      return c[0].value;
    }
  }, {
    key: "render",
    value: function() {
      var l = this.props, u = l.name, c = l.disabled, f = l.readOnly, h = l.autoComplete, p = l.style, g = l.className;
      l.inputRef;
      var b = l.inputComponent, $ = l.numberInputProps, N = l.smartCaret, _ = l.countrySelectComponent, E = l.countrySelectProps, A = l.containerComponent, C = l.containerComponentProps;
      l.defaultCountry, l.countries, l.countryOptionsOrder;
      var M = l.labels;
      l.flags, l.flagComponent, l.flagUrl, l.addInternationalOption, l.internationalIcon, l.displayInitialValueAsLocalNumber, l.initialValueFormat, l.onCountryChange, l.limitMaxLength, l.countryCallingCodeEditable, l.focusInputOnCountrySelection, l.reset;
      var H = l.metadata, q = l.international;
      l.locales;
      var Z = X7(l, Y7), V = this.state, ee = V.country, W = V.countries, X = V.phoneDigits, ae = V.isFocused, se = N ? e7 : i7, Pe = this.getCountrySelectOptions({
        countries: W
      });
      return /* @__PURE__ */ ue.createElement(A, oi({
        style: p,
        className: hu(g, "PhoneInput", {
          "PhoneInput--focus": ae,
          "PhoneInput--disabled": c,
          "PhoneInput--readOnly": f
        })
      }, C), /* @__PURE__ */ ue.createElement(_, oi({
        name: u ? "".concat(u, "Country") : void 0,
        "aria-label": M.country
      }, E, {
        value: ee,
        options: Pe,
        onChange: this.onCountryChange,
        onFocus: this.onCountryFocus,
        onBlur: this.onCountryBlur,
        disabled: c || E && E.disabled,
        readOnly: f || E && E.readOnly,
        iconComponent: this.CountryIcon
      })), /* @__PURE__ */ ue.createElement(se, oi({
        ref: this.setInputRef,
        type: "tel",
        autoComplete: h
      }, $, Z, {
        inputFormat: q === !0 ? "INTERNATIONAL" : q === !1 ? "NATIONAL" : "INTERNATIONAL_OR_NATIONAL",
        international: q ? !0 : void 0,
        withCountryCallingCode: q ? !0 : void 0,
        name: u,
        metadata: H,
        country: ee,
        value: X || "",
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: c,
        readOnly: f,
        inputComponent: b,
        className: hu("PhoneInputInput", $ && $.className, Z.className)
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: (
      // `state` holds previous props as `props`, and also:
      // * `country` — The currently selected country, e.g. `"RU"`.
      // * `value` — The currently entered phone number (E.164), e.g. `+78005553535`.
      // * `phoneDigits` — The parsed `<input/>` value, e.g. `8005553535`.
      // (and a couple of other less significant properties)
      function(l, u) {
        return Mp({
          // Emulate `prevProps` via `state.props`.
          props: l
        }, V7(l, u.props, u));
      }
    )
  }]);
})(ue.PureComponent), Pp = /* @__PURE__ */ ue.forwardRef(function(n, a) {
  return /* @__PURE__ */ ue.createElement(rw, oi({}, iw(n), {
    inputRef: a
  }));
});
Pp.propTypes = {
  /**
   * Phone number in `E.164` format.
   *
   * Example:
   *
   * `"+12223333333"`
   *
   * Any "falsy" value like `undefined`, `null` or an empty string `""` is treated like "empty".
   */
  value: K.string,
  /**
   * A function of `value: string?`.
   *
   * Updates the `value` property as the user inputs a phone number.
   *
   * If the user erases the input value, the argument is `undefined`.
   */
  onChange: K.func.isRequired,
  /**
   * Toggles the `--focus` CSS class.
   * @ignore
   */
  onFocus: K.func,
  /**
   * `onBlur` is usually passed by `redux-form`.
   * @ignore
   */
  onBlur: K.func,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `disabled`.
   */
  disabled: K.bool,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `readonly`.
   */
  readOnly: K.bool,
  /**
   * Sets `autoComplete` property for phone number `<input/>`.
   *
   * Web browser's "autocomplete" feature
   * remembers the phone number being input
   * and can also autofill the `<input/>`
   * with previously remembered phone numbers.
   *
   * https://developers.google.com
   * /web/updates/2015/06/checkout-faster-with-autofill
   *
   * For example, can be used to turn it off:
   *
   * "So when should you use `autocomplete="off"`?
   *  One example is when you've implemented your own version
   *  of autocomplete for search. Another example is any form field
   *  where users will input and submit different kinds of information
   *  where it would not be useful to have the browser remember
   *  what was submitted previously".
   */
  // (is `"tel"` by default)
  autoComplete: K.string,
  /**
   * Set to `"national"` to show the initial `value` in
   * "national" format rather than "international".
   *
   * For example, if `initialValueFormat` is `"national"`
   * and the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"(213) 373-4253"`.
   *
   * By default, `initialValueFormat` is `undefined`,
   * meaning that if the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"+1 213 373 4253"`.
   *
   * The reason for such default behaviour is that
   * the newer generation grows up when there are no stationary phones
   * and therefore everyone inputs phone numbers in international format
   * in their smartphones so people gradually get more accustomed to
   * writing phone numbers in international format rather than in local format.
   * Future people won't be using "national" format, only "international".
   */
  // (is `undefined` by default)
  initialValueFormat: K.oneOf(["national"]),
  // `displayInitialValueAsLocalNumber` property has been
  // superceded by `initialValueFormat` property.
  displayInitialValueAsLocalNumber: K.bool,
  /**
   * The country to be selected by default.
   * For example, can be set after a GeoIP lookup.
   *
   * Example: `"US"`.
   */
  // A two-letter country code ("ISO 3166-1 alpha-2").
  defaultCountry: K.string,
  /**
   * If specified, only these countries will be available for selection.
   *
   * Example:
   *
   * `["RU", "UA", "KZ"]`
   */
  countries: K.arrayOf(K.string),
  /**
   * Custom country `<select/>` option names.
   * Also some labels like "ext" and country `<select/>` `aria-label`.
   *
   * Example:
   *
   * `{ "ZZ": "Международный", RU: "Россия", US: "США", ... }`
   *
   * See the `locales` directory for examples.
   */
  labels: Ap,
  /**
   * Country `<select/>` options are sorted by their labels.
   * The default sorting function uses `a.localeCompare(b, locales)`,
   * and, if that's not available, falls back to simple `a > b` / `a < b`.
   * Some languages, like Chinese, support multiple sorting variants
   * (called "collations"), and the user might prefer one or another.
   * Also, sometimes the Operating System language is not always
   * the preferred language for a person using a website or an application,
   * so there should be a way to specify custom locale.
   * This `locales` property mimicks the `locales` argument of `Intl` constructors,
   * and can be either a Unicode BCP 47 locale identifier or an array of such locale identifiers.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
  locales: K.oneOfType([K.string, K.arrayOf(K.string)]),
  /*
   * Custom country `<select/>` options sorting function.
   * The default one uses `a.localeCompare(b)`, and,
   * if that's not available, falls back to simple `a > b`/`a < b`.
   * There have been requests to add custom sorter for cases
   * like Chinese language and "pinyin" (non-default) sorting order.
   * https://stackoverflow.com/questions/22907288/chinese-sorting-by-pinyin-in-javascript-with-localecompare
  compareStrings: PropTypes.func,
   */
  /**
   * A URL template of a country flag, where
   * "{XX}" is a two-letter country code in upper case,
   * or where "{xx}" is a two-letter country code in lower case.
   * By default it points to `country-flag-icons` gitlab pages website.
   * I imagine someone might want to download those country flag icons
   * and host them on their own servers instead
   * (all flags are available in the `country-flag-icons` library).
   * There's a catch though: new countries may be added in future,
   * so when hosting country flag icons on your own server
   * one should check the `CHANGELOG.md` every time before updating this library,
   * otherwise there's a possibility that some new country flag would be missing.
   */
  flagUrl: K.string,
  /**
   * Custom country flag icon components.
   * These flags will be used instead of the default ones.
   * The the "Flags" section of the readme for more info.
   *
   * The shape is an object where keys are country codes
   * and values are flag icon components.
   * Flag icon components receive the same properties
   * as `flagComponent` (see below).
   *
   * Example:
   *
   * `{ "RU": (props) => <img src="..."/> }`
   *
   * Example:
   *
   * `import flags from 'country-flag-icons/react/3x2'`
   *
   * `import PhoneInput from 'react-phone-number-input'`
   *
   * `<PhoneInput flags={flags} .../>`
   */
  flags: K.objectOf(K.elementType),
  /**
   * Country flag icon component.
   *
   * Takes properties:
   *
   * * `country: string` — The country code.
   * * `countryName: string` — The country name.
   * * `flagUrl: string` — The `flagUrl` property (see above).
   * * `flags: object` — The `flags` property (see above).
   */
  flagComponent: K.elementType,
  /**
   * Set to `false` to remove the "International" option from country `<select/>`.
   */
  addInternationalOption: K.bool,
  /**
   * "International" icon component.
   * Should have the same aspect ratio.
   *
   * Receives properties:
   *
   * * `title: string` — "International" country option label.
   */
  internationalIcon: K.elementType,
  /**
   * Can be used to place some countries on top of the list of country `<select/>` options.
   *
   * * `"XX"` — inserts an option for "XX" country.
   * * `"🌐"` — inserts "International" option.
   * * `"|"` — inserts a separator.
   * * `"..."` — inserts options for the rest of the countries (can be omitted, in which case it will be automatically added at the end).
   *
   * Example:
   *
   * `["US", "CA", "AU", "|", "..."]`
   */
  countryOptionsOrder: K.arrayOf(K.string),
  /**
   * `<Phone/>` component CSS style object.
   */
  style: K.object,
  /**
   * `<Phone/>` component CSS class.
   */
  className: K.string,
  /**
   * Country `<select/>` component.
   *
   * Receives properties:
   *
   * * `name: string?` — HTML `name` attribute.
   * * `value: string?` — The currently selected country code.
   * * `onChange(value: string?)` — Updates the `value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * `options: object[]` — The list of all selectable countries (including "International") each being an object of shape `{ value: string?, label: string }`.
   * * `iconComponent: PropTypes.elementType` — React component that renders a country icon: `<Icon country={value}/>`. If `country` is `undefined` then it renders an "International" icon.
   * * `disabled: boolean?` — HTML `disabled` attribute.
   * * `readOnly: boolean?` — HTML `readOnly` attribute.
   * * `tabIndex: (number|string)?` — HTML `tabIndex` attribute.
   * * `className: string` — CSS class name.
   */
  countrySelectComponent: K.elementType,
  /**
   * Country `<select/>` component props.
   * Along with the usual DOM properties such as `aria-label` and `tabIndex`,
   * some custom properties are supported, such as `arrowComponent` and `unicodeFlags`.
   */
  countrySelectProps: K.object,
  /**
   * Phone number `<input/>` component.
   *
   * Receives properties:
   *
   * * `value: string` — The formatted `value`.
   * * `onChange(event: Event)` — Updates the formatted `value` from `event.target.value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * Other properties like `type="tel"` or `autoComplete="tel"` that should be passed through to the DOM `<input/>`.
   *
   * Must also either use `React.forwardRef()` to "forward" `ref` to the `<input/>` or implement `.focus()` method.
   */
  inputComponent: K.elementType,
  /**
   * Phone number `<input/>` component props.
   */
  numberInputProps: K.object,
  /**
   * Wrapping `<div/>` component.
   *
   * Receives properties:
   *
   * * `style: object` — A component CSS style object.
   * * `className: string` — Classes to attach to the component, typically changes when component focuses or blurs.
   */
  containerComponent: K.elementType,
  /**
   * Wrapping `<div/>` component props.
   */
  containerComponentProps: K.object,
  /**
   * When the user attempts to insert a digit somewhere in the middle of a phone number,
   * the caret position is moved right before the next available digit skipping
   * any punctuation in between. This is called "smart" caret positioning.
   * Another case would be the phone number format changing as a result of
   * the user inserting the digit somewhere in the middle, which would require
   * re-positioning the caret because all digit positions have changed.
   * This "smart" caret positioning feature can be turned off by passing
   * `smartCaret={false}` property: use it in case of any possible issues
   * with caret position during phone number input.
   */
  // Is `true` by default.
  smartCaret: K.bool,
  /**
   * Set to `true` to force "international" phone number format.
   * Set to `false` to force "national" phone number format.
   * By default it's `undefined` meaning that it doesn't enforce any phone number format:
   * the user can input their phone number in either "national" or "international" format.
   */
  international: K.bool,
  /**
   * If set to `true`, the phone number input will get trimmed
   * if it exceeds the maximum length for the country.
   */
  limitMaxLength: K.bool,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: K.bool,
  /**
   * `libphonenumber-js` metadata.
   *
   * Can be used to pass custom `libphonenumber-js` metadata
   * to reduce the overall bundle size for those who compile "custom" metadata.
   */
  metadata: Op,
  /**
   * Is called every time the selected country changes:
   * either programmatically or when user selects it manually from the list.
   */
  // People have been asking for a way to get the selected country.
  // @see  https://github.com/catamphetamine/react-phone-number-input/issues/128
  // For some it's just a "business requirement".
  // I guess it's about gathering as much info on the user as a website can
  // without introducing any addional fields that would complicate the form
  // therefore reducing "conversion" (that's a marketing term).
  // Assuming that the phone number's country is the user's country
  // is not 100% correct but in most cases I guess it's valid.
  onCountryChange: K.func,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: K.bool
};
var Yg = {
  /**
   * Remember (and autofill) the value as a phone number.
   */
  autoComplete: "tel",
  /**
   * Country `<select/>` component.
   */
  countrySelectComponent: wp,
  /**
   * Flag icon component.
   */
  flagComponent: ff,
  /**
   * By default, uses icons from `country-flag-icons` gitlab pages website.
   */
  // Must be equal to `flagUrl` in `./CountryIcon.js`.
  flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
  /**
   * Default "International" country `<select/>` option icon.
   */
  internationalIcon: Mu,
  /**
   * Phone number `<input/>` component.
   */
  inputComponent: "input",
  /**
   * Wrapping `<div/>` component.
   */
  containerComponent: "div",
  /**
   * Some users requested a way to reset the component:
   * both number `<input/>` and country `<select/>`.
   * Whenever `reset` property changes both number `<input/>`
   * and country `<select/>` are reset.
   * It's not implemented as some instance `.reset()` method
   * because `ref` is forwarded to `<input/>`.
   * It's also not replaced with just resetting `country` on
   * external `value` reset, because a user could select a country
   * and then not input any `value`, and so the selected country
   * would be "stuck", if not using this `reset` property.
   */
  // https://github.com/catamphetamine/react-phone-number-input/issues/300
  reset: K.any,
  /**
   *
   */
  /**
   * Set to `false` to use "basic" caret instead of the "smart" one.
   */
  smartCaret: !0,
  /**
   * Whether to add the "International" option
   * to the list of countries.
   */
  addInternationalOption: !0,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: !0,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: !0
};
function iw(n) {
  n = Mp({}, n);
  for (var a in Yg)
    n[a] === void 0 && (n[a] = Yg[a]);
  return n;
}
function lw(n, a) {
  if (n.length !== a.length)
    return !1;
  for (var r = 0; r < n.length; ) {
    if (n[r] !== a[r])
      return !1;
    r++;
  }
  return !0;
}
const ow = {
  ext: "ext.",
  country: "Phone number country",
  phone: "Phone",
  AC: "Ascension Island",
  AD: "Andorra",
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AQ: "Antarctica",
  AR: "Argentina",
  AS: "American Samoa",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AX: "Åland Islands",
  AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "Saint Barthélemy",
  BM: "Bermuda",
  BN: "Brunei Darussalam",
  BO: "Bolivia",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BV: "Bouvet Island",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CC: "Cocos (Keeling) Islands",
  CD: "Congo, Democratic Republic of the",
  CF: "Central African Republic",
  CG: "Congo",
  CH: "Switzerland",
  CI: "Cote d'Ivoire",
  CK: "Cook Islands",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CW: "Curaçao",
  CX: "Christmas Island",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  EH: "Western Sahara",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Federated States of Micronesia",
  FO: "Faroe Islands",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GS: "South Georgia and the South Sandwich Islands",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HM: "Heard Island and McDonald Islands",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IM: "Isle of Man",
  IN: "India",
  IO: "British Indian Ocean Territory",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KI: "Kiribati",
  KM: "Comoros",
  KN: "Saint Kitts and Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "Saint Martin (French Part)",
  MG: "Madagascar",
  MH: "Marshall Islands",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongolia",
  MO: "Macao",
  MP: "Northern Mariana Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PM: "Saint Pierre and Miquelon",
  PN: "Pitcairn",
  PR: "Puerto Rico",
  PS: "Palestine",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "Saint Helena",
  SI: "Slovenia",
  SJ: "Svalbard and Jan Mayen",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  SS: "South Sudan",
  ST: "Sao Tome and Principe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Swaziland",
  TA: "Tristan da Cunha",
  TC: "Turks and Caicos Islands",
  TD: "Chad",
  TF: "French Southern Territories",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  UM: "United States Minor Outlying Islands",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Holy See (Vatican City State)",
  VC: "Saint Vincent and the Grenadines",
  VE: "Venezuela",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  VN: "Vietnam",
  VU: "Vanuatu",
  WF: "Wallis and Futuna",
  WS: "Samoa",
  XA: "Abkhazia",
  XK: "Kosovo",
  XO: "South Ossetia",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  ZZ: "International"
};
var uw = ["metadata", "labels"];
function qd() {
  return qd = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (n[l] = r[l]);
    }
    return n;
  }, qd.apply(this, arguments);
}
function sw(n, a) {
  if (n == null) return {};
  var r = cw(n, a), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      l = c[u], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (r[l] = n[l]);
  }
  return r;
}
function cw(n, a) {
  if (n == null) return {};
  var r = {}, l = Object.keys(n), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(a.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function kp(n) {
  var a = /* @__PURE__ */ ue.forwardRef(function(r, l) {
    var u = r.metadata, c = u === void 0 ? n : u, f = r.labels, h = f === void 0 ? ow : f, p = sw(r, uw);
    return /* @__PURE__ */ ue.createElement(Pp, qd({}, p, {
      ref: l,
      metadata: c,
      labels: h
    }));
  });
  return a.propTypes = {
    metadata: Op,
    labels: Ap
  }, a;
}
kp();
function dw(n, a) {
  var r = Array.prototype.slice.call(a);
  return r.push(Qy), n.apply(this, r);
}
const fw = kp(Qy);
function Xg() {
  return dw(gp, arguments);
}
const ur = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", Kd = (n) => {
  if (!n || typeof n != "object")
    return !1;
  const a = n;
  return typeof a.getModifierState != "function" ? !1 : a.getModifierState("CapsLock");
}, mw = ({
  onSuccess: n,
  onError: a,
  handleClose: r,
  onSignIn: l,
  title: u = "Create your account",
  subtitle: c = "Create an account to continue to checkout",
  initialEmail: f = ""
}) => {
  const [h, p] = w.useState(f), [g, b] = w.useState(""), [$, N] = w.useState(""), [_, E] = w.useState(""), [A, C] = w.useState(!1), [M, H] = w.useState(""), [q, Z] = w.useState(""), [V, ee] = w.useState(!1), [W, X] = w.useState(!1), [ae, se] = w.useState(!1), [Pe, ve] = w.useState(!1), [_e, ke] = w.useState(!1), [qe, P] = w.useState(!1), [k, G] = w.useState(!1), [fe, Oe] = w.useState(""), [Ae, x] = w.useState(!1), [B, Y] = w.useState(void 0), [Q, de] = w.useState(!1), [ce, Ee] = w.useState(!1), [Ze, Ie] = w.useState(!1), [Ft, tn] = w.useState(""), [Tn, jt] = w.useState(!1), [xt, Gt] = w.useState(""), [sa, dr] = w.useState(oe.INFO), ca = w.useRef(null), Tt = w.useRef(null), qt = w.useRef(null), Ot = Au(), Se = {
    length: _.length >= ni.MIN_LENGTH && _.length <= ni.MAX_LENGTH,
    hasNumber: Jt.NUMBER.test(_),
    hasUppercase: Jt.UPPERCASE.test(_),
    hasLowercase: Jt.LOWERCASE.test(_),
    hasSpecialChar: xh.test(_),
    onlyAllowedChars: Th.test(_) || _ === "",
    differentFromUsername: h ? _ !== h && _ !== h.split("@")[0] : !0
  }, nt = ((ne) => {
    if (!ne) return { strength: "", color: "", width: Jo.EMPTY };
    if (Se.length && Se.hasNumber && Se.hasUppercase && Se.hasLowercase && Se.hasSpecialChar && Se.onlyAllowedChars && Se.differentFromUsername)
      return {
        strength: id.STRONG,
        color: ld.STRONG,
        width: Jo.STRONG
      };
    let wt = 0;
    return Se.length && wt++, Se.hasNumber && wt++, Se.hasUppercase && wt++, Se.hasLowercase && wt++, Se.hasSpecialChar && wt++, Se.onlyAllowedChars && wt++, Se.differentFromUsername && wt++, wt <= 2 ? {
      strength: id.WEAK,
      color: ld.WEAK,
      width: Jo.WEAK
    } : {
      strength: id.GOOD,
      color: ld.GOOD,
      width: Jo.GOOD
    };
  })(_), yi = (ne) => ne ? ne.length < ni.MIN_LENGTH || ne.length > ni.MAX_LENGTH ? { isValid: !1, error: Me.PASSWORD_LENGTH } : Jt.UPPERCASE.test(ne) ? Jt.LOWERCASE.test(ne) ? Jt.NUMBER.test(ne) ? xh.test(ne) ? Th.test(ne) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: Me.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: Me.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: Me.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: Me.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: Me.PASSWORD_UPPERCASE
  } : { isValid: !1, error: Me.PASSWORD_REQUIRED };
  w.useEffect(() => {
    if (!Ot) {
      if (Tt.current && clearTimeout(Tt.current), !h) {
        ve(!1), ke(!1), G(!1), Oe("");
        return;
      }
      if (!ii.test(h)) {
        ve(!1), ke(!1);
        return;
      }
      return Tt.current = setTimeout(async () => {
        P(!0);
        try {
          (await Ou(h)).exists ? (ke(!0), ve(!0)) : (ke(!1), ve(!1));
        } catch (ne) {
          console.error(`${we.CREATE_ACCOUNT} Email check failed:`, ne);
          const Re = ne instanceof Error ? ne.message : "Unable to verify email. You can still proceed with registration.";
          G(!0), Oe(Re), ve(!0), ke(!1);
        } finally {
          P(!1);
        }
      }, Sn.EMAIL_CHECK_DEBOUNCE), () => {
        Tt.current && clearTimeout(Tt.current);
      };
    }
  }, [h, Ot]);
  const da = (ne) => {
    if (!ne) return "";
    try {
      return Xg(ne)?.nationalNumber || "";
    } catch {
      return "";
    }
  }, Ia = (ne) => {
    if (!ne) return "";
    try {
      const Re = Xg(ne);
      if (Re?.country)
        try {
          return new Intl.DisplayNames(["en"], { type: "region" }).of(Re.country) || "";
        } catch {
          return Re.country;
        }
      return "";
    } catch {
      return "";
    }
  };
  w.useEffect(() => {
    if (Ot) return;
    qt.current && clearTimeout(qt.current);
    const ne = da(B);
    if (!ne) {
      de(!1), Ie(!1), tn(""), Ee(!1);
      return;
    }
    if (ne.length < 7) {
      de(!1), Ie(!1), tn("");
      return;
    }
    return qt.current = setTimeout(async () => {
      Ee(!0), tn("");
      try {
        (await j8(ne)).exists ? (de(!0), Ie(!1)) : (de(!1), Ie(!0));
      } catch (Re) {
        console.error(`${we.CREATE_ACCOUNT} Phone check failed:`, Re), de(!1), Ie(!1), tn(Re?.message || "Unable to verify phone number. Please try again.");
      } finally {
        Ee(!1);
      }
    }, Sn.EMAIL_CHECK_DEBOUNCE), () => {
      qt.current && clearTimeout(qt.current);
    };
  }, [B, Ot]);
  const re = h && ii.test(h);
  w.useEffect(() => {
    const ne = (Re) => {
      Re.key === "Escape" && r();
    };
    return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
  }, [r]);
  const pe = (ne) => {
    ne.target === ca.current && r();
  }, $t = w.useMemo(() => Ia(B), [B]), fr = async (ne) => {
    if (ne.preventDefault(), Ot) return;
    if (se(!0), !h || !g || !$) {
      a("Please fill in all required fields");
      return;
    }
    const Re = yi(_);
    if (!Re.isValid) {
      Z(Re.error), a(Re.error), C(!1);
      return;
    }
    if (!ii.test(h)) {
      H(Me.EMAIL_INVALID), a(Me.EMAIL_INVALID);
      return;
    }
    C(!0), H(""), Gt("");
    try {
      const Un = {
        username: h.split("@")[0],
        email: h,
        firstName: g,
        lastName: $,
        password: _
      }, Pl = da(B);
      Pl && (Un.DayPhone = Pl, Un.Country = $t, Un.isMarketingAgreed = Tn);
      const hr = await _8(Un);
      console.log(
        `${we.CREATE_ACCOUNT} Registration successful:`,
        hr.message
      );
      try {
        const An = await Zy(h, _, Ae);
        n(An);
      } catch (An) {
        console.error(
          `${we.CREATE_ACCOUNT} Auto-login failed after registration:`,
          An
        );
        const gr = An instanceof Error ? An.message : "Auto-login failed";
        a(gr);
      }
    } catch (wt) {
      console.error(`${we.CREATE_ACCOUNT} Registration failed:`, wt);
      const Un = wt instanceof Error ? wt.message : Me.REGISTRATION_FAILED;
      Gt(Un), dr(oe.ERROR), a(Un);
    } finally {
      C(!1);
    }
  }, mr = (ne) => {
    if (ne.key === "CapsLock" && ne.type === "keydown") {
      X((Re) => !Re);
      return;
    }
    ne.key !== "CapsLock" && X(Kd(ne));
  }, On = (ne) => {
    X(Kd(ne));
  }, At = () => {
    X(!1);
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    xt && /* @__PURE__ */ y.jsx(
      wd,
      {
        type: sa,
        message: xt,
        duration: Sn.TOAST_DEFAULT_DURATION,
        onClose: () => Gt("")
      }
    ),
    /* @__PURE__ */ y.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ca,
        onMouseDown: pe,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "create-account-dialog-title",
        children: /* @__PURE__ */ y.jsxs(
          "div",
          {
            part: "identity-widget-create-account-modal",
            className: "identity-widget-create-account-modal bg-white! rounded-lg! p-5! w-full! max-w-lg! relative! max-h-[90vh]! overflow-y-auto! [&::-webkit-scrollbar]:w-[3px]! [&::-webkit-scrollbar-track]:hidden! [&::-webkit-scrollbar-thumb]:bg-gray-200! [&::-webkit-scrollbar-thumb]:rounded-full! [&::-webkit-scrollbar-thumb:hover]:bg-gray-300!",
            role: "document",
            style: {
              scrollbarWidth: "thin",
              scrollbarColor: "#e5e7eb transparent"
            },
            children: [
              /* @__PURE__ */ y.jsx(
                We,
                {
                  onClick: r,
                  variant: it.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Ve.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ y.jsx(
                    "svg",
                    {
                      part: "identity-widget-create-account-close-icon",
                      className: "identity-widget-create-account-close-icon w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ y.jsx(
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
              /* @__PURE__ */ y.jsxs(
                "div",
                {
                  part: "identity-widget-create-account-header",
                  className: "identity-widget-create-account-header mb-6! text-center!",
                  children: [
                    /* @__PURE__ */ y.jsx(
                      "h2",
                      {
                        id: "create-account-dialog-title",
                        part: "identity-widget-create-account-title",
                        className: "identity-widget-create-account-title text-2xl! font-bold! text-gray-800! mb-1!",
                        children: u
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      "p",
                      {
                        part: "identity-widget-create-account-subtitle",
                        className: "identity-widget-create-account-subtitle text-sm! text-gray-600! mt-1!",
                        children: c
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ y.jsxs(
                "form",
                {
                  part: "identity-widget-create-account-form",
                  onSubmit: fr,
                  className: "identity-widget-create-account-form",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ y.jsx(
                          gn,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: h,
                            onChange: (ne) => {
                              p(ne.target.value), H("");
                            },
                            placeholder: "Enter email address",
                            disabled: A,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: ae && !h ? "Required" : M || "",
                            endIcon: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                              qe && /* @__PURE__ */ y.jsx(yl, {}),
                              !qe && !_e && !k && h && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h) && /* @__PURE__ */ y.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: ur,
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
                    Ot && /* @__PURE__ */ y.jsx(
                      Bt,
                      {
                        type: oe.ERROR,
                        title: Me.BRAND_CONFIG_TITLE,
                        message: Me.BRAND_CONFIG_MESSAGE,
                        className: "identity-widget-create-account-brand-error-banner mb-4!"
                      }
                    ),
                    !Ot && Pe && _e && !k && /* @__PURE__ */ y.jsx(
                      Bt,
                      {
                        type: oe.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          ve(!1), l(h);
                        },
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    !Ot && Pe && k && /* @__PURE__ */ y.jsx(
                      Bt,
                      {
                        type: oe.ERROR,
                        message: fe,
                        className: "identity-widget-create-account-error-banner mb-4!"
                      }
                    ),
                    /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-name-row",
                        className: "identity-widget-create-account-name-row flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0",
                        children: [
                          /* @__PURE__ */ y.jsx(
                            gn,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: g,
                              onChange: (ne) => b(ne.target.value),
                              placeholder: "First Name",
                              disabled: A,
                              className: "identity-widget-create-account-firstname-input w-full min-w-0",
                              autoComplete: "given-name",
                              error: ae && !g ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ y.jsx(
                            gn,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: $,
                              onChange: (ne) => N(ne.target.value),
                              placeholder: "Last Name",
                              disabled: A,
                              className: "identity-widget-create-account-lastname-input w-full min-w-0",
                              autoComplete: "family-name",
                              error: ae && !$ ? "Required" : ""
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-password-field",
                        className: "identity-widget-create-account-password-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ y.jsxs(
                          "div",
                          {
                            part: "identity-widget-create-account-password-input-wrap",
                            className: "identity-widget-create-account-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ y.jsx(
                                gn,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: V ? "text" : "password",
                                  value: _,
                                  onChange: (ne) => {
                                    E(ne.target.value), Z("");
                                  },
                                  onKeyDown: mr,
                                  onKeyUp: mr,
                                  onFocus: On,
                                  onBlur: At,
                                  placeholder: "Enter Password...",
                                  disabled: A,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: q,
                                  endIcon: /* @__PURE__ */ y.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => ee(!V),
                                      className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": V ? "Hide password" : "Show password",
                                      children: V ? /* @__PURE__ */ y.jsx(
                                        "svg",
                                        {
                                          part: "identity-widget-create-account-password-hide-icon",
                                          className: "identity-widget-create-account-password-hide-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ y.jsx(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            }
                                          )
                                        }
                                      ) : /* @__PURE__ */ y.jsxs(
                                        "svg",
                                        {
                                          part: "identity-widget-create-account-password-show-icon",
                                          className: "identity-widget-create-account-password-show-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: [
                                            /* @__PURE__ */ y.jsx(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
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
                              W && /* @__PURE__ */ y.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: gl.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    _ && /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-strength",
                        className: "identity-widget-create-account-strength mt-2! mb-4!",
                        children: [
                          /* @__PURE__ */ y.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-strength-row",
                              className: "identity-widget-create-account-strength-row flex! items-center! justify-between! mb-2!",
                              children: [
                                /* @__PURE__ */ y.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-create-account-strength-track",
                                    className: "identity-widget-create-account-strength-track w-full! bg-gray-200! rounded-full! h-2! mr-3!",
                                    children: /* @__PURE__ */ y.jsx(
                                      "div",
                                      {
                                        part: "identity-widget-create-account-strength-fill",
                                        className: "identity-widget-create-account-strength-fill h-2! rounded-full! transition-all! duration-300!",
                                        style: {
                                          width: nt.width,
                                          backgroundColor: nt.color
                                        }
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ y.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-create-account-strength-label",
                                    className: "identity-widget-create-account-strength-label text-sm! font-medium! whitespace-nowrap!",
                                    style: { color: nt.color },
                                    children: nt.strength
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ y.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-requirements",
                              className: "identity-widget-create-account-requirements mt-3!",
                              children: [
                                /* @__PURE__ */ y.jsx(
                                  "p",
                                  {
                                    part: "identity-widget-create-account-requirements-title",
                                    className: "identity-widget-create-account-requirements-title text-sm! font-medium! text-gray-700! mb-2!",
                                    children: "Password must:"
                                  }
                                ),
                                /* @__PURE__ */ y.jsxs(
                                  "ul",
                                  {
                                    part: "identity-widget-create-account-requirements-list",
                                    className: "identity-widget-create-account-requirements-list space-y-1!",
                                    children: [
                                      /* @__PURE__ */ y.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": Se.length ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            Se.length ? /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${Se.length ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "be 9-15 characters"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ y.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": Se.hasNumber ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            Se.hasNumber ? /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${Se.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one number"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ y.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": Se.hasUppercase ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            Se.hasUppercase ? /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${Se.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one uppercase letter"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ y.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": Se.hasSpecialChar ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            Se.hasSpecialChar ? /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${Se.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one special character"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ y.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": Se.onlyAllowedChars ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            Se.onlyAllowedChars ? /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${Se.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "use only the following special characters !@#$%^&*._-"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ y.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          "data-satisfied": Se.differentFromUsername ? "true" : "false",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            Se.differentFromUsername ? /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ) : /* @__PURE__ */ y.jsx(
                                              "svg",
                                              {
                                                part: "identity-widget-create-account-requirement-icon",
                                                className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /* @__PURE__ */ y.jsx(
                                                  "path",
                                                  {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                                    clipRule: "evenodd"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
                                              "span",
                                              {
                                                part: "identity-widget-create-account-requirement-text",
                                                className: `identity-widget-create-account-requirement-text ${Se.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
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
                    /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-phone-field",
                        className: "identity-widget-create-account-phone-field mt-0! ml-0! mb-4! mr-0!",
                        children: [
                          /* @__PURE__ */ y.jsxs(
                            "label",
                            {
                              htmlFor: "phoneNumber",
                              part: "identity-widget-create-account-phone-label",
                              className: "identity-widget-create-account-phone-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
                              children: [
                                "Phone Number ",
                                /* @__PURE__ */ y.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ y.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-phone-row",
                              className: "identity-widget-create-account-phone-row relative!",
                              children: [
                                /* @__PURE__ */ y.jsx(
                                  fw,
                                  {
                                    international: !0,
                                    defaultCountry: "US",
                                    value: B,
                                    onChange: Y,
                                    disabled: A,
                                    placeholder: "Phone number",
                                    className: `identity-widget-create-account-phone-input ${Q || Ft ? "PhoneInput--error" : ""}`
                                  }
                                ),
                                /* @__PURE__ */ y.jsxs("span", { className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-none! z-2!", children: [
                                  ce && /* @__PURE__ */ y.jsx(yl, {}),
                                  !ce && Ze && da(B).length >= 7 && /* @__PURE__ */ y.jsx(
                                    "img",
                                    {
                                      src: ur,
                                      alt: "Phone available",
                                      "aria-label": "Phone number is available",
                                      style: { width: 18, height: 18 }
                                    }
                                  )
                                ] })
                              ]
                            }
                          ),
                          Q && /* @__PURE__ */ y.jsx(
                            "p",
                            {
                              part: "identity-widget-create-account-phone-error",
                              className: "identity-widget-create-account-phone-error text-[#d64545]! text-[13px]! mt-1.5! text-left!",
                              role: "alert",
                              "aria-live": "polite",
                              children: "This phone number is already linked to another account."
                            }
                          ),
                          !Q && Ft && /* @__PURE__ */ y.jsx(
                            "p",
                            {
                              part: "identity-widget-create-account-phone-error",
                              className: "identity-widget-create-account-phone-error text-[#d64545]! text-[13px]! mt-1.5! text-left!",
                              role: "alert",
                              "aria-live": "polite",
                              children: Ft
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-sms-row",
                        className: "identity-widget-create-account-sms-row flex! items-center! mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ y.jsxs(
                          "label",
                          {
                            part: "identity-widget-create-account-sms-label",
                            className: "identity-widget-create-account-sms-label flex! items-center! m-0!",
                            children: [
                              /* @__PURE__ */ y.jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  part: "identity-widget-create-account-sms-checkbox",
                                  checked: Tn,
                                  onChange: (ne) => jt(ne.target.checked),
                                  className: "identity-widget-create-account-sms-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                  "aria-label": "I agree to receive marketing communications and updates.",
                                  disabled: A
                                }
                              ),
                              /* @__PURE__ */ y.jsx(
                                "span",
                                {
                                  part: "identity-widget-create-account-sms-text",
                                  className: "identity-widget-create-account-sms-text text-gray-600! text-sm!",
                                  style: {
                                    fontWeight: "500",
                                    color: "#5F5B7D"
                                  },
                                  children: "I agree to receive marketing communications and updates."
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-remember-row",
                        className: "identity-widget-create-account-remember-row flex! items-center! mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ y.jsxs(
                          "label",
                          {
                            part: "identity-widget-create-account-remember-label",
                            className: "identity-widget-create-account-remember-label flex! items-center! m-0!",
                            children: [
                              /* @__PURE__ */ y.jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  part: "identity-widget-create-account-remember-checkbox",
                                  checked: Ae,
                                  onChange: (ne) => x(ne.target.checked),
                                  className: "identity-widget-create-account-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                  "aria-label": "Remember me"
                                }
                              ),
                              /* @__PURE__ */ y.jsx(
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
                    /* @__PURE__ */ y.jsx(
                      We,
                      {
                        type: Ve.SUBMIT,
                        disabled: A || _e || Q || !re || Ot,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! m-0!",
                        children: A ? /* @__PURE__ */ y.jsxs(
                          "span",
                          {
                            part: "identity-widget-create-account-submit-loading",
                            className: "identity-widget-create-account-submit-loading flex! items-center! justify-center!",
                            children: [
                              /* @__PURE__ */ y.jsxs(
                                "svg",
                                {
                                  part: "identity-widget-create-account-submit-spinner",
                                  className: "identity-widget-create-account-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    /* @__PURE__ */ y.jsx(
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
                                    /* @__PURE__ */ y.jsx(
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
                    /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-divider",
                        className: "identity-widget-create-account-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ y.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-line-wrap",
                              className: "identity-widget-create-account-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ y.jsx(
                                "div",
                                {
                                  part: "identity-widget-create-account-divider-line",
                                  className: "identity-widget-create-account-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ y.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-text-wrap",
                              className: "identity-widget-create-account-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ y.jsx(
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
                    /* @__PURE__ */ y.jsx(
                      We,
                      {
                        type: Ve.BUTTON,
                        variant: it.OUTLINE,
                        onClick: () => l(h),
                        disabled: A,
                        part: "identity-widget-create-account-signin-button",
                        className: "identity-widget-create-account-signin-button w-full! flex! items-center! justify-center! gap-3!",
                        children: /* @__PURE__ */ y.jsx(
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
    xt && /* @__PURE__ */ y.jsx(wd, { message: xt, type: sa, onClose: () => Gt("") })
  ] });
}, hw = ({
  email: n,
  loading: a,
  cooldown: r,
  onResendLink: l,
  onBack: u,
  onClose: c
}) => {
  const f = w.useRef(null);
  w.useEffect(() => {
    const p = (g) => {
      g.key === "Escape" && c();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [c]);
  const h = (p) => {
    p.target === f.current && c();
  };
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      part: "identity-widget-reset-success-overlay",
      className: "identity-widget-reset-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: f,
      onMouseDown: h,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ y.jsxs(
        "div",
        {
          part: "identity-widget-reset-success-modal",
          className: "identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ y.jsx(
              We,
              {
                onClick: c,
                variant: it.LINK,
                part: "identity-widget-reset-success-close-button",
                className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ y.jsx(
                  "svg",
                  {
                    part: "identity-widget-reset-success-close-icon",
                    className: "identity-widget-reset-success-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsx(
              "div",
              {
                part: "identity-widget-reset-success-icon-wrap",
                className: "identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!",
                children: /* @__PURE__ */ y.jsx(
                  "img",
                  {
                    part: "identity-widget-reset-success-icon",
                    src: ur,
                    alt: "Success",
                    "aria-hidden": "true",
                    className: "identity-widget-reset-success-icon w-16! h-16!"
                  }
                )
              }
            ),
            /* @__PURE__ */ y.jsxs(
              "div",
              {
                part: "identity-widget-reset-success-header",
                className: "identity-widget-reset-success-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "h2",
                    {
                      part: "identity-widget-reset-success-title",
                      id: "reset-success-dialog-title",
                      className: "identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!",
                      children: "Check your email"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-subtitle",
                      className: "identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!",
                      children: "We've sent a password reset link to"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-email",
                      className: "identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!",
                      children: n
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-copy",
                      className: "identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!",
                      children: "Follow the instructions in the email to reset your password and return to checkout."
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
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
            r > 0 && /* @__PURE__ */ y.jsx(
              "p",
              {
                part: "identity-widget-reset-success-cooldown-message",
                className: "identity-widget-reset-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!",
                role: "status",
                "aria-live": "polite",
                children: /* @__PURE__ */ y.jsxs("b", { children: [
                  "A password reset link has already been sent. Please wait ",
                  r,
                  " seconds before requesting another."
                ] })
              }
            ),
            /* @__PURE__ */ y.jsx(
              We,
              {
                type: Ve.BUTTON,
                onClick: l,
                disabled: a || r > 0,
                ariaLabel: "Resend password reset link",
                part: "identity-widget-submit-button identity-widget-reset-success-resend-button",
                className: "identity-widget-submit-button identity-widget-reset-success-resend-button w-full! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! m-0! mb-4!",
                children: a ? /* @__PURE__ */ y.jsxs(
                  "span",
                  {
                    part: "identity-widget-reset-success-resend-loading",
                    className: "identity-widget-reset-success-resend-loading flex! items-center! justify-center!",
                    children: [
                      /* @__PURE__ */ y.jsxs(
                        "svg",
                        {
                          part: "identity-widget-reset-success-resend-spinner",
                          className: "identity-widget-reset-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ y.jsx(
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
                            /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsx(
              We,
              {
                type: Ve.BUTTON,
                variant: it.OUTLINE,
                onClick: u,
                disabled: a,
                part: "identity-widget-reset-success-back-button",
                className: "identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ y.jsx(
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
}, gw = ({
  email: n,
  onBack: a,
  handleClose: r,
  onCreateAccount: l
}) => {
  const [u, c] = w.useState(n || ""), [f, h] = w.useState(!1), [p, g] = w.useState(!1), [b, $] = w.useState(""), [N, _] = w.useState(!1), [E, A] = w.useState(!1), [C, M] = w.useState(!1), [H, q] = w.useState(!1), [Z, V] = w.useState(""), [ee, W] = w.useState(!1), [X, ae] = w.useState(0), se = Au(), Pe = w.useRef(null), ve = w.useRef(null);
  w.useEffect(() => {
    if (!(X <= 0))
      return ve.current = setTimeout(() => {
        ae((P) => P - 1);
      }, 1e3), () => {
        ve.current && clearTimeout(ve.current);
      };
  }, [X]), w.useEffect(() => {
    const P = (k) => {
      k.key === "Escape" && r();
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [r]), w.useEffect(() => {
    if (se) return;
    const P = ii.test(u);
    if (M(P), !P || !u) {
      A(!1), q(!1), V(""), W(!1);
      return;
    }
    const k = setTimeout(async () => {
      _(!0);
      try {
        const G = await Ou(u);
        console.log("[ResetPassword] Email check response:", G), G.exists ? (A(!0), W(!1)) : (A(!1), W(!0)), console.log("[ResetPassword] Email exists:", G.exists);
      } catch (G) {
        console.error("[ResetPassword] Error checking email:", G);
        const fe = G instanceof Error ? G.message : "Unable to verify email. Please try again.";
        q(!0), V(fe), W(!0), A(!1);
      } finally {
        _(!1);
      }
    }, Sn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(k);
  }, [u, se]);
  const _e = (P) => {
    P.target === Pe.current && r();
  }, ke = async (P) => {
    if (P.preventDefault(), !se) {
      if (!u) {
        $(Me.EMAIL_REQUIRED);
        return;
      }
      h(!0), $("");
      try {
        await Vh(u), console.log("[ResetPassword] Reset link sent to:", u), ae(Sn.RESEND_COOLDOWN_SECONDS), g(!0);
      } catch (k) {
        console.error("[ResetPassword] Failed to send reset link:", k);
        const G = k instanceof Error ? k.message : Me.RESET_LINK_FAILED;
        $(G);
      } finally {
        h(!1);
      }
    }
  }, qe = async () => {
    if (!(X > 0)) {
      h(!0), $("");
      try {
        await Vh(u), console.log("[ResetPassword] Reset link resent to:", u), ae(Sn.RESEND_COOLDOWN_SECONDS);
      } catch (P) {
        console.error("[ResetPassword] Failed to resend reset link:", P), g(!1);
        const k = P instanceof Error ? P.message : Me.RESET_LINK_FAILED;
        $(k);
      } finally {
        h(!1);
      }
    }
  };
  return p ? /* @__PURE__ */ y.jsx(
    hw,
    {
      email: u,
      loading: f,
      cooldown: X,
      onResendLink: qe,
      onBack: a,
      onClose: r
    }
  ) : /* @__PURE__ */ y.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Pe,
      onMouseDown: _e,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ y.jsxs(
        "div",
        {
          part: "identity-widget-reset-password-modal",
          className: "identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ y.jsx(
              We,
              {
                onClick: r,
                variant: it.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ y.jsx(
                  "svg",
                  {
                    part: "identity-widget-reset-password-close-icon",
                    className: "identity-widget-reset-password-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsxs(
              "div",
              {
                part: "identity-widget-reset-password-header",
                className: "identity-widget-reset-password-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "h2",
                    {
                      id: "reset-password-dialog-title",
                      part: "identity-widget-reset-password-title",
                      className: "identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!",
                      children: "Reset your password"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsxs(
              "form",
              {
                part: "identity-widget-reset-password-form",
                onSubmit: ke,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ y.jsx(
                        gn,
                        {
                          label: "Email Address",
                          id: "reset-email",
                          type: "email",
                          value: u,
                          onChange: (P) => {
                            c(P.target.value), $("");
                          },
                          placeholder: "Enter email",
                          disabled: f,
                          className: "identity-widget-reset-password-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                            N && /* @__PURE__ */ y.jsx(yl, {}),
                            !N && E && C && !H && /* @__PURE__ */ y.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: ur,
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
                  se && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.ERROR,
                      title: Me.BRAND_CONFIG_TITLE,
                      message: Me.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-reset-password-brand-error-banner mb-4!"
                    }
                  ),
                  !se && ee && !E && C && !H && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.INFO,
                      message: gl.EMAIL_NOT_FOUND,
                      actionText: l ? "Let's create one to continue?" : void 0,
                      onActionClick: l ? () => {
                        W(!1), l();
                      } : void 0,
                      onClose: () => W(!1),
                      className: "identity-widget-reset-password-email-not-found-banner mb-4!"
                    }
                  ),
                  !se && ee && H && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.ERROR,
                      message: Z,
                      onClose: () => {
                        W(!1), q(!1), V("");
                      },
                      className: "identity-widget-reset-password-email-check-error-banner mb-4!"
                    }
                  ),
                  b && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.ERROR,
                      message: b,
                      actionText: "Want to sign in instead?",
                      onActionClick: a,
                      onClose: () => $(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  X > 0 && /* @__PURE__ */ y.jsxs(
                    "p",
                    {
                      part: "identity-widget-reset-password-cooldown-message",
                      className: "identity-widget-reset-password-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "A password reset link has already been sent. Please wait ",
                        X,
                        " seconds before requesting another."
                      ]
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    We,
                    {
                      type: Ve.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: f || !u || !C || !E || se || X > 0,
                      className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ResetPassword] Button state:", {
                          loading: f,
                          email: u,
                          isEmailValid: C,
                          emailExists: E
                        });
                      },
                      children: f ? /* @__PURE__ */ y.jsxs(
                        "span",
                        {
                          part: "identity-widget-reset-password-submit-loading",
                          className: "identity-widget-reset-password-submit-loading flex! items-center! justify-center!",
                          children: [
                            /* @__PURE__ */ y.jsxs(
                              "svg",
                              {
                                part: "identity-widget-reset-password-submit-spinner",
                                className: "identity-widget-reset-password-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                  /* @__PURE__ */ y.jsx(
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
                                  /* @__PURE__ */ y.jsx(
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
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-divider",
                      className: "identity-widget-reset-password-divider border-t! border-gray-200! my-4!"
                    }
                  ),
                  /* @__PURE__ */ y.jsxs(
                    "div",
                    {
                      part: "identity-widget-reset-password-help-section",
                      className: "identity-widget-reset-password-help-section",
                      children: [
                        /* @__PURE__ */ y.jsx(
                          "h3",
                          {
                            part: "identity-widget-reset-password-help-title",
                            className: "identity-widget-reset-password-help-title text-base! font-bold! text-gray-800! mb-1!",
                            children: "Forgot Email?"
                          }
                        ),
                        /* @__PURE__ */ y.jsxs(
                          "p",
                          {
                            part: "identity-widget-reset-password-help-desc",
                            className: "identity-widget-reset-password-help-desc text-sm! text-gray-600!",
                            children: [
                              "If you no longer have access to the email address on file or have forgotten which one you used, please",
                              " ",
                              /* @__PURE__ */ y.jsx(
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
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-back-wrap",
                      className: "identity-widget-reset-password-back-wrap flex! justify-center! mt-4!",
                      children: /* @__PURE__ */ y.jsx(
                        "a",
                        {
                          href: "#",
                          part: "identity-widget-reset-password-back-link",
                          className: "identity-widget-reset-password-back-link text-[var(--button-primary-bg)]! hover:underline! text-sm! font-medium! flex! items-center! gap-1!",
                          onClick: (P) => {
                            P.preventDefault(), a();
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
}, yw = ({
  email: n,
  loading: a,
  cooldown: r,
  onResendLink: l,
  onBack: u,
  onClose: c
}) => {
  const f = w.useRef(null);
  w.useEffect(() => {
    const p = (g) => {
      g.key === "Escape" && c();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [c]);
  const h = (p) => {
    p.target === f.current && c();
  };
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-success-overlay",
      className: "identity-widget-forgot-username-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: f,
      onMouseDown: h,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "forgot-username-success-dialog-title",
      children: /* @__PURE__ */ y.jsxs(
        "div",
        {
          part: "identity-widget-forgot-username-success-modal",
          className: "identity-widget-forgot-username-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ y.jsx(
              We,
              {
                onClick: c,
                variant: it.LINK,
                part: "identity-widget-forgot-username-success-close-button",
                className: "identity-widget-forgot-username-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ y.jsx(
                  "svg",
                  {
                    part: "identity-widget-forgot-username-success-close-icon",
                    className: "identity-widget-forgot-username-success-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsx(
              "div",
              {
                part: "identity-widget-forgot-username-success-icon-wrap",
                className: "identity-widget-forgot-username-success-icon-wrap flex! justify-center! mb-4!",
                children: /* @__PURE__ */ y.jsx(
                  "img",
                  {
                    part: "identity-widget-forgot-username-success-icon",
                    src: ur,
                    alt: "Success",
                    "aria-hidden": "true",
                    className: "identity-widget-forgot-username-success-icon w-16! h-16!"
                  }
                )
              }
            ),
            /* @__PURE__ */ y.jsxs(
              "div",
              {
                part: "identity-widget-forgot-username-success-header",
                className: "identity-widget-forgot-username-success-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "h2",
                    {
                      part: "identity-widget-forgot-username-success-title",
                      id: "forgot-username-success-dialog-title",
                      className: "identity-widget-forgot-username-success-title text-2xl! font-bold! text-gray-800! mb-3!",
                      children: "Check your email"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-subtitle",
                      className: "identity-widget-forgot-username-success-subtitle text-base! text-gray-700! mb-2!",
                      children: "We've sent a verification link to"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-email",
                      className: "identity-widget-forgot-username-success-email text-base! font-semibold! text-gray-900! mb-4!",
                      children: n
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    "p",
                    {
                      part: "identity-widget-forgot-username-success-copy",
                      className: "identity-widget-forgot-username-success-copy text-sm! text-gray-800! mb-2!",
                      children: "Follow the instructions in the email to recover your username."
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
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
            r > 0 && /* @__PURE__ */ y.jsx(
              "p",
              {
                part: "identity-widget-forgot-username-success-cooldown-message",
                className: "identity-widget-forgot-username-success-cooldown-message text-sm! text-[var(--banner-error-text)]! text-center! mb-2!",
                role: "status",
                "aria-live": "polite",
                children: /* @__PURE__ */ y.jsxs("b", { children: [
                  "A verification link has already been sent. Please wait ",
                  r,
                  " seconds before requesting another."
                ] })
              }
            ),
            /* @__PURE__ */ y.jsx(
              We,
              {
                type: Ve.BUTTON,
                onClick: l,
                disabled: a || r > 0,
                ariaLabel: "Resend username verification link",
                part: "identity-widget-submit-button identity-widget-forgot-username-success-resend-button",
                className: "identity-widget-submit-button identity-widget-forgot-username-success-resend-button w-full! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! m-0! mb-4!",
                children: a ? /* @__PURE__ */ y.jsxs(
                  "span",
                  {
                    part: "identity-widget-forgot-username-success-resend-loading",
                    className: "identity-widget-forgot-username-success-resend-loading flex! items-center! justify-center!",
                    children: [
                      /* @__PURE__ */ y.jsxs(
                        "svg",
                        {
                          part: "identity-widget-forgot-username-success-resend-spinner",
                          className: "identity-widget-forgot-username-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ y.jsx(
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
                            /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsx(
              We,
              {
                type: Ve.BUTTON,
                variant: it.OUTLINE,
                onClick: u,
                disabled: a,
                part: "identity-widget-forgot-username-success-back-button",
                className: "identity-widget-forgot-username-success-back-button w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ y.jsx(
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
}, pw = ({
  email: n,
  onBack: a,
  handleClose: r,
  onCreateAccount: l
}) => {
  const [u, c] = w.useState(n || ""), [f, h] = w.useState(!1), [p, g] = w.useState(!1), [b, $] = w.useState(""), [N, _] = w.useState(!1), [E, A] = w.useState(!1), [C, M] = w.useState(!1), [H, q] = w.useState(!1), [Z, V] = w.useState(""), [ee, W] = w.useState(!1), [X, ae] = w.useState(0), se = Au(), Pe = w.useRef(null), ve = w.useRef(null);
  w.useEffect(() => {
    if (!(X <= 0))
      return ve.current = setTimeout(() => {
        ae((P) => P - 1);
      }, 1e3), () => {
        ve.current && clearTimeout(ve.current);
      };
  }, [X]), w.useEffect(() => {
    const P = (k) => {
      k.key === "Escape" && r();
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [r]), w.useEffect(() => {
    if (se) return;
    const P = ii.test(u);
    if (M(P), !P || !u) {
      A(!1), q(!1), V(""), W(!1);
      return;
    }
    const k = setTimeout(async () => {
      _(!0);
      try {
        const G = await Ou(u);
        console.log("[ForgotUsername] Email check response:", G), G.exists ? (A(!0), W(!1)) : (A(!1), W(!0)), console.log("[ForgotUsername] Email exists:", G.exists);
      } catch (G) {
        console.error("[ForgotUsername] Error checking email:", G);
        const fe = G instanceof Error ? G.message : "Unable to verify email. Please try again.";
        q(!0), V(fe), W(!0), A(!1);
      } finally {
        _(!1);
      }
    }, Sn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(k);
  }, [u, se]);
  const _e = (P) => {
    P.target === Pe.current && r();
  }, ke = async (P) => {
    if (P.preventDefault(), !se) {
      if (!u) {
        $(Me.EMAIL_REQUIRED);
        return;
      }
      h(!0), $("");
      try {
        await Yh(u), console.log("[ForgotUsername] Verification link sent to:", u), ae(Sn.RESEND_COOLDOWN_SECONDS), g(!0);
      } catch (k) {
        console.error("[ForgotUsername] Failed to send verification link:", k);
        const G = k instanceof Error ? k.message : Me.USERNAME_RECOVERY_FAILED;
        $(G);
      } finally {
        h(!1);
      }
    }
  }, qe = async () => {
    if (!(X > 0)) {
      h(!0), $("");
      try {
        await Yh(u), console.log("[ForgotUsername] Verification link resent to:", u), ae(Sn.RESEND_COOLDOWN_SECONDS);
      } catch (P) {
        console.error("[ForgotUsername] Failed to resend verification link:", P), g(!1);
        const k = P instanceof Error ? P.message : Me.USERNAME_RECOVERY_FAILED;
        $(k);
      } finally {
        h(!1);
      }
    }
  };
  return p ? /* @__PURE__ */ y.jsx(
    yw,
    {
      email: u,
      loading: f,
      cooldown: X,
      onResendLink: qe,
      onBack: a,
      onClose: r
    }
  ) : /* @__PURE__ */ y.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-overlay",
      className: "identity-widget-forgot-username-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Pe,
      onMouseDown: _e,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "forgot-username-dialog-title",
      children: /* @__PURE__ */ y.jsxs(
        "div",
        {
          part: "identity-widget-forgot-username-modal",
          className: "identity-widget-forgot-username-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ y.jsx(
              We,
              {
                onClick: r,
                variant: it.LINK,
                part: "identity-widget-forgot-username-close-button",
                className: "identity-widget-forgot-username-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ y.jsx(
                  "svg",
                  {
                    part: "identity-widget-forgot-username-close-icon",
                    className: "identity-widget-forgot-username-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsxs(
              "div",
              {
                part: "identity-widget-forgot-username-header",
                className: "identity-widget-forgot-username-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "h2",
                    {
                      id: "forgot-username-dialog-title",
                      part: "identity-widget-forgot-username-title",
                      className: "identity-widget-forgot-username-title text-2xl! font-bold! text-gray-800! mb-2!",
                      children: "Forgot Username?"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsxs(
              "div",
              {
                part: "identity-widget-forgot-username-section",
                className: "identity-widget-forgot-username-section mb-4!",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "h3",
                    {
                      part: "identity-widget-forgot-username-section-title",
                      className: "identity-widget-forgot-username-section-title text-base! font-bold! text-gray-800! mb-1!",
                      children: "Forgot Username?"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsxs(
              "form",
              {
                part: "identity-widget-forgot-username-form",
                onSubmit: ke,
                className: "identity-widget-forgot-username-form space-y-4!",
                "aria-label": "Forgot username form",
                children: [
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-email-field",
                      className: "identity-widget-forgot-username-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ y.jsx(
                        gn,
                        {
                          label: "Email Address",
                          id: "forgot-username-email",
                          type: "email",
                          value: u,
                          onChange: (P) => {
                            c(P.target.value), $("");
                          },
                          placeholder: "Enter email",
                          disabled: f,
                          className: "identity-widget-forgot-username-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                            N && /* @__PURE__ */ y.jsx(yl, {}),
                            !N && E && C && !H && /* @__PURE__ */ y.jsx(
                              "img",
                              {
                                part: "identity-widget-forgot-username-email-verified-icon",
                                className: "identity-widget-forgot-username-email-verified-icon",
                                src: ur,
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
                  se && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.ERROR,
                      title: Me.BRAND_CONFIG_TITLE,
                      message: Me.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-forgot-username-brand-error-banner mb-4!"
                    }
                  ),
                  !se && ee && !E && C && !H && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.INFO,
                      message: gl.EMAIL_NOT_FOUND,
                      actionText: l ? "Let's create one to continue?" : void 0,
                      onActionClick: l ? () => {
                        W(!1), l();
                      } : void 0,
                      onClose: () => W(!1),
                      className: "identity-widget-forgot-username-email-not-found-banner mb-4!"
                    }
                  ),
                  !se && ee && H && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.ERROR,
                      message: Z,
                      onClose: () => {
                        W(!1), q(!1), V("");
                      },
                      className: "identity-widget-forgot-username-email-check-error-banner mb-4!"
                    }
                  ),
                  b && /* @__PURE__ */ y.jsx(
                    Bt,
                    {
                      type: oe.ERROR,
                      message: b,
                      actionText: "Want to sign in instead?",
                      onActionClick: a,
                      onClose: () => $(""),
                      className: "identity-widget-forgot-username-submit-error-banner mb-4!"
                    }
                  ),
                  X > 0 && /* @__PURE__ */ y.jsxs(
                    "p",
                    {
                      part: "identity-widget-forgot-username-cooldown-message",
                      className: "identity-widget-forgot-username-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "A verification link has already been sent. Please wait ",
                        X,
                        " seconds before requesting another."
                      ]
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    We,
                    {
                      type: Ve.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-forgot-username-submit-button",
                      disabled: f || !u || !C || !E || se || X > 0,
                      className: "identity-widget-submit-button identity-widget-forgot-username-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ForgotUsername] Button state:", {
                          loading: f,
                          email: u,
                          isEmailValid: C,
                          emailExists: E
                        });
                      },
                      children: f ? /* @__PURE__ */ y.jsxs(
                        "span",
                        {
                          part: "identity-widget-forgot-username-submit-loading",
                          className: "identity-widget-forgot-username-submit-loading flex! items-center! justify-center!",
                          children: [
                            /* @__PURE__ */ y.jsxs(
                              "svg",
                              {
                                part: "identity-widget-forgot-username-submit-spinner",
                                className: "identity-widget-forgot-username-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                  /* @__PURE__ */ y.jsx(
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
                                  /* @__PURE__ */ y.jsx(
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
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-divider",
                      className: "identity-widget-forgot-username-divider border-t! border-gray-200! my-4!"
                    }
                  ),
                  /* @__PURE__ */ y.jsxs(
                    "div",
                    {
                      part: "identity-widget-forgot-username-help-section",
                      className: "identity-widget-forgot-username-help-section",
                      children: [
                        /* @__PURE__ */ y.jsx(
                          "h3",
                          {
                            part: "identity-widget-forgot-username-help-title",
                            className: "identity-widget-forgot-username-help-title text-base! font-bold! text-gray-800! mb-1!",
                            children: "Forgot Email?"
                          }
                        ),
                        /* @__PURE__ */ y.jsxs(
                          "p",
                          {
                            part: "identity-widget-forgot-username-help-desc",
                            className: "identity-widget-forgot-username-help-desc text-sm! text-gray-600!",
                            children: [
                              "If you no longer have access to the email address on file or have forgotten which one you used, please",
                              " ",
                              /* @__PURE__ */ y.jsx(
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
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-back-wrap",
                      className: "identity-widget-forgot-username-back-wrap flex! justify-center! mt-4!",
                      children: /* @__PURE__ */ y.jsx(
                        "a",
                        {
                          href: "#",
                          part: "identity-widget-forgot-username-back-link",
                          className: "identity-widget-forgot-username-back-link text-[var(--button-primary-bg)]! hover:underline! text-sm! font-medium! flex! items-center! gap-1!",
                          onClick: (P) => {
                            P.preventDefault(), a();
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
}, Zg = ({ children: n }) => /* @__PURE__ */ y.jsx(
  "span",
  {
    className: "px-1! rounded-sm! font-medium!",
    style: { backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" },
    children: n
  }
), vd = ({ label: n }) => /* @__PURE__ */ y.jsx(
  "span",
  {
    className: "inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!",
    style: {
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)"
    },
    children: n
  }
), vw = ({ onBack: n, handleClose: a }) => {
  const r = w.useRef(null), l = "name@email.com", [u, c] = w.useState(0), f = l.slice(0, u);
  w.useEffect(() => {
    const p = (g) => {
      g.key === "Escape" && a();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [a]), w.useEffect(() => {
    let p;
    return u < l.length ? p = setTimeout(() => c((g) => g + 1), 120) : p = setTimeout(() => c(0), 1200), () => clearTimeout(p);
  }, [u]);
  const h = (p) => {
    p.target === r.current && a();
  };
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      part: "identity-widget-help-center-overlay",
      className: "identity-widget-help-center-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: r,
      onMouseDown: h,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "help-center-dialog-title",
      children: /* @__PURE__ */ y.jsxs(
        "div",
        {
          part: "identity-widget-help-center-modal",
          className: "identity-widget-help-center-modal bg-white! rounded-lg! p-8! w-full! max-w-2xl! relative! max-h-[90vh]! overflow-y-auto! border! border-solid! border-gray-200! shadow-lg!",
          role: "document",
          children: [
            /* @__PURE__ */ y.jsx("style", { children: `@keyframes helpCenterClick { 0%,100% { transform: scale(1); } 45% { transform: scale(0.97); } 65% { transform: scale(1.01); } }
            @keyframes helpCenterInputFocus { 0%,100% { box-shadow: 0 0 0 0 rgba(120,120,120,0); } 50% { box-shadow: 0 0 0 3px rgba(120,120,120,0.12); } }` }),
            /* @__PURE__ */ y.jsx(
              We,
              {
                onClick: a,
                variant: it.LINK,
                part: "identity-widget-help-center-close-button",
                className: "identity-widget-help-center-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
                ariaLabel: "Close dialog",
                children: /* @__PURE__ */ y.jsx(
                  "svg",
                  {
                    part: "identity-widget-help-center-close-icon",
                    className: "identity-widget-help-center-close-icon w-6! h-6!",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ y.jsx(
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
            /* @__PURE__ */ y.jsxs("div", { className: "mb-6! text-center! border-b! border-solid! border-gray-200! pb-5!", children: [
              /* @__PURE__ */ y.jsx(
                "h2",
                {
                  id: "help-center-dialog-title",
                  part: "identity-widget-help-center-title",
                  className: "identity-widget-help-center-title text-2xl! font-bold! text-gray-800! mb-2!",
                  children: "Help Center"
                }
              ),
              /* @__PURE__ */ y.jsx(
                "p",
                {
                  part: "identity-widget-help-center-subtitle",
                  className: "identity-widget-help-center-subtitle text-sm! text-gray-600!",
                  children: "Having trouble logging in to your account? Follow these troubleshooting steps."
                }
              )
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "space-y-6! text-left!", children: [
              /* @__PURE__ */ y.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-4!", children: [
                /* @__PURE__ */ y.jsx("h3", { className: "text-base! font-bold! text-gray-800!", children: "Common reasons sign in fails" }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-700!", children: "Whether you're a member, guest, or viewer, there are a few things that might be happening when sign in fails:" }),
                /* @__PURE__ */ y.jsxs("ul", { className: "list-disc! pl-6! text-sm! text-gray-700! space-y-1!", children: [
                  /* @__PURE__ */ y.jsx("li", { children: "You have multiple accounts" }),
                  /* @__PURE__ */ y.jsx("li", { children: "You're using the wrong email address or username" }),
                  /* @__PURE__ */ y.jsx("li", { children: "You forgot your password" }),
                  /* @__PURE__ */ y.jsx("li", { children: "Your account access may require additional verification" })
                ] }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-700!", children: "Here are the recommended steps to troubleshoot." })
              ] }),
              /* @__PURE__ */ y.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!", children: [
                /* @__PURE__ */ y.jsx("h3", { className: "text-lg! font-bold! text-gray-800!", children: "Check your email address or username" }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-700!", children: "Occasionally, we find that someone is attempting to sign in with an incorrect email address or username." }),
                /* @__PURE__ */ y.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  /* @__PURE__ */ y.jsx("strong", { children: "Solution:" }),
                  " Try logging in with other email addresses or usernames you might have used. If you have multiple email addresses redirected to one inbox, try each of them."
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs("section", { className: "space-y-3! rounded-md! border! border-solid! border-gray-200! p-4!", children: [
                /* @__PURE__ */ y.jsx("h3", { className: "text-lg! font-bold! text-gray-800!", children: "Reset your password" }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-700!", children: "If you are sure you are using the correct email address or username, you might have forgotten your password. No problem." }),
                /* @__PURE__ */ y.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  /* @__PURE__ */ y.jsx("strong", { children: "Solution:" }),
                  " Click the",
                  " ",
                  /* @__PURE__ */ y.jsx(Zg, { children: '"Forgot Password?"' }),
                  " link on the login page to start the password reset process."
                ] }),
                /* @__PURE__ */ y.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ y.jsx(vd, { label: "Step 1" }) }),
                  /* @__PURE__ */ y.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-4!", children: "Continue to login" }),
                  /* @__PURE__ */ y.jsxs("div", { className: "space-y-3!", children: [
                    /* @__PURE__ */ y.jsx(gn, { label: "Email or Username", value: "name@email.com", disabled: !0 }),
                    /* @__PURE__ */ y.jsx(gn, { label: "Password", value: "••••••••", disabled: !0 }),
                    /* @__PURE__ */ y.jsxs("div", { className: "flex! items-center! justify-between! text-sm!", children: [
                      /* @__PURE__ */ y.jsxs("label", { className: "flex! items-center! text-gray-500!", children: [
                        /* @__PURE__ */ y.jsx("input", { type: "checkbox", disabled: !0, className: "mr-2!" }),
                        "Remember me"
                      ] }),
                      /* @__PURE__ */ y.jsx(
                        "span",
                        {
                          className: "relative! inline-flex! items-center!",
                          style: { animation: "helpCenterClick 1.3s ease-in-out infinite" },
                          children: /* @__PURE__ */ y.jsx("span", { className: "text-sm! font-medium! cursor-default!", children: "Forgot Password?" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ y.jsx(We, { type: Ve.BUTTON, disabled: !0, className: "w-full!", children: "Sign In" })
                  ] })
                ] }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, enter your account email address. It should look something like this:" }),
                /* @__PURE__ */ y.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ y.jsx(vd, { label: "Step 2" }) }),
                  /* @__PURE__ */ y.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ y.jsx(
                    "div",
                    {
                      className: "rounded-md!",
                      style: { animation: "helpCenterInputFocus 1.4s ease-in-out infinite" },
                      children: /* @__PURE__ */ y.jsx(
                        gn,
                        {
                          label: "Email Address",
                          value: f,
                          disabled: !0,
                          endIcon: /* @__PURE__ */ y.jsx("span", { className: "text-gray-500! animate-pulse!", children: "|" })
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ y.jsxs("p", { className: "text-sm! text-gray-700!", children: [
                  "Then click on ",
                  /* @__PURE__ */ y.jsx(Zg, { children: '"Send reset link"' }),
                  "."
                ] }),
                /* @__PURE__ */ y.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ y.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ y.jsx(vd, { label: "Step 3" }) }),
                  /* @__PURE__ */ y.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ y.jsx(gn, { label: "Email Address", value: f, disabled: !0 }),
                  /* @__PURE__ */ y.jsx(
                    "span",
                    {
                      className: "block!",
                      style: { animation: "helpCenterClick 1.2s ease-in-out infinite" },
                      children: /* @__PURE__ */ y.jsx(We, { type: Ve.BUTTON, disabled: !0, className: "w-full! mt-4!", children: "Send reset link" })
                    }
                  )
                ] }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, you will receive an email with instructions to reset your password." })
              ] })
            ] }),
            /* @__PURE__ */ y.jsx(
              "div",
              {
                part: "identity-widget-help-center-tip",
                className: "identity-widget-help-center-tip mt-6! mb-6! rounded-lg! border! border-solid! border-green-300! bg-green-50! px-5! py-4!",
                role: "note",
                "aria-label": "Password reset tip",
                children: /* @__PURE__ */ y.jsxs("p", { className: "m-0! text-sm! leading-[1.5]! text-gray-800! font-medium!", children: [
                  /* @__PURE__ */ y.jsx("strong", { children: "Tip:" }),
                  ` Double-check that the email address written in the field above the "Reset Password" button is the correct address! You will have to check that account's inbox to continue this process.`
                ] })
              }
            ),
            /* @__PURE__ */ y.jsx(
              We,
              {
                type: Ve.BUTTON,
                variant: it.OUTLINE,
                onClick: n,
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
}, bw = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", $w = ({
  onSuccess: n,
  onError: a,
  handleClose: r,
  authority: l,
  title: u = "Continue to login",
  subtitle: c = "Continue by signing in.",
  initialEmail: f = "",
  enableGoogleLogin: h = !0,
  enableAppleLogin: p = !1,
  appleClientId: g
}) => {
  const [b, $] = w.useState(f), [N, _] = w.useState(""), [E, A] = w.useState(!1), [C, M] = w.useState(!1), [H, q] = w.useState(!1), [Z, V] = w.useState(""), [ee, W] = w.useState(!1), [X, ae] = w.useState(!1), [se, Pe] = w.useState(!1), [ve, _e] = w.useState(!1), [ke, qe] = w.useState(!1), [P, k] = w.useState(!1), [G, fe] = w.useState(!1), [Oe, Ae] = w.useState(!1), [x, B] = w.useState(!1), [Y, Q] = w.useState(""), [de, ce] = w.useState(""), [Ee, Ze] = w.useState(oe.INFO), [Ie, Ft] = w.useState(!1), [tn, Tn] = w.useState(null), jt = Au(), [xt, Gt] = w.useState(!1), [sa, dr] = w.useState(!1), ca = w.useRef(null), Tt = w.useRef(null), qt = w.useRef(!1);
  w.useEffect(() => {
    if (!p || !g || qt.current) return;
    if (document.querySelector(
      'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]'
    )) {
      qt.current = !0;
      return;
    }
    const pe = document.createElement("script");
    pe.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", pe.async = !0, pe.onload = () => {
      qt.current = !0;
    }, document.head.appendChild(pe);
  }, [p, g]);
  const Ot = async () => {
    try {
      dr(!0);
      const re = window.AppleID;
      if (!re) {
        const On = "Apple Sign In SDK not loaded. Please try again.";
        ce(On), Ze(oe.ERROR), a(On);
        return;
      }
      re.auth.init({
        clientId: g,
        scope: "name email",
        redirectURI: `${window.location.origin}/`,
        usePopup: !0
      });
      const pe = await re.auth.signIn(), $t = pe?.authorization?.code;
      if (!$t) throw new Error("Apple sign-in did not return an authorization code.");
      const fr = pe?.user, mr = await K8($t, fr, ee);
      n(mr), V("");
    } catch (re) {
      if (re?.error === "popup_closed_by_user")
        return;
      const pe = re?.error || (re instanceof Error ? re.message : "Apple sign-in failed.");
      ce(pe), Ze(oe.ERROR), a(pe);
    } finally {
      dr(!1);
    }
  }, Se = zv({
    onSuccess: async (re) => {
      try {
        const pe = await q8(re.code, ee);
        n(pe);
      } catch (pe) {
        const $t = pe instanceof Error ? pe.message : "Google sign-in failed";
        ce($t), Ze(oe.ERROR), a($t);
      } finally {
        Gt(!1);
      }
    },
    onError: (re) => {
      const pe = re?.error_description || re?.error || "Google sign-in failed.";
      ce(pe), Ze(oe.ERROR), a(pe), Gt(!1);
    },
    onNonOAuthError: (re) => {
      const pe = `Google sign-in failed: ${re.type}`;
      ce(pe), Ze(oe.ERROR), a(pe), Gt(!1);
    },
    flow: "auth-code"
  });
  w.useEffect(() => {
    if (!jt) {
      if (Tt.current && clearTimeout(Tt.current), !b) {
        k(!1), Ae(!1), B(!1), Q("");
        return;
      }
      if (!b.includes("@")) {
        k(!0), Ae(!1);
        return;
      }
      if (!ii.test(b)) {
        k(!1), Ae(!1);
        return;
      }
      return Tt.current = setTimeout(async () => {
        fe(!0);
        try {
          (await Ou(b)).exists ? (k(!0), Ae(!1)) : (k(!1), Ae(!0));
        } catch (re) {
          console.error("[EmbeddedLogin] Email check failed:", re);
          const pe = re instanceof Error ? re.message : "Unable to verify email. You can still proceed with login.";
          B(!0), Q(pe), Ae(!0), k(!1);
        } finally {
          fe(!1);
        }
      }, 500), () => {
        Tt.current && clearTimeout(Tt.current);
      };
    }
  }, [b, jt]);
  const nt = b && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b);
  w.useEffect(() => {
    const re = (pe) => {
      pe.key === "Escape" && r();
    };
    return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
  }, [r]);
  const yi = (re) => {
    re.target === ca.current && r();
  }, da = async (re) => {
    if (re.preventDefault(), !jt) {
      if (!b || !N) {
        V("Please enter both username/email and password"), a("Please enter both username/email and password");
        return;
      }
      A(!0), V("");
      try {
        const pe = await Zy(b, N, ee), $t = H8(N, {
          displayName: b.split("@")[0],
          email: b
        });
        Object.values($t).every(Boolean) ? n(pe) : (Tn(pe), Ft(!0));
      } catch (pe) {
        console.error("[EmbeddedLogin] Login failed:", pe);
        const $t = pe instanceof Error ? pe.message : "Authentication failed";
        V($t), ce($t), Ze(oe.ERROR), a($t);
      } finally {
        A(!1);
      }
    }
  }, Ia = (re) => {
    if (re.key === "CapsLock" && re.type === "keydown") {
      q((pe) => !pe);
      return;
    }
    re.key !== "CapsLock" && q(Kd(re));
  };
  return se ? /* @__PURE__ */ y.jsx(
    gw,
    {
      email: b,
      onBack: () => Pe(!1),
      handleClose: r,
      onCreateAccount: () => {
        Pe(!1), ae(!0);
      }
    }
  ) : ve ? /* @__PURE__ */ y.jsx(
    pw,
    {
      email: b,
      onBack: () => _e(!1),
      handleClose: r,
      onCreateAccount: () => {
        _e(!1), ae(!0);
      }
    }
  ) : ke ? /* @__PURE__ */ y.jsx(vw, { onBack: () => qe(!1), handleClose: r }) : X ? /* @__PURE__ */ y.jsx(
    mw,
    {
      onSuccess: (re) => {
        ae(!1), n(re);
      },
      onError: a,
      handleClose: r,
      onSignIn: (re) => {
        ae(!1), re && $(re);
      },
      authority: l,
      initialEmail: b
    }
  ) : /* @__PURE__ */ y.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: ca,
      onMouseDown: yi,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ y.jsxs(
          "div",
          {
            part: "identity-widget-login-modal",
            className: "identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
            role: "document",
            children: [
              /* @__PURE__ */ y.jsx(
                We,
                {
                  onClick: r,
                  variant: it.LINK,
                  part: "identity-widget-login-close-button",
                  className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                  type: Ve.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ y.jsx(
                    "svg",
                    {
                      part: "identity-widget-login-close-icon",
                      className: "identity-widget-login-close-icon w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ y.jsx(
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
              /* @__PURE__ */ y.jsxs(
                "div",
                {
                  part: "identity-widget-login-header",
                  className: "identity-widget-login-header mb-3! text-center!",
                  children: [
                    /* @__PURE__ */ y.jsx(
                      "h2",
                      {
                        part: "identity-widget-login-title",
                        id: "login-dialog-title",
                        className: "identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!",
                        children: u
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      "p",
                      {
                        part: "identity-widget-login-subtitle",
                        className: "identity-widget-login-subtitle text-sm! text-gray-600! mt-1!",
                        children: c
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ y.jsxs(
                "form",
                {
                  part: "identity-widget-login-form",
                  onSubmit: da,
                  className: "identity-widget-login-form space-y-2!",
                  "aria-label": "Login form",
                  children: [
                    h && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                      /* @__PURE__ */ y.jsx(
                        "div",
                        {
                          part: "identity-widget-google-section",
                          className: "identity-widget-google-section mt-0! mb-4! justify-center!",
                          children: /* @__PURE__ */ y.jsxs(
                            We,
                            {
                              type: Ve.BUTTON,
                              variant: it.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => {
                                Gt(!0), Se();
                              },
                              disabled: E || xt || jt,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ y.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: bw,
                                    alt: "Google",
                                    className: "identity-widget-google-icon w-[18px]! h-[18px]!"
                                  }
                                ),
                                /* @__PURE__ */ y.jsx("span", { part: "identity-widget-google-text", className: "identity-widget-google-text", children: "Sign in with Google" })
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ y.jsxs(
                        "div",
                        {
                          part: "identity-widget-login-divider",
                          className: "identity-widget-login-divider relative! mt-2! mb-4!",
                          children: [
                            /* @__PURE__ */ y.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-line-wrap",
                                className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!",
                                children: /* @__PURE__ */ y.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-login-divider-line",
                                    className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ y.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-text-wrap",
                                className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!",
                                children: /* @__PURE__ */ y.jsx(
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
                    p && g && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                      /* @__PURE__ */ y.jsx(
                        "div",
                        {
                          part: "identity-widget-apple-section",
                          className: "identity-widget-apple-section mt-0! mb-4! flex! justify-center!",
                          children: /* @__PURE__ */ y.jsxs(
                            We,
                            {
                              type: Ve.BUTTON,
                              variant: it.OUTLINE,
                              part: "identity-widget-apple-button",
                              onClick: Ot,
                              disabled: E || sa || jt,
                              className: "identity-widget-apple-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ y.jsx(
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
                                    children: /* @__PURE__ */ y.jsx("path", { d: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" })
                                  }
                                ),
                                /* @__PURE__ */ y.jsx("span", { part: "identity-widget-apple-text", className: "identity-widget-apple-text", children: "Sign in with Apple" })
                              ]
                            }
                          )
                        }
                      ),
                      !h && /* @__PURE__ */ y.jsxs(
                        "div",
                        {
                          part: "identity-widget-login-divider",
                          className: "identity-widget-login-divider relative! mt-2! mb-4! hidden!",
                          children: [
                            /* @__PURE__ */ y.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-line-wrap",
                                className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!",
                                children: /* @__PURE__ */ y.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-login-divider-line",
                                    className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ y.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-text-wrap",
                                className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!",
                                children: /* @__PURE__ */ y.jsx(
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
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-login-email-field",
                        className: "identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ y.jsx(
                          gn,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: b,
                            onChange: (re) => $(re.target.value),
                            placeholder: "Enter email or username",
                            disabled: E,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                              G && /* @__PURE__ */ y.jsx(yl, {}),
                              !G && P && nt && !x && /* @__PURE__ */ y.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: ur,
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
                    jt && /* @__PURE__ */ y.jsx(
                      Bt,
                      {
                        type: oe.ERROR,
                        title: Me.BRAND_CONFIG_TITLE,
                        message: Me.BRAND_CONFIG_MESSAGE,
                        className: "mb-4!"
                      }
                    ),
                    !jt && Oe && !P && nt && !x && /* @__PURE__ */ y.jsx(
                      Bt,
                      {
                        type: oe.INFO,
                        message: gl.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          Ae(!1), ae(!0);
                        },
                        className: "mb-4!"
                      }
                    ),
                    !jt && Oe && x && /* @__PURE__ */ y.jsx(Bt, { type: oe.ERROR, message: Y, className: "mb-4!" }),
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-login-password-field",
                        className: "identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!",
                        children: /* @__PURE__ */ y.jsxs(
                          "div",
                          {
                            part: "identity-widget-login-password-input-wrap",
                            className: "identity-widget-login-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ y.jsx(
                                gn,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: C ? "text" : "password",
                                  value: N,
                                  onChange: (re) => {
                                    _(re.target.value), V("");
                                  },
                                  onKeyDown: Ia,
                                  onKeyUp: Ia,
                                  placeholder: "Enter Password...",
                                  disabled: E,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: Z,
                                  endIcon: /* @__PURE__ */ y.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-login-password-toggle",
                                      onClick: () => M(!C),
                                      className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": C ? "Hide password" : "Show password",
                                      children: C ? /* @__PURE__ */ y.jsx(
                                        "svg",
                                        {
                                          part: "identity-widget-login-password-hide-icon",
                                          className: "identity-widget-login-password-hide-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ y.jsx(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            }
                                          )
                                        }
                                      ) : /* @__PURE__ */ y.jsxs(
                                        "svg",
                                        {
                                          part: "identity-widget-login-password-show-icon",
                                          className: "identity-widget-login-password-show-icon w-5! h-5!",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          "aria-hidden": "true",
                                          children: [
                                            /* @__PURE__ */ y.jsx(
                                              "path",
                                              {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                              }
                                            ),
                                            /* @__PURE__ */ y.jsx(
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
                              H && /* @__PURE__ */ y.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: gl.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-meta-row",
                        className: "identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!",
                        children: [
                          /* @__PURE__ */ y.jsxs(
                            "label",
                            {
                              part: "identity-widget-login-remember-label",
                              className: "identity-widget-login-remember-label flex! items-center! m-0!",
                              children: [
                                /* @__PURE__ */ y.jsx(
                                  "input",
                                  {
                                    type: "checkbox",
                                    part: "identity-widget-login-remember-checkbox",
                                    checked: ee,
                                    onChange: (re) => W(re.target.checked),
                                    className: "identity-widget-login-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                                    "aria-label": "Remember me"
                                  }
                                ),
                                /* @__PURE__ */ y.jsx(
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
                          /* @__PURE__ */ y.jsxs(
                            "div",
                            {
                              part: "identity-widget-login-forgot-links",
                              className: "identity-widget-login-forgot-links flex! items-center! gap-1!",
                              children: [
                                /* @__PURE__ */ y.jsx(
                                  "a",
                                  {
                                    href: "#",
                                    part: "identity-widget-login-forgot-password-link",
                                    className: "identity-widget-login-forgot-password-link no-underline! --button-primary-text!",
                                    style: {
                                      fontWeight: "500"
                                    },
                                    onClick: (re) => {
                                      re.preventDefault(), Pe(!0);
                                    },
                                    children: "Forgot Password"
                                  }
                                ),
                                /* @__PURE__ */ y.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-login-forgot-separator",
                                    className: "identity-widget-login-forgot-separator text-gray-400!",
                                    children: "or"
                                  }
                                ),
                                /* @__PURE__ */ y.jsx(
                                  "a",
                                  {
                                    href: "#",
                                    part: "identity-widget-login-forgot-username-link",
                                    className: "identity-widget-login-forgot-username-link no-underline! --button-primary-text!",
                                    style: {
                                      fontWeight: "500"
                                    },
                                    onClick: (re) => {
                                      re.preventDefault(), _e(!0);
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
                    /* @__PURE__ */ y.jsx(
                      We,
                      {
                        type: Ve.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: E || !b || jt,
                        className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!",
                        children: E ? /* @__PURE__ */ y.jsxs(
                          "span",
                          {
                            part: "identity-widget-login-submit-loading",
                            className: "identity-widget-login-submit-loading flex! items-center! justify-center!",
                            children: [
                              /* @__PURE__ */ y.jsxs(
                                "svg",
                                {
                                  part: "identity-widget-login-submit-spinner",
                                  className: "identity-widget-login-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    /* @__PURE__ */ y.jsx(
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
                                    /* @__PURE__ */ y.jsx(
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
                    /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-bottom-divider",
                        className: "identity-widget-login-bottom-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ y.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-line-wrap",
                              className: "identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ y.jsx(
                                "div",
                                {
                                  part: "identity-widget-login-bottom-divider-line",
                                  className: "identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ y.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-text-wrap",
                              className: "identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ y.jsx(
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
                    /* @__PURE__ */ y.jsx(
                      We,
                      {
                        type: Ve.BUTTON,
                        variant: it.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => ae(!0),
                        disabled: E || xt,
                        className: "identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!",
                        children: /* @__PURE__ */ y.jsx(
                          "span",
                          {
                            part: "identity-widget-login-create-account-text",
                            className: "identity-widget-login-create-account-text",
                            children: "Create an Account"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        part: "identity-widget-login-help-center-wrap",
                        className: "identity-widget-login-help-center-wrap text-center! mt-4!",
                        children: /* @__PURE__ */ y.jsxs(
                          "button",
                          {
                            type: "button",
                            part: "identity-widget-login-help-center-button",
                            className: "identity-widget-login-help-center-button group bg-transparent! border-none! p-0! text-sm! font-normal! cursor-pointer!",
                            onClick: () => qe(!0),
                            children: [
                              /* @__PURE__ */ y.jsx("span", { className: "font-bold!", children: "Can't log in? " }),
                              /* @__PURE__ */ y.jsx("span", { className: "text-[var(--button-primary-bg)]! font-bold! transition-all! duration-150! group-hover:underline!", children: "Visit our help center" })
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
        de && /* @__PURE__ */ y.jsx(wd, { message: de, type: Ee, onClose: () => ce("") }),
        Ie && /* @__PURE__ */ y.jsx(
          V8,
          {
            onResetPassword: () => {
              Ft(!1), Tn(null), Pe(!0);
            },
            onContinue: () => {
              Ft(!1), tn && n(tn), Tn(null);
            }
          }
        )
      ]
    }
  );
}, ww = (n) => {
  const { authority: a, subsidiary: r, onRedirect: l, onTokenValidityCheck: u } = n, [c, f] = w.useState(!1), [h, p] = w.useState(n.logoutCounter ?? 0);
  (n.logoutCounter ?? 0) !== h && (p(n.logoutCounter ?? 0), f(!1)), w.useEffect(() => (a ? (N8(a), console.log(`${we.AUTH} Authority override set to: ${a}`)) : (Kh(), console.log(`${we.AUTH} Using automatic authority detection`)), () => {
    Kh();
  }), [a]);
  const g = async (_) => {
    if (!n.redirectDashboardUrl && !n.redirectCheckoutUrl)
      return console.log(
        `${we.AUTH} No redirectDashboardUrl or redirectCheckoutUrl provided, skipping enrollment/cart API calls`
      ), { url: null, enrollments: null, cart: null };
    try {
      let E = _;
      if (E || (E = Nt(xe.ACCESS_TOKEN, !1) || void 0), !E)
        return console.error(`${we.AUTH} No access token found for redirect determination`), { url: null, enrollments: null, cart: null };
      const A = [
        n.redirectDashboardUrl ? P8(E) : null,
        n.redirectCheckoutUrl ? k8(E) : null
      ], [C, M] = await Promise.allSettled([
        A[0] ?? Promise.resolve(null),
        A[1] ?? Promise.resolve(null)
      ]), H = C.status === "fulfilled" ? C.value : null, q = M.status === "fulfilled" ? M.value : null, Z = H ? H.results ?? H.items?.length ?? 0 : 0, V = q?.hasItems === !0;
      return C.status === "rejected" && console.warn(`${we.AUTH} Enrollments fetch failed:`, C.reason), M.status === "rejected" && console.warn(`${we.AUTH} Cart fetch failed:`, M.reason), console.log(`${we.AUTH} enrollmentCount: ${Z}, hasItems: ${V}`), V && n.redirectCheckoutUrl ? (console.log(`${we.AUTH} Redirecting to checkout: ${n.redirectCheckoutUrl}`), { url: n.redirectCheckoutUrl, enrollments: H, cart: q }) : !V && n.redirectDashboardUrl ? (console.log(`${we.AUTH} Redirecting to dashboard: ${n.redirectDashboardUrl}`), { url: n.redirectDashboardUrl, enrollments: H, cart: q }) : { url: null, enrollments: H, cart: q };
    } catch (E) {
      return console.error(`${we.AUTH} Error determining redirect URL:`, E), { url: null, enrollments: null, cart: null };
    }
  };
  w.useEffect(() => {
    let _;
    return (async () => {
      const A = await B8();
      typeof A == "function" && (_ = A);
    })(), () => {
      _ && _();
    };
  }, [c]), w.useEffect(() => {
    (async () => {
      try {
        const E = !I8();
        if (u && u(E), await z8()) {
          f(!0);
          return;
        }
        if (F8()) {
          if (await lf()) {
            const H = Nt(xe.ACCESS_TOKEN, !1);
            if (!H || !Td(H))
              return;
            console.log(`${we.AUTH} Auto-login successful`), f(!0), u && u(!0);
          }
        } else
          localStorage.removeItem(ft.REFRESH_TOKEN), localStorage.removeItem(ft.REFRESH_TOKEN_TIME);
      } catch (E) {
        console.error(`${we.AUTH} Auto-login failed:`, E), localStorage.removeItem(ft.REFRESH_TOKEN), localStorage.removeItem(ft.REFRESH_TOKEN_TIME);
      }
    })();
  }, [u]), w.useEffect(() => {
    a && localStorage.setItem("iam_authority", a), r && localStorage.setItem("subsidiary", r);
  }, [a, r]);
  const b = (_) => {
    n.handleClose && n.handleClose(), f(!0), u && u(!0);
    const E = _?.access_token, A = E || Nt(xe.ACCESS_TOKEN, !1), C = A ? Td(A) : null;
    g(E).then(({ url: M, enrollments: H, cart: q }) => {
      if (n.onSuccess) {
        const Z = {
          userDetails: C?.userInfo ?? null,
          enrollments: H,
          cart: q
        };
        n.onSuccess(Z);
      }
      M && (C && l && l(M, C), window.location.href = M);
    }).catch((M) => {
      console.error(`${we.AUTH} determineRedirectUrl FAILED:`, M), n.onFailure && n.onFailure(M instanceof Error ? M.message : String(M));
    });
  }, $ = (_) => {
    console.log(`${we.AUTH} Embedded login error:`, _), n.onFailure && n.onFailure(_);
  }, N = () => {
    n.handleClose && n.handleClose();
  };
  return /* @__PURE__ */ y.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ y.jsx(W4, { children: /* @__PURE__ */ y.jsx(
    yy,
    {
      path: "*",
      element: /* @__PURE__ */ y.jsx(w.Fragment, { children: n.showLogin && !c && /* @__PURE__ */ y.jsx(
        $w,
        {
          onSuccess: b,
          onError: $,
          handleClose: N,
          authority: a,
          title: n.loginTitle,
          subtitle: n.loginSubtitle,
          enableGoogleLogin: !!n.googleClientId,
          enableAppleLogin: !!n.appleClientId,
          appleClientId: n.appleClientId
        }
      ) })
    }
  ) }) });
};
class Ew {
  cdnBaseUrl;
  currentBrand = null;
  styleElement = null;
  shadowRoot = null;
  constructor(a = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", r) {
    this.cdnBaseUrl = a.replace(/\/$/, ""), this.shadowRoot = r || null;
  }
  /**
   * Fetch all available brands from CDN
   */
  async getBrands() {
    try {
      const a = await fetch(`${this.cdnBaseUrl}/brands.json`);
      if (!a.ok)
        throw new Error(`Failed to fetch brands: ${a.statusText}`);
      return await a.json();
    } catch (a) {
      throw console.error("[ThemeWidget] Error fetching brands:", a), a;
    }
  }
  /**
   * Auto-detect brand based on current URL domain.
   * On localhost (any port), checks localStorage keys bloom-theme-brand and
   * clx_brand_folder first so local development can override the brand without
   * a matching domain.
   */
  async detectBrandFromDomain() {
    try {
      const a = window.location.hostname;
      if (a === "localhost" || a === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(a)) {
        const c = (g) => g.replace(/^["']+|["']+$/g, "").trim(), f = localStorage.getItem("bloom-theme-brand"), h = localStorage.getItem("clx_brand_folder"), p = f ?? h;
        if (p) {
          const g = c(p);
          if (g)
            return console.log(
              `[ThemeWidget] localhost: using localStorage brand override "${g}"`
            ), g;
        }
        return console.log("[ThemeWidget] localhost: no brand override found in localStorage"), null;
      }
      const u = (await this.getBrands()).find(
        (c) => a.includes(c.domain) || c.domain.includes(a)
      );
      return u ? (localStorage.setItem("subsidiary", u.token), u.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${a}`), null);
    } catch (a) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", a), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(a) {
    try {
      const l = (await this.getBrands()).find(
        (h) => h.folder.toLowerCase() === a.toLowerCase() || h.token.toLowerCase() === a.toLowerCase()
      );
      if (!l) {
        console.warn(`[ThemeWidget] Brand not found: ${a}. Using default theme.`), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
        return;
      }
      localStorage.setItem("subsidiary", l.token), localStorage.setItem(
        "brand_data",
        JSON.stringify({
          id: l.folder,
          // Use folder name (e.g., "elite") instead of token (e.g., "dev-elite")
          domain: l.domain,
          name: l.name
        })
      );
      const u = `${this.cdnBaseUrl}/${l.folder}/theme.json`, c = await fetch(u);
      if (!c.ok)
        throw new Error(`Failed to fetch theme: ${c.statusText}`);
      const f = await c.json();
      if (this.shadowRoot)
        this.applyThemeToShadowDOM(f);
      else {
        const h = document.documentElement;
        f.styles.forEach((p) => {
          let g = p.value;
          /^\d+\s\d+\s\d+$/.test(g) && (g = `rgb(${g})`), h.style.setProperty(`--${p.name}`, g);
        });
      }
      this.currentBrand = l, console.log(`[ThemeWidget] Theme loaded for brand: ${l.name}`), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
    } catch (r) {
      throw console.error("[ThemeWidget] Error loading theme:", r), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")), r;
    }
  }
  /**
   * Apply theme styles to Shadow DOM using CSS variables
   * This ensures complete style isolation from host page styles
   */
  applyThemeToShadowDOM(a) {
    if (!this.shadowRoot) return;
    const r = a.styles.map((u) => {
      let c = u.value;
      return /^\d+\s\d+\s\d+$/.test(c) && (c = `rgb(${c})`), `  --${u.name}: ${c};`;
    }).join(`
`), l = document.createElement("style");
    l.setAttribute("data-theme-widget", "true"), l.textContent = `:host {
${r}
}`, this.shadowRoot.appendChild(l);
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(a) {
    const r = a.styles.map((u) => {
      const c = this.formatStyleValue(u.value);
      return `  --${u.name}: ${c};`;
    }).join(`
`), l = `@theme {
${r}
}

:host {
${r}
}`;
    this.removeTheme(), this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-theme-widget", "true"), this.styleElement.textContent = l, this.shadowRoot ? this.shadowRoot.appendChild(this.styleElement) : document.head.appendChild(this.styleElement);
  }
  /**
   * Format style values to proper CSS format
   */
  formatStyleValue(a) {
    return /^#?[0-9A-Fa-f]{6}$/.test(a) ? a.startsWith("#") ? a : `#${a}` : /^\d+\s+\d+\s+\d+$/.test(a) ? `rgba(${a.replace(/\s+/g, ", ")}, 1)` : a;
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
async function Qg(n) {
  const a = new Ew(n.cdnBaseUrl, n.shadowRoot), r = n.brandFolder || n.brandToken;
  if (r)
    await a.loadTheme(r);
  else if (n.autoDetect) {
    const l = await a.detectBrandFromDomain();
    l ? await a.loadTheme(l) : (sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")));
  } else
    sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
  return a;
}
const Wg = "849375884089-h48ld9g29evhpb7jdra5jn0bce4thnse.apps.googleusercontent.com", Sw = "merchant.com.colibrigroup.testidentitywidget", Cw = ({
  clientId: n,
  children: a
}) => n ? /* @__PURE__ */ y.jsx(Bv, { clientId: n, children: a }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: a }), Jg = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class n extends HTMLElement {
    root = null;
    isLogoutInProgress = !1;
    logoutCounter = 0;
    static get observedAttributes() {
      return [
        "authority",
        "subsidiary",
        "redirectUrl",
        "redirect-dashboard-url",
        "redirectDashboardUrl",
        "redirect-checkout-url",
        "redirectCheckoutUrl",
        "loginTitle",
        "loginSubtitle",
        "show-login",
        "custom-primary-color",
        "customPrimaryColor",
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
    onSuccess;
    onFailure;
    connectedCallback() {
      const r = this.attachShadow({ mode: "open" });
      if (Jg) {
        const c = document.createElement("style");
        c.textContent = Jg, r.appendChild(c);
      }
      this.applyCustomPrimaryColor(r);
      const l = this.getAttribute("subsidiary");
      l && l.trim() !== "" ? this.loadTheme(l, r) : this.loadThemeFromDomain(r);
      const u = document.createElement("div");
      r.appendChild(u), this.root = kv.createRoot(u), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
    }
    applyCustomPrimaryColor(r) {
      const l = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (l && l.trim() !== "") {
        const u = document.createElement("style");
        let c = l.trim();
        /^[0-9A-Fa-f]{6}$/.test(c) && (c = `#${c}`), u.textContent = `
          :host {
            --color-primary: ${c};
            --color-primary-light: ${c};
            --button-primary-bg: ${c};
            --button-primary-bg-hover: ${c};
            --color-border-focus: ${c};
          }
        `, r.appendChild(u), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(r, l) {
      try {
        await Qg({
          brandFolder: r,
          shadowRoot: l
        });
      } catch (u) {
        console.error("[Widget] Failed to load theme:", u);
      }
    }
    async loadThemeFromDomain(r) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await Qg({
          shadowRoot: r,
          autoDetect: !0
        });
      } catch (l) {
        console.error("[Widget] Failed to auto-detect theme:", l), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(r, l, u) {
      if (l !== u) {
        if (r === "custom-primary-color" || r === "customPrimaryColor") {
          const c = this.shadowRoot;
          c && this.applyCustomPrimaryColor(c);
        }
        this.render();
      }
    }
    disconnectedCallback() {
      this.removeEventListener("logout", this.handleExternalLogoutEvent), this.root && (this.root.unmount(), this.root = null);
    }
    handleExternalLogoutEvent = async (r) => {
      const l = r;
      r.target === this && (l.detail?.initiatedByWidget || await this.executeLogout("event"));
    };
    async executeLogout(r) {
      if (!this.isLogoutInProgress) {
        this.isLogoutInProgress = !0;
        try {
          const l = Nt(xe.REFRESH_TOKEN, !0);
          l ? (await U8(l), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (l) {
          console.error("[Widget] Logout API call failed:", l);
        } finally {
          const l = localStorage.getItem("brand_data");
          G8(), sessionStorage.clear(), l && localStorage.setItem("brand_data", l), this.logoutCounter++, this.render(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
          const u = new CustomEvent("logout", {
            detail: { initiatedByWidget: !0, trigger: r },
            bubbles: !0,
            composed: !0
          });
          this.dispatchEvent(u), this.isLogoutInProgress = !1;
        }
      }
    }
    handleRedirect = (r, l) => {
      this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(r, l));
      const u = new CustomEvent("redirect", {
        detail: {
          url: r,
          userSession: l,
          tokens: { access_token: l?.access_token },
          userInfo: l?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(u), console.log("[Widget] Redirect event dispatched");
    };
    handleClose = () => {
      this.onClose && (console.log("[Widget] Calling onClose function prop"), this.onClose());
      const r = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(r), this.removeAttribute("show-login");
    };
    handleTokenValidity = (r) => {
      this.onTokenValidityCheck && this.onTokenValidityCheck(r);
      const l = new CustomEvent("is-token-valid", {
        detail: { isValid: r },
        bubbles: !0,
        composed: !0
      });
      console.log("event", l), this.dispatchEvent(l);
    };
    handleSuccess = (r) => {
      this.onSuccess && this.onSuccess(r);
      const l = new CustomEvent("success", {
        detail: r,
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(l);
    };
    handleFailure = (r) => {
      this.onFailure && this.onFailure(r);
      const l = new CustomEvent("failure", {
        detail: { error: r },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(l);
    };
    getProps() {
      return {
        authority: this.getAttribute("authority") || Yv(),
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirect-url") || this.getAttribute("redirectUrl") || void 0,
        redirectDashboardUrl: this.getAttribute("redirect-dashboard-url") || this.getAttribute("redirectDashboardUrl") || void 0,
        redirectCheckoutUrl: this.getAttribute("redirect-checkout-url") || this.getAttribute("redirectCheckoutUrl") || void 0,
        loginTitle: this.getAttribute("login-title") || this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("login-subtitle") || this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || Wg,
        appleClientId: this.getAttribute("apple-client-id") || this.getAttribute("appleClientId") || Sw,
        onRedirect: this.handleRedirect,
        onTokenValidityCheck: this.handleTokenValidity,
        onSuccess: this.handleSuccess,
        onFailure: this.handleFailure,
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
      const r = this.getProps();
      this.root.render(
        /* @__PURE__ */ y.jsx(Cw, { clientId: r.googleClientId || Wg, children: /* @__PURE__ */ y.jsx(Ev, { children: /* @__PURE__ */ y.jsx(w.StrictMode, { children: /* @__PURE__ */ y.jsx(ww, { ...r }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", n);
}
