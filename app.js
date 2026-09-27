// File: app.js

(() => {
  "use strict";

  /*
   * Each artwork combines a subject-specific silhouette with textured planes.
   *
   * All SVG markup below is trusted, local application content.
   * No external images, libraries, or network requests are used.
   */

  const artwork = {
    cat: `
      <path d="m194 312 12-207 102 68h118l104-68 11 208-77 95-102 36-103-38Z" fill="url(#light)" />
      <path d="m206 105 102 68-83 58Z" fill="url(#violet)" />
      <path d="m426 173 104-68-14 128Z" fill="url(#warm)" />
      <path d="m363 173 63 0 90 60 25 80-77 95-102 36Z" fill="url(#warm)" />
      <path d="m194 312 12-207 102 68h55l-1 271-103-38Z" fill="url(#stipple)" />
      <path d="m249 252 60 11-24 18Zm165 11 61-11-36 29Z" fill="#111528" />
      <path d="m303 309 59-21 58 21-58 82Z" fill="url(#light)" />
      <path d="m345 315 34 0-17 19Z" fill="#28215a" />
      <path d="M362 334v18l-20 13m20-13 20 13M292 320l-84-15m84 34-89 11m229-30 82-15m-82 34 87 11" fill="none" stroke="#28215a" stroke-width="5" />
      <g fill="#5f3bb7"><circle cx="142" cy="190" r="8"/><circle cx="165" cy="256" r="5"/><circle cx="118" cy="309" r="6"/><circle cx="170" cy="363" r="10"/><circle cx="209" cy="416" r="6"/></g>
      <path d="m102 220 14-3 4 14-14 4Zm42 202 10-3 3 10-10 4Z" fill="#f65933" />
    `,

    quantum: `
      <path d="M111 296C187 231 224 136 331 103c72-22 126 11 107 62-26 70-109 72-130 145-22 76 39 97 95 66 74-41 122-16 106 42-16 58-94 76-165 52-116-39-179-103-233-174Z" fill="url(#warm)" />
      <path d="M609 296C533 231 496 136 389 103c-72-22-126 11-107 62 26 70 109 72 130 145 22 76-39 97-95 66-74-41-122-16-106 42 16 58 94 76 165 52 116-39 179-103 233-174Z" fill="url(#violet)" />
      <path d="M112 296C212 239 250 173 331 144M608 296C508 239 470 173 389 144M174 351c73-28 129-31 180-3M546 351c-73-28-129-31-180-3" fill="none" stroke="#f5f2e8" stroke-width="6" opacity=".72" stroke-linecap="round" />
      <path d="M360 105C324 155 329 211 360 261s36 106 0 156" fill="none" stroke="#111528" stroke-width="8" opacity=".72" />
      <path d="M210 409c57-31 101-27 150 4s93 35 150 4" fill="none" stroke="#d93c34" stroke-width="7" stroke-dasharray="4 13" stroke-linecap="round" />
    `,

    segmentation: `
      <path d="m103 133 433-53 72 317-433 53Z" fill="url(#dark)" />
      <path d="m129 155 387-47 62 267-387 47Z" fill="url(#light)" />
      <path d="m129 155 387-47 62 267-387 47Z" fill="url(#mesh)" opacity=".65" />
      <path d="M264 349C181 209 341 153 424 157c28 121-15 208-160 192Z" fill="url(#violet)" />
      <path d="M300 325C217 185 377 129 460 133c28 121-15 208-160 192Z" fill="url(#warm)" opacity=".86" />
      <path d="M300 325C217 185 377 129 460 133c28 121-15 208-160 192Z" fill="url(#contours)" />
      <path d="m278 374 166-222m-123 164-46-55m71 22 61-8m-30-50-15-46" fill="none" stroke="#f5f2e8" stroke-width="5" />
      <path d="M233 144v-35h43m192 0h33v44M501 330v34h-36m-188 0h-44v-34" fill="none" stroke="#d93c34" stroke-width="5" />
      <g fill="#111528"><circle cx="300" cy="325" r="7"/><circle cx="263" cy="223" r="7"/><circle cx="348" cy="155" r="7"/><circle cx="460" cy="133" r="7"/><circle cx="449" cy="266" r="7"/></g>
    `,

    math: `
      <path d="M83 389 L143 101 L398 72 L450 333 L330 469 Z" fill="url(#dark)" />
      <path d="M120 353 L168 129 L365 105 L407 320 L316 426 Z" fill="url(#light)" />
      <path d="M172 177 L350 155 L377 293 L200 317 Z" fill="url(#weave)" opacity=".7" />
      <path d="M193 292 L288 170 L383 294 Z" fill="url(#violet)" /><path d="M193 292 L288 170 L288 292 Z" fill="#111528" />
      <path d="M150 362 C205 217 248 434 303 315 C338 238 367 265 408 169" fill="none" stroke="#d93c34" stroke-width="5" />
      <path d="M471 133 L604 113 L628 335 L495 355 Z" fill="#f5f2e8" />
      <path d="M471 133 L604 113 L628 335 L495 355 Z" fill="url(#hatch)" opacity=".55" />
      <path d="M500 174 H581 M500 198 H555 M500 246 H595 M500 270 H570" stroke="#28215a" stroke-width="6" />
      <text x="524" y="324" fill="#d93c34" font-family="Georgia, serif" font-size="74">∑=</text>
      <path d="M424 220 L471 213 M424 238 L471 231" stroke="#9968d8" stroke-width="4" stroke-dasharray="3 7" />
    `,

    gan: `
      <path d="M94 360 L174 133 L326 88 L360 425 L167 448 Z" fill="url(#dark)" />
      <path d="M394 416 L431 91 L586 132 L635 362 L536 449 Z" fill="url(#warm)" />
      <circle cx="142" cy="256" r="30" fill="url(#stipple)" /><circle cx="142" cy="256" r="7" fill="#fcd1a9" />
      <path d="M172 256 H244" stroke="#fcd1a9" stroke-width="5" stroke-dasharray="3 8" />
      <path d="m232 193 62 63-62 64-62-64Z" fill="url(#violet)" />
      <path d="M211 242h42m-42 14h31m-31 14h42" stroke="#fcd1a9" stroke-width="5" />
      <path d="M285 255 C323 231 353 241 389 257" fill="none" stroke="#111528" stroke-width="6" />
      <path d="M393 303 L425 231 L505 210 L567 254 L548 330 L462 357 Z" fill="url(#light)" />
      <path d="M393 303 L425 231 L505 210 L567 254 L548 330 L462 357 Z" fill="url(#dots)" opacity=".7" />
      <path d="M425 302 L454 277 L481 294 L516 263 L548 290" fill="none" stroke="#d93c34" stroke-width="7" />
      <path d="M432 331 L466 291 L493 310 L529 281 L547 314" fill="none" stroke="#28215a" stroke-width="6" />
      <path d="M449 370 H572 V421 H449 Z" fill="#111528" />
      <path d="M462 382 H478 V398 H462 Z M488 382 H504 V398 H488 Z M514 382 H530 V398 H514 Z M540 382 H556 V398 H540 Z" fill="#f5f2e8" />
      <path d="M117 402 H196" stroke="#9968d8" stroke-width="5" stroke-dasharray="2 9" />
    `,

    network: `
      <path d="M86 369 L166 112 L620 96 L653 382 L352 466 Z" fill="url(#light)" />
      <path d="M183 144 L352 98 L531 144 M183 253 L352 207 L531 253 M183 362 L352 316 L531 253" fill="none" stroke="#28215a" stroke-width="3" />
      <path d="M183 144 L183 362 M352 98 L352 316 M531 144 L531 253" stroke="#fcd1a9" stroke-width="3" opacity=".7" />
      <g stroke="#9968d8" stroke-width="3" opacity=".8"><path d="M183 144 L352 98 M183 144 L352 207 M183 144 L352 316 M183 253 L352 98 M183 253 L352 207 M183 253 L352 316 M183 362 L352 98 M183 362 L352 207 M183 362 L352 316" /><path d="M352 98 L531 144 M352 207 L531 144 M352 207 L531 253 M352 316 L531 144 M352 316 L531 253" /></g>
      <g fill="url(#violet)"><circle cx="183" cy="144" r="19"/><circle cx="183" cy="253" r="19"/><circle cx="183" cy="362" r="19"/></g>
      <g fill="url(#warm)"><circle cx="352" cy="98" r="20"/><circle cx="352" cy="207" r="20"/><circle cx="352" cy="316" r="20"/></g>
      <g fill="url(#dark)"><circle cx="531" cy="144" r="19"/><circle cx="531" cy="253" r="19"/></g>
      <path d="M574 192 H625 V252 H574 Z M574 271 H625 V331 H574 Z" fill="url(#hatch)" /><path d="M582 202 H617 M582 218 H617 M582 234 H617 M582 281 H617 M582 297 H617 M582 313 H617" stroke="#f5f2e8" stroke-width="4" />
    `,

    review: `
      <path d="M102 155 321 104 356 292 212 324 162 374 165 334 123 343Z" fill="url(#warm)" />
      <path d="M618 155 399 104 364 292 508 324 558 374 555 334 597 343Z" fill="url(#violet)" />
      <path d="M102 155 321 104 356 292 212 324 162 374 165 334 123 343Z" fill="url(#stipple)" opacity=".35" />
      <path d="M618 155 399 104 364 292 508 324 558 374 555 334 597 343Z" fill="url(#contours)" opacity=".32" />
      <path d="m333 93 54 18-13 243-54-18Z" fill="url(#dark)" />
      <path d="m346 130 26 9-8 164-26-9Z" fill="url(#light)" opacity=".72" />
      <path d="M157 197 279 168M166 231 296 200M563 197 441 168M554 231 424 200" stroke="#f5f2e8" stroke-width="8" stroke-linecap="round" opacity=".88" />
      <circle cx="275" cy="285" r="10" fill="#f5f2e8" /><circle cx="445" cy="285" r="10" fill="#111528" />
      <path d="M302 402c26-23 49-23 72 0s46 23 72 0" fill="none" stroke="#d93c34" stroke-width="7" stroke-dasharray="3 11" stroke-linecap="round" />
    `,

    pacman: `
      <path d="M326 262 483 170A169 169 0 1 0 483 354Z" fill="url(#warm)" />
      <path d="M326 262 483 170A169 169 0 1 0 483 354Z" fill="url(#stipple)" opacity=".34" />
      <path d="M515 148h82v72h-54v72h-72" fill="none" stroke="url(#dark)" stroke-width="22" stroke-linejoin="round" />
      <path d="M535 350h22v22h-22zm51 0h22v22h-22zm51 0h22v22h-22z" fill="#fcd1a9" />
      <path d="M111 402h102v-58h84" fill="none" stroke="#111528" stroke-width="18" stroke-linejoin="round" />
    `,

    mapping: `
      <path d="M77 350 L344 178 L646 295 L378 470 Z" fill="url(#dark)" />
      <path d="M77 350 L344 178 L646 295 L378 470 Z" fill="url(#mesh)" opacity=".65" />
      <path d="M172 302 L258 251 L346 285 L258 337 Z" fill="url(#warm)" />
      <path d="M172 302 V384 L258 432 V337 Z M258 337 L346 285 V367 L258 432 Z" fill="url(#violet)" />
      <path d="M353 174 L438 125 L526 159 L440 211 Z" fill="url(#light)" />
      <path d="M353 174 V316 L440 366 V211 Z" fill="url(#warm)" />
      <path d="M440 211 L526 159 V303 L440 366 Z" fill="url(#dark)" />
      <path d="M111 331 L438 125 L616 292 M111 331 L616 292" fill="none" stroke="#fcd1a9" stroke-width="3" stroke-dasharray="5 9" />
      <path d="M435 127 L587 214 L616 292" fill="none" stroke="#d93c34" stroke-width="3" />
      <path d="M438 125 L438 43 L548 101 L548 159" fill="none" stroke="#111528" stroke-width="5" />
      <path d="M438 43 L548 101 L526 159" fill="none" stroke="#9968d8" stroke-width="2" />
      <path d="M394 72 L447 46 L493 69 L440 97 Z" fill="url(#dark)" />
      <path d="M394 72 V105 L440 130 V97 Z" fill="#28215a" />
      <path d="M440 97 L493 69 V102 L440 130 Z" fill="url(#violet)" />
      <circle cx="449" cy="86" r="17" fill="#111528" /><circle cx="449" cy="86" r="8" fill="#9968d8" />
      <path d="M449 103 L526 159 L440 211 Z" fill="#9968d8" opacity=".22" />
      <circle cx="111" cy="331" r="12" fill="#fcd1a9" /><circle cx="616" cy="292" r="12" fill="#fcd1a9" /><circle cx="438" cy="125" r="14" fill="#d93c34" /><circle cx="548" cy="101" r="11" fill="#9968d8" /><circle cx="526" cy="159" r="11" fill="#fcd1a9" />
    `,

    copilot: `
      <circle cx="364" cy="242" r="190" fill="url(#dots)" opacity=".7" />
      <path d="M112 171 L347 237 L588 158 L575 384 L350 448 L124 382 Z" fill="url(#dark)" />
      <path d="M110 122 L347 195 L350 413 L126 342 Z" fill="url(#light)" />
      <path d="M110 122 L347 195 L350 413 L126 342 Z" fill="url(#hatch)" opacity=".32" />
      <path d="M347 195 L588 118 L575 339 L350 413 Z" fill="url(#warm)" />
      <path d="M347 195 L588 118 L575 339 L350 413 Z" fill="url(#mesh)" opacity=".7" />
      <path d="M171 187 L291 226 L291 334 L174 298 Z" fill="#111528" opacity=".78" />
      <path d="M190 214 L270 239 M190 249 L270 274 M190 284 L270 309" fill="none" stroke="#fcd1a9" stroke-width="6" />
      <path d="M255 86 L365 49 L473 89 M365 49 V195" fill="none" stroke="#111528" stroke-width="3" />
      <circle cx="255" cy="86" r="20" fill="url(#violet)" /><circle cx="365" cy="49" r="25" fill="url(#dark)" /><circle cx="473" cy="89" r="20" fill="url(#light)" />
      <path d="M430 242 H529 V308 H430 Z" fill="#f5f2e8" opacity=".9" />
      <path d="M448 262 H510 M448 284 H493" stroke="#28215a" stroke-width="5" />
      <path d="M444 262 L450 268 L461 255 M444 284 L450 290 L461 277" fill="none" stroke="#5f3bb7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="420" cy="275" r="12" fill="#9968d8" />
      <path d="M365 195 C401 191 416 224 430 242 M365 195 C396 206 412 233 420 275" fill="none" stroke="#9968d8" stroke-width="4" />
    `,

    medical: `
      <path d="M82 306 L284 126 L511 187 L309 389 Z" fill="url(#light)" />
      <path d="M82 306 L284 126 L511 187 L309 389 Z" fill="url(#dots)" opacity=".6" />
      <path d="M116 324 L318 144 L545 205 L343 407 Z" fill="url(#dark)" />
      <path d="M152 311 L321 162 L488 208 L319 357 Z" fill="#f5f2e8" opacity=".92" />
      <path d="M190 278 L307 176 L425 207 L309 309 Z" fill="url(#warm)" />
      <path d="M342 188 C403 178 442 204 472 239 L561 282" fill="none" stroke="#9968d8" stroke-width="8" />
      <path d="M342 188 C399 226 438 253 472 239 L561 282" fill="none" stroke="#fcd1a9" stroke-width="3" stroke-dasharray="5 8" />
      <path d="M289 193 H329 V233 H369 V273 H329 V313 H289 V273 H249 V233 H289 Z" fill="#d93c34" transform="rotate(-15 309 253)" />
      <path d="M493 241 V321 C493 339 531 350 568 334 V254 C531 270 493 259 493 241 Z" fill="url(#violet)" />
      <ellipse cx="530" cy="247" rx="37" ry="13" fill="#f5f2e8" />
      <path d="M493 283 C493 301 568 315 568 296 M493 307 C493 325 568 339 568 320" fill="none" stroke="#9968d8" stroke-width="3" />
      <circle cx="116" cy="324" r="11" fill="#fcd1a9" /><circle cx="561" cy="282" r="12" fill="#d93c34" /><circle cx="568" cy="347" r="11" fill="#9968d8" />
    `,

    forensics: `
      <path d="m83 159 211-72 253 88-79 204-280 59-127-113Z" fill="url(#dark)" />
      <path d="m105 193 194-66 216 72-57 156-238 50-111-101Z" fill="url(#warm)" />
      <path d="m105 193 194-66 216 72-57 156-238 50-111-101Z" fill="url(#scanlines)" opacity=".42" />
      <path d="m292 127 105 37-72 213-104-44Z" fill="url(#light)" opacity=".9" />
      <path d="m337 182 65 22-51 116-62-27Z" fill="url(#violet)" />
      <path d="m402 204 85 23-57 109-66-16Z" fill="#111528" opacity=".82" />
      <path d="m218 370 74-151 45 17-66 153Z" fill="#f5f2e8" opacity=".8" />
      <path d="M124 347 215 322m-67 64 94-26m-26 49 91-28" stroke="#9968d8" stroke-width="5" stroke-dasharray="4 12" opacity=".82" />
      <path d="m485 228 36 9-15 30-32-8Z" fill="#d93c34" />
      <path d="m507 236 23 6-12 25-21-6Z" fill="#fcd1a9" opacity=".82" />
    `,

    codec: `
      <path d="M60 264 C108 194 137 194 185 264 S262 334 304 264" fill="none" stroke="url(#warm)" stroke-width="30" stroke-linecap="round" />
      <path d="M60 264 C108 194 137 194 185 264 S262 334 304 264" fill="none" stroke="#f5f2e8" stroke-width="7" stroke-linecap="round" opacity=".8" />
      <path d="M304 264 H337 M469 264 H502" stroke="#111528" stroke-width="12" stroke-linecap="round" />
      <path d="M337 157 H469 V371 H337 Z" fill="url(#dark)" />
      <path d="M355 180 H451 V348 H355 Z" fill="url(#violet)" opacity=".82" />
      <path d="M369 205 H437 M369 245 H421 M369 285 H437 M369 325 H409" stroke="#fcd1a9" stroke-width="10" stroke-linecap="round" />
      <path d="M502 264 C545 214 573 214 616 264 S685 314 700 264" fill="none" stroke="url(#light)" stroke-width="30" stroke-linecap="round" />
      <path d="M502 264 C545 214 573 214 616 264 S685 314 700 264" fill="none" stroke="#5f3bb7" stroke-width="7" stroke-linecap="round" opacity=".85" />
      <g fill="#f65933"><circle cx="362" cy="136" r="8"/><circle cx="392" cy="136" r="8"/><circle cx="422" cy="136" r="8"/></g>
    `,

    psychoacoustic: `
      <path d="M306 81C208 43 121 108 121 214c0 81 65 111 86 171 19 55 74 61 104 16 20-31 18-56 52-101 67-87 47-178-57-219Z" fill="url(#warm)" />
      <path d="M306 81C208 43 121 108 121 214c0 81 65 111 86 171 19 55 74 61 104 16 20-31 18-56 52-101 67-87 47-178-57-219Z" fill="url(#contours)" />
      <path d="M262 360c-3-52 65-79 69-137 4-63-29-101-78-98-52 3-85 48-78 97 4 27 20 48 40 62" fill="none" stroke="#111528" stroke-width="17" stroke-linecap="round" />
      <path d="M234 292c-28-41-25-74 5-88 21-10 39-2 48 16" fill="none" stroke="#fcd1a9" stroke-width="13" stroke-linecap="round" />
      <path d="M341 261h52l48-113h35 M393 261h83 M393 261l48 112h35" fill="none" stroke="#28215a" stroke-width="4" />
      <circle cx="393" cy="261" r="13" fill="#5f3bb7" />
      <path d="M476 148c26-65 51 65 77 0s51-65 77 0" fill="none" stroke="#f65933" stroke-width="12" />
      <path d="M476 261c18-47 36 47 54 0s36-47 54 0 36 47 54 0" fill="none" stroke="#5f3bb7" stroke-width="10" />
      <path d="M476 373c38-91 76 91 114 0h42" fill="none" stroke="#111528" stroke-width="13" />
      <path d="M480 182h150M480 297h150M480 408h150" stroke="#9968d8" stroke-width="3" stroke-dasharray="3 9" />
    `,

    reconstruction: `
      <path d="M160 158V90h78m247 0h75v68M160 369v69h78m247 0h75v-69" fill="none" stroke="#9968d8" stroke-width="5" />
      <ellipse cx="358" cy="372" rx="228" ry="67" fill="url(#dots)" />
      <path d="m329 183 53 5 14 66-73 1Z" fill="url(#dark)" />
      <path d="m303 96 52-31 50 34 5 62-34 43-48-11-33-43Z" fill="url(#light)" />
      <path d="m355 65 50 34 5 62-34 43-20-61Z" fill="url(#violet)" />
      <path d="m323 230-91 53-28 147 146 32 155-32-31-146-78-54-42 51Z" fill="url(#warm)" />
      <path d="m323 230 31 51-4 181-146-32 28-147Z" fill="url(#dark)" />
      <path d="m354 281 120 3 31 146-155 32Z" fill="url(#stipple)" />
      <path d="m303 96 53 47 49-44m-110 51 61-7 20 61M232 283l122-2 120 3M204 430l150-149 151 149M232 283l118 179 124-178" fill="none" stroke="#fcd1a9" stroke-width="2" opacity=".75" />
      <path d="m408 159 96 30 53 98-52 143m-31-146 83 3 47 75" fill="none" stroke="#5f3bb7" stroke-width="3" stroke-dasharray="3 9" />
      <g fill="#5f3bb7"><circle cx="504" cy="189" r="10"/><circle cx="557" cy="287" r="12"/><circle cx="604" cy="362" r="8"/><circle cx="544" cy="406" r="7"/><circle cx="572" cy="221" r="6"/></g>
      <ellipse cx="358" cy="326" rx="228" ry="74" fill="none" stroke="#d93c34" stroke-width="4" stroke-dasharray="12 8" />
    `,

    "rag-writing": `
      <path d="m112 117 159-35 40 218-159 35Z" fill="url(#dark)" />
      <path d="m139 129 130-28 33 177-130 28Z" fill="url(#light)" />
      <path d="m164 170 75-16m-69 46 75-16m-69 46 50-11" stroke="#5f3bb7" stroke-width="8" />
      <path d="m291 85 128 31-39 170-128-31Z" fill="url(#warm)" />
      <path d="m291 85 128 31-39 170-128-31Z" fill="url(#hatch)" />
      <path d="m284 157 84 19m-91 12 59 14" stroke="#f5f2e8" stroke-width="8" />
      <path d="m174 362 174-58 88 69m-88-69-13-73m13 73-34 123" fill="none" stroke="#5f3bb7" stroke-width="5" />
      <g fill="#f65933"><circle cx="174" cy="362" r="17"/><circle cx="335" cy="231" r="14"/><circle cx="314" cy="427" r="13"/></g>
      <path d="m348 270 35 34-35 36-36-36Z" fill="url(#violet)" />
      <path d="m442 196 157 23-35 235-157-23Z" fill="url(#dark)" />
      <path d="m429 182 157 23-35 235-157-23Z" fill="url(#light)" />
      <path d="m429 182 157 23-35 235-157-23Z" fill="url(#weave)" opacity=".5" />
      <path d="m444 242 102 15m-109 30 81 12m-87 29 102 15m-108 28 65 10" stroke="#28215a" stroke-width="7" />
      <path d="m583 117 30 18-86 148-38 17 8-43Z" fill="url(#violet)" />
      <path d="m527 283-38 17 8-43Z" fill="#f65933" />
    `,

    "sound-detection": `
      <path d="M72 292 H648" stroke="#111528" stroke-width="5" opacity=".72" />
      <path d="M72 292 C108 292 112 226 144 226 S177 355 210 355 243 180 277 180 310 292 343 292 374 236 407 236 440 327 473 327 510 205 548 205 582 292 648 292" fill="none" stroke="url(#light)" stroke-width="34" stroke-linecap="round" />
      <path d="M72 292 C108 292 112 226 144 226 S177 355 210 355 243 180 277 180 310 292 343 292 374 236 407 236 440 327 473 327 510 205 548 205 582 292 648 292" fill="none" stroke="#5f3bb7" stroke-width="7" stroke-linecap="round" />
      <rect x="236" y="126" width="96" height="332" rx="10" fill="url(#warm)" opacity=".9" />
      <path d="M252 160 V424 M276 160 V424 M300 160 V424" stroke="#f5f2e8" stroke-width="4" stroke-dasharray="4 14" opacity=".75" />
      <path d="M247 112 H321 M247 472 H321" stroke="#111528" stroke-width="8" stroke-linecap="round" />
      <path d="M378 397 H516 L540 421 L516 445 H378 Z" fill="url(#dark)" />
      <circle cx="402" cy="421" r="10" fill="#fcd1a9" /><circle cx="432" cy="421" r="10" fill="#f65933" /><circle cx="462" cy="421" r="10" fill="#9968d8" />
    `,

    gesture: `
      <path d="M166 382c-27-71 8-140 65-165l-10-91c-3-26 35-37 47-13l33 67 0-111c0-26 38-29 42-3l17 113 19-83c6-26 43-17 38 9l-15 88 26-44c14-24 48-4 34 21l-39 73c-14 26-10 63-27 91-30 49-85 78-140 74Z" fill="url(#light)" />
      <path d="M166 382c-27-71 8-140 65-165l-10-91c-3-26 35-37 47-13l33 67 0-111c0-26 38-29 42-3l17 113 19-83c6-26 43-17 38 9l-15 88 26-44c14-24 48-4 34 21l-39 73c-14 26-10 63-27 91-30 49-85 78-140 74Z" fill="url(#stipple)" opacity=".48" />
      <path d="M273 232c35 13 69 13 104 0" fill="none" stroke="#d93c34" stroke-width="8" stroke-linecap="round" />
      <circle cx="326" cy="232" r="14" fill="#111528" />
      <path d="M456 210c57 0 104 47 104 104s-47 104-104 104" fill="none" stroke="url(#violet)" stroke-width="23" stroke-linecap="round" />
      <path d="M456 210c57 0 104 47 104 104" fill="none" stroke="#fcd1a9" stroke-width="5" stroke-dasharray="3 13" />
      <circle cx="456" cy="210" r="13" fill="#f65933" />
    `
  };

  function createArtwork(kind, index) {
    const prefix = `art-${index}`;
    const body = artwork[kind];

    if (!body) {
      return "";
    }

    // Repeat the same surface at carousel seams, while varying it by subject.
    const textureIndex = Object.keys(artwork).indexOf(kind);
    const grainFrequency = ["0.65", "0.04 0.5", "0.12", "0.45"][textureIndex % 4];

    const scopedBody = body.replace(
      /url\(#([^)]+)\)/g,
      (_, name) => `url(#${prefix}-${name})`
    );

    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 720 520"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="${prefix}-warm"
            x1="15%"
            y1="95%"
            x2="85%"
            y2="5%"
          >
            <stop offset="0%" stop-color="#fcd1a9" />
            <stop offset="52%" stop-color="#f65933" />
            <stop offset="100%" stop-color="#d93c34" />
          </linearGradient>

          <linearGradient
            id="${prefix}-dark"
            x1="0%"
            y1="20%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#111528" />
            <stop offset="60%" stop-color="#28215a" />
            <stop offset="100%" stop-color="#5f3bb7" />
          </linearGradient>

          <radialGradient
            id="${prefix}-light"
            cx="27%"
            cy="20%"
            r="90%"
          >
            <stop offset="0%" stop-color="#f5f2e8" />
            <stop offset="55%" stop-color="#fcd1a9" />
            <stop offset="100%" stop-color="#cda1c9" />
          </radialGradient>

          <linearGradient id="${prefix}-violet" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop stop-color="#28215a" />
            <stop offset="55%" stop-color="#5f3bb7" />
            <stop offset="100%" stop-color="#cda1c9" />
          </linearGradient>

          <pattern
            id="${prefix}-dots"
            width="11"
            height="11"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.15"
              fill="#28215a"
              opacity="0.55"
            />
          </pattern>

          <pattern
            id="${prefix}-mesh"
            width="19"
            height="19"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-12)"
          >
            <path
              d="M19 0 H0 V19"
              fill="none"
              stroke="#28215a"
              stroke-width="0.85"
              opacity="0.55"
            />
          </pattern>

          <pattern id="${prefix}-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
            <path d="M2 0v12M6 0v12" stroke="#111528" stroke-width="1.5" opacity=".35" />
          </pattern>

          <pattern id="${prefix}-stipple" width="33" height="29" patternUnits="userSpaceOnUse">
            <g fill="#28215a" opacity=".5">
              <circle cx="5" cy="7" r="2.2" /><circle cx="25" cy="18" r="1.2" />
              <path d="m15 18 4-2 1 4-3 2Zm13-14 3 1-1 4-2-1Z" />
            </g>
            <path d="m9 23 2-3 2 2-1 4Zm12-14 2-3 3 2-2 3Z" fill="#f5f2e8" opacity=".55" />
          </pattern>

          <pattern id="${prefix}-scanlines" width="8" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 2h8" stroke="#fcd1a9" stroke-width="2" opacity=".35" />
            <path d="M0 6h8" stroke="#111528" stroke-width="1" opacity=".3" />
          </pattern>

          <pattern id="${prefix}-contours" width="48" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)">
            <path d="M-24 7Q-12-3 0 7T24 7T48 7T72 7M-24 21Q-12 11 0 21T24 21T48 21T72 21" fill="none" stroke="#28215a" stroke-width="1.6" opacity=".4" />
          </pattern>

          <pattern id="${prefix}-weave" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M1 2h7M1 5h7M11 10h7M11 13h7" stroke="#28215a" stroke-width="1.5" opacity=".4" />
            <path d="M12 0v7M15 0v7M3 10v8M6 10v8" stroke="#fcd1a9" stroke-width="2" opacity=".65" />
          </pattern>

          <filter
            id="${prefix}-grain"
            x="-8%"
            y="-8%"
            width="116%"
            height="116%"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="${grainFrequency}"
              numOctaves="2"
              stitchTiles="stitch"
              seed="${textureIndex + 3}"
              result="noise"
            />

            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="grayNoise"
            />

            <feComponentTransfer in="grayNoise" result="softNoise">
              <feFuncR type="linear" slope="0.3" intercept="0.7" />
              <feFuncG type="linear" slope="0.3" intercept="0.7" />
              <feFuncB type="linear" slope="0.3" intercept="0.7" />
            </feComponentTransfer>

            <feComposite
              in="softNoise"
              in2="SourceGraphic"
              operator="in"
              result="clippedNoise"
            />

            <feBlend
              in="SourceGraphic"
              in2="clippedNoise"
              mode="multiply"
            />
          </filter>
        </defs>

        <g filter="url(#${prefix}-grain)">
          ${scopedBody}
        </g>
      </svg>
    `;
  }

  const projectDialog = document.getElementById("project-dialog");
  const dialogArt = projectDialog.querySelector(".project-dialog-art");
  const dialogCopy = projectDialog.querySelector(".project-dialog-copy");
  const originalProjects = Array.from(document.querySelectorAll(".project"));

  originalProjects.forEach((project, index) => {
    project.dataset.projectId = index;
    project.classList.add("is-interactive");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "text-button project-open";
    button.textContent = "View details ↗";
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "project-dialog");
    button.setAttribute("aria-label", `View details for ${project.querySelector("h3").innerText.replace(/\s+/g, " ").trim()}`);
    project.querySelector(".project-copy").appendChild(button);
  });

  function openProject(project) {
    // Cloned carousel cards share one canonical source of detail content.
    const source = originalProjects[Number(project.dataset.projectId)];
    const copy = source.querySelector(".project-copy").cloneNode(true);
    copy.querySelector(".project-open").remove();
    copy.querySelector("h3").id = "project-dialog-title";
    if (!copy.querySelector(".project-details")) {
      const details = document.createElement("div");
      details.className = "project-details";
      const list = document.createElement("ul");
      copy.querySelectorAll(".project-description, .project-tech").forEach((paragraph) => {
        const item = document.createElement("li");
        item.innerHTML = paragraph.innerHTML;
        list.appendChild(item);
        paragraph.remove();
      });
      details.appendChild(list);
      copy.appendChild(details);
    }
    dialogCopy.replaceChildren(...copy.children);
    dialogArt.innerHTML = createArtwork(source.querySelector("[data-art]").dataset.art, "dialog");
    dialogArt.style.backgroundColor = getComputedStyle(project).backgroundColor;
    const opener = project.hasAttribute("aria-hidden")
      ? project.closest(".project-row")
      : project.querySelector(".project-open");
    opener.focus({ preventScroll: true });
    projectDialog.showModal();
    projectDialog.scrollTop = 0;
  }

  projectDialog.addEventListener("click", (event) => {
    if (event.target !== projectDialog) return;
    const bounds = projectDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      projectDialog.close();
    }
  });

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionButtons = document.querySelectorAll("[data-motion-toggle]");
  const rows = Array.from(document.querySelectorAll(".project-row"));
  let manuallyPaused = false;

  function motionEnabled() {
    return !motionPreference.matches && !manuallyPaused;
  }

  function appendProjectCycle(track, projects) {
    projects.forEach((project) => {
      const clone = project.cloneNode(true);
      clone.style.backgroundColor = getComputedStyle(project).backgroundColor;
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("button, a, [tabindex]").forEach((element) => {
        element.tabIndex = -1;
      });
      track.appendChild(clone);
    });
  }

  const projectLoops = rows.map((row) => {
    const track = row.querySelector(".project-track");
    const projects = Array.from(track.children);
    appendProjectCycle(track, projects);
    return {
      row,
      track,
      projects,
      firstProject: projects[0],
      firstClone: track.children[projects.length],
      reverse: track.classList.contains("project-track--reverse"),
      remainder: 0
    };
  });

  function fillProjectRow(loop) {
    const cycle = loop.firstClone.offsetLeft - loop.firstProject.offsetLeft;
    if (!cycle) return;
    while (loop.track.scrollWidth < loop.row.clientWidth + cycle) {
      appendProjectCycle(loop.track, loop.projects);
    }
  }

  projectLoops.forEach(fillProjectRow);
  window.addEventListener("resize", () => projectLoops.forEach(fillProjectRow));

  function wrapProjectScroll(loop) {
    const cycle = loop.firstClone.offsetLeft - loop.firstProject.offsetLeft;
    if (!cycle) return;
    if (loop.row.scrollLeft >= cycle) loop.row.scrollLeft = loop.row.scrollLeft - cycle + 1;
    else if (loop.row.scrollLeft <= 0) loop.row.scrollLeft = cycle - 1;
  }

  projectLoops.forEach((loop) => {
    loop.row.addEventListener("scroll", () => wrapProjectScroll(loop), { passive: true });
  });

  function moveProjectRows(timestamp) {
    projectLoops.forEach((loop) => {
      const elapsed = Math.min(100, timestamp - (loop.lastTime ?? timestamp));
      loop.lastTime = timestamp;
      // Closing a pointer-opened dialog must not leave a row permanently paused.
      if (projectDialog.open || loop.row.matches(":focus-visible") || loop.row.querySelector(":focus-visible") || !motionEnabled() || document.hidden) return;
      loop.remainder += (loop.reverse ? -1 : 1) * elapsed / 1000 * 22;
      const step = Math.trunc(loop.remainder);
      if (!step) return;
      loop.row.scrollLeft += step;
      loop.remainder -= step;
      wrapProjectScroll(loop);
    });
    window.requestAnimationFrame(moveProjectRows);
  }
  window.requestAnimationFrame(moveProjectRows);

  document.querySelectorAll("[data-art]").forEach((element, index) => {
    element.innerHTML = createArtwork(element.dataset.art, index);
  });

  rows.forEach((row) => {
    row.addEventListener("click", (event) => {
      const project = event.target.closest(".project");
      if (!project || event.target.closest("a") || window.getSelection()?.toString()) return;
      openProject(project);
    });
    row.addEventListener("keydown", (event) => {
      if (event.target !== row || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      row.scrollBy({
        left: event.key === "ArrowRight" ? 300 : -300,
        behavior: motionEnabled() ? "smooth" : "auto"
      });
    });
  });

  function updateMotionControls() {
    const enabled = motionEnabled();
    motionButtons.forEach((button) => {
      button.disabled = motionPreference.matches;
      button.setAttribute("aria-pressed", String(!enabled));
      button.textContent = motionPreference.matches
        ? "Reduced motion"
        : enabled ? "Pause motion" : "Resume motion";
    });
  }

  motionButtons.forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => {
      manuallyPaused = !manuallyPaused;
      updateMotionControls();
    });
  });
  motionPreference.addEventListener("change", updateMotionControls);
  updateMotionControls();
})();
