import Image, { type ImageProps } from "next/image";
import { imageLoader } from "../lib/assets";

export default function StaticImage(props: ImageProps) {
  return <Image unoptimized loader={imageLoader} {...props} />;
}
