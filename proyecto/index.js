let contenido=document.getElementById('contenido');
let contenido2=document.getElementById('contenido2');
let contenido3=document.getElemetById('contenido3');

function enter(boton){
    
    if(boton==='continue'){
        if(contenido2.style.display==='none'){
            document.getElementById('contenido').style.display="none";
            document.getElementById('contenido2').style.display="block";
        } else{
            contenido2.style.display='none';
        }
    }
}
function entrar(boton){
    if(boton==='continue2'){
        if(contenido2.style.display==='block'){
            document.getElementById('contenido2').style.display="none"; 
            document.getElementById('contenido3').style.display="block";
        }
        
    }else{
        contenido3.style.display='none';
    }
}