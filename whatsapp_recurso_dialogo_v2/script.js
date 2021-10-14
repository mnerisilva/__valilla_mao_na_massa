import { dialogos } from './json.js';

const dialogo = document.querySelector('.dialogo');
const nova_div = document.createElement('div');

//console.log(dialogos);

const tempos = [3000, 6000, 12000, 18000, 26000, 32000, 38000, 44000];
const quantidade = tempos.length;


let count = 500;
let altura = 80;
let data_id = 1;

let distancia = 200;

let n1 = 30;
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
let n17 = 3200;






        tempos.map((intervalo, index) => {
            setTimeout(function(){
                console.log(dialogos[index].pergunta.text)
                let h3 = document.createElement('h3');
                h3.style.marginBottom = 60+'px';
                h3.dataset.id = data_id.toString();
                let margin_top = h3.style.marginTop.split("vh")
                h3.innerHTML = dialogos[index].pergunta.text;
                //p.style.marginTop = 80+"vh";
                //let altura = parseInt(document.querySelectorAll('.dialogo h3')[0]);
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

                //console.log('tamanho do nodelist: ' + document.querySelectorAll('.dialogo h3').length)
                //let ultimo_h3 = dialogo.querySelectorAll('h3');
                //let primeiro_h3 = dialogo.querySelectorAll('h3')[0];
                //primeiro_h3.style.bottom = 600+'px';
                //let x = ultimo_h3[ultimo_h3.length];
                //let ultimo = ultimo_h3.length-1;
                //console.log('ultimo: ' + ultimo);
                //console.log('ultimo_h3: ' + ultimo_h3);
               // ultimo_h3[ultimo].innerHTML = dialogos[index].pergunta.text;
                //primeiro_h3.style.marginTop = altura+'vh';
                //primeiro_h3[ultimo].style.bottom = count+'px';
                //ultimo_h3[ultimo].style.bottom = 0;
                //ultimo_h3[ultimo].style.marginBottom = 150+'px';

                //console.log('_bottom: ' + _bottom)
                //x.innerHTML = dialogos[index].pergunta.text;
                //p.classList.add('paragrafo_'+Math.random())
                altura = altura - 15;
                count = count - 100;
                data_id = data_id + 1
                //console.log('data_id: ' + data_id)
                //console.log('contador'+count)
                //console.log(ultimo_h3);
            },intervalo)
        })
 


