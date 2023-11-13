// server/config/db.js

import mongoose  from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://abuh05:abuh05@mofreviewed.ctcfhbz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
