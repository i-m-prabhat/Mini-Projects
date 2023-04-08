import React, { Component } from "react";

export default class Footer extends Component{
    render(){
        return( 
            <footer>
      <div className="container-fuild p-lg-5 p-md-3 p-sm-3 p-3">
        <div className="row pt-lg-5 pt-md-3 pt-sm-3 pt-3 px-lg-5 px-md-3 px-sm-3 px-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h2 className="pb-3">P. P.<span className="text-primary">Real Estate</span></h2>
            <p className="pe-5 mb-4 ">Lorem ipsum dolor sit, lendus suscipit dicta et voluptatibus a tempora qui nisi est,
              harum alias magnam. Suscipit deleniti mollitia consequuntur ex id a!</p>
            <div>
              <i className="fa-brands fa-facebook fs-3 text-primary me-3"></i>
              <i className="fa-brands fa-square-instagram fs-3 text-primary me-3"></i>
              <i className="fa-brands fa-square-twitter fs-3 text-primary me-3"></i>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <h2 className="pb-3">Information</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Plots</a></li>
              <li><a href="#">Residental</a></li>
              <li><a href="#">Commercial</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h2 className="pb-3">Customer Support</h2>
            <ul>
              <li><a href="#">FAQS</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Buy a Plot</a></li>
              <li><a href="#">How to Find</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h2 className="pb-3">Have a Question?</h2>
            <div className="pb-3">
              <i className="fa-solid fa-location-dot pe-2 fs-4 text-primary"></i>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, commodi blanditiis sit sapiente rem
                quos.</span>
            </div>
            <div className="pb-3">
              <i className="fa-solid fa-phone pe-2 fs-4 text-primary"></i>
              <span>+91 9000000001</span>
            </div>
            <div className="pb-3">
              <i className="fa-solid fa-envelope pe-2 fs-4 text-primary"></i>
              <span>Example@gmail.com</span>
            </div>
          </div>

        </div>
        <p className="copy text-center py-3 my-5">Copyright&#169; All rights reserved | This Website is made by <span
            className="text-primary">Prabhat Patel</span></p>
      </div>
    </footer>
        )
    }
}