const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

// Connection options with increased timeouts
const connectionOptions = {
  serverSelectionTimeoutMS: 30000, // Increase from default 10000ms to 30000ms
  socketTimeoutMS: 45000,          // How long sockets to MongoDB stay open
  connectTimeoutMS: 30000,         // How long to wait for initial connection
  maxPoolSize: 50,                 // Maintain up to 50 socket connections
  family: 4,                       // Use IPv4, skip trying IPv6
  retryWrites: true,
  retryReads: true
};

// Connection with error handling
mongoose.connect(mongoUrl, connectionOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error:", e.message);
  });

// Handle connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Handle application termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

module.exports = mongoose;