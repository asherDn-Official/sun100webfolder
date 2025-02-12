import * as FirebaseFirestore from "firebase/firestore";
import React from "react";
import * as Api from "src/api";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

export const UserContext = React.createContext<userContext.Type>(
  {} as userContext.Type
);

export const UserProvider = ({ children }: Child) => {
  // user detail
  const [state, updateState] = React.useState(false);
  const { user, country, loading } = Hooks.User.useUser(state);

  const update = () => updateState(!state);

  //
  const {
    account,
    syncedAccount,
    marketNfts,
    nfts,
    gasFee,
    logs,
    balance,
    connect,
    toggleSale,
    transfer,
    buyNFT,
    getItems,
    getApproval,
    isApproved,
    startAuction,
    stopAuction,
    placeBid,
    executeAuction,
    signin,
    authenticated,
  } = Hooks.Main.useNFT(user?.userDetails as Hooks.User.UseUser.User, update);

  // Currency detail
  const nativeCurrency = "USD";
  const mainCurrency = "USDT";
  const [nativePrice, setNativePrice] = React.useState(1);
  const [prices, setPrices] = React.useState<Record<string, any>>({});
  const [priceLoading, setPriceLoading] = React.useState(true);

  React.useEffect(() => {
    Api.Server.Client.get(
      `${Constants.API_CONFIG.binanceAPI}/market/tickers?category=spot`
    ).then((res) => {
      setPrices(res);
      setPriceLoading(false);
    });
  }, []);

  // const { data: prices, isFetching: priceLoading } = Api.Server.useRequest(
  //   ["getJamesBond"],
  //   "getJamesBond",
  //   {
  //     type: "GET",
  //     // url: `${Constants.API_CONFIG.gateAPI}/spot/tickers`,
  //     url: `${Constants.API_CONFIG.binanceAPI}/market/tickers?category=spot`,
  //   }
  // );

  const coinPrices = React.useMemo(
    () =>
      prices?.result?.list?.map((p: any) => ({
        currency_pair: p.symbol,
        last: p.lastPrice,
        changePercentage: p.price24hPcnt,
        high_24h: p.highPrice24h,
        low_24h: p.lowPrice24h,
        base_volume: p.turnover24h,
        quote_volume: p.volume24h,
        symbol: p.symbol,
      })),
    [priceLoading]
  );

  // snapshot listener
  const { data: notifications = [] } =
    Hooks.Firebase.useFireSnapshot<notification>(
      "collection",
      `${import.meta.env.MODE === "development" ? `users` : `users`}/${
        user?.userDetails?.uid
      }/notifications`
    ).collectionSnapshot(
      [
        FirebaseFirestore.orderBy("createdTime", "desc"),
        FirebaseFirestore.limit(100),
      ],
      user?.userDetails?.uid === undefined
    );
  const { data: generalNotifications = [] } =
    Hooks.Firebase.useFireSnapshot<generalNotification>(
      "collection",
      `general_notifications`
    ).collectionSnapshot(
      [
        FirebaseFirestore.orderBy("createdTime", "desc"),
        FirebaseFirestore.limit(100),
      ],
      user?.userDetails?.uid === undefined
    );

  // coin list listener
  const { data: coinList } =
    Hooks.Firebase.useFireSnapshot<Hooks.Main.UseCoin.coin>(
      "collection",
      "coins"
    ).collectionSnapshot();

  console.log(coinList, "coinlist");

  // balance
  const { CoinBalance, loading: balanceLoading } = Hooks.User.useCoinBalance(
    "all",
    `${notifications.map((notification) => notification.id).toString()}`
  );

  const getWallet = (coin: Hooks.Main.UseCoin.coin) => {
    const walletDetail = CoinBalance?.userWallet?.find(
      ({ typeId }) => typeId === coin.coin
    ) || { balance: 0, freeze: 0 };
    return {
      ...coin,
      ...walletDetail,
      ...(["bybit", "kucoin"].includes(coin.bot_status)
        ? {
            current_price:
              (coinPrices as { currency_pair: string; last: number }[])?.find(
                (coinPrice) =>
                  coinPrice.currency_pair ===
                  `${coin.coin}${coin.currency}`.toUpperCase()
              )?.last || 1,
          }
        : {}),
    };
  };

  const coinWalletDetails = React.useMemo(
    () =>
      coinList
        ?.map((coin) => getWallet(coin))
        ?.sort(
          (a, b) =>
            (b.balance - Math.abs(b.freeze)) * (b.current_price || 0) -
            (a.balance - Math.abs(a.freeze)) * (a.current_price || 0)
        ) as unknown as userContext.coinsWallet[],
    [
      loading,
      coinList?.length,
      coinPrices?.length,
      CoinBalance?.userWallet?.map((c) => c.balance).toString(),
    ]
  );

  React.useEffect(() => {
    if (coinPrices)
      setNativePrice(
        coinPrices?.find(
          ({ currency_pair }: any) =>
            currency_pair === `USDT${nativeCurrency}`.toUpperCase()
        )?.last || 1
      );
  }, [priceLoading]);

  const {
    dashboard,
    poolResult,
    stakingHistory,
    staking_reward,
    stakingloading,
    Redeem_amount,
    add_stake,
    model,
    resetStak,
    setOpenModel,
    openModel,
  } = Hooks.Main.useStake();

  return (
    <UserContext.Provider
      value={{
        user: {
          ...(user?.userDetails as Hooks.User.UseUser.User),
          detected_country: country,
        },
        loading: loading || priceLoading,
        balanceLoading,
        notifications,
        generalNotifications,
        update,

        //
        coinList: coinList || [],

        //
        prices: coinPrices,
        nativeCurrency,
        mainCurrency,
        nativePrice,
        trigger: `${notifications
          .map((notification) => notification.id)
          .toString()}`,

        //
        coinWalletDetails,
        amountWalletDetails: CoinBalance?.userWallet
          ?.filter(({ type }) => type === "AMOUNT")
          ?.sort(
            (a, b) =>
              b.balance - Math.abs(b.freeze) - (a.balance - Math.abs(a.freeze))
          ),

        //
        account,
        syncedAccount,
        marketNfts,
        nfts,
        gasFee,
        logs,
        balance,
        authenticated,
        connect,
        toggleSale,
        transfer,
        buyNFT,
        getItems,
        getApproval,
        isApproved,
        startAuction,
        stopAuction,
        placeBid,
        executeAuction,
        signin,
        dashboard,
        poolResult,
        stakingHistory,
        staking_reward,
        stakingloading,
        Redeem_amount,
        add_stake,
        model,
        resetStak,
        openModel,
        setOpenModel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export declare namespace userContext {
  export type User = Hooks.User.UseUser.User;
  export type Type = {
    user: User;
    loading?: boolean;
    balanceLoading: boolean;
    notifications: notification[];
    generalNotifications: generalNotification[];
    update: () => void;

    coinList: Hooks.Main.UseCoin.coin[];

    prices: {
      currency_pair: string;
      last: number;
      changePercentage: string;
      high_24h: string;
      low_24h: string;
      base_volume: string;
      quote_volume: string;
      symbol: string;
    }[];
    nativeCurrency: string;
    mainCurrency: string;
    nativePrice: number;
    trigger: string;

    coinWalletDetails: coinsWallet[];
    amountWalletDetails: Hooks.User.UseCoinBalance.userWallet[];

    account?: string;
    syncedAccount?: string;
    marketNfts?: nft[];
    nfts?: nft[];
    gasFee: string;
    balance?: string;
    logs?: logger[];
    authenticated: boolean;
    connect: () => Promise<void>;
    toggleSale: (nftDetail: nft, price: string) => Promise<void>;
    buyNFT: (contract: string, tokenId: string, price: string) => Promise<void>;
    getItems: () => void;
    transfer: (
      contract: string,
      depositAddress: string,
      tokenId: string,
      fee: boolean
    ) => Promise<boolean>;
    getApproval: (contractAddress: string, tokenId: string) => Promise<boolean>;
    isApproved: (contractAddress: string, tokenId: string) => Promise<any>;
    startAuction: (
      contract: string,
      tokenId: string,
      price: string,
      duration: string
    ) => Promise<void>;
    stopAuction: (contract: string, tokenId: string) => Promise<void>;
    placeBid: (
      contract: string,
      tokenId: string,
      price: string
    ) => Promise<void>;
    executeAuction: (contract: string, tokenId: string) => Promise<void>;
    signin: (_account: string) => Promise<void>;
    dashboard: Hooks.Main.StakeDashboard;
    poolResult: Hooks.Main.PoolDetails[];
    stakingHistory: Hooks.Main.RewardDetails[];
    staking_reward: Hooks.Main.CoinBalanceDetails;
    stakingloading: boolean;
    Redeem_amount: (amount: number) => Promise<void>;
    add_stake: (data: Record<"poolId" | "amount", number>) => Promise<void>;
    model: "1" | "2";
    resetStak: () => void;
    setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
    openModel: boolean;
  };

  export type coinsWallet = Hooks.Main.UseCoin.coin &
    Hooks.User.UseCoinBalance.userWallet;
}
