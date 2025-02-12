import React from "react";
import * as Mui from "@mui/material";
import * as Component from "src/app/components";
import { PoolDetails } from "src/app/hooks/main";
import * as Contexts from "src/app/contexts";
import * as Providers from "src/app/providers";
import dayjs from "dayjs";

export const stakeModel: React.FC<StakingModel> = ({
  userData,
  open,
  onClose,
}) => {
  const handler = Providers.useCustomHandler;

  const { add_stake } = React.useContext(Contexts.UserContext);
  const [amount, setAmount] = React.useState<string>("");
  const [accept, setAccept] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  const STAKING_PERIOD_DAYS = 1080; // 36 months in days
  const DAILY_REWARD_PERCENTAGE = 0.003;

  const accountCreatedDate = dayjs(userData?.createdAt);
  const today = dayjs();
  const accountAgeDays = today.diff(accountCreatedDate, "day");
  console.log("cos", accountAgeDays);
  let maxStakingAmount = 0;
  if (accountAgeDays <= 30) {
    maxStakingAmount = 20000;
  } else if (accountAgeDays <= 60) {
    maxStakingAmount = 50000;
  } else if (accountAgeDays <= 90) {
    maxStakingAmount = 100000;
  } else if (accountAgeDays <= 180) {
    maxStakingAmount = 250000;
  } else if (accountAgeDays <= 365) {
    maxStakingAmount = 500000;
  }

  const dailyReward =
    amount && !isNaN(Number(amount))
      ? (Number(amount) * DAILY_REWARD_PERCENTAGE).toFixed(2)
      : "0.00";
  const handleUpdateAmount = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let { value } = event.target;
      value = value.replace(/\D/g, ""); // Remove non-numeric characters

      if (Number(value) > maxStakingAmount) {
        setError(`Max staking amount allowed: ${maxStakingAmount} SUN100`);
      } else {
        setError("");
      }

      setAmount(value);
    },
    [maxStakingAmount]
  );

  const handleacceptConditions = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setAccept(checked);
    },
    []
  );
  const handleStakAdd = React.useCallback(async () => {
    if (accept) {
      const data = {
        poolId: Number(userData?.spId),
        amount: Number(amount),
      };
      await add_stake(data);
    } else {
      handler({
        message: "please accept the terms and conditions",
        variant: "info",
      });
    }
  }, [userData, amount, accept]);
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
        <Mui.Paper sx={{ width: "90%", m: 1 }}>
          <Mui.Typography sx={{ mx: 2 }} fontWeight={700} variant="h6">
            {`Stake ${userData?.baseCoin}`}
          </Mui.Typography>
        </Mui.Paper>
        <Mui.Paper sx={{ width: "90%", m: 1 }}>
          <Mui.Typography sx={{ mx: 2 }}>
            {`Available ${userData?.baseCoin} to Stake`}
          </Mui.Typography>
          <Mui.Typography sx={{ mx: 2 }} fontWeight={700}>
            {`${userData?.totalAmount || 0} ${userData?.baseCoin}`}
          </Mui.Typography>
        </Mui.Paper>
        <Mui.Paper
          sx={{
            bgcolor: "#fff6f0",
            width: "90%",
            m: 1,
            p: 2,
            color: "#000000",
          }}
        >
          <Mui.Typography
            fontWeight={700}
            variant="h6"
            sx={{ color: "#000000" }}
          >
            Enter amount to stake
          </Mui.Typography>

          <Mui.Box sx={{ display: "flex", my: 2, color: "#000000" }}>
            <Mui.TextField
              value={amount}
              onChange={handleUpdateAmount}
              placeholder="Enter amount to stake"
              size="medium"
              error={!!error}
              helperText={error || ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px 0px 0px 15px",
                  padding: 0,
                  "& .MuiOutlinedInput-input": {
                    padding: "7px 10px",
                    color: "#000000",
                  },
                },
              }}
              fullWidth
            />
            <Mui.Button
              variant="contained"
              sx={{ borderRadius: "0px 15px 15px 0px" }}
              size="medium"
            >
              SUN100
            </Mui.Button>
          </Mui.Box>

          <Mui.FormControl>
            <Mui.FormLabel id="demo-radio-buttons-group-label">
              <Mui.Typography fontWeight={700} variant="h6" color="#000000">
                Staking Period
              </Mui.Typography>
            </Mui.FormLabel>
            <Mui.RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="36"
              name="row-radio-buttons-group"
              sx={{ display: "flex", color: "#000000" }}
            >
              {/* <Mui.FormControlLabel
                value="26"
                control={<Mui.Radio />}
                label="24 Months"
              /> */}
              <Mui.FormControlLabel
                value="36"
                control={<Mui.Radio />}
                label="36 Months"
              />
            </Mui.RadioGroup>
          </Mui.FormControl>

          <Mui.Grid container spacing={2} sx={{ my: 1, width: "100%" }}>
            <Mui.Grid md={4} xs={4} sm={4} item>
              <Mui.Box
                sx={{
                  width: "100%",
                  border: "1px dashed  #FF640B",
                  borderRadius: "15px",
                  bgcolor: "#FFFFFF",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Mui.Typography
                  sx={{ color: "#FF640B" }}
                  fontWeight={700}
                  textAlign={"center"}
                  variant="h6"
                >
                  {userData?.dailyReturnsInPcnt}
                </Mui.Typography>
                <Mui.Typography
                  textAlign={"center"}
                  variant="body1"
                  fontWeight={500}
                  color="#000000"
                  sx={{
                    px: 2,
                  }}
                >
                  Daily Rewards
                </Mui.Typography>
              </Mui.Box>
            </Mui.Grid>
            <Mui.Grid md={8} xs={8} sm={8} item>
              <Mui.Box
                sx={{
                  width: "100%",
                  border: "1px dashed  #FF640B",
                  borderRadius: "15px",
                  bgcolor: "#FFFFFF",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Mui.Typography
                  sx={{ color: "#FF640B" }}
                  fontWeight={700}
                  textAlign={"center"}
                  variant="h6"
                >
                  {`${dailyReward} ${userData?.baseCoin}`}
                </Mui.Typography>
                <Mui.Typography
                  textAlign={"center"}
                  variant="body1"
                  fontWeight={500}
                >
                  SUN100 Daily Reward
                </Mui.Typography>
              </Mui.Box>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Paper>
        <Mui.Box sx={{ m: 1, p: 2 }}>
          <Mui.Typography variant="body2">
            The deposited Sun100 will be locked for 36 months , and you will be
            unable to withdraw Sun100 within the locking period, Daily Reward
            wil be paid out directly to your wallet and be withdrawn at your
            ease
          </Mui.Typography>
          <Mui.Box sx={{ display: "flex", alignItems: "center" }}>
            <Mui.Checkbox onChange={handleacceptConditions} checked={accept} />
            <Mui.Typography variant="body2">
              I agree to the <a>Terms and conditions</a>
            </Mui.Typography>
          </Mui.Box>
        </Mui.Box>
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
              color: "white",
            }}
            disabled={!!error || Number(amount || "0") == 0} // Disable button when there's an error or no amount
            onClick={handleStakAdd}
          >
            Stake Now
          </Mui.Button>
        </Mui.Box>
      </Mui.Paper>
    </Component.Global.Dialog>
  );
};

interface StakingModel {
  userData: PoolDetails;
  open: boolean;
  onClose: () => void;
}
