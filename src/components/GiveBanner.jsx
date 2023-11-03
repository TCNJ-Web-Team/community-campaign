import React from "react";
import { motion } from "framer-motion";
import Accodion from "./Accordion";

const GiveBanner = ({ children }) => {
  return (
    <div id="opportunties" className="banner">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {children}
        {/* <h4>View the full list of naming opportunities +</h4> */}
        <Accodion
          idName="naming-opps"
          header="View the full list of naming opportunities"
        >
          <p>Content here</p>
        </Accodion>
      </motion.div>
    </div>
  );
};

export default GiveBanner;
