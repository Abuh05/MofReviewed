import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FinanceReports from './pages/FinanceReports';
import HealthReports from './pages/HealthReports';
import EducationReports from './pages/EducationReports';
import UploadPage from './pages/UploadPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/reports/finance">Finance Reports</Link>
            </li>
            <li>
              <Link to="/reports/health">Health Reports</Link>
            </li>
            <li>
              <Link to="/reports/education">Education Reports</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/reports/finance" element={<FinanceReports />} />
          <Route path="/reports/health" element={<HealthReports />} />
          <Route path="/reports/education" element={<EducationReports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
