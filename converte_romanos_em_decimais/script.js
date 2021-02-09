(function(){

    // referências elementos do DOM
    const input_convert = document.getElementById('romano')
    const btn_convert = document.getElementById('btn-convert')
    const result = document.querySelector('.resultado')
    const btn_clear = document.getElementById('clear')    


    const units = ['','I','II','III','IV','V','VI','VII','VIII','IX']
    
    // function
    function indexCheck(arg_unit) {
        const unitResult = units.reduce((accumulator, unit, index) => {
            if(arg_unit === unit){
                return accumulator += index
            }
            return accumulator
        }, 0)
        return unitResult
    }

    function showConvert (number){
        result.innerHTML = `<h2>Convertido para decimal é: ${number}</h2>`
    }
    //

    let decimal;
    let unidade;
    let finalResult;
    let unit;

    btn_convert.addEventListener('click', function(){
        number = input_convert.value
        if (number[0] === 'X' && number[1] === 'X' && number[2] === 'X') {
            decimal = 30;
        } else if (number[0] === 'X' && number[1] === 'X'){
            decimal = 20;
            unit = number.substring(2,number.length)
            unidade = indexCheck(unit)
            finalResult = decimal + unidade
            showConvert(finalResult)
        } else if (number[0] === 'X'){
            decimal = 10;
        }       
    })

    btn_clear.addEventListener('click', function(){
        input_convert.value = '';
        result.innerHTML = '';
    })
})()