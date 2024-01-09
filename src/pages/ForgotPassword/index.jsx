import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { forgotPassword } from "service/api";

import { Button, Img, Input, Text } from "components";

import useForm from "hooks/useForm";

import "react-toastify/dist/ReactToastify.css";

const ForgotPasswordPage = () => {
  const [forgotpassword, setForgotpassword] = React.useState();
  const [forgotpassword1, setForgotpassword1] = React.useState();
  const form1 = useForm({ email: "" });
  const navigate = useNavigate();
  const form = useForm({ email: "" });

  function callApi(data) {
    const req = { data: { email: data?.email } };

    forgotPassword(req)
      .then((res) => {
        setForgotpassword1(res?.data);

        navigate("/changepassword");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Email not found");
      });
  }
  function reset(data) {
    const req = { data: { email: data?.email } };

    forgotPassword(req)
      .then((res) => {
        setForgotpassword(res?.data);

        navigate("/changepassword");
      })
      .catch((err) => {
        console.error(err);
        callApi(res?.data);
      });
  }

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[935px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_signin.png')" }}
      >
        <div className="bg-black-900_7a flex flex-col md:gap-10 gap-[148px] items-center justify-end p-[52px] md:px-10 sm:px-5 w-full">
          <div className="h-[499px] md:h-[663px] mt-[165px] relative w-4/5 md:w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-start justify-center my-auto p-[95px] md:px-10 sm:px-5 right-[0] w-[87%]">
              <Img
                className="h-[60px] md:ml-[0] ml-[327px] mt-1"
                src="images/img_clippathgroup_black_900_60x220.svg"
                alt="clippathgroup"
              />
              <a
                href="javascript:"
                className="md:ml-[0] ml-[327px] mt-[33px] text-black-900 text-lg"
              >
                <Text size="txtInterBold18">Forgot Password</Text>
              </a>
              <Text
                className="md:ml-[0] ml-[327px] mt-[11px] text-blue_gray-400 text-sm"
                size="txtInterRegular14"
              >
                We will send a veriification code to your registered email
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[327px] mt-[29px] rounded w-[52%] md:w-full">
                <Input
                  name="columnenterregistered_one"
                  placeholder="Enter registered Email ID"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-sm w-full"
                  wrapClassName="bg-cover bg-no-repeat h-[39px] p-2 w-full"
                  style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  onChange={(e) => {
                    form1.handleChange("email", e);
                    form.handleChange("email", e);
                  }}
                  value={form?.values?.email}
                ></Input>
              </div>
              <Text
                className="md:ml-[0] ml-[327px] mt-[5px] text-[10px] text-deep_orange-A700"
                size="txtInterRegular10DeeporangeA700"
              >
                {forgotpassword1?.message}
              </Text>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] mb-1 min-w-[110px] md:ml-[0] ml-[327px] mt-7 rounded text-center text-sm"
                onClick={() => {
                  form1.handleSubmit(reset);
                }}
                color="light_green_500"
                size="sm"
              >
                Reset
              </Button>
            </div>
            <Img
              className="absolute h-[498px] inset-y-[0] left-[0] my-auto object-cover w-[51%]"
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
      <ToastContainer />
    </>
  );
};

export default ForgotPasswordPage;
