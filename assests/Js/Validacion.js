document.getElementById('validar').addEventListener('click', validarL);
document.getElementById('validar').addEventListener('click', validarLogin);
let contador = 1;

function validarLogin() {
  const usuario = document.getElementById('Usuario').value;
  const Contrasenia = document.getElementById('Contrasenia').value;
  if (usuario.length == 0 && Contrasenia.length < 6) {
    alert('No ha ingresado datos de inicio de sesion');
    return;
  } else if (usuario.length == 0) {
    alert('No ha digitado nada en el nombre de usuario');
    return;
  } else if (Contrasenia.length < 3) {
    alert('La contraseña ingresada no es válida');
    return;
  }
}

function validarL() {

  const usuario = document.getElementById('Usuario');
  const Contrasenia = document.getElementById('Contrasenia');
  blockUsuario = document.getElementById('block')

  if (usuario.value == "ElmejorGrupo" && Contrasenia.value == "123456") {
    alert("Sesion iniciada correctamente")
    window.location = "formulario.html";
  } else {
    alert("Los datos ingresados son erroneos")
    alert(`intento: ${contador}`)
    if (contador == 3) {
      alert("ha alcanzado el numero límite de intentos");
      document.getElementById('validar').disabled = true;
      blockUsuario.innerText = "Se ha bloqueado el ingreso debido al límite de intentos permitidos";
    }
    contador++;
  }
}