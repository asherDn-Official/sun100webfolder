import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";

export default () => (
  <>
    <Mui.Grid xs={12} sx={{pb: 1.5}}>
      <Pages.User.Invite.Views.ReferFriends />
    </Mui.Grid>
    <Mui.Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 }, pb: 5, pt: 2 }}>
    <Mui.Grid container spacing={1} sx={{ pb: 2 }} direction={{ md: "column", xl: "row" }}>
  <Mui.Grid item xs={12} md={6}>
    <Pages.User.Invite.Views.Working />
  </Mui.Grid>
  <Mui.Grid item container xs={12} md={6} direction="column">
    <Mui.Grid item xs>
      <Pages.User.Invite.Views.ReferLink />
    </Mui.Grid>
    {/* <Mui.Grid item xs>
      <Pages.User.Invite.Views.UserCount />
    </Mui.Grid> */}
  </Mui.Grid>
</Mui.Grid>

      <Mui.Grid container spacing={1}>
        <Mui.Grid item xs>
          <Pages.User.Invite.Views.ReferredUsers />
        </Mui.Grid>
      </Mui.Grid>
      <Router.Outlet />
    </Mui.Container>
  </>
);
