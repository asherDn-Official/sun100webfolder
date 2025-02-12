import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

export const ReferLink = () => {
    const { contentCopy } = Hooks.User.useUtils();
    const { referralCode } = Hooks.User.useGetReferralLink();
  return (
    <Components.Global.Container direction="column" justifyContent='flex-start' gap={1.5} sx={{height: '100%'}}>
      <Mui.Typography variant="h4" fontWeight={500} fontSize={{xs: '20px', md: '24px'}}>Share the referal link</Mui.Typography>
      <Mui.Typography variant="subtitle2" color='text.disabled'>
        You can also share your referal link by copying and sending it to your
        friends or sharing it on social media
      </Mui.Typography>
      <Mui.Stack direction="row" pt={2} >
        <Mui.TextField
          id="referralLink"
          variant="outlined"
          size="small"
          value={`${window.location.origin}${Constants.API_CONFIG.base}account/register/${referralCode}`}
          sx={{
            borderRadius: 1,
            bgcolor: (theme) => theme.palette.mode === "dark" ? "background.paper" : "#FFF6E3",
            "& fieldset": {
              borderWidth: 0,
            },
            "& input": {
              color: "text.primary",
            },
          }}
          contentEditable={false}
          fullWidth
        />
        <Mui.Button
          id="copyReferralLink"
          sx={{
            bgcolor: "primary.main",
            color: '#fff',
            "&:hover": {
              bgcolor: "primary.main",
            },
            borderRadius: 2,
          }}
          onClick={() =>
            contentCopy(
              `${window.location.origin}${Constants.API_CONFIG.base}account/register/${referralCode}`
            )
          }
        >
          Copylink
        </Mui.Button>
      </Mui.Stack>
    </Components.Global.Container>
  );
};
