import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]" };
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    light_green_500: "bg-light_green-500 text-white-A700",
    gray_300: "bg-gray-300",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-2.5", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "gray_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900", "light_green_500", "gray_300"]),
};

export { Button };
