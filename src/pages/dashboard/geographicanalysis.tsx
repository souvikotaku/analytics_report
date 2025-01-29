import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import Table from "../components/Table";


export function GeographicAnalysis() {

  const geoperfcolumns = [
    "Metric",
    "Claims per Item",
    "Cost per Item",
  ];

  const columns = [
    "Item",
    "Claims",
    "Total Paid",
    "Average per Claim",
    "% Claims",
    "% Costs",
    "Top Loss Types",
    "Risk Score",
  ];

  const geoperfdata = [
    ["Mean", 2.9, "$75,838.09"],
    ["Median", 2.0, "$7,078.24"],
    ["Std_Dev", 2.1, "$119,536.30"],
  ];
  
  const data = [
    ["TX", 6, "$345,021.27", "$57,503.54", "30.0%", "65.0%", "PD(4), BI(2)", "+2.25σ"],
    ["KS", 6, "$140,447.68", "$23,407.95", "30.0%", "26.5%", "BI(3), MEDICAL PAYMENTS(2), PD(1)", "+0.54σ"],
    ["IL", 1, "$38,302.47", "$38,302.47", "5.0%", "7.2%", "PD(1)", "-0.31σ"],
    ["MO", 1, "$7,078.24", "$7,078.24", "5.0%", "1.3%", "PD(1)", "-0.58σ"],
    ["CA", 3, "$17.00", "$5.67", "15.0%", "0.0%", "PD(3)", "-0.63σ"],
    ["TN", 1, "$0.00", "$0.00", "5.0%", "0.0%", "PD(1)", "-0.63σ"],
    ["AZ", 2, "$0.00", "$0.00", "10.0%", "0.0%", "PD(2)", "-0.63σ"],
  ];


  return (
    <div className="mt-6">
    
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}>
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-3 mt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Geography Performance Summary
        </Typography>
        <Table columns={geoperfcolumns} data={geoperfdata} />
      </div>
      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-3 mt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Geography Summary
        </Typography>
        <Table columns={columns} data={data} />
      </div>
      
     
    </div>
  );
}

export default GeographicAnalysis;
