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
/* console.log(filterName); */ // Verifico in console

/* #8 - Lavoro su opzioni rotazione immagine */
rotateOptions = document.querySelectorAll(".rotate button") // Seleziono tutti i button presenti nelle mie opzioni (per quello querySelectorAll)
/* console.log(rotateOptions); */

/* #5 - Modifiche sull'input range (slider) */
filterSlider = document.querySelector(".slider input") // seleziono l'input
/* console.log(filterSlider); */ // Verifico in console
filterValue = document.querySelector(".filter-info .value") // Seleziono il testo del mio range 
/* console.log(filterValue); */ // Verifico in console

/* #9 - Reset filter */
resetFilterButton = document.querySelector(".reset-filter")
/* console.log(filterSlider); */ // Verifico in console

/* #10 - Save Button */
saveImgButton = document.querySelector(".save-img")
/* console.log(saveImgButton); */ // Verifico in console

/* #6 - Ora lavoro sui singoli filtri */
let brightness = 100 // Valore default 100
saturation = 100 // Valore default 100
inversion = 0 // Valore default 0
grayscale = 0 // Valore default 0
/* console.log(`Luminosità : ${brightness}, Saturazione : ${saturation} , Inversione : ${inversion}, Scala di grigi : ${grayscale} `); */ // Verifica in console log

/* #8.1 aggiungo ulteriori variabili per la rotazione e lo stretch per le mie immagini */
let rotate = 0
let flipHorizontal = 1 // in caso di click sullo tasto orizzontale
let flipVertical = 1 // in caso di click sullo tasto verticale

//#endregion

//#region Funzioni

/* #7 - Creo la mia function per applicare i filtri */
const applyFilters = () => {

    /* #8.4 - avvio le modifiche alla mia immagine, per rotazione e specchia */
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`

    /* brightness() => funzione per la luminosità || saturate() => funzione per la saturazione */
    /* invert() => funzione per l'inversione dei colori || grayscale() => funzione per scala di grigi */

    /* #7.1 - Applico i filtri */
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) `

}

/* #1.4 - Avvio la mia arrow function loadImage */
const loadImage = () => {
    let file = fileInput.files[0]; // Prendo il file selezionato dall'utente
    if (!file) return // Esegui un return se l'utente non ha selezionato alcun file
    /* console.log(file); */ // Verifica del file
    previewImg.src = URL.createObjectURL(file) // #2.1 Alla mia immagine di preview appendo quella selezionata dall'utente
    /* #2.2 - Rimuovo blocco sui button ed edit del file in caso venga caricata immagine */
    previewImg.addEventListener("load", () => {
        resetFilterButton.click() // Resetto i filtri in modo tale da avere una nuova immagine coi filtri resettati
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
    /* console.log(option); */ // Queste sono tutte le mie option
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

    /* #7.2 - Invoco la funzione per attivare i filtri all'immagine */
    applyFilters();
}

/* #8.2 - Avvio ciclo forEach per selezionare tutti i miei button per la rotazione dell'immagine */
rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
        /* #8.3 - Avvio una condizione per la rotazione in base al click */
        if (option.id === "left") {
            rotate = rotate - 90 // Se il bottone per la sx è cliccato decrementa il valore a -90
        }
        else if (option.id === "right") {
            rotate = rotate + 90 // Se il bottone per la sx è cliccato incrementa il valore a +90
        }
        else if (option.id === "horizontal") {
            /* Avvio un operatore ternario dove dico che */
            /* se il valore iniziale è 1 allora lo setto a -1, altrimenti il valore verrà settato a 1 */
            flipHorizontal = flipHorizontal === 1 ? -1 : 1
        }
        else if (option.id === "vertical") {
            /* Avvio un operatore ternario dove dico che */
            /* se il valore iniziale è 1 allora lo setto a -1, altrimenti il valore verrà settato a 1 */
            flipVertical = flipVertical === 1 ? -1 : 1
        }
        /* #8.5 - Invoco la funzione */
        applyFilters();
    })
})

/* #9.2 - Avvio la mia arrow Function per resettare */
const resetFilter = () => {
    /* #9.3 - Resetto tutto */
    brightness = 100 // Valore default 100
    saturation = 100 // Valore default 100
    inversion = 0 // Valore default 0
    grayscale = 0 // Valore default 0
    rotate = 0 // Angolo di rotazione iniziale
    flipHorizontal = 1 // in caso di click sullo tasto orizzontale
    flipVertical = 1 // in caso di click sullo tasto verticale

    filterOptions[0].click() // cliccando sul reset mi riporta di default sull'opzione luminosità

    /* 9.4 - Invoco la mia funzione per applicare i filtri */
    applyFilters();
}

/* #10.2 - preparo la function per il salvataggio dell'immagine */
const saveImage = () => {
    /* console.log("Stai cliccando su Salva immagine"); */

    /* #10.3 - setto larghezza e altezza della mia canvas */
    const canvas = document.createElement("canvas") // Creo l'elemento
    const ctx = canvas.getContext("2d") // Ritorna un drawing contenente il canvas
    canvas.width = previewImg.naturalWidth // setto la canvas con la larghezza attuale
    canvas.height = previewImg.naturalHeight // setto la canvas con l'altezza attuale

    /* #10.4 - Applico i miei filtri di luminosità ecc all'immagine da salvare */
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) `
    ctx.translate(canvas.width / 2, canvas.height / 2) // traslazione della canvas dal centro
    if (rotate !== 0) {
        /*  Se il valore di rotate è diverso da 0 applico la rotazione della canvas */
        ctx.rotate(rotate * Math.PI / 180)
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    /* document.body.appendChild(canvas) */ // Per mostrare a schermo il risultato

    /* #10.5 - Salvo l'immagine */
    const link = document.createElement("a") // creo un ancor tag
    link.download = "image.jpg" // nome dell'immagine
    link.href = canvas.toDataURL() // passo al ref dell'ancor tag al mio data url
    link.click() // cliccando sul button parte il download dell'immagine appena modificata
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

/* #9.1 - Scateno un evento sul mio reset Button */
resetFilterButton.addEventListener("click", resetFilter)

/* #10.1 - Scateno evento sul button per salvare immagine */
saveImgButton.addEventListener("click", saveImage)

//#endregion

