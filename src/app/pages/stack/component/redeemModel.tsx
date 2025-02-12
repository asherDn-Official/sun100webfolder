import React from "react";
import * as Mui from "@mui/material";
import * as Component from "src/app/components";
import { CoinBalanceDetails } from "src/app/hooks/main";
import * as Contexts from "src/app/contexts";

export const redeemModel: React.FC<RedeemModel> = ({ open, onClose, data }) => {
  const { Redeem_amount } = React.useContext(Contexts.UserContext);

  // const { add_stake } = React.useContext(Contexts.UserContext);

  const [amount, setAmount] = React.useState<string>("");
  const handleUpdateAmount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let { value } = event.target;
      value = value.replace(/\D/g, "");
      setAmount(value);
    },
    []
  );

  const handleStakAdd = React.useCallback(async () => {
    await Redeem_amount(Number(amount || "0"));
  }, [amount]);
  return (
    <Component.Global.Dialog icon={true} open={open} onClose={onClose}>
      <Mui.Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "444px",
        }}
      >
        <Mui.Typography fontWeight={700}>
          Confirm your rewards transfer to Spot wallet
        </Mui.Typography>
        <Mui.Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Mui.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: 2,
            }}
          >
            <Mui.Typography fontWeight={600}>Sun 100</Mui.Typography>
            <Mui.Typography>{data?.balance}</Mui.Typography>
          </Mui.Box>
          <Mui.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: 2,
            }}
          >
            <Mui.Typography fontWeight={600}>Estimated USDT</Mui.Typography>
            <Mui.Typography>{data?.estimatedValue}</Mui.Typography>
          </Mui.Box>
        </Mui.Box>
        <Mui.Paper sx={{ width: "90%", m: 1, p: 2 }}>
          <Mui.Box sx={{ display: "flex" }}>
            <Mui.TextField
              value={amount}
              onChange={handleUpdateAmount}
              placeholder="Enter amount "
              size="medium"
              //   sx={{
              //     "& .MuiOutlinedInput-root": {
              //       borderRadius: "15px 0px 0px 15px",
              //       padding: 0,
              //       "& .MuiOutlinedInput-input": {
              //         padding: "7px 10px",
              //       },
              //     },
              //   }}
              fullWidth
            />
          </Mui.Box>
        </Mui.Paper>

        <Mui.Box sx={{ mb: 2 }}>
          <Mui.Button
            variant="outlined"
            sx={{ borderRadius: "20px", my: 1, mx: 1 }}
            size="large"
            onClick={onClose}
          >
            cancel
          </Mui.Button>
          <Mui.Button
            size="large"
            variant="contained"
            sx={{
              borderRadius: "20px",
              my: 1,
              mx: 1,
              background:
                "linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",
              width: "225px",
            }}
            disabled={Number(amount || "0") == 0}
            onClick={handleStakAdd}
          >
            Redeem Now
          </Mui.Button>
        </Mui.Box>
      </Mui.Paper>
    </Component.Global.Dialog>
  );
};

interface RedeemModel {
  open: boolean;
  onClose: () => void;
  data: CoinBalanceDetails;
}
