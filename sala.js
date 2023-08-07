const mensagensLista = document.getElementById("mensagensLista");
const mensagens = document.getElementsByClassName("msg");
const quadroCores = document.getElementById("quadroCores");
const paleta = document.getElementById("paleta");
const body = document.getElementsByTagName("body")[0];
let nomeSala = document.getElementById("nomeSala");
const mensagensMae = document.querySelector('#mensagensMae');
const myId = "15";

function alturaMensagensLista() {
    const barraElement = document.querySelector('.barra');
    const barraHeight = parseFloat(getComputedStyle(barraElement).height);
  
    const windowHeight = window.innerHeight;
    const mensagensMaeHeight = windowHeight - (barraHeight * 2);
    
    mensagensMae.style.height = mensagensMaeHeight + 'px';
}
  
document.addEventListener('DOMContentLoaded', alturaMensagensLista);
window.addEventListener('resize', alturaMensagensLista);

paleta.onclick = function() {
    if(quadroCores.style.display == "none") {
        quadroCores.style.display = "block";
    } else {
        quadroCores.style.display = "none";
    }
}

const coresAzul = ["#01114D","#001E64","#309ED5","#0A4780","#105FA0"];
const coresRoxo = ["#9A00B0","#27002D","#580066","#50005B","#860097"];
const coresVerde = ["#106800","#062100","#159100","#0E5A00","#093500"];
const coresCinza = ["#444444","#101010","#121212","#5C5C5C","#363636"];

let mainColors = coresAzul;

function trocarCor(cor) {
    if(cor==1) {
        cor=coresAzul;
        body.style.backgroundImage = "url('./media/blue-background.jpg')";
    }
    if(cor==2) {
        cor=coresRoxo;
        body.style.backgroundImage = "url('./media/purple-background.jpg')";
    }
    if(cor==3) {
        cor=coresVerde;
        body.style.backgroundImage = "url('./media/green-background.jpg')";
    }
    if(cor==4) {
        cor=coresCinza;
        body.style.backgroundImage = "url('./media/gray-background.jpg')";
    }
    mainColors = cor;
    Array.from(mensagens).forEach(msg => {
        let userId = msg.dataset.userId;
        let msgCol = msg.querySelector(".msgCol");
        let msgRows = msg.querySelectorAll(".msgRow");
        let indiceCor = userId % 5;
        msgCol.style.backgroundColor = mainColors[indiceCor];

        msgRows.forEach(msgRow => {
            msgRow.style.color = mainColors[indiceCor];
        });
    });
    
    document.documentElement.style.setProperty('--mainColor', cor[0]);
}

let msgs = [
    {
        "nick": "Ana",
        "id": "14",
        "msg": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus mollis nulla sed pellentesque. Praesent neque mauris, molestie quis massa vel, elementum feugiat sem.",
        "time": "12:00 - 14/07/2023"
    },
    {
        "nick": "João",
        "id": "11",
        "msg": "Praesent vestibulum sodales arcu, vel tristique lacus ultricies molestie.",
        "time": "12:01 - 14/07/2023"
    },
    {
        "nick": "Ana",
        "id": "14",
        "msg": "Aenean a lacus quis lacus fringilla euismod rutrum non lacus. Sed varius magna lectus, sed blandit metus dignissim sit amet. Duis sollicitudin vel dui nec ultricies. Quisque ligula nunc, auctor nec orci sed, posuere convallis massa. Fusce ut consectetur quam.",
        "time": "12:02 - 14/07/2023"
    },
    {
        "nick": "Carol",
        "id": "15",
        "msg": "Sed ut elit ultrices, maximus massa ac, placerat ligula. Sed sit amet gravida nulla. Quisque mattis tincidunt rutrum.",
        "time": "12:03 - 14/07/2023"
    },
    {
        "nick": "Pedro",
        "id": "12",
        "msg": "Sed ut elit ultrices, maximus massa ac, placerat ligula. Sed sit amet gravida nulla. Quisque mattis tincidunt rutrum.",
        "time": "12:03 - 14/07/2023"
    },
    {
        "nick": "João",
        "id": "11",
        "msg": "Sed ut elit ultrices, maximus massa ac, placerat ligula. Sed sit amet gravida nulla. Quisque mattis tincidunt rutrum.",
        "time": "12:04 - 14/07/2023"
    },
    {
        "nick": "Maria",
        "id": "13",
        "msg": "Sed ut elit ultrices, maximus massa ac, placerat ligula. Sed sit amet gravida nulla. Quisque mattis tincidunt rutrum.",
        "time": "12:05 - 14/07/2023"
    },
    {
        "nick": "Pedro",
        "id": "12",
        "msg": "Praesent vestibulum sodales arcu, vel tristique lacus ultricies molestie.",
        "time": "12:05 - 14/07/2023"
    }
];

msgs.forEach(msg => {
    const div = document.createElement("div");
    div.dataset.userId = msg.id;
    div.classList.add("row");
    div.classList.add("msg");
    let indiceCor = msg.id%5;

    const innerCol = document.createElement("div");
    innerCol.classList.add("col");
    innerCol.classList.add("msgInfo");
    if(msg.id==myId) innerCol.classList.add("float-end");

    const nickRow = document.createElement("div");
    nickRow.classList.add("row");
    nickRow.classList.add("msgRow");
    nickRow.style.color = mainColors[indiceCor];
    const nickText = document.createTextNode(msg.nick);
    nickRow.appendChild(nickText);

    const msgRow = document.createElement("div");
    msgRow.classList.add("row");
    msgRow.classList.add("msgRow");
    const msgCol = document.createElement("div");
    msgCol.classList.add("col");
    msgCol.classList.add("msgCol");
    msgCol.style.backgroundColor = mainColors[indiceCor];
    const msgText = document.createTextNode(msg.msg);
    msgCol.appendChild(msgText);
    msgRow.appendChild(msgCol);

    const timeRow = document.createElement("div");
    timeRow.classList.add("row");
    timeRow.classList.add("msgRow");
    timeRow.style.color = mainColors[indiceCor];
    const timeText = document.createTextNode(msg.time);
    timeRow.appendChild(timeText);

    innerCol.appendChild(nickRow);
    innerCol.appendChild(msgRow);
    innerCol.appendChild(timeRow);

    div.appendChild(innerCol);

    mensagensLista.appendChild(div);
});

