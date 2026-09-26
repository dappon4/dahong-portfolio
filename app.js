// File: app.js

(() => {
  "use strict";

  /*
   * Each artwork is assembled from broad silhouettes, faceted planes,
   * gradients, dotted surfaces, and mesh.
   *
   * All SVG markup below is trusted, local application content.
   * No external images, libraries, or network requests are used.
   */

  const artwork = {
    cat: `
      <circle cx="414" cy="241" r="190" fill="url(#warm)" />
      <path
        d="M83 180 L373 70 L620 369 L330 481 Z"
        fill="url(#dots)"
      />
      <path
        d="M430 358 L560 317 L591 226 L625 249
           L605 365 L503 420 Z"
        fill="url(#dark)"
      />
      <path
        d="M266 299 L440 283 L502 438 L231 438 Z"
        fill="url(#dark)"
      />
      <path
        d="M205 189 L210 84 L304 154 L416 151
           L512 88 L503 278 L450 352 L284 343 L199 270 Z"
        fill="url(#light)"
      />
      <path
        d="M210 84 L304 154 L205 189 Z"
        fill="#27282c"
      />
      <path
        d="M416 151 L512 88 L503 278 L367 291 Z"
        fill="url(#warm)"
      />
      <path
        d="M199 270 L304 154 L367 291 L284 343 Z"
        fill="#ddbf9b"
      />
      <path
        d="M367 291 L503 278 L450 352 L284 343 Z"
        fill="url(#mesh)"
      />
      <path
        d="M343 274 L383 274 L364 296 Z"
        fill="#28282a"
      />
    `,

    quantum: `
      <path
        d="M114 353 L406 438 L625 317 L325 250 Z"
        fill="url(#dots)"
      />
      <ellipse
        cx="362"
        cy="269"
        rx="245"
        ry="94"
        fill="none"
        stroke="#343438"
        stroke-width="2"
        transform="rotate(-29 362 269)"
      />
      <path
        d="M357 53 L532 268 L355 449 L196 266 Z"
        fill="url(#warm)"
      />
      <path
        d="M357 53 L355 286 L196 266 Z"
        fill="url(#light)"
      />
      <path
        d="M355 286 L532 268 L355 449 Z"
        fill="url(#dark)"
      />
      <path
        d="M357 53 L532 268 L355 286 Z"
        fill="url(#mesh)"
      />
      <ellipse
        cx="362"
        cy="269"
        rx="240"
        ry="91"
        fill="none"
        stroke="#37353a"
        stroke-width="2"
        transform="rotate(32 362 269)"
      />
      <circle cx="159" cy="151" r="23" fill="url(#dark)" />
      <circle cx="557" cy="371" r="27" fill="url(#light)" />
      <circle cx="561" cy="162" r="14" fill="#e56b50" />
    `,

    segmentation: `
      <path
        d="M99 153 L421 53 L613 336 L283 455 Z"
        fill="url(#dark)"
      />
      <path
        d="M155 188 L426 105 L566 318 L295 411 Z"
        fill="url(#mesh)"
        stroke="#e6d9c0"
        stroke-width="1"
      />
      <path
        d="M250 152 L406 129 L507 255 L416 382
           L278 347 L208 247 Z"
        fill="url(#warm)"
        transform="translate(27 -24)"
      />
      <path
        d="M250 152 L406 129 L366 264 L278 347 L208 247 Z"
        fill="url(#light)"
        transform="translate(27 -24)"
      />
      <path
        d="M366 264 L507 255 L416 382 L278 347 Z"
        fill="url(#dots)"
        transform="translate(27 -24)"
      />
      <path
        d="M185 145 V99 H245 M480 83 H542 V144
           M580 339 V396 H520 M222 429 H164 V371"
        fill="none"
        stroke="#d86649"
        stroke-width="5"
      />
    `,

    math: `
      <circle cx="459" cy="169" r="113" fill="url(#warm)" />
      <path
        d="M136 122 L465 84 L575 391 L246 453 Z"
        fill="url(#dark)"
      />
      <path
        d="M114 98 L443 60 L553 367 L224 429 Z"
        fill="url(#light)"
      />
      <path
        d="M153 127 L423 97 L512 348 L242 392 Z"
        fill="url(#mesh)"
        opacity="0.6"
      />
      <path
        d="M224 330 L391 162 L446 330 Z"
        fill="url(#warm)"
      />
      <path
        d="M224 330 L391 162 L347 330 Z"
        fill="#27282c"
      />
      <path
        d="M175 271 C250 83 387 437 486 232"
        fill="none"
        stroke="#b35037"
        stroke-width="4"
      />
      <text
        x="503"
        y="412"
        fill="#26272b"
        font-family="Georgia, serif"
        font-size="122"
      >∑</text>
    `,

    gan: `
      <circle cx="356" cy="264" r="187" fill="url(#dots)" />
      <path
        d="M97 157 L244 81 L343 258 L235 425 L91 337 Z"
        fill="url(#dark)"
      />
      <path
        d="M244 81 L343 258 L235 425 L239 252 Z"
        fill="#505052"
      />
      <path
        d="M623 157 L476 81 L377 258 L485 425 L629 337 Z"
        fill="url(#warm)"
      />
      <path
        d="M476 81 L377 258 L485 425 L481 252 Z"
        fill="url(#mesh)"
      />
      <path
        d="M170 256 H550"
        fill="none"
        stroke="#e5ccb0"
        stroke-width="3"
        stroke-dasharray="3 10"
      />
      <circle cx="294" cy="257" r="59" fill="url(#light)" />
      <path
        d="M425 189 L483 224 L473 294 L411 322 L365 264 Z"
        fill="url(#light)"
      />
      <path
        d="M425 189 L411 322 L365 264 Z"
        fill="#d1b490"
      />
    `,

    network: `
      <path
        d="M93 318 L369 110 L635 319 L346 467 Z"
        fill="url(#warm)"
        opacity="0.5"
      />
      <path
        d="M94 317 L369 110 L635 319 L346 467 Z"
        fill="url(#mesh)"
      />
      <path
        d="M169 175 L345 120 L536 174
           M169 175 L347 269 L536 174
           M167 349 L347 269 L538 348
           M167 349 L347 412 L538 348
           M345 120 L538 348
           M347 412 L536 174"
        fill="none"
        stroke="#343438"
        stroke-width="2"
        opacity="0.65"
      />
      <path
        d="M117 145 L175 112 L228 145 L173 179 Z
           M117 145 V208 L173 239 L173 179 Z"
        fill="url(#dark)"
      />
      <path
        d="M173 179 L228 145 V207 L173 239 Z"
        fill="url(#light)"
      />
      <path
        d="M291 241 L347 208 L402 240 L348 274 Z
           M291 241 V304 L348 338 L348 274 Z"
        fill="url(#dark)"
      />
      <path
        d="M348 274 L402 240 V303 L348 338 Z"
        fill="url(#warm)"
      />
      <circle cx="345" cy="120" r="24" fill="url(#light)" />
      <circle cx="347" cy="412" r="24" fill="url(#dark)" />
      <circle cx="536" cy="174" r="40" fill="url(#warm)" />
      <circle cx="538" cy="348" r="40" fill="url(#light)" />
      <circle cx="167" cy="349" r="32" fill="url(#dark)" />
    `,

    review: `
      <path
        d="M194 182 L591 125 L625 352 L540 367
           L544 438 L452 379 L219 411 Z"
        fill="url(#dark)"
      />
      <path
        d="M89 121 L485 68 L521 307 L286 340
           L205 418 L199 351 L123 362 Z"
        fill="url(#warm)"
      />
      <path
        d="M89 121 L485 68 L521 307 L286 340
           L205 418 L199 351 L123 362 Z"
        fill="url(#dots)"
        opacity="0.7"
      />
      <path
        d="M164 268 L192 264 L185 188 L157 192 Z"
        fill="#ede4d4"
      />
      <path
        d="M223 260 L252 256 L241 145 L212 149 Z"
        fill="#ede4d4"
      />
      <path
        d="M284 253 L313 249 L305 177 L276 181 Z"
        fill="#ede4d4"
      />
      <path
        d="M345 245 L374 241 L361 122 L332 126 Z"
        fill="#27282c"
      />
      <path
        d="M405 237 L434 233 L425 151 L396 155 Z"
        fill="#ede4d4"
      />
    `,

    pacman: `
      <path
        d="M108 115 H570 V396 H168 V180 H503 V333 H235"
        fill="none"
        stroke="#39383b"
        stroke-width="25"
        stroke-linejoin="miter"
        opacity="0.18"
      />
      <path
        d="M86 365 L395 460 L637 279 L328 190 Z"
        fill="url(#mesh)"
      />
      <path
        d="M345 258 L500 147
           A190 190 0 1 0 500 369 Z"
        fill="url(#warm)"
      />
      <path
        d="M345 258 L500 147
           A190 190 0 0 0 178 165 Z"
        fill="url(#light)"
      />
      <circle cx="471" cy="258" r="16" fill="#29292d" />
      <circle cx="536" cy="258" r="16" fill="#29292d" />
      <circle cx="601" cy="258" r="16" fill="#29292d" />
    `,

    mapping: `
      <path
        d="M69 316 L357 160 L650 319 L363 479 Z"
        fill="url(#light)"
      />
      <path
        d="M69 316 L357 160 L650 319 L363 479 Z"
        fill="url(#mesh)"
      />
      <path
        d="M158 262 L254 210 L350 264 L252 319 Z"
        fill="url(#warm)"
      />
      <path
        d="M158 262 V348 L252 402 V319 Z"
        fill="url(#dark)"
      />
      <path
        d="M252 319 L350 264 V350 L252 402 Z"
        fill="#be805e"
      />
      <path
        d="M332 150 L423 99 L512 149 L423 201 Z"
        fill="url(#light)"
      />
      <path
        d="M332 150 V299 L423 351 V201 Z"
        fill="url(#warm)"
      />
      <path
        d="M423 201 L512 149 V297 L423 351 Z"
        fill="url(#dark)"
      />
      <ellipse
        cx="361"
        cy="301"
        rx="276"
        ry="124"
        fill="none"
        stroke="#c55d43"
        stroke-width="2"
        stroke-dasharray="6 9"
      />
      <path
        d="M109 302 L423 99 L607 332 M109 302 L607 332"
        fill="none"
        stroke="#33343a"
        stroke-width="1.5"
      />
      <circle cx="109" cy="302" r="12" fill="#29292d" />
      <circle cx="607" cy="332" r="12" fill="#29292d" />
      <circle cx="423" cy="99" r="12" fill="#e77858" />
    `,

    copilot: `
      <circle cx="364" cy="242" r="190" fill="url(#dots)" />
      <path
        d="M119 168 L347 235 L583 161 L573 382
           L350 447 L129 381 Z"
        fill="url(#dark)"
      />
      <path
        d="M110 122 L347 195 L350 413 L126 342 Z"
        fill="url(#light)"
      />
      <path
        d="M347 195 L587 118 L571 339 L350 413 Z"
        fill="url(#warm)"
      />
      <path
        d="M347 195 L587 118 L571 339 L350 413 Z"
        fill="url(#mesh)"
      />
      <path
        d="M161 186 L290 228 M164 223 L295 265
           M168 260 L297 302"
        fill="none"
        stroke="#9c8167"
        stroke-width="5"
      />
      <path
        d="M255 86 L365 49 L473 89"
        fill="none"
        stroke="#2c2d31"
        stroke-width="2"
      />
      <circle cx="255" cy="86" r="20" fill="url(#warm)" />
      <circle cx="365" cy="49" r="25" fill="url(#dark)" />
      <circle cx="473" cy="89" r="20" fill="url(#light)" />
    `,

    medical: `
      <path
        d="M157 162 L468 84 L595 369 L284 451 Z"
        fill="url(#dark)"
      />
      <path
        d="M122 129 L433 51 L560 336 L249 418 Z"
        fill="url(#warm)"
      />
      <path
        d="M175 130 L414 71 L520 312 L281 375 Z"
        fill="url(#light)"
      />
      <path
        d="M175 130 L414 71 L520 312 L281 375 Z"
        fill="url(#dots)"
      />
      <path
        d="M298 147 H352 V205 H410 V259 H352
           V317 H298 V259 H240 V205 H298 Z"
        fill="#292b30"
        transform="rotate(-15 325 232)"
      />
      <path
        d="M153 394 L342 449 L582 400"
        fill="none"
        stroke="#c56148"
        stroke-width="3"
      />
      <circle cx="153" cy="394" r="12" fill="#292b30" />
      <circle cx="342" cy="449" r="12" fill="#292b30" />
      <circle cx="582" cy="400" r="12" fill="#292b30" />
    `,

    forensics: `
      <circle cx="442" cy="192" r="133" fill="url(#light)" />
      <path
        d="M76 304 L408 142 L636 320 L298 475 Z"
        fill="url(#warm)"
      />
      <path
        d="M76 304 L408 142 L636 320 L298 475 Z"
        fill="url(#mesh)"
      />
      <path
        d="M94 289 L179 289 L211 224 L247 340
           L284 98 L324 382 L365 179 L402 334
           L442 237 L477 294 L621 294
           L621 343 L479 343 L446 303 L404 398
           L366 247 L327 448 L285 166 L249 407
           L211 291 L185 342 L94 342 Z"
        fill="url(#dark)"
      />
      <path
        d="M283 84 V453"
        fill="none"
        stroke="#f3e6cb"
        stroke-width="2"
        stroke-dasharray="5 8"
      />
      <circle cx="283" cy="84" r="11" fill="#c8553c" />
    `,

    gesture: `
      <path
        d="M88 243 L346 62 L620 283 L365 457 Z"
        fill="url(#warm)"
        opacity="0.75"
      />
      <path
        d="M88 243 L346 62 L620 283 L365 457 Z"
        fill="url(#dots)"
      />
      <path
        d="M280 403 L230 337 L176 274 L200 243
           L265 292 L253 133 L285 119 L318 270
           L327 78 L361 79 L370 269 L401 103
           L434 113 L418 288 L462 176 L493 192
           L461 333 L408 399 L387 455 L291 447 Z"
        fill="url(#light)"
      />
      <path
        d="M280 403 L318 270 L370 269 L408 399
           L387 455 L291 447 Z"
        fill="url(#dark)"
      />
      <path
        d="M370 269 L418 288 L461 333 L408 399 Z"
        fill="url(#mesh)"
      />
      <path
        d="M195 244 L318 270 L370 269 L418 288 L480 190
           M318 270 L280 403 L408 399 L370 269"
        fill="none"
        stroke="#d27b55"
        stroke-width="3"
      />
      <circle cx="318" cy="270" r="9" fill="#d76648" />
      <circle cx="370" cy="269" r="9" fill="#d76648" />
      <circle cx="408" cy="399" r="9" fill="#d76648" />
    `
  };

  function createArtwork(kind, index) {
    const prefix = `art-${index}`;
    const body = artwork[kind];

    if (!body) {
      return "";
    }

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
            <stop offset="0%" stop-color="#efc88d" />
            <stop offset="52%" stop-color="#ee936b" />
            <stop offset="100%" stop-color="#e76756" />
          </linearGradient>

          <linearGradient
            id="${prefix}-dark"
            x1="0%"
            y1="20%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#24262c" />
            <stop offset="60%" stop-color="#38393c" />
            <stop offset="100%" stop-color="#9c8870" />
          </linearGradient>

          <radialGradient
            id="${prefix}-light"
            cx="27%"
            cy="20%"
            r="90%"
          >
            <stop offset="0%" stop-color="#fff1d4" />
            <stop offset="55%" stop-color="#e9d5b3" />
            <stop offset="100%" stop-color="#c3a180" />
          </radialGradient>

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
              fill="#303036"
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
              stroke="#393738"
              stroke-width="0.85"
              opacity="0.55"
            />
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
              baseFrequency="0.8"
              numOctaves="2"
              stitchTiles="stitch"
              seed="${index + 3}"
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

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionButton = document.getElementById("motion-toggle");
  const hero = document.querySelector(".hero");
  const rows = Array.from(document.querySelectorAll(".project-row"));
  let manuallyPaused = false;
  let pointerFrame = 0;
  let pointerX = 0;
  let previouslyClosedDetails = [];

  function motionEnabled() {
    return !motionPreference.matches && !manuallyPaused;
  }

  // The second copy fills the row as the first moves out of view.
  document.querySelectorAll(".project-track").forEach((track) => {
    Array.from(track.children).forEach((project) => {
      const clone = project.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("summary").forEach((summary) => {
        summary.tabIndex = -1;
      });
      track.appendChild(clone);
    });
    track.classList.add("is-looping");
  });

  document.querySelectorAll("[data-art]").forEach((element, index) => {
    element.innerHTML = createArtwork(element.dataset.art, index);
  });

  rows.forEach((row) => {
    row.addEventListener("keydown", (event) => {
      if (event.target !== row || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      row.scrollBy({
        left: event.key === "ArrowRight" ? 300 : -300,
        behavior: motionEnabled() ? "smooth" : "auto"
      });
    });
  });

  function resetParallax() {
    if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    hero.style.setProperty("--mx", "0px");
  }

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || !motionEnabled()) return;
    pointerX = event.clientX;
    if (pointerFrame) return;
    pointerFrame = window.requestAnimationFrame(() => {
      pointerFrame = 0;
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${((pointerX - bounds.left) / bounds.width - 0.5) * 48}px`);
    });
  });
  hero.addEventListener("pointerleave", resetParallax);

  function updateMotionControls() {
    const enabled = motionEnabled();
    document.body.classList.toggle("motion-paused", !enabled);
    motionButton.disabled = motionPreference.matches;
    motionButton.setAttribute("aria-pressed", String(!enabled));
    motionButton.textContent = motionPreference.matches
      ? "Reduced motion"
      : enabled ? "Pause motion" : "Enable motion";
    if (!enabled) resetParallax();
  }

  motionButton.hidden = false;
  motionButton.addEventListener("click", () => {
    manuallyPaused = !manuallyPaused;
    updateMotionControls();
  });
  motionPreference.addEventListener("change", updateMotionControls);
  updateMotionControls();

  document.addEventListener("visibilitychange", () => {
    document.body.classList.toggle("tab-hidden", document.hidden);
    if (document.hidden) resetParallax();
  });

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => window.print());
  });

  window.addEventListener("beforeprint", () => {
    resetParallax();
    previouslyClosedDetails = Array.from(document.querySelectorAll("details:not([open])"));
    previouslyClosedDetails.forEach((details) => { details.open = true; });
  });

  window.addEventListener("afterprint", () => {
    previouslyClosedDetails.forEach((details) => { details.open = false; });
    previouslyClosedDetails = [];
  });
})();
