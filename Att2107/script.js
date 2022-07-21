// //tagname, id, class
// var texto = document.getElementsByTagName("h1");

// //console.log(texto);

// var titulo = document.getElementById("titulo");

// //console.log(titulo);

// var aluno = {
//     nome: "Fulano",
//     matricula: 234578
// }

// titulo.innerHTML = `Nome : ${aluno.nome} </br> Matricula : ${aluno.matricula}`;

// titulo.style.color = "green";
// //titulo.style.margin = "200px";

// var mensagem = document.getElementById("mensagem");

// mensagem.style.display = "block";

// var divisao = document.getElementsByClassName("divisao");

// //document.querySelector();
// //document.querySelectorAll();

// var titulo2 = document.querySelector("#titulo");
// var div = document.querySelectorAll(".divisao");
// var msg = document.querySelector("h1");

// console.log(div);

var busca = document.querySelector("#busca");

var linhas = document.querySelectorAll("tr");

function buscarNome() {

    linhas.forEach(Linha => {
        let temp = Linha.querySelector("td")//[1];
        // console.log(temp);
        //console.log(temp[1], temp[2]);
        if (temp != null) {
            if (temp.innerHTML == busca.value) {
                alert("Encontrei");
            }
        }
    });
}

