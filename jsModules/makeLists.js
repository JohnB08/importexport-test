//importerer det jeg trenger fra andre moduler
import { makeElements } from "./makeElementsFunction.js";

//funksjon som lager et <ul> element basert på array i exports.js
//med hjelp fra makeElements fra makeElementsFunction.js.

function makeLists(array) {
  let list = makeElements("ul", { className: "list" });
  document.body.appendChild(list);
  array.forEach((arrayElement) => {
    let listItem = makeElements("li", { textContent: arrayElement });
    list.appendChild(listItem);
  });
}

export { makeLists };
