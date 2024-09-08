

class SpecialFavicon extends HTMLElement {
  connectedCallback() {
    // This code will dynamically add favicon links to the existing <head>
    const link1 = document.createElement('link');
    link1.rel = 'apple-touch-icon';
    link1.sizes = '180x180';
    link1.href = 'apple-touch-icon.png';
    
    const link2 = document.createElement('link');
    link2.rel = 'icon';
    link2.type = 'image/png';
    link2.sizes = '32x32';
    link2.href = 'favicon-32x32.png';
    
    const link3 = document.createElement('link');
    link3.rel = 'icon';
    link3.type = 'image/png';
    link3.sizes = '16x16';
    link3.href = 'favicon-16x16.png';
    
    const link4 = document.createElement('link');
    link4.rel = 'manifest';
    link4.href = 'site.webmanifest';
    
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
    document.head.appendChild(link4);
  }
}

// Define the custom element
customElements.define('special-favicon', SpecialFavicon);


class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<style>

/* HEADER */
header {
    position: fixed; /*Uncommet for a fixed header*/
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    /* border-bottom: 1px solid var(--main-text-color); */
    background-color: rgba(255, 255, 255, 0.6); /*var(--background-color);*/
    backdrop-filter: blur(4px);
 
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--main-text-color);
    /* font-family: "Playflair"; */
    font-family: var(--body-text-family);
}

.navbar {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;

}

.nav-link {
    font-size: 1.1rem;
    padding: 4px 8px;
    border-radius: 0.2rem;
    color: var(--main-text-color);
}

.nav-link:hover {
    font-style: italic;
    /* color: var(--text-hover-color); */
    transition: 0.3s all linear;
}


.main-content{
margin-top: 102px; 
}

</style>


      <header>
      <!-- <!- NAV SECTION -->
      <div class="nav container">
        <!-- LOGO SECTION -->
        <a href="index.html" class="logo">Lydia Belachew.</a>
        <!-- NAVBAR SECTION -->
        <ul class="navbar">
                <li class="navbar-elements"><a href="index.html#about-me" class="nav-link">About me</a></li>
                <li class="navbar-elements"><a href="index.html#work" class="nav-link">Work</a></li>
                <li class="navbar-elements"><a href="index.html#contact" class="nav-link">Contact</a></li>
            </ul>
      </div>
    </header>
    `;
  }
}

customElements.define("special-header", SpecialHeader);

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

      <!-- BOXICONS CSS -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

<style>
.footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    border-top: 1px solid var(--main-text-color);
    padding-top: 5rem;
    padding-bottom: 1.5rem;
}

.footer .list-link {
    color: var(--main-text-color);
}
</style>

    <footer class="footer">
        <div class="footer-container container">
          <div class="social-media">
            <ul class="list">
              <li class="list-item">
                <a href="#" class="list-link">
                  <i class="bx bxl-behance bx-sm"></i>
                  <i class="bx bxl-linkedin bx-sm"></i>
                  <i class="bx bxl-github bx-sm"></i>
                </a>
              </li>
            </ul>
          </div> 
          <span class="footer-text">
            Coded by me with love
          </span>
          <span class="footer-text">
            &copy; 2023 Lydia. All rights reserved.
          </span>
        </div>
      </footer>
      `;
  }
}

customElements.define("special-footer", SpecialFooter);
