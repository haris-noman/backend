import express, { json } from 'express';
import userRouters from './routes/userRoutes.js';
const app = express();

app.use(json());

// Routes
app.use('/api/users', userRouters);

// Global Error Handler
app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json({ success: false, message: message || 'Internal Server Error' });
});

export default app;
