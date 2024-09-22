import React, { useState } from "react";

const ProgressiveImage = ({ src, alt, ...props }) => {
  const [highResSrc, setHighResSrc] = useState(null);

  // When the high-res image finishes loading, update the state to display it
  const handleLoad = (event) => {
    setHighResSrc(event.target.src);
  };

  return (
    <img
      {...props}
      src={highResSrc || `${src}?blur`}
      style={{
        filter: highResSrc ? "none" : "blur(20px)",
        transition: "filter 0.3s ease-in-out",
      }}
      onLoad={handleLoad}
      alt={alt}
    />
  );
};

export default ProgressiveImage;
