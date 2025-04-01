import * as Mui from "@mui/material";
import * as Components from "src/app/components";

const steps = ["Contact Details", "Residential Address", "Document Details"];

export const SubmitCard = ({
  activeStep,
  idVerify,
  addressVerify,
  submitted,
  setActiveStep
}: {
  activeStep: number;
  idVerify?: number;
  addressVerify?: number;
  submitted?: boolean;
  setActiveStep: any
}) => (
  <Components.Global.Container
    id="kycSubmit"
    justifyContent="center"
    sx={{
      // height: "fit-content",
      // position: "sticky",
      // top: 70,
    }}
  >
    <Mui.Box  sx={{ width: '100%' }}>
      <Mui.Stepper activeStep={activeStep} alternativeLabel orientation="horizontal">
        {steps.map((label, index) => {
          return (
            <Mui.Step
              key={index}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "primary.main", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "primary.main", // Just text label (COMPLETED)
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "primary.main", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "common.white", // circle's number (ACTIVE)
                },
              }}
            >
              <Mui.StepLabel onClick={()=> setActiveStep(index)} sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Mui.Typography variant="subtitle2">{label}</Mui.Typography>
              </Mui.StepLabel>
            </Mui.Step>
          );
        })}
      </Mui.Stepper>
      {/* {Boolean(idVerify && addressVerify) ? (
        <Mui.Button
          color="success"
          variant="contained"
          fullWidth
          disableRipple
          disableElevation
        >
          Verified
        </Mui.Button>
      ) : (
        <Components.Form.SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ bgcolor: "primary.main" }}
          disabled={submitted}
        >
          {submitted
            ? "KYC documents review is in progress"
            : activeStep === steps.length
            ? "Submit For Verification"
            : "Next"}
        </Components.Form.SubmitButton>
      )} */}
    </Mui.Box>
  </Components.Global.Container>
);
