import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import React from "react";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";
import * as Pages from "src/app/pages";
import * as Svg from "./svgFile";

export const Profile = ({
  click,
  check,
  trigger,
}: {
  click?: boolean;
  check: boolean;
  trigger: boolean;
}) => {
  const { user } = React.useContext(Contexts.UserContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = Mui.useTheme();
  const fillColor = theme.palette.mode === "dark" ? "#fff" : "#002237";

  return (
    <>
      <Mui.IconButton
        id="profileMenu"
        disableTouchRipple
        disableRipple
        size="small"
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          click && setAnchorEl(event.currentTarget)
        }
      >
        <Mui.Avatar
          sx={{ height: 35, width: 35 }}
          src={`${import.meta.env.VITE_API_ENCRYPTION}://${
            import.meta.env.VITE_API_IP
          }${import.meta.env.VITE_API_PATH}${user?.profileImage}`}
        />
        <MuiIcons.ArrowDropDown
          sx={{
            display: { xs: "none", md: "block" },
            color: !trigger && check ? "#fff" : "text.primary",
          }}
          fontSize="small"
        />
      </Mui.IconButton>
      <Mui.Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        sx={{
          display: anchorEl ? "block" : "none",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            bgcolor: "background.default",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            borderRadius: (theme) => theme.spacing(1),
            marginTop: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              marginLeft: -0.5,
              marginRight: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.default",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Mui.MenuItem
          component={Router.Link}
          to="profile/accountsettings"
          sx={{ textTransform: "capitalize" }}
        >
          <Mui.ListItemIcon>
          <Mui.Avatar
          sx={{ height: 18, width: 18 }}
          src={`${import.meta.env.VITE_API_ENCRYPTION}://${
            import.meta.env.VITE_API_IP
          }${import.meta.env.VITE_API_PATH}${user?.profileImage}`}
        />
          </Mui.ListItemIcon>
          {`${user?.firstName} ${user?.lastName}`}
        </Mui.MenuItem>
        <Mui.Divider sx={{ mx: 2 }} />
        <Mui.MenuItem component={Router.Link} to="profile/accountsettings">
          <Mui.ListItemIcon>
            <Svg.AccountIcon fillColor={fillColor} />
          </Mui.ListItemIcon>
          Account
        </Mui.MenuItem>
        {/* <Mui.MenuItem component={Router.Link} to="profile/accountsettings">
          <Mui.ListItemIcon>
            <Mui.CardMedia
              src='/images/Portfolio.png'
              component="img"
              sx={{
                width: 18,
                height: 18,
                objectFit: "contain",
              }}
            />
          </Mui.ListItemIcon>
          Portfolio
        </Mui.MenuItem> */}
        <Mui.MenuItem component={Router.Link} to="profile/kyc">
          <Mui.ListItemIcon>
            <Svg.KYCIcon fillColor={fillColor} />
          </Mui.ListItemIcon>
          KYC
        </Mui.MenuItem>
        <Mui.MenuItem component={Router.Link} to="invite">
          <Mui.ListItemIcon>
            <Svg.InviteIcon fillColor={fillColor} />
          </Mui.ListItemIcon>
          Invite Friends
        </Mui.MenuItem>
        <Mui.MenuItem component={Router.Link} to="help-center">
          <Mui.ListItemIcon>
            <Svg.HelpIcon fillColor={fillColor} />
          </Mui.ListItemIcon>
          Help Center
        </Mui.MenuItem>
        <Mui.Divider sx={{ mx: 2 }} />
        <Mui.MenuItem onClick={handleOpen}>
          <Mui.ListItemIcon>
            <Svg.LogoutIcon />
          </Mui.ListItemIcon>
          <Mui.Typography variant="body2" color="error">
            Logout
          </Mui.Typography>
        </Mui.MenuItem>
      </Mui.Menu>
      <Pages.Home.Dialogs.Logout open={open} close={handleClose} />
    </>
  );
};
