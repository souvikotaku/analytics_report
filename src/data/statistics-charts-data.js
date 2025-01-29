import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Number of Claims",
      data: [6, 6, 1, 1, 3, 1, 2], // Match the values in the image
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#6366F1"], // Set blue color
    plotOptions: {
      bar: {
        columnWidth: "30%", // Increase bar width
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["TX", "KS", "IL", "MO", "CA", "TN", "AZ"], // X-axis labels
    },
    yaxis: {
      title: {
        text: "Number of Claims",
      },
      tickAmount: 6, // Ensures labels show every integer from 0 to 6
      labels: {
        formatter: (value) => Math.floor(value), // Force whole numbers
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
  height: 220,
  series: [
    {
      name: "Total Paid ($)",
      data: [350000, 140000, 30000, 5000, 0, 0, 0], // Adjusted values
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#6366F1"], // Set blue color
    plotOptions: {
      bar: {
        columnWidth: "30%", // Increase bar width
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["TX", "KS", "IL", "MO", "CA", "TN", "AZ"], // X-axis labels
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
  height: 220,
  series: [
    {
      name: "Risk Score (σ)",
      data: [2.1, 0.5, -0.3, -0.6, -0.7, -0.8, -0.9], // Adjusted for your screenshot
    },
  ],
  options: {
    colors: ["#6366F1"],
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["TX", "KS", "IL", "MO", "CA", "TN", "AZ"],
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

export default statisticsChartsData;
