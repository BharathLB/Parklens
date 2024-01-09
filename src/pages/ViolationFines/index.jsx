import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";

const apolloHospitalsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const lotCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ViolationFinesPage = () => {
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
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[956px] items-center justify-start w-full"
            style={{ backgroundImage: "url('images/img_group17.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
              <Sidebar11 className="!sticky !w-[225px] bg-black-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
              <div className="flex flex-1 flex-col gap-5 justify-start w-full">
                <Header
                  className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-center md:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group22.svg')" }}
                />
                <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] md:px-5 w-[81%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Text
                      className="md:mt-0 mt-1 text-black-900 text-xl"
                      size="txtInterBold20"
                    >
                      Violation Fines
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[50px] items-center justify-end md:ml-[0] ml-[668px] p-1.5 w-[14%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group24.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                        <Text
                          className="text-[10px] text-blue_gray-400"
                          size="txtInterBold10"
                        >
                          Client
                        </Text>
                        <SelectBox
                          className="leading-[normal] mt-1 text-black-900 text-left text-sm w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-[5px] mr-[0] w-[9px]"
                              src="images/img_arrowdown_blue_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group155"
                          options={apolloHospitalsOptionsList}
                          isSearchable={false}
                          placeholder="Apollo Hospitals"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[50px] items-center justify-end md:ml-[0] ml-[13px] p-2 w-[14%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group24.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                        <Text
                          className="text-[10px] text-blue_gray-400"
                          size="txtInterBold10"
                        >
                          Lot
                        </Text>
                        <SelectBox
                          className="leading-[normal] mt-[3px] text-black-900 text-left text-sm w-full"
                          placeholderClassName="text-black-900"
                          indicator={
                            <Img
                              className="h-[5px] mr-[0] w-[9px]"
                              src="images/img_arrowdown_blue_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="lotCounter"
                          options={lotCounterOptionsList}
                          isSearchable={false}
                          placeholder="Lot 1240"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-5 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[185px] items-start justify-start p-5 w-[32%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group225.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start my-0.5">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtInterBold18"
                        >
                          No Parking
                        </Text>
                        <Text
                          className="mt-[21px] text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Exempted Duration
                        </Text>
                        <Text
                          className="mt-[5px] text-blue_gray-400 text-sm"
                          size="txtInterRegular14"
                        >
                          90 minutes
                        </Text>
                        <Text
                          className="mt-[17px] text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Flat Fees
                        </Text>
                        <Text
                          className="mt-1.5 text-blue_gray-400 text-sm"
                          size="txtInterRegular14"
                        >
                          ₹50
                        </Text>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[185px] items-start justify-start sm:ml-[0] p-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group225.svg')",
                        }}
                      >
                        <div className="flex flex-col items-start justify-start w-[85%] md:w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtInterBold18"
                          >
                            Over Time
                          </Text>
                          <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-[22px] w-[98%] md:w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Exempted Duration
                            </Text>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Flat Fees
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-[85%] md:w-full">
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              60 minutes
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              ₹50
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-4 w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Fee Type
                            </Text>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Time Fees
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-[84%] md:w-full">
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              Flat Fees
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              ₹60
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[185px] items-start justify-start sm:ml-[0] p-5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group225.svg')",
                        }}
                      >
                        <div className="flex flex-col items-start justify-start my-0.5 w-[85%] md:w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtInterBold18"
                          >
                            Over Stay
                          </Text>
                          <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-5 w-[98%] md:w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Exempted Duration
                            </Text>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Flat Fees
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-[85%] md:w-full">
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              60 minutes
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              ₹50
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-4 w-full">
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Fee Type
                            </Text>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Time Fees
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-[84%] md:w-full">
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              Flat Fees
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm"
                              size="txtInterRegular14"
                            >
                              ₹60
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start mt-[25px] w-[66%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[185px] items-start justify-start p-5 w-[49%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group225.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start my-0.5 w-[85%] md:w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtInterBold18"
                        >
                          No Payment
                        </Text>
                        <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-5 w-[98%] md:w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Exempted Duration
                          </Text>
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Flat Fees
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-[85%] md:w-full">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            60 minutes
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            ₹50
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-4 w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Fee Type
                          </Text>
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Time Fees
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[5px] w-[84%] md:w-full">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            Flat Fees
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtInterRegular14"
                          >
                            ₹60
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[185px] items-start justify-start p-5 w-[49%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group225.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
                        <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtInterBold18"
                          >
                            Discount
                          </Text>
                          <List
                            className="flex flex-col gap-4 items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between w-full">
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[39%]">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  Coupon 1
                                </Text>
                                <Input
                                  name="columnwelcometwenty"
                                  placeholder="Welcome20"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="w-full"
                                ></Input>
                              </div>
                              <div className="flex flex-col gap-[7px] items-start justify-start w-[37%]">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  Discount %
                                </Text>
                                <Input
                                  name="columntwenty"
                                  placeholder="20"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="w-[18px]"
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between w-full">
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[39%]">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  Coupon 2
                                </Text>
                                <Input
                                  name="columnweekendten"
                                  placeholder="Weekend10"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="w-full"
                                ></Input>
                              </div>
                              <div className="flex flex-col gap-[7px] items-start justify-start w-[37%]">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  Discount %
                                </Text>
                                <Input
                                  name="columnten"
                                  placeholder="10"
                                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                                  wrapClassName="w-4"
                                ></Input>
                              </div>
                            </div>
                          </List>
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

export default ViolationFinesPage;
