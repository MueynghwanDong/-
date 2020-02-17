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
    { time: '18:00', 'body_temperature': 38.4, 'heart_rate': 48, 'step_count': 1 },
    { time: '18:05', 'body_temperature': 38.7, 'heart_rate': 50, 'step_count': 1 },
    { time: '18:10', 'body_temperature': 38.5, 'heart_rate': 60, 'step_count': 2 },
    { time: '18:15', 'body_temperature': 38.6, 'heart_rate': 67, 'step_count': 1 },
    { time: '18:20', 'body_temperature': 38.6, 'heart_rate': 54, 'step_count': 3 },
    { time: '18:25', 'body_temperature': 38.3, 'heart_rate': 59, 'step_count': 2 },
    { time: '18:30', 'body_temperature': 38.8, 'heart_rate': 50, 'step_count': 2 },
    { time: '18:35', 'body_temperature': 38.6, 'heart_rate': 55, 'step_count': 2 },
    { time: '18:40', 'body_temperature': 38.6, 'heart_rate': 54, 'step_count': 1 },
    { time: '18:45', 'body_temperature': 38.9, 'heart_rate': 70, 'step_count': 5 },
    { time: '18:50', 'body_temperature': 39.1, 'heart_rate': 80, 'step_count': 7 },
    { time: '18:55', 'body_temperature': 39.5, 'heart_rate': 95, 'step_count': 10 },
  ],
  '20-02-11-17:00': [
    { time: '17:00', 'body_temperature': 38.4, 'heart_rate': 48, 'step_count': 1 },
    { time: '17:05', 'body_temperature': 38.4, 'heart_rate': 50, 'step_count': 1 },
    { time: '17:10', 'body_temperature': 38.4, 'heart_rate': 60, 'step_count': 2 },
    { time: '17:15', 'body_temperature': 38.4, 'heart_rate': 67, 'step_count': 1 },
    { time: '17:20', 'body_temperature': 38.4, 'heart_rate': 54, 'step_count': 3 },
    { time: '17:25', 'body_temperature': 38.4, 'heart_rate': 59, 'step_count': 2 },
    { time: '17:30', 'body_temperature': 38.4, 'heart_rate': 50, 'step_count': 2 },
    { time: '17:35', 'body_temperature': 38.4, 'heart_rate': 55, 'step_count': 2 },
    { time: '17:40', 'body_temperature': 38.4, 'heart_rate': 54, 'step_count': 1 },
    { time: '17:45', 'body_temperature': 38.4, 'heart_rate': 70, 'step_count': 5 },
    { time: '17:50', 'body_temperature': 39.4, 'heart_rate': 80, 'step_count': 7 },
    { time: '17:55', 'body_temperature': 39.4, 'heart_rate': 95, 'step_count': 10 },
  ],
  '20-02-11-16:00': [
    { time: '16:00', 'body_temperature': 38.4, 'heart_rate': 48, 'step_count': 1 },
    { time: '16:05', 'body_temperature': 38.7, 'heart_rate': 50, 'step_count': 1 },
    { time: '16:10', 'body_temperature': 38.5, 'heart_rate': 60, 'step_count': 2 },
    { time: '16:15', 'body_temperature': 38.6, 'heart_rate': 67, 'step_count': 1 },
    { time: '16:20', 'body_temperature': 38.6, 'heart_rate': 54, 'step_count': 3 },
    { time: '16:25', 'body_temperature': 38.3, 'heart_rate': 59, 'step_count': 2 },
    { time: '16:30', 'body_temperature': 38.8, 'heart_rate': 50, 'step_count': 2 },
    { time: '16:35', 'body_temperature': 38.6, 'heart_rate': 55, 'step_count': 2 },
    { time: '16:40', 'body_temperature': 38.6, 'heart_rate': 54, 'step_count': 1 },
    { time: '16:45', 'body_temperature': 38.9, 'heart_rate': 70, 'step_count': 5 },
    { time: '16:50', 'body_temperature': 39.1, 'heart_rate': 80, 'step_count': 7 },
    { time: '16:55', 'body_temperature': 39.5, 'heart_rate': 95, 'step_count': 10 },
  ],
};

const option = ['20-02-11-18:00', '20-02-11-17:00', '20-02-11-16:00'];

const LivestockChart = ({ livestockData, ls_date, onChangeDate }) => {

  return (
    <Paper>
      <Chart
        data={livestockData}
      >
        <ValueScale name="body_temperature" modifyDomain={()=>[30, 45]} />
        <ValueScale name="step_count" />

        <ArgumentAxis />
        <ValueAxis scaleName="body_temperature" position="right" showGrid={false} showLine showTicks />
        <ValueAxis scaleName="step_count" position="right" showGrid={false} showLine showTicks />

        <SplineSeries
          name="체온"
          valueField="body_temperature"
          argumentField="t"
          scaleName="body_temperature"
          color="pink"
        />

        <SplineSeries
          name="활동량"
          valueField="step_count"
          argumentField="t"
          scaleName="step_count"
          color="lightblue"
        />
        <Animation />
        <Legend />
        <ZoomAndPan />
      </Chart>
      <Grid container> {/* grid 비율 바꿔야됨 */}
        <Grid item xs={12} sm={6}>
        <Chart
          data={livestockData}
          height={300}
        >
      
          <ValueScale name="body_temperature" modifyDomain={()=>[30, 45]} />

          <ArgumentAxis showLabels={false} />
          <ValueAxis scaleName="body_temperature" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            
            name="체온"
            valueField="body_temperature"
            argumentField="t"
            scaleName="body_temperature"
            color="pink"
          />
          <Title text="체온" />
          <Animation />
          <ZoomAndPan />
        </Chart>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Chart
          data={livestockData}
          height={300}
        >
          <ValueScale name="step_count" />

          <ArgumentAxis showLabels={false} />
          <ValueAxis scaleName="step_count" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            name="활동량"
            valueField="step_count"
            argumentField="t"
            scaleName="step_count"
            color="lightblue"
          />
          <Title text="활동량" />
          <Animation />
          <ZoomAndPan />
        </Chart>
        </Grid>
      </Grid>
      <DatePicker selected={ls_date} onChange={onChangeDate} />
    </Paper>
  );
}

export default LivestockChart;