// Datos productos
const productos = {
  futbol: [
    { nombre: "Conjunto Independiente Rivadavia", precio: "$16.000", imagen: "img/futbol1.jpg" },
    { nombre: "Conjunto Las Heras", precio: "$16.000", imagen: "img/futbol2.jpg" },
    { nombre: "Conjunto Godoy Cruz", precio: "$16.000", imagen: "img/futbol3.jpg" },
    { nombre: "Conjunto Lobo", precio: "$16.000", imagen: "img/futbol4.jpg" }
  ],
  remeras: [
    { nombre: "Remera Deportiva Blanca", precio: "$5.990", imagen: "img/remera1.jpg" },
    { nombre: "Remera Negra Clásica", precio: "$6.490", imagen: "img/remera2.jpg" }
  ],
  conjuntos: [
    { nombre: "Conjunto Deportivo Rosa", precio: "$12.990", imagen: "img/conjunto1.jpg" },
    { nombre: "Conjunto Negro Fit", precio: "$11.500", imagen: "img/conjunto2.jpg" }
  ],
  calzas: [
    { nombre: "Calza Adidas", precio: "$13.000", imagen: "img/calzas1.jpg" },
    { nombre: "Calza Nike", precio: "$13.000", imagen: "img/calzas2.jpg" },
    { nombre: "Calza Nike", precio: "$13.000", imagen: "img/calzas3.jpg" },
    { nombre: "Calza Adidas", precio: "$13.000", imagen: "img/calzas4.jpg" },
    { nombre: "Calza Nike", precio: "$13.000", imagen: "img/calzas5.jpg" },
    { nombre: "Calza Puma", precio: "$13.000", imagen: "img/calzas6.jpg" },
    { nombre: "Calza Nike", precio: "$13.000", imagen: "img/calzas7.jpg" },
    { nombre: "Calza Nike", precio: "$13.000", imagen: "img/calzas8.jpg" },
    { nombre: "Calza Nike", precio: "$13.000", imagen: "img/calzas9.jpg" },
  ],
  bikers: [
    { nombre: "Biker adidas rojo", precio: "$10.000", imagen: "img/biker1.jpg" },
    { nombre: "Biker nike lila", precio: "$10.000", imagen: "img/biker2.jpg" },
    { nombre: "Biker puma gris", precio: "$10.000", imagen: "img/biker3.jpg" },
    { nombre: "Biker nike negro", precio: "$10.000", imagen: "img/biker4.jpg" },
  ],
  tops: [
    { nombre: "Top Deportivo", precio: "$5.990", imagen: "img/top1.jpg" },
    { nombre: "Top con Soporte", precio: "$6.490", imagen: "img/top2.jpg" }
  ],
  baggys: [
    { nombre: "Baggy Cargo Verde", precio: "$9.990", imagen: "img/cargobaggy.jpg" },
    { nombre: "Baggy Celeste", precio: "$8.990", imagen: "img/baggyceleste.jpg" },
    { nombre: "Baggy Gris", precio: "$8.990", imagen: "img/baggygris.jpg" },
    { nombre: "Baggy Óxido", precio: "$8.990", imagen: "img/baggyoxido.jpg" }
  ],
  jeanshombre: [
    { nombre: "Jean Azul Clásico", precio: "$10.990", imagen: "img/clasicoazul.jpg" },
    { nombre: "Jean Gris Clásico", precio: "$11.990", imagen: "img/clasicogris.jpg" }
  ],
  jeansmujer: [
    { nombre: "Short celeste brillo", precio: "$16.000", imagen: "img/shortbrillo.jpg" },
    { nombre: "Falda pantalon celeste brillo", precio: "$16.000", imagen: "img/faldapant.jpg" }
  ],
  remerasHombre: [
    { nombre: "Remera Hombre Adidas (algodón)", precio: "$6.990", imagen: "img/remeraadida.jpg" },
    { nombre: "Chomba Lacoste", precio: "$7.490", imagen: "img/lacoste.jpg" }
  ],
  remerasMujer: [
    { nombre: "Remera Mujer Rosa", precio: "$6.990", imagen: "img/remeram1.jpg" },
    { nombre: "Remera Mujer Gris", precio: "$7.490", imagen: "img/remeram2.jpg" }
  ]
};

// Variables para carrusel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth + 20; // ancho + margen
let index = 0;

// Función para actualizar posición del carrusel
function updateCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

// Auto scroll carrusel, solo si visible
function autoScroll() {
  const carousel = document.getElementById('carousel');
  if (carousel.style.display === 'none') return; // No hacer nada si oculto

  index++;
  if (index > items.length - 1) { // ajustá si mostrás 3 items visibles
    index = 0;
  }
  updateCarousel();
}
setInterval(autoScroll, 3000);

// Mostrar productos de categoría y ocultar carrusel
function mostrarCategoria(categoria) {
  const contenedor = document.getElementById('productos');
  const carousel = document.getElementById('carousel');
  const btnVolver = document.getElementById('btnVolver');
  cerrarMenu();
  carousel.style.display = 'none'; // ocultar carrusel
  btnVolver.style.display = 'block'; // mostrar botón volver
  contenedor.innerHTML = ""; // limpiar contenido anterior

  const itemsCategoria = productos[categoria];

  if (!itemsCategoria || itemsCategoria.length === 0) {
    contenedor.innerHTML = "<p>No hay productos para mostrar.</p>";
    return;
  }

  itemsCategoria.forEach(item => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>${item.precio}</p>
      </div>
    `;
  });
}

// Volver a la vista inicial (mostrar carrusel, ocultar productos y botón)
function mostrarInicio() {
  const contenedor = document.getElementById('productos');
  const carousel = document.getElementById('carousel');
  const btnVolver = document.getElementById('btnVolver');

  contenedor.innerHTML = "";
  carousel.style.display = 'block';
  btnVolver.style.display = 'none';
  index = 0;
  updateCarousel();
}
// === PANEL LATERAL (tipo Nike) ===

// Botón que abre el menú lateral
const menuBtn = document.querySelector('.menu-btn');
// Contenedor del panel lateral
const sideMenu = document.getElementById('sideMenu');
// Botón para cerrar el panel
const closeBtn = document.querySelector('.close-btn');

// Abrir menú lateral
menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

// Cerrar menú lateral
closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

// Cerrar si se hace clic fuera del panel
document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    sideMenu.classList.remove('active');
  }
});

// --- Submenú dentro del panel ---
const submenuBtns = document.querySelectorAll('.submenu-btn-lateral');

submenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
   const submenu= btn.nextElementSibling;
   submenu.classList.toggle('show');
  });
});

// Al mostrar una categoría, también cerramos el panel
function cerrarMenu() {
  sideMenu.classList.remove('active');
}
