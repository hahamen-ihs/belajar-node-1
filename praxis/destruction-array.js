//membongkar nilai dari object atau array kedalam variabel terpisah

//let hewan = ['ikan', ' kucing', ' ayam']
//console.log(hewan)

//const hewan = [4, 'kucing', ' ikan', 'berbulu']
//console.log(hewan[0])

//const [jmlKaki, namaHewan, makanan, ciri] = hewan
//console.log(jmlKaki)
//const hewan diatas adalah variabel dan const yg dibawah adalah isi array nya
//=================================================================

//rest parameter
//let [a,b,c] = [1,2,3]
//console.log(a)
//rest parameter lebih simple
//=====================================

//contoh lain
//let [d, ...n] = [a,b,c]
//console.log(n)

let [a,b,c, ...test] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [d, ...n] = [a, b, c]

console.log(test[1])


//contoh kedua ketika kita hanya ingin mengambil array yang pas
//let [a,b,c, ...test] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//let [d, ...n] = [a, b, c]

//console.log(test[1])


//let [d, ...n] = [a, b, c]
//console.log(...n)

//syarat harus lebih panjang dari variable a,b,c...test
//syarat titik ... wajib ada 3 gak boleh lebih/kurang

//setiap const dan let itu adalah variable dan di dalam [] adalah array
//disini kita mencoba mengeluarkan isi array tersebut
//jika kita ambil a,b,c akan keluar 1,2,3 dan harus di deklarasi dulu 
//seperti tambah d,e,f utk bisa manggil 4,5,6 secara terpisah
//jika langsung manggil ...test yg muncul adalah 4,5,6,7,8,9
//dan data di dalam array bisa diambil
//manipulasi data dari data awal berapa jadi data baru berapa
//array itu dari 0
