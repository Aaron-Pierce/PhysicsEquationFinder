let symbols = [{
    proc: ['not', 'naut', 'naght', 'naut'],
    replace: "naught"
},
{
    proc: ["delta"],
    replace: "Δ",
    id: '1'
},
{
    proc: [" not", " naught", " nought", "not", "naught", "nought", " initial", "initial"],
    replace: "₀",
    id: '2'

},
{
    proc: [" final", "final"],
    replace: "_f",
    id: '3'
},
{
    proc: [" bar", "bar"],
    replace: "_(avg)",
    notification: "Your browser does not support the bar symbol, so it will be replaced with subscript avg",
    id: '4'
},
{
    proc: [" final", "final"],
    replace: "_f"
},
{
    proc: ["squared"],
    replace: ["^2"]
},
]

let symbolAlts = [{
    proc: "f",
    replace: "final"
},
{
    proc: "finalinal",
    replace: "final"
},
{
    proc: "o",
    replace: "naught"
},
{
    proc: 'avg',
    replace: 'bar'
},
{
    proc: '^2',
    replace: 'squared'
}

]

