# Our Team

Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

## BONUS 1:
Trasformare la stringa foto in una immagine effettiva

## BONUS 2:
Organizzare i singoli membri in card/schede



## MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

### Steps:
- Creo un ciclo for per iterare all'interno dell'array di oggetti
  - Creo una variabile a cui assegno ad ogni ciclo un singolo elemento dell'array
  - Creo un ciclo for-in per iterare all'interno delle proprietà di ogni elemento dell'array
    - Stampo la singola proprietà in console

### Tools:
- for loop
- for-in loop
- console.log()

## MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

### Steps:
- Creo una varaibile per l'elemento del DOM che conterrà gli oggetti
- Creo un ciclo for per iterare all'interno dell'array di oggetti
  - Creo una variabile a cui assegno ad ogni ciclo un singolo elemento dell'array
  - Creo un ciclo for-in per iterare all'interno delle proprietà di ogni elemento dell'array
    - Inserisco i dati dell'oggetto in DOM 

### Tools:
- const/let
- for loop
- for-in loop
- document.getElementById()
- element.insertAdjacentHTML()/element.innerHTML
