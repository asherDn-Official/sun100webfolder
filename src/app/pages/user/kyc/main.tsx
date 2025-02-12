import * as Mui from "@mui/material";
import React, { useEffect } from "react";
import * as Router from "react-router-dom";
import * as Formik from "formik";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

const setFocus = (name: string) => {
  const element = document.getElementById(name);
  if (element) {
    element.focus();
    element.scrollIntoView({ block: "center" });
  }
};

export const Main = () => {
  const { user } = React.useContext(Contexts.UserContext);
  const { activeStep, loading, userKYC, validation, submitKyc, setActiveStep } =
    Hooks.User.useUserUpdate();
  const [stepShow, setStepShow] = React.useState(true);

  useEffect(() => {
    if (
      userKYC?.userKyc?.idProof_verified &&
      userKYC?.userKyc?.addressProof_verified
    ) {
      setStepShow(false);
    }
  }, [userKYC?.userKyc]);

  // const goBack = () => {
  //   if(activeStep >= 1) {
  //     setActiveStep(activeStep - 1)
  //   }
  // }

  // const goNext = () => {
  //   if(activeStep <= 2) {
  //     setActiveStep(activeStep + 1)
  //   }
  // }

  return loading ? (
    <Components.Global.GlobalLoader />
  ) : (
    <Formik.Formik
      initialValues={
        userKYC?.userKyc && !Boolean(userKYC?.userKyc?.reason)
          ? {
              ...userKYC.userKyc,
              documentType: userKYC.userKyc?.documentType || "0",
              addressDocumentType: userKYC.userKyc?.addressDocumentType || "0",
            }
          : {
              email: user?.email as string,
              // firstName: user?.firstName || 'none',
              // lastName: user?.lastName || 'none',
              primaryPhoneNumber: "",
              secondaryPhoneNumber: "",
              documentType: "0",
              documentNumber: "",
              documentPhotoFront: "",
              documentPhotoBack: "",
              userPicture: "",
              addressDocumentType: "0",
              addressProofPhoto: "",
            }
      }
      validationSchema={validation}
      onSubmit={submitKyc}
    >
      {() => (
        <Mui.Container
          component={Formik.Form}
          maxWidth="lg"
          aria-disabled={true}
          sx={{ px: { xs: 0, sm: 0 } }}
        >
          <Mui.Grid container /* spacing={2} */>
            {stepShow && (
              <Mui.Grid item xs={12}>
                <Pages.User.Kyc.Views.Header
                  stepShow={stepShow}
                  setStepShow={setStepShow}
                />
              </Mui.Grid>
            )}
            {Boolean(userKYC?.userKyc?.reason) ? (
              <Mui.Grid item xs={12}>
                <Mui.Stack
                  direction="row"
                  alignItems="center"
                  component={Mui.Alert}
                  severity="error"
                  sx={{ borderRadius: 2 }}
                >
                  <Mui.Typography variant="h6">
                    KYC Registration Failed
                  </Mui.Typography>
                  <Mui.Typography variant="body1">
                    {userKYC?.userKyc?.reason}
                  </Mui.Typography>
                </Mui.Stack>
              </Mui.Grid>
            ) : null}
            {!stepShow && (
              <Mui.Grid item xs={12} container>
                <Mui.Stack direction='row' alignItems='center' gap={2}>
                  {/* <Mui.CardMedia
                    onClick={goBack}
                    component="img"
                    src={"images/back.png"}
                    sx={{
                      width: {xs: 20, md: 25},
                      height: {xs: 20, md: 25},
                      cursor: 'pointer'
                    }}
                  /> */}
                  <Mui.Typography variant="h5" fontSize={{xs: '18px', md: '24px' }} fontWeight={600} py={2}>
                    KYC Registration
                  </Mui.Typography>
                </Mui.Stack>
                <Mui.Grid item xs={12} md={12}>
                  <Pages.User.Kyc.Views.SubmitCard
                    activeStep={activeStep}
                    submitted={
                      !Boolean(userKYC?.userKyc?.reason) &&
                      Boolean(userKYC?.userKyc?.addressProofPhoto)
                    }
                    idVerify={userKYC?.userKyc?.idProof_verified}
                    addressVerify={userKYC?.userKyc?.addressProof_verified}
                    setActiveStep={setActiveStep}
                  />
                </Mui.Grid>
                <Content userKYC={userKYC} activeStep={activeStep} />
                <Mui.Grid item xs={12} mt={1} container justifyContent="center">
                  <Mui.Stack width={"95%"}>
                    {Boolean(
                      userKYC?.userKyc?.idProof_verified &&
                        userKYC?.userKyc?.addressProof_verified
                    ) ? (
                      <Mui.Button
                        color="success"
                        variant="contained"
                        fullWidth
                        disableRipple
                        disableElevation
                        sx={{
                          borderRadius: 2.5,
                          padding: 1.25,
                        }}
                        // onClick={goNext}
                      >
                        Verified
                      </Mui.Button>
                    ) : (
                      <Components.Form.SubmitButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          bgcolor: "primary.main",
                          borderRadius: 2.5,
                          padding: 1.25,
                          "&:hover": {
                            bgcolor: "primary.main",
                            boxShadow: "none",
                          },
                        }}
                        disabled={
                          !Boolean(userKYC?.userKyc?.reason) &&
                          Boolean(userKYC?.userKyc?.addressProofPhoto)
                        }
                      >
                        {!Boolean(userKYC?.userKyc?.reason) &&
                        Boolean(userKYC?.userKyc?.addressProofPhoto)
                          ? "Details Submitted Not Verified"
                          : activeStep === 2
                          ? "Submit"
                          : "Next"}
                      </Components.Form.SubmitButton>
                    )}
                  </Mui.Stack>
                </Mui.Grid>
              </Mui.Grid>
              // <Pages.User.Dialogs.KycComplete />
            )}
          </Mui.Grid>
          <Router.Outlet />
        </Mui.Container>
      )}
    </Formik.Formik>
  );
};

const Content = ({
  userKYC,
  activeStep,
}: {
  userKYC: Hooks.User.UseUserKYC.Response;
  activeStep: number;
}) => {
  const { errors, isSubmitting } = Formik.useFormikContext();
  React.useEffect(() => {
    Object.entries(errors).forEach(([key, _], index) => {
      index ? null : setFocus(key);
    });
  }, [isSubmitting]);
  console.log('====================================');
  console.log(activeStep >= 2);
  console.log('====================================');

  return (
    <Mui.Grid item xs={12} md={12} container /* spacing={2} */>
      <Pages.Views.IntroJSConfig name="kyc" />

      {activeStep === 0 && (
        <>
          <Pages.User.Kyc.Views.ContactDetail
            disabled={Boolean(
              (!Boolean(userKYC?.userKyc?.reason) &&
                userKYC?.userKyc?.secondaryPhoneNumber) /* ||
                activeStep >= 1 */
            )}
          />
        </>
      )}
      {activeStep === 1 && (
        <>
          <Pages.User.Kyc.Views.ResidentialAddress
            disabled={Boolean(
              (!Boolean(userKYC?.userKyc?.reason) &&
                userKYC?.userKyc?.addressProofPhoto) /* ||
                activeStep >= 2 */
            )}
          />
        </>
      )}
      {activeStep === 2 && (
        <>
          <Pages.User.Kyc.Views.DocumentDetail
            disabled={
              (!Boolean(userKYC?.userKyc?.reason) &&
                Boolean(userKYC?.userKyc?.documentPhotoBack)) /* ||
              activeStep >= 3 */
            }
          />
        </>
      )}
    </Mui.Grid>
  );
};
