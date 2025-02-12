import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Layouts from "src/app/layouts";
import * as Contexts from "src/app/contexts";

export const MainMenu = ({
  check,
  trigger,
  user
}: {
  check: boolean;
  trigger: boolean;
  user: Contexts.userContext.User;
}) => {
  const { pathname } = Router.useLocation();

  return (
    <>
      <Mui.Box flexGrow={2} />
      <Mui.Stack
        direction="row"
        spacing={5}
        sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}
      >
        {Constants.Navigations.map((text, index) => (
          <Mui.Stack key={index}>
            <Mui.Box
              // component="span"
              // borderRadius={8}
              // sx={{
              //   bgcolor: "primary.dark",
              //   width: "104%",
              //   p: 0.5,
              //   mt: -2.6,
              //   ml: -0.2,
              //   display: pathname.includes(text.toLowerCase())
              //     ? "block"
              //     : "none",
              // }}
            />
            <Mui.Button
              key={index}
              disableRipple
              component={Router.Link}
              to={text.toLowerCase()}
              sx={
                pathname.includes(text.toLowerCase())
                  ? {
                      color: "#fff",
                      borderRadius: 0,
                      backgroundColor: 'primary.main',
                      padding: 1.25,
                      // boxShadow: (theme) =>
                      //   `0 1rem 15px -.8rem ${theme.palette.primary.main} inset`,
                      // mt: -0.5,
                      // pt: 2,
                      "&:hover" : {
                        backgroundColor: 'primary.main'
                      }
                    }
                  : { color: pathname === '/' ? '#fff' : 'text.primary' }
              }
            >
              <Mui.Typography variant="body1" fontWeight={700} color='inherit'>
                {text}
              </Mui.Typography>
            </Mui.Button>
          </Mui.Stack>
        ))}
      </Mui.Stack>
      <Mui.Box flexGrow={2} />
      <Mui.Stack direction='row' pr={1} gap={1.5}>
        {Boolean(user?.email) &&
          <Mui.Button 
            disableRipple
            component={Router.Link}
            to={'Wallet'.toLowerCase()}
            sx={{
              border: '1px solid #FCB923',
              borderRadius: 1.25,
              display: {xs: 'none', md: 'flex'},
              padding: 1.25,
              bgcolor: 'rgba(255, 227, 0, 0.08)'
            }}
            endIcon={
                  <Mui.CardMedia
                    src="images/Frame.png"
                    component="img"
                    sx={{
                      width: 17,
                      height: 17,
                    }}
                  />
                }>
                <Mui.Typography variant="body1" fontWeight={700} color='inherit'>
                  Wallet
                </Mui.Typography>
          </Mui.Button>
        }
        {Boolean(pathname.includes('login')) &&
          <Mui.Stack direction="row" alignItems="center">
            <Mui.Box sx={{ display: { xs: "none", sm: check ? "none" : "block" } }}>
              <Layouts.Main.Views.ThemeSwitch />
            </Mui.Box>
          </Mui.Stack>
        }
      </Mui.Stack>
      {Boolean(user?.email) && 
        <Mui.Stack direction="row" alignItems="center" spacing={1}>
          <Layouts.Main.Views.Notification check={check} trigger={trigger} />
          <Layouts.Main.Views.Profile click check={check} trigger={trigger} />
          <Mui.Box sx={{ display: { xs: "none", sm: check ? "none" : "block" } }}>
            <Layouts.Main.Views.ThemeSwitch />
          </Mui.Box>
        </Mui.Stack>
      }
    </>
  );
};
