import { makeElements } from "./makeElementsFunction.js";

//prøver å lage en variabel.
const button = makeElements("button", {
  className: "btn",
  textContent: "Imported",
});

export { button };
