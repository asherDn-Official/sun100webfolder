import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";

export const P2POrderTable = ({
  trades,
  reviews,
  users,
  user,
  filter,
}: {
  trades: p2pTrade[];
  reviews: p2p_review[];
  users: Hooks.User.UseUser.User[];
  user: Contexts.userContext.User | undefined;
  filter: string;
}) => (
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
          // bgcolor: (theme) => `${theme.palette.primary.main}20`,
          bgcolor: "none",
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
            Item
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
            Advertiser
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
            Price/Item
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
            Trade Limit
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
            Payment Method
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
            Ratings
          </Mui.TableCell>
          <Mui.TableCell
            sx={{
              fontWeight: 500,
              color: "#141414",
              textTransform: "uppercase",
              border: "none",
              fontSize: "16px",
            }}
          ></Mui.TableCell>
        </Mui.TableRow>
      </Mui.TableHead>
      {trades.filter(({ uid }) => uid !== user?.uid).length ? (
        trades
          .filter(({ uid }) => uid !== user?.uid)
          .slice(0, 10)
          .filter((coins) =>
            coins.coin.toLowerCase().includes(filter.toLowerCase())
          )
          .map((trade, index) => {
            const userReviews = reviews?.filter(({ uid }) => uid === trade.uid);
            const userRating = userReviews?.length
              ? userReviews
                  ?.map(({ rating }) => rating)
                  ?.reduce((a, b) => a + b, 0) / userReviews?.length
              : 0;
            const userDetails = users?.find(({ id }) => trade.uid === id);
            return (
              <Mui.TableRow key={index}>
                <Mui.TableCell sx={{ border: "none" }}>
                  <Mui.Typography variant="body1" fontSize="16px">
                    <Components.Global.Format
                      number={trade.noOfCoins - (trade?.tradedCoins || 0)}
                      type="coin"
                      coin={trade.coin}
                    />
                  </Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell sx={{ border: "none" }}>
                  <Mui.Typography variant="body1" fontSize="16px">
                    <Mui.Link
                      component={Router.Link}
                      to={
                        !Boolean(user?.email)
                          ? `${Constants.API_CONFIG.base}account/login`
                          : `${Constants.API_CONFIG.base}p2p/${trade.uid}/info/BTC/buy`
                      }
                    >
                      {userDetails?.firstName} {userDetails?.lastName}
                    </Mui.Link>
                  </Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell sx={{ border: "none" }} align="center">
                  <Mui.Typography variant="body1" fontSize="16px">
                    <Components.Global.Format
                      number={trade.pricePerCoin}
                      type="coin"
                      coin={trade.currency}
                    />
                  </Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell sx={{ border: "none" }} align="center">
                  <Mui.Typography variant="body1" fontSize="16px">
                    {`${trade.quantityLimitFrom} - ${trade.quantityLimitTo}`}
                  </Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell sx={{ border: "none" }} align="center">
                  <Mui.Typography variant="body1" fontSize="16px">
                    {+trade.prefferedPayment === 0
                      ? "All Payments"
                      : trade.prefferedPayment}
                  </Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell sx={{ border: "none" }}>
                  <Mui.Stack
                    direction="row"
                    justifyContent="center"
                    spacing={0}
                  >
                    {new Array(5).fill(undefined).map((_val, index) => (
                      <Mui.IconButton
                        disableRipple
                        size="small"
                        key={index}
                        color={userRating > index ? "primary" : undefined}
                      >
                        {userRating > index ? (
                          <MuiIcons.Star fontSize="inherit" />
                        ) : (
                          <MuiIcons.StarBorder fontSize="inherit" />
                        )}
                      </Mui.IconButton>
                    ))}
                  </Mui.Stack>
                </Mui.TableCell>
                <Mui.TableCell align="center" sx={{ border: "none" }}>
                  <Mui.Button
                    id="tradeCoins"
                    variant="contained"
                    color={
                      trade.orderType?.toLowerCase() === "buy"
                        ? "error"
                        : "primary"
                    }
                    sx={{
                      // width: 80,
                      textTransform: "capitalize",
                      borderRadius: 3,
                      px: 4,
                      py: 0.75,
                      fontSize: "16px",
                    }}
                    component={Router.Link}
                    to={
                      !Boolean(user?.email)
                        ? `${Constants.API_CONFIG.base}account/login`
                        : `${Constants.API_CONFIG.base}p2p/${trade.coin}/${trade.orderType}`
                    }
                  >
                    {trade.orderType?.toLowerCase() === "buy" ? "sell" : "buy"}
                  </Mui.Button>
                </Mui.TableCell>
              </Mui.TableRow>
            );
          })
      ) : (
        <Mui.TableRow>
          <Mui.TableCell colSpan={7}>
            <Mui.Typography
              variant="h6"
              textAlign="center"
              sx={{
                p: 5,
              }}
            >
              No Orders available in Market
            </Mui.Typography>
          </Mui.TableCell>
        </Mui.TableRow>
      )}
    </Mui.Table>
    <Mui.Box sx={{ display: { xs: "block", sm: "none" }, pt: 1 }}>
      <Mui.Table stickyHeader component={Mui.Paper} elevation={0}>
        <Mui.TableHead
          sx={{
            // bgcolor: (theme) => `${theme.palette.primary.main}20`,
            bgcolor: "none",
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
              Advertiser
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
              Price/Item
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
              Action
            </Mui.TableCell>
          </Mui.TableRow>
        </Mui.TableHead>
        {trades.filter(({ uid }) => uid !== user?.uid).length ? (
          trades
            .filter(({ uid }) => uid !== user?.uid)
            .slice(0, 10)
            .filter((coins) =>
              coins.coin.toLowerCase().includes(filter.toLowerCase())
            )
            .map((trade, index) => {
              const userReviews = reviews?.filter(
                ({ uid }) => uid === trade.uid
              );
              const userRating = userReviews?.length
                ? userReviews
                    ?.map(({ rating }) => rating)
                    ?.reduce((a, b) => a + b, 0) / userReviews?.length
                : 0;
              const userDetails = users?.find(({ id }) => trade.uid === id);
              return (
                <Mui.TableRow key={index}>
                  <Mui.TableCell sx={{ border: "none", py: 2, px: 0 }}>
                    <Mui.Typography variant="body1">
                      <Mui.Link
                        component={Router.Link}
                        to={
                          !Boolean(user?.email)
                            ? `${Constants.API_CONFIG.base}account/login`
                            : `${Constants.API_CONFIG.base}p2p/${trade.uid}/info/BTC/buy`
                        }
                      >
                        {userDetails?.firstName} {userDetails?.lastName}
                      </Mui.Link>
                    </Mui.Typography>
                  </Mui.TableCell>
                  <Mui.TableCell
                    sx={{ border: "none", py: 2, px: 0 }}
                    align="center"
                  >
                    <Mui.Typography variant="body1">
                      <Components.Global.Format
                        number={trade.pricePerCoin}
                        type="coin"
                        coin={trade.currency}
                      />
                    </Mui.Typography>
                  </Mui.TableCell>
                  <Mui.TableCell
                    align="center"
                    sx={{ border: "none", py: 2, px: 0 }}
                  >
                    <Mui.Button
                      id="tradeCoins"
                      variant="contained"
                      color={
                        trade.orderType?.toLowerCase() === "buy"
                          ? "error"
                          : "primary"
                      }
                      sx={{
                        // width: 80,
                        textTransform: "capitalize",
                        borderRadius: 3,
                        px: 4,
                        py: 0.75,
                      }}
                      component={Router.Link}
                      to={
                        !Boolean(user?.email)
                          ? `${Constants.API_CONFIG.base}account/login`
                          : `${Constants.API_CONFIG.base}p2p/${trade.coin}/${trade.orderType}`
                      }
                    >
                      {trade.orderType?.toLowerCase() === "buy"
                        ? "sell"
                        : "buy"}
                    </Mui.Button>
                  </Mui.TableCell>
                </Mui.TableRow>
              );
            })
        ) : (
          <Mui.TableRow>
            <Mui.TableCell colSpan={7}>
              <Mui.Typography
                variant="h6"
                textAlign="center"
                sx={{
                  p: 5,
                }}
              >
                No Orders available in Market
              </Mui.Typography>
            </Mui.TableCell>
          </Mui.TableRow>
        )}
      </Mui.Table>
    </Mui.Box>
  </>
);
