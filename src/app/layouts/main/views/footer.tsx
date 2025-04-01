import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Constants from "src/constants";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";

export const Footer = ({ auth }: { auth: boolean }) => {
  const check = Hooks.Design.useRouteCheck([
    `${Constants.API_CONFIG.base}exchange/:coinId`,
  ]);

  const pathname = Router.useLocation();

  return (
    <>
      <Mui.Grid
        container
        justifyContent="center"
        textAlign="center"
        xs={12}
        sx={{
          px: { xs: 2, xl: 10 },
          pt: { xs: 2, xl: 4 },
          bgcolor: "#000",
        }}
      >
        <Mui.Grid item xs={12} sm={7} md={4}>
          <Mui.Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Mui.Typography color="#fff" variant="h6" fontWeight={900} my={1}>
              Subscribe Newsletter
            </Mui.Typography>
            <Mui.Typography variant="body2" sx={{ color: "#fff" }}>
              Subscribe to our newsletter for to know big updates before
              everyone else and Yeah you can unscribe anytime !
            </Mui.Typography>
            <Mui.Box sx={{ width: "100%" }}>
              <Layouts.Main.Views.Subscribe />
            </Mui.Box>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid
        component={Mui.Paper}
        container
        sx={{
          // mt: 2,
          bgcolor: "#000",
          borderRadius: 0,
          color: "#fff",
          px: { xs: 3, xl: 10 },
          py: 4,
          display: check ? "none" : "flex",
          minWidth: "100%",
        }}
        gap={{ xs: 2, md: 0 }}
      >
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack gap={2}>
            <Components.Main.MainCenterLogoWHITE
            // sx={{ height: 80, width: 170 }}
            />
            <Mui.Typography
              variant="body2"
              sx={{ width: { lg: "79%" }, lineHeight: 2 }}
              textAlign="justify"
            >
              Sun100 is a pioneering trading platform that has gained the trust
              of users all over the world, given our exceptional digital assets
              exchange services.
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={1.5}>
          <Mui.Stack gap={1}>
            <Mui.Typography
              variant="h6"
              color="primary"
              fontWeight={900}
              // mb={2}
            >
              Company
            </Mui.Typography>
            <Mui.Typography
              variant="body1"
              component={Router.Link}
              to="help-center"
              // color="text.primary"
              color="#fff"
              sx={{ textDecoration: "none" }}
            >
              About us
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={2}>
          <Mui.Stack gap={1}>
            <Mui.Typography
              variant="h6"
              color="primary"
              fontWeight={900}
              // mb={2}
            >
              Quick Links
            </Mui.Typography>
            <Mui.Typography
              variant="body1"
              component={Router.Link}
              to="help-center"
              // color="text.primary"
              color="#fff"
              sx={{ textDecoration: "none" }}
            >
              Help Center
            </Mui.Typography>
            <Mui.Typography
              variant="body1"
              component={Router.Link}
              to={auth ? "terms-of-service" : "account/terms-of-service"}
              // color="text.primary"
              color="#fff"
              sx={{ textDecoration: "none" }}
            >
              Terms Of Service
            </Mui.Typography>
            <Mui.Typography
              variant="body1"
              component={Router.Link}
              to={auth ? "privacy-policy" : "account/privacy-policy"}
              // color="text.primary"
              color="#fff"
              sx={{ textDecoration: "none" }}
            >
              Privacy Policy
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={2}>
          <Mui.Stack gap={1}>
            <Mui.Typography
              color="primary"
              variant="h6"
              fontWeight={900}
              // mb={2}
            >
              Head office address
            </Mui.Typography>

            <Mui.Stack direction="row" alignItems="center" spacing={2}>
              <Mui.Typography
                variant="body1"
                component={Mui.Link}
                href="mailto:support@Sun100.com"
                // color="text.primary"
                color="#fff"
                sx={{ textDecoration: "none" }}
              >
                2nd Floor, Nandanam Building, Kaniyapilly Road, Chakkaraparambu,
                Cochin, Ernakulam, 682028 IN
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={2.5} pl={{ xs: 0, md: 2 }}>
          <Mui.Stack gap={1}>
            <Mui.Typography
              color="primary"
              variant="h6"
              fontWeight={900}
              // mb={2}
            >
              Contact
            </Mui.Typography>
            <Mui.Stack direction="row" alignItems="center" spacing={2}>
              <MuiIcons.MailOutlined fontSize="small" color="primary" />
              <Mui.Typography
                variant="body1"
                component={Mui.Link}
                href="mailto:support@Sun100.com"
                // color="text.primary"
                color="#fff"
                sx={{ textDecoration: "none" }}
              >
                support@Sun100.com
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Stack direction="row" alignItems="center" spacing={1}>
              <MuiIcons.CallOutlined fontSize="small" color="primary" />
              <Mui.Typography
                variant="body1"
                // color="text.primary"
                color="#fff"
                sx={{ textDecoration: "none" }}
              >
                +91 484 350 4418
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Box textAlign="center" sx={{ bgcolor: "#000" }}>
        <Mui.IconButton>
          <MuiIcons.Twitter color="primary" />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.Facebook color="primary" />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.Instagram color="primary" />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.YouTube color="primary" />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.Telegram color="primary" />
        </Mui.IconButton>
      </Mui.Box>
      <Mui.Typography
        textAlign="center"
        variant="body1"
        sx={{
          display: check ? "none" : "block",
          bgcolor: "#000",
          color: "#fff",
          // bgcolor: (theme) => `${theme.palette.grey[100]}`,
          p: 3,
        }}
      >
        © Copyright {new Date().getFullYear()} by Sun100. All rights reserved.
      </Mui.Typography>
    </>
  );
};
