const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter
// kita akan mencari angka yang >= 3
// kita coba pake for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// kita coba pake filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);

// ayo kita coba lebih compact lagi
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// ==============================
// Map
// untuk memetakan array
// jadi tiap elemen akan dimasukan kedalam sebuah function
// coba kita kalikan 2 sebuah elemen dalam array itu
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// ==============================
// Reduce
// Untuk melakukan sesuatu kepada semua elemen arraynya
// kita akan jumlahkan seluruh elemen pada array
// reduce memiliki 2 argumen penting

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// accumulator berfungsi untuk menyimpan nilai selama proses berjalan
// current value berfungsi untuk menyimpan elemen array yg sedang di proses
// jadi acc mah jumlah2 nya, cv mah ganti2 nilai sambil dia geser ke elemen selanjutnya
// ada argumen ketiga yang bisa dipake, berfungsi sebagai penentu nilai awal (default nya 0)

// ==============================

// Method Chaining
// jadi bisa masukin secara beruntun
// coba kita cari angka > 5
// lalu kita kali 3
// dan kita jumlahkan

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
