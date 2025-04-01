import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Assets from "src/assets";
import * as Contexts from "src/app/contexts";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";

export const Trusted = ({
  user,
}: {
  user: Contexts.userContext.User | undefined;
}) => (
  <Mui.Grid
    container
    sx={{
      pt: { xs: 3, lg: 5 },
      pb: { xs: 0, lg: 5 },
    }}
    xs={12}
  >
    <Mui.Grid container xs={12} alignItems='center' spacing={{xs: 0,md: 12}}>
      <Mui.Grid item xs={12} md={6}>
        <Mui.CardMedia
          component="img"
          src="images/trusted.png"
          sx={{ width: "100%" }}
        />
      </Mui.Grid>
      <Mui.Grid
        item
        xs={12}
        md={6}
        sx={{
          p: 3,
        }}
      >
        <Mui.Typography
          variant="h4"
          textAlign="left"
          fontWeight={900}
          sx={{
            // lineHeight: "4rem",
            paddingBottom: "1rem",
            fontSize: {xs: '25px', md: '32px'}
          }}
        >
          The Most <span style={{ color: "#FCB923" }}>Trusted</span>{" "}
          Cryptocurrency Platform
        </Mui.Typography>
        <Mui.Stack direction='column' gap={{xs: 2, md: 8}}>
            <Mui.Stack direction='row' gap={4}>
                <Mui.Typography fontWeight={700} color="#FCB923" variant="h6">
                    01
                </Mui.Typography>
                <Mui.Stack>
                    <Mui.Typography fontWeight={700} color="#002237" variant="h6">
                    Sync between platforms
                    </Mui.Typography>
                    <Mui.Typography variant="body1" fontWeight={400} color="#002237">
                    No matter if you're using our web interface or mobile app — your data
                    is always synced. Just one account for all our services.
                    </Mui.Typography>
                </Mui.Stack>            
            </Mui.Stack>
            <Mui.Stack direction='row' gap={4}>
                <Mui.Typography fontWeight={700} color="#FCB923" variant="h6">
                    02
                </Mui.Typography>
                <Mui.Stack>
                    <Mui.Typography fontWeight={700} color="#002237" variant="h6">
                    More focus, less clutter
                    </Mui.Typography>
                    <Mui.Typography variant="body1" fontWeight={400} color="#002237">
                    No ads, just the crypto and content you love.
                    </Mui.Typography>
                </Mui.Stack>            
            </Mui.Stack>
            <Mui.Stack direction='row' gap={4}>
                <Mui.Typography fontWeight={700} color="#FCB923" variant="h6">
                    03
                </Mui.Typography>
                <Mui.Stack>
                    <Mui.Typography fontWeight={700} color="#002237" variant="h6">
                    Security by default
                    </Mui.Typography>
                    <Mui.Typography variant="body1" fontWeight={400} color="#002237">
                    Enable privacy mode and app locking to protect your data.
                    </Mui.Typography>
                </Mui.Stack>            
            </Mui.Stack>
            <Mui.Stack direction='row' justifyContent={{xs: 'center', md: 'flex-start'}}>
                <Mui.Button
                  size="large"
                  variant="contained"
                  sx={{ fontWeight: "bold", borderRadius: 4, py: 1.25, px: 3 }}
                  component={Router.Link}
                  to={`/account/login`}
                  endIcon={
                    <Mui.CardMedia
                        src={`${import.meta.env.BASE_URL}images/white-arrow.png`}
                        component="img"
                        sx={{
                          width: 20,
                          height: 10,
                        }}
                      />}
                >
                    Sign Up Now
                </Mui.Button>
            </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
    </Mui.Grid>
  </Mui.Grid>
);
