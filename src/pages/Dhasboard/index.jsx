import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

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
const dateOneOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DhasboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: <Img className="h-4 w-4" src="images/img_grid.svg" alt="grid" />,
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
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[937px] items-center justify-start pb-0.5 w-full"
          style={{ backgroundImage: "url('images/img_group17.svg')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[225px] bg-black-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
            >
              <div className="flex flex-row gap-[39px] items-center justify-between mt-[18px] mx-auto w-[78%]">
                <Img
                  className="h-[34px]"
                  src="images/img_clippathgroup_black_900.svg"
                  alt="clippathgroup"
                />
                <Img
                  className="h-4"
                  src="images/img_megaphone.svg"
                  alt="megaphone"
                />
              </div>
              <Line className="bg-blue_gray-500 h-px mt-[18px] w-full" />
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "10px 10px 10px 24px",
                    gap: "15px",
                    color: "#8c8c8c",
                    fontSize: "14px",
                    [`&:hover, &.ps-active`]: {
                      color: "#80c341",
                      fontWeight: "400 !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-end mb-[748px] mt-[13px] pt-1.5 w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-5 justify-start w-full">
              <header
                className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-center md:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group22.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[1063px] mr-[250px] my-5 w-[7%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-7 items-center justify-start p-1 w-7"
                    style={{ backgroundImage: "url('images/img_group26.svg')" }}
                  >
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] text-blue_gray-700 text-sm"
                    size="txtInterRegular14Bluegray700"
                  >
                    Rahul{" "}
                  </Text>
                  <Img
                    className="h-[5px] md:ml-[0] ml-[5px]"
                    src="images/img_arrowdown_blue_gray_700.svg"
                    alt="arrowdown"
                  />
                </div>
              </header>
              <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] md:px-5 w-[81%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="md:mt-0 mt-1 text-black-900 text-xl"
                    size="txtInterBold20"
                  >
                    Dashboard
                  </Text>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 md:ml-[0] ml-[432px] w-[43%] md:w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end p-[7px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group24.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
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
                      className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end p-1.5 w-full"
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
                          name="group115"
                          options={apolloHospitalsOptionsList}
                          isSearchable={false}
                          placeholder="Apollo Hospitals"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end p-[7px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group24.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
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
                  </List>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[100px] ml-2.5 md:ml-[0]"
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
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-5 w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-5 rounded w-[24%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start my-0.5 w-[99%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-0.5 text-black-900 text-sm"
                          size="txtInterRegular14Black900"
                        >
                          Open Violations
                        </Text>
                        <div className="h-6 md:h-[19px] relative w-[10%]">
                          <Img
                            className="h-[5px] ml-auto w-[5px]"
                            src="images/img_path1645.svg"
                            alt="path1645"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[5px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group27.svg')",
                            }}
                          >
                            <Img
                              className="h-[9px] w-[9px]"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                        size="txtInterRegular45"
                      >
                        17
                      </Text>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[130px] items-center justify-start sm:ml-[0] p-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group19.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Overdue Violations
                          </Text>
                          <Img
                            className="h-[25px] w-[25px]"
                            src="images/img_clock_black_900.svg"
                            alt="clock"
                          />
                        </div>
                        <Text
                          className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                          size="txtInterRegular45"
                        >
                          09
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[130px] items-center justify-start sm:ml-[0] p-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group19.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Closed Violations
                          </Text>
                          <Img
                            className="h-[25px] w-[25px]"
                            src="images/img_clippathgroup.svg"
                            alt="clippathgroup"
                          />
                        </div>
                        <Text
                          className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                          size="txtInterRegular45"
                        >
                          68
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[130px] items-center justify-start sm:ml-[0] p-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group19.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterRegular14Black900"
                          >
                            Total Violations
                          </Text>
                          <Img
                            className="h-[25px] w-[25px]"
                            src="images/img_close_light_green_500.svg"
                            alt="close"
                          />
                        </div>
                        <Text
                          className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                          size="txtInterRegular45"
                        >
                          85
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-5 w-full">
                  <Input
                    name="columnviolationsvstim_one"
                    placeholder="Violations Vs Time"
                    className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 sm:flex-1 sm:mt-0 mt-1 p-5 rounded sm:w-full"
                  ></Input>
                  <Input
                    name="columnrevenuevstime"
                    placeholder="Revenue Vs Time"
                    className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                    wrapClassName="bg-cover bg-no-repeat sm:flex-1 h-[295px] p-5 sm:w-full"
                    style={{ backgroundImage: "url('images/img_group19.svg')" }}
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between mt-6 w-full">
                  <Input
                    name="columnpaidunpaidviola_one"
                    placeholder="Paid/Unpaid Violations Vs Time"
                    className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                    wrapClassName="bg-white-A700 md:flex-1 p-5 rounded md:w-full"
                  ></Input>
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-[22px] sm:px-5 rounded">
                    <Text
                      className="ml-0.5 md:ml-[0] text-black-900 text-sm"
                      size="txtInterBold14"
                    >
                      Download Violation History
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[11px] text-blue_gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      An email will be sent to the registered email address{" "}
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-0.5 text-blue_gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      if a request is made for data download.{" "}
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end mt-5 p-[7px] w-[30%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group24.svg')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
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
                          options={dateOneOptionsList1}
                          isSearchable={false}
                          placeholder="07/11/2023"
                        />
                      </div>
                    </div>
                    <div className="bg-light_green-500 flex flex-row gap-2 items-center justify-start ml-0.5 md:ml-[0] mt-5 p-[9px] rounded w-[37%] md:w-full">
                      <div className="h-4 md:h-[13px] ml-[9px] relative w-[13%]">
                        <div className="flex flex-col m-auto w-full">
                          <Img
                            className="h-[13px] mx-auto"
                            src="images/img_path18.svg"
                            alt="pathEighteen"
                          />
                          <Img
                            className="h-[3px] mt-[-1.21px] mx-auto z-[1]"
                            src="images/img_path19.svg"
                            alt="pathNineteen"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[7px] inset-x-[0] mx-auto"
                          src="images/img_path20.svg"
                          alt="pathTwenty"
                        />
                      </div>
                      <Text
                        className="mt-[3px] text-sm text-white-A700"
                        size="txtInterBold14WhiteA700"
                      >
                        Download Report
                      </Text>
                    </div>
                    <Text
                      className="mb-[39px] ml-0.5 md:ml-[0] mt-1.5 text-[10px] text-blue_gray-500"
                      size="txtInterRegular10"
                    >
                      supports .xlsx format
                    </Text>
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

export default DhasboardPage;
