// /server/routes/reportRoutes.js

import express from 'express';
const router = express.Router();
import * as reportController  from '../controllers/reportController.js';
import  multer from 'multer';

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define departments
const departments = ['finance', 'health', 'education'];

// Generate routes for each department
departments.forEach((department) => {
  // Route for uploading reports for the specified department
  router.post(`/upload/${department}`, upload.single('report'), (req, res) => {
    reportController.uploadReport(req, res, department);
  });

  // Route for getting reports by department
  router.get(`/reports/${department}`, (req, res) => {
    reportController.getReportsByDepartment(req, res, department);
  });
});

// Route for downloading a report
router.get('/download/:file', reportController.downloadReport);

export default router;
