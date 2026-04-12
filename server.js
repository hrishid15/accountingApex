const express = require('express');
const path    = require('path');

const app  = express();
const PORT = 3001;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname)));

async function anthropicPost(apiKey, body, res) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

app.post('/generate', async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) return res.status(400).json({ error: 'Missing API key' });
  await anthropicPost(apiKey, req.body, res);
});

app.post('/agent', async (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) return res.status(400).json({ error: 'Missing API key' });
  await anthropicPost(apiKey, req.body, res);
});

app.listen(PORT, () => {
  console.log(`\n  APEX server running at http://localhost:${PORT}`);
  console.log(`  World viewer: http://localhost:${PORT}/`);
  console.log(`  Agent runner: http://localhost:${PORT}/agent.html\n`);
});
