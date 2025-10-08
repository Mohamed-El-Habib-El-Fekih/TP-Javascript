function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age === undefined)
        console.log("name : " + name + " Age : Age n'est pas fournis");
    else
        console.log("name : " + name + " Age : " + age);
}
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    var cpt = 1;
    for (var i = 0; i < exp; i++)
        cpt *= base;
    return cpt;
}
function combine(a, b) {
    if (typeof a === "string" && typeof b === "string")
        return a + b;
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    throw new Error("impossible");
}
