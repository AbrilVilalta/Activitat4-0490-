
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <a href="/" className="header-logo">
                <span className="logo-icon">S</span>
                <span className="logo-text">
                    <strong>SHOPYSHOP</strong>
                    <small>LOREM IPSUM</small>
                </span>
            </a>

            <nav className="header-nav">
                <a className="active">Shop</a>
                <a>Objects</a>
                <a>Stories</a>
                <a>About</a>
                <a>Contact</a>
            </nav>

            <div className="header-actions">
                <button type="button" aria-label="Cercar" className="header-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="10.8" cy="10.8" r="6.5" />
                        <path d="m16 16 4.5 4.5" />
                    </svg>
                </button>

                <button type="button" aria-label="Preferits" className="header-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.5 8.8c0 4.5-8.5 10-8.5 10s-8.5-5.5-8.5-10A4.5 4.5 0 0 1 12 6.3a4.5 4.5 0 0 1 8.5 2.5Z" />
                    </svg>
                </button>

                <button type="button" aria-label="Cistella" className="header-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 8h14l-1 12H6L5 8Z" />
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;