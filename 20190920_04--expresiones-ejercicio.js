// Intenta evaluar las expresiones de cabeza
// Si no puedes, sé inteligente y usa la consola

let a = 1 + 3;
let b = 1 + 54.32;
let c = 45 % 5;
let d = 2 % 2;
let e = b++; // tienen truco
let f = a--; // tienen truco
a;
let g = a ** 2;

let h = 2 == 3;
let i = 32 >= 10;
let j = "Hola" == "hola";
let k = true == 1;
let l = "hola " == "hola";
let m = true > false;

let n = (a += 3); // tiene truco

let o = "Hola" + "!!";
o += "!!!!";
let p = "<p>" + "Un párrafo" + "</p>";
let q = "<h1>" + o + "</h1>";
q += p;

let r = true && true;
let s = 2 > 1 || 2 == 4;
let t = !r;

console.log(`
Resultados de las variables:

    a: ${a}
    b: ${b}
    c: ${c}
    d: ${d}
    e: ${e}
    f: ${f}
    g: ${g}
    h: ${h}
    i: ${i}
    j: ${j}
    k: ${k}
    l: ${l}
    m: ${m}
    n: ${n}
    o: ${o}
    p: ${p}
    q: ${q}
    r: ${r}
    s: ${s}
    t: ${t}

Pero más importante que las variables es entender las expresiones
que se evalúan retornando un valor que se guarda en una variable.
Se guarda siendo un número un string o un booleano...

---------

`);
