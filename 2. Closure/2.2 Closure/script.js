// function init() {
//     let nama = 'Mina'; // local variabel
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }

// init();

// lexical scope adalah ketika sebuah function didalam function mencari sebuah variabel di parent nya
// ini juga membuat function itu menjadi closure

// ==================================================

// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama("Sana");

// ini disebut dengan factory function
// jadi kita bikin function yg mengembalikan sebuah function lain
// lalu kita simpan itu kedalam sebuah variabel
// karena kita simpan di variabel, function tersebut bisa anonymous

// ==================================================
// Contoh Factory Function

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Nayeon");
// selamatMalam("Jihyo");

// kita memanggil function ucapkanSalam, mengirim argumen yaitu pagi, siang, atau malam
// function tersebut akan mengembalikan sebuah function lagi yang kita simpan kedalam variabel
// ketika kita memanggil function yang sudah dimasukan kedalam variabel tadi, kita mengirim argumen berupa nama
// sehingga nama akan terisi oleh parameternya inner function
// sedangkan waktu akan terisi oleh parameternya outer function dengan lexical scope

// ==================================================
// dengan closure, kita bisa membuat sebuah "private method/variabel"

// ini bikin function dengan cara Function Expression
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100; // ini tidak akan mengganggu functionnya

console.log(add());
console.log(add());
