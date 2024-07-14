import type { colorType } from "./ColorProvider";
import { VscLoading } from "react-icons/vsc";
import { shapeProvider, type sizeVariantType } from "./ShapeProvider";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import colorProvider from "./ColorProvider";

type customButtonProps = {
  color?: colorType;
  icon?: {
    left?: ReactNode;
    right?: ReactNode;
  };
  isRounded?: boolean;
  size?: sizeVariantType;
  accent?: "filled" | "outline" | "plain";
  isNegativeVariant?: boolean;
  isLoading?: boolean;
};
type ButtonUILibPropsInterface = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & customButtonProps;

const Button = ({
  color = "primary",
  accent = "filled",
  isLoading = false,
  size = "md",
  icon,
  isRounded = true,
  ...props
}: ButtonUILibPropsInterface) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${colorProvider(color, props.disabled, accent === "filled", props.isNegativeVariant)} ${shapeProvider(size)}
      ${props.className} ${accent !== "outline" ? "!active:border-transparent" : ""} ${isRounded ? "rounded-full" : "rounded-lg"}
      flex items-center justify-center gap-1 whitespace-nowrap transition-all duration-300 ease-in-out font-semibold`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <VscLoading className="animate-spin text-lg duration-500" />
        </span>
      ) : (
        <>
          {icon?.left && <>{icon.left}</>}
          {props.children}
          {icon?.right && <>{icon.right}</>}
        </>
      )}
    </button>
  );
};

export default Button;
