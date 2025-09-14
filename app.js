let amigos = [];
let numerosSorteados = [];


function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
        if ( nome === "" ) {
            alert("Por favor, insira um nome.");
            return;
        } else {
            amigos.push(nome);
        }

    document.getElementById("amigo").value = "";

document.getElementById("listaAmigos").innerHTML =
amigos.map(amigo => `<li>${amigo}</li>`).join("");
    
}

function sortearAmigo() {  

    if (numerosSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * amigos.length);

    while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = Math.floor(Math.random() * amigos.length);
    }
    numerosSorteados.push(numeroSorteado);


        document.getElementById("resultado").innerHTML = amigos[numeroSorteado];

        console.log(numerosSorteados);
    }