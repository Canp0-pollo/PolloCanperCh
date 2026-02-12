

const productos = [
// PRINCIPAL
  {
    nombre: "Pizza Pepperoni",
    precio: 185,
    imagen: "/webp/pizza pepperoni.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza hawaiana",
    precio: 198,
    imagen: "/webp/pz_hawa.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza tres carnes",
    precio: 235,
    imagen: "/webp/pz_3_car.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Flamin Hot",
    precio: 285,
    imagen: "/webp/pz_flm_hot.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Especial",
    precio: 285,
    imagen: "/webp/pz_especial.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Suprema",
    precio: 285,
    imagen: "/webp/pz_supre.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza con Boneless",
    precio: 285,
    imagen: "/webp/pz_boneless.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Italiana",
    precio: 225,
    imagen: "/webp/pz_ital.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Doble Sabor",
    precio: 215,
    imagen: "/webp/pz_2ble_sabor.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Cuatro Estaciones",
    precio: 225,
    imagen: "/webp/pz_4.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Vegana",
    precio: 195,
    imagen: "/webp/pz_veg.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Duo Champiñon",
    precio: 225,
    imagen: "/webp/pz_duo_champ.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Carne Asada",
    precio: 280,
    imagen: "/webp/pz_car_asada.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza Duo Suprema",
    precio: 245,
    imagen: "/webp/pz_duo_supr.webp",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni con Jalapeño",
    precio: 200,
    imagen: "/webp/pz_pep_jal.webp",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni-Hawaiana",
    precio: 210,
    imagen: "/webp/pep_hawai.webp",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni Salchicha Italiana",
    precio: 215,
    imagen: "/webp/pep_salch_it.webp",
    categoria: "principal"
  },
  {
    nombre: "Pepperoni Tres Carnes",
    precio: 220,
    imagen: "/webp/pep_3_carn.webp",
    categoria: "principal"
  },
  {
    nombre: "Pizza de Queso",
    precio: 170,
    imagen: "/webp/pz_queso.webp",
    categoria: "principal"
  },
// ENTRADA
  {
    nombre: "Alitas Picositas",
    precio: 150,
    imagen: "/webp/ali_picosi.webp",
    categoria: "entrada"
  },
  {
    nombre: "Boneless",
    precio: 140,
    imagen: "/webp/boneles.webp",
    categoria: "entrada"
  },
  {
    nombre: "Aros de Cebolla",
    precio: 85,
    imagen: "/webp/aro_cebolla.webp",
    categoria: "entrada"
  },
  {
    nombre: "Dedos de Queso",
    precio: 130,
    imagen: "/webp/dedos_queso.webp",
    categoria: "entrada"
  },
  {
    nombre: "Papas con Queso y Tocino",
    precio: 115,
    imagen: "/webp/pps_c_queso.webp",
    categoria: "entrada"
  },
  {
    nombre: "Papas con Boneless",
    precio: 185,
    imagen: "/webp/papas_c_bon.webp",
    categoria: "entrada"
  },
  {
    nombre: "Orden - Pan de Ajo",
    precio: 180,
    imagen: "/webp/pan_ajo.webp",
    categoria: "entrada"
  },
  {
    nombre: "Hamburguesa con Papas",
    precio: 125,
    imagen: "/webp/hamb_c_queso.webp",
    categoria: "entrada"
  },
  {
    nombre: "Ensalada con Pollo",
    precio: 140,
    imagen: "/webp/ens_pollo.webp",
    categoria: "entrada"
  },
  {
    nombre: "Tiras de Pollo",
    precio: 150,
    imagen: "/webp/tiras_d_pollo.webp",
    categoria: "entrada"
  },
  {
    nombre: "Camper Box",
    precio: 395,
    imagen: "/webp/camp_box.webp",
    categoria: "entrada"
  },
  {
    nombre: "Mega Box",
    precio: 480,
    imagen: "/webp/M_camp_box.webp",
    categoria: "entrada"
  },
  {
    nombre: "Pasta Alfredo",
    precio: 85,
    imagen: "/webp/pasta_alf.webp",
    categoria: "entrada"
  },
// BEBIDAS

  {
    nombre: "Agua Natural",
    precio: 25,
    imagen: "/webp/bebida2.webp",
    categoria: "entrada"
  },
  {
    nombre: "Coca-Cola",
    precio: 23,
    imagen: "/webp/bebida3.webp",
    categoria: "entrada"
  },
  {
    nombre: "Bebida",
    precio: 23,
    imagen: "/webp/bebida1.webp",
    categoria: "entrada"
  },
];

function crearCard(producto) {
  return `
    <div class="card">
      <img src="${producto.imagen}">
      <div class="card-name">
        ${producto.nombre}
        <p class="precio">$${producto.precio}<span>.00</span></p>
        <button class="btn-agregar"
          data-nombre="${producto.nombre}"
          data-precio="${producto.precio}">
          Agregar a carrito
        </button>
      </div>
    </div>
  `;
}

function renderMenu() {
  const principal = document.getElementById("menu-principal");
  const entradas = document.getElementById("menu-entradas");

  console.log("principal:", principal);
  console.log("entradas:", entradas);

  productos.forEach(prod => {
    if (prod.categoria === "principal") {
      principal.innerHTML += crearCard(prod);
    } else {
      entradas.innerHTML += crearCard(prod);
    }
  });
}

renderMenu();

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-agregar")) {
    console.log("CLICK", e.target.dataset);
    agregarAlCarrito(
      e.target.dataset.nombre,
      Number(e.target.dataset.precio)
    );
  }
});

// ---------------------------------




// ----------------------------------
document.querySelectorAll('.cards').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block'
            ? 'none'
            : 'block';
    });
});

document.getElementById("search").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const nombre = card.innerText.toLowerCase();
    card.style.display = nombre.includes(texto) ? "block" : "none";
  });
});


const toggle = document.querySelector('.toggle-options');
const options = document.querySelector('.options');

toggle.addEventListener('click', ()=>{
  const abierto = options.style.display === 'block';
  options.style.display = abierto ? 'none' : 'block';
  toggle.textContent = abierto ? '+' : '−';
});

let productoSeleccionado = {
    nombre: null,
    precio: null
}

function seleccionarRefresco(img, nombre, precio){
  document.getElementById('img-refresco').src = img;
  document.getElementById('nombre-refresco').innerText = nombre;
  document.getElementById('precio-refresco').innerText = `$${precio}.00`;

  // Guardamos el producto activo
  productoSeleccionado.nombre = nombre;
  productoSeleccionado.precio = precio;

}

function agregarSeleccionAlCarrito(){
  agregarAlCarrito(
    productoSeleccionado.nombre,
    productoSeleccionado.precio
  );
}

function mostrarAdvertencia(texto){
  const mensaje = document.getElementById("mensaje-error");

  mensaje.innerText = texto;
  mensaje.classList.add("mostrar");

  setTimeout(() => {
    mensaje.classList.remove("mostrar");
  }, 2000); // visible 2 segundos
}
