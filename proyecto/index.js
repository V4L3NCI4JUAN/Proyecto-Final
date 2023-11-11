function enter(boton){
    let contenido=document.getElementById('contenido');
    let contenido2=document.getElementById('contenido2');
    if(boton==='continue'){
        if(contenido2.style.display==='none'){
            document.getElementById('contenido').style.display="none"
            document.getElementById('contenido2').style.display="block"
        } else{
            contenido2.style.display='none';
        }
    }
}