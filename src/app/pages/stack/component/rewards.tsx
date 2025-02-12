import React from "react";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as MuiIcons from "@mui/icons-material";
import * as Contexts from "src/app/contexts";
import * as Assets from "src/assets";
import * as Pages from "src/app/pages";

export const rewards = () => {
  const { staking_reward, Redeem_amount, openModel, setOpenModel } =
    React.useContext(Contexts.UserContext);

  const handleClose_model = () => {
    setOpenModel(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedeem = React.useCallback(async () => {
    setOpenModel(true);
    // await Redeem_amount(staking_reward?.balance);
    setAnchorEl(null);
  }, [staking_reward?.balance]);

  return (
    <Components.Global.Container
      direction="column"
      spacing={2}
      sx={{ m: { md: 0, sm: 2, xs: 2 } }}
    >
      <Mui.Typography variant="h6" fontWeight={900}>
        Rewards
      </Mui.Typography>
      <Mui.Grid container spacing={2}>
        <Mui.Grid item md={3} sm={12} xs={12}>
          <Mui.Grid
            container
            sx={{
              display: "flex",
              flexDirection: { md: "column", sm: "row", xs: "row" },
              justifyContent: { sm: "space-between", xs: "space-between" },
              alignItems: { sm: "center", xs: "center", md: "flex-start" },
            }}
          >
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography fontWeight={700}>
                Available Rewards
              </Mui.Typography>
            </Mui.Grid>
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography
                sx={{
                  my: 1.5,
                  mx: { md: 0, sm: 2, xs: 2 },
                  textAlign: { md: "center", sm: "end", xs: "end" },
                }}
              >
                {`${staking_reward?.balance?.toFixed(2)} ${staking_reward?.coin || ""}`}
              </Mui.Typography>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Grid item md={3} sm={12} xs={12}>
          <Mui.Grid
            container
            sx={{
              display: "flex",
              flexDirection: { md: "column", sm: "row", xs: "row" },
              justifyContent: { sm: "space-between", xs: "space-between" },
              alignItems: { sm: "center", xs: "center", md: "flex-start" },
            }}
          >
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography fontWeight={700}> Estimated USDT</Mui.Typography>
            </Mui.Grid>
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography
                sx={{
                  my: 1.5,
                  mx: { md: 0, sm: 2, xs: 2 },
                  textAlign: { md: "center", sm: "end", xs: "end" },
                }}
              >
                {staking_reward?.estimatedValue?.toFixed(2)}
              </Mui.Typography>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Grid item md={3} sm={12} xs={12}>
          <Mui.Grid
            container
            sx={{
              display: "flex",
              flexDirection: { md: "column", sm: "row", xs: "row" },
              justifyContent: {
                sm: "space-between",
                xs: "space-between",
                md: "flex-start",
              },
              alignItems: { sm: "center", xs: "center", md: "flex-start" },
            }}
          >
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography fontWeight={700}> Daily Rewards</Mui.Typography>
            </Mui.Grid>
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography
                sx={{
                  my: 1.5,
                  mx: { md: 0, sm: 2, xs: 2 },
                  textAlign: { md: "center", sm: "end", xs: "end" },
                }}
              >
                {staking_reward?.daily?.toFixed(2) || 0}
              </Mui.Typography>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Grid item md={3} sm={12} xs={12}>
          <Mui.Grid
            container
            sx={{
              display: "flex",
              flexDirection: { md: "column", sm: "row", xs: "row" },
              justifyContent: {
                sm: "space-between",
                xs: "space-between",
                md: "flex-start",
              },
              alignItems: { sm: "center", xs: "center", md: "flex-start" },
            }}
          >
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.Typography fontWeight={700}> Action</Mui.Typography>
            </Mui.Grid>
            <Mui.Grid item md={12} sm={6} xs={6}>
              <Mui.IconButton
                onClick={handleClick}
                id="IconMenu"
                sx={{
                  mx: { md: 0, sm: 2, xs: 2 },
                  textAlign: { md: "center", sm: "end", xs: "end" },
                  float: { md: "none", sm: "right", xs: "right" },
                }}
              >
                <MuiIcons.MoreVert />
              </Mui.IconButton>
              <Mui.Menu
                id="IconMenu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Mui.MenuItem onClick={handleRedeem}>
                  <Mui.Box sx={{ display: "flex", alignItems: "center" }}>
                    <Mui.Box
                      component={"img"}
                      src={`${import.meta.env.VITE_API_ENCRYPTION}://${
                        import.meta.env.VITE_API_IP
                      }${import.meta.env.VITE_API_PATH}${staking_reward?.baseCoinImg}`}
                      sx={{ width: "30px", mx: 2 }}
                    />
                    <Mui.Typography fontSize={"20px"}>
                      Redeem Reward
                    </Mui.Typography>
                  </Mui.Box>
                </Mui.MenuItem>
              </Mui.Menu>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
      <Pages.Stak.component.redeemModel
        open={openModel}
        onClose={handleClose_model}
        data={staking_reward}
      />
    </Components.Global.Container>
  );
};
