let categoriesRef = database.collection("categories")

let categories = [];

let categoriesObj = {}; //this only exists for the autocomplete function

categoriesRef.onSnapshot(function (docs) {
    for(category of docs.docs){
        category = category.data()
        categories.push(category.name)
        categoriesObj[category.name] = ""
    }
});