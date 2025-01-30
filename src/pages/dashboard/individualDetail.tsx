import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux';
import { motion, useInView } from "framer-motion";

import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import Table from "../components/Table";


import { useMaterialTailwindController, setOpenConfigurator } from "@/context";


export function IndividualDetail() {
  const controller = useMaterialTailwindController();

  const { sidenavType } = controller;

  const selectedDataObject = useSelector((state: any) => state.selected.selectedObject); // Replace yourSliceName
  const showLightnew = useSelector((state: { selected: { showlightmode: boolean } }) => state.selected.showlightmode); // Access Redux state

  console.log('selectedDataObject', selectedDataObject)

  const tableRef = useRef(null); // Create a ref for the table container
  const tableRef2 = useRef(null); // Create a ref for the table container
  const isInView = useInView(tableRef, { once: true }); // Use useInView hook
  const isInView2 = useInView(tableRef2, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 }, // Initially hidden
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeInOut", staggerChildren: 0.2 } }, // Staggered animation
  };

  const chartVariants = {
    hiddenLeft: { x: -100, opacity: 0 }, // Slide from left
    hiddenRight: { x: 100, opacity: 0 }, // Slide from right
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } },
  };
  const tableVariants = {
    hidden: { x: -100, opacity: 0 }, // Slide from left
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }, // Adjust duration and easing as needed
  };
  const textVariants = {
    hidden: { y: -50, opacity: 0 }, // Start above the viewport
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }, // Adjust duration and easing
  };

  const geoperfcolumns = [
    "Description",
    "Total Paid",
  ];

  // const geoperfdata = [
  //   ["Mean", "$75,838.09"],
  //   ["Median", "$7,078.24"],
  // ];

  interface TableDataItem {
    description: string;
    totalpaid: string;
  }

  interface SelectedDataObject {
    type: string;
    name: string;
    "totalClaims": number;
    "totalPaid": string;
    "table data": TableDataItem[];
  }

  const geoperfdata: [string, string][] = ((selectedDataObject ? selectedDataObject : JSON.parse(localStorage.getItem('selectedObject') || '{}'))?.["table data"]?.map((item: TableDataItem) => [
    item.description,
    item.totalpaid
  ]) || []);

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
        <div className="mt-6">
          <motion.section
            variants={textVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }} // Only animate once when in viewport (optional)

          >
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-3 mt-8"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                style={{
                  color: showLightnew === true ? 'black' : '#ffb570',
                  fontWeight: 'bold',
                  fontSize: '30px'
                }}>
                {`Claims by ${selectedDataObject?.type || JSON.parse(localStorage.getItem('selectedObject') || '{}').type}: ${selectedDataObject?.name || JSON.parse(localStorage.getItem('selectedObject') || '{}').name}`}
              </Typography>


              <Typography
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                style={{
                  color: showLightnew === true ? 'black' : '#7f8292',
                }}
              >
                {`totalClaims: ${selectedDataObject?.totalClaims || JSON.parse(localStorage.getItem('selectedObject') || '{}').totalClaims}`}
              </Typography>
              <Typography
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                style={{
                  color: showLightnew === true ? 'black' : '#7f8292',
                }}
              >
                {` Total Paid: ${selectedDataObject?.totalPaid || JSON.parse(localStorage.getItem('selectedObject') || '{}').totalPaid}`}
              </Typography>


            </div>
          </motion.section>


          <motion.div
            ref={tableRef} // Attach the ref to the table container
            variants={tableVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate based on isInView
          >
            <div className="mt-4">

              <Table columns={geoperfcolumns} data={geoperfdata} />
            </div>
          </motion.div>

        </div>


      </div>


    </div>
  );
}

export default IndividualDetail;
