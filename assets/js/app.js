/* # => Commenti che iniziano per Hashtag indicano i percorsi fatti per il funzionamento corretto dell'App */

//#region Variabili e costanti

// #1 - Seleziono il mio input (image) tramite query
const fileInput = document.querySelector(".file-input")
// #1.1 - Seleziono anche il mio button choose-img
chooseImgBtn = document.querySelector(".choose-img")
/* console.log(fileInput);  */// Verifico in console
/* console.log(chooseImgBtn); */ // Verifico in console

/* #2 - Mostrare immagine nell'editor */
previewImg = document.querySelector(".preview-img img") // Seleziono il mio tag img 
/* console.log(previewImg); */ // Verifico in console

/* #3 - Bottoni per i filtri */
filterOptions = document.querySelectorAll(".filter button") // Seleziono tutti i button presenti nel wrapper Filter
/* console.log(filterOptions); */ // Verifico in console

/* #4 - Cambio dei nomi dei miei filtri */
filterName = document.querySelector(".filter-info .name") // Seleziono il paragrafo con classe name
console.log(filterName); // Verifico in console

/* #5 - Modifiche sull'input range (slider) */
filterSlider = document.querySelector(".slider input") // seleziono l'input
console.log(filterSlider); // Verifico in console
filterValue = document.querySelector(".filter-info .value") // Seleziono il testo del mio range 
console.log(filterValue); // Verifico in console

/* #6 - Ora lavoro sui singoli filtri */
let brightness = 100 // Valore default 100
saturation = 100 // Valore default 100
inversion = 0 // Valore default 0
grayscale = 0 // Valore default 0
console.log(`Luminosità : ${brightness}, Saturazione : ${saturation} , Inversione : ${inversion}, Scala di grigi : ${grayscale} `); // Verifica in console log


//#endregion

//#region Funzioni

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

/* #3.1 avvio ciclo forEach per scatenare eventi a tutti i miei button dei filtri */
filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        // #3.2 Aggiungo evento al click per ogni bottone filtrato
        document.querySelector(".filter .active").classList.remove("active") // #3.3 Seleziono il mio wrapper filter e rimuovo la classe active
        option.classList.add("active") // #3.4 soltanto per attivarlo poi su tutte, ad ogni click
        filterName.innerHTML = option.innerText // #4.1 al mio input type range, ad ogni click sui button cambio il valore del testo. prenderà quello del bottone attivo

        /* #6.4 - Eseguo una selezione di ogni filtro associando loro il valore senza intaccare gli altri */
        if (option.id === "brightness") {
            /* Valore del mio input = variabile che devo regolare */
            filterSlider.max = "200"
            filterSlider.value = brightness
            filterValue.innerText = `${brightness}%`
        }
        else if (option.id === "saturation") {
            filterSlider.max = "200"
            filterSlider.value = saturation
            filterValue.innerText = `${saturation}%`
        }
        else if (option.id === "inversion") {
            filterSlider.max = "100"
            filterSlider.value = inversion
            filterValue.innerText = `${inversion}%`
        }
        else {
            filterSlider.max = "100"
            filterSlider.value = grayscale
            filterValue.innerText = `${grayscale}%`
        }


    })
    console.log(option); // Queste sono tutte le mie option
})

/* #5.3 - Avvio la mia arrowFunction per l'update */
const updateFilter = () => {
    /* console.log(`Questo è il valore del mio slider : ${filterSlider.value}`); */ // Verifico il valore (da 0 a 200) del mio slider
    filterValue.innerText = `${filterSlider.value}%`
    /* #6.1 - Ora lavoro sui singoli filtri */
    const selectedFilter = document.querySelector(".filter .active") // #6.2 - Faccio la selezione sui miei filtri in base a quello attivo

    /* #6.3 - Avvio una condizione con tutti i miei filtri e gli id ad essi associati */
    if (selectedFilter.id === "brightness") {
        /* variabile let sopra = valore dell'input */
        brightness = filterSlider.value
    }
    else if (selectedFilter.id === "saturation") {
        /* Stesso discorso di sopra */
        saturation = filterSlider.value
    }
    else if (selectedFilter.id === "inversion") {
        /* Stesso discorso di sopra */
        inversion = filterSlider.value
    }
    else {
        /* Stesso discorso di sopra */
        grayscale = filterSlider.value
    }
}


//#endregion


//#region Eventi

/* #1.3 - Al mio fileInput scateno un evento per il cambiamento */
fileInput.addEventListener("change", loadImage)

/* #5.2 - Al mio input type range scateno un evento che aggiorna costantemente il valore del filtro */
filterSlider.addEventListener("input", updateFilter)

// #1.2 - Scateno evento sul mio button per selezionare immagine
// al click sul button prende le stesse funzioni del input type file 
chooseImgBtn.addEventListener("click", () => fileInput.click())

//#endregion

