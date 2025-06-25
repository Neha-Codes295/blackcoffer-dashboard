import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterPanel from '../components/FilterPanel';
import Charts from '../components/Charts';
import ExportButtons from '../components/ExportButtons';
import AnalyticsBar from '../components/AnalyticsBar';

const Dashboard = () => {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();
    axios.get(`http://localhost:5000/api/data?${query}`)
      .then(res => {
        setData(res.data);

        // Extract unique filter options from current data
        const extractUnique = key => [...new Set(res.data.map(item => item[key]).filter(Boolean))];
        setOptions({
          topic: extractUnique('topic'),
          end_year: extractUnique('end_year'),
          region: extractUnique('region'),
          country: extractUnique('country')
        });
      });
  }, [filters]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white min-h-screen">
      <FilterPanel filters={filters} onChange={setFilters} options={options} />
      <div className="flex-1">
        <AnalyticsBar data={data} />
        <ExportButtons data={data} />
        <div id="chart-section">
          <Charts data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
