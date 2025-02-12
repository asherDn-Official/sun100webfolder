import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Components from "src/app/components";

export const Content = () => {

  return (
    <Mui.CardContent
      component={Mui.Stack}
      gap={2}
      sx={{
        justifyContent: "center",
        padding: '0px !important'
        // bgcolor: "background.default",
      }}
    >
      <Components.Form.FormField
        label="Email"
        name="email"
        type="text"
        size="medium"
        hide={true}
      />
      <Components.Form.FormField
        label="Password"
        name="password"
        type="password"
        size="medium"
        hide={true}
      />
      <Mui.Link
        color="text.secondary"
        component={Router.Link}
        to={`${Constants.API_CONFIG.base}account/forgot-password`}
      >
        Forgot password?
      </Mui.Link>
      <Components.Form.SubmitButton size="large" sx={{ fontWeight: "bold" }}>
        Login
      </Components.Form.SubmitButton>
    </Mui.CardContent>
  );
};
