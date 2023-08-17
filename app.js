const flujoDeCaja = [
    { periodo: "Enero", ingreso: 1500, egreso: 1500 },
    { periodo: "Febrero", ingreso: 2500, egreso: 2500 },
    { periodo: "Marzo", ingreso: 84683, egreso: 1155 },
    { periodo: "Abril", ingreso: 135353, egreso: 1533 },
    { periodo: "Mayo", ingreso: 1535, egreso: 5434 },
    { periodo: "Junio", ingreso: 4343354, egreso: 5434543 },
    { periodo: "Julio", ingreso: 435453, egreso: 4543 },
    { periodo: "Agosto", ingreso: 78351, egreso: 7816 },
    { periodo: "Septiembre", ingreso: 1878, egreso: 95634 },
    { periodo: "Octubre", ingreso: 48483, egreso: 9433 },
    { periodo: "Noviembre", ingreso: 35483, egreso: 53133 },
    { periodo: "Diciembre", ingreso: 3843, egreso: 348133 }
];

function calcularResultado() {
    let totalIngresos = 0;
    let totalEgresos = 0;

    flujoDeCaja.forEach(mes => {
        totalIngresos += mes.ingreso;
        totalEgresos += mes.egreso;
    });

    const resultado = totalIngresos - totalEgresos;
    return resultado;
}

function actualizarTabla() {
    const tableBody = document.getElementById("tableBody");
    const resultElement = document.getElementById("result");

    tableBody.innerHTML = "";

    flujoDeCaja.forEach(mes => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${mes.periodo}</td>
            <td>${mes.ingreso}</td>
            <td>${mes.egreso}</td>
        `;
        tableBody.appendChild(row);
    });

    const resultado = calcularResultado();
    resultElement.textContent = resultado >= 0 ? "Genera ganancias" : "Genera pérdidas";
}

window.onload = function () {
    actualizarTabla();
};
