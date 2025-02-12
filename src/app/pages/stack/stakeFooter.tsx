import React from "react";
import * as Mui from "@mui/material";
import * as Assets from "src/assets";

export const StakingFooter = () => {
  return (
    <Mui.Paper
      sx={{
        padding: 5,
        borderRadius: 2,
      }}
    >
      <Mui.Grid container sx={{ paddingTop: 2 }}>
        <Mui.Grid item md={4} xs={12} sm={12}>
          <Mui.Typography variant="h5" fontWeight={700} color="inherit">
            Benefits of Staking
          </Mui.Typography>
          <Mui.Typography variant="body1" color="inherit">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </Mui.Typography>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid
        container
        sx={{
          paddingTop: 2,
          display: "flex",
          flexDirection: {
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
        }}
      >
        <Mui.Grid
          item
          md={8}
          sx={{
            backgroundImage: ` url(${Assets.orenge}),url(${Assets.green})`,
            backgroundSize: "50% auto, 50% auto",
            backgroundPosition: "top left, bottom right",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <Mui.Grid container spacing={5}>
            <Mui.Grid item md={4}>
              <Mui.Paper elevation={1} sx={{ p: 1, minHeight: "212px" }}>
                <Mui.Box sx={{ width: "40px" }}>
                  <Mui.Box
                    sx={{ width: "100%" }}
                    component={"img"}
                    src={Assets.Withdrawal}
                  />
                </Mui.Box>
                <Mui.Typography variant="h6" fontWeight={700} color="inherit">
                  Quick Withdrawl
                </Mui.Typography>
                <Mui.Typography variant="body1" color="inherit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Mui.Typography>
              </Mui.Paper>
            </Mui.Grid>
            <Mui.Grid item md={4}>
              <Mui.Paper elevation={1} sx={{ p: 1, minHeight: "212px" }}>
                <Mui.Box sx={{ width: "40px" }}>
                  <Mui.Box
                    sx={{ width: "100%" }}
                    component={"img"}
                    src={Assets.Group}
                  />
                </Mui.Box>
                <Mui.Typography variant="h6" fontWeight={700} color="inherit">
                  Permissions
                </Mui.Typography>
                <Mui.Typography variant="body1" color="inherit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Mui.Typography>
              </Mui.Paper>
            </Mui.Grid>
            <Mui.Grid item md={4}>
              <Mui.Paper elevation={1} sx={{ p: 1, minHeight: "212px" }}>
                <Mui.Box sx={{ width: "40px" }}>
                  <Mui.Box
                    sx={{ width: "100%" }}
                    component={"img"}
                    src={Assets.High_Returm}
                  />
                </Mui.Box>
                <Mui.Typography variant="h6" fontWeight={700} color="inherit">
                  High Return
                </Mui.Typography>
                <Mui.Typography variant="body1" color="inherit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Mui.Typography>
              </Mui.Paper>
            </Mui.Grid>
            <Mui.Grid item md={4}>
              <Mui.Paper elevation={1} sx={{ p: 1, minHeight: "212px" }}>
                <Mui.Box sx={{ width: "40px" }}>
                  <Mui.Box
                    sx={{ width: "100%" }}
                    component={"img"}
                    src={Assets.budget}
                  />
                </Mui.Box>
                <Mui.Typography variant="h6" fontWeight={700} color="inherit">
                  No Fees
                </Mui.Typography>
                <Mui.Typography variant="body1" color="inherit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Mui.Typography>
              </Mui.Paper>
            </Mui.Grid>
            <Mui.Grid item md={4}>
              <Mui.Paper elevation={1} sx={{ p: 1, minHeight: "212px" }}>
                <Mui.Box sx={{ width: "40px" }}>
                  <Mui.Box
                    sx={{ width: "100%" }}
                    component={"img"}
                    src={Assets.Safety}
                  />
                </Mui.Box>
                <Mui.Typography variant="h6" fontWeight={700} color="inherit">
                  Safety
                </Mui.Typography>
                <Mui.Typography variant="body1" color="inherit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Mui.Typography>
              </Mui.Paper>
            </Mui.Grid>
            <Mui.Grid item md={4}>
              <Mui.Paper elevation={1} sx={{ p: 1, minHeight: "212px" }}>
                <Mui.Box sx={{ width: "40px" }}>
                  <Mui.Box
                    sx={{ width: "100%" }}
                    component={"img"}
                    src={Assets.Wages}
                  />
                </Mui.Box>
                <Mui.Typography variant="h6" fontWeight={700} color="inherit">
                  Easy Earning
                </Mui.Typography>
                <Mui.Typography variant="body1" color="inherit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </Mui.Typography>
              </Mui.Paper>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
        <Mui.Grid item md={4}>
          <Mui.Box sx={{ pt: 5 }}>
            <Mui.Box
              sx={{ width: "100%" }}
              component={"img"}
              src={Assets.layer}
            />
          </Mui.Box>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Paper>
  );
};
