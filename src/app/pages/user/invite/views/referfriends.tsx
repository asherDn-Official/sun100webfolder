import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const ReferFriends = () => {
  return (
    <Mui.Paper
      component={Mui.Stack}
      // spacing={3}
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "background.paper" : "#FFFDEB",
        px: 5,
        // py: 4
      }}
      alignItems="start"
    >
      <Pages.Views.IntroJSConfig name="invite" />
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Mui.Stack gap={2}>
          <Mui.Typography variant="h4">Referrals</Mui.Typography>
          <Mui.Typography variant="subtitle1">
            Invite your friends to join Sun100 today. When they sign up and
            start trading, you’ll receive exciting cashback rewards
          </Mui.Typography>
        </Mui.Stack>
        <Mui.Stack>
          <Mui.CardMedia
            src={`${import.meta.env.BASE_URL}images/referal.png`}
            component="img"
            sx={{
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
            }}
          />
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Paper>
  );
};
