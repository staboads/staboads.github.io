class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.loadStyles();
  }

  static get observedAttributes() {
    return ["currentpage"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "currentpage") {
      if (this.shadowRoot.querySelectorAll(".nav-item").length > 0) {
        this.updateSelectedPage(newValue);
      } else {
        this.currentPageToUpdate = newValue;
      }
    }
  }

  updateSelectedPage(currentPage) {
    const navItems = this.shadowRoot.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      if (item.getAttribute("data-page") === currentPage) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  async loadStyles() {
    const style = document.createElement("style");
    const response = await fetch("./styles/style.css");
    const cssText = await response.text();
    style.textContent = cssText;
    this.shadowRoot.appendChild(style);

    this.loadTemplate();
  }

  loadTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
          <header>
            <div class="header container">
              <a href="home.html">
                <div class="logo-container">
                  <img src="images/Logo/transparentlogo.png" alt="EMERALD logo " />
                  <h1>EMERALD GROUP</h1>
                </div>
              </a>
  
              <nav>
                <ul>
                  <li><a class="nav-item" data-page="home" href="home.html">Home Page</a></li>
                  <li><a class="nav-item" data-page="about" href="about.html">About us </a></li>
                  <li><a class="nav-item" data-page="associates" href="associates.html">Associated Companies</a></li>
                  <li><a class="nav-item" data-page="contact" href="contact.html">Contact us</a></li>
                  <li><a class="nav-item" data-page="featured" href="featured-artist.html">Featured Artist</a></li>
                  <li><a class="nav-item" data-page="faq" href="faq.html">FAQ</a></li>
                </ul>
              </nav>
            </div>
          </header>
      `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    if (this.currentPageToUpdate) {
      this.updateSelectedPage(this.currentPageToUpdate);
      this.currentPageToUpdate = null;
    }
  }
}

customElements.define("nav-bar-comp", NavBar);
