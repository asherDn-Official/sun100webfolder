import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const Main = ({
  coinWalletDetails,
  amountWalletDetails,
  mainCurrency,
  nativeCurrency,
  nativePrice,
  p2pCoins,
  p2pCoinslogo,
  p2pCurrency,
  setFilter,
}: {
  coinWalletDetails: Hooks.User.coinsWallet[];
  amountWalletDetails: Hooks.User.UseCoinBalance.userWallet[];
  mainCurrency: string;
  nativeCurrency: string;
  nativePrice: number;
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
}) => (
  <>
    <Pages.Views.IntroJSConfig name="p2p" />
    <Mui.Container maxWidth="xl">
      <Mui.Grid
        container
        spacing={2}
        sx={{
          pb: 2,
          // bgcolor: '#F1F2F5'
        }}
      >
        <Mui.Grid item xs={12}>
          <Pages.P2P.Views.OrderBox coinWalletDetails={coinWalletDetails} />
        </Mui.Grid>
        {/* <Mui.Grid item xs={12} md={4}>
          <Pages.Views.AmountBox
            coinWalletDetails={coinWalletDetails}
            amountWalletDetails={amountWalletDetails}
            mainCurrency={mainCurrency}
            nativeCurrency={nativeCurrency}
            nativePrice={nativePrice}
          />
        </Mui.Grid> */}
        <Mui.Grid item xs={12}>
          <Pages.P2P.Views.TableView
            p2pCoins={p2pCoins}
            p2pCoinslogo={p2pCoinslogo}
            p2pCurrency={p2pCurrency}
            setFilter={setFilter}
          />
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Container>
    <Pages.P2P.Views.Footer />
  </>
);
