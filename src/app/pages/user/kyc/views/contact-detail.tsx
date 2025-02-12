import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const ContactDetail = ({ disabled }: { disabled?: boolean }) => (
  <Components.Global.Container
    sx={{ p: 0 }}
    id="contactDetail"
    // sx={{
    //   maxWidth: { xs: "100%", md: 350 },
    //   minWidth: "100%",
    //   minHeight: "100%",
    // }}
    // customTitle={
    //   <Mui.Typography variant="h6" color="primary.main" fontWeight="bold">
    //     Contact Details
    //   </Mui.Typography>
    // }
  >
    <Mui.Grid container spacing={1} sx={{ pt: 2 }}>
      <Mui.Grid item xs={12}>
        <Components.Form.FormField
          size="small"
          name="email"
          type="text"
          placeholder="Joe@gmail.com"
          label="Email"
          disabled
        />
      </Mui.Grid>
      {/* <Mui.Grid item xs={12} md={6}>
        <Components.Form.FormField
          size="small"
          name="firstName"
          type="text"
          placeholder=""
          label="First name"
          // disabled
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Components.Form.FormField
          size="small"
          name="lastName"
          type="text"
          placeholder=""
          label="Last name"
          // disabled
        />
      </Mui.Grid> */}
      <Mui.Grid item xs={12} md={6}>
        <Components.Form.PhoneField
          size="small"
          name="primaryPhoneNumber"
          type="text"
          label="Contact number"
          disabled={disabled}
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Components.Form.PhoneField
          size="small"
          name="secondaryPhoneNumber"
          type="text"
          label="Secondary phone number"
          disabled={disabled}
        />
      </Mui.Grid>
    </Mui.Grid>
  </Components.Global.Container>
);
