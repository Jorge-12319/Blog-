function interes(){

    //declarar variables
    var entrada, filtrado, ul, li, a, i;

    entrada = document.getElementById("miBusqueda");
    filtrado = entrada.value.toUpperCase();
    ul = document.getElementById("intereses");
    li = ul.getElementsByTagName("li");


    //recorremos todos los elementos de la lista, y escondemos aquellos que no coincidan con la consulta de busqueda


    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filtrado) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}



//CATEGORIAS     
var musica = [];
var programacion = [];
var diseño = [];
var deportes = [];
var peliculas = [];
var emprendimiento = [];
var videojuegos = [];
var seguridad_informatica = [];
var experiencias_de_trabajo = [];
var ayuda_tecnologica = [];





//Obtener datos de formulario crear publicacion

var nombres = document.getElementById("nombres");
var descrip = document.getElementById("descrip");
var categoria = document.getElementById("categoria_seleccion");



var btn_crear = document.getElementById("btn_creacion");


var error = document.getElementById("error");
var exito = document.getElementById("exito");


function agregarMusica(publicacion){
    musica.push(publicacion);
    console.log(musica);
}

function agregarProgramacion(publicacion){
    programacion.push(publicacion);
    console.log(programacion);
}

function agregarDiseño(publicacion){
    diseño.push(publicacion);
    console.log(diseño);
}

function agregarDeportes(publicacion){
    deportes.push(publicacion);
    console.log(deportes);
}

function agregarPeliculas(publicacion){
    peliculas.push(publicacion);
    console.log(peliculas);
}

function agregarEmprendimiento(publicacion){
    emprendimiento.push(publicacion);
    console.log(emprendimiento);
}

function agregarVideojuegos(publicacion){
    videojuegos.push(publicacion);
    console.log(videojuegos);
}

function agregarSeguridadInformatica(publicacion){
    seguridad_informatica.push(publicacion);
    console.log(seguridad_informatica);
}

function agregarExperienciaDeTrabajo(publicacion){
    experiencias_de_trabajo.push(publicacion);
    console.log(experiencias_de_trabajo);
}

function agregarAyudaTecnologica(publicacion){
    ayuda_tecnologica.push(publicacion);
    console.log(ayuda_tecnologica);
}



btn_crear.onclick = () =>{

    for(let i = 0; i < categoria.length; i++){
        var seleccionarIndice = categoria.selectedIndex;
        var opcionSeleccionada = categoria.options[seleccionarIndice].value;
    }

    var fechaHoraActual = new Date();
    var año = fechaHoraActual.getFullYear();
    var mes = fechaHoraActual.getMonth() + 1; // Los meses se indexan desde 0, por lo que se agrega 1
    var dia = fechaHoraActual.getDate();
    var hora = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundos = fechaHoraActual.getSeconds();
    
    alert(opcionSeleccionada);
    if((nombres.value !== "") && (descrip.value !== "") && (opcionSeleccionada !== "")){
        exito.innerHTML = `Publicacion exitosa en ` + opcionSeleccionada;
        exito.style.color = "green";
        error.innerHTML = ``;

        if(opcionSeleccionada === "musica"){
            var musica = document.getElementById("musica");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            musica.appendChild(nuevaPublicacion);

            var publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            };

            agregarMusica(publicacion);

            

        }

        if(opcionSeleccionada === "programacion"){
            var programacion = document.getElementById("programacion");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            programacion.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarProgramacion(publicacion);
            

        }


        if(opcionSeleccionada === "diseño"){
            var diseño = document.getElementById("diseño");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            diseño.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarDiseño(publicacion);
            

        }

        if(opcionSeleccionada === "deportes"){
            var deportes = document.getElementById("deportes");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            deportes.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarDiseño(publicacion);
            

        }

        if(opcionSeleccionada === "peliculas"){
            var peliculas = document.getElementById("peliculas");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            peliculas.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarPeliculas(publicacion);
            

        }

        if(opcionSeleccionada === "emprendimiento"){
            var emprendimiento = document.getElementById("emprendimiento");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            emprendimiento.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarEmprendimiento(publicacion);
            

        }
        
        if(opcionSeleccionada === "videojuegos"){
            var videojuegos = document.getElementById("videojuegos");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            videojuegos.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarVideojuegos(publicacion);
            

        }

        if(opcionSeleccionada === "seguridad informatica"){
            var seguridad_informatica = document.getElementById("seguridad_informatica");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            seguridad_informatica.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarSeguridadInformatica(publicacion);
            

        }
        
        if(opcionSeleccionada === "experiencias de trabajo"){
            var experiencias_de_trabajo = document.getElementById("experiencias_trabajo");

            var nuevaPublicacion = document.createElement("div");

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            experiencias_de_trabajo.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarExperienciaDeTrabajo(publicacion);
            

        }


        if(opcionSeleccionada === "ayuda tecnologica"){
            var ayuda_tecnologica = document.getElementById("ayuda_tecnologica");

            var nuevaPublicacion = document.createElement("div");


            

            nuevaPublicacion.innerHTML = `
            <br><br>
            <div class="nueva_publicacion">
            <p><span>Autor:</span> ${nombres.value}</p>
            <p><span>Descripcion:</span> ${descrip.value}</p>
            <p><span>Fecha de publicacion: ${año}/${mes}/${dia}  ${hora}:${minutos}:${segundos} </p>
            </div>
            <br><br>`;
            
            ayuda_tecnologica.appendChild(nuevaPublicacion);

            publicacion = {
                nombre: nombres.value,
                descrip: descrip.value,
                categoria: opcionSeleccionada,
            }

            agregarExperienciaDeTrabajo(publicacion);
            

        }


    }else{
        error.innerHTML = `Debio haber ingresado todos los datos`;
        error.style.color = "red";
        exito.innerHTML = ``;
    }
}
    


function enviar_correo(){

    if(document.getElementById("contra").value !== "" && document.getElementById("correo").value !== ""){
        alert("Correo Enviado Exitosamente");
        document.getElementById("contra").value = "";
        document.getElementById("correo").value = "";
    }else{
        alert("Falta llenar alguno de los campos");
    }


    
}


    

    
    











    

