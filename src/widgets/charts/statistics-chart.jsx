import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';


export function StatisticsChart({ color, chart, title, description, footer }) {

  const showLightnew = useSelector((state) => state.selected.showlightmode); // Access Redux state

  return (
    <Card className="border border-blue-gray-100 shadow-sm" style={{
      background: showLightnew === true ? 'white' : '#21232d',
      border: showLightnew === true ? '1px solid black' : '1px solid #ffa857'
    }}>
      <CardHeader variant="gradient" color={color} floated={false} shadow={false} style={{
        background: 'transparent'
      }}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="px-6 pt-0">
        {/* <Typography variant="h6" color="blue-gray">
          {title}
        </Typography> */}
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {/* {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
          {footer}
        </CardFooter>
      )} */}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
