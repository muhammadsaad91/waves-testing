import React from "react";
import "./footer.css";

const App = () => {
    return (
        <>


<footer className="footer-distributed">

			<div className="footer-left">
				{/* <h3>About<span>SaAd</span></h3> */}

				<p className="footer-links">
					Home
					|
					What We Do
					|
					Who We Are
					|
					Contact
				</p>

				<p className="footer-company-name">© 2022 SaAd Pvt. Ltd.</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					  <p><span>,
						 Bldg. No. A - 1, Sector - 1</span>
						xyzxyz, USA - 400710</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 22-27******</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@eduonix.com">support@.com</a></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>About the company</span>
					We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
				<div className="footer-icons">
					<i className="fa-brands fa-facebook"></i>
					<i className="fa-brands fa-twitter"></i>
					<i className="fa-brands fa-instagram"></i>
					<i className="fa-brands fa-linkedin"></i>
					<i className="fa-brands fa-youtube"></i>
				</div>
			</div>
		</footer>



        </>
    );
}

export default App;