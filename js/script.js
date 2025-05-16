// Quando a página carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Seleciona o formulário

    // Quando o formulário for enviado
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede que a página recarregue
        alert("Mensagem enviada com sucesso!"); // Mostra uma mensagem
        form.reset(); // Limpa o formulário
    });
});
