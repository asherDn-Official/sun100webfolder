import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";

export const Trade = ({
  user,
}: {
  user: Contexts.userContext.User | undefined;
}) => (
  <Mui.Stack
    sx={{
      // position: "relative",
      // backgroundImage: `url('${Assets.MarketTrands}')`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // height: { xs: "145vh", md: "65vh" },
      // overflow: "hidden",
      marginTop: "2rem",
      px: { xs: 2, md: 5 },
    }}
    // component={Mui.Container}
    // maxWidth="xl"
  >
    <Mui.Typography
      variant="h4"
      textAlign="center"
      fontWeight={900}
      sx={{ fontSize: { xs: "25px", md: "32px" } }}
    >
      Why{" "}
      <span
        style={{
          color: "#FCB923",
        }}
      >
        Sun100
      </span>{" "}
      ?
    </Mui.Typography>
    <Mui.Stack
      justifyContent="space-around"
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "flex-end" }}
      sx={{
        py: 3,
      }}
      spacing={3}
    >
      <Components.Global.WhyusCard
        image={`${import.meta.env.BASE_URL}/images/Uiversal transaction.png`}
        title="Universal Access"
        content="Signup with Sun100 with Your Email"
      />
      <Components.Global.WhyusCard
        image={`${import.meta.env.BASE_URL}/images/Secure storage.png`}
        title="Secure Storage"
        content="Deposit INR to your wallet through secure payment"
      />
      <Components.Global.WhyusCard
        image={`${import.meta.env.BASE_URL}/images/Rapid transaction.png`}
        title="Rapid Transactions"
        content="Trade Crypto safely and effortlessly."
      />
      {/* <CardComponent
        image={Assets.Register}
        path={
          Boolean(user?.email)
            ? `${Constants.API_CONFIG.base}profile`
            : `${Constants.API_CONFIG.base}account/register`
        }
        button={Boolean(user?.email) ? "Go to Profile" : "Register Now"}
      />
      <CardComponent
        image={Assets.Trade}
        path={
          Boolean(user?.email)
            ? `${Constants.API_CONFIG.base}spot`
            : `${Constants.API_CONFIG.base}account/register`
        }
        button="Trade Now"
      /> */}
    </Mui.Stack>
  </Mui.Stack>
);

const CardComponent = ({
  image,
  path,
  button,
}: {
  image: string;
  path: string;
  button: string;
}) => (
  <Mui.Stack alignItems="center">
    <Mui.Box
      component="span"
      sx={{
        bgcolor: (theme) => `${theme.palette.primary.main}20`,
        width: "15rem",
        height: "15rem",
        position: "relative",
        borderRadius: 50,
        mb: 3,
        "&:hover": {
          bgcolor: "primary.main",
        },
      }}
    >
      <Mui.CardMedia
        component="img"
        src={image}
        sx={{
          width: "8rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Mui.Box>
    <Mui.Typography>
      <Mui.Button
        variant="contained"
        size="large"
        component={Router.Link}
        to={path}
        id={button.replace(" ", "_").toLowerCase()}
        sx={{ fontWeight: "bold" }}
      >
        {button}
      </Mui.Button>
    </Mui.Typography>
  </Mui.Stack>
);
