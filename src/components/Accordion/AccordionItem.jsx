import React, { useState } from "react";

import { TfiPlus } from "react-icons/tfi";
// import { RxCross1 } from "react-icons/rx";

import "./Accordion.css";

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        <div className={`accordion-title ${isActive ? " text-[#f4843f]" : ""}`}>
          {title}
        </div>
        <div className="accordion-button">
          <TfiPlus className={`${isActive ? "active" : ""}`} />
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
