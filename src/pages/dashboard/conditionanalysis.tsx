import {
  conditionanalysisChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
import Table from "../components/Table";


export function ConditionAnalysis() {

  const geoperfcolumns = [
    "Metric",
    "Claims per Item",
    "Cost per Item",
  ];

  const geoperfdata = [
    ["Mean", 2.9, "$75,838.09"],
    ["Median", 2.0, "$38,313.97"],
    ["Std_Dev", 1.6, "$101,492.85"],
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
    ["Lane Change", 5, "$298,419.70", "$59,683.94", "25.0%", "56.2%", "PD(4), BI(1)", "+2.19σ"],
    ["Intersection", 2, "$140,442.18", "$70,221.09", "10.0%", "26.5%", "PD(1), BI(1)", "+0.64σ"],
    ["Parking", 5, "$45,473.46", "$9,094.69", "25.0%", "8.6%", "PD(4), BI(1)", "-0.30σ"],
    ["Normal", 2, "$38,313.97", "$19,156.99", "10.0%", "7.2%", "PD(2)", "-0.37σ"],
    ["Backing", 1, "$7,078.24", "$7,078.24", "5.0%", "1.3%", "PD(1)", "-0.68σ"],
    ["Ice", 1, "$1,133.61", "$1,133.61", "5.0%", "0.2%", "PD(1)", "-0.74σ"],
    ["Wind", 4, "$5.50", "$1.38", "20.0%", "0.0%", "BI(2), MEDICAL PAYMENTS(2)", "-0.75σ"]
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
 Condition Analysis

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
Condition Recommendations
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
         Condition: Review High-Cost Condition (z-score: 2.19σ)

        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
          }}
        >
        {`Consider reviewing claims handling procedures for Lane Change conditions, where total paid claims are
 notably (>95% confidence) above average (z-score: 2.19σ).
`}
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
         Condition: Cost Efficiency Analysis (Top 3 conditions by total claim cost (with percentile ranking))
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
          }}
        >
        {`The highest total claim cost is observed for Lane Change ($298,419.70, 100th percentile), Intersection
 ($140,442.18, 85th percentile), Parking ($45,473.46, 71th percentile). This may warrant investigation of
 claims handling procedures under these conditions.
`}
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
          Condition Charts


        </Typography>
      </div>
    
    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2 grid-auto-rows-auto">
        {conditionanalysisChartsData.map((props) => (
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
          style={{
            color: '#ffb570'
          }}
        >
          Condition Performance Summary
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
          Condition Summary
        </Typography>
        <Table columns={columns} data={data} />
      </div>
      
     
    </div>
  );
}

export default ConditionAnalysis;
