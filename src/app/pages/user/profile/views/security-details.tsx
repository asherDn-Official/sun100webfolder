import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Api from "src/api";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";

export const SecurityDetails = ({
  user,
  update,
}: {
  user: Contexts.userContext.User;
  update: () => void;
}) => {
  // const disableTwoStep = async () => {
  //   await Api.Server.Request("enableTwoStepVerification", { status: "false" });
  //   update();
  // };

  return (
    <Components.Global.Container
      id="twoFactorAuthentication"
      direction="column"
      justifyContent="start"
      spacing={2}
      height={'100%'}
    >
      <Mui.Typography variant="h5">Security Details</Mui.Typography>
      <Mui.Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Mui.Typography variant="body1">
          Two-Factor Authentication
        </Mui.Typography>
        {!user?.enableTwoFactor ? (
          <Mui.Button
            variant="contained"
            component={Router.Link}
            sx={{borderRadius: "15px"}}
            to={`${Constants.API_CONFIG.base}profile/two-factor/true`}
          >
            Enable
          </Mui.Button>
        ) : (
          <Mui.Button
            color="primary"
            variant="contained"
            component={Router.Link}
            to={`${Constants.API_CONFIG.base}profile/two-factor/false`}
            // to={`${Constants.API_CONFIG.base}profile/securitydetails`}
            // onClick={disableTwoStep}
          >
            Disable
          </Mui.Button>
        )}
      </Mui.Stack>
    </Components.Global.Container>
  );
};
