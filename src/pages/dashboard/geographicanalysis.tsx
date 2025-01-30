import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  statisticsChartsData
} from "@/data";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/24/solid";
import './style.css'
import {
  Typography
} from "@material-tailwind/react";
import Table from "../components/Table";
import { setselectedObject } from '../../features/selectedSlice'; // Import your Redux action


export function GeographicAnalysis() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [layout, page, inner] = pathname.split("/").filter((el) => el !== "");
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();
  const showLightnew = useSelector((state: { selected: { showlightmode: boolean } }) => state.selected.showlightmode); // Access Redux state

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

  const selectData = [
    {
      "id": 1,
      "name": "TX",
      "type": 'Geography',
      "Total Claims": 6,
      "Total Paid": "$345,021.27",
      "table data": [
        {
          "description": "DALLAS, TX.- AS PER CLMT: INSD DRVR MADE AN UNSAFE LANE SWITCH AND STRUCK CLMT VEH.",
          "totalpaid": "$602.48"
        },
        {
          "description": "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
          "totalpaid": "$360.37"
        },
        {
          "description": "HOUSTON, TX - INSD VEH MADE A THREE LANE CHANGE AND WHILE IN THE PROCESS IT STRUCK CLMT VEH.",
          "totalpaid": "$297,451.35"
        },
        {
          "description": "MERKEL, TX-INSD DRVR LOST CONTROL OF VEH DUE TO ICE ON RD. INSD DRVR JACKKNIFED AND CAUSED INSD VEH TO STRIKE OVERPASS GAURD RAIL.",
          "totalpaid": "$1,133.61"
        },
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
      "id": 2,
      "name": "KS",
      "type": 'Geography',
      "Total Claims": 6,
      "Total Paid": "$140,447.68",
      "table data": [
        {
          "description": "CALISDA, KS-DUE TO THE HEAVY WINDS, INSD VEH ROLLED OVER.",
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
        },
        {
          "description": "PARSONS, KS.- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
          "totalpaid": "$140,442.18"
        },
        {
          "description": "PARSONS, KS.- INSD DRVR WAS TRAVELING ON US-400 WHILE CROSSING INTERSECTION WITH US-169, IV NOTICE CV WAS COMING AND TRIED TO SPEED TO AVOID COLLISION. CV DIDN'T STOP AND STRUCK IV TRAILER.",
          "totalpaid": "$0.00"
        }
      ]
    },
    {
      "id": 3,
      "name": "IL",
      "type": 'Geography',
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
      "id": 4,
      "name": "MO",
      "type": 'Geography',
      "Total Claims": 1,
      "Total Paid": "$7,078.24",
      "table data": [
        {
          "description": "Rolla, MO.- INSD VEH BACKED UP TO CLMT VEH.",
          "totalpaid": "$7,078.24"
        }
      ]
    },
    {
      "id": 5,
      "name": "CA",
      "type": 'Geography',
      "Total Claims": 3,
      "Total Paid": "$17.00",
      "table data": [
        {
          "description": "ALPINE, CA - INSD VEH WAS DRVING ON FREEWAY WHEN HE SAW CLMT DRVR MAKING SIGNS, CLMT DRVR STATED THAT INSD VEH THROW A ROCK AT CLMT VEH WINDSHIELD.",
          "totalpaid": "$11.50"
        },
        {
          "description": "HEBER, CA- IV WAS DRIVING AND CV MERGED TO LANE AND IV HIT CV.",
          "totalpaid": "$5.50"
        },
        {
          "description": "SAN DIEGO, CA, INSD VEH CHANGED LANE AND STRUCK CLMT VEH WITH TRAILER",
          "totalpaid": "$0.00"
        }
      ]
    },
    {
      "id": 6,
      "name": "TN",
      "type": 'Geography',
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
      "id": 7,
      "name": "AZ",
      "type": 'Geography',
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#ffb570',
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#ffb570'
          }}>
          Geography Recommendations
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#7f8292',
            fontWeight: 'bold'
          }}
        >
          Geography: Review High-Cost State (z-score: 2.25σ)
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#7f8292',
          }}
        >
          {`Consider reviewing claims handling procedures in TX, where total paid claims are notably (>95% confidence) above average (z-score: 2.25σ).`}
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#7f8292',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
          Geography: Cost Efficiency Analysis (Top 3 states by average claim cost (with percentile ranking))
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#7f8292',
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#ffb570'
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#ffb570'
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
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
          style={{
            color: showLightnew === true ? 'black' : '#ffb570'
          }}
        >
          Geography Summary
        </Typography>
        <Table columns={columns} data={data} />
      </div>

      <div className="flex items-center space-x-4 mt-6 mb-6">
        <select
          value={selectedState}
          onChange={handleStateChange}
          className=" rounded-md px-4 py-2 focus:outline-none "
          style={{
            border: showLightnew === true ? '1px solid black' : '1px solid #ffa857',
            color:showLightnew === true ? 'black' : '#ffa857',
            background: showLightnew === true ? 'white' : 'rgb(23, 24, 29)',
            WebkitAppearance: 'none', // Try to remove default appearance
            appearance: 'none',       // Standard way to remove appearance
            backgroundColor:showLightnew === true ? 'white' : 'rgb(23, 24, 29)', // Set background color
            padding: '8px', // Adjust padding as needed
            borderRadius: '4px', // Add rounded corners if desired
          }}
        >

          <option value="" disabled>Select Geography</option> {/* Default option */}
          {selectData.map(item => ( // Dynamically render options
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>


        <button
          onClick={handleJumpToGeography}
          disabled={!selectedState}
          className={showLightnew === true ?  `relative inline-flex items-center justify-center mr-2 overflow-hidden text-sm font-medium rounded-lg group focus:ring-4 focus:outline-none dark:border-yellow-500 dark:hover:bg-yellow-600 dark:hover:border-yellow-700 dark:focus:ring-yellow-800 custom-button1` : `relative inline-flex items-center justify-center mr-2 overflow-hidden text-sm font-medium rounded-lg group focus:ring-4 focus:outline-none dark:border-yellow-500 dark:hover:bg-yellow-600 dark:hover:border-yellow-700 dark:focus:ring-yellow-800 custom-button`}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            Jump to Geography
          </span>
        </button>
      </div>
    </div>
  );
}

export default GeographicAnalysis;
