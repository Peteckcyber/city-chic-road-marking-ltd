import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
};

export default function Image({ src, alt = "", width, height, style, className, ...rest }: Props) {
  // Simple shim for Next.js Image — uses native <img>. Keeps width/height when provided.
  const imgStyle = style || {};
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={imgStyle as React.CSSProperties}
      className={className}
      {...rest}
    />
  );
}
