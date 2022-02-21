import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../data/incidents.json';



function Essentiels() {
  return (
    <div className='Essentiels'>
     <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="entrées" stroke="#173D59" activeDot={{ r: 8 }} />
          <Line yAxisId="left" type="monotone" dataKey="chutes" stroke="#E08330" />
          <Line yAxisId="left" type="monotone" dataKey="chutesParRésident" stroke="#4688F1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Essentiels;
