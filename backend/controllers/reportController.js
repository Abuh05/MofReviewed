// server/controllers/reportController.js

import Report from '../models/Report.js';

// Controller for uploading a report
export const uploadReport = async (req, res) => {
  try {
    const { title, department } = req.body;
    const file = req.file.filename;

    const newReport = new Report({ title, file, department });
    await newReport.save();

    res.json({ message: 'Report uploaded successfully!' });
  } catch (error) {
    console.error('Error uploading report:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for getting reports by department
export const getReportsByDepartment = async (req, res) => {
  try {
    const department = req.params.department;
    const reports = await Report.find({ department });
    res.json(reports);
  } catch (error) {
    console.error('Error getting reports:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for downloading a report
export const downloadReport = async (req, res) => {
  try {
    const file = req.params.file;
    const path = `uploads/${file}`;

    res.download(path);
  } catch (error) {
    console.error('Error downloading report:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
