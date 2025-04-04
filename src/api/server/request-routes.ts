import * as Axios from "axios";

import * as Constants from "src/constants";

export const Routes: {
  [key: string]: Pick<Axios.AxiosRequestConfig, "method" | "url" | "baseURL">;
} = {
  binanceRecentTrade: { url: "/trades", method: "get" },

  changePassword: { url: "/user/changePassword", method: "post" },

  cancelTrade: { url: "/trade/cancelTrade", method: "post" },

  cancelTradeV2: { url: "/trade/cancelTradeV2", method: "post" },

  checkPassword: { url: "/user/checkPassword", method: "post" },

  checkSecurityKey: { url: "/user/checkSecurityKey", method: "post" },

  checkReferralCode: {
    url: "/user/checkReferralCode",

    method: "post",
  },

  withdrawFiatPaymentRequest: {
    // url: "/user/cryptoPayout",

    url: "/user/withdrawFiatPaymentRequest",

    method: "post",
  },

  cryptoPayout: {
    url: "/user/deposit/crypto",

    method: "post",
  },

  cryptoPayoutwithdraw: {
    url: "/user/withdraw/crypto",

    method: "post",
  },

  depositFiatPaymentRequest: {
    url: "/user/depositFiatPaymentRequest",

    method: "post",
  },

  getBankAccountsByType: {
    url: "/user/getAdminBankAccountsByType",

    method: "post",
  },

  checkEmail: {
    url: "/user/checkEmail",

    method: "post",
  },

  editProfile: { url: "/user/updateProfile", method: "post" },

  enableTwoStepVerification: {
    url: "/user/updateTwoFactorAuthentication",
    method: "post",
  },

  emailVerify: { url: "/user/verifyEmailWithoutOTP", method: "post" },

  fileUpload: { url: "/user/fileUpload", method: "post" },

  getAllTrades: { url: "/trade/getRecentTrades", method: "post" },

  getCoinsPosition: { url: "/trade/getCoinsPosition", method: "get" },

  getCheckDeposit: { url: "/user/checkDeposit", method: "get" },

  getCurrencyChains: { url: "/trade/getCurrencyChains", method: "post" },

  getKYC: { url: "/user/getKYC", method: "get" },

  getbankaccounts: { url: "/user/bankaccounts", method: "get" },

  getOrderType: { url: "/trade/getOrderType", method: "get" },

  getP2Pcoins: { url: "/trade/getP2PcoinPairs", method: "get" },

  getProfile: { url: "/user/getProfile", method: "get" },

  getReferralLink: { url: "/user/getReferralLink", method: "post" },

  getReferredUsers: { url: "/user/getReferredUsers", method: "get" },

  getTrades: { url: "/spot/trades?page=1&limit=15", method: "get" },

  // getTrades: { url: "/spot/trades?page=1&limit=2&side=sell&status=PENDING",method: "get"},

  getWallet: { url: "/user/getWallet", method: "post" },

  getWalletAddress: { url: "/user/getWalletAddress", method: "post" },

  getDepositFiatPaymentRequest: {
    url: "/user/getDepositFiatPaymentRequest",

    method: "get",
  },

  getUserTransactions: {
    url: "/user/getUserTransactions",

    method: "get",
  },

  getWithdrawFiatPaymentRequest: {
    url: "/user/getWithdrawFiatPaymentRequest",

    method: "get",
  },

  getWithdrawcrypto: {
    url: "/user/withdraw/crypto",

    method: "get",
  },

  inrDeposit: { url: "/user/deposit/fiat", method: "post" },

  deposit: { url: "/user/deposit/crypto", method: "post" },

  addUserBankAccount: { url: "/user/addUserBankAccount", method: "post" },

  regsiter: { url: "/user/register", method: "post" },

  login: { url: "/user/login", method: "post" },

  logoutAll: { url: "/user/logout", method: "post" },


  resetUserEmail: { url: "/user/resetPasswordMail", method: "post" },

  resendVerificationEmail: {
    url: "/user/resendVerificationEmail",

    method: "post",
  },

  sendMailNotification: {
    url: "/user/sendEmailNotification",

    method: "post",
  },

  sessionHistory: { url: "/user/getSessionHistory", method: "get" },

  placeOrder: {
    url: "/spot/trades",

    method: "post",
  },

  placeOrderV2: {
    url: "/trade/placeOrderV2",

    method: "post",
  },

  trade24hValues: { url: "/trade/getTrade24HourValues", method: "post" },

  // tradeChart: { url: "/trade/getCoinChart", method: "post" },

  tradeChart: { url: "/coin/generateCandle", method: "post" },

  twoStepVerification: { url: "/user/sendOTPMail", method: "post" },

  updateKYC: { url: "/user/updateKYC", method: "post" },

  verifyEmail: { url: "/user/verifyEmail", method: "post" },

  getJamesBond: {
    url: "/trade/getResponseFromUrl",

    method: "post",
  },

  checkKyc: {
    url: "/user/checkKyc",

    method: "post",
  },

  // Pinata Uplaod

  pinList: {
    baseURL: Constants.NFT.PINATA_baseURL,

    url: "/data/pinList",

    method: "get",
  },

  pinFileToIPFS: {
    baseURL: Constants.NFT.PINATA_baseURL,

    url: "/pinning/pinFileToIPFS",

    method: "post",
  },

  pinJSONToIPFS: {
    baseURL: Constants.NFT.PINATA_baseURL,

    url: "/pinning/pinJSONToIPFS",

    method: "post",
  },

  transferAsset: {
    url: "/user/wallet/asset/transfer",

    method: "POST",
  },

  verifyTransfer: {
    url: "/user/wallet/asset/verifyTransfer",

    method: "POST",
  },

  transferList: {
    url: "/user/wallet/asset/transferList",

    method: "POST",
  },

  resendTransferOTP: {
    url: "/user/wallet/asset/resendTransferOTP",

    method: "POST",
  },

  getStakingpool: {
    url: "/staking/pools",

    method: "get",
  },

  getStakingList: {
    url: "/staking/stakes",

    method: "get",
  },

  getStakingRewards: {
    url: "/staking/reward/analytics",

    method: "get",
  },

  redeem_rewards: {
    url: "/staking/reward/redeem",

    method: "post",
  },

  add_stake: {
    url: "/staking/stake",

    method: "post",
  },
};

// Send Mail Request and Response

// params:{email:string,subject:string,htmlContent:string}

// response:{error:boolean,errorMessage:String}
