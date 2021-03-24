const cpf = document.getElementById('cpf')
const cpfString = cpf.value
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')

let validCpf = false;

const botaoValida = document.querySelector('.btn-valida')

function geraArrayFator(factor, arrayCpfP1){
    const newArray = arrayCpfP1.map((item) => {
        console.log(item)
        factor--
        return item * factor
    })
    return newArray  
}

function reduceArrayFator(arrayFactor){
    const soma = arrayFactor.reduce((soma, item) => {
        return soma + item;
    },0)
    return soma    
}

botaoValida.addEventListener('click', function(e){
    e.preventDefault()
    console.log('clicou no botaõ')
    console.log(cpf.value)
    p1.innerHTML = cpf.value.substring(0,9)
    p2.innerHTML = cpf.value.substring(9)
    const digito1 = p2.innerHTML.substring(0,1)
    const digito2 = p2.innerHTML.substring(1)
    const arrayP1 = Array.from(p1.innerHTML)
    
    let somaArrayFator = reduceArrayFator(geraArrayFator(11,arrayP1))

    let modulo = (somaArrayFator * 10) % 11

    
    console.log(typeof parseInt(digito1))

    if(modulo === parseInt(digito1)){
        console.log('cpf validado !!!')
    } else {
        console.log('cpf INVÁLIDO !!!')
    }


})



