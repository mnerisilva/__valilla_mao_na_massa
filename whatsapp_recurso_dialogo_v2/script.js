import { dialogos } from './json.js';

const dialogo = document.querySelector('.dialogo');
const nova_div = document.createElement('div');

const tempos = [3000, 6000, 12000, 18000, 26000, 32000, 38000, 44000];
const quantidade = tempos.length;

const todos_h3 = document.querySelectorAll('.dialogo h3');

const todos_div = document.querySelectorAll('.dialogo div');
console.log(todos_div);

todos_div.forEach(function(div){
    div.classList.add('esconde');
})




for (let i=0;i<todos_h3.length;i++){    
    todos_h3[i].innerHTML = dialogos[i].pergunta.text
    dialogos[i].personagem === '1' ? todos_h3[i].dataset.posicao = '1' :  todos_h3[i].dataset.posicao = '2'
    todos_h3[i].dataset.posicao == 1 ? todos_h3[i].parentElement.classList.add('direita') : todos_h3[i].parentElement.classList.add('esquerda')
}


//let count = 500;
//let altura = 80;
//let data_id = 1;

//let distancia = 200;

/*let n1 = 30;
let n2 = 200;
let n3 = 400;
let n4 = 600;
let n5 = 800;
let n6 = 1000;
let n7 = 1200;
let n8 = 1400;
let n9 = 1600;
let n10 = 1800;
let n11 = 2000;
let n12 = 2200;
let n13 = 2400;
let n14 = 2600;
let n15 = 2800;
let n16 = 3000;
let n17 = 3200;*/

let _bottom = dialogo.offsetHeight * -1;

        tempos.map((intervalo, index) => {
            setTimeout(function(){
                //let altura = parseInt(todos_div[index].dataset.altura)
                todos_div[index].classList.add('mostra')
                let altura = todos_div[index].offsetHeight + 70
                console.log('altura: --' + altura)
                console.log('_bottom: ' + _bottom)
                _bottom = (_bottom) + altura;
                console.log('dialogo: ' + _bottom+'px');
                dialogo.style.bottom = _bottom+'px';
                /*console.log(dialogos[index].pergunta.text)
                let h3 = document.createElement('h3');
                h3.style.marginBottom = 60+'px';
                h3.dataset.id = data_id.toString();
                let margin_top = h3.style.marginTop.split("vh")
                h3.innerHTML = dialogos[index].pergunta.text;
                dialogo.append(h3);
                let tamanho_node_list = document.querySelectorAll('.dialogo h3').length;
                console.log('tamanho da lista: ' + tamanho_node_list);
                if(tamanho_node_list == 8) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n8+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n7+'px';
                    document.querySelectorAll('.dialogo h3')[2].style.bottom = n6+'px';
                    document.querySelectorAll('.dialogo h3')[3].style.bottom = n5+'px';
                    document.querySelectorAll('.dialogo h3')[4].style.bottom = n4+'px';
                    document.querySelectorAll('.dialogo h3')[5].style.bottom = n3+'px';
                    document.querySelectorAll('.dialogo h3')[6].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[7].style.bottom = n1+'px';
                }
                if(tamanho_node_list == 7) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n7+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n6+'px';
                    document.querySelectorAll('.dialogo h3')[2].style.bottom = n5+'px';
                    document.querySelectorAll('.dialogo h3')[3].style.bottom = n4+'px';
                    document.querySelectorAll('.dialogo h3')[4].style.bottom = n3+'px';
                    document.querySelectorAll('.dialogo h3')[5].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[6].style.bottom = n1+'px';
                    document.querySelectorAll('.dialogo h3')[6].style.right = 30+'px';
                }
                if(tamanho_node_list == 6) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n6+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n5+'px';
                    document.querySelectorAll('.dialogo h3')[2].style.bottom = n4+'px';
                    document.querySelectorAll('.dialogo h3')[3].style.bottom = n3+'px';
                    document.querySelectorAll('.dialogo h3')[4].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[5].style.bottom = n1+'px';
                }
                if(tamanho_node_list == 5) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n5+'pxt';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n4+'px';
                    document.querySelectorAll('.dialogo h3')[2].style.bottom = n3+'px';
                    document.querySelectorAll('.dialogo h3')[3].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[4].style.bottom = n1+'px';
                    document.querySelectorAll('.dialogo h3')[4].style.right = 30+'px';
                }
                if(tamanho_node_list == 4) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n4+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n3+'px';
                    document.querySelectorAll('.dialogo h3')[2].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[3].style.bottom = n1+'px';
                }
                if(tamanho_node_list == 3) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n3+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[2].style.bottom = n1+'px';
                }
                if(tamanho_node_list == 2) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n2+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.bottom = n1+'px';
                    document.querySelectorAll('.dialogo h3')[1].style.right = 30+'px';
                }
                if(tamanho_node_list == 1) {
                    document.querySelectorAll('.dialogo h3')[0].style.bottom = n1+'px';
                    document.querySelectorAll('.dialogo h3')[0].style.right = 30+'px';
                }
                altura = altura - 15;
                count = count - 100;
                data_id = data_id + 1;*/
            },intervalo)
        })
 


