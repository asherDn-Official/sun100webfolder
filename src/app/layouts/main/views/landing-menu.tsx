import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const LandingMenu = ({ trigger }: { trigger: boolean }) => {
  const { pathname } = Router.useLocation();

  return (
    <Mui.Stack
      direction="row"
      spacing={1}
      alignItems="center"
      pl={1.5}
      sx={{ color: trigger ? "text.primary" : "background.paper" }}
    >
      <Mui.Button
        component={Router.Link}
        to="account/login"
        sx={{
          color: pathname === "/" ? "#fff" : "text.primary",
          fontSize: {xs: '1rem', md: '1.25rem'}
        }}
      >
        Login
      </Mui.Button>
      <Mui.Button
        variant="contained"
        component={Router.Link}
        to="account/login"
        sx={
          trigger
            ? {              
              borderRadius: 4,
              fontSize: {xs: '1rem', md: '1.25rem'}
            }
            : {
                fontSize: {xs: '1rem', md: '1.25rem'},
                bgcolor: "primary.light",
                "&:hover": { bgcolor: "primary.light" },
              }
        }
      >
        Sign Up
      </Mui.Button>
    </Mui.Stack>
  );
};
