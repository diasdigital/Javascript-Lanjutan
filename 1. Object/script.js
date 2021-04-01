// Cara untuk membuat Object pada javascript

// 1. Object Literal
// let player1 = {
//   nama: "Dias",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let player2 = {
//   nama: "Mina",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
function Player(nama, energi) {
  let player = {};
  player.nama = nama;
  player.energi = energi;

  player.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  player.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };

  return player;
}

let dias = Player("Dias", 10);
let mina = Player("Mina", 20);
