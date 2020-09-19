import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title.js';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Jan 18', 0),
  createData('Apr 18', 300),
  createData('Jul 18', 600),
  createData('Oct 18', 800),
  createData('Jan 19', 1500),
  createData('Apr 19', 2000),
  createData('Jul 19', 2400),
  createData('Oct 19', 2400),
  createData('Jan 20', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Your Channel Activity</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Viewership
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}