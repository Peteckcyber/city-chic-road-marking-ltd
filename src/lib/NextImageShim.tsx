import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
};

export default function Image({
  src,
  alt = "",
  width,
  height,
  fill,
  // Next.js-only props (ignored in this shim)
  priority: _priority,
  quality: _quality,
  placeholder: _placeholder,
  style,
  className,
  ...rest
}: Props) {
  // Simple shim for Next.js Image — uses native <img>. Keeps width/height when provided.
  const imgStyle: React.CSSProperties = { ...(style || {}) };

  if (fill) {
    // Mimic Next.js `fill`: rely on parent as positioning context
    imgStyle.position ??= "absolute";
    imgStyle.inset ??= 0;
    imgStyle.width ??= "100%";
    imgStyle.height ??= "100%";
  }

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      data-fill={fill ? "true" : undefined}
      style={imgStyle}
      className={className}
      {...rest}
    />
  );
}
