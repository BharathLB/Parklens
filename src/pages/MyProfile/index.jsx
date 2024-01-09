import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const managerOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MyProfilePage = () => {
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
              <Sidebar1 className="!sticky !w-[225px] bg-black-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
              <div className="flex flex-1 flex-col justify-start w-full">
                <Header
                  className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-center md:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group22.svg')" }}
                />
                <Text
                  className="ml-6 md:ml-[0] mt-[21px] text-black-900 text-xl"
                  size="txtInterBold20"
                >
                  My Profile
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[386px] items-center justify-end md:ml-[0] ml-[30px] mt-[25px] p-5 md:px-5 w-[81%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group225.svg')" }}
                >
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[69%] md:w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[49%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Full Name
                        </Text>
                        <div className="bg-white-A700 flex flex-col items-center justify-start rounded w-full">
                          <Input
                            name="columnrahulanand"
                            placeholder="Rahul Anand"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                            wrapClassName="bg-cover bg-no-repeat h-[37px] p-[9px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group57.svg')",
                            }}
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[49%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Mobile
                        </Text>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[38px] items-start justify-start px-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group38.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-start w-[38%] md:w-full">
                            <Text
                              className="mt-2.5 text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              +91
                            </Text>
                            <Line className="bg-gray-300 h-[37px] ml-2 w-px" />
                            <Text
                              className="ml-[9px] mt-2.5 text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              8050456213
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[69%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[49%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Email (Used for Login)
                        </Text>
                        <Input
                          name="columnemail"
                          placeholder="Rahul.a@apolloind.com"
                          className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                          wrapClassName="bg-cover bg-no-repeat h-[38px] p-2 w-full"
                          style={{
                            backgroundImage: "url('images/img_group37.svg')",
                          }}
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[49%] md:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Permission{" "}
                        </Text>
                        <div className="bg-gray-300 flex flex-col items-center justify-start rounded-[5px] w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-end p-2 w-full"
                            style={{
                              backgroundImage: "url('images/img_group57.svg')",
                            }}
                          >
                            <SelectBox
                              className="leading-[normal] mt-0.5 text-black-900 text-left text-sm w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] w-[9px]"
                                  src="images/img_arrowdown_blue_gray_400.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group126"
                              options={managerOptionsList}
                              isSearchable={false}
                              placeholder="Manager"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[34%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Assigned Lots
                          </Text>
                          <div className="md:h-[152px] h-[153px] relative w-full">
                            <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto rounded w-full">
                              <Img
                                className="h-[152px]"
                                src="images/img_group57.svg"
                                alt="vector"
                              />
                            </div>
                            <List
                              className="absolute flex flex-col gap-2.5 inset-x-[0] items-center mx-auto top-[7%] w-[94%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-row items-center justify-between w-full">
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[71px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 1204
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[55px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 12
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[55px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 22
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[62px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 220
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[48px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 2
                                </Button>
                              </div>
                              <div className="flex flex-row items-center justify-between w-full">
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[55px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 12
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[55px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 22
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[71px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 1204
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[55px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 32
                                </Button>
                                <Button
                                  className="cursor-pointer leading-[normal] min-w-[55px] rounded text-center text-xs"
                                  color="black_900"
                                >
                                  Lot 22
                                </Button>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start ml-6 md:ml-[0] w-[34%] md:w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Password
                          </Text>
                          <div className="bg-white-A700 flex flex-col items-center justify-start rounded w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start p-2 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group57.svg')",
                              }}
                            >
                              <div className="flex flex-row items-start justify-between mb-0.5 w-[99%] md:w-full">
                                <Text
                                  className="text-blue_gray-400 text-sm"
                                  size="txtInterRegular14"
                                >
                                  **************
                                </Text>
                                <Img
                                  className="h-[13px] mt-[3px]"
                                  src="images/img_iconionicioseyeoff.svg"
                                  alt="iconionicioseye"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Input
                          name="groupThirtyOne"
                          placeholder="Change Password"
                          className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                          wrapClassName="w-1/2"
                          type="password"
                          shape="round"
                          color="light_green_500"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <Input
                        name="columncancel"
                        placeholder="Cancel"
                        className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                        wrapClassName="bg-cover bg-no-repeat md:flex-1 h-[37px] md:ml-[0] ml-[86px] md:mt-0 mt-[143px] p-[9px] w-[12%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group35.svg')",
                        }}
                      ></Input>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[121px] md:ml-[0] ml-[15px] md:mt-0 mt-[142px] rounded text-center text-sm"
                        color="light_green_500"
                        size="sm"
                      >
                        Save
                      </Button>
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

export default MyProfilePage;
