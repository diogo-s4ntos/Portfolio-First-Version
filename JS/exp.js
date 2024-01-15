function exp1(checkbox){
    if (checkbox.checked){
        document.getElementById('exp_point_1').style.backgroundColor = 'rgb(209, 205, 199)';
        document.getElementById('exp_point_2').checked = false;
        document.getElementById('exp_point_2').style.backgroundColor = '#8515c1';
        // document.getElementById('exp_point_3').checked = false;
        // document.getElementById('exp_point_3').style.backgroundColor = '#8515c1';
        // document.getElementById('exp_point_4').checked = false;
        // document.getElementById('exp_point_4').style.backgroundColor = '#8515c1';

        document.getElementById('exp-1').style.display = 'flex';
        document.getElementById('exp-2').style.display = 'none';
        // document.getElementById('exp-3').style.display = 'none';
        // document.getElementById('exp-4').style.display = 'none';
    }
}

function exp2(checkbox){
    if (checkbox.checked){
        document.getElementById('exp_point_2').style.backgroundColor = 'rgb(209, 205, 199)';
        document.getElementById('exp_point_1').checked = false;
        document.getElementById('exp_point_1').style.backgroundColor = '#8515c1';
        // document.getElementById('exp_point_3').checked = false;
        // document.getElementById('exp_point_3').style.backgroundColor = '#8515c1';
        // document.getElementById('exp_point_4').checked = false;
        // document.getElementById('exp_point_4').style.backgroundColor = '#8515c1';

        document.getElementById('exp-1').style.display = 'none';
        document.getElementById('exp-2').style.display = 'flex';
        // document.getElementById('exp-3').style.display = 'none';
        // document.getElementById('exp-4').style.display = 'none';
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

        document.getElementById('exp-1').style.display = 'none';
        document.getElementById('exp-2').style.display = 'none';
        document.getElementById('exp-3').style.display = 'flex';
        document.getElementById('exp-4').style.display = 'none';
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

        document.getElementById('exp-1').style.display = 'none';
        document.getElementById('exp-2').style.display = 'none';
        document.getElementById('exp-3').style.display = 'none';
        document.getElementById('exp-4').style.display = 'flex';
    }
}