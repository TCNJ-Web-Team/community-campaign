// import React from "react";
// import { Parallax } from "react-parallax";

// const ParallaxContainer = ({ image, alt, strength = 100, children, align }) => (
//   <Parallax bgImage={image} bgImageAlt={alt} strength={strength}>
//     <div className={align}>{children}</div>
//   </Parallax>
// );

// // https://www.npmjs.com/package/react-parallax
// export default ParallaxContainer;

import { motion } from "framer-motion";

export default function ParallaxContainer({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
