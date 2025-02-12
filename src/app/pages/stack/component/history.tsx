import React from "react";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";

export const history = () => {
  const isMobile = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("md"));

  const { stakingHistory } = React.useContext(Contexts.UserContext);

  return (
    <Components.Global.Container direction="column" spacing={2}>
      <Mui.Typography variant="h6" fontWeight={900}>
        Locked Staking
      </Mui.Typography>
      {isMobile ? (
        <Mui.Box>
          {stakingHistory?.map((history) => (
            <Mui.Box sx={{ display: "flex", my: 2 }}>
              <Mui.Box
                sx={{
                  width: "10px",
                  background:
                    "linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />
              <Mui.Grid container sx={{ my: 2 }}>
                <Mui.Grid item xs={12} md={12} sm={12}>
                  <Mui.Grid container spacing={4}>
                    {["Token", "Time", "Size"].map((item) => (
                      <Mui.Grid item xs={4} md={4} sm={4}>
                        <Mui.Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Mui.Typography fontWeight={500}>
                            {item}
                          </Mui.Typography>
                          <Mui.Typography>
                            {history[`${item}` as keyof typeof history]}
                          </Mui.Typography>
                        </Mui.Box>
                      </Mui.Grid>
                    ))}
                  </Mui.Grid>
                </Mui.Grid>
                <Mui.Divider
                  sx={{
                    border: "px solid #D1D1D6",
                    width: "80%",
                    mx: "10%",
                    my: 1,
                  }}
                />
                <Mui.Grid item xs={12} md={12} sm={12}>
                  <Mui.Grid container>
                    {["Reward Account", "Daily Reward", "Reward Token"].map(
                      (item) => (
                        <Mui.Grid item xs={4} md={4} sm={4}>
                          <Mui.Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Mui.Typography fontWeight={500}>
                              {item}
                            </Mui.Typography>
                            <Mui.Typography>
                              {history[`${item}` as keyof typeof history]}
                            </Mui.Typography>
                          </Mui.Box>
                        </Mui.Grid>
                      )
                    )}
                  </Mui.Grid>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.Box>
          ))}
        </Mui.Box>
      ) : (
        <Components.Global.ResponsiveTable
          titles={[
            "Token",
            "Time",
            "Size",
            "Reward Account",
            "Daily Reward",
            "Reward Token",
            "Remaining Lock-In Period",
          ]}
          data={stakingHistory}
          sx={{ minHeight: "250px" }}
          hide_pagination={true}
        />
      )}
    </Components.Global.Container>
  );
};
