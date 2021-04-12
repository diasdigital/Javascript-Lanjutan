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

function init() {
    return function(nama) {
        console.log(nama);
    }
}

let panggilNama = init();
panggilNama('Sana');

// ini disebut dengan function factory
// jadi kita bikin function yg mengembalikan sebuah function lain
// lalu kita simpan itu kedalam sebuah variabel
// karena kita simpan di variabel, function tersebut bisa anonymous