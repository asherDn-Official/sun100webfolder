import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import React from "react";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const Main = () => {
  const mdDown = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("md"));
  const { user } = React.useContext(Contexts.UserContext);
  const { data: tickets } = Hooks.Firebase.useFireSnapshot<tickets>(
    "collection",
    `users/${user?.uid}/tickets`
  ).collectionSnapshot();

  return (
    <>
      <Mui.Paper
        component={Mui.Stack}
        spacing={3}
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
            <Mui.Typography variant="h4">Help Center</Mui.Typography>
            <Mui.Typography variant="subtitle1">
              Invite your friends to join Sun100 today. When they sign up and
              start trading, you’ll receive exciting cashback rewards
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Stack>
            <Mui.CardMedia
              src={`${import.meta.env.BASE_URL}/images/helpcenter.png`}
              component="img"
              sx={{
                width: { xs: 100, md: 150 },
                height: { xs: 100, md: 150 },
              }}
            />
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Paper>
      <Mui.Container sx={{ px: { xs: 2 }, pb: 5, pt: 4 }}>
        <Pages.Views.IntroJSConfig name="ticket" />
        <Mui.Grid container justifyContent="center" spacing={2}>
          {mdDown && (
            <Mui.Grid
              item
              xs={12}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Router.Outlet />
            </Mui.Grid>
          )}
          {/* <Mui.Grid item xs={12} md={4}>
            <Components.Global.Container
              direction="column"
              justifyContent="start"
              spacing={2}
            >
              <Mui.Typography variant="h6" sx={{ fontWeight: 900 }}>
                Ticket History ({tickets?.length})
              </Mui.Typography>
            </Components.Global.Container>
          </Mui.Grid> */}
          {!mdDown && (
            <Mui.Grid
              item
              xs={12}
              md={8}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Router.Outlet />
            </Mui.Grid>
          )}
        </Mui.Grid>
      </Mui.Container>
    </>
  );
};
