import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            datasets: [
                {
                    label: 'Vendas R$',
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)',
                },
            ]
        })
        setChartOptions({
            plugins:{
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Receita Diária',
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

  return (
    <div>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
      
    </div>
  );
};



export default BarChart
