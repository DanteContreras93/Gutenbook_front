class headNavbar extends HTMLElement{
  connectedCallback(){
      this.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      <script defer
        src="https://kit.fontawesome.com/ab5cfb6f45.js" 
        crossorigin="anonymous">
      </script>
      <link rel="stylesheet" href="./css/nav.css">
      `
  }

}//headNavbar-gutenBook

customElements.define('head-navbar', headNavbar)


class navbarGutenBook extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
              <a class="navbar-brand" id = "mainLogo" href="./index.html">Gutenbook</a>
              <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
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
  
                </ul>
                <form class="d-flex" role="search">
                  <div class="input-group mb-3">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Buscar" 
                      aria-label="Recipient's username" 
                      aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                </form>
  
                <div class="navicon">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div class="navicon">
                  <i class="fa-solid fa-bag-shopping"></i>
                </div>
              </div>
            </div>
        </nav>
      </header>
        `
    }

}//nav-bar-gutenBook

customElements.define('dante-navbar', navbarGutenBook)

class footerGutenBook extends HTMLElement{
  connectedCallback(){
      this.innerHTML = `
      
        <div class="container-fluid">
          <p><a class="navbar-brand" href="./index.html"> Gutenbook </a></br>
          © Gutenbook 2022</p>
        </div>
          
      `
    }
  }

  customElements.define('dante-footer', footerGutenBook) 
