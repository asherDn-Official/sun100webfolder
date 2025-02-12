import * as Api from "src/api";

export const useCoin = (): UseCoin.Return => {
  const { data, isFetching: loading } = Api.Server.useRequest(
    ["coins"],
    "getCoinsPosition"
  );
  
  // Handle if the response data is not structured as expected
  const coins = data && data.coinList ? data : { coinList: [], error: true, message: "No coins available", errorCode: "404" };
  console.log("Coins Data:", data);

  return { coins, loading };
};


export declare namespace UseCoin {
  export interface Return {
    coins: Response;
    loading: boolean;
  }
  export interface Response {
    error: boolean;
    message: string;
    errorCode: string;
    coinList: coin[];
  }
  export interface coin {
    id: string;
    coinId: string;
    coinName: string;
    coin: string;
    coinLogo: string;
    current_price: number;
    last_price: number;
    commission: number;
    currency_id: number;
    active: 0 | 1;
    created_At: string;
    updated_At: string;
    currencyId: number;
    currency_symbol: string;
    currency: string;
    currency_name: string;
    price24hChange: number;
    price24hChangePercentage: string;
    price24hHigh?: number;
    price24hLow?: number;
    volumeCoin?: number;
    volumeAmount?: number;
    minimum_price: number;
    maximum_price: number;
    fund_limit: number;
    coin_value: number;
    seller_fees: number;
    bot_status: "bybit" | "kucoin" | "off";
    market_up: number;
    buyer_fees: number;
    minimum_quantity: number;
    currency_value: number;
    maximum_quantity: number;
  }
}
