import { ReactImageTint } from "react-image-tint";
import Constants from "../utils/Constants";

export default function EfImageView({
  src,
  sx,
  alt,
  tint,
}:
  | {
      src: string | undefined;
      sx: React.CSSProperties;
      alt: string;
      tint: any | undefined;
    }
  | {
      src: string | undefined;
      sx: React.CSSProperties;
      alt: string;
    }
  | {
      src: string | undefined;
      alt: string;
    }
  | any) {
  return (
    <ReactImageTint
      src={src}
      color={tint ? tint : Constants.colors.lightTheme.palette.primary.main}
    />
  );
}
