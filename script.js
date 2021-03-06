const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll); 
   function animOnScroll() {
        // создаем цикл for, чтобы получить переменную animItem каждый из элементов массива //
     for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 50;
        
        // от высоты браузера отнимаем высоту объекта поделенную на коэфф // 
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        
        // если прокрутили дальше, чем позиция объекта - точка старта, но при этом меньше, чем позиция объекта + его высота, то в этом моменте и добавляем класс //
        
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_activated');
        } else {
            animItem.classList.remove('_activated');
        }
      }
    }
        // на сколько объект находится ниже страницы (cверху и слева) //
    function offset(el) {
         const rect = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }  
    } 
   
}
   
animOnScroll();



var formElement=document.forms.INFO;
    formElement.onsubmit=validateInfoForm;

    function validateInfoForm() {

        var emailElement=formElement.elements.EMAIL;

        var emailValue=emailElement.value;
       

        if ( emailValue.length>30 ) {
            alert('Введите пожалуйста email не длиннее 30 символов!');
            fioElement.focus();
            return false;
        }

        return true;
    }

    
    
    
    
