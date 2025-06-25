import React from 'react';

const FilterPanel = ({ filters, onChange, options }) => {
  const handleChange = (e) => {
    onChange({ ...filters, [e.target.name]: e.target.value });
  };

  const fields = ['topic', 'end_year', 'region', 'country'];

  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded-xl shadow w-full md:w-1/4">
      <h2 className="text-xl font-semibold">Filters</h2>

      {fields.map(field => (
        <div key={field}>
          <label className="block capitalize">{field.replace('_', ' ')}</label>
          <select
            name={field}
            value={filters[field] || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            {(options[field] || []).map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}

      <button
        onClick={() => onChange({})}
        className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
