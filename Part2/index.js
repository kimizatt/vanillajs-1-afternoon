console.log("The house always wins!")

let getId = document.getElementById('idInput');
let getColor = document.getElementById("colorInput");

console.log(getId)
console.log(getColor);

function setCard() {
    const card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value
}

function reset() {
    
}
