/**
 * Evento que gerencia abertura e fechamento da Popup
 * 
 * @param {*} element_click Elemento que serve de gatilho para abrir a popup (Geralmente um botão)
 */
function PopUp(element_click) {

    var popup_status = false;
    
    // Evento de click no elemento que foi passado no parametro
    element_click.addEventListener("click", function () {

        // Verifica o status da popup
        if(popup_status != false){
            return;
        }

        // Exibe a popup caso o status esteja em false
        document.getElementById("popup").style.display = "block";

        // Atualiza para true o status da popup
        popup_status = true
    });

    // Evento de click para fechar a popup
    document.getElementById("close_popup").addEventListener("click", function(){

        // Verifica o status da popup 
        if(popup_status != true){
            return;
        }
        
        // Se status for true, ele fecha a popup
        document.getElementById("popup").style.display = "none";

        // E seta o status como false
        popup_status = false;
    });


}