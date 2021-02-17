import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page b", uv: 800, pv: 2900, amt: 2900 },
  { name: "Page c", uv: 80, pv: 200, amt: 200 },
];
class Chart extends Component {
    render() {
        return (
       <div className='Chart'>
            <LineChart width={600} height={200} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
        );
    }
};

export default Chart;
