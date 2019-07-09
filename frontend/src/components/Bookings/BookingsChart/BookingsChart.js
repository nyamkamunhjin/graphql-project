import React from 'react';
import { Bar as BarChart } from 'react-chartjs';
import './BookingsChart.css';
const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 1,
    max: 10
  },
  Normal: {
    min: 11,
    max: 30
  },
  Expensive: {
    min: 31,
    max: 1000
  }
};

const bookingsChart = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, cur) => {
      if (
        cur.event.price < BOOKINGS_BUCKETS[bucket].max &&
        cur.event.price > BOOKINGS_BUCKETS[bucket].min
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    values.push(filteredBookingsCount);

    chartData.labels.push(bucket);
    chartData.datasets.push({
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: values
    });
    values = [...values];
    values[values.length - 1] = 0;
  }

  return <div className="bookings-chart"><BarChart data={chartData} /> </div>;
};

export default bookingsChart;
