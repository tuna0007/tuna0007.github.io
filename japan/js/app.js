//header nav
function showMenu() {
    document.getElementById("wrap").classList.toggle("active");
}



//Куда пойти что поделать
let where = document.getElementById("where");
let what = document.getElementById("what");
let searchBtn = document.getElementById("search");
//Отображение списка
function showListWhere() {
    where.classList.toggle("active");
    what.classList.remove('active');
    hideButton();
}
function showListWhat() {
    what.classList.toggle("active");
    where.classList.remove('active');
    hideButton();
}
//для выбора и отображения значений в инпуте
function showCity(a){
    document.querySelector('.city').innerHTML = a;
    where.classList.remove("active");
    searchBtn.style["display"] = "block";
}
function showAct(a){
    document.querySelector('.activity').innerHTML = a;
    what.classList.remove("active");
    searchBtn.style["display"] = "block";
}
// снять фокусирование при клике в любом месте
window.addEventListener('click', e => { // клик в любом месте
    const target = e.target // эл на который тыкнули

    if (!target.closest('.dropdown-toggle') && !target.closest('.dropdown-content')) { // если этот эл или его родители не список
        where.classList.remove('active'); // сворачиваем список, удаляем актив
        what.classList.remove('active'); // сворачиваем список, удаляем актив
        searchBtn.style["display"] = "block";
    }
})
//прячем кнопочку при маленьком разрешении чтобы не съезжала вниз
function hideButton() {
    let w = document.documentElement.clientWidth;
    if (w < 400) {
        searchBtn.style["display"] = "none";
    }
}




