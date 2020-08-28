//Mostrar datos en el modal
console.log("hola");

fetch(`../../data/data.json`)
    .then((res) => res.json())
    .then(({ productos }) => {
          // Contenido modal 
            let data = document.querySelector("#contenido")
          
            //PRODUCTO 1// 
            let valor1 = document.querySelector('#boton1').value
          
          for (prod of productos){ 
            if(prod.id==valor1)
            {console.log(prod.nombre)}
          }
          if(
          data.innerHTML += `<div class="card" style="width: 18rem;">
          <img src="/images/productos/${prod.imagen}" id="imagen" class="card-img-top" alt="Imagen">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text"><strong>Precio:$${prod.precio}</strong></p><p>${prod.data}</p>
            <a href="/detalle" class="btn btn-danger">Comprar</a>
          </div>
         </div>`);

         

           //PRODUCTO 2// 
            let valor2 = document.querySelector('#boton2').value

            for (prod of productos){ 
              if(prod.id==valor2)
              {console.log(prod.nombre)}
          }
          if( data.innerHTML += `<div class="card" style="width: 18rem;">
          <img src="/images/productos/${prod.imagen}" id="imagen" class="card-img-top" alt="Imagen">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text"><strong>Precio:$${prod.precio}</strong></p><p>${prod.data}</p>
            <a href="/carrito" class="btn btn-danger">Comprar</a>
          </div>
         </div>`);

         //PRODUCTO 3//
         let valor3 = document.querySelector('#boton3').value

            for (prod of productos){ 
              if(prod.id==valor3)
              {console.log(prod.nombre)}
          }
          if( data.innerHTML += `<div class="card" style="width: 18rem;">
          <img src="/images/productos/${prod.imagen}" id="imagen" class="card-img-top" alt="Imagen">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text"><strong>Precio:$${prod.precio}</strong></p><p>${prod.data}</p>
            <a href="/carrito" class="btn btn-danger">Comprar</a>
          </div>
         </div>`);

        })
