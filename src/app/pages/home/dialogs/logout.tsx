import * as Mui from "@mui/material";
import React from "react";
import * as Assets from "src/assets";
import * as Contexts from "src/app/contexts";
import * as Component from "src/app/components";
import * as Api from "src/api";

export const Logout = ({
  open,
  close,
}: {
  close: () => void;
  open?: boolean;
}) => {
  const { update } = React.useContext(Contexts.UserContext);

  const handleLogout = async () => {
    localStorage.removeItem("accessToken");
    update();
  };

  const handleLogoutAll = async () => {
    await Api.Server.Request("logoutAll", { allDevice: true }).then((res)=> {
      console.log("Logout API Response:", res);
      if(!res.error) {
        localStorage.removeItem("accessToken");
        update();
      }
    });
   
  }; 

  return (
    <Component.Global.Dialog
      open={open}
      fullScreen={false}
      icon
      onClose={close}
    >
      <Mui.Stack component={Mui.DialogContent} spacing={3} alignItems="center">
        <Mui.Typography variant="h5" textAlign="center" pt={2}>
          Are you sure want to logout?
        </Mui.Typography>
        {/* <Mui.Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          Are you sure you want to logout?
        </Mui.Typography> */}
        <Mui.Stack width='100%' direction="column" gap={2}>
          <Mui.Button
            size="small"
            variant="contained" onClick={handleLogoutAll}
            sx={{
              border: '1px solid #D33535',
              bgcolor: 'transparent',
              color: '#D33535',
              borderRadius: 2,
              p: 1.25,
              "&:hover": {
                bgcolor: 'transparent',
              }
            }}
          >
            <Mui.Typography variant="h6">
              Logout from all devices
            </Mui.Typography>
          </Mui.Button>
          <Mui.Button
            size="small"
            variant="contained"
            onClick={handleLogout}
            sx={{
              bgcolor: '#D33535',
              borderRadius: 2,
              p: 1.25,
              "&:hover": {
                bgcolor: '#D33535',
              }
            }}
          >
            <Mui.Typography variant="h6">
              Logout from this device
            </Mui.Typography>
          </Mui.Button>
          {/* <Mui.Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={close}
          >
            <Mui.Typography variant="h6">Cancel</Mui.Typography>
          </Mui.Button> */}
        </Mui.Stack>
      </Mui.Stack>
    </Component.Global.Dialog>
  );
};
