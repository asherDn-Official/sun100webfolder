import React from "react";
import * as Mui from "@mui/material";
import * as Component from "src/app/components";
import * as Assets from "src/assets";
import * as Contexts from "src/app/contexts";

export const Staking_confirm: React.FC<StakingModel> = ({ onClose, open }) => {
  const { resetStak } = React.useContext(Contexts.UserContext);

  const handleReset = () => {
    resetStak();
    onClose();
  };
  return (
    <Component.Global.Dialog icon={false} open={open} onClose={onClose}>
      <Mui.Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "444px",
        }}
      >
        <Mui.Paper sx={{ width: "90%", m: 1 }}>
          <Mui.Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Mui.Box component={"img"} src={Assets.success} />
            <Mui.Typography sx={{ mx: 2 }} fontWeight={700} variant="h5">
              {`Success`}
            </Mui.Typography>
            <Mui.Typography sx={{ mx: 2 }} variant="body1">
              {`you have Sucessfully locked`}
            </Mui.Typography>
            <Mui.Typography sx={{ mx: 2 }} variant="body1">
              {`SUN100 with USDT`}
            </Mui.Typography>
          </Mui.Box>
        </Mui.Paper>

        <Mui.Box sx={{ mb: 2 }}>
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
            onClick={handleReset}
          >
            Continue
          </Mui.Button>
        </Mui.Box>
      </Mui.Paper>
    </Component.Global.Dialog>
  );
};

interface StakingModel {
  open: boolean;
  onClose: () => void;
}
