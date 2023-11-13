// server/models/Report.js

import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  title: String,
  file: String,
  department: String,
  timestamp: { type: Date, default: Date.now },
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
