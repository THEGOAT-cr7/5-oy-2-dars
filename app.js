// class laptop {
//   constructor(brand, ram, ssd) {
//     this.brand = brand;
//     this.ram = ram;
//     this.ssd = ssd;
//   }

//   spec() {
//     console.log(`Brand: ${this.brand}, RAM: ${this.ram}, SSD: ${this.ssd}`);
//   }
// }

// const myLaptop = new laptop("ASUS", "16GB", "512GB");
// myLaptop.spec();

// 2-masala
// class Animal {
//   constructor(type, sound) {
//     this.type = type;
//     this.sound = sound;
//   }

//   makeSound(){
//     console.log(`Animal: ${this.type}, Sound: ${this.sound}`);
//   }
// }

// const newAnimal = new Animal("It", "Vov")
// newAnimal.makeSound()

// 3-masala
// class Courses {
//   constructor(name, duration, price) {
//     this.name = name;
//     this.duration = duration;
//     this.price = price;
//   }

//   summary() {
//     console.log(`name: ${this.name}, duration: ${this.duration}, price: ${this.price}`);
//   }
// }

// const detailCourses = new Courses("reactjs", "3 oy", "$200");
// detailCourses.summary();

// 4-masala
// class Employee {
//   constructor(name, salary, bonus = 0) {
//     this.name = name;
//     this.salary = salary;
//     this.bonus = bonus;
//   }

//   getTotalIncome(){
//     console.log(`salary: ${this.salary}`);
//   }
// }

// const detailsEmployee = new Employee('John', '2000$', '10$')
// detailsEmployee.getTotalIncome()

// 5-masala
// class Pizza {
//   constructor(size, ingredients) {
//     this.size = size;
//     this.ingredients = ingredients;
//   }

//   getInfo() {
//     console.log(`${this.size} pizza: ${this.ingredients.join(", ")}`);
//   }
// }

// const myPizza = new Pizza("Katta", ["sir", "kolbasa", "zaytun"]);
// myPizza.getInfo();

// 6-masala
// class Phone {
//   constructor(brand, battery) {
//     this.brand = brand;
//     this.battery = battery;
//   }

//   charge(amount) {
//     console.log(`Battery: ${this.battery}%`);
//   }
// }

// const detailPhone = new Phone("Samsung", 80);
// detailPhone.charge();

// // 7-masala
// class Student {
//     constructor(name, grades) {
//       this.name = name
//       this.grades = grades
//     }
  
//     getMax() {
//       return Math.max(...this.grades)
//     }
//   }
  
//   // 8-masala
//   class Team {
//     constructor(teamName, members) {
//       this.teamName = teamName
//       this.members = members
//     }
  
//     addMember(name) {
//       this.members.push(name)
//     }
  
//     getTeamSize() {
//       return this.members.length
//     }
  
//     listMembers() {
//       return this.members
//     }
//   }
  
//   // 9-masala
//   class Flight {
//     constructor(from, to, passengers) {
//       this.from = from
//       this.to = to
//       this.passengers = passengers
//     }
  
//     addPassenger(name) {
//       this.passengers.push(name)
//     }
  
//     getFlightInfo() {
//       return `${this.from} -> ${this.to}, Passengers: ${this.passengers.join(", ")}`
//     }
//   }
  
//   // 10-masala
//   class ShoppingCart {
//     constructor() {
//       this.items = []
//     }
  
//     addItem(title, price) {
//       this.items.push({ title, price })
//     }
  
//     removeItem(title) {
//       this.items = this.items.filter(i => i.title !== title)
//     }
  
//     getTotal() {
//       return this.items.reduce((t, i) => t + i.price, 0)
//     }
//   }
  
//   // 11-masala
//   class MovieLibrary {
//     constructor(movies) {
//       this.movies = movies
//     }
  
//     addMovie(title, rating) {
//       this.movies.push({ title, rating })
//     }
  
//     getTopRated() {
//       return this.movies.reduce((a, b) => a.rating > b.rating ? a : b)
//     }
  
//     listMovies() {
//       return this.movies
//     }
//   }
  
//   // 12-masala
//   class CarRental {
//     constructor(cars) {
//       this.cars = cars
//     }
  
//     rentCar(name) {
//       let car = this.cars.find(c => c.name === name && c.isAvailable)
//       if (car) car.isAvailable = false
//     }
  
//     returnCar(name) {
//       let car = this.cars.find(c => c.name === name)
//       if (car) car.isAvailable = true
//     }
  
//     listAvailableCars() {
//       return this.cars.filter(c => c.isAvailable)
//     }
//   }
  
//   // 13-masala
//   class Wallet {
//     constructor(owner, balance = 0) {
//       this.owner = owner
//       this.balance = balance
//     }
  
//     addMoney(amount) {
//       this.balance += amount
//     }
  
//     spendMoney(amount) {
//       if (this.balance >= amount) this.balance -= amount
//     }
  
//     getBalance() {
//       return this.balance
//     }
//   }
  
//   // 14-masala
//   class Book {
//     constructor(title, author, pages) {
//       this.title = title
//       this.author = author
//       this.pages = pages
//     }
  
//     describe() {
//       return `Kitob: ${this.title}, Muallif: ${this.author}, Sahifalar: ${this.pages}`
//     }
//   }
  