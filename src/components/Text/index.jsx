import React from "react";

const sizes = {
  "5xl": "text-[120px] font-medium md:text-5xl",
  xs: "text-sm font-medium",
  lg: "text-[28px] font-normal md:text-[26px] sm:text-2xl",
  s: "text-base font-medium",
  "2xl": "text-[56px] font-normal md:text-5xl sm:text-[42px]",
  "3xl": "text-[80px] font-normal md:text-5xl",
  "4xl": "text-[112px] font-normal md:text-5xl",
  xl: "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
