
function createBD(topico){

    const request = indexedDB.open("Dados", 1);

    request.onupgradeneeded = function(event) {
        const db = event.target.result;

        // Verificar se o object store "topicos" existe antes de criá-lo
        if (!db.objectStoreNames.contains("topicos")) {
            db.createObjectStore("topicos", { keyPath: "id", autoIncrement: true });
        }
    
        // Cria a object store "dados"
        if (!db.objectStoreNames.contains("dados")) {
            db.createObjectStore("dados", { keyPath: "id", autoIncrement: true });
        }
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        console.log("criado com sucesso");
        db.close();

    };

    request.onerror = function(event) {
        console.error("Erro ao abrir banco de dados: ", event.target.error);
    };
}

createBD();