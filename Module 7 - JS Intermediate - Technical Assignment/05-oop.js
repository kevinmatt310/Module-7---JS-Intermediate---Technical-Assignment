//Soal nomor 2

// 1. Jadi konsep encapsulation itu adalah mengisolisasi source code supaya terbagi dalam blok-blok
//    di mana programmer lain tidak perlu memikirikan detail dari blok-blok source code.
//    Encapsulation ini merupakan bagian dari OOP (Object Oriented Programming) atau pemrograman berbasis objek.

//2.  Abstraksi adalah cara membuat model sederhana dari entitas dunia nyata yang lebih kompleks,
//    yang berisi satu-satunya properti penting dari perspektif konteks aplikasi.

//3.  Inheritance adalah konsep OOP di mana kita dapat membentuk class baru yang “mewarisi” atau
//    memiliki bagian-bagian dari class yang sudah ada sebelumnya. Konsep ini menggunakan sistem
//    hirarki atau bertingkat. Seperti sebuah Drop-Down Menu yang ada di kebanyakan website,
//    di mana semakin spesifik submenunya, semakin spesifik pula kontennya.

//4.  Polymorphism adalah konsep di mana suatu objek yang berbeda-beda dapat diakses melalui interface yang sama.
//    Sebuah objek yang polymorphic dapat beradaptasi dengan metode apapun yang diimplementasikan pada objek tersebut,
//    dan setiap class memiliki interpretasinya tersendiri terhadap interfacenya.

//Soal nomor 3 
class Phone {
  constructor(brand, storage, ram) {
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
  getBrandName() {
    return this.brand;
  }
  setBrandName(brand){
    this.brand = brand;
  }
  printSpecification(){
    console.log ("Ponsel ini memiliki storage:" + this.storage + " dan ram:" + this.ram);
  }
  setSpecification(storage, ram){
    this.storage = storage;
    this.ram = ram;
  }
}


const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();
