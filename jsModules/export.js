function myExportedFunction(string) {
  console.log(string);
}
let myArray = ["1", "2", "3", "4", "5"];

//exporterer både funksjon og variabel i bunn av objektet.
export { myExportedFunction, myArray };
