import './loadEnv.js';
import config from './config/config.js'
import app from './server/express.js'
import dns from 'dns';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

dns.setServers(['8.8.8.8'])

mongoose.connect(config.mongoUri)
.then(() => console.log('Connected to the database!'))
.catch((err) => {
    console.error('Unable to connect to database: ', err.message)
    process.exit(1)
})

// mongoose.Promise = global.Promise
// mongoose.connect(config.mongoUri, {

// })
// .then(() => {
//     console.log("Connected to the database!");
// })

// mongoose.connection.on('error', () => {
//     throw new Error(`unable to connect to database: ${config.mongoUri}`)
// })
app.get("/", (req, res) => {
    res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})


// import config from './config/config.js'
// import app from './server/express.js'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import cors from 'cors'

// dotenv.config();

// mongoose.Promise = global.Promise
// mongoose.connect(config.mongoUri, {

// })
// .then(() => {
//     console.log("Connected to the database!");
// })

// mongoose.connection.on('error', () => {
//     throw new Error(`unable to connect to database: ${config.mongoUri}`)
// })
// app.get('/', (req, res) => {
//     res.json({ message: "Welcome to Temp Rate Agency!!"});
// });

// app.listen(config.port, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.info('Server started on port %s.', config.port)
// })



// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

// import bookRoutes from './routes/books.routes.js';
// import userRoutes from './routes/users.routes.js';
// import authRoutes from './routes/auth.routes.js';
// import borrowingRoutes from './routes/borrowings.routes.js';

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // API routes
// app.use('/api/books', bookRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/borrowings', borrowingRoutes);

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });