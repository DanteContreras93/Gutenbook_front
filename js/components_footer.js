
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
