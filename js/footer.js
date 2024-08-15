class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.loadStyles();
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
      <footer>
        <div class="footer-container">
          <div class="footer-column">
            <h4>About Us</h4>
            <p>
              Emerald Group is an established and leading figure in entertainment
              for the past 20 years. We are always looking to represent new talent,
              and have offices located all over the world. We are passionate about
              enrichung cultures worldwide through music, Film, Tv, and more.
            </p>
          </div>
          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="home.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="associates.html">Our Associates</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="faq.html">F.A.Q</a></li>
              <li><a href="featured-artist.html">Featured Artists</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Contact Us</h4>
            <p>Email: info@emeraldgroup.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div class="footer-column">
            <h4>Social Media</h4>
            <div class="social-icons">
              <ul>
                <li>
                  <a href="https://twitter.com/EmeraldGroup">
                    <img id="X" src="images/Social Media Logos/twitterx.png" alt="twitter link" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/EmeraldGroup">
                    <img id="Instagram" src="images/Social Media Logos/insta.png" alt="instagram link" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/EmeraldGroup">
                    <img id="Facebook" src="images/Social Media Logos/facebook.png" alt="facebook link" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/EmeraldGroup">
                    <img id="Youtube" src="images/Social Media Logos/youtube.png" alt="YouTube link" />
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com/EmeraldGroup">
                    <img id="TikTok" src="images/Social Media Logos/tiktok.png" alt="TikTok link" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/EmeraldGroup">
                    <img id="LinkedIn" src="images/Social Media Logos/linkedin.png" alt="LinkedIn link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 EMERALD GROUP. All rights reserved.</p>
        </div>

        <div id="cookieConsent">
          <h1>Cookie Preferences</h1>
          <p>
            The Emerald Group website use cookies to enhance the browsing
            experience. By continuing to use this site, you consent to the use of
            cookies.
          </p>
          <button type="button" onclick="closecookie()">Accept</button>
        </div>
      </footer>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("footer-comp", Footer);
