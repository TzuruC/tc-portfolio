export const Header = () => {
  return (
    <header className="pb-4 container d-flex justify-content-between align-items-end">
      <div className="logo text-nowrap px-3 pb-2 pt-lg-6 pt-5 pe-lg-8 pe-8 fs-3 text-white bg-dark fw-bold">
        Tzuru Chen
      </div>

      <button className="menu-btn mb-2 me-2" aria-label="Navigation Menu">
        <img src="./assets/open_menu.svg" alt="menu icon" />
      </button>
      <nav className="nav pb-2">
        <ul className="m-0 p-0 li2t-unstyled">
          <li>
            <a className="py-2 fs-5 fw-bold" href="#about">
              個人簡介
            </a>
          </li>
          <li>
            <a className="py-2 fs-5 fw-bold" href="#projects">
              代表作品
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
