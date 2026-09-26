const API_URL = "http://127.0.0.1:5000/employees";

async function loadEmployees() {

    try {

        console.log("Tentando acessar:", API_URL);

        const response = await fetch(API_URL);

        console.log("Response:", response);

        const employees = await response.json();

        console.log("Employees:", employees);

        document.getElementById("employee-count").textContent =
            employees.length;

        const container =
            document.getElementById("employees-container");

        container.innerHTML = "";

        employees.forEach(employee => {

            container.innerHTML += `
                <div class="employee-card">
                    <h3>${employee.name}</h3>
                    <p>${employee.position}</p>
                    <p>${employee.email}</p>
                </div>
            `;

        });

    } catch (error) {

        console.error("ERRO COMPLETO:", error);

    }

}

loadEmployees();

