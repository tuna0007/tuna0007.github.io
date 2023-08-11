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


// function show(a){
//     document.querySelector('.btn-wrap').value = a;
// }
// let droppo = document.querySelector('.header-nav-menu');
// droppo.onclick = function(){
//     droppo.classList.toggle('active');
// }




