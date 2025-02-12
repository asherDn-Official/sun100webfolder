import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Components from "src/app/components";
import * as Validations from "src/app/validations";

export const PaymentDetails = ({
  variant,
  updatePayment,
  payment,
}: {
  variant: "view" | "edit";
  updatePayment: (type: string, values: object) => Promise<void>;
  payment: any;
}) => {
  const navigate = Router.useNavigate();
  const handleSave = async (
    { paymentType, ...paymentValues }: paymentDetails,
    { setSubmitting }: Formik.FormikHelpers<paymentDetails>
  ) => {
    let path = paymentType.toLowerCase().replaceAll(" ", "_");
    let docValues = Object.assign(
      {},
      ...Object.entries(paymentValues)
        .filter(([key]) => key.includes(path))
        .map(([key, value]) => ({ [key]: value }))
    );
    await updatePayment(path, docValues);
    navigate(`${Constants.API_CONFIG.base}profile`);
    setSubmitting(false);
  };
  // const handleSave = async() => {
  //   alert('show me')
  // }

  return (
    <Components.Global.Container
      id="paymentDetails"
      direction="column"
      justifyContent="start"
      // spacing={2}
      // sx={{ height: {xs: '100%', sm: 600} }}
      sx={{
        borderRadius: 0,
        padding: 0
      }}
    >
      <Mui.Stack
        direction='row'
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        pb={1}
      >
        <Mui.Typography variant="h5" fontSize={{xs: '18px', md: '24px' }} fontWeight={600}>Payment Details</Mui.Typography>
        <Mui.Button
          id="editPaymentDetail"
          endIcon={<MuiIcons.DriveFileRenameOutline />}
          color="secondary"
          // component={Router.Link}
          variant="outlined"
          onClick={()=> navigate(`${Constants.API_CONFIG.base}profile/payment-edit`)}
          sx={{ display: variant === "edit" ? "none" : "flex", border: "none" }}
        >
          Edit
        </Mui.Button>
      </Mui.Stack>

      <Formik.Formik
        initialValues={{
          ...payment,
          paymentType: Object.entries(Constants.PaymentType)[0][0] || "",
          bank_transfer$account_no: payment["bank_transfer$account_no"] || "",
          bank_transfer$account_name:
            payment["bank_transfer$account_name"] || "",
          bank_transfer$bank_name: payment["bank_transfer$bank_name"] || "",
          bank_transfer$ifsc_code: payment["bank_transfer$ifsc_code"] || "",
          bank_transfer$account_type: payment["bank_transfer$account_type"] || "",
          bank_transfer$bank_address: payment["bank_transfer$bank_address"] || "",
          bank_transfer$sort_code: payment["bank_transfer$sort_code"] || "",
          bank_transfer$routing_number:
            payment["bank_transfer$routing_number"] || "",
          upi$upi_id: payment["upi$upi_id"] || "",
          interac$email: payment["interac$email"] || "",
          interac$mobile_no: payment["interac$mobile_no"] || "",
          zelle$email: payment["zelle$email"] || "",
          zelle$mobile_no: payment["zelle$mobile_no"] || "",
          "m-pesa$name": payment["m-pesa$name"] || "",
          "m-pesa$mobile_no": payment["m-pesa$mobile_no"] || "",
          mtn_mobile_money$name: payment["mtn_mobile_money$name"] || "",
          mtn_mobile_money$mobile_no:
            payment["mtn_mobile_money$mobile_no"] || "",
          cash_app$cash_tag_id: payment["cash_app$cash_tag_id"] || "",
        }}
        validationSchema={Validations.PaymentDetails}
        onSubmit={handleSave}
      >
        {({ isSubmitting, values }) => (
          <Mui.Grid
            container
            component={Formik.Form}
            spacing={1}
            // sx={{ pr: 5, pb: 5 }}
          >
            <Mui.Grid item xs={12} md={6}>
              <Components.Form.SelectField
                size="small"
                name="paymentType"
                label="Payment Type"
                disabled={isSubmitting}
                sx={{
                  minWidth: { md: 200 },
                  "& .MuiListItemIcon-root": {
                    display: "none",
                  },
                }}
              >
                {Object.entries(Constants.PaymentType).map(
                  ([key, value], index) => (
                    <Mui.MenuItem value={key} key={index}>
                      <Mui.ListItemIcon>
                        <Mui.CardMedia
                          component="img"
                          src={value}
                          sx={{ height: 25, width: 25 }}
                        />
                      </Mui.ListItemIcon>
                      {key}
                    </Mui.MenuItem>
                  )
                )}
              </Components.Form.SelectField>
            </Mui.Grid>
            <Mui.Grid item xs={12} md={6}></Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "Bank Transfer" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`bank_transfer$account_no`}
                label={
                  <>
                    Account no <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "Bank Transfer" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`bank_transfer$account_name`}
                label={
                  <>
                    Account Name <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "Bank Transfer" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`bank_transfer$bank_name`}
                label={
                  <>
                    Bank Name <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "Bank Transfer" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`bank_transfer$bank_address`}
                label={
                  <>
                    Bank Address<span style={{ color: "red" }}>*</span>
                    {/* <Mui.Typography variant="caption">
                      (Optional : based on Country/Region)
                    </Mui.Typography> */}
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "Bank Transfer" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`bank_transfer$ifsc_code`}
                label={
                  <>
                    IFSC Code<span style={{ color: "red" }}>*</span>
                    {/* <Mui.Typography variant="caption">
                      (Optional : based on Country/Region)
                    </Mui.Typography> */}
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "UPI" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`upi$upi_id`}
                label={
                  <>
                    UPI ID <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            {/* <Mui.Grid
             item
             xs={12}
             md={6}
             
            > 

         <Components.Form.SelectField
          size="small"
          name={`bank_transfer$account_type`}
          label={
            <>
              Account Type <span style={{ color: "red" }}>*</span>
            </>
          }
         
        >
          <Mui.MenuItem disabled value={0}>
            <Mui.Typography variant="body1" color="text.secondary">
              Choose Account Type
            </Mui.Typography>
          </Mui.MenuItem>
          {["Current", "Saving"]?.map((item, index) => (
            <Mui.MenuItem value={item} key={index}>
              {item}
            </Mui.MenuItem>
          ))}
        </Components.Form.SelectField>

            </Mui.Grid> */}
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "INTERAC" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`interac$email`}
                type="text"
                label={
                  <>
                    Email <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "INTERAC" ? "block" : "none",
              }}
            >
              <Components.Form.PhoneField
                size="small"
                name={`interac$mobile_no`}
                type="text"
                label="Mobile No"
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "ZELLE" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`zelle$email`}
                type="text"
                label={
                  <>
                    Email <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "ZELLE" ? "block" : "none",
              }}
            >
              <Components.Form.PhoneField
                size="small"
                name={`zelle$mobile_no`}
                type="text"
                label="Mobile No"
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "M-PESA" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`m-pesa$name`}
                type="text"
                label={
                  <>
                    Name <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display: values["paymentType"] === "M-PESA" ? "block" : "none",
              }}
            >
              <Components.Form.PhoneField
                size="small"
                name={`m-pesa$mobile_no`}
                type="text"
                label={
                  <>
                    Mobile No <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "MTN MOBILE MONEY"
                    ? "block"
                    : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`mtn_mobile_money$name`}
                type="text"
                label={
                  <>
                    Name <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "MTN MOBILE MONEY"
                    ? "block"
                    : "none",
              }}
            >
              <Components.Form.PhoneField
                size="small"
                name={`mtn_mobile_money$mobile_no`}
                type="text"
                label={
                  <>
                    Mobile No <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid
              item
              xs={12}
              md={6}
              sx={{
                display:
                  values["paymentType"] === "Cash App" ? "block" : "none",
              }}
            >
              <Components.Form.FormField
                size="small"
                name={`cash_app$cash_tag_id`}
                label={
                  <>
                    Cash Tag ID <span style={{ color: "red" }}>*</span>
                  </>
                }
                disabled={variant === "view" || isSubmitting}
              />
            </Mui.Grid>
            <Mui.Grid item xs={12}>
              <Mui.Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                  width: "100%",
                  display: variant === "view" ? "none" : "flex",
                }}
              >
                <Mui.Button
                  sx={{ maxWidth: '50%' }}
                  variant="outlined"
                  component={Router.Link}
                  to={`${Constants.API_CONFIG.base}profile/paymentdetails`}
                >
                  Discard
                </Mui.Button>
                <Components.Form.SubmitButton  sx={{ maxWidth: '50%' }}>
                  Save Changes
                </Components.Form.SubmitButton>
              </Mui.Stack>
            </Mui.Grid>
          </Mui.Grid>
        )}
      </Formik.Formik>
    </Components.Global.Container>
  );
};
