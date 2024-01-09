import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
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
const noParkingOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ViolationsPage = () => {
  const tableData = React.useRef([
    {
      rowgroup101: "Lot A",
      rowstall: "12",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot B",
      rowstall: "33",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot C",
      rowstall: "24",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot D",
      rowstall: "55",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot E",
      rowstall: "86",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot F",
      rowstall: "25",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot G",
      rowstall: "33",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot A",
      rowstall: "29",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
    {
      rowgroup101: "Lot B",
      rowstall: "56",
      rowgroup106: "No Parking",
      rowviolationtime: "02:00:01",
      action: "images/img_edit.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowgroup101", {
        cell: (info) => (
          <Text
            className="pb-[18px] pt-[35px] text-black-900 text-sm"
            size="txtInterRegular14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[5px] items-end justify-start min-w-[181px]">
            <Text
              className="text-black-900 text-sm"
              size="txtInterRegular14Black900"
            >
              Lot
            </Text>
            <Img
              className="h-[7px] mb-[3px] mt-1.5"
              src="images/img_group101.svg"
              alt="group101"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowstall", {
        cell: (info) => (
          <Text
            className="pb-[18px] pt-[35px] text-black-900 text-sm"
            size="txtInterRegular14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-start min-w-[182px]">
            <Text
              className="text-black-900 text-sm"
              size="txtInterRegular14Black900"
            >
              Stall
            </Text>
            <Img
              className="h-[7px] mt-1"
              src="images/img_group101.svg"
              alt="group105"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowgroup106", {
        cell: (info) => (
          <Text
            className="pb-[17px] pt-[35px] text-black-900 text-sm"
            size="txtInterRegular14Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[7px] items-start justify-start min-w-[257px]">
            <Text
              className="text-black-900 text-sm"
              size="txtInterRegular14Black900"
            >
              Violation Type
            </Text>
            <Img
              className="h-[7px] mt-[3px]"
              src="images/img_group101.svg"
              alt="group106"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowviolationtime", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between pr-[15px] py-[15px]">
            <Text
              className="mt-[21px] text-black-900 text-sm"
              size="txtInterRegular14Black900"
            >
              {info?.getValue()}
            </Text>
            <Input
              name="columnclosed"
              placeholder="Closed"
              className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm text-white-A700 w-full"
              wrapClassName="bg-cover bg-no-repeat h-[25px] max-w-[74px] mr-[89px] mt-[17px] p-[3px]"
              style={{ backgroundImage: "url('images/img_group112.svg')" }}
            ></Input>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-start justify-between min-w-[411px]">
            <div className="h-[17px] relative w-[26%]">
              <Text
                className="text-black-900 text-sm"
                size="txtInterRegular14Black900"
              >
                Violation Time
              </Text>
              <div className="absolute flex flex-row gap-2 h-full inset-[0] items-center justify-between m-auto w-full">
                <Text
                  className="text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  Violation Time
                </Text>
                <Img
                  className="absolute h-[7px] inset-y-[24%]"
                  src="images/img_group101.svg"
                  alt="group107_One"
                />
              </div>
              <Img
                className="absolute h-[7px] inset-y-[24%]"
                src="images/img_group101.svg"
                alt="group107_One"
              />
            </div>
            <Text
              className="text-black-900 text-sm"
              size="txtInterRegular14Black900"
            >
              Status
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-end p-[5px]">
            <Button className="flex h-[30px] items-center justify-center mb-1 mt-[27px] w-[30px]">
              <Img className="h-[15px]" alt="edit" src={info?.getValue()} />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[42px] text-black-900 text-right text-sm"
            size="txtInterRegular14Black900"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

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
                <div className="flex flex-col gap-5 items-center justify-start ml-6 md:ml-[0] md:px-5 w-[81%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterBold20"
                    >
                      Violations
                    </Text>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[13px] grid sm:grid-cols-1 grid-cols-3 md:ml-[0] ml-[437px] w-[43%] md:w-full"
                      orientation="horizontal"
                    >
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
                            name="groupNinetyFive"
                            options={apolloHospitalsOptionsList}
                            isSearchable={false}
                            placeholder="Apollo Hospitals"
                          />
                        </div>
                      </div>
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
                            name="groupNinetyNine"
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
                    className="bg-cover bg-no-repeat flex flex-col h-[691px] items-center justify-start py-5 w-full"
                    style={{ backgroundImage: "url('images/img_group3.svg')" }}
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start pb-[39px] w-[96%] md:w-full">
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
                          <Button
                            className="flex h-[38px] items-center justify-center md:ml-[0] ml-[775px] rounded-[3px] w-[38px]"
                            color="light_green_500"
                          >
                            <Img
                              src="images/img_megaphone_white_a700.svg"
                              alt="megaphone_One"
                            />
                          </Button>
                          <Button className="flex h-[38px] items-center justify-center ml-2.5 md:ml-[0] rounded-[3px] w-[38px]">
                            <Img src="images/img_mail.svg" alt="mail" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start pt-[38px] w-full">
                        <div className="overflow-auto w-[96%]">
                          <ReactTable
                            columns={tableColumns}
                            data={tableData.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                        <Line className="bg-gray-300 h-px w-full" />
                        <Line className="bg-gray-300 h-px w-full" />
                        <Line className="bg-gray-300 h-px mt-[50px] w-full" />
                        <Line className="bg-gray-300 h-px mt-[55px] w-full" />
                        <Line className="bg-gray-300 h-px mt-[55px] w-full" />
                        <Line className="bg-gray-300 h-px mt-[54px] w-full" />
                        <Line className="bg-gray-300 h-px mt-[55px] w-full" />
                        <Line className="bg-gray-300 h-px mt-14 w-full" />
                        <Line className="bg-gray-300 h-px mt-[55px] w-full" />
                        <Line className="bg-gray-300 h-px mt-[55px] w-full" />
                        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[19px] w-[95%] md:w-full">
                          <div className="flex flex-row items-start justify-evenly w-[15%] sm:w-full">
                            <Text
                              className="mt-[11px] text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Show
                            </Text>
                            <div className="md:h-[37px] h-[38px] relative w-[38%]">
                              <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto rounded-[5px] w-full">
                                <Img
                                  className="h-[37px]"
                                  src="images/img_thumbsup.svg"
                                  alt="thumbsup"
                                />
                              </div>
                              <div className="absolute flex flex-row gap-2.5 h-max inset-[0] items-end justify-between m-auto w-[67%]">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  10
                                </Text>
                                <Img
                                  className="h-[7px] my-1"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown_One"
                                />
                              </div>
                            </div>
                            <Text
                              className="mt-[11px] text-black-900 text-sm"
                              size="txtInterRegular14Black900"
                            >
                              Entries
                            </Text>
                          </div>
                          <div className="h-[38px] relative w-[26%] sm:w-full">
                            <div className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto w-full">
                              <Input
                                name="columnprevious"
                                placeholder="Previous"
                                className="leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                                wrapClassName="bg-cover bg-no-repeat h-[38px] p-2.5"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group5.svg')",
                                }}
                              ></Input>
                              <div className="md:h-[37px] h-[38px] relative w-[54%]">
                                <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[72%]">
                                  <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rounded-br rounded-tr w-[61%]">
                                    <Img
                                      className="h-[37px]"
                                      src="images/img_television.svg"
                                      alt="television"
                                    />
                                  </div>
                                  <Text
                                    className="absolute bottom-[24%] right-[13%] text-black-900 text-sm"
                                    size="txtInterRegular14Black900"
                                  >
                                    Next
                                  </Text>
                                  <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[41%]">
                                    <Img
                                      className="h-[37px]"
                                      src="images/img_television_gray_300.svg"
                                      alt="television_One"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="absolute bottom-[24%] left-[40%] text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  3
                                </Text>
                                <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[29%]">
                                  <Img
                                    className="h-[37px]"
                                    src="images/img_television_gray_300.svg"
                                    alt="television_Two"
                                  />
                                </div>
                                <Text
                                  className="absolute bottom-[24%] left-[12%] text-black-900 text-sm"
                                  size="txtInterRegular14Black900"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bg-light_green-500 flex flex-col h-full inset-y-[0] items-center justify-start left-[32%] my-auto w-[16%]">
                              <Img
                                className="h-[37px]"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                            </div>
                            <Text
                              className="absolute bottom-[24%] left-[38%] text-sm text-white-A700"
                              size="txtInterRegular14WhiteA700"
                            >
                              1
                            </Text>
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
      </div>
    </>
  );
};

export default ViolationsPage;
