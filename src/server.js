// const express = require('express');
// const { combineData } = require('./app');  // Pastikan nama fungsi yang diimpor sesuai

// const app = express();
// const PORT = 3000;

// // Endpoint untuk membaca data dan mengembalikannya sebagai JSON
// app.get('/data', (req, res) => {
//   try {
//     const combinedData = combineData();  // Panggil combineData() setelah impor yang benar
//     res.json(combinedData);  // Kirimkan data dalam format JSON
//   } catch (error) {
//     res.status(500).send('Error reading data: ' + error.message);
//   }
// });

// // Menjalankan server pada port 3000
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const { combineData } = require('./app');

const app = express();
const port = 8080;

app.get('/data', async (req, res) => {
  try {
    const data = await combineData();
    res.json(data); // Menampilkan data dalam bentuk JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





