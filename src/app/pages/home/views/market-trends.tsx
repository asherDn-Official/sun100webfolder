import * as FirebaseFirestore from "firebase/firestore";
import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const MarketTrends = ({
  user,
  prices,
  nativeCurrency,
  mainCurrency,
  nativePrice,
  account,
  marketNfts,
  gasFee,
  syncedAccount,
  coinList,
}: {
  user: Contexts.userContext.User;
  prices: {
    currency_pair: string;
    last: number;
    symbol: string;
    changePercentage: string;
  }[];
  nativeCurrency: string;
  mainCurrency: string;
  nativePrice: number;
  account: string | undefined;
  marketNfts: nft[] | undefined;
  gasFee: string;
  syncedAccount: string | undefined;
  coinList: Hooks.Main.UseCoin.coin[];
}) => {
  const [value, setValue] = React.useState<"spot" | "token">("spot");
  const [filter, setFilter] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const query = [
    FirebaseFirestore.where("showPostTill", ">=", new Date().getTime()),
    FirebaseFirestore.where("status", "in", ["pending", "partiallyPending"]),
    FirebaseFirestore.orderBy("showPostTill", "desc"),
  ];
  const { data: trades } = Hooks.Firebase.useFireSnapshot<p2pTrade>(
    "collection",
    `p2p_trade_book`
  ).collectionSnapshot(query);
  const { data: users } =
    Hooks.Firebase.useFireSnapshot<Hooks.User.UseUser.User>(
      "collection",
      "users"
    ).collectionSnapshot();
  const { data: reviews } = Hooks.Firebase.useFireSnapshot<p2p_review>(
    "collectionGroup",
    `reviews`
  ).collectionSnapshot();

  React.useEffect(() => {
    console.log(trades, "trades ");
    console.log(users, "users ");
    console.log(reviews, "reviews ");
  }, [trades, users, reviews]);

  return trades === undefined ||
    users === undefined ||
    reviews === undefined ? (
    <Components.Global.GlobalLoader />
  ) : (
    <Mui.Box sx={{ backgroundColor: "#FBFBFB" }}>
      <Mui.Container maxWidth="xl" sx={{ px: { xs: 0, md: 0 } }}>
        <Pages.Views.IntroJSConfig name="home" />
        <Components.Global.Container
          direction="column"
          // maxWidth="xl"
          // justifyContent="initial"
          spacing={1}
          sx={{
            py: 3,
            // px: { xs: 2, md: 5 },
            bgcolor: "transparent",
          }}
        >
          <Mui.Typography
            variant="h4"
            textAlign="center"
            sx={{
              pb: 3,
              fontWeight: 900,
              fontSize: { xs: "25px", md: "32px" },
            }}
          >
            Market{" "}
            <span
              style={{
                color: "#FCB923",
              }}
            >
              Update
            </span>
          </Mui.Typography>
          <Mui.Stack
            direction={{ xs: "column", md: "row" }}
            gap={2}
            justifyContent="space-between"
          >
            <Mui.Typography
              variant="h5"
              fontSize={{ xs: "1rem", md: "1.5rem" }}
              color="#141414"
              fontWeight="700"
            >
              Top Coins
            </Mui.Typography>
            {/* <Mui.Button
              component={Router.Link}
              to={
                !Boolean(user?.email)
                  ? `${Constants.API_CONFIG.base}account/login`
                  : `${Constants.API_CONFIG.base}${
                      { spot: "spot", p2p: "p2p", token: "nft/buy" }[value]
                    }`
              }
              sx={{
                bgcolor: "#fff",
                color: "primary.main",
                "&:hover": {
                  color: "#fff",
                },
                boxShadow: "none",
                borderRadius: 1.25,
              }}
              variant="contained"
              endIcon={
                <Mui.CardMedia
                  src="images/right-arrow.png"
                  component="img"
                  sx={{
                    width: 20,
                    height: 10,
                  }}
                />
              }
            >
              View More
            </Mui.Button> */}
          </Mui.Stack>
          <Mui.Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 3,
              p: { xs: 1, md: 3 },
            }}
          >
            <Mui.Stack direction="row" gap={2} justifyContent="space-between">
              <Mui.ButtonGroup
                id="tradeNavigation"
                size="large"
                sx={{
                  // border: (theme) => `1px solid ${theme.palette.grey[400]}`,
                  // borderRadius: 20,
                  overflow: "hidden",
                  width: "fit-content",
                  // bgcolor: "#fff",
                }}
              >
                <Mui.Button
                  variant="text"
                  onClick={() => setValue("spot")}
                  sx={{
                    color: value === "spot" ? "#fff" : "text.secondary",
                    position: "relative",
                    px: 3,
                    fontWeight: 700,
                    borderRadius: 1,
                    bgcolor: value === "spot" ? "primary.main" : "",
                    "&:hover": {
                      bgcolor: value === "spot" ? "primary.main" : "",
                    },
                  }}
                >
                  Spot
                  {/* {value === "spot" && (
                  <Mui.Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: 50,
                      borderRadius: 2,
                      borderBottom: (theme) =>
                        `3px solid ${theme.palette.primary.main}`,
                    }}
                  />
                )} */}
                </Mui.Button>
                {/* <Mui.Button
                  variant="text"
                  onClick={() => setValue("p2p")}
                  sx={{
                    color: value === "p2p" ? "#fff" : "text.secondary",
                    position: "relative",
                    px: 3,
                    fontWeight: 700,
                    borderRadius: 1,
                    bgcolor: value === "p2p" ? "primary.main" : "",
                    "&:hover": {
                      bgcolor: value === "p2p" ? "primary.main" : "",
                    },
                  }}
                >
                  P2P */}
                {/* {value === "p2p" && (
                  <Mui.Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: 50,
                      borderRadius: 2,
                      borderBottom: (theme) =>
                        `3px solid ${theme.palette.primary.main}`,
                    }}
                  />
                )} */}
                {/* </Mui.Button> */}
                {/* <Mui.Button
                variant="text"
                onClick={() => setValue("token")}
                sx={{
                  color: value === "token" ? "primary.main" : "text.secondary",
                  position: "relative",
                  px: 3,
                  fontWeight: 700,
                }}
              >
                NFT
                {value === "token" && (
                  <Mui.Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: 50,
                      borderRadius: 2,
                      borderBottom: (theme) =>
                        `3px solid ${theme.palette.primary.main}`,
                    }}
                  />
                )}
              </Mui.Button> */}
              </Mui.ButtonGroup>
              <Mui.TextField
                id="coinFilter"
                size="small"
                value={filter}
                InputProps={{
                  startAdornment: (
                    <Mui.CardMedia
                      component="img"
                      src={"images/search.png"}
                      sx={{ width: 25, height: 25 }}
                    />
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    // padding: 0,
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 14px",
                      // color: '#fff',
                    },
                  },
                }}
                onChange={handleChange}
                placeholder="Search coins"
              />
            </Mui.Stack>
            {
              {
                spot: (
                  <Pages.Home.Views.SpotTable
                    prices={prices}
                    nativePrice={nativePrice}
                    nativeCurrency={nativeCurrency}
                    mainCurrency={mainCurrency}
                    coinList={coinList}
                    user={user}
                    filter={filter}
                  />
                ),
                // p2p: (
                //   <Pages.Home.Views.P2POrderTable
                //     trades={trades!}
                //     reviews={reviews!}
                //     users={users!}
                //     user={user}
                //     filter={filter}
                //   />
                // ),
                token: marketNfts !== undefined && (
                  <Pages.NFT.Views.NFTBuy
                    account={account || ""}
                    syncedAccount={syncedAccount || ""}
                    marketNfts={marketNfts}
                    gasFee={gasFee}
                  />
                ),
              }[value]
            }
          </Mui.Box>

          <Mui.Box flexGrow={1} />
          <Mui.Box sx={{ display: "flex", justifyContent: "center" }}>
            <Mui.Button
              component={Router.Link}
              to={
                !Boolean(user?.email)
                  ? `${Constants.API_CONFIG.base}account/login`
                  : `${Constants.API_CONFIG.base}${
                      { spot: "spot", token: "nft/buy" }[value]
                    }`
              }
              sx={{
                bgcolor: "#fff",
                color: "primary.main",
                "&:hover": {
                  color: "#fff",
                },
                boxShadow: "none",
                borderRadius: 1.25,
              }}
              variant="contained"
              endIcon={
                <Mui.CardMedia
                  src="images/right-arrow.png"
                  component="img"
                  sx={{
                    width: 20,
                    height: 10,
                  }}
                />
              }
            >
              View More
            </Mui.Button>
          </Mui.Box>
        </Components.Global.Container>
      </Mui.Container>
    </Mui.Box>
  );
};
