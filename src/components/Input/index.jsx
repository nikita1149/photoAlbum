import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
};
const variants = {
  underline: {
    gray_900_14: "text-gray-900_28 border-b border-gray-900_14 border-solid",
    black_900_14: "text-gray-900_28 border-b border-black-900_14 border-solid",
  },
  fill: {
    gray_100: "bg-gray-100 text-gray-900_66",
  },
};
const sizes = {
  sm: "h-[59px] pr-[35px] text-[40px]",
  md: "h-[64px] pr-[35px] text-[40px]",
  xs: "h-[56px] pl-6 pr-[35px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center font-medium  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["underline", "fill"]),
  color: PropTypes.oneOf(["gray_900_14", "black_900_14", "gray_100"]),
};

export { Input };
