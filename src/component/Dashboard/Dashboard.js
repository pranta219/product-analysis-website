import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100,
            "sell": 241,
            "revenue": 104
        },
        {
            "month": "Apr",
            "investment": 200,
            "sell": 423,
            "revenue": 245
        },
        {
            "month": "May",
            "investment": 500,
            "sell": 726,
            "revenue": 670
        },
        {
            "month": "Jun",
            "investment": 500,
            "sell": 529,
            "revenue": 404
        },
        {
            "month": "Jul",
            "investment": 600,
            "sell": 601,
            "revenue": 509
        },
        {
            "month": "Aug",
            "investment": 700,
            "sell": 670,
            "revenue": 610
        }
    ]
    return (
        <div className='flex justify-center mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>

                    <LineChart width={380} height={320} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    <h3 className='text-center text-3xl uppercase font-mono font-bold pb-8'>Chart 01</h3>
                </div>
                <div>

                    <BarChart
                        width={400}
                        height={350}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#8884d8" />
                        <Bar dataKey="investment" fill="orange" />
                    </BarChart>
                    <h3 className='text-center text-3xl uppercase font-mono font-bold pb-8'>Chart 02</h3>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;