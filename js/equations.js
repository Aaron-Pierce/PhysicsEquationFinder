
let equations = [{
    //markup: ["`V_(avg) = (delta x)/t`"],
    markup: "`V_(avg) = (Delta x)/(t)` ",
    symbols: ['vbar', 'deltax', 't'],
    category: "basic"
},
{
    markup: "`V_(fy) = V_(oy) - g t`",
    symbols: ["vfinal", "vnaught", 'g', "t", "y", "vnaughty", "vfinaly", "blue"],
    color: "blue",
    category: "blue equations"
},

{
    markup: "`Delta y = V_( o y)t - 1/2 g t^2`",
    symbols: ["deltay", "vnaught", 'g', "t", "y", "vnaughty", "blue"],
    color: "blue",
    category: "blue equations"
},
{
    markup: "`V_f = V_o + at`",
    symbols: ["vfinal", 'vnaught', 'a', 't', "naughtrange"],
    color: "orange",
    category: "orange equations"
},
{
    markup: "`V_f ^ 2 = V_o ^ 2 + 2a Delta x`",
    symbols: ["vfinalsquared", 'vnaughtsquared', 'a', 'delta x', 'vfinal', 'vnaught', "naughtrange"],
    color: "orange",
    category: "orange equations"
},
{
    markup: "`V_(f y) ^ 2 = V_(o y) ^ 2 - 2g Delta y`",
    symbols: ["vfinalsquared", 'vnaughtsquared', 'g', 'delta y', 'vfinal', 'vnaught', 'y', "vfinaly", "vnaughty", "deltay", "blue"],
    color: "blue",
    category: "blue equations"
},
{
    markup: "`V_(avg) = (V_o + V_f)/2`",
    symbols: ["vbar", "vnaught", "vfinal"],
    category: "basic"
},
{
    markup: "`a = (V_f - V_o)/t`",
    symbols: ["a", "vfinal", "vnaught", "t"],
    category: "basic"
},
{
    markup: "`Delta x = V_ot + 1/2 at^2`",
    symbols: ["deltax", "vnaught", "a", "t", "tsquared", "naughtrange"],
    color: "orange",
    category: "orange equations"
},
{
    markup: "`Delta x = vt`",
    symbols: ["deltax", "v", "t", "red"],
    color: "#ef5350",
    category: "basic"
},
{
    markup: "`V = omegar`",
    symbols: ["v", "omega", "r"],
    category: "circular motion"
},
{
    markup: "`Delta s = omega rt`",
    symbols: ['deltas', 'omega', 'r', 't'],
    category: "circular motion"
},
{
    markup: "`Delta theta = (Delta s) / r`",
    symbols: ['deltatheta', 'deltas', 'r'],
    category: "circular motion"
},
{
    markup: "`omega = (Delta theta)/t`",
    symbols: ['omega', 'deltatheta', 't'],
    category: "circular motion"
},
{
    markup: "`(-V_(o x) +- sqrt(V_(o x)^2 + 2aDeltax))/2`",
    symbols: ['vnaught', 'a', 'deltax'],
    category: "orange equations"
},
{
    markup: "`F_g = G(M_1M_2)/r^2`",
    symbols: ["finalg", "g", "m1", "m2", "r"], //[0] is finalg because f is parsed to final
    category: "basic"
},
{
    markup: '`% "Diff" = abs([(a-b)/((a+b)/2)]100)`',
    symbols: ["%errnaughtr", "percentdifinalference", "percentdifinalference", "%errnaughtr", "percent", "%", "percentdifinalf", "%difinalference", "%difinalf"],
    category: "useful math equations"
},
{
    markup: "`W = mg`",
    symbols: ["w", "weight", "m", "g"],
    category: "basic"
},
{
    markup: "`V_l = sqrt(2gDeltay)`",
    symbols: ["vl", "vlaunch", "g", "deltay", "va", "vapex", "launch", "'"],
    category: "rocket equations"
},
{
    markup: '`V_(apex) = V_l - g((tau)/2)`',
    symbols: ["vapex", "vl", "g", "tau", "t"],
    category: "rocket equations"
},
{
    markup: "`h = Delta x tan theta`",
    symbols: ["h", "deltax", "tan", "theta", "tantheta"],
    category: "rocket equations"
},
{
    markup: "`t = (V_(o y) +- sqrt(V_(o y)^2 -2gDeltay))/g`",
    symbols: ["t", "vnaughty", "deltay", "g", "bluequad, blue"],
    color: "blue",
    category: "blue equations"
},
{
    markup: "`x(t) = 1/6jt^3 + 1/2a_ot^2 + v_ot+x_o`",
    symbols: ["j", "t", "anaught", "vnaught", "xnaught", "pink"],
    color: "pink",
    category: "pink equations"
},
{
    markup: "`v(t) = 1/2jt^2 + a_ot + v_o`",
    symbols: ["j", "anaught", "vnaught", "t", "pink", "secondpink"],
    color: "pink",
    category: "pink equations"
},
{
    markup: "`a(t) = j_ot+a_o`",
    symbols: ["jnaught", "anaught", "t", "pink", "thirdpink"],
    color: "pink",
    category: "pink equations"
},
{
    markup: "`p = mv`",
    symbols: ["p", "lilp", "m", "v"],
    category: "basic"
},
{
    markup: "`Delta x = (V_ocostheta)t`",
    symbols: ["deltax", "vnaught", "cos", "costheta", "cnaughts", "cnaughtstheta", "t", "2a", "type2a", "type2prnaughtjectilemnaughtinaughtn"],
    category: "projectile motion"
},
{
    markup: "`t= (2V_osintheta)/g`",
    symbols: ["vnaught", "sintheta", "sin", "theta", "g", "2a", "type2a", "type2prnaughtjectilemnaughtinaughtn"],
    category: "projectile motion"
},
{
    markup: "`Deltax_R = (V_o^2sin(2theta))/g`",
    symbols: ["range", "rangeeq", "rangeq", "type2a", "2a", "deltax", "deltaxr", "deltaxrange", "deltaxsubr", "vnaught", "vnaughtsquared", "sin", "sintheta", "sin2theta", "twotheta", "g"],
    category: "projectile motion"
},
{
    markup: "<img src='./flowchart.jpg'>",
    symbols: ["finallnaughtw", "finallnaughtwchart"],
    category: "projectile motion"
},
{
    markup: "`M_1V_(o1) + M_2V_(o2) = M_1V_(f1)+M_2V_(o2)`",
    symbols: ["m1", "m2", "m", "vnaught1", "vnaught2", "vnaught", "cnaughtllisnaughtsn", "cnaughtllisnaughtsns", "elastic", "elasticcnaughtllisnaughtsn", "cnaughtllison"],
    category: "collisions"
},
{
    markup: "`M_1V_(o1) + M_2V_(o2) = (M_1+M_2)V_f`",
    symbols: ["m1", "m2", "v1", "v2", "vfinal", "cnaughtllison", "cnaughtllisons", "inelasticcnaughtllision", "inelastic"],
    category: "collisions"
},
{
    markup: "`F_s = -kx`",
    symbols: ["finals", "k", "x", "hnaughtokes", "hnaughtoke", "hnaughtokeslaw", "hnaughtoke'slaw", "hnaughtok", "hnaughtoks"],
    category: "spring equations"
},
{
    markup: "`F = ma`",
    symbols: ["final", "m", "a", "finalnaughtrce"],
    category: "newtons equations"
},
{
    markup: "`f_s = M_sn`",
    symbols: ["cnaughtefinalfecientoffricton", "finals", "ms", "n", "mu", "mk"],
    category: "basic"
},
{
    markup: "`m_1v_(o1) + m_2v_(o2) = (m_1+m_2)v_f`",
    symbols: ["m1", "vnaught1", "m1vnaught1", "cnaughtllision", "chanughtllisions", "inelastic"],
    category: "collisions"
},
{
    markup: "`m_1v_(o1) + m_2v_(o2) = m_1v_(f1) + m_2v_(f2)`",
    symbols: ["m1", "vfinal1", "m1vfinal1", "cnaughtllision", "chanughtllisions", "elastic"],
    category: "collisions"
},
{
    markup: "`W = normvecf cdot normvec(Deltas)`",
    symbols: ["w", "final", "deltas", "deltax", "deltay", "wnaughtrk", "finalnaughtrce"],
    category: "Packet 6 (Work, elevator, etc.)"
},
{
    markup: "`sin(a)/a = sin(b)/b = sin(c)/c`",
    symbols: ["lawnaughtfinalsines", "sines", "pully", "pullyland", "pulley", "pulleyland", "lnaughts", "tensinaughtn", "t"],
    category: "useful math equations"
},
{
    markup: "`n=m(g+a)`",
    symbols: ["n", "m", "g", "a", "elevatnaughtr", "elevatnaughtreq", "elevatnaughtrequation", "intertia", "elevater", "elevatereq", "elevaterequatinaughtn"],
    category: "Packet 6 (Work, elevator, etc.)"
},
{
    markup: "`vecF_(a->b) = -vecF_(b->a)`",
    symbols: ["newtnaughtn", "newtnaughtns", "newtnaughtn's", "newtnaughtnthird", "newtnaughtn'ssecond", "newtnaughtn'ssecondlaw", "secnaughtndlaw", "newtnaughtn'slawsn", "newtnaughtnslaw", "secnaughtndlaw", "2ndlaw", "newtnaughtns2nd", "newtnaughtn2nd", "newtnaughtn's2nd", "newtnaughtns3rd", "newtnaughtnsthird", "newtnaughtn'sthird", "newtnaughtn's3"],
    category: "newtons equations"
},
{
    markup: "`vec(F)  = vec(Deltap)/t`",
    symbols: ["final", "finalnaughtrce", "deltap", "t", "impulse", "impulseequatinaughtn", "i"],
    category: "Packet 6 (Work, elevator, etc.)"
},
{
    markup:"`F_t=dotmv_e`",
    symbols: ["finalt", "finalnaughtrcet", "mdnaughtt", "m", "ve", "v", "e", "escapevelnaughtcity", "finallux", "massfinallux", "thrust", "rnaughtcket", "thrustequatinaughtn", "rnaughtcketequation"],
    category: "rocket equations"
},
{
    markup: "`vec(F) *t = DeltavecP = text(Impulse)`",
    symbols: ["impulse", "final", "t", "deltap", "p", "lilp", "i"],
    category: "Packet 6 (Work, elevator, etc.)"
},
{
    markup: "`U_g = mgh`",
    symbols: ["u", "ug", "m", "g", "mg", "h"],
    category: "Packet 6 (Work, elevator, etc.)"
},
{
    markup: "`SigmaW =Deltak`",
    symbols: ["sigmaw", "w", "summatinaughtnwork", "w", "wnaughtrk", "deltak", "k"],
    category: "Packet 6 (Work, elevator, etc.)"
},
{
    markup: "`Deltak = 1/2mv_f^2-1/2mv_o^2`",
    symbols: ["sigmaw", "w", "summatinaughtnwork", "w", "wnaughtrk", "deltak", "k", "m", "vfinal", "v", "vnaught", "mass"],
    category: "Packet 6 (Work, elevator, etc.)"
}
];
