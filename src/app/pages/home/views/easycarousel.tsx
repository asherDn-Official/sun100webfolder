import * as Mui from "@mui/material";
import * as Layouts from "src/app/layouts";

export const EasyCarousel = () => (
  <Mui.Grid
    item
    sx={{
      height: { xs: "420px", md: "600px" },
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url('${import.meta.env.BASE_URL}images/carouselbg.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: {xs: 'inherit' ,md: "cover"},
      backgroundPosition: "bottom",
      backgroundColor: "#FBFBFB",
      zIndex: 0,
    }}
    xs={12}
  >
    <Mui.Typography
      position="relative"
      top={{xs: '0%', md: "35%", lg: '30%', xl: '15%'}}
      // left={{xs: '0%',sm: '13', md: "18%", lg: '20%'}}
      variant="h4"
      fontWeight={700}
      sx={{ color: "#fff", textAlign: "center", mt: 4, fontSize: {xs: '25px', md: '32px'} }}
    >
      Client Testimonials
    </Mui.Typography>
    <Mui.Stack>
      <Mui.Stack
        spacing={2}
        justifyContent="space-around"
        sx={{
          width: {xs: '60%', md: '100%'},
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
        }}
      >
        <Layouts.Account.Views.NewCarousel />
      </Mui.Stack>
    </Mui.Stack>
  </Mui.Grid>
);
