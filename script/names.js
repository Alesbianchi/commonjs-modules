// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

// 1 - names.js
function createFullName(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName
    };
  }
  
  // 2 - Esportazione della funzione
  module.exports = createFullName;