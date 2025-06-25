import React from 'react';
import {
  Bar,
  Line,
  Pie,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Charts = ({ data }) => {
  const labels = data.map(item => item.topic || 'Unknown');
  const intensityData = data.map(item => item.intensity || 0);
  const relevanceData = data.map(item => item.relevance || 0);
  const likelihoodData = data.map(item => item.likelihood || 0);

  const config = (label, values, bgColor) => ({
    labels,
    datasets: [{
      label,
      data: values,
      backgroundColor: bgColor
    }]
  });

  return (
    <div className="space-y-8 flex-1">
      <h2 className="text-xl font-bold">Visualizations</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Bar data={config('Intensity by Topic', intensityData, 'rgba(59, 130, 246, 0.7)')} />
        <Line data={config('Relevance by Topic', relevanceData, 'rgba(34, 197, 94, 0.7)')} />
        <Pie data={config('Likelihood by Topic', likelihoodData, ['#f87171', '#facc15', '#34d399', '#60a5fa', '#a78bfa'])} />
      </div>
    </div>
  );
};

export default Charts;
