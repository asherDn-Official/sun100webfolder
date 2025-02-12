import * as Formik from "formik";
import React from "react";
import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Validations from "src/app/validations";
import * as Page from "src/app/pages";

export const Main = () => {
  const { login } = Hooks.User.useAuth();
  const [index, setIndex] = React.useState(0);
  const handleClick = (i: number) => setIndex(i);

  return (
    <>
      <Mui.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          px: 1,
        }}
      >
        <Mui.Card
          component={Mui.Paper}
          sx={{ borderRadius: 2.5, width: { xs: 300, sm: 445 } }}
        >
          <Mui.CardContent
            component={Mui.Stack}
            gap={2}
            sx={{
              justifyContent: "center",
            }}
          >
            <Mui.Typography variant="h5" fontWeight={900}>
              {index === 0 ? "Login" : "Sign up"} to Sun100
            </Mui.Typography>
            <Mui.Grid
              container
              direction="row"
              justifyContent="center"
              padding={0.625}
              borderRadius={3}
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "action.hover" : "#F8F9FC",
              }}
            >
              {["Login", "Sign Up"].map((text, i) => (
                <Mui.Grid item xs={6}>
                  <Mui.Button
                    size="small"
                    key={i}
                    id={text}
                    variant={index === i ? "contained" : "outlined"}
                    onClick={() => handleClick(i)}
                    disableRipple
                    sx={{
                      textTransform: "capitalize",
                      color: index === i ? undefined : "text.secondary",
                      border: "none",
                      outline: "none",
                      borderRadius: 2.5,
                      width: "100%",
                      p: 1.25,
                      boxShadow: "none",
                      "&:hover": {
                        border: "none",
                        backgroundColor:
                          index === i ? "primary.main" : "transparent",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <Mui.Typography
                      noWrap
                      variant="h6"
                      /* fontSize="inherit" */ color={
                        index === i ? "#fff" : "text.primary"
                      }
                    >
                      {text}
                    </Mui.Typography>
                  </Mui.Button>
                </Mui.Grid>
              ))}
            </Mui.Grid>
            {
              {
                0: (
                  <Formik.Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={Validations.login}
                    onSubmit={login}
                  >
                    {() => (
                      <Formik.Form>
                        <Pages.Account.Login.Views.Content />
                      </Formik.Form>
                    )}
                  </Formik.Formik>
                ),
                1: (
                  <>
                    <Page.Account.Register.Main />
                  </>
                ),
              }[index]
            }
          </Mui.CardContent>
        </Mui.Card>
      </Mui.Box>
      <Router.Outlet />
    </>
  );
};
