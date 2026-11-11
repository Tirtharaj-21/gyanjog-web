import { useState } from "react";

export default function ImageWithFallback({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => {
        if (!imageSrc.endsWith("/images/image-placeholder.svg")) {
          setImageSrc("/images/image-placeholder.svg");
        }
      }}
      {...props}
    />
  );
}
