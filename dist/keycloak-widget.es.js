
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-amber-600:oklch(66.6% .179 58.318);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-lg:32rem;--container-2xl:42rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.left-4{left:calc(var(--spacing)*4)}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[2100\\]\\!{z-index:2100!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-4{margin-block:calc(var(--spacing)*4)}.my-4\\!{margin-block:calc(var(--spacing)*4)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-0\\.5\\!{margin-top:calc(var(--spacing)*.5)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-8\\!{margin-top:calc(var(--spacing)*8)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-12{height:calc(var(--spacing)*12)}.h-12\\!{height:calc(var(--spacing)*12)!important}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-12{width:calc(var(--spacing)*12)}.w-12\\!{width:calc(var(--spacing)*12)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-20{width:calc(var(--spacing)*20)}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-2xl{max-width:var(--container-2xl)}.max-w-2xl\\!{max-width:var(--container-2xl)!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.max-w-md{max-width:var(--container-md)}.max-w-md\\!{max-width:var(--container-md)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-pulse\\!{animation:var(--animate-pulse)!important}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-default{cursor:default}.cursor-default\\!{cursor:default!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.list-disc{list-style-type:disc}.list-disc\\!{list-style-type:disc!important}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.flex-wrap{flex-wrap:wrap}.flex-wrap\\!{flex-wrap:wrap!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-start{align-items:flex-start}.items-start\\!{align-items:flex-start!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5\\!{gap:calc(var(--spacing)*.5)!important}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\!{gap:calc(var(--spacing)*1)!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-sm\\!{border-radius:var(--radius-sm)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\!{border-color:var(--color-gray-200)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-300\\!{border-color:var(--color-green-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.border-l-green-500{border-left-color:var(--color-green-500)}.border-l-green-500\\!{border-left-color:var(--color-green-500)!important}.border-l-red-500{border-left-color:var(--color-red-500)}.border-l-red-500\\!{border-left-color:var(--color-red-500)!important}.border-l-yellow-500{border-left-color:var(--color-yellow-500)}.border-l-yellow-500\\!{border-left-color:var(--color-yellow-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\!{background-color:var(--color-gray-50)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-6{padding:calc(var(--spacing)*6)}.p-6\\!{padding:calc(var(--spacing)*6)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\!{padding-inline:calc(var(--spacing)*1)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-5{padding-inline:calc(var(--spacing)*5)}.px-5\\!{padding-inline:calc(var(--spacing)*5)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.py-4{padding-block:calc(var(--spacing)*4)}.py-4\\!{padding-block:calc(var(--spacing)*4)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pb-5{padding-bottom:calc(var(--spacing)*5)}.pb-5\\!{padding-bottom:calc(var(--spacing)*5)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.pl-6{padding-left:calc(var(--spacing)*6)}.pl-6\\!{padding-left:calc(var(--spacing)*6)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-lg\\!{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xl\\!{font-size:var(--text-xl)!important;line-height:var(--tw-leading,var(--text-xl--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.leading-\\[1\\.5\\]\\!{--tw-leading:1.5!important;line-height:1.5!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-normal\\!{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wide\\!{--tw-tracking:var(--tracking-wide)!important;letter-spacing:var(--tracking-wide)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--banner-error-text\\)\\]\\!{color:var(--banner-error-text)!important}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-amber-600{color:var(--color-amber-600)}.text-amber-600\\!{color:var(--color-amber-600)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-400{color:var(--color-blue-400)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-green-900\\!{color:var(--color-green-900)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-red-900\\!{color:var(--color-red-900)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-500{color:var(--color-yellow-500)}.text-yellow-500\\!{color:var(--color-yellow-500)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-900{color:var(--color-yellow-900)}.text-yellow-900\\!{color:var(--color-yellow-900)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.uppercase\\!{text-transform:uppercase!important}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-150\\!{--tw-duration:.15s!important;transition-duration:.15s!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-200\\!{--tw-duration:.2s!important;transition-duration:.2s!important}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.group-hover\\:underline\\!:is(:where(.group):hover *){text-decoration-line:underline!important}.hover\\:border-gray-400\\!:hover{border-color:var(--color-gray-400)!important}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:underline\\!:hover{text-decoration-line:underline!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-30\\!:disabled{opacity:.3!important}.disabled\\:opacity-50:disabled{opacity:.5}@media not all and (min-width:500px){.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function Bp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Iu = { exports: {} }, Mi = {};
var Lh;
function kp() {
  if (Lh) return Mi;
  Lh = 1;
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
  return Mi.Fragment = r, Mi.jsx = o, Mi.jsxs = o, Mi;
}
var zh;
function qp() {
  return zh || (zh = 1, Iu.exports = kp()), Iu.exports;
}
var m = qp(), Wu = { exports: {} }, ue = {}, Hh;
function Gp() {
  if (Hh) return ue;
  Hh = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
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
  }, O = Object.assign, V = {};
  function K(x, B, X) {
    this.props = x, this.context = B, this.refs = V, this.updater = X || L;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(x, B) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, B, "setState");
  }, K.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = K.prototype;
  function W(x, B, X) {
    this.props = x, this.context = B, this.refs = V, this.updater = X || L;
  }
  var F = W.prototype = new Q();
  F.constructor = W, O(F, K.prototype), F.isPureReactComponent = !0;
  var se = Array.isArray;
  function te() {
  }
  var $ = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function ge(x, B, X) {
    var Z = X.ref;
    return {
      $$typeof: r,
      type: x,
      key: B,
      ref: Z !== void 0 ? Z : null,
      props: X
    };
  }
  function Xe(x, B) {
    return ge(x.type, B, x.props);
  }
  function pe(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function Me(x) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(X) {
      return B[X];
    });
  }
  var qe = /\/+/g;
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
        switch (typeof x.status == "string" ? x.then(te, te) : (x.status = "pending", x.then(
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
  function z(x, B, X, Z, de) {
    var ie = typeof x;
    (ie === "undefined" || ie === "boolean") && (x = null);
    var ye = !1;
    if (x === null) ye = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case r:
            case o:
              ye = !0;
              break;
            case S:
              return ye = x._init, z(
                ye(x._payload),
                B,
                X,
                Z,
                de
              );
          }
      }
    if (ye)
      return de = de(x), ye = Z === "" ? "." + Qe(x, 0) : Z, se(de) ? (X = "", ye != null && (X = ye.replace(qe, "$&/") + "/"), z(de, B, X, "", function(fn) {
        return fn;
      })) : de != null && (pe(de) && (de = Xe(
        de,
        X + (de.key == null || x && x.key === de.key ? "" : ("" + de.key).replace(
          qe,
          "$&/"
        ) + "/") + ye
      )), B.push(de)), 1;
    ye = 0;
    var Ce = Z === "" ? "." : Z + ":";
    if (se(x))
      for (var P = 0; P < x.length; P++)
        Z = x[P], ie = Ce + Qe(Z, P), ye += z(
          Z,
          B,
          X,
          ie,
          de
        );
    else if (P = T(x), typeof P == "function")
      for (x = P.call(x), P = 0; !(Z = x.next()).done; )
        Z = Z.value, ie = Ce + Qe(Z, P++), ye += z(
          Z,
          B,
          X,
          ie,
          de
        );
    else if (ie === "object") {
      if (typeof x.then == "function")
        return z(
          M(x),
          B,
          X,
          Z,
          de
        );
      throw B = String(x), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ye;
  }
  function Y(x, B, X) {
    if (x == null) return x;
    var Z = [], de = 0;
    return z(x, Z, "", "", function(ie) {
      return B.call(X, ie, de++);
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
  var Te = typeof reportError == "function" ? reportError : function(x) {
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
  }, xe = {
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
      if (!pe(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return ue.Activity = A, ue.Children = xe, ue.Component = K, ue.Fragment = u, ue.Profiler = f, ue.PureComponent = W, ue.StrictMode = c, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return $.H.useMemoCache(x);
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
    var Z = O({}, x.props), de = x.key;
    if (B != null)
      for (ie in B.key !== void 0 && (de = "" + B.key), B)
        !oe.call(B, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && B.ref === void 0 || (Z[ie] = B[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) Z.children = X;
    else if (1 < ie) {
      for (var ye = Array(ie), Ce = 0; Ce < ie; Ce++)
        ye[Ce] = arguments[Ce + 2];
      Z.children = ye;
    }
    return ge(x.type, de, Z);
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
    var Z, de = {}, ie = null;
    if (B != null)
      for (Z in B.key !== void 0 && (ie = "" + B.key), B)
        oe.call(B, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (de[Z] = B[Z]);
    var ye = arguments.length - 2;
    if (ye === 1) de.children = X;
    else if (1 < ye) {
      for (var Ce = Array(ye), P = 0; P < ye; P++)
        Ce[P] = arguments[P + 2];
      de.children = Ce;
    }
    if (x && x.defaultProps)
      for (Z in ye = x.defaultProps, ye)
        de[Z] === void 0 && (de[Z] = ye[Z]);
    return ge(x, ie, de);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(x) {
    return { $$typeof: b, render: x };
  }, ue.isValidElement = pe, ue.lazy = function(x) {
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
    var B = $.T, X = {};
    $.T = X;
    try {
      var Z = x(), de = $.S;
      de !== null && de(X, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(te, Te);
    } catch (ie) {
      Te(ie);
    } finally {
      B !== null && X.types !== null && (B.types = X.types), $.T = B;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, ue.use = function(x) {
    return $.H.use(x);
  }, ue.useActionState = function(x, B, X) {
    return $.H.useActionState(x, B, X);
  }, ue.useCallback = function(x, B) {
    return $.H.useCallback(x, B);
  }, ue.useContext = function(x) {
    return $.H.useContext(x);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(x, B) {
    return $.H.useDeferredValue(x, B);
  }, ue.useEffect = function(x, B) {
    return $.H.useEffect(x, B);
  }, ue.useEffectEvent = function(x) {
    return $.H.useEffectEvent(x);
  }, ue.useId = function() {
    return $.H.useId();
  }, ue.useImperativeHandle = function(x, B, X) {
    return $.H.useImperativeHandle(x, B, X);
  }, ue.useInsertionEffect = function(x, B) {
    return $.H.useInsertionEffect(x, B);
  }, ue.useLayoutEffect = function(x, B) {
    return $.H.useLayoutEffect(x, B);
  }, ue.useMemo = function(x, B) {
    return $.H.useMemo(x, B);
  }, ue.useOptimistic = function(x, B) {
    return $.H.useOptimistic(x, B);
  }, ue.useReducer = function(x, B, X) {
    return $.H.useReducer(x, B, X);
  }, ue.useRef = function(x) {
    return $.H.useRef(x);
  }, ue.useState = function(x) {
    return $.H.useState(x);
  }, ue.useSyncExternalStore = function(x, B, X) {
    return $.H.useSyncExternalStore(
      x,
      B,
      X
    );
  }, ue.useTransition = function() {
    return $.H.useTransition();
  }, ue.version = "19.2.3", ue;
}
var Bh;
function Rc() {
  return Bh || (Bh = 1, Wu.exports = Gp()), Wu.exports;
}
var w = Rc();
const Yp = /* @__PURE__ */ Bp(w);
var kh = "popstate";
function Vp(l = {}) {
  function r(u, c) {
    let { pathname: f, search: h, hash: p } = u.location;
    return gc(
      "",
      { pathname: f, search: h, hash: p },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function o(u, c) {
    return typeof c == "string" ? c : qi(c);
  }
  return Xp(
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
function cn(l, r) {
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
function qh(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r
  };
}
function gc(l, r, o = null, u) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Ml(r) : r,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || u || Kp()
  };
}
function qi({
  pathname: l = "/",
  search: r = "",
  hash: o = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o), l;
}
function Ml(l) {
  let r = {};
  if (l) {
    let o = l.indexOf("#");
    o >= 0 && (r.hash = l.substring(o), l = l.substring(0, o));
    let u = l.indexOf("?");
    u >= 0 && (r.search = l.substring(u), l = l.substring(0, u)), l && (r.pathname = l);
  }
  return r;
}
function Xp(l, r, o, u = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = u, h = c.history, p = "POP", b = null, y = v();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function v() {
    return (h.state || { idx: null }).idx;
  }
  function S() {
    p = "POP";
    let O = v(), V = O == null ? null : O - y;
    y = O, b && b({ action: p, location: L.location, delta: V });
  }
  function A(O, V) {
    p = "PUSH";
    let K = gc(L.location, O, V);
    y = v() + 1;
    let Q = qh(K, y), W = L.createHref(K);
    try {
      h.pushState(Q, "", W);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError")
        throw F;
      c.location.assign(W);
    }
    f && b && b({ action: p, location: L.location, delta: 1 });
  }
  function q(O, V) {
    p = "REPLACE";
    let K = gc(L.location, O, V);
    y = v();
    let Q = qh(K, y), W = L.createHref(K);
    h.replaceState(Q, "", W), f && b && b({ action: p, location: L.location, delta: 0 });
  }
  function T(O) {
    return Qp(O);
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
      return c.addEventListener(kh, S), b = O, () => {
        c.removeEventListener(kh, S), b = null;
      };
    },
    createHref(O) {
      return r(c, O);
    },
    createURL: T,
    encodeLocation(O) {
      let V = T(O);
      return {
        pathname: V.pathname,
        search: V.search,
        hash: V.hash
      };
    },
    push: A,
    replace: q,
    go(O) {
      return h.go(O);
    }
  };
  return L;
}
function Qp(l, r = !1) {
  let o = "http://localhost";
  typeof window < "u" && (o = window.location.origin !== "null" ? window.location.origin : window.location.href), $e(o, "No window.location.(origin|href) available to create URL");
  let u = typeof l == "string" ? l : qi(l);
  return u = u.replace(/ $/, "%20"), !r && u.startsWith("//") && (u = o + u), new URL(u, o);
}
function T0(l, r, o = "/") {
  return Zp(l, r, o, !1);
}
function Zp(l, r, o, u) {
  let c = typeof r == "string" ? Ml(r) : r, f = Gn(c.pathname || "/", o);
  if (f == null)
    return null;
  let h = N0(l);
  Fp(h);
  let p = null;
  for (let b = 0; p == null && b < h.length; ++b) {
    let y = i1(f);
    p = a1(
      h[b],
      y,
      u
    );
  }
  return p;
}
function N0(l, r = [], o = [], u = "", c = !1) {
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
    let S = kn([u, v.relativePath]), A = o.concat(v);
    h.children && h.children.length > 0 && ($e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
    ), N0(
      h.children,
      r,
      A,
      S,
      b
    )), !(h.path == null && !h.index) && r.push({
      path: S,
      score: t1(S, h.index),
      routesMeta: A
    });
  };
  return l.forEach((h, p) => {
    if (h.path === "" || !h.path?.includes("?"))
      f(h, p);
    else
      for (let b of A0(h.path))
        f(h, p, !0, b);
  }), r;
}
function A0(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [o, ...u] = r, c = o.endsWith("?"), f = o.replace(/\?$/, "");
  if (u.length === 0)
    return c ? [f, ""] : [f];
  let h = A0(u.join("/")), p = [];
  return p.push(
    ...h.map(
      (b) => b === "" ? f : [f, b].join("/")
    )
  ), c && p.push(...h), p.map(
    (b) => l.startsWith("/") && b === "" ? "/" : b
  );
}
function Fp(l) {
  l.sort(
    (r, o) => r.score !== o.score ? o.score - r.score : n1(
      r.routesMeta.map((u) => u.childrenIndex),
      o.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var $p = /^:[\w-]+$/, Jp = 3, Ip = 2, Wp = 1, Pp = 10, e1 = -2, Gh = (l) => l === "*";
function t1(l, r) {
  let o = l.split("/"), u = o.length;
  return o.some(Gh) && (u += e1), r && (u += Ip), o.filter((c) => !Gh(c)).reduce(
    (c, f) => c + ($p.test(f) ? Jp : f === "" ? Wp : Pp),
    u
  );
}
function n1(l, r) {
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
function a1(l, r, o = !1) {
  let { routesMeta: u } = l, c = {}, f = "/", h = [];
  for (let p = 0; p < u.length; ++p) {
    let b = u[p], y = p === u.length - 1, v = f === "/" ? r : r.slice(f.length) || "/", S = Rs(
      { path: b.relativePath, caseSensitive: b.caseSensitive, end: y },
      v
    ), A = b.route;
    if (!S && y && o && !u[u.length - 1].route.index && (S = Rs(
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
      pathname: kn([f, S.pathname]),
      pathnameBase: u1(
        kn([f, S.pathnameBase])
      ),
      route: A
    }), S.pathnameBase !== "/" && (f = kn([f, S.pathnameBase]));
  }
  return h;
}
function Rs(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [o, u] = l1(
    l.path,
    l.caseSensitive,
    l.end
  ), c = r.match(o);
  if (!c) return null;
  let f = c[0], h = f.replace(/(.)\/+$/, "$1"), p = c.slice(1);
  return {
    params: u.reduce(
      (y, { paramName: v, isOptional: S }, A) => {
        if (v === "*") {
          let T = p[A] || "";
          h = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
        }
        const q = p[A];
        return S && !q ? y[v] = void 0 : y[v] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: f,
    pathnameBase: h,
    pattern: l
  };
}
function l1(l, r = !1, o = !0) {
  cn(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let u = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, p, b) => (u.push({ paramName: p, isOptional: b != null }), b ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (u.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), u];
}
function i1(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return cn(
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
var C0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, r1 = (l) => C0.test(l);
function s1(l, r = "/") {
  let {
    pathname: o,
    search: u = "",
    hash: c = ""
  } = typeof l == "string" ? Ml(l) : l, f;
  if (o)
    if (r1(o))
      f = o;
    else {
      if (o.includes("//")) {
        let h = o;
        o = o.replace(/\/\/+/g, "/"), cn(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${o}`
        );
      }
      o.startsWith("/") ? f = Yh(o.substring(1), "/") : f = Yh(o, r);
    }
  else
    f = r;
  return {
    pathname: f,
    search: c1(u),
    hash: d1(c)
  };
}
function Yh(l, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c);
  }), o.length > 1 ? o.join("/") : "/";
}
function Pu(l, r, o, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function o1(l) {
  return l.filter(
    (r, o) => o === 0 || r.route.path && r.route.path.length > 0
  );
}
function _0(l) {
  let r = o1(l);
  return r.map(
    (o, u) => u === r.length - 1 ? o.pathname : o.pathnameBase
  );
}
function O0(l, r, o, u = !1) {
  let c;
  typeof l == "string" ? c = Ml(l) : (c = { ...l }, $e(
    !c.pathname || !c.pathname.includes("?"),
    Pu("?", "pathname", "search", c)
  ), $e(
    !c.pathname || !c.pathname.includes("#"),
    Pu("#", "pathname", "hash", c)
  ), $e(
    !c.search || !c.search.includes("#"),
    Pu("#", "search", "hash", c)
  ));
  let f = l === "" || c.pathname === "", h = f ? "/" : c.pathname, p;
  if (h == null)
    p = o;
  else {
    let S = r.length - 1;
    if (!u && h.startsWith("..")) {
      let A = h.split("/");
      for (; A[0] === ".."; )
        A.shift(), S -= 1;
      c.pathname = A.join("/");
    }
    p = S >= 0 ? r[S] : "/";
  }
  let b = s1(c, p), y = h && h !== "/" && h.endsWith("/"), v = (f || h === ".") && o.endsWith("/");
  return !b.pathname.endsWith("/") && (y || v) && (b.pathname += "/"), b;
}
var kn = (l) => l.join("/").replace(/\/\/+/g, "/"), u1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), c1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, d1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, f1 = class {
  constructor(l, r, o, u = !1) {
    this.status = l, this.statusText = r || "", this.internal = u, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
};
function m1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function h1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var j0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function D0(l, r) {
  let o = l;
  if (typeof o != "string" || !C0.test(o))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: o
    };
  let u = o, c = !1;
  if (j0)
    try {
      let f = new URL(window.location.href), h = o.startsWith("//") ? new URL(f.protocol + o) : new URL(o), p = Gn(h.pathname, r);
      h.origin === f.origin && p != null ? o = p + h.search + h.hash : c = !0;
    } catch {
      cn(
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
var U0 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  U0
);
var g1 = [
  "GET",
  ...U0
];
new Set(g1);
var Ll = w.createContext(null);
Ll.displayName = "DataRouter";
var As = w.createContext(null);
As.displayName = "DataRouterState";
var y1 = w.createContext(!1), M0 = w.createContext({
  isTransitioning: !1
});
M0.displayName = "ViewTransition";
var p1 = w.createContext(
  /* @__PURE__ */ new Map()
);
p1.displayName = "Fetchers";
var b1 = w.createContext(null);
b1.displayName = "Await";
var an = w.createContext(
  null
);
an.displayName = "Navigation";
var Vi = w.createContext(
  null
);
Vi.displayName = "Location";
var Vn = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Vn.displayName = "Route";
var Tc = w.createContext(null);
Tc.displayName = "RouteError";
var L0 = "REACT_ROUTER_ERROR", v1 = "REDIRECT", w1 = "ROUTE_ERROR_RESPONSE";
function E1(l) {
  if (l.startsWith(`${L0}:${v1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function S1(l) {
  if (l.startsWith(
    `${L0}:${w1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new f1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function x1(l, { relative: r } = {}) {
  $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: u } = w.useContext(an), { hash: c, pathname: f, search: h } = Xi(l, { relative: r }), p = f;
  return o !== "/" && (p = f === "/" ? o : kn([o, f])), u.createHref({ pathname: p, search: h, hash: c });
}
function Ki() {
  return w.useContext(Vi) != null;
}
function Ka() {
  return $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), w.useContext(Vi).location;
}
var z0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function H0(l) {
  w.useContext(an).static || w.useLayoutEffect(l);
}
function R1() {
  let { isDataRoute: l } = w.useContext(Vn);
  return l ? H1() : T1();
}
function T1() {
  $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = w.useContext(Ll), { basename: r, navigator: o } = w.useContext(an), { matches: u } = w.useContext(Vn), { pathname: c } = Ka(), f = JSON.stringify(_0(u)), h = w.useRef(!1);
  return H0(() => {
    h.current = !0;
  }), w.useCallback(
    (b, y = {}) => {
      if (cn(h.current, z0), !h.current) return;
      if (typeof b == "number") {
        o.go(b);
        return;
      }
      let v = O0(
        b,
        JSON.parse(f),
        c,
        y.relative === "path"
      );
      l == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : kn([r, v.pathname])), (y.replace ? o.replace : o.push)(
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
function Xi(l, { relative: r } = {}) {
  let { matches: o } = w.useContext(Vn), { pathname: u } = Ka(), c = JSON.stringify(_0(o));
  return w.useMemo(
    () => O0(
      l,
      JSON.parse(c),
      u,
      r === "path"
    ),
    [l, c, u, r]
  );
}
function N1(l, r) {
  return B0(l, r);
}
function B0(l, r, o, u, c) {
  $e(
    Ki(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = w.useContext(an), { matches: h } = w.useContext(Vn), p = h[h.length - 1], b = p ? p.params : {}, y = p ? p.pathname : "/", v = p ? p.pathnameBase : "/", S = p && p.route;
  {
    let K = S && S.path || "";
    q0(
      y,
      !S || K.endsWith("*") || K.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K === "/" ? "*" : `${K}/*`}">.`
    );
  }
  let A = Ka(), q;
  if (r) {
    let K = typeof r == "string" ? Ml(r) : r;
    $e(
      v === "/" || K.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${K.pathname}" was given in the \`location\` prop.`
    ), q = K;
  } else
    q = A;
  let T = q.pathname || "/", L = T;
  if (v !== "/") {
    let K = v.replace(/^\//, "").split("/");
    L = "/" + T.replace(/^\//, "").split("/").slice(K.length).join("/");
  }
  let O = T0(l, { pathname: L });
  cn(
    S || O != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), cn(
    O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let V = j1(
    O && O.map(
      (K) => Object.assign({}, K, {
        params: Object.assign({}, b, K.params),
        pathname: kn([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            K.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : K.pathname
        ]),
        pathnameBase: K.pathnameBase === "/" ? v : kn([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            K.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : K.pathnameBase
        ])
      })
    ),
    h,
    o,
    u,
    c
  );
  return r && V ? /* @__PURE__ */ w.createElement(
    Vi.Provider,
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
    V
  ) : V;
}
function A1() {
  let l = z1(), r = m1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), o = l instanceof Error ? l.stack : null, u = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: u }, f = { padding: "2px 4px", backgroundColor: u }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), h = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ w.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ w.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ w.createElement("h3", { style: { fontStyle: "italic" } }, r), o ? /* @__PURE__ */ w.createElement("pre", { style: c }, o) : null, h);
}
var C1 = /* @__PURE__ */ w.createElement(A1, null), k0 = class extends w.Component {
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
      const o = S1(l.digest);
      o && (l = o);
    }
    let r = l !== void 0 ? /* @__PURE__ */ w.createElement(Vn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ w.createElement(
      Tc.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ w.createElement(_1, { error: l }, r) : r;
  }
};
k0.contextType = y1;
var ec = /* @__PURE__ */ new WeakMap();
function _1({
  children: l,
  error: r
}) {
  let { basename: o } = w.useContext(an);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let u = E1(r.digest);
    if (u) {
      let c = ec.get(r);
      if (c) throw c;
      let f = D0(u.location, o);
      if (j0 && !ec.get(r))
        if (f.isExternal || u.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: u.replace
            })
          );
          throw ec.set(r, h), h;
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
function O1({ routeContext: l, match: r, children: o }) {
  let u = w.useContext(Ll);
  return u && u.static && u.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ w.createElement(Vn.Provider, { value: l }, o);
}
function j1(l, r = [], o = null, u = null, c = null) {
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
    $e(
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
        let { loaderData: A, errors: q } = o, T = S.route.loader && !A.hasOwnProperty(S.route.id) && (!q || q[S.route.id] === void 0);
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
      unstable_pattern: h1(o.matches),
      errorInfo: S
    });
  } : void 0;
  return f.reduceRight(
    (v, S, A) => {
      let q, T = !1, L = null, O = null;
      o && (q = h && S.route.id ? h[S.route.id] : void 0, L = S.route.errorElement || C1, p && (b < 0 && A === 0 ? (q0(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), T = !0, O = null) : b === A && (T = !0, O = S.route.hydrateFallbackElement || null)));
      let V = r.concat(f.slice(0, A + 1)), K = () => {
        let Q;
        return q ? Q = L : T ? Q = O : S.route.Component ? Q = /* @__PURE__ */ w.createElement(S.route.Component, null) : S.route.element ? Q = S.route.element : Q = v, /* @__PURE__ */ w.createElement(
          O1,
          {
            match: S,
            routeContext: {
              outlet: v,
              matches: V,
              isDataRoute: o != null
            },
            children: Q
          }
        );
      };
      return o && (S.route.ErrorBoundary || S.route.errorElement || A === 0) ? /* @__PURE__ */ w.createElement(
        k0,
        {
          location: o.location,
          revalidation: o.revalidation,
          component: L,
          error: q,
          children: K(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
          onError: y
        }
      ) : K();
    },
    null
  );
}
function Nc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function D1(l) {
  let r = w.useContext(Ll);
  return $e(r, Nc(l)), r;
}
function U1(l) {
  let r = w.useContext(As);
  return $e(r, Nc(l)), r;
}
function M1(l) {
  let r = w.useContext(Vn);
  return $e(r, Nc(l)), r;
}
function Ac(l) {
  let r = M1(l), o = r.matches[r.matches.length - 1];
  return $e(
    o.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function L1() {
  return Ac(
    "useRouteId"
    /* UseRouteId */
  );
}
function z1() {
  let l = w.useContext(Tc), r = U1(
    "useRouteError"
    /* UseRouteError */
  ), o = Ac(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[o];
}
function H1() {
  let { router: l } = D1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Ac(
    "useNavigate"
    /* UseNavigateStable */
  ), o = w.useRef(!1);
  return H0(() => {
    o.current = !0;
  }), w.useCallback(
    async (c, f = {}) => {
      cn(o.current, z0), o.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...f }));
    },
    [l, r]
  );
}
var Vh = {};
function q0(l, r, o) {
  !r && !Vh[l] && (Vh[l] = !0, cn(!1, o));
}
w.memo(B1);
function B1({
  routes: l,
  future: r,
  state: o,
  onError: u
}) {
  return B0(l, void 0, o, u, r);
}
function G0(l) {
  $e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function k1({
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
  typeof o == "string" && (o = Ml(o));
  let {
    pathname: y = "/",
    search: v = "",
    hash: S = "",
    state: A = null,
    key: q = "default"
  } = o, T = w.useMemo(() => {
    let L = Gn(y, p);
    return L == null ? null : {
      location: {
        pathname: L,
        search: v,
        hash: S,
        state: A,
        key: q
      },
      navigationType: u
    };
  }, [p, y, v, S, A, q, u]);
  return cn(
    T != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`
  ), T == null ? null : /* @__PURE__ */ w.createElement(an.Provider, { value: b }, /* @__PURE__ */ w.createElement(Vi.Provider, { children: r, value: T }));
}
function q1({
  children: l,
  location: r
}) {
  return N1(yc(l), r);
}
function yc(l, r = []) {
  let o = [];
  return w.Children.forEach(l, (u, c) => {
    if (!w.isValidElement(u))
      return;
    let f = [...r, c];
    if (u.type === w.Fragment) {
      o.push.apply(
        o,
        yc(u.props.children, f)
      );
      return;
    }
    $e(
      u.type === G0,
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
    u.props.children && (h.children = yc(
      u.props.children,
      f
    )), o.push(h);
  }), o;
}
var ys = "get", ps = "application/x-www-form-urlencoded";
function Cs(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function G1(l) {
  return Cs(l) && l.tagName.toLowerCase() === "button";
}
function Y1(l) {
  return Cs(l) && l.tagName.toLowerCase() === "form";
}
function V1(l) {
  return Cs(l) && l.tagName.toLowerCase() === "input";
}
function K1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function X1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !K1(l);
}
var ms = null;
function Q1() {
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
var Z1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function tc(l) {
  return l != null && !Z1.has(l) ? (cn(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ps}"`
  ), null) : l;
}
function F1(l, r) {
  let o, u, c, f, h;
  if (Y1(l)) {
    let p = l.getAttribute("action");
    u = p ? Gn(p, r) : null, o = l.getAttribute("method") || ys, c = tc(l.getAttribute("enctype")) || ps, f = new FormData(l);
  } else if (G1(l) || V1(l) && (l.type === "submit" || l.type === "image")) {
    let p = l.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = l.getAttribute("formaction") || p.getAttribute("action");
    if (u = b ? Gn(b, r) : null, o = l.getAttribute("formmethod") || p.getAttribute("method") || ys, c = tc(l.getAttribute("formenctype")) || tc(p.getAttribute("enctype")) || ps, f = new FormData(p, l), !Q1()) {
      let { name: y, type: v, value: S } = l;
      if (v === "image") {
        let A = y ? `${y}.` : "";
        f.append(`${A}x`, "0"), f.append(`${A}y`, "0");
      } else y && f.append(y, S);
    }
  } else {
    if (Cs(l))
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
function $1(l, r, o) {
  let u = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return u.pathname === "/" ? u.pathname = `_root.${o}` : r && Gn(u.pathname, r) === "/" ? u.pathname = `${r.replace(/\/$/, "")}/_root.${o}` : u.pathname = `${u.pathname.replace(/\/$/, "")}.${o}`, u;
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
async function W1(l, r, o) {
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
  return nb(
    u.flat(1).filter(I1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function Kh(l, r, o, u, c, f) {
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
function P1(l, r, { includeHydrateFallback: o } = {}) {
  return eb(
    l.map((u) => {
      let c = r.routes[u.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), o && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function eb(l) {
  return [...new Set(l)];
}
function tb(l) {
  let r = {}, o = Object.keys(l).sort();
  for (let u of o)
    r[u] = l[u];
  return r;
}
function nb(l, r) {
  let o = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((u, c) => {
    let f = JSON.stringify(tb(c));
    return o.has(f) || (o.add(f), u.push({ key: f, link: c })), u;
  }, []);
}
function Y0() {
  let l = w.useContext(Ll);
  return Cc(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function ab() {
  let l = w.useContext(As);
  return Cc(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var _c = w.createContext(void 0);
_c.displayName = "FrameworkContext";
function V0() {
  let l = w.useContext(_c);
  return Cc(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function lb(l, r) {
  let o = w.useContext(_c), [u, c] = w.useState(!1), [f, h] = w.useState(!1), { onFocus: p, onBlur: b, onMouseEnter: y, onMouseLeave: v, onTouchStart: S } = r, A = w.useRef(null);
  w.useEffect(() => {
    if (l === "render" && h(!0), l === "viewport") {
      let L = (V) => {
        V.forEach((K) => {
          h(K.isIntersecting);
        });
      }, O = new IntersectionObserver(L, { threshold: 0.5 });
      return A.current && O.observe(A.current), () => {
        O.disconnect();
      };
    }
  }, [l]), w.useEffect(() => {
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
  return o ? l !== "intent" ? [f, A, {}] : [
    f,
    A,
    {
      onFocus: Li(p, q),
      onBlur: Li(b, T),
      onMouseEnter: Li(y, q),
      onMouseLeave: Li(v, T),
      onTouchStart: Li(S, q)
    }
  ] : [!1, A, {}];
}
function Li(l, r) {
  return (o) => {
    l && l(o), o.defaultPrevented || r(o);
  };
}
function ib({ page: l, ...r }) {
  let { router: o } = Y0(), u = w.useMemo(
    () => T0(o.routes, l, o.basename),
    [o.routes, l, o.basename]
  );
  return u ? /* @__PURE__ */ w.createElement(sb, { page: l, matches: u, ...r }) : null;
}
function rb(l) {
  let { manifest: r, routeModules: o } = V0(), [u, c] = w.useState([]);
  return w.useEffect(() => {
    let f = !1;
    return W1(l, r, o).then(
      (h) => {
        f || c(h);
      }
    ), () => {
      f = !0;
    };
  }, [l, r, o]), u;
}
function sb({
  page: l,
  matches: r,
  ...o
}) {
  let u = Ka(), { manifest: c, routeModules: f } = V0(), { basename: h } = Y0(), { loaderData: p, matches: b } = ab(), y = w.useMemo(
    () => Kh(
      l,
      r,
      b,
      c,
      u,
      "data"
    ),
    [l, r, b, c, u]
  ), v = w.useMemo(
    () => Kh(
      l,
      r,
      b,
      c,
      u,
      "assets"
    ),
    [l, r, b, c, u]
  ), S = w.useMemo(() => {
    if (l === u.pathname + u.search + u.hash)
      return [];
    let T = /* @__PURE__ */ new Set(), L = !1;
    if (r.forEach((V) => {
      let K = c.routes[V.route.id];
      !K || !K.hasLoader || (!y.some((Q) => Q.route.id === V.route.id) && V.route.id in p && f[V.route.id]?.shouldRevalidate || K.hasClientLoader ? L = !0 : T.add(V.route.id));
    }), T.size === 0)
      return [];
    let O = $1(l, h, "data");
    return L && T.size > 0 && O.searchParams.set(
      "_routes",
      r.filter((V) => T.has(V.route.id)).map((V) => V.route.id).join(",")
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
  ]), A = w.useMemo(
    () => P1(v, c),
    [v, c]
  ), q = rb(v);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, S.map((T) => /* @__PURE__ */ w.createElement("link", { key: T, rel: "prefetch", as: "fetch", href: T, ...o })), A.map((T) => /* @__PURE__ */ w.createElement("link", { key: T, rel: "modulepreload", href: T, ...o })), q.map(({ key: T, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ w.createElement("link", { key: T, nonce: o.nonce, ...L })
  )));
}
function ob(...l) {
  return (r) => {
    l.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var ub = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ub && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function cb({
  basename: l,
  children: r,
  unstable_useTransitions: o,
  window: u
}) {
  let c = w.useRef();
  c.current == null && (c.current = Vp({ window: u, v5Compat: !0 }));
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
    k1,
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
var K0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, X0 = w.forwardRef(
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
    unstable_defaultShouldRevalidate: A,
    ...q
  }, T) {
    let { basename: L, unstable_useTransitions: O } = w.useContext(an), V = typeof y == "string" && K0.test(y), K = D0(y, L);
    y = K.to;
    let Q = x1(y, { relative: c }), [W, F, se] = lb(
      u,
      q
    ), te = hb(y, {
      replace: h,
      state: p,
      target: b,
      preventScrollReset: v,
      relative: c,
      viewTransition: S,
      unstable_defaultShouldRevalidate: A,
      unstable_useTransitions: O
    });
    function $(ge) {
      r && r(ge), ge.defaultPrevented || te(ge);
    }
    let oe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ w.createElement(
        "a",
        {
          ...q,
          ...se,
          href: K.absoluteURL || Q,
          onClick: K.isExternal || f ? r : $,
          ref: ob(T, F),
          target: b,
          "data-discover": !V && o === "render" ? "true" : void 0
        }
      )
    );
    return W && !V ? /* @__PURE__ */ w.createElement(w.Fragment, null, oe, /* @__PURE__ */ w.createElement(ib, { page: Q })) : oe;
  }
);
X0.displayName = "Link";
var db = w.forwardRef(
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
    let S = Xi(h, { relative: y.relative }), A = Ka(), q = w.useContext(As), { navigator: T, basename: L } = w.useContext(an), O = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    vb(S) && p === !0, V = T.encodeLocation ? T.encodeLocation(S).pathname : S.pathname, K = A.pathname, Q = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    o || (K = K.toLowerCase(), Q = Q ? Q.toLowerCase() : null, V = V.toLowerCase()), Q && L && (Q = Gn(Q, L) || Q);
    const W = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let F = K === V || !c && K.startsWith(V) && K.charAt(W) === "/", se = Q != null && (Q === V || !c && Q.startsWith(V) && Q.charAt(V.length) === "/"), te = {
      isActive: F,
      isPending: se,
      isTransitioning: O
    }, $ = F ? r : void 0, oe;
    typeof u == "function" ? oe = u(te) : oe = [
      u,
      F ? "active" : null,
      se ? "pending" : null,
      O ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ge = typeof f == "function" ? f(te) : f;
    return /* @__PURE__ */ w.createElement(
      X0,
      {
        ...y,
        "aria-current": $,
        className: oe,
        ref: v,
        style: ge,
        to: h,
        viewTransition: p
      },
      typeof b == "function" ? b(te) : b
    );
  }
);
db.displayName = "NavLink";
var fb = w.forwardRef(
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
    unstable_defaultShouldRevalidate: A,
    ...q
  }, T) => {
    let { unstable_useTransitions: L } = w.useContext(an), O = pb(), V = bb(p, { relative: y }), K = h.toLowerCase() === "get" ? "get" : "post", Q = typeof p == "string" && K0.test(p), W = (F) => {
      if (b && b(F), F.defaultPrevented) return;
      F.preventDefault();
      let se = F.nativeEvent.submitter, te = se?.getAttribute("formmethod") || h, $ = () => O(se || F.currentTarget, {
        fetcherKey: r,
        method: te,
        navigate: o,
        replace: c,
        state: f,
        relative: y,
        preventScrollReset: v,
        viewTransition: S,
        unstable_defaultShouldRevalidate: A
      });
      L && o !== !1 ? w.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ w.createElement(
      "form",
      {
        ref: T,
        method: K,
        action: V,
        onSubmit: u ? b : W,
        ...q,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
fb.displayName = "Form";
function mb(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Q0(l) {
  let r = w.useContext(Ll);
  return $e(r, mb(l)), r;
}
function hb(l, {
  target: r,
  replace: o,
  state: u,
  preventScrollReset: c,
  relative: f,
  viewTransition: h,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: b
} = {}) {
  let y = R1(), v = Ka(), S = Xi(l, { relative: f });
  return w.useCallback(
    (A) => {
      if (X1(A, r)) {
        A.preventDefault();
        let q = o !== void 0 ? o : qi(v) === qi(S), T = () => y(l, {
          replace: q,
          state: u,
          preventScrollReset: c,
          relative: f,
          viewTransition: h,
          unstable_defaultShouldRevalidate: p
        });
        b ? w.startTransition(() => T()) : T();
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
var gb = 0, yb = () => `__${String(++gb)}__`;
function pb() {
  let { router: l } = Q0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = w.useContext(an), o = L1(), u = l.fetch, c = l.navigate;
  return w.useCallback(
    async (f, h = {}) => {
      let { action: p, method: b, encType: y, formData: v, body: S } = F1(
        f,
        r
      );
      if (h.navigate === !1) {
        let A = h.fetcherKey || yb();
        await u(A, o, h.action || p, {
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
function bb(l, { relative: r } = {}) {
  let { basename: o } = w.useContext(an), u = w.useContext(Vn);
  $e(u, "useFormAction must be used inside a RouteContext");
  let [c] = u.matches.slice(-1), f = { ...Xi(l || ".", { relative: r }) }, h = Ka();
  if (l == null) {
    f.search = h.search;
    let p = new URLSearchParams(f.search), b = p.getAll("index");
    if (b.some((v) => v === "")) {
      p.delete("index"), b.filter((S) => S).forEach((S) => p.append("index", S));
      let v = p.toString();
      f.search = v ? `?${v}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (f.pathname = f.pathname === "/" ? o : kn([o, f.pathname])), qi(f);
}
function vb(l, { relative: r } = {}) {
  let o = w.useContext(M0);
  $e(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Q0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = Xi(l, { relative: r });
  if (!o.isTransitioning)
    return !1;
  let f = Gn(o.currentLocation.pathname, u) || o.currentLocation.pathname, h = Gn(o.nextLocation.pathname, u) || o.nextLocation.pathname;
  return Rs(c.pathname, h) != null || Rs(c.pathname, f) != null;
}
var nc = { exports: {} }, bt = {};
var Xh;
function wb() {
  if (Xh) return bt;
  Xh = 1;
  var l = Rc();
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
      var v = y.as, S = p(v, y.crossOrigin), A = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      v === "style" ? u.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: S,
          integrity: A,
          fetchPriority: q
        }
      ) : v === "script" && u.d.X(b, {
        crossOrigin: S,
        integrity: A,
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
var Qh;
function Eb() {
  if (Qh) return nc.exports;
  Qh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), nc.exports = wb(), nc.exports;
}
var ac = { exports: {} }, zi = {}, lc = { exports: {} }, ic = {};
var Zh;
function Sb() {
  return Zh || (Zh = 1, (function(l) {
    function r(M, z) {
      var Y = M.length;
      M.push(z);
      e: for (; 0 < Y; ) {
        var ce = Y - 1 >>> 1, Te = M[ce];
        if (0 < c(Te, z))
          M[ce] = z, M[Y] = Te, Y = ce;
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
        e: for (var ce = 0, Te = M.length, xe = Te >>> 1; ce < xe; ) {
          var x = 2 * (ce + 1) - 1, B = M[x], X = x + 1, Z = M[X];
          if (0 > c(B, Y))
            X < Te && 0 > c(Z, B) ? (M[ce] = Z, M[X] = Y, ce = X) : (M[ce] = B, M[x] = Y, ce = x);
          else if (X < Te && 0 > c(Z, Y))
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
    var b = [], y = [], v = 1, S = null, A = 3, q = !1, T = !1, L = !1, O = !1, V = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function W(M) {
      for (var z = o(y); z !== null; ) {
        if (z.callback === null) u(y);
        else if (z.startTime <= M)
          u(y), z.sortIndex = z.expirationTime, r(b, z);
        else break;
        z = o(y);
      }
    }
    function F(M) {
      if (L = !1, W(M), !T)
        if (o(b) !== null)
          T = !0, se || (se = !0, pe());
        else {
          var z = o(y);
          z !== null && Qe(F, z.startTime - M);
        }
    }
    var se = !1, te = -1, $ = 5, oe = -1;
    function ge() {
      return O ? !0 : !(l.unstable_now() - oe < $);
    }
    function Xe() {
      if (O = !1, se) {
        var M = l.unstable_now();
        oe = M;
        var z = !0;
        try {
          e: {
            T = !1, L && (L = !1, K(te), te = -1), q = !0;
            var Y = A;
            try {
              t: {
                for (W(M), S = o(b); S !== null && !(S.expirationTime > M && ge()); ) {
                  var ce = S.callback;
                  if (typeof ce == "function") {
                    S.callback = null, A = S.priorityLevel;
                    var Te = ce(
                      S.expirationTime <= M
                    );
                    if (M = l.unstable_now(), typeof Te == "function") {
                      S.callback = Te, W(M), z = !0;
                      break t;
                    }
                    S === o(b) && u(b), W(M);
                  } else u(b);
                  S = o(b);
                }
                if (S !== null) z = !0;
                else {
                  var xe = o(y);
                  xe !== null && Qe(
                    F,
                    xe.startTime - M
                  ), z = !1;
                }
              }
              break e;
            } finally {
              S = null, A = Y, q = !1;
            }
            z = void 0;
          }
        } finally {
          z ? pe() : se = !1;
        }
      }
    }
    var pe;
    if (typeof Q == "function")
      pe = function() {
        Q(Xe);
      };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), qe = Me.port2;
      Me.port1.onmessage = Xe, pe = function() {
        qe.postMessage(null);
      };
    } else
      pe = function() {
        V(Xe, 0);
      };
    function Qe(M, z) {
      te = V(function() {
        M(l.unstable_now());
      }, z);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, l.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < M ? Math.floor(1e3 / M) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, l.unstable_next = function(M) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = A;
      }
      var Y = A;
      A = z;
      try {
        return M();
      } finally {
        A = Y;
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
      var Y = A;
      A = M;
      try {
        return z();
      } finally {
        A = Y;
      }
    }, l.unstable_scheduleCallback = function(M, z, Y) {
      var ce = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? ce + Y : ce) : Y = ce, M) {
        case 1:
          var Te = -1;
          break;
        case 2:
          Te = 250;
          break;
        case 5:
          Te = 1073741823;
          break;
        case 4:
          Te = 1e4;
          break;
        default:
          Te = 5e3;
      }
      return Te = Y + Te, M = {
        id: v++,
        callback: z,
        priorityLevel: M,
        startTime: Y,
        expirationTime: Te,
        sortIndex: -1
      }, Y > ce ? (M.sortIndex = Y, r(y, M), o(b) === null && M === o(y) && (L ? (K(te), te = -1) : L = !0, Qe(F, Y - ce))) : (M.sortIndex = Te, r(b, M), T || q || (T = !0, se || (se = !0, pe()))), M;
    }, l.unstable_shouldYield = ge, l.unstable_wrapCallback = function(M) {
      var z = A;
      return function() {
        var Y = A;
        A = z;
        try {
          return M.apply(this, arguments);
        } finally {
          A = Y;
        }
      };
    };
  })(ic)), ic;
}
var Fh;
function xb() {
  return Fh || (Fh = 1, lc.exports = Sb()), lc.exports;
}
var $h;
function Rb() {
  if ($h) return zi;
  $h = 1;
  var l = {};
  var r = xb(), o = Rc(), u = Eb();
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
  var A = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), se = /* @__PURE__ */ Symbol.for("react.suspense"), te = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), ge = /* @__PURE__ */ Symbol.for("react.activity"), Xe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
  function Me(e) {
    return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var qe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === qe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case K:
        return "Profiler";
      case V:
        return "StrictMode";
      case se:
        return "Suspense";
      case te:
        return "SuspenseList";
      case ge:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case W:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case oe:
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
  }, Te = [], xe = -1;
  function x(e) {
    return { current: e };
  }
  function B(e) {
    0 > xe || (e.current = Te[xe], Te[xe] = null, xe--);
  }
  function X(e, t) {
    xe++, Te[xe] = e.current, e.current = t;
  }
  var Z = x(null), de = x(null), ie = x(null), ye = x(null);
  function Ce(e, t) {
    switch (X(ie, t), X(de, e), X(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? lh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = lh(t), e = ih(t, e);
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
  function P() {
    B(Z), B(de), B(ie);
  }
  function fn(e) {
    e.memoizedState !== null && X(ye, e);
    var t = Z.current, n = ih(t, e.type);
    t !== n && (X(de, e), X(Z, n));
  }
  function Vt(e) {
    de.current === e && (B(Z), B(de)), ye.current === e && (B(ye), Oi._currentValue = ce);
  }
  var wn, St;
  function Kt(e) {
    if (wn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        wn = t && t[1] || "", St = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wn + e + St;
  }
  var mn = !1;
  function Xn(e, t) {
    if (!e || mn) return "";
    mn = !0;
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
      mn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Kt(n) : "";
  }
  function Xa(e, t) {
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
        return Xn(e.type, !1);
      case 11:
        return Xn(e.type.render, !1);
      case 1:
        return Xn(e.type, !0);
      case 31:
        return Kt("Activity");
      default:
        return "";
    }
  }
  function Sa(e) {
    try {
      var t = "", n = null;
      do
        t += Xa(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var re = Object.prototype.hasOwnProperty, ut = r.unstable_scheduleCallback, at = r.unstable_cancelCallback, Qn = r.unstable_shouldYield, Zn = r.unstable_requestPaint, ct = r.unstable_now, Hs = r.unstable_getCurrentPriorityLevel, Ji = r.unstable_ImmediatePriority, Gl = r.unstable_UserBlockingPriority, ne = r.unstable_NormalPriority, we = r.unstable_LowPriority, ln = r.unstable_IdlePriority, Hc = r.log, Eg = r.unstable_setDisableYieldValue, Yl = null, Ut = null;
  function Fn(e) {
    if (typeof Hc == "function" && Eg(e), Ut && typeof Ut.setStrictMode == "function")
      try {
        Ut.setStrictMode(Yl, e);
      } catch {
      }
  }
  var Mt = Math.clz32 ? Math.clz32 : Rg, Sg = Math.log, xg = Math.LN2;
  function Rg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sg(e) / xg | 0) | 0;
  }
  var Ii = 256, Wi = 262144, Pi = 4194304;
  function xa(e) {
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
    return g !== 0 ? (a = g & ~s, a !== 0 ? i = xa(a) : (d &= g, d !== 0 ? i = xa(d) : n || (n = g & ~e, n !== 0 && (i = xa(n))))) : (g = a & ~s, g !== 0 ? i = xa(g) : d !== 0 ? i = xa(d) : n || (n = a & ~e, n !== 0 && (i = xa(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && (s = i & -i, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function Vl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Tg(e, t) {
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
  function Bc() {
    var e = Pi;
    return Pi <<= 1, (Pi & 62914560) === 0 && (Pi = 4194304), e;
  }
  function Bs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ng(e, t, n, a, i, s) {
    var d = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var g = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var H = 31 - Mt(n), G = 1 << H;
      g[H] = 0, E[H] = -1;
      var j = _[H];
      if (j !== null)
        for (_[H] = null, H = 0; H < j.length; H++) {
          var U = j[H];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~G;
    }
    a !== 0 && kc(e, a, 0), s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t));
  }
  function kc(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Mt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function qc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Mt(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function Gc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : ks(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function ks(e) {
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
  function qs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yc() {
    var e = Y.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ch(e.type));
  }
  function Vc(e, t) {
    var n = Y.p;
    try {
      return Y.p = e, t();
    } finally {
      Y.p = n;
    }
  }
  var $n = Math.random().toString(36).slice(2), mt = "__reactFiber$" + $n, xt = "__reactProps$" + $n, Qa = "__reactContainer$" + $n, Gs = "__reactEvents$" + $n, Ag = "__reactListeners$" + $n, Cg = "__reactHandles$" + $n, Kc = "__reactResources$" + $n, Xl = "__reactMarker$" + $n;
  function Ys(e) {
    delete e[mt], delete e[xt], delete e[Gs], delete e[Ag], delete e[Cg];
  }
  function Za(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Qa] || n[mt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = fh(e); e !== null; ) {
            if (n = e[mt]) return n;
            e = fh(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Fa(e) {
    if (e = e[mt] || e[Qa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ql(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function $a(e) {
    var t = e[Kc];
    return t || (t = e[Kc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function dt(e) {
    e[Xl] = !0;
  }
  var Xc = /* @__PURE__ */ new Set(), Qc = {};
  function Ra(e, t) {
    Ja(e, t), Ja(e + "Capture", t);
  }
  function Ja(e, t) {
    for (Qc[e] = t, e = 0; e < t.length; e++)
      Xc.add(t[e]);
  }
  var _g = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zc = {}, Fc = {};
  function Og(e) {
    return re.call(Fc, e) ? !0 : re.call(Zc, e) ? !1 : _g.test(e) ? Fc[e] = !0 : (Zc[e] = !0, !1);
  }
  function tr(e, t, n) {
    if (Og(t))
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
  function En(e, t, n, a) {
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
  function Xt(e) {
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
  function $c(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function jg(e, t, n) {
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
  function Vs(e) {
    if (!e._valueTracker) {
      var t = $c(e) ? "checked" : "value";
      e._valueTracker = jg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Jc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = $c(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ar(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Dg = /[\n"\\]/g;
  function Qt(e) {
    return e.replace(
      Dg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ks(e, t, n, a, i, s, d, g) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Xs(e, d, Xt(t)) : n != null ? Xs(e, d, Xt(n)) : a != null && e.removeAttribute("value"), i == null && s != null && (e.defaultChecked = !!s), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Xt(g) : e.removeAttribute("name");
  }
  function Ic(e, t, n, a, i, s, d, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        Vs(e);
        return;
      }
      n = n != null ? "" + Xt(n) : "", t = t != null ? "" + Xt(t) : n, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = g ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), Vs(e);
  }
  function Xs(e, t, n) {
    t === "number" && ar(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ia(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Xt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Wc(e, t, n) {
    if (t != null && (t = "" + Xt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Xt(n) : "";
  }
  function Pc(e, t, n, a) {
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
    n = Xt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Vs(e);
  }
  function Wa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ug = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ed(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Ug.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function td(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && ed(e, i, a);
    } else
      for (var s in t)
        t.hasOwnProperty(s) && ed(e, s, t[s]);
  }
  function Qs(e) {
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
  var Mg = /* @__PURE__ */ new Map([
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
  ]), Lg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lr(e) {
    return Lg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Sn() {
  }
  var Zs = null;
  function Fs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Pa = null, el = null;
  function nd(e) {
    var t = Fa(e);
    if (t && (e = t.stateNode)) {
      var n = e[xt] || null;
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
              'input[name="' + Qt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[xt] || null;
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
              a = n[t], a.form === e.form && Jc(a);
          }
          break e;
        case "textarea":
          Wc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ia(e, !!n.multiple, t, !1);
      }
    }
  }
  var $s = !1;
  function ad(e, t, n) {
    if ($s) return e(t, n);
    $s = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if ($s = !1, (Pa !== null || el !== null) && (Xr(), Pa && (t = Pa, e = el, el = Pa = null, nd(t), e)))
        for (t = 0; t < e.length; t++) nd(e[t]);
    }
  }
  function Zl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[xt] || null;
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
  var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Js = !1;
  if (xn)
    try {
      var Fl = {};
      Object.defineProperty(Fl, "passive", {
        get: function() {
          Js = !0;
        }
      }), window.addEventListener("test", Fl, Fl), window.removeEventListener("test", Fl, Fl);
    } catch {
      Js = !1;
    }
  var Jn = null, Is = null, ir = null;
  function ld() {
    if (ir) return ir;
    var e, t = Is, n = t.length, a, i = "value" in Jn ? Jn.value : Jn.textContent, s = i.length;
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
  function id() {
    return !1;
  }
  function Rt(e) {
    function t(n, a, i, s, d) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = s, this.target = d, this.currentTarget = null;
      for (var g in e)
        e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? sr : id, this.isPropagationStopped = id, this;
    }
    return A(t.prototype, {
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
  var Ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, or = Rt(Ta), $l = A({}, Ta, { view: 0, detail: 0 }), zg = Rt($l), Ws, Ps, Jl, ur = A({}, $l, {
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
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Jl && (Jl && e.type === "mousemove" ? (Ws = e.screenX - Jl.screenX, Ps = e.screenY - Jl.screenY) : Ps = Ws = 0, Jl = e), Ws);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ps;
    }
  }), rd = Rt(ur), Hg = A({}, ur, { dataTransfer: 0 }), Bg = Rt(Hg), kg = A({}, $l, { relatedTarget: 0 }), eo = Rt(kg), qg = A({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gg = Rt(qg), Yg = A({}, Ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Vg = Rt(Yg), Kg = A({}, Ta, { data: 0 }), sd = Rt(Kg), Xg = {
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
  }, Qg = {
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
  }, Zg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Fg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zg[e]) ? !!t[e] : !1;
  }
  function to() {
    return Fg;
  }
  var $g = A({}, $l, {
    key: function(e) {
      if (e.key) {
        var t = Xg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function(e) {
      return e.type === "keypress" ? rr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Jg = Rt($g), Ig = A({}, ur, {
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
  }), od = Rt(Ig), Wg = A({}, $l, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to
  }), Pg = Rt(Wg), ey = A({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ty = Rt(ey), ny = A({}, ur, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ay = Rt(ny), ly = A({}, Ta, {
    newState: 0,
    oldState: 0
  }), iy = Rt(ly), ry = [9, 13, 27, 32], no = xn && "CompositionEvent" in window, Il = null;
  xn && "documentMode" in document && (Il = document.documentMode);
  var sy = xn && "TextEvent" in window && !Il, ud = xn && (!no || Il && 8 < Il && 11 >= Il), cd = " ", dd = !1;
  function fd(e, t) {
    switch (e) {
      case "keyup":
        return ry.indexOf(t.keyCode) !== -1;
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
  function md(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tl = !1;
  function oy(e, t) {
    switch (e) {
      case "compositionend":
        return md(t);
      case "keypress":
        return t.which !== 32 ? null : (dd = !0, cd);
      case "textInput":
        return e = t.data, e === cd && dd ? null : e;
      default:
        return null;
    }
  }
  function uy(e, t) {
    if (tl)
      return e === "compositionend" || !no && fd(e, t) ? (e = ld(), ir = Is = Jn = null, tl = !1, e) : null;
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
        return ud && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cy = {
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
  function hd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cy[e.type] : t === "textarea";
  }
  function gd(e, t, n, a) {
    Pa ? el ? el.push(a) : el = [a] : Pa = a, t = Wr(t, "onChange"), 0 < t.length && (n = new or(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Wl = null, Pl = null;
  function dy(e) {
    Wm(e, 0);
  }
  function cr(e) {
    var t = Ql(e);
    if (Jc(t)) return e;
  }
  function yd(e, t) {
    if (e === "change") return t;
  }
  var pd = !1;
  if (xn) {
    var ao;
    if (xn) {
      var lo = "oninput" in document;
      if (!lo) {
        var bd = document.createElement("div");
        bd.setAttribute("oninput", "return;"), lo = typeof bd.oninput == "function";
      }
      ao = lo;
    } else ao = !1;
    pd = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function vd() {
    Wl && (Wl.detachEvent("onpropertychange", wd), Pl = Wl = null);
  }
  function wd(e) {
    if (e.propertyName === "value" && cr(Pl)) {
      var t = [];
      gd(
        t,
        Pl,
        e,
        Fs(e)
      ), ad(dy, t);
    }
  }
  function fy(e, t, n) {
    e === "focusin" ? (vd(), Wl = t, Pl = n, Wl.attachEvent("onpropertychange", wd)) : e === "focusout" && vd();
  }
  function my(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return cr(Pl);
  }
  function hy(e, t) {
    if (e === "click") return cr(t);
  }
  function gy(e, t) {
    if (e === "input" || e === "change")
      return cr(t);
  }
  function yy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Lt = typeof Object.is == "function" ? Object.is : yy;
  function ei(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!re.call(t, i) || !Lt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Ed(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Sd(e, t) {
    var n = Ed(e);
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
      n = Ed(n);
    }
  }
  function xd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Rd(e) {
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
  function io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var py = xn && "documentMode" in document && 11 >= document.documentMode, nl = null, ro = null, ti = null, so = !1;
  function Td(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    so || nl == null || nl !== ar(a) || (a = nl, "selectionStart" in a && io(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ti && ei(ti, a) || (ti = a, a = Wr(ro, "onSelect"), 0 < a.length && (t = new or(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = nl)));
  }
  function Na(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var al = {
    animationend: Na("Animation", "AnimationEnd"),
    animationiteration: Na("Animation", "AnimationIteration"),
    animationstart: Na("Animation", "AnimationStart"),
    transitionrun: Na("Transition", "TransitionRun"),
    transitionstart: Na("Transition", "TransitionStart"),
    transitioncancel: Na("Transition", "TransitionCancel"),
    transitionend: Na("Transition", "TransitionEnd")
  }, oo = {}, Nd = {};
  xn && (Nd = document.createElement("div").style, "AnimationEvent" in window || (delete al.animationend.animation, delete al.animationiteration.animation, delete al.animationstart.animation), "TransitionEvent" in window || delete al.transitionend.transition);
  function Aa(e) {
    if (oo[e]) return oo[e];
    if (!al[e]) return e;
    var t = al[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Nd)
        return oo[e] = t[n];
    return e;
  }
  var Ad = Aa("animationend"), Cd = Aa("animationiteration"), _d = Aa("animationstart"), by = Aa("transitionrun"), vy = Aa("transitionstart"), wy = Aa("transitioncancel"), Od = Aa("transitionend"), jd = /* @__PURE__ */ new Map(), uo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uo.push("scrollEnd");
  function rn(e, t) {
    jd.set(e, t), Ra(t, [e]);
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
  }, Zt = [], ll = 0, co = 0;
  function fr() {
    for (var e = ll, t = co = ll = 0; t < e; ) {
      var n = Zt[t];
      Zt[t++] = null;
      var a = Zt[t];
      Zt[t++] = null;
      var i = Zt[t];
      Zt[t++] = null;
      var s = Zt[t];
      if (Zt[t++] = null, a !== null && i !== null) {
        var d = a.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), a.pending = i;
      }
      s !== 0 && Dd(n, i, s);
    }
  }
  function mr(e, t, n, a) {
    Zt[ll++] = e, Zt[ll++] = t, Zt[ll++] = n, Zt[ll++] = a, co |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function fo(e, t, n, a) {
    return mr(e, t, n, a), hr(e);
  }
  function Ca(e, t) {
    return mr(e, null, null, t), hr(e);
  }
  function Dd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, s = e.return; s !== null; )
      s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (i = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, i && t !== null && (i = 31 - Mt(n), e = s.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), s) : null;
  }
  function hr(e) {
    if (50 < xi)
      throw xi = 0, Eu = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var il = {};
  function Ey(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zt(e, t, n, a) {
    return new Ey(e, t, n, a);
  }
  function mo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = zt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Ud(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function gr(e, t, n, a, i, s) {
    var d = 0;
    if (a = e, typeof e == "function") mo(e) && (d = 1);
    else if (typeof e == "string")
      d = Np(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ge:
          return e = zt(31, n, t, i), e.elementType = ge, e.lanes = s, e;
        case O:
          return _a(n.children, i, s, t);
        case V:
          d = 8, i |= 24;
          break;
        case K:
          return e = zt(12, n, t, i | 2), e.elementType = K, e.lanes = s, e;
        case se:
          return e = zt(13, n, t, i), e.elementType = se, e.lanes = s, e;
        case te:
          return e = zt(19, n, t, i), e.elementType = te, e.lanes = s, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                d = 10;
                break e;
              case Q:
                d = 9;
                break e;
              case F:
                d = 11;
                break e;
              case $:
                d = 14;
                break e;
              case oe:
                d = 16, a = null;
                break e;
            }
          d = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = zt(d, n, t, i), t.elementType = e, t.type = a, t.lanes = s, t;
  }
  function _a(e, t, n, a) {
    return e = zt(7, e, a, t), e.lanes = n, e;
  }
  function ho(e, t, n) {
    return e = zt(6, e, null, t), e.lanes = n, e;
  }
  function Md(e) {
    var t = zt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function go(e, t, n) {
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
  var Ld = /* @__PURE__ */ new WeakMap();
  function Ft(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ld.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Sa(t)
      }, Ld.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Sa(t)
    };
  }
  var rl = [], sl = 0, yr = null, ni = 0, $t = [], Jt = 0, In = null, hn = 1, gn = "";
  function Tn(e, t) {
    rl[sl++] = ni, rl[sl++] = yr, yr = e, ni = t;
  }
  function zd(e, t, n) {
    $t[Jt++] = hn, $t[Jt++] = gn, $t[Jt++] = In, In = e;
    var a = hn;
    e = gn;
    var i = 32 - Mt(a) - 1;
    a &= ~(1 << i), n += 1;
    var s = 32 - Mt(t) + i;
    if (30 < s) {
      var d = i - i % 5;
      s = (a & (1 << d) - 1).toString(32), a >>= d, i -= d, hn = 1 << 32 - Mt(t) + i | n << i | a, gn = s + e;
    } else
      hn = 1 << s | n << i | a, gn = e;
  }
  function yo(e) {
    e.return !== null && (Tn(e, 1), zd(e, 1, 0));
  }
  function po(e) {
    for (; e === yr; )
      yr = rl[--sl], rl[sl] = null, ni = rl[--sl], rl[sl] = null;
    for (; e === In; )
      In = $t[--Jt], $t[Jt] = null, gn = $t[--Jt], $t[Jt] = null, hn = $t[--Jt], $t[Jt] = null;
  }
  function Hd(e, t) {
    $t[Jt++] = hn, $t[Jt++] = gn, $t[Jt++] = In, hn = t.id, gn = t.overflow, In = e;
  }
  var ht = null, Ve = null, Re = !1, Wn = null, It = !1, bo = Error(c(519));
  function Pn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ai(Ft(t, e)), bo;
  }
  function Bd(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[mt] = e, t[xt] = a, n) {
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
        for (n = 0; n < Ti.length; n++)
          ve(Ti[n], t);
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
        ve("invalid", t), Ic(
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
        ve("invalid", t), Pc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || nh(t.textContent, n) ? (a.popover != null && (ve("beforetoggle", t), ve("toggle", t)), a.onScroll != null && ve("scroll", t), a.onScrollEnd != null && ve("scrollend", t), a.onClick != null && (t.onclick = Sn), t = !0) : t = !1, t || Pn(e, !0);
  }
  function kd(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
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
          ht = ht.return;
      }
  }
  function ol(e) {
    if (e !== ht) return !1;
    if (!Re) return kd(e), Re = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || zu(e.type, e.memoizedProps)), n = !n), n && Ve && Pn(e), kd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ve = dh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Ve = dh(e);
    } else
      t === 27 ? (t = Ve, ma(e.type) ? (e = Gu, Gu = null, Ve = e) : Ve = t) : Ve = ht ? Pt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    Ve = ht = null, Re = !1;
  }
  function vo() {
    var e = Wn;
    return e !== null && (Ct === null ? Ct = e : Ct.push.apply(
      Ct,
      e
    ), Wn = null), e;
  }
  function ai(e) {
    Wn === null ? Wn = [e] : Wn.push(e);
  }
  var wo = x(null), ja = null, Nn = null;
  function ea(e, t, n) {
    X(wo, t._currentValue), t._currentValue = n;
  }
  function An(e) {
    e._currentValue = wo.current, B(wo);
  }
  function Eo(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function So(e, t, n, a) {
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
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), Eo(
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
        d.lanes |= n, s = d.alternate, s !== null && (s.lanes |= n), Eo(d, n, e), d = null;
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
  function ul(e, t, n, a) {
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
          Lt(i.pendingProps.value, d.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (i === ye.current) {
        if (d = i.alternate, d === null) throw Error(c(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Oi) : e = [Oi]);
      }
      i = i.return;
    }
    e !== null && So(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function pr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Lt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Da(e) {
    ja = e, Nn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return qd(ja, e);
  }
  function br(e, t) {
    return ja === null && Da(e), qd(e, t);
  }
  function qd(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Nn === null) {
      if (e === null) throw Error(c(308));
      Nn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Nn = Nn.next = t;
    return n;
  }
  var Sy = typeof AbortController < "u" ? AbortController : function() {
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
  }, xy = r.unstable_scheduleCallback, Ry = r.unstable_NormalPriority, lt = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xo() {
    return {
      controller: new Sy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function li(e) {
    e.refCount--, e.refCount === 0 && xy(Ry, function() {
      e.controller.abort();
    });
  }
  var ii = null, Ro = 0, cl = 0, dl = null;
  function Ty(e, t) {
    if (ii === null) {
      var n = ii = [];
      Ro = 0, cl = Au(), dl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Ro++, t.then(Gd, Gd), t;
  }
  function Gd() {
    if (--Ro === 0 && ii !== null) {
      dl !== null && (dl.status = "fulfilled");
      var e = ii;
      ii = null, cl = 0, dl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ny(e, t) {
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
  var Yd = z.S;
  z.S = function(e, t) {
    Nm = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && Ty(e, t), Yd !== null && Yd(e, t);
  };
  var Ua = x(null);
  function To() {
    var e = Ua.current;
    return e !== null ? e : ke.pooledCache;
  }
  function vr(e, t) {
    t === null ? X(Ua, Ua.current) : X(Ua, t.pool);
  }
  function Vd() {
    var e = To();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var fl = Error(c(460)), No = Error(c(474)), wr = Error(c(542)), Er = { then: function() {
  } };
  function Kd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Xd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Sn, Sn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Zd(e), e;
      default:
        if (typeof t.status == "string") t.then(Sn, Sn);
        else {
          if (e = ke, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Zd(e), e;
        }
        throw La = t, fl;
    }
  }
  function Ma(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (La = n, fl) : n;
    }
  }
  var La = null;
  function Qd() {
    if (La === null) throw Error(c(459));
    var e = La;
    return La = null, e;
  }
  function Zd(e) {
    if (e === fl || e === wr)
      throw Error(c(483));
  }
  var ml = null, ri = 0;
  function Sr(e) {
    var t = ri;
    return ri += 1, ml === null && (ml = []), Xd(ml, e, t);
  }
  function si(e, t) {
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
  function Fd(e) {
    function t(N, R) {
      if (e) {
        var C = N.deletions;
        C === null ? (N.deletions = [R], N.flags |= 16) : C.push(R);
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
      return N = Rn(N, R), N.index = 0, N.sibling = null, N;
    }
    function s(N, R, C) {
      return N.index = C, e ? (C = N.alternate, C !== null ? (C = C.index, C < R ? (N.flags |= 67108866, R) : C) : (N.flags |= 67108866, R)) : (N.flags |= 1048576, R);
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function g(N, R, C, k) {
      return R === null || R.tag !== 6 ? (R = ho(C, N.mode, k), R.return = N, R) : (R = i(R, C), R.return = N, R);
    }
    function E(N, R, C, k) {
      var ee = C.type;
      return ee === O ? H(
        N,
        R,
        C.props.children,
        k,
        C.key
      ) : R !== null && (R.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === oe && Ma(ee) === R.type) ? (R = i(R, C.props), si(R, C), R.return = N, R) : (R = gr(
        C.type,
        C.key,
        C.props,
        null,
        N.mode,
        k
      ), si(R, C), R.return = N, R);
    }
    function _(N, R, C, k) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== C.containerInfo || R.stateNode.implementation !== C.implementation ? (R = go(C, N.mode, k), R.return = N, R) : (R = i(R, C.children || []), R.return = N, R);
    }
    function H(N, R, C, k, ee) {
      return R === null || R.tag !== 7 ? (R = _a(
        C,
        N.mode,
        k,
        ee
      ), R.return = N, R) : (R = i(R, C), R.return = N, R);
    }
    function G(N, R, C) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = ho(
          "" + R,
          N.mode,
          C
        ), R.return = N, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case T:
            return C = gr(
              R.type,
              R.key,
              R.props,
              null,
              N.mode,
              C
            ), si(C, R), C.return = N, C;
          case L:
            return R = go(
              R,
              N.mode,
              C
            ), R.return = N, R;
          case oe:
            return R = Ma(R), G(N, R, C);
        }
        if (M(R) || Me(R))
          return R = _a(
            R,
            N.mode,
            C,
            null
          ), R.return = N, R;
        if (typeof R.then == "function")
          return G(N, Sr(R), C);
        if (R.$$typeof === W)
          return G(
            N,
            br(N, R),
            C
          );
        xr(N, R);
      }
      return null;
    }
    function j(N, R, C, k) {
      var ee = R !== null ? R.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return ee !== null ? null : g(N, R, "" + C, k);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case T:
            return C.key === ee ? E(N, R, C, k) : null;
          case L:
            return C.key === ee ? _(N, R, C, k) : null;
          case oe:
            return C = Ma(C), j(N, R, C, k);
        }
        if (M(C) || Me(C))
          return ee !== null ? null : H(N, R, C, k, null);
        if (typeof C.then == "function")
          return j(
            N,
            R,
            Sr(C),
            k
          );
        if (C.$$typeof === W)
          return j(
            N,
            R,
            br(N, C),
            k
          );
        xr(N, C);
      }
      return null;
    }
    function U(N, R, C, k, ee) {
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
        return N = N.get(C) || null, g(R, N, "" + k, ee);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case T:
            return N = N.get(
              k.key === null ? C : k.key
            ) || null, E(R, N, k, ee);
          case L:
            return N = N.get(
              k.key === null ? C : k.key
            ) || null, _(R, N, k, ee);
          case oe:
            return k = Ma(k), U(
              N,
              R,
              C,
              k,
              ee
            );
        }
        if (M(k) || Me(k))
          return N = N.get(C) || null, H(R, N, k, ee, null);
        if (typeof k.then == "function")
          return U(
            N,
            R,
            C,
            Sr(k),
            ee
          );
        if (k.$$typeof === W)
          return U(
            N,
            R,
            C,
            br(R, k),
            ee
          );
        xr(R, k);
      }
      return null;
    }
    function J(N, R, C, k) {
      for (var ee = null, Ne = null, I = R, he = R = 0, Se = null; I !== null && he < C.length; he++) {
        I.index > he ? (Se = I, I = null) : Se = I.sibling;
        var Ae = j(
          N,
          I,
          C[he],
          k
        );
        if (Ae === null) {
          I === null && (I = Se);
          break;
        }
        e && I && Ae.alternate === null && t(N, I), R = s(Ae, R, he), Ne === null ? ee = Ae : Ne.sibling = Ae, Ne = Ae, I = Se;
      }
      if (he === C.length)
        return n(N, I), Re && Tn(N, he), ee;
      if (I === null) {
        for (; he < C.length; he++)
          I = G(N, C[he], k), I !== null && (R = s(
            I,
            R,
            he
          ), Ne === null ? ee = I : Ne.sibling = I, Ne = I);
        return Re && Tn(N, he), ee;
      }
      for (I = a(I); he < C.length; he++)
        Se = U(
          I,
          N,
          he,
          C[he],
          k
        ), Se !== null && (e && Se.alternate !== null && I.delete(
          Se.key === null ? he : Se.key
        ), R = s(
          Se,
          R,
          he
        ), Ne === null ? ee = Se : Ne.sibling = Se, Ne = Se);
      return e && I.forEach(function(ba) {
        return t(N, ba);
      }), Re && Tn(N, he), ee;
    }
    function ae(N, R, C, k) {
      if (C == null) throw Error(c(151));
      for (var ee = null, Ne = null, I = R, he = R = 0, Se = null, Ae = C.next(); I !== null && !Ae.done; he++, Ae = C.next()) {
        I.index > he ? (Se = I, I = null) : Se = I.sibling;
        var ba = j(N, I, Ae.value, k);
        if (ba === null) {
          I === null && (I = Se);
          break;
        }
        e && I && ba.alternate === null && t(N, I), R = s(ba, R, he), Ne === null ? ee = ba : Ne.sibling = ba, Ne = ba, I = Se;
      }
      if (Ae.done)
        return n(N, I), Re && Tn(N, he), ee;
      if (I === null) {
        for (; !Ae.done; he++, Ae = C.next())
          Ae = G(N, Ae.value, k), Ae !== null && (R = s(Ae, R, he), Ne === null ? ee = Ae : Ne.sibling = Ae, Ne = Ae);
        return Re && Tn(N, he), ee;
      }
      for (I = a(I); !Ae.done; he++, Ae = C.next())
        Ae = U(I, N, he, Ae.value, k), Ae !== null && (e && Ae.alternate !== null && I.delete(Ae.key === null ? he : Ae.key), R = s(Ae, R, he), Ne === null ? ee = Ae : Ne.sibling = Ae, Ne = Ae);
      return e && I.forEach(function(Hp) {
        return t(N, Hp);
      }), Re && Tn(N, he), ee;
    }
    function He(N, R, C, k) {
      if (typeof C == "object" && C !== null && C.type === O && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case T:
            e: {
              for (var ee = C.key; R !== null; ) {
                if (R.key === ee) {
                  if (ee = C.type, ee === O) {
                    if (R.tag === 7) {
                      n(
                        N,
                        R.sibling
                      ), k = i(
                        R,
                        C.props.children
                      ), k.return = N, N = k;
                      break e;
                    }
                  } else if (R.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === oe && Ma(ee) === R.type) {
                    n(
                      N,
                      R.sibling
                    ), k = i(R, C.props), si(k, C), k.return = N, N = k;
                    break e;
                  }
                  n(N, R);
                  break;
                } else t(N, R);
                R = R.sibling;
              }
              C.type === O ? (k = _a(
                C.props.children,
                N.mode,
                k,
                C.key
              ), k.return = N, N = k) : (k = gr(
                C.type,
                C.key,
                C.props,
                null,
                N.mode,
                k
              ), si(k, C), k.return = N, N = k);
            }
            return d(N);
          case L:
            e: {
              for (ee = C.key; R !== null; ) {
                if (R.key === ee)
                  if (R.tag === 4 && R.stateNode.containerInfo === C.containerInfo && R.stateNode.implementation === C.implementation) {
                    n(
                      N,
                      R.sibling
                    ), k = i(R, C.children || []), k.return = N, N = k;
                    break e;
                  } else {
                    n(N, R);
                    break;
                  }
                else t(N, R);
                R = R.sibling;
              }
              k = go(C, N.mode, k), k.return = N, N = k;
            }
            return d(N);
          case oe:
            return C = Ma(C), He(
              N,
              R,
              C,
              k
            );
        }
        if (M(C))
          return J(
            N,
            R,
            C,
            k
          );
        if (Me(C)) {
          if (ee = Me(C), typeof ee != "function") throw Error(c(150));
          return C = ee.call(C), ae(
            N,
            R,
            C,
            k
          );
        }
        if (typeof C.then == "function")
          return He(
            N,
            R,
            Sr(C),
            k
          );
        if (C.$$typeof === W)
          return He(
            N,
            R,
            br(N, C),
            k
          );
        xr(N, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, R !== null && R.tag === 6 ? (n(N, R.sibling), k = i(R, C), k.return = N, N = k) : (n(N, R), k = ho(C, N.mode, k), k.return = N, N = k), d(N)) : n(N, R);
    }
    return function(N, R, C, k) {
      try {
        ri = 0;
        var ee = He(
          N,
          R,
          C,
          k
        );
        return ml = null, ee;
      } catch (I) {
        if (I === fl || I === wr) throw I;
        var Ne = zt(29, I, null, N.mode);
        return Ne.lanes = k, Ne.return = N, Ne;
      }
    };
  }
  var za = Fd(!0), $d = Fd(!1), ta = !1;
  function Ao(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Co(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function na(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function aa(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (_e & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = hr(e), Dd(e, null, n), t;
    }
    return mr(e, a, t, n), hr(e);
  }
  function oi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, qc(e, n);
    }
  }
  function _o(e, t) {
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
  var Oo = !1;
  function ui() {
    if (Oo) {
      var e = dl;
      if (e !== null) throw e;
    }
  }
  function ci(e, t, n, a) {
    Oo = !1;
    var i = e.updateQueue;
    ta = !1;
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
        var j = g.lane & -536870913, U = j !== g.lane;
        if (U ? (Ee & j) === j : (a & j) === j) {
          j !== 0 && j === cl && (Oo = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ae = g;
            j = t;
            var He = n;
            switch (ae.tag) {
              case 1:
                if (J = ae.payload, typeof J == "function") {
                  G = J.call(He, G, j);
                  break e;
                }
                G = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ae.payload, j = typeof J == "function" ? J.call(He, G, j) : J, j == null) break e;
                G = A({}, G, j);
                break e;
              case 2:
                ta = !0;
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
          }, H === null ? (_ = H = U, E = G) : H = H.next = U, d |= j;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null)
            break;
          U = g, g = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      H === null && (E = G), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = H, s === null && (i.shared.lanes = 0), oa |= d, e.lanes = d, e.memoizedState = G;
    }
  }
  function Jd(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Id(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Jd(n[e], t);
  }
  var hl = x(null), Rr = x(0);
  function Wd(e, t) {
    e = zn, X(Rr, e), X(hl, t), zn = e | t.baseLanes;
  }
  function jo() {
    X(Rr, zn), X(hl, hl.current);
  }
  function Do() {
    zn = Rr.current, B(hl), B(Rr);
  }
  var Ht = x(null), Wt = null;
  function la(e) {
    var t = e.alternate;
    X(Pe, Pe.current & 1), X(Ht, e), Wt === null && (t === null || hl.current !== null || t.memoizedState !== null) && (Wt = e);
  }
  function Uo(e) {
    X(Pe, Pe.current), X(Ht, e), Wt === null && (Wt = e);
  }
  function Pd(e) {
    e.tag === 22 ? (X(Pe, Pe.current), X(Ht, e), Wt === null && (Wt = e)) : ia();
  }
  function ia() {
    X(Pe, Pe.current), X(Ht, Ht.current);
  }
  function Bt(e) {
    B(Ht), Wt === e && (Wt = null), B(Pe);
  }
  var Pe = x(0);
  function Tr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || ku(n) || qu(n)))
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
  var Cn = 0, fe = null, Le = null, it = null, Nr = !1, gl = !1, Ha = !1, Ar = 0, di = 0, yl = null, Ay = 0;
  function Je() {
    throw Error(c(321));
  }
  function Mo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Lt(e[n], t[n])) return !1;
    return !0;
  }
  function Lo(e, t, n, a, i, s) {
    return Cn = s, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? Hf : Jo, Ha = !1, s = n(a, i), Ha = !1, gl && (s = tf(
      t,
      n,
      a,
      i
    )), ef(e), s;
  }
  function ef(e) {
    z.H = hi;
    var t = Le !== null && Le.next !== null;
    if (Cn = 0, it = Le = fe = null, Nr = !1, di = 0, yl = null, t) throw Error(c(300));
    e === null || rt || (e = e.dependencies, e !== null && pr(e) && (rt = !0));
  }
  function tf(e, t, n, a) {
    fe = e;
    var i = 0;
    do {
      if (gl && (yl = null), di = 0, gl = !1, 25 <= i) throw Error(c(301));
      if (i += 1, it = Le = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      z.H = Bf, s = t(n, a);
    } while (gl);
    return s;
  }
  function Cy() {
    var e = z.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? fi(t) : t, e = e.useState()[0], (Le !== null ? Le.memoizedState : null) !== e && (fe.flags |= 1024), t;
  }
  function zo() {
    var e = Ar !== 0;
    return Ar = 0, e;
  }
  function Ho(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Bo(e) {
    if (Nr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Nr = !1;
    }
    Cn = 0, it = Le = fe = null, gl = !1, di = Ar = 0, yl = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? fe.memoizedState = it = e : it = it.next = e, it;
  }
  function et() {
    if (Le === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = it === null ? fe.memoizedState : it.next;
    if (t !== null)
      it = t, Le = e;
    else {
      if (e === null)
        throw fe.alternate === null ? Error(c(467)) : Error(c(310));
      Le = e, e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, it === null ? fe.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Cr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fi(e) {
    var t = di;
    return di += 1, yl === null && (yl = []), e = Xd(yl, e, t), t = fe, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Hf : Jo), e;
  }
  function _r(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fi(e);
      if (e.$$typeof === W) return gt(e);
    }
    throw Error(c(438, String(e)));
  }
  function ko(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Cr(), fe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Xe;
    return t.index++, n;
  }
  function _n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Or(e) {
    var t = et();
    return qo(t, Le, e);
  }
  function qo(e, t, n) {
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
        if (G !== _.lane ? (Ee & G) === G : (Cn & G) === G) {
          var j = _.revertLane;
          if (j === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), G === cl && (H = !0);
          else if ((Cn & j) === j) {
            _ = _.next, j === cl && (H = !0);
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
            }, E === null ? (g = E = G, d = s) : E = E.next = G, fe.lanes |= j, oa |= j;
          G = _.action, Ha && n(s, G), s = _.hasEagerState ? _.eagerState : n(s, G);
        } else
          j = {
            lane: G,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (g = E = j, d = s) : E = E.next = j, fe.lanes |= G, oa |= G;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? d = s : E.next = g, !Lt(s, e.memoizedState) && (rt = !0, H && (n = dl, n !== null)))
        throw n;
      e.memoizedState = s, e.baseState = d, e.baseQueue = E, a.lastRenderedState = s;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Go(e) {
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
      Lt(s, t.memoizedState) || (rt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, a];
  }
  function nf(e, t, n) {
    var a = fe, i = et(), s = Re;
    if (s) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var d = !Lt(
      (Le || i).memoizedState,
      n
    );
    if (d && (i.memoizedState = n, rt = !0), i = i.queue, Ko(rf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || d || it !== null && it.memoizedState.tag & 1) {
      if (a.flags |= 2048, pl(
        9,
        { destroy: void 0 },
        lf.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), ke === null) throw Error(c(349));
      s || (Cn & 127) !== 0 || af(a, t, n);
    }
    return n;
  }
  function af(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = Cr(), fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function lf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, sf(t) && of(e);
  }
  function rf(e, t, n) {
    return n(function() {
      sf(t) && of(e);
    });
  }
  function sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Lt(e, n);
    } catch {
      return !0;
    }
  }
  function of(e) {
    var t = Ca(e, 2);
    t !== null && _t(t, e, 2);
  }
  function Yo(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ha) {
        Fn(!0);
        try {
          n();
        } finally {
          Fn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _n,
      lastRenderedState: e
    }, t;
  }
  function uf(e, t, n, a) {
    return e.baseState = n, qo(
      e,
      Le,
      typeof a == "function" ? a : _n
    );
  }
  function _y(e, t, n, a, i) {
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
      z.T !== null ? n(!0) : s.isTransition = !1, a(s), n = t.pending, n === null ? (s.next = t.pending = s, cf(t, s)) : (s.next = n.next, t.pending = n.next = s);
    }
  }
  function cf(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var s = z.T, d = {};
      z.T = d;
      try {
        var g = n(i, a), E = z.S;
        E !== null && E(d, g), df(e, t, g);
      } catch (_) {
        Vo(e, t, _);
      } finally {
        s !== null && d.types !== null && (s.types = d.types), z.T = s;
      }
    } else
      try {
        s = n(i, a), df(e, t, s);
      } catch (_) {
        Vo(e, t, _);
      }
  }
  function df(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        ff(e, t, a);
      },
      function(a) {
        return Vo(e, t, a);
      }
    ) : ff(e, t, n);
  }
  function ff(e, t, n) {
    t.status = "fulfilled", t.value = n, mf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, cf(e, n)));
  }
  function Vo(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, mf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function mf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hf(e, t) {
    return t;
  }
  function gf(e, t) {
    if (Re) {
      var n = ke.formState;
      if (n !== null) {
        e: {
          var a = fe;
          if (Re) {
            if (Ve) {
              t: {
                for (var i = Ve, s = It; i.nodeType !== 8; ) {
                  if (!s) {
                    i = null;
                    break t;
                  }
                  if (i = Pt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                s = i.data, i = s === "F!" || s === "F" ? i : null;
              }
              if (i) {
                Ve = Pt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Pn(a);
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
      lastRenderedReducer: hf,
      lastRenderedState: t
    }, n.queue = a, n = Mf.bind(
      null,
      fe,
      a
    ), a.dispatch = n, a = Yo(!1), s = $o.bind(
      null,
      fe,
      !1,
      a.queue
    ), a = wt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = _y.bind(
      null,
      fe,
      i,
      s,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function yf(e) {
    var t = et();
    return pf(t, Le, e);
  }
  function pf(e, t, n) {
    if (t = qo(
      e,
      t,
      hf
    )[0], e = Or(_n)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = fi(t);
      } catch (d) {
        throw d === fl ? wr : d;
      }
    else a = t;
    t = et();
    var i = t.queue, s = i.dispatch;
    return n !== t.memoizedState && (fe.flags |= 2048, pl(
      9,
      { destroy: void 0 },
      Oy.bind(null, i, n),
      null
    )), [a, s, e];
  }
  function Oy(e, t) {
    e.action = t;
  }
  function bf(e) {
    var t = et(), n = Le;
    if (n !== null)
      return pf(t, n, e);
    et(), t = t.memoizedState, n = et();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function pl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = fe.updateQueue, t === null && (t = Cr(), fe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function vf() {
    return et().memoizedState;
  }
  function jr(e, t, n, a) {
    var i = wt();
    fe.flags |= e, i.memoizedState = pl(
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
    Le !== null && a !== null && Mo(a, Le.memoizedState.deps) ? i.memoizedState = pl(t, s, n, a) : (fe.flags |= e, i.memoizedState = pl(
      1 | t,
      s,
      n,
      a
    ));
  }
  function wf(e, t) {
    jr(8390656, 8, e, t);
  }
  function Ko(e, t) {
    Dr(2048, 8, e, t);
  }
  function jy(e) {
    fe.flags |= 4;
    var t = fe.updateQueue;
    if (t === null)
      t = Cr(), fe.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Ef(e) {
    var t = et().memoizedState;
    return jy({ ref: t, nextImpl: e }), function() {
      if ((_e & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Sf(e, t) {
    return Dr(4, 2, e, t);
  }
  function xf(e, t) {
    return Dr(4, 4, e, t);
  }
  function Rf(e, t) {
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
  function Tf(e, t, n) {
    n = n != null ? n.concat([e]) : null, Dr(4, 4, Rf.bind(null, t, e), n);
  }
  function Xo() {
  }
  function Nf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Mo(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Af(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Mo(t, a[1]))
      return a[0];
    if (a = e(), Ha) {
      Fn(!0);
      try {
        e();
      } finally {
        Fn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Qo(e, t, n) {
    return n === void 0 || (Cn & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Cm(), fe.lanes |= e, oa |= e, n);
  }
  function Cf(e, t, n, a) {
    return Lt(n, t) ? n : hl.current !== null ? (e = Qo(e, n, a), Lt(e, t) || (rt = !0), e) : (Cn & 42) === 0 || (Cn & 1073741824) !== 0 && (Ee & 261930) === 0 ? (rt = !0, e.memoizedState = n) : (e = Cm(), fe.lanes |= e, oa |= e, t);
  }
  function _f(e, t, n, a, i) {
    var s = Y.p;
    Y.p = s !== 0 && 8 > s ? s : 8;
    var d = z.T, g = {};
    z.T = g, $o(e, !1, t, n);
    try {
      var E = i(), _ = z.S;
      if (_ !== null && _(g, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var H = Ny(
          E,
          a
        );
        mi(
          e,
          t,
          H,
          Gt(e)
        );
      } else
        mi(
          e,
          t,
          a,
          Gt(e)
        );
    } catch (G) {
      mi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        Gt()
      );
    } finally {
      Y.p = s, d !== null && g.types !== null && (d.types = g.types), z.T = d;
    }
  }
  function Dy() {
  }
  function Zo(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Of(e).queue;
    _f(
      e,
      i,
      t,
      ce,
      n === null ? Dy : function() {
        return jf(e), n(a);
      }
    );
  }
  function Of(e) {
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
        lastRenderedReducer: _n,
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
        lastRenderedReducer: _n,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function jf(e) {
    var t = Of(e);
    t.next === null && (t = e.alternate.memoizedState), mi(
      e,
      t.next.queue,
      {},
      Gt()
    );
  }
  function Fo() {
    return gt(Oi);
  }
  function Df() {
    return et().memoizedState;
  }
  function Uf() {
    return et().memoizedState;
  }
  function Uy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt();
          e = na(n);
          var a = aa(t, e, n);
          a !== null && (_t(a, t, n), oi(a, t, n)), t = { cache: xo() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function My(e, t, n) {
    var a = Gt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ur(e) ? Lf(t, n) : (n = fo(e, t, n, a), n !== null && (_t(n, e, a), zf(n, t, a)));
  }
  function Mf(e, t, n) {
    var a = Gt();
    mi(e, t, n, a);
  }
  function mi(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ur(e)) Lf(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
          var d = t.lastRenderedState, g = s(d, n);
          if (i.hasEagerState = !0, i.eagerState = g, Lt(g, d))
            return mr(e, t, i, 0), ke === null && fr(), !1;
        } catch {
        }
      if (n = fo(e, t, i, a), n !== null)
        return _t(n, e, a), zf(n, t, a), !0;
    }
    return !1;
  }
  function $o(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Au(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ur(e)) {
      if (t) throw Error(c(479));
    } else
      t = fo(
        e,
        n,
        a,
        2
      ), t !== null && _t(t, e, 2);
  }
  function Ur(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Lf(e, t) {
    gl = Nr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function zf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, qc(e, n);
    }
  }
  var hi = {
    readContext: gt,
    use: _r,
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
  hi.useEffectEvent = Je;
  var Hf = {
    readContext: gt,
    use: _r,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: wf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, jr(
        4194308,
        4,
        Rf.bind(null, t, e),
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
      if (Ha) {
        Fn(!0);
        try {
          e();
        } finally {
          Fn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = wt();
      if (n !== void 0) {
        var i = n(t);
        if (Ha) {
          Fn(!0);
          try {
            n(t);
          } finally {
            Fn(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = My.bind(
        null,
        fe,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Yo(e);
      var t = e.queue, n = Mf.bind(null, fe, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var n = wt();
      return Qo(n, e, t);
    },
    useTransition: function() {
      var e = Yo(!1);
      return e = _f.bind(
        null,
        fe,
        e.queue,
        !0,
        !1
      ), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = fe, i = wt();
      if (Re) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), ke === null)
          throw Error(c(349));
        (Ee & 127) !== 0 || af(a, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return i.queue = s, wf(rf.bind(null, a, s, e), [
        e
      ]), a.flags |= 2048, pl(
        9,
        { destroy: void 0 },
        lf.bind(
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
      var e = wt(), t = ke.identifierPrefix;
      if (Re) {
        var n = gn, a = hn;
        n = (a & ~(1 << 32 - Mt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ay++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fo,
    useFormState: gf,
    useActionState: gf,
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
      return t.queue = n, t = $o.bind(
        null,
        fe,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: ko,
    useCacheRefresh: function() {
      return wt().memoizedState = Uy.bind(
        null,
        fe
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((_e & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Jo = {
    readContext: gt,
    use: _r,
    useCallback: Nf,
    useContext: gt,
    useEffect: Ko,
    useImperativeHandle: Tf,
    useInsertionEffect: Sf,
    useLayoutEffect: xf,
    useMemo: Af,
    useReducer: Or,
    useRef: vf,
    useState: function() {
      return Or(_n);
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var n = et();
      return Cf(
        n,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Or(_n)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : fi(e),
        t
      ];
    },
    useSyncExternalStore: nf,
    useId: Df,
    useHostTransitionStatus: Fo,
    useFormState: yf,
    useActionState: yf,
    useOptimistic: function(e, t) {
      var n = et();
      return uf(n, Le, e, t);
    },
    useMemoCache: ko,
    useCacheRefresh: Uf
  };
  Jo.useEffectEvent = Ef;
  var Bf = {
    readContext: gt,
    use: _r,
    useCallback: Nf,
    useContext: gt,
    useEffect: Ko,
    useImperativeHandle: Tf,
    useInsertionEffect: Sf,
    useLayoutEffect: xf,
    useMemo: Af,
    useReducer: Go,
    useRef: vf,
    useState: function() {
      return Go(_n);
    },
    useDebugValue: Xo,
    useDeferredValue: function(e, t) {
      var n = et();
      return Le === null ? Qo(n, e, t) : Cf(
        n,
        Le.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Go(_n)[0], t = et().memoizedState;
      return [
        typeof e == "boolean" ? e : fi(e),
        t
      ];
    },
    useSyncExternalStore: nf,
    useId: Df,
    useHostTransitionStatus: Fo,
    useFormState: bf,
    useActionState: bf,
    useOptimistic: function(e, t) {
      var n = et();
      return Le !== null ? uf(n, Le, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: ko,
    useCacheRefresh: Uf
  };
  Bf.useEffectEvent = Ef;
  function Io(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : A({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wo = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Gt(), i = na(a);
      i.payload = t, n != null && (i.callback = n), t = aa(e, i, a), t !== null && (_t(t, e, a), oi(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Gt(), i = na(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = aa(e, i, a), t !== null && (_t(t, e, a), oi(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Gt(), a = na(n);
      a.tag = 2, t != null && (a.callback = t), t = aa(e, a, n), t !== null && (_t(t, e, n), oi(t, e, n));
    }
  };
  function kf(e, t, n, a, i, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, s, d) : t.prototype && t.prototype.isPureReactComponent ? !ei(n, a) || !ei(i, s) : !0;
  }
  function qf(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
  }
  function Ba(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = A({}, n));
      for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function Gf(e) {
    dr(e);
  }
  function Yf(e) {
    console.error(e);
  }
  function Vf(e) {
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
  function Kf(e, t, n) {
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
  function Po(e, t, n) {
    return n = na(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Mr(e, t);
    }, n;
  }
  function Xf(e) {
    return e = na(e), e.tag = 3, e;
  }
  function Qf(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = a.value;
      e.payload = function() {
        return i(s);
      }, e.callback = function() {
        Kf(t, n, a);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      Kf(t, n, a), typeof i != "function" && (ua === null ? ua = /* @__PURE__ */ new Set([this]) : ua.add(this));
      var g = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Ly(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && ul(
        t,
        n,
        i,
        !0
      ), n = Ht.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Wt === null ? Qr() : n.alternate === null && Ie === 0 && (Ie = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === Er ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ru(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === Er ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Ru(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Ru(e, a, i), Qr(), !1;
    }
    if (Re)
      return t = Ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== bo && (e = Error(c(422), { cause: a }), ai(Ft(e, n)))) : (a !== bo && (t = Error(c(423), {
        cause: a
      }), ai(
        Ft(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Ft(a, n), i = Po(
        e.stateNode,
        a,
        i
      ), _o(e, i), Ie !== 4 && (Ie = 2)), !1;
    var s = Error(c(520), { cause: a });
    if (s = Ft(s, n), Si === null ? Si = [s] : Si.push(s), Ie !== 4 && (Ie = 2), t === null) return !0;
    a = Ft(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Po(n.stateNode, a, e), _o(n, e), !1;
        case 1:
          if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ua === null || !ua.has(s))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Xf(i), Qf(
              i,
              e,
              n,
              a
            ), _o(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var eu = Error(c(461)), rt = !1;
  function yt(e, t, n, a) {
    t.child = e === null ? $d(t, null, n, a) : za(
      t,
      e.child,
      n,
      a
    );
  }
  function Zf(e, t, n, a, i) {
    n = n.render;
    var s = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var g in a)
        g !== "ref" && (d[g] = a[g]);
    } else d = a;
    return Da(t), a = Lo(
      e,
      t,
      n,
      d,
      s,
      i
    ), g = zo(), e !== null && !rt ? (Ho(e, t, i), On(e, t, i)) : (Re && g && yo(t), t.flags |= 1, yt(e, t, a, i), t.child);
  }
  function Ff(e, t, n, a, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !mo(s) && s.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = s, $f(
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
    if (s = e.child, !ou(e, i)) {
      var d = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ei, n(d, a) && e.ref === t.ref)
        return On(e, t, i);
    }
    return t.flags |= 1, e = Rn(s, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $f(e, t, n, a, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (ei(s, a) && e.ref === t.ref)
        if (rt = !1, t.pendingProps = a = s, ou(e, i))
          (e.flags & 131072) !== 0 && (rt = !0);
        else
          return t.lanes = e.lanes, On(e, t, i);
    }
    return tu(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Jf(e, t, n, a) {
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
        return If(
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
        ), s !== null ? Wd(t, s) : jo(), Pd(t);
      else
        return a = t.lanes = 536870912, If(
          e,
          t,
          s !== null ? s.baseLanes | n : n,
          n,
          a
        );
    } else
      s !== null ? (vr(t, s.cachePool), Wd(t, s), ia(), t.memoizedState = null) : (e !== null && vr(t, null), jo(), ia());
    return yt(e, t, i, n), t.child;
  }
  function gi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function If(e, t, n, a, i) {
    var s = To();
    return s = s === null ? null : { parent: lt._currentValue, pool: s }, t.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, e !== null && vr(t, null), jo(), Pd(t), e !== null && ul(e, t, a, !0), t.childLanes = i, null;
  }
  function Lr(e, t) {
    return t = Hr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Wf(e, t, n) {
    return za(t, e.child, null, n), e = Lr(t, t.pendingProps), e.flags |= 2, Bt(t), t.memoizedState = null, e;
  }
  function zy(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Re) {
        if (a.mode === "hidden")
          return e = Lr(t, a), t.lanes = 536870912, gi(null, e);
        if (Uo(t), (e = Ve) ? (e = ch(
          e,
          It
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: In !== null ? { id: hn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Md(e), n.return = t, t.child = n, ht = t, Ve = null)) : e = null, e === null) throw Pn(t);
        return t.lanes = 536870912, null;
      }
      return Lr(t, a);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var d = s.dehydrated;
      if (Uo(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Wf(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (rt || ul(e, t, n, !1), i = (n & e.childLanes) !== 0, rt || i) {
        if (a = ke, a !== null && (d = Gc(a, n), d !== 0 && d !== s.retryLane))
          throw s.retryLane = d, Ca(e, d), _t(a, e, d), eu;
        Qr(), t = Wf(
          e,
          t,
          n
        );
      } else
        e = s.treeContext, Ve = Pt(d.nextSibling), ht = t, Re = !0, Wn = null, It = !1, e !== null && Hd(t, e), t = Lr(t, a), t.flags |= 4096;
      return t;
    }
    return e = Rn(e.child, {
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
  function tu(e, t, n, a, i) {
    return Da(t), n = Lo(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = zo(), e !== null && !rt ? (Ho(e, t, i), On(e, t, i)) : (Re && a && yo(t), t.flags |= 1, yt(e, t, n, i), t.child);
  }
  function Pf(e, t, n, a, i, s) {
    return Da(t), t.updateQueue = null, n = tf(
      t,
      a,
      n,
      i
    ), ef(e), a = zo(), e !== null && !rt ? (Ho(e, t, s), On(e, t, s)) : (Re && a && yo(t), t.flags |= 1, yt(e, t, n, s), t.child);
  }
  function em(e, t, n, a, i) {
    if (Da(t), t.stateNode === null) {
      var s = il, d = n.contextType;
      typeof d == "object" && d !== null && (s = gt(d)), s = new n(a, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Wo, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = a, s.state = t.memoizedState, s.refs = {}, Ao(t), d = n.contextType, s.context = typeof d == "object" && d !== null ? gt(d) : il, s.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Io(
        t,
        n,
        d,
        a
      ), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (d = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), d !== s.state && Wo.enqueueReplaceState(s, s.state, null), ci(t, a, s, i), ui(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      s = t.stateNode;
      var g = t.memoizedProps, E = Ba(n, g);
      s.props = E;
      var _ = s.context, H = n.contextType;
      d = il, typeof H == "object" && H !== null && (d = gt(H));
      var G = n.getDerivedStateFromProps;
      H = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, H || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || _ !== d) && qf(
        t,
        s,
        a,
        d
      ), ta = !1;
      var j = t.memoizedState;
      s.state = j, ci(t, a, s, i), ui(), _ = t.memoizedState, g || j !== _ || ta ? (typeof G == "function" && (Io(
        t,
        n,
        G,
        a
      ), _ = t.memoizedState), (E = ta || kf(
        t,
        n,
        E,
        a,
        j,
        _,
        d
      )) ? (H || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), s.props = a, s.state = _, s.context = d, a = E) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      s = t.stateNode, Co(e, t), d = t.memoizedProps, H = Ba(n, d), s.props = H, G = t.pendingProps, j = s.context, _ = n.contextType, E = il, typeof _ == "object" && _ !== null && (E = gt(_)), g = n.getDerivedStateFromProps, (_ = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (d !== G || j !== E) && qf(
        t,
        s,
        a,
        E
      ), ta = !1, j = t.memoizedState, s.state = j, ci(t, a, s, i), ui();
      var U = t.memoizedState;
      d !== G || j !== U || ta || e !== null && e.dependencies !== null && pr(e.dependencies) ? (typeof g == "function" && (Io(
        t,
        n,
        g,
        a
      ), U = t.memoizedState), (H = ta || kf(
        t,
        n,
        H,
        a,
        j,
        U,
        E
      ) || e !== null && e.dependencies !== null && pr(e.dependencies)) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, U, E), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        a,
        U,
        E
      )), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), s.props = a, s.state = U, s.context = E, a = H) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return s = a, zr(e, t), a = (t.flags & 128) !== 0, s || a ? (s = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && a ? (t.child = za(
      t,
      e.child,
      null,
      i
    ), t.child = za(
      t,
      null,
      n,
      i
    )) : yt(e, t, n, i), t.memoizedState = s.state, e = t.child) : e = On(
      e,
      t,
      i
    ), e;
  }
  function tm(e, t, n, a) {
    return Oa(), t.flags |= 256, yt(e, t, n, a), t.child;
  }
  var nu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function au(e) {
    return { baseLanes: e, cachePool: Vd() };
  }
  function lu(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= qt), e;
  }
  function nm(e, t, n) {
    var a = t.pendingProps, i = !1, s = (t.flags & 128) !== 0, d;
    if ((d = s) || (d = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Re) {
        if (i ? la(t) : ia(), (e = Ve) ? (e = ch(
          e,
          It
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: In !== null ? { id: hn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Md(e), n.return = t, t.child = n, ht = t, Ve = null)) : e = null, e === null) throw Pn(t);
        return qu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = a.children;
      return a = a.fallback, i ? (ia(), i = t.mode, g = Hr(
        { mode: "hidden", children: g },
        i
      ), a = _a(
        a,
        i,
        n,
        null
      ), g.return = t, a.return = t, g.sibling = a, t.child = g, a = t.child, a.memoizedState = au(n), a.childLanes = lu(
        e,
        d,
        n
      ), t.memoizedState = nu, gi(null, a)) : (la(t), iu(t, g));
    }
    var E = e.memoizedState;
    if (E !== null && (g = E.dehydrated, g !== null)) {
      if (s)
        t.flags & 256 ? (la(t), t.flags &= -257, t = ru(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ia(), t.child = e.child, t.flags |= 128, t = null) : (ia(), g = a.fallback, i = t.mode, a = Hr(
          { mode: "visible", children: a.children },
          i
        ), g = _a(
          g,
          i,
          n,
          null
        ), g.flags |= 2, a.return = t, g.return = t, a.sibling = g, t.child = a, za(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = au(n), a.childLanes = lu(
          e,
          d,
          n
        ), t.memoizedState = nu, t = gi(null, a));
      else if (la(t), qu(g)) {
        if (d = g.nextSibling && g.nextSibling.dataset, d) var _ = d.dgst;
        d = _, a = Error(c(419)), a.stack = "", a.digest = d, ai({ value: a, source: null, stack: null }), t = ru(
          e,
          t,
          n
        );
      } else if (rt || ul(e, t, n, !1), d = (n & e.childLanes) !== 0, rt || d) {
        if (d = ke, d !== null && (a = Gc(d, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, Ca(e, a), _t(d, e, a), eu;
        ku(g) || Qr(), t = ru(
          e,
          t,
          n
        );
      } else
        ku(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Ve = Pt(
          g.nextSibling
        ), ht = t, Re = !0, Wn = null, It = !1, e !== null && Hd(t, e), t = iu(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (ia(), g = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = Rn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? g = Rn(
      _,
      g
    ) : (g = _a(
      g,
      i,
      n,
      null
    ), g.flags |= 2), g.return = t, a.return = t, a.sibling = g, t.child = a, gi(null, a), a = t.child, g = e.child.memoizedState, g === null ? g = au(n) : (i = g.cachePool, i !== null ? (E = lt._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Vd(), g = {
      baseLanes: g.baseLanes | n,
      cachePool: i
    }), a.memoizedState = g, a.childLanes = lu(
      e,
      d,
      n
    ), t.memoizedState = nu, gi(e.child, a)) : (la(t), n = e.child, e = n.sibling, n = Rn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function iu(e, t) {
    return t = Hr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Hr(e, t) {
    return e = zt(22, e, null, t), e.lanes = 0, e;
  }
  function ru(e, t, n) {
    return za(t, e.child, null, n), e = iu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function am(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Eo(e.return, t, n);
  }
  function su(e, t, n, a, i, s) {
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
  function lm(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, s = a.tail;
    a = a.children;
    var d = Pe.current, g = (d & 2) !== 0;
    if (g ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, X(Pe, d), yt(e, t, a, n), a = Re ? ni : 0, !g && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && am(e, n, t);
        else if (e.tag === 19)
          am(e, n, t);
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
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), su(
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
        su(
          t,
          !0,
          n,
          null,
          s,
          a
        );
        break;
      case "together":
        su(
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
  function On(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), oa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ul(
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
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function ou(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && pr(e)));
  }
  function Hy(e, t, n) {
    switch (t.tag) {
      case 3:
        Ce(t, t.stateNode.containerInfo), ea(t, lt, e.memoizedState.cache), Oa();
        break;
      case 27:
      case 5:
        fn(t);
        break;
      case 4:
        Ce(t, t.stateNode.containerInfo);
        break;
      case 10:
        ea(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Uo(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (la(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? nm(e, t, n) : (la(t), e = On(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        la(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (ul(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return lm(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(Pe, Pe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Jf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ea(t, lt, e.memoizedState.cache);
    }
    return On(e, t, n);
  }
  function im(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        rt = !0;
      else {
        if (!ou(e, n) && (t.flags & 128) === 0)
          return rt = !1, Hy(
            e,
            t,
            n
          );
        rt = (e.flags & 131072) !== 0;
      }
    else
      rt = !1, Re && (t.flags & 1048576) !== 0 && zd(t, ni, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Ma(t.elementType), t.type = e, typeof e == "function")
            mo(e) ? (a = Ba(e, a), t.tag = 1, t = em(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = tu(
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
                t.tag = 11, t = Zf(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === $) {
                t.tag = 14, t = Ff(
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
        return tu(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = Ba(
          a,
          t.pendingProps
        ), em(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (Ce(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var s = t.memoizedState;
          i = s.element, Co(e, t), ci(t, a, null, n);
          var d = t.memoizedState;
          if (a = d.cache, ea(t, lt, a), a !== s.cache && So(
            t,
            [lt],
            n,
            !0
          ), ui(), a = d.element, s.isDehydrated)
            if (s = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = tm(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Ft(
                Error(c(424)),
                t
              ), ai(i), t = tm(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = Pt(e.firstChild), ht = t, Re = !0, Wn = null, It = !0, n = $d(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Oa(), a === i) {
              t = On(
                e,
                t,
                n
              );
              break e;
            }
            yt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return zr(e, t), e === null ? (n = yh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Re || (n = t.type, e = t.pendingProps, a = Pr(
          ie.current
        ).createElement(n), a[mt] = t, a[xt] = e, pt(a, n, e), dt(a), t.stateNode = a) : t.memoizedState = yh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return fn(t), e === null && Re && (a = t.stateNode = mh(
          t.type,
          t.pendingProps,
          ie.current
        ), ht = t, It = !0, i = Ve, ma(t.type) ? (Gu = i, Ve = Pt(a.firstChild)) : Ve = i), yt(
          e,
          t,
          t.pendingProps.children,
          n
        ), zr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Re && ((i = a = Ve) && (a = mp(
          a,
          t.type,
          t.pendingProps,
          It
        ), a !== null ? (t.stateNode = a, ht = t, Ve = Pt(a.firstChild), It = !1, i = !0) : i = !1), i || Pn(t)), fn(t), i = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = s.children, zu(i, s) ? a = null : d !== null && zu(i, d) && (t.flags |= 32), t.memoizedState !== null && (i = Lo(
          e,
          t,
          Cy,
          null,
          null,
          n
        ), Oi._currentValue = i), zr(e, t), yt(e, t, a, n), t.child;
      case 6:
        return e === null && Re && ((e = n = Ve) && (n = hp(
          n,
          t.pendingProps,
          It
        ), n !== null ? (t.stateNode = n, ht = t, Ve = null, e = !0) : e = !1), e || Pn(t)), null;
      case 13:
        return nm(e, t, n);
      case 4:
        return Ce(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = za(
          t,
          null,
          a,
          n
        ) : yt(e, t, a, n), t.child;
      case 11:
        return Zf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return yt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return yt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return yt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, ea(t, t.type, a.value), yt(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, Da(t), i = gt(i), a = a(i), t.flags |= 1, yt(e, t, a, n), t.child;
      case 14:
        return Ff(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return $f(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return lm(e, t, n);
      case 31:
        return zy(e, t, n);
      case 22:
        return Jf(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Da(t), a = gt(lt), e === null ? (i = To(), i === null && (i = ke, s = xo(), i.pooledCache = s, s.refCount++, s !== null && (i.pooledCacheLanes |= n), i = s), t.memoizedState = { parent: a, cache: i }, Ao(t), ea(t, lt, i)) : ((e.lanes & n) !== 0 && (Co(e, t), ci(t, null, null, n), ui()), i = e.memoizedState, s = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), ea(t, lt, a)) : (a = s.cache, ea(t, lt, a), a !== i.cache && So(
          t,
          [lt],
          n,
          !0
        ))), yt(
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
  function jn(e) {
    e.flags |= 4;
  }
  function uu(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Dm()) e.flags |= 8192;
        else
          throw La = Er, No;
    } else e.flags &= -16777217;
  }
  function rm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Eh(t))
      if (Dm()) e.flags |= 8192;
      else
        throw La = Er, No;
  }
  function Br(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Bc() : 536870912, e.lanes |= t, El |= t);
  }
  function yi(e, t) {
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
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function By(e, t, n) {
    var a = t.pendingProps;
    switch (po(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), An(lt), P(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ol(t) ? jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vo())), Ke(t), null;
      case 26:
        var i = t.type, s = t.memoizedState;
        return e === null ? (jn(t), s !== null ? (Ke(t), rm(t, s)) : (Ke(t), uu(
          t,
          i,
          null,
          a,
          n
        ))) : s ? s !== e.memoizedState ? (jn(t), Ke(t), rm(t, s)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && jn(t), Ke(t), uu(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (Vt(t), n = ie.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && jn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), null;
          }
          e = Z.current, ol(t) ? Bd(t) : (e = mh(i, a, n), t.stateNode = e, jn(t));
        }
        return Ke(t), null;
      case 5:
        if (Vt(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && jn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), null;
          }
          if (s = Z.current, ol(t))
            Bd(t);
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
            s[mt] = t, s[xt] = a;
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
            e: switch (pt(s, i, a), i) {
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
            a && jn(t);
          }
        }
        return Ke(t), uu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && jn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = ie.current, ol(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = ht, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[mt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || nh(e.nodeValue, n)), e || Pn(t, !0);
          } else
            e = Pr(e).createTextNode(
              a
            ), e[mt] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = ol(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[mt] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), e = !1;
          } else
            n = vo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ke(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = ol(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[mt] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else
            i = vo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        return Bt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Br(t, t.updateQueue), Ke(t), null);
      case 4:
        return P(), e === null && ju(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return An(t.type), Ke(t), null;
      case 19:
        if (B(Pe), a = t.memoizedState, a === null) return Ke(t), null;
        if (i = (t.flags & 128) !== 0, s = a.rendering, s === null)
          if (i) yi(a, !1);
          else {
            if (Ie !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (s = Tr(e), s !== null) {
                  for (t.flags |= 128, yi(a, !1), e = s.updateQueue, t.updateQueue = e, Br(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Ud(n, e), n = n.sibling;
                  return X(
                    Pe,
                    Pe.current & 1 | 2
                  ), Re && Tn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ct() > Vr && (t.flags |= 128, i = !0, yi(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = Tr(s), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Br(t, e), yi(a, !0), a.tail === null && a.tailMode === "hidden" && !s.alternate && !Re)
                return Ke(t), null;
            } else
              2 * ct() - a.renderingStartTime > Vr && n !== 536870912 && (t.flags |= 128, i = !0, yi(a, !1), t.lanes = 4194304);
          a.isBackwards ? (s.sibling = t.child, t.child = s) : (e = a.last, e !== null ? e.sibling = s : t.child = s, a.last = s);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, n = Pe.current, X(
          Pe,
          i ? n & 1 | 2 : n & 1
        ), Re && Tn(t, a.treeForkCount), e) : (Ke(t), null);
      case 22:
      case 23:
        return Bt(t), Do(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && Br(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(Ua), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), An(lt), Ke(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function ky(e, t) {
    switch (po(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return An(lt), P(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Vt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Bt(t), t.alternate === null)
            throw Error(c(340));
          Oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Bt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(Pe), null;
      case 4:
        return P(), null;
      case 10:
        return An(t.type), null;
      case 22:
      case 23:
        return Bt(t), Do(), e !== null && B(Ua), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return An(lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sm(e, t) {
    switch (po(t), t.tag) {
      case 3:
        An(lt), P();
        break;
      case 26:
      case 27:
      case 5:
        Vt(t);
        break;
      case 4:
        P();
        break;
      case 31:
        t.memoizedState !== null && Bt(t);
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        B(Pe);
        break;
      case 10:
        An(t.type);
        break;
      case 22:
      case 23:
        Bt(t), Do(), e !== null && B(Ua);
        break;
      case 24:
        An(lt);
    }
  }
  function pi(e, t) {
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
  function ra(e, t, n) {
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
                De(
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
      De(t, t.return, H);
    }
  }
  function om(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Id(t, n);
      } catch (a) {
        De(e, e.return, a);
      }
    }
  }
  function um(e, t, n) {
    n.props = Ba(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      De(e, t, a);
    }
  }
  function bi(e, t) {
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
  function yn(e, t) {
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
  function cm(e) {
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
  function cu(e, t, n) {
    try {
      var a = e.stateNode;
      sp(a, e.type, n, t), a[xt] = t;
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function dm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ma(e.type) || e.tag === 4;
  }
  function du(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || dm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ma(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sn));
    else if (a !== 4 && (a === 27 && ma(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (fu(e, t, n), e = e.sibling; e !== null; )
        fu(e, t, n), e = e.sibling;
  }
  function kr(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && ma(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (kr(e, t, n), e = e.sibling; e !== null; )
        kr(e, t, n), e = e.sibling;
  }
  function fm(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      pt(t, a, n), t[mt] = e, t[xt] = n;
    } catch (s) {
      De(e, e.return, s);
    }
  }
  var Dn = !1, st = !1, mu = !1, mm = typeof WeakSet == "function" ? WeakSet : Set, ft = null;
  function qy(e, t) {
    if (e = e.containerInfo, Mu = rs, e = Rd(e), io(e)) {
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
            var d = 0, g = -1, E = -1, _ = 0, H = 0, G = e, j = null;
            t: for (; ; ) {
              for (var U; G !== n || i !== 0 && G.nodeType !== 3 || (g = d + i), G !== s || a !== 0 && G.nodeType !== 3 || (E = d + a), G.nodeType === 3 && (d += G.nodeValue.length), (U = G.firstChild) !== null; )
                j = G, G = U;
              for (; ; ) {
                if (G === e) break t;
                if (j === n && ++_ === i && (g = d), j === s && ++H === a && (E = d), (U = G.nextSibling) !== null) break;
                G = j, j = G.parentNode;
              }
              G = U;
            }
            n = g === -1 || E === -1 ? null : { start: g, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Lu = { focusedElem: e, selectionRange: n }, rs = !1, ft = t; ft !== null; )
      if (t = ft, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ft = e;
      else
        for (; ft !== null; ) {
          switch (t = ft, s = t.alternate, e = t.flags, t.tag) {
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
                  var J = Ba(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    s
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ae) {
                  De(
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
                  Bu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bu(e);
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
            e.return = t.return, ft = e;
            break;
          }
          ft = t.return;
        }
  }
  function hm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Mn(e, n), a & 4 && pi(5, n);
        break;
      case 1:
        if (Mn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              De(n, n.return, d);
            }
          else {
            var i = Ba(
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
        a & 64 && om(n), a & 512 && bi(n, n.return);
        break;
      case 3:
        if (Mn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Id(e, t);
          } catch (d) {
            De(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && fm(n);
      case 26:
      case 5:
        Mn(e, n), t === null && a & 4 && cm(n), a & 512 && bi(n, n.return);
        break;
      case 12:
        Mn(e, n);
        break;
      case 31:
        Mn(e, n), a & 4 && pm(e, n);
        break;
      case 13:
        Mn(e, n), a & 4 && bm(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = $y.bind(
          null,
          n
        ), gp(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Dn, !a) {
          t = t !== null && t.memoizedState !== null || st, i = Dn;
          var s = st;
          Dn = a, (st = t) && !s ? Ln(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Mn(e, n), Dn = i, st = s;
        }
        break;
      case 30:
        break;
      default:
        Mn(e, n);
    }
  }
  function gm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ys(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, Tt = !1;
  function Un(e, t, n) {
    for (n = n.child; n !== null; )
      ym(e, t, n), n = n.sibling;
  }
  function ym(e, t, n) {
    if (Ut && typeof Ut.onCommitFiberUnmount == "function")
      try {
        Ut.onCommitFiberUnmount(Yl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        st || yn(n, t), Un(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        st || yn(n, t);
        var a = Ze, i = Tt;
        ma(n.type) && (Ze = n.stateNode, Tt = !1), Un(
          e,
          t,
          n
        ), Ai(n.stateNode), Ze = a, Tt = i;
        break;
      case 5:
        st || yn(n, t);
      case 6:
        if (a = Ze, i = Tt, Ze = null, Un(
          e,
          t,
          n
        ), Ze = a, Tt = i, Ze !== null)
          if (Tt)
            try {
              (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(n.stateNode);
            } catch (s) {
              De(
                n,
                t,
                s
              );
            }
          else
            try {
              Ze.removeChild(n.stateNode);
            } catch (s) {
              De(
                n,
                t,
                s
              );
            }
        break;
      case 18:
        Ze !== null && (Tt ? (e = Ze, oh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), _l(e)) : oh(Ze, n.stateNode));
        break;
      case 4:
        a = Ze, i = Tt, Ze = n.stateNode.containerInfo, Tt = !0, Un(
          e,
          t,
          n
        ), Ze = a, Tt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ra(2, n, t), st || ra(4, n, t), Un(
          e,
          t,
          n
        );
        break;
      case 1:
        st || (yn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && um(
          n,
          t,
          a
        )), Un(
          e,
          t,
          n
        );
        break;
      case 21:
        Un(
          e,
          t,
          n
        );
        break;
      case 22:
        st = (a = st) || n.memoizedState !== null, Un(
          e,
          t,
          n
        ), st = a;
        break;
      default:
        Un(
          e,
          t,
          n
        );
    }
  }
  function pm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        _l(e);
      } catch (n) {
        De(t, t.return, n);
      }
    }
  }
  function bm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        _l(e);
      } catch (n) {
        De(t, t.return, n);
      }
  }
  function Gy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new mm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new mm()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function qr(e, t) {
    var n = Gy(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Jy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], s = e, d = t, g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ma(g.type)) {
                Ze = g.stateNode, Tt = !1;
                break e;
              }
              break;
            case 5:
              Ze = g.stateNode, Tt = !1;
              break e;
            case 3:
            case 4:
              Ze = g.stateNode.containerInfo, Tt = !0;
              break e;
          }
          g = g.return;
        }
        if (Ze === null) throw Error(c(160));
        ym(s, d, i), Ze = null, Tt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        vm(t, e), t = t.sibling;
  }
  var sn = null;
  function vm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(t, e), At(e), a & 4 && (ra(3, e, e.return), pi(3, e), ra(5, e, e.return));
        break;
      case 1:
        Nt(t, e), At(e), a & 512 && (st || n === null || yn(n, n.return)), a & 64 && Dn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = sn;
        if (Nt(t, e), At(e), a & 512 && (st || n === null || yn(n, n.return)), a & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      s = i.getElementsByTagName("title")[0], (!s || s[Xl] || s[mt] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = i.createElement(a), i.head.insertBefore(
                        s,
                        i.querySelector("head > title")
                      )), pt(s, a, n), s[mt] = e, dt(s), a = s;
                      break e;
                    case "link":
                      var d = vh(
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
                      s = i.createElement(a), pt(s, a, n), i.head.appendChild(s);
                      break;
                    case "meta":
                      if (d = vh(
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
                      s = i.createElement(a), pt(s, a, n), i.head.appendChild(s);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  s[mt] = e, dt(s), a = s;
                }
                e.stateNode = a;
              } else
                wh(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = bh(
                i,
                a,
                e.memoizedProps
              );
          else
            s !== a ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, a === null ? wh(
              i,
              e.type,
              e.stateNode
            ) : bh(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && cu(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Nt(t, e), At(e), a & 512 && (st || n === null || yn(n, n.return)), n !== null && a & 4 && cu(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Nt(t, e), At(e), a & 512 && (st || n === null || yn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Wa(i, "");
          } catch (J) {
            De(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, cu(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (mu = !0);
        break;
      case 6:
        if (Nt(t, e), At(e), a & 4) {
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
        if (ns = null, i = sn, sn = es(t.containerInfo), Nt(t, e), sn = i, At(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            _l(t.containerInfo);
          } catch (J) {
            De(e, e.return, J);
          }
        mu && (mu = !1, wm(e));
        break;
      case 4:
        a = sn, sn = es(
          e.stateNode.containerInfo
        ), Nt(t, e), At(e), sn = a;
        break;
      case 12:
        Nt(t, e), At(e);
        break;
      case 31:
        Nt(t, e), At(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qr(e, a)));
        break;
      case 13:
        Nt(t, e), At(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Yr = ct()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = Dn, H = st;
        if (Dn = _ || i, st = H || E, Nt(t, e), st = H, Dn = _, At(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || Dn || st || ka(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (s = E.stateNode, i)
                    d = s.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = E.stateNode;
                    var G = E.memoizedProps.style, j = G != null && G.hasOwnProperty("display") ? G.display : null;
                    g.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
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
                  i ? uh(U, !0) : uh(E.stateNode, !1);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, qr(e, n))));
        break;
      case 19:
        Nt(t, e), At(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qr(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nt(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (dm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, s = du(e);
            kr(e, s, i);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Wa(d, ""), n.flags &= -33);
            var g = du(e);
            kr(e, g, d);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, _ = du(e);
            fu(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (H) {
        De(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        wm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Mn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        hm(e, t.alternate, t), t = t.sibling;
  }
  function ka(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ra(4, t, t.return), ka(t);
          break;
        case 1:
          yn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && um(
            t,
            t.return,
            n
          ), ka(t);
          break;
        case 27:
          Ai(t.stateNode);
        case 26:
        case 5:
          yn(t, t.return), ka(t);
          break;
        case 22:
          t.memoizedState === null && ka(t);
          break;
        case 30:
          ka(t);
          break;
        default:
          ka(t);
      }
      e = e.sibling;
    }
  }
  function Ln(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, s = t, d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ln(
            i,
            s,
            n
          ), pi(4, s);
          break;
        case 1:
          if (Ln(
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
                  Jd(E[i], g);
            } catch (_) {
              De(a, a.return, _);
            }
          }
          n && d & 64 && om(s), bi(s, s.return);
          break;
        case 27:
          fm(s);
        case 26:
        case 5:
          Ln(
            i,
            s,
            n
          ), n && a === null && d & 4 && cm(s), bi(s, s.return);
          break;
        case 12:
          Ln(
            i,
            s,
            n
          );
          break;
        case 31:
          Ln(
            i,
            s,
            n
          ), n && d & 4 && pm(i, s);
          break;
        case 13:
          Ln(
            i,
            s,
            n
          ), n && d & 4 && bm(i, s);
          break;
        case 22:
          s.memoizedState === null && Ln(
            i,
            s,
            n
          ), bi(s, s.return);
          break;
        case 30:
          break;
        default:
          Ln(
            i,
            s,
            n
          );
      }
      t = t.sibling;
    }
  }
  function hu(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && li(n));
  }
  function gu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && li(e));
  }
  function on(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Em(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function Em(e, t, n, a) {
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
        ), i & 2048 && pi(9, t);
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
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && li(e)));
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
            De(t, t.return, E);
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
        ) : vi(e, t) : s._visibility & 2 ? on(
          e,
          t,
          n,
          a
        ) : (s._visibility |= 2, bl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && hu(d, t);
        break;
      case 24:
        on(
          e,
          t,
          n,
          a
        ), i & 2048 && gu(t.alternate, t);
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
  function bl(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var s = e, d = t, g = n, E = a, _ = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          bl(
            s,
            d,
            g,
            E,
            i
          ), pi(8, d);
          break;
        case 23:
          break;
        case 22:
          var H = d.stateNode;
          d.memoizedState !== null ? H._visibility & 2 ? bl(
            s,
            d,
            g,
            E,
            i
          ) : vi(
            s,
            d
          ) : (H._visibility |= 2, bl(
            s,
            d,
            g,
            E,
            i
          )), i && _ & 2048 && hu(
            d.alternate,
            d
          );
          break;
        case 24:
          bl(
            s,
            d,
            g,
            E,
            i
          ), i && _ & 2048 && gu(d.alternate, d);
          break;
        default:
          bl(
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
  function vi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            vi(n, a), i & 2048 && hu(
              a.alternate,
              a
            );
            break;
          case 24:
            vi(n, a), i & 2048 && gu(a.alternate, a);
            break;
          default:
            vi(n, a);
        }
        t = t.sibling;
      }
  }
  var wi = 8192;
  function vl(e, t, n) {
    if (e.subtreeFlags & wi)
      for (e = e.child; e !== null; )
        Sm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Sm(e, t, n) {
    switch (e.tag) {
      case 26:
        vl(
          e,
          t,
          n
        ), e.flags & wi && e.memoizedState !== null && Ap(
          n,
          sn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        vl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = sn;
        sn = es(e.stateNode.containerInfo), vl(
          e,
          t,
          n
        ), sn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = wi, wi = 16777216, vl(
          e,
          t,
          n
        ), wi = a) : vl(
          e,
          t,
          n
        ));
        break;
      default:
        vl(
          e,
          t,
          n
        );
    }
  }
  function xm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ei(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ft = a, Tm(
            a,
            e
          );
        }
      xm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Rm(e), e = e.sibling;
  }
  function Rm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ei(e), e.flags & 2048 && ra(9, e, e.return);
        break;
      case 3:
        Ei(e);
        break;
      case 12:
        Ei(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Gr(e)) : Ei(e);
        break;
      default:
        Ei(e);
    }
  }
  function Gr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ft = a, Tm(
            a,
            e
          );
        }
      xm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ra(8, t, t.return), Gr(t);
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
  function Tm(e, t) {
    for (; ft !== null; ) {
      var n = ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ra(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          li(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ft = a;
      else
        e: for (n = e; ft !== null; ) {
          a = ft;
          var i = a.sibling, s = a.return;
          if (gm(a), a === n) {
            ft = null;
            break e;
          }
          if (i !== null) {
            i.return = s, ft = i;
            break e;
          }
          ft = s;
        }
    }
  }
  var Yy = {
    getCacheForType: function(e) {
      var t = gt(lt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return gt(lt).controller.signal;
    }
  }, Vy = typeof WeakMap == "function" ? WeakMap : Map, _e = 0, ke = null, be = null, Ee = 0, je = 0, kt = null, sa = !1, wl = !1, yu = !1, zn = 0, Ie = 0, oa = 0, qa = 0, pu = 0, qt = 0, El = 0, Si = null, Ct = null, bu = !1, Yr = 0, Nm = 0, Vr = 1 / 0, Kr = null, ua = null, ot = 0, ca = null, Sl = null, Hn = 0, vu = 0, wu = null, Am = null, xi = 0, Eu = null;
  function Gt() {
    return (_e & 2) !== 0 && Ee !== 0 ? Ee & -Ee : z.T !== null ? Au() : Yc();
  }
  function Cm() {
    if (qt === 0)
      if ((Ee & 536870912) === 0 || Re) {
        var e = Wi;
        Wi <<= 1, (Wi & 3932160) === 0 && (Wi = 262144), qt = e;
      } else qt = 536870912;
    return e = Ht.current, e !== null && (e.flags |= 32), qt;
  }
  function _t(e, t, n) {
    (e === ke && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (xl(e, 0), da(
      e,
      Ee,
      qt,
      !1
    )), Kl(e, n), ((_e & 2) === 0 || e !== ke) && (e === ke && ((_e & 2) === 0 && (qa |= n), Ie === 4 && da(
      e,
      Ee,
      qt,
      !1
    )), pn(e));
  }
  function _m(e, t, n) {
    if ((_e & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Vl(e, t), i = a ? Qy(e, t) : xu(e, t, !0), s = a;
    do {
      if (i === 0) {
        wl && !a && da(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, s && !Ky(n)) {
          i = xu(e, t, !1), s = !1;
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
              i = Si;
              var E = g.current.memoizedState.isDehydrated;
              if (E && (xl(g, d).flags |= 256), d = xu(
                g,
                d,
                !1
              ), d !== 2) {
                if (yu && !E) {
                  g.errorRecoveryDisabledLanes |= s, qa |= s, i = 4;
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
          xl(e, 0), da(e, t, 0, !0);
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
              da(
                a,
                t,
                qt,
                !sa
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
          if ((t & 62914560) === t && (i = Yr + 300 - ct(), 10 < i)) {
            if (da(
              a,
              t,
              qt,
              !sa
            ), er(a, 0, !0) !== 0) break e;
            Hn = t, a.timeoutHandle = rh(
              Om.bind(
                null,
                a,
                n,
                Ct,
                Kr,
                bu,
                t,
                qt,
                qa,
                El,
                sa,
                s,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          Om(
            a,
            n,
            Ct,
            Kr,
            bu,
            t,
            qt,
            qa,
            El,
            sa,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    pn(e);
  }
  function Om(e, t, n, a, i, s, d, g, E, _, H, G, j, U) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Sn
      }, Sm(
        t,
        s,
        G
      );
      var J = (s & 62914560) === s ? Yr - ct() : (s & 4194048) === s ? Nm - ct() : 0;
      if (J = Cp(
        G,
        J
      ), J !== null) {
        Hn = s, e.cancelPendingCommit = J(
          Bm.bind(
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
            j,
            U
          )
        ), da(e, s, d, !_);
        return;
      }
    }
    Bm(
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
  function Ky(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], s = i.getSnapshot;
          i = i.value;
          try {
            if (!Lt(s(), i)) return !1;
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
  function da(e, t, n, a) {
    t &= ~pu, t &= ~qa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var s = 31 - Mt(i), d = 1 << s;
      a[s] = -1, i &= ~d;
    }
    n !== 0 && kc(e, n, t);
  }
  function Xr() {
    return (_e & 6) === 0 ? (Ri(0), !1) : !0;
  }
  function Su() {
    if (be !== null) {
      if (je === 0)
        var e = be.return;
      else
        e = be, Nn = ja = null, Bo(e), ml = null, ri = 0, e = be;
      for (; e !== null; )
        sm(e.alternate, e), e = e.return;
      be = null;
    }
  }
  function xl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, cp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Hn = 0, Su(), ke = e, be = n = Rn(e.current, null), Ee = t, je = 0, kt = null, sa = !1, wl = Vl(e, t), yu = !1, El = qt = pu = qa = oa = Ie = 0, Ct = Si = null, bu = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Mt(a), s = 1 << i;
        t |= e[i], a &= ~s;
      }
    return zn = t, fr(), n;
  }
  function jm(e, t) {
    fe = null, z.H = hi, t === fl || t === wr ? (t = Qd(), je = 3) : t === No ? (t = Qd(), je = 4) : je = t === eu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, kt = t, be === null && (Ie = 1, Mr(
      e,
      Ft(t, e.current)
    ));
  }
  function Dm() {
    var e = Ht.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Wt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Wt : !1;
  }
  function Um() {
    var e = z.H;
    return z.H = hi, e === null ? hi : e;
  }
  function Mm() {
    var e = z.A;
    return z.A = Yy, e;
  }
  function Qr() {
    Ie = 4, sa || (Ee & 4194048) !== Ee && Ht.current !== null || (wl = !0), (oa & 134217727) === 0 && (qa & 134217727) === 0 || ke === null || da(
      ke,
      Ee,
      qt,
      !1
    );
  }
  function xu(e, t, n) {
    var a = _e;
    _e |= 2;
    var i = Um(), s = Mm();
    (ke !== e || Ee !== t) && (Kr = null, xl(e, t)), t = !1;
    var d = Ie;
    e: do
      try {
        if (je !== 0 && be !== null) {
          var g = be, E = kt;
          switch (je) {
            case 8:
              Su(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ht.current === null && (t = !0);
              var _ = je;
              if (je = 0, kt = null, Rl(e, g, E, _), n && wl) {
                d = 0;
                break e;
              }
              break;
            default:
              _ = je, je = 0, kt = null, Rl(e, g, E, _);
          }
        }
        Xy(), d = Ie;
        break;
      } catch (H) {
        jm(e, H);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Nn = ja = null, _e = a, z.H = i, z.A = s, be === null && (ke = null, Ee = 0, fr()), d;
  }
  function Xy() {
    for (; be !== null; ) Lm(be);
  }
  function Qy(e, t) {
    var n = _e;
    _e |= 2;
    var a = Um(), i = Mm();
    ke !== e || Ee !== t ? (Kr = null, Vr = ct() + 500, xl(e, t)) : wl = Vl(
      e,
      t
    );
    e: do
      try {
        if (je !== 0 && be !== null) {
          t = be;
          var s = kt;
          t: switch (je) {
            case 1:
              je = 0, kt = null, Rl(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (Kd(s)) {
                je = 0, kt = null, zm(t);
                break;
              }
              t = function() {
                je !== 2 && je !== 9 || ke !== e || (je = 7), pn(e);
              }, s.then(t, t);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Kd(s) ? (je = 0, kt = null, zm(t)) : (je = 0, kt = null, Rl(e, t, s, 7));
              break;
            case 5:
              var d = null;
              switch (be.tag) {
                case 26:
                  d = be.memoizedState;
                case 5:
                case 27:
                  var g = be;
                  if (d ? Eh(d) : g.stateNode.complete) {
                    je = 0, kt = null;
                    var E = g.sibling;
                    if (E !== null) be = E;
                    else {
                      var _ = g.return;
                      _ !== null ? (be = _, Zr(_)) : be = null;
                    }
                    break t;
                  }
              }
              je = 0, kt = null, Rl(e, t, s, 5);
              break;
            case 6:
              je = 0, kt = null, Rl(e, t, s, 6);
              break;
            case 8:
              Su(), Ie = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Zy();
        break;
      } catch (H) {
        jm(e, H);
      }
    while (!0);
    return Nn = ja = null, z.H = a, z.A = i, _e = n, be !== null ? 0 : (ke = null, Ee = 0, fr(), Ie);
  }
  function Zy() {
    for (; be !== null && !Qn(); )
      Lm(be);
  }
  function Lm(e) {
    var t = im(e.alternate, e, zn);
    e.memoizedProps = e.pendingProps, t === null ? Zr(e) : be = t;
  }
  function zm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Pf(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = Pf(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        Bo(t);
      default:
        sm(n, t), t = be = Ud(t, zn), t = im(n, t, zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Zr(e) : be = t;
  }
  function Rl(e, t, n, a) {
    Nn = ja = null, Bo(t), ml = null, ri = 0;
    var i = t.return;
    try {
      if (Ly(
        e,
        i,
        t,
        n,
        Ee
      )) {
        Ie = 1, Mr(
          e,
          Ft(n, e.current)
        ), be = null;
        return;
      }
    } catch (s) {
      if (i !== null) throw be = i, s;
      Ie = 1, Mr(
        e,
        Ft(n, e.current)
      ), be = null;
      return;
    }
    t.flags & 32768 ? (Re || a === 1 ? e = !0 : wl || (Ee & 536870912) !== 0 ? e = !1 : (sa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ht.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Hm(t, e)) : Zr(t);
  }
  function Zr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Hm(
          t,
          sa
        );
        return;
      }
      e = t.return;
      var n = By(
        t.alternate,
        t,
        zn
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
    Ie === 0 && (Ie = 5);
  }
  function Hm(e, t) {
    do {
      var n = ky(e.alternate, e);
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
    Ie = 6, be = null;
  }
  function Bm(e, t, n, a, i, s, d, g, E) {
    e.cancelPendingCommit = null;
    do
      Fr();
    while (ot !== 0);
    if ((_e & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (s = t.lanes | t.childLanes, s |= co, Ng(
        e,
        n,
        s,
        d,
        g,
        E
      ), e === ke && (be = ke = null, Ee = 0), Sl = t, ca = e, Hn = n, vu = s, wu = i, Am = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Iy(ne, function() {
        return Vm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, i = Y.p, Y.p = 2, d = _e, _e |= 4;
        try {
          qy(e, t, n);
        } finally {
          _e = d, Y.p = i, z.T = a;
        }
      }
      ot = 1, km(), qm(), Gm();
    }
  }
  function km() {
    if (ot === 1) {
      ot = 0;
      var e = ca, t = Sl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = z.T, z.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = _e;
        _e |= 4;
        try {
          vm(t, e);
          var s = Lu, d = Rd(e.containerInfo), g = s.focusedElem, E = s.selectionRange;
          if (d !== g && g && g.ownerDocument && xd(
            g.ownerDocument.documentElement,
            g
          )) {
            if (E !== null && io(g)) {
              var _ = E.start, H = E.end;
              if (H === void 0 && (H = _), "selectionStart" in g)
                g.selectionStart = _, g.selectionEnd = Math.min(
                  H,
                  g.value.length
                );
              else {
                var G = g.ownerDocument || document, j = G && G.defaultView || window;
                if (j.getSelection) {
                  var U = j.getSelection(), J = g.textContent.length, ae = Math.min(E.start, J), He = E.end === void 0 ? ae : Math.min(E.end, J);
                  !U.extend && ae > He && (d = He, He = ae, ae = d);
                  var N = Sd(
                    g,
                    ae
                  ), R = Sd(
                    g,
                    He
                  );
                  if (N && R && (U.rangeCount !== 1 || U.anchorNode !== N.node || U.anchorOffset !== N.offset || U.focusNode !== R.node || U.focusOffset !== R.offset)) {
                    var C = G.createRange();
                    C.setStart(N.node, N.offset), U.removeAllRanges(), ae > He ? (U.addRange(C), U.extend(R.node, R.offset)) : (C.setEnd(R.node, R.offset), U.addRange(C));
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
          rs = !!Mu, Lu = Mu = null;
        } finally {
          _e = i, Y.p = a, z.T = n;
        }
      }
      e.current = t, ot = 2;
    }
  }
  function qm() {
    if (ot === 2) {
      ot = 0;
      var e = ca, t = Sl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = z.T, z.T = null;
        var a = Y.p;
        Y.p = 2;
        var i = _e;
        _e |= 4;
        try {
          hm(e, t.alternate, t);
        } finally {
          _e = i, Y.p = a, z.T = n;
        }
      }
      ot = 3;
    }
  }
  function Gm() {
    if (ot === 4 || ot === 3) {
      ot = 0, Zn();
      var e = ca, t = Sl, n = Hn, a = Am;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, Sl = ca = null, Ym(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (ua = null), qs(n), t = t.stateNode, Ut && typeof Ut.onCommitFiberRoot == "function")
        try {
          Ut.onCommitFiberRoot(
            Yl,
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
      (Hn & 3) !== 0 && Fr(), pn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === Eu ? xi++ : (xi = 0, Eu = e) : xi = 0, Ri(0);
    }
  }
  function Ym(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, li(t)));
  }
  function Fr() {
    return km(), qm(), Gm(), Vm();
  }
  function Vm() {
    if (ot !== 5) return !1;
    var e = ca, t = vu;
    vu = 0;
    var n = qs(Hn), a = z.T, i = Y.p;
    try {
      Y.p = 32 > n ? 32 : n, z.T = null, n = wu, wu = null;
      var s = ca, d = Hn;
      if (ot = 0, Sl = ca = null, Hn = 0, (_e & 6) !== 0) throw Error(c(331));
      var g = _e;
      if (_e |= 4, Rm(s.current), Em(
        s,
        s.current,
        d,
        n
      ), _e = g, Ri(0, !1), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        try {
          Ut.onPostCommitFiberRoot(Yl, s);
        } catch {
        }
      return !0;
    } finally {
      Y.p = i, z.T = a, Ym(e, t);
    }
  }
  function Km(e, t, n) {
    t = Ft(n, t), t = Po(e.stateNode, t, 2), e = aa(e, t, 2), e !== null && (Kl(e, 2), pn(e));
  }
  function De(e, t, n) {
    if (e.tag === 3)
      Km(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Km(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ua === null || !ua.has(a))) {
            e = Ft(n, e), n = Xf(2), a = aa(t, n, 2), a !== null && (Qf(
              n,
              a,
              t,
              e
            ), Kl(a, 2), pn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ru(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Vy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (yu = !0, i.add(n), e = Fy.bind(null, e, t, n), t.then(e, e));
  }
  function Fy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ke === e && (Ee & n) === n && (Ie === 4 || Ie === 3 && (Ee & 62914560) === Ee && 300 > ct() - Yr ? (_e & 2) === 0 && xl(e, 0) : pu |= n, El === Ee && (El = 0)), pn(e);
  }
  function Xm(e, t) {
    t === 0 && (t = Bc()), e = Ca(e, t), e !== null && (Kl(e, t), pn(e));
  }
  function $y(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Xm(e, n);
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
    a !== null && a.delete(t), Xm(e, n);
  }
  function Iy(e, t) {
    return ut(e, t);
  }
  var $r = null, Tl = null, Tu = !1, Jr = !1, Nu = !1, fa = 0;
  function pn(e) {
    e !== Tl && e.next === null && (Tl === null ? $r = Tl = e : Tl = Tl.next = e), Jr = !0, Tu || (Tu = !0, Py());
  }
  function Ri(e, t) {
    if (!Nu && Jr) {
      Nu = !0;
      do
        for (var n = !1, a = $r; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var d = a.suspendedLanes, g = a.pingedLanes;
              s = (1 << 31 - Mt(42 | e) + 1) - 1, s &= i & ~(d & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, $m(a, s));
          } else
            s = Ee, s = er(
              a,
              a === ke ? s : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (s & 3) === 0 || Vl(a, s) || (n = !0, $m(a, s));
          a = a.next;
        }
      while (n);
      Nu = !1;
    }
  }
  function Wy() {
    Qm();
  }
  function Qm() {
    Jr = Tu = !1;
    var e = 0;
    fa !== 0 && up() && (e = fa);
    for (var t = ct(), n = null, a = $r; a !== null; ) {
      var i = a.next, s = Zm(a, t);
      s === 0 ? (a.next = null, n === null ? $r = i : n.next = i, i === null && (Tl = n)) : (n = a, (e !== 0 || (s & 3) !== 0) && (Jr = !0)), a = i;
    }
    ot !== 0 && ot !== 5 || Ri(e), fa !== 0 && (fa = 0);
  }
  function Zm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
      var d = 31 - Mt(s), g = 1 << d, E = i[d];
      E === -1 ? ((g & n) === 0 || (g & a) !== 0) && (i[d] = Tg(g, t)) : E <= t && (e.expiredLanes |= g), s &= ~g;
    }
    if (t = ke, n = Ee, n = er(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (je === 2 || je === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && at(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Vl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && at(a), qs(n)) {
        case 2:
        case 8:
          n = Gl;
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
      return a = Fm.bind(null, e), n = ut(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && at(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Fm(e, t) {
    if (ot !== 0 && ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Fr() && e.callbackNode !== n)
      return null;
    var a = Ee;
    return a = er(
      e,
      e === ke ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (_m(e, a, t), Zm(e, ct()), e.callbackNode != null && e.callbackNode === n ? Fm.bind(null, e) : null);
  }
  function $m(e, t) {
    if (Fr()) return null;
    _m(e, t, !0);
  }
  function Py() {
    dp(function() {
      (_e & 6) !== 0 ? ut(
        Ji,
        Wy
      ) : Qm();
    });
  }
  function Au() {
    if (fa === 0) {
      var e = cl;
      e === 0 && (e = Ii, Ii <<= 1, (Ii & 261888) === 0 && (Ii = 256)), fa = e;
    }
    return fa;
  }
  function Jm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : lr("" + e);
  }
  function Im(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function ep(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var s = Jm(
        (i[xt] || null).action
      ), d = a.submitter;
      d && (t = (t = d[xt] || null) ? Jm(t.formAction) : d.getAttribute("formAction"), t !== null && (s = t, d = null));
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
                if (fa !== 0) {
                  var E = d ? Im(i, d) : new FormData(i);
                  Zo(
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
                typeof s == "function" && (g.preventDefault(), E = d ? Im(i, d) : new FormData(i), Zo(
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
  for (var Cu = 0; Cu < uo.length; Cu++) {
    var _u = uo[Cu], tp = _u.toLowerCase(), np = _u[0].toUpperCase() + _u.slice(1);
    rn(
      tp,
      "on" + np
    );
  }
  rn(Ad, "onAnimationEnd"), rn(Cd, "onAnimationIteration"), rn(_d, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(by, "onTransitionRun"), rn(vy, "onTransitionStart"), rn(wy, "onTransitionCancel"), rn(Od, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ra(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ra(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ra("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ra(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ap = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ti)
  );
  function Wm(e, t) {
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
  function ve(e, t) {
    var n = t[Gs];
    n === void 0 && (n = t[Gs] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Pm(t, e, 2, !1), n.add(a));
  }
  function Ou(e, t, n) {
    var a = 0;
    t && (a |= 4), Pm(
      n,
      e,
      a,
      t
    );
  }
  var Ir = "_reactListening" + Math.random().toString(36).slice(2);
  function ju(e) {
    if (!e[Ir]) {
      e[Ir] = !0, Xc.forEach(function(n) {
        n !== "selectionchange" && (ap.has(n) || Ou(n, !1, e), Ou(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ir] || (t[Ir] = !0, Ou("selectionchange", !1, t));
    }
  }
  function Pm(e, t, n, a) {
    switch (Ch(t)) {
      case 2:
        var i = jp;
        break;
      case 8:
        i = Dp;
        break;
      default:
        i = Qu;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Js || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function Du(e, t, n, a, i) {
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
            if (d = Za(g), d === null) return;
            if (E = d.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = s = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    ad(function() {
      var _ = s, H = Fs(n), G = [];
      e: {
        var j = jd.get(e);
        if (j !== void 0) {
          var U = or, J = e;
          switch (e) {
            case "keypress":
              if (rr(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Jg;
              break;
            case "focusin":
              J = "focus", U = eo;
              break;
            case "focusout":
              J = "blur", U = eo;
              break;
            case "beforeblur":
            case "afterblur":
              U = eo;
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
              U = rd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Bg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Pg;
              break;
            case Ad:
            case Cd:
            case _d:
              U = Gg;
              break;
            case Od:
              U = ty;
              break;
            case "scroll":
            case "scrollend":
              U = zg;
              break;
            case "wheel":
              U = ay;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Vg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = od;
              break;
            case "toggle":
            case "beforetoggle":
              U = iy;
          }
          var ae = (t & 4) !== 0, He = !ae && (e === "scroll" || e === "scrollend"), N = ae ? j !== null ? j + "Capture" : null : j;
          ae = [];
          for (var R = _, C; R !== null; ) {
            var k = R;
            if (C = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || C === null || N === null || (k = Zl(R, N), k != null && ae.push(
              Ni(R, k, C)
            )), He) break;
            R = R.return;
          }
          0 < ae.length && (j = new U(
            j,
            J,
            null,
            n,
            H
          ), G.push({ event: j, listeners: ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", j && n !== Zs && (J = n.relatedTarget || n.fromElement) && (Za(J) || J[Qa]))
            break e;
          if ((U || j) && (j = H.window === H ? H : (j = H.ownerDocument) ? j.defaultView || j.parentWindow : window, U ? (J = n.relatedTarget || n.toElement, U = _, J = J ? Za(J) : null, J !== null && (He = h(J), ae = J.tag, J !== He || ae !== 5 && ae !== 27 && ae !== 6) && (J = null)) : (U = null, J = _), U !== J)) {
            if (ae = rd, k = "onMouseLeave", N = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ae = od, k = "onPointerLeave", N = "onPointerEnter", R = "pointer"), He = U == null ? j : Ql(U), C = J == null ? j : Ql(J), j = new ae(
              k,
              R + "leave",
              U,
              n,
              H
            ), j.target = He, j.relatedTarget = C, k = null, Za(H) === _ && (ae = new ae(
              N,
              R + "enter",
              J,
              n,
              H
            ), ae.target = C, ae.relatedTarget = He, k = ae), He = k, U && J)
              t: {
                for (ae = lp, N = U, R = J, C = 0, k = N; k; k = ae(k))
                  C++;
                k = 0;
                for (var ee = R; ee; ee = ae(ee))
                  k++;
                for (; 0 < C - k; )
                  N = ae(N), C--;
                for (; 0 < k - C; )
                  R = ae(R), k--;
                for (; C--; ) {
                  if (N === R || R !== null && N === R.alternate) {
                    ae = N;
                    break t;
                  }
                  N = ae(N), R = ae(R);
                }
                ae = null;
              }
            else ae = null;
            U !== null && eh(
              G,
              j,
              U,
              ae,
              !1
            ), J !== null && He !== null && eh(
              G,
              He,
              J,
              ae,
              !0
            );
          }
        }
        e: {
          if (j = _ ? Ql(_) : window, U = j.nodeName && j.nodeName.toLowerCase(), U === "select" || U === "input" && j.type === "file")
            var Ne = yd;
          else if (hd(j))
            if (pd)
              Ne = gy;
            else {
              Ne = my;
              var I = fy;
            }
          else
            U = j.nodeName, !U || U.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? _ && Qs(_.elementType) && (Ne = yd) : Ne = hy;
          if (Ne && (Ne = Ne(e, _))) {
            gd(
              G,
              Ne,
              n,
              H
            );
            break e;
          }
          I && I(e, j, _), e === "focusout" && _ && j.type === "number" && _.memoizedProps.value != null && Xs(j, "number", j.value);
        }
        switch (I = _ ? Ql(_) : window, e) {
          case "focusin":
            (hd(I) || I.contentEditable === "true") && (nl = I, ro = _, ti = null);
            break;
          case "focusout":
            ti = ro = nl = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            so = !1, Td(G, n, H);
            break;
          case "selectionchange":
            if (py) break;
          case "keydown":
          case "keyup":
            Td(G, n, H);
        }
        var he;
        if (no)
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
          tl ? fd(e, n) && (Se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Se = "onCompositionStart");
        Se && (ud && n.locale !== "ko" && (tl || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && tl && (he = ld()) : (Jn = H, Is = "value" in Jn ? Jn.value : Jn.textContent, tl = !0)), I = Wr(_, Se), 0 < I.length && (Se = new sd(
          Se,
          e,
          null,
          n,
          H
        ), G.push({ event: Se, listeners: I }), he ? Se.data = he : (he = md(n), he !== null && (Se.data = he)))), (he = sy ? oy(e, n) : uy(e, n)) && (Se = Wr(_, "onBeforeInput"), 0 < Se.length && (I = new sd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          H
        ), G.push({
          event: I,
          listeners: Se
        }), I.data = he)), ep(
          G,
          e,
          _,
          n,
          H
        );
      }
      Wm(G, t);
    });
  }
  function Ni(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, s = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || s === null || (i = Zl(e, n), i != null && a.unshift(
        Ni(e, i, s)
      ), i = Zl(e, t), i != null && a.push(
        Ni(e, i, s)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function lp(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function eh(e, t, n, a, i) {
    for (var s = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n, E = g.alternate, _ = g.stateNode;
      if (g = g.tag, E !== null && E === a) break;
      g !== 5 && g !== 26 && g !== 27 || _ === null || (E = _, i ? (_ = Zl(n, s), _ != null && d.unshift(
        Ni(n, _, E)
      )) : i || (_ = Zl(n, s), _ != null && d.push(
        Ni(n, _, E)
      ))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var ip = /\r\n?/g, rp = /\u0000|\uFFFD/g;
  function th(e) {
    return (typeof e == "string" ? e : "" + e).replace(ip, `
`).replace(rp, "");
  }
  function nh(e, t) {
    return t = th(t), th(e) === t;
  }
  function ze(e, t, n, a, i, s) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Wa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Wa(e, "" + a);
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
        td(e, a, s);
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
        a = lr("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Sn);
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
        ve("beforetoggle", e), ve("toggle", e), tr(e, "popover", a);
        break;
      case "xlinkActuate":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        En(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        En(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        En(
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
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Mg.get(n) || n, tr(e, n, a));
    }
  }
  function Uu(e, t, n, a, i, s) {
    switch (n) {
      case "style":
        td(e, a, s);
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
        typeof a == "string" ? Wa(e, a) : (typeof a == "number" || typeof a == "bigint") && Wa(e, "" + a);
        break;
      case "onScroll":
        a != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Sn);
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
        if (!Qc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), s = e[xt] || null, s = s != null ? s[n] : null, typeof s == "function" && e.removeEventListener(t, s, i), typeof a == "function")) {
              typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : tr(e, n, a);
          }
    }
  }
  function pt(e, t, n) {
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
                  ze(e, t, s, d, n, null);
              }
          }
        i && ze(e, t, "srcSet", n.srcSet, n, null), a && ze(e, t, "src", n.src, n, null);
        return;
      case "input":
        ve("invalid", e);
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
                  ze(e, t, a, H, n, null);
              }
          }
        Ic(
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
                ze(e, t, i, g, n, null);
            }
        t = s, n = d, e.multiple = !!a, t != null ? Ia(e, !!a, t, !1) : n != null && Ia(e, !!a, n, !0);
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
                ze(e, t, d, g, n, null);
            }
        Pc(e, a, i, s);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : ze(e, t, E, a, n, null));
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
        for (a = 0; a < Ti.length; a++)
          ve(Ti[a], e);
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
                ze(e, t, _, a, n, null);
            }
        return;
      default:
        if (Qs(t)) {
          for (H in n)
            n.hasOwnProperty(H) && (a = n[H], a !== void 0 && Uu(
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
  function sp(e, t, n, a) {
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
        for (U in n) {
          var G = n[U];
          if (n.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = G;
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
        U = d = g = j = null;
        for (s in n)
          if (E = n[s], n.hasOwnProperty(s) && E != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                U = E;
              default:
                a.hasOwnProperty(s) || ze(
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
                j = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                d = s;
              default:
                s !== E && ze(
                  e,
                  t,
                  i,
                  s,
                  a,
                  E
                );
            }
        t = g, n = d, a = U, j != null ? Ia(e, !!n, j, !1) : !!a != !!n && (t != null ? Ia(e, !!n, t, !0) : Ia(e, !!n, n ? [] : "", !1));
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
        Wc(e, j, U);
        return;
      case "option":
        for (var J in n)
          j = n[J], n.hasOwnProperty(J) && j != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : ze(
            e,
            t,
            J,
            null,
            a,
            j
          ));
        for (E in a)
          j = a[E], U = n[E], a.hasOwnProperty(E) && j !== U && (j != null || U != null) && (E === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : ze(
            e,
            t,
            E,
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
        if (Qs(t)) {
          for (var He in n)
            j = n[He], n.hasOwnProperty(He) && j !== void 0 && !a.hasOwnProperty(He) && Uu(
              e,
              t,
              He,
              void 0,
              a,
              j
            );
          for (H in a)
            j = a[H], U = n[H], !a.hasOwnProperty(H) || j === U || j === void 0 && U === void 0 || Uu(
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
  function ah(e) {
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
  function op() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], s = i.transferSize, d = i.initiatorType, g = i.duration;
        if (s && g && ah(d)) {
          for (d = 0, g = i.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], _ = E.startTime;
            if (_ > g) break;
            var H = E.transferSize, G = E.initiatorType;
            H && ah(G) && (E = E.responseEnd, d += H * (E < g ? 1 : (g - _) / (E - _)));
          }
          if (--a, t += 8 * (s + d) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Mu = null, Lu = null;
  function Pr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function lh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ih(e, t) {
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
  function zu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Hu = null;
  function up() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Hu ? !1 : (Hu = e, !0) : (Hu = null, !1);
  }
  var rh = typeof setTimeout == "function" ? setTimeout : void 0, cp = typeof clearTimeout == "function" ? clearTimeout : void 0, sh = typeof Promise == "function" ? Promise : void 0, dp = typeof queueMicrotask == "function" ? queueMicrotask : typeof sh < "u" ? function(e) {
    return sh.resolve(null).then(e).catch(fp);
  } : rh;
  function fp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ma(e) {
    return e === "head";
  }
  function oh(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), _l(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Ai(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Ai(n);
          for (var s = n.firstChild; s; ) {
            var d = s.nextSibling, g = s.nodeName;
            s[Xl] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = d;
          }
        } else
          n === "body" && Ai(e.ownerDocument.body);
      n = i;
    } while (n);
    _l(t);
  }
  function uh(e, t) {
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
  function Bu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bu(n), Ys(n);
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
  function mp(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Xl])
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
      if (e = Pt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function hp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Pt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ch(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Pt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ku(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function qu(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function gp(e, t) {
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
  function Pt(e) {
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
  var Gu = null;
  function dh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Pt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function fh(e) {
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
  function mh(e, t, n) {
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
  function Ai(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ys(e);
  }
  var en = /* @__PURE__ */ new Map(), hh = /* @__PURE__ */ new Set();
  function es(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Bn = Y.d;
  Y.d = {
    f: yp,
    r: pp,
    D: bp,
    C: vp,
    L: wp,
    m: Ep,
    X: xp,
    S: Sp,
    M: Rp
  };
  function yp() {
    var e = Bn.f(), t = Xr();
    return e || t;
  }
  function pp(e) {
    var t = Fa(e);
    t !== null && t.tag === 5 && t.type === "form" ? jf(t) : Bn.r(e);
  }
  var Nl = typeof document > "u" ? null : document;
  function gh(e, t, n) {
    var a = Nl;
    if (a && typeof t == "string" && t) {
      var i = Qt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), hh.has(i) || (hh.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), pt(t, "link", e), dt(t), a.head.appendChild(t)));
    }
  }
  function bp(e) {
    Bn.D(e), gh("dns-prefetch", e, null);
  }
  function vp(e, t) {
    Bn.C(e, t), gh("preconnect", e, t);
  }
  function wp(e, t, n) {
    Bn.L(e, t, n);
    var a = Nl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Qt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Qt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Qt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Qt(e) + '"]';
      var s = i;
      switch (t) {
        case "style":
          s = Al(e);
          break;
        case "script":
          s = Cl(e);
      }
      en.has(s) || (e = A(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), en.set(s, e), a.querySelector(i) !== null || t === "style" && a.querySelector(Ci(s)) || t === "script" && a.querySelector(_i(s)) || (t = a.createElement("link"), pt(t, "link", e), dt(t), a.head.appendChild(t)));
    }
  }
  function Ep(e, t) {
    Bn.m(e, t);
    var n = Nl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Qt(a) + '"][href="' + Qt(e) + '"]', s = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Cl(e);
      }
      if (!en.has(s) && (e = A({ rel: "modulepreload", href: e }, t), en.set(s, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(_i(s)))
              return;
        }
        a = n.createElement("link"), pt(a, "link", e), dt(a), n.head.appendChild(a);
      }
    }
  }
  function Sp(e, t, n) {
    Bn.S(e, t, n);
    var a = Nl;
    if (a && e) {
      var i = $a(a).hoistableStyles, s = Al(e);
      t = t || "default";
      var d = i.get(s);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = a.querySelector(
          Ci(s)
        ))
          g.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = en.get(s)) && Yu(e, n);
          var E = d = a.createElement("link");
          dt(E), pt(E, "link", e), E._p = new Promise(function(_, H) {
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
  function xp(e, t) {
    Bn.X(e, t);
    var n = Nl;
    if (n && e) {
      var a = $a(n).hoistableScripts, i = Cl(e), s = a.get(i);
      s || (s = n.querySelector(_i(i)), s || (e = A({ src: e, async: !0 }, t), (t = en.get(i)) && Vu(e, t), s = n.createElement("script"), dt(s), pt(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function Rp(e, t) {
    Bn.M(e, t);
    var n = Nl;
    if (n && e) {
      var a = $a(n).hoistableScripts, i = Cl(e), s = a.get(i);
      s || (s = n.querySelector(_i(i)), s || (e = A({ src: e, async: !0, type: "module" }, t), (t = en.get(i)) && Vu(e, t), s = n.createElement("script"), dt(s), pt(s, "link", e), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s));
    }
  }
  function yh(e, t, n, a) {
    var i = (i = ie.current) ? es(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Al(n.href), n = $a(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Al(n.href);
          var s = $a(
            i
          ).hoistableStyles, d = s.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(e, d), (s = i.querySelector(
            Ci(e)
          )) && !s._p && (d.instance = s, d.state.loading = 5), en.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, en.set(e, n), s || Tp(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Cl(n), n = $a(
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
  function Al(e) {
    return 'href="' + Qt(e) + '"';
  }
  function Ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ph(e) {
    return A({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Tp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), pt(t, "link", n), dt(t), e.head.appendChild(t));
  }
  function Cl(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function _i(e) {
    return "script[async]" + e;
  }
  function bh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Qt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, dt(a), a;
          var i = A({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), dt(a), pt(a, "style", i), ts(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = Al(n.href);
          var s = e.querySelector(
            Ci(i)
          );
          if (s)
            return t.state.loading |= 4, t.instance = s, dt(s), s;
          a = ph(n), (i = en.get(i)) && Yu(a, i), s = (e.ownerDocument || e).createElement("link"), dt(s);
          var d = s;
          return d._p = new Promise(function(g, E) {
            d.onload = g, d.onerror = E;
          }), pt(s, "link", a), t.state.loading |= 4, ts(s, n.precedence, e), t.instance = s;
        case "script":
          return s = Cl(n.src), (i = e.querySelector(
            _i(s)
          )) ? (t.instance = i, dt(i), i) : (a = n, (i = en.get(s)) && (a = A({}, n), Vu(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), dt(i), pt(i, "link", a), e.head.appendChild(i), t.instance = i);
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
  function Yu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Vu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ns = null;
  function vh(e, t, n) {
    if (ns === null) {
      var a = /* @__PURE__ */ new Map(), i = ns = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = ns, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var s = n[i];
      if (!(s[Xl] || s[mt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = s.getAttribute(t) || "";
        d = e + d;
        var g = a.get(d);
        g ? g.push(s) : a.set(d, [s]);
      }
    }
    return a;
  }
  function wh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Np(e, t, n) {
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
  function Eh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Ap(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = Al(a.href), s = t.querySelector(
          Ci(i)
        );
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = as.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = s, dt(s);
          return;
        }
        s = t.ownerDocument || t, a = ph(a), (i = en.get(i)) && Yu(a, i), s = s.createElement("link"), dt(s);
        var d = s;
        d._p = new Promise(function(g, E) {
          d.onload = g, d.onerror = E;
        }), pt(s, "link", a), n.instance = s;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = as.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ku = 0;
  function Cp(e, t) {
    return e.stylesheets && e.count === 0 && is(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && is(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ku === 0 && (Ku = 62500 * op());
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ls = /* @__PURE__ */ new Map(), t.forEach(_p, e), ls = null, as.call(e));
  }
  function _p(e, t) {
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
  var Oi = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function Op(e, t, n, a, i, s, d, g, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bs(0), this.hiddenUpdates = Bs(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = s, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Sh(e, t, n, a, i, s, d, g, E, _, H, G) {
    return e = new Op(
      e,
      t,
      n,
      d,
      E,
      _,
      H,
      G,
      g
    ), t = 1, s === !0 && (t |= 24), s = zt(3, null, null, t), e.current = s, s.stateNode = e, t = xo(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Ao(s), e;
  }
  function xh(e) {
    return e ? (e = il, e) : il;
  }
  function Rh(e, t, n, a, i, s) {
    i = xh(i), a.context === null ? a.context = i : a.pendingContext = i, a = na(t), a.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (a.callback = s), n = aa(e, a, t), n !== null && (_t(n, e, t), oi(n, e, t));
  }
  function Th(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Xu(e, t) {
    Th(e, t), (e = e.alternate) && Th(e, t);
  }
  function Nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ca(e, 67108864);
      t !== null && _t(t, e, 67108864), Xu(e, 67108864);
    }
  }
  function Ah(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gt();
      t = ks(t);
      var n = Ca(e, t);
      n !== null && _t(n, e, t), Xu(e, t);
    }
  }
  var rs = !0;
  function jp(e, t, n, a) {
    var i = z.T;
    z.T = null;
    var s = Y.p;
    try {
      Y.p = 2, Qu(e, t, n, a);
    } finally {
      Y.p = s, z.T = i;
    }
  }
  function Dp(e, t, n, a) {
    var i = z.T;
    z.T = null;
    var s = Y.p;
    try {
      Y.p = 8, Qu(e, t, n, a);
    } finally {
      Y.p = s, z.T = i;
    }
  }
  function Qu(e, t, n, a) {
    if (rs) {
      var i = Zu(a);
      if (i === null)
        Du(
          e,
          t,
          a,
          ss,
          n
        ), _h(e, a);
      else if (Mp(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (_h(e, a), t & 4 && -1 < Up.indexOf(e)) {
        for (; i !== null; ) {
          var s = Fa(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var d = xa(s.pendingLanes);
                  if (d !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var E = 1 << 31 - Mt(d);
                      g.entanglements[1] |= E, d &= ~E;
                    }
                    pn(s), (_e & 6) === 0 && (Vr = ct() + 500, Ri(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = Ca(s, 2), g !== null && _t(g, s, 2), Xr(), Xu(s, 2);
            }
          if (s = Zu(a), s === null && Du(
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
        Du(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Zu(e) {
    return e = Fs(e), Fu(e);
  }
  var ss = null;
  function Fu(e) {
    if (ss = null, e = Za(e), e !== null) {
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
  function Ch(e) {
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
        switch (Hs()) {
          case Ji:
            return 2;
          case Gl:
            return 8;
          case ne:
          case we:
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
  var $u = !1, ha = null, ga = null, ya = null, ji = /* @__PURE__ */ new Map(), Di = /* @__PURE__ */ new Map(), pa = [], Up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _h(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ya = null;
        break;
      case "pointerover":
      case "pointerout":
        ji.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Di.delete(t.pointerId);
    }
  }
  function Ui(e, t, n, a, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [i]
    }, t !== null && (t = Fa(t), t !== null && Nh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Mp(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ha = Ui(
          ha,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return ga = Ui(
          ga,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return ya = Ui(
          ya,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var s = i.pointerId;
        return ji.set(
          s,
          Ui(
            ji.get(s) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return s = i.pointerId, Di.set(
          s,
          Ui(
            Di.get(s) || null,
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
  function Oh(e) {
    var t = Za(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Vc(e.priority, function() {
              Ah(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Vc(e.priority, function() {
              Ah(n);
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
      var n = Zu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Zs = a, n.target.dispatchEvent(a), Zs = null;
      } else
        return t = Fa(n), t !== null && Nh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function jh(e, t, n) {
    os(e) && n.delete(t);
  }
  function Lp() {
    $u = !1, ha !== null && os(ha) && (ha = null), ga !== null && os(ga) && (ga = null), ya !== null && os(ya) && (ya = null), ji.forEach(jh), Di.forEach(jh);
  }
  function us(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $u || ($u = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Lp
    )));
  }
  var cs = null;
  function Dh(e) {
    cs !== e && (cs = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        cs === e && (cs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Fu(a || n) === null)
              continue;
            break;
          }
          var s = Fa(n);
          s !== null && (e.splice(t, 3), t -= 3, Zo(
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
  function _l(e) {
    function t(E) {
      return us(E, e);
    }
    ha !== null && us(ha, e), ga !== null && us(ga, e), ya !== null && us(ya, e), ji.forEach(t), Di.forEach(t);
    for (var n = 0; n < pa.length; n++) {
      var a = pa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < pa.length && (n = pa[0], n.blockedOn === null); )
      Oh(n), n.blockedOn === null && pa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], s = n[a + 1], d = i[xt] || null;
        if (typeof s == "function")
          d || Dh(n);
        else if (d) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (i = s, d = s[xt] || null)
              g = d.formAction;
            else if (Fu(i) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? n[a + 1] = g : (n.splice(a, 3), a -= 3), Dh(n);
        }
      }
  }
  function Uh() {
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
  function Ju(e) {
    this._internalRoot = e;
  }
  ds.prototype.render = Ju.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Gt();
    Rh(n, a, e, t, null, null);
  }, ds.prototype.unmount = Ju.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Rh(e.current, 2, null, e, null, null), Xr(), t[Qa] = null;
    }
  };
  function ds(e) {
    this._internalRoot = e;
  }
  ds.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Yc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < pa.length && t !== 0 && t < pa[n].priority; n++) ;
      pa.splice(n, 0, e), n === 0 && Oh(e);
    }
  };
  var Mh = o.version;
  if (Mh !== "19.2.3")
    throw Error(
      c(
        527,
        Mh,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var zp = {
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
        Yl = fs.inject(
          zp
        ), Ut = fs;
      } catch {
      }
  }
  return zi.createRoot = function(e, t) {
    if (!f(e)) throw Error(c(299));
    var n = !1, a = "", i = Gf, s = Yf, d = Vf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Sh(
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
      Uh
    ), e[Qa] = t.current, ju(e), new Ju(t);
  }, zi.hydrateRoot = function(e, t, n) {
    if (!f(e)) throw Error(c(299));
    var a = !1, i = "", s = Gf, d = Yf, g = Vf, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), t = Sh(
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
      Uh
    ), t.context = xh(null), n = t.current, a = Gt(), a = ks(a), i = na(a), i.callback = null, aa(n, i, a), n = a, t.current.lanes = n, Kl(t, n), pn(t), e[Qa] = t.current, ju(e), new ds(t);
  }, zi.version = "19.2.3", zi;
}
var Jh;
function Tb() {
  if (Jh) return ac.exports;
  Jh = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), ac.exports = Rb(), ac.exports;
}
var Nb = Tb();
function Ab(l = {}) {
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
const Z0 = w.createContext(null);
function Cb({ clientId: l, nonce: r, locale: o, onScriptLoadSuccess: u, onScriptLoadError: c, children: f }) {
  const h = Ab({
    nonce: r,
    onScriptLoadSuccess: u,
    onScriptLoadError: c,
    locale: o
  }), p = w.useMemo(() => ({
    locale: o,
    clientId: l,
    scriptLoadedSuccessfully: h
  }), [l, h]);
  return Yp.createElement(Z0.Provider, { value: p }, f);
}
function _b() {
  const l = w.useContext(Z0);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function Ob({ flow: l = "implicit", scope: r = "", onSuccess: o, onError: u, onNonOAuthError: c, overrideScope: f, state: h, ...p }) {
  const { clientId: b, scriptLoadedSuccessfully: y } = _b(), v = w.useRef(), S = w.useRef(o);
  S.current = o;
  const A = w.useRef(u);
  A.current = u;
  const q = w.useRef(c);
  q.current = c, w.useEffect(() => {
    var O, V;
    if (!y)
      return;
    const K = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (V = (O = window?.google) === null || O === void 0 ? void 0 : O.accounts) === null || V === void 0 ? void 0 : V.oauth2[K]({
      client_id: b,
      scope: f ? r : `openid profile email ${r}`,
      callback: (W) => {
        var F, se;
        if (W.error)
          return (F = A.current) === null || F === void 0 ? void 0 : F.call(A, W);
        (se = S.current) === null || se === void 0 || se.call(S, W);
      },
      error_callback: (W) => {
        var F;
        (F = q.current) === null || F === void 0 || F.call(q, W);
      },
      state: h,
      ...p
    });
    v.current = Q;
  }, [b, y, l, r, h]);
  const T = w.useCallback((O) => {
    var V;
    return (V = v.current) === null || V === void 0 ? void 0 : V.requestAccessToken(O);
  }, []), L = w.useCallback(() => {
    var O;
    return (O = v.current) === null || O === void 0 ? void 0 : O.requestCode();
  }, []);
  return l === "implicit" ? T : L;
}
var le = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(le || {}), tt = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(tt || {}), Ye = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(Ye || {}), tn = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(tn || {}), Oc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(Oc || {}), va = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(va || {}), Gi = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(Gi || {});
const nt = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  IAM_AUTHORITY_OVERRIDE: "iam_authority_override",
  THEME_LOADED: "theme_loaded"
}, Ue = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  REFRESH_TOKEN_TIME: "refresh_token_time"
}, bs = {
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
}, zl = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, jl = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15,
  MIN_PART_LENGTH_FOR_NAME_CHECK: 2
}, Dl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Yt = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[!@#$%^&*._\-]/,
  ALLOWED_CHARS: /^[A-Za-z0-9!@#$%^&*._\-]+$/,
  NO_SPACES: /\s/,
  NO_TRIPLE: /(.)\1\1/
}, Ih = /[!@#$%^&*._-]/, Wh = /^[A-Za-z0-9!@#$%^&*._-]+$/, vn = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300,
  TOKEN_REFRESH_MAX_AGE_DAYS: 7,
  RESEND_COOLDOWN_SECONDS: 30
}, Yn = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7,
  ONE_DAY_MS: 1440 * 60 * 1e3,
  // 1 day in milliseconds
  THIRTY_DAYS_SECONDS: 720 * 60 * 60
  // 30 days in seconds
}, Hi = {
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
}, Oe = {
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
}, Yi = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, Ge = {
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
}, rc = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, sc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, oc = {
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
  type: u = Ye.BUTTON,
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
  }, A = h ? `identity-widget-button ${v} ${S[c]} ${h}` : `identity-widget-button ${v} ${S[c]}`, q = Array.from(
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
      className: A,
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
  } = l, A = !!f || !!h, q = S.type === "select" || !!y, T = v || `input-${Math.random().toString(36).substr(2, 9)}`, L = `${T}-error`, O = `${T}-helper`;
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
                  "aria-invalid": A,
                  "aria-describedby": A ? L : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: A ? "#d64545" : "#cbd5d5",
                    ...S.style
                  },
                  ...S,
                  children: y && y.map((V) => /* @__PURE__ */ m.jsx(
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
                  id: T,
                  part: "identity-widget-input-field",
                  "aria-label": typeof o == "string" ? o : S["aria-label"],
                  "aria-invalid": A,
                  "aria-describedby": A ? L : void 0,
                  "aria-required": S.required,
                  className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
                  style: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: A ? "#d64545" : "#cbd5d5",
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
        return va.ALERT;
      case le.WARNING:
      case le.INFO:
        return va.STATUS;
      case le.SUCCESS:
        return va.STATUS;
      default:
        return va.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: S(),
      "aria-live": l === le.ERROR ? Gi.ASSERTIVE : Gi.POLITE,
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
}, pc = ({ type: l, message: r, duration: o = 5e3, onClose: u, className: c = "" }) => {
  const [f, h] = w.useState(!1), [p, b] = w.useState(!1);
  w.useEffect(() => {
    setTimeout(() => h(!0), vn.ANIMATION_ENTRANCE_DELAY);
    const T = setTimeout(() => {
      y();
    }, o);
    return () => clearTimeout(T);
  }, [o]);
  const y = () => {
    b(!0), setTimeout(() => {
      h(!1), u && u();
    }, vn.ANIMATION_EXIT_DURATION);
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
  }, A = v(), q = () => {
    switch (l) {
      case le.ERROR:
        return va.ALERT;
      case le.WARNING:
      case le.INFO:
      case le.SUCCESS:
        return va.STATUS;
      default:
        return va.STATUS;
    }
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: q(),
      "aria-live": l === le.ERROR ? Gi.ASSERTIVE : Gi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${rc.Z_INDEX}]! transition-all! duration-300! ${f && !p ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: rc.MAX_WIDTH, width: rc.WIDTH },
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          part: "identity-widget-toast-body",
          className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${A.bg}`,
          children: [
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-toast-icon",
                className: `identity-widget-toast-icon flex-shrink-0! ${A.icon}`,
                "aria-hidden": "true",
                children: S()
              }
            ),
            /* @__PURE__ */ m.jsx(
              "div",
              {
                part: "identity-widget-toast-content",
                className: `identity-widget-toast-content ml-3! flex-1! ${A.text}`,
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
                className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${A.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
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
}, _s = () => /* @__PURE__ */ m.jsx(
  "span",
  {
    part: "identity-widget-loader",
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ m.jsx("span", { part: "identity-widget-loader-text", className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class ki extends Error {
}
ki.prototype.name = "InvalidTokenError";
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
function Hl(l, r) {
  if (typeof l != "string")
    throw new ki("Invalid token specified: must be a string");
  r || (r = {});
  const o = r.header === !0 ? 0 : 1, u = l.split(".")[o];
  if (typeof u != "string")
    throw new ki(`Invalid token specified: missing part #${o + 1}`);
  let c;
  try {
    c = Lb(u);
  } catch (f) {
    throw new ki(`Invalid token specified: invalid base64 for part #${o + 1} (${f.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (f) {
    throw new ki(`Invalid token specified: invalid json for part #${o + 1} (${f.message})`);
  }
}
function F0() {
  const l = window.location.hostname;
  if (l === qn.HOSTNAME || l === qn.IP || qn.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function zb() {
  const l = window.location.hostname;
  return l === qn.HOSTNAME || l === qn.IP || qn.IP_PATTERN.test(l) || l.startsWith(`${We.DEV}.`) || l.startsWith(`${We.DEV}-`) ? tn.DEV : l.startsWith(`${We.TEST}.`) || l.startsWith(`${We.TEST}-`) ? tn.TEST : l.startsWith(`${We.STAGE}.`) || l.startsWith(`${We.STAGE}-`) ? tn.STAGE : tn.PROD;
}
function uc() {
  const l = window.location.href, r = new URL(l), o = r.hostname;
  if (o.startsWith(`${We.DEV}.`)) {
    const u = o.replace(`${We.DEV}.`, `${We.DEV_LEARN}.`);
    return `${r.protocol}//${u}${Hi.COURSES}`;
  } else if (o.startsWith(`${We.TEST}.`)) {
    const u = o.replace(`${We.TEST}.`, `${We.TEST_LEARN}.`);
    return `${r.protocol}//${u}${Hi.COURSES}`;
  } else if (o.startsWith(`${We.STAGE}.`)) {
    const u = o.replace(`${We.STAGE}.`, `${We.STAGE_LEARN}.`);
    return `${r.protocol}//${u}${Hi.COURSES}`;
  } else if (o.split(".").length === 2) {
    const c = `${We.LEARN}.${o}`;
    return `${r.protocol}//${c}${Hi.COURSES}`;
  } else
    return `${r.protocol}//${o}${Hi.COURSES}`;
}
function un(l, r, o, u = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + o);
  const f = F0(), h = f ? `; domain=${f}` : "", p = window.location.protocol === "https:" ? "; secure" : "", b = u ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${b}; expires=${c.toUTCString()}; path=/${h}${p}; SameSite=Strict`;
}
function Et(l, r = !0) {
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
function cc(l) {
  const r = F0(), o = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${o}`;
}
function $0(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var Ph = {};
const { toString: Hb } = Object.prototype, { getPrototypeOf: jc } = Object, { iterator: Os, toStringTag: J0 } = Symbol, js = /* @__PURE__ */ ((l) => (r) => {
  const o = Hb.call(r);
  return l[o] || (l[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dn = (l) => (l = l.toLowerCase(), (r) => js(r) === l), Ds = (l) => (r) => typeof r === l, { isArray: Bl } = Array, Ul = Ds("undefined");
function Qi(l) {
  return l !== null && !Ul(l) && l.constructor !== null && !Ul(l.constructor) && jt(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const I0 = dn("ArrayBuffer");
function Bb(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && I0(l.buffer), r;
}
const kb = Ds("string"), jt = Ds("function"), W0 = Ds("number"), Zi = (l) => l !== null && typeof l == "object", qb = (l) => l === !0 || l === !1, vs = (l) => {
  if (js(l) !== "object")
    return !1;
  const r = jc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(J0 in l) && !(Os in l);
}, Gb = (l) => {
  if (!Zi(l) || Qi(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, Yb = dn("Date"), Vb = dn("File"), Kb = dn("Blob"), Xb = dn("FileList"), Qb = (l) => Zi(l) && jt(l.pipe), Zb = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || jt(l.append) && ((r = js(l)) === "formdata" || // detect form-data instance
  r === "object" && jt(l.toString) && l.toString() === "[object FormData]"));
}, Fb = dn("URLSearchParams"), [$b, Jb, Ib, Wb] = ["ReadableStream", "Request", "Response", "Headers"].map(dn), Pb = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fi(l, r, { allOwnKeys: o = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let u, c;
  if (typeof l != "object" && (l = [l]), Bl(l))
    for (u = 0, c = l.length; u < c; u++)
      r.call(null, l[u], u, l);
  else {
    if (Qi(l))
      return;
    const f = o ? Object.getOwnPropertyNames(l) : Object.keys(l), h = f.length;
    let p;
    for (u = 0; u < h; u++)
      p = f[u], r.call(null, l[p], p, l);
  }
}
function P0(l, r) {
  if (Qi(l))
    return null;
  r = r.toLowerCase();
  const o = Object.keys(l);
  let u = o.length, c;
  for (; u-- > 0; )
    if (c = o[u], r === c.toLowerCase())
      return c;
  return null;
}
const Ga = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, eg = (l) => !Ul(l) && l !== Ga;
function bc() {
  const { caseless: l, skipUndefined: r } = eg(this) && this || {}, o = {}, u = (c, f) => {
    const h = l && P0(o, f) || f;
    vs(o[h]) && vs(c) ? o[h] = bc(o[h], c) : vs(c) ? o[h] = bc({}, c) : Bl(c) ? o[h] = c.slice() : (!r || !Ul(c)) && (o[h] = c);
  };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && Fi(arguments[c], u);
  return o;
}
const ev = (l, r, o, { allOwnKeys: u } = {}) => (Fi(r, (c, f) => {
  o && jt(c) ? l[f] = $0(c, o) : l[f] = c;
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
    l = o !== !1 && jc(l);
  } while (l && (!o || o(l, r)) && l !== Object.prototype);
  return r;
}, lv = (l, r, o) => {
  l = String(l), (o === void 0 || o > l.length) && (o = l.length), o -= r.length;
  const u = l.indexOf(r, o);
  return u !== -1 && u === o;
}, iv = (l) => {
  if (!l) return null;
  if (Bl(l)) return l;
  let r = l.length;
  if (!W0(r)) return null;
  const o = new Array(r);
  for (; r-- > 0; )
    o[r] = l[r];
  return o;
}, rv = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && jc(Uint8Array)), sv = (l, r) => {
  const u = (l && l[Os]).call(l);
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
}, uv = dn("HTMLFormElement"), cv = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, u, c) {
    return u.toUpperCase() + c;
  }
), e0 = (({ hasOwnProperty: l }) => (r, o) => l.call(r, o))(Object.prototype), dv = dn("RegExp"), tg = (l, r) => {
  const o = Object.getOwnPropertyDescriptors(l), u = {};
  Fi(o, (c, f) => {
    let h;
    (h = r(c, f, l)) !== !1 && (u[f] = h || c);
  }), Object.defineProperties(l, u);
}, fv = (l) => {
  tg(l, (r, o) => {
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
  return Bl(l) ? u(l) : u(String(l).split(r)), o;
}, hv = () => {
}, gv = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function yv(l) {
  return !!(l && jt(l.append) && l[J0] === "FormData" && l[Os]);
}
const pv = (l) => {
  const r = new Array(10), o = (u, c) => {
    if (Zi(u)) {
      if (r.indexOf(u) >= 0)
        return;
      if (Qi(u))
        return u;
      if (!("toJSON" in u)) {
        r[c] = u;
        const f = Bl(u) ? [] : {};
        return Fi(u, (h, p) => {
          const b = o(h, c + 1);
          !Ul(b) && (f[p] = b);
        }), r[c] = void 0, f;
      }
    }
    return u;
  };
  return o(l, 0);
}, bv = dn("AsyncFunction"), vv = (l) => l && (Zi(l) || jt(l)) && jt(l.then) && jt(l.catch), ng = ((l, r) => l ? setImmediate : r ? ((o, u) => (Ga.addEventListener("message", ({ source: c, data: f }) => {
  c === Ga && f === o && u.length && u.shift()();
}, !1), (c) => {
  u.push(c), Ga.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  jt(Ga.postMessage)
), wv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ga) : typeof Ph < "u" && Ph.nextTick || ng, Ev = (l) => l != null && jt(l[Os]), D = {
  isArray: Bl,
  isArrayBuffer: I0,
  isBuffer: Qi,
  isFormData: Zb,
  isArrayBufferView: Bb,
  isString: kb,
  isNumber: W0,
  isBoolean: qb,
  isObject: Zi,
  isPlainObject: vs,
  isEmptyObject: Gb,
  isReadableStream: $b,
  isRequest: Jb,
  isResponse: Ib,
  isHeaders: Wb,
  isUndefined: Ul,
  isDate: Yb,
  isFile: Vb,
  isBlob: Kb,
  isRegExp: dv,
  isFunction: jt,
  isStream: Qb,
  isURLSearchParams: Fb,
  isTypedArray: rv,
  isFileList: Xb,
  forEach: Fi,
  merge: bc,
  extend: ev,
  trim: Pb,
  stripBOM: tv,
  inherits: nv,
  toFlatObject: av,
  kindOf: js,
  kindOfTest: dn,
  endsWith: lv,
  toArray: iv,
  forEachEntry: sv,
  matchAll: ov,
  isHTMLForm: uv,
  hasOwnProperty: e0,
  hasOwnProp: e0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: tg,
  freezeMethods: fv,
  toObjectSet: mv,
  toCamelCase: cv,
  noop: hv,
  toFiniteNumber: gv,
  findKey: P0,
  global: Ga,
  isContextDefined: eg,
  isSpecCompliantForm: yv,
  toJSONObject: pv,
  isAsyncFn: bv,
  isThenable: vv,
  setImmediate: ng,
  asap: wv,
  isIterable: Ev
};
function me(l, r, o, u, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), u && (this.request = u), c && (this.response = c, this.status = c.status ? c.status : null);
}
D.inherits(me, Error, {
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
const ag = me.prototype, lg = {};
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
  lg[l] = { value: l };
});
Object.defineProperties(me, lg);
Object.defineProperty(ag, "isAxiosError", { value: !0 });
me.from = (l, r, o, u, c, f) => {
  const h = Object.create(ag);
  D.toFlatObject(l, h, function(v) {
    return v !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = l && l.message ? l.message : "Error", b = r == null && l ? l.code : r;
  return me.call(h, p, b, o, u, c), l && h.cause == null && Object.defineProperty(h, "cause", { value: l, configurable: !0 }), h.name = l && l.name || "Error", f && Object.assign(h, f), h;
};
const Sv = null;
function vc(l) {
  return D.isPlainObject(l) || D.isArray(l);
}
function ig(l) {
  return D.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function t0(l, r, o) {
  return l ? l.concat(r).map(function(c, f) {
    return c = ig(c), !o && f ? "[" + c + "]" : c;
  }).join(o ? "." : "") : r;
}
function xv(l) {
  return D.isArray(l) && !l.some(vc);
}
const Rv = D.toFlatObject(D, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Us(l, r, o) {
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
      throw new me("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(T) || D.isTypedArray(T) ? b && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T;
  }
  function v(T, L, O) {
    let V = T;
    if (T && !O && typeof T == "object") {
      if (D.endsWith(L, "{}"))
        L = u ? L : L.slice(0, -2), T = JSON.stringify(T);
      else if (D.isArray(T) && xv(T) || (D.isFileList(T) || D.endsWith(L, "[]")) && (V = D.toArray(T)))
        return L = ig(L), V.forEach(function(Q, W) {
          !(D.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? t0([L], W, f) : h === null ? L : L + "[]",
            y(Q)
          );
        }), !1;
    }
    return vc(T) ? !0 : (r.append(t0(O, L, f), y(T)), !1);
  }
  const S = [], A = Object.assign(Rv, {
    defaultVisitor: v,
    convertValue: y,
    isVisitable: vc
  });
  function q(T, L) {
    if (!D.isUndefined(T)) {
      if (S.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      S.push(T), D.forEach(T, function(V, K) {
        (!(D.isUndefined(V) || V === null) && c.call(
          r,
          V,
          D.isString(K) ? K.trim() : K,
          L,
          A
        )) === !0 && q(V, L ? L.concat(K) : [K]);
      }), S.pop();
    }
  }
  if (!D.isObject(l))
    throw new TypeError("data must be an object");
  return q(l), r;
}
function n0(l) {
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
function Dc(l, r) {
  this._pairs = [], l && Us(l, this, r);
}
const rg = Dc.prototype;
rg.append = function(r, o) {
  this._pairs.push([r, o]);
};
rg.toString = function(r) {
  const o = r ? function(u) {
    return r.call(this, u, n0);
  } : n0;
  return this._pairs.map(function(c) {
    return o(c[0]) + "=" + o(c[1]);
  }, "").join("&");
};
function Tv(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function sg(l, r, o) {
  if (!r)
    return l;
  const u = o && o.encode || Tv;
  D.isFunction(o) && (o = {
    serialize: o
  });
  const c = o && o.serialize;
  let f;
  if (c ? f = c(r, o) : f = D.isURLSearchParams(r) ? r.toString() : new Dc(r, o).toString(u), f) {
    const h = l.indexOf("#");
    h !== -1 && (l = l.slice(0, h)), l += (l.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return l;
}
class a0 {
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
const og = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nv = typeof URLSearchParams < "u" ? URLSearchParams : Dc, Av = typeof FormData < "u" ? FormData : null, Cv = typeof Blob < "u" ? Blob : null, _v = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Nv,
    FormData: Av,
    Blob: Cv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Uc = typeof window < "u" && typeof document < "u", wc = typeof navigator == "object" && navigator || void 0, Ov = Uc && (!wc || ["ReactNative", "NativeScript", "NS"].indexOf(wc.product) < 0), jv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Dv = Uc && window.location.href || "http://localhost", Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Uc,
  hasStandardBrowserEnv: Ov,
  hasStandardBrowserWebWorkerEnv: jv,
  navigator: wc,
  origin: Dv
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...Uv,
  ..._v
};
function Mv(l, r) {
  return Us(l, new vt.classes.URLSearchParams(), {
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
function ug(l) {
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
const $i = {
  transitional: og,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, o) {
    const u = o.getContentType() || "", c = u.indexOf("application/json") > -1, f = D.isObject(r);
    if (f && D.isHTMLForm(r) && (r = new FormData(r)), D.isFormData(r))
      return c ? JSON.stringify(ug(r)) : r;
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
        return Us(
          p ? { "files[]": r } : r,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return f || c ? (o.setContentType("application/json", !1), Hv(r)) : r;
  }],
  transformResponse: [function(r) {
    const o = this.transitional || $i.transitional, u = o && o.forcedJSONParsing, c = this.responseType === "json";
    if (D.isResponse(r) || D.isReadableStream(r))
      return r;
    if (r && D.isString(r) && (u && !this.responseType || c)) {
      const h = !(o && o.silentJSONParsing) && c;
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
  $i.headers[l] = {};
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
}, l0 = /* @__PURE__ */ Symbol("internals");
function Bi(l) {
  return l && String(l).trim().toLowerCase();
}
function ws(l) {
  return l === !1 || l == null ? l : D.isArray(l) ? l.map(ws) : String(l);
}
function qv(l) {
  const r = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = o.exec(l); )
    r[u[1]] = u[2];
  return r;
}
const Gv = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function dc(l, r, o, u, c) {
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
function Vv(l, r) {
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
      const v = Bi(b);
      if (!v)
        throw new Error("header name must be a non-empty string");
      const S = D.findKey(c, v);
      (!S || c[S] === void 0 || y === !0 || y === void 0 && c[S] !== !1) && (c[S || b] = ws(p));
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
    if (r = Bi(r), r) {
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
    if (r = Bi(r), r) {
      const u = D.findKey(this, r);
      return !!(u && this[u] !== void 0 && (!o || dc(this, this[u], u, o)));
    }
    return !1;
  }
  delete(r, o) {
    const u = this;
    let c = !1;
    function f(h) {
      if (h = Bi(h), h) {
        const p = D.findKey(u, h);
        p && (!o || dc(u, u[p], p, o)) && (delete u[p], c = !0);
      }
    }
    return D.isArray(r) ? r.forEach(f) : f(r), c;
  }
  clear(r) {
    const o = Object.keys(this);
    let u = o.length, c = !1;
    for (; u--; ) {
      const f = o[u];
      (!r || dc(this, this[f], f, r, !0)) && (delete this[f], c = !0);
    }
    return c;
  }
  normalize(r) {
    const o = this, u = {};
    return D.forEach(this, (c, f) => {
      const h = D.findKey(u, f);
      if (h) {
        o[h] = ws(c), delete o[f];
        return;
      }
      const p = r ? Yv(f) : String(f).trim();
      p !== f && delete o[f], o[p] = ws(c), u[p] = !0;
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
    const u = (this[l0] = this[l0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function f(h) {
      const p = Bi(h);
      u[p] || (Vv(c, h), u[p] = !0);
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
function fc(l, r) {
  const o = this || $i, u = r || o, c = Dt.from(u.headers);
  let f = u.data;
  return D.forEach(l, function(p) {
    f = p.call(o, f, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), f;
}
function cg(l) {
  return !!(l && l.__CANCEL__);
}
function kl(l, r, o) {
  me.call(this, l ?? "canceled", me.ERR_CANCELED, r, o), this.name = "CanceledError";
}
D.inherits(kl, me, {
  __CANCEL__: !0
});
function dg(l, r, o) {
  const u = o.config.validateStatus;
  !o.status || !u || u(o.status) ? l(o) : r(new me(
    "Request failed with status code " + o.status,
    [me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function Kv(l) {
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
    let S = f, A = 0;
    for (; S !== c; )
      A += o[S++], S = S % l;
    if (c = (c + 1) % l, c === f && (f = (f + 1) % l), y - h < r)
      return;
    const q = v && y - v;
    return q ? Math.round(A * 1e3 / q) : void 0;
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
const Ts = (l, r, o = 3) => {
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
}, i0 = (l, r) => {
  const o = l != null;
  return [(u) => r[0]({
    lengthComputable: o,
    total: l,
    loaded: u
  }), r[1]];
}, r0 = (l) => (...r) => D.asap(() => l(...r)), Zv = vt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (o) => (o = new URL(o, vt.origin), l.protocol === o.protocol && l.host === o.host && (r || l.port === o.port)))(
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
function $v(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Jv(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function fg(l, r, o) {
  let u = !$v(r);
  return l && (u || o == !1) ? Jv(l, r) : r;
}
const s0 = (l) => l instanceof Dt ? { ...l } : l;
function Va(l, r) {
  r = r || {};
  const o = {};
  function u(y, v, S, A) {
    return D.isPlainObject(y) && D.isPlainObject(v) ? D.merge.call({ caseless: A }, y, v) : D.isPlainObject(v) ? D.merge({}, v) : D.isArray(v) ? v.slice() : v;
  }
  function c(y, v, S, A) {
    if (D.isUndefined(v)) {
      if (!D.isUndefined(y))
        return u(void 0, y, S, A);
    } else return u(y, v, S, A);
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
    headers: (y, v, S) => c(s0(y), s0(v), S, !0)
  };
  return D.forEach(Object.keys({ ...l, ...r }), function(v) {
    const S = b[v] || c, A = S(l[v], r[v], v);
    D.isUndefined(A) && S !== p || (o[v] = A);
  }), o;
}
const mg = (l) => {
  const r = Va({}, l);
  let { data: o, withXSRFToken: u, xsrfHeaderName: c, xsrfCookieName: f, headers: h, auth: p } = r;
  if (r.headers = h = Dt.from(h), r.url = sg(fg(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), p && h.set(
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
}, Iv = typeof XMLHttpRequest < "u", Wv = Iv && function(l) {
  return new Promise(function(o, u) {
    const c = mg(l);
    let f = c.data;
    const h = Dt.from(c.headers).normalize();
    let { responseType: p, onUploadProgress: b, onDownloadProgress: y } = c, v, S, A, q, T;
    function L() {
      q && q(), T && T(), c.cancelToken && c.cancelToken.unsubscribe(v), c.signal && c.signal.removeEventListener("abort", v);
    }
    let O = new XMLHttpRequest();
    O.open(c.method.toUpperCase(), c.url, !0), O.timeout = c.timeout;
    function V() {
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
      dg(function(te) {
        o(te), L();
      }, function(te) {
        u(te), L();
      }, F), O = null;
    }
    "onloadend" in O ? O.onloadend = V : O.onreadystatechange = function() {
      !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, O.onabort = function() {
      O && (u(new me("Request aborted", me.ECONNABORTED, l, O)), O = null);
    }, O.onerror = function(W) {
      const F = W && W.message ? W.message : "Network Error", se = new me(F, me.ERR_NETWORK, l, O);
      se.event = W || null, u(se), O = null;
    }, O.ontimeout = function() {
      let W = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const F = c.transitional || og;
      c.timeoutErrorMessage && (W = c.timeoutErrorMessage), u(new me(
        W,
        F.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,
        l,
        O
      )), O = null;
    }, f === void 0 && h.setContentType(null), "setRequestHeader" in O && D.forEach(h.toJSON(), function(W, F) {
      O.setRequestHeader(F, W);
    }), D.isUndefined(c.withCredentials) || (O.withCredentials = !!c.withCredentials), p && p !== "json" && (O.responseType = c.responseType), y && ([A, T] = Ts(y, !0), O.addEventListener("progress", A)), b && O.upload && ([S, q] = Ts(b), O.upload.addEventListener("progress", S), O.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (v = (Q) => {
      O && (u(!Q || Q.type ? new kl(null, l, O) : Q), O.abort(), O = null);
    }, c.cancelToken && c.cancelToken.subscribe(v), c.signal && (c.signal.aborted ? v() : c.signal.addEventListener("abort", v)));
    const K = Kv(c.url);
    if (K && vt.protocols.indexOf(K) === -1) {
      u(new me("Unsupported protocol " + K + ":", me.ERR_BAD_REQUEST, l));
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
        u.abort(v instanceof me ? v : new kl(v instanceof Error ? v.message : v));
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
    const { signal: b } = u;
    return b.unsubscribe = () => D.asap(p), b;
  }
}, ew = function* (l, r) {
  let o = l.byteLength;
  if (o < r) {
    yield l;
    return;
  }
  let u = 0, c;
  for (; u < o; )
    c = u + r, yield l.slice(u, c), u = c;
}, tw = async function* (l, r) {
  for await (const o of nw(l))
    yield* ew(o, r);
}, nw = async function* (l) {
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
}, o0 = (l, r, o, u) => {
  const c = tw(l, r);
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
          let A = f += S;
          o(A);
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
}, u0 = 64 * 1024, { isFunction: gs } = D, aw = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(D.global), {
  ReadableStream: c0,
  TextEncoder: d0
} = D.global, f0 = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, lw = (l) => {
  l = D.merge.call({
    skipUndefined: !0
  }, aw, l);
  const { fetch: r, Request: o, Response: u } = l, c = r ? gs(r) : typeof fetch == "function", f = gs(o), h = gs(u);
  if (!c)
    return !1;
  const p = c && gs(c0), b = c && (typeof d0 == "function" ? /* @__PURE__ */ ((T) => (L) => T.encode(L))(new d0()) : async (T) => new Uint8Array(await new o(T).arrayBuffer())), y = f && p && f0(() => {
    let T = !1;
    const L = new o(vt.origin, {
      body: new c0(),
      method: "POST",
      get duplex() {
        return T = !0, "half";
      }
    }).headers.has("Content-Type");
    return T && !L;
  }), v = h && p && f0(() => D.isReadableStream(new u("").body)), S = {
    stream: v && ((T) => T.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((T) => {
    !S[T] && (S[T] = (L, O) => {
      let V = L && L[T];
      if (V)
        return V.call(L);
      throw new me(`Response type '${T}' is not supported`, me.ERR_NOT_SUPPORT, O);
    });
  });
  const A = async (T) => {
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
    return O ?? A(L);
  };
  return async (T) => {
    let {
      url: L,
      method: O,
      data: V,
      signal: K,
      cancelToken: Q,
      timeout: W,
      onDownloadProgress: F,
      onUploadProgress: se,
      responseType: te,
      headers: $,
      withCredentials: oe = "same-origin",
      fetchOptions: ge
    } = mg(T), Xe = r || fetch;
    te = te ? (te + "").toLowerCase() : "text";
    let pe = Pv([K, Q && Q.toAbortSignal()], W), Me = null;
    const qe = pe && pe.unsubscribe && (() => {
      pe.unsubscribe();
    });
    let Qe;
    try {
      if (se && y && O !== "get" && O !== "head" && (Qe = await q($, V)) !== 0) {
        let xe = new o(L, {
          method: "POST",
          body: V,
          duplex: "half"
        }), x;
        if (D.isFormData(V) && (x = xe.headers.get("content-type")) && $.setContentType(x), xe.body) {
          const [B, X] = i0(
            Qe,
            Ts(r0(se))
          );
          V = o0(xe.body, u0, B, X);
        }
      }
      D.isString(oe) || (oe = oe ? "include" : "omit");
      const M = f && "credentials" in o.prototype, z = {
        ...ge,
        signal: pe,
        method: O.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: V,
        duplex: "half",
        credentials: M ? oe : void 0
      };
      Me = f && new o(L, z);
      let Y = await (f ? Xe(Me, ge) : Xe(L, z));
      const ce = v && (te === "stream" || te === "response");
      if (v && (F || ce && qe)) {
        const xe = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          xe[Z] = Y[Z];
        });
        const x = D.toFiniteNumber(Y.headers.get("content-length")), [B, X] = F && i0(
          x,
          Ts(r0(F), !0)
        ) || [];
        Y = new u(
          o0(Y.body, u0, B, () => {
            X && X(), qe && qe();
          }),
          xe
        );
      }
      te = te || "text";
      let Te = await S[D.findKey(S, te) || "text"](Y, T);
      return !ce && qe && qe(), await new Promise((xe, x) => {
        dg(xe, x, {
          data: Te,
          headers: Dt.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: T,
          request: Me
        });
      });
    } catch (M) {
      throw qe && qe(), M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new me("Network Error", me.ERR_NETWORK, T, Me),
        {
          cause: M.cause || M
        }
      ) : me.from(M, M && M.code, T, Me);
    }
  };
}, iw = /* @__PURE__ */ new Map(), hg = (l) => {
  let r = l && l.env || {};
  const { fetch: o, Request: u, Response: c } = r, f = [
    u,
    c,
    o
  ];
  let h = f.length, p = h, b, y, v = iw;
  for (; p--; )
    b = f[p], y = v.get(b), y === void 0 && v.set(b, y = p ? /* @__PURE__ */ new Map() : lw(r)), v = y;
  return y;
};
hg();
const Mc = {
  http: Sv,
  xhr: Wv,
  fetch: {
    get: hg
  }
};
D.forEach(Mc, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const m0 = (l) => `- ${l}`, rw = (l) => D.isFunction(l) || l === null || l === !1;
function sw(l, r) {
  l = D.isArray(l) ? l : [l];
  const { length: o } = l;
  let u, c;
  const f = {};
  for (let h = 0; h < o; h++) {
    u = l[h];
    let p;
    if (c = u, !rw(u) && (c = Mc[(p = String(u)).toLowerCase()], c === void 0))
      throw new me(`Unknown adapter '${p}'`);
    if (c && (D.isFunction(c) || (c = c.get(r))))
      break;
    f[p || "#" + h] = c;
  }
  if (!c) {
    const h = Object.entries(f).map(
      ([b, y]) => `adapter ${b} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = o ? h.length > 1 ? `since :
` + h.map(m0).join(`
`) : " " + m0(h[0]) : "as no adapter specified";
    throw new me(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const gg = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: sw,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Mc
};
function mc(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new kl(null, l);
}
function h0(l) {
  return mc(l), l.headers = Dt.from(l.headers), l.data = fc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), gg.getAdapter(l.adapter || $i.adapter, l)(l).then(function(u) {
    return mc(l), u.data = fc.call(
      l,
      l.transformResponse,
      u
    ), u.headers = Dt.from(u.headers), u;
  }, function(u) {
    return cg(u) || (mc(l), u && u.response && (u.response.data = fc.call(
      l,
      l.transformResponse,
      u.response
    ), u.response.headers = Dt.from(u.response.headers))), Promise.reject(u);
  });
}
const yg = "1.13.2", Ms = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  Ms[l] = function(u) {
    return typeof u === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const g0 = {};
Ms.transitional = function(r, o, u) {
  function c(f, h) {
    return "[Axios v" + yg + "] Transitional option '" + f + "'" + h + (u ? ". " + u : "");
  }
  return (f, h, p) => {
    if (r === !1)
      throw new me(
        c(h, " has been removed" + (o ? " in " + o : "")),
        me.ERR_DEPRECATED
      );
    return o && !g0[h] && (g0[h] = !0, console.warn(
      c(
        h,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(f, h, p) : !0;
  };
};
Ms.spelling = function(r) {
  return (o, u) => (console.warn(`${u} is likely a misspelling of ${r}`), !0);
};
function ow(l, r, o) {
  if (typeof l != "object")
    throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(l);
  let c = u.length;
  for (; c-- > 0; ) {
    const f = u[c], h = r[f];
    if (h) {
      const p = l[f], b = p === void 0 || h(p, f, l);
      if (b !== !0)
        throw new me("option " + f + " must be " + b, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new me("Unknown option " + f, me.ERR_BAD_OPTION);
  }
}
const Es = {
  assertOptions: ow,
  validators: Ms
}, bn = Es.validators;
let Ya = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new a0(),
      response: new a0()
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
    typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = Va(this.defaults, o);
    const { transitional: u, paramsSerializer: c, headers: f } = o;
    u !== void 0 && Es.assertOptions(u, {
      silentJSONParsing: bn.transitional(bn.boolean),
      forcedJSONParsing: bn.transitional(bn.boolean),
      clarifyTimeoutError: bn.transitional(bn.boolean)
    }, !1), c != null && (D.isFunction(c) ? o.paramsSerializer = {
      serialize: c
    } : Es.assertOptions(c, {
      encode: bn.function,
      serialize: bn.function
    }, !0)), o.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? o.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : o.allowAbsoluteUrls = !0), Es.assertOptions(o, {
      baseUrl: bn.spelling("baseURL"),
      withXsrfToken: bn.spelling("withXSRFToken")
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
    let v, S = 0, A;
    if (!b) {
      const T = [h0.bind(this), void 0];
      for (T.unshift(...p), T.push(...y), A = T.length, v = Promise.resolve(o); S < A; )
        v = v.then(T[S++], T[S++]);
      return v;
    }
    A = p.length;
    let q = o;
    for (; S < A; ) {
      const T = p[S++], L = p[S++];
      try {
        q = T(q);
      } catch (O) {
        L.call(this, O);
        break;
      }
    }
    try {
      v = h0.call(this, q);
    } catch (T) {
      return Promise.reject(T);
    }
    for (S = 0, A = y.length; S < A; )
      v = v.then(y[S++], y[S++]);
    return v;
  }
  getUri(r) {
    r = Va(this.defaults, r);
    const o = fg(r.baseURL, r.url, r.allowAbsoluteUrls);
    return sg(o, r.params, r.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(r) {
  Ya.prototype[r] = function(o, u) {
    return this.request(Va(u || {}, {
      method: r,
      url: o,
      data: (u || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(r) {
  function o(u) {
    return function(f, h, p) {
      return this.request(Va(p || {}, {
        method: r,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  Ya.prototype[r] = o(), Ya.prototype[r + "Form"] = o(!0);
});
let uw = class pg {
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
      u.reason || (u.reason = new kl(f, h, p), o(u.reason));
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
      token: new pg(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function cw(l) {
  return function(o) {
    return l.apply(null, o);
  };
}
function dw(l) {
  return D.isObject(l) && l.isAxiosError === !0;
}
const Ec = {
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
Object.entries(Ec).forEach(([l, r]) => {
  Ec[r] = l;
});
function bg(l) {
  const r = new Ya(l), o = $0(Ya.prototype.request, r);
  return D.extend(o, Ya.prototype, r, { allOwnKeys: !0 }), D.extend(o, r, null, { allOwnKeys: !0 }), o.create = function(c) {
    return bg(Va(l, c));
  }, o;
}
const Be = bg($i);
Be.Axios = Ya;
Be.CanceledError = kl;
Be.CancelToken = uw;
Be.isCancel = cg;
Be.VERSION = yg;
Be.toFormData = Us;
Be.AxiosError = me;
Be.Cancel = Be.CanceledError;
Be.all = function(r) {
  return Promise.all(r);
};
Be.spread = cw;
Be.isAxiosError = dw;
Be.mergeConfig = Va;
Be.AxiosHeaders = Dt;
Be.formToJSON = (l) => ug(D.isHTMLForm(l) ? new FormData(l) : l);
Be.getAdapter = gg.getAdapter;
Be.HttpStatusCode = Ec;
Be.default = Be;
const {
  Axios: Xw,
  AxiosError: Qw,
  CanceledError: Zw,
  isCancel: Fw,
  CancelToken: $w,
  VERSION: Jw,
  all: Iw,
  Cancel: Ww,
  isAxiosError: Pw,
  spread: eE,
  toFormData: tE,
  AxiosHeaders: nE,
  HttpStatusCode: aE,
  formToJSON: lE,
  getAdapter: iE,
  mergeConfig: rE
} = Be, fw = [
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
], vg = "WEBCOMPONENT";
function mw(l) {
  l ? localStorage.setItem(nt.IAM_AUTHORITY_OVERRIDE, l) : localStorage.removeItem(nt.IAM_AUTHORITY_OVERRIDE);
}
function hw() {
  return localStorage.getItem(nt.IAM_AUTHORITY_OVERRIDE);
}
function y0() {
  localStorage.removeItem(nt.IAM_AUTHORITY_OVERRIDE);
}
function gw() {
  const l = hw();
  if (l && Object.values(tn).includes(l))
    return l;
  const r = window.location.hostname;
  return r === qn.HOSTNAME || r === qn.IP || qn.IP_PATTERN.test(r) || r.startsWith(`${We.DEV}.`) || r.startsWith(`${We.DEV}-`) ? tn.DEV : r.startsWith(`${We.TEST}.`) || r.startsWith(`${We.TEST}-`) ? tn.TEST : r.startsWith(`${We.STAGE}.`) || r.startsWith(`${We.STAGE}-`) ? tn.STAGE : tn.PROD;
}
function yw(l) {
  if (vg === Oc.TEST)
    return "";
  const r = gw();
  return l.startsWith("/global") ? Db[r] : jb[r];
}
const Ea = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return vg === Oc.TEST ? r : `${yw(r)}${r}`;
}, pw = async (l) => {
  try {
    return fw?.find(
      (o) => o?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function Kn() {
  const l = localStorage.getItem(nt.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), o = await pw(r?.domain);
  return {
    [bs.X_BRAND_ID]: o?.subsidiaryName,
    [bs.X_SUBSIDIARY_ID]: o?.subsidiaryId?.toString(),
    [bs.X_BRAND_DOMAIN]: r?.domain
  };
}
const bw = async (l, r) => {
  const o = Ea(wa.AUTH), u = { username: l, password: r };
  try {
    return (await Be.post(o, u, {
      headers: await Kn()
    })).data;
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === zl.UNAUTHORIZED ? new Error(Oe.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(Oe.AUTH_FAILED);
  }
}, vw = async (l) => {
  const r = Ea(wa.REGISTER);
  try {
    return (await Be.post(r, l, {
      headers: await Kn()
    })).data;
  } catch (o) {
    throw console.error("Error during registration:", o), o.response?.data?.details?.errorMessage ? new Error(o.response.data.details.errorMessage) : o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.details ? new Error(o.response.data.details) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === zl.INTERNAL_SERVER_ERROR ? new Error(Oe.REGISTRATION_FAILED_RETRY) : o.message ? new Error(o.message) : new Error(Oe.REGISTRATION_FAILED);
  }
}, Ls = async (l) => {
  const r = Ea(wa.CHECK_EMAIL);
  try {
    return (await Be.post(
      r,
      { email: l },
      {
        headers: await Kn()
      }
    )).data;
  } catch (o) {
    throw console.error("Error checking email:", o), o.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : o.response?.status === 403 ? new Error("Access denied to email verification service") : o.response?.status === 500 ? new Error("Email verification service encountered an error") : o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.message ? new Error(`Email verification failed: ${o.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, p0 = async (l) => {
  const r = Ea(wa.FORGOT_PASSWORD), o = { email: l };
  try {
    return (await Be.post(r, o, {
      headers: await Kn()
    })).data;
  } catch (u) {
    throw console.error("Error sending password reset:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === zl.NOT_FOUND ? new Error("We couldn't find an account with that email.") : u.message ? new Error(u.message) : new Error(Oe.RESET_LINK_FAILED);
  }
}, b0 = async (l) => {
  const r = Ea(wa.FORGOT_USERNAME), o = { email: l };
  try {
    return (await Be.post(r, o, {
      headers: await Kn()
    })).data;
  } catch (u) {
    throw console.error("Error sending username verification:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === zl.NOT_FOUND ? new Error("We couldn't find an account with that email.") : u.message ? new Error(u.message) : new Error(Oe.USERNAME_RECOVERY_FAILED);
  }
}, ww = async (l) => {
  const r = Ea(wa.GOOGLE_AUTH);
  try {
    return (await Be.post(
      r,
      { code: l },
      {
        headers: await Kn()
      }
    )).data;
  } catch (o) {
    throw console.error("Error during Google auth:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === zl.UNAUTHORIZED ? new Error("Google authentication failed. Please try again.") : o.message ? new Error(o.message) : new Error(Oe.AUTH_FAILED);
  }
}, Ew = async (l) => {
  const r = Ea(wa.REFRESH_TOKEN), o = { refresh_token: l };
  try {
    return (await Be.post(r, o, {
      headers: await Kn()
    })).data;
  } catch (u) {
    throw console.error("Error during token refresh:", u), u;
  }
}, Sw = async (l) => {
  const r = Ea(wa.LOGOUT), o = { refresh_token: l };
  try {
    return (await Be.post(r, o, {
      headers: await Kn()
    })).data;
  } catch (u) {
    throw console.error("Error during logout:", u), u.response?.data?.error ? new Error(u.response.data.error) : u.response?.data?.message ? new Error(u.response.data.message) : u.response?.status === zl.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : u.message ? new Error(u.message) : new Error("Logout failed");
  }
}, xw = () => {
  try {
    const l = Et(Ue.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = Hl(l), o = Math.floor(Date.now() / 1e3);
    return !r.exp || o >= r.exp;
  } catch (l) {
    return console.error(`${Ge.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, Ns = () => Et(Ue.REFRESH_TOKEN, !1), Lc = (l) => {
  try {
    const r = Hl(l), o = Math.floor(Date.now() / 1e3);
    return !r.exp || o >= r.exp;
  } catch {
    return !0;
  }
}, Sc = (l) => !Lc(l);
let Ss = null;
const Ol = () => {
  Ss && (clearInterval(Ss), Ss = null);
}, zc = async (l) => {
  try {
    const r = l || Ns();
    if (!r)
      return !1;
    const o = await Ew(r);
    if (!o?.tokens?.access_token)
      return !1;
    const u = o.tokens, c = xs(u.access_token);
    if (!c)
      return !1;
    const f = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (f <= 0)
      return !1;
    if (un(Ue.ACCESS_TOKEN, u.access_token, f, !0), localStorage.setItem(
      nt.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    ), u.refresh_token) {
      un(Ue.REFRESH_TOKEN, u.refresh_token, 2592e3, !0);
      const p = Et(Ue.REFRESH_TOKEN_TIME, !1);
      if (p && !(Date.now() - parseInt(p) >= Yn.ONE_DAY_MS)) {
        const v = Date.now().toString();
        un(
          Ue.REFRESH_TOKEN_TIME,
          v,
          Math.ceil(Yn.ONE_DAY_MS / 1e3),
          !0
        ), localStorage.setItem(nt.REFRESH_TOKEN_TIME, v);
      }
    }
    return !0;
  } catch (r) {
    return console.error(`${Ge.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, Rw = async () => {
  const l = Ns();
  if (!Et(Ue.ACCESS_TOKEN, !1) || !l || !Sc(l))
    return Ol(), !0;
  Ol();
  const o = 180 * 1e3;
  return Ss = setInterval(async () => {
    const u = Ns();
    if (!Et(Ue.ACCESS_TOKEN, !1)) {
      Ol();
      return;
    }
    if (!u || !Sc(u)) {
      Ol();
      return;
    }
    const f = Et(Ue.ACCESS_TOKEN, !1);
    (!f || Lc(f)) && await zc(u);
  }, o), () => Ol();
};
function Tw(l, r) {
  const o = {
    length: l.length >= jl.MIN_LENGTH,
    upper: Yt.UPPERCASE.test(l),
    lower: Yt.LOWERCASE.test(l),
    number: Yt.NUMBER.test(l),
    noSpaces: !Yt.NO_SPACES.test(l),
    noTriple: !Yt.NO_TRIPLE.test(l),
    special: Yt.SPECIAL_CHAR.test(l) && Yt.ALLOWED_CHARS.test(l),
    noNameParts: !0
  }, u = l.toLowerCase();
  if (r && r.displayName) {
    const c = r.displayName.split(/\s+/).filter((f) => f.length >= jl.MIN_PART_LENGTH_FOR_NAME_CHECK);
    for (const f of c)
      if (f && u.includes(f.toLowerCase())) {
        o.noNameParts = !1;
        break;
      }
  }
  return o;
}
const v0 = (l) => {
  try {
    const r = Et(Ue.REFRESH_TOKEN_TIME, !1);
    if (!r)
      return console.log(
        `${Ge.CHECK_TOKEN_AND_REDIRECT} No session timestamp - requires manual login`
      ), !1;
    const o = Date.now() - parseInt(r), u = Yn.ONE_DAY_MS;
    if (o >= u)
      return console.log(
        `${Ge.CHECK_TOKEN_AND_REDIRECT} Session expired (older than 1 day) - requires manual login`
      ), !1;
    console.log(`${Ge.CHECK_TOKEN_AND_REDIRECT} Valid session found - validating tokens`);
    const c = Et(Ue.ACCESS_TOKEN, !1);
    let f = null;
    if (c && (f = c), !f)
      return !1;
    const h = localStorage.getItem(nt.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const p = Hl(f), b = Math.floor(Date.now() / 1e3);
      return !(!p.exp || b >= p.exp);
    } catch (p) {
      return console.error(`${Ge.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, p), !1;
    }
  } catch (r) {
    return console.error(`${Ge.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, Nw = async (l) => {
  if (v0(l))
    return !0;
  try {
    const o = Et(Ue.REFRESH_TOKEN_TIME, !1);
    if (!o || Date.now() - parseInt(o) >= Yn.ONE_DAY_MS)
      return !1;
    const c = Ns();
    if (!c || !Sc(c))
      return !1;
    const f = Et(Ue.ACCESS_TOKEN, !1);
    return !(!f || Lc(f)) || !await zc(c) ? !1 : v0(l);
  } catch (o) {
    return console.error(
      `${Ge.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      o
    ), !1;
  }
}, Aw = () => {
  try {
    const l = Et(Ue.REFRESH_TOKEN_TIME, !1);
    return l ? Date.now() - parseInt(l) < Yn.ONE_DAY_MS : !1;
  } catch (l) {
    return console.error(`${Ge.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, Cw = () => {
  cc(Ue.ACCESS_TOKEN), cc(Ue.REFRESH_TOKEN), cc(Ue.REFRESH_TOKEN_TIME), [
    nt.REFRESH_TOKEN,
    nt.REFRESH_TOKEN_TIME,
    nt.ACCESS_TOKEN,
    nt.ACCESS_TOKEN_EXPIRES,
    "user_info"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Ge.AUTH} All authentication tokens and state cleared`);
}, wg = async (l, r, o = !1) => {
  const u = await bw(l, r), { tokens: c } = u;
  if (c.access_token) {
    const h = (Hl(c.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    un(Ue.ACCESS_TOKEN, c.access_token, h, !0), localStorage.setItem(
      nt.ACCESS_TOKEN_EXPIRES,
      (Date.now() + h * 1e3).toString()
    );
    const p = 720 * 60 * 60;
    if (un(Ue.REFRESH_TOKEN, c.refresh_token, p, !0), c.refresh_token) {
      const b = Date.now().toString();
      o ? (un(
        Ue.REFRESH_TOKEN_TIME,
        b,
        Yn.THIRTY_DAYS_SECONDS,
        !0
      ), console.log(`${Ge.AUTH} Remember Me enabled - auto-login will work for 30 days`)) : (un(
        Ue.REFRESH_TOKEN_TIME,
        b,
        Math.ceil(Yn.ONE_DAY_MS / 1e3),
        // Convert to seconds
        !0
      ), console.log(`${Ge.AUTH} Remember Me disabled - auto-login will work for 1 day`)), localStorage.setItem(nt.REFRESH_TOKEN_TIME, b);
    }
  }
  return c;
}, _w = async (l, r = !0) => {
  const o = await ww(l), { tokens: u } = o;
  if (u.access_token) {
    const f = (Hl(u.access_token).exp || 0) - Math.floor(Date.now() / 1e3);
    un(Ue.ACCESS_TOKEN, u.access_token, f, !0), localStorage.setItem(
      nt.ACCESS_TOKEN_EXPIRES,
      (Date.now() + f * 1e3).toString()
    );
    const h = 720 * 60 * 60;
    if (un(Ue.REFRESH_TOKEN, u.refresh_token, h, !0), u.refresh_token) {
      const p = Date.now().toString();
      r ? (un(
        Ue.REFRESH_TOKEN_TIME,
        p,
        Yn.THIRTY_DAYS_SECONDS,
        !0
      ), console.log(`${Ge.AUTH} Google login - Remember Me enabled for 30 days`)) : (un(
        Ue.REFRESH_TOKEN_TIME,
        p,
        Math.ceil(Yn.ONE_DAY_MS / 1e3),
        // Convert to seconds
        !0
      ), console.log(`${Ge.AUTH} Google login - auto-login will work for 1 day`)), localStorage.setItem(nt.REFRESH_TOKEN_TIME, p);
    }
  }
  return u;
}, xs = (l) => {
  try {
    const r = Hl(l);
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
      `${Ge.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, Ow = ({ onResetPassword: l, onContinue: r }) => /* @__PURE__ */ m.jsx(
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
                    type: Ye.BUTTON,
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
                    type: Ye.BUTTON,
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
function w0(l) {
  Kn().then((r) => {
    r[bs.X_BRAND_ID] || l(!0);
  }).catch((r) => {
    console.error(Ge.BRAND_CONFIG, "Failed to load brand configuration:", r), l(!0);
  });
}
function zs() {
  const [l, r] = w.useState(!1);
  return w.useEffect(() => {
    if (sessionStorage.getItem(nt.THEME_LOADED)) {
      w0(r);
      return;
    }
    const o = () => {
      w0(r);
    };
    return window.addEventListener("theme-loaded", o), () => window.removeEventListener("theme-loaded", o);
  }, []), l;
}
const ql = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", xc = (l) => {
  if (!l || typeof l != "object")
    return !1;
  const r = l;
  return typeof r.getModifierState != "function" ? !1 : r.getModifierState("CapsLock");
}, jw = ({
  onSuccess: l,
  onError: r,
  handleClose: o,
  onSignIn: u,
  title: c = "Create your account",
  subtitle: f = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [p, b] = w.useState(h), [y, v] = w.useState(""), [S, A] = w.useState(""), [q, T] = w.useState(""), [L, O] = w.useState(!1), [V, K] = w.useState(""), [Q, W] = w.useState(""), [F, se] = w.useState(!1), [te, $] = w.useState(!1), [oe, ge] = w.useState(!1), [Xe, pe] = w.useState(!1), [Me, qe] = w.useState(!1), [Qe, M] = w.useState(!1), [z, Y] = w.useState(!1), [ce, Te] = w.useState(""), [xe, x] = w.useState(!1), [B, X] = w.useState(""), [Z, de] = w.useState(le.INFO), ie = w.useRef(null), ye = w.useRef(null), Ce = zs(), P = {
    length: q.length >= jl.MIN_LENGTH && q.length <= jl.MAX_LENGTH,
    hasNumber: Yt.NUMBER.test(q),
    hasUppercase: Yt.UPPERCASE.test(q),
    hasLowercase: Yt.LOWERCASE.test(q),
    hasSpecialChar: Ih.test(q),
    onlyAllowedChars: Wh.test(q) || q === "",
    differentFromUsername: p ? q !== p && q !== p.split("@")[0] : !0
  }, Vt = ((re) => {
    if (!re) return { strength: "", color: "", width: hs.EMPTY };
    if (P.length && P.hasNumber && P.hasUppercase && P.hasLowercase && P.hasSpecialChar && P.onlyAllowedChars && P.differentFromUsername)
      return {
        strength: sc.STRONG,
        color: oc.STRONG,
        width: hs.STRONG
      };
    let at = 0;
    return P.length && at++, P.hasNumber && at++, P.hasUppercase && at++, P.hasLowercase && at++, P.hasSpecialChar && at++, P.onlyAllowedChars && at++, P.differentFromUsername && at++, at <= 2 ? {
      strength: sc.WEAK,
      color: oc.WEAK,
      width: hs.WEAK
    } : {
      strength: sc.GOOD,
      color: oc.GOOD,
      width: hs.GOOD
    };
  })(q), wn = (re) => re ? re.length < jl.MIN_LENGTH || re.length > jl.MAX_LENGTH ? { isValid: !1, error: Oe.PASSWORD_LENGTH } : Yt.UPPERCASE.test(re) ? Yt.LOWERCASE.test(re) ? Yt.NUMBER.test(re) ? Ih.test(re) ? Wh.test(re) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: Oe.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: Oe.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: Oe.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: Oe.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: Oe.PASSWORD_UPPERCASE
  } : { isValid: !1, error: Oe.PASSWORD_REQUIRED };
  w.useEffect(() => {
    if (!Ce) {
      if (ye.current && clearTimeout(ye.current), !p) {
        pe(!1), qe(!1), Y(!1), Te("");
        return;
      }
      if (!Dl.test(p)) {
        pe(!1), qe(!1);
        return;
      }
      return ye.current = setTimeout(async () => {
        M(!0);
        try {
          (await Ls(p)).exists ? (qe(!0), pe(!0)) : (qe(!1), pe(!1));
        } catch (re) {
          console.error(`${Ge.CREATE_ACCOUNT} Email check failed:`, re);
          const ut = re instanceof Error ? re.message : "Unable to verify email. You can still proceed with registration.";
          Y(!0), Te(ut), pe(!0), qe(!1);
        } finally {
          M(!1);
        }
      }, vn.EMAIL_CHECK_DEBOUNCE), () => {
        ye.current && clearTimeout(ye.current);
      };
    }
  }, [p, Ce]);
  const St = p && Dl.test(p);
  w.useEffect(() => {
    const re = (ut) => {
      ut.key === "Escape" && o();
    };
    return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
  }, [o]);
  const Kt = (re) => {
    re.target === ie.current && o();
  }, mn = async (re) => {
    if (re.preventDefault(), Ce) return;
    if (ge(!0), !p || !y || !S) {
      r("Please fill in all required fields");
      return;
    }
    const ut = wn(q);
    if (!ut.isValid) {
      W(ut.error), r(ut.error), O(!1);
      return;
    }
    if (!Dl.test(p)) {
      K(Oe.EMAIL_INVALID), r(Oe.EMAIL_INVALID);
      return;
    }
    O(!0), K(""), X("");
    try {
      const at = p.split("@")[0], Qn = await vw({
        username: at,
        email: p,
        firstName: y,
        lastName: S,
        password: q
      });
      console.log(
        `${Ge.CREATE_ACCOUNT} Registration successful:`,
        Qn.message
      );
      try {
        const Zn = await wg(p, q, xe);
        l(Zn);
      } catch (Zn) {
        console.error(
          `${Ge.CREATE_ACCOUNT} Auto-login failed after registration:`,
          Zn
        );
        const ct = Zn instanceof Error ? Zn.message : "Auto-login failed";
        r(ct);
      }
    } catch (at) {
      console.error(`${Ge.CREATE_ACCOUNT} Registration failed:`, at);
      const Qn = at instanceof Error ? at.message : Oe.REGISTRATION_FAILED;
      X(Qn), de(le.ERROR), r(Qn);
    } finally {
      O(!1);
    }
  }, Xn = (re) => {
    if (re.key === "CapsLock" && re.type === "keydown") {
      $((ut) => !ut);
      return;
    }
    re.key !== "CapsLock" && $(xc(re));
  }, Xa = (re) => {
    $(xc(re));
  }, Sa = () => {
    $(!1);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    B && /* @__PURE__ */ m.jsx(
      pc,
      {
        type: Z,
        message: B,
        duration: vn.TOAST_DEFAULT_DURATION,
        onClose: () => X("")
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
                  type: Ye.BUTTON,
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
                  onSubmit: mn,
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
                              b(re.target.value), K("");
                            },
                            placeholder: "Enter email address",
                            disabled: L,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: oe && !p ? "Required" : V || "",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              Qe && /* @__PURE__ */ m.jsx(_s, {}),
                              !Qe && !Me && !z && p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: ql,
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
                    Ce && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        title: Oe.BRAND_CONFIG_TITLE,
                        message: Oe.BRAND_CONFIG_MESSAGE,
                        className: "identity-widget-create-account-brand-error-banner mb-4!"
                      }
                    ),
                    !Ce && Xe && Me && !z && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          pe(!1), u(p);
                        },
                        onClose: () => pe(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    !Ce && Xe && z && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        message: ce,
                        onClose: () => {
                          pe(!1), Y(!1), Te("");
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
                              disabled: L,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: oe && !y ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ m.jsx(
                            nn,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: S,
                              onChange: (re) => A(re.target.value),
                              placeholder: "Last Name",
                              disabled: L,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: oe && !S ? "Required" : ""
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
                                    T(re.target.value), W("");
                                  },
                                  onKeyDown: Xn,
                                  onKeyUp: Xn,
                                  onFocus: Xa,
                                  onBlur: Sa,
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
                                      onClick: () => se(!F),
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
                              te && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Yi.CAPS_LOCK_ON
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
                                          width: Vt.width,
                                          backgroundColor: Vt.color
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
                                    style: { color: Vt.color },
                                    children: Vt.strength
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
                                  checked: xe,
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
                        type: Ye.SUBMIT,
                        disabled: L || Me || !St || Ce,
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
                      Fe,
                      {
                        type: Ye.BUTTON,
                        variant: tt.OUTLINE,
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
    B && /* @__PURE__ */ m.jsx(pc, { message: B, type: Z, onClose: () => X("") })
  ] });
}, Dw = ({
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
                type: Ye.BUTTON,
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
                    src: ql,
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
                type: Ye.BUTTON,
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
                type: Ye.BUTTON,
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
}, Uw = ({
  email: l,
  onBack: r,
  handleClose: o,
  onCreateAccount: u
}) => {
  const [c, f] = w.useState(l || ""), [h, p] = w.useState(!1), [b, y] = w.useState(!1), [v, S] = w.useState(""), [A, q] = w.useState(!1), [T, L] = w.useState(!1), [O, V] = w.useState(!1), [K, Q] = w.useState(!1), [W, F] = w.useState(""), [se, te] = w.useState(!1), [$, oe] = w.useState(0), ge = zs(), Xe = w.useRef(null), pe = w.useRef(null);
  w.useEffect(() => {
    if (!($ <= 0))
      return pe.current = setTimeout(() => {
        oe((M) => M - 1);
      }, 1e3), () => {
        pe.current && clearTimeout(pe.current);
      };
  }, [$]), w.useEffect(() => {
    const M = (z) => {
      z.key === "Escape" && o();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [o]), w.useEffect(() => {
    if (ge) return;
    const M = Dl.test(c);
    if (V(M), !M || !c) {
      L(!1), Q(!1), F(""), te(!1);
      return;
    }
    const z = setTimeout(async () => {
      q(!0);
      try {
        const Y = await Ls(c);
        console.log("[ResetPassword] Email check response:", Y), Y.exists ? (L(!0), te(!1)) : (L(!1), te(!0)), console.log("[ResetPassword] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ResetPassword] Error checking email:", Y);
        const ce = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), F(ce), te(!0), L(!1);
      } finally {
        q(!1);
      }
    }, vn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(z);
  }, [c, ge]);
  const Me = (M) => {
    M.target === Xe.current && o();
  }, qe = async (M) => {
    if (M.preventDefault(), !ge) {
      if (!c) {
        S(Oe.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await p0(c), console.log("[ResetPassword] Reset link sent to:", c), oe(vn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (z) {
        console.error("[ResetPassword] Failed to send reset link:", z);
        const Y = z instanceof Error ? z.message : Oe.RESET_LINK_FAILED;
        S(Y);
      } finally {
        p(!1);
      }
    }
  }, Qe = async () => {
    if (!($ > 0)) {
      p(!0), S("");
      try {
        await p0(c), console.log("[ResetPassword] Reset link resent to:", c), oe(vn.RESEND_COOLDOWN_SECONDS);
      } catch (M) {
        console.error("[ResetPassword] Failed to resend reset link:", M), y(!1);
        const z = M instanceof Error ? M.message : Oe.RESET_LINK_FAILED;
        S(z);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    Dw,
    {
      email: c,
      loading: h,
      cooldown: $,
      onResendLink: Qe,
      onBack: r,
      onClose: o
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Xe,
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
              Fe,
              {
                onClick: o,
                variant: tt.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ye.BUTTON,
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
                onSubmit: qe,
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
                          onChange: (M) => {
                            f(M.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
                          className: "identity-widget-reset-password-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                            A && /* @__PURE__ */ m.jsx(_s, {}),
                            !A && T && O && !K && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: ql,
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
                  ge && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      title: Oe.BRAND_CONFIG_TITLE,
                      message: Oe.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-reset-password-brand-error-banner mb-4!"
                    }
                  ),
                  !ge && se && !T && O && !K && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.INFO,
                      message: Yi.EMAIL_NOT_FOUND,
                      actionText: u ? "Let's create one to continue?" : void 0,
                      onActionClick: u ? () => {
                        te(!1), u();
                      } : void 0,
                      onClose: () => te(!1),
                      className: "identity-widget-reset-password-email-not-found-banner mb-4!"
                    }
                  ),
                  !ge && se && K && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      message: W,
                      onClose: () => {
                        te(!1), Q(!1), F("");
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
                  $ > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-reset-password-cooldown-message",
                      className: "identity-widget-reset-password-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "A password reset link has already been sent. Please wait ",
                        $,
                        " seconds before requesting another."
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    Fe,
                    {
                      type: Ye.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
                      disabled: h || !c || !O || !T || ge || $ > 0,
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
}, Mw = ({
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
                type: Ye.BUTTON,
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
                    src: ql,
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
                type: Ye.BUTTON,
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
                type: Ye.BUTTON,
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
}, Lw = ({
  email: l,
  onBack: r,
  handleClose: o,
  onCreateAccount: u
}) => {
  const [c, f] = w.useState(l || ""), [h, p] = w.useState(!1), [b, y] = w.useState(!1), [v, S] = w.useState(""), [A, q] = w.useState(!1), [T, L] = w.useState(!1), [O, V] = w.useState(!1), [K, Q] = w.useState(!1), [W, F] = w.useState(""), [se, te] = w.useState(!1), [$, oe] = w.useState(0), ge = zs(), Xe = w.useRef(null), pe = w.useRef(null);
  w.useEffect(() => {
    if (!($ <= 0))
      return pe.current = setTimeout(() => {
        oe((M) => M - 1);
      }, 1e3), () => {
        pe.current && clearTimeout(pe.current);
      };
  }, [$]), w.useEffect(() => {
    const M = (z) => {
      z.key === "Escape" && o();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [o]), w.useEffect(() => {
    if (ge) return;
    const M = Dl.test(c);
    if (V(M), !M || !c) {
      L(!1), Q(!1), F(""), te(!1);
      return;
    }
    const z = setTimeout(async () => {
      q(!0);
      try {
        const Y = await Ls(c);
        console.log("[ForgotUsername] Email check response:", Y), Y.exists ? (L(!0), te(!1)) : (L(!1), te(!0)), console.log("[ForgotUsername] Email exists:", Y.exists);
      } catch (Y) {
        console.error("[ForgotUsername] Error checking email:", Y);
        const ce = Y instanceof Error ? Y.message : "Unable to verify email. Please try again.";
        Q(!0), F(ce), te(!0), L(!1);
      } finally {
        q(!1);
      }
    }, vn.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(z);
  }, [c, ge]);
  const Me = (M) => {
    M.target === Xe.current && o();
  }, qe = async (M) => {
    if (M.preventDefault(), !ge) {
      if (!c) {
        S(Oe.EMAIL_REQUIRED);
        return;
      }
      p(!0), S("");
      try {
        await b0(c), console.log("[ForgotUsername] Verification link sent to:", c), oe(vn.RESEND_COOLDOWN_SECONDS), y(!0);
      } catch (z) {
        console.error("[ForgotUsername] Failed to send verification link:", z);
        const Y = z instanceof Error ? z.message : Oe.USERNAME_RECOVERY_FAILED;
        S(Y);
      } finally {
        p(!1);
      }
    }
  }, Qe = async () => {
    if (!($ > 0)) {
      p(!0), S("");
      try {
        await b0(c), console.log("[ForgotUsername] Verification link resent to:", c), oe(vn.RESEND_COOLDOWN_SECONDS);
      } catch (M) {
        console.error("[ForgotUsername] Failed to resend verification link:", M), y(!1);
        const z = M instanceof Error ? M.message : Oe.USERNAME_RECOVERY_FAILED;
        S(z);
      } finally {
        p(!1);
      }
    }
  };
  return b ? /* @__PURE__ */ m.jsx(
    Mw,
    {
      email: c,
      loading: h,
      cooldown: $,
      onResendLink: Qe,
      onBack: r,
      onClose: o
    }
  ) : /* @__PURE__ */ m.jsx(
    "div",
    {
      part: "identity-widget-forgot-username-overlay",
      className: "identity-widget-forgot-username-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Xe,
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
              Fe,
              {
                onClick: o,
                variant: tt.LINK,
                part: "identity-widget-forgot-username-close-button",
                className: "identity-widget-forgot-username-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: Ye.BUTTON,
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
                onSubmit: qe,
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
                          onChange: (M) => {
                            f(M.target.value), S("");
                          },
                          placeholder: "Enter email",
                          disabled: h,
                          className: "identity-widget-forgot-username-email-input w-full!",
                          autoComplete: "email",
                          endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                            A && /* @__PURE__ */ m.jsx(_s, {}),
                            !A && T && O && !K && /* @__PURE__ */ m.jsx(
                              "img",
                              {
                                part: "identity-widget-forgot-username-email-verified-icon",
                                className: "identity-widget-forgot-username-email-verified-icon",
                                src: ql,
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
                  ge && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      title: Oe.BRAND_CONFIG_TITLE,
                      message: Oe.BRAND_CONFIG_MESSAGE,
                      className: "identity-widget-forgot-username-brand-error-banner mb-4!"
                    }
                  ),
                  !ge && se && !T && O && !K && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.INFO,
                      message: Yi.EMAIL_NOT_FOUND,
                      actionText: u ? "Let's create one to continue?" : void 0,
                      onActionClick: u ? () => {
                        te(!1), u();
                      } : void 0,
                      onClose: () => te(!1),
                      className: "identity-widget-forgot-username-email-not-found-banner mb-4!"
                    }
                  ),
                  !ge && se && K && /* @__PURE__ */ m.jsx(
                    Ot,
                    {
                      type: le.ERROR,
                      message: W,
                      onClose: () => {
                        te(!1), Q(!1), F("");
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
                  $ > 0 && /* @__PURE__ */ m.jsxs(
                    "p",
                    {
                      part: "identity-widget-forgot-username-cooldown-message",
                      className: "identity-widget-forgot-username-cooldown-message text-sm! text-amber-600! text-center! mb-2!",
                      role: "status",
                      "aria-live": "polite",
                      children: [
                        "A verification link has already been sent. Please wait ",
                        $,
                        " seconds before requesting another."
                      ]
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    Fe,
                    {
                      type: Ye.SUBMIT,
                      part: "identity-widget-submit-button identity-widget-forgot-username-submit-button",
                      disabled: h || !c || !O || !T || ge || $ > 0,
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
}, E0 = ({ children: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "px-1! rounded-sm! font-medium!",
    style: { backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 28%, white)" },
    children: l
  }
), hc = ({ label: l }) => /* @__PURE__ */ m.jsx(
  "span",
  {
    className: "inline-flex! items-center! rounded-full! px-3! py-1! text-xs! font-semibold! uppercase! tracking-wide!",
    style: {
      color: "var(--button-primary-bg)",
      backgroundColor: "color-mix(in srgb, var(--button-primary-bg) 16%, white)"
    },
    children: l
  }
), zw = ({ onBack: l, handleClose: r }) => {
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
                type: Ye.BUTTON,
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
                  /* @__PURE__ */ m.jsx(E0, { children: '"Forgot Password?"' }),
                  " link on the login page to start the password reset process."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(hc, { label: "Step 1" }) }),
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
                    /* @__PURE__ */ m.jsx(Fe, { type: Ye.BUTTON, disabled: !0, className: "w-full!", children: "Sign In" })
                  ] })
                ] }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-700!", children: "Next, enter your account email address. It should look something like this:" }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(hc, { label: "Step 2" }) }),
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
                  /* @__PURE__ */ m.jsx(E0, { children: '"Send reset link"' }),
                  "."
                ] }),
                /* @__PURE__ */ m.jsxs("div", { className: "relative! rounded-md! border! border-solid! border-gray-200! bg-gray-50! p-6!", children: [
                  /* @__PURE__ */ m.jsx("div", { className: "mb-3!", children: /* @__PURE__ */ m.jsx(hc, { label: "Step 3" }) }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-xl! font-bold! text-center! text-gray-800! mb-2!", children: "Reset your password" }),
                  /* @__PURE__ */ m.jsx("p", { className: "text-sm! text-gray-600! text-center! mb-4!", children: "Enter your email and we'll send you a link to reset your password." }),
                  /* @__PURE__ */ m.jsx(nn, { label: "Email Address", value: h, disabled: !0 }),
                  /* @__PURE__ */ m.jsx(
                    "span",
                    {
                      className: "block!",
                      style: { animation: "helpCenterClick 1.2s ease-in-out infinite" },
                      children: /* @__PURE__ */ m.jsx(Fe, { type: Ye.BUTTON, disabled: !0, className: "w-full! mt-4!", children: "Send reset link" })
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
                type: Ye.BUTTON,
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
}, Hw = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Bw = ({
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
  const [v, S] = w.useState(h), [A, q] = w.useState(""), [T, L] = w.useState(!1), [O, V] = w.useState(!1), [K, Q] = w.useState(!1), [W, F] = w.useState(""), [se, te] = w.useState(!1), [$, oe] = w.useState(!1), [ge, Xe] = w.useState(!1), [pe, Me] = w.useState(!1), [qe, Qe] = w.useState(!1), [M, z] = w.useState(!1), [Y, ce] = w.useState(!1), [Te, xe] = w.useState(!1), [x, B] = w.useState(!1), [X, Z] = w.useState(""), [de, ie] = w.useState(""), [ye, Ce] = w.useState(le.INFO), [P, fn] = w.useState(!1), [Vt, wn] = w.useState(null), St = zs(), [Kt, mn] = w.useState(!1), [Xn, Xa] = w.useState(!1), Sa = w.useRef(null), re = w.useRef(null), ut = w.useRef(!1);
  w.useEffect(() => {
    if (!b || !y || ut.current) return;
    if (document.querySelector(
      'script[src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"]'
    )) {
      ut.current = !0;
      return;
    }
    const we = document.createElement("script");
    we.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", we.async = !0, we.onload = () => {
      ut.current = !0;
    }, document.head.appendChild(we);
  }, [b, y]);
  const at = async () => {
    try {
      Xa(!0);
      const ne = window.AppleID;
      if (!ne) {
        const we = "Apple Sign In SDK not loaded. Please try again.";
        ie(we), Ce(le.ERROR), r(we);
        return;
      }
      ne.auth.init({
        clientId: y,
        scope: "name email",
        redirectURI: window.location.origin,
        usePopup: !0
      }), await ne.auth.signIn(), ie(
        "Apple sign-in completed. Connect this credential to your backend login flow."
      ), Ce(le.INFO), F("");
    } catch (ne) {
      if (ne?.error === "popup_closed_by_user")
        return;
      const we = ne?.error || (ne instanceof Error ? ne.message : "Apple sign-in failed.");
      ie(we), Ce(le.ERROR), r(we);
    } finally {
      Xa(!1);
    }
  }, Qn = Ob({
    onSuccess: async (ne) => {
      try {
        const we = await _w(ne.code, se);
        l(we);
      } catch (we) {
        const ln = we instanceof Error ? we.message : "Google sign-in failed";
        ie(ln), Ce(le.ERROR), r(ln);
      } finally {
        mn(!1);
      }
    },
    onError: (ne) => {
      const we = ne?.error_description || ne?.error || "Google sign-in failed.";
      ie(we), Ce(le.ERROR), r(we), mn(!1);
    },
    onNonOAuthError: (ne) => {
      const we = `Google sign-in failed: ${ne.type}`;
      ie(we), Ce(le.ERROR), r(we), mn(!1);
    },
    flow: "auth-code"
  });
  w.useEffect(() => {
    if (!St) {
      if (re.current && clearTimeout(re.current), !v) {
        z(!1), xe(!1), B(!1), Z("");
        return;
      }
      if (!v.includes("@")) {
        z(!0), xe(!1);
        return;
      }
      if (!Dl.test(v)) {
        z(!1), xe(!1);
        return;
      }
      return re.current = setTimeout(async () => {
        ce(!0);
        try {
          (await Ls(v)).exists ? (z(!0), xe(!1)) : (z(!1), xe(!0));
        } catch (ne) {
          console.error("[EmbeddedLogin] Email check failed:", ne);
          const we = ne instanceof Error ? ne.message : "Unable to verify email. You can still proceed with login.";
          B(!0), Z(we), xe(!0), z(!1);
        } finally {
          ce(!1);
        }
      }, 500), () => {
        re.current && clearTimeout(re.current);
      };
    }
  }, [v, St]);
  const ct = v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  w.useEffect(() => {
    const ne = (we) => {
      we.key === "Escape" && o();
    };
    return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
  }, [o]);
  const Hs = (ne) => {
    ne.target === Sa.current && o();
  }, Ji = async (ne) => {
    if (ne.preventDefault(), !St) {
      if (!v || !A) {
        F("Please enter both username/email and password"), r("Please enter both username/email and password");
        return;
      }
      L(!0), F("");
      try {
        const we = await wg(v, A, se), ln = Tw(A, {
          displayName: v.split("@")[0],
          email: v
        });
        Object.values(ln).every(Boolean) ? l(we) : (wn(we), fn(!0));
      } catch (we) {
        console.error("[EmbeddedLogin] Login failed:", we);
        const ln = we instanceof Error ? we.message : "Authentication failed";
        F(ln), ie(ln), Ce(le.ERROR), r(ln);
      } finally {
        L(!1);
      }
    }
  }, Gl = (ne) => {
    if (ne.key === "CapsLock" && ne.type === "keydown") {
      Q((we) => !we);
      return;
    }
    ne.key !== "CapsLock" && Q(xc(ne));
  };
  return ge ? /* @__PURE__ */ m.jsx(
    Uw,
    {
      email: v,
      onBack: () => Xe(!1),
      handleClose: o,
      onCreateAccount: () => {
        Xe(!1), oe(!0);
      }
    }
  ) : pe ? /* @__PURE__ */ m.jsx(
    Lw,
    {
      email: v,
      onBack: () => Me(!1),
      handleClose: o,
      onCreateAccount: () => {
        Me(!1), oe(!0);
      }
    }
  ) : qe ? /* @__PURE__ */ m.jsx(zw, { onBack: () => Qe(!1), handleClose: o }) : $ ? /* @__PURE__ */ m.jsx(
    jw,
    {
      onSuccess: (ne) => {
        oe(!1), l(ne);
      },
      onError: r,
      handleClose: o,
      onSignIn: (ne) => {
        oe(!1), ne && S(ne);
      },
      authority: u,
      initialEmail: v
    }
  ) : /* @__PURE__ */ m.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Sa,
      onMouseDown: Hs,
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
                  type: Ye.BUTTON,
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
                  onSubmit: Ji,
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
                              type: Ye.BUTTON,
                              variant: tt.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => {
                                mn(!0), Qn();
                              },
                              disabled: T || Kt || St,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ m.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: Hw,
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
                              type: Ye.BUTTON,
                              variant: tt.OUTLINE,
                              part: "identity-widget-apple-button",
                              onClick: at,
                              disabled: T || Xn || St,
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
                            disabled: T,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                              Y && /* @__PURE__ */ m.jsx(_s, {}),
                              !Y && M && ct && !x && /* @__PURE__ */ m.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: ql,
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
                    St && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        title: Oe.BRAND_CONFIG_TITLE,
                        message: Oe.BRAND_CONFIG_MESSAGE,
                        className: "mb-4!"
                      }
                    ),
                    !St && Te && !M && ct && !x && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.INFO,
                        message: Yi.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          xe(!1), oe(!0);
                        },
                        onClose: () => xe(!1),
                        className: "mb-4!"
                      }
                    ),
                    !St && Te && x && /* @__PURE__ */ m.jsx(
                      Ot,
                      {
                        type: le.ERROR,
                        message: X,
                        onClose: () => {
                          xe(!1), B(!1), Z("");
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
                                  type: O ? "text" : "password",
                                  value: A,
                                  onChange: (ne) => {
                                    q(ne.target.value), F("");
                                  },
                                  onKeyDown: Gl,
                                  onKeyUp: Gl,
                                  placeholder: "Enter Password...",
                                  disabled: T,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: W,
                                  endIcon: /* @__PURE__ */ m.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-login-password-toggle",
                                      onClick: () => V(!O),
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
                              K && /* @__PURE__ */ m.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: Yi.CAPS_LOCK_ON
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
                                    checked: se,
                                    onChange: (ne) => te(ne.target.checked),
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
                                      ne.preventDefault(), Xe(!0);
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
                                      ne.preventDefault(), Me(!0);
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
                        type: Ye.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: T || !v || St,
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
                      Fe,
                      {
                        type: Ye.BUTTON,
                        variant: tt.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => oe(!0),
                        disabled: T || Kt,
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
        de && /* @__PURE__ */ m.jsx(pc, { message: de, type: ye, onClose: () => ie("") }),
        P && /* @__PURE__ */ m.jsx(
          Ow,
          {
            onResetPassword: () => {
              fn(!1), wn(null), Xe(!0);
            },
            onContinue: () => {
              fn(!1), Vt && l(Vt), wn(null);
            }
          }
        )
      ]
    }
  );
}, kw = (l) => {
  const { authority: r, subsidiary: o, onRedirect: u, onTokenValidityCheck: c } = l, [f, h] = w.useState(!1), [p, b] = w.useState(l.logoutCounter ?? 0);
  (l.logoutCounter ?? 0) !== p && (b(l.logoutCounter ?? 0), h(!1)), w.useEffect(() => (r ? (mw(r), console.log(`${Ge.AUTH} Authority override set to: ${r}`)) : (y0(), console.log(`${Ge.AUTH} Using automatic authority detection`)), () => {
    y0();
  }), [r]), w.useEffect(() => {
    let A;
    return (async () => {
      const T = await Rw();
      typeof T == "function" && (A = T);
    })(), () => {
      A && A();
    };
  }, [f]), w.useEffect(() => {
    (async () => {
      try {
        const q = !xw();
        if (c && c(q), await Nw()) {
          h(!0), c && c(!0);
          const O = l.redirectUrl || uc(), V = Et(Ue.ACCESS_TOKEN, !1), K = V ? xs(V) : null;
          u && K && u(O, K), l.autoRedirection && (window.location.href = O);
          return;
        }
        if (Aw()) {
          if (await zc()) {
            const V = Et(Ue.ACCESS_TOKEN, !1);
            if (!V)
              return;
            const K = xs(V);
            if (!K)
              return;
            console.log(`${Ge.AUTH} Auto-login successful`), h(!0), c && c(!0);
            const Q = l.redirectUrl || uc();
            u && (console.log(
              `${Ge.AUTH} Triggering onRedirect callback with user session:`,
              K
            ), u(Q, K)), l.autoRedirection && (window.location.href = Q);
          }
        } else
          localStorage.removeItem(nt.REFRESH_TOKEN), localStorage.removeItem(nt.REFRESH_TOKEN_TIME);
      } catch (q) {
        console.error(`${Ge.AUTH} Auto-login failed:`, q), localStorage.removeItem(nt.REFRESH_TOKEN), localStorage.removeItem(nt.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), w.useEffect(() => {
    r && localStorage.setItem("iam_authority", r), o && localStorage.setItem("subsidiary", o);
  }, [r, o]);
  const y = () => {
    l.handleClose && l.handleClose(), h(!0), c && c(!0);
    const A = l.redirectUrl || uc();
    if (u) {
      const q = Et(Ue.ACCESS_TOKEN, !1);
      if (q) {
        const T = xs(q);
        T && u(A, T);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = A;
    }, 100);
  }, v = (A) => {
    console.log(`${Ge.AUTH} Embedded login error:`, A);
  }, S = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ m.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ m.jsx(q1, { children: /* @__PURE__ */ m.jsx(
    G0,
    {
      path: "*",
      element: /* @__PURE__ */ m.jsx(w.Fragment, { children: l.showLogin && !f && /* @__PURE__ */ m.jsx(
        Bw,
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
class qw {
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
async function S0(l) {
  const r = new qw(l.cdnBaseUrl, l.shadowRoot), o = l.brandFolder || l.brandToken;
  if (o)
    await r.loadTheme(o);
  else if (l.autoDetect) {
    const u = await r.detectBrandFromDomain();
    u ? await r.loadTheme(u) : (sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded")));
  } else
    sessionStorage.setItem("theme_loaded", "true"), window.dispatchEvent(new Event("theme-loaded"));
  return r;
}
const x0 = "849375884089-h48ld9g29evhpb7jdra5jn0bce4thnse.apps.googleusercontent.com", Gw = "com.colibri.identity.widget", Yw = ({
  clientId: l,
  children: r
}) => l ? /* @__PURE__ */ m.jsx(Cb, { clientId: l, children: r }) : /* @__PURE__ */ m.jsx(m.Fragment, { children: r }), R0 = typeof window < "u" && window.__widgetStyles?.widget || "";
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
      if (R0) {
        const f = document.createElement("style");
        f.textContent = R0, o.appendChild(f);
      }
      this.applyCustomPrimaryColor(o);
      const u = this.getAttribute("subsidiary");
      u && u.trim() !== "" ? this.loadTheme(u, o) : this.loadThemeFromDomain(o);
      const c = document.createElement("div");
      o.appendChild(c), this.root = Nb.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
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
        await S0({
          brandFolder: o,
          shadowRoot: u
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(o) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await S0({
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
          const u = Et(Ue.REFRESH_TOKEN, !0);
          u ? (await Sw(u), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (u) {
          console.error("[Widget] Logout API call failed:", u);
        } finally {
          const u = localStorage.getItem("brand_data");
          Cw(), sessionStorage.clear(), u && localStorage.setItem("brand_data", u), this.logoutCounter++, this.render(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
      console.log("event", u), this.dispatchEvent(u);
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
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || x0,
        appleClientId: this.getAttribute("apple-client-id") || this.getAttribute("appleClientId") || Gw,
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
        /* @__PURE__ */ m.jsx(Yw, { clientId: o.googleClientId || x0, children: /* @__PURE__ */ m.jsx(cb, { children: /* @__PURE__ */ m.jsx(w.StrictMode, { children: /* @__PURE__ */ m.jsx(kw, { ...o }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
