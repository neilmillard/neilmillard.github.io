/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Mock for ExportedImage component
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
