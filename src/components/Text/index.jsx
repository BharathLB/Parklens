import React from "react";

const sizeClasses = {
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtNotoSansBold18: "font-bold font-notosans",
  txtNotoSansRegular10: "font-normal font-notosans",
  txtInterRegular14Black900: "font-inter font-normal",
  txtInterBold14Bluegray400: "font-bold font-inter",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtNotoSansMedium14: "font-medium font-notosans",
  txtInterRegular10: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterBold10: "font-bold font-inter",
  txtInterRegular10DeeporangeA700: "font-inter font-normal",
  txtInterBold20: "font-bold font-inter",
  txtInterRegular10Bluegray400: "font-inter font-normal",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterRegular12Bluegray400: "font-inter font-normal",
  txtInterRegular45: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular8: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
