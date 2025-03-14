class Topico {
    /**
     * Método que cria um tópico em topicos.html
     * 
     * @param {*} nome Nome do tópico
     * @returns Retorna o elemento para ser inserido na página
     * @throws Erro genérico
     */
    static create(nome, id) {

        try {

            // salvar os dados primeiro

            // Div Pai
            const divPai = document.createElement("div");
            divPai.className = "topico";
            divPai.setAttribute("data-id", id);

            // Parágrafo
            const paragrafo = document.createElement("p");
            paragrafo.className = "topico_name";
            paragrafo.textContent = nome;

            // Botão de editar tópico
            const btnEdit = document.createElement("button");
            btnEdit.className = "button topico_btn";
            btnEdit.id = "editar_topico";
            btnEdit.textContent = "Editar Tópico";

            const btnDados = document.createElement("a");
            btnDados.href = "dados_topicos.html";
            btnDados.className = "button topico_btn";
            btnDados.textContent = "Ver dados";

            // Botão de apagar tópico
            const btnDel = document.createElement("button");
            btnDel.className = "button topico_btn btn_del";
            btnDel.id = "deletar_topico";
            btnDel.textContent = "Apagar";

            // Insere todos os elementos criados na div pai
            divPai.appendChild(paragrafo);
            divPai.appendChild(btnEdit);
            divPai.appendChild(btnDados);
            divPai.appendChild(btnDel);

            // Retorna a div pai 
            return divPai;

        } catch (error) {

            throw new Error(error);
        }
    }

    static read() {
        console.log("read")

    }
    static update() {
        console.log("update")

    }

    static delete(element) {
        
        element.remove();
    }

}
