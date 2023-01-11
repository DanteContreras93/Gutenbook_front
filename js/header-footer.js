const header = document.querySelector("header");
const footer = document.querySelector("footer");


header.innerHTML =  ` 
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #84B6F4;">
      <div class="container">
          <a class="navbar-brand fw-bold" href="./index.html">Gutenbook</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
   
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contacto.html">Contactos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="nosotros.html">Nosotros</a>
            </li>
   
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catalogo
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="catalogo.html">Recientes</a></li>
                <li><a class="dropdown-item" href="registroLibro.html">Agregar Libro</a></li>
              </ul>
            </li>
      
          </ul>

          <form class="search-box mx-2" role="search">
                  <input class="search-txt" type="search" placeholder="Buscar" arial-label="Search" >
                    <a class="search-btn" href="#" Style="text-decoration: none;">
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </a>
              </form>

          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="registro.html">Ingresar/Registrarse</a>
            </li>
          </ul>     
     
        </div>
      </div>
    </nav> `


footer.innerHTML =  `
  <nav class="bg-dark text-white pt-5 pb-4">
 
    <div class="container  text-md-left">
       <div class="row  text-md-left">
         <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold ">Gutenbook</h5>
            <p>"Mejorando día a día para ser la mejor librería del país"

            </p>
           </div>
           <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold">Enlaces</h5>
              <p>
                <a href="./registro.html" class="text-white" style="text-decoration: none;">Inicio de sesión</a>
              </p>
              <p>
                <a href="./registroLibro.html" class="text-white" style="text-decoration: none;">Agregar libro</a>
              </p>
           </div>

            <div class="col-md-3 col-lg-2  col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold">Mapa del sitio</h5>
              
              <p>
                <a href="./index.html" class="text-white" style="text-decoration: none;">Inicio</a>
              </p>
              <p>
                <a href="./nosotros.html" class="text-white" style="text-decoration: none;">Nosotros</a>
              </p>
              <p>
                <a href="./contacto.html" class="text-white" style="text-decoration: none;">Contacto</a>
              </p>
              <p>
                <a href="./catalogo.html" class="text-white" style="text-decoration: none;">Catálogo</a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold">Contacto</h5>
              <p>
                <i class="bi bi-geo-alt me-2"></i>Gutenberg, CDMX, 0000, México.
              </p>
              <p>
                <i class="bi bi-envelope-at me-2"></i>contacto@gutenbook.com
              </p>
              <p>
                <i class="bi bi-telephone-fill me-2"></i>+52 5555555555
              </p>
              <p>
                <i class="bi bi-whatsapp me-2"></i>+52 5555555555
              </p>
            </div>

            <hr class="mb-4">

            <div class="row justify-content-between">
              <div class="col-md-7 col-lg-8">
                <p>Copyright &copy; 2023 Todos los derechos reservados.
                  <a href="./index.html" style="text-decoration: none;">
                    <p class="fw-semibold">Gutenbook</p>
                  </a>
                </p>
              </div>

              <div class="col-md-5 col-lg-4 text-center">
                <div class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com" class="btn-floating btn-sm text-white" style="font-size: 1.5rem;"><i class="bi bi-facebook"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://github.com/DanteContreras93/Gutenbook_front/tree/develop" class="btn-floating btn-sm text-white" style="font-size: 1.5rem;"><i class="bi bi-github"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.linkedin.com/" class="btn-floating btn-sm text-white" style="font-size: 1.5rem;"><i class="bi bi-linkedin"></i></a>
                  </li>
                </div>

              </div>

            </div>
          </div>


    </div>

  </nav>  `


 

 