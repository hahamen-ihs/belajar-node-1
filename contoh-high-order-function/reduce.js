const x = [1,2,3,4,5,6,7,8,9,10]

const reduceX = x.reduce ((res,i) => res  + i)
console.log(reduceX)

//res adalah hasil akhir yg kita inginkan, tapi i sama seperti sebelumnya
//yaitu berisi value sebuah array, jadi kita coba mencari jumlah semua angka
//dari value yg ada di array