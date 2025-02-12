import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export default () => {
  return Router.useRoutes([
    {
      path: "/",
      element: <Pages.Stak.StackLayout />,
      children: [
        {
          path: "/",
          element: <Router.Navigate to="staking" />,
        },
        {
          path: "staking",
          element: <Pages.Stak.component.Staking />,
        },
        {
          path: "rewards",
          element: <Pages.Stak.component.rewards />,
        },
        {
          path: "staking history",
          element: <Pages.Stak.component.history />,
        },
      ],
    },
  ]);
};
