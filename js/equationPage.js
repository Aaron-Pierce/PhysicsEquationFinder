let equationRef = database.collection("equations");

let editMode = false;

let chipsAutocompleteInstance;

function clearAddModal() {
    editMode = false;
    document.getElementById("equation_markdown").value = "";
    document.getElementById("categoryAutocomplete").value = "";
    let eqSymbolsWrapper = document.getElementById("equationSymbolsWrapper")
    for (let i = 0; i < chipsAutocompleteInstance.chipsData.length; i++) {
        chipsAutocompleteInstance.deleteChip(i)
    }
}


function openAddModal() {

    let symbolsNameData = {};
    for (symbol of symbolsdb) {
        symbolsNameData["" + symbol.name + ""] = ""
    }

    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, {
        hasAutocomplete: true,
        autocompleteOptions: {
            data: symbolsNameData
        },
        placeholder: "Symbols"
    });

    chipsAutocompleteInstance = instances[0];

    var autocompleteElems = document.querySelectorAll('.autocomplete');
    var autocompleteInstances = M.Autocomplete.init(autocompleteElems, {
        data: categoriesObj
    });

    
    clearAddModal();

    
    let instance = M.Modal.init(document.querySelector('.modal')).open(); //this is a pretty terrible hack but it works. And is the only way I've managed to get this modal to work so it's staying
}


let input = document.getElementById("equation_markdown")

let equationSymbols = [];

//every single time a new character is entered update the equation
input.addEventListener("keyup", e => {

    /*
     *
     * These three lines just turn the input into asciimath displayed on the dom
     * 
     */

    let resultString = input.value;
    document.getElementById("result").innerHTML = "`" + input.value + "`"

    let symbols = resultString.split(" "); //in case the user is smart and properly spaced their terms, break on those to make our lives easier 

    let letters = new RegExp("[a-zA-Z]"); //Regex match for only letters
    for (symbol of symbols) {
        if (letters.test(symbol) === false) { //if there are no letters in a symbol, then it is probably something like "+", or "=", so remove it
            symbols.splice(symbols.indexOf(symbol), 1) //remove letterless symbol from array 
        }
    }

    let nonSymbolCharacters = ["+", "-", "=", "/"]; // arithmetic operations are very good indicators that there are symbols on either side of the operation, so split the string there
    let symbolsToRemove = ["(", ")", "sqrt", "^"]; //These symbols are solely for proper markup display, not equations themselves, so we remove them, as they won't be good indicators of where to break the array to find symbols

    let correctedSymbols = []; //populate this array with strings that have been split based on arithmetic operations or symbols stripped of parenthesis. This will be an array of strings that will likely contain at least one symbol. example "deltax", "at", "v_o"

    for (symbol of symbols) { //iterate through each symbol
        for (char of symbol.split("")) { // and characters within the symbol
            if (nonSymbolCharacters.indexOf(char) !== -1) { //if the character within the symbol is an arethmetic operation or something like that, remove it.
                let correctedSymbol = symbol.replace(char, " "); //remove symbol
                symbol = correctedSymbol; //strings are immutable, so reset the value of the symbol to the corrected version
            }
        }
        for (whitespacedSymbol of symbol.split(" ")) { //after removing the arithmetic operations, try to parse through any extra junk in the symbol
            if (whitespacedSymbol !== "") { //this if is here solely because parenthesis become extra whitespace around a symbol and therefore creates two blank symbols, so this is here to stop them from being added
                for (symbolToRemove of symbolsToRemove) {
                    while (whitespacedSymbol.indexOf(symbolToRemove) !== -1) {
                        whitespacedSymbol = whitespacedSymbol.replace(symbolToRemove, "")
                    }
                }

                correctedSymbols.push(whitespacedSymbol)
            }
        }
    }

    let finalSymbols = [];

    for (correctSymbol of correctedSymbols) {
        for (markupSymbol of symbolsdb) {
            if (correctSymbol.toLowerCase().indexOf(markupSymbol.markdown.toLowerCase()) !== -1) { //If known symbol is found in parsed out symbol. This could select a string such as "deltax", which is already a symbol, so we need to account for that later
                if (correctSymbol.length !== markupSymbol.markdown.length) { //this block checks that there are actually two found symbols inside of a string, instead of a single symbol, the entire string
                    finalSymbols.push(markupSymbol.markdown);
                    correctedSymbols.push(correctSymbol.toLowerCase().replace(markupSymbol.markdown
                        .toLowerCase(), ""))
                } else { //we have found a symbol that is the entire string, as in "deltax"
                    finalSymbols.push(markupSymbol.markdown)
                }
                break; //we've found a symbol here, so stop looping through it, otherwise deltax will parse out deltax, t, and a which is a problem
            }
        }
    }

    //for some reason that I don't fully understand the algorithim matches multiple times, as in barv can show up 3 times, and instead of implementing a set, we just parse out the repeats

    let foundFinalSymbols = []

    for (symbol of finalSymbols) {
        if (foundFinalSymbols.indexOf(symbol) === -1) {
            foundFinalSymbols.push(symbol);
        }
    };

    finalSymbols = foundFinalSymbols; //remove duplicates from final symbols

    //go from markdown of symbols to the actual symbol objects

    let foundSymbolObjects = [];

    for (finalSymbolMarkdown of finalSymbols) {
        for (dbSymbol of symbolsdb) {
            if (finalSymbolMarkdown === dbSymbol.markdown) {
                foundSymbolObjects.push(dbSymbol)
            }
        }
    }



    equationSymbols = foundSymbolObjects;

    updateSymbolChips(); //in this block we typeset mathjax so we dont handle it here

})

function updateSymbolChips() {
    //now that we have the symbols, add them to the modal for editing
    let eqSymbolsWrapper = document.getElementById("equationSymbolsWrapper")
    for (let i = 0; i < chipsAutocompleteInstance.chipsData.length; i++) {
        chipsAutocompleteInstance.deleteChip(i)
    }
    for (foundObject of equationSymbols) {
        chipsAutocompleteInstance.addChip({
            tag: "`" + foundObject.markdown + "`"
        })
    }

    MathJax.Hub.Typeset()

}


function deleteSymbol(symbolMarkdown) {
    for (symbolObj of equationSymbols) {
        if (symbolObj.markdown === symbolMarkdown) {
            equationSymbols.splice(equationSymbols.indexOf(symbolObj), 1)
        }
    }
    updateSymbolChips();
}

function fixPotentialSymbol(psymbol){
    while(psymbol.indexOf(" ") !== -1 || psymbol.indexOf("`") !== -1){
        psymbol = psymbol.replace(" ", "");
        psymbol = psymbol.replace("`", "")
    }
    return psymbol.toLowerCase(); 
}

function submitNewEquation(){
    let markdown = document.getElementById("equation_markdown").value;
    let symbols = [];
    for(chip of chipsAutocompleteInstance.chipsData){
        let knownSymbol = false;
        for(symbol of symbolsdb){
            console.log("comparing")
            console.log(fixPotentialSymbol(chip.tag));
            console.log("and")
            console.log(symbol.markdown)
            if(fixPotentialSymbol(chip.tag) === fixPotentialSymbol(symbol.name) || symbol.aliases.indexOf(fixPotentialSymbol(chip.tag)) !== -1 || symbol.markdown.toLowerCase() === fixPotentialSymbol(chip.tag.toLowerCase())){
                symbols.push(symbol);
                knownSymbol = true;
            }
        }
        if(!knownSymbol){
            symbols.push({name: fixPotentialSymbol(chip.tag), markdown: fixPotentialSymbol(chip.tag)})
        }
    }

    let category = document.getElementById("categoryAutocomplete").value;

    if(categories.indexOf(category) === -1){
        categoriesRef.add({
            name: category
        })
    }


    if(!editMode){
        equationRef.add({
            category: category,
            markdown: markdown,
            symbols: symbols
          })
    }else{
        equationRef.doc(equationIdToedit).update({
            category: category,
            markdown: markdown,
            symbols: symbols
        })
    }


}

equationRef.onSnapshot(function (docs) {
    document.getElementById("equationCardsWrapper").innerHTML = "";
    for (doc of docs.docs) {
        let equationSymbolsMarkdown = [];
        for(symbol of doc.data().symbols){
            equationSymbolsMarkdown.push("`" + symbol.markdown + "`")
        }
      document.getElementById("equationCardsWrapper").innerHTML += `
            <div class="col s12 m6 l6 cardwrapper">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">\`${doc.data().markdown}\`</span>
                  <p>Symbols: ${equationSymbolsMarkdown.join(", ")}</p>
                  <p>Category: ${doc.data().category}</p>
                </div>
                <div class="card-action">
                  <a href="#" onclick="editEquation('${doc.id}')" class=" teal-text lighten-4">Edit Equation</a>
                  <a href="#" class=" teal-text lighten-4" onclick="deleteEquation('${doc.id}')">Delete</a>
                </div>
              </div>
            </div>
            `
    }
    MathJax.Hub.Typeset();
  })

  let equationIdToedit;

  function editEquation(id){
    editMode = true;
    equationIdToedit = id;
    equationRef.doc(id).get().then(e => {
    let selected = e.data();    

    document.getElementById("equation_markdown").value = selected.markdown;
    document.getElementById("categoryAutocomplete").value = selected.category;

    let symbolsNameData = {};
    for (symbol of symbolsdb) {
        symbolsNameData["" + symbol.name + ""] = ""
    }
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, {
        hasAutocomplete: true,
        autocompleteOptions: {
            data: symbolsNameData
        },
        placeholder: "Symbols"
    });

    chipsAutocompleteInstance = instances[0];

    var autocompleteElems = document.querySelectorAll('.autocomplete');
    var autocompleteInstances = M.Autocomplete.init(autocompleteElems, {
        data: categoriesObj
    });


    for(proc of selected.symbols){
        chipsAutocompleteInstance.addChip({
           tag: "`" + proc.markdown + "`"
        });
    }

    MathJax.Hub.Typeset();

    document.getElementById("equation_markdown_label").classList.add("active")
    document.getElementById("equation_category_label").classList.add("active")


    
    let instance = M.Modal.init(document.querySelector('.modal')).open(); //this is a pretty terrible hack but it works. And is the only way I've managed to get this modal to work so it's staying

    });  
}

function deleteEquation(id){
    if(confirm("Are you sure you want to delete this equation?")){
      equationRef.doc(id).delete();
    }
  }

