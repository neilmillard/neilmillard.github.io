import React from 'react';

// Mock for ExportedImage component
// @ts-ignore
const ExportedImage = ({ src, alt, width, height, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default ExportedImage;
