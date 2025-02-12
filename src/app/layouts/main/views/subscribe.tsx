import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Validations from "src/app/validations";
import { Padding } from "@mui/icons-material";

export const Subscribe = () => {
  const { subscribe } = Hooks.Support.useContact();
  return (
    <Formik.Formik
      initialValues={{ email: "" }}
      validationSchema={Validations.email}
      onSubmit={subscribe}
    >
      {() => (
        <Mui.Stack direction='row' alignItems='center' component={Formik.Form}/*  spacing={2} */>
          <Mui.Box sx={{width: '100%'}}>
          <Components.Form.FormField
            size="medium"
            name="email"
            placeholder="Enter your email"
            hide={true}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                padding: 0,
                '& .MuiOutlinedInput-input': {
                  padding: '10px 14px',
                  color: '#fff',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <Mui.InputAdornment position="end">
                  <Components.Form.SubmitButton
                    size="large"
                    sx={{
                      width: "fit-content",
                      height: "fit-content",
                      fontWeight: 900,
                      py: 1.25,
                      borderRadius: 5
                    }}
                  >
                    Subscribe
                  </Components.Form.SubmitButton>
                </Mui.InputAdornment>
              ),
            }}
          />
          </Mui.Box>
        </Mui.Stack>
      )}
    </Formik.Formik>
  );
};
