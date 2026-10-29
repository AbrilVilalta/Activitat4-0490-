
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-main">
                <div className="footer-brand">
                    <a href="/" className="header-logo">
                        <span className="logo-icon">S</span>
                        <span className="logo-text">
                            <strong>SHOPYSHOP</strong>
                            <small>LOREM IPSUM</small>
                        </span>
                    </a>

                    <p>
                        Thoughtful objects, modern shapes
                        and timeless style for your home.
                    </p>

                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" aria-label="Instagram">ig</a>
                        <a href="https://www.pinterest.com/" aria-label="Pinterest">p</a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Explore</h3>
                    <a>Shop all</a>
                    <a>New arrivals</a>
                    <a>Stories</a>
                    <a>Our story</a>
                </div>

                <div className="footer-column">
                    <h3>Help</h3>
                    <a>Contact</a>
                    <a>Shipping & returns</a>
                    <a>FAQs</a>
                    <a>Privacy policy</a>
                </div>

                <div className="footer-newsletter">
                    <h3>A little inspiration</h3>
                    <p>
                        Discover new objects and ideas
                        to make your space feel like home.
                    </p>

                    <form
                        className="newsletter-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            aria-label="La teva adreça electrònica"
                            required
                        />
                        <button type="submit" aria-label="Subscriure's">
                            →
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ShopyShop</p>
                <p>Made for everyday living <span>✳</span></p>
            </div>
        </footer>
    );
}

export default Footer;
