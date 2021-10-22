const btnMove = document.querySelector('#move');
const divImgCar = document.querySelector('.car');

let position = 0;
//btnMove.addEventListener('click', () => {
    document.addEventListener('keydown', (e) => {
    position = position - 600;
    document.querySelector('.car').style.backgroundPositionX =  position + 'px' ;
    console.log('cliquei');
    console.log(position);

});


document.addEventListener('keydown', (e) => {
    console.log(e.key)
})