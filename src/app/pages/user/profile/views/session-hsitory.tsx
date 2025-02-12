import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import React from "react";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";

export const SessionHistory = ({
  sessions,
}: {
  sessions: Hooks.User.UseSession.Response;
}) => (
  <Components.Global.Container
    id="sessionHistory"
    direction="column"
    justifyContent="start"
    spacing={2}
    sx={{ height: { sm: 1000 }, maxHeight: 1000, py: 0 }}
  >
    <Mui.Typography variant="h5">Session History</Mui.Typography>
    <Mui.Stack spacing={2} sx={{ height: '600px', overflowY: "auto" }}>
      {sessions?.userDetails
        ?.slice()
        ?.reverse()
        ?.map((session, index) => (
          <React.Fragment key={index}>
            <Mui.Stack>
              <Mui.Typography
                color={
                  session.status == "Complete" ? "success.light" : "error.light"
                }
                variant="body2"
                sx={{ mb: -2, p: .2, width: "18%", textAlign: "center", borderRadius: "5px", fontWeight: 600, color: `${session.status == "Complete"? "#1c9916": 'error.dark'}`, bgcolor: `${session.status === "Complete"? "#d8ffe5": "error.light"}` }}
              >
                {/* <MuiIcons.Lens sx={{ fontSize: 6 }} />  */}
                {session.status}
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Stack direction="row" gap={{xs: 5, sm:25}}>
              <Mui.Typography noWrap variant="body2">
                {session.device == "" ? "---" : session.device}
                <Mui.Typography noWrap variant="body2">
                  {session.ipAddress}
                </Mui.Typography>
              </Mui.Typography>
              <Mui.Typography noWrap variant="body2" color="text.secondary">
                {session.OS == "" ? "---" : session.OS}
                <Mui.Typography noWrap variant="body2" color="text.secondary">
                  {Components.Global.timeFn(
                    session.created_At as unknown as string
                  )}
                </Mui.Typography>
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Divider />
          </React.Fragment>
        ))}
    </Mui.Stack>
  </Components.Global.Container>
);
