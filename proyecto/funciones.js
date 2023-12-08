let contenido = document.getElementById('contenido');
let contenido2 = document.getElementById('contenido2');
let contenido_ventana = document.getElementById('contenido_ventana');

function enter(){
    document.getElementById('contenido').style.display="none";
    document.getElementById('contenido2').style.display="block";
}

function dirijirAInicio(){
    window.location.href="inicio.html";
}

function dirijirAQuieroTrabajar(){
    window.location.href="quieroTrabajar.html";
}

function desplegarVentana(){
    document.getElementById('contenido_ventana').style.display='block';
}
function cerrarVentana(){
    document.getElementById('contenido_ventana').style.display='none';
}

function IraRegistrar(){
    window.location.href="ingresar.html";
}
function agregarExperiencia(){
    createElement("input type=file");
}