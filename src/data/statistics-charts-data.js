import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Number of Claims",
      data: [6, 6, 1, 1, 3, 1, 2],
    },
  ],
  options: {
    ...chartsConfig, // Assuming chartsConfig contains shared chart settings
    colors: ["#70baff"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["TX", "KS", "IL", "MO", "CA", "TN", "AZ"],
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Number of Claims",
      },
      tickAmount: 6,
      labels: {
        formatter: (value) => Math.floor(value),
      },
    },
    title: {
      text: "Claims by Geography",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const totalPaidChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Total Paid ($)",
      data: [350000, 140000, 30000, 5000, 0, 0, 0], // Adjusted values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#70baff"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["TX", "KS", "IL", "MO", "CA", "TN", "AZ"], // X-axis labels
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Total Paid ($)",
      },
      tickAmount: 7, // Ensures 7 ticks for the exact intervals
      min: 0,
      max: 350000, // Set upper limit
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`, // Format as currency
      },
    },
    title: {
      text: "Total Paid by Geography",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};




const riskScoresByGeographyChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Risk Score (σ)",
      data: [2.1, 0.5, -0.3, -0.6, -0.7, -0.8, -0.9], // Adjusted for your screenshot
    },
  ],
  options: {
    colors: ["#70baff"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["TX", "KS", "IL", "MO", "CA", "TN", "AZ"],
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Risk Score (σ)",
      },
      min: -2,
      max: 2,
      tickAmount: 4, // Divide into 4 steps (to get -2, -1, 0, 1, 2)
      labels: {
        formatter: function (value) {
          return value.toFixed(2); // Ensure ticks show with two decimal places
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "+2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: 0,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "0",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: -2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "-2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false, // This hides the values inside the bars
    },
    title: {
      text: "Risk Scores by Geography",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

// driver

const driverClaimsChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Number of Claims",
      data: [3, 4, 2, 1,1,1, 4, 1,1, 2], // Example data, replace with actual values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#91a58b"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
     
      ...chartsConfig.xaxis,
      categories: [" Fahrer Mueller", " Driver Smith", "Водитель Ivanov", "Motorista Silva", "Autista Rossi", "運転手 Tanaka", "司机 Wang", "기사 Kim","Conductor García", "Chauffeur Dubois"], // X-axis labels
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Number of Claims",
      },
      tickAmount: 5, // Ensures labels show every integer from 0 to 6
      labels: {
        formatter: (value) => Math.floor(value), // Force whole numbers
      },
    },
    title: {
      text: "Claims by Driver",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const driverPaidChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Total Paid ($)",
      data: [300000, 150000, 50000, 40000, 10000, 0, 0, 0, 0, 0], // Added 0 for missing values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#91a58b"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Fahrer Mueller", "Driver Smith", "Водитель Ivanov", 
        "Motorista Silva", "Autista Rossi", "運転手 Tanaka", 
        "司机 Wang", "기사 Kim", "Conductor García", "Chauffeur Dubois"
      ], // Keep all drivers in the list
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Total Paid ($)",
      },
      tickAmount: 6, // Number of intervals
      min: 0,
      max: 300000, // Set upper limit
      labels: {
        formatter: (value) => {
          const allowedValues = [300000, 250000, 200000, 150000, 100000, 50000, 0];
          return allowedValues.includes(value) ? `$${value.toLocaleString()}` : "";
        },
      },
    },
    title: {
      text: "Total Paid by Driver",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`, // Display formatted value on hover
      },
    },
  },
};

const riskScoresByDriverChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Risk Score (σ)",
      data: [2.1, 1, -0.2,-0.3, -0.5, -0.5, -0.5, -0.5,-0.5,-0.5], // Adjusted for your screenshot
    },
  ],
  options: {
    colors: ["#91a58b"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: [
        "Fahrer Mueller", "Driver Smith", "Водитель Ivanov", 
        "Motorista Silva", "Autista Rossi", "運転手 Tanaka", 
        "司机 Wang", "기사 Kim", "Conductor García", "Chauffeur Dubois"
      ],
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Risk Score (σ)",
      },
      min: -2,
      max: 2,
      tickAmount: 4, // Divide into 4 steps (to get -2, -1, 0, 1, 2)
      labels: {
        formatter: function (value) {
          return value.toFixed(2); // Ensure ticks show with two decimal places
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "+2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: 0,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "0",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: -2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "-2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false, // This hides the values inside the bars
    },
    title: {
      text: "Risk Scores by Driver",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

// condition

const conditionClaimsChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Number of Claims",
      data: [5, 2, 5, 2,1,1, 4], // Example data, replace with actual values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fcb470"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
     
      ...chartsConfig.xaxis,
      categories: ["Lane Change", "Intersection", "Parking", "Normal", "Backing", "Ice", "Wind"], // X-axis labels
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Number of Claims",
      },
      tickAmount: 5, // Ensures labels show every integer from 0 to 6
      labels: {
        formatter: (value) => Math.floor(value), // Force whole numbers
      },
    },
    title: {
      text: "Claims by Condition",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const conditionPaidChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Total Paid ($)",
      data: [300000, 140000, 40000, 30000, 10000, 0, 0], // Added 0 for missing values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fcb470"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Lane Change", "Intersection", "Parking", "Normal", "Backing", "Ice", "Wind"], // Keep all drivers in the list
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Total Paid ($)",
      },
      tickAmount: 6, // Number of intervals
      min: 0,
      max: 300000, // Set upper limit
      labels: {
        formatter: (value) => {
          const allowedValues = [300000, 250000, 200000, 150000, 100000, 50000, 0];
          return allowedValues.includes(value) ? `$${value.toLocaleString()}` : "";
        },
      },
    },
    title: {
      text: "Total Paid by Condition",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`, // Display formatted value on hover
      },
    },
  },
};

const riskScoresByConditionChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Risk Score (σ)",
      data: [2.1, 0.7, -0.2,-0.3, -0.7, -0.8, -0.8], // Adjusted for your screenshot
    },
  ],
  options: {
    colors: ["#fcb470"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["Lane Change", "Intersection", "Parking", "Normal", "Backing", "Ice", "Wind"],
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Risk Score (σ)",
      },
      min: -2,
      max: 2,
      tickAmount: 4, // Divide into 4 steps (to get -2, -1, 0, 1, 2)
      labels: {
        formatter: function (value) {
          return value.toFixed(2); // Ensure ticks show with two decimal places
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "+2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: 0,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "0",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: -2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "-2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false, // This hides the values inside the bars
    },
    title: {
      text: "Risk Scores by Condition",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

// claim type

const claimtypeClaimsChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Number of Claims",
      data: [5, 13, 2], // Example data, replace with actual values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#e0829d"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
     
      ...chartsConfig.xaxis,
      categories: ["BI", "PD", "MEDICAL PAYMENTS"], // X-axis labels
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Number of Claims",
      },
      tickAmount: 7, // Ensures labels show every integer from 0 to 6
      labels: {
        formatter: (value) => Math.floor(value), // Force whole numbers
      },
    },
    title: {
      text: "Claims by Claim Type",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

const claimtypePaidChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Total Paid ($)",
      data: [330000, 210000, 0], // Added 0 for missing values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#e0829d"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["BI", "PD", "MEDICAL PAYMENTS"], // Keep all drivers in the list
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Total Paid ($)",
      },
      tickAmount: 7, // Number of intervals
      min: 0,
      max: 350000, // Set upper limit
      labels: {
        formatter: (value) => {
          const allowedValues = [300000, 250000, 200000, 150000, 100000, 50000, 0];
          return allowedValues.includes(value) ? `$${value.toLocaleString()}` : "";
        },
      },
    },
   
    title: {
      text: "Total Paid by Claim Type",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`, // Display formatted value on hover
      },
    },
  },
};

const riskScoresByClaimChart = {
  type: "bar",
  height: 400,
  series: [
    {
      name: "Risk Score (σ)",
      data: [1.1, 0.3, -1.4], // Adjusted for your screenshot
    },
  ],
  options: {
    colors: ["#e0829d"], // Set bar color to #70baff
    chart: {
      foreColor: "#7f8292", // Keep this for labels, gridlines, etc.
    },
    grid: {
      borderColor: "#263238", // Set grid line color here
      row: {
        colors: ["transparent", "transparent"], // Alternating row colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
      column: {
        colors: ["transparent", "transparent"], // Alternating column colors (transparent for no fill)
        opacity: 0.5 // Adjust opacity as needed
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["BI", "PD", "MEDICAL PAYMENTS"],
      labels: {
        style: {
          colors: "#7f8292" // Set x-axis label color to match y-axis
        }
      }
    },
    yaxis: {
      title: {
        text: "Risk Score (σ)",
      },
      min: -2,
      max: 2,
      tickAmount: 8, // Divide into 4 steps (to get -2, -1, 0, 1, 2)
      labels: {
        formatter: function (value) {
          return value.toFixed(2); // Ensure ticks show with two decimal places
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "+2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: 0,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "0",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
        {
          y: -2,
          borderColor: "red",
          strokeDashArray: 5,
          label: {
            text: "-2σ",
            position: "right",
            style: {
              color: "red",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false, // This hides the values inside the bars
    },
    title: {
      text: "Risk Scores by Claim Type",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
};

// second level
export const statisticsChartsData = [
  {
    color: "white",
    title: "Claims by Geography",
    description: "Number of claims per state",
    footer: "Data updated recently",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Total Paid by Geography",
    description: "Total amount paid per state",
    footer: "Data updated recently",
    chart: totalPaidChart,
},
  {
    color: "white",
    title: "Risk Scores by Geography",
    description: "Risk score deviations from the mean",
    footer: "Data updated recently",
    chart: riskScoresByGeographyChart,
  },
];

export const driveranalysisChartsData = [
  {
    color: "white",
    title: "Claims by Driver",
    description: "Number of claims per driver",
    footer: "Data updated recently",
    chart: driverClaimsChart,
  },
  {
    color: "white",
    title: "Total Paid by Driver",
    description: "Total amount paid per driver",
    footer: "Data updated recently",
    chart: driverPaidChart,
},
  {
    color: "white",
    title: "Risk Scores by Driver",
    description: "Risk score deviations from the mean",
    footer: "Data updated recently",
    chart: riskScoresByDriverChart,
  },
];

export const conditionanalysisChartsData = [
  {
    color: "white",
    title: "Claims by Condition",
    description: "Number of claims per condition",
    footer: "Data updated recently",
    chart: conditionClaimsChart,
  },
  {
    color: "white",
    title: "Total Paid by Condition",
    description: "Total amount paid per condition",
    footer: "Data updated recently",
    chart: conditionPaidChart,
},
  {
    color: "white",
    title: "Risk Scores by Condition",
    description: "Risk score deviations from the mean",
    footer: "Data updated recently",
    chart: riskScoresByConditionChart,
  },
];

export const claimtypeanalysisChartsData = [
  {
    color: "white",
    title: "Claims by Claim Type",
    description: "Number of claims per claim type",
    footer: "Data updated recently",
    chart: claimtypeClaimsChart,
  },
  {
    color: "white",
    title: "Total Paid by Claim Type",
    description: "Total amount paid per claim type",
    footer: "Data updated recently",
    chart: claimtypePaidChart,
},
  {
    color: "white",
    title: "Risk Scores by Claim Type",
    description: "Risk score deviations from the mean",
    footer: "Data updated recently",
    chart: riskScoresByClaimChart,
  },
];

export default statisticsChartsData;
