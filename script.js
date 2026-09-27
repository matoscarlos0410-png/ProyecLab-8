/* =================================
   PROYEC LAB V8
   FUNCIONES
================================= */


/* =================================
   BASE DE DATOS DE LUGARES
================================= */

const places = {

    comida: [

        {
            icon: "🍗",
            name: "Mari Mar Restaurante",
            category: "Comida",
            description:
                "Restaurante local para disfrutar de comida en Sausal.",
            location:
                "1NF, Sausal 13700",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Mari+Mar+Restaurante+Sausal+La+Libertad"
        },

        {
            icon: "🍤",
            name: "Restaurante & Cevichería Keylita",
            category: "Comida",
            description:
                "Restaurante y cevichería ubicada en Sausal.",
            location:
                "Sausal 13700",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Restaurante+Cevicheria+Keylita+Sausal+La+Libertad"
        },

        {
            icon: "🍽️",
            name: "Restaurant Liz",
            category: "Comida",
            description:
                "Opción gastronómica local para conocer en Sausal.",
            location:
                "C. La Libertad 37, Sausal 13700",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Restaurant+Liz+Sausal+La+Libertad"
        },

        {
            icon: "🍗",
            name: "Pollería Bendición de Dios",
            category: "Comida",
            description:
                "Pollería local ubicada en Sausal.",
            location:
                "C. Lima 35, Sausal 13700",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Polleria+Bendicion+de+Dios+Sausal+La+Libertad"
        },

        {
            icon: "🍗",
            name: "Pollería Yayita",
            category: "Comida",
            description:
                "Pollería registrada públicamente en la zona. La ubicación exacta en Sausal debe confirmarse.",
            location:
                "Ubicación registrada: Chicama 13700",
            warning:
                "⚠ Ubicación en Sausal por confirmar.",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Polleria+Yayita+Chicama+La+Libertad"
        }

    ],


    servicios: [

        {
            icon: "🛒",
            name: "Mercado de Abastos de Sausal",
            category: "Servicios",
            description:
                "Mercado de la comunidad donde se realizan actividades comerciales y de abastecimiento.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Mercado+de+Abastos+de+Sausal+La+Libertad"
        },

        {
            icon: "🏪",
            name: "Bodega Sausal",
            category: "Servicios",
            description:
                "Establecimiento comercial local.",
            location:
                "C. Lima 57, Sausal",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Bodega+Sausal+Calle+Lima+57"
        },

        {
            icon: "🧺",
            name: "Lavandería Doña Luzmila",
            category: "Servicios",
            description:
                "Servicio local de lavandería.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Lavanderia+Doña+Luzmila+Sausal"
        },

        {
            icon: "📱",
            name: "Servicio Móvil Lescano",
            category: "Servicios",
            description:
                "Servicio relacionado con telefonía y dispositivos móviles.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Servicio+Movil+Lescano+Sausal"
        }

    ],


    educacion: [

        {
            icon: "🏫",
            name: "I.E. José Carlos Mariátegui",
            category: "Educación",
            description:
                "Institución educativa de Sausal que atiende a estudiantes de la comunidad y sus anexos.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=I.E.+Jose+Carlos+Mariategui+Sausal+La+Libertad"
        },

        {
            icon: "🏫",
            name: "I.E. 81971 Alfonso Ugarte",
            category: "Educación",
            description:
                "Institución educativa ubicada en la localidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=IE+81971+Alfonso+Ugarte+Sausal"
        },

        {
            icon: "👶",
            name: "Educación inicial",
            category: "Educación",
            description:
                "Espacios de educación inicial para los niños de la comunidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=educacion+inicial+Sausal+La+Libertad"
        }

    ],


    lugares: [

        {
            icon: "🌳",
            name: "Plaza de Sausal",
            category: "Lugares",
            description:
                "Espacio público y punto de referencia de la comunidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Plaza+de+Sausal+La+Libertad"
        },

        {
            icon: "🌳",
            name: "Plazuela El Maestro",
            category: "Lugares",
            description:
                "Espacio público de encuentro y recreación.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Plazuela+El+Maestro+Sausal"
        },

        {
            icon: "🛝",
            name: "Parque Infantil Noli",
            category: "Lugares",
            description:
                "Espacio destinado a la recreación infantil.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Parque+Infantil+Noli+Sausal"
        },

        {
            icon: "🏊",
            name: "Piscina de Sausal",
            category: "Lugares",
            description:
                "Espacio recreativo para actividades acuáticas.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Piscina+de+Sausal+La+Libertad"
        },

        {
            icon: "⛰️",
            name: "Cerro 1 de Mayo",
            category: "Lugares",
            description:
                "Lugar asociado a actividades y tradiciones de la comunidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Cerro+1+de+Mayo+Sausal"
        }

    ],


    instituciones: [

        {
            icon: "🏛️",
            name: "Municipalidad de Sausal",
            category: "Instituciones",
            description:
                "Institución vinculada a la administración y actividades de la comunidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Municipalidad+Sausal+La+Libertad"
        },

        {
            icon: "🏥",
            name: "Centro de Salud Alto Perú Sausal",
            category: "Instituciones",
            description:
                "Establecimiento de salud de la localidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Alto+Peru+Sausal"
        },

        {
            icon: "👮",
            name: "Comisaría Rural Sausal",
            category: "Instituciones",
            description:
                "Dependencia policial de la localidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Comisaria+Rural+Sausal+La+Libertad"
        }

    ],


    transporte: [

        {
            icon: "🚌",
            name: "Terminal Terrestre Sausal",
            category: "Transporte",
            description:
                "Punto utilizado para el transporte terrestre de pasajeros.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Terminal+Terrestre+Sausal+La+Libertad"
        },

        {
            icon: "🚐",
            name: "Estación de Colectivos Sausal – Casa Grande",
            category: "Transporte",
            description:
                "Punto de referencia para el transporte en colectivos.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Estacion+Colectivos+Sausal+Casa+Grande"
        }

    ],


    cultura: [

        {
            icon: "🙏",
            name: "Virgen del Rosario",
            category: "Cultura",
            description:
                "Festividad religiosa que forma parte de las tradiciones de Sausal.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Virgen+del+Rosario+Sausal+La+Libertad"
        },

        {
            icon: "🕯️",
            name: "Señor de los Milagros",
            category: "Cultura",
            description:
                "Tradición religiosa presente en la comunidad.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Señor+de+los+Milagros+Sausal"
        },

        {
            icon: "🙏",
            name: "Virgen de la Puerta",
            category: "Cultura",
            description:
                "Tradición religiosa mencionada entre las festividades de Sausal.",
            location:
                "Sausal, La Libertad",
            maps:
                "https://www.google.com/maps/search/?api=1&query=Virgen+de+la+Puerta+Sausal"
        }

    ]

};


/* =================================
   NOMBRES DE CATEGORÍAS
================================= */

const categoryNames = {

    comida: "🍴 Comida",

    servicios: "🛒 Servicios",

    educacion: "🎓 Educación",

    lugares: "📍 Lugares",

    instituciones: "🏛️ Instituciones",

    transporte: "🚌 Transporte",

    cultura: "🎭 Cultura"

};


/* =================================
   ELEMENTOS
================================= */

const placesGrid =
    document.getElementById("placesGrid");

const categoryTitle =
    document.getElementById("categoryTitle");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const noResults =
    document.getElementById("noResults");

const categoryButtons =
    document.querySelectorAll(".category-card");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


let currentCategory = "comida";


/* =================================
   CREAR TARJETAS
================================= */

function createCard(place) {

    return `
        <article class="place-card">

            <div class="card-top">
                ${place.icon}
            </div>

            <div class="card-content">

                <span class="card-category">
                    ${place.category}
                </span>

                <h3>
                    ${place.name}
                </h3>

                <p>
                    ${place.description}
                </p>

                <div class="card-location">
                    📍 ${place.location}
                </div>

                ${
                    place.warning
                    ?
                    `<p class="warning">
                        ${place.warning}
                    </p>`
                    :
                    ""
                }

                <a
                    href="${place.maps}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="maps-button">

                    📍 Abrir en Google Maps

                </a>

            </div>

        </article>
    `;
}


/* =================================
   MOSTRAR CATEGORÍA
================================= */

function showCategory(category) {

    currentCategory = category;

    categoryTitle.textContent =
        categoryNames[category];

    searchInput.value = "";

    const data =
        places[category] || [];

    placesGrid.innerHTML =
        data.map(createCard).join("");

    noResults.style.display =
        data.length === 0
        ? "block"
        : "none";

    categoryButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category === category
        );

    });

    window.scrollTo({
        top:
            document.querySelector(
                ".explorer-section"
            ).offsetTop - 80,

        behavior: "smooth"
    });
}


/* =================================
   CATEGORÍAS
================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showCategory(
                button.dataset.category
            );

        }
    );

});


/* =================================
   BUSCADOR
================================= */

searchInput.addEventListener(
    "input",
    () => {

        const search =
            searchInput.value
                .toLowerCase()
                .trim();

        const data =
            places[currentCategory] || [];

        const filtered =
            data.filter(place => {

                const completeText = `
                    ${place.name}
                    ${place.description}
                    ${place.location}
                `.toLowerCase();

                return completeText.includes(search);
            });

        placesGrid.innerHTML =
            filtered.map(createCard).join("");

        noResults.style.display =
            filtered.length === 0
            ? "block"
            : "none";
    }
);


/* =================================
   LIMPIAR BUSCADOR
================================= */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        showCategory(currentCategory);

    }
);


/* =================================
   MENÚ MÓVIL
================================= */

menuToggle.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );

    }
);


document.querySelectorAll(
    ".nav-links a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "active"
            );

        }
    );

});


/* =================================
   PARTÍCULAS
================================= */

const particles =
    document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 14) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(
        particle
    );
}


/* =================================
   PARALLAX DEL FONDO
================================= */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX /
            window.innerWidth - .5) * 8;

        const y =
            (event.clientY /
            window.innerHeight - .5) * 8;

        const background =
            document.querySelector(
                ".background-photo"
            );

        if (background) {

            background.style.transform =
                `scale(1.08)
                 translate(${x}px, ${y}px)`;

        }

    }
);


/* =================================
   AÑO
================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =================================
   INICIO
================================= */

showCategory("comida");
