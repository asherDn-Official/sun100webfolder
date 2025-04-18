import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import React from "react";
import * as Themes from "src/theme";

export const ThemeSwitch = () => {
  const { mode, changeMode } = React.useContext(Themes.ThemeContext);

  return (
    <Mui.Box
      component={Mui.Stack}
      direction="row"
      alignItems="center"
      // spacing={1}
      sx={{
        // bgcolor: (theme) =>
        //   ({ light: `${theme.palette.primary.main}40`, dark: "primary.main" }[
        //     mode
        //   ]),
        // p: 1,
        // height: "fit-content",
        // borderRadius: 1,
        // maxWidth: 150,
        // transform: "scale(0.8)",
        cursor: "pointer",
      }}
      onClick={changeMode}
    >
      {
        {
          light: (
            <Mui.CardMedia
              src={`${import.meta.env.BASE_URL}images/LIGHTMODE.png`}
              component="img"
              sx={{
                width: 25,
                height: 25,
              }}
            />
          ),
          dark: (
            <Mui.CardMedia
              src={`${import.meta.env.BASE_URL}images/DARKMODE.png`}
              component="img"
              sx={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }[mode]
      }
    </Mui.Box>
  );
};
