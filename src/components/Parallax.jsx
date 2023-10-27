import React from "react";
import { Parallax } from "react-parallax";

const ParallaxContainer = ({ image, alt, strength = 100, children, align }) => (
  <Parallax bgImage={image} bgImageAlt={alt} strength={strength}>
    <div className={align}>{children}</div>
  </Parallax>
);

// https://www.npmjs.com/package/react-parallax
export default ParallaxContainer;
