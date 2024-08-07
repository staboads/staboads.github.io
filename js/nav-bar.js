class NavBar extends HTMLElement {
  constructor() {
    super();
    this.loadStyles();

    const shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
        <header>
          <div class="header container">
            <div class="logo-container">
              <img src="images/Logo/transparentlogo.png" alt="EMERALD logo " />
              <h1>EMERALD GROUP</h1>
            </div>

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

    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["currentpage"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "currentpage") {
      this.updateSelectedPage(newValue);
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
  }
}

customElements.define("nav-bar-comp", NavBar);
