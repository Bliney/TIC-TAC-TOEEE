let btn = document.querySelector('.friend')
let btnR = document.querySelector('.computer')
let btnX = document.querySelector('.X')
let btnO = document.querySelector('.O')

btn.addEventListener('click', Shkofriend)
btnX.addEventListener('click', ShkocomputerX)

function Shkofriend() {
    window.open("https://playwithfriend.netlify.app/")
  
}

function ShkocomputerX() {
    window.open("")
}

btnR.addEventListener('click', function() {
    btnX.style.display = 'block';
    btnO.style.display = 'block';
});

