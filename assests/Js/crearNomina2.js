window.addEventListener('load', init, false);

let nominasG = localStorage.getItem('nominas');
nominasG=JSON.parse(nominasG);
let totalPrestaciones = [];
    let Cesantias = [];
    let PrimariaS = [];
    let Vacaciones = [];
    let IntCesantias = [];
    let senaP =[];
    let pensionP = [];
    let arl = [];
    let sena = [];
    let cajas = [];
    let icbf =[];
    let totalParafiscales =[];
    let comision = 60000;
    let totalesNom = 0;
    let totalNomina = [];
function init(){
    function calcularPrestaciones(){
        
        for(i=0;i<nominasG.length; i++){
            Cesantias[i]= parseInt(nominasG[i].totalDevengosVal * 0.0833);
            PrimariaS[i]= parseInt(nominasG[i].totalDevengosVal * 0.0833);
            Vacaciones[i]= parseInt((nominasG[i].totalDevengosVal - nominasG[i].auxTranspVal)* 0.0417);
            IntCesantias[i]= parseInt(Cesantias[i] * 0.12);
            totalPrestaciones[i] = parseInt((Cesantias[i] + PrimariaS[i] + Vacaciones[i] + IntCesantias[i]));

        }
       
    }
    calcularPrestaciones();
    function calcularPararfiscales(){
        
        for(i=0;i<nominasG.length; i++){
            senaP[i] = parseInt((parseInt(nominasG[i].sueldo) + (nominasG[i].totalExtrasVal) + (comision)) * 0.085);
            pensionP[i] = parseInt((parseInt(nominasG[i].sueldo) + (nominasG[i].totalExtrasVal) + (comision)) * 0.12);            
            arl[i]= parseInt((parseInt(nominasG[i].sueldo) +parseInt( nominasG[i].totalExtrasVal) + parseInt(comision))* 0.00522);
            sena[i]= parseInt((parseInt(nominasG[i].sueldo) +parseInt( nominasG[i].totalExtrasVal) + parseInt(comision))* 0.02);
            cajas[i] =  parseInt((parseInt(nominasG[i].sueldo) +parseInt( nominasG[i].totalExtrasVal) + parseInt(comision))* 0.04);
            icbf[i] = parseInt((parseInt(nominasG[i].sueldo) +parseInt( nominasG[i].totalExtrasVal) + parseInt(comision))* 0.03);
            totalParafiscales[i] = parseInt(parseInt(senaP[i]) + parseInt(pensionP[i]) + parseInt(sena[i]) + parseInt(arl[i]) + parseInt(cajas[i]) + parseInt(icbf[i]));
            totalNomina[i]=parseInt(nominasG[i].totalDevengosVal + totalPrestaciones[i] + totalParafiscales[i]);
        }
       
    }
    calcularPararfiscales();
    function totalnominas() {
        for (i = 0; i < nominasG.length; i++) {
            totalesNom += parseInt(totalNomina[i])
        }
    }
    totalnominas();
    function Resultado(){
          
        let tablaConsul = document.getElementById('tableCons');
        let contenido = ``;
        let contenidos = ``;
        for(i=0;i<nominasG.length;i++){
            contenido += `
            <tr>
            <td>${nominasG[i].cedula}</td>
            <td>${nominasG[i].nombre}</td>
            <td>${nominasG[i].sueldo}</td>
            <td>${nominasG[i].auxTranspVal}</td>
            <td>${nominasG[i].extrasDVal}</td>
            <td>${nominasG[i].extrasNVal}</td>
            <td>${nominasG[i].extrasDDVal}</td>
            <td>${nominasG[i].extrasDNVal}</td>
            <td>${nominasG[i].recNocturnoVal}</td>
            <td>${nominasG[i].totalExtrasVal}</td>
            <td>${nominasG[i].totalDevengadoVal}</td>
            <td>${nominasG[i].saludVal}</td>
            <td>${nominasG[i].pensionVal}</td>
            <td>${nominasG[i].ingresoBVal}</td>
            <td>${nominasG[i].retefuenteVal}</td>
            <td>${nominasG[i].totalDevengosVal}</td>
            <td>${nominasG[i].totalSalarioNetoVal}</td>
            <td>${totalPrestaciones[i]}</td>
            <td>${totalParafiscales[i]}</td>
            <td>${totalNomina[i]}</td>

            </tr>
            `
        }
            contenidos += `
            <td colspan="18"></td> 
            <td>Total a nominar</td> 
            <td>${totalesNom}</td>
            `
        
        tablaConsul.innerHTML += contenido;
        tablaConsul.innerHTML += contenidos;
        
       
    }
Resultado();
}