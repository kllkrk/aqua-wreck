function soittajaMenu(soittaja) {
    const soittajalista = document.getElementById("soittajat").children;
    for (let i = 0; i < soittajalista.length; i++) {
        if(soittajalista[i].id === soittaja) {
            soittajalista[i].style.display ="flex";
        }
        else {
            soittajalista[i].style.display ="none";
        }
    }
}
