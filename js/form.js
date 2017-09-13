var botaoAdicionar = document.querySelector("#buscar-automovel");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemAutomovelDoFormulario(form);

    console.log(form);
    console.log(paciente);
    
    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemAutomovelDoFormulario(form) {

    var automovel = {
        nome: form.nome.value,
        marca: form.marca.value,
        ano: form.ano.value,
        modelo: form.modelo.value,
    }

    return automovel;
}

function montaTr(automovel) {
    var automovelTr = document.createElement("tr");
    automovelTr.classList.add("automovel");
    
    automovelTr.appendChild(montaTd(automovel.name, "info-nome"));
    automovelTr.appendChild(montaTd(automovel.peso, "info-marca"));
    automovelTr.appendChild(montaTd(automovel.altura, "info-preco"));
    automovelTr.appendChild(montaTd(automovel.gordura, "info-ano"));
    automovelTr.appendChild(montaTd(automovel.imc, "info-modelo"));

    return automovelTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(automovel) {
    var automovelTr = montaTr(automovel);
    var tabela = document.querySelector("#tabela-automovel");
    tabela.appendChild(automovelTr);
}
