function reload(){
    window.location.href = 'index.html';
}

var menu = document.getElementById('menu');

function menuPhone(checkbox){
    if(checkbox.checked){
        document.body.style.overflow = 'hidden';
        menu.style.transform = 'translateY(0%)';
    }else {
        document.body.style.overflow = 'auto';
        menu.style.transform = 'translateY(-100%)';
    }
}

var input = document.getElementById('phone-button');

function menuClose(){
    input.checked = false;
    document.body.style.overflow = 'auto';
    menu.style.transform = 'translateY(-100%)';
}