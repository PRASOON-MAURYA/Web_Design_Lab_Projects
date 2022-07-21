let add = document.getElementById("add")
let sort = document.getElementById("sort")
let unsortarray = document.getElementById("unsortarray")
let sortarray = document.getElementById("sortarray")
let input = document.getElementById("input")
let reset = document.getElementById("reset")

// arr = []
arr = new Array()
add.addEventListener("click", fadd);
sort.addEventListener("click", fsort);
reset.addEventListener("click", freset);

function fadd() {
    x=parseInt(input.value)
    arr.push(x)
    input.value=""
    // let temp = arr.toString()    // let temp = String(arr) 
    unsortarray.innerText="["+arr+"]"
}
function fsort() {
    arr.sort(compareNumbers)
    sortarray.innerText="["+arr+"]"
}
function compareNumbers(a, b) {
    return a - b;
}

function freset() {
    // arr = []
    arr = new Array()
    unsortarray.innerText="["+arr+"]"
    sortarray.innerText="["+arr+"]"
}