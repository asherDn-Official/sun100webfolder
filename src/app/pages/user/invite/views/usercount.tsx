import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

export const UserCount = () => {
    // const { contentCopy } = Hooks.User.useUtils();
    // const { referralCode } = Hooks.User.useGetReferralLink();
  return (
    <Mui.Stack direction='row' gap={1.5} sx={{width: '100%'}}>
        <Components.Global.Container direction="column">
        <Mui.Stack direction="column" spacing={1}>
          <Mui.Stack direction='row' alignItems='center' gap={2}>
            <Mui.CardMedia
                  src="images/usd-circle.png"
                  component="img"
                  sx={{
                    width: 20,
                    height: 20,
                  }}
            />
            <Mui.Typography>
              Your Earnings
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Typography variant="h4">
            $100.00
          </Mui.Typography>
        </Mui.Stack>
        </Components.Global.Container>
        <Components.Global.Container direction="column">
        <Mui.Stack direction="column" spacing={1}>
          <Mui.Stack direction='row' alignItems='center' gap={2}>
            <Mui.CardMedia
                  src="images/users.png"
                  component="img"
                  sx={{
                    width: 20,
                    height: 20,
                  }}
            />
            <Mui.Typography>
              Total Users
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Typography variant="h4">
            231
          </Mui.Typography>
        </Mui.Stack>
        </Components.Global.Container>
    </Mui.Stack>
  );
};
