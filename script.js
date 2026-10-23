
const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nome = document.getElementById("username").value.trim();
    let idade = Number(document.getElementById("user-age").value);
    let assunto = document.getElementById("user-topic").value;
    let mensagem = "";

    if (nome === "" || idade < 1 || idade > 120 || assunto === "") {
        mensagem = "Preencha os dados corretamente!";
    } else if (idade < 18 && assunto === "libras") {
        mensagem = `Olá, ${nome}! Que legal que você quer aprender Libras!`;
    } else if (assunto === "acessibilidade") {
        mensagem = `Obrigado, ${nome}! Sua mensagem sobre acessibilidade é importante.`;
    } else if (assunto === "sugestao") {
        mensagem = `Obrigado pela sugestão, ${nome}! Vamos considerar sua ideia.`;
    } else {
        mensagem = `Obrigado pelo contato, ${nome}! Recebemos seu interesse em Libras.`;
    }

    alert(mensagem);

    let resultado = document.getElementById("resultado");

    if (!resultado) {
        formulario.insertAdjacentHTML("afterend", '<div id="resultado"></div>');
        resultado = document.getElementById("resultado");
    }

    resultado.innerHTML = "<br><p></p>";
    resultado.querySelector("p").textContent = mensagem;
});

formulario.addEventListener("reset", function () {
    const resultado = document.getElementById("resultado");

    if (resultado) {
        resultado.innerHTML = "";
    }
});
