// const xlsx = require('xlsx');
// const path = require('path');

// const readExcelData = () => {
//   const filePath = path.join(__dirname, 'DATASET_FUNFACT.xlsx');
//   const workbook = xlsx.readFile(filePath);
  
//   const sheetFunFact = workbook.Sheets['Fun Fact'];
//   const sheetSejarah = workbook.Sheets['Sejarah'];

//   // Mengonversi data dari sheet pertama (Fun Fact)
//   const funFacts = xlsx.utils.sheet_to_json(sheetFunFact);
  
//   // Mengonversi data dari sheet kedua (Sejarah)
//   const sejarahData = xlsx.utils.sheet_to_json(sheetSejarah, { header: 1 });

//   // Menyusun sejarah rempah dari sheet Sejarah
//   const sejarahRempah = {};
//   for (let i = 1; i < sejarahData.length; i++) {
//     const spiceName = sejarahData[i][0].trim();
//     const sejarahText = sejarahData[i][1];
//     sejarahRempah[spiceName.toLowerCase()] = sejarahText;
//   }

//   // Menggabungkan fun fact dengan sejarah rempah dan gambar
//   funFacts.forEach(item => {
//     const spiceName = item['Type Of Spices'].trim().toLowerCase();
//     item['Sejarah'] = sejarahRempah[spiceName] || 'Tidak ditemukan sejarah';
//     item['Gambar'] = `/images/${spiceName.replace(/\s+/g, '_')}.jpg`;
//   });

//   return funFacts;
// };

// module.exports = readExcelData;



// const xlsx = require('xlsx');
// const path = require('path');

// let spicesData = [];

// const loadExcelData = () => {
//   const filePath = path.join(__dirname, 'DATASET_FUNFACT.xlsx');
//   const workbook = xlsx.readFile(filePath);
//   const sheetFunFact = workbook.Sheets['Fun Fact'];
//   const sheetSejarah = workbook.Sheets['Sejarah'];
  
//   const funFacts = xlsx.utils.sheet_to_json(sheetFunFact);
//   const sejarahData = xlsx.utils.sheet_to_json(sheetSejarah, { header: 1 });

//   const sejarahRempah = {};
//   for (let i = 1; i < sejarahData.length; i++) {
//     const spiceName = sejarahData[i][0].trim();
//     const sejarahText = sejarahData[i][1];
//     sejarahRempah[spiceName.toLowerCase()] = sejarahText;
//   }

//   spicesData = funFacts.map(item => {
//     const spiceName = item['Type Of Spices'].trim().toLowerCase();
//     return {
//       id: item['No'],
//       type: item['Type Of Spices'],
//       funfact1: item['Funfact 1'],
//       funfact2: item['Funfact 2'],
//       sejarah: sejarahRempah[spiceName] || 'Tidak ditemukan sejarah',
//       gambar: `/images/${spiceName.replace(/\s+/g, '_')}.jpg`
//     };
//   });
// };

// const getSpices = () => spicesData;

// const getSpiceById = id => spicesData.find(spice => spice.id === id);

// const addSpice = (newSpice) => {
//   spicesData.push(newSpice);
//   return newSpice;
// };

// const updateSpice = (id, updatedSpice) => {
//   const index = spicesData.findIndex(spice => spice.id === id);
//   if (index !== -1) {
//     spicesData[index] = { ...spicesData[index], ...updatedSpice };
//     return spicesData[index];
//   }
//   return null;
// };

// const deleteSpice = (id) => {
//   const index = spicesData.findIndex(spice => spice.id === id);
//   if (index !== -1) {
//     return spicesData.splice(index, 1)[0];
//   }
//   return null;
// };

// module.exports = {
//   loadExcelData,
//   getSpices,
//   getSpiceById,
//   addSpice,
//   updateSpice,
//   deleteSpice
// };


// const xlsx = require('xlsx');
// const path = require('path');

// const readExcelData = () => {
//   const filePath = path.join(__dirname, 'DATASET_FUNFACT.xlsx');

//   const workbook = xlsx.readFile(filePath);
//   const sheet1 = workbook.Sheets['Fun Fact'];
//   const sheet2 = workbook.Sheets['Sejarah'];

//   const data1 = xlsx.utils.sheet_to_json(sheet1);
//   const data2 = xlsx.utils.sheet_to_json(sheet2, { header: 1 });

//   const sejarahRempah = {};
//   for (let i = 1; i < data2.length; i++) {
//     const spiceName = data2[i][0]?.trim();
//     const sejarahText = data2[i][1];
//     sejarahRempah[spiceName?.toLowerCase()] = sejarahText;
//   }

//   data1.forEach(row1 => {
//     const spiceName = row1['Type Of Spices']?.trim().toLowerCase();
//     const sejarah = sejarahRempah[spiceName];
//     row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
//   });

//   return data1;
// };

// module.exports = readExcelData;


// const xlsx = require('xlsx');
// const path = require('path');

// const readExcelData = () => {
//   const filePath = path.join(__dirname, '..', 'DATASET_FUNFACT.xlsx');
//   console.log('Reading Excel file from:', filePath); // Logging lokasi file yang dibaca

//   const workbook = xlsx.readFile(filePath);
//   const sheet1 = workbook.Sheets['Fun Fact'];
//   const sheet2 = workbook.Sheets['Sejarah'];

//   const data1 = xlsx.utils.sheet_to_json(sheet1);
//   const data2 = xlsx.utils.sheet_to_json(sheet2, { header: 1 });

//   console.log('Data from Fun Fact sheet:', data1); // Logging data dari sheet pertama
//   console.log('Data from Sejarah sheet:', data2); // Logging data dari sheet kedua

//   const sejarahRempah = {};
//   for (let i = 1; i < data2.length; i++) {
//     const spiceName = data2[i][0]?.trim();
//     const sejarahText = data2[i][1];
//     sejarahRempah[spiceName?.toLowerCase()] = sejarahText;
//   }

//   data1.forEach(row1 => {
//     const spiceName = row1['Type Of Spices']?.trim().toLowerCase();
//     const sejarah = sejarahRempah[spiceName];
//     row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
//   });

//   console.log('Final data with Sejarah:', data1); // Logging data final setelah diproses
//   return data1;
// };

// module.exports = readExcelData;


// const xlsx = require('xlsx');
// const path = require('path');

// // Fungsi untuk membaca file DATASET_FUNFACT.xlsx
// const readDatasetFunFact = () => {
//   const filePath = path.join(__dirname, '..', 'DATASET_FUNFACT_BARU.xlsx');
//   console.log('Reading Excel file DATASET_FUNFACT_BARU from:', filePath);

//   const workbook = xlsx.readFile(filePath);
//   const sheet1 = workbook.Sheets['Fun Fact'];
//   const sheet2 = workbook.Sheets['Sejarah'];
//   const sheet3 = workbook.Sheets['Manfaat'];

//   const funFactData = xlsx.utils.sheet_to_json(sheet1);
//   const sejarahData = xlsx.utils.sheet_to_json(sheet2, { header: 1 });
//   const manfaatData = xlsx.utils.sheet_to_json(sheet3, { header: 1 });

//   const sejarahRempah = {};
//   for (let i = 1; i < sejarahData.length; i++) {
//     const spiceName = sejarahData[i][0]?.trim();
//     const sejarahText = sejarahData[i][1];
//     sejarahRempah[spiceName?.toLowerCase()] = sejarahText;
//   }

//   funFactData.forEach(row1 => {
//     const spiceName = row1['Type Of Spices']?.trim().toLowerCase();
//     const sejarah = sejarahRempah[spiceName];
//     row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
//   });

//   // Membuat struktur manfaat menjadi dictionary
//   const manfaatDict = manfaatData.reduce((acc, row) => {
//     const spiceName = row[0]?.trim().toLowerCase();
//     const benefits = row[1];
//     acc[spiceName] = { benefits };
//     return acc;
//   }, {});

//   console.log('Manfaat Data:', manfaatDict);
//   return { funFactData, manfaatDict };
// };


// // Fungsi utama untuk menggabungkan data dari kedua dataset
// const combineData = () => {
//   const { funFactData, manfaatDict } = readDatasetFunFact();

//   funFactData.forEach(row => {
//     const spiceName = row['Type Of Spices']?.trim().toLowerCase();
//     const additionalInfo = manfaatDict[spiceName];

//     row['Manfaat'] = additionalInfo ? additionalInfo.benefits : '';
//   });

//   console.log('Final Combined Data with Manfaat:', funFactData);
//   return funFactData;
// };

// // Eksekusi fungsi utama
// module.exports = { combineData };



const xlsx = require('xlsx');
const path = require('path');

// Fungsi untuk membaca file DATASET_FUNFACT_BARU.xlsx
const readDatasetFunFact = () => {
  const filePath = path.join(__dirname, '..', 'DATASET_FUNFACT_BARU.xlsx');
  console.log('Reading Excel file DATASET_FUNFACT_BARU from:', filePath);

  // Membaca workbook dari file Excel
  const workbook = xlsx.readFile(filePath);

  // Mengambil data dari setiap sheet
  const sheet1 = workbook.Sheets['Fun Fact'];
  const sheet2 = workbook.Sheets['Sejarah'];
  const sheet3 = workbook.Sheets['Manfaat'];

  // Mengonversi data dari setiap sheet menjadi JSON
  const funFactData = xlsx.utils.sheet_to_json(sheet1);
  const sejarahData = xlsx.utils.sheet_to_json(sheet2, { header: 1 });
  const manfaatData = xlsx.utils.sheet_to_json(sheet3, { header: 1 });

  // Membuat struktur sejarah menjadi dictionary berdasarkan nama rempah
  const sejarahRempah = {};
  for (let i = 1; i < sejarahData.length; i++) {
    const spiceName = sejarahData[i][0]?.trim().toLowerCase(); // Memastikan nama rempah aman
    const sejarahText = sejarahData[i][1];
    if (spiceName && sejarahText) {
      sejarahRempah[spiceName] = sejarahText;
    }
  }

  // Menambahkan informasi sejarah pada funFactData
  funFactData.forEach(row1 => {
    const spiceName = row1['Rempah']?.trim().toLowerCase();
    const sejarah = sejarahRempah[spiceName];
    row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
  });

  // Membuat struktur manfaat menjadi dictionary berdasarkan nama rempah
  const manfaatDict = manfaatData.reduce((acc, row) => {
    const spiceName = row[0]?.trim().toLowerCase(); // Memastikan nama rempah aman
    const benefits = row[1];
    if (spiceName && benefits) {
      acc[spiceName] = { benefits };
    }
    return acc;
  }, {});

  // Debugging: Menampilkan manfaat untuk setiap rempah
  console.log('Manfaat Dictionary:', manfaatDict);

  return { funFactData, manfaatDict };
};

// Fungsi untuk menggabungkan data dari funFactData dan manfaatDict
// const combineData = () => {
//   const { funFactData, manfaatDict } = readDatasetFunFact();

//   // Menggabungkan data funFact dengan manfaat
//   funFactData.forEach(row => {
//     const spiceName = row['Rempah']?.trim().toLowerCase();
//     const additionalInfo = manfaatDict[spiceName];

//     // Debugging: Memeriksa apakah manfaat ditemukan
//     console.log(`Mencoba menambahkan manfaat untuk ${row['Rempah']}:`, additionalInfo);

//     row['Manfaat'] = additionalInfo ? additionalInfo.benefits : 'Tidak ditemukan manfaat';
//   });

//   console.log('Final Combined Data:', funFactData);
//   return funFactData;
// };

const combineData = () => {
  const { funFactData, manfaatDict } = readDatasetFunFact();

  // Menambahkan URL gambar untuk setiap rempah
  const baseImageUrl = 'https://storage.googleapis.com/capstoneproject-bucket/images/'; // Gantilah dengan URL base gambar bucket yang benar

  // Menggabungkan data funFact dengan manfaat
  funFactData.forEach(row => {
    const spiceName = row['Rempah']?.trim().toLowerCase();
    const additionalInfo = manfaatDict[spiceName];

    // Debugging: Memeriksa apakah manfaat ditemukan
    console.log(`Mencoba menambahkan manfaat untuk ${row['Rempah']}:`, additionalInfo);

    row['Manfaat'] = additionalInfo ? additionalInfo.benefits : 'Tidak ditemukan manfaat';

    // Menambahkan URL gambar
    const imageUrl = `${baseImageUrl}${spiceName}.jpg`; // Asumsi gambar diberi nama sesuai dengan rempah
    row['ImageURL'] = imageUrl;
  });

  console.log('Final Combined Data:', funFactData);
  return funFactData;
};

// Ekspor fungsi utama untuk digunakan di tempat lain
module.exports = { combineData };





