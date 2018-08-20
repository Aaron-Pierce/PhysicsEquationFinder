let database = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
database.settings(settings);
let symbolRef = database.collection("symbols");

let symbolsdb = [];

symbolRef.onSnapshot(function (docs) {
    symbolsdb = [];
    for (doc of docs.docs) {
        symbolsdb.push(doc.data())
    }

    //bubble sort the symbols by length, so that when we loop through a string to find symbols, it looks for the biggest first, so deltax will return deltax not a, t, and delx
    for (let i = 0; i < symbolsdb.length; i++) {
        for (let j = i + 1; j < symbolsdb.length; j++) {
            // console.log(`i: ${i}; j: ${j}; length: ${markupSymbols.length}`)
            if (symbolsdb[i].markdown.length < symbolsdb[j].markdown.length) {
                let temp = symbolsdb[j];
                symbolsdb[j] = symbolsdb[i];
                symbolsdb[i] = temp;
            }
        }
    }
});