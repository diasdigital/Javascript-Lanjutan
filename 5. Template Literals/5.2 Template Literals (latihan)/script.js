// 1. HTML Fragments
// const siswa = {
//   nama: "Myoui Mina",
//   umur: 24,
//   nik: 32145600,
//   email: "mina@gmail.com",
// };

// const el = `<div class="siswa">
//   <h2>${siswa.nama}</h2>
//   <span class="nik">${siswa.nik}</span>
// </div>`;

// ========================================

// 2. Looping
// const siswa = [
//   {
//     nama: "Myoui Mina",
//     email: "mina@gmail.com",
//   },
//   {
//     nama: "Muhammad Dias",
//     email: "dias@gmail.com",
//   },
//   {
//     nama: "Minatozaki Sana",
//     email: "sana@gmail.com",
//   },
// ];

// const el = `<div class="siswa">
// ${siswa
//   .map(
//     (s) => `<ul>
// <li>${s.nama}</li>
// <li>${s.email}</li>
// </ul>`
//   )
//   .join("")}
// </div>`;

// ========================================

// 3. Conditionals
// ternary
// const lagu = {
//   judul: "All Falls Down",
//   artist: "Alan Walker",
//   feat: "Noah Cyrus",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.artist}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// ========================================

// 4. Nested
// HTML Fragments bersarang

const siswa = {
  nama: "Muhammad Dias",
  semester: 4,
  mataPelajaran: ["Rekayasa Perangkat Lunak", "Pemrogramman Berbasis Objek", "Perancangan Perangkat Lunak"],
};

function cetakMataPelajaran(mataPelajaran) {
  return `
  <ol>
    ${mataPelajaran.map((mapel) => `<li>${mapel}</li>`).join("")}
  </ol>
  `;
}

const el = `<div class="siswa">
  <h2>${siswa.nama}</h2>
  <span class="semester">Semester ${siswa.semester}</span>
  <h4>Mata Pelajaran</h4>
  ${cetakMataPelajaran(siswa.mataPelajaran)}
</div>`;

document.body.innerHTML = el;
