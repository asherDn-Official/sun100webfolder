// import * as Mui from "@mui/material";
// import * as Router from "react-router-dom";
// import * as Constants from "src/constants";
// import * as Contexts from "src/app/contexts";
// import * as Hooks from "src/app/hooks";
// import * as Pages from "src/app/pages";

// export const Main = ({
//   user,
//   update,
//   updatePayment,
//   payment,
//   sessions,
// }: {
//   user: Contexts.userContext.User;
//   update: () => void;
//   updatePayment: (type: string, values: object) => Promise<void>;
//   payment: paymentDetails;
//   sessions: Hooks.User.UseSession.Response;
// }) => (
//   <Mui.Container sx={{ px: { xs: 0, sm: 1 } }}>
//     <Pages.Views.IntroJSConfig name="profile" />
//     <Mui.Grid container spacing={2}>
//       <Mui.Grid item container spacing={2} xs={12} md={8}>
//         <Mui.Grid item xs={12}>
//           <Pages.User.Profile.Views.PersonalDetails user={user} />
//         </Mui.Grid>
//         <Mui.Grid item xs={12}>
//           <Pages.User.Profile.Views.PaymentDetails
//             variant="view"
//             updatePayment={updatePayment}
//             payment={payment}
//           />
//         </Mui.Grid>
//       </Mui.Grid>
//       <Mui.Grid item container spacing={2} lg={4} md={4} xs={12}>
//         <Mui.Grid item xs={12}>
//           <Pages.User.Profile.Views.SecurityDetails
//             user={user}
//             update={update}
//           />
//         </Mui.Grid>
//         <Mui.Grid item xs={12}>
//           <Pages.User.Profile.Views.SessionHistory sessions={sessions} />
//         </Mui.Grid>
//       </Mui.Grid>
//     </Mui.Grid>
//     <Router.Outlet />
//   </Mui.Container>

// );

import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as MuiIcon from "@mui/icons-material";
import * as React from "react";

export const Main = ({
  user,
  update,
  updatePayment,
  payment,
  sessions,
}: {
  user: Contexts.userContext.User;
  update: () => void;
  updatePayment: (type: string, values: object) => Promise<void>;
  payment: paymentDetails;
  sessions: Hooks.User.UseSession.Response;
}) => {
  const NavigationContent = [
    {
      id: 0,
      active: true,
      linkName: "Account Settings",
      icon: <MuiIcon.AccountCircleOutlined sx={{ fontSize: "30px" }} />,
    },

    // {
    //   id: 1,
    //   active: false,
    //   linkName: "Payment Details",
    //   icon: <MuiIcon.WalletOutlined sx={{ fontSize: "30px" }} />,
    // },

    {
      id: 2,
      active: false,
      linkName: "KYC",
      icon: <MuiIcon.GradingOutlined sx={{ fontSize: "30px" }} />,
    },

    {
      id: 3,
      active: false,
      linkName: "Session History",
      icon: <MuiIcon.HistoryOutlined sx={{ fontSize: "30px" }} />,
    },

    {
      id: 4,
      active: false,
      linkName: "Security Details",
      icon: <MuiIcon.VerifiedUserOutlined sx={{ fontSize: "30px" }} />,
    },
  ];

  const [activeMenu, setActiveMenu] = React.useState(NavigationContent);
  const [toggleMenu, setToggleMenu] = React.useState<Boolean>(true);
  const [boxWidth, setBoxWidth] = React.useState(0);

  const theme = Mui.useTheme();
  const router = Router.useNavigate();

  const handleNavigation = (list: NavigationList) => {
    router(list.linkName.replace(/\s+/g, "").toLowerCase());
    const tempArr = NavigationContent;
    tempArr.forEach((ele) => {
      if (ele.linkName === list.linkName) {
        ele.active = true;
      } else {
        ele.active = false;
      }
    });
    setActiveMenu(tempArr);
    // setBoxWidth(list.id);
  };

  const {pathname} = Router.useLocation()
  React.useEffect(()=> {
    const tempArr = NavigationContent;
    tempArr.forEach((ele) => {
      if (pathname.includes(ele.linkName.replace(/\s+/g, "").toLowerCase())) {
        ele.active = true;
      } else {
        ele.active = false;
      }
    });
    setActiveMenu(tempArr);
  },[])

  return (
    <Mui.Container
    maxWidth='md'
      sx={{
        // width: { xs: "100%", md: "90%", lg: '70%', xl: '60%' },
        height: "730px",  
        display: "flex",
        pb: 5,
      }}
    >
      <Mui.Box
        component={"div"}
        width={{ xs: `${toggleMenu ? "18%" : "100%"}`, sm: "22%" }}
        // height={{xs: `${boxWidth >= 2 ? "100%": '800px'}`, sm: '100%'}}
        bgcolor={theme.palette.mode === "light" ? "#fff" : "#000"}
        borderRadius={"4px"}
        marginRight={"2px"}
        overflow={"hidden"}
      >
        <Mui.IconButton
          sx={{
            margin: "10px 0px 0xp 10px",
            display: { xs: "block", sm: "none" },
          }}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <MuiIcon.Menu /> : <MuiIcon.Clear />}
        </Mui.IconButton>

        {activeMenu.map((items) => (
          <Mui.Grid
            key={items.id}
            width={"100%"}
            // height={"60px"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            padding={1}
            marginBottom={1}
            sx={{
              cursor: "pointer",
              bgcolor: `${items.active ? "#fff8eb" : null}`,
              color: `${items.active ? "#fcb922" : null}`,
              borderLeft: `${items.active ? "2px solid #FCB923" : '2px solid transparent'}`,
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
              ":hover": {
                bgcolor: "#fff8eb",
                color: `${!items.active && "#000"}`,
              },
            }}
            onClick={() => handleNavigation(items)}
          >
            <Mui.Typography>{items.icon}</Mui.Typography>
            <Mui.Typography
              onClick={() => setToggleMenu(!toggleMenu)}
              sx={{
                fontSize: "14px",
                fontWeight: `${items.active ? 600 : null}`,
                display: { xs: `${toggleMenu && "none"}`, sm: "block" },
              }}
            >
              {" "}
              {items.linkName}
            </Mui.Typography>
          </Mui.Grid>
        ))}
      </Mui.Box>

      <Mui.Box
        component={"div"}
        overflow={"auto"}
        width={{ xs: "100%", sm: "78%" }}
        // height={{xs: `${boxWidth >= 2 ? "100%": '800px'}`, sm: '100%'}}
        bgcolor={theme.palette.mode === "light" ? "#fff" : "#000"}
        // borderRadius={'4px'}
        display={{ xs: `${!toggleMenu && "none"}`, sm: "block" }}
        sx={{
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          p: 1.25
        }}
      >
        <Router.Outlet />
      </Mui.Box>
    </Mui.Container>
  );
};

interface NavigationList {
  id: number;
  active: boolean;
  linkName: string;
  icon: any;
}
