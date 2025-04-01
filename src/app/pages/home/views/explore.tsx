import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Explore = () => (
  <Mui.Grid
    container
    sx={{
      backgroundColor: "#FBFBFB",
      px: { xs: 1.5, md: 3, lg: 5 },
      pt: 2,
      pb: 3,
    }}
    xs={12}
    alignItems="center"
    justifyContent="center"
  >
    <Mui.Grid xs={12}>
      <Mui.Typography
        variant="h4"
        textAlign="center"
        fontWeight={900}
        pt={{ xs: 1, md: 4 }}
        sx={{
          // lineHeight: "4rem",
          paddingBottom: "1rem",
          fontSize: { xs: "25px", md: "32px" },
        }}
      >
        Explore Our <span style={{ color: "#FCB923" }}>App</span>
      </Mui.Typography>
    </Mui.Grid>
    <Mui.Grid
      container
      xs={12}
      /* spacing={3} */ sx={{
        py: { xs: 1, md: 3 },
        px: { xs: 1, md: 3, lg: 5 },
      }}
    >
      <Mui.Grid
        container
        justifyContent="center"
        item
        xs={12}
        md={6}
        sx={{
          pb: { xs: 3, md: 0 },
        }}
      >
        <Mui.Grid item xs={12} md={10}>
          <Mui.Stack direction="column" gap={4}>
            <Mui.Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={{ xs: 2, md: 4 }}
            >
              <Mui.Stack
                display={{ xs: "none", md: "flex" }}
                sx={{
                  width: 40,
                  heigth: 40,
                }}
              >
                <Mui.CardMedia
                  component="img"
                  src="images/Non Stop.png"
                  sx={{ width: 40, heigth: 40 }}
                />
              </Mui.Stack>
              <Mui.Stack spacing={1}>
                <Mui.Stack direction="row" gap={2} alignItems="center">
                  <Mui.CardMedia
                    component="img"
                    src={`${import.meta.env.BASE_URL}images/Non Stop.png`}
                    sx={{
                      width: 40,
                      heigth: 40,
                      display: { xs: "block", md: "none" },
                    }}
                  />
                  <Mui.Typography fontWeight={700} color="#002237" variant="h6">
                    Non-stop uptime
                  </Mui.Typography>
                </Mui.Stack>
                <Mui.Typography
                  variant="body1"
                  fontWeight={400}
                  color="#002237"
                  textAlign="justify"
                >
                  Experience unparalleled reliability with Sun100. Our robust
                  infrastructure ensures your transactions are always available,
                  day and night. Stay connected and trade confidently, knowing
                  our platform is always operational.
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
            <Mui.Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={{ xs: 2, md: 4 }}
            >
              <Mui.Stack
                display={{ xs: "none", md: "flex" }}
                sx={{
                  width: 40,
                  heigth: 40,
                }}
              >
                <Mui.CardMedia
                  component="img"
                  src="images/exchange.png"
                  sx={{ width: 40, heigth: 40 }}
                />
              </Mui.Stack>
              <Mui.Stack spacing={1}>
                <Mui.Stack direction="row" gap={2} alignItems="center">
                  <Mui.CardMedia
                    component="img"
                    src={`${import.meta.env.BASE_URL}images/Non Stop.png`}
                    sx={{
                      width: 40,
                      heigth: 40,
                      display: { xs: "block", md: "none" },
                    }}
                  />
                  <Mui.Typography fontWeight={700} color="#002237" variant="h6">
                    Streamlined exchange platform
                  </Mui.Typography>
                </Mui.Stack>
                <Mui.Typography
                  variant="body1"
                  fontWeight={400}
                  color="#002237"
                  textAlign="justify"
                >
                  Navigate with ease on Sun100. Our intuitive interface and
                  advanced tools make trading seamless and efficient. Enjoy a
                  hassle-free experience designed to optimize your trading
                  performance.
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
            <Mui.Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={{ xs: 2, md: 4 }}
            >
              <Mui.Stack
                display={{ xs: "none", md: "flex" }}
                sx={{
                  width: 40,
                  heigth: 40,
                }}
              >
                <Mui.CardMedia
                  component="img"
                  src="images/transaction.png"
                  sx={{ width: 40, heigth: 40 }}
                />
              </Mui.Stack>
              <Mui.Stack spacing={1}>
                <Mui.Stack direction="row" gap={2} alignItems="center">
                  <Mui.CardMedia
                    component="img"
                    src={`${import.meta.env.BASE_URL}images/Non Stop.png`}
                    sx={{
                      width: 40,
                      heigth: 40,
                      display: { xs: "block", md: "none" },
                    }}
                  />
                  <Mui.Typography fontWeight={700} color="#002237" variant="h6">
                    Transactions that are both fast and safe
                  </Mui.Typography>
                </Mui.Stack>
                <Mui.Typography
                  variant="body1"
                  fontWeight={400}
                  color="#002237"
                  textAlign="justify"
                >
                  Trade with peace of mind on Sun100. Our cutting-edge
                  technology guarantees quick transactions while maintaining
                  top-notch security. Benefit from a platform where speed meets
                  safety.
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6} alignSelf="center">
        <Mui.CardMedia component="img" src="images/exploreapp.png" />
        <Mui.Box display="flex" justifyContent="center" pt={3}>
          <Mui.Button
            size="large"
            variant="contained"
            sx={{ fontWeight: "bold", borderRadius: 4, py: 1.25, px: 4 }}
            component={Router.Link}
            to={`/account/login`}
            endIcon={
              <Mui.CardMedia
                src="images/white-arrow.png"
                component="img"
                sx={{
                  width: 20,
                  height: 10,
                }}
              />
            }
          >
            See App
          </Mui.Button>
        </Mui.Box>
      </Mui.Grid>
    </Mui.Grid>
  </Mui.Grid>
);
