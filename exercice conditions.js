const a= "12";
const b="24";
const c="48";

if ( a === b === c){
    console.log("Les trois variables sont identiques");
}
else if (a === b || b === c || a === c){
    console.log("Deux des variables sont identiques");
}
else {
    console.log("toutes les variables sont différentes");
}
