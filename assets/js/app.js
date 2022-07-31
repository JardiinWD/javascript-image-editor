/* # => Commenti che iniziano per Hashtag indicano i percorsi fatti per il funzionamento corretto dell'App */

//#region Variabili e costanti

// #1 - Seleziono il mio input (image) tramite query
const fileInput = document.querySelector(".file-input")
// #1.1 - Seleziono anche il mio button choose-img
chooseImgBtn = document.querySelector(".choose-img")
console.log(fileInput); // Verifico in console
console.log(chooseImgBtn); // Verifico in console

//#endregion

//#region Eventi

// #1.2 - Scateno evento sul mio button per selezionare immagine
// al click sul button prende le stesse funzioni del input type file 
chooseImgBtn.addEventListener("click", () => fileInput.click())


//#endregion

//#region Funzioni

//#endregion


