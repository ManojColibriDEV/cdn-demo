
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-amber-600:oklch(66.6% .179 58.318);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-4{left:calc(var(--spacing)*4)}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[2100\\]\\!{z-index:2100!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-4{margin-block:calc(var(--spacing)*4)}.my-4\\!{margin-block:calc(var(--spacing)*4)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-0\\.5\\!{margin-top:calc(var(--spacing)*.5)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-12{height:calc(var(--spacing)*12)}.h-12\\!{height:calc(var(--spacing)*12)!important}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-12{width:calc(var(--spacing)*12)}.w-12\\!{width:calc(var(--spacing)*12)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20{width:calc(var(--spacing)*20)}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl{max-width:var(--container-2xl)}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.max-w-md{max-width:var(--container-md)}.max-w-md\\!{max-width:var(--container-md)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-default{cursor:default}.cursor-default\\!{cursor:default!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc{list-style-type:disc}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.flex-wrap{flex-wrap:wrap}.flex-wrap\\!{flex-wrap:wrap!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-start{align-items:flex-start}.items-start\\!{align-items:flex-start!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5\\!{gap:calc(var(--spacing)*.5)!important}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\!{gap:calc(var(--spacing)*1)!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.border-l-green-500{border-left-color:var(--color-green-500)}.border-l-green-500\\!{border-left-color:var(--color-green-500)!important}.border-l-red-500{border-left-color:var(--color-red-500)}.border-l-red-500\\!{border-left-color:var(--color-red-500)!important}.border-l-yellow-500{border-left-color:var(--color-yellow-500)}.border-l-yellow-500\\!{border-left-color:var(--color-yellow-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-6{padding:calc(var(--spacing)*6)}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5{padding-inline:calc(var(--spacing)*5)}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4{padding-block:calc(var(--spacing)*4)}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--banner-error-text\\)\\]\\!{color:var(--banner-error-text)!important}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-amber-600{color:var(--color-amber-600)}.text-amber-600\\!{color:var(--color-amber-600)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400{color:var(--color-blue-400)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-green-900\\!{color:var(--color-green-900)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-red-900\\!{color:var(--color-red-900)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-500{color:var(--color-yellow-500)}.text-yellow-500\\!{color:var(--color-yellow-500)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-900{color:var(--color-yellow-900)}.text-yellow-900\\!{color:var(--color-yellow-900)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-200\\!{--tw-duration:.2s!important;transition-duration:.2s!important}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:border-gray-400\\!:hover{border-color:var(--color-gray-400)!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:underline\\!:hover{text-decoration-line:underline!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-30\\!:disabled{opacity:.3!important}.disabled\\:opacity-50:disabled{opacity:.5}@media not all and (min-width:500px){.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function qp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Iu = { exports: {} }, Di = {};
var Bh;
function Gp() {
  if (Bh) return Di;
  Bh = 1;
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
  return Di.Fragment = r, Di.jsx = o, Di.jsxs = o, Di;
}
var kh;
function Yp() {
  return kh || (kh = 1, Iu.exports = Gp()), Iu.exports;
}
var m = Yp(), Ju = { exports: {} }, ce = {}, qh;
function Kp() {
  if (qh) return ce;
  qh = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), j = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function N(x) {
    return x === null || typeof x != "object" ? null : (x = q && x[q] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var O = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, T = Object.assign, K = {};
  function X(x, B, V) {
    this.props = x, this.context = B, this.refs = K, this.updater = V || O;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(x, B) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, B, "setState");
  }, X.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = X.prototype;
  function $(x, B, V) {
    this.props = x, this.context = B, this.refs = K, this.updater = V || O;
  }
  var F = $.prototype = new Q();
  F.constructor = $, T(F, X.prototype), F.isPureReactComponent = !0;
  var oe = Array.isArray;
  function ee() {
  }
  var I = { H: null, A: null, T: null, S: null }, ue = Object.prototype.hasOwnProperty;
  function be(x, B, V) {
    var Z = V.ref;
    return {
      $$typeof: r,
      type: x,
      key: B,
      ref: Z !== void 0 ? Z : null,
      props: V
    };
  }
  function Ke(x, B) {
    return be(x.type, B, x.props);
  }
  function ye(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function je(x) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(V) {
      return B[V];
    });
  }
  var ze = /\/+/g;
  function Ae(x, B) {
    return typeof x == "object" && x !== null && x.key != null ? je("" + x.key) : B.toString(36);
  }
  function L(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(ee, ee) : (x.status = "pending", x.then(
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
  function z(x, B, V, Z, me) {
    var ie = typeof x;
    (ie === "undefined" || ie === "boolean") && (x = null);
    var pe = !1;
    if (x === null) pe = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case r:
            case o:
              pe = !0;
              break;
            case S:
              return pe = x._init, z(
                pe(x._payload),
                B,
                V,
                Z,
                me
              );
          }
      }
    if (pe)
      return me = me(x), pe = Z === "" ? "." + Ae(x, 0) : Z, oe(me) ? (V = "", pe != null && (V = pe.replace(ze, "$&/") + "/"), z(me, B, V, "", function(dn) {
        return dn;
      })) : me != null && (ye(me) && (me = Ke(
        me,
        V + (me.key == null || x && x.key === me.key ? "" : ("" + me.key).replace(
          ze,
          "$&/"
        ) + "/") + pe
      )), B.push(me)), 1;
    pe = 0;
    var De = Z === "" ? "." : Z + ":";
    if (oe(x))
      for (var P = 0; P < x.length; P++)
        Z = x[P], ie = De + Ae(Z, P), pe += z(
          Z,
          B,
          V,
          ie,
          me
        );
    else if (P = N(x), typeof P == "function")
      for (x = P.call(x), P = 0; !(Z = x.next()).done; )
        Z = Z.value, ie = De + Ae(Z, P++), pe += z(
          Z,
          B,
          V,
          ie,
          me
        );
    else if (ie === "object") {
      if (typeof x.then == "function")
        return z(
          L(x),
          B,
          V,
          Z,
          me
        );
      throw B = String(x), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function Y(x, B, V) {
    if (x == null) return x;
    var Z = [], me = 0;
    return z(x, Z, "", "", function(ie) {
      return B.call(V, ie, me++);
    }), Z;
  }
  function fe(x) {
    if (x._status === -1) {
      var B = x._result;
      B = B(), B.then(
        function(V) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = V);
        },
        function(V) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = V);
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
    forEach: function(x, B, V) {
      Y(
        x,
        function() {
          B.apply(this, arguments);
        },
        V
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
      if (!ye(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return ce.Activity = j, ce.Children = Re, ce.Component = X, ce.Fragment = u, ce.Profiler = f, ce.PureComponent = $, ce.StrictMode = c, ce.Suspense = y, ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ce.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return I.H.useMemoCache(x);
    }
  }, ce.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, ce.cacheSignal = function() {
    return null;
  }, ce.cloneElement = function(x, B, V) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var Z = T({}, x.props), me = x.key;
    if (B != null)
      for (ie in B.key !== void 0 && (me = "" + B.key), B)
        !ue.call(B, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && B.ref === void 0 || (Z[ie] = B[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) Z.children = V;
    else if (1 < ie) {
      for (var pe = Array(ie), De = 0; De < ie; De++)
        pe[De] = arguments[De + 2];
      Z.children = pe;
    }
    return be(x.type, me, Z);
  }, ce.createContext = function(x) {
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
  }, ce.createElement = function(x, B, V) {
    var Z, me = {}, ie = null;
    if (B != null)
      for (Z in B.key !== void 0 && (ie = "" + B.key), B)
        ue.call(B, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (me[Z] = B[Z]);
    var pe = arguments.length - 2;
    if (pe === 1) me.children = V;
    else if (1 < pe) {
      for (var De = Array(pe), P = 0; P < pe; P++)
        De[P] = arguments[P + 2];
      me.children = De;
    }
    if (x && x.defaultProps)
      for (Z in pe = x.defaultProps, pe)
        me[Z] === void 0 && (me[Z] = pe[Z]);
    return be(x, ie, me);
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(x) {
    return { $$typeof: b, render: x };
  }, ce.isValidElement = ye, ce.lazy = function(x) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: x },
      _init: fe
    };
  }, ce.memo = function(x, B) {
    return {
      $$typeof: v,
      type: x,
      compare: B === void 0 ? null : B
    };
  }, ce.startTransition = function(x) {
    var B = I.T, V = {};
    I.T = V;
    try {
      var Z = x(), me = I.S;
      me !== null && me(V, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ee, Ne);
    } catch (ie) {
      Ne(ie);
    } finally {
      B !== null && V.types !== null && (B.types = V.types), I.T = B;
    }
  }, ce.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, ce.use = function(x) {
    return I.H.use(x);
  }, ce.useActionState = function(x, B, V) {
    return I.H.useActionState(x, B, V);
  }, ce.useCallback = function(x, B) {
    return I.H.useCallback(x, B);
  }, ce.useContext = function(x) {
    return I.H.useContext(x);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(x, B) {
    return I.H.useDeferredValue(x, B);
  }, ce.useEffect = function(x, B) {
    return I.H.useEffect(x, B);
  }, ce.useEffectEvent = function(x) {
    return I.H.useEffectEvent(x);
  }, ce.useId = function() {
    return I.H.useId();
  }, ce.useImperativeHandle = function(x, B, V) {
    return I.H.useImperativeHandle(x, B, V);
  }, ce.useInsertionEffect = function(x, B) {
    return I.H.useInsertionEffect(x, B);
  }, ce.useLayoutEffect = function(x, B) {
    return I.H.useLayoutEffect(x, B);
  }, ce.useMemo = function(x, B) {
    return I.H.useMemo(x, B);
  }, ce.useOptimistic = function(x, B) {
    return I.H.useOptimistic(x, B);
  }, ce.useReducer = function(x, B, V) {
    return I.H.useReducer(x, B, V);
  }, ce.useRef = function(x) {
    return I.H.useRef(x);
  }, ce.useState = function(x) {
    return I.H.useState(x);
  }, ce.useSyncExternalStore = function(x, B, V) {
    return I.H.useSyncExternalStore(
      x,
      B,
      V
    );
  }, ce.useTransition = function() {
    return I.H.useTransition();
  }, ce.version = "19.2.3", ce;
}
var Gh;
function xc() {
  return Gh || (Gh = 1, Ju.exports = Kp()), Ju.exports;
}
var w = xc();
const Vp = /* @__PURE__ */ qp(w);
var Yh = "popstate";
function Kh(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Xp(l = {}) {
  function r(u, c) {
    let f = c.state?.masked, { pathname: h, search: p, hash: b } = f || u.location;
    return hc(
      "",
      { pathname: h, search: p, hash: b },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default",
      f ? {
        pathname: u.location.pathname,
        search: u.location.search,
        hash: u.location.hash
      } : void 0
    );
  }
  function o(u, c) {
    return typeof c == "string" ? c : ki(c);
  }
  return Zp(
    r,
    o,
    null,
    l
  );
}
function $e(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function vn(l, r) {
  if (!l) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Qp() {
  return Math.random().toString(36).substring(2, 10);
}
function Vh(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r,
    masked: l.unstable_mask ? {
      pathname: l.pathname,
      search: l.search,
      hash: l.hash
    } : void 0
  };
}
function hc(l, r, o = null, u, c) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Ul(r) : r,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || u || Qp(),
    unstable_mask: c
  };
}
function ki({
  pathname: l = "/",
  search: r = "",
  hash: o = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o), l;
}
function Ul(l) {
  let r = {};
  if (l) {
    let o = l.indexOf("#");
    o >= 0 && (r.hash = l.substring(o), l = l.substring(0, o));
    let u = l.indexOf("?");
    u >= 0 && (r.search = l.substring(u), l = l.substring(0, u)), l && (r.pathname = l);
  }
  return r;
}
function Zp(l, r, o, u = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = u, h = c.history, p = "POP", b = null, y = v();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function v() {
    return (h.state || { idx: null }).idx;
  }
  function S() {
    p = "POP";
    let T = v(), K = T == null ? null : T - y;
    y = T, b && b({ action: p, location: O.location, delta: K });
  }
  function j(T, K) {
    p = "PUSH";
    let X = Kh(T) ? T : hc(O.location, T, K);
    y = v() + 1;
    let Q = Vh(X, y), $ = O.createHref(X.unstable_mask || X);
    try {
      h.pushState(Q, "", $);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError")
        throw F;
      c.location.assign($);
    }
    f && b && b({ action: p, location: O.location, delta: 1 });
  }
  function q(T, K) {
    p = "REPLACE";
    let X = Kh(T) ? T : hc(O.location, T, K);
    y = v();
    let Q = Vh(X, y), $ = O.createHref(X.unstable_mask || X);
    h.replaceState(Q, "", $), f && b && b({ action: p, location: O.location, delta: 0 });
  }
  function N(T) {
    return Fp(T);
  }
  let O = {
    get action() {
      return p;
    },
    get location() {
      return l(c, h);
    },
    listen(T) {
      if (b)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(Yh, S), b = T, () => {
        c.removeEventListener(Yh, S), b = null;
      };
    },
    createHref(T) {
      return r(c, T);
    },
    createURL: N,
    encodeLocation(T) {
      let K = N(T);
      return {
        pathname: K.pathname,
        search: K.search,
        hash: K.hash
      };
    },
    push: j,
    replace: q,
    go(T) {
      return h.go(T);
    }
  };
  return O;
}
function Fp(l, r = !1) {
  let o = "http://localhost";
  typeof window < "u" && (o = window.location.origin !== "null" ? window.location.origin : window.location.href), $e(o, "No window.location.(origin|href) available to create URL");
  let u = typeof l == "string" ? l : ki(l);
  return u = u.replace(/ $/, "%20"), !r && u.startsWith("//") && (u = o + u), new URL(u, o);
}
function j0(l, r, o = "/") {
  return $p(l, r, o, !1);
}
function $p(l, r, o, u) {
  let c = typeof r == "string" ? Ul(r) : r, f = Gn(c.pathname || "/", o);
  if (f == null)
    return null;
  let h = D0(l);
  Ip(h);
  let p = null;
  for (let b = 0; p == null && b < h.length; ++b) {
    let y = s1(f);
    p = i1(
      h[b],
      y,
      u
    );
  }
  return p;
}
function D0(l, r = [], o = [], u = "", c = !1) {
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
      $e(
        v.relativePath.startsWith(u),
        `Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), v.relativePath = v.relativePath.slice(u.length);
    }
    let S = pn([u, v.relativePath]), j = o.concat(v);
    h.children && h.children.length > 0 && ($e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
    ), D0(
      h.children,
      r,
      j,
      S,
      b
    )), !(h.path == null && !h.index) && r.push({
      path: S,
      score: a1(S, h.index),
      routesMeta: j
    });
  };
  return l.forEach((h, p) => {
    if (h.path === "" || !h.path?.includes("?"))
      f(h, p);
    else
      for (let b of U0(h.path))
        f(h, p, !0, b);
  }), r;
}
function U0(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [o, ...u] = r, c = o.endsWith("?"), f = o.replace(/\?$/, "");
  if (u.length === 0)
    return c ? [f, ""] : [f];
  let h = U0(u.join("/")), p = [];
  return p.push(
    ...h.map(
      (b) => b === "" ? f : [f, b].join("/")
    )
  ), c && p.push(...h), p.map(
    (b) => l.startsWith("/") && b === "" ? "/" : b
  );
}
function Ip(l) {
  l.sort(
    (r, o) => r.score !== o.score ? o.score - r.score : l1(
      r.routesMeta.map((u) => u.childrenIndex),
      o.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var Jp = /^:[\w-]+$/, Wp = 3, Pp = 2, e1 = 1, t1 = 10, n1 = -2, Xh = (l) => l === "*";
function a1(l, r) {
  let o = l.split("/"), u = o.length;
  return o.some(Xh) && (u += n1), r && (u += Pp), o.filter((c) => !Xh(c)).reduce(
    (c, f) => c + (Jp.test(f) ? Wp : f === "" ? e1 : t1),
    u
  );
}
function l1(l, r) {
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
function i1(l, r, o = !1) {
  let { routesMeta: u } = l, c = {}, f = "/", h = [];
  for (let p = 0; p < u.length; ++p) {
    let b = u[p], y = p === u.length - 1, v = f === "/" ? r : r.slice(f.length) || "/", S = xs(
      { path: b.relativePath, caseSensitive: b.caseSensitive, end: y },
      v
    ), j = b.route;
    if (!S && y && o && !u[u.length - 1].route.index && (S = xs(
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
      pathname: pn([f, S.pathname]),
      pathnameBase: d1(
        pn([f, S.pathnameBase])
      ),
      route: j
    }), S.pathnameBase !== "/" && (f = pn([f, S.pathnameBase]));
  }
  return h;
}
function xs(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [o, u] = r1(
    l.path,
    l.caseSensitive,
    l.end
  ), c = r.match(o);
  if (!c) return null;
  let f = c[0], h = f.replace(/(.)\/+$/, "$1"), p = c.slice(1);
  return {
    params: u.reduce(
      (y, { paramName: v, isOptional: S }, j) => {
        if (v === "*") {
          let N = p[j] || "";
          h = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
        }
        const q = p[j];
        return S && !q ? y[v] = void 0 : y[v] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: h,
    pattern: l
  };
}
function r1(l, r = !1, o = !0) {
  vn(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let u = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, p, b, y, v) => {
      if (u.push({ paramName: p, isOptional: b != null }), b) {
        let S = v.charAt(y + h.length);
        return S && S !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (u.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), u];
}
function s1(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return vn(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function Gn(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length, u = l.charAt(o);
  return u && u !== "/" ? null : l.slice(o) || "/";
}
var o1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function u1(l, r = "/") {
  let {
    pathname: o,
    search: u = "",
    hash: c = ""
  } = typeof l == "string" ? Ul(l) : l, f;
  return o ? (o = o.replace(/\/\/+/g, "/"), o.startsWith("/") ? f = Qh(o.substring(1), "/") : f = Qh(o, r)) : f = r, {
    pathname: f,
    search: f1(u),
    hash: m1(c)
  };
}
function Qh(l, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c);
  }), o.length > 1 ? o.join("/") : "/";
}
function Wu(l, r, o, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function c1(l) {
  return l.filter(
    (r, o) => o === 0 || r.route.path && r.route.path.length > 0
  );
}
function M0(l) {
  let r = c1(l);
  return r.map(
    (o, u) => u === r.length - 1 ? o.pathname : o.pathnameBase
  );
}
function Rc(l, r, o, u = !1) {
  let c;
  typeof l == "string" ? c = Ul(l) : (c = { ...l }, $e(
    !c.pathname || !c.pathname.includes("?"),
    Wu("?", "pathname", "search", c)
  ), $e(
    !c.pathname || !c.pathname.includes("#"),
    Wu("#", "pathname", "hash", c)
  ), $e(
    !c.search || !c.search.includes("#"),
    Wu("#", "search", "hash", c)
  ));
  let f = l === "" || c.pathname === "", h = f ? "/" : c.pathname, p;
  if (h == null)
    p = o;
  else {
    let S = r.length - 1;
    if (!u && h.startsWith("..")) {
      let j = h.split("/");
      for (; j[0] === ".."; )
        j.shift(), S -= 1;
      c.pathname = j.join("/");
    }
    p = S >= 0 ? r[S] : "/";
  }
  let b = u1(c, p), y = h && h !== "/" && h.endsWith("/"), v = (f || h === ".") && o.endsWith("/");
  return !b.pathname.endsWith("/") && (y || v) && (b.pathname += "/"), b;
}
var pn = (l) => l.join("/").replace(/\/\/+/g, "/"), d1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), f1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, m1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, h1 = class {
  constructor(l, r, o, u = !1) {
    this.status = l, this.statusText = r || "", this.internal = u, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
};
function g1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function y1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var L0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function z0(l, r) {
  let o = l;
  if (typeof o != "string" || !o1.test(o))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: o
    };
  let u = o, c = !1;
  if (L0)
    try {
      let f = new URL(window.location.href), h = o.startsWith("//") ? new URL(f.protocol + o) : new URL(o), p = Gn(h.pathname, r);
      h.origin === f.origin && p != null ? o = p + h.search + h.hash : c = !0;
    } catch {
      vn(
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
var H0 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  H0
);
var p1 = [
  "GET",
  ...H0
];
new Set(p1);
var Ml = w.createContext(null);
Ml.displayName = "DataRouter";
var Ns = w.createContext(null);
Ns.displayName = "DataRouterState";
var B0 = w.createContext(!1);
function b1() {
  return w.useContext(B0);
}
var k0 = w.createContext({
  isTransitioning: !1
});
k0.displayName = "ViewTransition";
var v1 = w.createContext(
  /* @__PURE__ */ new Map()
);
v1.displayName = "Fetchers";
var w1 = w.createContext(null);
w1.displayName = "Await";
var an = w.createContext(
  null
);
an.displayName = "Navigation";
var Yi = w.createContext(
  null
);
Yi.displayName = "Location";
var Yn = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Yn.displayName = "Route";
var Tc = w.createContext(null);
Tc.displayName = "RouteError";
var q0 = "REACT_ROUTER_ERROR", E1 = "REDIRECT", S1 = "ROUTE_ERROR_RESPONSE";
function x1(l) {
  if (l.startsWith(`${q0}:${E1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function R1(l) {
  if (l.startsWith(
    `${q0}:${S1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new h1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function T1(l, { relative: r } = {}) {
  $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: u } = w.useContext(an), { hash: c, pathname: f, search: h } = Vi(l, { relative: r }), p = f;
  return o !== "/" && (p = f === "/" ? o : pn([o, f])), u.createHref({ pathname: p, search: h, hash: c });
}
function Ki() {
  return w.useContext(Yi) != null;
}
function Kn() {
  return $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), w.useContext(Yi).location;
}
var G0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Y0(l) {
  w.useContext(an).static || w.useLayoutEffect(l);
}
function N1() {
  let { isDataRoute: l } = w.useContext(Yn);
  return l ? k1() : A1();
}
function A1() {
  $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = w.useContext(Ml), { basename: r, navigator: o } = w.useContext(an), { matches: u } = w.useContext(Yn), { pathname: c } = Kn(), f = JSON.stringify(M0(u)), h = w.useRef(!1);
  return Y0(() => {
    h.current = !0;
  }), w.useCallback(
    (b, y = {}) => {
      if (vn(h.current, G0), !h.current) return;
      if (typeof b == "number") {
        o.go(b);
        return;
      }
      let v = Rc(
        b,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      l == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : pn([r, v.pathname])), (y.replace ? o.replace : o.push)(
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
w.createContext(null);
function Vi(l, { relative: r } = {}) {
  let { matches: o } = w.useContext(Yn), { pathname: u } = Kn(), c = JSON.stringify(M0(o));
  return w.useMemo(
    () => Rc(
      l,
      JSON.parse(c),
      u,
      r === "path"
    ),
    [l, c, u, r]
  );
}
function C1(l, r) {
  return K0(l, r);
}
function K0(l, r, o) {
  $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = w.useContext(an), { matches: c } = w.useContext(Yn), f = c[c.length - 1], h = f ? f.params : {}, p = f ? f.pathname : "/", b = f ? f.pathnameBase : "/", y = f && f.route;
  {
    let T = y && y.path || "";
    X0(
      p,
      !y || T.endsWith("*") || T.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T === "/" ? "*" : `${T}/*`}">.`
    );
  }
  let v = Kn(), S;
  if (r) {
    let T = typeof r == "string" ? Ul(r) : r;
    $e(
      b === "/" || T.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${T.pathname}" was given in the \`location\` prop.`
    ), S = T;
  } else
    S = v;
  let j = S.pathname || "/", q = j;
  if (b !== "/") {
    let T = b.replace(/^\//, "").split("/");
    q = "/" + j.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let N = j0(l, { pathname: q });
  vn(
    y || N != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `
  ), vn(
    N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let O = U1(
    N && N.map(
      (T) => Object.assign({}, T, {
        params: Object.assign({}, h, T.params),
        pathname: pn([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            T.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : T.pathname
        ]),
        pathnameBase: T.pathnameBase === "/" ? b : pn([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            T.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : T.pathnameBase
        ])
      })
    ),
    c,
    o
  );
  return r && O ? /* @__PURE__ */ w.createElement(
    Yi.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          unstable_mask: void 0,
          ...S
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    O
  ) : O;
}
function _1() {
  let l = B1(), r = g1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), o = l instanceof Error ? l.stack : null, u = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: u }, f = { padding: "2px 4px", backgroundColor: u }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), h = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ w.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ w.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ w.createElement("h3", { style: { fontStyle: "italic" } }, r), o ? /* @__PURE__ */ w.createElement("pre", { style: c }, o) : null, h);
}
var O1 = /* @__PURE__ */ w.createElement(_1, null), V0 = class extends w.Component {
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
      const o = R1(l.digest);
      o && (l = o);
    }
    let r = l !== void 0 ? /* @__PURE__ */ w.createElement(Yn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ w.createElement(
      Tc.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ w.createElement(j1, { error: l }, r) : r;
  }
};
V0.contextType = B0;
var Pu = /* @__PURE__ */ new WeakMap();
function j1({
  children: l,
  error: r
}) {
  let { basename: o } = w.useContext(an);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let u = x1(r.digest);
    if (u) {
      let c = Pu.get(r);
      if (c) throw c;
      let f = z0(u.location, o);
      if (L0 && !Pu.get(r))
        if (f.isExternal || u.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: u.replace
            })
          );
          throw Pu.set(r, h), h;
        }
      return /* @__PURE__ */ w.createElement(
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
function D1({ routeContext: l, match: r, children: o }) {
  let u = w.useContext(Ml);
  return u && u.static && u.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ w.createElement(Yn.Provider, { value: l }, o);
}
function U1(l, r = [], o) {
  let u = o?.state;
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
  let c = l, f = u?.errors;
  if (f != null) {
    let v = c.findIndex(
      (S) => S.route.id && f?.[S.route.id] !== void 0
    );
    $e(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), c = c.slice(
      0,
      Math.min(c.length, v + 1)
    );
  }
  let h = !1, p = -1;
  if (o && u) {
    h = u.renderFallback;
    for (let v = 0; v < c.length; v++) {
      let S = c[v];
      if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (p = v), S.route.id) {
        let { loaderData: j, errors: q } = u, N = S.route.loader && !j.hasOwnProperty(S.route.id) && (!q || q[S.route.id] === void 0);
        if (S.route.lazy || N) {
          o.isStatic && (h = !0), p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
          break;
        }
      }
    }
  }
  let b = o?.onError, y = u && b ? (v, S) => {
    b(v, {
      location: u.location,
      params: u.matches?.[0]?.params ?? {},
      unstable_pattern: y1(u.matches),
      errorInfo: S
    });
  } : void 0;
  return c.reduceRight(
    (v, S, j) => {
      let q, N = !1, O = null, T = null;
      u && (q = f && S.route.id ? f[S.route.id] : void 0, O = S.route.errorElement || O1, h && (p < 0 && j === 0 ? (X0(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), N = !0, T = null) : p === j && (N = !0, T = S.route.hydrateFallbackElement || null)));
      let K = r.concat(c.slice(0, j + 1)), X = () => {
        let Q;
        return q ? Q = O : N ? Q = T : S.route.Component ? Q = /* @__PURE__ */ w.createElement(S.route.Component, null) : S.route.element ? Q = S.route.element : Q = v, /* @__PURE__ */ w.createElement(
          D1,
          {
            match: S,
            routeContext: {
              outlet: v,
              matches: K,
              isDataRoute: u != null
            },
            children: Q
          }
        );
      };
      return u && (S.route.ErrorBoundary || S.route.errorElement || j === 0) ? /* @__PURE__ */ w.createElement(
        V0,
        {
          location: u.location,
          revalidation: u.revalidation,
          component: O,
          error: q,
          children: X(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
          onError: y
        }
      ) : X();
    },
    null
  );
}
function Nc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function M1(l) {
  let r = w.useContext(Ml);
  return $e(r, Nc(l)), r;
}
function L1(l) {
  let r = w.useContext(Ns);
  return $e(r, Nc(l)), r;
}
function z1(l) {
  let r = w.useContext(Yn);
  return $e(r, Nc(l)), r;
}
function Ac(l) {
  let r = z1(l), o = r.matches[r.matches.length - 1];
  return $e(
    o.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function H1() {
  return Ac(
    "useRouteId"
    /* UseRouteId */
  );
}
function B1() {
  let l = w.useContext(Tc), r = L1(
    "useRouteError"
    /* UseRouteError */
  ), o = Ac(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[o];
}
function k1() {
  let { router: l } = M1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Ac(
    "useNavigate"
    /* UseNavigateStable */
  ), o = w.useRef(!1);
  return Y0(() => {
    o.current = !0;
  }), w.useCallback(
    async (c, f = {}) => {
      vn(o.current, G0), o.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...f }));
    },
    [l, r]
  );
}
var Zh = {};
function X0(l, r, o) {
  !r && !Zh[l] && (Zh[l] = !0, vn(!1, o));
}
w.memo(q1);
function q1({
  routes: l,
  future: r,
  state: o,
  isStatic: u,
  onError: c
}) {
  return K0(l, void 0, { state: o, isStatic: u, onError: c });
}
function Q0(l) {
  $e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function G1({
  basename: l = "/",
  children: r = null,
  location: o,
  navigationType: u = "POP",
  navigator: c,
  static: f = !1,
  unstable_useTransitions: h
}) {
  $e(
    !Ki(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = l.replace(/^\/*/, "/"), b = w.useMemo(
    () => ({
      basename: p,
      navigator: c,
      static: f,
      unstable_useTransitions: h,
      future: {}
    }),
    [p, c, f, h]
  );
  typeof o == "string" && (o = Ul(o));
  let {
    pathname: y = "/",
    search: v = "",
    hash: S = "",
    state: j = null,
    key: q = "default",
    unstable_mask: N
  } = o, O = w.useMemo(() => {
    let T = Gn(y, p);
    return T == null ? null : {
      location: {
        pathname: T,
        search: v,
        hash: S,
        state: j,
        key: q,
        unstable_mask: N
      },
      navigationType: u
    };
  }, [
    p,
    y,
    v,
    S,
    j,
    q,
    u,
    N
  ]);
  return vn(
    O != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`
  ), O == null ? null : /* @__PURE__ */ w.createElement(an.Provider, { value: b }, /* @__PURE__ */ w.createElement(Yi.Provider, { children: r, value: O }));
}
function Y1({
  children: l,
  location: r
}) {
  return C1(gc(l), r);
}
function gc(l, r = []) {
  let o = [];
  return w.Children.forEach(l, (u, c) => {
    if (!w.isValidElement(u))
      return;
    let f = [...r, c];
    if (u.type === w.Fragment) {
      o.push.apply(
        o,
        gc(u.props.children, f)
      );
      return;
    }
    $e(
      u.type === Q0,
      `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), $e(
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
    u.props.children && (h.children = gc(
      u.props.children,
      f
    )), o.push(h);
  }), o;
}
var ys = "get", ps = "application/x-www-form-urlencoded";
function As(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function K1(l) {
  return As(l) && l.tagName.toLowerCase() === "button";
}
function V1(l) {
  return As(l) && l.tagName.toLowerCase() === "form";
}
function X1(l) {
  return As(l) && l.tagName.toLowerCase() === "input";
}
function Q1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Z1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Q1(l);
}
var ms = null;
function F1() {
  if (ms === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ms = !1;
    } catch {
      ms = !0;
    }
  return ms;
}
var $1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ec(l) {
  return l != null && !$1.has(l) ? (vn(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ps}"`
  ), null) : l;
}
function I1(l, r) {
  let o, u, c, f, h;
  if (V1(l)) {
    let p = l.getAttribute("action");
    u = p ? Gn(p, r) : null, o = l.getAttribute("method") || ys, c = ec(l.getAttribute("enctype")) || ps, f = new FormData(l);
  } else if (K1(l) || X1(l) && (l.type === "submit" || l.type === "image")) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = l.getAttribute("formaction") || p.getAttribute("action");
    if (u = b ? Gn(b, r) : null, o = l.getAttribute("formmethod") || p.getAttribute("method") || ys, c = ec(l.getAttribute("formenctype")) || ec(p.getAttribute("enctype")) || ps, f = new FormData(p, l), !F1()) {
      let { name: y, type: v, value: S } = l;
      if (v === "image") {
        let j = y ? `${y}.` : "";
        f.append(`${j}x`, "0"), f.append(`${j}y`, "0");
      } else y && f.append(y, S);
    }
  } else {
    if (As(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = ys, u = null, c = ps, h = l;
  }
  return f && c === "text/plain" && (h = f, f = void 0), { action: u, method: o.toLowerCase(), encType: c, formData: f, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Cc(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function Z0(l, r, o, u) {
  let c = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return o ? c.pathname.endsWith("/") ? c.pathname = `${c.pathname}_.${u}` : c.pathname = `${c.pathname}.${u}` : c.pathname === "/" ? c.pathname = `_root.${u}` : r && Gn(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${u}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${u}`, c;
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
function W1(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function P1(l, r, o) {
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
  return ab(
    u.flat(1).filter(W1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function Fh(l, r, o, u, c, f) {
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
function eb(l, r, { includeHydrateFallback: o } = {}) {
  return tb(
    l.map((u) => {
      let c = r.routes[u.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), o && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function tb(l) {
  return [...new Set(l)];
}
function nb(l) {
  let r = {}, o = Object.keys(l).sort();
  for (let u of o)
    r[u] = l[u];
  return r;
}
function ab(l, r) {
  let o = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((u, c) => {
    let f = JSON.stringify(nb(c));
    return o.has(f) || (o.add(f), u.push({ key: f, link: c })), u;
  }, []);
}
function _c() {
  let l = w.useContext(Ml);
  return Cc(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function lb() {
  let l = w.useContext(Ns);
  return Cc(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Oc = w.createContext(void 0);
Oc.displayName = "FrameworkContext";
function jc() {
  let l = w.useContext(Oc);
  return Cc(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function ib(l, r) {
  let o = w.useContext(Oc), [u, c] = w.useState(!1), [f, h] = w.useState(!1), { onFocus: p, onBlur: b, onMouseEnter: y, onMouseLeave: v, onTouchStart: S } = r, j = w.useRef(null);
  w.useEffect(() => {
    if (l === "render" && h(!0), l === "viewport") {
      let O = (K) => {
        K.forEach((X) => {
          h(X.isIntersecting);
        });
      }, T = new IntersectionObserver(O, { threshold: 0.5 });
      return j.current && T.observe(j.current), () => {
        T.disconnect();
      };
    }
  }, [l]), w.useEffect(() => {
    if (u) {
      let O = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(O);
      };
    }
  }, [u]);
  let q = () => {
    c(!0);
  }, N = () => {
    c(!1), h(!1);
  };
  return o ? l !== "intent" ? [f, j, {}] : [
    f,
    j,
    {
      onFocus: Ui(p, q),
      onBlur: Ui(b, N),
      onMouseEnter: Ui(y, q),
      onMouseLeave: Ui(v, N),
      onTouchStart: Ui(S, q)
    }
  ] : [!1, j, {}];
}
function Ui(l, r) {
  return (o) => {
    l && l(o), o.defaultPrevented || r(o);
  };
}
function rb({ page: l, ...r }) {
  let o = b1(), { router: u } = _c(), c = w.useMemo(
    () => j0(u.routes, l, u.basename),
    [u.routes, l, u.basename]
  );
  return c ? o ? /* @__PURE__ */ w.createElement(ob, { page: l, matches: c, ...r }) : /* @__PURE__ */ w.createElement(ub, { page: l, matches: c, ...r }) : null;
}
function sb(l) {
  let { manifest: r, routeModules: o } = jc(), [u, c] = w.useState([]);
  return w.useEffect(() => {
    let f = !1;
    return P1(l, r, o).then(
      (h) => {
        f || c(h);
      }
    ), () => {
      f = !0;
    };
  }, [l, r, o]), u;
}
function ob({
  page: l,
  matches: r,
  ...o
}) {
  let u = Kn(), { future: c } = jc(), { basename: f } = _c(), h = w.useMemo(() => {
    if (l === u.pathname + u.search + u.hash)
      return [];
    let p = Z0(
      l,
      f,
      c.unstable_trailingSlashAwareDataRequests,
      "rsc"
    ), b = !1, y = [];
    for (let v of r)
      typeof v.route.shouldRevalidate == "function" ? b = !0 : y.push(v.route.id);
    return b && y.length > 0 && p.searchParams.set("_routes", y.join(",")), [p.pathname + p.search];
  }, [
    f,
    c.unstable_trailingSlashAwareDataRequests,
    l,
    u,
    r
  ]);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, h.map((p) => /* @__PURE__ */ w.createElement("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...o })));
}
function ub({
  page: l,
  matches: r,
  ...o
}) {
  let u = Kn(), { future: c, manifest: f, routeModules: h } = jc(), { basename: p } = _c(), { loaderData: b, matches: y } = lb(), v = w.useMemo(
    () => Fh(
      l,
      r,
      y,
      f,
      u,
      "data"
    ),
    [l, r, y, f, u]
  ), S = w.useMemo(
    () => Fh(
      l,
      r,
      y,
      f,
      u,
      "assets"
    ),
    [l, r, y, f, u]
  ), j = w.useMemo(() => {
    if (l === u.pathname + u.search + u.hash)
      return [];
    let O = /* @__PURE__ */ new Set(), T = !1;
    if (r.forEach((X) => {
      let Q = f.routes[X.route.id];
      !Q || !Q.hasLoader || (!v.some(($) => $.route.id === X.route.id) && X.route.id in b && h[X.route.id]?.shouldRevalidate || Q.hasClientLoader ? T = !0 : O.add(X.route.id));
    }), O.size === 0)
      return [];
    let K = Z0(
      l,
      p,
      c.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return T && O.size > 0 && K.searchParams.set(
      "_routes",
      r.filter((X) => O.has(X.route.id)).map((X) => X.route.id).join(",")
    ), [K.pathname + K.search];
  }, [
    p,
    c.unstable_trailingSlashAwareDataRequests,
    b,
    u,
    f,
    v,
    r,
    l,
    h
  ]), q = w.useMemo(
    () => eb(S, f),
    [S, f]
  ), N = sb(S);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, j.map((O) => /* @__PURE__ */ w.createElement("link", { key: O, rel: "prefetch", as: "fetch", href: O, ...o })), q.map((O) => /* @__PURE__ */ w.createElement("link", { key: O, rel: "modulepreload", href: O, ...o })), N.map(({ key: O, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ w.createElement(
      "link",
      {
        key: O,
        nonce: o.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? o.crossOrigin
      }
    )
  )));
}
function cb(...l) {
  return (r) => {
    l.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var db = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  db && (window.__reactRouterVersion = // @ts-expect-error
  "7.14.0");
} catch {
}
function fb({
  basename: l,
  children: r,
  unstable_useTransitions: o,
  window: u
}) {
  let c = w.useRef();
  c.current == null && (c.current = Xp({ window: u, v5Compat: !0 }));
  let f = c.current, [h, p] = w.useState({
    action: f.action,
    location: f.location
  }), b = w.useCallback(
    (y) => {
      o === !1 ? p(y) : w.startTransition(() => p(y));
    },
    [o]
  );
  return w.useLayoutEffect(() => f.listen(b), [f, b]), /* @__PURE__ */ w.createElement(
    G1,
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
var F0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $0 = w.forwardRef(
  function({
    onClick: r,
    discover: o = "render",
    prefetch: u = "none",
    relative: c,
    reloadDocument: f,
    replace: h,
    unstable_mask: p,
    state: b,
    target: y,
    to: v,
    preventScrollReset: S,
    viewTransition: j,
    unstable_defaultShouldRevalidate: q,
    ...N
  }, O) {
    let { basename: T, navigator: K, unstable_useTransitions: X } = w.useContext(an), Q = typeof v == "string" && F0.test(v), $ = z0(v, T);
    v = $.to;
    let F = T1(v, { relative: c }), oe = Kn(), ee = null;
    if (p) {
      let Ae = Rc(
        p,
        [],
        oe.unstable_mask ? oe.unstable_mask.pathname : "/",
        !0
      );
      T !== "/" && (Ae.pathname = Ae.pathname === "/" ? T : pn([T, Ae.pathname])), ee = K.createHref(Ae);
    }
    let [I, ue, be] = ib(
      u,
      N
    ), Ke = yb(v, {
      replace: h,
      unstable_mask: p,
      state: b,
      target: y,
      preventScrollReset: S,
      relative: c,
      viewTransition: j,
      unstable_defaultShouldRevalidate: q,
      unstable_useTransitions: X
    });
    function ye(Ae) {
      r && r(Ae), Ae.defaultPrevented || Ke(Ae);
    }
    let je = !($.isExternal || f), ze = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ w.createElement(
        "a",
        {
          ...N,
          ...be,
          href: (je ? ee : void 0) || $.absoluteURL || F,
          onClick: je ? ye : r,
          ref: cb(O, ue),
          target: y,
          "data-discover": !Q && o === "render" ? "true" : void 0
        }
      )
    );
    return I && !Q ? /* @__PURE__ */ w.createElement(w.Fragment, null, ze, /* @__PURE__ */ w.createElement(rb, { page: F })) : ze;
  }
);
$0.displayName = "Link";
var mb = w.forwardRef(
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
    let S = Vi(h, { relative: y.relative }), j = Kn(), q = w.useContext(Ns), { navigator: N, basename: O } = w.useContext(an), T = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Eb(S) && p === !0, K = N.encodeLocation ? N.encodeLocation(S).pathname : S.pathname, X = j.pathname, Q = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    o || (X = X.toLowerCase(), Q = Q ? Q.toLowerCase() : null, K = K.toLowerCase()), Q && O && (Q = Gn(Q, O) || Q);
    const $ = K !== "/" && K.endsWith("/") ? K.length - 1 : K.length;
    let F = X === K || !c && X.startsWith(K) && X.charAt($) === "/", oe = Q != null && (Q === K || !c && Q.startsWith(K) && Q.charAt(K.length) === "/"), ee = {
      isActive: F,
      isPending: oe,
      isTransitioning: T
    }, I = F ? r : void 0, ue;
    typeof u == "function" ? ue = u(ee) : ue = [
      u,
      F ? "active" : null,
      oe ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let be = typeof f == "function" ? f(ee) : f;
    return /* @__PURE__ */ w.createElement(
      $0,
      {
        ...y,
        "aria-current": I,
        className: ue,
        ref: v,
        style: be,
        to: h,
        viewTransition: p
      },
      typeof b == "function" ? b(ee) : b
    );
  }
);
mb.displayName = "NavLink";
var hb = w.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: o,
    reloadDocument: u,
    replace: c,
    state: f,
    method: h = ys,
    action: p,
    onSubmit: b,
    relative: y,
    preventScrollReset: v,
    viewTransition: S,
    unstable_defaultShouldRevalidate: j,
    ...q
  }, N) => {
    let { unstable_useTransitions: O } = w.useContext(an), T = vb(), K = wb(p, { relative: y }), X = h.toLowerCase() === "get" ? "get" : "post", Q = typeof p == "string" && F0.test(p), $ = (F) => {
      if (b && b(F), F.defaultPrevented) return;
      F.preventDefault();
      let oe = F.nativeEvent.submitter, ee = oe?.getAttribute("formmethod") || h, I = () => T(oe || F.currentTarget, {
        fetcherKey: r,
        method: ee,
        navigate: o,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: v,
        viewTransition: S,
        unstable_defaultShouldRevalidate: j
      });
      O && o !== !1 ? w.startTransition(() => I()) : I();
    };
    return /* @__PURE__ */ w.createElement(
      "form",
      {
        ref: N,
        method: X,
        action: K,
        onSubmit: u ? b : $,
        ...q,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
hb.displayName = "Form";
function gb(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function I0(l) {
  let r = w.useContext(Ml);
  return $e(r, gb(l)), r;
}
function yb(l, {
  target: r,
  replace: o,
  unstable_mask: u,
  state: c,
  preventScrollReset: f,
  relative: h,
  viewTransition: p,
  unstable_defaultShouldRevalidate: b,
  unstable_useTransitions: y
} = {}) {
  let v = N1(), S = Kn(), j = Vi(l, { relative: h });
  return w.useCallback(
    (q) => {
      if (Z1(q, r)) {
        q.preventDefault();
        let N = o !== void 0 ? o : ki(S) === ki(j), O = () => v(l, {
          replace: N,
          unstable_mask: u,
          state: c,
          preventScrollReset: f,
          relative: h,
          viewTransition: p,
          unstable_defaultShouldRevalidate: b
        });
        y ? w.startTransition(() => O()) : O();
      }
    },
    [
      S,
      v,
      j,
      o,
      u,
      c,
      r,
      l,
      f,
      h,
      p,
      b,
      y
    ]
  );
}
var pb = 0, bb = () => `__${String(++pb)}__`;
function vb() {
  let { router: l } = I0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = w.useContext(an), o = H1(), u = l.fetch, c = l.navigate;
  return w.useCallback(
    async (f, h = {}) => {
      let { action: p, method: b, encType: y, formData: v, body: S } = I1(
        f,
        r
      );
      if (h.navigate === !1) {
        let j = h.fetcherKey || bb();
        await u(j, o, h.action || p, {
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
function wb(l, { relative: r } = {}) {
  let { basename: o } = w.useContext(an), u = w.useContext(Yn);
  $e(u, "useFormAction must be used inside a RouteContext");
  let [c] = u.matches.slice(-1), f = { ...Vi(l || ".", { relative: r }) }, h = Kn();
  if (l == null) {
    f.search = h.search;
    let p = new URLSearchParams(f.search), b = p.getAll("index");
    if (b.some((v) => v === "")) {
      p.delete("index"), b.filter((S) => S).forEach((S) => p.append("index", S));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (f.pathname = f.pathname === "/" ? o : pn([o, f.pathname])), ki(f);
}
function Eb(l, { relative: r } = {}) {
  let o = w.useContext(k0);
  $e(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = I0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = Vi(l, { relative: r });
  if (!o.isTransitioning)
    return !1;
  let f = Gn(o.currentLocation.pathname, u) || o.currentLocation.pathname, h = Gn(o.nextLocation.pathname, u) || o.nextLocation.pathname;
  return xs(c.pathname, h) != null || xs(c.pathname, f) != null;
}
var tc = { exports: {} }, pt = {};
var $h;
function Sb() {
  if ($h) return pt;
  $h = 1;
  var l = xc();
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
  return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, pt.createPortal = function(b, y) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return f(b, y, null, v);
  }, pt.flushSync = function(b) {
    var y = h.T, v = u.p;
    try {
      if (h.T = null, u.p = 2, b) return b();
    } finally {
      h.T = y, u.p = v, u.d.f();
    }
  }, pt.preconnect = function(b, y) {
    typeof b == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, u.d.C(b, y));
  }, pt.prefetchDNS = function(b) {
    typeof b == "string" && u.d.D(b);
  }, pt.preinit = function(b, y) {
    if (typeof b == "string" && y && typeof y.as == "string") {
      var v = y.as, S = p(v, y.crossOrigin), j = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      v === "style" ? u.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: S,
          integrity: j,
          fetchPriority: q
        }
      ) : v === "script" && u.d.X(b, {
        crossOrigin: S,
        integrity: j,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, pt.preinitModule = function(b, y) {
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
  }, pt.preload = function(b, y) {
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
  }, pt.preloadModule = function(b, y) {
    if (typeof b == "string")
      if (y) {
        var v = p(y.as, y.crossOrigin);
        u.d.m(b, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: v,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else u.d.m(b);
  }, pt.requestFormReset = function(b) {
    u.d.r(b);
  }, pt.unstable_batchedUpdates = function(b, y) {
    return b(y);
  }, pt.useFormState = function(b, y, v) {
    return h.H.useFormState(b, y, v);
  }, pt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, pt.version = "19.2.3", pt;
}
var Ih;
function xb() {
  if (Ih) return tc.exports;
  Ih = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), tc.exports = Sb(), tc.exports;
}
var nc = { exports: {} }, Mi = {}, ac = { exports: {} }, lc = {};
var Jh;
function Rb() {
  return Jh || (Jh = 1, (function(l) {
    function r(L, z) {
      var Y = L.length;
      L.push(z);
      e: for (; 0 < Y; ) {
        var fe = Y - 1 >>> 1, Ne = L[fe];
        if (0 < c(Ne, z))
          L[fe] = z, L[Y] = Ne, Y = fe;
        else break e;
      }
    }
    function o(L) {
      return L.length === 0 ? null : L[0];
    }
    function u(L) {
      if (L.length === 0) return null;
      var z = L[0], Y = L.pop();
      if (Y !== z) {
        L[0] = Y;
        e: for (var fe = 0, Ne = L.length, Re = Ne >>> 1; fe < Re; ) {
          var x = 2 * (fe + 1) - 1, B = L[x], V = x + 1, Z = L[V];
          if (0 > c(B, Y))
            V < Ne && 0 > c(Z, B) ? (L[fe] = Z, L[V] = Y, fe = V) : (L[fe] = B, L[x] = Y, fe = x);
          else if (V < Ne && 0 > c(Z, Y))
            L[fe] = Z, L[V] = Y, fe = V;
          else break e;
        }
      }
      return z;
    }
    function c(L, z) {
      var Y = L.sortIndex - z.sortIndex;
      return Y !== 0 ? Y : L.id - z.id;
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
    var b = [], y = [], v = 1, S = null, j = 3, q = !1, N = !1, O = !1, T = !1, K = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function $(L) {
      for (var z = o(y); z !== null; ) {
        if (z.callback === null) u(y);
        else if (z.startTime <= L)
          u(y), z.sortIndex = z.expirationTime, r(b, z);
        else break;
        z = o(y);
      }
    }
    function F(L) {
      if (O = !1, $(L), !N)
        if (o(b) !== null)
          N = !0, oe || (oe = !0, ye());
        else {
          var z = o(y);
          z !== null && Ae(F, z.startTime - L);
        }
    }
    var oe = !1, ee = -1, I = 5, ue = -1;
    function be() {
      return T ? !0 : !(l.unstable_now() - ue < I);
    }
    function Ke() {
      if (T = !1, oe) {
        var L = l.unstable_now();
        ue = L;
        var z = !0;
        try {
          e: {
            N = !1, O && (O = !1, X(ee), ee = -1), q = !0;
            var Y = j;
            try {
              t: {
                for ($(L), S = o(b); S !== null && !(S.expirationTime > L && be()); ) {
                  var fe = S.callback;
                  if (typeof fe == "function") {
                    S.callback = null, j = S.priorityLevel;
                    var Ne = fe(
                      S.expirationTime <= L
                    );
                    if (L = l.unstable_now(), typeof Ne == "function") {
                      S.callback = Ne, $(L), z = !0;
                      break t;
                    }
                    S === o(b) && u(b), $(L);
                  } else u(b);
                  S = o(b);
                }
                if (S !== null) z = !0;
                else {
                  var Re = o(y);
                  Re !== null && Ae(
                    F,
                    Re.startTime - L
                  ), z = !1;
                }
              }
              break e;
            } finally {
              S = null, j = Y, q = !1;
            }
            z = void 0;
          }
        } finally {
          z ? ye() : oe = !1;
        }
      }
    }
    var ye;
    if (typeof Q == "function")
      ye = function() {
        Q(Ke);
      };
    else if (typeof MessageChannel < "u") {
      var je = new MessageChannel(), ze = je.port2;
      je.port1.onmessage = Ke, ye = function() {
        ze.postMessage(null);
      };
    } else
      ye = function() {
        K(Ke, 0);
      };
    function Ae(L, z) {
      ee = K(function() {
        L(l.unstable_now());
      }, z);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, l.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < L ? Math.floor(1e3 / L) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, l.unstable_next = function(L) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = j;
      }
      var Y = j;
      j = z;
      try {
        return L();
      } finally {
        j = Y;
      }
    }, l.unstable_requestPaint = function() {
      T = !0;
    }, l.unstable_runWithPriority = function(L, z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var Y = j;
      j = L;
      try {
        return z();
      } finally {
        j = Y;
      }
    }, l.unstable_scheduleCallback = function(L, z, Y) {
      var fe = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? fe + Y : fe) : Y = fe, L) {
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
      return Ne = Y + Ne, L = {
        id: v++,
        callback: z,
        priorityLevel: L,
        startTime: Y,
        expirationTime: Ne,
        sortIndex: -1
      }, Y > fe ? (L.sortIndex = Y, r(y, L), o(b) === null && L === o(y) && (O ? (X(ee), ee = -1) : O = !0, Ae(F, Y - fe))) : (L.sortIndex = Ne, r(b, L), N || q || (N = !0, oe || (oe = !0, ye()))), L;
    }, l.unstable_shouldYield = be, l.unstable_wrapCallback = function(L) {
      var z = j;
      return function() {
        var Y = j;
        j = z;
        try {
          return L.apply(this, arguments);
        } finally {
          j = Y;
        }
      };
    };
  })(lc)), lc;
}
var Wh;
function Tb() {
  return Wh || (Wh = 1, ac.exports = Rb()), ac.exports;
}
var Ph;
function Nb() {
  if (Ph) return Mi;
  Ph = 1;
  var l = {};
  var r = Tb(), o = xc(), u = xb();
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
  var j = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), N = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), ee = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), be = /* @__PURE__ */ Symbol.for("react.activity"), Ke = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ye = Symbol.iterator;
  function je(e) {
    return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ae(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ze ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case X:
        return "Profiler";
      case K:
        return "StrictMode";
      case oe:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case be:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case O:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case I:
          return t = e.displayName || null, t !== null ? t : Ae(e.type) || "Memo";
        case ue:
          t = e._payload, e = e._init;
          try {
            return Ae(e(t));
          } catch {
          }
      }
    return null;
  }
  var L = Array.isArray, z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
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
  function V(e, t) {
    Re++, Ne[Re] = e.current, e.current = t;
  }
  var Z = x(null), me = x(null), ie = x(null), pe = x(null);
  function De(e, t) {
    switch (V(ie, t), V(me, e), V(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? sh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = sh(t), e = oh(t, e);
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
    B(Z), V(Z, e);
  }
  function P() {
    B(Z), B(me), B(ie);
  }
  function dn(e) {
    e.memoizedState !== null && V(pe, e);
    var t = Z.current, n = oh(t, e.type);
    t !== n && (V(me, e), V(Z, n));
  }
  function Yt(e) {
    me.current === e && (B(Z), B(me)), pe.current === e && (B(pe), Ci._currentValue = fe);
  }
  var En, Et;
  function Kt(e) {
    if (En === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        En = t && t[1] || "", Et = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + En + e + Et;
  }
  var fn = !1;
  function Vn(e, t) {
    if (!e || fn) return "";
    fn = !0;
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
                } catch (M) {
                  var D = M;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (M) {
                  D = M;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                D = M;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (M) {
            if (M && D && typeof M.stack == "string")
              return [M.stack, D.stack];
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
                  var H = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      fn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Kt(n) : "";
  }
  function Ka(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Kt(e.type);
      case 16:
        return Kt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Kt("Suspense Fallback") : Kt("Suspense");
      case 19:
        return Kt("SuspenseList");
      case 0:
      case 15:
        return Vn(e.type, !1);
      case 11:
        return Vn(e.type.render, !1);
      case 1:
        return Vn(e.type, !0);
      case 31:
        return Kt("Activity");
      default:
        return "";
    }
  }
  function Ea(e) {
    try {
      var t = "", n = null;
      do
        t += Ka(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var re = Object.prototype.hasOwnProperty, ot = r.unstable_scheduleCallback, nt = r.unstable_cancelCallback, Xn = r.unstable_shouldYield, Qn = r.unstable_requestPaint, ut = r.unstable_now, zs = r.unstable_getCurrentPriorityLevel, Ii = r.unstable_ImmediatePriority, kl = r.unstable_UserBlockingPriority, ne = r.unstable_NormalPriority, Ee = r.unstable_LowPriority, ln = r.unstable_IdlePriority, qc = r.log, xg = r.unstable_setDisableYieldValue, ql = null, Dt = null;
  function Zn(e) {
    if (typeof qc == "function" && xg(e), Dt && typeof Dt.setStrictMode == "function")
      try {
        Dt.setStrictMode(ql, e);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : Ng, Rg = Math.log, Tg = Math.LN2;
  function Ng(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Rg(e) / Tg | 0) | 0;
  }
  var Ji = 256, Wi = 262144, Pi = 4194304;
  function Sa(e) {
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
  function er(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, s = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return g !== 0 ? (a = g & ~s, a !== 0 ? i = Sa(a) : (d &= g, d !== 0 ? i = Sa(d) : n || (n = g & ~e, n !== 0 && (i = Sa(n))))) : (g = a & ~s, g !== 0 ? i = Sa(g) : d !== 0 ? i = Sa(d) : n || (n = a & ~e, n !== 0 && (i = Sa(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && (s = i & -i, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function Gl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ag(e, t) {
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
  function Gc() {
    var e = Pi;
    return Pi <<= 1, (Pi & 62914560) === 0 && (Pi = 4194304), e;
  }
  function Hs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Cg(e, t, n, a, i, s) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var H = 31 - Ut(n), G = 1 << H;
      g[H] = 0, E[H] = -1;
      var D = _[H];
      if (D !== null)
        for (_[H] = null, H = 0; H < D.length; H++) {
          var M = D[H];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~G;
    }
    a !== 0 && Yc(e, a, 0), s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t));
  }
  function Yc(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Ut(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Kc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Ut(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function Vc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Bs(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Bs(e) {
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
  function ks(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xc() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jh(e.type));
  }
  function Qc(e, t) {
    var n = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = n;
    }
  }
  var Fn = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Fn, St = "__reactProps$" + Fn, Va = "__reactContainer$" + Fn, qs = "__reactEvents$" + Fn, _g = "__reactListeners$" + Fn, Og = "__reactHandles$" + Fn, Zc = "__reactResources$" + Fn, Kl = "__reactMarker$" + Fn;
  function Gs(e) {
    delete e[ft], delete e[St], delete e[qs], delete e[_g], delete e[Og];
  }
  function Xa(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Va] || n[ft]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = gh(e); e !== null; ) {
            if (n = e[ft]) return n;
            e = gh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Qa(e) {
    if (e = e[ft] || e[Va]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Vl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Za(e) {
    var t = e[Zc];
    return t || (t = e[Zc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[Kl] = !0;
  }
  var Fc = /* @__PURE__ */ new Set(), $c = {};
  function xa(e, t) {
    Fa(e, t), Fa(e + "Capture", t);
  }
  function Fa(e, t) {
    for ($c[e] = t, e = 0; e < t.length; e++)
      Fc.add(t[e]);
  }
  var jg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ic = {}, Jc = {};
  function Dg(e) {
    return re.call(Jc, e) ? !0 : re.call(Ic, e) ? !1 : jg.test(e) ? Jc[e] = !0 : (Ic[e] = !0, !1);
  }
  function tr(e, t, n) {
    if (Dg(t))
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
  function nr(e, t, n) {
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
  function Sn(e, t, n, a) {
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
  function Vt(e) {
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
  function Wc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ug(e, t, n) {
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
  function Ys(e) {
    if (!e._valueTracker) {
      var t = Wc(e) ? "checked" : "value";
      e._valueTracker = Ug(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Pc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Wc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ar(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Mg = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(
      Mg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ks(e, t, n, a, i, s, d, g) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Vt(t)) : e.value !== "" + Vt(t) && (e.value = "" + Vt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Vs(e, d, Vt(t)) : n != null ? Vs(e, d, Vt(n)) : a != null && e.removeAttribute("value"), i == null && s != null && (e.defaultChecked = !!s), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Vt(g) : e.removeAttribute("name");
  }
  function ed(e, t, n, a, i, s, d, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        Ys(e);
        return;
      }
      n = n != null ? "" + Vt(n) : "", t = t != null ? "" + Vt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = g ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), Ys(e);
  }
  function Vs(e, t, n) {
    t === "number" && ar(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function $a(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Vt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function td(e, t, n) {
    if (t != null && (t = "" + Vt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Vt(n) : "";
  }
  function nd(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (L(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Vt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Ys(e);
  }
  function Ia(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ad(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Lg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ld(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && ad(e, i, a);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && ad(e, s, t[s]);
  }
  function Xs(e) {
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
  var zg = /* @__PURE__ */ new Map([
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
  ]), Hg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lr(e) {
    return Hg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function xn() {
  }
  var Qs = null;
  function Zs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ja = null, Wa = null;
  function id(e) {
    var t = Qa(e);
    if (t && (e = t.stateNode)) {
      var n = e[St] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ks(
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
              'input[name="' + Xt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[St] || null;
                if (!i) throw Error(c(90));
                Ks(
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
              a = n[t], a.form === e.form && Pc(a);
          }
          break e;
        case "textarea":
          td(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && $a(e, !!n.multiple, t, !1);
      }
    }
  }
  var Fs = !1;
  function rd(e, t, n) {
    if (Fs) return e(t, n);
    Fs = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Fs = !1, (Ja !== null || Wa !== null) && (Xr(), Ja && (t = Ja, e = Wa, Wa = Ja = null, id(t), e)))
        for (t = 0; t < e.length; t++) id(e[t]);
    }
  }
  function Xl(e, t) {
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
  var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $s = !1;
  if (Rn)
    try {
      var Ql = {};
      Object.defineProperty(Ql, "passive", {
        get: function() {
          $s = !0;
        }
      }), window.addEventListener("test", Ql, Ql), window.removeEventListener("test", Ql, Ql);
    } catch {
      $s = !1;
    }
  var $n = null, Is = null, ir = null;
  function sd() {
    if (ir) return ir;
    var e, t = Is, n = t.length, a, i = "value" in $n ? $n.value : $n.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === i[s - a]; a++) ;
    return ir = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function rr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function sr() {
    return !0;
  }
  function od() {
    return !1;
  }
  function xt(e) {
    function t(n, a, i, s, d) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = s, this.target = d, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? sr : od, this.isPropagationStopped = od, this;
    }
    return j(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sr);
      },
      persist: function() {
      },
      isPersistent: sr
    }), t;
  }
  var Ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, or = xt(Ra), Zl = j({}, Ra, { view: 0, detail: 0 }), Bg = xt(Zl), Js, Ws, Fl, ur = j({}, Zl, {
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
    getModifierState: eo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Fl && (Fl && e.type === "mousemove" ? (Js = e.screenX - Fl.screenX, Ws = e.screenY - Fl.screenY) : Ws = Js = 0, Fl = e), Js);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ws;
    }
  }), ud = xt(ur), kg = j({}, ur, { dataTransfer: 0 }), qg = xt(kg), Gg = j({}, Zl, { relatedTarget: 0 }), Ps = xt(Gg), Yg = j({}, Ra, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Kg = xt(Yg), Vg = j({}, Ra, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xg = xt(Vg), Qg = j({}, Ra, { data: 0 }), cd = xt(Qg), Zg = {
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
  }, Fg = {
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
  }, $g = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ig(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $g[e]) ? !!t[e] : !1;
  }
  function eo() {
    return Ig;
  }
  var Jg = j({}, Zl, {
    key: function(e) {
      if (e.key) {
        var t = Zg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eo,
    charCode: function(e) {
      return e.type === "keypress" ? rr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Wg = xt(Jg), Pg = j({}, ur, {
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
  }), dd = xt(Pg), ey = j({}, Zl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eo
  }), ty = xt(ey), ny = j({}, Ra, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ay = xt(ny), ly = j({}, ur, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), iy = xt(ly), ry = j({}, Ra, {
    newState: 0,
    oldState: 0
  }), sy = xt(ry), oy = [9, 13, 27, 32], to = Rn && "CompositionEvent" in window, $l = null;
  Rn && "documentMode" in document && ($l = document.documentMode);
  var uy = Rn && "TextEvent" in window && !$l, fd = Rn && (!to || $l && 8 < $l && 11 >= $l), md = " ", hd = !1;
  function gd(e, t) {
    switch (e) {
      case "keyup":
        return oy.indexOf(t.keyCode) !== -1;
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
  function yd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pa = !1;
  function cy(e, t) {
    switch (e) {
      case "compositionend":
        return yd(t);
      case "keypress":
        return t.which !== 32 ? null : (hd = !0, md);
      case "textInput":
        return e = t.data, e === md && hd ? null : e;
      default:
        return null;
    }
  }
  function dy(e, t) {
    if (Pa)
      return e === "compositionend" || !to && gd(e, t) ? (e = sd(), ir = Is = $n = null, Pa = !1, e) : null;
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
        return fd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fy = {
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
  function pd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fy[e.type] : t === "textarea";
  }
  function bd(e, t, n, a) {
    Ja ? Wa ? Wa.push(a) : Wa = [a] : Ja = a, t = Wr(t, "onChange"), 0 < t.length && (n = new or(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Il = null, Jl = null;
  function my(e) {
    th(e, 0);
  }
  function cr(e) {
    var t = Vl(e);
    if (Pc(t)) return e;
  }
  function vd(e, t) {
    if (e === "change") return t;
  }
  var wd = !1;
  if (Rn) {
    var no;
    if (Rn) {
      var ao = "oninput" in document;
      if (!ao) {
        var Ed = document.createElement("div");
        Ed.setAttribute("oninput", "return;"), ao = typeof Ed.oninput == "function";
      }
      no = ao;
    } else no = !1;
    wd = no && (!document.documentMode || 9 < document.documentMode);
  }
  function Sd() {
    Il && (Il.detachEvent("onpropertychange", xd), Jl = Il = null);
  }
  function xd(e) {
    if (e.propertyName === "value" && cr(Jl)) {
      var t = [];
      bd(
        t,
        Jl,
        e,
        Zs(e)
      ), rd(my, t);
    }
  }
  function hy(e, t, n) {
    e === "focusin" ? (Sd(), Il = t, Jl = n, Il.attachEvent("onpropertychange", xd)) : e === "focusout" && Sd();
  }
  function gy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return cr(Jl);
  }
  function yy(e, t) {
    if (e === "click") return cr(t);
  }
  function py(e, t) {
    if (e === "input" || e === "change")
      return cr(t);
  }
  function by(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : by;
  function Wl(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!re.call(t, i) || !Mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Rd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Td(e, t) {
    var n = Rd(e);
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
      n = Rd(n);
    }
  }
  function Nd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ad(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ar(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ar(e.document);
    }
    return t;
  }
  function lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var vy = Rn && "documentMode" in document && 11 >= document.documentMode, el = null, io = null, Pl = null, ro = !1;
  function Cd(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ro || el == null || el !== ar(a) || (a = el, "selectionStart" in a && lo(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pl && Wl(Pl, a) || (Pl = a, a = Wr(io, "onSelect"), 0 < a.length && (t = new or(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = el)));
  }
  function Ta(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var tl = {
    animationend: Ta("Animation", "AnimationEnd"),
    animationiteration: Ta("Animation", "AnimationIteration"),
    animationstart: Ta("Animation", "AnimationStart"),
    transitionrun: Ta("Transition", "TransitionRun"),
    transitionstart: Ta("Transition", "TransitionStart"),
    transitioncancel: Ta("Transition", "TransitionCancel"),
    transitionend: Ta("Transition", "TransitionEnd")
  }, so = {}, _d = {};
  Rn && (_d = document.createElement("div").style, "AnimationEvent" in window || (delete tl.animationend.animation, delete tl.animationiteration.animation, delete tl.animationstart.animation), "TransitionEvent" in window || delete tl.transitionend.transition);
  function Na(e) {
    if (so[e]) return so[e];
    if (!tl[e]) return e;
    var t = tl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in _d)
        return so[e] = t[n];
    return e;
  }
  var Od = Na("animationend"), jd = Na("animationiteration"), Dd = Na("animationstart"), wy = Na("transitionrun"), Ey = Na("transitionstart"), Sy = Na("transitioncancel"), Ud = Na("transitionend"), Md = /* @__PURE__ */ new Map(), oo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  oo.push("scrollEnd");
  function rn(e, t) {
    Md.set(e, t), xa(t, [e]);
  }
  var dr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Qt = [], nl = 0, uo = 0;
  function fr() {
    for (var e = nl, t = uo = nl = 0; t < e; ) {
      var n = Qt[t];
      Qt[t++] = null;
      var a = Qt[t];
      Qt[t++] = null;
      var i = Qt[t];
      Qt[t++] = null;
      var s = Qt[t];
      if (Qt[t++] = null, a !== null && i !== null) {
        var d = a.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), a.pending = i;
      }
      s !== 0 && Ld(n, i, s);
    }
  }
  function mr(e, t, n, a) {
    Qt[nl++] = e, Qt[nl++] = t, Qt[nl++] = n, Qt[nl++] = a, uo |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function co(e, t, n, a) {
    return mr(e, t, n, a), hr(e);
  }
  function Aa(e, t) {
    return mr(e, null, null, t), hr(e);
  }
  function Ld(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, s = e.return; s !== null; )
      s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (i = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, i && t !== null && (i = 31 - Ut(n), e = s.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), s) : null;
  }
  function hr(e) {
    if (50 < Ei)
      throw Ei = 0, wu = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var al = {};
  function xy(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new xy(e, t, n, a);
  }
  function fo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function zd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function gr(e, t, n, a, i, s) {
    var d = 0;
    if (a = e, typeof e == "function") fo(e) && (d = 1);
    else if (typeof e == "string")
      d = Cp(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case be:
          return e = Lt(31, n, t, i), e.elementType = be, e.lanes = s, e;
        case T:
          return Ca(n.children, i, s, t);
        case K:
          d = 8, i |= 24;
          break;
        case X:
          return e = Lt(12, n, t, i | 2), e.elementType = X, e.lanes = s, e;
        case oe:
          return e = Lt(13, n, t, i), e.elementType = oe, e.lanes = s, e;
        case ee:
          return e = Lt(19, n, t, i), e.elementType = ee, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                d = 10;
                break e;
              case Q:
                d = 9;
                break e;
              case F:
                d = 11;
                break e;
              case I:
                d = 14;
                break e;
              case ue:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Lt(d, n, t, i), t.elementType = e, t.type = a, t.lanes = s, t;
  }
  function Ca(e, t, n, a) {
    return e = Lt(7, e, a, t), e.lanes = n, e;
  }
  function mo(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function Hd(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ho(e, t, n) {
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
  var Bd = /* @__PURE__ */ new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Bd.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ea(t)
      }, Bd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ea(t)
    };
  }
  var ll = [], il = 0, yr = null, ei = 0, Ft = [], $t = 0, In = null, mn = 1, hn = "";
  function Nn(e, t) {
    ll[il++] = ei, ll[il++] = yr, yr = e, ei = t;
  }
  function kd(e, t, n) {
    Ft[$t++] = mn, Ft[$t++] = hn, Ft[$t++] = In, In = e;
    var a = mn;
    e = hn;
    var i = 32 - Ut(a) - 1;
    a &= ~(1 << i), n += 1;
    var s = 32 - Ut(t) + i;
    if (30 < s) {
      var d = i - i % 5;
      s = (a & (1 << d) - 1).toString(32), a >>= d, i -= d, mn = 1 << 32 - Ut(t) + i | n << i | a, hn = s + e;
    } else
      mn = 1 << s | n << i | a, hn = e;
  }
  function go(e) {
    e.return !== null && (Nn(e, 1), kd(e, 1, 0));
  }
  function yo(e) {
    for (; e === yr; )
      yr = ll[--il], ll[il] = null, ei = ll[--il], ll[il] = null;
    for (; e === In; )
      In = Ft[--$t], Ft[$t] = null, hn = Ft[--$t], Ft[$t] = null, mn = Ft[--$t], Ft[$t] = null;
  }
  function qd(e, t) {
    Ft[$t++] = mn, Ft[$t++] = hn, Ft[$t++] = In, mn = t.id, hn = t.overflow, In = e;
  }
  var mt = null, Xe = null, Te = !1, Jn = null, It = !1, po = Error(c(519));
  function Wn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ti(Zt(t, e)), po;
  }
  function Gd(e) {
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
        for (n = 0; n < xi.length; n++)
          we(xi[n], t);
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
        we("invalid", t), ed(
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
        we("invalid", t), nd(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || ih(t.textContent, n) ? (a.popover != null && (we("beforetoggle", t), we("toggle", t)), a.onScroll != null && we("scroll", t), a.onScrollEnd != null && we("scrollend", t), a.onClick != null && (t.onclick = xn), t = !0) : t = !1, t || Wn(e, !0);
  }
  function Yd(e) {
    for (mt = e.return; mt; )
      switch (mt.tag) {
        case 5:
        case 31:
        case 13:
          It = !1;
          return;
        case 27:
        case 3:
          It = !0;
          return;
        default:
          mt = mt.return;
      }
  }
  function rl(e) {
    if (e !== mt) return !1;
    if (!Te) return Yd(e), Te = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Lu(e.type, e.memoizedProps)), n = !n), n && Xe && Wn(e), Yd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Xe = hh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Xe = hh(e);
    } else
      t === 27 ? (t = Xe, fa(e.type) ? (e = qu, qu = null, Xe = e) : Xe = t) : Xe = mt ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function _a() {
    Xe = mt = null, Te = !1;
  }
  function bo() {
    var e = Jn;
    return e !== null && (At === null ? At = e : At.push.apply(
      At,
      e
    ), Jn = null), e;
  }
  function ti(e) {
    Jn === null ? Jn = [e] : Jn.push(e);
  }
  var vo = x(null), Oa = null, An = null;
  function Pn(e, t, n) {
    V(vo, t._currentValue), t._currentValue = n;
  }
  function Cn(e) {
    e._currentValue = vo.current, B(vo);
  }
  function wo(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Eo(e, t, n, a) {
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
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), wo(
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
        d.lanes |= n, s = d.alternate, s !== null && (s.lanes |= n), wo(d, n, e), d = null;
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
  function sl(e, t, n, a) {
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
      } else if (i === pe.current) {
        if (d = i.alternate, d === null) throw Error(c(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Ci) : e = [Ci]);
      }
      i = i.return;
    }
    e !== null && Eo(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function pr(e) {
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
  function ja(e) {
    Oa = e, An = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ht(e) {
    return Kd(Oa, e);
  }
  function br(e, t) {
    return Oa === null && ja(e), Kd(e, t);
  }
  function Kd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, An === null) {
      if (e === null) throw Error(c(308));
      An = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else An = An.next = t;
    return n;
  }
  var Ry = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ty = r.unstable_scheduleCallback, Ny = r.unstable_NormalPriority, at = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function So() {
    return {
      controller: new Ry(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ni(e) {
    e.refCount--, e.refCount === 0 && Ty(Ny, function() {
      e.controller.abort();
    });
  }
  var ai = null, xo = 0, ol = 0, ul = null;
  function Ay(e, t) {
    if (ai === null) {
      var n = ai = [];
      xo = 0, ol = Nu(), ul = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return xo++, t.then(Vd, Vd), t;
  }
  function Vd() {
    if (--xo === 0 && ai !== null) {
      ul !== null && (ul.status = "fulfilled");
      var e = ai;
      ai = null, ol = 0, ul = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cy(e, t) {
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
  var Xd = z.S;
  z.S = function(e, t) {
    _m = ut(), typeof t == "object" && t !== null && typeof t.then == "function" && Ay(e, t), Xd !== null && Xd(e, t);
  };
  var Da = x(null);
  function Ro() {
    var e = Da.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function vr(e, t) {
    t === null ? V(Da, Da.current) : V(Da, t.pool);
  }
  function Qd() {
    var e = Ro();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var cl = Error(c(460)), To = Error(c(474)), wr = Error(c(542)), Er = { then: function() {
  } };
  function Zd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Fd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(xn, xn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Id(e), e;
      default:
        if (typeof t.status == "string") t.then(xn, xn);
        else {
          if (e = Ye, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Id(e), e;
        }
        throw Ma = t, cl;
    }
  }
  function Ua(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ma = n, cl) : n;
    }
  }
  var Ma = null;
  function $d() {
    if (Ma === null) throw Error(c(459));
    var e = Ma;
    return Ma = null, e;
  }
  function Id(e) {
    if (e === cl || e === wr)
      throw Error(c(483));
  }
  var dl = null, li = 0;
  function Sr(e) {
    var t = li;
    return li += 1, dl === null && (dl = []), Fd(dl, e, t);
  }
  function ii(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function xr(e, t) {
    throw t.$$typeof === q ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Jd(e) {
    function t(A, R) {
      if (e) {
        var C = A.deletions;
        C === null ? (A.deletions = [R], A.flags |= 16) : C.push(R);
      }
    }
    function n(A, R) {
      if (!e) return null;
      for (; R !== null; )
        t(A, R), R = R.sibling;
      return null;
    }
    function a(A) {
      for (var R = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? R.set(A.key, A) : R.set(A.index, A), A = A.sibling;
      return R;
    }
    function i(A, R) {
      return A = Tn(A, R), A.index = 0, A.sibling = null, A;
    }
    function s(A, R, C) {
      return A.index = C, e ? (C = A.alternate, C !== null ? (C = C.index, C < R ? (A.flags |= 67108866, R) : C) : (A.flags |= 67108866, R)) : (A.flags |= 1048576, R);
    }
    function d(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function g(A, R, C, k) {
      return R === null || R.tag !== 6 ? (R = mo(C, A.mode, k), R.return = A, R) : (R = i(R, C), R.return = A, R);
    }
    function E(A, R, C, k) {
      var te = C.type;
      return te === T ? H(
        A,
        R,
        C.props.children,
        k,
        C.key
      ) : R !== null && (R.elementType === te || typeof te == "object" && te !== null && te.$$typeof === ue && Ua(te) === R.type) ? (R = i(R, C.props), ii(R, C), R.return = A, R) : (R = gr(
        C.type,
        C.key,
        C.props,
        null,
        A.mode,
        k
      ), ii(R, C), R.return = A, R);
    }
    function _(A, R, C, k) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== C.containerInfo || R.stateNode.implementation !== C.implementation ? (R = ho(C, A.mode, k), R.return = A, R) : (R = i(R, C.children || []), R.return = A, R);
    }
    function H(A, R, C, k, te) {
      return R === null || R.tag !== 7 ? (R = Ca(
        C,
        A.mode,
        k,
        te
      ), R.return = A, R) : (R = i(R, C), R.return = A, R);
    }
    function G(A, R, C) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = mo(
          "" + R,
          A.mode,
          C
        ), R.return = A, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case N:
            return C = gr(
              R.type,
              R.key,
              R.props,
              null,
              A.mode,
              C
            ), ii(C, R), C.return = A, C;
          case O:
            return R = ho(
              R,
              A.mode,
              C
            ), R.return = A, R;
          case ue:
            return R = Ua(R), G(A, R, C);
        }
        if (L(R) || je(R))
          return R = Ca(
            R,
            A.mode,
            C,
            null
          ), R.return = A, R;
        if (typeof R.then == "function")
          return G(A, Sr(R), C);
        if (R.$$typeof === $)
          return G(
            A,
            br(A, R),
            C
          );
        xr(A, R);
      }
      return null;
    }
    function D(A, R, C, k) {
      var te = R !== null ? R.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return te !== null ? null : g(A, R, "" + C, k);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case N:
            return C.key === te ? E(A, R, C, k) : null;
          case O:
            return C.key === te ? _(A, R, C, k) : null;
          case ue:
            return C = Ua(C), D(A, R, C, k);
        }
        if (L(C) || je(C))
          return te !== null ? null : H(A, R, C, k, null);
        if (typeof C.then == "function")
          return D(
            A,
            R,
            Sr(C),
            k
          );
        if (C.$$typeof === $)
          return D(
            A,
            R,
            br(A, C),
            k
          );
        xr(A, C);
      }
      return null;
    }
    function M(A, R, C, k, te) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return A = A.get(C) || null, g(R, A, "" + k, te);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case N:
            return A = A.get(
              k.key === null ? C : k.key
            ) || null, E(R, A, k, te);
          case O:
            return A = A.get(
              k.key === null ? C : k.key
            ) || null, _(R, A, k, te);
          case ue:
            return k = Ua(k), M(
              A,
              R,
              C,
              k,
              te
            );
        }
        if (L(k) || je(k))
          return A = A.get(C) || null, H(R, A, k, te, null);
        if (typeof k.then == "function")
          return M(
            A,
            R,
            C,
            Sr(k),
            te
          );
        if (k.$$typeof === $)
          return M(
            A,
            R,
            C,
            br(R, k),
            te
          );
        xr(R, k);
      }
      return null;
    }
    function J(A, R, C, k) {
      for (var te = null, _e = null, W = R, ge = R = 0, xe = null; W !== null && ge < C.length; ge++) {
        W.index > ge ? (xe = W, W = null) : xe = W.sibling;
        var Oe = D(
          A,
          W,
          C[ge],
          k
        );
        if (Oe === null) {
          W === null && (W = xe);
          break;
        }
        e && W && Oe.alternate === null && t(A, W), R = s(Oe, R, ge), _e === null ? te = Oe : _e.sibling = Oe, _e = Oe, W = xe;
      }
      if (ge === C.length)
        return n(A, W), Te && Nn(A, ge), te;
      if (W === null) {
        for (; ge < C.length; ge++)
          W = G(A, C[ge], k), W !== null && (R = s(
            W,
            R,
            ge
          ), _e === null ? te = W : _e.sibling = W, _e = W);
        return Te && Nn(A, ge), te;
      }
      for (W = a(W); ge < C.length; ge++)
        xe = M(
          W,
          A,
          ge,
          C[ge],
          k
        ), xe !== null && (e && xe.alternate !== null && W.delete(
          xe.key === null ? ge : xe.key
        ), R = s(
          xe,
          R,
          ge
        ), _e === null ? te = xe : _e.sibling = xe, _e = xe);
      return e && W.forEach(function(pa) {
        return t(A, pa);
      }), Te && Nn(A, ge), te;
    }
    function ae(A, R, C, k) {
      if (C == null) throw Error(c(151));
      for (var te = null, _e = null, W = R, ge = R = 0, xe = null, Oe = C.next(); W !== null && !Oe.done; ge++, Oe = C.next()) {
        W.index > ge ? (xe = W, W = null) : xe = W.sibling;
        var pa = D(A, W, Oe.value, k);
        if (pa === null) {
          W === null && (W = xe);
          break;
        }
        e && W && pa.alternate === null && t(A, W), R = s(pa, R, ge), _e === null ? te = pa : _e.sibling = pa, _e = pa, W = xe;
      }
      if (Oe.done)
        return n(A, W), Te && Nn(A, ge), te;
      if (W === null) {
        for (; !Oe.done; ge++, Oe = C.next())
          Oe = G(A, Oe.value, k), Oe !== null && (R = s(Oe, R, ge), _e === null ? te = Oe : _e.sibling = Oe, _e = Oe);
        return Te && Nn(A, ge), te;
      }
      for (W = a(W); !Oe.done; ge++, Oe = C.next())
        Oe = M(W, A, ge, Oe.value, k), Oe !== null && (e && Oe.alternate !== null && W.delete(Oe.key === null ? ge : Oe.key), R = s(Oe, R, ge), _e === null ? te = Oe : _e.sibling = Oe, _e = Oe);
      return e && W.forEach(function(kp) {
        return t(A, kp);
      }), Te && Nn(A, ge), te;
    }
    function Ge(A, R, C, k) {
      if (typeof C == "object" && C !== null && C.type === T && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case N:
            e: {
              for (var te = C.key; R !== null; ) {
                if (R.key === te) {
                  if (te = C.type, te === T) {
                    if (R.tag === 7) {
                      n(
                        A,
                        R.sibling
                      ), k = i(
                        R,
                        C.props.children
                      ), k.return = A, A = k;
                      break e;
                    }
                  } else if (R.elementType === te || typeof te == "object" && te !== null && te.$$typeof === ue && Ua(te) === R.type) {
                    n(
                      A,
                      R.sibling
                    ), k = i(R, C.props), ii(k, C), k.return = A, A = k;
                    break e;
                  }
                  n(A, R);
                  break;
                } else t(A, R);
                R = R.sibling;
              }
              C.type === T ? (k = Ca(
                C.props.children,
                A.mode,
                k,
                C.key
              ), k.return = A, A = k) : (k = gr(
                C.type,
                C.key,
                C.props,
                null,
                A.mode,
                k
              ), ii(k, C), k.return = A, A = k);
            }
            return d(A);
          case O:
            e: {
              for (te = C.key; R !== null; ) {
                if (R.key === te)
                  if (R.tag === 4 && R.stateNode.containerInfo === C.containerInfo && R.stateNode.implementation === C.implementation) {
                    n(
                      A,
                      R.sibling
                    ), k = i(R, C.children || []), k.return = A, A = k;
                    break e;
                  } else {
                    n(A, R);
                    break;
                  }
                else t(A, R);
                R = R.sibling;
              }
              k = ho(C, A.mode, k), k.return = A, A = k;
            }
            return d(A);
          case ue:
            return C = Ua(C), Ge(
              A,
              R,
              C,
              k
            );
        }
        if (L(C))
          return J(
            A,
            R,
            C,
            k
          );
        if (je(C)) {
          if (te = je(C), typeof te != "function") throw Error(c(150));
          return C = te.call(C), ae(
            A,
            R,
            C,
            k
          );
        }
        if (typeof C.then == "function")
          return Ge(
            A,
            R,
            Sr(C),
            k
          );
        if (C.$$typeof === $)
          return Ge(
            A,
            R,
            br(A, C),
            k
          );
        xr(A, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, R !== null && R.tag === 6 ? (n(A, R.sibling), k = i(R, C), k.return = A, A = k) : (n(A, R), k = mo(C, A.mode, k), k.return = A, A = k), d(A)) : n(A, R);
    }
    return function(A, R, C, k) {
      try {
        li = 0;
        var te = Ge(
          A,
          R,
          C,
          k
        );
        return dl = null, te;
      } catch (W) {
        if (W === cl || W === wr) throw W;
        var _e = Lt(29, W, null, A.mode);
        return _e.lanes = k, _e.return = A, _e;
      }
    };
  }
  var La = Jd(!0), Wd = Jd(!1), ea = !1;
  function No(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ao(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ta(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function na(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ue & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = hr(e), Ld(e, null, n), t;
    }
    return mr(e, a, t, n), hr(e);
  }
  function ri(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Kc(e, n);
    }
  }
  function Co(e, t) {
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
  var _o = !1;
  function si() {
    if (_o) {
      var e = ul;
      if (e !== null) throw e;
    }
  }
  function oi(e, t, n, a) {
    _o = !1;
    var i = e.updateQueue;
    ea = !1;
    var s = i.firstBaseUpdate, d = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var E = g, _ = E.next;
      E.next = null, d === null ? s = _ : d.next = _, d = E;
      var H = e.alternate;
      H !== null && (H = H.updateQueue, g = H.lastBaseUpdate, g !== d && (g === null ? H.firstBaseUpdate = _ : g.next = _, H.lastBaseUpdate = E));
    }
    if (s !== null) {
      var G = i.baseState;
      d = 0, H = _ = E = null, g = s;
      do {
        var D = g.lane & -536870913, M = D !== g.lane;
        if (M ? (Se & D) === D : (a & D) === D) {
          D !== 0 && D === ol && (_o = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ae = g;
            D = t;
            var Ge = n;
            switch (ae.tag) {
              case 1:
                if (J = ae.payload, typeof J == "function") {
                  G = J.call(Ge, G, D);
                  break e;
                }
                G = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ae.payload, D = typeof J == "function" ? J.call(Ge, G, D) : J, D == null) break e;
                G = j({}, G, D);
                break e;
              case 2:
                ea = !0;
            }
          }
          D = g.callback, D !== null && (e.flags |= 64, M && (e.flags |= 8192), M = i.callbacks, M === null ? i.callbacks = [D] : M.push(D));
        } else
          M = {
            lane: D,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, H === null ? (_ = H = M, E = G) : H = H.next = M, d |= D;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null)
            break;
          M = g, g = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      H === null && (E = G), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = H, s === null && (i.shared.lanes = 0), sa |= d, e.lanes = d, e.memoizedState = G;
    }
  }
  function Pd(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function ef(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Pd(n[e], t);
  }
  var fl = x(null), Rr = x(0);
  function tf(e, t) {
    e = Hn, V(Rr, e), V(fl, t), Hn = e | t.baseLanes;
  }
  function Oo() {
    V(Rr, Hn), V(fl, fl.current);
  }
  function jo() {
    Hn = Rr.current, B(fl), B(Rr);
  }
  var zt = x(null), Jt = null;
  function aa(e) {
    var t = e.alternate;
    V(Pe, Pe.current & 1), V(zt, e), Jt === null && (t === null || fl.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function Do(e) {
    V(Pe, Pe.current), V(zt, e), Jt === null && (Jt = e);
  }
  function nf(e) {
    e.tag === 22 ? (V(Pe, Pe.current), V(zt, e), Jt === null && (Jt = e)) : la();
  }
  function la() {
    V(Pe, Pe.current), V(zt, zt.current);
  }
  function Ht(e) {
    B(zt), Jt === e && (Jt = null), B(Pe);
  }
  var Pe = x(0);
  function Tr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Bu(n) || ku(n)))
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
  var _n = 0, he = null, ke = null, lt = null, Nr = !1, ml = !1, za = !1, Ar = 0, ui = 0, hl = null, _y = 0;
  function Ie() {
    throw Error(c(321));
  }
  function Uo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Mo(e, t, n, a, i, s) {
    return _n = s, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? qf : $o, za = !1, s = n(a, i), za = !1, ml && (s = lf(
      t,
      n,
      a,
      i
    )), af(e), s;
  }
  function af(e) {
    z.H = fi;
    var t = ke !== null && ke.next !== null;
    if (_n = 0, lt = ke = he = null, Nr = !1, ui = 0, hl = null, t) throw Error(c(300));
    e === null || it || (e = e.dependencies, e !== null && pr(e) && (it = !0));
  }
  function lf(e, t, n, a) {
    he = e;
    var i = 0;
    do {
      if (ml && (hl = null), ui = 0, ml = !1, 25 <= i) throw Error(c(301));
      if (i += 1, lt = ke = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      z.H = Gf, s = t(n, a);
    } while (ml);
    return s;
  }
  function Oy() {
    var e = z.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ci(t) : t, e = e.useState()[0], (ke !== null ? ke.memoizedState : null) !== e && (he.flags |= 1024), t;
  }
  function Lo() {
    var e = Ar !== 0;
    return Ar = 0, e;
  }
  function zo(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Ho(e) {
    if (Nr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Nr = !1;
    }
    _n = 0, lt = ke = he = null, ml = !1, ui = Ar = 0, hl = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? he.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function et() {
    if (ke === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = lt === null ? he.memoizedState : lt.next;
    if (t !== null)
      lt = t, ke = e;
    else {
      if (e === null)
        throw he.alternate === null ? Error(c(467)) : Error(c(310));
      ke = e, e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null
      }, lt === null ? he.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function Cr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ci(e) {
    var t = ui;
    return ui += 1, hl === null && (hl = []), e = Fd(hl, e, t), t = he, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? qf : $o), e;
  }
  function _r(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ci(e);
      if (e.$$typeof === $) return ht(e);
    }
    throw Error(c(438, String(e)));
  }
  function Bo(e) {
    var t = null, n = he.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = he.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Cr(), he.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Ke;
    return t.index++, n;
  }
  function On(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Or(e) {
    var t = et();
    return ko(t, ke, e);
  }
  function ko(e, t, n) {
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
      var g = d = null, E = null, _ = t, H = !1;
      do {
        var G = _.lane & -536870913;
        if (G !== _.lane ? (Se & G) === G : (_n & G) === G) {
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
            }), G === ol && (H = !0);
          else if ((_n & D) === D) {
            _ = _.next, D === ol && (H = !0);
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
            }, E === null ? (g = E = G, d = s) : E = E.next = G, he.lanes |= D, sa |= D;
          G = _.action, za && n(s, G), s = _.hasEagerState ? _.eagerState : n(s, G);
        } else
          D = {
            lane: G,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (g = E = D, d = s) : E = E.next = D, he.lanes |= G, sa |= G;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? d = s : E.next = g, !Mt(s, e.memoizedState) && (it = !0, H && (n = ul, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = d, e.baseQueue = E, a.lastRenderedState = s;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function qo(e) {
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
      Mt(s, t.memoizedState) || (it = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, a];
  }
  function rf(e, t, n) {
    var a = he, i = et(), s = Te;
    if (s) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var d = !Mt(
      (ke || i).memoizedState,
      n
    );
    if (d && (i.memoizedState = n, it = !0), i = i.queue, Ko(uf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || d || lt !== null && lt.memoizedState.tag & 1) {
      if (a.flags |= 2048, gl(
        9,
        { destroy: void 0 },
        of.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), Ye === null) throw Error(c(349));
      s || (_n & 127) !== 0 || sf(a, t, n);
    }
    return n;
  }
  function sf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = Cr(), he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function of(e, t, n, a) {
    t.value = n, t.getSnapshot = a, cf(t) && df(e);
  }
  function uf(e, t, n) {
    return n(function() {
      cf(t) && df(e);
    });
  }
  function cf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function df(e) {
    var t = Aa(e, 2);
    t !== null && Ct(t, e, 2);
  }
  function Go(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), za) {
        Zn(!0);
        try {
          n();
        } finally {
          Zn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: On,
      lastRenderedState: e
    }, t;
  }
  function ff(e, t, n, a) {
    return e.baseState = n, ko(
      e,
      ke,
      typeof a == "function" ? a : On
    );
  }
  function jy(e, t, n, a, i) {
    if (Ur(e)) throw Error(c(485));
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
      z.T !== null ? n(!0) : s.isTransition = !1, a(s), n = t.pending, n === null ? (s.next = t.pending = s, mf(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function mf(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var s = z.T, d = {};
      z.T = d;
      try {
        var g = n(i, a), E = z.S;
        E !== null && E(d, g), hf(e, t, g);
      } catch (_) {
        Yo(e, t, _);
      } finally {
        s !== null && d.types !== null && (s.types = d.types), z.T = s;
      }
    } else
      try {
        s = n(i, a), hf(e, t, s);
      } catch (_) {
        Yo(e, t, _);
      }
  }
  function hf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        gf(e, t, a);
      },
      function(a) {
        return Yo(e, t, a);
      }
    ) : gf(e, t, n);
  }
  function gf(e, t, n) {
    t.status = "fulfilled", t.value = n, yf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, mf(e, n)));
  }
  function Yo(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, yf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function yf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function pf(e, t) {
    return t;
  }
  function bf(e, t) {
    if (Te) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var a = he;
          if (Te) {
            if (Xe) {
              t: {
                for (var i = Xe, s = It; i.nodeType !== 8; ) {
                  if (!s) {
                    i = null;
                    break t;
                  }
                  if (i = Wt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                s = i.data, i = s === "F!" || s === "F" ? i : null;
              }
              if (i) {
                Xe = Wt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Wn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = wt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pf,
      lastRenderedState: t
    }, n.queue = a, n = Hf.bind(
      null,
      he,
      a
    ), a.dispatch = n, a = Go(!1), s = Fo.bind(
      null,
      he,
      !1,
      a.queue
    ), a = wt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = jy.bind(
      null,
      he,
      i,
      s,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function vf(e) {
    var t = et();
    return wf(t, ke, e);
  }
  function wf(e, t, n) {
    if (t = ko(
      e,
      t,
      pf
    )[0], e = Or(On)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ci(t);
      } catch (d) {
        throw d === cl ? wr : d;
      }
    else a = t;
    t = et();
    var i = t.queue, s = i.dispatch;
    return n !== t.memoizedState && (he.flags |= 2048, gl(
      9,
      { destroy: void 0 },
      Dy.bind(null, i, n),
      null
    )), [a, s, e];
  }
  function Dy(e, t) {
    e.action = t;
  }
  function Ef(e) {
    var t = et(), n = ke;
    if (n !== null)
      return wf(t, n, e);
    et(), t = t.memoizedState, n = et();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function gl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = he.updateQueue, t === null && (t = Cr(), he.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Sf() {
    return et().memoizedState;
  }
  function jr(e, t, n, a) {
    var i = wt();
    he.flags |= e, i.memoizedState = gl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Dr(e, t, n, a) {
    var i = et();
    a = a === void 0 ? null : a;
    var s = i.memoizedState.inst;
    ke !== null && a !== null && Uo(a, ke.memoizedState.deps) ? i.memoizedState = gl(t, s, n, a) : (he.flags |= e, i.memoizedState = gl(
      1 | t,
      s,
      n,
      a
    ));
  }
  function xf(e, t) {
    jr(8390656, 8, e, t);
  }
  function Ko(e, t) {
    Dr(2048, 8, e, t);
  }
  function Uy(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null)
      t = Cr(), he.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Rf(e) {
    var t = et().memoizedState;
    return Uy({ ref: t, nextImpl: e }), function() {
      if ((Ue & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Tf(e, t) {
    return Dr(4, 2, e, t);
  }
  function Nf(e, t) {
    return Dr(4, 4, e, t);
  }
  function Af(e, t) {
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
  function Cf(e, t, n) {
    n = n != null ? n.concat([e]) : null, Dr(4, 4, Af.bind(null, t, e), n);
  }
  function Vo() {
  }
  function _f(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Uo(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Of(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Uo(t, a[1]))
      return a[0];
    if (a = e(), za) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Xo(e, t, n) {
    return n === void 0 || (_n & 1073741824) !== 0 && (Se & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = jm(), he.lanes |= e, sa |= e, n);
  }
  function jf(e, t, n, a) {
    return Mt(n, t) ? n : fl.current !== null ? (e = Xo(e, n, a), Mt(e, t) || (it = !0), e) : (_n & 42) === 0 || (_n & 1073741824) !== 0 && (Se & 261930) === 0 ? (it = !0, e.memoizedState = n) : (e = jm(), he.lanes |= e, sa |= e, t);
  }
  function Df(e, t, n, a, i) {
    var s = Y.p;
    Y.p = s !== 0 && 8 > s ? s : 8;
    var d = z.T, g = {};
    z.T = g, Fo(e, !1, t, n);
    try {
      var E = i(), _ = z.S;
      if (_ !== null && _(g, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var H = Cy(
          E,
          a
        );
        di(
          e,
          t,
          H,
          qt(e)
        );
      } else
        di(
          e,
          t,
          a,
          qt(e)
        );
    } catch (G) {
      di(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        qt()
      );
    } finally {
      Y.p = s, d !== null && g.types !== null && (d.types = g.types), z.T = d;
    }
  }
  function My() {
  }
  function Qo(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Uf(e).queue;
    Df(
      e,
      i,
      t,
      fe,
      n === null ? My : function() {
        return Mf(e), n(a);
      }
    );
  }
  function Uf(e) {
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
        lastRenderedReducer: On,
        lastRenderedState: fe
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
        lastRenderedReducer: On,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Mf(e) {
    var t = Uf(e);
    t.next === null && (t = e.alternate.memoizedState), di(
      e,
      t.next.queue,
      {},
      qt()
    );
  }
  function Zo() {
    return ht(Ci);
  }
  function Lf() {
    return et().memoizedState;
  }
  function zf() {
    return et().memoizedState;
  }
  function Ly(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = qt();
          e = ta(n);
          var a = na(t, e, n);
          a !== null && (Ct(a, t, n), ri(a, t, n)), t = { cache: So() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function zy(e, t, n) {
    var a = qt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ur(e) ? Bf(t, n) : (n = co(e, t, n, a), n !== null && (Ct(n, e, a), kf(n, t, a)));
  }
  function Hf(e, t, n) {
    var a = qt();
    di(e, t, n, a);
  }
  function di(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ur(e)) Bf(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var d = t.lastRenderedState, g = s(d, n);
          if (i.hasEagerState = !0, i.eagerState = g, Mt(g, d))
            return mr(e, t, i, 0), Ye === null && fr(), !1;
        } catch {
        }
      if (n = co(e, t, i, a), n !== null)
        return Ct(n, e, a), kf(n, t, a), !0;
    }
    return !1;
  }
  function Fo(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Nu(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ur(e)) {
      if (t) throw Error(c(479));
    } else
      t = co(
        e,
        n,
        a,
        2
      ), t !== null && Ct(t, e, 2);
  }
  function Ur(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function Bf(e, t) {
    ml = Nr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function kf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Kc(e, n);
    }
  }
  var fi = {
    readContext: ht,
    use: _r,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useLayoutEffect: Ie,
    useInsertionEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    useHostTransitionStatus: Ie,
    useFormState: Ie,
    useActionState: Ie,
    useOptimistic: Ie,
    useMemoCache: Ie,
    useCacheRefresh: Ie
  };
  fi.useEffectEvent = Ie;
  var qf = {
    readContext: ht,
    use: _r,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ht,
    useEffect: xf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, jr(
        4194308,
        4,
        Af.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return jr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      jr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = wt();
      t = t === void 0 ? null : t;
      var a = e();
      if (za) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = wt();
      if (n !== void 0) {
        var i = n(t);
        if (za) {
          Zn(!0);
          try {
            n(t);
          } finally {
            Zn(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = zy.bind(
        null,
        he,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Go(e);
      var t = e.queue, n = Hf.bind(null, he, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Vo,
    useDeferredValue: function(e, t) {
      var n = wt();
      return Xo(n, e, t);
    },
    useTransition: function() {
      var e = Go(!1);
      return e = Df.bind(
        null,
        he,
        e.queue,
        !0,
        !1
      ), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = he, i = wt();
      if (Te) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Ye === null)
          throw Error(c(349));
        (Se & 127) !== 0 || sf(a, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return i.queue = s, xf(uf.bind(null, a, s, e), [
        e
      ]), a.flags |= 2048, gl(
        9,
        { destroy: void 0 },
        of.bind(
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
      var e = wt(), t = Ye.identifierPrefix;
      if (Te) {
        var n = hn, a = mn;
        n = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = _y++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Zo,
    useFormState: bf,
    useActionState: bf,
    useOptimistic: function(e) {
      var t = wt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Fo.bind(
        null,
        he,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Bo,
    useCacheRefresh: function() {
      return wt().memoizedState = Ly.bind(
        null,
        he
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ue & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, $o = {
    readContext: ht,
    use: _r,
    useCallback: _f,
    useContext: ht,
    useEffect: Ko,
    useImperativeHandle: Cf,
    useInsertionEffect: Tf,
    useLayoutEffect: Nf,
    useMemo: Of,
    useReducer: Or,
    useRef: Sf,
    useState: function() {
      return Or(On);
    },
    useDebugValue: Vo,
    useDeferredValue: function(e, t) {
      var n = et();
      return jf(
        n,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Or(On)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : ci(e),
        t
      ];
    },
    useSyncExternalStore: rf,
    useId: Lf,
    useHostTransitionStatus: Zo,
    useFormState: vf,
    useActionState: vf,
    useOptimistic: function(e, t) {
      var n = et();
      return ff(n, ke, e, t);
    },
    useMemoCache: Bo,
    useCacheRefresh: zf
  };
  $o.useEffectEvent = Rf;
  var Gf = {
    readContext: ht,
    use: _r,
    useCallback: _f,
    useContext: ht,
    useEffect: Ko,
    useImperativeHandle: Cf,
    useInsertionEffect: Tf,
    useLayoutEffect: Nf,
    useMemo: Of,
    useReducer: qo,
    useRef: Sf,
    useState: function() {
      return qo(On);
    },
    useDebugValue: Vo,
    useDeferredValue: function(e, t) {
      var n = et();
      return ke === null ? Xo(n, e, t) : jf(
        n,
        ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qo(On)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : ci(e),
        t
      ];
    },
    useSyncExternalStore: rf,
    useId: Lf,
    useHostTransitionStatus: Zo,
    useFormState: Ef,
    useActionState: Ef,
    useOptimistic: function(e, t) {
      var n = et();
      return ke !== null ? ff(n, ke, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Bo,
    useCacheRefresh: zf
  };
  Gf.useEffectEvent = Rf;
  function Io(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : j({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Jo = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = ta(a);
      i.payload = t, n != null && (i.callback = n), t = na(e, i, a), t !== null && (Ct(t, e, a), ri(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = ta(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = na(e, i, a), t !== null && (Ct(t, e, a), ri(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = qt(), a = ta(n);
      a.tag = 2, t != null && (a.callback = t), t = na(e, a, n), t !== null && (Ct(t, e, n), ri(t, e, n));
    }
  };
  function Yf(e, t, n, a, i, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, s, d) : t.prototype && t.prototype.isPureReactComponent ? !Wl(n, a) || !Wl(i, s) : !0;
  }
  function Kf(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
  }
  function Ha(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = j({}, n));
      for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function Vf(e) {
    dr(e);
  }
  function Xf(e) {
    console.error(e);
  }
  function Qf(e) {
    dr(e);
  }
  function Mr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Zf(e, t, n) {
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
  function Wo(e, t, n) {
    return n = ta(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Mr(e, t);
    }, n;
  }
  function Ff(e) {
    return e = ta(e), e.tag = 3, e;
  }
  function $f(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = a.value;
      e.payload = function() {
        return i(s);
      }, e.callback = function() {
        Zf(t, n, a);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      Zf(t, n, a), typeof i != "function" && (oa === null ? oa = /* @__PURE__ */ new Set([this]) : oa.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Hy(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && sl(
        t,
        n,
        i,
        !0
      ), n = zt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Jt === null ? Qr() : n.alternate === null && Je === 0 && (Je = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === Er ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), xu(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === Er ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), xu(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return xu(e, a, i), Qr(), !1;
    }
    if (Te)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== po && (e = Error(c(422), { cause: a }), ti(Zt(e, n)))) : (a !== po && (t = Error(c(423), {
        cause: a
      }), ti(
        Zt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Zt(a, n), i = Wo(
        e.stateNode,
        a,
        i
      ), Co(e, i), Je !== 4 && (Je = 2)), !1;
    var s = Error(c(520), { cause: a });
    if (s = Zt(s, n), wi === null ? wi = [s] : wi.push(s), Je !== 4 && (Je = 2), t === null) return !0;
    a = Zt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Wo(n.stateNode, a, e), Co(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (oa === null || !oa.has(s))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Ff(i), $f(
              i,
              e,
              n,
              a
            ), Co(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Po = Error(c(461)), it = !1;
  function gt(e, t, n, a) {
    t.child = e === null ? Wd(t, null, n, a) : La(
      t,
      e.child,
      n,
      a
    );
  }
  function If(e, t, n, a, i) {
    n = n.render;
    var s = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var g in a)
        g !== "ref" && (d[g] = a[g]);
    } else d = a;
    return ja(t), a = Mo(
      e,
      t,
      n,
      d,
      s,
      i
    ), g = Lo(), e !== null && !it ? (zo(e, t, i), jn(e, t, i)) : (Te && g && go(t), t.flags |= 1, gt(e, t, a, i), t.child);
  }
  function Jf(e, t, n, a, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !fo(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, Wf(
        e,
        t,
        s,
        a,
        i
      )) : (e = gr(
        n.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, !su(e, i)) {
      var d = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Wl, n(d, a) && e.ref === t.ref)
        return jn(e, t, i);
    }
    return t.flags |= 1, e = Tn(s, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Wf(e, t, n, a, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Wl(s, a) && e.ref === t.ref)
        if (it = !1, t.pendingProps = a = s, su(e, i))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, jn(e, t, i);
    }
    return eu(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Pf(e, t, n, a) {
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
        return em(
          e,
          t,
          s,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && vr(
          t,
          s !== null ? s.cachePool : null
        ), s !== null ? tf(t, s) : Oo(), nf(t);
      else
        return a = t.lanes = 536870912, em(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          a
        );
    } else
      s !== null ? (vr(t, s.cachePool), tf(t, s), la(), t.memoizedState = null) : (e !== null && vr(t, null), Oo(), la());
    return gt(e, t, i, n), t.child;
  }
  function mi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function em(e, t, n, a, i) {
    var s = Ro();
    return s = s === null ? null : { parent: at._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && vr(t, null), Oo(), nf(t), e !== null && sl(e, t, a, !0), t.childLanes = i, null;
  }
  function Lr(e, t) {
    return t = Hr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function tm(e, t, n) {
    return La(t, e.child, null, n), e = Lr(t, t.pendingProps), e.flags |= 2, Ht(t), t.memoizedState = null, e;
  }
  function By(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Te) {
        if (a.mode === "hidden")
          return e = Lr(t, a), t.lanes = 536870912, mi(null, e);
        if (Do(t), (e = Xe) ? (e = mh(
          e,
          It
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: In !== null ? { id: mn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Hd(e), n.return = t, t.child = n, mt = t, Xe = null)) : e = null, e === null) throw Wn(t);
        return t.lanes = 536870912, null;
      }
      return Lr(t, a);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if (Do(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = tm(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (it || sl(e, t, n, !1), i = (n & e.childLanes) !== 0, it || i) {
        if (a = Ye, a !== null && (d = Vc(a, n), d !== 0 && d !== s.retryLane))
          throw s.retryLane = d, Aa(e, d), Ct(a, e, d), Po;
        Qr(), t = tm(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Xe = Wt(d.nextSibling), mt = t, Te = !0, Jn = null, It = !1, e !== null && qd(t, e), t = Lr(t, a), t.flags |= 4096;
      return t;
    }
    return e = Tn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function zr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function eu(e, t, n, a, i) {
    return ja(t), n = Mo(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = Lo(), e !== null && !it ? (zo(e, t, i), jn(e, t, i)) : (Te && a && go(t), t.flags |= 1, gt(e, t, n, i), t.child);
  }
  function nm(e, t, n, a, i, s) {
    return ja(t), t.updateQueue = null, n = lf(
      t,
      a,
      n,
      i
    ), af(e), a = Lo(), e !== null && !it ? (zo(e, t, s), jn(e, t, s)) : (Te && a && go(t), t.flags |= 1, gt(e, t, n, s), t.child);
  }
  function am(e, t, n, a, i) {
    if (ja(t), t.stateNode === null) {
      var s = al, d = n.contextType;
      typeof d == "object" && d !== null && (s = ht(d)), s = new n(a, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Jo, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = a, s.state = t.memoizedState, s.refs = {}, No(t), d = n.contextType, s.context = typeof d == "object" && d !== null ? ht(d) : al, s.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Io(
        t,
        n,
        d,
        a
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (d = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), d !== s.state && Jo.enqueueReplaceState(s, s.state, null), oi(t, a, s, i), si(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, E = Ha(n, g);
      s.props = E;
      var _ = s.context, H = n.contextType;
      d = al, typeof H == "object" && H !== null && (d = ht(H));
      var G = n.getDerivedStateFromProps;
      H = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, H || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || _ !== d) && Kf(
        t,
        s,
        a,
        d
      ), ea = !1;
      var D = t.memoizedState;
      s.state = D, oi(t, a, s, i), si(), _ = t.memoizedState, g || D !== _ || ea ? (typeof G == "function" && (Io(
        t,
        n,
        G,
        a
      ), _ = t.memoizedState), (E = ea || Yf(
        t,
        n,
        E,
        a,
        D,
        _,
        d
      )) ? (H || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), s.props = a, s.state = _, s.context = d, a = E) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      s = t.stateNode, Ao(e, t), d = t.memoizedProps, H = Ha(n, d), s.props = H, G = t.pendingProps, D = s.context, _ = n.contextType, E = al, typeof _ == "object" && _ !== null && (E = ht(_)), g = n.getDerivedStateFromProps, (_ = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (d !== G || D !== E) && Kf(
        t,
        s,
        a,
        E
      ), ea = !1, D = t.memoizedState, s.state = D, oi(t, a, s, i), si();
      var M = t.memoizedState;
      d !== G || D !== M || ea || e !== null && e.dependencies !== null && pr(e.dependencies) ? (typeof g == "function" && (Io(
        t,
        n,
        g,
        a
      ), M = t.memoizedState), (H = ea || Yf(
        t,
        n,
        H,
        a,
        D,
        M,
        E
      ) || e !== null && e.dependencies !== null && pr(e.dependencies)) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, M, E), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        a,
        M,
        E
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), s.props = a, s.state = M, s.context = E, a = H) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return s = a, zr(e, t), a = (t.flags & 128) !== 0, s || a ? (s = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && a ? (t.child = La(
      t,
      e.child,
      null,
      i
    ), t.child = La(
      t,
      null,
      n,
      i
    )) : gt(e, t, n, i), t.memoizedState = s.state, e = t.child) : e = jn(
      e,
      t,
      i
    ), e;
  }
  function lm(e, t, n, a) {
    return _a(), t.flags |= 256, gt(e, t, n, a), t.child;
  }
  var tu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function nu(e) {
    return { baseLanes: e, cachePool: Qd() };
  }
  function au(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= kt), e;
  }
  function im(e, t, n) {
    var a = t.pendingProps, i = !1, s = (t.flags & 128) !== 0, d;
    if ((d = s) || (d = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Te) {
        if (i ? aa(t) : la(), (e = Xe) ? (e = mh(
          e,
          It
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: In !== null ? { id: mn, overflow: hn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Hd(e), n.return = t, t.child = n, mt = t, Xe = null)) : e = null, e === null) throw Wn(t);
        return ku(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = a.children;
      return a = a.fallback, i ? (la(), i = t.mode, g = Hr(
        { mode: "hidden", children: g },
        i
      ), a = Ca(
        a,
        i,
        n,
        null
      ), g.return = t, a.return = t, g.sibling = a, t.child = g, a = t.child, a.memoizedState = nu(n), a.childLanes = au(
        e,
        d,
        n
      ), t.memoizedState = tu, mi(null, a)) : (aa(t), lu(t, g));
    }
    var E = e.memoizedState;
    if (E !== null && (g = E.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (aa(t), t.flags &= -257, t = iu(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (la(), t.child = e.child, t.flags |= 128, t = null) : (la(), g = a.fallback, i = t.mode, a = Hr(
          { mode: "visible", children: a.children },
          i
        ), g = Ca(
          g,
          i,
          n,
          null
        ), g.flags |= 2, a.return = t, g.return = t, a.sibling = g, t.child = a, La(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = nu(n), a.childLanes = au(
          e,
          d,
          n
        ), t.memoizedState = tu, t = mi(null, a));
      else if (aa(t), ku(g)) {
        if (d = g.nextSibling && g.nextSibling.dataset, d) var _ = d.dgst;
        d = _, a = Error(c(419)), a.stack = "", a.digest = d, ti({ value: a, source: null, stack: null }), t = iu(
          e,
          t,
          n
        );
      } else if (it || sl(e, t, n, !1), d = (n & e.childLanes) !== 0, it || d) {
        if (d = Ye, d !== null && (a = Vc(d, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, Aa(e, a), Ct(d, e, a), Po;
        Bu(g) || Qr(), t = iu(
          e,
          t,
          n
        );
      } else
        Bu(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Xe = Wt(
          g.nextSibling
        ), mt = t, Te = !0, Jn = null, It = !1, e !== null && qd(t, e), t = lu(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (la(), g = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = Tn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? g = Tn(
      _,
      g
    ) : (g = Ca(
      g,
      i,
      n,
      null
    ), g.flags |= 2), g.return = t, a.return = t, a.sibling = g, t.child = a, mi(null, a), a = t.child, g = e.child.memoizedState, g === null ? g = nu(n) : (i = g.cachePool, i !== null ? (E = at._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Qd(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: i
    }), a.memoizedState = g, a.childLanes = au(
      e,
      d,
      n
    ), t.memoizedState = tu, mi(e.child, a)) : (aa(t), n = e.child, e = n.sibling, n = Tn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function lu(e, t) {
    return t = Hr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Hr(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function iu(e, t, n) {
    return La(t, e.child, null, n), e = lu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function rm(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), wo(e.return, t, n);
  }
  function ru(e, t, n, a, i, s) {
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
  function sm(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, s = a.tail;
    a = a.children;
    var d = Pe.current, g = (d & 2) !== 0;
    if (g ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, V(Pe, d), gt(e, t, a, n), a = Te ? ei : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && rm(e, n, t);
        else if (e.tag === 19)
          rm(e, n, t);
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
          e = n.alternate, e !== null && Tr(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ru(
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
          if (e = i.alternate, e !== null && Tr(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        ru(
          t,
          !0,
          n,
          null,
          s,
          a
        );
        break;
      case "together":
        ru(
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
  function jn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (sl(
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
      for (e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function su(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && pr(e)));
  }
  function ky(e, t, n) {
    switch (t.tag) {
      case 3:
        De(t, t.stateNode.containerInfo), Pn(t, at, e.memoizedState.cache), _a();
        break;
      case 27:
      case 5:
        dn(t);
        break;
      case 4:
        De(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Do(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (aa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? im(e, t, n) : (aa(t), e = jn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        aa(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (sl(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return sm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), V(Pe, Pe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Pf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Pn(t, at, e.memoizedState.cache);
    }
    return jn(e, t, n);
  }
  function om(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!su(e, n) && (t.flags & 128) === 0)
          return it = !1, ky(
            e,
            t,
            n
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, Te && (t.flags & 1048576) !== 0 && kd(t, ei, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Ua(t.elementType), t.type = e, typeof e == "function")
            fo(e) ? (a = Ha(e, a), t.tag = 1, t = am(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = eu(
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
                t.tag = 11, t = If(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === I) {
                t.tag = 14, t = Jf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Ae(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return eu(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = Ha(
          a,
          t.pendingProps
        ), am(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (De(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var s = t.memoizedState;
          i = s.element, Ao(e, t), oi(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, Pn(t, at, a), a !== s.cache && Eo(
            t,
            [at],
            n,
            !0
          ), si(), a = d.element, s.isDehydrated)
            if (s = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = lm(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Zt(
                Error(c(424)),
                t
              ), ti(i), t = lm(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Xe = Wt(e.firstChild), mt = t, Te = !0, Jn = null, It = !0, n = Wd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_a(), a === i) {
              t = jn(
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
        return zr(e, t), e === null ? (n = vh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Te || (n = t.type, e = t.pendingProps, a = Pr(
          ie.current
        ).createElement(n), a[ft] = t, a[St] = e, yt(a, n, e), ct(a), t.stateNode = a) : t.memoizedState = vh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return dn(t), e === null && Te && (a = t.stateNode = yh(
          t.type,
          t.pendingProps,
          ie.current
        ), mt = t, It = !0, i = Xe, fa(t.type) ? (qu = i, Xe = Wt(a.firstChild)) : Xe = i), gt(
          e,
          t,
          t.pendingProps.children,
          n
        ), zr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Te && ((i = a = Xe) && (a = gp(
          a,
          t.type,
          t.pendingProps,
          It
        ), a !== null ? (t.stateNode = a, mt = t, Xe = Wt(a.firstChild), It = !1, i = !0) : i = !1), i || Wn(t)), dn(t), i = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = s.children, Lu(i, s) ? a = null : d !== null && Lu(i, d) && (t.flags |= 32), t.memoizedState !== null && (i = Mo(
          e,
          t,
          Oy,
          null,
          null,
          n
        ), Ci._currentValue = i), zr(e, t), gt(e, t, a, n), t.child;
      case 6:
        return e === null && Te && ((e = n = Xe) && (n = yp(
          n,
          t.pendingProps,
          It
        ), n !== null ? (t.stateNode = n, mt = t, Xe = null, e = !0) : e = !1), e || Wn(t)), null;
      case 13:
        return im(e, t, n);
      case 4:
        return De(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = La(
          t,
          null,
          a,
          n
        ) : gt(e, t, a, n), t.child;
      case 11:
        return If(
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
        return a = t.pendingProps, Pn(t, t.type, a.value), gt(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, ja(t), i = ht(i), a = a(i), t.flags |= 1, gt(e, t, a, n), t.child;
      case 14:
        return Jf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Wf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return sm(e, t, n);
      case 31:
        return By(e, t, n);
      case 22:
        return Pf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ja(t), a = ht(at), e === null ? (i = Ro(), i === null && (i = Ye, s = So(), i.pooledCache = s, s.refCount++, s !== null && (i.pooledCacheLanes |= n), i = s), t.memoizedState = { parent: a, cache: i }, No(t), Pn(t, at, i)) : ((e.lanes & n) !== 0 && (Ao(e, t), oi(t, null, null, n), si()), i = e.memoizedState, s = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Pn(t, at, a)) : (a = s.cache, Pn(t, at, a), a !== i.cache && Eo(
          t,
          [at],
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
  function Dn(e) {
    e.flags |= 4;
  }
  function ou(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Lm()) e.flags |= 8192;
        else
          throw Ma = Er, To;
    } else e.flags &= -16777217;
  }
  function um(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Rh(t))
      if (Lm()) e.flags |= 8192;
      else
        throw Ma = Er, To;
  }
  function Br(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gc() : 536870912, e.lanes |= t, vl |= t);
  }
  function hi(e, t) {
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
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function qy(e, t, n) {
    var a = t.pendingProps;
    switch (yo(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return Qe(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Cn(at), P(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (rl(t) ? Dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bo())), Qe(t), null;
      case 26:
        var i = t.type, s = t.memoizedState;
        return e === null ? (Dn(t), s !== null ? (Qe(t), um(t, s)) : (Qe(t), ou(
          t,
          i,
          null,
          a,
          n
        ))) : s ? s !== e.memoizedState ? (Dn(t), Qe(t), um(t, s)) : (Qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Dn(t), Qe(t), ou(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (Yt(t), n = ie.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Dn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Qe(t), null;
          }
          e = Z.current, rl(t) ? Gd(t) : (e = yh(i, a, n), t.stateNode = e, Dn(t));
        }
        return Qe(t), null;
      case 5:
        if (Yt(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Dn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Qe(t), null;
          }
          if (s = Z.current, rl(t))
            Gd(t);
          else {
            var d = Pr(
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
            a && Dn(t);
          }
        }
        return Qe(t), ou(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Dn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = ie.current, rl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = mt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[ft] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || ih(e.nodeValue, n)), e || Wn(t, !0);
          } else
            e = Pr(e).createTextNode(
              a
            ), e[ft] = t, t.stateNode = e;
        }
        return Qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = rl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ft] = t;
            } else
              _a(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), e = !1;
          } else
            n = bo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Qe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = rl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[ft] = t;
            } else
              _a(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), i = !1;
          } else
            i = bo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return Ht(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Br(t, t.updateQueue), Qe(t), null);
      case 4:
        return P(), e === null && Ou(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Cn(t.type), Qe(t), null;
      case 19:
        if (B(Pe), a = t.memoizedState, a === null) return Qe(t), null;
        if (i = (t.flags & 128) !== 0, s = a.rendering, s === null)
          if (i) hi(a, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Tr(e), s !== null) {
                  for (t.flags |= 128, hi(a, !1), e = s.updateQueue, t.updateQueue = e, Br(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    zd(n, e), n = n.sibling;
                  return V(
                    Pe,
                    Pe.current & 1 | 2
                  ), Te && Nn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ut() > Kr && (t.flags |= 128, i = !0, hi(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Tr(s), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Br(t, e), hi(a, !0), a.tail === null && a.tailMode === "hidden" && !s.alternate && !Te)
                return Qe(t), null;
            } else
              2 * ut() - a.renderingStartTime > Kr && n !== 536870912 && (t.flags |= 128, i = !0, hi(a, !1), t.lanes = 4194304);
          a.isBackwards ? (s.sibling = t.child, t.child = s) : (e = a.last, e !== null ? e.sibling = s : t.child = s, a.last = s);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ut(), e.sibling = null, n = Pe.current, V(
          Pe,
          i ? n & 1 | 2 : n & 1
        ), Te && Nn(t, a.treeForkCount), e) : (Qe(t), null);
      case 22:
      case 23:
        return Ht(t), jo(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), n = t.updateQueue, n !== null && Br(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(Da), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Cn(at), Qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Gy(e, t) {
    switch (yo(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Cn(at), P(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Yt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ht(t), t.alternate === null)
            throw Error(c(340));
          _a();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ht(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          _a();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(Pe), null;
      case 4:
        return P(), null;
      case 10:
        return Cn(t.type), null;
      case 22:
      case 23:
        return Ht(t), jo(), e !== null && B(Da), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Cn(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cm(e, t) {
    switch (yo(t), t.tag) {
      case 3:
        Cn(at), P();
        break;
      case 26:
      case 27:
      case 5:
        Yt(t);
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
        B(Pe);
        break;
      case 10:
        Cn(t.type);
        break;
      case 22:
      case 23:
        Ht(t), jo(), e !== null && B(Da);
        break;
      case 24:
        Cn(at);
    }
  }
  function gi(e, t) {
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
      Be(t, t.return, g);
    }
  }
  function ia(e, t, n) {
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
              } catch (H) {
                Be(
                  i,
                  E,
                  H
                );
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (H) {
      Be(t, t.return, H);
    }
  }
  function dm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ef(t, n);
      } catch (a) {
        Be(e, e.return, a);
      }
    }
  }
  function fm(e, t, n) {
    n.props = Ha(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Be(e, t, a);
    }
  }
  function yi(e, t) {
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
      Be(e, t, i);
    }
  }
  function gn(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Be(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Be(e, t, i);
        }
      else n.current = null;
  }
  function mm(e) {
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
      Be(e, e.return, i);
    }
  }
  function uu(e, t, n) {
    try {
      var a = e.stateNode;
      up(a, e.type, n, t), a[St] = t;
    } catch (i) {
      Be(e, e.return, i);
    }
  }
  function hm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && fa(e.type) || e.tag === 4;
  }
  function cu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || hm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && fa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function du(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xn));
    else if (a !== 4 && (a === 27 && fa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (du(e, t, n), e = e.sibling; e !== null; )
        du(e, t, n), e = e.sibling;
  }
  function kr(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && fa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (kr(e, t, n), e = e.sibling; e !== null; )
        kr(e, t, n), e = e.sibling;
  }
  function gm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      yt(t, a, n), t[ft] = e, t[St] = n;
    } catch (s) {
      Be(e, e.return, s);
    }
  }
  var Un = !1, rt = !1, fu = !1, ym = typeof WeakSet == "function" ? WeakSet : Set, dt = null;
  function Yy(e, t) {
    if (e = e.containerInfo, Uu = rs, e = Ad(e), lo(e)) {
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
            var d = 0, g = -1, E = -1, _ = 0, H = 0, G = e, D = null;
            t: for (; ; ) {
              for (var M; G !== n || i !== 0 && G.nodeType !== 3 || (g = d + i), G !== s || a !== 0 && G.nodeType !== 3 || (E = d + a), G.nodeType === 3 && (d += G.nodeValue.length), (M = G.firstChild) !== null; )
                D = G, G = M;
              for (; ; ) {
                if (G === e) break t;
                if (D === n && ++_ === i && (g = d), D === s && ++H === a && (E = d), (M = G.nextSibling) !== null) break;
                G = D, D = G.parentNode;
              }
              G = M;
            }
            n = g === -1 || E === -1 ? null : { start: g, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mu = { focusedElem: e, selectionRange: n }, rs = !1, dt = t; dt !== null; )
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
                  var J = Ha(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    s
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ae) {
                  Be(
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
                  Hu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Hu(e);
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
  function pm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ln(e, n), a & 4 && gi(5, n);
        break;
      case 1:
        if (Ln(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Be(n, n.return, d);
            }
          else {
            var i = Ha(
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
              Be(
                n,
                n.return,
                d
              );
            }
          }
        a & 64 && dm(n), a & 512 && yi(n, n.return);
        break;
      case 3:
        if (Ln(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            ef(e, t);
          } catch (d) {
            Be(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && gm(n);
      case 26:
      case 5:
        Ln(e, n), t === null && a & 4 && mm(n), a & 512 && yi(n, n.return);
        break;
      case 12:
        Ln(e, n);
        break;
      case 31:
        Ln(e, n), a & 4 && wm(e, n);
        break;
      case 13:
        Ln(e, n), a & 4 && Em(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Jy.bind(
          null,
          n
        ), pp(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Un, !a) {
          t = t !== null && t.memoizedState !== null || rt, i = Un;
          var s = rt;
          Un = a, (rt = t) && !s ? zn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Ln(e, n), Un = i, rt = s;
        }
        break;
      case 30:
        break;
      default:
        Ln(e, n);
    }
  }
  function bm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, bm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Gs(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, Rt = !1;
  function Mn(e, t, n) {
    for (n = n.child; n !== null; )
      vm(e, t, n), n = n.sibling;
  }
  function vm(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(ql, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        rt || gn(n, t), Mn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        rt || gn(n, t);
        var a = Ze, i = Rt;
        fa(n.type) && (Ze = n.stateNode, Rt = !1), Mn(
          e,
          t,
          n
        ), Ti(n.stateNode), Ze = a, Rt = i;
        break;
      case 5:
        rt || gn(n, t);
      case 6:
        if (a = Ze, i = Rt, Ze = null, Mn(
          e,
          t,
          n
        ), Ze = a, Rt = i, Ze !== null)
          if (Rt)
            try {
              (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(n.stateNode);
            } catch (s) {
              Be(
                n,
                t,
                s
              );
            }
          else
            try {
              Ze.removeChild(n.stateNode);
            } catch (s) {
              Be(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        Ze !== null && (Rt ? (e = Ze, dh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Al(e)) : dh(Ze, n.stateNode));
        break;
      case 4:
        a = Ze, i = Rt, Ze = n.stateNode.containerInfo, Rt = !0, Mn(
          e,
          t,
          n
        ), Ze = a, Rt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, n, t), rt || ia(4, n, t), Mn(
          e,
          t,
          n
        );
        break;
      case 1:
        rt || (gn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && fm(
          n,
          t,
          a
        )), Mn(
          e,
          t,
          n
        );
        break;
      case 21:
        Mn(
          e,
          t,
          n
        );
        break;
      case 22:
        rt = (a = rt) || n.memoizedState !== null, Mn(
          e,
          t,
          n
        ), rt = a;
        break;
      default:
        Mn(
          e,
          t,
          n
        );
    }
  }
  function wm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Al(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function Em(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Al(e);
      } catch (n) {
        Be(t, t.return, n);
      }
  }
  function Ky(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ym()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ym()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function qr(e, t) {
    var n = Ky(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Wy.bind(null, e, a);
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
              if (fa(g.type)) {
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
        vm(s, d, i), Ze = null, Rt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Sm(t, e), t = t.sibling;
  }
  var sn = null;
  function Sm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), Nt(e), a & 4 && (ia(3, e, e.return), gi(3, e), ia(5, e, e.return));
        break;
      case 1:
        Tt(t, e), Nt(e), a & 512 && (rt || n === null || gn(n, n.return)), a & 64 && Un && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = sn;
        if (Tt(t, e), Nt(e), a & 512 && (rt || n === null || gn(n, n.return)), a & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      s = i.getElementsByTagName("title")[0], (!s || s[Kl] || s[ft] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = i.createElement(a), i.head.insertBefore(
                        s,
                        i.querySelector("head > title")
                      )), yt(s, a, n), s[ft] = e, ct(s), a = s;
                      break e;
                    case "link":
                      var d = Sh(
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
                      if (d = Sh(
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
                xh(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Eh(
                i,
                a,
                e.memoizedProps
              );
          else
            s !== a ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, a === null ? xh(
              i,
              e.type,
              e.stateNode
            ) : Eh(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && uu(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), Nt(e), a & 512 && (rt || n === null || gn(n, n.return)), n !== null && a & 4 && uu(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), Nt(e), a & 512 && (rt || n === null || gn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Ia(i, "");
          } catch (J) {
            Be(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, uu(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (fu = !0);
        break;
      case 6:
        if (Tt(t, e), Nt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (J) {
            Be(e, e.return, J);
          }
        }
        break;
      case 3:
        if (ns = null, i = sn, sn = es(t.containerInfo), Tt(t, e), sn = i, Nt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Al(t.containerInfo);
          } catch (J) {
            Be(e, e.return, J);
          }
        fu && (fu = !1, xm(e));
        break;
      case 4:
        a = sn, sn = es(
          e.stateNode.containerInfo
        ), Tt(t, e), Nt(e), sn = a;
        break;
      case 12:
        Tt(t, e), Nt(e);
        break;
      case 31:
        Tt(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qr(e, a)));
        break;
      case 13:
        Tt(t, e), Nt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Yr = ut()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = Un, H = rt;
        if (Un = _ || i, rt = H || E, Tt(t, e), rt = H, Un = _, Nt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || Un || rt || Ba(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (s = E.stateNode, i)
                    d = s.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = E.stateNode;
                    var G = E.memoizedProps.style, D = G != null && G.hasOwnProperty("display") ? G.display : null;
                    g.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (J) {
                  Be(E, E.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (J) {
                  Be(E, E.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var M = E.stateNode;
                  i ? fh(M, !0) : fh(E.stateNode, !1);
                } catch (J) {
                  Be(E, E.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, qr(e, n))));
        break;
      case 19:
        Tt(t, e), Nt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qr(e, a)));
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
          if (hm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, s = cu(e);
            kr(e, s, i);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ia(d, ""), n.flags &= -33);
            var g = cu(e);
            kr(e, g, d);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, _ = cu(e);
            du(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (H) {
        Be(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        xm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Ln(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        pm(e, t.alternate, t), t = t.sibling;
  }
  function Ba(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), Ba(t);
          break;
        case 1:
          gn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && fm(
            t,
            t.return,
            n
          ), Ba(t);
          break;
        case 27:
          Ti(t.stateNode);
        case 26:
        case 5:
          gn(t, t.return), Ba(t);
          break;
        case 22:
          t.memoizedState === null && Ba(t);
          break;
        case 30:
          Ba(t);
          break;
        default:
          Ba(t);
      }
      e = e.sibling;
    }
  }
  function zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, s = t, d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            i,
            s,
            n
          ), gi(4, s);
          break;
        case 1:
          if (zn(
            i,
            s,
            n
          ), a = s, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              Be(a, a.return, _);
            }
          if (a = s, i = a.updateQueue, i !== null) {
            var g = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Pd(E[i], g);
            } catch (_) {
              Be(a, a.return, _);
            }
          }
          n && d & 64 && dm(s), yi(s, s.return);
          break;
        case 27:
          gm(s);
        case 26:
        case 5:
          zn(
            i,
            s,
            n
          ), n && a === null && d & 4 && mm(s), yi(s, s.return);
          break;
        case 12:
          zn(
            i,
            s,
            n
          );
          break;
        case 31:
          zn(
            i,
            s,
            n
          ), n && d & 4 && wm(i, s);
          break;
        case 13:
          zn(
            i,
            s,
            n
          ), n && d & 4 && Em(i, s);
          break;
        case 22:
          s.memoizedState === null && zn(
            i,
            s,
            n
          ), yi(s, s.return);
          break;
        case 30:
          break;
        default:
          zn(
            i,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function mu(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ni(n));
  }
  function hu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ni(e));
  }
  function on(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Rm(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function Rm(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        on(
          e,
          t,
          n,
          a
        ), i & 2048 && gi(9, t);
        break;
      case 1:
        on(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        on(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ni(e)));
        break;
      case 12:
        if (i & 2048) {
          on(
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
            Be(t, t.return, E);
          }
        } else
          on(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        on(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        on(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, d = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? on(
          e,
          t,
          n,
          a
        ) : pi(e, t) : s._visibility & 2 ? on(
          e,
          t,
          n,
          a
        ) : (s._visibility |= 2, yl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && mu(d, t);
        break;
      case 24:
        on(
          e,
          t,
          n,
          a
        ), i & 2048 && hu(t.alternate, t);
        break;
      default:
        on(
          e,
          t,
          n,
          a
        );
    }
  }
  function yl(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, d = t, g = n, E = a, _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          yl(
            s,
            d,
            g,
            E,
            i
          ), gi(8, d);
          break;
        case 23:
          break;
        case 22:
          var H = d.stateNode;
          d.memoizedState !== null ? H._visibility & 2 ? yl(
            s,
            d,
            g,
            E,
            i
          ) : pi(
            s,
            d
          ) : (H._visibility |= 2, yl(
            s,
            d,
            g,
            E,
            i
          )), i && _ & 2048 && mu(
            d.alternate,
            d
          );
          break;
        case 24:
          yl(
            s,
            d,
            g,
            E,
            i
          ), i && _ & 2048 && hu(d.alternate, d);
          break;
        default:
          yl(
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
  function pi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            pi(n, a), i & 2048 && mu(
              a.alternate,
              a
            );
            break;
          case 24:
            pi(n, a), i & 2048 && hu(a.alternate, a);
            break;
          default:
            pi(n, a);
        }
        t = t.sibling;
      }
  }
  var bi = 8192;
  function pl(e, t, n) {
    if (e.subtreeFlags & bi)
      for (e = e.child; e !== null; )
        Tm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Tm(e, t, n) {
    switch (e.tag) {
      case 26:
        pl(
          e,
          t,
          n
        ), e.flags & bi && e.memoizedState !== null && _p(
          n,
          sn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        pl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = sn;
        sn = es(e.stateNode.containerInfo), pl(
          e,
          t,
          n
        ), sn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = bi, bi = 16777216, pl(
          e,
          t,
          n
        ), bi = a) : pl(
          e,
          t,
          n
        ));
        break;
      default:
        pl(
          e,
          t,
          n
        );
    }
  }
  function Nm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function vi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          dt = a, Cm(
            a,
            e
          );
        }
      Nm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Am(e), e = e.sibling;
  }
  function Am(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vi(e), e.flags & 2048 && ia(9, e, e.return);
        break;
      case 3:
        vi(e);
        break;
      case 12:
        vi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Gr(e)) : vi(e);
        break;
      default:
        vi(e);
    }
  }
  function Gr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          dt = a, Cm(
            a,
            e
          );
        }
      Nm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), Gr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Gr(t));
          break;
        default:
          Gr(t);
      }
      e = e.sibling;
    }
  }
  function Cm(e, t) {
    for (; dt !== null; ) {
      var n = dt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ni(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, dt = a;
      else
        e: for (n = e; dt !== null; ) {
          a = dt;
          var i = a.sibling, s = a.return;
          if (bm(a), a === n) {
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
  var Vy = {
    getCacheForType: function(e) {
      var t = ht(at), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ht(at).controller.signal;
    }
  }, Xy = typeof WeakMap == "function" ? WeakMap : Map, Ue = 0, Ye = null, ve = null, Se = 0, He = 0, Bt = null, ra = !1, bl = !1, gu = !1, Hn = 0, Je = 0, sa = 0, ka = 0, yu = 0, kt = 0, vl = 0, wi = null, At = null, pu = !1, Yr = 0, _m = 0, Kr = 1 / 0, Vr = null, oa = null, st = 0, ua = null, wl = null, Bn = 0, bu = 0, vu = null, Om = null, Ei = 0, wu = null;
  function qt() {
    return (Ue & 2) !== 0 && Se !== 0 ? Se & -Se : z.T !== null ? Nu() : Xc();
  }
  function jm() {
    if (kt === 0)
      if ((Se & 536870912) === 0 || Te) {
        var e = Wi;
        Wi <<= 1, (Wi & 3932160) === 0 && (Wi = 262144), kt = e;
      } else kt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), kt;
  }
  function Ct(e, t, n) {
    (e === Ye && (He === 2 || He === 9) || e.cancelPendingCommit !== null) && (El(e, 0), ca(
      e,
      Se,
      kt,
      !1
    )), Yl(e, n), ((Ue & 2) === 0 || e !== Ye) && (e === Ye && ((Ue & 2) === 0 && (ka |= n), Je === 4 && ca(
      e,
      Se,
      kt,
      !1
    )), yn(e));
  }
  function Dm(e, t, n) {
    if ((Ue & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Gl(e, t), i = a ? Fy(e, t) : Su(e, t, !0), s = a;
    do {
      if (i === 0) {
        bl && !a && ca(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !Qy(n)) {
          i = Su(e, t, !1), s = !1;
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
              i = wi;
              var E = g.current.memoizedState.isDehydrated;
              if (E && (El(g, d).flags |= 256), d = Su(
                g,
                d,
                !1
              ), d !== 2) {
                if (gu && !E) {
                  g.errorRecoveryDisabledLanes |= s, ka |= s, i = 4;
                  break e;
                }
                s = At, At = i, s !== null && (At === null ? At = s : At.push.apply(
                  At,
                  s
                ));
              }
              i = d;
            }
            if (s = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          El(e, 0), ca(e, t, 0, !0);
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
              ca(
                a,
                t,
                kt,
                !ra
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
          if ((t & 62914560) === t && (i = Yr + 300 - ut(), 10 < i)) {
            if (ca(
              a,
              t,
              kt,
              !ra
            ), er(a, 0, !0) !== 0) break e;
            Bn = t, a.timeoutHandle = uh(
              Um.bind(
                null,
                a,
                n,
                At,
                Vr,
                pu,
                t,
                kt,
                ka,
                vl,
                ra,
                s,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          Um(
            a,
            n,
            At,
            Vr,
            pu,
            t,
            kt,
            ka,
            vl,
            ra,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    yn(e);
  }
  function Um(e, t, n, a, i, s, d, g, E, _, H, G, D, M) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xn
      }, Tm(
        t,
        s,
        G
      );
      var J = (s & 62914560) === s ? Yr - ut() : (s & 4194048) === s ? _m - ut() : 0;
      if (J = Op(
        G,
        J
      ), J !== null) {
        Bn = s, e.cancelPendingCommit = J(
          Gm.bind(
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
            H,
            G,
            null,
            D,
            M
          )
        ), ca(e, s, d, !_);
        return;
      }
    }
    Gm(
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
  function Qy(e) {
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
  function ca(e, t, n, a) {
    t &= ~yu, t &= ~ka, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var s = 31 - Ut(i), d = 1 << s;
      a[s] = -1, i &= ~d;
    }
    n !== 0 && Yc(e, n, t);
  }
  function Xr() {
    return (Ue & 6) === 0 ? (Si(0), !1) : !0;
  }
  function Eu() {
    if (ve !== null) {
      if (He === 0)
        var e = ve.return;
      else
        e = ve, An = Oa = null, Ho(e), dl = null, li = 0, e = ve;
      for (; e !== null; )
        cm(e.alternate, e), e = e.return;
      ve = null;
    }
  }
  function El(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, fp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Bn = 0, Eu(), Ye = e, ve = n = Tn(e.current, null), Se = t, He = 0, Bt = null, ra = !1, bl = Gl(e, t), gu = !1, vl = kt = yu = ka = sa = Je = 0, At = wi = null, pu = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ut(a), s = 1 << i;
        t |= e[i], a &= ~s;
      }
    return Hn = t, fr(), n;
  }
  function Mm(e, t) {
    he = null, z.H = fi, t === cl || t === wr ? (t = $d(), He = 3) : t === To ? (t = $d(), He = 4) : He = t === Po ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Bt = t, ve === null && (Je = 1, Mr(
      e,
      Zt(t, e.current)
    ));
  }
  function Lm() {
    var e = zt.current;
    return e === null ? !0 : (Se & 4194048) === Se ? Jt === null : (Se & 62914560) === Se || (Se & 536870912) !== 0 ? e === Jt : !1;
  }
  function zm() {
    var e = z.H;
    return z.H = fi, e === null ? fi : e;
  }
  function Hm() {
    var e = z.A;
    return z.A = Vy, e;
  }
  function Qr() {
    Je = 4, ra || (Se & 4194048) !== Se && zt.current !== null || (bl = !0), (sa & 134217727) === 0 && (ka & 134217727) === 0 || Ye === null || ca(
      Ye,
      Se,
      kt,
      !1
    );
  }
  function Su(e, t, n) {
    var a = Ue;
    Ue |= 2;
    var i = zm(), s = Hm();
    (Ye !== e || Se !== t) && (Vr = null, El(e, t)), t = !1;
    var d = Je;
    e: do
      try {
        if (He !== 0 && ve !== null) {
          var g = ve, E = Bt;
          switch (He) {
            case 8:
              Eu(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var _ = He;
              if (He = 0, Bt = null, Sl(e, g, E, _), n && bl) {
                d = 0;
                break e;
              }
              break;
            default:
              _ = He, He = 0, Bt = null, Sl(e, g, E, _);
          }
        }
        Zy(), d = Je;
        break;
      } catch (H) {
        Mm(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, An = Oa = null, Ue = a, z.H = i, z.A = s, ve === null && (Ye = null, Se = 0, fr()), d;
  }
  function Zy() {
    for (; ve !== null; ) Bm(ve);
  }
  function Fy(e, t) {
    var n = Ue;
    Ue |= 2;
    var a = zm(), i = Hm();
    Ye !== e || Se !== t ? (Vr = null, Kr = ut() + 500, El(e, t)) : bl = Gl(
      e,
      t
    );
    e: do
      try {
        if (He !== 0 && ve !== null) {
          t = ve;
          var s = Bt;
          t: switch (He) {
            case 1:
              He = 0, Bt = null, Sl(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (Zd(s)) {
                He = 0, Bt = null, km(t);
                break;
              }
              t = function() {
                He !== 2 && He !== 9 || Ye !== e || (He = 7), yn(e);
              }, s.then(t, t);
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              Zd(s) ? (He = 0, Bt = null, km(t)) : (He = 0, Bt = null, Sl(e, t, s, 7));
              break;
            case 5:
              var d = null;
              switch (ve.tag) {
                case 26:
                  d = ve.memoizedState;
                case 5:
                case 27:
                  var g = ve;
                  if (d ? Rh(d) : g.stateNode.complete) {
                    He = 0, Bt = null;
                    var E = g.sibling;
                    if (E !== null) ve = E;
                    else {
                      var _ = g.return;
                      _ !== null ? (ve = _, Zr(_)) : ve = null;
                    }
                    break t;
                  }
              }
              He = 0, Bt = null, Sl(e, t, s, 5);
              break;
            case 6:
              He = 0, Bt = null, Sl(e, t, s, 6);
              break;
            case 8:
              Eu(), Je = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        $y();
        break;
      } catch (H) {
        Mm(e, H);
      }
    while (!0);
    return An = Oa = null, z.H = a, z.A = i, Ue = n, ve !== null ? 0 : (Ye = null, Se = 0, fr(), Je);
  }
  function $y() {
    for (; ve !== null && !Xn(); )
      Bm(ve);
  }
  function Bm(e) {
    var t = om(e.alternate, e, Hn);
    e.memoizedProps = e.pendingProps, t === null ? Zr(e) : ve = t;
  }
  function km(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = nm(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Se
        );
        break;
      case 11:
        t = nm(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Se
        );
        break;
      case 5:
        Ho(t);
      default:
        cm(n, t), t = ve = zd(t, Hn), t = om(n, t, Hn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Zr(e) : ve = t;
  }
  function Sl(e, t, n, a) {
    An = Oa = null, Ho(t), dl = null, li = 0;
    var i = t.return;
    try {
      if (Hy(
        e,
        i,
        t,
        n,
        Se
      )) {
        Je = 1, Mr(
          e,
          Zt(n, e.current)
        ), ve = null;
        return;
      }
    } catch (s) {
      if (i !== null) throw ve = i, s;
      Je = 1, Mr(
        e,
        Zt(n, e.current)
      ), ve = null;
      return;
    }
    t.flags & 32768 ? (Te || a === 1 ? e = !0 : bl || (Se & 536870912) !== 0 ? e = !1 : (ra = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = zt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), qm(t, e)) : Zr(t);
  }
  function Zr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        qm(
          t,
          ra
        );
        return;
      }
      e = t.return;
      var n = qy(
        t.alternate,
        t,
        Hn
      );
      if (n !== null) {
        ve = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function qm(e, t) {
    do {
      var n = Gy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ve = e;
        return;
      }
      ve = e = n;
    } while (e !== null);
    Je = 6, ve = null;
  }
  function Gm(e, t, n, a, i, s, d, g, E) {
    e.cancelPendingCommit = null;
    do
      Fr();
    while (st !== 0);
    if ((Ue & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (s = t.lanes | t.childLanes, s |= uo, Cg(
        e,
        n,
        s,
        d,
        g,
        E
      ), e === Ye && (ve = Ye = null, Se = 0), wl = t, ua = e, Bn = n, bu = s, vu = i, Om = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Py(ne, function() {
        return Qm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, i = Y.p, Y.p = 2, d = Ue, Ue |= 4;
        try {
          Yy(e, t, n);
        } finally {
          Ue = d, Y.p = i, z.T = a;
        }
      }
      st = 1, Ym(), Km(), Vm();
    }
  }
  function Ym() {
    if (st === 1) {
      st = 0;
      var e = ua, t = wl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = z.T, z.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Ue;
        Ue |= 4;
        try {
          Sm(t, e);
          var s = Mu, d = Ad(e.containerInfo), g = s.focusedElem, E = s.selectionRange;
          if (d !== g && g && g.ownerDocument && Nd(
            g.ownerDocument.documentElement,
            g
          )) {
            if (E !== null && lo(g)) {
              var _ = E.start, H = E.end;
              if (H === void 0 && (H = _), "selectionStart" in g)
                g.selectionStart = _, g.selectionEnd = Math.min(
                  H,
                  g.value.length
                );
              else {
                var G = g.ownerDocument || document, D = G && G.defaultView || window;
                if (D.getSelection) {
                  var M = D.getSelection(), J = g.textContent.length, ae = Math.min(E.start, J), Ge = E.end === void 0 ? ae : Math.min(E.end, J);
                  !M.extend && ae > Ge && (d = Ge, Ge = ae, ae = d);
                  var A = Td(
                    g,
                    ae
                  ), R = Td(
                    g,
                    Ge
                  );
                  if (A && R && (M.rangeCount !== 1 || M.anchorNode !== A.node || M.anchorOffset !== A.offset || M.focusNode !== R.node || M.focusOffset !== R.offset)) {
                    var C = G.createRange();
                    C.setStart(A.node, A.offset), M.removeAllRanges(), ae > Ge ? (M.addRange(C), M.extend(R.node, R.offset)) : (C.setEnd(R.node, R.offset), M.addRange(C));
                  }
                }
              }
            }
            for (G = [], M = g; M = M.parentNode; )
              M.nodeType === 1 && G.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < G.length; g++) {
              var k = G[g];
              k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
            }
          }
          rs = !!Uu, Mu = Uu = null;
        } finally {
          Ue = i, Y.p = a, z.T = n;
        }
      }
      e.current = t, st = 2;
    }
  }
  function Km() {
    if (st === 2) {
      st = 0;
      var e = ua, t = wl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = z.T, z.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = Ue;
        Ue |= 4;
        try {
          pm(e, t.alternate, t);
        } finally {
          Ue = i, Y.p = a, z.T = n;
        }
      }
      st = 3;
    }
  }
  function Vm() {
    if (st === 4 || st === 3) {
      st = 0, Qn();
      var e = ua, t = wl, n = Bn, a = Om;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? st = 5 : (st = 0, wl = ua = null, Xm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (oa = null), ks(n), t = t.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
          Dt.onCommitFiberRoot(
            ql,
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
      (Bn & 3) !== 0 && Fr(), yn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === wu ? Ei++ : (Ei = 0, wu = e) : Ei = 0, Si(0);
    }
  }
  function Xm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ni(t)));
  }
  function Fr() {
    return Ym(), Km(), Vm(), Qm();
  }
  function Qm() {
    if (st !== 5) return !1;
    var e = ua, t = bu;
    bu = 0;
    var n = ks(Bn), a = z.T, i = Y.p;
    try {
      Y.p = 32 > n ? 32 : n, z.T = null, n = vu, vu = null;
      var s = ua, d = Bn;
      if (st = 0, wl = ua = null, Bn = 0, (Ue & 6) !== 0) throw Error(c(331));
      var g = Ue;
      if (Ue |= 4, Am(s.current), Rm(
        s,
        s.current,
        d,
        n
      ), Ue = g, Si(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        try {
          Dt.onPostCommitFiberRoot(ql, s);
        } catch {
        }
      return !0;
    } finally {
      Y.p = i, z.T = a, Xm(e, t);
    }
  }
  function Zm(e, t, n) {
    t = Zt(n, t), t = Wo(e.stateNode, t, 2), e = na(e, t, 2), e !== null && (Yl(e, 2), yn(e));
  }
  function Be(e, t, n) {
    if (e.tag === 3)
      Zm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (oa === null || !oa.has(a))) {
            e = Zt(n, e), n = Ff(2), a = na(t, n, 2), a !== null && ($f(
              n,
              a,
              t,
              e
            ), Yl(a, 2), yn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function xu(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Xy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (gu = !0, i.add(n), e = Iy.bind(null, e, t, n), t.then(e, e));
  }
  function Iy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ye === e && (Se & n) === n && (Je === 4 || Je === 3 && (Se & 62914560) === Se && 300 > ut() - Yr ? (Ue & 2) === 0 && El(e, 0) : yu |= n, vl === Se && (vl = 0)), yn(e);
  }
  function Fm(e, t) {
    t === 0 && (t = Gc()), e = Aa(e, t), e !== null && (Yl(e, t), yn(e));
  }
  function Jy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Fm(e, n);
  }
  function Wy(e, t) {
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
    a !== null && a.delete(t), Fm(e, n);
  }
  function Py(e, t) {
    return ot(e, t);
  }
  var $r = null, xl = null, Ru = !1, Ir = !1, Tu = !1, da = 0;
  function yn(e) {
    e !== xl && e.next === null && (xl === null ? $r = xl = e : xl = xl.next = e), Ir = !0, Ru || (Ru = !0, tp());
  }
  function Si(e, t) {
    if (!Tu && Ir) {
      Tu = !0;
      do
        for (var n = !1, a = $r; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var d = a.suspendedLanes, g = a.pingedLanes;
              s = (1 << 31 - Ut(42 | e) + 1) - 1, s &= i & ~(d & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, Wm(a, s));
          } else
            s = Se, s = er(
              a,
              a === Ye ? s : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (s & 3) === 0 || Gl(a, s) || (n = !0, Wm(a, s));
          a = a.next;
        }
      while (n);
      Tu = !1;
    }
  }
  function ep() {
    $m();
  }
  function $m() {
    Ir = Ru = !1;
    var e = 0;
    da !== 0 && dp() && (e = da);
    for (var t = ut(), n = null, a = $r; a !== null; ) {
      var i = a.next, s = Im(a, t);
      s === 0 ? (a.next = null, n === null ? $r = i : n.next = i, i === null && (xl = n)) : (n = a, (e !== 0 || (s & 3) !== 0) && (Ir = !0)), a = i;
    }
    st !== 0 && st !== 5 || Si(e), da !== 0 && (da = 0);
  }
  function Im(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - Ut(s), g = 1 << d, E = i[d];
      E === -1 ? ((g & n) === 0 || (g & a) !== 0) && (i[d] = Ag(g, t)) : E <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = Ye, n = Se, n = er(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (He === 2 || He === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && nt(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Gl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && nt(a), ks(n)) {
        case 2:
        case 8:
          n = kl;
          break;
        case 32:
          n = ne;
          break;
        case 268435456:
          n = ln;
          break;
        default:
          n = ne;
      }
      return a = Jm.bind(null, e), n = ot(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && nt(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Jm(e, t) {
    if (st !== 0 && st !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Fr() && e.callbackNode !== n)
      return null;
    var a = Se;
    return a = er(
      e,
      e === Ye ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Dm(e, a, t), Im(e, ut()), e.callbackNode != null && e.callbackNode === n ? Jm.bind(null, e) : null);
  }
  function Wm(e, t) {
    if (Fr()) return null;
    Dm(e, t, !0);
  }
  function tp() {
    mp(function() {
      (Ue & 6) !== 0 ? ot(
        Ii,
        ep
      ) : $m();
    });
  }
  function Nu() {
    if (da === 0) {
      var e = ol;
      e === 0 && (e = Ji, Ji <<= 1, (Ji & 261888) === 0 && (Ji = 256)), da = e;
    }
    return da;
  }
  function Pm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : lr("" + e);
  }
  function eh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function np(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var s = Pm(
        (i[St] || null).action
      ), d = a.submitter;
      d && (t = (t = d[St] || null) ? Pm(t.formAction) : d.getAttribute("formAction"), t !== null && (s = t, d = null));
      var g = new or(
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
                if (da !== 0) {
                  var E = d ? eh(i, d) : new FormData(i);
                  Qo(
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
                typeof s == "function" && (g.preventDefault(), E = d ? eh(i, d) : new FormData(i), Qo(
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
  for (var Au = 0; Au < oo.length; Au++) {
    var Cu = oo[Au], ap = Cu.toLowerCase(), lp = Cu[0].toUpperCase() + Cu.slice(1);
    rn(
      ap,
      "on" + lp
    );
  }
  rn(Od, "onAnimationEnd"), rn(jd, "onAnimationIteration"), rn(Dd, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(wy, "onTransitionRun"), rn(Ey, "onTransitionStart"), rn(Sy, "onTransitionCancel"), rn(Ud, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), xa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ip = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi)
  );
  function th(e, t) {
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
              s(i);
            } catch (H) {
              dr(H);
            }
            i.currentTarget = null, s = E;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (g = a[d], E = g.instance, _ = g.currentTarget, g = g.listener, E !== s && i.isPropagationStopped())
              break e;
            s = g, i.currentTarget = _;
            try {
              s(i);
            } catch (H) {
              dr(H);
            }
            i.currentTarget = null, s = E;
          }
      }
    }
  }
  function we(e, t) {
    var n = t[qs];
    n === void 0 && (n = t[qs] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (nh(t, e, 2, !1), n.add(a));
  }
  function _u(e, t, n) {
    var a = 0;
    t && (a |= 4), nh(
      n,
      e,
      a,
      t
    );
  }
  var Jr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ou(e) {
    if (!e[Jr]) {
      e[Jr] = !0, Fc.forEach(function(n) {
        n !== "selectionchange" && (ip.has(n) || _u(n, !1, e), _u(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || (t[Jr] = !0, _u("selectionchange", !1, t));
    }
  }
  function nh(e, t, n, a) {
    switch (jh(t)) {
      case 2:
        var i = Up;
        break;
      case 8:
        i = Mp;
        break;
      default:
        i = Xu;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !$s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function ju(e, t, n, a, i) {
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
            if (d = Xa(g), d === null) return;
            if (E = d.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = s = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    rd(function() {
      var _ = s, H = Zs(n), G = [];
      e: {
        var D = Md.get(e);
        if (D !== void 0) {
          var M = or, J = e;
          switch (e) {
            case "keypress":
              if (rr(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Wg;
              break;
            case "focusin":
              J = "focus", M = Ps;
              break;
            case "focusout":
              J = "blur", M = Ps;
              break;
            case "beforeblur":
            case "afterblur":
              M = Ps;
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
              M = ud;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = qg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ty;
              break;
            case Od:
            case jd:
            case Dd:
              M = Kg;
              break;
            case Ud:
              M = ay;
              break;
            case "scroll":
            case "scrollend":
              M = Bg;
              break;
            case "wheel":
              M = iy;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Xg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = dd;
              break;
            case "toggle":
            case "beforetoggle":
              M = sy;
          }
          var ae = (t & 4) !== 0, Ge = !ae && (e === "scroll" || e === "scrollend"), A = ae ? D !== null ? D + "Capture" : null : D;
          ae = [];
          for (var R = _, C; R !== null; ) {
            var k = R;
            if (C = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || C === null || A === null || (k = Xl(R, A), k != null && ae.push(
              Ri(R, k, C)
            )), Ge) break;
            R = R.return;
          }
          0 < ae.length && (D = new M(
            D,
            J,
            null,
            n,
            H
          ), G.push({ event: D, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (D = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", D && n !== Qs && (J = n.relatedTarget || n.fromElement) && (Xa(J) || J[Va]))
            break e;
          if ((M || D) && (D = H.window === H ? H : (D = H.ownerDocument) ? D.defaultView || D.parentWindow : window, M ? (J = n.relatedTarget || n.toElement, M = _, J = J ? Xa(J) : null, J !== null && (Ge = h(J), ae = J.tag, J !== Ge || ae !== 5 && ae !== 27 && ae !== 6) && (J = null)) : (M = null, J = _), M !== J)) {
            if (ae = ud, k = "onMouseLeave", A = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ae = dd, k = "onPointerLeave", A = "onPointerEnter", R = "pointer"), Ge = M == null ? D : Vl(M), C = J == null ? D : Vl(J), D = new ae(
              k,
              R + "leave",
              M,
              n,
              H
            ), D.target = Ge, D.relatedTarget = C, k = null, Xa(H) === _ && (ae = new ae(
              A,
              R + "enter",
              J,
              n,
              H
            ), ae.target = C, ae.relatedTarget = Ge, k = ae), Ge = k, M && J)
              t: {
                for (ae = rp, A = M, R = J, C = 0, k = A; k; k = ae(k))
                  C++;
                k = 0;
                for (var te = R; te; te = ae(te))
                  k++;
                for (; 0 < C - k; )
                  A = ae(A), C--;
                for (; 0 < k - C; )
                  R = ae(R), k--;
                for (; C--; ) {
                  if (A === R || R !== null && A === R.alternate) {
                    ae = A;
                    break t;
                  }
                  A = ae(A), R = ae(R);
                }
                ae = null;
              }
            else ae = null;
            M !== null && ah(
              G,
              D,
              M,
              ae,
              !1
            ), J !== null && Ge !== null && ah(
              G,
              Ge,
              J,
              ae,
              !0
            );
          }
        }
        e: {
          if (D = _ ? Vl(_) : window, M = D.nodeName && D.nodeName.toLowerCase(), M === "select" || M === "input" && D.type === "file")
            var _e = vd;
          else if (pd(D))
            if (wd)
              _e = py;
            else {
              _e = gy;
              var W = hy;
            }
          else
            M = D.nodeName, !M || M.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? _ && Xs(_.elementType) && (_e = vd) : _e = yy;
          if (_e && (_e = _e(e, _))) {
            bd(
              G,
              _e,
              n,
              H
            );
            break e;
          }
          W && W(e, D, _), e === "focusout" && _ && D.type === "number" && _.memoizedProps.value != null && Vs(D, "number", D.value);
        }
        switch (W = _ ? Vl(_) : window, e) {
          case "focusin":
            (pd(W) || W.contentEditable === "true") && (el = W, io = _, Pl = null);
            break;
          case "focusout":
            Pl = io = el = null;
            break;
          case "mousedown":
            ro = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ro = !1, Cd(G, n, H);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            Cd(G, n, H);
        }
        var ge;
        if (to)
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
          Pa ? gd(e, n) && (xe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (xe = "onCompositionStart");
        xe && (fd && n.locale !== "ko" && (Pa || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Pa && (ge = sd()) : ($n = H, Is = "value" in $n ? $n.value : $n.textContent, Pa = !0)), W = Wr(_, xe), 0 < W.length && (xe = new cd(
          xe,
          e,
          null,
          n,
          H
        ), G.push({ event: xe, listeners: W }), ge ? xe.data = ge : (ge = yd(n), ge !== null && (xe.data = ge)))), (ge = uy ? cy(e, n) : dy(e, n)) && (xe = Wr(_, "onBeforeInput"), 0 < xe.length && (W = new cd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          H
        ), G.push({
          event: W,
          listeners: xe
        }), W.data = ge)), np(
          G,
          e,
          _,
          n,
          H
        );
      }
      th(G, t);
    });
  }
  function Ri(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, s = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || s === null || (i = Xl(e, n), i != null && a.unshift(
        Ri(e, i, s)
      ), i = Xl(e, t), i != null && a.push(
        Ri(e, i, s)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function rp(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ah(e, t, n, a, i) {
    for (var s = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n, E = g.alternate, _ = g.stateNode;
      if (g = g.tag, E !== null && E === a) break;
      g !== 5 && g !== 26 && g !== 27 || _ === null || (E = _, i ? (_ = Xl(n, s), _ != null && d.unshift(
        Ri(n, _, E)
      )) : i || (_ = Xl(n, s), _ != null && d.push(
        Ri(n, _, E)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var sp = /\r\n?/g, op = /\u0000|\uFFFD/g;
  function lh(e) {
    return (typeof e == "string" ? e : "" + e).replace(sp, `
`).replace(op, "");
  }
  function ih(e, t) {
    return t = lh(t), lh(e) === t;
  }
  function qe(e, t, n, a, i, s) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ia(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ia(e, "" + a);
        break;
      case "className":
        nr(e, "class", a);
        break;
      case "tabIndex":
        nr(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nr(e, n, a);
        break;
      case "style":
        ld(e, a, s);
        break;
      case "data":
        if (t !== "object") {
          nr(e, "data", a);
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
        a = lr("" + a), e.setAttribute(n, a);
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
          typeof s == "function" && (n === "formAction" ? (t !== "input" && qe(e, t, "name", i.name, i, null), qe(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), qe(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), qe(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (qe(e, t, "encType", i.encType, i, null), qe(e, t, "method", i.method, i, null), qe(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = lr("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = xn);
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
        n = lr("" + a), e.setAttributeNS(
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
        we("beforetoggle", e), we("toggle", e), tr(e, "popover", a);
        break;
      case "xlinkActuate":
        Sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        tr(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = zg.get(n) || n, tr(e, n, a));
    }
  }
  function Du(e, t, n, a, i, s) {
    switch (n) {
      case "style":
        ld(e, a, s);
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
        typeof a == "string" ? Ia(e, a) : (typeof a == "number" || typeof a == "bigint") && Ia(e, "" + a);
        break;
      case "onScroll":
        a != null && we("scroll", e);
        break;
      case "onScrollEnd":
        a != null && we("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = xn);
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
        if (!$c.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), s = e[St] || null, s = s != null ? s[n] : null, typeof s == "function" && e.removeEventListener(t, s, i), typeof a == "function")) {
              typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : tr(e, n, a);
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
                  qe(e, t, s, d, n, null);
              }
          }
        i && qe(e, t, "srcSet", n.srcSet, n, null), a && qe(e, t, "src", n.src, n, null);
        return;
      case "input":
        we("invalid", e);
        var g = s = d = i = null, E = null, _ = null;
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
                  E = H;
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
                  qe(e, t, a, H, n, null);
              }
          }
        ed(
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
                qe(e, t, i, g, n, null);
            }
        t = s, n = d, e.multiple = !!a, t != null ? $a(e, !!a, t, !1) : n != null && $a(e, !!a, n, !0);
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
                qe(e, t, d, g, n, null);
            }
        nd(e, a, i, s);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : qe(e, t, E, a, n, null));
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
        for (a = 0; a < xi.length; a++)
          we(xi[a], e);
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
                qe(e, t, _, a, n, null);
            }
        return;
      default:
        if (Xs(t)) {
          for (H in n)
            n.hasOwnProperty(H) && (a = n[H], a !== void 0 && Du(
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
      n.hasOwnProperty(g) && (a = n[g], a != null && qe(e, t, g, a, n, null));
  }
  function up(e, t, n, a) {
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
        var i = null, s = null, d = null, g = null, E = null, _ = null, H = null;
        for (M in n) {
          var G = n[M];
          if (n.hasOwnProperty(M) && G != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = G;
              default:
                a.hasOwnProperty(M) || qe(e, t, M, null, a, G);
            }
        }
        for (var D in a) {
          var M = a[D];
          if (G = n[D], a.hasOwnProperty(D) && (M != null || G != null))
            switch (D) {
              case "type":
                s = M;
                break;
              case "name":
                i = M;
                break;
              case "checked":
                _ = M;
                break;
              case "defaultChecked":
                H = M;
                break;
              case "value":
                d = M;
                break;
              case "defaultValue":
                g = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(c(137, t));
                break;
              default:
                M !== G && qe(
                  e,
                  t,
                  D,
                  M,
                  a,
                  G
                );
            }
        }
        Ks(
          e,
          d,
          g,
          E,
          _,
          H,
          s,
          i
        );
        return;
      case "select":
        M = d = g = D = null;
        for (s in n)
          if (E = n[s], n.hasOwnProperty(s) && E != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                M = E;
              default:
                a.hasOwnProperty(s) || qe(
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
                s !== E && qe(
                  e,
                  t,
                  i,
                  s,
                  a,
                  E
                );
            }
        t = g, n = d, a = M, D != null ? $a(e, !!n, D, !1) : !!a != !!n && (t != null ? $a(e, !!n, t, !0) : $a(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = D = null;
        for (g in n)
          if (i = n[g], n.hasOwnProperty(g) && i != null && !a.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(e, t, g, null, a, i);
            }
        for (d in a)
          if (i = a[d], s = n[d], a.hasOwnProperty(d) && (i != null || s != null))
            switch (d) {
              case "value":
                D = i;
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
                i !== s && qe(e, t, d, i, a, s);
            }
        td(e, D, M);
        return;
      case "option":
        for (var J in n)
          D = n[J], n.hasOwnProperty(J) && D != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : qe(
            e,
            t,
            J,
            null,
            a,
            D
          ));
        for (E in a)
          D = a[E], M = n[E], a.hasOwnProperty(E) && D !== M && (D != null || M != null) && (E === "selected" ? e.selected = D && typeof D != "function" && typeof D != "symbol" : qe(
            e,
            t,
            E,
            D,
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
        for (var ae in n)
          D = n[ae], n.hasOwnProperty(ae) && D != null && !a.hasOwnProperty(ae) && qe(e, t, ae, null, a, D);
        for (_ in a)
          if (D = a[_], M = n[_], a.hasOwnProperty(_) && D !== M && (D != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(c(137, t));
                break;
              default:
                qe(
                  e,
                  t,
                  _,
                  D,
                  a,
                  M
                );
            }
        return;
      default:
        if (Xs(t)) {
          for (var Ge in n)
            D = n[Ge], n.hasOwnProperty(Ge) && D !== void 0 && !a.hasOwnProperty(Ge) && Du(
              e,
              t,
              Ge,
              void 0,
              a,
              D
            );
          for (H in a)
            D = a[H], M = n[H], !a.hasOwnProperty(H) || D === M || D === void 0 && M === void 0 || Du(
              e,
              t,
              H,
              D,
              a,
              M
            );
          return;
        }
    }
    for (var A in n)
      D = n[A], n.hasOwnProperty(A) && D != null && !a.hasOwnProperty(A) && qe(e, t, A, null, a, D);
    for (G in a)
      D = a[G], M = n[G], !a.hasOwnProperty(G) || D === M || D == null && M == null || qe(e, t, G, D, a, M);
  }
  function rh(e) {
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
  function cp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], s = i.transferSize, d = i.initiatorType, g = i.duration;
        if (s && g && rh(d)) {
          for (d = 0, g = i.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], _ = E.startTime;
            if (_ > g) break;
            var H = E.transferSize, G = E.initiatorType;
            H && rh(G) && (E = E.responseEnd, d += H * (E < g ? 1 : (g - _) / (E - _)));
          }
          if (--a, t += 8 * (s + d) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Uu = null, Mu = null;
  function Pr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function oh(e, t) {
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
  function Lu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var zu = null;
  function dp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === zu ? !1 : (zu = e, !0) : (zu = null, !1);
  }
  var uh = typeof setTimeout == "function" ? setTimeout : void 0, fp = typeof clearTimeout == "function" ? clearTimeout : void 0, ch = typeof Promise == "function" ? Promise : void 0, mp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ch < "u" ? function(e) {
    return ch.resolve(null).then(e).catch(hp);
  } : uh;
  function hp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function fa(e) {
    return e === "head";
  }
  function dh(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), Al(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Ti(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Ti(n);
          for (var s = n.firstChild; s; ) {
            var d = s.nextSibling, g = s.nodeName;
            s[Kl] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = d;
          }
        } else
          n === "body" && Ti(e.ownerDocument.body);
      n = i;
    } while (n);
    Al(t);
  }
  function fh(e, t) {
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
  function Hu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Hu(n), Gs(n);
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
  function gp(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Kl])
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
      if (e = Wt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function yp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Wt(e.nextSibling), e === null)) return null;
    return e;
  }
  function mh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Wt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ku(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function pp(e, t) {
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
  function Wt(e) {
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
  var qu = null;
  function hh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Wt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function gh(e) {
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
  function yh(e, t, n) {
    switch (t = Pr(n), e) {
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
  function Ti(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Gs(e);
  }
  var Pt = /* @__PURE__ */ new Map(), ph = /* @__PURE__ */ new Set();
  function es(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var kn = Y.d;
  Y.d = {
    f: bp,
    r: vp,
    D: wp,
    C: Ep,
    L: Sp,
    m: xp,
    X: Tp,
    S: Rp,
    M: Np
  };
  function bp() {
    var e = kn.f(), t = Xr();
    return e || t;
  }
  function vp(e) {
    var t = Qa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Mf(t) : kn.r(e);
  }
  var Rl = typeof document > "u" ? null : document;
  function bh(e, t, n) {
    var a = Rl;
    if (a && typeof t == "string" && t) {
      var i = Xt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), ph.has(i) || (ph.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), yt(t, "link", e), ct(t), a.head.appendChild(t)));
    }
  }
  function wp(e) {
    kn.D(e), bh("dns-prefetch", e, null);
  }
  function Ep(e, t) {
    kn.C(e, t), bh("preconnect", e, t);
  }
  function Sp(e, t, n) {
    kn.L(e, t, n);
    var a = Rl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Xt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Xt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Xt(e) + '"]';
      var s = i;
      switch (t) {
        case "style":
          s = Tl(e);
          break;
        case "script":
          s = Nl(e);
      }
      Pt.has(s) || (e = j(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Pt.set(s, e), a.querySelector(i) !== null || t === "style" && a.querySelector(Ni(s)) || t === "script" && a.querySelector(Ai(s)) || (t = a.createElement("link"), yt(t, "link", e), ct(t), a.head.appendChild(t)));
    }
  }
  function xp(e, t) {
    kn.m(e, t);
    var n = Rl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]', s = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Nl(e);
      }
      if (!Pt.has(s) && (e = j({ rel: "modulepreload", href: e }, t), Pt.set(s, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ai(s)))
              return;
        }
        a = n.createElement("link"), yt(a, "link", e), ct(a), n.head.appendChild(a);
      }
    }
  }
  function Rp(e, t, n) {
    kn.S(e, t, n);
    var a = Rl;
    if (a && e) {
      var i = Za(a).hoistableStyles, s = Tl(e);
      t = t || "default";
      var d = i.get(s);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = a.querySelector(
          Ni(s)
        ))
          g.loading = 5;
        else {
          e = j(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Pt.get(s)) && Gu(e, n);
          var E = d = a.createElement("link");
          ct(E), yt(E, "link", e), E._p = new Promise(function(_, H) {
            E.onload = _, E.onerror = H;
          }), E.addEventListener("load", function() {
            g.loading |= 1;
          }), E.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, ts(d, t, a);
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
  function Tp(e, t) {
    kn.X(e, t);
    var n = Rl;
    if (n && e) {
      var a = Za(n).hoistableScripts, i = Nl(e), s = a.get(i);
      s || (s = n.querySelector(Ai(i)), s || (e = j({ src: e, async: !0 }, t), (t = Pt.get(i)) && Yu(e, t), s = n.createElement("script"), ct(s), yt(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function Np(e, t) {
    kn.M(e, t);
    var n = Rl;
    if (n && e) {
      var a = Za(n).hoistableScripts, i = Nl(e), s = a.get(i);
      s || (s = n.querySelector(Ai(i)), s || (e = j({ src: e, async: !0, type: "module" }, t), (t = Pt.get(i)) && Yu(e, t), s = n.createElement("script"), ct(s), yt(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function vh(e, t, n, a) {
    var i = (i = ie.current) ? es(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Tl(n.href), n = Za(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Tl(n.href);
          var s = Za(
            i
          ).hoistableStyles, d = s.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, d), (s = i.querySelector(
            Ni(e)
          )) && !s._p && (d.instance = s, d.state.loading = 5), Pt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Pt.set(e, n), s || Ap(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Nl(n), n = Za(
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
  function Tl(e) {
    return 'href="' + Xt(e) + '"';
  }
  function Ni(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function wh(e) {
    return j({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Ap(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), yt(t, "link", n), ct(t), e.head.appendChild(t));
  }
  function Nl(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function Ai(e) {
    return "script[async]" + e;
  }
  function Eh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Xt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, ct(a), a;
          var i = j({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ct(a), yt(a, "style", i), ts(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = Tl(n.href);
          var s = e.querySelector(
            Ni(i)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, ct(s), s;
          a = wh(n), (i = Pt.get(i)) && Gu(a, i), s = (e.ownerDocument || e).createElement("link"), ct(s);
          var d = s;
          return d._p = new Promise(function(g, E) {
            d.onload = g, d.onerror = E;
          }), yt(s, "link", a), t.state.loading |= 4, ts(s, n.precedence, e), t.instance = s;
        case "script":
          return s = Nl(n.src), (i = e.querySelector(
            Ai(s)
          )) ? (t.instance = i, ct(i), i) : (a = n, (i = Pt.get(s)) && (a = j({}, n), Yu(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), ct(i), yt(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, ts(a, n.precedence, e));
    return t.instance;
  }
  function ts(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, s = i, d = 0; d < a.length; d++) {
      var g = a[d];
      if (g.dataset.precedence === t) s = g;
      else if (s !== i) break;
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Gu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Yu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ns = null;
  function Sh(e, t, n) {
    if (ns === null) {
      var a = /* @__PURE__ */ new Map(), i = ns = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = ns, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var s = n[i];
      if (!(s[Kl] || s[ft] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = s.getAttribute(t) || "";
        d = e + d;
        var g = a.get(d);
        g ? g.push(s) : a.set(d, [s]);
      }
    }
    return a;
  }
  function xh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Cp(e, t, n) {
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
  function Rh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _p(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = Tl(a.href), s = t.querySelector(
          Ni(i)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = as.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, ct(s);
          return;
        }
        s = t.ownerDocument || t, a = wh(a), (i = Pt.get(i)) && Gu(a, i), s = s.createElement("link"), ct(s);
        var d = s;
        d._p = new Promise(function(g, E) {
          d.onload = g, d.onerror = E;
        }), yt(s, "link", a), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = as.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ku = 0;
  function Op(e, t) {
    return e.stylesheets && e.count === 0 && is(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && is(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ku === 0 && (Ku = 62500 * cp());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && is(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        },
        (e.imgBytes > Ku ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function as() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) is(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ls = null;
  function is(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ls = /* @__PURE__ */ new Map(), t.forEach(jp, e), ls = null, as.call(e));
  }
  function jp(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ls.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), ls.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < i.length; s++) {
          var d = i[s];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d);
        }
        a && n.set(null, a);
      }
      i = t.instance, d = i.getAttribute("data-precedence"), s = n.get(d) || a, s === a && n.set(null, i), n.set(d, i), this.count++, a = as.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), s ? s.parentNode.insertBefore(i, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ci = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0
  };
  function Dp(e, t, n, a, i, s, d, g, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hs(0), this.hiddenUpdates = Hs(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = s, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Th(e, t, n, a, i, s, d, g, E, _, H, G) {
    return e = new Dp(
      e,
      t,
      n,
      d,
      E,
      _,
      H,
      G,
      g
    ), t = 1, s === !0 && (t |= 24), s = Lt(3, null, null, t), e.current = s, s.stateNode = e, t = So(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, No(s), e;
  }
  function Nh(e) {
    return e ? (e = al, e) : al;
  }
  function Ah(e, t, n, a, i, s) {
    i = Nh(i), a.context === null ? a.context = i : a.pendingContext = i, a = ta(t), a.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (a.callback = s), n = na(e, a, t), n !== null && (Ct(n, e, t), ri(n, e, t));
  }
  function Ch(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Vu(e, t) {
    Ch(e, t), (e = e.alternate) && Ch(e, t);
  }
  function _h(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Aa(e, 67108864);
      t !== null && Ct(t, e, 67108864), Vu(e, 67108864);
    }
  }
  function Oh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = Bs(t);
      var n = Aa(e, t);
      n !== null && Ct(n, e, t), Vu(e, t);
    }
  }
  var rs = !0;
  function Up(e, t, n, a) {
    var i = z.T;
    z.T = null;
    var s = Y.p;
    try {
      Y.p = 2, Xu(e, t, n, a);
    } finally {
      Y.p = s, z.T = i;
    }
  }
  function Mp(e, t, n, a) {
    var i = z.T;
    z.T = null;
    var s = Y.p;
    try {
      Y.p = 8, Xu(e, t, n, a);
    } finally {
      Y.p = s, z.T = i;
    }
  }
  function Xu(e, t, n, a) {
    if (rs) {
      var i = Qu(a);
      if (i === null)
        ju(
          e,
          t,
          a,
          ss,
          n
        ), Dh(e, a);
      else if (zp(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (Dh(e, a), t & 4 && -1 < Lp.indexOf(e)) {
        for (; i !== null; ) {
          var s = Qa(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var d = Sa(s.pendingLanes);
                  if (d !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var E = 1 << 31 - Ut(d);
                      g.entanglements[1] |= E, d &= ~E;
                    }
                    yn(s), (Ue & 6) === 0 && (Kr = ut() + 500, Si(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = Aa(s, 2), g !== null && Ct(g, s, 2), Xr(), Vu(s, 2);
            }
          if (s = Qu(a), s === null && ju(
            e,
            t,
            a,
            ss,
            n
          ), s === i) break;
          i = s;
        }
        i !== null && a.stopPropagation();
      } else
        ju(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Qu(e) {
    return e = Zs(e), Zu(e);
  }
  var ss = null;
  function Zu(e) {
    if (ss = null, e = Xa(e), e !== null) {
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
    return ss = e, null;
  }
  function jh(e) {
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
        switch (zs()) {
          case Ii:
            return 2;
          case kl:
            return 8;
          case ne:
          case Ee:
            return 32;
          case ln:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fu = !1, ma = null, ha = null, ga = null, _i = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), ya = [], Lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Dh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Oi.delete(t.pointerId);
    }
  }
  function ji(e, t, n, a, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [i]
    }, t !== null && (t = Qa(t), t !== null && _h(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function zp(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ma = ji(
          ma,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return ha = ji(
          ha,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return ga = ji(
          ga,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var s = i.pointerId;
        return _i.set(
          s,
          ji(
            _i.get(s) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return s = i.pointerId, Oi.set(
          s,
          ji(
            Oi.get(s) || null,
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
  function Uh(e) {
    var t = Xa(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Qc(e.priority, function() {
              Oh(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Qc(e.priority, function() {
              Oh(n);
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
  function os(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Qs = a, n.target.dispatchEvent(a), Qs = null;
      } else
        return t = Qa(n), t !== null && _h(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Mh(e, t, n) {
    os(e) && n.delete(t);
  }
  function Hp() {
    Fu = !1, ma !== null && os(ma) && (ma = null), ha !== null && os(ha) && (ha = null), ga !== null && os(ga) && (ga = null), _i.forEach(Mh), Oi.forEach(Mh);
  }
  function us(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fu || (Fu = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Hp
    )));
  }
  var cs = null;
  function Lh(e) {
    cs !== e && (cs = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        cs === e && (cs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Zu(a || n) === null)
              continue;
            break;
          }
          var s = Qa(n);
          s !== null && (e.splice(t, 3), t -= 3, Qo(
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
  function Al(e) {
    function t(E) {
      return us(E, e);
    }
    ma !== null && us(ma, e), ha !== null && us(ha, e), ga !== null && us(ga, e), _i.forEach(t), Oi.forEach(t);
    for (var n = 0; n < ya.length; n++) {
      var a = ya[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ya.length && (n = ya[0], n.blockedOn === null); )
      Uh(n), n.blockedOn === null && ya.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], s = n[a + 1], d = i[St] || null;
        if (typeof s == "function")
          d || Lh(n);
        else if (d) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (i = s, d = s[St] || null)
              g = d.formAction;
            else if (Zu(i) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? n[a + 1] = g : (n.splice(a, 3), a -= 3), Lh(n);
        }
      }
  }
  function zh() {
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
  function $u(e) {
    this._internalRoot = e;
  }
  ds.prototype.render = $u.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = qt();
    Ah(n, a, e, t, null, null);
  }, ds.prototype.unmount = $u.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ah(e.current, 2, null, e, null, null), Xr(), t[Va] = null;
    }
  };
  function ds(e) {
    this._internalRoot = e;
  }
  ds.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ya.length && t !== 0 && t < ya[n].priority; n++) ;
      ya.splice(n, 0, e), n === 0 && Uh(e);
    }
  };
  var Hh = o.version;
  if (Hh !== "19.2.3")
    throw Error(
      c(
        527,
        Hh,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Bp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fs.isDisabled && fs.supportsFiber)
      try {
        ql = fs.inject(
          Bp
        ), Dt = fs;
      } catch {
      }
  }
  return Mi.createRoot = function(e, t) {
    if (!f(e)) throw Error(c(299));
    var n = !1, a = "", i = Vf, s = Xf, d = Qf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Th(
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
      zh
    ), e[Va] = t.current, Ou(e), new $u(t);
  }, Mi.hydrateRoot = function(e, t, n) {
    if (!f(e)) throw Error(c(299));
    var a = !1, i = "", s = Vf, d = Xf, g = Qf, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), t = Th(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      i,
      E,
      s,
      d,
      g,
      zh
    ), t.context = Nh(null), n = t.current, a = qt(), a = Bs(a), i = ta(a), i.callback = null, na(n, i, a), n = a, t.current.lanes = n, Yl(t, n), yn(t), e[Va] = t.current, Ou(e), new ds(t);
  }, Mi.version = "19.2.3", Mi;
}
var e0;
function Ab() {
  if (e0) return nc.exports;
  e0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), nc.exports = Nb(), nc.exports;
}
var Cb = Ab();
function _b(l = {}) {
  const { nonce: r, locale: o, onScriptLoadSuccess: u, onScriptLoadError: c } = l, [f, h] = w.useState(!1), p = w.useRef(u);
  p.current = u;
  const b = w.useRef(c);
  return b.current = c, w.useEffect(() => {
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
const J0 = w.createContext(null);
function Ob({ clientId: l, nonce: r, locale: o, onScriptLoadSuccess: u, onScriptLoadError: c, children: f }) {
  const h = _b({
    nonce: r,
    onScriptLoadSuccess: u,
    onScriptLoadError: c,
    locale: o
  }), p = w.useMemo(() => ({
    locale: o,
    clientId: l,
    scriptLoadedSuccessfully: h
  }), [l, h]);
  return Vp.createElement(J0.Provider, { value: p }, f);
}
function jb() {
  const l = w.useContext(J0);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function Db({ flow: l = "implicit", scope: r = "", onSuccess: o, onError: u, onNonOAuthError: c, overrideScope: f, state: h, ...p }) {
  const { clientId: b, scriptLoadedSuccessfully: y } = jb(), v = w.useRef(), S = w.useRef(o);
  S.current = o;
  const j = w.useRef(u);
  j.current = u;
  const q = w.useRef(c);
  q.current = c, w.useEffect(() => {
    var T, K;
    if (!y)
      return;
    const X = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (K = (T = window?.google) === null || T === void 0 ? void 0 : T.accounts) === null || K === void 0 ? void 0 : K.oauth2[X]({
      client_id: b,
      scope: f ? r : `openid profile email ${r}`,
      callback: ($) => {
        var F, oe;
        if ($.error)
          return (F = j.current) === null || F === void 0 ? void 0 : F.call(j, $);
        (oe = S.current) === null || oe === void 0 || oe.call(S, $);
      },
      error_callback: ($) => {
        var F;
        (F = q.current) === null || F === void 0 || F.call(q, $);
      },
      state: h,
      ...p
    });
    v.current = Q;
  }, [b, y, l, r, h]);
  const N = w.useCallback((T) => {
    var K;
    return (K = v.current) === null || K === void 0 ? void 0 : K.requestAccessToken(T);
  }, []), O = w.useCallback(() => {
    var T;
    return (T = v.current) === null || T === void 0 ? void 0 : T.requestCode();
  }, []);
  return l === "implicit" ? N : O;
}
var le = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(le || {}), tt = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(tt || {}), Ve = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(Ve || {}), tn = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(tn || {}), Dc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(Dc || {}), ba = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(ba || {}), qi = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(qi || {});
const de = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  IAM_AUTHORITY_OVERRIDE: "iam_authority_override",
  THEME_LOADED: "theme_loaded"
}, vt = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token"
}, Bi = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, wa = {
  AUTH: "/api/auth",
  GOOGLE_AUTH: "/api/auth/google",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  FORGOT_USERNAME: "/api/forgot-username",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout"
}, Ll = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, _l = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15,
  MIN_PART_LENGTH_FOR_NAME_CHECK: 2
}, Ol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Gt = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[!@#$%^&*._\-]/,
  ALLOWED_CHARS: /^[A-Za-z0-9!@#$%^&*._\-]+$/,
  NO_SPACES: /\s/,
  NO_TRIPLE: /(.)\1\1/
}, t0 = /[!@#$%^&*._-]/, n0 = /^[A-Za-z0-9!@#$%^&*._-]+$/, bn = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300,
  TOKEN_REFRESH_MAX_AGE_DAYS: 7,
  RESEND_COOLDOWN_SECONDS: 30
}, Ub = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Li = {
  COURSES: "/courses"
}, We = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, qn = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, Mb = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://dev-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Lb = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://dev-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
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
}, Gi = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, Ce = {
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
}, ic = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, rc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, sc = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, hs = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Fe = ({
  label: l,
  onClick: r,
  disabled: o,
  type: u = Ve.BUTTON,
  variant: c = tt.PRIMARY,
  part: f,
  className: h,
  children: p,
  ariaLabel: b,
  mainButtonStyle: y
}) => {
  const v = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-30! disabled:cursor-not-allowed!", S = {
    [tt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [tt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [tt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, j = h ? `identity-widget-button ${v} ${S[c]} ${h}` : `identity-widget-button ${v} ${S[c]}`, q = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...h ? h.split(/\s+/).map((O) => O.trim()).filter((O) => O.startsWith("identity-widget-")) : []
      ].filter(Boolean)
    )
  ).join(" "), N = f || q;
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      className: j,
      onClick: r,
      disabled: o,
      type: u,
      part: N,
      "aria-label": b || (typeof l == "string" ? l : void 0),
      "aria-disabled": o,
      style: { ...y, borderStyle: "solid !important" },
      children: p || l
    }
  );
}, nn = w.forwardRef((l, r) => {
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
  } = l, j = !!f || !!h, q = S.type === "select" || !!y, N = v || `input-${Math.random().toString(36).substr(2, 9)}`, O = `${N}-error`, T = `${N}-helper`;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${b || ""}`,
      children: [
        o && /* @__PURE__ */ m.jsxs(
          "label",
          {
            htmlFor: N,
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
                  id: N,
                  part: "identity-widget-input-select",
                  "aria-label": typeof o == "string" ? o : S["aria-label"],
                  "aria-invalid": j,
                  "aria-describedby": j ? O : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: j ? "#d64545" : "#cbd5d5",
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
                  id: N,
                  part: "identity-widget-input-field",
                  "aria-label": typeof o == "string" ? o : S["aria-label"],
                  "aria-invalid": j,
                  "aria-describedby": j ? O : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: j ? "#d64545" : "#cbd5d5",
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
            id: O,
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
            id: T,
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
}), zb = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", _t = ({
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
            src: zb,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, v = b(), S = () => {
    switch (l) {
      case le.ERROR:
        return ba.ALERT;
      case le.WARNING:
      case le.INFO:
        return ba.STATUS;
      case le.SUCCESS:
        return ba.STATUS;
      default:
        return ba.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: S(),
      "aria-live": l === le.ERROR ? qi.ASSERTIVE : qi.POLITE,
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
}, yc = ({ type: l, message: r, duration: o = 5e3, onClose: u, className: c = "" }) => {
  const [f, h] = w.useState(!1), [p, b] = w.useState(!1);
  w.useEffect(() => {
    setTimeout(() => h(!0), bn.ANIMATION_ENTRANCE_DELAY);
    const N = setTimeout(() => {
      y();
    }, o);
    return () => clearTimeout(N);
  }, [o]);
  const y = () => {
    b(!0), setTimeout(() => {
      h(!1), u && u();
    }, bn.ANIMATION_EXIT_DURATION);
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
  }, j = v(), q = () => {
    switch (l) {
      case le.ERROR:
        return ba.ALERT;
      case le.WARNING:
      case le.INFO:
      case le.SUCCESS:
        return ba.STATUS;
      default:
        return ba.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: q(),
      "aria-live": l === le.ERROR ? qi.ASSERTIVE : qi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${ic.Z_INDEX}]! transition-all! duration-300! ${f && !p ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: ic.MAX_WIDTH, width: ic.WIDTH },
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-toast-body",
          className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${j.bg}`,
          children: [
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-toast-icon",
                className: `identity-widget-toast-icon flex-shrink-0! ${j.icon}`,
                "aria-hidden": "true",
                children: S()
              }
            ),
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-toast-content",
                className: `identity-widget-toast-content ml-3! flex-1! ${j.text}`,
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
                className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${j.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
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
class Hi extends Error {
}
Hi.prototype.name = "InvalidTokenError";
function Hb(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, o) => {
    let u = o.charCodeAt(0).toString(16).toUpperCase();
    return u.length < 2 && (u = "0" + u), "%" + u;
  }));
}
function Bb(l) {
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
    return Hb(r);
  } catch {
    return atob(r);
  }
}
function zl(l, r) {
  if (typeof l != "string")
    throw new Hi("Invalid token specified: must be a string");
  r || (r = {});
  const o = r.header === !0 ? 0 : 1, u = l.split(".")[o];
  if (typeof u != "string")
    throw new Hi(`Invalid token specified: missing part #${o + 1}`);
  let c;
  try {
    c = Bb(u);
  } catch (f) {
    throw new Hi(`Invalid token specified: invalid base64 for part #${o + 1} (${f.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (f) {
    throw new Hi(`Invalid token specified: invalid json for part #${o + 1} (${f.message})`);
  }
}
function W0() {
  const l = window.location.hostname;
  if (l === qn.HOSTNAME || l === qn.IP || qn.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function kb() {
  const l = window.location.hostname;
  return l === qn.HOSTNAME || l === qn.IP || qn.IP_PATTERN.test(l) || l.startsWith(`${We.DEV}.`) || l.startsWith(`${We.DEV}-`) ? tn.DEV : l.startsWith(`${We.TEST}.`) || l.startsWith(`${We.TEST}-`) ? tn.TEST : l.startsWith(`${We.STAGE}.`) || l.startsWith(`${We.STAGE}-`) ? tn.STAGE : tn.PROD;
}
function oc() {
  const l = window.location.href, r = new URL(l), o = r.hostname;
  if (o.startsWith(`${We.DEV}.`)) {
    const u = o.replace(`${We.DEV}.`, `${We.DEV_LEARN}.`);
    return `${r.protocol}//${u}${Li.COURSES}`;
  } else if (o.startsWith(`${We.TEST}.`)) {
    const u = o.replace(`${We.TEST}.`, `${We.TEST_LEARN}.`);
    return `${r.protocol}//${u}${Li.COURSES}`;
  } else if (o.startsWith(`${We.STAGE}.`)) {
    const u = o.replace(`${We.STAGE}.`, `${We.STAGE_LEARN}.`);
    return `${r.protocol}//${u}${Li.COURSES}`;
  } else if (o.split(".").length === 2) {
    const c = `${We.LEARN}.${o}`;
    return `${r.protocol}//${c}${Li.COURSES}`;
  } else
    return `${r.protocol}//${o}${Li.COURSES}`;
}
function jl(l, r, o, u = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + o);
  const f = W0(), h = f ? `; domain=${f}` : "", p = window.location.protocol === "https:" ? "; secure" : "", b = u ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${b}; expires=${c.toUTCString()}; path=/${h}${p}; SameSite=Strict`;
}
function va(l, r = !0) {
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
function a0(l) {
  const r = W0(), o = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${o}`;
}
function P0(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var l0 = {};
const { toString: qb } = Object.prototype, { getPrototypeOf: Uc } = Object, { iterator: _s, toStringTag: eg } = Symbol, Os = /* @__PURE__ */ ((l) => (r) => {
  const o = qb.call(r);
  return l[o] || (l[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), un = (l) => (l = l.toLowerCase(), (r) => Os(r) === l), js = (l) => (r) => typeof r === l, { isArray: Hl } = Array, Dl = js("undefined");
function Xi(l) {
  return l !== null && !Dl(l) && l.constructor !== null && !Dl(l.constructor) && Ot(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const tg = un("ArrayBuffer");
function Gb(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && tg(l.buffer), r;
}
const Yb = js("string"), Ot = js("function"), ng = js("number"), Qi = (l) => l !== null && typeof l == "object", Kb = (l) => l === !0 || l === !1, bs = (l) => {
  if (Os(l) !== "object")
    return !1;
  const r = Uc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(eg in l) && !(_s in l);
}, Vb = (l) => {
  if (!Qi(l) || Xi(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, Xb = un("Date"), Qb = un("File"), Zb = (l) => !!(l && typeof l.uri < "u"), Fb = (l) => l && typeof l.getParts < "u", $b = un("Blob"), Ib = un("FileList"), Jb = (l) => Qi(l) && Ot(l.pipe);
function Wb() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const i0 = Wb(), r0 = typeof i0.FormData < "u" ? i0.FormData : void 0, Pb = (l) => {
  let r;
  return l && (r0 && l instanceof r0 || Ot(l.append) && ((r = Os(l)) === "formdata" || // detect form-data instance
  r === "object" && Ot(l.toString) && l.toString() === "[object FormData]"));
}, ev = un("URLSearchParams"), [tv, nv, av, lv] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(un), iv = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zi(l, r, { allOwnKeys: o = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let u, c;
  if (typeof l != "object" && (l = [l]), Hl(l))
    for (u = 0, c = l.length; u < c; u++)
      r.call(null, l[u], u, l);
  else {
    if (Xi(l))
      return;
    const f = o ? Object.getOwnPropertyNames(l) : Object.keys(l), h = f.length;
    let p;
    for (u = 0; u < h; u++)
      p = f[u], r.call(null, l[p], p, l);
  }
}
function ag(l, r) {
  if (Xi(l))
    return null;
  r = r.toLowerCase();
  const o = Object.keys(l);
  let u = o.length, c;
  for (; u-- > 0; )
    if (c = o[u], r === c.toLowerCase())
      return c;
  return null;
}
const qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, lg = (l) => !Dl(l) && l !== qa;
function pc() {
  const { caseless: l, skipUndefined: r } = lg(this) && this || {}, o = {}, u = (c, f) => {
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return;
    const h = l && ag(o, f) || f;
    bs(o[h]) && bs(c) ? o[h] = pc(o[h], c) : bs(c) ? o[h] = pc({}, c) : Hl(c) ? o[h] = c.slice() : (!r || !Dl(c)) && (o[h] = c);
  };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && Zi(arguments[c], u);
  return o;
}
const rv = (l, r, o, { allOwnKeys: u } = {}) => (Zi(
  r,
  (c, f) => {
    o && Ot(c) ? Object.defineProperty(l, f, {
      value: P0(c, o),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(l, f, {
      value: c,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: u }
), l), sv = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), ov = (l, r, o, u) => {
  l.prototype = Object.create(r.prototype, u), Object.defineProperty(l.prototype, "constructor", {
    value: l,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(l, "super", {
    value: r.prototype
  }), o && Object.assign(l.prototype, o);
}, uv = (l, r, o, u) => {
  let c, f, h;
  const p = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), f = c.length; f-- > 0; )
      h = c[f], (!u || u(h, l, r)) && !p[h] && (r[h] = l[h], p[h] = !0);
    l = o !== !1 && Uc(l);
  } while (l && (!o || o(l, r)) && l !== Object.prototype);
  return r;
}, cv = (l, r, o) => {
  l = String(l), (o === void 0 || o > l.length) && (o = l.length), o -= r.length;
  const u = l.indexOf(r, o);
  return u !== -1 && u === o;
}, dv = (l) => {
  if (!l) return null;
  if (Hl(l)) return l;
  let r = l.length;
  if (!ng(r)) return null;
  const o = new Array(r);
  for (; r-- > 0; )
    o[r] = l[r];
  return o;
}, fv = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && Uc(Uint8Array)), mv = (l, r) => {
  const u = (l && l[_s]).call(l);
  let c;
  for (; (c = u.next()) && !c.done; ) {
    const f = c.value;
    r.call(l, f[0], f[1]);
  }
}, hv = (l, r) => {
  let o;
  const u = [];
  for (; (o = l.exec(r)) !== null; )
    u.push(o);
  return u;
}, gv = un("HTMLFormElement"), yv = (l) => l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(o, u, c) {
  return u.toUpperCase() + c;
}), s0 = (({ hasOwnProperty: l }) => (r, o) => l.call(r, o))(Object.prototype), pv = un("RegExp"), ig = (l, r) => {
  const o = Object.getOwnPropertyDescriptors(l), u = {};
  Zi(o, (c, f) => {
    let h;
    (h = r(c, f, l)) !== !1 && (u[f] = h || c);
  }), Object.defineProperties(l, u);
}, bv = (l) => {
  ig(l, (r, o) => {
    if (Ot(l) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const u = l[o];
    if (Ot(u)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, vv = (l, r) => {
  const o = {}, u = (c) => {
    c.forEach((f) => {
      o[f] = !0;
    });
  };
  return Hl(l) ? u(l) : u(String(l).split(r)), o;
}, wv = () => {
}, Ev = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function Sv(l) {
  return !!(l && Ot(l.append) && l[eg] === "FormData" && l[_s]);
}
const xv = (l) => {
  const r = new Array(10), o = (u, c) => {
    if (Qi(u)) {
      if (r.indexOf(u) >= 0)
        return;
      if (Xi(u))
        return u;
      if (!("toJSON" in u)) {
        r[c] = u;
        const f = Hl(u) ? [] : {};
        return Zi(u, (h, p) => {
          const b = o(h, c + 1);
          !Dl(b) && (f[p] = b);
        }), r[c] = void 0, f;
      }
    }
    return u;
  };
  return o(l, 0);
}, Rv = un("AsyncFunction"), Tv = (l) => l && (Qi(l) || Ot(l)) && Ot(l.then) && Ot(l.catch), rg = ((l, r) => l ? setImmediate : r ? ((o, u) => (qa.addEventListener(
  "message",
  ({ source: c, data: f }) => {
    c === qa && f === o && u.length && u.shift()();
  },
  !1
), (c) => {
  u.push(c), qa.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(typeof setImmediate == "function", Ot(qa.postMessage)), Nv = typeof queueMicrotask < "u" ? queueMicrotask.bind(qa) : typeof l0 < "u" && l0.nextTick || rg, Av = (l) => l != null && Ot(l[_s]), U = {
  isArray: Hl,
  isArrayBuffer: tg,
  isBuffer: Xi,
  isFormData: Pb,
  isArrayBufferView: Gb,
  isString: Yb,
  isNumber: ng,
  isBoolean: Kb,
  isObject: Qi,
  isPlainObject: bs,
  isEmptyObject: Vb,
  isReadableStream: tv,
  isRequest: nv,
  isResponse: av,
  isHeaders: lv,
  isUndefined: Dl,
  isDate: Xb,
  isFile: Qb,
  isReactNativeBlob: Zb,
  isReactNative: Fb,
  isBlob: $b,
  isRegExp: pv,
  isFunction: Ot,
  isStream: Jb,
  isURLSearchParams: ev,
  isTypedArray: fv,
  isFileList: Ib,
  forEach: Zi,
  merge: pc,
  extend: rv,
  trim: iv,
  stripBOM: sv,
  inherits: ov,
  toFlatObject: uv,
  kindOf: Os,
  kindOfTest: un,
  endsWith: cv,
  toArray: dv,
  forEachEntry: mv,
  matchAll: hv,
  isHTMLForm: gv,
  hasOwnProperty: s0,
  hasOwnProp: s0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ig,
  freezeMethods: bv,
  toObjectSet: vv,
  toCamelCase: yv,
  noop: wv,
  toFiniteNumber: Ev,
  findKey: ag,
  global: qa,
  isContextDefined: lg,
  isSpecCompliantForm: Sv,
  toJSONObject: xv,
  isAsyncFn: Rv,
  isThenable: Tv,
  setImmediate: rg,
  asap: Nv,
  isIterable: Av
};
let se = class sg extends Error {
  static from(r, o, u, c, f, h) {
    const p = new sg(r.message, o || r.code, u, c, f);
    return p.cause = r, p.name = r.name, r.status != null && p.status == null && (p.status = r.status), h && Object.assign(p, h), p;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(r, o, u, c, f) {
    super(r), Object.defineProperty(this, "message", {
      value: r,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, o && (this.code = o), u && (this.config = u), c && (this.request = c), f && (this.response = f, this.status = f.status);
  }
  toJSON() {
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
};
se.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
se.ERR_BAD_OPTION = "ERR_BAD_OPTION";
se.ECONNABORTED = "ECONNABORTED";
se.ETIMEDOUT = "ETIMEDOUT";
se.ERR_NETWORK = "ERR_NETWORK";
se.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
se.ERR_DEPRECATED = "ERR_DEPRECATED";
se.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
se.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
se.ERR_CANCELED = "ERR_CANCELED";
se.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
se.ERR_INVALID_URL = "ERR_INVALID_URL";
const Cv = null;
function bc(l) {
  return U.isPlainObject(l) || U.isArray(l);
}
function og(l) {
  return U.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function uc(l, r, o) {
  return l ? l.concat(r).map(function(c, f) {
    return c = og(c), !o && f ? "[" + c + "]" : c;
  }).join(o ? "." : "") : r;
}
function _v(l) {
  return U.isArray(l) && !l.some(bc);
}
const Ov = U.toFlatObject(U, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Ds(l, r, o) {
  if (!U.isObject(l))
    throw new TypeError("target must be an object");
  r = r || new FormData(), o = U.toFlatObject(
    o,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(O, T) {
      return !U.isUndefined(T[O]);
    }
  );
  const u = o.metaTokens, c = o.visitor || v, f = o.dots, h = o.indexes, b = (o.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(r);
  if (!U.isFunction(c))
    throw new TypeError("visitor must be a function");
  function y(N) {
    if (N === null) return "";
    if (U.isDate(N))
      return N.toISOString();
    if (U.isBoolean(N))
      return N.toString();
    if (!b && U.isBlob(N))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(N) || U.isTypedArray(N) ? b && typeof Blob == "function" ? new Blob([N]) : Buffer.from(N) : N;
  }
  function v(N, O, T) {
    let K = N;
    if (U.isReactNative(r) && U.isReactNativeBlob(N))
      return r.append(uc(T, O, f), y(N)), !1;
    if (N && !T && typeof N == "object") {
      if (U.endsWith(O, "{}"))
        O = u ? O : O.slice(0, -2), N = JSON.stringify(N);
      else if (U.isArray(N) && _v(N) || (U.isFileList(N) || U.endsWith(O, "[]")) && (K = U.toArray(N)))
        return O = og(O), K.forEach(function(Q, $) {
          !(U.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? uc([O], $, f) : h === null ? O : O + "[]",
            y(Q)
          );
        }), !1;
    }
    return bc(N) ? !0 : (r.append(uc(T, O, f), y(N)), !1);
  }
  const S = [], j = Object.assign(Ov, {
    defaultVisitor: v,
    convertValue: y,
    isVisitable: bc
  });
  function q(N, O) {
    if (!U.isUndefined(N)) {
      if (S.indexOf(N) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      S.push(N), U.forEach(N, function(K, X) {
        (!(U.isUndefined(K) || K === null) && c.call(r, K, U.isString(X) ? X.trim() : X, O, j)) === !0 && q(K, O ? O.concat(X) : [X]);
      }), S.pop();
    }
  }
  if (!U.isObject(l))
    throw new TypeError("data must be an object");
  return q(l), r;
}
function o0(l) {
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
function Mc(l, r) {
  this._pairs = [], l && Ds(l, this, r);
}
const ug = Mc.prototype;
ug.append = function(r, o) {
  this._pairs.push([r, o]);
};
ug.toString = function(r) {
  const o = r ? function(u) {
    return r.call(this, u, o0);
  } : o0;
  return this._pairs.map(function(c) {
    return o(c[0]) + "=" + o(c[1]);
  }, "").join("&");
};
function jv(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function cg(l, r, o) {
  if (!r)
    return l;
  const u = o && o.encode || jv, c = U.isFunction(o) ? {
    serialize: o
  } : o, f = c && c.serialize;
  let h;
  if (f ? h = f(r, c) : h = U.isURLSearchParams(r) ? r.toString() : new Mc(r, c).toString(u), h) {
    const p = l.indexOf("#");
    p !== -1 && (l = l.slice(0, p)), l += (l.indexOf("?") === -1 ? "?" : "&") + h;
  }
  return l;
}
class u0 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
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
    U.forEach(this.handlers, function(u) {
      u !== null && r(u);
    });
  }
}
const Lc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Dv = typeof URLSearchParams < "u" ? URLSearchParams : Mc, Uv = typeof FormData < "u" ? FormData : null, Mv = typeof Blob < "u" ? Blob : null, Lv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dv,
    FormData: Uv,
    Blob: Mv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, zc = typeof window < "u" && typeof document < "u", vc = typeof navigator == "object" && navigator || void 0, zv = zc && (!vc || ["ReactNative", "NativeScript", "NS"].indexOf(vc.product) < 0), Hv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bv = zc && window.location.href || "http://localhost", kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: zc,
  hasStandardBrowserEnv: zv,
  hasStandardBrowserWebWorkerEnv: Hv,
  navigator: vc,
  origin: Bv
}, Symbol.toStringTag, { value: "Module" })), bt = {
  ...kv,
  ...Lv
};
function qv(l, r) {
  return Ds(l, new bt.classes.URLSearchParams(), {
    visitor: function(o, u, c, f) {
      return bt.isNode && U.isBuffer(o) ? (this.append(u, o.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Gv(l) {
  return U.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Yv(l) {
  const r = {}, o = Object.keys(l);
  let u;
  const c = o.length;
  let f;
  for (u = 0; u < c; u++)
    f = o[u], r[f] = l[f];
  return r;
}
function dg(l) {
  function r(o, u, c, f) {
    let h = o[f++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), b = f >= o.length;
    return h = !h && U.isArray(c) ? c.length : h, b ? (U.hasOwnProp(c, h) ? c[h] = [c[h], u] : c[h] = u, !p) : ((!c[h] || !U.isObject(c[h])) && (c[h] = []), r(o, u, c[h], f) && U.isArray(c[h]) && (c[h] = Yv(c[h])), !p);
  }
  if (U.isFormData(l) && U.isFunction(l.entries)) {
    const o = {};
    return U.forEachEntry(l, (u, c) => {
      r(Gv(u), c, o, 0);
    }), o;
  }
  return null;
}
function Kv(l, r, o) {
  if (U.isString(l))
    try {
      return (r || JSON.parse)(l), U.trim(l);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (o || JSON.stringify)(l);
}
const Fi = {
  transitional: Lc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(r, o) {
      const u = o.getContentType() || "", c = u.indexOf("application/json") > -1, f = U.isObject(r);
      if (f && U.isHTMLForm(r) && (r = new FormData(r)), U.isFormData(r))
        return c ? JSON.stringify(dg(r)) : r;
      if (U.isArrayBuffer(r) || U.isBuffer(r) || U.isStream(r) || U.isFile(r) || U.isBlob(r) || U.isReadableStream(r))
        return r;
      if (U.isArrayBufferView(r))
        return r.buffer;
      if (U.isURLSearchParams(r))
        return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
      let p;
      if (f) {
        if (u.indexOf("application/x-www-form-urlencoded") > -1)
          return qv(r, this.formSerializer).toString();
        if ((p = U.isFileList(r)) || u.indexOf("multipart/form-data") > -1) {
          const b = this.env && this.env.FormData;
          return Ds(
            p ? { "files[]": r } : r,
            b && new b(),
            this.formSerializer
          );
        }
      }
      return f || c ? (o.setContentType("application/json", !1), Kv(r)) : r;
    }
  ],
  transformResponse: [
    function(r) {
      const o = this.transitional || Fi.transitional, u = o && o.forcedJSONParsing, c = this.responseType === "json";
      if (U.isResponse(r) || U.isReadableStream(r))
        return r;
      if (r && U.isString(r) && (u && !this.responseType || c)) {
        const h = !(o && o.silentJSONParsing) && c;
        try {
          return JSON.parse(r, this.parseReviver);
        } catch (p) {
          if (h)
            throw p.name === "SyntaxError" ? se.from(p, se.ERR_BAD_RESPONSE, this, null, this.response) : p;
        }
      }
      return r;
    }
  ],
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
    FormData: bt.classes.FormData,
    Blob: bt.classes.Blob
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
  Fi.headers[l] = {};
});
const Vv = U.toObjectSet([
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
]), Xv = (l) => {
  const r = {};
  let o, u, c;
  return l && l.split(`
`).forEach(function(h) {
    c = h.indexOf(":"), o = h.substring(0, c).trim().toLowerCase(), u = h.substring(c + 1).trim(), !(!o || r[o] && Vv[o]) && (o === "set-cookie" ? r[o] ? r[o].push(u) : r[o] = [u] : r[o] = r[o] ? r[o] + ", " + u : u);
  }), r;
}, c0 = /* @__PURE__ */ Symbol("internals");
function zi(l) {
  return l && String(l).trim().toLowerCase();
}
function vs(l) {
  return l === !1 || l == null ? l : U.isArray(l) ? l.map(vs) : String(l).replace(/[\r\n]+$/, "");
}
function Qv(l) {
  const r = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = o.exec(l); )
    r[u[1]] = u[2];
  return r;
}
const Zv = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function cc(l, r, o, u, c) {
  if (U.isFunction(u))
    return u.call(this, r, o);
  if (c && (r = o), !!U.isString(r)) {
    if (U.isString(u))
      return r.indexOf(u) !== -1;
    if (U.isRegExp(u))
      return u.test(r);
  }
}
function Fv(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, o, u) => o.toUpperCase() + u);
}
function $v(l, r) {
  const o = U.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(l, u + o, {
      value: function(c, f, h) {
        return this[u].call(this, r, c, f, h);
      },
      configurable: !0
    });
  });
}
let jt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, o, u) {
    const c = this;
    function f(p, b, y) {
      const v = zi(b);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const S = U.findKey(c, v);
      (!S || c[S] === void 0 || y === !0 || y === void 0 && c[S] !== !1) && (c[S || b] = vs(p));
    }
    const h = (p, b) => U.forEach(p, (y, v) => f(y, v, b));
    if (U.isPlainObject(r) || r instanceof this.constructor)
      h(r, o);
    else if (U.isString(r) && (r = r.trim()) && !Zv(r))
      h(Xv(r), o);
    else if (U.isObject(r) && U.isIterable(r)) {
      let p = {}, b, y;
      for (const v of r) {
        if (!U.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = v[0]] = (b = p[y]) ? U.isArray(b) ? [...b, v[1]] : [b, v[1]] : v[1];
      }
      h(p, o);
    } else
      r != null && f(o, r, u);
    return this;
  }
  get(r, o) {
    if (r = zi(r), r) {
      const u = U.findKey(this, r);
      if (u) {
        const c = this[u];
        if (!o)
          return c;
        if (o === !0)
          return Qv(c);
        if (U.isFunction(o))
          return o.call(this, c, u);
        if (U.isRegExp(o))
          return o.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, o) {
    if (r = zi(r), r) {
      const u = U.findKey(this, r);
      return !!(u && this[u] !== void 0 && (!o || cc(this, this[u], u, o)));
    }
    return !1;
  }
  delete(r, o) {
    const u = this;
    let c = !1;
    function f(h) {
      if (h = zi(h), h) {
        const p = U.findKey(u, h);
        p && (!o || cc(u, u[p], p, o)) && (delete u[p], c = !0);
      }
    }
    return U.isArray(r) ? r.forEach(f) : f(r), c;
  }
  clear(r) {
    const o = Object.keys(this);
    let u = o.length, c = !1;
    for (; u--; ) {
      const f = o[u];
      (!r || cc(this, this[f], f, r, !0)) && (delete this[f], c = !0);
    }
    return c;
  }
  normalize(r) {
    const o = this, u = {};
    return U.forEach(this, (c, f) => {
      const h = U.findKey(u, f);
      if (h) {
        o[h] = vs(c), delete o[f];
        return;
      }
      const p = r ? Fv(f) : String(f).trim();
      p !== f && delete o[f], o[p] = vs(c), u[p] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const o = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (u, c) => {
      u != null && u !== !1 && (o[c] = r && U.isArray(u) ? u.join(", ") : u);
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
    const u = (this[c0] = this[c0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function f(h) {
      const p = zi(h);
      u[p] || ($v(c, h), u[p] = !0);
    }
    return U.isArray(r) ? r.forEach(f) : f(r), this;
  }
};
jt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
U.reduceDescriptors(jt.prototype, ({ value: l }, r) => {
  let o = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(u) {
      this[o] = u;
    }
  };
});
U.freezeMethods(jt);
function dc(l, r) {
  const o = this || Fi, u = r || o, c = jt.from(u.headers);
  let f = u.data;
  return U.forEach(l, function(p) {
    f = p.call(o, f, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), f;
}
function fg(l) {
  return !!(l && l.__CANCEL__);
}
let $i = class extends se {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(r, o, u) {
    super(r ?? "canceled", se.ERR_CANCELED, o, u), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function mg(l, r, o) {
  const u = o.config.validateStatus;
  !o.status || !u || u(o.status) ? l(o) : r(
    new se(
      "Request failed with status code " + o.status,
      [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
      o.config,
      o.request,
      o
    )
  );
}
function Iv(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function Jv(l, r) {
  l = l || 10;
  const o = new Array(l), u = new Array(l);
  let c = 0, f = 0, h;
  return r = r !== void 0 ? r : 1e3, function(b) {
    const y = Date.now(), v = u[f];
    h || (h = y), o[c] = b, u[c] = y;
    let S = f, j = 0;
    for (; S !== c; )
      j += o[S++], S = S % l;
    if (c = (c + 1) % l, c === f && (f = (f + 1) % l), y - h < r)
      return;
    const q = v && y - v;
    return q ? Math.round(j * 1e3 / q) : void 0;
  };
}
function Wv(l, r) {
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
const Rs = (l, r, o = 3) => {
  let u = 0;
  const c = Jv(50, 250);
  return Wv((f) => {
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
}, d0 = (l, r) => {
  const o = l != null;
  return [
    (u) => r[0]({
      lengthComputable: o,
      total: l,
      loaded: u
    }),
    r[1]
  ];
}, f0 = (l) => (...r) => U.asap(() => l(...r)), Pv = bt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (o) => (o = new URL(o, bt.origin), l.protocol === o.protocol && l.host === o.host && (r || l.port === o.port)))(
  new URL(bt.origin),
  bt.navigator && /(msie|trident)/i.test(bt.navigator.userAgent)
) : () => !0, ew = bt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, r, o, u, c, f, h) {
      if (typeof document > "u") return;
      const p = [`${l}=${encodeURIComponent(r)}`];
      U.isNumber(o) && p.push(`expires=${new Date(o).toUTCString()}`), U.isString(u) && p.push(`path=${u}`), U.isString(c) && p.push(`domain=${c}`), f === !0 && p.push("secure"), U.isString(h) && p.push(`SameSite=${h}`), document.cookie = p.join("; ");
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
function tw(l) {
  return typeof l != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function nw(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function hg(l, r, o) {
  let u = !tw(r);
  return l && (u || o == !1) ? nw(l, r) : r;
}
const m0 = (l) => l instanceof jt ? { ...l } : l;
function Ya(l, r) {
  r = r || {};
  const o = {};
  function u(y, v, S, j) {
    return U.isPlainObject(y) && U.isPlainObject(v) ? U.merge.call({ caseless: j }, y, v) : U.isPlainObject(v) ? U.merge({}, v) : U.isArray(v) ? v.slice() : v;
  }
  function c(y, v, S, j) {
    if (U.isUndefined(v)) {
      if (!U.isUndefined(y))
        return u(void 0, y, S, j);
    } else return u(y, v, S, j);
  }
  function f(y, v) {
    if (!U.isUndefined(v))
      return u(void 0, v);
  }
  function h(y, v) {
    if (U.isUndefined(v)) {
      if (!U.isUndefined(y))
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
    headers: (y, v, S) => c(m0(y), m0(v), S, !0)
  };
  return U.forEach(Object.keys({ ...l, ...r }), function(v) {
    if (v === "__proto__" || v === "constructor" || v === "prototype") return;
    const S = U.hasOwnProp(b, v) ? b[v] : c, j = S(l[v], r[v], v);
    U.isUndefined(j) && S !== p || (o[v] = j);
  }), o;
}
const gg = (l) => {
  const r = Ya({}, l);
  let { data: o, withXSRFToken: u, xsrfHeaderName: c, xsrfCookieName: f, headers: h, auth: p } = r;
  if (r.headers = h = jt.from(h), r.url = cg(
    hg(r.baseURL, r.url, r.allowAbsoluteUrls),
    l.params,
    l.paramsSerializer
  ), p && h.set(
    "Authorization",
    "Basic " + btoa(
      (p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : "")
    )
  ), U.isFormData(o)) {
    if (bt.hasStandardBrowserEnv || bt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (U.isFunction(o.getHeaders)) {
      const b = o.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(b).forEach(([v, S]) => {
        y.includes(v.toLowerCase()) && h.set(v, S);
      });
    }
  }
  if (bt.hasStandardBrowserEnv && (u && U.isFunction(u) && (u = u(r)), u || u !== !1 && Pv(r.url))) {
    const b = c && f && ew.read(f);
    b && h.set(c, b);
  }
  return r;
}, aw = typeof XMLHttpRequest < "u", lw = aw && function(l) {
  return new Promise(function(o, u) {
    const c = gg(l);
    let f = c.data;
    const h = jt.from(c.headers).normalize();
    let { responseType: p, onUploadProgress: b, onDownloadProgress: y } = c, v, S, j, q, N;
    function O() {
      q && q(), N && N(), c.cancelToken && c.cancelToken.unsubscribe(v), c.signal && c.signal.removeEventListener("abort", v);
    }
    let T = new XMLHttpRequest();
    T.open(c.method.toUpperCase(), c.url, !0), T.timeout = c.timeout;
    function K() {
      if (!T)
        return;
      const Q = jt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), F = {
        data: !p || p === "text" || p === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: Q,
        config: l,
        request: T
      };
      mg(
        function(ee) {
          o(ee), O();
        },
        function(ee) {
          u(ee), O();
        },
        F
      ), T = null;
    }
    "onloadend" in T ? T.onloadend = K : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout(K);
    }, T.onabort = function() {
      T && (u(new se("Request aborted", se.ECONNABORTED, l, T)), T = null);
    }, T.onerror = function($) {
      const F = $ && $.message ? $.message : "Network Error", oe = new se(F, se.ERR_NETWORK, l, T);
      oe.event = $ || null, u(oe), T = null;
    }, T.ontimeout = function() {
      let $ = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const F = c.transitional || Lc;
      c.timeoutErrorMessage && ($ = c.timeoutErrorMessage), u(
        new se(
          $,
          F.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
          l,
          T
        )
      ), T = null;
    }, f === void 0 && h.setContentType(null), "setRequestHeader" in T && U.forEach(h.toJSON(), function($, F) {
      T.setRequestHeader(F, $);
    }), U.isUndefined(c.withCredentials) || (T.withCredentials = !!c.withCredentials), p && p !== "json" && (T.responseType = c.responseType), y && ([j, N] = Rs(y, !0), T.addEventListener("progress", j)), b && T.upload && ([S, q] = Rs(b), T.upload.addEventListener("progress", S), T.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (v = (Q) => {
      T && (u(!Q || Q.type ? new $i(null, l, T) : Q), T.abort(), T = null);
    }, c.cancelToken && c.cancelToken.subscribe(v), c.signal && (c.signal.aborted ? v() : c.signal.addEventListener("abort", v)));
    const X = Iv(c.url);
    if (X && bt.protocols.indexOf(X) === -1) {
      u(
        new se(
          "Unsupported protocol " + X + ":",
          se.ERR_BAD_REQUEST,
          l
        )
      );
      return;
    }
    T.send(f || null);
  });
}, iw = (l, r) => {
  const { length: o } = l = l ? l.filter(Boolean) : [];
  if (r || o) {
    let u = new AbortController(), c;
    const f = function(y) {
      if (!c) {
        c = !0, p();
        const v = y instanceof Error ? y : this.reason;
        u.abort(
          v instanceof se ? v : new $i(v instanceof Error ? v.message : v)
        );
      }
    };
    let h = r && setTimeout(() => {
      h = null, f(new se(`timeout of ${r}ms exceeded`, se.ETIMEDOUT));
    }, r);
    const p = () => {
      l && (h && clearTimeout(h), h = null, l.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(f) : y.removeEventListener("abort", f);
      }), l = null);
    };
    l.forEach((y) => y.addEventListener("abort", f));
    const { signal: b } = u;
    return b.unsubscribe = () => U.asap(p), b;
  }
}, rw = function* (l, r) {
  let o = l.byteLength;
  if (o < r) {
    yield l;
    return;
  }
  let u = 0, c;
  for (; u < o; )
    c = u + r, yield l.slice(u, c), u = c;
}, sw = async function* (l, r) {
  for await (const o of ow(l))
    yield* rw(o, r);
}, ow = async function* (l) {
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
}, h0 = (l, r, o, u) => {
  const c = sw(l, r);
  let f = 0, h, p = (b) => {
    h || (h = !0, u && u(b));
  };
  return new ReadableStream(
    {
      async pull(b) {
        try {
          const { done: y, value: v } = await c.next();
          if (y) {
            p(), b.close();
            return;
          }
          let S = v.byteLength;
          if (o) {
            let j = f += S;
            o(j);
          }
          b.enqueue(new Uint8Array(v));
        } catch (y) {
          throw p(y), y;
        }
      },
      cancel(b) {
        return p(b), c.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, g0 = 64 * 1024, { isFunction: gs } = U, uw = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(U.global), { ReadableStream: y0, TextEncoder: p0 } = U.global, b0 = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, cw = (l) => {
  l = U.merge.call(
    {
      skipUndefined: !0
    },
    uw,
    l
  );
  const { fetch: r, Request: o, Response: u } = l, c = r ? gs(r) : typeof fetch == "function", f = gs(o), h = gs(u);
  if (!c)
    return !1;
  const p = c && gs(y0), b = c && (typeof p0 == "function" ? /* @__PURE__ */ ((N) => (O) => N.encode(O))(new p0()) : async (N) => new Uint8Array(await new o(N).arrayBuffer())), y = f && p && b0(() => {
    let N = !1;
    const O = new y0(), T = new o(bt.origin, {
      body: O,
      method: "POST",
      get duplex() {
        return N = !0, "half";
      }
    }).headers.has("Content-Type");
    return O.cancel(), N && !T;
  }), v = h && p && b0(() => U.isReadableStream(new u("").body)), S = {
    stream: v && ((N) => N.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((N) => {
    !S[N] && (S[N] = (O, T) => {
      let K = O && O[N];
      if (K)
        return K.call(O);
      throw new se(
        `Response type '${N}' is not supported`,
        se.ERR_NOT_SUPPORT,
        T
      );
    });
  });
  const j = async (N) => {
    if (N == null)
      return 0;
    if (U.isBlob(N))
      return N.size;
    if (U.isSpecCompliantForm(N))
      return (await new o(bt.origin, {
        method: "POST",
        body: N
      }).arrayBuffer()).byteLength;
    if (U.isArrayBufferView(N) || U.isArrayBuffer(N))
      return N.byteLength;
    if (U.isURLSearchParams(N) && (N = N + ""), U.isString(N))
      return (await b(N)).byteLength;
  }, q = async (N, O) => {
    const T = U.toFiniteNumber(N.getContentLength());
    return T ?? j(O);
  };
  return async (N) => {
    let {
      url: O,
      method: T,
      data: K,
      signal: X,
      cancelToken: Q,
      timeout: $,
      onDownloadProgress: F,
      onUploadProgress: oe,
      responseType: ee,
      headers: I,
      withCredentials: ue = "same-origin",
      fetchOptions: be
    } = gg(N), Ke = r || fetch;
    ee = ee ? (ee + "").toLowerCase() : "text";
    let ye = iw(
      [X, Q && Q.toAbortSignal()],
      $
    ), je = null;
    const ze = ye && ye.unsubscribe && (() => {
      ye.unsubscribe();
    });
    let Ae;
    try {
      if (oe && y && T !== "get" && T !== "head" && (Ae = await q(I, K)) !== 0) {
        let Re = new o(O, {
          method: "POST",
          body: K,
          duplex: "half"
        }), x;
        if (U.isFormData(K) && (x = Re.headers.get("content-type")) && I.setContentType(x), Re.body) {
          const [B, V] = d0(
            Ae,
            Rs(f0(oe))
          );
          K = h0(Re.body, g0, B, V);
        }
      }
      U.isString(ue) || (ue = ue ? "include" : "omit");
      const L = f && "credentials" in o.prototype, z = {
        ...be,
        signal: ye,
        method: T.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: K,
        duplex: "half",
        credentials: L ? ue : void 0
      };
      je = f && new o(O, z);
      let Y = await (f ? Ke(je, be) : Ke(O, z));
      const fe = v && (ee === "stream" || ee === "response");
      if (v && (F || fe && ze)) {
        const Re = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Re[Z] = Y[Z];
        });
        const x = U.toFiniteNumber(Y.headers.get("content-length")), [B, V] = F && d0(
          x,
          Rs(f0(F), !0)
        ) || [];
        Y = new u(
          h0(Y.body, g0, B, () => {
            V && V(), ze && ze();
          }),
          Re
        );
      }
      ee = ee || "text";
      let Ne = await S[U.findKey(S, ee) || "text"](
        Y,
        N
      );
      return !fe && ze && ze(), await new Promise((Re, x) => {
        mg(Re, x, {
          data: Ne,
          headers: jt.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: N,
          request: je
        });
      });
    } catch (L) {
      throw ze && ze(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
        new se(
          "Network Error",
          se.ERR_NETWORK,
          N,
          je,
          L && L.response
        ),
        {
          cause: L.cause || L
        }
      ) : se.from(L, L && L.code, N, je, L && L.response);
    }
  };
}, dw = /* @__PURE__ */ new Map(), yg = (l) => {
  let r = l && l.env || {};
  const { fetch: o, Request: u, Response: c } = r, f = [u, c, o];
  let h = f.length, p = h, b, y, v = dw;
  for (; p--; )
    b = f[p], y = v.get(b), y === void 0 && v.set(b, y = p ? /* @__PURE__ */ new Map() : cw(r)), v = y;
  return y;
};
yg();
const Hc = {
  http: Cv,
  xhr: lw,
  fetch: {
    get: yg
  }
};
U.forEach(Hc, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const v0 = (l) => `- ${l}`, fw = (l) => U.isFunction(l) || l === null || l === !1;
function mw(l, r) {
  l = U.isArray(l) ? l : [l];
  const { length: o } = l;
  let u, c;
  const f = {};
  for (let h = 0; h < o; h++) {
    u = l[h];
    let p;
    if (c = u, !fw(u) && (c = Hc[(p = String(u)).toLowerCase()], c === void 0))
      throw new se(`Unknown adapter '${p}'`);
    if (c && (U.isFunction(c) || (c = c.get(r))))
      break;
    f[p || "#" + h] = c;
  }
  if (!c) {
    const h = Object.entries(f).map(
      ([b, y]) => `adapter ${b} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = o ? h.length > 1 ? `since :
` + h.map(v0).join(`
`) : " " + v0(h[0]) : "as no adapter specified";
    throw new se(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const pg = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: mw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Hc
};
function fc(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new $i(null, l);
}
function w0(l) {
  return fc(l), l.headers = jt.from(l.headers), l.data = dc.call(l, l.transformRequest), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), pg.getAdapter(l.adapter || Fi.adapter, l)(l).then(
    function(u) {
      return fc(l), u.data = dc.call(l, l.transformResponse, u), u.headers = jt.from(u.headers), u;
    },
    function(u) {
      return fg(u) || (fc(l), u && u.response && (u.response.data = dc.call(
        l,
        l.transformResponse,
        u.response
      ), u.response.headers = jt.from(u.response.headers))), Promise.reject(u);
    }
  );
}
const bg = "1.14.0", Us = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  Us[l] = function(u) {
    return typeof u === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const E0 = {};
Us.transitional = function(r, o, u) {
  function c(f, h) {
    return "[Axios v" + bg + "] Transitional option '" + f + "'" + h + (u ? ". " + u : "");
  }
  return (f, h, p) => {
    if (r === !1)
      throw new se(
        c(h, " has been removed" + (o ? " in " + o : "")),
        se.ERR_DEPRECATED
      );
    return o && !E0[h] && (E0[h] = !0, console.warn(
      c(
        h,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(f, h, p) : !0;
  };
};
Us.spelling = function(r) {
  return (o, u) => (console.warn(`${u} is likely a misspelling of ${r}`), !0);
};
function hw(l, r, o) {
  if (typeof l != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(l);
  let c = u.length;
  for (; c-- > 0; ) {
    const f = u[c], h = r[f];
    if (h) {
      const p = l[f], b = p === void 0 || h(p, f, l);
      if (b !== !0)
        throw new se(
          "option " + f + " must be " + b,
          se.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (o !== !0)
      throw new se("Unknown option " + f, se.ERR_BAD_OPTION);
  }
}
const ws = {
  assertOptions: hw,
  validators: Us
}, en = ws.validators;
let Ga = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new u0(),
      response: new u0()
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
    typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = Ya(this.defaults, o);
    const { transitional: u, paramsSerializer: c, headers: f } = o;
    u !== void 0 && ws.assertOptions(
      u,
      {
        silentJSONParsing: en.transitional(en.boolean),
        forcedJSONParsing: en.transitional(en.boolean),
        clarifyTimeoutError: en.transitional(en.boolean),
        legacyInterceptorReqResOrdering: en.transitional(en.boolean)
      },
      !1
    ), c != null && (U.isFunction(c) ? o.paramsSerializer = {
      serialize: c
    } : ws.assertOptions(
      c,
      {
        encode: en.function,
        serialize: en.function
      },
      !0
    )), o.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : o.allowAbsoluteUrls = !0), ws.assertOptions(
      o,
      {
        baseUrl: en.spelling("baseURL"),
        withXsrfToken: en.spelling("withXSRFToken")
      },
      !0
    ), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let h = f && U.merge(f.common, f[o.method]);
    f && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (N) => {
      delete f[N];
    }), o.headers = jt.concat(h, f);
    const p = [];
    let b = !0;
    this.interceptors.request.forEach(function(O) {
      if (typeof O.runWhen == "function" && O.runWhen(o) === !1)
        return;
      b = b && O.synchronous;
      const T = o.transitional || Lc;
      T && T.legacyInterceptorReqResOrdering ? p.unshift(O.fulfilled, O.rejected) : p.push(O.fulfilled, O.rejected);
    });
    const y = [];
    this.interceptors.response.forEach(function(O) {
      y.push(O.fulfilled, O.rejected);
    });
    let v, S = 0, j;
    if (!b) {
      const N = [w0.bind(this), void 0];
      for (N.unshift(...p), N.push(...y), j = N.length, v = Promise.resolve(o); S < j; )
        v = v.then(N[S++], N[S++]);
      return v;
    }
    j = p.length;
    let q = o;
    for (; S < j; ) {
      const N = p[S++], O = p[S++];
      try {
        q = N(q);
      } catch (T) {
        O.call(this, T);
        break;
      }
    }
    try {
      v = w0.call(this, q);
    } catch (N) {
      return Promise.reject(N);
    }
    for (S = 0, j = y.length; S < j; )
      v = v.then(y[S++], y[S++]);
    return v;
  }
  getUri(r) {
    r = Ya(this.defaults, r);
    const o = hg(r.baseURL, r.url, r.allowAbsoluteUrls);
    return cg(o, r.params, r.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(r) {
  Ga.prototype[r] = function(o, u) {
    return this.request(
      Ya(u || {}, {
        method: r,
        url: o,
        data: (u || {}).data
      })
    );
  };
});
U.forEach(["post", "put", "patch"], function(r) {
  function o(u) {
    return function(f, h, p) {
      return this.request(
        Ya(p || {}, {
          method: r,
          headers: u ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: f,
          data: h
        })
      );
    };
  }
  Ga.prototype[r] = o(), Ga.prototype[r + "Form"] = o(!0);
});
let gw = class vg {
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
      u.reason || (u.reason = new $i(f, h, p), o(u.reason));
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
      token: new vg(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function yw(l) {
  return function(o) {
    return l.apply(null, o);
  };
}
function pw(l) {
  return U.isObject(l) && l.isAxiosError === !0;
}
const wc = {
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
Object.entries(wc).forEach(([l, r]) => {
  wc[r] = l;
});
function wg(l) {
  const r = new Ga(l), o = P0(Ga.prototype.request, r);
  return U.extend(o, Ga.prototype, r, { allOwnKeys: !0 }), U.extend(o, r, null, { allOwnKeys: !0 }), o.create = function(c) {
    return wg(Ya(l, c));
  }, o;
}
const Le = wg(Fi);
Le.Axios = Ga;
Le.CanceledError = $i;
Le.CancelToken = gw;
Le.isCancel = fg;
Le.VERSION = bg;
Le.toFormData = Ds;
Le.AxiosError = se;
Le.Cancel = Le.CanceledError;
Le.all = function(r) {
  return Promise.all(r);
};
Le.spread = yw;
Le.isAxiosError = pw;
Le.mergeConfig = Ya;
Le.AxiosHeaders = jt;
Le.formToJSON = (l) => dg(U.isHTMLForm(l) ? new FormData(l) : l);
Le.getAdapter = pg.getAdapter;
Le.HttpStatusCode = wc;
Le.default = Le;
const {
  Axios: eE,
  AxiosError: tE,
  CanceledError: nE,
  isCancel: aE,
  CancelToken: lE,
  VERSION: iE,
  all: rE,
  Cancel: sE,
  isAxiosError: oE,
  spread: uE,
  toFormData: cE,
  AxiosHeaders: dE,
  HttpStatusCode: fE,
  formToJSON: mE,
  getAdapter: hE,
  mergeConfig: gE
} = Le, bw = [
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
], Eg = "WEBCOMPONENT";
function vw(l) {
  l ? localStorage.setItem(de.IAM_AUTHORITY_OVERRIDE, l) : localStorage.removeItem(de.IAM_AUTHORITY_OVERRIDE);
}
function ww() {
  return localStorage.getItem(de.IAM_AUTHORITY_OVERRIDE);
}
function S0() {
  localStorage.removeItem(de.IAM_AUTHORITY_OVERRIDE);
}
function Ew() {
  const l = ww();
  if (l && Object.values(tn).includes(l))
    return l;
  const r = window.location.hostname;
  return r === qn.HOSTNAME || r === qn.IP || qn.IP_PATTERN.test(r) || r.startsWith(`${We.DEV}.`) || r.startsWith(`${We.DEV}-`) ? tn.DEV : r.startsWith(`${We.TEST}.`) || r.startsWith(`${We.TEST}-`) ? tn.TEST : r.startsWith(`${We.STAGE}.`) || r.startsWith(`${We.STAGE}-`) ? tn.STAGE : tn.PROD;
}
function Sw(l) {
  if (Eg === Dc.TEST)
    return "";
  const r = Ew();
  return l.startsWith("/global") ? Lb[r] : Mb[r];
}
const wn = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return Eg === Dc.TEST ? r : `${Sw(r)}${r}`;
}, xw = async (l) => {
  try {
    return bw?.find(
      (o) => o?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function cn() {
  const l = localStorage.getItem(de.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), o = await xw(r?.domain);
  return {
    [Bi.X_BRAND_ID]: o?.subsidiaryName,
    [Bi.X_SUBSIDIARY_ID]: o?.subsidiaryId?.toString(),
    [Bi.X_BRAND_DOMAIN]: r?.domain
  };
}
const Rw = async (l, r) => {
  const o = wn(wa.AUTH), u = { username: l, password: r };
  try {
    return (await Le.post(o, u, {
      headers: await cn()
    })).data;
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === Ll.UNAUTHORIZED ? new Error(Me.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(Me.AUTH_FAILED);
  }
}, Tw = async (l) => {
  const r = wn(wa.REGISTER);
  try {
    return (await Le.post(r, l, {
      headers: await cn()
    })).data;
  } catch (o) {
    throw console.error("Error during registration:", o), o.response?.data?.details?.errorMessage ? new Error(o.response.data.details.errorMessage) : o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.details ? new Error(o.response.data.details) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === Ll.INTERNAL_SERVER_ERROR ? new Error(Me.REGISTRATION_FAILED_RETRY) : o.message ? new Error(o.message) : new Error(Me.REGISTRATION_FAILED);
  }
}, Ms = async (l) => {
  const r = wn(wa.CHECK_EMAIL);
  try {
    return (await Le.post(
      r,
      { email: l },
      {
        headers: await cn()
      }
    )).data;
  } catch (o) {
    throw console.error("Error checking email:", o), o.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : o.response?.status === 403 ? new Error("Access denied to email verification service") : o.response?.status === 500 ? new Error("Email verification service encountered an error") : o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.message ? new Error(`Email verification failed: ${o.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, x0 = async (l) => {
  const r = wn(wa.FORGOT_PASSWORD), o = { email: l };
  try {
    return (await Le.post(r, o, {
      headers: await cn()
    })).data;
  } catch (u) {
    throw console.error("Error sending password reset:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === Ll.NOT_FOUND ? new Error("We couldn't find an account with that email.") : u.message ? new Error(u.message) : new Error(Me.RESET_LINK_FAILED);
  }
}, R0 = async (l) => {
  const r = wn(wa.FORGOT_USERNAME), o = { email: l };
  try {
    return (await Le.post(r, o, {
      headers: await cn()
    })).data;
  } catch (u) {
    throw console.error("Error sending username verification:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === Ll.NOT_FOUND ? new Error("We couldn't find an account with that email.") : u.message ? new Error(u.message) : new Error(Me.USERNAME_RECOVERY_FAILED);
  }
}, Nw = async (l) => {
  const r = wn(wa.GOOGLE_AUTH);
  try {
    return (await Le.post(
      r,
      { code: l },
      {
        headers: await cn()
      }
    )).data;
  } catch (o) {
    throw console.error("Error during Google auth:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === Ll.UNAUTHORIZED ? new Error("Google authentication failed. Please try again.") : o.message ? new Error(o.message) : new Error(Me.AUTH_FAILED);
  }
}, Aw = async (l) => {
  const r = wn(wa.REFRESH_TOKEN), o = { refresh_token: l };
  try {
    return (await Le.post(r, o, {
      headers: await cn()
    })).data;
  } catch (u) {
    throw console.error("Error during token refresh:", u), u;
  }
}, Cw = async (l) => {
  const r = wn(wa.LOGOUT), o = { refresh_token: l };
  try {
    return (await Le.post(r, o, {
      headers: await cn()
    })).data;
  } catch (u) {
    throw console.error("Error during logout:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === Ll.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : u.message ? new Error(u.message) : new Error("Logout failed");
  }
}, _w = async (l) => {
  const r = wn("/learner/enrollments"), o = {
    includeCertificates: !0,
    includeRules: !0,
    includeSchedules: !0,
    offset: 50,
    limit: 50,
    sort: !0
  };
  try {
    const u = await cn();
    return (await Le.get(r, {
      params: o,
      headers: {
        Accept: "text/plain",
        "X-Host": u[Bi.X_BRAND_ID] || "westernschools",
        "X-Refresh-Cache": "true",
        "X-Test-Mode": "false",
        Authorization: `Bearer ${l}`
      },
      withCredentials: !1,
      validateStatus: () => !0
    })).data;
  } catch (u) {
    throw console.error("Error fetching enrollments:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.message ? new Error(u.message) : new Error("Failed to fetch enrollments");
  }
}, Ow = async (l) => {
  const r = wn("/checkout");
  try {
    return (await Le.get(r, {
      headers: {
        ...await cn(),
        Authorization: `Bearer ${l}`
      }
    })).data;
  } catch (o) {
    throw console.error("Error fetching checkout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.message ? new Error(o.message) : new Error("Failed to fetch checkout data");
  }
}, jw = () => {
  try {
    const l = va(vt.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = zl(l), o = Math.floor(Date.now() / 1e3);
    return !r.exp || o >= r.exp;
  } catch (l) {
    return console.error(`${Ce.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, Ts = () => va(vt.REFRESH_TOKEN, !1) || localStorage.getItem(de.REFRESH_TOKEN), Bc = (l) => {
  try {
    const r = zl(l), o = Math.floor(Date.now() / 1e3);
    return !r.exp || o >= r.exp;
  } catch {
    return !0;
  }
}, Ec = (l) => !Bc(l);
let Es = null;
const Cl = () => {
  Es && (clearInterval(Es), Es = null);
}, kc = async (l) => {
  try {
    const r = l || Ts();
    if (!r)
      return !1;
    const o = await Aw(r);
    if (!o?.tokens?.access_token)
      return !1;
    const u = o.tokens, c = Ss(u.access_token);
    if (!c)
      return !1;
    const f = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (f <= 0)
      return !1;
    if (jl(vt.ACCESS_TOKEN, u.access_token, f, !0), localStorage.setItem(de.ACCESS_TOKEN, u.access_token), localStorage.setItem(
      de.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    ), u.refresh_token) {
      localStorage.setItem(de.REFRESH_TOKEN, u.refresh_token);
      const h = 720 * 60 * 60;
      jl(vt.REFRESH_TOKEN, u.refresh_token, h, !0), localStorage.getItem(de.REFRESH_TOKEN_TIME) && localStorage.setItem(de.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Ce.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, Dw = async () => {
  const l = Ts();
  if (!(va(vt.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN)) || !l || !Ec(l))
    return Cl(), !0;
  Cl();
  const o = 180 * 1e3;
  return Es = setInterval(async () => {
    const u = Ts();
    if (!(va(vt.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN))) {
      Cl();
      return;
    }
    if (!u || !Ec(u)) {
      Cl();
      return;
    }
    const f = va(vt.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN);
    (!f || Bc(f)) && await kc(u);
  }, o), () => Cl();
};
function Uw(l, r) {
  const o = {
    length: l.length >= _l.MIN_LENGTH,
    upper: Gt.UPPERCASE.test(l),
    lower: Gt.LOWERCASE.test(l),
    number: Gt.NUMBER.test(l),
    noSpaces: !Gt.NO_SPACES.test(l),
    noTriple: !Gt.NO_TRIPLE.test(l),
    special: Gt.SPECIAL_CHAR.test(l) && Gt.ALLOWED_CHARS.test(l),
    noNameParts: !0
  }, u = l.toLowerCase();
  if (r && r.displayName) {
    const c = r.displayName.split(/\s+/).filter((f) => f.length >= _l.MIN_PART_LENGTH_FOR_NAME_CHECK);
    for (const f of c)
      if (f && u.includes(f.toLowerCase())) {
        o.noNameParts = !1;
        break;
      }
  }
  return o;
}
const T0 = (l) => {
  try {
    if (!localStorage.getItem(de.REFRESH_TOKEN_TIME))
      return console.log(
        `${Ce.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Ce.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const o = va(vt.ACCESS_TOKEN, !1);
    let u = null;
    if (o && (u = o), u || (u = localStorage.getItem(de.ACCESS_TOKEN)), !u)
      return !1;
    const c = localStorage.getItem(de.ACCESS_TOKEN_EXPIRES);
    if (c && Date.now() >= parseInt(c))
      return !1;
    try {
      const f = zl(u), h = Math.floor(Date.now() / 1e3);
      return !(!f.exp || h >= f.exp);
    } catch (f) {
      return console.error(`${Ce.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, f), !1;
    }
  } catch (r) {
    return console.error(`${Ce.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, Mw = async (l) => {
  if (T0(l))
    return !0;
  try {
    if (!localStorage.getItem(de.REFRESH_TOKEN_TIME))
      return !1;
    const u = Ts();
    if (!u || !Ec(u))
      return !1;
    const c = va(vt.ACCESS_TOKEN, !1) || localStorage.getItem(de.ACCESS_TOKEN);
    return !(!c || Bc(c)) || !await kc(u) ? !1 : T0(l);
  } catch (o) {
    return console.error(
      `${Ce.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      o
    ), !1;
  }
}, Lw = () => {
  try {
    const l = localStorage.getItem(de.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < Ub.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${Ce.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, zw = () => {
  a0(vt.ACCESS_TOKEN), a0(vt.REFRESH_TOKEN), [
    de.REFRESH_TOKEN,
    de.REFRESH_TOKEN_TIME,
    de.ACCESS_TOKEN,
    de.ACCESS_TOKEN_EXPIRES,
    "user_info"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Ce.AUTH} All authentication tokens and state cleared`);
}, Sg = async (l, r, o = !1) => {
  const u = await Rw(l, r), { tokens: c } = u;
  if (c.access_token) {
    const h = (zl(c.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    jl(vt.ACCESS_TOKEN, c.access_token, h, !0), localStorage.setItem(de.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      de.ACCESS_TOKEN_EXPIRES,
      (Date.now() + h * 1e3).toString()
    ), localStorage.setItem(de.REFRESH_TOKEN, c.refresh_token);
    const p = 720 * 60 * 60;
    jl(vt.REFRESH_TOKEN, c.refresh_token, p, !0), o && c.refresh_token ? (localStorage.setItem(de.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Ce.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(de.REFRESH_TOKEN_TIME), console.log(
      `${Ce.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, Hw = async (l, r = !0) => {
  const o = await Nw(l), { tokens: u } = o;
  if (u.access_token) {
    const f = (zl(u.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    jl(vt.ACCESS_TOKEN, u.access_token, f, !0), localStorage.setItem(de.ACCESS_TOKEN, u.access_token), localStorage.setItem(
      de.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    ), localStorage.setItem(de.REFRESH_TOKEN, u.refresh_token);
    const h = 720 * 60 * 60;
    jl(vt.REFRESH_TOKEN, u.refresh_token, h, !0), r && u.refresh_token ? (localStorage.setItem(de.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Ce.AUTH} Google login - Remember Me enabled`)) : (localStorage.removeItem(de.REFRESH_TOKEN_TIME), console.log(`${Ce.AUTH} Google login - Remember Me disabled`));
  }
  return u;
}, Ss = (l) => {
  try {
    const r = zl(l);
    return {
      access_token: l,
      userInfo: {
        studentId: r.studentId,
        sub: r.sub,
        email_verified: r.email_verified,
        name: r.name,
        preferred_username: r.preferred_username,
        given_name: r.given_name,
        family_name: r.family_name,
        email: r.email
      },
      // Include token metadata for operations like cookie expiry
      decoded: {
        exp: r.exp
      }
    };
  } catch (r) {
    return console.error(
      `${Ce.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, Bw = ({ onResetPassword: l, onContinue: r }) => /* @__PURE__ */ m.jsx(
  "div",
  {
    part: "identity-widget-weak-password-overlay",
    className: "identity-widget-weak-password-overlay fixed! inset-0! bg-[#0000004f]! flex! items-center! justify-center! z-[2100]! p-4!",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "weak-password-dialog-title",
    children: /* @__PURE__ */ m.jsxs(
      "div",
      {
        part: "identity-widget-weak-password-modal",
        className: "identity-widget-weak-password-modal bg-white! rounded-lg! p-8! w-full! max-w-md! relative! text-center!",
        role: "document",
        children: [
          /* @__PURE__ */ m.jsx(
            "div",
            {
              part: "identity-widget-weak-password-icon-wrap",
              className: "identity-widget-weak-password-icon-wrap flex! justify-center! mb-4!",
              children: /* @__PURE__ */ m.jsx(
                "svg",
                {
                  className: "w-12! h-12! text-yellow-500!",
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
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ m.jsx(
            "h3",
            {
              id: "weak-password-dialog-title",
              part: "identity-widget-weak-password-title",
              className: "identity-widget-weak-password-title text-lg! font-bold! text-gray-800! mb-2!",
              children: "Weak Password Detected"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "p",
            {
              part: "identity-widget-weak-password-message",
              className: "identity-widget-weak-password-message text-sm! text-gray-600! mb-6!",
              children: "Your password is weak. Would you like to reset it before proceeding?"
            }
          ),
          /* @__PURE__ */ m.jsxs(
            "div",
            {
              part: "identity-widget-weak-password-actions",
              className: "identity-widget-weak-password-actions flex! gap-3! justify-center!",
              children: [
                /* @__PURE__ */ m.jsx(
                  Fe,
                  {
                    type: Ve.BUTTON,
                    variant: tt.OUTLINE,
                    part: "identity-widget-weak-password-no-button",
                    onClick: r,
                    className: "identity-widget-weak-password-no-button flex-1! m-0! py-2.5! px-5! text-sm! font-semibold! rounded-lg! shadow-none! border! border-solid! border-gray-300! text-gray-700! bg-white! hover:bg-gray-50! hover:border-gray-400! transition-colors! duration-200!",
                    children: "No, Continue"
                  }
                ),
                /* @__PURE__ */ m.jsx(
                  Fe,
                  {
                    type: Ve.BUTTON,
                    variant: tt.PRIMARY,
                    part: "identity-widget-weak-password-yes-button",
                    onClick: l,
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
function N0(l) {
  cn().then((r) => {
    r[Bi.X_BRAND_ID] || l(!0);
  }).catch((r) => {
    console.error(Ce.BRAND_CONFIG, "Failed to load brand configuration:", r), l(!0);
  });
}
function Ls() {
  const [l, r] = w.useState(!1);
  return w.useEffect(() => {
    if (sessionStorage.getItem(de.THEME_LOADED)) {
      N0(r);
      return;
    }
    const o = () => {
      N0(r);
    };
    return window.addEventListener("theme-loaded", o), () => window.removeEventListener("theme-loaded", o);
  }, []), l;
}
const Bl = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", Sc = (l) => {
  if (!l || typeof l != "object")
    return !1;
  const r = l;
  return typeof r.getModifierState != "function" ? !1 : r.getModifierState("CapsLock");
}, kw = ({
  onSuccess: l,
  onError: r,
  handleClose: o,
  onSignIn: u,
  title: c = "Create your account",
  subtitle: f = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [p, b] = w.useState(h), [y, v] = w.useState(""), [S, j] = w.useState(""), [q, N] = w.useState(""), [O, T] = w.useState(!1), [K, X] = w.useState(""), [Q, $] = w.useState(""), [F, oe] = w.useState(!1), [ee, I] = w.useState(!1), [ue, be] = w.useState(!1), [Ke, ye] = w.useState(!1), [je, ze] = w.useState(!1), [Ae, L] = w.useState(!1), [z, Y] = w.useState(!1), [fe, Ne] = w.useState(""), [Re, x] = w.useState(!1), [B, V] = w.useState(""), [Z, me] = w.useState(le.INFO), ie = w.useRef(null), pe = w.useRef(null), De = Ls(), P = {
    length: q.length >= _l.MIN_LENGTH && q.length <= _l.MAX_LENGTH,
    hasNumber: Gt.NUMBER.test(q),
    hasUppercase: Gt.UPPERCASE.test(q),
    hasLowercase: Gt.LOWERCASE.test(q),
    hasSpecialChar: t0.test(q),
    onlyAllowedChars: n0.test(q) || q === "",
    differentFromUsername: p ? q !== p && q !== p.split("@")[0] : !0
  }, Yt = ((re) => {
    if (!re) return { strength: "", color: "", width: hs.EMPTY };
    if (P.length && P.hasNumber && P.hasUppercase && P.hasLowercase && P.hasSpecialChar && P.onlyAllowedChars && P.differentFromUsername)
      return {
        strength: rc.STRONG,
        color: sc.STRONG,
        width: hs.STRONG
      };
    let nt = 0;
    return P.length && nt++, P.hasNumber && nt++, P.hasUppercase && nt++, P.hasLowercase && nt++, P.hasSpecialChar && nt++, P.onlyAllowedChars && nt++, P.differentFromUsername && nt++, nt <= 2 ? {
      strength: rc.WEAK,
      color: sc.WEAK,
      width: hs.WEAK
    } : {
      strength: rc.GOOD,
      color: sc.GOOD,
      width: hs.GOOD
    };
  })(q), En = (re) => re ? re.length < _l.MIN_LENGTH || re.length > _l.MAX_LENGTH ? { isValid: !1, error: Me.PASSWORD_LENGTH } : Gt.UPPERCASE.test(re) ? Gt.LOWERCASE.test(re) ? Gt.NUMBER.test(re) ? t0.test(re) ? n0.test(re) ? { isValid: !0, error: "" } : {
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
    if (!De) {
      if (pe.current && clearTimeout(pe.current), !p) {
        ye(!1), ze(!1), Y(!1), Ne("");
        return;
      }
      if (!Ol.test(p)) {
        ye(!1), ze(!1);
        return;
      }
      return pe.current = setTimeout(async () => {
        L(!0);
        try {
          (await Ms(p)).exists ? (ze(!0), ye(!0)) : (ze(!1), ye(!1));
        } catch (re) {
          console.error(`${Ce.CREATE_ACCOUNT} Email check failed:`, re);
          const ot = re instanceof Error ? re.message : "Unable to verify email. You can still proceed with registration.";
          Y(!0), Ne(ot), ye(!0), ze(!1);
        } finally {
          L(!1);
        }
      }, bn.EMAIL_CHECK_DEBOUNCE), () => {
        pe.current && clearTimeout(pe.current);
      };
    }
  }, [p, De]);
  const Et = p && Ol.test(p);
  w.useEffect(() => {
    const re = (ot) => {
      ot.key === "Escape" && o();
    };
    return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
  }, [o]);
  const Kt = (re) => {
    re.target === ie.current && o();
  }, fn = async (re) => {
    if (re.preventDefault(), De) return;
    if (be(!0), !p || !y || !S) {
      r("Please fill in all required fields");
      return;
    }
    const ot = En(q);
    if (!ot.isValid) {
      $(ot.error), r(ot.error), T(!1);
      return;
    }
    if (!Ol.test(p)) {
      X(Me.EMAIL_INVALID), r(Me.EMAIL_INVALID);
      return;
    }
    T(!0), X(""), V("");
    try {
      const nt = p.split("@")[0], Xn = await Tw({
        username: nt,
        email: p,
        firstName: y,
        lastName: S,
        password: q
      });
      console.log(
        `${Ce.CREATE_ACCOUNT} Registration successful:`,
        Xn.message
      );
      try {
        const Qn = await Sg(p, q, Re);
        l(Qn);
      } catch (Qn) {
        console.error(
          `${Ce.CREATE_ACCOUNT} Auto-login failed after registration:`,
          Qn
        );
        const ut = Qn instanceof Error ? Qn.message : "Auto-login failed";
        r(ut);
      }
    } catch (nt) {
      console.error(`${Ce.CREATE_ACCOUNT} Registration failed:`, nt);
      const Xn = nt instanceof Error ? nt.message : Me.REGISTRATION_FAILED;
      V(Xn), me(le.ERROR), r(Xn);
    } finally {
      T(!1);
    }
  }, Vn = (re) => {
    if (re.key === "CapsLock" && re.type === "keydown") {
      I((ot) => !ot);
      return;
    }
    re.key !== "CapsLock" && I(Sc(re));
  }, Ka = (re) => {
    I(Sc(re));
  }, Ea = () => {
    I(!1);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    B && /* @__PURE__ */ m.jsx(
      yc,
      {
        type: Z,
        message: B,
        duration: bn.TOAST_DEFAULT_DURATION,
        onClose: () => V("")
      }
    ),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ie,
        onMouseDown: Kt,
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
                Fe,
                {
                  onClick: o,
                  variant: tt.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Ve.BUTTON,
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
                  onSubmit: fn,
                  className: "identity-widget-create-account-form space-y-4!",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ m.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ m.jsx(
                          nn,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: p,
                            onChange: (re) => {
                              b(re.target.value), X("");
                            },
                            placeholder: "Enter email address",
                            disabled: O,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: ue && !p ? "Required" : K || "",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              Ae && /* @__PURE__ */ m.jsx(Cs, {}),
                              !Ae && !je && !z && p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: Bl,
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
                    De && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        title: Me.BRAND_CONFIG_TITLE,
                        message: Me.BRAND_CONFIG_MESSAGE,
                        className: "identity-widget-create-account-brand-error-banner mb-4!"
                      }
                    ),
                    !De && Ke && je && !z && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          ye(!1), u(p);
                        },
                        onClose: () => ye(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    !De && Ke && z && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        message: fe,
                        onClose: () => {
                          ye(!1), Y(!1), Ne("");
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
                            nn,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: y,
                              onChange: (re) => v(re.target.value),
                              placeholder: "First Name",
                              disabled: O,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: ue && !y ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            nn,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: S,
                              onChange: (re) => j(re.target.value),
                              placeholder: "Last Name",
                              disabled: O,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: ue && !S ? "Required" : ""
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
                                nn,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: F ? "text" : "password",
                                  value: q,
                                  onChange: (re) => {
                                    N(re.target.value), $("");
                                  },
                                  onKeyDown: Vn,
                                  onKeyUp: Vn,
                                  onFocus: Ka,
                                  onBlur: Ea,
                                  placeholder: "Enter Password...",
                                  disabled: O,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: Q,
                                  endIcon: /* @__PURE__ */ m.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => oe(!F),
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
                              ee && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Gi.CAPS_LOCK_ON
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
                                          width: Yt.width,
                                          backgroundColor: Yt.color
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
                                    style: { color: Yt.color },
                                    children: Yt.strength
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
                                  checked: Re,
                                  onChange: (re) => x(re.target.checked),
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
                      Fe,
                      {
                        type: Ve.SUBMIT,
                        disabled: O || je || !Et || De,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! m-0!",
                        children: O ? /* @__PURE__ */ m.jsxs(
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
                      Fe,
                      {
                        type: Ve.BUTTON,
                        variant: tt.OUTLINE,
                        onClick: () => u(p),
                        disabled: O,
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
    B && /* @__PURE__ */ m.jsx(yc, { message: B, type: Z, onClose: () => V("") })
  ] });
}, qw = ({
  email: l,
  loading: r,
  cooldown: o,
  onResendLink: u,
  onBack: c,
  onClose: f
}) => {
  const h = w.useRef(null);
  w.useEffect(() => {
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
              Fe,
              {
                onClick: f,
                variant: tt.LINK,
                part: "identity-widget-reset-success-close-button",
                className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
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
                    src: Bl,
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
                  "A password reset link has already been sent. Please wait ",
                  o,
                  " seconds before requesting another."
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              Fe,
              {
                type: Ve.BUTTON,
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
              Fe,
              {
                type: Ve.BUTTON,
                variant: tt.OUTLINE,
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
}, Gw = ({
  email: l,
  onBack: r,
  handleClose: o,
  onCreateAccount: u
}) => {
  const [c, f] = w.useState(l || ""), [h, p] = w.useState(!1), [b, y] = w.useState(!1), [v, S] = w.useState(""), [j, q] = w.useState(!1), [N, O] = w.useState(!1), [T, K] = w.useState(!1), [X, Q] = w.useState(!1), [$, F] = w.useState(""), [oe, ee] = w.useState(!1), [I, ue] = w.useState(0), be = Ls(), Ke = w.useRef(null), ye = w.useRef(null);
  w.useEffect(() => {
    if (!(I <= 0))
      return ye.current = setTimeout(() => {
        ue((L) => L - 1);
      }, 1e3), () => {
        ye.current && clearTimeout(ye.current);
      };
  }, [I]), w.useEffect(() => {
    const L = (z) => {
      z.key === "Escape" && o();
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [o]), w.useEffect(() => {
    if (be) return;
    const L = Ol.test(c);
    if (K(L), !L || !c) {
      O(!1), Q(!1), F(""), ee(!1);
      return;
    }
    const z = setTimeout(async () => {
      q(!0);
      try {
        const Y = await Ms(c);
        console.log("[ResetPassword] Email check response:", Y), Y.exists ? (O(!0), ee(!1)) : (O(!1), ee(!0)), console.log("[ResetPassword] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ResetPassword] Error checking email:", Y);
        const fe = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), F(fe), ee(!0), O(!1);
      } finally {
        q(!1);
      }
    }, bn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(z);
  }, [c, be]);
  const je = (L) => {
    L.target === Ke.current && o();
  }, ze = async (L) => {
    if (L.preventDefault(), !be) {
      if (!c) {
        S(Me.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await x0(c), console.log("[ResetPassword] Reset link sent to:", c), ue(bn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (z) {
        console.error("[ResetPassword] Failed to send reset link:", z);
        const Y = z instanceof Error ? z.message : Me.RESET_LINK_FAILED;
        S(Y);
      } finally {
        p(!1);
      }
    }
  }, Ae = async () => {
    if (!(I > 0)) {
      p(!0), S("");
      try {
        await x0(c), console.log("[ResetPassword] Reset link resent to:", c), ue(bn.RESEND_COOLDOWN_SECONDS);
      } catch (L) {
        console.error("[ResetPassword] Failed to resend reset link:", L), y(!1);
        const z = L instanceof Error ? L.message : Me.RESET_LINK_FAILED;
        S(z);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    qw,
    {
      email: c,
      loading: h,
      cooldown: I,
      onResendLink: Ae,
      onBack: r,
      onClose: o
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ke,
      onMouseDown: je,
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
              Fe,
              {
                onClick: o,
                variant: tt.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
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
                onSubmit: ze,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ m.jsx(
                        nn,
                        {
                          label: "Email Address",
                          id: "reset-email",
                          type: "email",
                          value: c,
                          onChange: (L) => {
                            f(L.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
                          className: "identity-widget-reset-password-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                            j && /* @__PURE__ */ m.jsx(Cs, {}),
                            !j && N && T && !X && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: Bl,
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
                  be && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      title: Me.BRAND_CONFIG_TITLE,
                      message: Me.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-reset-password-brand-error-banner mb-4!"
                    }
                  ),
                  !be && oe && !N && T && !X && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.INFO,
                      message: Gi.EMAIL_NOT_FOUND,
                      actionText: u ? "Let's create one to continue?" : void 0,
                      onActionClick: u ? () => {
                        ee(!1), u();
                      } : void 0,
                      onClose: () => ee(!1),
                      className: "identity-widget-reset-password-email-not-found-banner mb-4!"
                    }
                  ),
                  !be && oe && X && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      message: $,
                      onClose: () => {
                        ee(!1), Q(!1), F("");
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
                      onClose: () => S(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  I > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-reset-password-cooldown-message",
                      className: "identity-widget-reset-password-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "A password reset link has already been sent. Please wait ",
                        I,
                        " seconds before requesting another."
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    Fe,
                    {
                      type: Ve.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: h || !c || !T || !N || be || I > 0,
                      className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ResetPassword] Button state:", {
                          loading: h,
                          email: c,
                          isEmailValid: T,
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
}, Yw = ({
  email: l,
  loading: r,
  cooldown: o,
  onResendLink: u,
  onBack: c,
  onClose: f
}) => {
  const h = w.useRef(null);
  w.useEffect(() => {
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
              Fe,
              {
                onClick: f,
                variant: tt.LINK,
                part: "identity-widget-forgot-username-success-close-button",
                className: "identity-widget-forgot-username-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
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
                    src: Bl,
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
                  "A verification link has already been sent. Please wait ",
                  o,
                  " seconds before requesting another."
                ] })
              }
            ),
            /* @__PURE__ */ m.jsx(
              Fe,
              {
                type: Ve.BUTTON,
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
              Fe,
              {
                type: Ve.BUTTON,
                variant: tt.OUTLINE,
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
}, Kw = ({
  email: l,
  onBack: r,
  handleClose: o,
  onCreateAccount: u
}) => {
  const [c, f] = w.useState(l || ""), [h, p] = w.useState(!1), [b, y] = w.useState(!1), [v, S] = w.useState(""), [j, q] = w.useState(!1), [N, O] = w.useState(!1), [T, K] = w.useState(!1), [X, Q] = w.useState(!1), [$, F] = w.useState(""), [oe, ee] = w.useState(!1), [I, ue] = w.useState(0), be = Ls(), Ke = w.useRef(null), ye = w.useRef(null);
  w.useEffect(() => {
    if (!(I <= 0))
      return ye.current = setTimeout(() => {
        ue((L) => L - 1);
      }, 1e3), () => {
        ye.current && clearTimeout(ye.current);
      };
  }, [I]), w.useEffect(() => {
    const L = (z) => {
      z.key === "Escape" && o();
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [o]), w.useEffect(() => {
    if (be) return;
    const L = Ol.test(c);
    if (K(L), !L || !c) {
      O(!1), Q(!1), F(""), ee(!1);
      return;
    }
    const z = setTimeout(async () => {
      q(!0);
      try {
        const Y = await Ms(c);
        console.log("[ForgotUsername] Email check response:", Y), Y.exists ? (O(!0), ee(!1)) : (O(!1), ee(!0)), console.log("[ForgotUsername] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ForgotUsername] Error checking email:", Y);
        const fe = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), F(fe), ee(!0), O(!1);
      } finally {
        q(!1);
      }
    }, bn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(z);
  }, [c, be]);
  const je = (L) => {
    L.target === Ke.current && o();
  }, ze = async (L) => {
    if (L.preventDefault(), !be) {
      if (!c) {
        S(Me.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await R0(c), console.log("[ForgotUsername] Verification link sent to:", c), ue(bn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (z) {
        console.error("[ForgotUsername] Failed to send verification link:", z);
        const Y = z instanceof Error ? z.message : Me.USERNAME_RECOVERY_FAILED;
        S(Y);
      } finally {
        p(!1);
      }
    }
  }, Ae = async () => {
    if (!(I > 0)) {
      p(!0), S("");
      try {
        await R0(c), console.log("[ForgotUsername] Verification link resent to:", c), ue(bn.RESEND_COOLDOWN_SECONDS);
      } catch (L) {
        console.error("[ForgotUsername] Failed to resend verification link:", L), y(!1);
        const z = L instanceof Error ? L.message : Me.USERNAME_RECOVERY_FAILED;
        S(z);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    Yw,
    {
      email: c,
      loading: h,
      cooldown: I,
      onResendLink: Ae,
      onBack: r,
      onClose: o
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-overlay",
      className: "identity-widget-forgot-username-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ke,
      onMouseDown: je,
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
              Fe,
              {
                onClick: o,
                variant: tt.LINK,
                part: "identity-widget-forgot-username-close-button",
                className: "identity-widget-forgot-username-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
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
                onSubmit: ze,
                className: "identity-widget-forgot-username-form space-y-4!",
                "aria-label": "Forgot username form",
                children: [
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      part: "identity-widget-forgot-username-email-field",
                      className: "identity-widget-forgot-username-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ m.jsx(
                        nn,
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
                            j && /* @__PURE__ */ m.jsx(Cs, {}),
                            !j && N && T && !X && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-forgot-username-email-verified-icon",
                                className: "identity-widget-forgot-username-email-verified-icon",
                                src: Bl,
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
                  be && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      title: Me.BRAND_CONFIG_TITLE,
                      message: Me.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-forgot-username-brand-error-banner mb-4!"
                    }
                  ),
                  !be && oe && !N && T && !X && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.INFO,
                      message: Gi.EMAIL_NOT_FOUND,
                      actionText: u ? "Let's create one to continue?" : void 0,
                      onActionClick: u ? () => {
                        ee(!1), u();
                      } : void 0,
                      onClose: () => ee(!1),
                      className: "identity-widget-forgot-username-email-not-found-banner mb-4!"
                    }
                  ),
                  !be && oe && X && /* @__PURE__ */ m.jsx(
                    _t,
                    {
                      type: le.ERROR,
                      message: $,
                      onClose: () => {
                        ee(!1), Q(!1), F("");
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
                  I > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-forgot-username-cooldown-message",
                      className: "identity-widget-forgot-username-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "A verification link has already been sent. Please wait ",
                        I,
                        " seconds before requesting another."
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    Fe,
                    {
                      type: Ve.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-forgot-username-submit-button",
                      disabled: h || !c || !T || !N || be || I > 0,
                      className: "identity-widget-submit-button identity-widget-forgot-username-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:cursor-not-allowed! m-0!",
                      onClick: () => {
                        console.log("[ForgotUsername] Button state:", {
                          loading: h,
                          email: c,
                          isEmailValid: T,
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
}, A0 = ({ children: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "px-1! rounded-sm! font-medium!",
    style: { backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" },
    children: l
  }
), mc = ({ label: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!",
    style: {
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)"
    },
    children: l
  }
), Vw = ({ onBack: l, handleClose: r }) => {
  const o = w.useRef(null), u = "name@email.com", [c, f] = w.useState(0), h = u.slice(0, c);
  w.useEffect(() => {
    const b = (y) => {
      y.key === "Escape" && r();
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [r]), w.useEffect(() => {
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
              Fe,
              {
                onClick: r,
                variant: tt.LINK,
                part: "identity-widget-help-center-close-button",
                className: "identity-widget-help-center-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ve.BUTTON,
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
                  /* @__PURE__ */ m.jsx(A0, { children: '"Forgot Password?"' }),
                  " link on the login page to start the password reset process."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(mc, { label: "Step 1" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-4!", children: "Continue to login" }),
                  /* @__PURE__ */ m.jsxs("div", { className: "space-y-3!", children: [
                    /* @__PURE__ */ m.jsx(nn, { label: "Email or Username", value: "name@email.com", disabled: !0 }),
                    /* @__PURE__ */ m.jsx(nn, { label: "Password", value: "••••••••", disabled: !0 }),
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
                    /* @__PURE__ */ m.jsx(Fe, { type: Ve.BUTTON, disabled: !0, className: "w-full!", children: "Sign In" })
                  ] })
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, enter your account email address. It should look something like this:" }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(mc, { label: "Step 2" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(
                    "div",
                    {
                      className: "rounded-md!",
                      style: { animation: "helpCenterInputFocus 1.4s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(
                        nn,
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
                  /* @__PURE__ */ m.jsx(A0, { children: '"Send reset link"' }),
                  "."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(mc, { label: "Step 3" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(nn, { label: "Email Address", value: h, disabled: !0 }),
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      className: "block!",
                      style: { animation: "helpCenterClick 1.2s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(Fe, { type: Ve.BUTTON, disabled: !0, className: "w-full! mt-4!", children: "Send reset link" })
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
              Fe,
              {
                type: Ve.BUTTON,
                variant: tt.OUTLINE,
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
}, Xw = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Qw = ({
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
  const [v, S] = w.useState(h), [j, q] = w.useState(""), [N, O] = w.useState(!1), [T, K] = w.useState(!1), [X, Q] = w.useState(!1), [$, F] = w.useState(""), [oe, ee] = w.useState(!1), [I, ue] = w.useState(!1), [be, Ke] = w.useState(!1), [ye, je] = w.useState(!1), [ze, Ae] = w.useState(!1), [L, z] = w.useState(!1), [Y, fe] = w.useState(!1), [Ne, Re] = w.useState(!1), [x, B] = w.useState(!1), [V, Z] = w.useState(""), [me, ie] = w.useState(""), [pe, De] = w.useState(le.INFO), [P, dn] = w.useState(!1), [Yt, En] = w.useState(null), Et = Ls(), [Kt, fn] = w.useState(!1), [Vn, Ka] = w.useState(!1), Ea = w.useRef(null), re = w.useRef(null), ot = w.useRef(!1);
  w.useEffect(() => {
    if (!b || !y || ot.current) return;
    if (document.querySelector(
      'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]'
    )) {
      ot.current = !0;
      return;
    }
    const Ee = document.createElement("script");
    Ee.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", Ee.async = !0, Ee.onload = () => {
      ot.current = !0;
    }, document.head.appendChild(Ee);
  }, [b, y]);
  const nt = async () => {
    try {
      Ka(!0);
      const ne = window.AppleID;
      if (!ne) {
        const Ee = "Apple Sign In SDK not loaded. Please try again.";
        ie(Ee), De(le.ERROR), r(Ee);
        return;
      }
      ne.auth.init({
        clientId: y,
        scope: "name email",
        redirectURI: window.location.origin,
        usePopup: !0
      }), await ne.auth.signIn(), ie(
        "Apple sign-in completed. Connect this credential to your backend login flow."
      ), De(le.INFO), F("");
    } catch (ne) {
      if (ne?.error === "popup_closed_by_user")
        return;
      const Ee = ne?.error || (ne instanceof Error ? ne.message : "Apple sign-in failed.");
      ie(Ee), De(le.ERROR), r(Ee);
    } finally {
      Ka(!1);
    }
  }, Xn = Db({
    onSuccess: async (ne) => {
      try {
        const Ee = await Hw(ne.code, oe);
        l(Ee);
      } catch (Ee) {
        const ln = Ee instanceof Error ? Ee.message : "Google sign-in failed";
        ie(ln), De(le.ERROR), r(ln);
      } finally {
        fn(!1);
      }
    },
    onError: (ne) => {
      const Ee = ne?.error_description || ne?.error || "Google sign-in failed.";
      ie(Ee), De(le.ERROR), r(Ee), fn(!1);
    },
    onNonOAuthError: (ne) => {
      const Ee = `Google sign-in failed: ${ne.type}`;
      ie(Ee), De(le.ERROR), r(Ee), fn(!1);
    },
    flow: "auth-code"
  });
  w.useEffect(() => {
    if (!Et) {
      if (re.current && clearTimeout(re.current), !v) {
        z(!1), Re(!1), B(!1), Z("");
        return;
      }
      if (!v.includes("@")) {
        z(!0), Re(!1);
        return;
      }
      if (!Ol.test(v)) {
        z(!1), Re(!1);
        return;
      }
      return re.current = setTimeout(async () => {
        fe(!0);
        try {
          (await Ms(v)).exists ? (z(!0), Re(!1)) : (z(!1), Re(!0));
        } catch (ne) {
          console.error("[EmbeddedLogin] Email check failed:", ne);
          const Ee = ne instanceof Error ? ne.message : "Unable to verify email. You can still proceed with login.";
          B(!0), Z(Ee), Re(!0), z(!1);
        } finally {
          fe(!1);
        }
      }, 500), () => {
        re.current && clearTimeout(re.current);
      };
    }
  }, [v, Et]);
  const ut = v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  w.useEffect(() => {
    const ne = (Ee) => {
      Ee.key === "Escape" && o();
    };
    return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
  }, [o]);
  const zs = (ne) => {
    ne.target === Ea.current && o();
  }, Ii = async (ne) => {
    if (ne.preventDefault(), !Et) {
      if (!v || !j) {
        F("Please enter both username/email and password"), r("Please enter both username/email and password");
        return;
      }
      O(!0), F("");
      try {
        const Ee = await Sg(v, j, oe), ln = Uw(j, {
          displayName: v.split("@")[0],
          email: v
        });
        Object.values(ln).every(Boolean) ? l(Ee) : (En(Ee), dn(!0));
      } catch (Ee) {
        console.error("[EmbeddedLogin] Login failed:", Ee);
        const ln = Ee instanceof Error ? Ee.message : "Authentication failed";
        F(ln), ie(ln), De(le.ERROR), r(ln);
      } finally {
        O(!1);
      }
    }
  }, kl = (ne) => {
    if (ne.key === "CapsLock" && ne.type === "keydown") {
      Q((Ee) => !Ee);
      return;
    }
    ne.key !== "CapsLock" && Q(Sc(ne));
  };
  return be ? /* @__PURE__ */ m.jsx(
    Gw,
    {
      email: v,
      onBack: () => Ke(!1),
      handleClose: o,
      onCreateAccount: () => {
        Ke(!1), ue(!0);
      }
    }
  ) : ye ? /* @__PURE__ */ m.jsx(
    Kw,
    {
      email: v,
      onBack: () => je(!1),
      handleClose: o,
      onCreateAccount: () => {
        je(!1), ue(!0);
      }
    }
  ) : ze ? /* @__PURE__ */ m.jsx(Vw, { onBack: () => Ae(!1), handleClose: o }) : I ? /* @__PURE__ */ m.jsx(
    kw,
    {
      onSuccess: (ne) => {
        ue(!1), l(ne);
      },
      onError: r,
      handleClose: o,
      onSignIn: (ne) => {
        ue(!1), ne && S(ne);
      },
      authority: u,
      initialEmail: v
    }
  ) : /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ea,
      onMouseDown: zs,
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
                Fe,
                {
                  onClick: o,
                  variant: tt.LINK,
                  part: "identity-widget-login-close-button",
                  className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                  type: Ve.BUTTON,
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
                  onSubmit: Ii,
                  className: "identity-widget-login-form space-y-2!",
                  "aria-label": "Login form",
                  children: [
                    p && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                      /* @__PURE__ */ m.jsx(
                        "div",
                        {
                          part: "identity-widget-google-section",
                          className: "identity-widget-google-section mt-0! mb-4! justify-center!",
                          children: /* @__PURE__ */ m.jsxs(
                            Fe,
                            {
                              type: Ve.BUTTON,
                              variant: tt.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => {
                                fn(!0), Xn();
                              },
                              disabled: N || Kt || Et,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: Xw,
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
                          className: "identity-widget-login-divider relative! mt-2! mb-4!",
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
                            Fe,
                            {
                              type: Ve.BUTTON,
                              variant: tt.OUTLINE,
                              part: "identity-widget-apple-button",
                              onClick: nt,
                              disabled: N || Vn || Et,
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
                          nn,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: v,
                            onChange: (ne) => S(ne.target.value),
                            placeholder: "Enter email or username",
                            disabled: N,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              Y && /* @__PURE__ */ m.jsx(Cs, {}),
                              !Y && L && ut && !x && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: Bl,
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
                    Et && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        title: Me.BRAND_CONFIG_TITLE,
                        message: Me.BRAND_CONFIG_MESSAGE,
                        className: "mb-4!"
                      }
                    ),
                    !Et && Ne && !L && ut && !x && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.INFO,
                        message: Gi.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          Re(!1), ue(!0);
                        },
                        onClose: () => Re(!1),
                        className: "mb-4!"
                      }
                    ),
                    !Et && Ne && x && /* @__PURE__ */ m.jsx(
                      _t,
                      {
                        type: le.ERROR,
                        message: V,
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
                                nn,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: T ? "text" : "password",
                                  value: j,
                                  onChange: (ne) => {
                                    q(ne.target.value), F("");
                                  },
                                  onKeyDown: kl,
                                  onKeyUp: kl,
                                  placeholder: "Enter Password...",
                                  disabled: N,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: $,
                                  endIcon: /* @__PURE__ */ m.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-login-password-toggle",
                                      onClick: () => K(!T),
                                      className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                                      tabIndex: -1,
                                      "aria-label": T ? "Hide password" : "Show password",
                                      children: T ? /* @__PURE__ */ m.jsx(
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
                              X && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Gi.CAPS_LOCK_ON
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
                                    checked: oe,
                                    onChange: (ne) => ee(ne.target.checked),
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
                                    onClick: (ne) => {
                                      ne.preventDefault(), Ke(!0);
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
                                    onClick: (ne) => {
                                      ne.preventDefault(), je(!0);
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
                      Fe,
                      {
                        type: Ve.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: N || !v || Et,
                        className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!",
                        children: N ? /* @__PURE__ */ m.jsxs(
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
                      Fe,
                      {
                        type: Ve.BUTTON,
                        variant: tt.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => ue(!0),
                        disabled: N || Kt,
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
                            onClick: () => Ae(!0),
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
        me && /* @__PURE__ */ m.jsx(yc, { message: me, type: pe, onClose: () => ie("") }),
        P && /* @__PURE__ */ m.jsx(
          Bw,
          {
            onResetPassword: () => {
              dn(!1), En(null), Ke(!0);
            },
            onContinue: () => {
              dn(!1), Yt && l(Yt), En(null);
            }
          }
        )
      ]
    }
  );
}, Zw = (l) => {
  const { authority: r, subsidiary: o, onRedirect: u, onTokenValidityCheck: c } = l, [f, h] = w.useState(!1), [p, b] = w.useState(l.logoutCounter ?? 0);
  (l.logoutCounter ?? 0) !== p && (b(l.logoutCounter ?? 0), h(!1)), w.useEffect(() => (r ? (vw(r), console.log(`${Ce.AUTH} Authority override set to: ${r}`)) : (S0(), console.log(`${Ce.AUTH} Using automatic authority detection`)), () => {
    S0();
  }), [r]);
  const y = async () => {
    try {
      const q = localStorage.getItem(de.ACCESS_TOKEN);
      if (!q)
        return console.error(`${Ce.AUTH} No access token found for redirect determination`), l.redirectUrl || oc();
      const [N, O] = await Promise.allSettled([
        _w(q),
        Ow(q)
      ]);
      let T = 0, K = 0;
      if (N.status === "fulfilled" ? (T = N.value?.results || N.value?.items?.length || 0, console.log(`${Ce.AUTH} Enrollments found: ${T}`)) : console.warn(`${Ce.AUTH} Enrollments fetch failed:`, N.reason), O.status === "fulfilled" ? (K = O.value?.results || O.value?.items?.length || 0, console.log(`${Ce.AUTH} Checkout found: ${K}`)) : console.warn(`${Ce.AUTH} Checkout fetch failed:`, O.reason), K > 0) {
        if (l.redirectCheckoutUrl)
          return console.log(`${Ce.AUTH} Redirecting to checkout: ${l.redirectCheckoutUrl}`), l.redirectCheckoutUrl;
      } else if (T > 0 && l.redirectDashboardUrl)
        return console.log(`${Ce.AUTH} Redirecting to dashboard: ${l.redirectDashboardUrl}`), l.redirectDashboardUrl;
      return l.redirectUrl || oc();
    } catch (q) {
      return console.error(`${Ce.AUTH} Error determining redirect URL:`, q), l.redirectUrl || oc();
    }
  };
  w.useEffect(() => {
    let q;
    return (async () => {
      const O = await Dw();
      typeof O == "function" && (q = O);
    })(), () => {
      q && q();
    };
  }, [f]), w.useEffect(() => {
    (async () => {
      try {
        const N = !jw();
        if (c && c(N), await Mw()) {
          h(!0);
          const K = await y();
          if (l.autoRedirection)
            window.location.href = K;
          else if (u && l.redirectUrl) {
            const X = localStorage.getItem(de.ACCESS_TOKEN);
            if (X) {
              const Q = Ss(X);
              Q && u(K, Q);
            }
          }
          return;
        }
        if (Lw()) {
          if (await kc()) {
            const X = localStorage.getItem(de.ACCESS_TOKEN);
            if (!X)
              return;
            const Q = Ss(X);
            if (!Q)
              return;
            console.log(`${Ce.AUTH} Auto-login successful`), h(!0), c && c(!0);
            const $ = await y();
            u && (console.log(
              `${Ce.AUTH} Triggering onRedirect callback with user session:`,
              Q
            ), u($, Q)), l.autoRedirection && (window.location.href = $);
          }
        } else
          localStorage.removeItem(de.REFRESH_TOKEN), localStorage.removeItem(de.REFRESH_TOKEN_TIME);
      } catch (N) {
        console.error(`${Ce.AUTH} Auto-login failed:`, N), localStorage.removeItem(de.REFRESH_TOKEN), localStorage.removeItem(de.REFRESH_TOKEN_TIME);
      }
    })();
  }, [
    l.redirectUrl,
    l.redirectDashboardUrl,
    l.redirectCheckoutUrl,
    c
  ]), w.useEffect(() => {
    r && localStorage.setItem("iam_authority", r), o && localStorage.setItem("subsidiary", o);
  }, [r, o]);
  const v = () => {
    l.handleClose && l.handleClose(), h(!0), y().then((q) => {
      if (u) {
        const N = localStorage.getItem(de.ACCESS_TOKEN);
        if (N) {
          const O = Ss(N);
          O && u(q, O);
        }
      }
      l.autoRedirection && setTimeout(() => {
        window.location.href = q;
      }, 100);
    });
  }, S = (q) => {
    console.log(`${Ce.AUTH} Embedded login error:`, q);
  }, j = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ m.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ m.jsx(Y1, { children: /* @__PURE__ */ m.jsx(
    Q0,
    {
      path: "*",
      element: /* @__PURE__ */ m.jsx(w.Fragment, { children: l.showLogin && !f && /* @__PURE__ */ m.jsx(
        Qw,
        {
          onSuccess: v,
          onError: S,
          handleClose: j,
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
class Fw {
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
   * Auto-detect brand based on current URL domain.
   * On localhost (any port), checks localStorage keys bloom-theme-brand and
   * clx_brand_folder first so local development can override the brand without
   * a matching domain.
   */
  async detectBrandFromDomain() {
    try {
      const r = window.location.hostname;
      if (r === "localhost" || r === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(r)) {
        const f = (y) => y.replace(/^["']+|["']+$/g, "").trim(), h = localStorage.getItem("bloom-theme-brand"), p = localStorage.getItem("clx_brand_folder"), b = h ?? p;
        if (b) {
          const y = f(b);
          if (y)
            return console.log(
              `[ThemeWidget] localhost: using localStorage brand override "${y}"`
            ), y;
        }
        return console.log("[ThemeWidget] localhost: no brand override found in localStorage"), null;
      }
      const c = (await this.getBrands()).find(
        (f) => r.includes(f.domain) || f.domain.includes(r)
      );
      return c ? (localStorage.setItem("subsidiary", c.token), c.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${r}`), null);
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
        (p) => p.folder.toLowerCase() === r.toLowerCase() || p.token.toLowerCase() === r.toLowerCase()
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
      const h = await f.json();
      if (this.shadowRoot)
        this.applyThemeToShadowDOM(h);
      else {
        const p = document.documentElement;
        h.styles.forEach((b) => {
          let y = b.value;
          /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), p.style.setProperty(`--${b.name}`, y);
        });
      }
      this.currentBrand = u, console.log(`[ThemeWidget] Theme loaded for brand: ${u.name}`), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
    } catch (o) {
      throw console.error("[ThemeWidget] Error loading theme:", o), sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")), o;
    }
  }
  /**
   * Apply theme styles to Shadow DOM using CSS variables
   * This ensures complete style isolation from host page styles
   */
  applyThemeToShadowDOM(r) {
    if (!this.shadowRoot) return;
    const o = r.styles.map((c) => {
      let f = c.value;
      return /^\d+\s\d+\s\d+$/.test(f) && (f = `rgb(${f})`), `  --${c.name}: ${f};`;
    }).join(`
`), u = document.createElement("style");
    u.setAttribute("data-theme-widget", "true"), u.textContent = `:host {
${o}
}`, this.shadowRoot.appendChild(u);
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
async function C0(l) {
  const r = new Fw(l.cdnBaseUrl, l.shadowRoot), o = l.brandFolder || l.brandToken;
  if (o)
    await r.loadTheme(o);
  else if (l.autoDetect) {
    const u = await r.detectBrandFromDomain();
    u ? await r.loadTheme(u) : (sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")));
  } else
    sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
  return r;
}
const _0 = "849375884089-h48ld9g29evhpb7jdra5jn0bce4thnse.apps.googleusercontent.com", $w = "com.colibri.identity.widget", Iw = ({
  clientId: l,
  children: r
}) => l ? /* @__PURE__ */ m.jsx(Ob, { clientId: l, children: r }) : /* @__PURE__ */ m.jsx(m.Fragment, { children: r }), O0 = typeof window < "u" && window.__widgetStyles?.widget || "";
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
        "redirect-dashboard-url",
        "redirectDashboardUrl",
        "redirect-checkout-url",
        "redirectCheckoutUrl",
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
      if (O0) {
        const f = document.createElement("style");
        f.textContent = O0, o.appendChild(f);
      }
      this.applyCustomPrimaryColor(o);
      const u = this.getAttribute("subsidiary");
      u && u.trim() !== "" ? this.loadTheme(u, o) : this.loadThemeFromDomain(o);
      const c = document.createElement("div");
      o.appendChild(c), this.root = Cb.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
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
        await C0({
          brandFolder: o,
          shadowRoot: u
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(o) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await C0({
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
          const u = va(vt.REFRESH_TOKEN, !0) || localStorage.getItem(de.REFRESH_TOKEN);
          u ? (await Cw(u), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (u) {
          console.error("[Widget] Logout API call failed:", u);
        } finally {
          const u = localStorage.getItem("brand_data");
          zw(), sessionStorage.clear(), u && localStorage.setItem("brand_data", u), this.logoutCounter++, this.render(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
        detail: { isValid: o },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(u);
    };
    getProps() {
      const u = this.getAttribute("authority") || kb(), f = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: u,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirect-url") || this.getAttribute("redirectUrl") || void 0,
        redirectDashboardUrl: this.getAttribute("redirect-dashboard-url") || this.getAttribute("redirectDashboardUrl") || void 0,
        redirectCheckoutUrl: this.getAttribute("redirect-checkout-url") || this.getAttribute("redirectCheckoutUrl") || void 0,
        loginTitle: this.getAttribute("login-title") || this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("login-subtitle") || this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: f,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || _0,
        appleClientId: this.getAttribute("apple-client-id") || this.getAttribute("appleClientId") || $w,
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
        /* @__PURE__ */ m.jsx(Iw, { clientId: o.googleClientId || _0, children: /* @__PURE__ */ m.jsx(fb, { children: /* @__PURE__ */ m.jsx(w.StrictMode, { children: /* @__PURE__ */ m.jsx(Zw, { ...o }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
