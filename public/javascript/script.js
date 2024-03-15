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
    "fromsuspoland": {
        "contraseña": "m6nrc482",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "manuhv18": {
        "contraseña": "pb57ujyy",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "pabloezmolina": {
        "contraseña": "p5q6k889",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "niikosilva20": {
        "contraseña": "m2sdqor4",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "adiva.sanjines": {
        "contraseña": "7gmj9jws",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "ldo.will.may.castro2892": {
        "contraseña": "yq2wvr5b",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "jjordanjofre": {
        "contraseña": "yfek54kr",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "jjordanjofre": {
        "contraseña": "yfek54kr",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "gabrielaalfaro": {
        "contraseña": "ph9pp2ru",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "rokalu82": {
        "contraseña": "rokalu82",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "wendel.grafico": {
        "contraseña": "ant8vnf7",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "sojoalejandro781": {
        "contraseña": "bt8h8cob",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "hernan.cnd": {
        "contraseña": "qb73zj36",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "edu.diaz125": {
        "contraseña": "ef5vmo6q",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "alvarobritez12": {
        "contraseña": "2mvi49v3",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "danielyucra1510": {
        "contraseña": "d5z8gvpg",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "nicogutierrez9607": {
        "contraseña": "z3m7xyfb",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "esteban.perezarb": {
        "contraseña": "gxjfn5wn",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "montenegromaximiliano09": {
        "contraseña": "rwwny452",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "selenarenata23": {
        "contraseña": "2ey2zo3j",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "alexalcoper": {
        "contraseña": "spgpk9mm",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "joepinto924": {
        "contraseña": "w6fsc6e7",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "Samantezana34": {
        "contraseña": "cp86jbf6",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "harumbarquetc": {
        "contraseña": "ed9b78fa",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "nahruizr7": {
        "contraseña": "bvhif3ap",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "ricardocastillomauricio11": {
        "contraseña": "7rhk5dva",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "leandroaldairc": {
        "contraseña": "8f86576f",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "batbat727": {
        "contraseña": "d8vk2jtz",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "pablozapata296": {
        "contraseña": "55ncpawe",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "contrerasjhoseth28": {
        "contraseña": "dxcevkw2",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "axelbriandip.rg": {
        "contraseña": "bv47szo3",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "ceschiniloanaayelen": {
        "contraseña": "6kr9gqcu",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "alvarengaanna90": {
        "contraseña": "v5nvkyk6",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "Info.jpmotta": {
        "contraseña": "x252q2tr",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "herrerapatricio281": {
        "contraseña": "herrerapatricio281",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "guidoodetto": {
        "contraseña": "subt8226",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "acostajonathanjoel": {
        "contraseña": "s7p9h56t",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "reitepibite": {
        "contraseña": "p38uxoez",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "kevinromanc": {
        "contraseña": "995vg8vm",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "natscaceres133": {
        "contraseña": "9tcqdr6k",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "josekm30": {
        "contraseña": "g5zd6hq3",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "matiasmrolon": {
        "contraseña": "3q4tua7z",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "fepassera": {
        "contraseña": "fhtazz4p",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    },
    "eddyjuarezdelamora": {
        "contraseña": "9qdpt7r3",
        "curso": "diseñodeportivo",
        "pagina": "diseñodeportivo.html"
    }
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



