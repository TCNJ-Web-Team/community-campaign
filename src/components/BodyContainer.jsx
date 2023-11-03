import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const imageSources = [
  {
    src: "/astro/images/walkthrough-full.jpg",
    mediaQuery: "(max-width: 1050px)",
  },
  { src: "/astro/images/walkthrough.png" }, // Default source
];

export default function BodyContainer({ children, idName }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const image1Controls = useAnimation();
  const image2Controls = useAnimation();
  const [source, setSource] = useState(
    imageSources[imageSources.length - 1].src
  );

  useEffect(() => {
    const updateSource = () => {
      for (const source of imageSources) {
        if (source.mediaQuery && window.matchMedia(source.mediaQuery).matches) {
          setSource(source.src);
          return;
        }
      }
      setSource(imageSources[imageSources.length - 1].src);
    };

    // Make the initial source selection and listen for window resize events
    updateSource();
    window.addEventListener("resize", updateSource);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSource);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // console.log("in view");
      mainControls.start("visible");
      image1Controls.start("visibleShield");
      image2Controls.start("visibleYellow");
    }
  }, [isInView]);

  return (
    <div className="wrapper" id={idName} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-container"
      >
        {children}
      </motion.div>
      <div className="overlay-container">
        <motion.img
          src={source}
          alt="Pavillion Rendering Walkthrough"
          id="shield-image"
          variants={{
            hidden: { opacity: 0, x: -25 },
            visibleShield: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={image1Controls}
          transition={{ duration: 0.75, delay: 0.9 }}
        />
        <motion.img
          src="/astro/images/yellow-bg-small.jpg"
          alt="yellow background"
          id="yellow-bg"
          variants={{
            hidden: { opacity: 0, x: 95 },
            visibleYellow: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={image2Controls}
          transition={{ duration: 0.75, delay: 0.6 }}
        />
      </div>
    </div>
  );
}
