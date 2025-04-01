import * as Mui from "@mui/material";
import * as React from "react";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Pages from "src/app/pages";

export default () => {
  const {
    user,
    prices,
    nativeCurrency,
    mainCurrency,
    nativePrice,
    account,
    marketNfts,
    gasFee,
    syncedAccount,
    coinList,
  } = React.useContext(Contexts.UserContext);
  return (
    <Mui.Fade in>
      <Mui.Grid container>
        <Mui.Grid
          item
          xs={12}
          sx={{
            height: { xs: "400px", sm: '500px', md: "700px" },
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url('${import.meta.env.BASE_URL}images/newbanner.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: {xs: 'inherit', md: "cover"},
            backgroundPosition: {xs: 'left', md: "cover"},
            zIndex: 0,
          }}
        >
          <Pages.Home.Views.Header user={user} />
        </Mui.Grid>
        <Mui.Grid item xs={12}>
        {/* <Pages.Home.Views.About/> */}
          <Pages.Home.Views.MarketTrends
            user={user}
            prices={prices}
            nativeCurrency={nativeCurrency}
            mainCurrency={mainCurrency}
            nativePrice={nativePrice}
            account={account}
            marketNfts={marketNfts}
            gasFee={gasFee}
            syncedAccount={syncedAccount}
            coinList={coinList}
          />
          <Pages.Home.Views.Asset user={user} />
          
          <Pages.Home.Views.Invest />
          <Pages.Home.Views.Trade user={user} />
          <Pages.Home.Views.Trusted user={user}/> 
          <Pages.Home.Views.Explore /> 
          <Pages.Home.Views.EasyCarousel />
          <Pages.Home.Views.TradeGetApp />
        </Mui.Grid>
        <Router.Outlet />
      </Mui.Grid>
    </Mui.Fade>
  );
};
