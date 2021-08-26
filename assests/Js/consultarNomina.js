document.getElementById('consultar').addEventListener('click', consultarCedula);
let nominasG = localStorage.getItem('nominas');
nominasG=JSON.parse(nominasG);
let tablaConsulta = document.getElementById('tablaCons');
tablaConsulta.style.visibility='hidden';
let nomina;
function consultarCedula(){
    let cedulaC = document.getElementById('cedulaCons').value;
    nomina = _.findWhere(nominasG, { cedula: cedulaC });    
    let tablaConsul = document.getElementById('tablaCon');
    let contenido = ``;
    for(i=0;i<1;i++){
        contenido += `
        <tr>
        <td>${nomina.cedula}</td>
        <td>${nomina.nombre}</td>
        <td>${nomina.sueldo}</td>
        <td>${nomina.auxTranspVal}</td>
        <td>${nomina.extrasDVal}</td>
        <td>${nomina.extrasNVal}</td>
        <td>${nomina.extrasDDVal}</td>
        <td>${nomina.extrasDNVal}</td>
        <td>${nomina.recNocturnoVal}</td>
        <td>${nomina.totalDevengadoVal}</td>
        <td>${nomina.saludVal}</td>
        <td>${nomina.pensionVal}</td>
        <td>${nomina.ingresoBVal}</td>
        <td>${nomina.retefuenteVal}</td>
        </tr>
        `
    };
    alert(`La consulta de la cedula ${nomina.cedula} se realizo correctamente`);
    tablaConsul.innerHTML += contenido;
    tablaConsulta.style.visibility = 'visible';
    document.getElementById('consultar').disabled=true;   
}