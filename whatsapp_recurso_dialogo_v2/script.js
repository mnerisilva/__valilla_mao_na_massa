import { dialogos } from './json.js';

const dialogo = document.querySelector('.dialogo');
const nova_div = document.createElement('div');

//console.log(dialogos);

const tempos = [3000, 6000, 12000, 18000, 26000, 32000, 38000];

tempos.map((intervalo, index) => {
    return(
        setTimeout(function(){
            console.log(dialogos[index].pergunta.text)
            //nova_div.innerHTML = `<p>${dialogos[index].pergunta.text}</p>`;
            dialogo.createElement('p').appen
            dialogo.querySelector('p:last-child').textContent(`${dialogos[index].pergunta.text}`);
            //dialogo.append(nova_div);
        },
        intervalo)
    );
})

