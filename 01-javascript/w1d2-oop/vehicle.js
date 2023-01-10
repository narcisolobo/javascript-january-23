/* 
OOP Object Oriented Programming
APIE

4 PILLARS OF OOP
Abstraction
Polymorphism
Inheritance
Encapsulation
*/

class Vehicle {
  constructor(manufacturer, model, color) {
    this.miles = 0;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
  }

  drive() {
    console.log('driving...')
    this.miles += 10;
  }

  beep() {
    console.log('beep beep!')
  }

  drift() {
    console.log('* music from Tokyo Drift plays *');
  }
}

export default Vehicle;
