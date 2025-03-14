function save(nomeTopico){

    const request = indexedDB.open("Dados", 1);

    request.onsuccess = function(event){
        const db = event.target.result;

        const trasacao = db.transaction("topicos", "readwrite");
        const topicosStore = trasacao.objectStore("topicos");

        const topicoDado = { nome: nomeTopico };

        const addRequest = topicosStore.add(topicoDado);

        addRequest.onsuccess = function(){
            console.log("Tópico adicionado com sucesso");
        }

        addRequest.oneerror = function(event){
            console.log(event.target.error);
        }

        trasacao.oncomplete = function(){
            db.close();
        }

        trasacao.oneerror = function(event){
            console.log(event.target.error);
        }
    }

    request.onerror = function(event){
        console.log(event.target.error);
    }
}


function read(callback) {
    
    const request = indexedDB.open("Dados", 1);
    let topicosArray = [];

    request.onsuccess = function(event) {
        const db = event.target.result;

        // Inicia uma transação de leitura na object store "topicos"
        const transaction = db.transaction("topicos", "readonly");
        const topicosStore = transaction.objectStore("topicos");

        // Cria um cursor para percorrer todos os itens da object store
        const cursorRequest = topicosStore.openCursor();

        cursorRequest.onsuccess = function(event) {
            const cursor = event.target.result;

            if (cursor) {
                topicosArray.push(cursor.value);

                cursor.continue();
            } else {
                callback(topicosArray);
            }
        };

        cursorRequest.onerror = function(event) {
            console.error("Erro ao buscar tópicos: ", event.target.error);
        };

        // Fecha o banco de dados após a transação
        transaction.oncomplete = function() {
            db.close();
        };

        transaction.onerror = function(event) {
            console.error("Erro na transação: ", event.target.error);
        };
    };

    request.onerror = function(event) {
        console.error("Erro ao abrir banco de dados: ", event.target.error);
    };
}

function deleteTopicoById(idTopico) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("Dados", 1);

        request.onsuccess = function(event) {
            const db = event.target.result;
            const trasacao = db.transaction("topicos", "readwrite");
            const topicosStore = trasacao.objectStore("topicos");

            const deleteRequest = topicosStore.delete(idTopico);

            deleteRequest.onsuccess = function() {
                console.log("Tópico deletado com sucesso");
                resolve();
            }

            deleteRequest.onerror = function(event) {
                reject(event.target.error);
            }

            trasacao.oncomplete = function() {
                db.close();
            }

            trasacao.onerror = function(event) {
                reject(event.target.error);
            }
        }

        request.onerror = function(event) {
            reject(event.target.error);
        }
    });
}