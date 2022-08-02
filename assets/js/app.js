/* # => Commenti che iniziano per Hashtag indicano i percorsi fatti per il funzionamento corretto dell'App */

//#region Variabili e costanti

//#region Input Image

// #1 - Seleziono il mio input (image) tramite query
const fileInput = document.querySelector(".file-input")
// #1.1 - Seleziono anche il mio button choose-img
chooseImgBtn = document.querySelector(".choose-img")
console.log(fileInput); // Verifico in console
console.log(chooseImgBtn); // Verifico in console

//#endregion Input Image

/* #2 - Mostrare immagine nell'editor */
previewImg = document.querySelector(".preview-img img") // Seleziono il mio tag img 
console.log(previewImg); // Verifico in console

//#endregion

//#region Funzioni

//#region Input Image

/* #1.4 - Avvio la mia arrow function loadImage */
const loadImage = () => {
    let file = fileInput.files[0]; // Prendo il file selezionato dall'utente
    if (!file) return // Esegui un return se l'utente non ha selezionato alcun file
    console.log(file); // Verifica del file
    previewImg.src = URL.createObjectURL(file) // #2.1 Alla mia immagine di preview appendo quella selezionata dall'utente
    /* #2.2 - Rimuovo blocco sui button ed edit del file in caso venga caricata immagine */
    previewImg.addEventListener("load", () => {
        /* Seleziono il mio container e gli rimuovo la classe disable */
        document.querySelector(".container").classList.remove("disable")
    })
}

//#endregion Input Image

//#endregion


//#region Eventi

/* #1.3 - Al mio fileInput scateno un evento per il cambiamento */
fileInput.addEventListener("change", loadImage)

// #1.2 - Scateno evento sul mio button per selezionare immagine
// al click sul button prende le stesse funzioni del input type file 
chooseImgBtn.addEventListener("click", () => fileInput.click())

//#endregion

