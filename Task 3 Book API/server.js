import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Book API 📚');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
