import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import Grid from '@material-ui/core/Grid';


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

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data[option[0]],
      hideLegend: false,
    };
    this.changeData = this.changeData.bind(this);
    this.id = undefined;
    this.index = 1;
  }

  componentDidMount() {
    // const selectElement = document.getElementById('select');
    // this.id = setInterval(() => {
    //   selectElement.selectedIndex = this.index;
    //   this.setState({ data: data[option[this.index]] });
    //   if (this.index === 2) {
    //     this.index = 0;
    //   } else {
    //     this.index += 1;
    //   }
    // }, 4000);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  changeData(e) {
    this.setState({ data: data[e.target.value] });
  }

  resize() {
    let currentHideLegend = (window.innerWidth <= 760);
    if (currentHideLegend !== this.state.hideLegend) {
        this.setState({hideLegend: currentHideLegend});
    }
  }

  render() {
    const { data: chartData, hideLegend } = this.state;
    return (
      <Paper>
        {/* <Chart
          data={chartData}
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
            argumentField="time"
            scaleName="temperature"
          />

          <SplineSeries
            name="습도"
            valueField="humidity"
            argumentField="time"
            scaleName="humidity"
          />

          <SplineSeries
            name="CH4"
            valueField="ch4"
            argumentField="time"
            scaleName="ch4"
          />

          <SplineSeries
            name="CO2"
            valueField="co2"
            argumentField="time"
            scaleName="co2"
          />
          <Animation />
          {  !hideLegend &&
            <Legend />
          }
        </Chart> */}
        <Grid container> {/* grid 비율 바꿔야됨 */}
          <Grid item xs={12} sm={6}>
          <Chart
            data={chartData}
          >
            <ValueScale name="temperature" />

            <ArgumentAxis />
            <ValueAxis scaleName="temperature" position="right" showGrid={false} showLine showTicks />

            <SplineSeries
              name="온도"
              valueField="temperature"
              argumentField="time"
              scaleName="temperature"
            />
            <Animation />
            {  !hideLegend &&
              <Legend />
            }
          </Chart>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Chart
            data={chartData}
          >
            <ValueScale name="humidity" />

            <ArgumentAxis />
            <ValueAxis scaleName="humidity" position="right" showGrid={false} showLine showTicks />

            <SplineSeries
              name="습도"
              valueField="humidity"
              argumentField="time"
              scaleName="humidity"
            />
            <Animation />
            {  !hideLegend &&
              <Legend />
            }
          </Chart>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Chart
            data={chartData}
          >
            <ValueScale name="ch4" />

            <ArgumentAxis />
            <ValueAxis scaleName="ch4" position="right" showGrid={false} showLine showTicks />

            <SplineSeries
              name="CH4"
              valueField="ch4"
              argumentField="time"
              scaleName="ch4"
            />
            <Animation />
            {  !hideLegend &&
              <Legend />
            }
          </Chart>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Chart
            data={chartData}
          >
            <ValueScale name="co2" />

            <ArgumentAxis />
            <ValueAxis scaleName="co2" position="right" showGrid={false} showLine showTicks />

            <SplineSeries
              name="CO2"
              valueField="co2"
              argumentField="time"
              scaleName="co2"
            />
            <Animation />
            {  !hideLegend &&
              <Legend />
            }
          </Chart>
          </Grid>
        </Grid>
        <select id="select" style={{ width: 'auto', margin: '10px', justifyContent: 'center' }} onChange={this.changeData}>
          <option>{ option[0] }</option>
          <option>{ option[1] }</option>
          <option>{ option[2] }</option>
        </select>
      </Paper>
    );
  }
}

// check에 따라 렌더링하기