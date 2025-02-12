import React from "react";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Contexts from "src/app/contexts";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export default () => {
  const [loading, setLoading] = React.useState(true);
  const { user, update } = React.useContext(Contexts.UserContext);
  const {
    updatePayment,
    payemntDetials,
    payment,
    loading: paymentLoading,
  } = Hooks.Main.useP2PTrade(user?.uid as string);
  const { sessions, loading: sessionLoading } = Hooks.User.useSession();

  React.useLayoutEffect(() => {
    const types = Object.keys(Constants.PaymentType).map((key) =>
      key.replaceAll(" ", "_")
    );
    const get = async () => {
      await Promise.all(
        types.map(async (type) =>
          payemntDetials(type, user?.uid as string, true)
        )
      );
      setLoading(false);
    };
    get();
  }, [paymentLoading]);
  return loading ||
    sessionLoading ||
    user === undefined ||
    payment === undefined ? (
    <Components.Global.GlobalLoader />
  ) : (
    Router.useRoutes([
      {
        path: '',
        element: <Router.Navigate to="accountsettings" />
      },
      {
        path: "/",
        element: (
          <Pages.User.Profile.Main
            user={user}
            update={update}
            updatePayment={updatePayment}
            payment={payment}
            sessions={sessions}
          />
        ),
        children: [
          {
            path: 'accountsettings',
            element: <Pages.User.Profile.Views.PersonalDetails user={user} />,
          },
          {
            path: 'paymentdetails',
            element: <Pages.User.Profile.Views.PaymentDetails variant="view" updatePayment={updatePayment} payment={payment} />
          },
          {
            path: 'KYC',
            element: <Pages.User.Kyc.Main />,
            children: [
              {
                path: "complete",
                element: <Pages.User.Dialogs.KycComplete />
              },
              {
                path: "warning",
                element: <Pages.User.Dialogs.KycWarning />,
              },
            ]
          },
          {
            path: 'sessionhistory',
            element: <Pages.User.Profile.Views.SessionHistory sessions={sessions} />
          },
          {
            path: 'securitydetails',
            element: <Pages.User.Profile.Views.SecurityDetails user={user} update={update} />
          },
          {
            path: "edit",
            element: <Pages.User.Profile.Views.EditUser user={user} />,
            children: [
              {
                path: "remove-profile",
                element: <Pages.User.Dialogs.RemoveProfile />,
              },
            ],
          },
          {
            path: "change-password",
            element: <Pages.User.Profile.Views.ChangePassword />,
          },
          {
            path: "portfolio",
            element: <Pages.User.Profile.Views.Portfolio user={user} />,
          },
          {
            path: "payment-edit",
            element: (
              <Pages.User.Profile.Views.EditPaymentDetails
                updatePayment={updatePayment}
                payment={payment}
              />
            ),
          },
          {
            path: "two-factor/:status",
            element: <Pages.User.Profile.Views.TwoFactor />,
            children: [
              {
                path: "success",
                element: <Pages.Account.Dialogs.Verified />,
              },
            ],
          },
        ]
      },
      // {
      //   path: "change-password",
      //   element: <Pages.User.Profile.Views.ChangePassword />,
      // },
      // {
      //   path: "portfolio",
      //   element: <Pages.User.Profile.Views.Portfolio user={user} />,
      // },
      // {
      //   path: "payment-edit",
      //   element: (
      //     <Pages.User.Profile.Views.EditPaymentDetails
      //       updatePayment={updatePayment}
      //       payment={payment}
      //     />
      //   ),
      // },
      // {
      //   path: "edit",
      //   element: <Pages.User.Profile.Views.EditUser user={user} />,
      //   children: [
      //     {
      //       path: "remove-profile",
      //       element: <Pages.User.Dialogs.RemoveProfile />,
      //     },
      //   ],
      // },
      // {
      //   path: "two-factor",
      //   element: <Pages.User.Profile.Views.TwoFactor />,
      //   children: [
      //     {
      //       path: "success",
      //       element: <Pages.Account.Dialogs.Verified />,
      //     },
      //   ],
      // },
    ])
  );
};
