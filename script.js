const cont = document.querySelector("#container");
const grid = 12;

for (let i = 0; i < grid; i++) {
    const row = document.createElement("div");
    row.classList.add("rows");

    for (let j = 0; j < grid; j++) {
        const col = document.createElement("div");
        col.classList.add("cols");
        row.appendChild(col);
    }

    cont.appendChild(row);
}