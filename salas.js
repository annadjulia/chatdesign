let salasLista = document.getElementById("salasLista");
let mensagensLista = document.getElementById("mensagensLista");

let mainColor = "#D9D9D9";
//document.documentElement.style.setProperty('--mainColor', mainColor);

let salas = [
    {
      "nome": "CosmoChat",
      "id": "#123456",
      "status": "Pública"
    },
    {
      "nome": "Roda da Amizade",
      "id": "#987654",
      "status": "Privada"
    },
    {
      "nome": "Café e conversa",
      "id": "#135790",
      "status": "Pública"
    },
    {
      "nome": "Fantasia Virtual",
      "id": "#947227",
      "status": "Privada"
    },
    {
      "nome": "Mundo dos Sonhos",
      "id": "#457527",
      "status": "Privada"
    },
    {
      "nome": "Cantinho do Humor",
      "id": "#746325",
      "status": "Pública"
    },
    {
      "nome": "Arte e Inspiração",
      "id": "#736213",
      "status": "Pública"
    }
  ]

function entrarSala() {
    window.location.href = "./sala.html";
}

salas.forEach(sala => {
    const div = document.createElement("div");
    if(salas[0] == sala) {
      div.onclick = entrarSala;
      div.style.cursor = "pointer";
    }
    div.classList.add("row");
    div.classList.add("sala");

    const innerCol = document.createElement("div");
    innerCol.classList.add("col");
    innerCol.classList.add("salaInfo");

    const nomeRow = document.createElement("div");
    nomeRow.classList.add("row");
    nomeRow.classList.add("my-1");
    const nomeText = document.createTextNode(sala.nome);
    nomeRow.appendChild(nomeText);

    const idRow = document.createElement("div");
    idRow.classList.add("row");
    idRow.classList.add("my-1");
    const idText = document.createTextNode(sala.id);
    idRow.appendChild(idText);

    const statusRow = document.createElement("div");
    statusRow.classList.add("row");
    statusRow.classList.add("my-1");
    const statusText = document.createTextNode(sala.status);
    statusRow.appendChild(statusText);

    innerCol.appendChild(nomeRow);
    innerCol.appendChild(idRow);
    innerCol.appendChild(statusRow);

    div.appendChild(innerCol);
    salasLista.appendChild(div);
});

//gerar mensagens