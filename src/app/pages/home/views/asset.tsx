import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";

export const Asset = ({
  user,
}: {
  user: Contexts.userContext.User | undefined;
}) => (
  <Mui.Container
    sx={{
      py: 2,
      px: { xs: 2, md: 5 },
    }}
    // component={Mui.Container}
    maxWidth="lg"
  >
    <Mui.Typography variant="h4" textAlign="center" fontWeight={900} sx={{ pb: { xs: 1, md: 3 }, fontSize: {xs: '25px', md: '32px'}}}>
        Popular <span style={{
        color: '#FCB923'
      }}>Assets</span>
    </Mui.Typography>
    <Mui.Stack display="flex" direction={{xs: "column", md: 'row'}} alignItems='center' justifyContent="space-between">
        <Mui.Typography color="#141414" fontWeight="700">
            Crypto Profit Potential
        </Mui.Typography>
          <Mui.Button
          id={Boolean(user?.email) ? "wallet" : "register"}
          component={Router.Link}
          to={
            Boolean(user?.email)
              ? `${Constants.API_CONFIG.base}wallet`
              : `${Constants.API_CONFIG.base}account/login`
          }
            sx={{
              bgcolor: "#fff",
              color: "primary.main",
              "&:hover": {
                color: "#fff",
              },
              boxShadow: 'none',
              borderRadius: 1.25
            }}
            variant="contained"
            endIcon={
              <Mui.CardMedia
                  src={`${import.meta.env.BASE_URL}/images/right-arrow.png`}
                  component="img"
                  sx={{
                    width: 20,
                    height: 10,
                  }}
                />}
          >
            See All Coins
          </Mui.Button>
    </Mui.Stack>
    <Mui.Stack
      divider={<Mui.Divider orientation="vertical" flexItem />}
      justifyContent="space-between"
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "flex-end" }}
      sx={{
        py: {xs: 0, md: 3},
      }}
      gap={3}
    >
      <Components.Global.CoinCard
          image={`${import.meta.env.BASE_URL}/images/bitcoin_F 1.png`}
          content="Bitcoin (BTC)"
          title="$47,651.46"
          percent='6%'
      />
      <Components.Global.CoinCard
          image={`${import.meta.env.BASE_URL}/images/bitcoin_F 1 (1).png`}
          content="Ethereum (ETH)"
          title="$3,449.46"
          percent='3.5%'
      />
      <Components.Global.CoinCard
          image={`${import.meta.env.BASE_URL}/images/bitcoin_F 1 (2).png`}
          content="Binance Coin"
          title="$47,651.46"
          percent='5.2%'
      />
    </Mui.Stack>
  </Mui.Container>
);

