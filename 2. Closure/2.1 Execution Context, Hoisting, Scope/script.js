// 2.1 EXECUTION CONTEXT, HOISTING, AND SCOPE

// console.log(nama);
// var nama = 'Mina';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = 'Mina'
// var umur = 24;


// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var nama = 'Mina';
// var username = 'twicetagram';

// function cetakURL() {
//     console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('diasdigital'));













// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c')
//         }

//         c();
//     }

//     b();
// }

// a();




function satu() {
    var nama = 'Dias';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Mina';
satu();
dua('Sana');
console.log(nama);

