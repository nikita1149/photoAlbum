import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[28px]",
};
const variants = {
  outline: {
    black_900_14: "border-black-900_14 border border-solid text-gray-900",
    gray_900_14: "border-gray-900_14 border-2 border-solid",
    white_A700: "border-white-A700 border-2 border-solid text-white",
    gray_900: "border-gray-900 border-2 border-solid text-gray-900",
  },
  fill: {
    gray_900: "bg-gray-900 text-white",
    gray_900_7f: "bg-gray-900_7f text-white",
  },
};
const sizes = {
  md: "h-[56px] px-3 text-[32px]",
  lg: "h-[56px] px-[17px]",
  xs: "h-[32px] px-3 text-sm",
  sm: "h-[56px] px-8 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "lg", "xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900_14",
    "gray_900_14",
    "white_A700",
    "gray_900",
    "gray_900_7f",
  ]),
};

export { Button };
