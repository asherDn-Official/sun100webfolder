import React from "react";
import * as Mui from "@mui/material";
import * as Contexts from "src/app/contexts";
import * as Assets from "src/assets";
import * as Pages from "src/app/pages";

export const Staking = () => {
  const { poolResult, model } = React.useContext(Contexts.UserContext);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number>();

  const handleStakenow = React.useCallback(
    (id: number) => () => {
      setOpen(true);
      setSelected(id);
    },
    []
  );
  const onClose = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <Mui.Box sx={{ width: { md: "88%", xs: "90%" }, m: 3, borderRadius: 2 }}>
      <Mui.Grid container spacing={2}>
        {poolResult?.map((item, idx) => (
          <Mui.Grid item md={4} xs={12} sm={6}>
            <Mui.Paper sx={{ borderRadius: 5 }}>
              <Mui.Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  borderTopRightRadius: "10px",
                }}
              >
                <Mui.Button
                  variant="text"
                  sx={{
                    background: "#FF640B1A",
                    width: "100px",
                    borderTopRightRadius: "70px",
                    borderBottomLeftRadius: "100px",
                    fontSize: "x-small",
                  }}
                >
                  Trending
                </Mui.Button>
              </Mui.Box>
              <Mui.Box
                sx={{
                  background: "#FF640B1A",
                  width: "118px",
                  height: "40px",
                  mx: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: " 1px solid #DFE7FF",
                  borderRadius: "81.54px",
                }}
              >
                <Mui.Typography
                  variant="body1"
                  fontWeight={700}
                  color="inherit"
                >
                  {item?.baseCoin || ""}
                </Mui.Typography>
              </Mui.Box>
              <Mui.Box sx={{ p: 2, width: "100%" }}>
                <Mui.Paper
                  sx={{
                    width: "100%",
                    border: "1px solid #DFE7FF",
                    height: "103px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    px: 3,
                  }}
                >
                  <Mui.Box
                    component={"img"}
                    src={Assets.valut}
                    // src={`${import.meta.env.VITE_API_ENCRYPTION}://${
                    //   import.meta.env.VITE_API_IP
                    // }${import.meta.env.VITE_API_PATH}${item?.baseCoinImg}`.replaceAll(/([^:]\/)\/+/g, "$1")}
                    sx={{ mx: 2 }}
                  />
                  <Mui.Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Mui.Typography fontWeight={700}>SUN100</Mui.Typography>
                    <Mui.Typography fontWeight={700} color={"#1EB38A"}>
                      {`${item?.totalAmount || 0}`}
                    </Mui.Typography>
                  </Mui.Box>
                </Mui.Paper>
              </Mui.Box>
              <Mui.Box sx={{ p: 2, width: "100%" }}>
                <Mui.Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                >
                  <Mui.Typography fontWeight={700} color={"text.secondary"}>
                    Daily Rewards{" "}
                  </Mui.Typography>
                  <Mui.Typography fontWeight={700} color={"#1EB38A"}>
                    {`${item?.dailyReturnsInPcnt} %`}
                  </Mui.Typography>
                </Mui.Box>
                <Mui.Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                >
                  <Mui.Typography fontWeight={700} color={"text.secondary"}>
                    Monthly Rewards{" "}
                  </Mui.Typography>
                  <Mui.Typography fontWeight={700} color={"#1EB38A"}>
                    {`${item?.monthlyReturnsInPcnt} %`}
                  </Mui.Typography>
                </Mui.Box>
                <Mui.Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                >
                  <Mui.Typography fontWeight={700} color={"text.secondary"}>
                    Lock-in Period
                  </Mui.Typography>
                  <Mui.Typography fontWeight={700}>
                    {item?.pool_name}
                  </Mui.Typography>
                </Mui.Box>
                <Mui.Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                >
                  <Mui.Typography fontWeight={700} color={"text.secondary"}>
                    Network Type
                  </Mui.Typography>
                  <Mui.Typography fontWeight={700}>
                    {item?.networkType}
                  </Mui.Typography>
                </Mui.Box>
                <Mui.Box
                  sx={{ display: "flex", flexDirection: "column", my: 1 }}
                >
                  <Mui.Button
                    variant="contained"
                    sx={{
                      borderRadius: "20px",
                      my: 1,
                      background:
                        "linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",
                      color: "white",
                    }}
                    onClick={handleStakenow(idx)}
                  >
                    Stake Now
                  </Mui.Button>
                  {/* <Mui.Button
                    variant="outlined"
                    sx={{ borderRadius: "20px", my: 1 }}
                  >
                    Details
                  </Mui.Button> */}
                </Mui.Box>
              </Mui.Box>
            </Mui.Paper>
          </Mui.Grid>
        ))}
      </Mui.Grid>
      {model == "1" && (
        <Pages.Stak.component.stakeModel
          userData={poolResult?.[selected || 0]}
          open={open}
          onClose={onClose}
        />
      )}
      {model == "2" && (
        <Pages.Stak.component.Staking_confirm open={open} onClose={onClose} />
      )}
    </Mui.Box>
  );
};
