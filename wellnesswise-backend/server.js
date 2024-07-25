import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/WellnessWise')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// Simple API route for testing
app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
  });
  //user route
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});