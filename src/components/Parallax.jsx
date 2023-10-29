import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// const gsap = require("gsap");
// const ScrollTrigger = require("gsap/ScrollTrigger");
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const ScrollTrigger = require("gsap/ScrollTrigger");

// import "https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js";
gsap.registerPlugin(ScrollTrigger);

export default function Parallax() {
  let component = useRef();

  useEffect(() => {
    let scrollCtx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-container",
          scrub: true,
          markers: true,
          start: "top 60%",
        },
      });
    }, component);
    return () => scrollCtx.revert();
  }, []);

  return (
    <div className="parallax-container" ref={component}>
      Testing
    </div>
  );
}
