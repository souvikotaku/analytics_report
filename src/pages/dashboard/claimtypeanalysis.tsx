import {
  claimtypeanalysisChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
import Table from "../components/Table";


export function ClaimtypeAnalysis() {

  const geoperfcolumns = [
    "Metric",
    "Claims per Item",
    "Cost per Item",
  ];

  const geoperfdata = [
    ["Mean", 6.7, " $176,955.55"],
    ["Median", 5.0, "$208,409.81"],
    ["Std_Dev", 4.6, "$133,508.13"],
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

 
  
  const data = [
    ["BI", 5, "$322,456.85", "$64,491.37", "25.0%", "60.7%", "BI(5)", "+1.09σ"],
    ["PD", 13, "$208,409.81", "$16,031.52", "65.0%", "39.3%", "PD(13)", "+0.24σ"],
    ["MEDICAL PAYMENTS", 2, "$0.00", "$0.00", "10.0%", "0.0%", "MEDICAL PAYMENTS(2)", "-1.33σ"]
  ];


  return (
    <div className="mt-6">
    
    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2 grid-auto-rows-auto">
        {claimtypeanalysisChartsData.map((props) => (
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
          Claim Type Performance Summary
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
          Claim Type Summary
        </Typography>
        <Table columns={columns} data={data} />
      </div>
      
     
    </div>
  );
}

export default ClaimtypeAnalysis;
