import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer className="section-block">
      <button className="primary-button">Ver Github</button>
      <button className="primary-button">Enviar correo</button>
    </footer>
  );
}

function Project() {
  const classes = "section-block purple";
  return (
    <div class={classes}>
      <div className="project-image">
        <img src="img/spotify-stats.png" alt="Imagen del proyecto"></img>
      </div>
      <div className="project-description bordered">
        <div className="project-title">
          <h2>Spotify</h2>
          <div className="space">
            <div></div>
            <h2 clas>Stats</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          luctus mi mauris, vitae molestie mi eleifend vel. Fusce suscipit enim
          magna, egestas pretium sem pellentesque imperdiet. Quisque tristique
          neque dui, quis ultrices enim efficitur sit amet. Mauris dignissim
          purus nec iaculis efficitur. Curabitur aliquam ultricies elementum.
        </p>
        <button className="primary-button">ver código</button>
        <button className="primary-button no-mobile">ver aplicación</button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="section-block bordered">
      <div className="icon-box">
        <a href="/" className="icon">
          <img src="img/github.png" alt="github" />
        </a>
      </div>
      <div className="title">
        <h1>
          Miguel
          <br />
          Ángel
        </h1>
        <h3>DESARROLLADOR FRONT-END</h3>
      </div>
    </header>
  );
}

function App() {
  return (
    <div class="content">
      <Header />
      <main>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
