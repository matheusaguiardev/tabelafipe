var botaoAdicionar = document.querySelector("#buscar-automovel");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://fipeapi.appspot.com/api/1/carros/veiculos.json");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var automoveis = JSON.parse(resposta);

            console.log(automoveis)
            automoveis.forEach(function(automovel) {
                adicionaPacienteNaTabela(automovel);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
