function site1(checkbox){
    if (checkbox.checked){
        document.getElementById('projeto').src = '../ASSETS/projetos/site1.png';

        document.getElementById('site-1').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site-2').style.border = '3px solid #8515c1';
        document.getElementById('site-2').checked = false;
        document.getElementById('site-3').style.border = '3px solid #8515c1';
        document.getElementById('site-3').checked = false;
        document.getElementById('site-4').style.border = '3px solid #8515c1';
        document.getElementById('site-4').checked = false;

        // document.getElementById('link').href = '#';

        document.getElementById('about-site-1').style.display = 'flex';
        document.getElementById('about-site-2').style.display = 'none';
        document.getElementById('about-site-3').style.display = 'none';
        document.getElementById('about-site-4').style.display = 'none';
    }
}

function site2(checkbox){
    if (checkbox.checked){
        document.getElementById('projeto').src = '../ASSETS/projetos/site2.png';

        document.getElementById('site-2').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site-1').style.border = '3px solid #8515c1';
        document.getElementById('site-1').checked = false;
        document.getElementById('site-3').style.border = '3px solid #8515c1';
        document.getElementById('site-3').checked = false;
        document.getElementById('site-4').style.border = '3px solid #8515c1';
        document.getElementById('site-4').checked = false;

        // document.getElementById('link').href = '#';

        document.getElementById('about-site-1').style.display = 'none';
        document.getElementById('about-site-2').style.display = 'flex';
        document.getElementById('about-site-3').style.display = 'none';
        document.getElementById('about-site-4').style.display = 'none';
    }
}

function site3(checkbox){
    if (checkbox.checked){
        document.getElementById('projeto').src = '../ASSETS/projetos/site3.png';

        document.getElementById('site-3').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site-1').style.border = '3px solid #8515c1';
        document.getElementById('site-1').checked = false;
        document.getElementById('site-2').style.border = '3px solid #8515c1';
        document.getElementById('site-2').checked = false;
        document.getElementById('site-4').style.border = '3px solid #8515c1';
        document.getElementById('site-4').checked = false;

        // document.getElementById('link').href = '#';

        document.getElementById('about-site-1').style.display = 'none';
        document.getElementById('about-site-2').style.display = 'none';
        document.getElementById('about-site-3').style.display = 'flex';
        document.getElementById('about-site-4').style.display = 'none';
    }
}

function site4(checkbox){
    if (checkbox.checked){
        document.getElementById('projeto').src = '../ASSETS/projetos/site4.png';

        document.getElementById('site-4').style.border = '3px solid rgb(209, 205, 199)';
        document.getElementById('site-1').style.border = '3px solid #8515c1';
        document.getElementById('site-1').checked = false;
        document.getElementById('site-2').style.border = '3px solid #8515c1';
        document.getElementById('site-2').checked = false;
        document.getElementById('site-3').style.border = '3px solid #8515c1';
        document.getElementById('site-3').checked = false;

        // document.getElementById('link').href = '#';

        document.getElementById('about-site-1').style.display = 'none';
        document.getElementById('about-site-2').style.display = 'none';
        document.getElementById('about-site-3').style.display = 'none';
        document.getElementById('about-site-4').style.display = 'flex';
    }
}