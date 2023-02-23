let btn = document.querySelector('.friend')
let btnR = document.querySelector('.computer')
let btnX = document.querySelector('.X')
let btnO = document.querySelector('.O')

btn.addEventListener('click', Shkofriend)
btnX.addEventListener('click', ShkocomputerX)

function Shkofriend() {
    window.open("https://ticc-tac-toee.netlify.app/")
  
}

function ShkocomputerX() {
    window.open("http://127.0.0.1:5500/index.html")
}

btnR.addEventListener('click', function() {
    btnX.style.display = 'block';
    btnO.style.display = 'block';
});

