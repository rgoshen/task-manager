const express = require("express");
const app = express();
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}...`);
});
