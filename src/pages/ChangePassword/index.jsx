import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Line, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const ChangePasswordPage = () => {
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
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[956px] items-center justify-start w-full"
            style={{ backgroundImage: "url('images/img_group17.svg')" }}
          >
            <div className="overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
                <Sidebar1 className="!sticky !w-[225px] bg-black-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
                <div className="flex flex-1 flex-col gap-[22px] justify-start w-full">
                  <Header
                    className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-center md:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_group22.svg')" }}
                  />
                  <div className="flex flex-col gap-[19px] items-start justify-start ml-6 md:ml-[0] md:px-5 w-[81%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterBold20"
                    >
                      Change Password
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[365px] items-start justify-end p-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group225.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[31px] items-start justify-start mt-0.5 w-[34%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                Existing Password
                              </Text>
                              <div className="bg-white-A700 flex flex-col items-center justify-start rounded w-full">
                                <Input
                                  name="columnenterexistingpa_one"
                                  placeholder="Enter Existing Password"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="bg-cover bg-no-repeat h-[39px] p-[9px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group57.svg')",
                                  }}
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                Enter New Password
                              </Text>
                              <div className="bg-white-A700 flex flex-col items-center justify-start mt-2.5 rounded w-full">
                                <Input
                                  name="columnenteratleasteight"
                                  placeholder="Enter at least 8+ characters"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="bg-cover bg-no-repeat h-[39px] p-[9px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group57.svg')",
                                  }}
                                ></Input>
                              </div>
                              <Text
                                className="mt-1.5 text-[10px] text-blue_gray-400"
                                size="txtInterRegular10Bluegray400"
                              >
                                Use 8 or more characters with a mix of letters,
                                numbers & symbols
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                Re-enter New Password
                              </Text>
                              <div className="bg-white-A700 flex flex-col items-center justify-start rounded w-full">
                                <Input
                                  name="columnenteratleasteight_one"
                                  placeholder="Enter at least 8+ characters"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="bg-cover bg-no-repeat h-[39px] p-[9px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group57.svg')",
                                  }}
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[15px] items-center justify-start w-[72%] md:w-full">
                          <Input
                            name="columncancel"
                            placeholder="Cancel"
                            className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                            wrapClassName="bg-cover bg-no-repeat h-[38px] p-2.5 w-[48%]"
                            style={{
                              backgroundImage: "url('images/img_group35.svg')",
                            }}
                          ></Input>
                          <Input
                            name="columnsave"
                            placeholder="Save"
                            className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm text-white-A700 w-full"
                            wrapClassName="bg-cover bg-no-repeat h-[38px] p-2.5 w-[48%]"
                            style={{
                              backgroundImage: "url('images/img_group638.svg')",
                            }}
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordPage;
