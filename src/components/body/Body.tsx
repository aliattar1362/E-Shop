import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { subscribeToNewsletter } from "../../reduxToolkit/slices/newsLetterSlice";
// Styles
import "../../styles/bodyStyles.css"

export const Body = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Dispatch the subscribeToNewsletter action with the entered email
    dispatch(subscribeToNewsletter(email));
  };

  return (
    <div>
        <section id="hero">
            <p className="h4-font">Trade-in-offer</p>
            <p className="h2-font">Super value deals</p >
            <p className="h1-font">On all products</p>
            <p>Save more with coupons & up to 60% off!</p>
            <button >   
                <Link to={"/products"} className="link-button">
                    Shop now
                </Link>
            </button>
        </section>

        <section id="newsLetter">
            <div className="newsText">
            <p className="h4-font">Sign up For Newsletters</p>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <div className="form">
            <input type="text" placeholder="Your email address" value={email}
            onChange={handleInputChange}/>
            <button onClick={handleSubscribe}>Sign Up</button>
            </div>
        </section>
    </div>
  )
}
