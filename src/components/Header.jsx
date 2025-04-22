import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#">
          <img src="../public/logo.svg" alt="" />
        </a>

        <nav className="header-section">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <button className="header-bt">
          {" "}
          <a href="#">Let’s Talk</a>{" "}
        </button>
      </div>
      {/* HERO */}

      <div className="hero container">
        <div className="hero-title">
          <h2>
            Learn <br /> Any Foreign Language
          </h2>
          <img className="hero-lompa" src="../public/lompa.jpg" alt="" />
          <p>
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button>
            {" "}
            <a href="#">Get started</a>{" "}
          </button>
        </div>
        <img className="hero-img" src="../public/hero-bg.svg" alt="" />
      </div>
    </header>
  );
}
