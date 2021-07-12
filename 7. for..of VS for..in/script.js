// for..of

// 3 cara melooping array
// const mhs = ["Mina", "Sana", "Momo"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "Minatozaki";
// for (const n of nama) {
//   console.log(n);
// }

// contoh lain pake array
// const mhs = ["Mina", "Sana", "Momo"];
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa nomor ${i + 1}`));

// for..of tidak punya index, tapi kita bisa pake .entries agar dapet indexnya
// lalu destructure jadi i dan m
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa nomor ${i + 1}`);
// }

// Sekarang kita coba kalau NodeList
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));

// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// kita sekarang pake arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (n of arguments) {
//     jumlah += n;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// ====================
// for..in
const mhs = {
  nama: "Myoui Mina",
  umur: 24,
  email: "mina@gmail.com",
};

for (m in mhs) {
  console.log(m);
}
for (m in mhs) {
  console.log(mhs[m]);
}
