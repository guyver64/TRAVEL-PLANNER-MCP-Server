import express, { Request, Response } from 'express';
const app = express();

app.get('/health', (req: Request, res: Response) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Healthcheck running on port ${PORT}`);
});
