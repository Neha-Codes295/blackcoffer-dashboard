import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const ExportButtons = ({ data }) => {
  const exportPDF = () => {
    html2canvas(document.querySelector("#chart-section")).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(img, "PNG", 0, 0, 210, 290);
      pdf.save("dashboard.pdf");
    });
  };

  const exportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'dashboard.csv');
  };

  return (
    <div className="flex gap-4 mt-4">
      <button onClick={exportPDF} className="bg-blue-500 text-white px-3 py-1 rounded">Export PDF</button>
      <button onClick={exportCSV} className="bg-green-500 text-white px-3 py-1 rounded">Export CSV</button>
    </div>
  );
};

export default ExportButtons;
