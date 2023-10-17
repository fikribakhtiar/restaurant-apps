import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';


const drawer = document.querySelector('#drawer');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menu.addEventListener('click', function (event){
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function (){
    drawer.classList.remove('open');
})

main.addEventListener('click', function (){
    drawer.classList.remove('open');
})