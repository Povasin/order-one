$(document).ready(function(){
    $("#menu").on("click","a"   , function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

let news1 = document.getElementById("news1")
let news2 = document.getElementById("news2")
let news3 = document.getElementById("news3")
let modalWindow = document.getElementById("modalWindow")
let modalBtn = document.getElementById("modalBtn")

news1.addEventListener("click", ()=>{
    modalWindow.classList.add("modal")
})
modalBtn.addEventListener("click", ()=>{
    modalWindow.classList.remove("modal")
})