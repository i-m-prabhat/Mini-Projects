import React from "react";


export default function Header(){
    return (
        <div>
            <p>
                <a href="javascript:route('#home')">Home</a>
                <a href="javascript:route('#contact')"> | Contact</a>
                {/* <a href="javascript:route('#gallery')"> | Gallery</a> */}
                <a href="javascript:route('#abc')"> | abc</a>
            </p>
            <header>
      <nav className="navbar navbar-expand-lg navbar-light  py-2 px-lg-5 px-md-2 px-sm-2 px-2 fixed-top">
        <div className="container-fluid py-1 px-lg-5 px-md-2 px-sm-2 px-2">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <a className="navbar-brand fs-2" href="javascript:route('#home')">P. P.</a>
            <span className="logo"><span className="text-primary fw-bold">REAL ESTATE</span> AGENCY</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link active " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#category">About</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#feature">Propertes</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#city">Agents</a>
              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Property
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#buy">Buy Property</a></li>
                  <li><a className="dropdown-item" href="#feature">Sell Property</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Best Properties</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">For Rent</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">For Sale</a>
                  </li>

                </ul>
              </li>
            </ul>
            <form className="d-flex ps-3">
              
                <a href="javascript:route('#')"><button className="btn btn-outline-primary px-4 py-2 fs-5 fw-normal  mx-auto my-lg-0 my-md-2 my-sm-2 my-2"
                type="button">Contact Us</button></a>
                
            </form>
          </div>
        </div>
      </nav>
    </header>
        </div>

    )
}