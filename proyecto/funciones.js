let contenido = document.getElementById('contenido');
let contenido2 = document.getElementById('contenido2');
let contenido3 = document.getElementById('contenido3');
window.onload = mostrar;
window.onload = mostrarPerfiles;

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

function desplegarVentana(){
    document.getElementById('contenido_ventana').style.display='block';
}

function cerrarVentana(){
    document.getElementById('contenido_ventana').style.display='none';
}

function IraRegistrar(){
    window.location.href="index.html";
}

function mostrar(){
    const listaDatos = document.getElementById("listaDatos");
    listaDatos.innerHTML='';
    const datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"))||[];
    longitud = datosPersonales.length-1;
    dato = datosPersonales[longitud];

    const nombreItem = document.createElement("li");
    const documentoItem = document.createElement("li");
    const estadoItem = document.createElement("li");
    const celularItem = document.createElement("li");
    const correoItem = document.createElement("li");
    const nacimientoItem = document.createElement("li");
    const residenciaItem = document.createElement("li");
    const cargoItem = document.createElement("li");
    
    nombreItem.textContent = "Nombre: " +dato.nombre+" "+dato.primerApellido+" "+dato.segundoApellido;
    documentoItem.textContent = "Documento: "+dato.tipoDocumento+", "+dato.documento;
    estadoItem.textContent = "Estado Civil: "+dato.estadoCivil;
    celularItem.textContent = "Número de Celular: "+dato.celular;
    correoItem.textContent = "Correo Electrónico: "+dato.correo;
    nacimientoItem.textContent = "Lugar y Fecha de Nacimiento: "+dato.paisNacimiento+", "+dato.departamentoNacimiento+", "+dato.ciudadNacimiento+", "+dato.fechaNacimiento;
    residenciaItem.textContent = "Lugar de Residencia: "+dato.paisResidencia+", "+dato.departamentoResidencia+", "+dato.ciudadResidencia+", "+dato.barrio+", "+dato.direccion;       
    cargoItem.textContent = "Cargo al que aspira: "+dato.cargo;
        
    listaDatos.appendChild(nombreItem);
    listaDatos.appendChild(documentoItem);
    listaDatos.appendChild(estadoItem);
    listaDatos.appendChild(celularItem);
    listaDatos.appendChild(correoItem);
    listaDatos.appendChild(nacimientoItem);
    listaDatos.appendChild(residenciaItem);
    listaDatos.appendChild(cargoItem);    
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
    datosPersonales.push({nombre, primerApellido,segundoApellido,tipoDocumento,documento,estadoCivil,celular,correo,
    paisNacimiento,departamentoNacimiento,ciudadNacimiento,fechaNacimiento,paisResidencia,departamentoResidencia,
    ciudadResidencia,direccion,barrio,cargo});

    localStorage.setItem("datosPersonales", JSON.stringify(datosPersonales));
}
function mostrarPerfiles(){
    const listaPerfiles = document.getElementById("listaPerfiles");
    listaPerfiles.innerHTML = "";
    const datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"))||[];
    const liItem = document.createElement("li");

    datosPersonales.forEach((elemento)=>{
        liItem.textContent =
        `-Nombre: ${elemento.nombre} ${elemento.primerApellido} ${elemento.segundoApellido}
        -Documento: ${elemento.tipoDocumento}, ${elemento.documento}
        -Estado Civil: ${elemento.estadoCivil}
        -Celular: ${elemento.celular} -Correo Electrónico: ${elemento.correo}
        -Lugar de Nacimiento: ${elemento.paisNacimiento}, ${elemento.departamentoNacimiento}, ${elemento.ciudadNacimiento}
        -Lugar de Residencia: ${elemento.paisResidencia}, ${elemento.departamentoResidencia}, ${elemento.ciudadResidencia}, ${elemento.direccion}, ${elemento.barrio}
        -Cargo: ${elemento.cargo}`});
        listaPerfiles.appendChild(liItem);
}
