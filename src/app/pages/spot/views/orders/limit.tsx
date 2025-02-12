import React, { useState, useEffect } from "react";

import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Providers from "src/app/providers";

export const Limit = ({
  amountBalance,
  coinBalance,
  coin,
}: {
  amountBalance: number;
  coinBalance: number;
  coin: Hooks.Main.UseCoin.coin;
}) => {
  const handler = Providers.useCustomHandler;
  const { user } = React.useContext(Contexts.UserContext);
  const { loading, trade } = Hooks.Main.useSpotTrade(
    user?.uid as string,
    coin?.bot_status
  );
  const commission = 0.004;
  const marketValue = coin.current_price;
  const {
    amount,
    coins,
    limitPrice,
    slider,
    order,
    clear,
    handleAmount,
    handleCoin,
    handleLimit,
    handlePercentage,
    handleBuy,
    handleSell,
  } = Hooks.Design.useOrder(
    amountBalance,
    coinBalance,
    marketValue,
    coin,
    "limit"
  );

  const [totalAmount, setTotalAmount] = useState("0.00000");

  const calculateTotalAmount = (inputAmount: number) => {
    let total;
    if (order === "buy") {
      total = inputAmount * 10 - inputAmount * 10 * commission;
    } else {
      total = (inputAmount - inputAmount * commission) * 0.1;
    }
    const formattedTotal = total.toFixed(5);
    console.log("Total Amount:", formattedTotal);
    setTotalAmount(formattedTotal);
  };

  const handleSubmit = () => {
    // Limit Buy
    const newOrderBuy: trade = {
      coinId: coin?.coinId as string,
      coin: coin.coin,
      coinPair: coin.currency,
      commission,
      limitPrice,
      noOfCoins: amount || 0,

      // noOfCoins:
      //   (["binance", "kucoin"].includes(coin.bot_status) ? amount : coins) || 0,

      orderType: 2,
      orderPlacedTime: new Date().getTime(),
      uid: user?.uid as string,
      side: order,
    };

    // Limit Sell
    const newOrderSell: trade = {
      coinId: coin?.coinId as string,
      coin: coin.coin,
      coinPair: coin.currency,
      commission,
      limitPrice,
      noOfCoins: coins || 0,
      orderType: 5,
      orderPlacedTime: new Date().getTime(),
      uid: user?.uid as string,
      side: order,
    };

    if (
      (order === "buy" && (amount || 0) > amountBalance) ||
      (order === "buy" && (amount || 0) === 0) ||
      (order === "sell" && (coins || 0) > coinBalance)
    )
      handler({
        message: "Insufficient balance!",
        variant: "error",
      });
    else if (
      (order === "buy" && (amount || 0) === 0) ||
      (order === "sell" && (coins || 0) === 0)
    ) {
      handler({
        message: "Amount cannot be empty",
        variant: "error",
      });
    } else trade(order === "buy" ? newOrderBuy : newOrderSell, amount || 0);
    clear();
  };

  const handleOrderChange = () => {
    clear();
    setTotalAmount("0.00000");
  };

  console.log("COMMISSION", commission);
  return (
    <>
      <Pages.Spot.Views.Orders.OrderButton
        coin={coin?.coin as string}
        order={order}
        handleBuy={handleBuy}
        handleSell={handleSell}
        onOrderChange={handleOrderChange} // Pass the function
      />
      <Pages.Spot.Views.Orders.SpotField
        start="Price"
        end={coin?.currency as string}
        onChange={handleLimit}
        value={0.1}
        disabled
      />
      {order === "buy" ? (
        <Pages.Spot.Views.Orders.SpotField
          start="Amount"
          end={coin?.currency as string}
          onChange={(e) => {
            handleAmount(e);
            calculateTotalAmount(Number(e.target.value));
          }}
          value={amount}
        />
      ) : (
        <Pages.Spot.Views.Orders.SpotField
          start="Amount"
          end={coin?.coin as string}
          onChange={(e) => {
            handleCoin(e);
            calculateTotalAmount(Number(e.target.value));
          }}
          value={coins}
        />
      )}
      <Pages.Spot.Views.Orders.Slider
        value={slider}
        onChange={handlePercentage}
      />
      <Pages.Spot.Views.Orders.SpotField
        start="Trading Fees"
        end={(order === "buy" ? coin?.coin : coin?.currency) as string}
        value={+totalAmount * commission}
        disabled
        sx={{
          bgcolor: (theme) => `${theme.palette.error.light}20`,
          borderRadius: 1,
          "& fieldset": {
            borderWidth: 0,
          },
        }}
      />
      <Pages.Spot.Views.Orders.SpotField
        start="Total"
        end={(order === "buy" ? coin?.coin : coin?.currency) as string}
        value={totalAmount}
        disabled
        sx={{
          bgcolor: (theme) => `${theme.palette.error.light}20`,
          borderRadius: 1,
          "& fieldset": {
            borderWidth: 0,
          },
        }}
      />
      <Pages.Spot.Views.Orders.PlaceOrder
        onClick={handleSubmit}
        loading={loading}
      />
    </>
  );
};
