import * as Mui from "@mui/material";
import * as Layouts from "src/app/layouts";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Router from "react-router-dom";

export const AppBar = ({
  check,
  trigger,
  user,
}: {
  check: boolean;
  trigger: boolean;
  user: Contexts.userContext.User;
}) => {
  const { pathname } = Router.useLocation()
  const themeLand = pathname === '/'
  
  return (
    <Mui.AppBar
      // elevation={check && !trigger ? 0 : 5}
      sx={{
        position: 'sticky',
        top: 0,
        bgcolor: (theme) => theme.palette.mode === 'dark' || themeLand ?  "rgb(0, 0, 0)" : "#fff",
        borderBottom: (theme) => theme.palette.mode === 'dark' || themeLand ? '1px solid #31313B' : '1px solid #31313b30',
      }}
    >
      <Mui.Container maxWidth={check ? "xl" : false} style={{ padding: 0 }}>
        <Mui.Stack
          direction="row"
          component={Mui.Toolbar}
          justifyContent="space-between"
          alignItems="center"
          style={{paddingRight: "12px", paddingLeft: '12px'}}
        >
          {check ? (
            trigger ? (
              <Components.Main.MainCenterLogo />
            ) : (
              <Components.Main.MainCenterLogoWHITE />
            )
          ) : (
            <Components.Main.MainCenterLogo />
          )}
          {/* {Boolean(user?.email) ? ( */}
            {Boolean(user?.email) && <Layouts.Main.Views.MainMenu check={check} trigger={trigger} user={user} />}
          {/* ) : ( */}
          {Boolean(!user?.email) && Boolean(!pathname.includes('login')) && <Layouts.Main.Views.LandingMenu trigger={trigger} /> }
          {/* )} */}
          {Boolean(user?.email) ? (
            <Layouts.Main.Views.MenuBar
              check={check}
              trigger={trigger}
              user={user}
            />
          ) : null}
        </Mui.Stack>
      </Mui.Container>
    </Mui.AppBar>
  );
};
