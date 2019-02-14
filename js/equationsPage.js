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