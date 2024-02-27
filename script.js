const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = holliday(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = 'El mantenimiento es: '+ flujo + 'cc/hr';
        MAN.innerHTML = 'm+m/2 es de: ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    if (DATO>30){
        let flujo = superficie(DATO) 
        let mantenimiento = flujo*1500
        let mantenimiento2 = flujo*2000
        MAN.innerHTML = "Podria ser: "+ mantenimiento + ' cc/hr';
        FLU.innerHTML = "Como tambien: "+ mantenimiento2 + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
})

function superficie(peso){
    let flujo = ((peso * 4) + 7) / (peso + 90)
    console.log(peso)
    return flujo;
}
function holliday(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

