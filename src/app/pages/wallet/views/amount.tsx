import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

export const AmountBox = ({
  coinWalletDetails,
  amountWalletDetails,
  nativeCurrency,
  mainCurrency,
  nativePrice,
}: {
  coinWalletDetails: Hooks.User.coinsWallet[];
  amountWalletDetails: Hooks.User.UseCoinBalance.userWallet[];
  nativeCurrency: string;
  mainCurrency: string;
  nativePrice: number;
}) => {
  const navigate = Router.useNavigate();
  const data = amountWalletDetails?.find(
    ({ typeId }) => typeId === mainCurrency
  ) || {
    balance: 0,
    freeze: 0,
    typeId: mainCurrency,
  };
  const estimatedCoinsTotal = coinWalletDetails
    ?.filter(({ currency }) => currency === mainCurrency)
    ?.filter(({ type }) => type === "COIN")
    ?.map(
      (coin) =>
        coin.current_price *
        (coin.balance - Math.abs(coin.freeze)) *
        nativePrice
    )
    ?.reduce((a, b) => a + b, 0);

  const handleDeposit = () => {
    console.log("opening");
    const depositUrl = `${Constants.API_CONFIG.base}wallet/deposit`;
    const selectedCoin = coinWalletDetails.find(
      ({ type, currency }) => type === "COIN" && currency === mainCurrency
    );

    console.log("Navigating to:", depositUrl);
    console.log("Main Currency:", mainCurrency);
    console.log("Selected Coin:", selectedCoin);
    console.log("Coin ID:", selectedCoin?.coinId || "No Coin ID Found");
    console.log("Data before navigation:", data);

    navigate(depositUrl, {
      state: {
        ...data,
        coinId: selectedCoin?.coinId,
        type: "AMOUNT",
      },
    });
  };

  const handleWithdraw = () =>
    navigate(`${Constants.API_CONFIG.base}wallet/withdraw`, {
      state: {
        ...data,
        coinId: coinWalletDetails.find(
          ({ type, currency }) => type === "COIN" && currency === mainCurrency
        )?.coinId,
        type: "AMOUNT",
      },
    });

  return (
    <Components.Global.Container
      id="mainCurrency"
      direction="column"
      spacing={2}
      sx={{ height: "100%", p: { xs: 3, sm: 5 } }}
    >
      {/* <Mui.Typography
        variant="h6"
        noWrap
        sx={{ fontWeight: 900 }}
      >
        Balance Details
      </Mui.Typography> */}

      <Mui.Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
        justifyContent="space-between"
        spacing={5}
      >
        <Mui.Stack
          direction="row"
          spacing={2}
          alignItems="center"
          id="totalBalance"
        >
          <Mui.IconButton
            size="large"
            disableRipple
            sx={{ border: 1, borderColor: "primary.light" }}
          >
            <Mui.CardMedia
              src="images/wallet.png"
              component="img"
              sx={{
                width: 30,
                height: 30,
              }}
            />
          </Mui.IconButton>
          <Components.Global.StackLabel
            // titleColor="#fff"
            title="Total Balance"
            label={
              <Mui.Typography variant="h5" /* sx={{ color: "#ffff" }} */>
                <Components.Global.Format
                  type="coin"
                  number={data.balance - Math.abs(data.freeze)}
                  coin={data?.typeId}
                />
              </Mui.Typography>
            }
            node
            medium
          />
        </Mui.Stack>
        <Mui.Stack
          direction="row"
          spacing={2}
          alignItems="center"
          id="estimatedValue"
        >
          <Mui.IconButton
            size="large"
            disableRipple
            sx={{ border: 1, borderColor: "primary.light" }}
          >
            <Mui.CardMedia
              src="images/walletusd.png"
              component="img"
              sx={{
                width: 30,
                height: 30,
              }}
            />
          </Mui.IconButton>
          <Components.Global.StackLabel
            // titleColor="#fff"
            title="Total Asset Value"
            label={
              <Mui.Typography variant="h5" /* sx={{ color: "#ffff" }} */>
                <Components.Global.Format
                  type={nativeCurrency}
                  number={
                    estimatedCoinsTotal +
                    (data.balance - Math.abs(data.freeze)) * nativePrice
                  }
                />
              </Mui.Typography>
            }
            node
            medium
          />
        </Mui.Stack>
        <Mui.Box flexGrow={{ xs: 0, sm: 1 }} />
        <Mui.Stack /* spacing={2} */ gap={2} direction="row">
          <Mui.Button
            id="mainCurrencyDeposit"
            variant="contained"
            // color="success"
            // disableElevation
            onClick={handleDeposit}
            startIcon={
              <Mui.CardMedia
                src="images/Deposit.png"
                component="img"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            }
            sx={{
              bgcolor: "#00C566",
              borderRadius: 2.5,
              py: 1.25,
              px: 3,
              "&:hover": {
                bgcolor: "#00C566",
                boxShadow: "none",
              },
            }}
          >
            Deposit
          </Mui.Button>
          <Mui.Button
            id="mainCurrencyWithdraw"
            disabled={data?.balance - Math.abs(data?.freeze) <= 0}
            variant="contained"
            color="warning"
            // disableElevation
            onClick={handleWithdraw}
            startIcon={
              <Mui.CardMedia
                src="images/Withdraw.png"
                component="img"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            }
            sx={{
              bgcolor: "#FCB923",
              borderRadius: 2.5,
              py: 1.25,
              px: 3,
              "&:hover": {
                bgcolor: "#FCB923",
                boxShadow: "none",
              },
            }}
          >
            Withdraw
          </Mui.Button>
        </Mui.Stack>
      </Mui.Stack>
    </Components.Global.Container>
  );
};
