import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";
import * as Layouts from "src/app/layouts";

export const Main = () => {
  const { user, update } = React.useContext(Contexts.UserContext);
  const { pathname } = Router.useLocation();
  const navigate = Router.useNavigate();
  const trigger: any = true;
  const pathCondition =
    pathname.includes("help-center") || pathname.includes("invite");
  // const trigger = Mui.useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 0,
  // });
  const check = Hooks.Design.useRouteCheck([
    `${Constants.API_CONFIG.base}tita-center`,
    `${Constants.API_CONFIG.base}logout`,
    `${Constants.API_CONFIG.base}`,
    `${Constants.API_CONFIG.base}contact`,
  ]);

  React.useLayoutEffect(() => {
    if (!/\/p2p\/.*\/(buy|sell)$/g.test(pathname)) {
      window.scrollTo(0, 0);
    }
    if (pathname === `${Constants.API_CONFIG.base}profile`) {
      update();
    }
  }, [pathname]);

  React.useEffect(() => {
    if (localStorage?.getItem("accessToken")) {
      navigate("/dashboard");
    } else {
      navigate("/account/login");
    }
  }, [localStorage?.getItem("accessToken")]);

  return (
    <>
      <Layouts.Main.Views.AppBar trigger={trigger} check={check} user={user} />
      <Mui.Box
        sx={{
          bgcolor: check ? "none" : (theme) => `${theme.palette.grey[100]}`,
          py: check || pathCondition ? 0 : 4,
          height: 'calc(100vh - 65px)',
          overflowY: 'auto'
        }}
      >
        <Router.Outlet />
      </Mui.Box>
      {/* <Layouts.Main.Views.Footer auth={Boolean(user?.email)} /> */}
    </>
  );
};
