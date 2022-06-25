import { BookStore } from "./6-10.js";

const aReading = new BookStore("ivan", 10, 5, 2017);

const baseCharge = aReading.baseRate() * aReading.quantity;
console.log(baseCharge);
