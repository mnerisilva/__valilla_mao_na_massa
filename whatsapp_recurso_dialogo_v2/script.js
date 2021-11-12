import { obj_dialogo } from "./json.js";

const dialogo = document.querySelector(".dialogo");
const nova_div = document.createElement("div");

let src_personage1 = document.querySelector(".personagem-1 img");
let src_personage2 = document.querySelector(".personagem-2 img");

let pers1_src_func_dig = "assets/func-digitando.gif";
let pers1_src_func_parado = "assets/func-idle.gif";

let pers2_src_func_dig = "assets/chefe-digitando.gif";
let pers2_src_func_parado = "assets/chefe-idle.gif";

console.log("src: " + src_personage1);

//const arrElementosDiv = [];

const elementos = [];

//insereElementoDinamicamente();

const arrDialogoComReflitaResponda = [];

//const tempos = [3000, 6000, 12000, 18000, 26000, 32000, 38000, 44000];
//const tempos = [3000, 6000, 12000, 18000, 26000];
const tempos = [3000, 6000];
const quantidade = tempos.length;

const todos_h3 = document.querySelectorAll(".dialogo h3"); // todos os h3 da div classe "dialogo"

const todos_div = document.querySelectorAll(".dialogo div");
console.log(todos_div);

todos_div.forEach(function (div) {
  div.classList.add("esconde");
});

iteraObjDialogo();
console.log("--- " + arrDialogoComReflitaResponda);

let _bottom = dialogo.offsetHeight * -1;

tempos.map((intervalo, index) => {
  setTimeout(function () {
    /*if (todos_div[index].classList.contains("esquerda")) {
      src_personage1.setAttribute("src", pers1_src_func_dig);
      for (let x = 1; x <= 2; x++) {
        setTimeout(function () {
          src_personage1.setAttribute("src", pers1_src_func_dig);
        }, 2000);
        setTimeout(function () {
          src_personage1.setAttribute("src", pers1_src_func_parado);
        }, 4000);
      }
    } else if (todos_div[index].classList.contains("direita")) {
      src_personage2.setAttribute("src", pers2_src_func_dig);
      for (let x = 1; x <= 2; x++) {
        setTimeout(function () {
          src_personage2.setAttribute("src", pers2_src_func_dig);
        }, 2000);
        setTimeout(function () {
          src_personage2.setAttribute("src", pers2_src_func_parado);
        }, 4000);
      }
    }
    todos_div[index].classList.add("mostra");
    let altura = todos_div[index].offsetHeight + 70;
    console.log("altura: --" + altura);
    console.log("_bottom: " + _bottom);
    _bottom = _bottom + altura;
    console.log("dialogo: " + _bottom + "px");
    dialogo.style.bottom = _bottom + "px";*/
  }, intervalo);
});

// FUNÇÕES DO PROJETO-----------------------------------------------------------------------------------------
function iteraObjDialogo() {
  // itera e popula divs e h3 baseado objeto dialogo - inicio do bloco - [neste ponto os balões ainda estão escondidos, posicionados fora da janela de exibição - window]
  for (let i = 0; i < obj_dialogo.length; i++) {
    let elemento = document.createElement("div");
    let posicao = "";
    obj_dialogo[i].personagem === "1" ? (posicao = "1") : (posicao = "2");
    obj_dialogo[i].personagem === "1"
      ? elemento.classList.add("direita")
      : elemento.classList.add("esquerda");
    elemento.innerHTML = `<h3 data-posicao=${posicao}>${obj_dialogo[i].texto_dialogo.text[0]}<br />${obj_dialogo[i].texto_dialogo.text[1]}</h3>`;
    dialogo.append(elemento);
    let elementoQuestao = document.createElement("div");
    elementoQuestao.classList.add("questao");
    if (obj_dialogo[i].tem_questao === true) {
      elementoQuestao.innerHTML = `
                <div id=${obj_dialogo[i].id_dialogo}>
                  <ul data-id_dialogo=${obj_dialogo[i].id_dialogo} data-index=${i}>
                      <li class="enunciado">${obj_dialogo[i].questao_vinculada[0].enunciado}</li>
                      <li>${obj_dialogo[i].questao_vinculada[1].opcoes[0].op}</li>
                      <li>${obj_dialogo[i].questao_vinculada[1].opcoes[1].op}</li>
                      <li>${obj_dialogo[i].questao_vinculada[1].opcoes[2].op}</li>
                  </ul>
                </div>
            `;
      dialogo.append(elementoQuestao);
      let feed = document.createElement("div");
      feed.innerHTML = `<div class="direita feed">
                    <h3 data-posicao="1">${obj_dialogo[i].questao_vinculada[2].feedbacks[0].feed}</h3>
                  </div>`;
      dialogo.append(elementoQuestao);
      dialogo.append(feed);
      let frase_contexto = document.createElement("div");
      frase_contexto.innerHTML = `<div class="direita feed">
                    <h3 data-posicao="1">${obj_dialogo[i].questao_vinculada[2].feedbacks[0].frase_contexto}</h3>
                  </div>`;
      dialogo.append(frase_contexto);
      let conteudo_complementar = document.createElement("div");
      conteudo_complementar.innerHTML = `<div class="direita feed">
                    <h3 data-posicao="1">${
                      obj_dialogo[i].questao_vinculada[2].feedbacks[0]
                        .conteudo_complementar[0]
                    }<br />
                      ${
                        obj_dialogo[i].questao_vinculada[2].feedbacks[0]
                          .conteudo_complementar[1]
                      }
                      </h3>
                      <br />
                      ${retornaEmbed("hD-ffUPmqGA")}
                  </div>`;
      dialogo.append(conteudo_complementar);
      let _ul = elemento.parentElement.querySelectorAll("ul li");
      _ul.forEach(function (item) {
        if (!item.classList.contains("enunciado")) {
          item.addEventListener("click", _listenerQuestoes);
          console.log(item);
        } // aplica listener nas li´s das opções
      });
    }

    if (obj_dialogo[i].tem_questao === true) {
      arrDialogoComReflitaResponda.push(true);
    } else {
      arrDialogoComReflitaResponda.push("");
    }
  } // itera array de dialogos - fim do bloco
}

function insereElementoDinamicamente() {
  for (let i = 0; i < obj_dialogo.length; i++) {
    elementos[i] = document.createElement("div");
  }
  for (let i = 0; i < obj_dialogo.length; i++) {
    elementos[i].innerHTML = "<h3></h3>";
  }

  for (let i = 0; i < obj_dialogo.length; i++) {
    dialogo.append(elementos[i]);
  }
}

function _listenerQuestoes() {
  console.log("op: " + this.innerHTML);
}

function retornaEmbed(_cod) {
  return `
    
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${_cod}?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;showinfo=0&amp;modestbranding=1&amp;fs=1&amp;rel=0;cc_load_policy=1" allowfullscreen=""></iframe>

  `;
}
