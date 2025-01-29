import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { GeographicAnalysis, DriverAnalysis,ConditionAnalysis, ClaimtypeAnalysis,PaymentHistory, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Geography Analysis",
        path: "/geographicanalysis",
        element: <GeographicAnalysis />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Driver Analysis",
        path: "/driveranalysis",
        element: <DriverAnalysis />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Condition Analysis",
        path: "/conditionanalysis",
        element: <ConditionAnalysis />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Claim Type Analysis",
        path: "/claimtypeanalysis",
        element: <ClaimtypeAnalysis />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Payment History",
      //   path: "/paymentHistory",
      //   element: <PaymentHistory />,
      // },
     
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
