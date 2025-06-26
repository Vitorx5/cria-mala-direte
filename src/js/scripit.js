const getColuna = document.getElementById("cria-coluna");
const getButton = document.getElementById("adiciona-input");
const recebeColuna = document.getElementById("crud-form");

const criaColuna = getButton.onclick = () => {
    event.preventDefault();

    const nomeInput = getColuna.value.trim();

    if(nomeInput === "") {
        alert("Por favor, preencha o campo.");
        return;
    }

    const buttonDelet = document.createElement("button");
    buttonDelet.textContent = "Deletar";
    buttonDelet.classList.add("btn-deletar");
    buttonDelet.onclick = () => {
        if(confirm("Você tem certeza que deseja deletar esta coluna?")) {
            recebeColuna.removeChild(novoInput);
            recebeColuna.removeChild(buttonDelet);
            getColuna.value = "";
        }
    }
    const novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.name = nomeInput;
    novoInput.placeholder = nomeInput;

    recebeColuna.appendChild(novoInput);
    recebeColuna.appendChild(buttonDelet);
    getColuna.value = "";
};

criaColuna(); 