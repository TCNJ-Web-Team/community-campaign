import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = () => {
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

  return <div className="parallax-container" ref={component}></div>;
};

export default ParallaxContainer;
