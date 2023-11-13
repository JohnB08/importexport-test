/* VIKTIG IMPORT SKJER ØVERST! */
//importerer testfunksjoner fra "export.js"
//Kan også skifte navn på funksjonen myExportedFunction til myFunction om jeg vil.
import {
  myExportedFunction as myFunction,
  myArray,
} from "./jsModules/export.js";

//importer test funksjon fra newTestFunction.js
import { newTestFunction } from "./jsModules/newTestFunction.js";

//prøver en mer avansert funksjon.
import { makeLists } from "./jsModules/makeLists.js";

//importerer button
import { button } from "./jsModules/makeButton.js";

//prøver å kjøre de.
myFunction("hello");
console.log(myArray);
newTestFunction("Test!");
makeLists(myArray);
document.body.appendChild(button);
