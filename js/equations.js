
let equations = [{
    //markup: ["`V_(avg) = (delta x)/t`"],
    markup: ["`V_(avg) = (Delta x)/(t)` "],
    symbols: ['vbar', 'deltax', 't']
},
{
    markup: ["`V_(fy) = V_(oy) - g t`"],
    symbols: ["vfinal", "vnaught", 'g', "t", "y", "vnaughty", "vfinaly", "blue"],
    color: "blue"
},

{
    markup: ["`Delta y = V_( o y)t - 1/2 g t^2`"],
    symbols: ["deltay", "vnaught", 'g', "t", "y", "vnaughty", "blue"],
    color: "blue"
},
{
    markup: ["`V_f = V_o + at`"],
    symbols: ["vfinal", 'vnaught', 'a', 't', "naughtrange"],
    color: "orange"
},
{
    markup: "`V_f ^ 2 = V_o ^ 2 + 2a Delta x`",
    symbols: ["vfinalsquared", 'vnaughtsquared', 'a', 'delta x', 'vfinal', 'vnaught', "naughtrange"],
    color: "orange"
},
{
    markup: "`V_(f y) ^ 2 = V_(o y) ^ 2 - 2g Delta y`",
    symbols: ["vfinalsquared", 'vnaughtsquared', 'g', 'delta y', 'vfinal', 'vnaught', 'y', "vfinaly", "vnaughty", "deltay", "blue"],
    color: "blue"
},
{
    markup: "`V_(avg) = (V_o + V_f)/2`",
    symbols: ["vbar", "vnaught", "vfinal"]
},
{
    markup: "`a = (V_f - V_o)/t`",
    symbols: ["a", "vfinal", "vnaught", "t"]
},
{
    markup: "`Delta x = V_ot + 1/2 at^2`",
    symbols: ["deltax", "vnaught", "a", "t", "tsquared", "naughtrange"],
    color: "orange"
},
{
    markup: "`Delta x = vt`",
    symbols: ["deltax", "v", "t", "red"],
    color: "#ef5350"
},
{
    markup: "`V = omegar`",
    symbols: ["v", "omega", "r"]
},
{
    markup: "`Delta s = omega rt`",
    symbols: ['deltas', 'omega', 'r', 't']
},
{
    markup: "`Delta theta = (Delta s) / r`",
    symbols: ['deltatheta', 'deltas', 'r']
},
{
    markup: "`omega = (Delta theta)/t`",
    symbols: ['omega', 'deltatheta', 't']
},
{
    markup: "`(-V_(o x) +- sqrt(V_(o x)^2 + 2aDeltax))/2`",
    symbols: ['vnaught', 'a', 'deltax']
},
{
    markup: "`F_g = G(M_1M_2)/r^2`",
    symbols: ["finalg", "g", "m1", "m2", "r"] //[0] is finalg because f is parsed to final
},
{
    markup: '`% "Diff" = abs([(a-b)/((a+b)/2)]100)`',
    symbols: ["%errnaughtr", "percentdifinalference", "percentdifinalference", "%errnaughtr", "percent", "%", "percentdifinalf", "%difinalference", "%difinalf"]
},
{
    markup: "`W = mg`",
    symbols: ["w", "weight", "m", "g"]
},
{
    markup: "`V_l = sqrt(2gDeltay)`",
    symbols: ["vl", "vlaunch", "g", "deltay", "va", "vapex", "launch", "'"]
},
{
    markup: '`V_(apex) = V_l - g((tau)/2)`',
    symbols: ["vapex", "vl", "g", "tau", "t"]
},
{
    markup: "`h = Delta x tan theta`",
    symbols: ["h", "deltax", "tan", "theta", "tantheta"]
},
{
    markup: "`t = (V_(o y) +- sqrt(V_(o y)^2 -2gDeltay))/g`",
    symbols: ["t", "vnaughty", "deltay", "g", "bluequad, blue"],
    color: "blue"
},
{
    markup: "`x(t) = 1/6jt^3 + 1/2a_ot^2 + v_ot+x_o`",
    symbols: ["j", "t", "anaught", "vnaught", "xnaught", "pink"],
    color: "pink"
},
{
    markup: "`v(t) = 1/2jt^2 + a_ot + v_o`",
    symbols: ["j", "anaught", "vnaught", "t", "pink", "secondpink"],
    color: "pink"
},
{
    markup: "`a(t) = j_ot+a_o`",
    symbols: ["jnaught", "anaught", "t", "pink", "thirdpink"],
    color: "pink"
},
{
    markup: "`p = mv`",
    symbols: ["p", "lilp", "m", "v"]
},
{
    markup: "`Delta x = (V_ocostheta)t`",
    symbols: ["deltax", "vnaught", "cos", "costheta", "cnaughts", "cnaughtstheta", "t", "2a", "type2a", "type2prnaughtjectilemnaughtinaughtn"]
},
{
    markup: "`t= (2V_osintheta)/g`",
    symbols: ["vnaught", "sintheta", "sin", "theta", "g", "2a", "type2a", "type2prnaughtjectilemnaughtinaughtn"]
},
{
    markup: "`Deltax_R = (V_o^2sin(2theta))/g`",
    symbols: ["range", "rangeeq", "rangeq", "type2a", "2a", "deltax", "deltaxr", "deltaxrange", "deltaxsubr", "vnaught", "vnaughtsquared", "sin", "sintheta", "sin2theta", "twotheta", "g"]
},
{
    markup: "<img src='./flowchart.jpg'>",
    symbols: ["finallnaughtw", "finallnaughtwchart"]
},
{
    markup: "`M_1V_(o1) + M_2V_(o2) = M_1V_(f1)+M_2V_(o2)`",
    symbols: ["m1", "m2", "m", "vnaught1", "vnaught2", "vnaught", "cnaughtllisnaughtsn", "cnaughtllisnaughtsns", "elastic", "elasticcnaughtllisnaughtsn", "cnaughtllison"]
},
{
    markup: "`M_1V_(o1) + M_2V_(o2) = (M_1+M_2)V_f`",
    symbols: ["m1", "m2", "v1", "v2", "vfinal", "cnaughtllison", "cnaughtllisons", "inelasticcnaughtllision", "inelastic"]
}
];
