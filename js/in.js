let count = 0

let countEL = document.getElementById("counting")
let p = document.getElementById("entry")



function increment() {
    count += 1
    countEL.innerText = count
}

function save() {
    p.textContent += count + " - "
    count = 0
    countEL.innerText = count
}