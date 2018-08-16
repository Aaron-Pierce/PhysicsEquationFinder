class Sheet{
  constructor(problemsString){
    this.rawProblems = problemsString.split(",")
  }
}

let sheets = []

let app = new Vue({
    el: '#app',
    data: {
      message: 'Sheet Creator',
      inputState: 0,
    },
    methods: {
      next: function(x){
        sheets.push(new Sheet(this.$refs.sheetProblems.value));
        this.$refs.sheetProblems.value = "";
        document.focus
      }
    }
  })