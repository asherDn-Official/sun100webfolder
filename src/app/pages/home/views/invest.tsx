import * as Mui from "@mui/material";
import * as Assets from "src/assets";
import * as Components from "src/app/components";

export const Invest = () => (
  <Mui.Grid
    item
    sx={{
      // height: { xs: "fit-content", md: "135vh" },
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url('${import.meta.env.BASE_URL}/images/kickstart.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "contain",
      backgroundColor: "#FBFBFB",
      zIndex: 0,
    }}
    xs={12}
  >
    <Mui.Stack
      sx={
        {
          // py: 2,
          // height: "89%",
          // backgroundImage: `url('images/kickstart.png')`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }
      }
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Mui.Typography
        variant="h4"
        textAlign="center"
        fontWeight={900}
        sx={{
          // color: "#ffff",
          pt: { xs: 2, md: 10 },
          width: { xs: "90%", md: "35%" },
          fontSize: { xs: "25px", md: "32px" },
        }}
      >
        Kick-start <span style={{ color: "#FCB923" }}>Trading</span> In Three
        Simple Steps
      </Mui.Typography>

      <Mui.Stack
        // spacing={4}
        gap={5}
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          py: { xs: 0, md: 8 },
          px: { xs: 2, md: 5 },
        }}
      >
        <Mui.Stack sx={{ width: { xs: "100%", md: "33.33%" } }}>
          <Components.Global.KickStartCard
            image={`${import.meta.env.BASE_URL}/images/Sign-up-verify.png`}
            title="Sign Up and Verify in 10 minutes"
            content="Sign Up with Sun100 with your email id."
            step="1"
          />
        </Mui.Stack>
        <Mui.Stack sx={{ width: { xs: "100%", md: "33.33%" } }}>
          <Components.Global.KickStartCard
            image={`${import.meta.env.BASE_URL}/images/transfer-money-wallet.png`}
            title="Transfer Money to Wallet"
            content="Deposit INR to your wallet through secure payment gateways."
            step="2"
          />
        </Mui.Stack>
        <Mui.Stack sx={{ width: { xs: "100%", md: "33.33%" } }}>
          <Components.Global.KickStartCard
            image={`${import.meta.env.BASE_URL}/images/buy-sell-crypto.png`}
            title="Buy/Sell Crypto"
            content="Trade Crypto safely and effortlessly."
            step="3"
          />
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Stack>
  </Mui.Grid>
);
