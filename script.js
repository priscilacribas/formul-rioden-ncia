function submitReport() {
    // Lógica de envio da denúncia
    // ...
 
    // Após o envio, registrar o Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registrado com sucesso:', registration);
                // Redirecionar para a página de confirmação após o registro
                window.location.href = 'confirmacao.html';
            })
            .catch(function(error) {
                console.log('Falha ao registrar o Service Worker:', error);
                // Em caso de falha, ainda redirecionar para a página de confirmação
                window.location.href = 'confirmacao.html';
            });
    } else {
        // Se o navegador não suportar Service Worker, apenas redirecionar para a página de confirmação
        window.location.href = 'confirmacao.html';
    }
}
 