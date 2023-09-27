//для отображения значений в инпуте
function show(a){
    document.querySelector('.drop-toggle').value = a;
}
let dropdown = document.querySelector('.drop');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}

window.addEventListener('click', e => { // клик в любом месте
    const target = e.target // эл на который тыкнули
    if (!target.closest('.drop-toggle') && !target.closest('.drop-content')) { // если этот эл или его родители не дропдаун
    dropdown.classList.remove('active') // сворачиваем список, удаляем актив
    }
})




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showMenu() {
    document.getElementById("menuWrap").classList.toggle("active");
    console.log('POPAL')
}

// window.addEventListener('click', el => { // клик в любом месте
//     const targett = el.target // эл на который тыкнули
//     console.log("popadanie 100")
//     if (!targett.closest('.btn-wrap') && !targett.closest('.header-nav-menu-wrapper')) { // если этот эл или его родители не дропдаун
//     dropdown.classList.remove('active') // сворачиваем список, удаляем актив
//     }
// })





