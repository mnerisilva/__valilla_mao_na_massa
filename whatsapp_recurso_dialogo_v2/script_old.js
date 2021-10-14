
        const dialogo = document.querySelector('.dialogo');
        let topInicial = window.innerHeight;
        const exibir = document.querySelector('.exibir');
        const proximoTema = document.querySelector('.exibir ~ .tema');
        const nodeListTemas = document.querySelectorAll('.tema');
        const personagem_2 = document.querySelector('.personagem-2 img'); 
        
        let temasArray = Array.from(nodeListTemas);

        console.log('proximosTemas: '+document.querySelectorAll('.tema'));

        let indice = 0;
        let tempo = 3000;
        
        
        //dialogo.style.top = topInicial+'px';
        //dialogo.style.top = -250+'px';
        //return
        console.log(topInicial);
        console.log(personagem_2)
        console.log(personagem_2.getAttribute('src')); 
        personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        console.log(personagem_2.getAttribute('src'));
        
        
        
        function mostraOla(){ // aqui ele mostra apenas o balão inicial: "Olá!"
                personagem_2.setAttribute('src', 'assets/chefe-idle.gif');
                dialogo.style.top = topInicial + 'px';
                topInicial = topInicial - 300;
                //exibir.style.opacity = 1;
                temasArray[0].classList.add('exibir');
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        }  
        
        function proximo(){ // aqui ele mostra o primeiro índice do nodelist que contém todas as classes "tema" que têm um total de 7 índices
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
                dialogo.style.top = topInicial + 'px';
                topInicial = topInicial - 300;
                //temasArray[2].classList.add('exibir');
                temasArray[indice].classList.add('exibir');
                //temasArray[2].style.opacity = 1;
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
                console.log('indice '+indice)
                if(indice === 6){
                   clearInterval(intervalo);
                } else {
                   indice = indice + 1;
                }
        }
        
        function daUmTempoEdigitaDeNovo(){
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        }
            //setTimeout(mostraOla, 1000);
            setTimeout(proximo, 1000);
            let intervalo = setInterval(proximo, tempo);
            //setTimeout(proximo, 3000);
                //setInterval(proximo, 3000);
                /*setTimeout(proximo(2), 3000);
                setTimeout(proximo(3), 3000);
                setTimeout(proximo(4), 3000);
                setTimeout(proximo(5), 3000);
                setTimeout(proximo(6), 3000);*/
            setTimeout(daUmTempoEdigitaDeNovo, 3500);
            setTimeout(function(){personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');}, 4500);
            setTimeout(function(){personagem_2.setAttribute('src', 'assets/chefe-idle.gif');}, 5500);
