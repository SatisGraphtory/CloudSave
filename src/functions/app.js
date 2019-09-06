import express from 'express';
import cors from 'cors';
import route from './routes/firebase';
import route2 from './routes/cloudStorage';
import methodOverride from 'method-override';


const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
// app.use('/api', route);
app.use('/sg', route2);
app.use(methodOverride());
app.use((err, req, res, next) => {
  res.status(400).json({
    error: err.message });
});

export default app;