function mainpart(){
    let a = parseInt(document.getElementById("num").value);
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; 

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");
        let pcell = document.createElement("td");
        let vcell = document.createElement("td");

        pcell.innerHTML = `${a} x ${i}`;
        vcell.innerHTML = i * a;

        row.append(pcell,vcell);
        tableBody.append(row);
    }
}