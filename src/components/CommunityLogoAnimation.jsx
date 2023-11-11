import { useLayoutEffect, useRef, useState, useEffect } from "react";

// import { gsap } from "gsap";

import "../styles/logo-styles.scss";

const CommunityLogoAnimation = ({ scholarship }) => {
  let logoComponent = useRef();
  // console.log(scholarship);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tlLine = gsap.timeline();
      tlLine.fromTo(
        "#logo",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.75,
          delay: 0.25,
          ease: "power1.out", // Apply Power1.easeInOut easing
        },
        0 // start time in tl
      );
      // COMMUNITY ANIMTION 1

      // tlLine.fromTo(
      //   ".cls-2",
      //   { autoAlpha: 0, y: 20 },
      //   {
      //     autoAlpha: 1,
      //     y: 0,
      //     stagger: 0.25,
      //     duration: 0.75,
      //     delay: 0.25,
      //     ease: "power1.out", // Apply Power1.easeInOut easing
      //   },
      //   0.75 // start time in tl
      // );
      tlLine.fromTo(
        "#heart",
        { autoAlpha: 0, scale: 1 },
        {
          autoAlpha: 1,

          duration: 0.5,
          scale: 1.1,
          transformOrigin: () => "50% 50%",

          ease: "power1.in", // Apply Power1.easeInOut easing
        },
        1 // start time in tl
      );
      tlLine.to(
        "#heart",
        {
          scale: 1,
          duration: 0.75,
          ease: "power1.out",
          transformOrigin: () => "50% 50%",
        },
        1.5
      );

      tlLine.to(
        ".cls-1",
        {
          strokeDashoffset: 0,
          duration: 0.75,
          ease: "power2.out",
        },
        1
      );

      // tlLine.to(
      //   "#right-line",
      //   {
      //     strokeDashoffset: 0,
      //     duration: 1,

      //     ease: "power1.inOut",
      //   },
      //   0.5
      // );
    }, logoComponent); // <- selector scoping
    return () => ctx.revert();
  }, []);

  return (
    <div id="svg-container" ref={logoComponent}>
      {!scholarship && (
        <svg
          id="logo"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380.57 134.81"
        >
          <g className="gsapFadeUp">
            <line
              id="left-line"
              className="cls-1"
              x1="118.83"
              y1="119.99"
              x2="161.86"
              y2="119.99"
            />
            <line
              id="right-line"
              className="cls-1"
              x1="216.84"
              y1="119.99"
              x2="259.87"
              y2="119.99"
            />
          </g>
          <path
            id="heart"
            className="cls-2"
            d="m189.35,134.81l-.48-.33c-.05-.03-.09-.06-.13-.09-.86-.63-1.7-1.29-2.51-1.96-3.59-3-6.61-6.28-8.73-9.5-1.47-2.24-2.22-4.28-2.3-6.25-.04-1.21.18-2.4.66-3.53.64-1.51,1.46-2.64,2.5-3.44,1.21-.94,2.72-1.42,4.48-1.42,2.44,0,4.67,1.41,6.51,4.11,1.83-2.7,4.06-4.11,6.5-4.11,1.77,0,3.28.48,4.49,1.42,1.04.81,1.86,1.94,2.5,3.44.48,1.13.7,2.32.66,3.53-.07,1.97-.82,4.01-2.3,6.25-2.12,3.22-5.14,6.51-8.73,9.5-.8.67-1.65,1.33-2.51,1.96-.04.03-.08.06-.13.09l-.48.33Z"
          />
          <g>
            <path
              className="cls-3"
              d="m87.85,18.81h3.33V3.03h-3.33v-1.98h17.07v6.57h-1.44c-1.26-3.84-1.77-4.59-4.08-4.59h-5.13v7.11h1.71c2.22,0,2.64-.36,3.06-3.06h1.59v7.98h-1.59c-.36-2.82-.84-3.24-3.06-3.24h-1.71v6.99h3.66v1.98h-10.08v-1.98Z"
            />
            <path
              className="cls-3"
              d="m106.48,13.98c0-4.17,2.76-7.17,6.87-7.17s6.84,2.88,6.84,7.05-2.76,7.2-6.84,7.2c-4.29,0-6.87-2.88-6.87-7.08Zm10.59-.06c0-3.78-1.47-5.49-3.87-5.49s-3.6,1.71-3.6,5.49,1.47,5.52,3.87,5.52,3.6-1.74,3.6-5.52Z"
            />
            <path
              className="cls-3"
              d="m122.86,18.81h2.19v-9.78h-2.19v-1.98h4.95v3.18c.69-2.31,2.49-3.36,4.05-3.36s2.4,1.05,2.4,2.34c0,1.05-.78,1.95-1.8,1.95s-1.89-.63-1.89-1.77c0-.15.03-.33.06-.51-1.35-.06-2.28,1.47-2.76,3.27v6.66h2.61v1.98h-7.62v-1.98Z"
            />
            <path
              className="cls-3"
              d="m146.77,3.48v3.72h4.5v1.83h-4.5v8.1c0,1.35.39,2.01,1.65,2.01.84,0,1.5-.78,2.1-2.37l1.35.57c-.78,2.64-2.37,3.72-4.29,3.72-2.4,0-3.63-1.41-3.63-3.66v-8.37h-2.7v-1.83h2.7v-3.42l2.82-.3Z"
            />
            <path
              className="cls-3"
              d="m153.16,18.81h2.19V2.34h-2.19V.18h5.01v10.29c1.56-2.58,3.12-3.6,5.1-3.6,2.19,0,3.66,1.59,3.66,4.29v7.65h2.19v1.98h-7.02v-1.98h2.01v-6.63c0-1.02-.24-1.89-.75-2.4-.39-.39-.93-.6-1.62-.6-1.68,0-3.57,1.65-3.57,4.41v5.22h2.01v1.98h-7.02v-1.98Z"
            />
            <path
              className="cls-3"
              d="m174.31,14.1c.09,3.39,1.56,5.07,4.2,5.07,1.68,0,2.94-.72,3.78-2.55h1.44c-.78,2.94-2.94,4.44-5.97,4.44-4.2,0-6.57-3.03-6.57-6.99s2.85-7.26,6.75-7.26c4.11,0,5.94,3.66,5.85,7.29h-9.48Zm.03-1.41h6.57c-.21-2.55-1.08-4.29-3.18-4.29-1.89,0-3.15,1.2-3.39,4.29Z"
            />
            <path
              className="cls-3"
              d="m202.06,1.05v1.98h-3.33v15.78h4.14c2.43,0,2.88-.51,4.38-5.37h1.44v7.35h-16.38v-1.98h3.33V3.03h-3.33v-1.98h9.75Z"
            />
            <path
              className="cls-3"
              d="m211.33,13.98c0-4.17,2.76-7.17,6.87-7.17s6.84,2.88,6.84,7.05-2.76,7.2-6.84,7.2c-4.29,0-6.87-2.88-6.87-7.08Zm10.59-.06c0-3.78-1.47-5.49-3.87-5.49s-3.6,1.71-3.6,5.49,1.47,5.52,3.87,5.52,3.6-1.74,3.6-5.52Z"
            />
            <path
              className="cls-3"
              d="m228.28,9.03h-1.92v-1.98h7.26v1.98h-2.34l3.24,9.21h.12l3.27-9.21h-1.95v-1.98h5.79v1.98h-1.74l-4.62,11.94h-2.64l-4.47-11.94Z"
            />
            <path
              className="cls-3"
              d="m246.19,14.1c.09,3.39,1.56,5.07,4.2,5.07,1.68,0,2.94-.72,3.78-2.55h1.44c-.78,2.94-2.94,4.44-5.97,4.44-4.2,0-6.57-3.03-6.57-6.99s2.85-7.26,6.75-7.26c4.11,0,5.94,3.66,5.85,7.29h-9.48Zm.03-1.41h6.57c-.21-2.55-1.08-4.29-3.18-4.29-1.89,0-3.15,1.2-3.39,4.29Z"
            />
            <path
              className="cls-3"
              d="m264.37,13.98c0-4.17,2.76-7.17,6.87-7.17s6.84,2.88,6.84,7.05-2.76,7.2-6.84,7.2c-4.29,0-6.87-2.88-6.87-7.08Zm10.59-.06c0-3.78-1.47-5.49-3.87-5.49s-3.6,1.71-3.6,5.49,1.47,5.52,3.87,5.52,3.6-1.74,3.6-5.52Z"
            />
            <path
              className="cls-3"
              d="m280.69,18.81h2.19v-9.78h-2.7v-1.83h2.7v-.63c0-4.74,3.06-6.57,5.82-6.57,2.46,0,3.87,1.2,3.87,2.7,0,.96-.69,1.86-1.65,1.86-1.08,0-1.83-.6-1.83-1.86,0-.24.09-.69.24-.99-.24-.15-.54-.24-1.05-.24-1.53,0-2.58,1.05-2.58,4.95v.78h3.96v1.83h-3.96v9.78h3.12v1.98h-8.13v-1.98Z"
            />
            <path
              className="cls-2"
              d="m0,59.55c0-2.62.47-5.22,1.42-7.78.95-2.56,2.33-4.85,4.15-6.87,1.82-2.02,4.04-3.65,6.66-4.91,2.62-1.25,5.61-1.88,8.96-1.88,3.96,0,7.38.87,10.27,2.6,2.89,1.74,5.04,4,6.45,6.78l-6.42,4.42c-.57-1.21-1.25-2.23-2.06-3.06-.81-.83-1.68-1.48-2.6-1.97-.93-.48-1.9-.84-2.91-1.06-1.01-.22-2-.33-2.97-.33-2.1,0-3.93.42-5.48,1.27-1.55.85-2.85,1.95-3.88,3.3-1.03,1.35-1.81,2.89-2.33,4.6-.53,1.72-.79,3.42-.79,5.12,0,1.9.3,3.72.91,5.48.61,1.76,1.46,3.3,2.57,4.63,1.11,1.33,2.44,2.4,4,3.21,1.55.81,3.26,1.21,5.12,1.21.97,0,1.98-.12,3.03-.36,1.05-.24,2.05-.63,3-1.15.95-.52,1.83-1.2,2.63-2.03.81-.83,1.45-1.83,1.94-3l6.84,3.94c-.69,1.62-1.67,3.04-2.94,4.27-1.27,1.23-2.71,2.27-4.3,3.12-1.6.85-3.3,1.49-5.12,1.94s-3.59.67-5.33.67c-3.07,0-5.87-.65-8.42-1.94-2.54-1.29-4.73-2.98-6.57-5.06-1.84-2.08-3.27-4.44-4.3-7.09-1.03-2.64-1.54-5.34-1.54-8.09Z"
            />
            <path
              className="cls-2"
              d="m63.17,81.65c-3.15,0-6.01-.62-8.57-1.85-2.56-1.23-4.76-2.87-6.6-4.91-1.84-2.04-3.26-4.37-4.27-7-1.01-2.62-1.51-5.31-1.51-8.05s.53-5.61,1.6-8.24c1.07-2.62,2.54-4.95,4.42-6.96,1.88-2.02,4.11-3.62,6.69-4.81,2.58-1.19,5.39-1.79,8.42-1.79s5.94.64,8.51,1.91c2.56,1.27,4.75,2.94,6.57,5s3.23,4.4,4.24,7.02c1.01,2.62,1.51,5.29,1.51,7.99,0,2.87-.52,5.6-1.57,8.21-1.05,2.6-2.5,4.91-4.36,6.9-1.86,2-4.08,3.59-6.66,4.78-2.58,1.19-5.39,1.79-8.42,1.79Zm-12.48-21.8c0,1.86.28,3.65.85,5.39.56,1.74,1.38,3.27,2.45,4.6,1.07,1.33,2.38,2.4,3.94,3.21,1.55.81,3.32,1.21,5.3,1.21s3.81-.41,5.36-1.24c1.55-.83,2.87-1.93,3.94-3.3,1.07-1.37,1.88-2.92,2.42-4.63.55-1.72.82-3.46.82-5.24s-.29-3.65-.88-5.39c-.59-1.74-1.41-3.27-2.48-4.6-1.07-1.33-2.38-2.39-3.94-3.18-1.55-.79-3.3-1.18-5.24-1.18s-3.82.41-5.39,1.24c-1.57.83-2.89,1.92-3.94,3.27-1.05,1.35-1.85,2.89-2.39,4.6-.54,1.72-.82,3.46-.82,5.24Z"
            />
            <path
              className="cls-2"
              d="m126.76,81.35v-28.46l-11.08,21.2h-4.54l-11.08-21.2v28.46h-8.36v-43h8.96l12.72,24.47,12.84-24.47h8.9v43h-8.36Z"
            />
            <path
              className="cls-2"
              d="m180.23,81.35v-28.46l-11.08,21.2h-4.54l-11.08-21.2v28.46h-8.36v-43h8.96l12.72,24.47,12.84-24.47h8.9v43h-8.36Z"
            />
            <path
              className="cls-2"
              d="m215.78,74.27c1.98,0,3.64-.4,5-1.21,1.35-.81,2.44-1.86,3.27-3.15.83-1.29,1.41-2.78,1.76-4.45.34-1.68.51-3.4.51-5.18v-21.92h8.3v21.92c0,2.95-.35,5.71-1.06,8.3-.71,2.58-1.82,4.85-3.33,6.78-1.51,1.94-3.46,3.47-5.84,4.6-2.38,1.13-5.23,1.7-8.54,1.7s-6.35-.6-8.75-1.79c-2.4-1.19-4.35-2.77-5.84-4.72-1.49-1.96-2.57-4.23-3.24-6.81-.67-2.58-1-5.27-1-8.05v-21.92h8.36v21.92c0,1.82.17,3.56.51,5.24.34,1.68.93,3.16,1.76,4.45.83,1.29,1.91,2.33,3.24,3.12,1.33.79,2.97,1.18,4.91,1.18Z"
            />
            <path
              className="cls-2"
              d="m251.45,53.8v27.56h-8.36v-43h6.48l22.41,28.22v-28.16h8.36v42.94h-6.78l-22.11-27.56Z"
            />
            <path className="cls-2" d="m289.37,81.35v-43h8.36v43h-8.36Z" />
            <path
              id="left-line"
              className="cls-2"
              d="m338.91,45.68h-13.75v35.67h-8.3v-35.67h-13.75v-7.33h35.79v7.33Z"
            />
            <path
              className="cls-2"
              d="m350.17,38.35l10.6,20.71,10.78-20.71h9.02l-15.62,27.98v15.02h-8.3v-15.14l-15.56-27.86h9.08Z"
            />
          </g>
        </svg>
      )}
      {scholarship && (
        <svg
          id="logo"
          data-name="For the Love of Lions"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 204.72 134.81"
        >
          <g className="gsapFadeUp">
            <line
              id="left-line"
              className="cls-1"
              x1="30.98"
              y1="119.99"
              x2="74.01"
              y2="119.99"
            />
            <line
              id="right-line"
              className="cls-1"
              x1="128.99"
              y1="119.99"
              x2="172.02"
              y2="119.99"
            />
          </g>
          <path
            id="heart"
            className="cls-2"
            d="m101.5,134.81l-.48-.33c-.05-.03-.09-.06-.13-.09-.86-.63-1.7-1.29-2.51-1.96-3.59-3-6.61-6.28-8.73-9.5-1.47-2.24-2.22-4.28-2.3-6.25-.04-1.21.18-2.4.66-3.53.64-1.51,1.46-2.64,2.5-3.44,1.21-.94,2.72-1.42,4.48-1.42,2.44,0,4.67,1.41,6.51,4.11,1.83-2.7,4.06-4.11,6.5-4.11,1.77,0,3.28.48,4.49,1.42,1.04.81,1.86,1.94,2.5,3.44.48,1.13.7,2.32.66,3.53-.07,1.97-.82,4.01-2.3,6.25-2.12,3.22-5.14,6.51-8.73,9.5-.8.67-1.65,1.33-2.51,1.96-.04.03-.08.06-.13.09l-.48.33Z"
          />
          <g>
            <path
              className="cls-3"
              d="m0,18.81h3.33V3.03H0v-1.98h17.07v6.57h-1.44c-1.26-3.84-1.77-4.59-4.08-4.59h-5.13v7.11h1.71c2.22,0,2.64-.36,3.06-3.06h1.59v7.98h-1.59c-.36-2.82-.84-3.24-3.06-3.24h-1.71v6.99h3.66v1.98H0v-1.98Z"
            />
            <path
              className="cls-3"
              d="m18.63,13.98c0-4.17,2.76-7.17,6.87-7.17s6.84,2.88,6.84,7.05-2.76,7.2-6.84,7.2c-4.29,0-6.87-2.88-6.87-7.08Zm10.59-.06c0-3.78-1.47-5.49-3.87-5.49s-3.6,1.71-3.6,5.49,1.47,5.52,3.87,5.52,3.6-1.74,3.6-5.52Z"
            />
            <path
              className="cls-3"
              d="m35.01,18.81h2.19v-9.78h-2.19v-1.98h4.95v3.18c.69-2.31,2.49-3.36,4.05-3.36s2.4,1.05,2.4,2.34c0,1.05-.78,1.95-1.8,1.95s-1.89-.63-1.89-1.77c0-.15.03-.33.06-.51-1.35-.06-2.28,1.47-2.76,3.27v6.66h2.61v1.98h-7.62v-1.98Z"
            />
            <path
              className="cls-3"
              d="m58.92,3.48v3.72h4.5v1.83h-4.5v8.1c0,1.35.39,2.01,1.65,2.01.84,0,1.5-.78,2.1-2.37l1.35.57c-.78,2.64-2.37,3.72-4.29,3.72-2.4,0-3.63-1.41-3.63-3.66v-8.37h-2.7v-1.83h2.7v-3.42l2.82-.3Z"
            />
            <path
              className="cls-3"
              d="m65.31,18.81h2.19V2.34h-2.19V.18h5.01v10.29c1.56-2.58,3.12-3.6,5.1-3.6,2.19,0,3.66,1.59,3.66,4.29v7.65h2.19v1.98h-7.02v-1.98h2.01v-6.63c0-1.02-.24-1.89-.75-2.4-.39-.39-.93-.6-1.62-.6-1.68,0-3.57,1.65-3.57,4.41v5.22h2.01v1.98h-7.02v-1.98Z"
            />
            <path
              className="cls-3"
              d="m86.46,14.1c.09,3.39,1.56,5.07,4.2,5.07,1.68,0,2.94-.72,3.78-2.55h1.44c-.78,2.94-2.94,4.44-5.97,4.44-4.2,0-6.57-3.03-6.57-6.99s2.85-7.26,6.75-7.26c4.11,0,5.94,3.66,5.85,7.29h-9.48Zm.03-1.41h6.57c-.21-2.55-1.08-4.29-3.18-4.29-1.89,0-3.15,1.2-3.39,4.29Z"
            />
            <path
              className="cls-3"
              d="m114.21,1.05v1.98h-3.33v15.78h4.14c2.43,0,2.88-.51,4.38-5.37h1.44v7.35h-16.38v-1.98h3.33V3.03h-3.33v-1.98h9.75Z"
            />
            <path
              className="cls-3"
              d="m123.48,13.98c0-4.17,2.76-7.17,6.87-7.17s6.84,2.88,6.84,7.05-2.76,7.2-6.84,7.2c-4.29,0-6.87-2.88-6.87-7.08Zm10.59-.06c0-3.78-1.47-5.49-3.87-5.49s-3.6,1.71-3.6,5.49,1.47,5.52,3.87,5.52,3.6-1.74,3.6-5.52Z"
            />
            <path
              className="cls-3"
              d="m140.43,9.03h-1.92v-1.98h7.26v1.98h-2.34l3.24,9.21h.12l3.27-9.21h-1.95v-1.98h5.79v1.98h-1.74l-4.62,11.94h-2.64l-4.47-11.94Z"
            />
            <path
              className="cls-3"
              d="m158.34,14.1c.09,3.39,1.56,5.07,4.2,5.07,1.68,0,2.94-.72,3.78-2.55h1.44c-.78,2.94-2.94,4.44-5.97,4.44-4.2,0-6.57-3.03-6.57-6.99s2.85-7.26,6.75-7.26c4.11,0,5.94,3.66,5.85,7.29h-9.48Zm.03-1.41h6.57c-.21-2.55-1.08-4.29-3.18-4.29-1.89,0-3.15,1.2-3.39,4.29Z"
            />
            <path
              className="cls-3"
              d="m176.52,13.98c0-4.17,2.76-7.17,6.87-7.17s6.84,2.88,6.84,7.05-2.76,7.2-6.84,7.2c-4.29,0-6.87-2.88-6.87-7.08Zm10.59-.06c0-3.78-1.47-5.49-3.87-5.49s-3.6,1.71-3.6,5.49,1.47,5.52,3.87,5.52,3.6-1.74,3.6-5.52Z"
            />
            <path
              className="cls-3"
              d="m192.84,18.81h2.19v-9.78h-2.7v-1.83h2.7v-.63c0-4.74,3.06-6.57,5.82-6.57,2.46,0,3.87,1.2,3.87,2.7,0,.96-.69,1.86-1.65,1.86-1.08,0-1.83-.6-1.83-1.86,0-.24.09-.69.24-.99-.24-.15-.54-.24-1.05-.24-1.53,0-2.58,1.05-2.58,4.95v.78h3.96v1.83h-3.96v9.78h3.12v1.98h-8.13v-1.98Z"
            />
            <path
              className="cls-2"
              d="m11.99,81.35v-43h8.36v35.67h21.92v7.33H11.99Z"
            />
            <path className="cls-2" d="m48.44,81.35v-43h8.36v43h-8.36Z" />
            <path
              className="cls-2"
              d="m85.21,81.65c-3.15,0-6.01-.62-8.57-1.85-2.56-1.23-4.76-2.87-6.6-4.91-1.84-2.04-3.26-4.37-4.27-7-1.01-2.62-1.51-5.31-1.51-8.05s.53-5.61,1.6-8.24c1.07-2.62,2.54-4.95,4.42-6.96,1.88-2.02,4.11-3.62,6.69-4.81,2.58-1.19,5.39-1.79,8.42-1.79s5.94.64,8.51,1.91c2.56,1.27,4.75,2.94,6.57,5,1.82,2.06,3.23,4.4,4.24,7.02,1.01,2.62,1.51,5.29,1.51,7.99,0,2.87-.53,5.6-1.57,8.21-1.05,2.6-2.5,4.91-4.36,6.9s-4.08,3.59-6.66,4.78c-2.58,1.19-5.39,1.79-8.42,1.79Zm-12.48-21.8c0,1.86.28,3.65.85,5.39.56,1.74,1.38,3.27,2.45,4.6,1.07,1.33,2.38,2.4,3.94,3.21,1.55.81,3.32,1.21,5.3,1.21s3.81-.41,5.36-1.24c1.55-.83,2.87-1.93,3.94-3.3,1.07-1.37,1.88-2.92,2.42-4.63.54-1.72.82-3.46.82-5.24s-.29-3.65-.88-5.39c-.58-1.74-1.41-3.27-2.48-4.6-1.07-1.33-2.38-2.39-3.94-3.18-1.55-.79-3.3-1.18-5.24-1.18s-3.82.41-5.39,1.24c-1.57.83-2.89,1.92-3.94,3.27-1.05,1.35-1.85,2.89-2.39,4.6-.54,1.72-.82,3.46-.82,5.24Z"
            />
            <path
              className="cls-2"
              d="m122.09,53.8v27.56h-8.36v-43h6.48l22.41,28.22v-28.16h8.36v42.94h-6.78l-22.11-27.56Z"
            />
            <path
              className="cls-2"
              d="m186.65,49.62c-.28-.28-.8-.67-1.54-1.15-.75-.48-1.66-.96-2.73-1.42-1.07-.46-2.23-.86-3.48-1.18-1.25-.32-2.52-.48-3.82-.48-2.3,0-4.02.42-5.15,1.27-1.13.85-1.7,2.04-1.7,3.57,0,.89.21,1.63.64,2.21.42.59,1.04,1.1,1.85,1.54.81.44,1.83.85,3.06,1.21,1.23.36,2.65.75,4.27,1.15,2.1.57,4.01,1.17,5.72,1.82,1.72.65,3.17,1.45,4.36,2.42,1.19.97,2.11,2.13,2.76,3.48.65,1.35.97,3.02.97,5,0,2.3-.43,4.27-1.3,5.9-.87,1.63-2.04,2.96-3.51,3.97-1.47,1.01-3.17,1.75-5.09,2.21-1.92.46-3.93.7-6.03.7-3.23,0-6.42-.48-9.57-1.45-3.15-.97-5.98-2.34-8.48-4.12l3.69-7.21c.36.36,1.02.84,1.97,1.42.95.59,2.07,1.17,3.36,1.76,1.29.59,2.72,1.08,4.3,1.48,1.57.4,3.19.61,4.84.61,4.6,0,6.9-1.47,6.9-4.42,0-.93-.26-1.72-.79-2.36-.53-.65-1.27-1.21-2.24-1.7s-2.14-.93-3.51-1.33c-1.37-.4-2.91-.85-4.6-1.33-2.06-.56-3.85-1.18-5.36-1.85-1.51-.67-2.78-1.45-3.79-2.36-1.01-.91-1.77-1.96-2.27-3.15-.5-1.19-.76-2.61-.76-4.27,0-2.18.4-4.12,1.21-5.81s1.93-3.11,3.36-4.24c1.43-1.13,3.1-1.99,5-2.57,1.9-.58,3.94-.88,6.12-.88,3.03,0,5.81.48,8.36,1.42,2.54.95,4.76,2.07,6.66,3.36l-3.69,6.78Z"
            />
          </g>
        </svg>
      )}
    </div>
  );
};
export default CommunityLogoAnimation;
