import * as Formik from "formik";
import React from "react";
import * as Router from "react-router-dom";
import * as Api from "src/api";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";
import * as Providers from "src/app/providers";

export const useAuth = () => {
  const navigate = Router.useNavigate();
  const { referal } = Router.useParams();
  const dataLocation = Router.useLocation().search;
  const token = new URLSearchParams(dataLocation).get("token");
  const handler = Providers.useCustomHandler;
  const { user, update } = React.useContext(Contexts.UserContext);

  const login = async (
    values: Auth.login,
    { setSubmitting, resetForm }: Formik.FormikHelpers<Auth.login>
  ) => {
    localStorage.removeItem("token");
    localStorage.removeItem("TWOFA");
    sessionStorage.removeItem("email");
    token &&
      (await Api.Server.Request(
        "emailVerify",
        {},
        { Authorization: token }
      ).then((res) =>
        res?.error
          ? null
          : handler({
              message: res.message,
              variant: "success",
            })
      ));

    await Api.Server.Request("login", values)
      .then((res) => {
        if (res?.error) {
          // Handle error cases based on the message
          if (
            [
              "Account Suspended",
              "Your account banned",
              "Your account suspended",
            ].includes(res?.message)
          ) {
            navigate("blocked", { state: { message: res?.message } });
          } else if (res?.message === "Email Not Verified") {
            sessionStorage.setItem("email", values.email);
            navigate(`${Constants.API_CONFIG.base}account/two-factor/verify`, {
              state: values,
            });
          } else {
            handler({
              message: res.message,
              variant: "error",
            });
          }
        } else {
          // If no error, proceed to handle success
          if (localStorage.getItem("TWOFA")) {
            //setTimeout(() => {
            navigate(`${Constants.API_CONFIG.base}account/two-factor/true`);
            localStorage.removeItem("TWOFA"); // Move this inside the condition
            //}, 1000);
            update();
          } else {
            update(); // Call update function only if TWOFA is not required
          }
        }
      })
      .finally(() => {
        // Always stop submitting and reset form
        setSubmitting(false);
        resetForm();
      });
  };

  const register = async (
    values: Auth.register,
    { setSubmitting, resetForm }: Formik.FormikHelpers<Auth.register>
  ) => {
    localStorage.removeItem("token");
    localStorage.removeItem("TWOFA");
    sessionStorage.removeItem("email");
    await Api.Server.Request("regsiter", values)
      .then((res) => {
        localStorage.setItem(`TWOFA`, "true");
        sessionStorage.setItem(`email`, values.email);
        if (res?.error) {
          handler({
            message: res.message?.message || res.message,
            variant: "error",
          });
        } else {
          if (res?.accessToken) {
            localStorage.setItem("token", res.accessToken);
            console.log("JWT Token Saved:", res.accessToken);
          }
          if (res?.user) {
            sessionStorage.setItem(`email`, res.user.email);
           }
          
          
          navigate(
            
            // referal
            //   ? "../success"
            //   :
            `${Constants.API_CONFIG.base}account/two-factor/verify`,
            { state: values }
          );
          resetForm();
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const forgot = async (
    values: Auth.email,
    { setSubmitting, resetForm }: Formik.FormikHelpers<Auth.email>
  ) => {
    await Api.Server.Request("resetUserEmail", values)
      .then((res) => {
        res?.error
          ? handler({
              message: res.message,
              variant: "error",
            })
          : navigate("success");
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  const reset = async (
    values: Auth.reset,
    { setSubmitting, resetForm }: Formik.FormikHelpers<Auth.reset>
  ) => {
    await Api.Server.Request("changePassword", { ...values, token })
      .then((res) => {
        res?.error
          ? handler({
              message: res.message,
              variant: "error",
            })
          : navigate("success");
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  const sendMail = async () => {
    const email = sessionStorage.getItem("email");

    // Log the email being used
    console.log("📧 Register Mail - Email being used:", email);

    try {
      const response = await Api.Server.Request("twoStepVerification", {
        email: email,
      });

      // Log the API response
      console.log("✅ OTP Sent - Response:", response);

      return response;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("❌ OTP Request Failed - Error:", error);
      throw error; // re-throw the error to propagate it
    }
  };
  const registerMail = async () => {
    const email = sessionStorage.getItem("email");

    // Log the email being used
    console.log("📧 Register Mail - Email being used:", email);

    try {
      const response = await Api.Server.Request("twoStepVerification", {
        email: email,
      });

      // Log the API response
      console.log("✅ OTP Sent - Response:", response);

      return response;
    } catch (error) {
      // Log any errors that occur during the request
      console.error("❌ OTP Request Failed - Error:", error);
      throw error; // re-throw the error to propagate it
    }
  };

  // const verify = async (otp: string, status: string) => {
  //   const VerifyOtp = await Api.Server.Request("verifyEmail", { otp });
  //   if (!VerifyOtp.error) {
  //     await Api.Server.Request("enableTwoStepVerification", { status: status });
  //     update();
  //     navigate("success");
  //   } else
  //     handler({
  //       message: VerifyOtp.message,
  //       variant: "error",
  //     });
  // };

  const verify = async (otp: string) => {
    const VerifyOtp = await Api.Server.Request("verifyEmail", {
      otp,
      email: sessionStorage.getItem("email"),
    });
    console.log("VerifyOtp", VerifyOtp);
    if (!VerifyOtp.error) {
      await Api.Server.Request(
        "emailVerify",
        {},
        { Authorization: VerifyOtp.accessToken }
      ).then((res) =>
        res?.error
          ? null
          : handler({
              message: res.message,
              variant: "success",
            })
      );
      update();
      navigate("success");
    } else
      handler({
        message: VerifyOtp.message,
        variant: "error",
      });
  };

  const registerVerify = async (otp: string) => {
    const VerifyOtp = await Api.Server.Request("verifyEmail", {
      otp,
      email: sessionStorage.getItem("email"),
    });
     if (!VerifyOtp.error) {
      await Api.Server.Request(
        "emailVerify",
        {},
        { Authorization: VerifyOtp.accessToken }
      ).then((res) =>
        res?.error
          ? null
          : handler({
              message: res.message,
              variant: "success",
            })
      );
      update();
      navigate("success");
    } else
      handler({
        message: VerifyOtp.message,
        variant: "error",
      });
  };

  return {
    login,
    register,
    forgot,
    reset,
    sendMail,
    verify,
    referal,
    registerMail,
    registerVerify,
  };
};

export declare namespace Auth {
  export interface email {
    email: string;
  }
  export interface password {
    password: string;
  }

  export interface confirmPassword {
    confirmPassword: string;
  }

  export interface registerRemains {
    firstName: string;
    lastName: string;
    // phoneNumber: string;
    referalCode: string;
    termsOfService: boolean;
  }
  export type login = email & password;
  export type register = registerRemains & email & password;
  export type reset = password & confirmPassword;
}
