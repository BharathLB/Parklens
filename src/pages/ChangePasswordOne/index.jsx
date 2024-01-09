import React from "react";

import { Img, Input, Text } from "components";

const ChangePasswordOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[935px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_changepasswordone.png')" }}
      >
        <div className="bg-black-900_7a flex flex-col md:gap-10 gap-[148px] items-center justify-end p-[52px] md:px-10 sm:px-5 w-full">
          <div className="font-notosans h-[499px] md:h-[663px] mt-[165px] relative w-4/5 md:w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-[59px] md:px-10 sm:px-5 right-[0] w-[87%]">
              <Img
                className="h-10 md:ml-[0] ml-[364px] mt-[9px]"
                src="images/img_maskgroup12.svg"
                alt="maskgroupTwelve"
              />
              <Text
                className="md:ml-[0] ml-[364px] mt-[38px] text-black-900 text-lg"
                size="txtNotoSansBold18"
              >
                Change Password
              </Text>
              <Text
                className="md:ml-[0] ml-[364px] mt-[27px] text-black-900 text-sm"
                size="txtNotoSansMedium14"
              >
                Enter New Password
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[364px] mt-2 rounded w-[47%] md:w-full">
                <Input
                  name="columnenteratleasteight"
                  placeholder="Enter at least 8+ characters"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                  wrapClassName="bg-cover bg-no-repeat h-[39px] p-2 w-full"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                ></Input>
              </div>
              <Text
                className="md:ml-[0] ml-[364px] mt-[7px] text-[10px] text-blue_gray-400"
                size="txtNotoSansRegular10"
              >
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </Text>
              <Text
                className="md:ml-[0] ml-[364px] mt-3 text-black-900 text-sm"
                size="txtNotoSansMedium14"
              >
                Re-enter New Password
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[364px] mt-2 rounded w-[47%] md:w-full">
                <Input
                  name="columnenteratleasteight_one"
                  placeholder="Enter at least 8+ characters"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                  wrapClassName="bg-cover bg-no-repeat h-[39px] p-2 w-full"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                ></Input>
              </div>
              <Input
                name="columnchangepassword_one"
                placeholder="Change Password"
                className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm text-white-A700 w-full"
                wrapClassName="bg-light_green-600 md:ml-[0] ml-[364px] mt-[30px] p-1.5 rounded w-[22%]"
              ></Input>
            </div>
            <Img
              className="absolute h-[498px] inset-y-[0] left-[0] my-auto object-cover w-[69%]"
              src="images/img_colorful3dsha_498x518.png"
              alt="colorful3dsha"
            />
          </div>
          <Text
            className="text-sm text-white-A700"
            size="txtInterRegular14WhiteA700"
          >
            © 2023 Parklens. Made with ❤️ in India
          </Text>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordOnePage;
