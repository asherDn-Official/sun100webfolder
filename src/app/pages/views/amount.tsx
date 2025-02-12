import * as Mui from "@mui/material";
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

  const handleDeposit = () =>
    navigate(`${Constants.API_CONFIG.base}wallet/deposit`, {
      state: {
        ...data,
        coinId: coinWalletDetails.find(({ type }) => type === "COIN")?.coinId,
      },
    });

  const handleWithdraw = () =>
    navigate(`${Constants.API_CONFIG.base}wallet/withdraw`, {
      state: {
        ...data,
        coinId: coinWalletDetails.find(({ type }) => type === "COIN")?.coinId,
      },
    });

  return (
    <Components.Global.Container
      direction="column"
      spacing={2}
      id="mainCurrency"
      sx={{ height: "100%" }}
    >
      {/* <Mui.Box> */}
        <Mui.Stack direction='row' alignItems='center' gap={1.5}>
          <Mui.Typography variant="h6" noWrap sx={{ color: "#818898" }}>
            Available Balance
          </Mui.Typography>
          {/* <Mui.CardMedia
              src='/images/eye.png'
              component="img"
              sx={{
                width: 20,
                height: 20,
                objectFit: "contain",
              }}
            /> */}
        </Mui.Stack>
        <Mui.Stack direction="row" justifyContent="space-between" sx={{mt: 0}}>
          <Mui.Typography variant="h5" fontWeight={700}>
            <Components.Global.Format
              type="number"
              number={data.balance - Math.abs(data.freeze)}
              // coin={data?.typeId}
            />
          </Mui.Typography>
          <Mui.Typography variant="h5" sx={{ color: "#005E00", opacity: 0.8 }}>
            {data?.typeId}
          </Mui.Typography>
        </Mui.Stack>
        <Mui.Stack>
          <Mui.Typography variant="h6" noWrap sx={{ color: "#818898" }}>
            Total Asset Value
          </Mui.Typography>
        </Mui.Stack>
        <Mui.Stack direction="row" justifyContent="space-between">
          <Mui.Typography variant="h5">
            <Components.Global.Format
              type={nativeCurrency}
              number={
                estimatedCoinsTotal +
                (data.balance - Math.abs(data.freeze)) * nativePrice
              }
            />
          </Mui.Typography>
        </Mui.Stack>
        <Mui.Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
            <Mui.Button
              id="mainCurrencyDeposit"
              variant="contained"
              size="small"
              // color="success"
              sx={{
                bgcolor: "#00C566",
                borderRadius: 2.5,
                py: 1.25,
                px: 3,
                "&:hover": {
                  bgcolor: "#00C566",
                  boxShadow: 'none'
                },
              }}
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
            >
              Deposit
            </Mui.Button>
            <Mui.Button
              id="mainCurrencyWithdraw"
              disabled={data?.balance - Math.abs(data?.freeze) <= 0}
              variant="contained"
              size="small"
              // color="warning"
              sx={{
                bgcolor: "#FCB923",
                borderRadius: 2.5,
                py: 1.25,
                px: 3,
                "&:hover": {
                  bgcolor: "#FCB923",
                  boxShadow: 'none'
                },
              }}
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
              onClick={handleWithdraw}
            >
              Withdraw
            </Mui.Button>
        </Mui.Stack>
      {/* </Mui.Box> */}
    </Components.Global.Container>
  );
};
