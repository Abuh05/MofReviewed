// /client/src/pages/HealthReports.jsx

import  { useState, useEffect } from 'react';
import axios from 'axios';

const HealthReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchHealthReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reports/finance');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching health reports:', error);
      }
    };

    fetchHealthReports();
  }, []);

  return (
    <div>
      <h2>Health Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <a href={`/api/reports/download/${report.file}`} target="_blank" rel="noopener noreferrer">
              {report.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthReports;
