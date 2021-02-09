(function(){
    let elemento = document.querySelector('.elemento');
    window.addEventListener('DOMContentLoaded', () => {
        elemento.classList.add('blue');        
        //elemento.style.marginLeft = "700px";
        
        let somaX = 10;
        let somaY = 10;
        window.addEventListener('keydown', (event) => {
                console.log(event.key);
            if(event.key == 'ArrowRight'){
                somaX = somaX + 10;
                elemento.style.marginLeft = somaX +'px';
            } else if(event.key == 'ArrowLeft'){
                somaX = somaX - 10;                
                elemento.style.marginLeft = somaX +'px';
            } else if(event.key == 'ArrowDown'){
                somaY = somaY + 10;                
                elemento.style.marginTop = somaY +'px';
            } else if(event.key == 'ArrowUp'){
                somaY = somaY - 10;                
                elemento.style.marginTop = somaY +'px';

            }
        });
    });


})();