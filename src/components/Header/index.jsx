import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header
        className={props.className}
        style={{ backgroundImage: "url('images/img_group22.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[1063px] mr-[250px] my-5 w-[7%]">
          <div className="header-row ">
            <Img
              className="h-7"
              src="images/img_lock_light_green_500.svg"
              alt="lock"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Text
            className="sm:hidden ml-1 md:ml-[0] text-blue_gray-700 text-sm"
            size="txtInterRegular14Bluegray700"
          >
            Rahul{" "}
          </Text>
          <Img
            className="h-[5px] sm:hidden md:ml-[0] ml-[5px]"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
