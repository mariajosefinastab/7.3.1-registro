function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let boton=document.getElementById("regBtn");
boton.addEventListener("click",verificarFormulario);

function verificarFormulario () {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const terminos = document.getElementById('terminos').checked;


    if(!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
        return false;
    }

    

    if (password1 !== password2) {
        showAlertError();
        return false;
    }

    if (!terminos) {
        alert('Debe aceptar los términos y condiciones');
        showAlertError();
        return false;
    }

    if (password1.lenght < 6 ){
        alert('La contraseña debe tener al menos 6 caracteres.');
        showAlertError();
        return false;
    }
    
  
    showAlertSuccess();
    return true; 

}