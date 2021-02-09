        (function(){
            console.log('carreguei o javascript');
            let pre = document.querySelector('pre');
            let prism = document.querySelector('.prism');
            let get = document.getElementById('botao');

            botao.addEventListener('click', function(){                
                let textarea = document.getElementById('texto');
                console.log(textarea.value);
                console.log('cliquei no botão');
                //code.innerHTML = '';
                textoSemTagScript = textarea.value.replace(/<script>/g,"")
                prism.innerHTML = `<pre class="code language-jsx line-numbers"><code class="brush: js language-jsx">${textoSemTagScript}</code></pre>`;
                let code = document.querySelector('code');
                Prism.highlightElement(code);
            });
            //console.log(code.innerHTML);
        })();