// Cara untuk membuat Object pada javascript

// 1. Object Literal
let player1 = {
  nama: "Dias",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

let player2 = {
  nama: "Mina",
  energi: 20,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};
