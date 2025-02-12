import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Api from "src/api";
import * as Constants from "src/constants";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const SpotTable = ({
  prices,
  nativePrice,
  nativeCurrency,
  mainCurrency,
  coinList,
  user,
  filter,
}: {
  prices: {
    currency_pair: string;
    last: number;
    symbol: string;
    changePercentage: string;
  }[];
  nativePrice: number;
  nativeCurrency: string;
  mainCurrency: string;
  coinList: Hooks.Main.UseCoin.coin[];
  user: Contexts.userContext.User | undefined;
  filter: string;
}) => {
  const [statics, setStatics] = React.useState<any>([]);
  React.useEffect(() => {
    Api.Server.Client.get(
      `${Constants.API_CONFIG.binanceAPI}/market/tickers?category=spot`
    ).then((res) => setStatics(res.data.result.list));
  }, []);

  return (
    <>
      <Mui.Table
        stickyHeader
        component={Mui.Paper}
        elevation={0}
        sx={{
          // borderRadius: 3,
          // p: 3,
          display: { xs: "none", sm: "table" },
          // bgcolor: "#fff",
          // overflow: "hidden",
          "& .MuiTableCell-root": {
            bgcolor: "transparent",
          },
        }}
      >
        <Mui.TableHead
          sx={{
            bgcolor: "none",
            // bgcolor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? '#F8F9FB'
            //     : "background.default",
          }}
        >
          <Mui.TableRow>
            <Mui.TableCell
              sx={{
                fontWeight: 500,
                color: "#141414",
                textTransform: "uppercase",
                border: "none",
                fontSize: "16px",
              }}
            >
              No
            </Mui.TableCell>
            <Mui.TableCell
              sx={{
                fontWeight: 500,
                color: "#141414",
                textTransform: "uppercase",
                border: "none",
                fontSize: "16px",
              }}
            >
              Name
            </Mui.TableCell>
            <Mui.TableCell
              sx={{
                fontWeight: 500,
                color: "#141414",
                textTransform: "uppercase",
                border: "none",
                fontSize: "16px",
              }}
            >
              Last Price
            </Mui.TableCell>
            <Mui.TableCell
              sx={{
                fontWeight: 500,
                color: "#141414",
                textTransform: "uppercase",
                border: "none",
                fontSize: "16px",
              }}
            >
              Change
            </Mui.TableCell>
            <Mui.TableCell
              sx={{
                fontWeight: 500,
                color: "#141414",
                textTransform: "uppercase",
                border: "none",
                fontSize: "16px",
              }}
            >
              Market Stats
            </Mui.TableCell>
            <Mui.TableCell
              sx={{
                fontWeight: 500,
                color: "#141414",
                textTransform: "uppercase",
                border: "none",
                fontSize: "16px",
              }}
            >
              Trade
            </Mui.TableCell>
          </Mui.TableRow>
        </Mui.TableHead>
        {coinList
          ?.filter(
            ({ active, currency }) =>
              Boolean(active) && currency === mainCurrency
          )
          ?.slice(0, 10)
          .filter((coins) =>
            coins.coin.toLowerCase().includes(filter.toLowerCase())
          )
          .map((coin, index) => (
            <Mui.TableRow key={index}>
              <Mui.TableCell sx={{ border: "none" }}>{index + 1}</Mui.TableCell>
              <Mui.TableCell sx={{ border: "none" }}>
                <Mui.Stack
                  direction="row"
                  gap={2}
                  alignItems="center" /* spacing={2} */
                >
                  <Mui.CardMedia
                    component="img"
                    src={`${import.meta.env.VITE_API_ENCRYPTION}://${
                      import.meta.env.VITE_API_IP
                    }${import.meta.env.VITE_ASSETS_PATH}${coin.coinLogo}`}
                    sx={{ width: 40, borderRadius: 20 }}
                  />
                  <Mui.Stack
                    divider={<Mui.Divider orientation="vertical" flexItem />}
                    direction="row"
                    gap={2}
                    alignItems="center"
                  >
                    <Mui.Typography
                      variant="h6"
                      fontWeight={400}
                      color="#141414"
                      noWrap
                      fontSize="16px"
                    >
                      {coin.coinName}
                    </Mui.Typography>
                    <Mui.Typography
                      variant="body2"
                      fontWeight={400}
                      color="#141414"
                      fontSize="16px"
                    >
                      {coin.coin}
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.TableCell>
              <Mui.TableCell align="center" sx={{ border: "none" }}>
                <Mui.Typography variant="body1" fontSize="16px">
                  <Components.Global.Format
                    number={
                      (coin.bot_status === "off"
                        ? coin.current_price
                        : prices?.find(
                            (coinPrice) =>
                              coinPrice.currency_pair ===
                              `${coin.coin}${coin.currency}`.toUpperCase()
                          )?.last || 0) * nativePrice
                    }
                    type={nativeCurrency}
                  />
                </Mui.Typography>
              </Mui.TableCell>
              <Mui.TableCell align="center" sx={{ border: "none" }}>
                <Mui.Typography
                  fontSize="16px"
                  variant="body1"
                  color={
                    0 <=
                    parseFloat(
                      `${
                        coin?.bot_status === "off"
                          ? coin?.price24hChange
                          : prices?.find(
                              (coinPrice) =>
                                coinPrice.symbol ===
                                `${coin.coin}${coin.currency}`.toUpperCase()
                            )?.changePercentage
                      }`.replace("%", "")
                    )
                      ? "success.main"
                      : "error.main"
                  }
                  component={Mui.Stack}
                  direction="row"
                  justifyContent="center"
                >
                  {/* {0 <=
                  parseFloat(
                    `${
                      coin?.bot_status === "off"
                        ? coin?.price24hChange
                        : prices?.find(
                          (coinPrice) =>
                            coinPrice.symbol ===
                            `${coin.coin}${coin.currency}`.toUpperCase()
                        )?.changePercentage
                    }`.replace("%", "")
                  ) ? (
                    <MuiIcons.ArrowDropUp color="success" />
                  ) : (
                    <MuiIcons.ArrowDropDown color="error" />
                  )}{" "} */}
                  <Components.Global.Format
                    type="percentage"
                    number={parseFloat(
                      `${
                        coin?.bot_status === "off"
                          ? coin?.price24hChange
                          : prices?.find(
                              (coinPrice) =>
                                coinPrice.symbol ===
                                `${coin.coin}${coin.currency}`.toUpperCase()
                            )?.changePercentage
                      }`.replace("%", "")
                    )}
                    negative
                  />
                </Mui.Typography>
              </Mui.TableCell>
              <Mui.TableCell sx={{ border: "none" }}>
                <Pages.Home.Views.SmallChart
                  coin={{
                    ...coin,
                    price24hChange: parseFloat(
                      `${
                        coin?.bot_status === "off"
                          ? coin?.price24hChange
                          : prices?.find(
                              (coinPrice) =>
                                coinPrice.symbol ===
                                `${coin.coin}${coin.currency}`.toUpperCase()
                            )?.changePercentage
                      }`.replace("%", "")
                    ),
                  }}
                />
              </Mui.TableCell>
              <Mui.TableCell sx={{ border: "none" }} align="center">
                <Mui.Button
                  id="buyCoins"
                  variant="contained"
                  sx={{
                    /* width: 80, */ borderRadius: 3,
                    px: 4,
                    py: 0.75,
                    fontSize: "16px",
                  }}
                  component={Router.Link}
                  to={
                    !Boolean(user?.email)
                      ? `${Constants.API_CONFIG.base}account/login`
                      : `spot/${coin.coin}_${coin.currency}`
                  }
                >
                  Trade
                </Mui.Button>
              </Mui.TableCell>
            </Mui.TableRow>
          ))}
      </Mui.Table>
      <Mui.Box sx={{ display: { xs: "block", sm: "none" }, pt: 1 }}>
        <Mui.Table stickyHeader component={Mui.Paper} elevation={0}>
          <Mui.TableHead
            sx={{
              bgcolor: "none",
              // bgcolor: (theme) =>
              //   theme.palette.mode === "light"
              //     ? '#F8F9FB'
              //     : "background.default",
            }}
          >
            <Mui.TableRow>
              <Mui.TableCell
                sx={{
                  fontWeight: 500,
                  color: "#141414",
                  // textTransform: "uppercase",
                  border: "none",
                  pt: 2,
                  pb: 0,
                  px: 0,
                  fontSize: "12px",
                }}
              >
                Name
              </Mui.TableCell>
              <Mui.TableCell
                sx={{
                  fontWeight: 500,
                  color: "#141414",
                  // textTransform: "uppercase",
                  border: "none",
                  pt: 2,
                  pb: 0,
                  px: 0,
                  fontSize: "12px",
                }}
              >
                Last Price
              </Mui.TableCell>
              <Mui.TableCell
                align="center"
                sx={{
                  fontWeight: 500,
                  color: "#141414",
                  // textTransform: "uppercase",
                  border: "none",
                  pt: 2,
                  pb: 0,
                  px: 0,
                  fontSize: "12px",
                }}
              >
                Change
              </Mui.TableCell>
            </Mui.TableRow>
          </Mui.TableHead>
          {coinList
            ?.filter(
              ({ active, currency }) =>
                Boolean(active) && currency === mainCurrency
            )
            ?.slice(0, 4)
            .filter((coins) =>
              coins.coin.toLowerCase().includes(filter.toLowerCase())
            )
            .map((coin, index) => (
              <Mui.TableRow key={index}>
                <Mui.TableCell sx={{ border: "none", py: 2, px: 0 }}>
                  <Mui.Stack
                    direction="row"
                    gap={1}
                    alignItems="center" /* spacing={2} */
                  >
                    <Mui.CardMedia
                      component="img"
                      src={`${import.meta.env.VITE_API_ENCRYPTION}://${
                        import.meta.env.VITE_API_IP
                      }${import.meta.env.VITE_ASSETS_PATH}${coin.coinLogo}`}
                      sx={{ width: 25, borderRadius: 25 }}
                    />
                    <Mui.Stack
                      // divider={<Mui.Divider orientation="vertical" flexItem />}
                      direction="row"
                      // gap={1}
                      alignItems="center"
                    >
                      <Mui.Typography
                        variant="body1"
                        fontWeight={500}
                        color="#141414"
                        noWrap
                        fontSize="14px"
                      >
                        {coin.coinName}
                      </Mui.Typography>
                      <Mui.Typography
                        variant="body1"
                        fontWeight={400}
                        color="#827e7e"
                        fontSize="12px"
                        pl="2px"
                      >
                        <sub>
                          {"/"}
                          {coin.coin}
                        </sub>
                      </Mui.Typography>
                    </Mui.Stack>
                  </Mui.Stack>
                </Mui.TableCell>
                <Mui.TableCell
                  align="center"
                  sx={{ border: "none", py: 2, px: 0 }}
                >
                  <Mui.Typography variant="caption" fontSize="14px">
                    <Components.Global.Format
                      number={
                        (coin.bot_status === "off"
                          ? coin.current_price
                          : prices?.find(
                              (coinPrice) =>
                                coinPrice.currency_pair ===
                                `${coin.coin}${coin.currency}`.toUpperCase()
                            )?.last || 0) * nativePrice
                      }
                      type={nativeCurrency}
                    />
                  </Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell
                  align="center"
                  sx={{ border: "none", py: 2, px: 0 }}
                >
                  <Mui.Typography
                    variant="caption"
                    fontSize="14px"
                    color={
                      0 <=
                      parseFloat(
                        `${
                          coin?.bot_status === "off"
                            ? coin?.price24hChange
                            : prices?.find(
                                (coinPrice) =>
                                  coinPrice.symbol ===
                                  `${coin.coin}${coin.currency}`.toUpperCase()
                              )?.changePercentage
                        }`.replace("%", "")
                      )
                        ? "success.main"
                        : "error.main"
                    }
                    component={Mui.Stack}
                    direction="row"
                    justifyContent="center"
                  >
                    {/* {0 <=
                  parseFloat(
                    `${
                      coin?.bot_status === "off"
                        ? coin?.price24hChange
                        : prices?.find(
                          (coinPrice) =>
                            coinPrice.symbol ===
                            `${coin.coin}${coin.currency}`.toUpperCase()
                        )?.changePercentage
                    }`.replace("%", "")
                  ) ? (
                    <MuiIcons.ArrowDropUp color="success" />
                  ) : (
                    <MuiIcons.ArrowDropDown color="error" />
                  )}{" "} */}
                    <Components.Global.Format
                      type="percentage"
                      number={parseFloat(
                        `${
                          coin?.bot_status === "off"
                            ? coin?.price24hChange
                            : prices?.find(
                                (coinPrice) =>
                                  coinPrice.symbol ===
                                  `${coin.coin}${coin.currency}`.toUpperCase()
                              )?.changePercentage
                        }`.replace("%", "")
                      )}
                      negative
                    />
                  </Mui.Typography>
                </Mui.TableCell>
              </Mui.TableRow>
            ))}
        </Mui.Table>
      </Mui.Box>
    </>
  );
};
