import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  claimtypeanalysisChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
import Table from "../components/Table";
import { setselectedObject } from '../../features/selectedSlice'; // Import your Redux action


export function ClaimtypeAnalysis() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [layout, page, inner] = pathname.split("/").filter((el) => el !== "");
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  interface StateChangeEvent extends React.ChangeEvent<HTMLSelectElement> { }

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
      navigate(`/dashboard/${page}/${selectedState}`);
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

  const selectData = [
    {
      "id": 1,
      "name": "BI", // Name from the screenshot
      "type": "Claim Type", // Type as requested
      "Total Claims": 5,
      "Total Paid": "$322,456.85",
      "table data": [
        {
          "description": "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
          "totalpaid": "$297,451.35"
        },
        {
          "description": "CALISDA, KS-DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
          "totalpaid": "$5.50"
        },
        {
          "description": "CALISDA, KS- DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
          "totalpaid": "$0.00"
        },
        {
          "description": "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
          "totalpaid": "$25,000.00"
        },
        {
          "description": "PARSONS, KS.- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
          "totalpaid": "$0.00"
        }
      ]
    },
    {
      "id": 2, // Or whatever ID is appropriate
      "name": "PD", // Name from the screenshot
      "type": "Claim Type", // Type as requested
      "Total Claims": 13, // Total Claims from the additional info
      "Total Paid": "$208,409.81", // Total Paid from the additional info
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
          "description": "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
          "totalpaid": "$360.37"
        },
        {
          "description": "WEATHERFORD, TN-INSD VEH WAS ON LOVES TRUCK STOP PARKED, SUDDENLY CLMT VEH STRUCK INSD VEH. NO MORE DETAILS PROVIDED",
          "totalpaid": "$0.00"
        },
        {
          "description": "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
          "totalpaid": "$0.00"
        },
        {
          "description": "ELOY, AZ- INSD VEH & CLMT VEH 2 WAS PARKED IN A PARKING LOT, CLMT VEH 1 WAS ATTEMPTING TO PARK WHEN CLMT VEH 1 STRUCK INSD VEH & CLMT VEH 2 ON THE RIGHT SIDE.",
          "totalpaid": "$0.00"
        },
        {
          "description": "MERKEL, TX-INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
          "totalpaid": "$1,133.61"
        },
        {
          "description": "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
          "totalpaid": "$11.50"
        },
        {
          "description": "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
          "totalpaid": "$5.50"
        },
        {
          "description": "CICERO, IL - INSD VEH WAS EXITING PROPERTY AND HIT WALL.",
          "totalpaid": "$38,302.47"
        },
        {
          "description": "STRATFORD, TX - INSD VEH HIT PARKED CLMT VEH",
          "totalpaid": "$20,473.46"
        },
        {
          "description": "PARSONS, KS.- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
          "totalpaid": "$140,442.18"
        },
        {
          "description": "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
          "totalpaid": "$0.00"
        }
      ]
    },
    {
      "id": 3, // Or whatever ID is appropriate
      "name": "MEDICAL PAYMENTS", // Name from the screenshot
      "type": "Claim Type", // Type as requested
      "Total Claims": 2, // Total Claims from the screenshot
      "Total Paid": "$0.00", // Total Paid from the screenshot
      "table data": [
        {
          "description": "CALISDA, KS-DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
          "totalpaid": "$0.00"
        },
        {
          "description": "CALISDA, KS-DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#ffb570',
            fontWeight: 'bold',
            fontSize: '30px'
          }}>
          Claim Type Analysis

        </Typography>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-3 mt-8"
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#ffb570'
          }}>
          Claim Type Recommendations
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#7f8292',
            fontWeight: 'bold'
          }}
        >
          Claim_Type: Cost Efficiency Analysis (Top 3 claim types by average cost (with percentile ranking))

        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#7f8292',
          }}
        >
          {`The highest average cost per claim is observed for BI ($64,491.37, 100th percentile), PD ($16,031.52, 66th
 percentile), MEDICAL PAYMENTS ($0.00, 33th percentile). This may warrant investigation of claims handling
 procedures for these claim types.
`}
        </Typography>

      </div>

      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-3 mt-8"
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#ffb570'
          }}
        >
          Condition Charts


        </Typography>
      </div>
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
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}>
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#ffb570'
          }}
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: '#ffb570'
          }}
        >
          Claim Type Summary
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

          <option value="" disabled>Select Claim Type</option> {/* Default option */}
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
            Jump to Claim Type
          </span>
        </button>
      </div>

    </div>
  );
}

export default ClaimtypeAnalysis;
