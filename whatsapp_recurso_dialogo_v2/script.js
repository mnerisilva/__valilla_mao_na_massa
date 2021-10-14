import { dialogos } from './json.js';

//console.log(dialogos);

const tempos = [3000, 10000, 16000, 22000, 30000, 36000, 42000];

tempos.map((intervalo, index) => {
    return(
        setTimeout(function(){console.log(dialogos[index].pergunta.text)}, intervalo)
    );
})

