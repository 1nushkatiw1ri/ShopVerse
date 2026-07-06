import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>ShopVerse</h2>
          <p>Your one-stop destination for premium electronics.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Products</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Email: anushkatiwari@shopverse.com</p>
          <p>Phone: +91 9856412305</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopVerse. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;