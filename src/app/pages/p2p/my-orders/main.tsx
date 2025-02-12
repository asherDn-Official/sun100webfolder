import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";
import * as FirebaseFirestore from "firebase/firestore";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const Main = () => {
  const { user } = React.useContext(Contexts.UserContext);
  const { pathname } = Router.useLocation();
  const { data: users } =
    Hooks.Firebase.useFireSnapshot<Hooks.User.UseUser.User>(
      "collection",
      "users"
    ).collectionSnapshot();
  const { data: trades } = Hooks.Firebase.useFireSnapshot<p2pTrade>(
    "collection",
    `p2p_trade_book`
  ).collectionSnapshot();
  const { data: requestedTrades } =
    Hooks.Firebase.useFireSnapshot<p2pTradeRequest>(
      "collectionGroup",
      `p2p_request_trades`
    ).collectionSnapshot([
      FirebaseFirestore.orderBy("requestPlacedTime", "asc"),
    ]);
  const tradeRequests = requestedTrades
    ? (requestedTrades
        .map(({ uid, ...request }) => {
          const trade = trades!.find(
            ({ tradeId }) => tradeId === request.requestTradeId
          );
          return {
            ...trade,
            ...request,
            username: trade?.userName,
            userProfile: trade?.profileImg,
            requestUname: request?.requestUserName,
            requestUserProfile: request?.requestProfileImg,
          };
        })
        .filter(({ coin }) => Boolean(coin)) as (p2pTrade & p2pTradeRequest)[])
    : [];

  return trades && tradeRequests ? (
      <Mui.Container
        maxWidth='xl'
        sx={{ px: { xs: 0, sm: 5 }, pb: 5 }}
      >
        <Components.Global.Container direction='column' gap={2}>
        <Mui.Typography variant="h5" fontWeight={900}>
          My Orders
        </Mui.Typography>
          <Mui.ButtonGroup
            component={Mui.Stack}
            gap={4}
            direction={{ xs: "column", sm: "row" }}
            sx={{
              // border: (theme) => `1px solid ${theme.palette.primary.main}`,
              // borderRadius: { xs: 1, sm: 20 },
              // overflow: "hidden",
              // width: "fit-content",
              // bgcolor: "background.default",
            }}
          >
            <Mui.Button
              // variant={pathname.includes("my-orders") ? "contained" : "text"}
              component={Router.Link}
              to={`${Constants.API_CONFIG.base}p2p/my-orders`}
              sx={{
                position: "relative",
                px: 0,
                color: `${pathname.includes("my-orders") ? "text.primary" : "#818898"}`,
                fontWeight: `${pathname.includes("my-orders") ? "700" : "400"}`,
                border: 'none',
                "&:hover": {
                  border: 'none',
                  backgroundColor: 'transparent'
                }
              }}
            >
                My Orders
            </Mui.Button>
            <Mui.Button
              // variant={
              //   pathname.includes("my-order-requests") ? "contained" : "text"
              // }
              component={Router.Link}
              to={`${Constants.API_CONFIG.base}p2p/my-order-requests`}
              sx={{
                position: "relative",
                px: 0,
                color: `${pathname.includes("my-order-requests") ? "text.primary" : "#818898"}`,
                fontWeight: `${pathname.includes("my-order-requests") ? "700" : "400"}`,
                border: 'none',
                "&:hover": {
                  border: 'none',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Incoming Requests
            </Mui.Button>
            <Mui.Button
              // variant={pathname.includes("my-requests") ? "contained" : "text"}
              component={Router.Link}
              to={`${Constants.API_CONFIG.base}p2p/my-requests`}
              sx={{
                position: "relative",
                px: 0,
                color: `${pathname.includes("my-requests") ? "text.primary" : "#818898"}`,
                fontWeight: `${pathname.includes("my-requests") ? "700" : "400"}`,
                border: 'none',
                "&:hover": {
                  border: 'none',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Outgoing Requests
            </Mui.Button>
          </Mui.ButtonGroup>
          {pathname.includes("my-orders") && (
            <Pages.P2P.MyOrders.Views.MyOrders
              trades={trades
                .filter(({ uid }) => uid === user?.uid)
                .sort((a, b) => b.orderPlacedTime - a.orderPlacedTime)}
            />
          )}
          {pathname.includes("my-order-requests") && (
            <Pages.P2P.MyOrders.Views.MyOrdersRequests 
              trades={tradeRequests
                .filter(({ uid }) => uid === user?.uid)
                .sort((a, b) => b.requestPlacedTime - a.requestPlacedTime)}
            />
          )}
          {pathname.includes("my-requests") && (
            <Pages.P2P.MyOrders.Views.MyRequests
              trades={tradeRequests
                .filter(({ requestuid }) => requestuid === user?.uid)
                .sort((a, b) => b.requestPlacedTime - a.requestPlacedTime)}
            />
          )}
          <Router.Outlet />
        </Components.Global.Container>
      </Mui.Container>
  ) : (
    <Components.Global.GlobalLoader />
  );
};
