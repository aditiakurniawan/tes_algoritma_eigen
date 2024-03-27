const teks = "NEGIE1";

// Split the string into two parts
const bagian = teks.split(/(\d+)/);
const huruf = bagian[0];
const angka = bagian[1];

// Reverse the order of the alphabetic characters
const urutanHurufTerbalik = huruf.split("").reverse().join("");

// Combine the two parts back into a single string
const hasil = urutanHurufTerbalik + angka;

console.log(hasil); // Output: "EIGEN1"