//Menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
//Menu





//OJO DE MI CUENTA
document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var passwordIcon = document.querySelector('#togglePassword i');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
});
//OJO DE MI CUENTA


//BASE DE DATOS (USUARIOS)
var users = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
    // Agrega más usuarios si es necesario
];

// Evento clic para el botón de "Iniciar Sesión"
document.querySelector('input[type="submit"]').addEventListener('click', function () {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Verifica si las credenciales son válidas comparándolas con la "base de datos" de usuarios
    var isValid = users.some(function (user) {
        return user.username === usernameInput && user.password === passwordInput;
    });

    if (isValid) {
        // Si las credenciales son válidas, redirige a la página de destino (diseñodeportivo.html en este caso)
        window.location.href = "diseñodeportivo.html";
    } else {
        // Si las credenciales no son válidas, muestra un mensaje de error con estilo
        var errorMessage = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
        displayAlert(errorMessage);
    }
    
    function displayAlert(message) {
        var alertElement = document.getElementById('alertMessage');
        alertElement.textContent = message;
        alertElement.style.backgroundColor = '#c657e6';
        alertElement.style.color = 'white';
        alertElement.style.padding = '15px';
        alertElement.style.textAlign = 'center';
        alertElement.style.fontSize = '18px';
        alertElement.style.display = 'block';
    }}
);
//BASE DE DATOS (USUARIOS)