
var botao = document.querySelector("button");
var autosave = document.getElementById("autosave");
var bar = document.createElement("div");
var progressTitle = document.createElement("p");
var progressBar = document.createElement("div");
var id;

autosave.appendChild(progressTitle);
autosave.appendChild(bar);
bar.appendChild(progressBar);

bar.style = "background-color:grey;width:100%;height:2em;"
progressTitle.textContent = "Progresso";
progressTitle.style = "font-weigth:bold;margin:1em 0 0 0";
progressBar.style = "width:1%;height:inherit;background-color:blue;margin-top:.5em;";


function pegaValues(){
    var inputs = document.querySelectorAll("form div input");
    var contador = -6;
    for(var i in inputs){
        if(inputs[i].value !== ""){
            contador++;
        }
    } 
    var width = 25;
    progressBar.style.width = (width * contador) + "%";
    console.log("rodou");
    
};
window.onchange = function () {
    id = setInterval(pegaValues, 1000);
}
botao.onclick = clearInterval(id);



