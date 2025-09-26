import React from 'react';
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-section text-light pt-5 pb-4">
            <div className="container">
                <div className="row">

                    {/* About */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">About Ikroop Portal</h5>
                        <p className="text-light-50">
                            Connecting alumni worldwide to build careers, networks, and lifelong friendships.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">Connect With Us</h5>
                        <p className="text-light-50 mb-2">Email: info@alumniportal.com</p>
                        <p className="text-light-50 mb-3">Phone: +91 12345 67890</p>
                        <div className="d-flex gap-3 social-icons">
                            <a href="#" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" className="instagram"><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>


                </div>

                <hr className="border-light" />
                <div className="text-center mt-3">
                    <p className="mb-0 text-light-50">&copy; {new Date().getFullYear()} Ikroop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
