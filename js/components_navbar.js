
class navbarGutenBook extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <nav class="navbar navbar-expand-lg bg-light" id = "navbarDante">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">Gutenbook</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" id="navitem" href="./index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="navitem" href="./navbar_nosotros.html">Nosotros</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="navitem" href="./contacto.html">Contacto</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navitem" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Géneros
                      </a>
                      <ul class="dropdown-menu" id="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Género1</a></li>
                        <li><a class="dropdown-item" href="#">Género2</a></li>
                        <li><a class="dropdown-item" href="#">Género3</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form class="d-flex flex-row" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                    <button class="btn" id= "btnBuscar" type="submit">Buscar</button>
                    </form>
                  
                  <div class="divicon">
                    <g class="diviconSelect">
                      <a class="nav-link" id="navitem" href="./new_register.html">
                          <div class="logo">
                              <i class="fa-solid fa-user"></i>
                          </div>
                          <p class="nav-logos">Iniciar sesión</p>
                      </a>
                    </g>
                  </div>
                    <div class="divicon">
                      <g class="diviconSelect">
                          <div class="logo">
                            <i class="fa-solid fa-cart-shopping"></i>
                          </div>
                          <p class="nav-logos">Carrito</p>
                      </g>
                    </div>
                </div>
              </div>
          </nav>
        `
    }

}//nav-bar-gutenBook

customElements.define('dante-navbar', navbarGutenBook)

