const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const productRoutes = require('./routes/productRoutes');
const webRoutes = require('./routes/webRoutes');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Products API',
      version: '1.0.0',
      description: 'API information for Product service',
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ['./routes/*.js'], // ไฟล์ที่มี JSDoc swagger comments
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/', webRoutes);
app.use('/api', productRoutes);

// ใช้งาน Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`📚 API documentation at http://localhost:${PORT}/api-docs`);
});
