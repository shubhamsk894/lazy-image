import React from "react";

const Image = ({ src }) => {
  return <img src={src} alt="src" loading="lazy" />;
};

export const LazyImage = React.memo(Image);
