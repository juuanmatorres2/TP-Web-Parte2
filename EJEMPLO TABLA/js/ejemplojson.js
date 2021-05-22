document.addEventListener("DOMContentLoaded", function(){

    let equipo = {
        "nombre": "Barcelona FC",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    }
    
    console.log(equipo);
    console.table(equipo);
    console.log("mostrar solamente los puntos");
    console.log(equipo.puntos);
    console.log(equipo.pj / equipo.pg);
    console.log("segundo ejemplo");

    let tabla = [
        {
            "nombre": "Barcelona FC",
            "puntos": 98,
            "pj": 35,
            "pg": 32,
            "pe": 2,
            "pp": 1
        },
        {
            "nombre": "Atlético de Madrid", 
            "puntos": 74,
            "pj": 35,
            "pg": 22,
            "pe": 8,
            "pp": 5
        },
        {
            "nombre": "villa real", 
            "puntos": 56,
            "pj": 0,
            "pg": 23,
            "pe": 12,
            "pp": 41
        }
    ];
    console.log("La cantidad de equipos son: "+tabla.length);
    console.log(tabla[1].nombre);
    console.log(tabla[1].pp);
    console.table(tabla);
    

    let diferencia = document.getElementById("diferencia");
    diferencia.innerHTML = tabla[0].puntos - tabla[1].puntos;
})