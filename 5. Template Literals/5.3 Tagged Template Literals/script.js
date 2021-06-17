// // Tagged Templates
// const nama = "Myoui Mina";
// const umur = 24;

// // tiga titik itu disebut rest parameter
// function coba(strings, ...values) {
//   // let hasil = "";
//   // strings.forEach((str, i) => {
//   //   hasil += `${str}${values[i] || ""}`;
//   // });
//   // return hasil;

//   return strings.reduce((hasil, str, i) => `${hasil}${str}${values[i] || ""}`, "");
// }

// const str = coba`Hi, nama masa ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// ==============================
// Contoh penerapan
// Highlight

const nama = "Myoui Mina";
const umur = 24;
const email = "penguin@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce((hasil, str, i) => `${hasil}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Hi, nama masa ${nama}, umur saya ${umur} tahun. Email saya adalah ${email}`;
document.body.innerHTML = str;
