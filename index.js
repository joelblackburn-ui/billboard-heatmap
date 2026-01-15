const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Root route serves the heatmap
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'heatmap.html'));
});

app.listen(PORT, () => {
  console.log(`Billboard heatmap viewer running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the heatmap`);
});
