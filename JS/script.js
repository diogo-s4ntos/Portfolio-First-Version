function reload(){
    window.location.href = 'main.html';
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

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
});

function iniciarAOS() {
    AOS.init({
      duration: 1000,
    });
}
setTimeout(iniciarAOS, 1000);

function hideText(){
    document.getElementById('download-text').style.display = 'none';
    document.getElementById('download-img').style.display = 'flex';
}

function showText(){
    document.getElementById('download-text').style.display = 'flex';
    document.getElementById('download-img').style.display = 'none';
}

function hideText_2(){
    document.getElementById('send-text').style.display = 'none';
    document.getElementById('send-img').style.display = 'flex';
}

function showText_2(){
    document.getElementById('send-text').style.display = 'flex';
    document.getElementById('send-img').style.display = 'none';
}

//TODO: Função para alerta de download do CV
// function alert(){
//     var response = window.confirm('Do you want to continue?');
//     arquivoJaBaixado = true;
//     if(response){
//         document.getElementById('cv').download = 'curriculo-diogo-santos.pdf';
//     }else{
//         document.getElementById('cv').href = 'index.html';
//     }
// }