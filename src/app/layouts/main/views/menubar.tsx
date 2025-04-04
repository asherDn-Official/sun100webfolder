import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import React from "react";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Layouts from "src/app/layouts";

export const MenuBar = ({
  check,
  trigger,
  user,
  ...props
}: {
  check: boolean;
  trigger: boolean;
  user: Contexts.userContext.User;
} & Mui.BoxProps) => {
  const [open, close] = React.useState(false);
  const { pathname } = Router.useLocation();
  const themeLand = pathname === '/'

  const handleClose = () => close(!open);

  return (
    <Mui.Box {...props}>
      <Mui.IconButton
        size="small"
        onClick={handleClose}
        sx={{
          display: { xs: "flex", md: "none" },
          color: (theme) => theme.palette.mode === 'dark' || themeLand ?  "#fff" : "rgb(0, 0, 0)",
        }}
      >
        <MuiIcons.Menu /* sx={{color: "#fff"}} */ />
      </Mui.IconButton>
      <Mui.Drawer 
        anchor='right'
        open={open}
        sx={{ "& .MuiPaper-root": { bgcolor: (theme) => theme.palette.mode === 'dark' ?  "rgba(0, 0, 0, 0.90)" : "#fff" } }}
        onClose={handleClose}
      >
        <Mui.Toolbar>
          <Mui.Stack direction="row" alignItems="center">
            <Layouts.Main.Views.Profile check={check} trigger={trigger} />
            <Mui.Typography variant="body1">{`${user?.firstName} ${user?.lastName}`}</Mui.Typography>
          </Mui.Stack>
          <Mui.IconButton size="small" onClick={handleClose}>
            <MuiIcons.KeyboardArrowRight />
          </Mui.IconButton>
          {!themeLand && <Layouts.Main.Views.ThemeSwitch />}
        </Mui.Toolbar>
        <Mui.Divider sx={{ mb: 1 }} />
        {Constants.Navigations.map((text, index) => (
          <Mui.ListItem
            // button
            key={index}
            component={Router.Link}
            to={text.toLowerCase()}
            onClick={handleClose}
            sx={
              pathname.includes(text.toLowerCase())
                ? {
                    color: "primary.main",
                    borderRadius: 0,
                    fontWeight: "bolder",
                    boxShadow: (theme) =>
                      `-2rem 0px 2rem -1rem ${theme.palette.primary.main} inset`,
                    mt: -0.5,
                    pt: 2,
                  }
                : { color: "text.secondary" }
            }
          >
            {text}
          </Mui.ListItem>
        ))}
        <Mui.ListItem
          component={Router.Link}
          to={'wallet'}
          onClick={handleClose}
          sx={
            pathname.includes('wallet'.toLowerCase())
              ? {
                  color: "primary.main",
                  borderRadius: 0,
                  fontWeight: "bolder",
                  boxShadow: (theme) =>
                    `-2rem 0px 2rem -1rem ${theme.palette.primary.main} inset`,
                  mt: -0.5,
                  pt: 2,
                }
              : { color: "text.secondary" }
          }
        >
          Wallet
        </Mui.ListItem>
      </Mui.Drawer>
    </Mui.Box>
  );
};
