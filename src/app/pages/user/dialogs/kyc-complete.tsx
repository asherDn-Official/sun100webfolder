import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";
import * as Component from "src/app/components";

export const KycComplete = () => (
  <Component.Global.Dialog fullScreen={false}>
    <Mui.Stack component={Mui.DialogContent} spacing={3} alignItems="center">
      <Mui.CardMedia
        component="img"
        src={`${import.meta.env.BASE_URL}images/Successmark.png`}
        sx={{ height: 150, width: 150 }}
      />
      <Mui.Typography variant="h5" textAlign="center">
        KYC Submission Completed
      </Mui.Typography>
      <Mui.Typography variant="body2" color="text.secondary" textAlign="center">
        Thanks for submitting your document. We’ll verify it and complete your
        KYC as soon as possible.
      </Mui.Typography>
      <Mui.Button
        variant="contained"
        sx={{ bgcolor: "primary.main", p: 1.25, borderRadius: 2.5 }}
        component={Router.Link}
        to="/profile/kyc"
      >
        Back to KYC
      </Mui.Button>
    </Mui.Stack>
  </Component.Global.Dialog>
);
