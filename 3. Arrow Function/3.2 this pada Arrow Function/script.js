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

// const siswa1 = {
//   nama: "Jihyo",
//   umur: 24,
//   sayHello: () => {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   },
// };

// Catatan
// Arrow Function tidak memiliki this
// jadi kalau di functionnya pake this, dia bakal nyari ke lexical scopenya buat variabel yang namanya this juga
// kan di object literal gak pake this
// jadi dia nyari ke atas lagi, sampai ke window

// beda kalau kita bikin constructor function
// ketika salah satu method yang menggunakan arrow function tidak bisa menemukan this yang dipanggil
// maka ia akan mencari ke atas
// dan di atas, alias di constructor functionnya, ada variabel this

// ==============================

// const Siswa = function () {
//   this.nama = "Jeongyeon";
//   this.umur = 25;
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };

//   // setInterval(function () {
//   //   console.log(this.umur++);
//   // }, 1000);

//   // penjelasan contoh diatas
//   // jika, misalnya, kita menggunakan setInterval
//   // lalu kita menggunakan function declaration
//   // maka function itu akan dihoisting
//   // sehingga this yang dimaksud ada di global
//   // cara mengatasinya yaitu dengan arrow function

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 1000);

//   // karena arrow function tidak memiliki konsep this
//   // maka ia akan mencari ke lexical scopenya
//   // bukan ke global
// };
// const jeongyeon = new Siswa();

//
//
//
//
//
// ==============================
// Contoh penggunakan real dari arrow function
// dengan DOM selection

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  // setTimeout(function () {
  //   // this.classList.toggle("caption");
  //   console.log(this);
  // }, 600);

  // sama seperti yang setInterval
  // function tersebut akan dihoisting
  // sehingga this yang dimaksud adalah window di global
  // seharusnya saat di console.log(this), dia berisi elemen box
  // jadi kita akan menggunakan arrow function

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
