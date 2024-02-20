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

var cursos = {
    "usuario1": {
        "contraseña": "contraseña1",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "usuario2": {
        "contraseña": "contraseña2",
        "curso": "diseñodemarca",
        "pagina": "diseñodemarca.html"
    },
};

function redirigirAlumno(nombreUsuario, contraseñaUsuario) {
    if (cursos[nombreUsuario] && cursos[nombreUsuario].contraseña === contraseñaUsuario) {
        var paginaHTML = cursos[nombreUsuario].pagina;
        window.location.href = paginaHTML;
    } else {
        console.log("Nombre de usuario o contraseña incorrectos.");
    }
}

function iniciarSesion() {
    var nombreUsuario = document.getElementById("username").value;
    var contraseñaUsuario = document.getElementById("password").value;
    redirigirAlumno(nombreUsuario, contraseñaUsuario);
}
    // Agregar evento de clic al botón de iniciar sesión
    document.getElementById("loginButton").addEventListener("click", function() {
        iniciarSesion();
    });

    // También puedes agregar un evento para manejar el envío del formulario cuando se presiona Enter
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        iniciarSesion();
    });