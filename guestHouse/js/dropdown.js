function show(a){
    document.querySelector('.drop-toggle').value = a;
}
let dropdown = document.querySelector('.drop');
dropdown.onclick = function(){
    dropdown.classList.toggle('active')
}