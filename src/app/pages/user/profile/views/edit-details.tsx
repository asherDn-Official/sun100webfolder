import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Validations from "src/app/validations";
import * as Constants from "src/constants";

export const EditUser = ({ user }: { user: Contexts.userContext.User }) => {
  const { update } = Hooks.User.useUserUpdate();

  return (
    <Mui.Container maxWidth="md" sx={{ p: { xs: 0, sm: 0 } }}>
      <Formik.Formik
        initialValues={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          phoneNumber: user?.phoneNumber,
          profileImage: user?.profileImage,
          password: "........",
        }}
        validationSchema={Validations.profile}
        onSubmit={update}
      >
        {({ isSubmitting }) => (
          <Formik.Form>
            <Mui.Stack /* spacing={2} */>
              <Components.Global.Container
                direction="column"
                justifyContent="start"
                spacing={2}
                sx={{ height: "100%" }}
              >
                <Mui.Typography variant="h5" fontSize={{xs: '18px', md: '24px' }} fontWeight={600}>
                  Edit Personal Details
                </Mui.Typography>
                <Pages.User.Profile.Views.UserInfo disabled={isSubmitting} />
              </Components.Global.Container>
              <Mui.Grid item xs={12} sx={{ p: 0 }}>
                <Mui.Stack
                  // spacing={2}
                  alignItems="center"
                  justifyContent='space-between'
                  direction='row'
                >
                  <Mui.Button
                    sx={{ maxWidth: '50%' }}
                    variant="outlined"
                    component={Router.Link}
                    to={`${Constants.API_CONFIG.base}profile/accountsettings`}
                  >
                    Discard
                  </Mui.Button>
                  <Components.Form.SubmitButton sx={{ maxWidth: '50%' }}>
                    Save Changes
                  </Components.Form.SubmitButton>
                </Mui.Stack>
              </Mui.Grid>
            </Mui.Stack>
            <Router.Outlet />
          </Formik.Form>
        )}
      </Formik.Formik>
    </Mui.Container>
  );
};
