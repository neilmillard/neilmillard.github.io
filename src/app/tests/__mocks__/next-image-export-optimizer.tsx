/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Mock for ExportedImage component
interface ExportedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ExportedImage = ({ src, alt, width, height, className, ...props }: ExportedImageProps) => {
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
