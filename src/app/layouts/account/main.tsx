import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";
import * as Components from "src/app/components";
import * as Layouts from "src/app/layouts";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

export const Main = () => {
  const { user, update } = React.useContext(Contexts.UserContext);
  const { pathname } = Router.useLocation();

  return (
    <>
      <Layouts.Main.Views.AppBar check={false} trigger={false} user={user} />
      {/* <Mui.Grid container> */}
      <Mui.Grid
        item
        xs={12}
        md={pathname.includes("terms-of-service") ? 12 : 6}
        sx={{
          /* p: 2, */ overflowY: "auto",
          height: 'Calc(100vh - 65px)',
          bgcolor: (theme) => theme.palette.mode === 'dark' ? "rgba(0, 0, 0, 0.90)" : "#F1F2F5",
          py: 10,
        }}
      >
        <Mui.Container
          maxWidth={pathname.includes("terms-of-service") ? "lg" : "sm"}
          sx={{ px: { xs: 0, sm: 1 } }}
        >
          {/* <Components.Main.MainCenterLogo /> */}
          <Router.Outlet />
        </Mui.Container>
      </Mui.Grid>
      {/* <Mui.Grid
        item
        xs={12}
        md={6}
        sx={{
          position: "relative",
          display: {
            md: ["terms-of-service"].includes(pathname.substring(9))
              ? "none"
              : "block",
            xs: "none",
          },
        }}
      >
        <Mui.CardMedia
          component="img"
          // src={pathname.includes("two-factor") ? Assets.InvestCrypto : Assets.InvestCrypto}
          sx={{ height: "100vh", bgcolor: "#362a2d"}}
        />
        <Mui.CardMedia
          component="img"
          src={Assets.WhiteLogo}
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%) scale(0.22)",
            display: pathname.includes("two-factor") ? "none" : "flex",
          }}
        />
        {pathname.includes("two-factor") ? null : (
          <Layouts.Account.Views.Carousel />
        )}
      </Mui.Grid>  */}
      {/* </Mui.Grid> */}
    </>
  );
};
