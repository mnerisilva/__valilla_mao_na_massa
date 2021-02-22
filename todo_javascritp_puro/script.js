const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('form button');
const ulElement = document.querySelector('ul');


buttonElement.onclick = ev => {
    ev.preventDefault();
    if (inputElement.value) {
        const spanTextTarefa = document.createElement('span');
        spanTextTarefa.classList.add('nomeTarefa');
        spanTextTarefa.innerHTML = inputElement.value;
        const btnRemover = document.createElement('button');
        const btnEditar = document.createElement('button');
        btnRemover.classList.add('btnRemover');
        btnEditar.classList.add('btnEditar');
        btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
        btnEditar.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        const liElement = document.createElement('li');
        liElement.appendChild(spanTextTarefa);
        liElement.appendChild(btnRemover);
        liElement.appendChild(btnEditar);
        ulElement.appendChild(liElement);

        btnRemover.onclick = () => {
            ulElement.removeChild(liElement);
        }
        
        btnEditar.onclick = () => {
            //liElement.setAttribute('contentEditable', 'true');
            const spanTarefa = liElement.querySelector('.nomeTarefa');
            spanTarefa.setAttribute('contentEditable', 'true');
            spanTarefa.style.background = 'white';
        }

        inputElement.value = '';
    }
}