import React from "react";
import "./main.css";

function App() {
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
                <a href="contact.html">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>

          <div className="second">
            <p>
              Qis Saves Lifes <br />
              " EVERY DROP OF BLOOD IS <br />
              LIKE A BREATH FOR SOMEONE!"
            </p>

            <a href="registration.html">
              <button>Registration</button>
            </a>

            <a href="login.html">
              <button>Login</button>
            </a>

            <br />
            <br />

            <a href="req.html">
              <button>Request</button>
            </a>

            <a href="don.html">
              <button>Donate</button>
            </a>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="content">
          <div className="data">
            <p>
              <br />
              Welcome to JOIN-HANDS Website, we believe in the power of giving
              and saving lives. Our platform is dedicated to connecting
              individuals in need of blood with generous donors who are ready to
              make a difference. With a simple registration process, users can
              both receive and donate blood, ensuring that life-saving
              transfusions are readily available to those who need them most.
            </p>
          </div>

          <div className="img-blood">
            <img src="main_img.jpg" alt="blood" />
          </div>
        </div>
      </div>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please contact us at{" "}
          <a href="mailto:info@blooddonationwebsite.com">
            info@blooddonationwebsite.com
          </a>
          .
        </p>
      </section>

      <footer>
        <p>&copy; 2024 JOIN-HANDS Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
