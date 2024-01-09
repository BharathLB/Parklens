import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { loginDeviceAuth } from "service/api";

import { Button, Img, Input, Text } from "components";

import useForm from "hooks/useForm";

import "react-toastify/dist/ReactToastify.css";

const SigninPage = () => {
  const [login, setLogin] = React.useState();
  const [login1, setLogin1] = React.useState();
  const form = useForm({ username: "", password: "" });
  const navigate = useNavigate();
  const form1 = useForm({ username: "", password: "" });

  function callApi1(data) {
    const req = {
      data: { username: data?.username, password: data?.password },
    };

    loginDeviceAuth(req)
      .then((res) => {
        setLogin1(res?.data);

        navigate("/dhasboard");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Please enter valid credentials");
      });
  }
  function signin(data) {
    const req = {
      data: { username: data?.username, password: data?.password },
    };

    loginDeviceAuth(req)
      .then((res) => {
        setLogin(res?.data);

        navigate("/dhasboard");
      })
      .catch((err) => {
        console.error(err);
        callApi1(res?.data);
      });
  }

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[937px] items-center justify-start mx-auto pt-0.5 w-full"
        style={{ backgroundImage: "url('images/img_signin.png')" }}
      >
        <div className="bg-black-900_7a flex flex-col md:gap-10 gap-[72px] items-center justify-end p-[52px] md:px-10 sm:px-5 w-full">
          <div className="h-[651px] md:h-[740px] max-w-[891px] mt-[89px] mx-auto relative w-full">
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[91px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start mb-[7px] mr-4 w-[51%] md:w-full">
                <Img
                  className="h-[60px]"
                  src="images/img_clippathgroup_black_900_60x220.svg"
                  alt="clippathgroup"
                />
                <Text
                  className="mt-[22px] text-black-900 text-lg"
                  size="txtInterRegular18"
                >
                  Welcome !
                </Text>
                <Text
                  className="mt-[13px] text-blue_gray-400 text-sm"
                  size="txtInterRegular14"
                >
                  Sign in to continue to Parklens Admin Portal
                </Text>
                <Text
                  className="mt-[30px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  Email Address
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start mt-2.5 rounded w-full">
                  <Input
                    name="columnenteremail"
                    placeholder="Enter Email"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                    wrapClassName="bg-cover bg-no-repeat h-[39px] p-2.5 w-full"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                    onChange={(e) => {
                      form.handleChange("username", e);
                      form1.handleChange("username", e);
                    }}
                    value={form1?.values?.username}
                  ></Input>
                </div>
                <Text
                  className="mt-[23px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  Password
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start mt-2.5 rounded w-full">
                  <Input
                    name="columnenterpassword"
                    placeholder="Enter Password"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                    wrapClassName="bg-cover bg-no-repeat h-[39px] p-2.5 w-full"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                    onChange={(e) => {
                      form.handleChange("password", e);
                      form1.handleChange("password", e);
                    }}
                    value={form1?.values?.password}
                  ></Input>
                </div>
                <div className="flex flex-row items-start justify-start mt-[21px] w-[33%] md:w-full">
                  <div className="bg-white-A700 flex flex-col h-[15px] items-center justify-start rounded-[3px] w-[15px]">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_thumbsup_black_900.svg"
                      alt="thumbsup"
                    />
                  </div>
                  <Text
                    className="ml-[5px] text-blue_gray-400 text-sm"
                    size="txtInterRegular14"
                  >
                    Remember me
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[110px] mt-[21px] rounded text-center text-sm"
                  onClick={() => {
                    form.handleSubmit(signin);
                  }}
                  color="light_green_500"
                  size="sm"
                >
                  Sign In
                </Button>
                <a className="mt-[17px] text-blue_gray-400 text-sm">
                  <Text
                    className="common-pointer"
                    size="txtInterRegular14"
                    onClick={() => navigate("/forgotpassword")}
                  >
                    Forgot your password?
                  </Text>
                </a>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[43%]">
              <Img
                className="h-[651px] md:h-auto object-cover w-full"
                src="images/img_colorful3dsha.png"
                alt="colorful3dsha"
              />
            </div>
          </div>
          <Text
            className="text-sm text-white-A700"
            size="txtInterRegular14WhiteA700"
          >
            © 2023 Parklens. Made with ❤️ in India
          </Text>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SigninPage;
