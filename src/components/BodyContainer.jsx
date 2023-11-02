import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function BodyContainer({ children, idName }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const image1Controls = useAnimation();
  const image2Controls = useAnimation();

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
          src="/astro/images/walkthrough.png"
          alt="Pavillion Rendering Walkthrough"
          id="shield-image"
          // initial={{ opacity: 0, x: -25 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.75, delay: 0.9 }}
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
          // initial={{ opacity: 0, x: 95 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.75, delay: 0.35 }}

          variants={{
            hidden: { opacity: 0, x: 95 },
            visibleYellow: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={image2Controls}
          transition={{ duration: 0.75, delay: 0.6 }}
        />
        {/* <motion.img
          layout={true}
          src="/astro/images/yellow-bg-small.svg"
          alt="yellow background"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          id="yellow-bg"
          initial="hidden"
          animate={image2Controls} // Use the individual control for the second image
          transition={{ duration: 0.5 }}
        /> */}
      </div>
    </div>
  );
}
