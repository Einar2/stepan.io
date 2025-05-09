let btn_menu = document.getElementById('menu__toggle'); // кнопка меню
let btn_active = false; // проверка открыта меню или нет

let menu_box = document.querySelector('.menu__box') // блок меню

btn_menu.addEventListener('click', () => {
    if(btn_active == false){
        menu_box.style = 'left: 0;'
        btn_active = true;
    }
    else{
        menu_box.style = 'left: -100%;'
        btn_active = false;
    }
})