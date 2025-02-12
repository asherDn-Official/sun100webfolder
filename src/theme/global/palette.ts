import * as Mui from "@mui/material";

export const PaletteLight = (): Pick<Mui.ThemeOptions, "palette"> => ({
  //   palette: {
  //     mode: "light",
  //     primary: {
  //       main: "#E1B049",
  //       contrastText: "#ffffff",
  //     },
  //     secondary: {
  //       main: "#333333",
  //     },
  //   },
  // });
  palette: {
    mode: "light",
    primary: {
      // main: "#FF5A09",
      // main: "#E1B049",
      main: "#FF640B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#333333",
    },
    grey: { 100: "#F1F2F5" },
  },
});

export const PaletteDark = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "dark",
    primary: {
      // main: "#E1B049",
      main: "#fdba35",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    grey: { 100: "transparent" },
    background: {
      paper: "#ffffff10",
    },
  },
});
