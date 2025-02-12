import * as Mui from "@mui/material";
import * as Assets from "src/assets";
import * as Components from "src/app/components";

export const About = () => (
  <Mui.Grid
    item
    sx={{
      height: { xs: "fit-content", md: "80vh" },
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url('${Assets.MarketTrands}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      //backgroundColor: "#1e162d",
      zIndex: 0,
    }}
    xs={12}
  >
    <Mui.Stack
      sx={{
        py: 2,
        height: "75%",
        backgroundImage: `url('${Assets.WhyBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      alignItems="center"
      justifyContent="center"
      spacing={3}
      zIndex={1}
    >
      <Mui.Typography
        variant="h4"
        textAlign="center"
        fontWeight={900}
        sx={{
          color: "#fdba35",
          pt: 5,
        }}
      >
        About Us
      </Mui.Typography>
      <Mui.Typography
        variant="h6"
        textAlign="center"
        // fontFamily={'arial'}
        sx={{
          color: "#000",
          p: 2,
          fontFamily: "Roboto",
        }}
      >
        Launched today on May 25th, 2024, Sun100 emerged as the culmination of a
        shared dream among a group of passionate young crypto enthusiasts. With
        a fervent belief in the democratization of finance, our mission at
        Sun100 is clear: to empower individuals from all walks of life with
        comprehensive financial services and knowledge. As a dedicated crypto
        exchange platform, we strive to bridge the gap between traditional
        financial systems and the exciting world of cryptocurrency. Whether
        you're a seasoned investor or new to the crypto space, Sun100 is
        committed to providing a user-friendly, secure, and transparent
        environment for all your financial needs. Join us on this journey
        towards a more inclusive and accessible financial future.
      </Mui.Typography>

      {/* <Mui.Stack
        spacing={2}
        justifyContent="space-around"
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
        }}
      >
        <Components.Global.InfoCard
          image={Assets.Universal}
          title="Sign Up"
          content="Sign Up with Sun100 with your email id."
          
        />
        <Components.Global.InfoCard
          image={Assets.SecureStorage}
          title="Transfer Money to Wallet"
          content="Deposit INR to your wallet through secure payment gateways."
        />
        <Components.Global.InfoCard
          image={Assets.SecureTransfer}
          title="Buy/Sell Crypto"
          content="Trade Crypto safely and effortlessly."
        />
      </Mui.Stack> */}
    </Mui.Stack>
  </Mui.Grid>
);
