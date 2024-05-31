const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello this is lab4'));
git add app.js
git commit -m "change message"
app.listen(port);
git push
console.log(`App running on http://localhost:${port}`);
