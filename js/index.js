//Parse text put into input box as MathML for display
function replaceChars(text) {
  //text is the html object of the input box - not the value of the box.
  let replaced = text.value; //instance the text parameter for easier manipulation
  for (symbol of symbols) {
    //iterate through every symbol
    for (proc of symbol.proc) {
      //iterate through each proc of each symbol
      let searchMask = proc;
      let regEx = new RegExp(searchMask, "ig");
      let replaceMask = symbol.replace;
      replaced = replaced.replace(regEx, replaceMask); //Regex matches all procs case-insensitive, then replaces any procs with the replacement
    }
  }
  document.getElementById("results").innerHTML = "`" + replaced + "`"; //add the parsed symbol to the dom

  MathJax.Hub.Typeset(); //Format math found in dom
}

let submitSymbols = function() {
  //called on <input> keydown
  //Step 1: Parse symbols

  let symbols = document
    .getElementById("inputBox")
    .value.replace(/\s/g, "")
    .split(","); //remove all whitespace from the symbols, and parse them into an array of symbols
  for (i in symbols) {
    //iterate through passed symbols
    for (altSymbol of symbolAlts) {
      //iterate through each symbol alt
      if (
        symbols[i].toLowerCase().indexOf(altSymbol.proc.toLowerCase()) !== -1 //if a symbol alt is found in the string, ignoring case
      ) {
        symbols[i] = symbols[i]
          .toLowerCase()
          .replace(altSymbol.proc, altSymbol.replace); //put the symbol in lowercase, and replace it with any found alt symbols. E.g Vf to vfinal
      }
    }
  }


  document.body.getElementsByClassName("equationsWrapper")[0].innerHTML = ""; //clear the results box, prepping for finding equations

  //Step 2: Find equations with passed symbols and score them

  let found = []; //array of equtions with a score of at least 1
  for (equation of equations) {
    // iterate through each equation
    let curScore = 0; //score of current equation we are evaluating
    for (let i = 0; i < symbols.length; i++) {
      //iterate through each symbol given
      if (equation.symbols.indexOf(symbols[i].toLowerCase()) !== -1) {
        //if the symbol is found within the array of equation's symbols
        curScore++; //increment score
      }
    }
    let threshold = document.getElementById("strictSwitch").checked
      ? Math.floor(symbols.length / 2)
      : 0; //if the strictSwitch is checked, an equation will only be matched if it has half of the symbols that are passed. if not checked, it must have at least one symbol
    if (curScore > threshold) {
      //push any equations found with the amount of symbols as let passed through by threshold
      found.push({
        eq: equation, //push equation so we can put the markup into the dom
        score: curScore //push score to sort the equations
      });
    }
  }
  let addedToBody = []; //this array is to ensure nothing is added multiple times.
  let loops = 0; //debug variable
  for (foundEquation of found) {
    //for each equation we found to match
    if (addedToBody.indexOf(foundEquation) === -1) {
      //if the found equation hasn't already been put into the array
      loops++; //add to debug variable
      addedToBody.push(foundEquation); //push the found equation to addedToBody, to be sorted and appended to DOM
    }
  }


  //Step 3: Sort array for correct ordering
  //TODO: optimize sort algorthim
  for (let j = 0; j < addedToBody.length; j++) {
    //run loop as many times as we have indexes
    for (let k = 0; k < addedToBody.length - 1; k++) {
      //iterate through each element of array
      if (addedToBody[k].score < addedToBody[k + 1].score) {
        //swap low values so the biggest come first
        let temp = addedToBody[k]; //temp variable so we can swap variables
        addedToBody[k] = addedToBody[k + 1]; //swap values
        addedToBody[k + 1] = temp;
      }
    }
  }
  document.body.getElementsByClassName("equationsWrapper")[0].innerHTML =
    "<h>Equations Containing Symbols (Sorted by number of matching symbols):"; //add a message to label our ouput

  // let color = true;

  //Step 5: Add findings to body and format equations
  for (equ of addedToBody) {
    //for every equation in our sorted array

    if (!document.getElementById("colorSwitch").checked) {
      equ.eq.color = "";
    }

    document.body.getElementsByClassName("equationsWrapper")[0].innerHTML +=
      "<h3 style=background-color:" +
      equ.eq.color +
      ">``" +
      equ.eq.markup +
      "``</h3>"; //add it to the dom. surrounded by "``" so MathJax will parse it as MathML. The style is the color object for background highlighting. worst case we set the background-color to undefined which doesnt really matter
  }

  MathJax.Hub.Typeset(); //parse all equations in the dom
};

//Bind events
window.addEventListener("DOMContentLoaded", function() {
  //listen for keyup events to handle parsing and submitting
  document.getElementById("inputBox").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      submitSymbols();
    } else {
      replaceChars(document.getElementById("inputBox"));
    }
  });
});