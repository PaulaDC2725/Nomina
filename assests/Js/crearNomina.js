document.getElementById('crearNomina').addEventListener('click', agregarD);
document.getElementById('consultaTabla').addEventListener('click', tabla);
document.getElementById('consultaTabla').addEventListener('click', mostrartabla);
/*document.getElementById('consultaTabla').addEventListener('click', accionTabla);*/
document.getElementById('crear').addEventListener('click', init);

/*let arregloDetalle = [];*/

let divTabla = document.getElementById('tabla');
let accionT= [];
let encabezadoTabla = document.getElementById('tabla');
encabezadoTabla.style.visibility='hidden';
function mostrartabla(){
    if(encabezadoTabla.style.visibility === 'hidden'){
        encabezadoTabla.style.visibility = 'visible';
    }
};

let divForm = document.getElementById('formCantidad');
let divFormNomina = document.getElementById('cantidadEmp');
divForm.style.visibility = 'hidden';
function init(){
    if(divForm.style.visibility === 'hidden'){
        divForm.style.visibility = 'visible';
    }
};
let cantidadDatos = document.getElementById('cantidadPer');
let i = 0;
//Creamos el constructor
function Nomina(id, cedula, nombre, sueldo, dias, horaseDiu, horaseNoc,horaseDomiDiu,horaseDomiNoc,horasRecNoc,nivelARP,
    salarioVal,auxTranspVal,extrasDVal,extrasNVal,extrasDDVal,extrasDNVal,recNocturnoVal,totalExtrasVal,totalDevengadoVal,saludVal,pensionVal,ingresoBVal,retefuenteVal,totalDevengosVal,totalSalarioNetoVal) {
    this.id = id;
    this.cedula = cedula;
    this.nombre = nombre;
    this.sueldo= sueldo;
    this.dias= dias;
    this.horaseDiu = horaseDiu;
    this.horaseNoc = horaseNoc;
    this.horaseDomiDiu= horaseDomiDiu;
    this.horaseDomiNoc = horaseDomiNoc;
    this.horasRecNoc = horasRecNoc;
    this.nivelARP = nivelARP;
    this.salarioVal = salarioVal,
    this.auxTranspVal = auxTranspVal,
    this.extrasDVal = extrasDVal,
    this.extrasNVal = extrasNVal,
    this.extrasDDVal = extrasDDVal,
    this.extrasDNVal = extrasDNVal,
    this.recNocturnoVal = recNocturnoVal,
    this.totalExtrasVal = totalExtrasVal,
    this.totalDevengadoVal = totalDevengadoVal,
    this.saludVal = saludVal,
    this.pensionVal = pensionVal,
    this.ingresoBVal = ingresoBVal,
    this.retefuenteVal = retefuenteVal,
    this.totalDevengosVal = totalDevengosVal,
    this.totalSalarioNetoVal = totalSalarioNetoVal
    
};


let nominaEmp = [];

function traerCedula() {
    let cedulaEmp = document.getElementById('cedula').value;
    return cedulaEmp;
};

function traerNombre() {
    let nombreEmp = document.getElementById('nombre').value;
    return nombreEmp;
};

 function traerSueldo(){
     let sueldoEmp= document.getElementById('sueldo').value;
     return sueldoEmp;
 };
 function traerDias() {
    let diasEmp = document.getElementById('dias').value;
    return diasEmp;
};

 function traerHorasEDiu(){
    let horaseDiuEmp= document.getElementById('horaseDiu').value;
    return horaseDiuEmp;
};
function traerHorasENoc(){
    let horaseNocEmp= document.getElementById('horaseNoc').value;
    return horaseNocEmp;
};
function traerHorasEDomiDiu(){
    let horaseDomiDiuEmp= document.getElementById('horaseDomiDiu').value;
    return horaseDomiDiuEmp;
};
function traerHorasEDomiNoc(){
    let horaseDomiNocEmp= document.getElementById('horaseDomiNoc').value;
    return horaseDomiNocEmp;
};
function traerHorasRecNoc(){
    let horasRecNocEmp= document.getElementById('horasRecNoc').value;
    return horasRecNocEmp;
};
function traerNivelARP(){
    let nivelARPEmp= document.getElementById('nivelARP').value;
    return nivelARPEmp;
};

function agregarD(){
    let crearN = new Nomina(nominaEmp.length + 1, traerCedula(), traerNombre(), traerSueldo(),traerDias(), traerHorasEDiu(),traerHorasENoc(),traerHorasEDomiDiu(),traerHorasEDomiNoc(),traerHorasRecNoc(),traerNivelARP(),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    nominaEmp.push(crearN);
    document.getElementById('cedula').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('sueldo').value = "";
    document.getElementById('dias').value = "";
    document.getElementById('horaseDiu').value = "";
    document.getElementById('horaseNoc').value = "";
    document.getElementById('horaseDomiDiu').value = "";
    document.getElementById('horaseDomiNoc').value = "";
    document.getElementById('horasRecNoc').value = "";
    document.getElementById('nivelARP').value = "";
    i++;
    if(i==cantidadDatos.value){
        document.getElementById('crearNomina').disabled = true;
        alert('No se pueden registar mas datos!');
        divFormNomina.style.visibility = 'hidden';
    }
    console.log(nominaEmp);
    localStorage.setItem('nominas',JSON.stringify(nominaEmp));
};
/*const eliminarCedulaById = (id) => {
        //filtrar todos los productos cuyo id sea diferente al que estoy trayendo
        //el arreglo detalle va ser igual al arreglo detalle pero ya filtrado 
        agregarD = agregarD.filter((cedula) => {
            //si es que el id que se esta recibiendo es diferente al detalle de la descripcion
            //retornar todos los detalles que sean diferentes
                if(+id !== +cedula.nombre){
                        return cedula;
                }
        });
        //para que vuelva a poner la tabla pero sin el producto que se esta excluyendo arriba
        tabla();
 };
let fila = document.createElement("tr");*/
/*function accionTabla(){
    let crearA = new tabla(accionT.length + 1, traerAccion());
    accionT.push(crearA);
    let tdEliminar = document.createElement("td");
        //crea el boton eliminar 
        let botonEliminar = document.createElement("button");
        //ponerle clases a el boton
        botonEliminar.classList.add("btn","btn-danger");
        //El nombre o valor que va a terner
        botonEliminar.innerText = "Eliminar";
        //Al hacer click se elimine el objeto que se quiera
        //funcion(14) se esta creando un boton eliminar diferente para cada producto porque esta dentro de un forEach
        botonEliminar.onclick = () => {
                //se llama la funcion y se trae la descripcion que se encuentra en el cuerpo de la tabla donde esta el id
                eliminarDetalleById(cedulaEmp.nombreEmp);
        };
        //agregar el boton al td o fila
        tdEliminar.appendChild(botonEliminar);
        //añadir el boton eliminar a la fila
        fila.appendChild(tdEliminar);
        //añadir al cuerpo de la tabla de los datos de detalle, la fila que se acabo de crear para el boton eliminar
        cuerpoTabla.appendChild(fila); 
};*/
const salarioMinimo= 908526;
let auxTransporte = 106454;
let recargoFestivos = 8826;
let comision = 60000;
const uvt = 36308;
let salario = [];
let auxTransp = [];
let extrasD = [];
let horaOrdinaria=0;
let fondoSolidaridad=0;
let extrasN = [];
let extrasDD = [];
let extrasDN = [];
let valorHorasExtras = [];
let recNocturno = [];
let totalDevengado = [];
let salud = [];
let pension = [];
let ingresoB = [];
let reteFuente = [];
let totalDevengos =[];
let totalDeducido = [];
let totalSalNeto = [];
function tabla(){
    for(i=0;i<nominaEmp.length;i++){
        salario[i]=parseInt((nominaEmp[i].sueldo/30)*nominaEmp[i].dias);
        auxTransp[i]=parseInt((nominaEmp[i].sueldo <=(2* salarioMinimo) ? ((auxTransporte * nominaEmp[i].dias) / 30):0));
        horaOrdinaria = parseInt((nominaEmp[i].sueldo/240));
        extrasD[i]=parseInt((horaOrdinaria*1.25)*nominaEmp[i].horaseDiu);
        extrasN[i]=parseInt((horaOrdinaria*1.75)*nominaEmp[i].horaseNoc);
        extrasDD[i]=parseInt((horaOrdinaria*2)*nominaEmp[i].horaseDomiDiu);
        extrasDN[i]=parseInt((horaOrdinaria*2.25)*nominaEmp[i].horaseDomiNoc);
        recNocturno[i]=parseInt((horaOrdinaria*0.35)*nominaEmp[i].horasRecNoc);
        valorHorasExtras[i] = parseInt(4731 * (nominaEmp[i].horaseDiu)) +(6624 * (nominaEmp[i].horaseNoc)) + (7570 * (nominaEmp[i].horaseDomiDiu)) + parseInt(9463 * (nominaEmp[i].horaseDomiNoc) + (1655 * (nominaEmp[i].horasRecNoc)));
        totalDevengado[i]=parseInt(salario[i]+auxTransp[i]+extrasD[i]+extrasN[i]+ extrasDD[i]+extrasDN[i]+recNocturno[i]);
        salud[i]=parseInt((totalDevengado[i]-auxTransp[i])*0.04);
        pension[i]=parseInt((totalDevengado[i]-auxTransp[i])*0.04);
        if (nominaEmp[i].sueldo > (salarioMinimo * 4)) {
            if (nominaEmp[i].sueldo < (salarioMinimo * 4)) {
                fondoSolidaridad = 0;
            } else if (nominaEmp[i].sueldo >= (salarioMinimo * 4) && nominaEmp[i].sueldo < (salarioMinimo * 16)) {
                fondoSolidaridad = ((totalDevengado[i] - auxTransp[i]) * 1) / 100;
            } else if (nominaEmp[i].sueldo >= (salarioMinimo * 16) && nominaEmp[i].sueldo < (salarioMinimo * 17)) {
                fondoSolidaridad = ((totalDevengado[i] - auxTransp[i]) * 1.2) / 100;
            } else if (nominaEmp[i].sueldo >= (salarioMinimo * 17) && nominaEmp[i].sueldo < (salarioMinimo * 18)) {
                fondoSolidaridad = ((totalDevengado[i] - auxTransp[i]) * 1.4) / 100;
            } else if (nominaEmp[i].sueldo >= (salarioMinimo * 18) && nominaEmp[i].sueldo < (salarioMinimo * 19)) {
                fondoSolidaridad = ((totalDevengado[i] - auxTransp[i]) * 1.8) / 100;
            } else if (nominaEmp[i].sueldo > (salarioMinimo * 20)) {
                fondoSolidaridad = ((totalDevengado[i] - auxTransp[i]) * 2) / 100;
            }
        }
        ingresoB[i]=parseInt((nominaEmp[i].sueldo * nominaEmp[i].dias)/30);
        let NUvt = ingresoB[i] / uvt;
        if (NUvt > 0 && NUvt <= 95) {
            reteFuente[i] = 0;
        } else if (NUvt > 95 && NUvt <= 150) {
            reteFuente[i] = ((NUvt - 95) * 0.19) * uvt;
        } else if (NUvt > 150 && NUvt <= 360) {
            reteFuente[i] = ((NUvt - 150) * 0.28 + 10) * uvt;
        } else if (NUvt > 360 && NUvt <= 640) {
            reteFuente[i] = ((NUvt - 360) * 0.33 + 69) * uvt;
        } else if (NUvt > 640 && NUvt <= 945) {
            reteFuente[i] = ((NUvt - 640) * 0.35 + 162) * uvt;
        } else if (NUvt > 945 && NUvt <= 2300) {
            reteFuente[i] = ((NUvt - 945) * 0.37 + 268) * uvt;
        } else if (NUvt > 2300) {
            reteFuente[i] = ((NUvt - 2300) * 0.39 + 770) * uvt;
        }
        totalDevengos[i]= totalDevengos[i] = (parseInt(nominaEmp[i].sueldo) + comision + parseInt(valorHorasExtras[i]) + 1655 + recargoFestivos + auxTransporte);
        totalDeducido[i] = parseInt(salud[i] + pension[i] + fondoSolidaridad);
        totalSalNeto[i] = parseInt(totalDevengos[i] - totalDeducido[i]);
        
        /*ingresoB[i]=parseInt((horaOrdinaria*0.35)*nominaEmp[i].horasRecNoc);
        reteFuente[i]=parseInt((horaOrdinaria*0.35)*nominaEmp[i].horasRecNoc)*/
    };
    for(i=0;i<nominaEmp.length;i++){
        let valorSal=parseInt(salario[i]);
        nominaEmp[i].salarioVal=valorSal;
        let valorAux=parseInt(auxTransp[i]);
        nominaEmp[i].auxTranspVal=valorAux;
        let valorED=parseInt(extrasD[i]);
        nominaEmp[i].extrasDVal=valorED;
        let valorEN=parseInt(extrasN[i]);
        nominaEmp[i].extrasNVal=valorEN;
        let valorDD=parseInt(extrasDD[i]);
        nominaEmp[i].extrasDDVal=valorDD;
        let valorND=parseInt(extrasDN[i]);
        nominaEmp[i].extrasDNVal=valorND;        
        let valorRN=parseInt(recNocturno[i]);
        nominaEmp[i].recNocturnoVal=valorRN;
        let valorTotalE=parseInt(valorHorasExtras[i]);
        nominaEmp[i].totalExtrasVal=valorTotalE;
        let valorTD=parseInt(totalDevengado[i]);
        nominaEmp[i].totalDevengadoVal=valorTD;
        let valorS=parseInt(salud[i]);
        nominaEmp[i].saludVal=valorS;
        let valorP=parseInt(pension[i]);
        nominaEmp[i].pensionVal=valorP;
        let ingresoBa=parseInt(ingresoB[i]);
        nominaEmp[i].ingresoBVal=ingresoBa;
        let reteF=parseInt(reteFuente[i]);
        nominaEmp[i].retefuenteVal=reteF;
        let deven=parseInt(totalDevengos[i]);
        nominaEmp[i].totalDevengosVal=deven;
        let salNet=parseInt(totalSalNeto[i]); 
        nominaEmp[i].totalSalarioNetoVal=salNet;

        localStorage.setItem('nominas',JSON.stringify(nominaEmp));
    }
    let tablaEmp = document.getElementById('table');
    let contenido = ``;
    for(i=0;i<nominaEmp.length;i++){
        contenido += `
        <tr>
        <td>${nominaEmp[i].cedula}</td>
        <td>${nominaEmp[i].nombre}</td>
        <td>${nominaEmp[i].sueldo}</td>
        <td>${nominaEmp[i].dias}</td>
        <td>${nominaEmp[i].horaseDiu}</td>
        <td>${nominaEmp[i].horaseNoc}</td>
        <td>${nominaEmp[i].horaseDomiDiu}</td>
        <td>${nominaEmp[i].horaseDomiNoc}</td>
        <td>${nominaEmp[i].horasRecNoc}</td>
        <td>${nominaEmp[i].nivelARP}</td>
        </tr>
        `
    };
    tablaEmp.innerHTML += contenido;
    document.getElementById('consultaTabla').disabled=true;
}