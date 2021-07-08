// Destructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const hasil = kalkulasi(2, 3);
// console.log(hasil);

// const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// Dengan menggunakan objek, urutan tidak perlu diperhatikan
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
// kita memecah argumen agar tidak perlu pake . ketika menggunakan nilainya
const mahasiswa = {
  nama: "Myoui Mina",
  umur: 33,
  email: "mina@gmail.com",
  nilai: {
    tugas: 85,
    uts: 80,
    uas: 90,
  },
};

function cetak({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Dan nilai uas saya adalah ${uas}`;
}

console.log(cetak(mahasiswa));
