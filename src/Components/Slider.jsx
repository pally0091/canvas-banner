/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

const Slider = ({ children, className }) => {
  const slider = useRef(null);

  const handleMouseScroll = (e) => {
    if (slider.current) {
      slider.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (slider.current) {
      slider.current.addEventListener("wheel", handleMouseScroll, {
        passive: false,
      });
    }

    return () => {
      if (slider.current) {
        slider.current.removeEventListener("wheel", handleMouseScroll);
      }
    };
  }, []);

  return (
    <div className={`flex flex-row ${className}`}>
      <div
        className="w-full mx-auto overflow-x-auto whitespace-nowrap scrollbar pt-5"
        ref={slider}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
