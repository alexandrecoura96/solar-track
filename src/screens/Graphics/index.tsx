import React from 'react';
import {BarChart} from '../../components/BarChart';

export function Graphics() {
  return (
    <BarChart
      data={[
        {label: 'Jan', value: 50},
        {label: 'Feb', value: 100},
        {label: 'Mar', value: 350},
        {label: 'Apr', value: 200},
        {label: 'May', value: 550},
        {label: 'Jun', value: 300},
        {label: 'Jul', value: 150},
        {label: 'Aug', value: 400},
        {label: 'Sep', value: 450},
        {label: 'Oct', value: 500},
        {label: 'Nov', value: 250},
        {label: 'Dec', value: 600},
      ]}
    />
  );
}
