import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";

export const ReferredUsers = () => {
  const { referredUsers, loading } = Hooks.User.GetReferredList();
  const data = referredUsers?.userLists
    ? referredUsers?.userLists?.map(({ uid, email, phoneNumber, ...user }) => ({
        name: `${user.firstName} ${user.lastName}`,
        email: email,
        phoneNumber: (
          <Mui.Stack sx={{ color: "#00C566" }}>
            <Mui.Typography>{phoneNumber || '--'}</Mui.Typography>
          </Mui.Stack>
        ),
        date: user.created_At,
      }))
    : [];

  return loading ? (
    <Components.Global.GlobalLoader />
  ) : (
    <Components.Global.Container direction="column">
      <Mui.Stack
        direction='row'
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ mb: "30px" }}
      >
        <Mui.Typography variant="h5">Referred Users</Mui.Typography>
      </Mui.Stack>
      <Mui.Alert
        severity="info"
        sx={{
          mb: 2,
          display: Boolean(referredUsers?.parentUser?.email) ? "flex" : "none",
        }}
      >
        <Mui.Typography variant="body1" fontWeight={900}>
          You have been referred by
        </Mui.Typography>
        <Mui.Typography variant="body1">
          {`Name : ${referredUsers?.parentUser?.firstName} ${referredUsers?.parentUser?.lastName}`}
        </Mui.Typography>
        <Mui.Typography variant="body1">
          {`Email : ${referredUsers?.parentUser?.email}`}
        </Mui.Typography>
      </Mui.Alert>
      <Components.Global.ResponsiveTable
        key="referredUsers"
        data={data}
        titles={["Name", "Email", "Contact No.", "Registered At"]}
      />
    </Components.Global.Container>
  );
};
