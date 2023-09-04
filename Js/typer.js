// der er 7 (3+2+2) primitive typer i JavaScript
// Nymber, String & Boolean
// Undefined Null
// Symbol & BigInt ... dem bruger vi ikke

// Der er yderligere 2 tyoer
// Bbject & function

function out(any){
    console.log(any)
}

function outtype(any){
    console.log("type="+ typeof any)
    console.log(any)
}

let b
let arr = [5, "hej", b, null,[1,2,3], {"navn":"kjartan"}, out  ]
arr.forEach(outtype)