
const arrOpenModalBtn = document.querySelectorAll('.open-modal');


const modal = document.getElementById('modal');  // Модальное окно
const closeModalBtn = document.getElementById('modal-close');  // Кнопка закрыть модальное окно
const modalMenu = document.getElementById('modal-menu');
const openMenuBtn = document.getElementById('open-menu');  // Открыть меню на адаптиве
const closeMenuBtn = document.getElementById('menu-close'); // Закрытие меню


// Массив кнопок которые вызывают модальное окно
arrOpenModalBtn.forEach(e=>{
    e.addEventListener('click',openModal);
})


// Открытие модального окна
function openModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}



// Закрытие модального окна
closeModalBtn.addEventListener('click',closeModal);

function closeModal (e) {
    e.preventDefault();
    modal.animate({opacity:0,},610);
    setTimeout(function(){
        modal.style.display = 'none';
    },600);
    document.body.style.overflow = 'auto';
}




// Открытие меню
openMenuBtn.addEventListener('click',openMenu);

function openMenu(e){
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    modalMenu.style.display = 'flex';
   
}


// Закрытие меню

closeMenuBtn.addEventListener('click',closeMenu);

function closeMenu(e){
    e.preventDefault();
    document.body.style.overflow = 'auto';
    


    modalMenu.animate({opacity:0,},310);
    setTimeout(function(){
        modalMenu.style.display = 'none';
    },300);
}