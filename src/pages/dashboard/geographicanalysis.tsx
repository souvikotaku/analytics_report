import {
  statisticsChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
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
    
      {/* <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3"> */}
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2 grid-auto-rows-auto">

        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            
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
          style={{
            color: '#ffb570'
          }}
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
          style={{
            color: '#ffb570'
          }}
        >
          Geography Summary
        </Typography>
        <Table columns={columns} data={data} />
      </div>
      
     
    </div>
  );
}

export default GeographicAnalysis;
