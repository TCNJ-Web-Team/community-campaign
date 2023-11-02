import React from "react";
import { motion } from "framer-motion";

const GiveBanner = ({ children }) => {
  return (
    <div className="banner">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GiveBanner;
