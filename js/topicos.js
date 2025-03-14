// Evento que abre e fecha a popup
PopUp(document.getElementById("add_topico"));

// Busca todos os dados para exibi-los na tela
read(function (topicosArray) {

    topicosArray.forEach(dado => {
        document.getElementById("box").appendChild(Topico.create(dado["nome"], dado["id"]));
    });
})

// Evento quando o usuário clicar no botão de submit
document.getElementById("btn_submit_topico").addEventListener("click", function (event) {

    // Previne o refresh
    event.preventDefault();

    // Pega o nome do tópico
    const nome_topico = document.getElementById("nome_topico").value;

    save(nome_topico);

    // Adiciona a caixa onde ficam os tópicos
    document.getElementById("box").appendChild(Topico.create(nome_topico));

});

// Espera 1 segundo para carregar as paradas
setTimeout(function () {
    var topicoDeletado = document.querySelectorAll(".btn_del");

    topicoDeletado.forEach(function (button) {
        button.addEventListener("click", function () {
            const idTopico = button.parentElement.dataset.id;
            
            deleteTopicoById(idTopico).then(() => {
                // Remover o tópico da interface após a exclusão no IndexedDB
                Topico.delete(button.parentElement);
            }).catch((error) => {
                console.log("Erro ao deletar tópico:", error);
            });
        });
    });
}, 1000);
