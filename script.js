
let btn = document.getElementById("btn")
let inpt = document.getElementById("inp")
let pera = document.getElementById("pera")

btn.onclick = () => {

    let x = inpt.value.split(",").reduce(function (acc, crr) {

        if (crr.length > acc.length) {
            return crr
        }
        else {
            return acc
        }
    })

    pera.innerHTML = `Your long string is ${x}`
}