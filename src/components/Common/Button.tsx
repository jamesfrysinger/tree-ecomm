import { CSSProperties, FC, ReactNode } from "react";
import Image from "./Image";

const Button: FC<{
  children?: ReactNode;
  onClick?: () => void;
  imageUrl?: string;
  altText?: string;
  className?: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
}> = ({
  children,
  onClick,
  imageUrl,
  altText,
  className,
  style,
  imageStyle,
}) => {
  return (
    <button onClick={onClick} className={className} style={style}>
      {imageUrl && (
        <Image imageUrl={imageUrl} altText={altText || ""} style={imageStyle} />
      )}
      {children}
    </button>
  );
};

export default Button;
