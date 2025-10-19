import mongoose from 'mongoose';

const notesController = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

export default notesController;
