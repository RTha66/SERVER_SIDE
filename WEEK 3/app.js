require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

// ดึงสินค้าทั้งหมด
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send('เกิดข้อผิดพลาด');
    res.json(results);
  });
});

// ดึงสินค้าตาม ID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).send('เกิดข้อผิดพลาด');
    res.json(results[0] || {});
  });
});

// ค้นหาสินค้าตามคำค้น
app.get('/products/search/:keyword', (req, res) => {
  const keyword = `%${req.params.keyword}%`;
  const sql = 'SELECT * FROM products WHERE name LIKE ?';
  db.query(sql, [keyword], (err, results) => {
    if (err) return res.status(500).send('เกิดข้อผิดพลาด');
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
