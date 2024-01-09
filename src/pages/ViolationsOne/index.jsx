import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const cashOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ViolationsOnePage = () => {
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
          src="images/img_videocamera_black_900.svg"
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
      <div className="bg-white-A700 font-inter h-[956px] mx-auto relative w-full">
        <div className="md:h-[1533px] sm:h-[952px] h-[956px] m-auto md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[956px] items-end justify-start p-[11px] w-full"
              style={{ backgroundImage: "url('images/img_group17.svg')" }}
            >
              <div className="flex flex-col gap-[22px] items-center justify-start mb-60 mt-[78px] w-[83%] md:w-full">
                <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterBold20"
                  >
                    Edit Violation
                  </Text>
                  <Text
                    className="mt-2 text-blue_gray-400 text-sm"
                    size="txtInterBold14Bluegray400"
                  >
                    07/11/2023-02:00:01
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[99%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[219px] items-center justify-end p-5 w-[48%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group225.svg')",
                    }}
                  >
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-5 grid grid-cols-2 w-[66%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start w-[81%] md:w-full">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                Time In
                              </Text>
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                04:30:00
                              </Text>
                            </div>
                            <Img
                              className="h-[150px] md:h-auto object-cover w-[150px]"
                              src="images/img_sensors1900277g001.png"
                              alt="sensors1900277g"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-[81%] md:w-full">
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                Current
                              </Text>
                              <Text
                                className="text-black-900 text-sm"
                                size="txtInterRegular14Black900"
                              >
                                04:30:00
                              </Text>
                            </div>
                            <Img
                              className="h-[150px] md:h-auto object-cover w-[150px]"
                              src="images/img_sensors1900277g001.png"
                              alt="sensors1900277g"
                            />
                          </div>
                        </div>
                      </List>
                      <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[31%] sm:w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Number Plate
                        </Text>
                        <div className="bg-gray-50 flex flex-col h-[150px] items-center justify-center p-[15px] w-[150px]">
                          <div className="flex flex-col items-center justify-start my-9 w-[97%] md:w-full">
                            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                              <div className="flex flex-row gap-1.5 items-end justify-start w-[96%] md:w-full">
                                <Img
                                  className="h-[23px]"
                                  src="images/img_upload.svg"
                                  alt="upload"
                                />
                                <Text
                                  className="mt-1.5 text-blue_gray-400 text-xs"
                                  size="txtInterRegular12Bluegray400"
                                >
                                  Upload Photo
                                </Text>
                              </div>
                              <Text
                                className="text-[8px] text-blue_gray-400"
                                size="txtInterRegular8"
                              >
                                Only PNG, JPG. Less than 1MB
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[219px] items-center justify-start p-5 w-[52%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group225.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[17px] items-center justify-start mb-[30px] w-full">
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Client
                          </Text>
                          <div className="bg-white-A700 flex flex-col items-center justify-start rounded w-full">
                            <Input
                              name="columnapollohospitals_one"
                              placeholder="Apollo Hospitals"
                              className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                              wrapClassName="bg-cover bg-no-repeat h-[37px] p-[7px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group57.svg')",
                              }}
                            ></Input>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Stall
                          </Text>
                          <Input
                            name="columntwelve"
                            placeholder="12"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                            wrapClassName="bg-cover bg-no-repeat h-[38px] p-[9px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group58.svg')",
                            }}
                          ></Input>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Lot
                          </Text>
                          <div className="md:h-[37px] h-[38px] relative w-full">
                            <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto rounded w-full">
                              <Img
                                className="h-[37px]"
                                src="images/img_group57.svg"
                                alt="vector"
                              />
                            </div>
                            <Text
                              className="absolute bottom-[24%] left-[4%] text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              Lot 1240
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Violation Type
                          </Text>
                          <Input
                            name="columnnoparking"
                            placeholder="No Parking"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                            wrapClassName="bg-cover bg-no-repeat h-[37px] p-2 w-full"
                            style={{
                              backgroundImage: "url('images/img_group57.svg')",
                            }}
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[99%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[324px] items-center justify-start p-[15px] w-[48%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group225.svg')",
                    }}
                  >
                    <Img
                      className="h-[294px]"
                      src="images/img_group181.svg"
                      alt="group181"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[324px] items-center justify-end p-5 w-[51%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group225.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] sm:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Total Fine
                          </Text>
                          <Input
                            name="columnprice"
                            placeholder="₹500"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                            wrapClassName="bg-cover bg-no-repeat h-[38px] p-[9px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group61.svg')",
                            }}
                          ></Input>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[48%] sm:w-full">
                          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Discount Code
                            </Text>
                            <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                              <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start rounded sm:w-full">
                                <Input
                                  name="columncouponcode"
                                  placeholder="Coupon code"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="bg-cover bg-no-repeat h-[37px] p-[7px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group57.svg')",
                                  }}
                                ></Input>
                              </div>
                              <Button
                                className="cursor-pointer font-bold leading-[normal] min-w-[95px] rounded text-center text-sm"
                                color="light_green_500"
                                size="sm"
                              >
                                Apply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                        <div className="flex sm:flex-1 flex-col gap-[18px] items-start justify-start w-[49%] sm:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Payment Due
                            </Text>
                            <div className="md:h-[37px] h-[38px] relative w-full">
                              <div className="bg-gray-300 flex flex-col h-full items-center justify-start m-auto rounded w-full">
                                <Img
                                  className="h-[37px]"
                                  src="images/img_group57.svg"
                                  alt="vector_One"
                                />
                              </div>
                              <Text
                                className="absolute bottom-[24%] left-[4%] text-blue_gray-400 text-sm"
                                size="txtInterRegular14"
                              >
                                ₹500
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[9px] items-start justify-start w-[58%] md:w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Payment Type
                            </Text>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[37px] items-center justify-start p-[9px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group57.svg')",
                              }}
                            >
                              <SelectBox
                                className="leading-[normal] text-black-900 text-left text-sm w-full"
                                placeholderClassName="text-black-900"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] w-[9px]"
                                    src="images/img_arrowdown_black_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group135"
                                options={cashOptionsList}
                                isSearchable={false}
                                placeholder="Cash"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start w-[48%] sm:w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Description
                            </Text>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[119px] items-start justify-start p-[9px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group57.svg')",
                              }}
                            >
                              <Text
                                className="mb-[82px] mt-0.5 text-blue_gray-400 text-xs"
                                size="txtInterRegular12Bluegray400"
                              >
                                60 Characters only
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                            <Input
                              name="columnback"
                              placeholder="Back"
                              className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                              wrapClassName="bg-cover bg-no-repeat h-[37px] p-[9px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group60.svg')",
                              }}
                            ></Input>
                            <Button
                              className="cursor-pointer font-bold leading-[normal] min-w-[122px] rounded text-center text-sm"
                              color="light_green_500"
                              size="sm"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[61px] inset-x-[0] items-end justify-end mx-auto p-3 top-[0] w-[98%]"
            style={{ backgroundImage: "url('images/img_group53.png')" }}
          >
            <div className="flex flex-row gap-[5px] items-center justify-end mr-3 mt-[7px] w-[7%] md:w-full">
              <Img
                className="h-7 w-7"
                src="images/img_lock_light_green_500.svg"
                alt="lock"
              />
              <SelectBox
                className="leading-[normal] text-blue_gray-700 text-left text-sm w-[61%] sm:w-full"
                placeholderClassName="text-blue_gray-700"
                indicator={
                  <Img
                    className="h-[5px] mr-[0] w-[9px]"
                    src="images/img_arrowdown_blue_gray_700.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="language"
                options={languageOptionsList}
                isSearchable={false}
                placeholder="Rahul "
              />
            </div>
          </div>
        </div>
        <Sidebar11 className="!sticky !w-[225px] bg-black-900 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]" />
      </div>
    </>
  );
};

export default ViolationsOnePage;
