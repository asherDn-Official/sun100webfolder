import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as Constants from "src/constants";
import * as Assets from "src/assets";
import * as Contexts from "src/app/contexts";
import { StakingFooter } from "./stakeFooter";

export const StackLayout: React.FC = () => {
  const { dashboard } = React.useContext(Contexts.UserContext);

  const { pathname } = Router.useLocation();

  return (
    <Mui.Box>
      <Mui.Container
        // maxWidth="lg"
        sx={{
          px: { xs: 0, sm: 1 },
          backgroundImage: `url(${Assets.green}), url(${Assets.orenge})`,
          backgroundSize: "50% auto, 50% auto",
          backgroundPosition: "bottom left, top right",
          backgroundRepeat: "no-repeat, no-repeat",
          maxWidth: { md: "fullWidth" },
        }}
      >
        <Mui.Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Mui.Paper
            sx={{ p: 3, width: { md: "80%", xs: "90%" }, borderRadius: 3 }}
            elevation={0}
          >
            <Mui.Typography
              variant="h5"
              fontWeight={700}
              color="inherit"
              sx={{
                display: { sm: "none", md: "block", xs: "none" },
                bgcolor: "#FFFFFF",
              }}
            >
              Staking Overview
            </Mui.Typography>
            <Mui.Grid container spacing={3}>
              <Mui.Grid
                item
                md={4}
                sm={6}
                width={{ sm: "50%", md: "33%", xs: "50%" }}
              >
                <Mui.Paper
                  sx={{
                    width: "100%",
                    border: "1px solid #DFE7FF",
                    height: "103px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Mui.Box component={"img"} src={Assets.card} sx={{ mx: 2 }} />

                  <Mui.Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Mui.Typography
                      fontWeight={700}
                      color={"text.secondary"}
                      variant={"caption"}
                    >
                      {" "}
                      Total Staked{" "}
                    </Mui.Typography>
                    <Mui.Typography fontWeight={700}>
                      {dashboard?.active}
                    </Mui.Typography>
                  </Mui.Box>
                </Mui.Paper>
              </Mui.Grid>
              <Mui.Grid
                item
                md={4}
                sm={6}
                width={{ sm: "50%", md: "33%", xs: "50%" }}
              >
                <Mui.Paper
                  sx={{
                    width: "100%",
                    border: "1px solid #DFE7FF",
                    height: "103px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Mui.Box component={"img"} src={Assets.gift} sx={{ mx: 2 }} />
                  <Mui.Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Mui.Typography
                      fontWeight={700}
                      color={"text.secondary"}
                      variant={"caption"}
                    >
                      {" "}
                      Total Rewards Earned{" "}
                    </Mui.Typography>
                    <Mui.Typography fontWeight={700}>
                      {dashboard?.reward}
                    </Mui.Typography>
                  </Mui.Box>
                </Mui.Paper>
              </Mui.Grid>
              <Mui.Grid
                item
                md={4}
                sm={12}
                width={{ sm: "100%", md: "33%", xs: "100%" }}
              >
                <Mui.Paper
                  sx={{
                    width: "100%",
                    border: "1px solid #DFE7FF",
                    height: "103px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Mui.Box
                    component={"img"}
                    src={Assets.ticket}
                    sx={{ mx: 2 }}
                  />
                  <Mui.Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Mui.Typography
                      fontWeight={700}
                      color={"text.secondary"}
                      variant={"caption"}
                    >
                      Staking Positions{" "}
                    </Mui.Typography>
                    <Mui.Typography fontWeight={700}>
                      {" "}
                      {`${dashboard?.active} Actives`}
                    </Mui.Typography>
                  </Mui.Box>
                </Mui.Paper>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Paper>
        </Mui.Box>
        <Mui.Box
          sx={{
            // width: { md: "80%", xs: "90%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Mui.Paper
            sx={{ width: { md: "80%", xs: "90%" }, m: 3, borderRadius: 2 }}
            elevation={0}
          >
            <Mui.Grid container>
              {Constants.StakMenu.map((text, index) => (
                <Mui.Grid
                  item
                  md={12 / Constants.StakMenu?.length}
                  sm={12 / Constants.StakMenu?.length}
                  xs={12 / Constants.StakMenu?.length}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Mui.Button
                    key={index}
                    disableRipple
                    fullWidth
                    component={Router.Link}
                    to={text.toLowerCase()}
                    sx={
                      pathname.split("/")[2]?.split("%20").join(" ") ==
                      text.toLowerCase()
                        ? {
                            color: "#fff",
                            borderRadius: 2,
                            backgroundColor: "primary.main",
                            padding: 1.25,
                            // boxShadow: (theme) =>
                            //   `0 1rem 15px -.8rem ${theme.palette.primary.main} inset`,
                            // mt: -0.5,
                            // pt: 2,
                            "&:hover": {
                              backgroundColor: "primary.main",
                            },
                          }
                        : {
                            color: pathname === "/" ? "#fff" : "text.primary",
                          }
                    }
                  >
                    <Mui.Typography
                      variant="body1"
                      fontWeight={700}
                      color="inherit"
                    >
                      {text}
                    </Mui.Typography>
                  </Mui.Button>
                </Mui.Grid>
              ))}
            </Mui.Grid>
          </Mui.Paper>
        </Mui.Box>
        <Mui.Box
          sx={{
            // width: { md: "80%", xs: "90%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Router.Outlet />
        </Mui.Box>
      </Mui.Container>
      {/* <Mui.Box sx={{ my: 3 }}>
        <StakingFooter />
      </Mui.Box> */}
    </Mui.Box>
  );
};
