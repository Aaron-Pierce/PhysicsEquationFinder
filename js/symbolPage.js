let database = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
database.settings(settings);
let symbolRef = database.collection("symbols");

symbolRef.onSnapshot(function (docs) {
  document.getElementById("symbolCardsWrapper").innerHTML = "";
  for (doc of docs.docs) {
    console.log(doc.id)
    document.getElementById("symbolCardsWrapper").innerHTML += `
          <div class="col s12 m2 l2 cardwrapper">
            <div class="card">
              <div class="card-content">
                <span class="card-title">\`${doc.data().markdown}\`</span>
                <p>Symbol Name: ${doc.data().name}</p>
                <p>Aliases: ${doc.data().aliases}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="editSymbol('${doc.id}')" class=" teal-text lighten-4">Edit Symbol</a>
                <a href="#" class="teal-text lighten-4" onclick="deleteSymbol('${doc.id}')">Delete</a>
              </div>
            </div>
          </div>
          `
  }
  MathJax.Hub.Typeset();
})


let editMode = false;
let docToEditId;

function editSymbol(id) {
  editMode = true;
  database.collection("symbols").doc(id).get().then(res => {
    res = res.data()
    document.getElementById("symbol_name").value = res.name;
    document.getElementById("symbol_name_label").classList.add("active");
    document.getElementById("symbol_markdown").value = res.markdown;
    document.getElementById("symbol_markdown_label").classList.add("active");
    document.getElementById("addSymbolMarkupResults").innerHTML = "`" + res.markdown + "`";
    MathJax.Hub.Typeset();
    document.getElementById("symbol_aliases_label").classList.add("active");
    document.getElementById("symbol_aliases").value = res.aliases.join(", ");

    let instance = M.Modal.init(document.querySelector('.modal')).open();
    docToEditId = id;
    console.log("editmode: " + editMode)
  })
}

function clearAddModal() {
  document.getElementById("symbol_name").value = "";
  document.getElementById("symbol_markdown").value = "";
  document.getElementById("addSymbolMarkupResults").innerHTML = "";
  document.getElementById("symbol_aliases").value = "";
  editMode = false;
}

function openAddModal() {
  clearAddModal();
  let instance = M.Modal.init(document.querySelector('.modal')).open(); //this is a pretty terrible hack but it works. And is the only way I've managed to get this modal to work so it's staying
}

function renderAddSymbolMarkup() {
  let input = document.getElementById("symbol_markdown").value;
  document.getElementById("addSymbolMarkupResults").innerHTML = "`" + input + "`";
  MathJax.Hub.Typeset();
}

function submitNewSymbol() {

    let aliases = document.getElementById("symbol_aliases").value
    let finalAlises = [];
    while (aliases.indexOf(" ") !== -1) {
      aliases = aliases.toLowerCase().replace(" ", "")
    }

    finalAlises = aliases.split(",")

    console.log("Editmode at push: " + editMode)

    if(editMode){
      database.collection("symbols").doc(docToEditId).update({
        name: document.getElementById("symbol_name").value,
        markdown: document.getElementById("symbol_markdown").value,
        aliases: finalAlises
      })

    }else{
      database.collection("symbols").add({
        name: document.getElementById("symbol_name").value,
        markdown: document.getElementById("symbol_markdown").value,
        aliases: finalAlises
      })
    }

    let instance = M.Modal.init(document.querySelector('.modal')).close();
  

}

function deleteSymbol(id){
  if(confirm("Are you sure you want to delete this symbol?")){
    symbolRef.doc(id).delete();
  }
}

