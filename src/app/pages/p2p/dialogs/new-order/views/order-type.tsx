import * as Mui from "@mui/material";
import * as Formik from "formik";

export const OrderType = ({ name }: { name: string }) => {
  const { errors, values, touched, setFieldValue, setFieldTouched } =
    Formik.useFormikContext<{ [key: string]: string }>();
  return (
    <Mui.Stack spacing={1} onClick={() => setFieldTouched(name, true)}>
      {/* <Mui.Typography color="text.secondary">I want to</Mui.Typography> */}
      <Mui.Stack direction="row" /* spacing={2} */>
        <Mui.Button
          onClick={() => setFieldValue(name, "buy")}
          variant="outlined"
          // color={values[name] === "buy" ? "primary" : "secondary"}          
          sx={{
            clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)',
            width: '50%',
            bgcolor: `${values[name] === "buy" ? "#00C566" : "#EBEEF3"}`,
            color: `${values[name] === "buy" ? "#fff" : "#002237"}`,
            fontWeight: 700,
            border: 'none',
            p: 1.25,
            "&:hover": {
              bgcolor: `${values[name] === "buy" ? "#00C566" : "#EBEEF3"}`,
              border: 'none',
            }
          }}
        >
          Buy
        </Mui.Button>
        <Mui.Button
          onClick={() => setFieldValue(name, "sell")}
          variant="outlined"
          // color={values[name] === "sell" ? "primary" : "secondary"}
          sx={{
            clipPath: 'polygon(3% 0, 100% 0, 100% 100%, 0% 100%)',
            width: '50%',
            bgcolor: `${values[name] === "sell" ? "#D33535" : "#EBEEF3"}`,
            color: `${values[name] === "sell" ? "#fff" : "#002237"}`,
            border: 'none',
            fontWeight: 700,
            p: 1.25,
            "&:hover": {
              bgcolor: `${values[name] === "sell" ? "#D33535" : "#EBEEF3"}`,
              border: 'none',
            }
          }}
        >
          Sell
        </Mui.Button>
      </Mui.Stack>
      {touched[name] && errors[name] && (
        <Mui.FormHelperText sx={{ color: "error.main" }}>
          {errors[name]}
        </Mui.FormHelperText>
      )}
    </Mui.Stack>
  );
};
