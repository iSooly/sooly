export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const assetPath = (src: string) => `${basePath}${src}`;

export const imageLoader = ({ src }: { src: string }) => `${basePath}${src}`;
