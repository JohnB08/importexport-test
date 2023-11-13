//importerer det jeg trenger fra andre moduler
import { myArray } from "./export.js";
import { makeElements } from "./makeElementsFunction.js";

//funksjon som lager et <ul> element basert på array i exports.js
//med hjelp fra makeElements fra makeElementsFunction.js.

function makeLists() {
  let list = makeElements("ul", { className: "list" });
  document.body.appendChild(list);
  myArray.forEach((arrayElement) => {
    let listItem = makeElements("li", { textContent: arrayElement });
    list.appendChild(listItem);
  });
}

export { makeLists };
