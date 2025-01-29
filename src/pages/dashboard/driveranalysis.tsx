import {
  driveranalysisChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
import Table from "../components/Table";


export function DriverAnalysis() {

  const geoperfcolumns = [
    "Metric",
    "Claims per Item",
    "Cost per Item",
  ];

  const geoperfdata = [
    ["Mean", 2.0, " $53,086.67"],
    ["Median", 1.5, " $572.55"],
    ["Std_Dev", 1.2, " $92,728.89"],
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
    ["Fahrer Mueller", 3, "$297,811.72", "$99,270.57", "15.0%", "56.1%", "PD(2), BI(1)", "+2.64σ"],
    ["Driver Smith", 4, "$148,122.90", "$37,030.72", "20.0%", "27.9%", "PD(3), BI(1)", "+1.02σ"],
    ["Водитель Ivanov", 2, "$45,473.46", "$22,736.73", "10.0%", "8.6%", "PD(1), BI(1)", "-0.08σ"],
    ["Motorista Silva", 1, "$38,302.47", "$38,302.47", "5.0%", "7.2%", "PD(1)", "-0.16σ"],
    ["Autista Rossi", 1, "$1,133.61", "$1,133.61", "5.0%", "0.2%", "PD(1)", "-0.56σ"],
    ["運転手 Tanaka", 1, "$11.50", "$11.50", "5.0%", "0.0%", "PD(1)", "-0.57σ"],
    ["司机 Wang", 4, "$5.50", "$1.38", "20.0%", "0.0%", "BI(2), MEDICAL PAYMENTS(2)", "-0.57σ"],
    ["기사 Kim", 1, "$5.50", "$5.50", "5.0%", "0.0%", "PD(1)", "-0.57σ"],
    ["Conductor García", 1, "$0.00", "$0.00", "5.0%", "0.0%", "PD(1)", "-0.57σ"],
    ["Chauffeur Dubois", 2, "$0.00", "$0.00", "10.0%", "0.0%", "PD(2)", "-0.57σ"]
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
 Driver Analysis

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
Driver Recommendations
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
        Driver: High-Risk Driver Review (2.64σ)
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
          }}
        >
        {`Fahrer Mueller shows significantly higher claim costs. Consider reviewing their driving record and safety
 practices.
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
         Driver: Cost Efficiency Analysis (Top 3 drivers by total claim cost (with percentile ranking))
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          style={{
            color: '#7f8292',
          }}
        >
        {`The highest total claim cost is observed for Fahrer Mueller ($297,811.72, 100th percentile), Driver Smith
 ($148,122.90, 90th percentile), Водитель Ivanov ($45,473.46, 80th percentile). This may warrant
 investigation of claims handling efficiency for these drivers.`}
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
          Driver Charts
        </Typography>
      </div>
    
    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2 grid-auto-rows-auto">
        {driveranalysisChartsData.map((props) => (
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
          Driver Performance Summary
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
          Driver Summary
        </Typography>
        <Table columns={columns} data={data} />
      </div>
      
     
    </div>
  );
}

export default DriverAnalysis;
