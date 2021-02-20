const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('form button');
const ulElement = document.querySelector('ul');


buttonElement.onclick = ev => {
    ev.preventDefault();
    if (inputElement.value) {
        const spanTextTarefa = document.createElement('span');
        spanTextTarefa.innerHTML = inputElement.value;
        const btnRemover = document.createElement('button');
        btnRemover.innerHTML = 'REMOVER';
        const liElement = document.createElement('li');
        liElement.appendChild(spanTextTarefa);
        liElement.appendChild(btnRemover);
        ulElement.appendChild(liElement);

        btnRemover.onclick = () => {
            ulElement.removeChild(liElement);
        }

        inputElement.value = '';
    }
}
