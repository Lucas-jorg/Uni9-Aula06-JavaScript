const form = document.getElementById("meuForm");

form.addEventListener("submit", function(event){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    const erro = document.getElementById("erro");

    erro.textContent = "";

    if(nome.trim() === ""){
        event.preventDefault();
        erro.textContent = "Nome obrigatório";
        return;
    }

    if(!email.includes("@")){
        event.preventDefault();
        erro.textContent = "Email inválido";
        return;
    }

    if(idade <= 0){
        event.preventDefault();
        erro.textContent = "Idade deve ser maior que zero";
        return;
    }

    erro.textContent = "Formulário válido!";
});
