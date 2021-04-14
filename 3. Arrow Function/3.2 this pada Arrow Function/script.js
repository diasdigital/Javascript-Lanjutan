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

const Siswa = function () {
  this.nama = 'Jeongyeon';
  this.umur = 25;
  this.sayHello = () => {
    console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur}`)
  }
}
const jeongyeon = new Siswa;
