import mongoose from 'mongoose';

/**
 * Connect to MongoDB database (MongoDB Atlas or local MongoDB)
 * Uses the MONGODB_URI from environment variables
 */
const connectDB = async () => {
  try {
    // Check if MONGODB_URI is provided
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📚 Database: ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    console.error('Please check your MONGODB_URI in the .env file');
    process.exit(1);
  }
};

export default connectDB;


