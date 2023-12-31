/* VIKTIG IMPORT SKJER ØVERST! */
//importerer testfunksjoner fra "export.js"
//Kan også skifte navn på funksjonen myExportedFunction til myFunction om jeg vil.
import {
  myExportedFunction as myFunction,
  myArray,
} from "./jsModules/export.js";

//importerer makeElements fra makeElementsFunction.js
import { makeElements } from "./jsModules/makeElementsFunction.js";

//prøver å skjøre de.
myFunction("hello");
console.log(myArray);
const button = makeElements("button", {
  className: "btn",
  textContent: "Imported",
});
console.log(button);
document.body.appendChild(button);
