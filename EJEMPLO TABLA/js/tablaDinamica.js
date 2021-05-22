document.addEventListener("DOMContentLoaded", function(){

    //agrego variables del dom
    let tbody = document.getElementById("tbody");
    let inputPrenda = document.getElementById("ingresoPrenda");
    let inputPrecio = document.getElementById("ingresoPrecio");
    let tFoot = document.getElementById("tfoot");

    let ropa = [
        {
            "prenda": "remera",
            "precio": 600
        },
        {
            "prenda": "buzo",
            "precio": 900
        },
        {
            "prenda": "pantalon",
            "precio": 1000
        },
        {
            "prenda": "campera",
            "precio":  5000
        }
    ];


    function cargarTabla(){
        let trFoot = document.createElement("tr");
        let td1Foot = document.createElement("td");
        let td2Foot = document.createElement("td");
        let total = sumarTotal();
        let porcentaje = 0.15;
        limpiarTabla();
        for (let items of ropa) {
            let nodoTr = document.createElement("tr");
            let nodoTd1 = document.createElement("td");
            let nodoTd2 = document.createElement("td");
            nodoTd1.innerHTML = items.prenda;
            nodoTd2.innerHTML = "$"+items.precio;
            nodoTr.appendChild(nodoTd1);
            nodoTr.appendChild(nodoTd2);
            tbody.appendChild(nodoTr);
        }
        if(total >=10000){
            trFoot.className = "alert alert-success";
            td1Foot.innerHTML = "El total de la compra con descuento es: ";
            td2Foot.innerHTML = (total-(total*porcentaje));
        }else{
            trFoot.className = "alert alert-info";
            td1Foot.innerHTML = "La suma total de la compra es: ";
            td2Foot.innerHTML = total;
        }
       
        trFoot.appendChild(td1Foot);
        trFoot.appendChild(td2Foot);
        tFoot.appendChild(trFoot);
    }

    
    function agregarElemento(){
    
        let ingresoRopa = {
            "prenda": inputPrenda.value,
            "precio": inputPrecio.value
        };

        ropa.push(ingresoRopa);
        cargarTabla();
    }

    function vaciarTabla(){
        ropa = [];
        cargarTabla();
    }


    function limpiarTabla() {
        tbody.innerHTML = "";
        tFoot.innerHTML = "";
    }

    function agregarTresElementos(){
        for(let i=0; i<=2; i++){
            agregarElemento();
        }
    }


    function sumarTotal(){
        let suma = 0;
        for(let items of ropa){
            suma+= parseInt(items.precio);
        }
        return suma;
    }

    document.getElementById("boton-agregarX3").addEventListener("click", agregarTresElementos);
    document.getElementById("boton-vaciar").addEventListener("click", vaciarTabla);
    document.getElementById("boton-agregar").addEventListener("click", agregarElemento);
    cargarTabla();



})