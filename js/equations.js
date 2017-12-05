
let equations = [{
    //markup: ["`V_(avg) = (delta x)/t`"],
    markup: ["`V_(avg) = (Delta x)/(t)` "],
    symbols: ['vbar', 'deltax', 't']
},
{
    markup: ["`V_(fy) = V_(oy) - g t`"],
    symbols: ["vfinal", "vnaught", 'g', "t", "y", "vnaughty", "vfinaly"]
},

{
    markup: ["`Delta y = V_( o y)t - 1/2 g t^2`"],
    symbols: ["deltay", "vnaught", 'g', "t", "y", "vnaughty"]
},
{
    markup: ["`V_f = V_o + at`"],
    symbols: ["vfinal", 'vnaught', 'a', 't']
},
{
    markup: "`V_f ^ 2 = V_o ^ 2 + 2a Delta x`",
    symbols: ["vfinalsquared", 'vnaughtsquared', 'a', 'delta x', 'vfinal', 'vnaught']
},
{
    markup: "`V_(f y) ^ 2 = V_(o y) ^ 2 - 2g Delta y`",
    symbols: ["vfinalsquared", 'vnaughtsquared', 'g', 'delta y', 'vfinal', 'vnaught', 'y', "vfinaly", "vnaughty", "deltay"]
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
    symbols: ["deltax", "vnaught", "a", "t", "tsquared"]
},
{
    markup: "`Delta x = vt`",
    symbols: ["deltax", "v", "t"]
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
}
]
