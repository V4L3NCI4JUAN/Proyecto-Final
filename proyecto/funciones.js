let contenido = document.getElementById('contenido');
let contenido2 = document.getElementById('contenido2');
let contenido3 = document.getElementById('contenido3');


function GestionHumana(){
    let emailEmpresa = document.getElementById('email_empresa').value;
    let passwordEmpresa = document.getElementById('password_empresa').value;

    if(emailEmpresa === 'villaflorempresa@gmail.com' && passwordEmpresa  === 'gestionhumana123'){
        window.location.href="perfilGestionHumana.html"
    } else{
        alert('La direccion de correo o la contraseña son incorrectos. Por favor vuelva a intentarlo.')
    }
}

function enter(boton) {
    if(boton === 'boton1'){
        if(contenido2.style.display === 'none'){
            contenido2.style.display = 'block';
            contenido.style.display = 'none';
        }else{
            contenido2.style.display = 'none';
        }
    }
    if(boton === 'boton2'){
        if(contenido3.style.display === 'none'){
            contenido3.style.display = 'block';
            contenido.style.display = 'none';
        }else{
            contenido3.style.display = 'none';
        }
    }
}
function dirijirAInicio(){
    window.location.href="inicio.html";
}
function dirijirAQuieroTrabajar(){
    window.location.href="quieroTrabajar.html";
}


function enviar(){
    const nombre = document.getElementById("nombre").value;
    const primerApellido = document.getElementById("primerApellido").value;
    const segundoApellido = document.getElementById("segundoApellido").value;
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const documento = document.getElementById("documento").value;
    const estadoCivil = document.getElementById("estadoCivil").value;
    const celular = document.getElementById("celular").value;
    const correo = document.getElementById("correo").value;
    const paisNacimiento = document.getElementById("paisNacimiento").value;
    const departamentoNacimiento = document.getElementById("departamentoNacimiento").value;
    const ciudadNacimiento = document.getElementById("ciudadNacimiento").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const paisResidencia = document.getElementById("paisResidencia").value;
    const departamentoResidencia = document.getElementById("departamentoResidencia").value;
    const ciudadResidencia = document.getElementById("ciudadResidencia").value;
    const direccion = document.getElementById("direccion").value;
    const barrio = document.getElementById("barrio").value;
    const cargo = document.getElementById("cargo").value;

    const datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"))||[];
    datosPersonales.push({nombre,primerApellido,segundoApellido,tipoDocumento,documento,estadoCivil,celular,correo,
    paisNacimiento,departamentoNacimiento,ciudadNacimiento,fechaNacimiento,paisResidencia,departamentoResidencia,
    ciudadResidencia,direccion,barrio,cargo});

    localStorage.setItem("datosPersonales", JSON.stringify(datosPersonales));
    alert("Datos enviados exitosamente");
    mostrar();
}
function mostrar(){
    const listaDatos = document.getElementById("listaDatos");
    listaDatos.innerHTML='';
    const datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"))||[];
    longitud = datosPersonales.length-1;
    console.log(longitud);
    console.log(datosPersonales[longitud]);
    /*datosPersonales.forEach((dato)=>{*/
        const listItem = document.createElement("li");
        listItem.textContent = Object.values(datosPersonales[longitud]);/*`-Nombre: ${dato.nombre} ${dato.primerApellido} ${dato.segundoApellido}
        -Documento: ${dato.tipoDocumento}, ${dato.documento}
        -Estado Civil: ${dato.estadoCivil}
        -Celular: ${dato.celular} -Correo Electrónico: ${dato.correo}
        -Lugar de Nacimiento: ${dato.paisNacimiento}, ${dato.departamentoNacimiento}, ${dato.ciudadNacimiento}
        -Lugar de Residencia: ${dato.paisResidencia}, ${dato.departamentoResidencia}, ${dato.ciudadResidencia}, ${dato.direccion}, ${dato.barrio}
        -Cargo: ${dato.cargo}`*/
        listaDatos.appendChild(listItem);
    /*});*/
}
