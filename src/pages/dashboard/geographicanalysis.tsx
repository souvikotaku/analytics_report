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
      <div>
      <Typography  
        variant="h6"
          color="blue-gray"
          className="mb-3 mt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#ffb570',
            fontWeight: 'bold',
            fontSize: '30px'
          }}>
Geography Analysis
        </Typography>
        <Typography  
        variant="h6"
          color="blue-gray"
          className="mb-3 mt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#ffb570'
          }}>
Geography Recommendations
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
            fontWeight: 'bold'
          }}
        >
        Geography: Review High-Cost State (z-score: 2.25σ)
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
          }}
        >
        {`Consider reviewing claims handling procedures in TX, where total paid claims are notably (>95% confidence) above average (z-score: 2.25σ).`}
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
         Geography: Cost Efficiency Analysis (Top 3 states by average claim cost (with percentile ranking))
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
          }}
        >
        {`The highest average cost per claim is observed in TX ($57,503.54, 100th percentile), IL ($38,302.47, 85th
 percentile), KS ($23,407.95, 71th percentile). This may warrant investigation of claims handling efficiency in
 these regions.`}
        </Typography>
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
          Geography Charts
        </Typography>
      </div>
    
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
