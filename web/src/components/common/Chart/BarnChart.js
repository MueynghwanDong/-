import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Legend,
  ZoomAndPan,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import Grid from '@material-ui/core/Grid';
import DatePicker from 'react-datepicker';

const data = {
  '20-02-11-18:00': [
    { time: '18:00', 'temperature': 38.4, 'humidity': 48, 'ch4': 1, 'co2': 1 },
    { time: '18:05', 'temperature': 38.7, 'humidity': 50, 'ch4': 1, 'co2': 1 },
    { time: '18:10', 'temperature': 38.5, 'humidity': 60, 'ch4': 2, 'co2': 1 },
    { time: '18:15', 'temperature': 38.6, 'humidity': 67, 'ch4': 1, 'co2': 1 },
    { time: '18:20', 'temperature': 38.6, 'humidity': 54, 'ch4': 3, 'co2': 1 },
    { time: '18:25', 'temperature': 38.3, 'humidity': 59, 'ch4': 2, 'co2': 1 },
    { time: '18:30', 'temperature': 38.8, 'humidity': 50, 'ch4': 2, 'co2': 1 },
    { time: '18:35', 'temperature': 38.6, 'humidity': 55, 'ch4': 2, 'co2': 1 },
    { time: '18:40', 'temperature': 38.6, 'humidity': 54, 'ch4': 1, 'co2': 1 },
    { time: '18:45', 'temperature': 38.9, 'humidity': 70, 'ch4': 5, 'co2': 1 },
    { time: '18:50', 'temperature': 39.1, 'humidity': 80, 'ch4': 7, 'co2': 1 },
    { time: '18:55', 'temperature': 39.5, 'humidity': 95, 'ch4': 10, 'co2': 1 },
  ],
  '20-02-11-17:00': [
    { time: '17:00', 'temperature': 38.4, 'humidity': 48, 'ch4': 1, 'co2': 1 },
    { time: '17:05', 'temperature': 38.4, 'humidity': 50, 'ch4': 1, 'co2': 1 },
    { time: '17:10', 'temperature': 38.4, 'humidity': 60, 'ch4': 2, 'co2': 1 },
    { time: '17:15', 'temperature': 38.4, 'humidity': 67, 'ch4': 1, 'co2': 1 },
    { time: '17:20', 'temperature': 38.4, 'humidity': 54, 'ch4': 3, 'co2': 1 },
    { time: '17:25', 'temperature': 38.4, 'humidity': 59, 'ch4': 2, 'co2': 1 },
    { time: '17:30', 'temperature': 38.4, 'humidity': 50, 'ch4': 2, 'co2': 1 },
    { time: '17:35', 'temperature': 38.4, 'humidity': 55, 'ch4': 2, 'co2': 1 },
    { time: '17:40', 'temperature': 38.4, 'humidity': 54, 'ch4': 1, 'co2': 1 },
    { time: '17:45', 'temperature': 38.4, 'humidity': 70, 'ch4': 5, 'co2': 1 },
    { time: '17:50', 'temperature': 39.4, 'humidity': 80, 'ch4': 7, 'co2': 1 },
    { time: '17:55', 'temperature': 39.4, 'humidity': 95, 'ch4': 10, 'co2': 1 },
  ],
  '20-02-11-16:00': [
    { time: '16:00', 'temperature': 38.4, 'humidity': 48, 'ch4': 1, 'co2': 1 },
    { time: '16:05', 'temperature': 38.7, 'humidity': 50, 'ch4': 1, 'co2': 1 },
    { time: '16:10', 'temperature': 38.5, 'humidity': 60, 'ch4': 2, 'co2': 1 },
    { time: '16:15', 'temperature': 38.6, 'humidity': 67, 'ch4': 1, 'co2': 1 },
    { time: '16:20', 'temperature': 38.6, 'humidity': 54, 'ch4': 3, 'co2': 1 },
    { time: '16:25', 'temperature': 38.3, 'humidity': 59, 'ch4': 2, 'co2': 1 },
    { time: '16:30', 'temperature': 38.8, 'humidity': 50, 'ch4': 2, 'co2': 1 },
    { time: '16:35', 'temperature': 38.6, 'humidity': 55, 'ch4': 2, 'co2': 1 },
    { time: '16:40', 'temperature': 38.6, 'humidity': 54, 'ch4': 1, 'co2': 1 },
    { time: '16:45', 'temperature': 38.9, 'humidity': 70, 'ch4': 5, 'co2': 1 },
    { time: '16:50', 'temperature': 39.1, 'humidity': 80, 'ch4': 7, 'co2': 1 },
    { time: '16:55', 'temperature': 39.5, 'humidity': 95, 'ch4': 10, 'co2': 1 },
  ],
};

const option = ['20-02-11-18:00', '20-02-11-17:00', '20-02-11-16:00'];

const BarnChart = ({ barnData, b_date, onChangeDate }) => {

  return (
    <Paper>
      <Chart
        data={barnData}
      >
        <ValueScale name="temperature" />
        <ValueScale name="humidity" />
        <ValueScale name="ch4" />
        <ValueScale name="co2" />

        <ArgumentAxis />
        <ValueAxis scaleName="temperature" position="right" showGrid={false} showLine showTicks />
        <ValueAxis scaleName="humidity" position="right" showGrid={false} showLine showTicks />
        <ValueAxis scaleName="ch4" position="right" showGrid={false} showLine showTicks />
        <ValueAxis scaleName="co2" position="right" showGrid={false} showLine showTicks />

        <SplineSeries
          name="온도"
          valueField="temperature"
          argumentField="t"
          scaleName="temperature"
          colot="pink"
        />

        <SplineSeries
          name="습도"
          valueField="humidity"
          argumentField="t"
          scaleName="humidity"
          color="lightblue"
        />

        <SplineSeries
          name="CH4"
          valueField="ch4"
          argumentField="t"
          scaleName="ch4"
          color="lime"
        />

        <SplineSeries
          name="CO2"
          valueField="co2"
          argumentField="t"
          scaleName="co2"
          color="grey"
        />
        <Animation />
        <Legend />
      </Chart>
      <Grid container>
        <Grid item xs={12} sm={6}>
        <Chart
          data={barnData}
        >
          <ValueScale name="temperature" />

          <ArgumentAxis />
          <ValueAxis scaleName="temperature" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            name="온도"
            valueField="temperature"
            argumentField="t"
            scaleName="temperature"
            colot="pink"
          />
          <Title text="온도" />
          <Animation />
          <ZoomAndPan />
        </Chart>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Chart
          data={barnData}
        >
          <ValueScale name="humidity" />

          <ArgumentAxis />
          <ValueAxis scaleName="humidity" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            name="습도"
            valueField="humidity"
            argumentField="t"
            scaleName="humidity"
            color="lightblue"
          />
          <Title text="습도" />
          <Animation />
          <ZoomAndPan />
        </Chart>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Chart
          data={barnData}
        >
          <ValueScale name="ch4" />

          <ArgumentAxis />
          <ValueAxis scaleName="ch4" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            name="CH4"
            valueField="ch4"
            argumentField="t"
            scaleName="ch4"
            color="lime"
          />
          <Title text="CH4" />
          <Animation />
          <ZoomAndPan />
        </Chart>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Chart
          data={barnData}
        >
          <ValueScale name="co2" />

          <ArgumentAxis />
          <ValueAxis scaleName="co2" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            name="CO2"
            valueField="co2"
            argumentField="t"
            scaleName="co2"
            color="grey"
          />
          <Title text="CO2" />
          <Animation />
          <ZoomAndPan />
        </Chart>
        </Grid>
      </Grid>
      <DatePicker selected={b_date} onChange={onChangeDate} />
    </Paper>
  );
}

export default BarnChart;