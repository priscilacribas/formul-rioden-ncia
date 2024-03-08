document.getElementById("denunciaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor
    // Por exemplo, usando XMLHttpRequest, Fetch API ou outra biblioteca/framework de sua escolha
    // Você também precisará enviar a foto, que é um pouco mais complexo devido ao formato de arquivo

    alert("Denúncia enviada com sucesso!"); // Apenas para fins de demonstração
    document.getElementById("denunciaForm").reset(); // Limpa o formulário após o envio
});
