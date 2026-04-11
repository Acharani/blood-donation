import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="top">
        <div className="navbar">
          <div className="one">
            <div className="sub-nav">

              <div className="logo">
                <img src="" alt="logo" />
                <h1>JOIN-HANDS</h1>
              </div>

              <div className="blood-data">
                <div className="request">
                  <p>Request</p>
                  <h1>5</h1>
                </div>
                <div className="donor">
                  <p>Donor</p>
                  <h1>5</h1>
                </div>
              </div>

              <div className="contact">
                <Link to="/contact">
                  <button>Contact Us</button>
                </Link>
              </div>

            </div>
          </div>

          {/* Hero Section */}
          <div className="second">
            <p>
              Qis Saves Lifes <br />
              "EVERY DROP OF BLOOD IS <br />
              LIKE A BREATH FOR SOMEONE!"
            </p>

            <Link to="/register">
              <button>Registration</button>
            </Link>

            <Link to="/login">
              <button>Login</button>
            </Link>

            <br /><br />

            <Link to="/request">
              <button>Request</button>
            </Link>

            <Link to="/donate">
              <button>Donate</button>
            </Link>
          </div>

        </div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="content">

          <div className="data">
            <p>
              <br />
              Welcome to JOIN-HANDS Website, we believe in the power of giving
              and saving lives. Our platform connects people in need of blood
              with donors who are ready to help.
            </p>
          </div>

          <div className="img-blood">
            <img src="main_img.jpg" alt="blood" />
          </div>

        </div>
      </div>

      {/* Contact */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, contact us at{" "}
          <a href="mailto:info@blooddonationwebsite.com">
            info@blooddonationwebsite.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 JOIN-HANDS Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;