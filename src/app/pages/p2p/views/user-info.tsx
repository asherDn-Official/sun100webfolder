import * as DateFns from "date-fns";
import * as FirebaseFirestore from "firebase/firestore";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import TimeAgo from "react-timeago";
import React from "react";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const UserInfo = ({
  p2pCoins,
  p2pCoinslogo,
  p2pCurrency,
  setFilter,
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
  const navigate = Router.useNavigate();
  const { userId, coin, type } = Router.useParams();
  const { data: reviews } = Hooks.Firebase.useFireSnapshot<p2p_review>(
    "collection",
    `users/${userId}/reviews`
  ).collectionSnapshot();
  const { data: userDetail } =
    Hooks.Firebase.useFireSnapshot<Hooks.User.UseUser.User>(
      "collection",
      "users"
    ).collectionSnapshot([FirebaseFirestore.where("uid", "==", userId)]);
  const { data: trades } = Hooks.Firebase.useFireSnapshot<p2pTrade>(
    "collection",
    `p2p_trade_book`,
    [userId || ""]
  ).collectionSnapshot([FirebaseFirestore.where("uid", "==", userId)]);
  const { data: tradeRequest } =
    Hooks.Firebase.useFireSnapshot<p2pTradeRequest>(
      "collectionGroup",
      `p2p_request_trades`
    ).collectionSnapshot([
      FirebaseFirestore.orderBy("requestPlacedTime", "asc"),
    ]);

  const userRating = React.useMemo(
    () =>
      reviews?.length
        ? reviews?.map(({ rating }) => rating)?.reduce((a, b) => a + b, 0) /
          reviews?.length
        : 0,
    [reviews?.map(({ rating }) => rating)?.reduce((a, b) => a + b, 0)]
  );

  const handleReview = () =>
    navigate(`${coin}/${type}/review`, { state: userDetail?.[0] });

  return Boolean(trades && tradeRequest) ? (
    <Mui.Stack component={Mui.Container} spacing={2} sx={{ px: 0 }}>
      <Components.Global.Container
        direction="column"
        spacing={2}
        customTitle={
          <Mui.Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Mui.Typography variant="h6" fontWeight={600}>
              {userDetail?.[0]?.firstName} {userDetail?.[0]?.lastName}
            </Mui.Typography>
            <Mui.Button
              component={Router.Link}
              to={`${Constants.API_CONFIG.base}p2p`}
              startIcon={<MuiIcons.ArrowBack />}
            >
              Back
            </Mui.Button>
          </Mui.Stack>
        }
      >
        <Mui.Grid container spacing={2}>
          <Mui.Grid item xs={12} sm={4}>
            <Mui.Stack spacing={2}>
              <Mui.Avatar
                sx={{ height: 100, width: 100 }}
                src={
                  userDetail?.[0]?.profileImage
                    ? `${Constants.API_CONFIG.baseURL}${userDetail?.[0]?.profileImage}`
                    : `https://avatars.dicebear.com/api/initials/${userDetail?.[0]?.firstName}_${userDetail?.[0]?.lastName}.svg`
                }
              />
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item xs={12} sm={4}>
            <Components.Global.StackLabel
              medium
              title="User Ratings"
              label={
                <Mui.Stack direction="row" spacing={0}>
                  {new Array(5).fill(undefined).map((_val, index) => (
                    <Mui.IconButton
                      disableRipple
                      size="small"
                      key={index}
                      color={userRating > index ? "primary" : undefined}
                    >
                      {userRating > index ? (
                        <MuiIcons.Star />
                      ) : (
                        <MuiIcons.StarBorder />
                      )}
                    </Mui.IconButton>
                  ))}
                </Mui.Stack>
              }
              node
            />
          </Mui.Grid>
          <Mui.Grid item xs={12} sm={4}>
            {/* <Components.Global.StackLabel
              medium
              title="Post Your Review"
              label={ */}
            <Mui.Button
              startIcon={<MuiIcons.Reviews />}
              variant="outlined"
              color="warning"
              sx={{ borderRadius: 5, width: "fit-content" }}
              onClick={handleReview}
            >
              Review
            </Mui.Button>
            {/* }
              node
            /> */}
          </Mui.Grid>
          <Mui.Grid item xs={6} sm={3}>
            <Components.Global.StackLabel
              medium
              title="Total Trades"
              label={`${
                trades?.filter(({ status }) => status === "completed")?.length
              }/${trades?.length}`}
              node
            />
          </Mui.Grid>
          <Mui.Grid item xs={6} sm={3}>
            <Components.Global.StackLabel
              medium
              title="Sell Orders"
              label={`${
                trades?.filter(
                  ({ orderType, status }) =>
                    orderType === "sell" && status === "completed"
                )?.length
              }/${
                trades?.filter(({ orderType }) => orderType === "sell")?.length
              }`}
              node
            />
          </Mui.Grid>
          <Mui.Grid item xs={6} sm={3}>
            <Components.Global.StackLabel
              medium
              title="Buy Orders"
              label={`${
                trades?.filter(
                  ({ orderType, status }) =>
                    orderType === "buy" && status === "completed"
                )?.length
              }/${
                trades?.filter(({ orderType }) => orderType === "buy")?.length
              }`}
              node
            />
          </Mui.Grid>
          <Mui.Grid item xs={6} sm={3}>
            <Components.Global.StackLabel
              medium
              title="User Requests"
              label={`${
                tradeRequest?.filter(
                  ({ requestuid, requestStatus }) =>
                    requestuid === userId && requestStatus === "completed"
                )?.length
              }/${
                tradeRequest?.filter(({ requestuid }) => requestuid === userId)
                  ?.length
              }`}
              node
            />
          </Mui.Grid>
          <Mui.Grid item xs={6} sm={3}>
            <Components.Global.StackLabel
              medium
              title="Received Requests"
              label={`${
                tradeRequest?.filter(
                  ({ tradeuid, requestStatus }) =>
                    tradeuid === userId && requestStatus === "completed"
                )?.length
              }/${
                tradeRequest?.filter(({ tradeuid }) => tradeuid === userId)
                  ?.length
              }`}
              node
            />
          </Mui.Grid>
          <Mui.Grid item xs={6} sm={3}>
            <Components.Global.StackLabel
              medium
              title="Joined"
              label={
                <TimeAgo
                  date={DateFns.fromUnixTime(
                    userDetail?.[0]?.createdTime?.seconds || 0
                  )}
                />
              }
              node
            />
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Divider />
        <Mui.Typography variant="h6">Asset Transactions</Mui.Typography>
        <Mui.Box sx={{ pl: 2 }}>
          <Mui.Grid
            container
            spacing={2}
            sx={{
              p: 2,
              bgcolor: (theme) => `${theme.palette.success.light}20`,
              borderRadius: 2,
              border: (theme) => `1px solid ${theme.palette.success.main}50`,
            }}
          >
            {p2pCoins.map((coin) => (
              <Mui.Grid item xs={6} sm={3}>
                <Components.Global.StackLabel
                  medium
                  title={`${coin} Sell`}
                  label={
                    <Components.Global.Format
                      number={trades
                        ?.filter(
                          (trade) =>
                            trade.orderType === "sell" &&
                            trade.coin === coin &&
                            trade.status === "completed"
                        )
                        ?.map(({ noOfCoins }) => noOfCoins)
                        ?.reduce((a, b) => a + b, 0)}
                      type="coin"
                      coin={coin}
                    />
                  }
                  node
                />
              </Mui.Grid>
            ))}
            {p2pCoins.map((coin) => (
              <Mui.Grid item xs={6} sm={3}>
                <Components.Global.StackLabel
                  medium
                  title={`${coin} Buy`}
                  label={
                    <Components.Global.Format
                      number={trades
                        ?.filter(
                          (trade) =>
                            trade.orderType === "buy" &&
                            trade.coin === coin &&
                            trade.status === "completed"
                        )
                        ?.map(({ noOfCoins }) => noOfCoins)
                        ?.reduce((a, b) => a + b, 0)}
                      type="coin"
                      coin={coin}
                    />
                  }
                  node
                />
              </Mui.Grid>
            ))}
          </Mui.Grid>
        </Mui.Box>
      </Components.Global.Container>
      <Pages.P2P.Views.TableView
        p2pCoins={p2pCoins}
        p2pCoinslogo={p2pCoinslogo}
        p2pCurrency={p2pCurrency}
        setFilter={setFilter}
      />
      <Components.Global.Container
        spacing={2}
        customTitle={
          <Mui.Typography variant="h6" fontWeight={800}>
            Reviews ({reviews?.length})
          </Mui.Typography>
        }
      >
        {reviews?.length ? (
          reviews
            ?.sort((a, b) => b.time - a.time)
            ?.map((reviewer) => (
              <Mui.Stack
                spacing={1}
                sx={{
                  bgcolor: (theme) => theme.palette.grey[100],
                  border: (theme) => `1px solid ${theme.palette.grey[200]}`,
                  p: 1,
                  borderRadius: 2,
                }}
              >
                <Mui.Stack direction="row" alignItems="center" spacing={1}>
                  <Mui.Avatar
                    src={
                      reviewer?.profile
                        ? `${Constants.API_CONFIG.baseURL}${reviewer?.profile}`
                        : `https://avatars.dicebear.com/api/initials/${reviewer?.username}.svg`
                    }
                  />
                  <Mui.Typography variant="body2" textTransform="capitalize">
                    {reviewer?.username}
                  </Mui.Typography>
                </Mui.Stack>
                <Mui.Stack direction="row" spacing={0}>
                  {new Array(5).fill(undefined).map((_val, index) => (
                    <Mui.IconButton
                      disableRipple
                      size="small"
                      key={index}
                      color={reviewer?.rating > index ? "primary" : undefined}
                    >
                      {reviewer?.rating > index ? (
                        <MuiIcons.Star />
                      ) : (
                        <MuiIcons.StarBorder />
                      )}
                    </Mui.IconButton>
                  ))}
                </Mui.Stack>
                <Mui.Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ pl: 1 }}
                >
                  Reviewed On {new Date(reviewer.time).toLocaleString()}
                </Mui.Typography>
                <Mui.Typography
                  variant="body2"
                  sx={{ bgcolor: (theme) => theme.palette.grey[100], p: 1 }}
                >
                  {reviewer?.comment}
                </Mui.Typography>
              </Mui.Stack>
            ))
        ) : (
          <Mui.Typography variant="h6" textAlign="center" sx={{ p: 5 }}>
            No Reviews Found
          </Mui.Typography>
        )}
      </Components.Global.Container>
    </Mui.Stack>
  ) : (
    <Components.Global.GlobalLoader />
  );
};
