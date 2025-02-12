import * as React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";

export const TableView = ({
  p2pCoins,
  p2pCoinslogo,
  p2pCurrency,
  setFilter
}: {
  p2pCoins: string[];
  p2pCoinslogo: string[];
  p2pCurrency: string[];
  setFilter: React.Dispatch<
    React.SetStateAction<{
      amount: number;
      amountType: string;
      paymentType: string;
    }>
  >;
}) => {
  const { pathname } = Router.useLocation();
  const { userId, coin, type } = Router.useParams();

  const cryptoCoins = p2pCoinslogo.map((image, index) => ({
    name: p2pCoins[index],
    image,
  }));

  return (
    <Components.Global.Container
      direction="column"
      spacing={2}
      sx={{ minHeight: { md: 700 } }}
    >
      <Mui.Typography variant="h6" textAlign="center" fontWeight={800}>
        {userId ? "P2P Trades" : "P2P Trading"}
      </Mui.Typography>
      <Mui.ButtonGroup
        id="orderType"
        sx={{
          justifyContent: "center",
          "& .MuiButtonGroup-grouped": {
            borderRadius: "4px !important",
            // width: 400,
          },
        }}
      >
        <Mui.Button
          component={Router.Link}
          to={`${coin}/buy`}
          variant={pathname.includes("buy") ? "contained" : "text"}
          // color={pathname.includes("buy") ? "#00C566" : "secondary"}
          sx={{
            clipPath: "polygon(0 0, 100% 0, 97% 100%, 0% 100%)",
            width: 200,
            bgcolor: `${pathname.includes("buy") ? "#00C566" : "#EBEEF3"}`,
            color: `${pathname.includes("buy") ? "#fff" : "#002237"}`,
            fontWeight: 700,
            p: 1.25,
            "&:hover": {
              bgcolor: `${pathname.includes("buy") ? "#00C566" : "#EBEEF3"}`,
            },
          }}
        >
          BUY
        </Mui.Button>
        <Mui.Button
          component={Router.Link}
          to={`${coin}/sell`}
          variant={pathname.includes("sell") ? "contained" : "text"}
          // color={pathname.includes("sell") ? "error" : "secondary"}
          sx={{
            clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0% 100%)",
            width: 200,
            bgcolor: `${pathname.includes("sell") ? "#D33535" : "#EBEEF3"}`,
            color: `${pathname.includes("sell") ? "#fff" : "#002237"}`,
            fontWeight: 700,
            p: 1.25,
            "&:hover": {
              bgcolor: `${pathname.includes("sell") ? "#D33535" : "#EBEEF3"}`,
            },
          }}
        >
          SELL
        </Mui.Button>
      </Mui.ButtonGroup>
      <Mui.Typography>Choose Crypto</Mui.Typography>
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
        width="inherit"
      >
        <Mui.Stack
          direction="row"
          spacing={2}
          alignItems="center"
          width="inherit"
        >
          <Mui.Tabs
            id="assetNavigation"
            variant="scrollable"
            allowScrollButtonsMobile
            value={coin}
            TabIndicatorProps={{
              children: <span className="MuiTabs-indicatorSpan" />,
            }}
            sx={{
              color: "text.primary",
              // backgroundColor: 'background.default',
              width: "fit-content",
              borderBottom: (theme) => `1px solid ${theme.palette.grey[100]}`,
              "& button": {
                minWidth: 50,
              },
              "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
              },
              "& .MuiTabs-indicatorSpan": {
                maxWidth: 50,
                width: "100%",
                backgroundColor: "text.primary",
                borderRadius: 2,
              },
            }}
          >
            {cryptoCoins.map((coin) => (
              <Mui.Tab
                disableRipple
                icon={
                  <Mui.CardMedia
                    component="img"
                    src={`${import.meta.env.VITE_API_ENCRYPTION}://${
                      import.meta.env.VITE_API_IP
                    }${import.meta.env.VITE_ASSETS_PATH}${coin.image}`}
                    sx={{width: 25, height: 25}}
                  />
                }
                label={coin.name}
                value={coin.name}
                component={Router.Link}
                to={`${coin.name}/${type}`}
                sx={{
                  minWidth: 50,
                  fontSize: 16,
                  "&.Mui-selected": {
                    color: "text.primary",
                  },
                }}
              />
            ))}
          </Mui.Tabs>
        </Mui.Stack>
        <Mui.Stack>
          <Pages.P2P.Views.SearchBox
            setFilter={setFilter}
            p2pCurrency={p2pCurrency}
          />
        </Mui.Stack>
      </Mui.Stack>
      <Router.Outlet />
      <Mui.Box flexGrow={1} />
    </Components.Global.Container>
  );
};
