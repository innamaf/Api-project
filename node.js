
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send("Hello from Batool Fatima's new API! 🎉");
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
