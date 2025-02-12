import * as Mui from "@mui/material";
import * as Assets from "src/assets";

export const Header = ({stepShow, setStepShow}: {stepShow: boolean, setStepShow: any}) => (
  <Mui.Paper
    component={Mui.Stack}
    spacing={3}
    sx={{
      // height: { sm: 350 },
      // position: "relative",
      // overflow: "hidden",
      // backgroundImage: `url('${Assets.KycBg}')`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // objectFit: "fill",
      borderRadius: 4,
      p: 4,
    }}
    alignItems="start"
  >
    {/* <Mui.Box sx={{ p: { md: 2 } }} /> */}
    <Mui.Container maxWidth="sm" component={Mui.Stack} spacing={2}>
      <Mui.Typography variant="h5" sx={{ color: "#000" }}>
        KYC Registration
      </Mui.Typography>
      <Mui.Typography variant="body1" sx={{ color: "#000" }}>
        Complete KYC registration steps to start Buy and Sell your Assets.
      </Mui.Typography>
      
      <Mui.Stack
          width={'100%'}
          height={{ xs: "50%", md: '50%' }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={'center'}
      >
          <Mui.CardMedia
          component='img'
          src={Assets.KycFrame}
          sx={{
            width: '60%'
          }}
          />
      </Mui.Stack>
      <Mui.Button
        fullWidth
        onClick={() => setStepShow(false)}
        variant="contained"
        sx={{ bgcolor: "primary.main",
          borderRadius: 2.5,
          padding: 1.25,
          "&:hover": {
            bgcolor: "primary.main",
            boxShadow: 'none'
          } 
        }}
      >
        Start verify
      </Mui.Button>
    </Mui.Container>
  </Mui.Paper>
);
