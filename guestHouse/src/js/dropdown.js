function show(a){
    document.querySelector('.drop-toggle').value = a;
}
let dropdown = document.querySelector('.drop');
dropdown.onclick = function(){
    dropdown.classList.toggle('active')
}

window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.drop') && !target.closest('.drop-content')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    dropdown.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
    }
})

