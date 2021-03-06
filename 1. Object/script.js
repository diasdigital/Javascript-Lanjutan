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

// ============================================================

// 2. Function Declaration

// Kelemahan teknik ini adalah
// kita memasukan template kedalam memori
// setiap kali membuat objek.
// Bisa ditangani dengan membuat objek baru
// untuk menyimpan methodnya, lalu dipanggil.
// Optimal untuk memori, namun tidak efektif

// const methodPlayer = {
//   makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },

//   main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },

//   tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//   }
// }

// function Player(nama, energi) {
//   let player = {};
//   player.nama = nama;
//   player.energi = energi;
//   player.makan = methodPlayer.makan;
//   player.main = methodPlayer.main;
//   player.tidur = methodPlayer.tidur;

//   return player;
// }

// let dias = Player("Dias", 10);
// let mina = Player("Mina", 20);

// ============================================================

// 3. Constructor Function
// keyword new

// function Player(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };
// }

// let dias = new Player("Dias", 10);
// let mina = new Player("Mina", 20);

// ============================================================

// 4. Prototype

// function Player(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Player.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// Player.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// };

// Player.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur!`;
// };

// let dias = new Player("Dias", 10);
// let mina = new Player("Mina", 20);

// 5. Prototype (penulisan versi class)

class Player {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi += jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let dias = new Player("Dias", 10);
let mina = new Player("Mina", 20);
