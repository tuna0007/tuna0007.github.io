//header nav
function showMenu() {
    document.getElementById("wrap").classList.toggle("active");
}





//Куда пойти что поделать
let where = document.getElementById("where");
let what = document.getElementById("what");
function showListWhere() {
    where.classList.toggle("active");
    what.classList.remove('active')
}
function showListWhat() {
    what.classList.toggle("active");
    where.classList.remove('active')
}
//для выбора и отображения значений в инпуте
function showCity(a){
    document.querySelector('.city').innerHTML = a;
    where.classList.remove("active");
}
function showAct(a){
    document.querySelector('.activity').innerHTML = a;
    what.classList.remove("active");
}

// снять фокусирование при клике в любом месте
window.addEventListener('click', e => { // клик в любом месте
    const target = e.target // эл на который тыкнули

    //проверка не раскрыт ли соседний список

    if (!target.closest('.dropdown-toggle') && !target.closest('.dropdown-content')) { // если этот эл или его родители не список
    where.classList.remove('active') // сворачиваем список, удаляем актив
    what.classList.remove('active') // сворачиваем список, удаляем актив
    }
})






