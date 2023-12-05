import { CSSProperties, FC } from "react";

const Image: FC<{
  imageUrl: string;
  placeholderUrl?: string;
  altText: string | null;
  title?: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
}> = ({ imageUrl, placeholderUrl, altText, title, width, height, style }) => {
  return (
    <img
      src={imageUrl}
      onError={(e) => {
        e.currentTarget.src = placeholderUrl || "";
      }}
      alt={altText || ""}
      width={width}
      height={height}
      style={style}
      title={title}
      loading="lazy"
    />
  );
};

export default Image;
