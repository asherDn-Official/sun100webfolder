import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as React from "react";
import * as Contexts from "src/app/contexts";
import OTPInput from "react-otp-input-rc-18";
import * as Hooks from "src/app/hooks";
import * as Router from "react-router-dom";

export const EmailVerify = () => {
  const { user } = React.useContext(Contexts.UserContext);
  const { sendMail, verify, registerVerify, registerMail } =
    Hooks.User.useAuth();
  const [loading, setLoading] = React.useState(false);
  const [send, setSend] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const { pathname, state } = Router.useLocation();
  const parts = pathname.split("/");
  const lastValue = parts[parts.length - 1];
  const email = sessionStorage.getItem("email")
    ? sessionStorage.getItem("email")
    : state?.email;
 
  const SendOtp = async () => {
    setLoading(true);
    if (lastValue === "verify") {
      console.log("registerMail");
      await registerMail();
    } else {
      console.log("sendMail");
      await sendMail();
    }
    setLoading(false);
    console.log("111111111");
    setSend(true);
  };

  const Verify = async () => {
    setLoading(true);
    if (lastValue === "verify") {
      console.log("registerVerify");
      await registerVerify(otp);
    } else {
      console.log("verify2fa");
      await verify(otp, lastValue);
    }
    setLoading(false);
  };

  return (
    <Mui.Stack
      spacing={2}
      sx={{
        bgcolor: (theme) => `${theme.palette.primary.main}20`,
        p: 2,
        borderRadius: 2,
      }}
    >
      <Mui.Typography variant="body2">
        {send
          ? `We have sent you the code at ${email} Enter the code below.`
          : "Enter your email id. We’ll send a verification code to verify the two-factor authentication code."}
      </Mui.Typography>
      {send ? (
        <Mui.Stack
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          spacing={1}
          alignItems="flex-end"
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle="hide-border"
          />
          <MuiLab.LoadingButton
            variant="contained"
            onClick={Verify}
            loading={loading}
          >
            Verify
          </MuiLab.LoadingButton>
        </Mui.Stack>
      ) : (
        <Mui.Stack
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          spacing={1}
          alignItems="flex-end"
        >
          <Mui.TextField
            placeholder="Enter email"
            size="small"
            value={email}
            disabled
            sx={{
              mr: 1,
              borderRadius: 2,
              bgcolor: "background.default",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
          <MuiLab.LoadingButton
            variant="contained"
            onClick={SendOtp}
            loading={loading}
          >
            Send OTP
          </MuiLab.LoadingButton>
        </Mui.Stack>
      )}
    </Mui.Stack>
  );
};
