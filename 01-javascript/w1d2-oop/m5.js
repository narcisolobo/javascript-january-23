import Vehicle from "./vehicle.js";

class M5 extends Vehicle {
  constructor(color) {
    super('BMW', 'M5', color)
  }

  // template literal notation
  printSpecSummary() {
    console.log(`This is a ${this.color} ${this.manufacturer} ${this.model}`);
  }
}

export default M5;
