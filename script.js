let size = parseInt(prompt("Number of squares per side (Max: 100):"));

while (isNaN(size) || size <= 0 || size > 100) {
    size = parseInt(prompt("Lütfen 1 ile 100 arasında geçerli bir sayı girin:"));
}

console.log(size);

const cont = document.querySelector("#container");

for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("rows");

    for (let j = 0; j < size; j++) {
        const col = document.createElement("div");
        col.classList.add("cols");
        row.appendChild(col);
    }

    cont.appendChild(row);
}

let btn = document.querySelector('#btn');

cont.addEventListener('mouseover',(event) => {
    console.log('clicked');
    event.target.style.backgroundColor = "black";
});