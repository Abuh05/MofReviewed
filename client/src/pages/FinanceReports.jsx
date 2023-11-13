import  { useState, useEffect } from 'react';
import axios from 'axios';

const FinanceReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchFinanceReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reports/finance');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching finance reports:', error);
      }
    };

    fetchFinanceReports();
  }, []);

  return (
    <div>
      <h2>Finance Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <a href={`http://localhost:5000/api/reports/download/${report.file}`} target="_blank" rel="noopener noreferrer">
              {report.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceReports;
