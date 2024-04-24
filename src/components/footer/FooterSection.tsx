
import "../../styles/styles.css"
import { Link } from 'react-router-dom';


const navStyles = {
    color: "inherit",
    textDecoration: "none",
    variant: "h6",
    "&:hover": { color: "darkGrey" },
    "&.active": { color: "text.secondary" }
};

interface Props {
    darkMode: boolean;
}

export const FooterSection = ({ darkMode }: Props) => {
   const footerStyles = {
        backgroundColor: darkMode ? "#121212" : "#1976d2",
        color: "white"
        
    };

  return (
    <footer style={footerStyles}>
      <div className="col" id="contact-follow" >
        <img className="logo" src="/img/shopify-store.png" alt="Logo of the website" />
        <p className="h4-font">Contact</p>
        <p><strong>Address:</strong> Opiskelijankatu 4, Tampere, Finland</p>
        <p><strong>Phone:</strong> +358 40 1001 345</p>
        <p><strong>Hours:</strong> 9:00 - 18:00, Mon - Fri / 11:00 - 18:00, Sat - Sun</p>


          
          <div className="follow" >
          <p className="h4-font">Follow us</p>
          <div className="icon" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={navStyles}>
            <i className="fab fa-facebook-f" style={navStyles}></i>
          </Link >

          <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={navStyles}>
            <i className="fab fa-twitter" style={navStyles}></i>
          </Link>

          <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={navStyles}>
            <i className="fab fa-instagram" style={navStyles}></i>
          </Link>

          <Link to="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" style={navStyles}>
            <i className="fab fa-pinterest-p" style={navStyles}></i>
          </Link>

          <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={navStyles}>
            <i className="fab fa-youtube" style={navStyles}></i>
          </Link>
          </div>
        </div>
      </div>

      <div className="col" >
        <p className="h4-font">About</p>
        <Link to="/cart" style={navStyles}>
            About Us
        </Link>
        <Link to="/cart" style={navStyles}>
            Delivery Information
        </Link>
         <Link to="/cart" style={navStyles}>
            Privacy Policy
        </Link>
        <Link to="/cart" style={navStyles}>
           Terms & Conditions
        </Link>
        <Link to="/cart" style={navStyles}>
           Contact Us
        </Link>
      </div>

      <div className="col">
        <p className="h4-font">My Account</p>
         <Link to="/cart" style={navStyles}>
            View Cart
        </Link>
        <Link to="/cart" style={navStyles}>
            My Wish List
        </Link>
         <Link to="/cart" style={navStyles}>
            Track My Order
        </Link>
        <Link to="/cart" style={navStyles}>
            Help
        </Link>
      </div>

      <div className="col install">
        <p className="h4-font">Install App</p>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="/img/badge2.jpg" alt="App store and Google play badges" className="badges" />
        </div>
        <p>Secured Payments Gateways</p>
        <div>
          <img src="/img/securedPayments.jpg" alt="Logo of famous payments companies" className="secured-payments" />
        </div>
      </div>

      <div className="copy-right">
        <p>&copy; 2024, Integrify.io - HTML CSS Ecommerce Template</p>
      </div>
    </footer>
  );
};
