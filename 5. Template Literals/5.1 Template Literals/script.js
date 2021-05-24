// Template Literals / Template Strings
const nama = "Mina";
const umur = "24";
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);
// jika kita tidak menggunakan backtick, maka akan sepanjang ini
console.log("Halo, nama saya " + nama + ", dan saya " + umur + " tahun");
// hasilnya akan sama saja sih

// Embedded Expressions
// memasukan ekspresi, seperti penjumlahan sederhana, alert, atau ternary
console.log(`${1 + 1}`);
console.log(`${alert("Halo")}. Ini adalah baris yang memberi alert, ada tertulis undefined di depannya`);
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const siswa = {
  nama: "Myoui Mina",
  umur: 24,
  nik: 123,
  email: "mina@gmail.com",
};

const el = `<div class="siswa">
  <h2>${siswa.nama}</h2>
  <span class="nik">${siswa.nik}</span>
</div>`;

console.log(el);
