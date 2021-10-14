import { dialogos } from './json.js';

const dialogo = document.querySelector('.dialogo');
const nova_div = document.createElement('div');

//console.log(dialogos);

const tempos = [3000, 6000, 12000, 18000, 26000, 32000, 38000];

tempos.map((intervalo, index) => {
    //return(
            let count = 1;
        setTimeout(function(){
            console.log(dialogos[index].pergunta.text)
            //nova_div.innerHTML = `<p>${dialogos[index].pergunta.text}</p>`;
            let p = document.createElement('p');
            dialogo.append(p);
            let ultimo_p = dialogo.querySelector('p');
            p.classList.add('paragrafo_'+count)
            count++;
            console.log(ultimo_p);
            //ultimo_p.innerHTML(`<span>${dialogos[index].pergunta.text}</span>`);
            //dialogo.append(nova_div);
        },
        intervalo)
    //);
})

