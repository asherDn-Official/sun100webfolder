import * as Formik from "formik";
import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Contexts from "src/app/contexts";
import * as Constants from "src/constants";

export const UserInfo = ({ disabled }: { disabled?: boolean }) => {
  const { user } = React.useContext(Contexts.UserContext);
  const { values } = Formik.useFormikContext<{ [key: string]: string }>();
  const { state } = Router.useLocation() as {
    state: { newPassword: string; removeProfile: string };
  };
  const navigate = Router.useNavigate();
  const handleRemovePhoto = () => {
    navigate(`${Constants.API_CONFIG.base}remove-profile`, {
      state,
    });
  };
  const handleChangePassword = () => {
    navigate(`${Constants.API_CONFIG.base}profile/change-password`, {
      state,
    });
  };

  return (
    <Mui.Grid container gap={2} sx={{ p: 0, m: 0 }}>

      {/* Profile Image */}
      <Mui.Grid item xs={12} >
        <Mui.Stack direction="row" alignItems="center">
          <Mui.Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Mui.IconButton
                // disabled={disabled}
                // color="secondary"
                onClick={() =>
                  document.getElementById("browseprofileImage")?.click()
                }
                sx={{
                  width: {xs: 25, md: 30},
                  height: {xs: 25, md: 30},
                  color: '#000',
                  bgcolor: "#fff",
                  // bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "gray",
                  },
                }}
              >
                <MuiIcons.DriveFileRenameOutline
                  sx={{ width: 15 }}
                />
              </Mui.IconButton>
            }
          >
            <Components.Form.ImageField
              avatar
              disabled={disabled}
              name="profileImage"
              initName={`${user?.firstName}_${user?.lastName}`}
              sx={{ width: {xs: 50, md: 75}, height: {xs: 50, md: 75}}}
            />
          </Mui.Badge>
          {
            {
              undefined: values["profileImage"] && (
                <Mui.Link
                  sx={{ pt: 3, cursor: "pointer" }}
                  onClick={handleRemovePhoto}
                >
                  Remove Photo
                </Mui.Link>
              ),
              // true: (
              //   <Mui.Link
              //     id="changeProfile"
              //     sx={{ pt: 3, cursor: "pointer" }}
              //     component={Router.Link}
              //     to="edit"
              //   >
              //     Change
              //   </Mui.Link>
              // ),
            }[disabled as unknown as string]
          }
        </Mui.Stack>
      </Mui.Grid>

      {/* Profile */}
      <Mui.Grid
        item
        xs={12}
        container
        spacing={1}
      >
        <Mui.Grid item xs={12}>
          <Mui.Stack
            direction='row'
            justifyContent="space-between"
            alignItems="center"
            gap={1}
            // width={'100%'}
          >
            <Mui.Typography variant="h5" fontSize={{xs: '18px', md: '24px' }} fontWeight={600}>Personal Details</Mui.Typography>
            <Mui.Button
              id="editProfile"
              endIcon={<MuiIcons.DriveFileRenameOutline />}
              // component={Router.Link}
              variant="outlined"
              color="secondary"
              sx={{border: 'none'}}
              // to="edit"
              onClick={() => navigate(`${Constants.API_CONFIG.base}profile/edit`)}
            >
              Edit
            </Mui.Button>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Components.Form.FormField
            label="First Name"
            name="firstName"
            size="small"
            disabled={disabled}
          />
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Components.Form.FormField
            label="Last Name"
            name="lastName"
            size="small"
            disabled={disabled}
          />
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Components.Form.FormField
            label="Email"
            name="email"
            size="small"
            disabled
          />
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Components.Form.PhoneField
            size="small"
            name="phoneNumber"
            type="text"
            label="Contact number"
            disabled={disabled}
          />
        </Mui.Grid>

      </Mui.Grid>

      {/* Password  */}
      <Mui.Grid
        container
        gap={1}
      >
        <Mui.Grid item xs={12} sm={12}>
          <Mui.Stack
            direction='row'
            display={'flex'}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            width={'100%'}
          >
            <Mui.Grid
            width={'100%'}
            >
            
            <Mui.Typography variant="h5" fontSize={{xs: '18px', md: '24px' }} fontWeight={600}>Password</Mui.Typography>
            <Components.Form.FormField
            name="password"
            type="password"
            size="small"
            disabled
            sx={{
              pointerEvents: "none",
              '& fieldset': {
                border: 'none', // Hide the outline
              },
              '& .MuiInputBase-input': {
                fontSize: '2rem', // Increase text size
                fontWeight: 'bold', // Make text bold
                mt: '-25px',
                ml: '-15px'
              },
            }}
            InputProps={{
              endAdornment: (
                <Mui.InputAdornment position="end">
                  <Mui.Link
                    id="changePassword"
                    color="primary"
                    fontWeight="bold"
                    variant="caption"
                    onClick={handleChangePassword}
                    sx={{ pointerEvents: "auto", cursor: "pointer" }}
                  >
                  </Mui.Link>
                </Mui.InputAdornment>
              ),
            }}
          />
          
            </Mui.Grid>
            <Mui.Button
              id="editProfile"
              endIcon={<MuiIcons.DriveFileRenameOutline sx={{ width: 15 }} />}
              // component={Router.Link}
              variant="outlined"
              color="secondary"
              sx={{ border: 'none'}}
              // to="edit"
              onClick={handleChangePassword}
            >
              Change
            </Mui.Button>
          </Mui.Stack>
          
        </Mui.Grid>
      </Mui.Grid>

    </Mui.Grid>
  );
};
