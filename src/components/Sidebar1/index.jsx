import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-4 w-4"
          src="images/img_grid_black_900.svg"
          alt="grid"
        />
      ),
      label: "Dashboard",
    },
    {
      icon: (
        <Img
          className="h-4 w-4"
          src="images/img_videocamera.svg"
          alt="videocamera"
        />
      ),
      label: "Violations",
      href: "/violationsone",
      active: window.location.pathname === "/violationsone",
    },
    {
      icon: <Img className="h-4 w-4" src="images/img_clock.svg" alt="clock" />,
      label: "History",
      href: "/history",
      active: window.location.pathname === "/history",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-row gap-[39px] items-center justify-between mt-[18px] mx-auto w-[78%]">
          <Img
            className="h-[34px]"
            src="images/img_clippathgroup_black_900.svg"
            alt="clippathgroup"
          />
          <Img className="h-4" src="images/img_megaphone.svg" alt="megaphone" />
        </div>
        <Line className="bg-blue_gray-500 h-px mt-[18px] w-full" />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              paddingBottom: "25px",
              gap: "15px",
              color: "#8c8c8c",
              fontSize: "14px",
              fontFamily: "Inter",
              paddingLeft: "25px",
              paddingRight: "25px",
            },
          }}
          className="flex flex-col items-center justify-start mb-[758px] mt-[31px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
