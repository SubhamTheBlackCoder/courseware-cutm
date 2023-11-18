import React, { useRef } from "react";

const AutoResize = ({ value, onChange, placeholder }) => {
  const textAreaRef = useRef(null);

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleChange = (e) => {
    onChange(e);
    adjustHeight();
  };

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{
        overflow: "hidden",
        resize: "none",
        height: "auto",
        minHeight: "60px",
      }}
    />
  );
};

export default AutoResize;
