// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Myoui Mina"];

// const [salam, satu, dua, nama] = perkenalan;

// untuk skip items, berikan koma kosong
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//swap items
// let a = 1;
// let b = 2;
// console.log(a);

// [a, b] = [b, a];
// console.log(a);

// return value pada function bisa langsung dipecah
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Desctructuring Object
// const mahasiswa = {
//   nama: "Myoui Mina",
//   umur: 24,
// };

// nama variabel harus sama dengan nama properti pada object
// const { nama, umur } = mahasiswa;
// console.log(nama);

//Assignment tanpa deklarasi Ob
// ({ nama, umur } = { nama: "Myoui Mina", umur: 24 });
// console.log(nama);

// Assign ke variabel baru
// const mahasiswa = {
//   nama: "Myoui Mina",
//   umur: 24,
// };

// const { nama: n, umur: u } = mahasiswa;
// console.log(n);

// Memberikan default value
// const mahasiswa = {
//   nama: "Myoui Mina",
//   umur: 24,
//   email: "mina@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mahasiswa;
// console.log(email);

// Memberi nilai default dan assign ke variabel baru
// const mahasiswa = {
//   nama: "Myoui Mina",
//   umur: 24,
//   email: "mina@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mahasiswa;
// console.log(e);

// Rest parameter
// const mahasiswa = {
//   nama: "Myoui Mina",
//   umur: 24,
//   email: "mina@gmail.com",
// };

// const { nama, ...values } = mahasiswa;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mahasiswa = {
  id: 123,
  nama: "Myoui Mina",
  umur: 24,
  email: "mina@gmail.com",
};

// hanya mengambil field id
function getId({ id }) {
  return id;
}

console.log(getId(mahasiswa));
