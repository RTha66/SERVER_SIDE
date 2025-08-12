const express = require('express');
const app = express();
const PORT = 3000;

const pRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/api', pRoutes);

// Start server

app.listen(PORT, () => {

          console.log(`🚀 Server is running at http://localhost:${PORT}`);

});