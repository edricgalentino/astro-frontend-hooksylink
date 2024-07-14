export type sizeVariantType = "sm" | "md" | "lg";

const baseShapeVariant = {
  sm: {
    className: "p-1 px-2 text-sm",
  },
  md: {
    className: "p-1 px-2 text-sm md:p-2 md:px-4 md:text-base",
  },
  lg: {
    className: "px-4 py-2 text-lg md:p-3 md:px-6 md:text-xl lg:p-4 lg:px-8",
  },
};
export const shapeProvider = (size: sizeVariantType) => {
  return baseShapeVariant[size].className;
};
