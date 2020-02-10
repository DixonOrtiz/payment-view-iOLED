import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class MonthlyPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            label: 'Pagos de este mes',
            data: [12, 10, 15, 20, 14, 24, 12, 11, 15, 20, 14, 24],
            backgroundColor: 'purple',
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {display: true, text: 'Pagos realizados', fontSize: 14},
            legend: {display: false, position: 'right'},
            layout: {},
          }}
        />
      </div>
    );
  }
}

export default MonthlyPayment;
