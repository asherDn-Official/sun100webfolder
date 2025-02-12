import * as Mui from "@mui/material";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          boxShadow: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: "20px",
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: "#fff",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          sx: {
            "& .MuiPaper-root": { bgcolor: "background.default" },
            maxHeight: 250,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#D9D9D9",
            },
            "&:hover fieldset": {
              borderColor: "#D9D9D9",
            },
            "&.Mui-focused fieldset": {
              borderColor:
                "linear-gradient(82.3deg, #FF9D00 10.8%, #FF5100 94.3%)",
            },
          },
        },
      },
    },
  },
});
