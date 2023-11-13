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

//prøver en mer avansert funksjon.
import { makeLists } from "./jsModules/makeLists.js";

//importerer button
import { button } from "./jsModules/makeButton.js";
//prøver å skjøre de.
myFunction("hello");
console.log(myArray);
newTestFunction("Test!");
makeLists();
console.log(button);
document.body.appendChild(button);
