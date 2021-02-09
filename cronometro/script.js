(function(){

    const parseToString = (data) => data = data > 9 ? data.toString() : `0${data.toString()}`;
    
    const clock = () => {
        agora = new Date();
        hora = agora.getHours();
        minutos = agora.getMinutes();
        segundos = agora.getSeconds();
        el_horas.textContent = parseToString(hora);
        el_minutos.textContent = parseToString(minutos);
        el_segundos.textContent = parseToString(segundos);        
    }

    // referencias elementos DOM
    let el_horas = document.querySelector('.horas');
    let el_minutos = document.querySelector('.minutos');
    let el_segundos = document.querySelector('.segundos');
    let hoje, hora, minutos, segundos;
    //
    clock();
    setInterval(clock,1000); 

})();