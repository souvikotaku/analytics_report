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
    "Total Claims": number;
    "Total Paid": string;
    "table data": TableDataItem[];
  }

  const geoperfdata: [string, string][] = (selectedDataObject?.["table data"]?.map((item: TableDataItem) => [
    item.description,
    item.totalpaid
  ]) || []);

  return (
    <div className="min-h-screen bg-blue-gray-50/50" style={{
      backgroundColor: showLightnew === true ? 'white' :'#17181d'
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
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-3 mt-8"
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              style={{
                color: showLightnew === true ? 'black' :'#ffb570',
                fontWeight: 'bold',
                fontSize: '30px'
              }}>
              {`Claims by ${selectedDataObject?.type}: ${selectedDataObject?.name}`}
            </Typography>
            

            <Typography
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              style={{
                color: showLightnew === true ? 'black' :'#7f8292',
              }}
            >
              {`Total Claims: ${selectedDataObject?.["Total Claims"]}`}
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              style={{
                color: showLightnew === true ? 'black' :'#7f8292',
              }}
            >
              {` Total Paid: ${selectedDataObject?.["Total Paid"]}`}
            </Typography>


          </div>




          <div className="mt-4">
           
            <Table columns={geoperfcolumns} data={geoperfdata} />
          </div>


        </div>


      </div>


    </div>
  );
}

export default IndividualDetail;
