import "./Chart.css";
import ChartBar from "./ChartBar";
//key is used to render the props efficiently
//here label identifies them uniquely,so we can take dataPoint.label as unique identifier
//max methods requires directly the values to find the max among them like max(1,2,3);
//to do that first taking the values inside the object datapoint and convert it into array of values
//by using spread operator we only get the values not array

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
