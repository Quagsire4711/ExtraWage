function calculation(){

    var a = document.getElementById('AllOvertime').value;
    var m = document.getElementById('MidnightWorktime').value;
    var h = document.getElementById('HolidayWorktime').value;
    var b = document.getElementById('BaseWage').value;
    var r = document.getElementById('Regulartime').value;
    var ar, mr, hr, OF;

    b /= r;

    if(a < 60){
        ar = 5 * a / 4;
    }
    else{
        ar = (3 * a - 30) / 2;
    }
    
    mr = m / 4;
    
    hr = 27 * h / 20;
    
    OF = b * (ar + mr + hr);
    
    document.getElementById('output').innerHTML = 'あなたの月想定割増賃金は' + OF.toFixed(1) + '円/月です。';
}
