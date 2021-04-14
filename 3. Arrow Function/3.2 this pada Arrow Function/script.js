// Konsep this pada Arrow Function

// Constructor Function
// const Siswa = function () {
//   this.nama = 'Jeongyeon';
//   this.umur = 25;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur}`)
//   }
// }
// const jeongyeon = new Siswa;

// ==============================
// Arrow Function

// const Siswa = function () {
//   this.nama = 'Jeongyeon';
//   this.umur = 25;
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//   }
// }
// const jeongyeon = new Siswa;

// ------------------------------
// Object Literal

const siswa1 = {
  nama: "Jihyo",
  umur: 24,
  sayHello: () => {
    console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  },
};

// Catatan
// Arrow Function tidak memiliki this
// jadi kalau di functionnya pake this, dia bakal nyari ke lexical scopenya buat variabel yang namanya this juga
// kan di object literal gak pake this
// jadi dia nyari ke atas lagi, sampai ke window

// beda kalau kita bikin constructor function
// ketika salah satu method yang menggunakan arrow function tidak bisa menemukan this yang dipanggil
// maka ia akan mencari ke atas
// dan di atas, alias di constructor functionnya, ada variabel this
