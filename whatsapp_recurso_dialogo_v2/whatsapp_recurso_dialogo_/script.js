
let ola = document.querySelector('.ola');
let personagem_2 = document.querySelector('.personagem-2 img');            
//ola.classList.remove('esconde-ola');
//ola.classList.add('mostra-ola'); 
console.log(personagem_2)
console.log(personagem_2.getAttribute('src')); 
personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
console.log(personagem_2.getAttribute('src'));



function mostraOla(){  
        console.log(personagem_2.getAttribute('src')); 
        personagem_2.setAttribute('src', 'assets/chefe-idle.gif');
        console.log(personagem_2.getAttribute('src')); 
        ola.style.top = '-255px';
        ola.style.opacity = 1;
        ola.style.transition = 'all .6s';
}  
    setTimeout(mostraOla, 1500);


