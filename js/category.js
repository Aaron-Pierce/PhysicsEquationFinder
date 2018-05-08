//equations comes from equations.js

let categories = {

}

for (equation of equations) {
    if (equation.category !== undefined) {
        if(categories[equation.category] === undefined){
            categories[equation.category] = [equation.markup];
        }else{
            categories[equation.category].push(equation.markup)
        }
    }
}

console.log(categories)

document.addEventListener("DOMContentLoaded", function () {
    console.log("domcontentready")
    for (let key in categories) {

        let templateString = `<li class="collection-item category" onclick="showEquations('${key}')"><div>${key}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>`
        document.getElementById("categoriesNav").innerHTML += templateString;
    }
})

function showEquations(key) {
    document.getElementById("equations").innerHTML = "";
    for (equation of categories[key]) {
        document.getElementById("equations").innerHTML += "<h4>" + equation + "</h4><br>"
    }

    MathJax.Hub.Typeset();
}