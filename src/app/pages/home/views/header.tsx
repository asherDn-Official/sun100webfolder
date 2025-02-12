import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";

export const Header = ({ user }: { user: Contexts.userContext.User }) => (
  <>
    <Mui.Stack
      sx={{
        position: "relative",
        top: "20%",
        // left: { xs: "0%", sm: "5%" },
        width: { xs: "100%", sm: "70%", md: '50%' },
        // height: "80%",
        px: {xs: 2, md: 10},
        py: {xs: 3, md: 4},
        zIndex: "2",
      }}
    >
      <Mui.Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: "20px", sm: "30px", md: "45px" },
        }}
        variant="h3"
      >
        Best Crypto Trading Platform Across the Globe
      </Mui.Typography>
      <Mui.Typography
        sx={{
          color: "#fff",
          fontWeight: 400,
        }}
        variant="body2"
      >
        Join millions of people around the world in exchanging different types
        of digital assets in a Quick, Safe, and Convenient environment.
      </Mui.Typography>
      <Mui.Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Mui.Button
          id={Boolean(user?.email) ? "wallet" : "register"}
          size="large"
          variant="contained"
          sx={{ width: 130, fontWeight: "bold", borderRadius: 3 }}
          component={Router.Link}
          to={
            Boolean(user?.email)
              ? `${Constants.API_CONFIG.base}wallet`
              : `${Constants.API_CONFIG.base}account/login`
          }
        >
          {Boolean(user?.email) ? "Deposit" : "Get Started"}
        </Mui.Button>
        <Mui.Button
          id={Boolean(user?.email) ? "spot" : "contact"}
          variant="outlined"
          component={Router.Link}
          to={
            Boolean(user?.email)
              ? `${Constants.API_CONFIG.base}spot`
              : `${Constants.API_CONFIG.base}contact`
          }
          sx={{
            color: "#fff",
            width: 130,
            border: `1px solid #fff`,
            borderRadius: 3
          }}
        >
          {Boolean(user?.email) ? "Buy" : "Contact Us"}
        </Mui.Button>
      </Mui.Stack>
    </Mui.Stack>
  </>
);
