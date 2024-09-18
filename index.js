document.addEventListener("DOMContentLoaded", function() {
    _init();
});

function onSendMessage() {
    _montaBodyMensagem();
    _limpaCampoInput();
    _scrollToBottomBehavior();
}

function _limpaCampoInput() {
    let inputMensagem = document.getElementsByClassName("input-chat")[0];
    inputMensagem.value = "";
}

function _montaBodyMensagem() {
    let body = document.getElementsByClassName("body-chat")[0];
    let inputMensagem = document.getElementsByClassName("input-chat")[0];
    let bodyMessage = _getDefaultBodyMessage(inputMensagem.value);
    body.appendChild(bodyMessage)
}

function _getDefaultBodyMessage(message) {
    // Cria a div principal com a classe "sent-message"
    const sentMessageDiv = document.createElement('div');
    sentMessageDiv.classList.add('sent-message');
    
    // Cria a div que irá conter o corpo da mensagem
    const bodyMessageDiv = document.createElement('div');
    bodyMessageDiv.classList.add('body-message');
    
    // Cria o label "Você diz:" com o estilo especificado
    const labelTitle = document.createElement('label');
    labelTitle.style.fontSize = '18px';
    labelTitle.style.width = 'fit-content';
    labelTitle.textContent = 'Você diz:';
    
    // Cria a div que irá envolver o conteúdo da mensagem
    const messageContentDiv = document.createElement('div');
    messageContentDiv.classList.add('message-content');
    messageContentDiv.classList.add('sent');
    
    // Cria o label que conterá a mensagem em si
    const labelMessage = document.createElement('label');
    labelMessage.classList.add('message-label');
    labelMessage.textContent = message;
    
    // Monta a estrutura dos elementos
    messageContentDiv.appendChild(labelMessage);  // Adiciona o label da mensagem dentro da div de conteúdo
    bodyMessageDiv.appendChild(labelTitle);       // Adiciona o label "Você diz:" no corpo da mensagem
    bodyMessageDiv.appendChild(messageContentDiv); // Adiciona a div de conteúdo no corpo da mensagem
    sentMessageDiv.appendChild(bodyMessageDiv);   // Adiciona o corpo da mensagem na div principal
    
    // Retorna o nó HTML completo
    return sentMessageDiv;
}

function _scrollToBottomBehavior() {
    document.getElementsByClassName("body-chat")[0]
        .scroll({
            top: document.getElementsByClassName("body-chat")[0].scrollHeight, 
            behavior: 'smooth'
        });
}

function _init() {
    document.getElementById("input_chat_id")
        .addEventListener("keyup", event => {
            event.preventDefault();
            if (event.keyCode === 13)
                onSendMessage();
        });
}