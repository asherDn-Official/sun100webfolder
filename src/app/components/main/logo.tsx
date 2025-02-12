import * as Mui from "@mui/material";
import * as Assets from "src/assets";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";

export const NavigateLogo = ({
  image,
  sx,
  video = false,
}: { image: string } & Pick<Mui.CardMediaProps, "sx"> & {
    video?: boolean;
  }) => (
  <Mui.CardActionArea
    disableRipple
    // component={Router.Link}
    // to={`${Constants.API_CONFIG.base}dashboard`}
    sx={{ zIndex: 2, width: "fit-content", p: 1, borderRadius: 1 }}
  >
    <Mui.CardMedia
      component={video ? "video" : "img"}
      autoPlay
      loop
      src={image}
      sx={{...sx}}
      // sx={{ height: 55, width: 120, ...sx }}
    />
  </Mui.CardActionArea>
);

export const Center = () => (
  <NavigateLogo image={Assets.Main_logo} sx={{ width: 150 }} />
);

export const MainCenterLogo = (props: Pick<Mui.CardMediaProps, "sx">) => {
  const theme = Mui.useTheme();
  const { pathname } = Router.useLocation();
  return (
    <NavigateLogo
      image={
        theme.palette.mode === "dark" || pathname === "/"
          ? `${Assets.Main_logo}`
          : `${Assets.Main_logo}`
      }
      {...props}
      sx={{ width: 150 }}
    />
  );
};

export const MainCenterLogoWHITE = () => (
  <NavigateLogo image={Assets.Main_logo} />
);
