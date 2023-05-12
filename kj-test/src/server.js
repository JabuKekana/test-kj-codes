import express from 'express';

const app = express();

app.get('/api/case-studies', async (req, res) => {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
