import React from 'react';
import { LineChart, Line,  XAxis, YAxis } from 'recharts';

const Chart = () => {

    const studentMarks = [
        { id: 1, physics: 75, math: 85, english: 90 },
        { id: 2, physics: 80, math: 90, english: 85 },
        { id: 3, physics: 85, math: 75, english: 80 },
        { id: 4, physics: 90, math: 80, english: 75 },
        { id: 5, physics: 70, math: 60, english: 65 },
        { id: 6, physics: 65, math: 70, english: 75 },
        { id: 7, physics: 80, math: 75, english: 85 },
        { id: 8, physics: 75, math: 80, english: 70 },
        { id: 9, physics: 90, math: 95, english: 80 },
        { id: 10, physics: 85, math: 90, english: 85 },
        { id: 11, physics: 80, math: 75, english: 70 },
        { id: 12, physics: 75, math: 80, english: 75 },
      ];

    console.log(studentMarks);

    return (
        <div className='flex'>

            <LineChart width={400} height={200} data={studentMarks}>

                    <Line type="monotone" stroke="#8884d8" dataKey="physics"></Line>
                    <Line dataKey="math"></Line>
                    <XAxis dataKey="id"/>
                    <YAxis></YAxis>

            </LineChart>        
            <LineChart width={400} height={200} data={studentMarks}>

                    <Line type="monotone" stroke="#8884d8" dataKey="physics"></Line>
                    <Line dataKey="english"></Line>
                    <XAxis dataKey="id"/>
                    <YAxis></YAxis>

            </LineChart>        
            <LineChart width={400} height={200} data={studentMarks}>

                    <Line type="monotone" stroke="#8884d8" dataKey="physics"></Line>
                    <Line dataKey="english"></Line>
                    <XAxis dataKey="id"/>
                    <YAxis></YAxis>

            </LineChart>        


        </div>
    );
};

export default Chart;