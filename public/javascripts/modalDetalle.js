//Mostrar datos en el modal
console.log("hola");

fetch(`../../data/data.json`)
  .then((res) => res.json())
  .then(({ productos }) => {
    // Contenido modal
    let data = document.querySelector("#contenido");

    let botones = document.querySelectorAll("#boton1");
    for (let boton of botones) {
      boton.addEventListener("click", () => {
        for (let prod of productos) {
          if (prod.id == boton.value) {
            return (data.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="/images/productos/${prod.imagen}" id="imagen" class="card-img-top" alt="Imagen">
                     <div class="card-body">
                       <h5 class="card-title">${prod.nombre}</h5>
                       <p class="card-text"><strong>Precio:$${prod.precio}</strong></p><p>${prod.data}</p>
                       <a href="/detalle" class="btn btn-danger">Comprar</a>
                     </div>
                    </div>`);
          }
        }
      });
    }
  });
