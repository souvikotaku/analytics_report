import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  driveranalysisChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
import Table from "../components/Table";
import { setselectedObject } from '../../features/selectedSlice'; // Import your Redux action


export function DriverAnalysis() {

   const dispatch = useDispatch();
  
    const [selectedState, setSelectedState] = useState('');
    const navigate = useNavigate();
  
    interface StateChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}
  
    const handleStateChange = (event: StateChangeEvent) => {
      const selectedValue = event.target.value;
      setSelectedState(selectedValue);
  
      if (selectedValue) {
        const selectedObject = selectData.find(item => item.name === selectedValue);
        if (selectedObject) {
          dispatch(setselectedObject(selectedObject));
        }
      } else {
        // Handle the case where no state is selected (e.g., reset Redux state)
        dispatch(setselectedObject(null)); // Or a default value
      }
    };
  
    const handleJumpToGeography = () => {
      if (selectedState) {
        navigate(`/dashboard/geographicanalysis/${selectedState}`);
      } else {
        alert("Please select a state.");
      }
    };

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


const selectData = [
  {
    "id": 1,
    "name": "Fahrer Mueller", // Driver's name
    "Total Claims": 3,
    "Total Paid": "$297,811.72",
    "table data": [
      {
        "description": "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        "totalpaid": "$360.37"
      },
      {
        "description": "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
        "totalpaid": "$297,451.35"
      },
      {
        "description": "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
        "totalpaid": "$0.00"
      }
    ]
  },
  {
    "id": 2,
    "name": "Driver Smith",
    "Total Claims": 4,
    "Total Paid": "$148,122.90",
    "table data": [
      {
        "description": "DALLAS, TX.- AS PER CLMT: INSD DRVR MADE AN UNSAFE LANE SWITCH AND STRUCK CLMT VEH.",
        "totalpaid": "$602.48"
      },
      {
        "description": "Rolla, MO.- INSD VEH BACKED UP TO CLMT VEH.",
        "totalpaid": "$7,078.24"
      },
      {
        "description": "PARSONS, KS - INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        "totalpaid": "$140,442.18"
      },
      {
        "description": "PARSONS, KS - INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
        "totalpaid": "$0.00"
      }
    ]
  },
  {
    "id": 3,
    "name": "Водитель Ivanov",  // Driver's name in Russian
    "Total Claims": 2,
    "Total Paid": "$45,473.46",
    "table data": [
      {
        "description": "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        "totalpaid": "$20,473.46"
      },
      {
        "description": "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
        "totalpaid": "$25,000.00"
      }
    ]
  },
  {
    "id": 4,
    "name": "Motorista Silva",
    "Total Claims": 1,
    "Total Paid": "$38,302.47",
    "table data": [
      {
        "description": "CICERO, IL - INSD VEH WAS EXITING PROPERTY AND HIT WALL.",
        "totalpaid": "$38,302.47"
      }
    ]
  },
  {
    "id": 5,
    "name": "Autista Rossi",
    "Total Claims": 1,
    "Total Paid": "$1,133.61",
    "table data": [
      {
        "description": "MERKEL, TX- INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
        "totalpaid": "$1,133.61"
      }
    ]
  },
  {
    "id": 6,
    "name": "運転手 Tanaka", // Driver's name in Japanese
    "Total Claims": 1,
    "Total Paid": "$11.50",
    "table data": [
      {
        "description": "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
        "totalpaid": "$11.50"
      }
    ]
  },
  {
    "id": 7,
    "name": "司机 Wang", // Driver's name in Chinese
    "Total Claims": 4,
    "Total Paid": "$5.50",
    "table data": [
      {
        "description": "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        "totalpaid": "$5.50"
      },
      {
        "description": "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        "totalpaid": "$0.00"
      },
      {
        "description": "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        "totalpaid": "$0.00"
      },
      {
        "description": "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
        "totalpaid": "$0.00"
      }
    ]
  },

  {
    "id": 8,
    "name": "기사 Kim", // Driver's name in Korean
    "Total Claims": 1,
    "Total Paid": "$5.50",
    "table data": [
      {
        "description": "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
        "totalpaid": "$5.50"
      }
    ]
  },
  {
    "id": 9,
    "name": "Conductor García",
    "Total Claims": 1,
    "Total Paid": "$0.00",
    "table data": [
      {
        "description": "WEATHERFORD, TN-INSD VEH WAS ON LOVES TRUCK STOP PARKED, SUDDENLY CLMT VEH STRUCK INSD VEH. NO MORE DETAILS PROVIDED",
        "totalpaid": "$0.00"
      }
    ]
  },
  {
    "id": 10,
    "name": "Chauffeur Dubois",
    "Total Claims": 2,
    "Total Paid": "$0.00",
    "table data": [
      {
        "description": "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        "totalpaid": "$0.00"
      },
      {
        "description": "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
        "totalpaid": "$0.00"
      }
    ]
  }
    
  ]

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
      
      <div className="flex items-center space-x-4 mt-6 mb-6">
      <select
        value={selectedState}
        onChange={handleStateChange}
        className=" rounded-md px-4 py-2 focus:outline-none "
style={{
  border: '1px solid #ffa857',
  color: '#ffa857',
  background: 'rgb(23, 24, 29)',
  WebkitAppearance: 'none', // Try to remove default appearance
  appearance: 'none',       // Standard way to remove appearance
  backgroundColor: 'rgb(23, 24, 29)', // Set background color
  padding: '8px', // Adjust padding as needed
  borderRadius: '4px', // Add rounded corners if desired
}}
      >
        
        <option value="" disabled>Select Driver</option> {/* Default option */}
        {selectData.map(item => ( // Dynamically render options
        <option key={item.id} value={item.name}>{item.name}</option>
      ))}
      </select>

   
    <button
 onClick={handleJumpToGeography}
 disabled={!selectedState}
 className={`relative inline-flex items-center justify-center mr-2 overflow-hidden text-sm font-medium rounded-lg group focus:ring-4 focus:outline-none dark:border-yellow-500 dark:hover:bg-yellow-600 dark:hover:border-yellow-700 dark:focus:ring-yellow-800 custom-button`} // Add custom-button class
>
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
    Jump to Driver
  </span>
</button>
    </div>
    </div>
  );
}

export default DriverAnalysis;
