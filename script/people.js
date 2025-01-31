// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

// 3 - people.js
const createFullName = require('./names.js');  // Importa la funzione da names.js
const createHobbies = require('./hobbies.js'); 

function getPerson() {
    // Usa la funzione per creare il nome completo
  const fullName = createFullName('alessandro', 'bianchi');  
  const hobbies = createHobbies('tennis', 'sci', 'viaggiare');
  
  // Restituisci un oggetto con la proprietà fullName
  return { fullName, hobbies };  
}
console.log(getPerson()); 



