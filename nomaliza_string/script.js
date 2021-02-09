

    //console.log('carregou javascript');
    let botao = document.getElementById('btn');
    let botao_limpar = document.getElementById('clear');
    let resultado = document.getElementById('resultado');
    let texto_input = document.getElementById('string');
    console.log(botao);
    let variavel_provisoria = '';

    botao.addEventListener('click', function(){
        console.log('clicou no botão '+texto_input.value);
        console.log('clicou no botão '+texto_input.value);
        let str = texto_input.value;
        let result = '';
        let parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        console.log('parsed '+parsed);
        parced = texto_input.value.toLowerCase();
        console.log(parced);
        result = parsed.toLowerCase().replace(/ /gi, '_');
        result = result.normalize('NFD').replace(/ç/gi, 'c');
        result = result.normalize('NFD').replace(/Ç/gi, 'C');
         /*result = result.replace(/./gi, "");*/
        result = result.replace(/-/gi, "");
        result = result.replace("/", "");
        result = result.replace(/,/gi, "");
        console.log('result: ' + result);
        resultado.innerHTML = result;
        //resultado.select();


    });

    botao_limpar.addEventListener('click', function(){
        texto_input.value = '';
        resultado.innerHTML = '';
    })


// Aula em plataforma de aprendizagem mapeamento de funções, estrutura de cargos e salários, remuneração, benefícios.