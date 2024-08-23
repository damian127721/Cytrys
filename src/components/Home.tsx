const Home = () => {
  return (
    <div className="home">
      <ul id="contacts">
        <li>
          <a
            href="https://github.com/damian127721"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Github-icon"
              src="/icons/github.png"
              className="social-icon"
              width={32}
              height={32}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dami%C3%A1n-%C4%8Dmiel-8941b1299/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="LinkedIn-icon"
              src="/icons/linkedin.png"
              className="social-icon"
            />
          </a>
        </li>
      </ul>
      <hr />
      <main id="hero">
        <div>
          <div>
            <h1>Cytrys</h1>
            <p>Keep your stuff in reach</p>
          </div>
          <div className="login-signup-buttons">
            <button className="login-button"></button>
            <button className="signup-button"></button>
          </div>
        </div>
        <img alt="Hero-image" src="/storage-hero-image.jpg" />
      </main>
    </div>
  );
};

export default Home;
