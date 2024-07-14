export type colorTypeFondation = "success" | "info" | "warning" | "critical";
export type colorType = "primary" | "secondary" | "tertiary" | "negative" | "disabled";

type baseColorType = Record<colorType, Record<"className" | "outlined", string>>;
const baseColor: baseColorType = {
  primary: {
    className: "bg-primary text-tertiary border border-tertiary",
    outlined: "bg-primary text-tertiary border border-tertiary",
  },
  secondary: {
    className: "text-white bg-secondary",
    outlined: `bg-white text-secondary border border-secondary`,
  },
  tertiary: {
    className: "bg-tertiary text-white",
    outlined: `border border-tertiary text-tertiary bg-white`,
  },
  negative: {
    className: "bg-critical text-white",
    outlined: `border-critical text-critical`,
  },
  disabled: {
    className:
      "bg-disabled-surface border border-disabled text-disabled disabled:bg-disabled-surface disabled:border disabled:border-disabled disabled:text-disabled",
    outlined: "bg-white border border-disabled text-disabled disabled:bg-white disabled:border disabled:border-disabled disabled:text-disabled",
  },
};

const colorProvider = (color: colorType, isDisabled = false, isFilled: boolean = true, isNegativeVariant: boolean = false) => {
  if (isDisabled) return baseColor["disabled"][`${isFilled ? "className" : "outlined"}`];
  return baseColor[isNegativeVariant ? "negative" : color][`${isFilled ? "className" : "outlined"}`];
};

export default colorProvider;
