import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import React from "react";
import * as Assets from "src/assets";
import * as Constants from "src/constants";
import * as Components from "src/app/components";

export const SearchBox = ({
  setFilter,
  p2pCurrency,
}: {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      amount: number;
      amountType: string;
      paymentType: string;
    }>
  >;
  p2pCurrency: string[];
}) => {
  const isMobile = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("sm"));

  const initial = {
    amount: "" as unknown as number,
    amountType: "all",
    paymentType: "all",
  };

  const Submit = (
    values: search.Form,
    { setSubmitting }: Formik.FormikHelpers<search.Form>
  ) => {
    setFilter(values);
    setSubmitting(false);
  };

  const Refresh = (
    _: search.Form,
    { setValues }: Formik.FormikHelpers<search.Form>
  ) => {
    setFilter(initial);
    setValues(initial);
  };

  return (
    <Formik.Formik initialValues={initial} onSubmit={Submit} onReset={Refresh}>
      {() => (
        <Formik.Form id="filterAds">
          <Components.Global.Container
            justifyContent="flex-end"
            alignItems="flex-end"
            direction={isMobile ? "column" : "row"}
            // sx={{
            //   border: (theme) => `1px solid ${theme.palette.grey[100]}`,
            // }}
            spacing={1.5}
          >
            {/* <Components.Form.AmountField
              size="small"
              name="amount"
              label="Amount"
              placeholder="Enter Amount"
              InputProps={{
                endAdornment: (
                  <Mui.InputAdornment position="end" sx={{ mr: -1.8, mt: -1 }}>
                    <Components.Form.SelectField name="amountType" size="small">
                      <Mui.MenuItem value="0">All</Mui.MenuItem>
                      {p2pCurrency.map((text, index) => (
                        <Mui.MenuItem key={index} value={text}>
                          {text}
                        </Mui.MenuItem>
                      ))}
                    </Components.Form.SelectField>
                  </Mui.InputAdornment>
                ),
              }}
            /> */}
            <Components.Form.SelectField
              size="small"
              name="paymentType"
              label="Payment method"
              placeholder="Any payment method"
              sx={{
                width: 200,
                "& .MuiListItemIcon-root": {
                  display: "none",
                },
              }}
            >
              <Mui.MenuItem value="all">
                {/* <Mui.ListItemIcon>
                  <Mui.Avatar
                    src={Assets.AllPayment}
                    sx={{ height: 25, width: 25 }}
                  />
                </Mui.ListItemIcon> */}
                Any payment method
              </Mui.MenuItem>
              <Mui.MenuItem value="0">
                <Mui.ListItemIcon>
                  <Mui.Avatar
                    src={`${import.meta.env.BASE_URL}images/allpayments.jpeg`}
                    sx={{ height: 25, width: 25 }}
                  />
                </Mui.ListItemIcon>
                All Payments
              </Mui.MenuItem>
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
            <Components.Form.SelectField
              name="amountType"
              label="Currency"
              size="small"
              sx={{ width: 200 }}
            >
              <Mui.MenuItem value="all">Any Currency</Mui.MenuItem>
              {p2pCurrency.map((text, index) => (
                <Mui.MenuItem key={index} value={text}>
                  {text}
                </Mui.MenuItem>
              ))}
            </Components.Form.SelectField>
            <Mui.Stack
              sx={{ width: "100%" }}
              justifyContent="flex-end"
              gap={1.5}
              direction="row"
            >
              <Components.Form.SubmitButton
                id="filter"
                sx={{
                  height: "initial",
                  width: "fit-content",
                  color: '#fff',
                  py: 1,
                  border: '1px solid #D9D9D9',
                  // boxShadow: "none",
                  // bgcolor: "transparent",
                  "&:hover": {
                    bgcolor: "primary.main",
                    boxShadow: "none",
                  },
                }}
                // startIcon={
                //   <Mui.CardMedia
                //     component="img"
                //     src={"images/search.png"}
                //     sx={{ width: 25, height: 25 }}
                //   />
                // }
              >
                Search
              </Components.Form.SubmitButton>
              <Mui.Button
                id="clearFilter"
                variant="outlined"
                type="reset"
                sx={{
                  padding: 0,
                  minWidth: 40,
                  border: "1px solid",
                  borderColor: "text.secondary",
                }}
              >
                <Mui.CardMedia
                  component="img"
                  src={"images/refresh.png"}
                  sx={{ height: 18, width: 18 }}
                />
              </Mui.Button>
            </Mui.Stack>
          </Components.Global.Container>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace search {
  export interface Form {
    amount: number;
    amountType: string;
    paymentType: string;
  }
}
