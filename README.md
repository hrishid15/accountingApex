# Accounting APEX — World Viewer

A sandbox environment viewer for benchmarking RL agents on accounting tasks.
Pick an archetype, generate a world with Claude, browse the files.

## Setup

**1. Install dependencies**
```
npm install
```

**2. Start the server**
```
npm start
```

**3. Open the app**
```
http://localhost:3001
```

**4. Get an API key**
Go to console.anthropic.com → API Keys → create a new key.
Paste it when the app prompts you. Costs ~$0.01–0.02 per world generated.

## File structure

| File | Purpose |
|------|---------|
| `server.js` | Express proxy — forwards generation requests to Anthropic API |
| `index.html` | App shell |
| `styles.css` | All styles |
| `data.js` | Static world data (Pixel & Pine fallback) + archetype definitions + generation prompt |
| `app.js` | UI rendering + generation logic |

## Upgrading to v3

To add more world archetypes or change the generation schema, edit `data.js` only.
`app.js` and `styles.css` don't need to change.
