let equationsRef = database.collection("equations");

let equationsdb = [];
equationsRef.onSnapshot(function (docs) {
    for(eq of docs.docs){
        eq = eq.data();
        eq.procs = [];
        for(eqSymbol of eq.symbols){
            if(eqSymbol.aliases !== undefined){
                for(symbolAlias of eqSymbol.aliases){
                    while(symbolAlias.indexOf(" ") !== -1 || symbolAlias.indexOf("`") !== -1){
                        symbolAlias = symbolAlias.replace(" ", "")
                        symbolAlias = symbolAlias.replace("`", "")
                    }
                    eq.procs.push(symbolAlias.toLowerCase())
                }
            }
            let symbolname = eqSymbol.name;
            while(symbolname.indexOf(" ") !== -1 || symbolname.indexOf("`") !== -1){
                symbolname = symbolname.replace(" ", "")
                symbolname = symbolname.replace("`", "")
            }
            eq.procs.push(symbolname.toLowerCase())
        }
        equationsdb.push(eq)
    }


});