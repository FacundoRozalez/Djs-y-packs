// Obtener ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const productoId = parseInt(params.get('id'));

const contenedor = document.getElementById('detalleProducto');

// JSON de productos (puede estar en archivo externo)
fetch('producto-detalle.json')
  .then(res => res.json())
  .then(productos => {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) {
      contenedor.innerHTML = "<p>Producto no encontrado.</p>";
      return;
    }

    // Agregar CSS específico del producto
    if (producto.css) {
      const linkCss = document.createElement('link');
      linkCss.rel = 'stylesheet';
      linkCss.href = producto.css;
      document.head.appendChild(linkCss);
    }

    // Renderizar todo el contenido
    contenedor.innerHTML = `
<div class="parent">
  <div class="div1">
    <a href="https://t.me/Vipdjs321" target="_blank" class="telegram-icon">
      <i class="fab fa-telegram-plane"></i>
    </a>
    <a href="https://wa.me/5219831015575" target="_blank" class="whatsapp-icon">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>

  <div class="div2">
    <a href="index.html">
      <img src="./images/logo.png" alt="Logo" class="logo">
    </a>
  </div>

  <div class="div3">
    <div class="search-container">
      <input type="text" placeholder="Buscar..." class="search-input">
      <span class="search-icon">🔍</span>
    </div>
  </div>

  <div class="div4">
    <div class="dropdown">
      <button class="dropbtn">CATEGORIAS <span class="arrow"></span></button>
      <div class="dropdown-content">
        ${productos.map(p => `<a href="producto.html?id=${p.id}">${p.nombre}</a>`).join('')}
      </div>
    </div>
  </div>

  <div class="linea-divisoria"></div>
  <div class="linea-divisoria1"></div>

  <div class="div5">
    <div class="carousel">
      <div class="slides">
        ${producto.imagenes.map(img => `<img src="${img}" alt="${producto.nombre}" class="slide">`).join('')}
      </div>
    </div>
  </div>

  <div class="div6">
    <p class="nombre-producto">${producto.titulo}</p>
    <p class="precio-producto">${producto.precio}</p>
    <div class="detalle-producto">
      ${producto.detalle.map(linea => `<p>${linea}</p>`).join('')}
    </div>

    <div class="resaltado">PARA ABONAR POR OXXO O TRANSFERENCIA PULSAR EL BOTON DE WHATSAPP</div>

    <div class="botones-container">
      <a href="https://wa.me/5219831015575?text=Hola,%20quiero%20consultar%20por%20este%20producto:${window.location.href}"
         target="_blank" class="boton-whatsapp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        Comprar por WhatsApp
      </a>

      <a href="https://www.paypal.me/musicaparadjsypacks"
         target="_blank" class="boton-paypal">
        <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal">
        Comprar con PayPal
      </a>
    </div>
  </div>
</div>
    `;
  })
  .catch(err => {
    contenedor.innerHTML = "<p>Error al cargar el producto.</p>";
    console.error(err);
  });
