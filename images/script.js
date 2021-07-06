let pizzaMenu = document.getElementById('pizza-menu')
let pastaMenu = document.getElementById('pasta-menu')
let startersMenu = document.getElementById('starters-menu')

function showPizzaMenu(){
    pastaMenu.style.display = 'none';
    startersMenu.style.display = 'none'
    pizzaMenu.style.display = 'flex';
}

function showPastaMenu(){
    pizzaMenu.style.display = 'none';
    startersMenu.style.display = 'none'
    pastaMenu.style.display = 'flex';
}

function showStartersMenu(){
    pizzaMenu.style.display = 'none';
    pastaMenu.style.display = 'none'
    startersMenu.style.display = 'flex';
}