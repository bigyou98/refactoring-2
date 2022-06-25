import { getDefaultOwner } from "./6-6.js";

const owner = getDefaultOwner();
owner.firstName = "1박";
console.log(owner);
console.log(getDefaultOwner());
