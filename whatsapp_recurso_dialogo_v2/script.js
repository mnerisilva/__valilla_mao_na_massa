(function(){
        let conversa = document.querySelector('.conversa');
        let topInicial = window.innerHeight;
        let exibir = document.querySelector('.exibir');
        let proximoAssunto = document.querySelector('.exibir ~ .assunto');
        let personagem_2 = document.querySelector('.personagem-2 img');  
        
        
        conversa.style.top = topInicial+'px';
        conversa.style.top = -250+'px';
        return
        console.log(topInicial);
        console.log(personagem_2)
        console.log(personagem_2.getAttribute('src')); 
        personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        console.log(personagem_2.getAttribute('src'));
        
        
        
        function mostraOla(){ 
                console.log(personagem_2.getAttribute('src')); 
                personagem_2.setAttribute('src', 'assets/chefe-idle.gif');
                console.log(personagem_2.getAttribute('src')); 
                console.log('topInicial: '+topInicial);
                conversa.style.top = (topInicial - 200) +'px';
                exibir.style.opacity = 1;
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        }  
        
        function proximo(){
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
                conversa.style.top = (topInicial - 400) +'px';
                proximoAssunto.classList.add('exibir');
                proximoAssunto.style.opacity = 1;
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        }
        
        function daUmTempoEdigitaDeNovo(){
                personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');
        }
            setTimeout(mostraOla, 1000);
            setTimeout(proximo, 3000);
            setTimeout(daUmTempoEdigitaDeNovo, 3500);
            setTimeout(function(){personagem_2.setAttribute('src', 'assets/chefe-digitando.gif');}, 4500);
            setTimeout(function(){personagem_2.setAttribute('src', 'assets/chefe-idle.gif');}, 5500);
})();