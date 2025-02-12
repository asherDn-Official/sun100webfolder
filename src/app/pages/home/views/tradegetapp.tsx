import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const TradeGetApp = () => (
  <>
    <Mui.Box sx={{ backgroundColor: "#FBFBFB" }}>
      <Mui.Container maxWidth="lg" sx={{ p: 0 }}>
        <Mui.Grid
          container
          sx={{
            // backgroundColor: "#FBFBFB",
            px: { xs: 0, md: 10 },
            pt: { xs: 1, md: 8 },
            pb: { xs: 3, md: 8 },
            // mx: {xs: 0, md: 10}
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
              sx={{
                paddingBottom: "1rem",
                fontSize: { xs: "25px", md: "32px" },
              }}
            >
              Trade{" "}
              <span style={{ color: "#FCB923" }}>Anytime , Anywhere.</span>
            </Mui.Typography>
          </Mui.Grid>
          <Mui.Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            <Mui.Grid
              container
              xs={12}
              md={6}
              sx={{
                p: 1,
                justifyContent: "center",
              }}
            >
              <Mui.CardMedia
                component="img"
                src={`${import.meta.env.BASE_URL}/images/getapp.png`}
                sx={{ width: { xs: "80%", md: "100%" }, objectFit: "inherit" }}
              />
            </Mui.Grid>
            <Mui.Grid
              container
              justifyContent={{ xs: "center" /* , md: "flex-start" */ }}
              xs={12}
              md={6}
            >
              <Mui.Grid item xs={12} md={10}>
                <Mui.Stack direction="column" gap={2}>
                  <Mui.Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Mui.CardMedia
                      component="img"
                      src="images/QRcode.png"
                      sx={{ width: "185px" }}
                    />
                    <Mui.Stack>
                      <Mui.Typography
                        variant="body1"
                        fontSize={{ xs: "12px", md: "14px" }}
                      >
                        Scan to Download
                      </Mui.Typography>
                      <Mui.Typography
                        variant="h6"
                        fontWeight={700}
                        fontSize={{ xs: "12px", md: "18px" }}
                      >
                        IOS & ANDROID
                      </Mui.Typography>
                    </Mui.Stack>
                  </Mui.Stack>
                  <Mui.Typography textAlign="center">or</Mui.Typography>
                  <Mui.Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Mui.Button
                      sx={{
                        bgcolor: "primary.main",
                        color: "#fff",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "#fff",
                        },
                        boxShadow: "none",
                        borderRadius: 1.25,
                      }}
                      component={Router.Link}
                      to={`/account/login`}
                      variant="contained"
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
                      Get app
                    </Mui.Button>
                  </Mui.Box>
                </Mui.Stack>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Container>
    </Mui.Box>
    <Mui.Stack position="relative">
      <Mui.CardMedia
        component="img"
        src={"images/Rectangle.png"}
        sx={{ bgcolor: "#FBFBFB" }}
      />
      <Mui.Box
        position="absolute"
        width="100%"
        top={{ xs: "20%", md: "50%" }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Mui.Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          alignItems="center"
        >
          <Mui.Typography
            color="#fff"
            variant="h4"
            fontWeight={700}
            sx={{ fontSize: { xs: "25px", md: "32px" } }}
          >
            Join <span style={{ color: "#FCB923" }}>Sun100</span> Today
          </Mui.Typography>
          <Mui.Button
            sx={{
              bgcolor: "transparent",
              border: "1px solid #FCB923",
              color: "#fff",
              "&:hover": {
                bgcolor: "transparent",
                color: "#fff",
              },
              boxShadow: "none",
              borderRadius: 6,
            }}
            variant="contained"
            endIcon={
              <Mui.CardMedia
                src="images/Background.png"
                component="img"
                // sx={{
                //   width: 20,
                //   height: 10,
                // }}
              />
            }
          >
            Get the app
          </Mui.Button>
        </Mui.Stack>
      </Mui.Box>
    </Mui.Stack>
  </>
);
