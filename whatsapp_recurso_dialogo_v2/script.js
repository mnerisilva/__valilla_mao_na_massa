import { dialogos } from './json.js';

const dialogo = document.querySelector('.dialogo');
const nova_div = document.createElement('div');

let src_personage1 = document.querySelector('.personagem-1 img');
let src_personage2 = document.querySelector('.personagem-2 img');

let pers1_src_func_dig = 'assets/func-digitando.gif';
let pers1_src_func_parado = 'assets/func-idle.gif';

let pers2_src_func_dig = 'assets/chefe-digitando.gif';
let pers2_src_func_parado = 'assets/chefe-idle.gif';


console.log('src: ' + src_personage1)

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



let _bottom = dialogo.offsetHeight * -1;

        tempos.map((intervalo, index) => {
            setTimeout(function(){
                if(todos_div[index].classList.contains('esquerda')){
                    src_personage1.setAttribute('src', pers1_src_func_dig)
                    for(let x=1;x<=2;x++){
                        setTimeout(function(){src_personage1.setAttribute('src', pers1_src_func_dig)}, 2000);
                        setTimeout(function(){src_personage1.setAttribute('src', pers1_src_func_parado)}, 4000);
                    }
                } else if(todos_div[index].classList.contains('direita')) { 
                    src_personage2.setAttribute('src', pers2_src_func_dig)
                    for(let x=1;x<=2;x++){
                        setTimeout(function(){src_personage2.setAttribute('src', pers2_src_func_dig)}, 2000);
                        setTimeout(function(){src_personage2.setAttribute('src', pers2_src_func_parado)}, 4000);
                    }                   
                }
                todos_div[index].classList.add('mostra')
                let altura = todos_div[index].offsetHeight + 70
                console.log('altura: --' + altura)
                console.log('_bottom: ' + _bottom)
                _bottom = (_bottom) + altura;
                console.log('dialogo: ' + _bottom+'px');
                dialogo.style.bottom = _bottom+'px';
            },intervalo)
        })
 


