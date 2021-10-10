// Soal nomor 1
// 1. Synchronous (sync), merupakan mode default dalam proses eksekusi perintah kode.
//    Secara default, javascript diproses dalam baris perbaris,
//    artinya setiap baris kode tidak akan dieksekusi sebelum baris kode sebelumnya selesai diproses.
// 2. Asynchronous tetap memroses kode baris per baris,
//    hanya saja sebatas penjadwalan untuk dieksekusi pada tahapan berikutnya.
//    Artinya, kode yang berperilaku async tidak akan langsung dieksekusi, tetapi di skip dan akan melakukan eksekusi baris perintah berikutnya.
// 3. Kita dapat menerapkan konsep asynchronous pada browser, selama kita menuliskan baris kode yang sesuai.
//    contoh konsep asychronous banyak dijumpai pada function.
// 4. first log:  1
//    first log:  2
//    ...
//    first log:  5
//    6
//    second log:  6
// 5. console.log pertama dan kedua menampilkan hasil yang berbeda karena console.log yang kedua
//    menampilkan index variabel terakhir pada i setelah 0,3 detik
// 6. 



// Soal nomor 2

const isR18Plus = (age) => { 

  if (age > 18) {
      return "Anda Sudah dewasa"
  }
  else{
      return " Anda masih bocil"
  }

}

const printR18Plus = async () => {
const underAge = await isR18Plus(10);
const properAge = await isR18Plus(19);

console.log(underAge);
console.log(properAge);
}

printR18Plus();
