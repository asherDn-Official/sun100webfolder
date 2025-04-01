export const API_CONFIG = {
  mainAppURL: "https://sun100.io/",
  base: "/",
  baseURL: `${import.meta.env.VITE_API_ENCRYPTION}://${
    import.meta.env.VITE_API_IP
  }:${import.meta.env.VITE_API_PORT}${import.meta.env.VITE_API_PATH}${
    import.meta.env.MODE === "production" ? "/" : "/"
  }`,
  binanceSocketURL: "wss://stream.bybit.com/v5/public/spot",
  kucoinSocketURL: `wss://ws-api-spot.kucoin.com?token=`,
  publicCoin: "https://api.coinstats.app/public/v1",
  binanceAPI: "https://api.bybit.com/v5",
  kucoinAPI: "https://api.kucoin.com/api/v1",
  gateAPI: "https://api.gateio.ws/api/v4",
  binanceProducts:
    "https://www.bybit.com/bapi/asset/v1/public/asset-service/product",
  geoLocationAPI:
    "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location",
  blockedCountry: [] as string[],
};
