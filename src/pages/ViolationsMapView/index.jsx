import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";

const dateOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
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
const noParkingOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ViolationsMapViewPage = () => {
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
                <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] md:px-5 w-[81%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterBold20"
                      >
                        Violations Map View
                      </Text>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[15px] grid grid-cols-2 md:ml-[0] ml-[171px] w-[28%] md:w-full"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end p-[7px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group24.svg')",
                          }}
                        >
                          <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtInterBold10"
                            >
                              Date
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
                              name="date_One"
                              options={dateOneOptionsList}
                              isSearchable={false}
                              placeholder="07/11/2023"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end p-1.5 w-full"
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
                              name="group144"
                              options={apolloHospitalsOptionsList}
                              isSearchable={false}
                              placeholder="Apollo Hospitals"
                            />
                          </div>
                        </div>
                      </List>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[13px] grid grid-cols-2 md:ml-[0] ml-[13px] w-[28%] md:w-full"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end p-2 w-full"
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
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-end p-1.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group24.svg')",
                          }}
                        >
                          <div className="flex flex-col items-start justify-start mt-0.5 w-[95%] md:w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtInterBold10"
                            >
                              Violation Type
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
                              name="group150"
                              options={noParkingOptionsList}
                              isSearchable={false}
                              placeholder="No Parking"
                            />
                          </div>
                        </div>
                      </List>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[100px] md:ml-[0] ml-[15px]"
                        leftIcon={
                          <div className="mr-[9px] bg-white-A700 my-px">
                            <Img src="images/img_qrcode.svg" alt="qrcode" />
                          </div>
                        }
                        color="light_green_500"
                        size="md"
                      >
                        <div className="leading-[normal] text-left text-sm">
                          Reset
                        </div>
                      </Button>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[751px] items-center justify-end p-[19px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group225.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <Input
                            name="columnsearch"
                            placeholder="Search"
                            className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                            wrapClassName="bg-cover bg-no-repeat md:flex-1 h-[38px] p-2.5 w-1/5 md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group57.svg')",
                            }}
                          ></Input>
                          <Button className="flex h-[38px] items-center justify-center md:ml-[0] ml-[786px] rounded-[3px] w-[38px]">
                            <Img
                              src="images/img_megaphone_black_900.svg"
                              alt="megaphone_One"
                            />
                          </Button>
                          <Button
                            className="flex h-[38px] items-center justify-center ml-2.5 md:ml-[0] rounded-[3px] w-[38px]"
                            color="light_green_500"
                          >
                            <Img src="images/img_user.svg" alt="user" />
                          </Button>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start p-[73px] md:px-10 sm:px-5 shadow-bs w-full">
                          <Img
                            className="h-9 md:ml-[0] ml-[60px] md:mt-0 mt-28"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                          <Img
                            className="h-9 md:ml-[0] ml-[55px] md:mt-0 mt-[303px]"
                            src="images/img_linkedin.svg"
                            alt="linkedin_One"
                          />
                          <Img
                            className="h-9 md:ml-[0] ml-[162px] md:mt-0 mt-[470px]"
                            src="images/img_linkedin.svg"
                            alt="linkedin_Two"
                          />
                          <Img
                            className="h-9 ml-1.5 md:ml-[0] md:mt-0 mt-[76px]"
                            src="images/img_linkedin.svg"
                            alt="linkedin_Three"
                          />
                          <div className="md:h-[287px] h-[74px] mb-[247px] md:ml-[0] ml-[123px] md:mt-0 mt-[185px] relative w-[6%] md:w-full">
                            <Img
                              className="absolute bottom-[0] h-9 inset-x-[0] mx-auto"
                              src="images/img_linkedin.svg"
                              alt="linkedin_Four"
                            />
                            <Input
                              name="columntwentyfour"
                              placeholder="24"
                              className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                              wrapClassName="absolute bg-cover bg-no-repeat h-10 inset-x-[0] mx-auto p-2 top-[0] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group88.svg')",
                              }}
                            ></Input>
                          </div>
                          <Img
                            className="h-9 md:ml-[0] ml-[177px] md:mt-0 mt-[330px]"
                            src="images/img_linkedin.svg"
                            alt="linkedin_Five"
                          />
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

export default ViolationsMapViewPage;
