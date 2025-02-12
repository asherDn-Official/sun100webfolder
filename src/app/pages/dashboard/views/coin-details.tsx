import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Constants from "src/constants";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const CoinDetails = ({
  coinWalletDetails,
  nativeCurrency,
  mainCurrency,
  nativePrice,
}: {
  coinWalletDetails: Hooks.User.coinsWallet[];
  nativeCurrency: string;
  mainCurrency: string;
  nativePrice: number;
}) => {
  // ✅ Filtering logic with debug logs
  const filteredByCurrency =
    coinWalletDetails?.filter(({ type, coin, currency }) => {
      const match = currency === mainCurrency || coin === mainCurrency;
      console.log("Filtering by currency:", { type, coin, currency, match }); // ✅ Debug Log
      return match;
    }) || [];

  const uniqueFiltered = filteredByCurrency.filter((value, index, self) => {
    const isUnique = index === self.findIndex((t) => t.typeId === value.typeId);
    console.log("Filtering Unique:", { value, isUnique }); // ✅ Debug Log
    return isUnique;
  });

  const data =
    uniqueFiltered.length % 2 === 0
      ? uniqueFiltered
      : [...uniqueFiltered, {} as Hooks.User.coinsWallet];

  // ✅ Final logs before rendering
  console.log("Filtered By Currency:", filteredByCurrency);
  console.log("Unique Filtered Data:", uniqueFiltered);
  console.log("Final Data:", data);

  return (
    <Components.Global.Container
      direction="column"
      justifyContent="start"
      spacing={2}
      sx={{ height: "100%" }}
      id="coinDetails"
    >
      <Mui.Stack
        direction={{ xs: "column", md: "row", lg: "row" }}
        justifyContent="space-between"
        spacing={1}
      >
        <Mui.Typography variant="h5" fontWeight={900}>
          Portfolio
        </Mui.Typography>
        {/* <Mui.Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          <Mui.Link component={Link} to={`${Constants.API_CONFIG.base}wallet`}>
            Transfer
          </Mui.Link>
          <Mui.Link
            sx={{ color: "success.main" }}
            component={Link}
            to={`${Constants.API_CONFIG.base}wallet`}
          >
            Deposit
          </Mui.Link>
          <Mui.Link
            sx={{ color: "warning.main" }}
            component={Link}
            to={`${Constants.API_CONFIG.base}wallet`}
          >
            Withdraw
          </Mui.Link>
        </Mui.Stack> */}
      </Mui.Stack>

      <Mui.Stack sx={{ width: "100%", overflow: "auto" }}>
        <Mui.Grid
          container
          gap={1.25}
          sx={{
            pb: 2,
            width: `${310 * (data.length / 2)}px !important`,
            borderRadius: 2,
            // border: (theme) => `1px solid ${theme.palette.grey[100]}`,
            overflow: "auto",
          }}
        >
          {data
            .filter((_, index) => index % 2 === 0)
            .map((value, index) =>
              value?.coin ? (
                <Mui.Grid item xs key={index}>
                  <Pages.Dashboard.Views.Coins
                    coin={value.coinLogo}
                    coinName={value.coin}
                    balance={value.balance - Math.abs(value.freeze)}
                    amountType={nativeCurrency}
                    amount={value.current_price * nativePrice}
                  />
                </Mui.Grid>
              ) : null
            )}
          {data
            .filter((_, index) => index % 2 === 1)
            .map((value, index) =>
              value?.coin ? (
                <Mui.Grid item xs key={index}>
                  <Pages.Dashboard.Views.Coins
                    coin={value.coinLogo}
                    coinName={value.coin}
                    balance={value.balance - Math.abs(value.freeze)}
                    amountType={nativeCurrency}
                    amount={value.current_price * nativePrice}
                  />
                </Mui.Grid>
              ) : null
            )}
        </Mui.Grid>
      </Mui.Stack>
    </Components.Global.Container>
  );
};
