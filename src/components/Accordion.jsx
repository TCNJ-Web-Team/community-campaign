import { useState } from "react";
import "../styles/accordion-styles.scss";

export default function Accodion({ children, header, idName }) {
  const [open, setOpen] = useState(false);

  const onAccordionClick = () => {
    // console.log(event);
    setOpen(!open);
  };
  return (
    <div className="accordion" id={idName}>
      <h2
        className={`${
          open ? "accordion-header start-open active test" : "accordion-header"
        }`}
        onClick={onAccordionClick}
      >
        {header}
      </h2>
      <div
        className={`${
          open ? "accordion-content start-open active" : "accordion-content"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
