const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    setResultado();
})

function setResultado() {
    const resultado = document.querySelector('#resultado');
    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    const imc = Number(peso / (altura * altura));
    resultado.innerHTML = `<p>o imc é ${imc}</p>`;
}
