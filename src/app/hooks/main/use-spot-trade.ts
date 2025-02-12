import React from "react";
import Axios from "axios";
import * as ReactQuery from "react-query";
import * as Api from "src/api";
import * as Hooks from "src/app/hooks";
import * as Providers from "src/app/providers";

export const useSpotTrade = (
  uid: string,
  botStatus: "binance" | "kucoin" | "off" | "bybit"
) => {
  
  const queryClient = ReactQuery.useQueryClient();
  const handler = Providers.useCustomHandler;
  const [_loading, setLoading] = React.useState(false);
  const { loading, add, set } = Hooks.Firebase.useFirestore(true);

  // New Trade
  const trade = async (newTrade: trade, amount: number) => {
    if ((amount >= 12 && botStatus === "binance") || botStatus !== "binance") {
      if (botStatus === "binance") {
        setLoading(true);
        await Api.Server.Request("placeOrder", {
          coin: newTrade.coin,
          currency_id: newTrade.coinPair,
          coinPair: newTrade.coinPair,
          quantity: newTrade.noOfCoins,
          orderType: newTrade.orderType,
          marketPrice: newTrade.filledPrice || 1,
          limitPrice: newTrade.limitPrice,
          stopPrice: newTrade?.stopPrice,
        })
          .then((res) => {
            queryClient.invalidateQueries("userCoinWallet");
            queryClient.invalidateQueries("getTrades");
            handler({
              message: res.error
                ? res.message?.msg
                  ? res.message?.msg
                  : res.message
                :res.message?.msg,
              variant :"error"
            });
          })
          .catch((e) =>
            handler({
              message: e.message,
              variant: "error",
            })
          )
          .finally(() => setLoading(false));
      } else {
        await Api.Server.Request("placeOrder", {
          amount: newTrade.noOfCoins,
          coinPair: `${newTrade.coin}/${newTrade.coinPair}`,
          price: newTrade.filledPrice || newTrade.limitPrice,
          side: newTrade.side,

        } )
             .then((res) =>
             {
            handler({
              message: res.message,
              variant: "success",
            });
          })
          .catch((e) =>
            handler({
              message: e.message,
              variant: "error",
            })
          );

        // await add(`users/${uid}/trades`, newTrade)
        //   .then(() =>
        //     handler({
        //       message: "Order placed successfully!, Wait for execution",
        //       variant: "success",
        //     })
        //   )
        //   .catch((e) =>
        //     handler({
        //       message: e.message,
        //       variant: "error",
        //     })
        //   );
      }
    } else
      handler({
        message: `Trade can only be executed with Minimum 12 USDT`,
        variant: "error",
      });
  };

  // Cancel trade
  const cancel = async (tradeId: string, coinId: string) => {
    if (botStatus === "binance") {
      await Api.Server.Request("cancelTrade", {
        coin: coinId,
        orderid: tradeId,
      })
        .then((res) =>{
        queryClient.invalidateQueries("userCoinWallet");
        queryClient.invalidateQueries("getTrades");
          handler({
            
            message: res.error ? res.message :res.message?.msg,
            variant :"error"
            
          })
        })
        .catch((e) =>
          handler({
            message: e.message,
            variant: "error",
          })
        );
    } else if (botStatus === "kucoin") {
      await Api.Server.Request("cancelTradeV2", {
        coin: coinId,
        orderid: tradeId,
      })
        .then((res) =>
          handler({
            message: res.error ? res.message :res.message?.msg,
            variant :"error"
          })
        )
        .catch((e) =>
          handler({
            message: e.message,
            variant: "error",
          })
        );
    } else {
      Api.Server.Request({
        method: "delete",
        url: `/spot/trades/${tradeId}`,

        // headers: {
        //   'Authorization': localStorage.getItem("accessToken")
        // },
      })
      // .then((res)=> res.data)
      .then((res) =>
          handler({
            message: res.message,
            variant :"error"
          })
        )
        .catch((e) =>
          handler({
            message: e.message,
            variant: "error",
          })
        );
      await set(`users/${uid}/cancelTrades`, tradeId, {
        tradeId,
        coinId,
        uid,

      })
        .then((res) => {
          // handler({
          //   message: res.error ? res.message : "Order cancelled successfully!",
          //   variant :"error"
          // });
          queryClient.invalidateQueries("userCoinWallet");
          queryClient.invalidateQueries("getTrades");
        })
        .catch((e) =>
          handler({
            message: e.message,
            variant: "error",
          })
        );
      // await set(`users/${uid}/cancelTrades`, tradeId, {
      //   tradeId,
      //   coinId,
      //   uid,
      // })
      //   .then((res) =>
      //     handler({
      //       message: "Order cancelled successfully!",
      //       variant: "success",
      //     })
      //   )
      //   .catch((e) =>
      //     handler({
      //       message: e.message,
      //       variant: "error",
      //     })
      //   );
    }
  };

  return { loading: loading || _loading, cancel, trade };
};