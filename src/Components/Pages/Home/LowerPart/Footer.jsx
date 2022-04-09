import React from 'react'
import './style.css'
import './Footer.css'
import logo from './assets/white_practo_logo.svg'

export const Footer = () => {
    return (
        <div className="container-fluid background-blue color-white">
        <footer className="py-5 font px14 line-height20">
            <div className="row justify-content-md-center">
                <div className="col-sm-auto ml-3 mr-3">
                    <p className="fw700">Practo</p>
                    <ul className="nav flex-column fw400 line-height20">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">About</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Blog</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Careers</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Press</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col-sm-auto ml-3 mr-3">
                    <p className="fw700">For patients</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Features</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Pricing</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">FAQs</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">About</a></li>
                    </ul>
                </div>

                <div className="col-sm-auto ml-3 mr-3">
                    <p className="fw700">For doctors</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>
                    </ul>
                    <p className="fw700 mt-3">For clinics</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Features</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Pricing</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">FAQs</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">About</a></li>
                    </ul>
                </div>
                <div className="col-sm-auto ml-3 mr-3">
                    <p className="fw700">For hospitals</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Features</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Pricing</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">FAQs</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">About</a></li>
                    </ul>
                    <p className="fw700 mt-3">For Corporates</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>

                    </ul>
                </div>

                <div className="col-sm-auto ml-3 mr-3">
                    <p className="fw700">More</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Features</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Pricing</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">FAQs</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">About</a></li>
                    </ul>
                </div>

                <div className="col-sm-auto ml-3 mr-3">
                    <p className="fw700">Social</p>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Home</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Features</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">Pricing</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">FAQs</a></li>
                        <li className="nav-item mb-2 px14"><a href="#" className="color-white">About</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="row justify-content-md-center">
            <div className="col-sm-auto mt-3 mb-5">
                <div><img src={logo} alt="Practo"/>
                </div>
            </div>
        </div>
        
        <div className="row justify-content-md-center ">
            <div className="col-sm-auto mt-3 mb-5">
                <p className="color-white fw400 copyright">© 2020 Practo. All rights reserved.</p>
            </div>
        </div>
    </div>
    )
}