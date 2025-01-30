import React,{useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { setselectedObject } from '../features/selectedSlice'; // Import your Redux action
import { setshowlightmode } from '../features/selectedSlice'; // Import your Redux action


export function Dashboard() {
  const showLightnew = useSelector((state) => state.selected.showlightmode); // Access Redux state
  const dispatchevent = useDispatch();

  const [controller, dispatch] = useMaterialTailwindController();
  // const [showLight, setShowLight] = useState(true); // Default to light mode

  const { sidenavType } = controller;

 
  // const handleThemeToggle = () => {
  //   // setShowLight(!showLight);
  //   dispatchevent(setshowlightmode(!showLightnew))
  // };
  return (
    <div className="min-h-screen bg-blue-gray-50/50" style={{
      backgroundColor: showLightnew === true ? 'white' : '#17181d'
    }}>
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        {/* <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
      {/* <p
        className="newwwwwwww"
        onClick={handleThemeToggle}
        style={{
          height: '40px',
          width: '40px',
          backgroundColor: 'yellow',
          position: 'fixed',
          top: 0,
          right: 0,
          cursor: 'pointer',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center', // Center vertically
          justifyContent: 'center', // Center horizontally
        }}
      >
        {showLightnew === true ? 'Show Dark' : 'Show Light'} 
      </p> */}
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
