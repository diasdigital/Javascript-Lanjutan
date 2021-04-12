// Function Expression

// const haloNama = function (nama) {
//   return `Halo ${nama}`;
// };
// console.log(haloNama("Momo"));

// ==============================

// Arrow Function, dengan 1 parameter

// const haloNama = (nama) => {return `Halo ${nama}`;}
// console.log(haloNama("Momo"));

// ------------------------------
// Arrow Function, dengan >1 parameter

// const haloNama = (nama, waktu) => {
//   return `Halo ${nama}, Selamat ${waktu}`;
// }
// console.log(haloNama("Momo", 'Malam'));

// ------------------------------
// Arrow Function, dengan 1 parameter yang ringkas
// disebut Implisit Return

// const haloNama = nama => `Halo ${nama}`;
// console.log(haloNama("Momo"));

// ------------------------------
// Arrow Function, tanpa parameter
// const haloDunia = () => `Hello World!`;
// console.log(haloDunia());

// ==============================
// map pada array

let siswa = ['Dahyun', 'Chaeyoung', 'Tzuyu'];

// let jumlahHuruf = siswa.map(function(nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// ------------------------------
// map pada array dengan arrow function

// let jumlahHuruf = siswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// ------------------------------
// map pada array dengan arrow function dan return sebagai objek

// let jumlahHuruf = siswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// Tip!
// kalau ingin mengembalikan objek yang memiliki properti dan nilai yang sama
// bisa dengan hanya menuliskan salah satunya
// pada kasus ini, nama memiliki nilai dan properti yang sama

let jumlahHuruf = siswa.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);