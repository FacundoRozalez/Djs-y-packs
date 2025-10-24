// Cargar productos desde el JSON
fetch("productos.json")
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("productos");
    const menu = document.getElementById("menuCategorias");

    // Mostrar productos
    function mostrarProductos(lista) {
      contenedor.innerHTML = "";
      lista.forEach(prod => {
        contenedor.innerHTML += `
          <a href="producto.html?id=${prod.id}" class="link-div">
            <div class="producto">
              <div class="imagen-contenedor">
                <img class="producto1" src="${prod.imagen}" alt="${prod.nombre}" />
              </div>
              <p class="nombre-producto">${prod.titulo}</p>
              <p class="precio-producto">💵 ${prod.precio}</p>
            </div>
          </a>
        `;
      });
    }

    // Cargar categorías únicas en el menú
    const categorias = [...new Set(productos.map(p => p.categoria))];
    categorias.forEach(cat => {
      menu.innerHTML += `<a href="#" class="categoria-link" data-categoria="${cat}">${cat}</a>`;
    });

    // Filtrar por categoría
    menu.addEventListener("click", e => {
      if (e.target.classList.contains("categoria-link")) {
        e.preventDefault();
        const categoria = e.target.dataset.categoria;
        const filtrados = productos.filter(p => p.categoria === categoria);
        mostrarProductos(filtrados);
      }
    });

    // Buscador
    document.getElementById("buscador").addEventListener("input", e => {
      const texto = e.target.value.toLowerCase();
      const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.titulo.toLowerCase().includes(texto)
      );
      mostrarProductos(filtrados);
    });

    // Mostrar todos al inicio
    mostrarProductos(productos);
  })
  .catch(() => {
    document.getElementById("productos").innerHTML = "<p>Error al cargar los productos.</p>";
  });
