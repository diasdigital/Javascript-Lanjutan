function init() {
    let nama = 'Mina'; // local variabel
    function tampilNama() {
        console.log(nama);
    }
    tampilNama();
}

init();

// lexical scope adalah ketika sebuah function didalam function mencari sebuah variabel di parent nya
// ini juga membuat function itu menjadi closure