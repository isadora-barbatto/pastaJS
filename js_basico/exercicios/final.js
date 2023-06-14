function meuEscorpo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            idade: idade.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${idade.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
};


meuEscorpo();

