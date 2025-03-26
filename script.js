document.getElementById("registrationForm").addEventListener("submit", registerUser);

async function registerUser(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let age = document.getElementById("age").value;
    
    if (name && email && mobile && age) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Simulating async processing
        
        let table = document.getElementById("dataTable");
        let row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = email;
        row.insertCell(2).textContent = mobile;
        row.insertCell(3).textContent = age;
        
        document.getElementById("registrationForm").reset();
        document.getElementById("tableContainer").style.display = "block";
    }
}

function sortTable(index) {
    let table = document.getElementById("dataTable");
    let rows = Array.from(table.querySelectorAll("tr"));
    let th = document.getElementsByTagName("th")[index];
    let ascending = th.dataset.order === "asc";
    th.dataset.order = ascending ? "desc" : "asc";
    rows.sort((a, b) => {
        let valA = a.children[index].textContent.trim();
        let valB = b.children[index].textContent.trim();
        return isNaN(valA) || isNaN(valB) ? valA.localeCompare(valB) * (ascending ? 1 : -1) : (valA - valB) * (ascending ? 1 : -1);
    });
    table.append(...rows);
}
