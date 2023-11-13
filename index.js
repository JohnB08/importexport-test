/* VIKTIG IMPORT SKJER ØVERST! */
//importerer testfunksjoner fra "export.js"
//Kan også skifte navn på funksjonen myExportedFunction til myFunction om jeg vil.
import {
  myExportedFunction as myFunction,
  myArray,
} from "./jsModules/export.js";

//importerer makeElements fra makeElementsFunction.js
import { makeElements } from "./jsModules/makeElementsFunction.js";
//importer test funksjon fra newTestFunction.js
import { newTestFunction } from "./jsModules/newTestFunction.js";

//prøver å skjøre de.
myFunction("hello");
console.log(myArray);
const button = makeElements("button", {
  className: "btn",
  textContent: "Imported",
});
newTestFunction("Test!");
console.log(button);
document.body.appendChild(button);
