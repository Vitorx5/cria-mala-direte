const getColuna = document.getElementById("cria-coluna");
const getButton = document.getElementById("adiciona-input");
const recebeColuna = document.getElementById("crud-form");

getButton.onclick = (event) => {
    event.preventDefault();

    const nomeInput = getColuna.value.trim();

    if(nomeInput === "") {
        alert("Por favor, preencha o campo.");
        return;
    }

    // Cria um container para o input e o botão
    const container = document.createElement("div");
    container.classList.add("coluna-container");

    const novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.name = nomeInput;
    novoInput.placeholder = nomeInput;

    const buttonDelet = document.createElement("button");
    buttonDelet.type = "button"; // Evita submit do form
    buttonDelet.textContent = "Deletar";
    buttonDelet.classList.add("btn-deletar");

    // Correção: previne bug de foco ao deletar
    buttonDelet.addEventListener('pointerdown', (e) => {
      e.preventDefault();
    });

    buttonDelet.onclick = () => {
        if(confirm("Você tem certeza que deseja deletar esta coluna?")) {
            recebeColuna.removeChild(container);
            getColuna.value = "";
            getColuna.focus();
        }
    }

    container.appendChild(novoInput);
    container.appendChild(buttonDelet);
    recebeColuna.appendChild(container);

    getColuna.value = "";
    getColuna.focus();
};