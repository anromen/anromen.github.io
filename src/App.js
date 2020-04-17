import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer className="section-block bordered">
      <div className="button-box">
        <a
          href="https://github.com/anromen"
          className="primary-button"
          target="_blank"
        >
          Ver Github
        </a>
        <a
          href="mailto:migg.ro3@gmail.com"
          className="primary-button"
          target="_blank"
        >
          Enviar correo
        </a>
      </div>
    </footer>
  );
}

function ProjectAnimalWiki() {
  return (
    <div className="section-block gray">
      <img
        src="img/animal-wiki.png"
        alt="Imagen del proyecto"
        className="project-image"
      ></img>

      <div className="project-description bordered">
        <div className="project-content">
          <div className="project-title">
            <h2>Animal</h2>
            <h2 className="low-title">
              <span className="space"></span>Wiki
            </h2>
          </div>
          <p>
            Una aplicación que funciona como una fuente de consulta sobre los
            animales salvajes que habitán nuestro planeta. Realice este proyecto
            por tres razones: el diseño me impactó, quería conocer realmente lo
            que era Redux y como se conectaba en una aplicación de React y,
            finalmente, buscaba implementar un diseño adaptable a diferentes
            tamaños de pantalla (Responsive).
          </p>
          <div className="button-box">
            <a
              href="https://github.com/anromen/animal-wiki"
              className="primary-button"
              target="_blank"
            >
              ver código
            </a>
            <a
              href="https://anromen.github.io/animal-wiki/"
              className="primary-button no-mobile"
              target="_blank"
            >
              ver aplicación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectSpotifyStats() {
  return (
    <div className="section-block purple">
      <img
        src="img/spotify-stats.png"
        alt="Imagen del proyecto"
        className="project-image"
      ></img>

      <div className="project-description bordered">
        <div className="project-content">
          <div className="project-title">
            <h2>Spotify</h2>
            <h2 className="low-title">
              <span className="space"></span>Stats
            </h2>
          </div>
          <p>
            Es una página que mata la curiosidad sobre cuales son esos artistas
            y canciones que se escuchan con mayor insistencia en Spotify. Con
            esta aplicación quería aprender sobre el proceso para consumir una
            API externa. Adicionalmente buscaba tener un acercamiento al diseño
            de páginas web e implementarlo por mi cuenta, jugando con las
            formas, las posiciones y orientaciones de los elementos.
          </p>
          <div className="button-box">
            <a
              href="https://github.com/anromen/spotify-stats"
              className="primary-button"
              target="_blank"
            >
              ver código
            </a>
            <a
              href="https://anromen.github.io/spotify-stats/"
              className="primary-button no-mobile"
              target="_blank"
            >
              ver aplicación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="section-block bordered">
      <div className="icon-box">
        <a href="https://github.com/anromen/" className="icon" target="_blank">
          <img src="img/github.png" alt="github" />
        </a>
      </div>
      <div className="title">
        <h1>
          Miguel
          <br />
          Ángel
        </h1>
        <h3>DESARROLLADOR FRONT-END JUNIOR</h3>
      </div>
    </header>
  );
}

function App() {
  return (
    <div class="content">
      <Header />
      <main>
        <ProjectSpotifyStats />
        <ProjectAnimalWiki />
      </main>
      <Footer />
    </div>
  );
}

export default App;
