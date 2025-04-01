import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";
import {RecentTransaction}  from "../dashboard/views/recent-transactions";

export const Main = () => {
  const {
    coinWalletDetails,
    amountWalletDetails,
    mainCurrency,
    nativeCurrency,
    nativePrice,
    loading,
    syncedAccount,
    nfts,
  } = React.useContext(Contexts.UserContext);

  return loading || nfts === undefined ? (
    <Components.Global.GlobalLoader />
  ) : (
    <Mui.Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 }, pb: 5 }}>
      <Pages.Views.IntroJSConfig name="wallet" />
      <Mui.Typography
        variant="h6"
        noWrap
        sx={{ /* color: "#ffff", */ fontWeight: 900 }}
      >
        Balance Details
      </Mui.Typography>
      <Mui.Grid container spacing={2}>
        <Mui.Grid item xs={12}>
          <Pages.Wallet.Views.AmountBox
            coinWalletDetails={coinWalletDetails}
            amountWalletDetails={amountWalletDetails}
            nativeCurrency={nativeCurrency}
            mainCurrency={mainCurrency}
            nativePrice={nativePrice}
          />
        </Mui.Grid>
        <Mui.Grid item xs={12}>
          <Pages.Wallet.Views.TableCard
            coinWalletDetails={coinWalletDetails}
            nativeCurrency={nativeCurrency}
            mainCurrency={mainCurrency}
            nativePrice={nativePrice}
            syncedAccount={syncedAccount || ""}
            nfts={nfts}
          />
        </Mui.Grid>
      </Mui.Grid>
      
      <Mui.Grid item spacing={2} sx={{ mt: 3 }}>
      
      {/* <RecentTransaction transactions={[]}> 

        </RecentTransaction> */}
        
        <Pages.Dashboard.Views.RecentTransaction
            transactions={[]}
          />
      </Mui.Grid>
      <Router.Outlet />
    </Mui.Container>
  );
};
