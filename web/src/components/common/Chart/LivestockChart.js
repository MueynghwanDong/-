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
// import { makeStyles } from '@material-ui/core'




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
        <Chart

          data={chartData}
          
        >
      
          <ValueScale name="body_temperature" />
          <ValueScale name="heart_rate" />
          <ValueScale name="step_count" />

          <ArgumentAxis />
          <ValueAxis scaleName="body_temperature" position="right" showGrid={false} showLine showTicks />
          <ValueAxis scaleName="heart_rate" position="right" showGrid={false} showLine showTicks />
          <ValueAxis scaleName="step_count" position="right" showGrid={false} showLine showTicks />

          <SplineSeries
            
            name="체온"
            valueField="body_temperature"
            argumentField="time"
            scaleName="body_temperature"
          />

          <SplineSeries
            name="심박수"
            valueField="heart_rate"
            argumentField="time"
            scaleName="heart_rate"
          />

          <SplineSeries
            name="활동량"
            valueField="step_count"
            argumentField="time"
            scaleName="step_count"
          />
          <Animation />
          {  !hideLegend &&
            <Legend />
          }
        </Chart>
        <Grid container>  {/* grid 비율 바꿔야됨 */}
          <Grid item xs={12} sm={6} md={6} >
          <Chart
            data={chartData}
            height={300}
            
          >
            <ValueScale name="body_temperature" />

            <ArgumentAxis />
            <ValueAxis scaleName="body_temperature" position="right" showGrid={false} showLine showTicks />

            <SplineSeries
              
              name="체온"
              valueField="body_temperature"
              argumentField="time"
              scaleName="body_temperature"
            />
            <Animation />
            {  !hideLegend &&
              <Legend />
            }
          </Chart>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4}>
          <Chart
            data={chartData}
            height={300}
          >
            <ValueScale name="heart_rate" />

            <ArgumentAxis />
            <ValueAxis scaleName="heart_rate" position="right" showGrid={false} showLine showTicks />
            <SplineSeries    
              name="심박수"
              valueField="heart_rate"
              argumentField="time"
              scaleName="heart_rate"
            />
            <Animation />
            {  !hideLegend &&
              <Legend />
            }
          </Chart>
          </Grid> */}
          <Grid item xs={12} sm={6} md={6}>
          <Chart
            data={chartData}
            height={300}
          >
            <ValueScale name="step_count" />

            <ArgumentAxis />
            <ValueAxis scaleName="step_count" position="right" showGrid={false} showLine showTicks />
            
            <SplineSeries
              width={50}
              name="활동량"
              valueField="step_count"
              argumentField="time"
              scaleName="step_count"
            />
           
            <Animation />
            {  !hideLegend &&
              <Legend 
                style={{
                  writingMode:'vertical-rl'
                }}
              />
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