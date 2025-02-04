import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { FiSun,FiMoon  } from "react-icons/fi";


import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import { setshowlightmode } from '../../features/selectedSlice'; // Import your Redux action

export function DashboardNavbar() {
  const dispatchevent = useDispatch();

  const navigate = useNavigate();
  const showLightnew = useSelector((state) => state.selected.showlightmode); // Access Redux state

  const [controller, dispatch] = useMaterialTailwindController();
    //  const [showLight, setShowLight] = useState(true); // Default to light mode

  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page, inner] = pathname.split("/").filter((el) => el !== "");

  console.log('newpatthname', pathname.split("/").filter((el) => el !== ""))

  const handleThemeToggle = () => {
    // setShowLight(!showLight);
    dispatchevent(setshowlightmode(!showLightnew))
  };

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
        }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs

            className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""
              }`}
          >
            <Link to={`#`}  >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
                style={{
                  color: showLightnew === true ? 'black' :'#ffb570',
                  pointerEvents: 'none',
                  cursor: 'pointer'
                }}

              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
              style={{
                color:showLightnew === true ? 'black' : '#ffb570',
                pointerEvents: !inner && 'none',
              }}
              onClick={() => {
                if (inner) {
                  navigate(`/dashboard/${page}`);
                }
              }}
            >
              {page}
            </Typography>
            {
              inner && (
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  style={{
                    color:showLightnew === true ? 'black' : '#ffb570',
                    pointerEvents: 'none',
                  }}
                >
                  {decodeURIComponent(inner)}
                </Typography>
              )
            }
          </Breadcrumbs>
          {/* <Typography variant="h6" color="blue-gray">
            {page}
          </Typography> */}
        </div>
        <div className="flex items-center">

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>


          {/* <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton> */}
        </div>
      </div>
      <p
        onClick={handleThemeToggle}
        title={showLightnew ? "Switch to Dark Mode" : "Switch to Light Mode"} // Tooltip
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: showLightnew === true ? 'black' :"white",
          position: "fixed",
          marginRight: "20px",
          marginBottom: "20px",
          bottom: 0,
          right: 0,
          cursor: "pointer",
          zIndex: 200,
          display: "flex",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          borderRadius: "40px",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.6)", // Outer shadow
          insetShadow: "inset 2px 2px 6px rgba(0, 0, 0, 0.1), inset -2px -2px 6px rgba(255, 255, 255, 0.7)", // Inner shadow
        }}
      >
        {showLightnew === true ? <FiMoon color={"white"} size={30} /> : <FiSun color={"black"} size={30} />} 
      </p>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
