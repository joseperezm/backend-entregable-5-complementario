const socket = io();

// Función para inicializar el chat una vez que el usuario se une
function initializeChat(userEmail) {
    // Escuchar por el historial de mensajes y mostrarlos
    socket.on('load all messages', function(messages) {
        messages.forEach(function(message) {
            displayMessage(message);
        });
    });

    // Manejar el envío de mensajes
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const messageInput = document.getElementById('input');
        if (messageInput.value) {
            // Enviar el mensaje junto con el correo del usuario
            socket.emit('chat message', { user: userEmail, message: messageInput.value });
            messageInput.value = '';
        }
    });

    // Recibir y mostrar mensajes nuevos
    socket.on('chat message', function(data) {
        displayMessage(data);
    });
}

// Función para mostrar mensajes en la página
function displayMessage(data) {
    const item = document.createElement('li');
    item.textContent = `${data.user}: ${data.message}`;
    document.getElementById('messages').appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}

// Función para manejar la unión al chat
document.getElementById('joinChat').addEventListener('click', function() {
    const userEmail = document.getElementById('userEmail').value;
    if (userEmail) {
        document.getElementById('user-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
        initializeChat(userEmail);
    }
});