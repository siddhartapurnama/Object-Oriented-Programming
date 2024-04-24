// Definisikan kelas Calculator
class Calculator {
    // Konstruktor untuk inisialisasi
    constructor() {
      this.result = 0;
    }
  
    // Metode untuk menambahkan dua bilangan
    add(x, y) {
      this.result = x + y;
      return this.result;
    }
  
    // Metode untuk mengurangkan dua bilangan
    subtract(x, y) {
      this.result = x - y;
      return this.result;
    }
  
    // Metode untuk mengalikan dua bilangan
    multiply(x, y) {
      this.result = x * y;
      return this.result;
    }
  
    // Metode untuk membagi dua bilangan
    divide(x, y) {
      if (y === 0) {
        return "Error: Division by zero";
      }
      this.result = x / y;
      return this.result;
    }
  
    // Metode untuk mendapatkan hasil terakhir
    getResult() {
      return this.result;
    }
  }
  
  // Membuat instance kalkulator
  const calc = new Calculator();
  
  // Contoh penggunaan
  console.log("Hasil penambahan:", calc.add(5, 3));
  console.log("Hasil pengurangan:", calc.subtract(10, 4));
  console.log("Hasil perkalian:", calc.multiply(2, 6));
  console.log("Hasil pembagian:", calc.divide(9, 3));
  console.log("Hasil terakhir:", calc.getResult());
  