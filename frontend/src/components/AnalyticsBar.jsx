import React from 'react';

const AnalyticsBar = ({ data }) => {
  const total = data.length;
  const topics = new Set(data.map(d => d.topic)).size;
  const countries = new Set(data.map(d => d.country)).size;

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-4 flex gap-6 text-sm md:text-base">
      <div><strong>Total Entries:</strong> {total}</div>
      <div><strong>Unique Topics:</strong> {topics}</div>
      <div><strong>Countries:</strong> {countries}</div>
    </div>
  );
};

export default AnalyticsBar;
