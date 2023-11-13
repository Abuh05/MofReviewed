import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EducationReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchEducationReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reports/education'); // Note the correct department in the URL
        setReports(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching education reports:', error);
        toast.error('Error fetching education reports');
      }
    };

    fetchEducationReports();
  }, []);

  return (
    <div>
      <h2>Education Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((reports) => (
            <tr key={reports._id}>
              <td>{reports.file}</td>
              <td>
                <a href={`http://localhost:5000/api/reports/download/${reports.file}`} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default EducationReports;
