// import { Parallax } from "react-parallax";

// const ParallaxContainer = ({ image, alt, strength = 100, children, align }) => (
//   <Parallax bgImage={image} bgImageAlt={alt} strength={strength}>
//     <div className={align}>{children}</div>
//   </Parallax>
// );

// // https://www.npmjs.com/package/react-parallax
// export default ParallaxContainer;

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function ParallaxContainer({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      // console.log("in view");
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="wraper" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
