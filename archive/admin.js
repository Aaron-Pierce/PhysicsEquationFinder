    var instance = M.Tabs.init(document.querySelectorAll(".tabs", {}));

    document.getElementById("equationMarkup").addEventListener("keyup", (e) => {
        document.getElementById("markupResult").innerHTML = "`" + document.getElementById("equationMarkup").value + "`";
        MathJax.Hub.Typeset();
    })