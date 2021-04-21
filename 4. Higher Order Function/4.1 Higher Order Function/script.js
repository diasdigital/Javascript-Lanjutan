// Higher Order Function
// FUnction yang beroperasi dengan function lain
// Baik sebagai argumen maupun return value

// function kerjakanTugas(mapel, selesai) {
//     console.log(`Mulai mengerjakan tugas ${mapel}...`);
//     selesai();
// }

// function selesai() {
//     alert('Selesai mengerjakan tugas!');
// }

// kerjakanTugas('Matematika', selesai);

// function kerjakanTugas merupakan higher order function
// selesai merupakan callback, yaitu function yang ada di dalam

// ==============================

// setTimeout(function() {
//     console.log('Hello World');
// }, 1000);


// const tombol = document.querySelector('.submit');

// tombol.addEventListener('click', function() {
//     console.log('Tombol ditekan!');
// });

// kedua contoh diatas adalah higher order function
// karena mereka memiliki callback berupa function didalamnya

// ==============================

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");

// selamatPagi("Nayeon");

// ucapkanSalam merupakan higher order function
// karena return valuenya merupakan function

// ==============================

// fungsi dari HOF ini adalah untuk menyembunyikan kompleksitas program

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for diatas akan mencetak i sebanyak 10 kali
// tapi bagaimana jika kita ingin i dicetak bukan 10 kali?
// kita bikin dia kedalam function

// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
// }

// repeatLog(5);

// tinggal masukan mau dicetak berapa kali
// dengan menggunakan function, ini disebut abstraksi
// tapi bagaimana kalau aksi yang dilakukan bukan console.log?

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(20, console.log);
// repeat(3, alert);

// dengan ini, kita bisa membuatnya lebih efektif

// ==============================

// Contoh higher order function
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()