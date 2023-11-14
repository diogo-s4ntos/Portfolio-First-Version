function reload(){
    window.location.href = 'index.html';
}

function validarNumero(input){
    //Remove qualquer caractere que não seja um número
    input.value = input.value.replace(/[^0-9]/g, '');
}

function validarLetras(input){
    //Remove qualquer caractere que não seja uma letra (maiúscula ou minúscula)
    input.value = input.value.replace(/[^A-Za-z]/g, '');
}

function exp1(checkbox){
    if (checkbox.checked){
        document.getElementById('exp_point_1').style.backgroundColor = 'rgb(209, 205, 199)';
        document.getElementById('exp_point_2').checked = false;
        document.getElementById('exp_point_2').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_3').checked = false;
        document.getElementById('exp_point_3').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_4').checked = false;
        document.getElementById('exp_point_4').style.backgroundColor = '#8515c1';

        document.getElementById('exp_1').style.display = 'block';
        document.getElementById('exp_2').style.display = 'none';
        document.getElementById('exp_3').style.display = 'none';
        document.getElementById('exp_4').style.display = 'none';
    }
}

function exp2(checkbox){
    if (checkbox.checked){
        document.getElementById('exp_point_2').style.backgroundColor = 'rgb(209, 205, 199)';
        document.getElementById('exp_point_1').checked = false;
        document.getElementById('exp_point_1').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_3').checked = false;
        document.getElementById('exp_point_3').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_4').checked = false;
        document.getElementById('exp_point_4').style.backgroundColor = '#8515c1';

        document.getElementById('exp_1').style.display = 'none';
        document.getElementById('exp_2').style.display = 'block';
        document.getElementById('exp_3').style.display = 'none';
        document.getElementById('exp_4').style.display = 'none';
    }
}

function exp3(checkbox){
    if (checkbox.checked){
        document.getElementById('exp_point_3').style.backgroundColor = 'rgb(209, 205, 199)';
        document.getElementById('exp_point_1').checked = false;
        document.getElementById('exp_point_1').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_2').checked = false;
        document.getElementById('exp_point_2').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_4').checked = false;
        document.getElementById('exp_point_4').style.backgroundColor = '#8515c1';

        document.getElementById('exp_1').style.display = 'none';
        document.getElementById('exp_2').style.display = 'none';
        document.getElementById('exp_3').style.display = 'block';
        document.getElementById('exp_4').style.display = 'none';
    }
}

function exp4(checkbox){
    if (checkbox.checked){
        document.getElementById('exp_point_4').style.backgroundColor = 'rgb(209, 205, 199)';
        document.getElementById('exp_point_1').checked = false;
        document.getElementById('exp_point_1').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_2').checked = false;
        document.getElementById('exp_point_2').style.backgroundColor = '#8515c1';
        document.getElementById('exp_point_3').checked = false;
        document.getElementById('exp_point_3').style.backgroundColor = '#8515c1';

        document.getElementById('exp_1').style.display = 'none';
        document.getElementById('exp_2').style.display = 'none';
        document.getElementById('exp_3').style.display = 'none';
        document.getElementById('exp_4').style.display = 'block';
    }
}

///////////////////////////////////////

function site1(checkbox){
    if (checkbox.checked){
        document.getElementById('monitor').style.backgroundImage = 'url(sites/site1.png)';

        document.getElementById('site_1').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site_2').style.border = '3px solid #8515c1';
        document.getElementById('site_2').checked = false;
        document.getElementById('site_3').style.border = '3px solid #8515c1';
        document.getElementById('site_3').checked = false;
        document.getElementById('site_4').style.border = '3px solid #8515c1';
        document.getElementById('site_4').checked = false;

        document.getElementById('link').href = '#';

        document.getElementById('about_site_1').style.display = 'block';
        document.getElementById('about_site_2').style.display = 'none';
        document.getElementById('about_site_3').style.display = 'none';
        document.getElementById('about_site_4').style.display = 'none';
    }
}

function site2(checkbox){
    if (checkbox.checked){
        document.getElementById('monitor').style.backgroundImage = 'url(sites/site2.png)';

        document.getElementById('site_2').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site_1').style.border = '3px solid #8515c1';
        document.getElementById('site_1').checked = false;
        document.getElementById('site_3').style.border = '3px solid #8515c1';
        document.getElementById('site_3').checked = false;
        document.getElementById('site_4').style.border = '3px solid #8515c1';
        document.getElementById('site_4').checked = false;

        document.getElementById('link').href = '#';

        document.getElementById('about_site_1').style.display = 'none';
        document.getElementById('about_site_2').style.display = 'block';
        document.getElementById('about_site_3').style.display = 'none';
        document.getElementById('about_site_4').style.display = 'none';
    }
}

function site3(checkbox){
    if (checkbox.checked){
        document.getElementById('monitor').style.backgroundImage = 'url(sites/site3.png)';

        document.getElementById('site_3').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site_1').style.border = '3px solid #8515c1';
        document.getElementById('site_1').checked = false;
        document.getElementById('site_2').style.border = '3px solid #8515c1';
        document.getElementById('site_2').checked = false;
        document.getElementById('site_4').style.border = '3px solid #8515c1';
        document.getElementById('site_4').checked = false;

        document.getElementById('link').href = '#';

        document.getElementById('about_site_1').style.display = 'none';
        document.getElementById('about_site_2').style.display = 'none';
        document.getElementById('about_site_3').style.display = 'block';
        document.getElementById('about_site_4').style.display = 'none';
    }
}

function site4(checkbox){
    if (checkbox.checked){
        document.getElementById('monitor').style.backgroundImage = 'url(sites/site4.png)';

        document.getElementById('site_4').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site_1').style.border = '3px solid #8515c1';
        document.getElementById('site_1').checked = false;
        document.getElementById('site_2').style.border = '3px solid #8515c1';
        document.getElementById('site_2').checked = false;
        document.getElementById('site_3').style.border = '3px solid #8515c1';
        document.getElementById('site_3').checked = false;

        document.getElementById('link').href = '#';

        document.getElementById('about_site_1').style.display = 'none';
        document.getElementById('about_site_2').style.display = 'none';
        document.getElementById('about_site_3').style.display = 'none';
        document.getElementById('about_site_4').style.display = 'block';
    }
}