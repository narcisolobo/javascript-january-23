import Vehicle from "./vehicle.js";
import M5 from "./m5.js";

const limeTwist = new Vehicle('Hyundai', 'Kona', 'Lime Twist');

// dot notation
console.log(limeTwist.manufacturer);

limeTwist.drive();
console.log(limeTwist.miles);

limeTwist.beep();
limeTwist.drift();

const myM5 = new M5('Black');
console.log(myM5.color);
myM5.printSpecSummary();
