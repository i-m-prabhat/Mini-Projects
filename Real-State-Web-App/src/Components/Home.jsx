import React from "react";



export default function Home()
{
  return (
    <>
      <section className="main">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./Images/1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption my-auto d-flex align-items-center justify-content-center d-md-block">
                <h1 className="caption">Let Your Home Be Unique & Stylist</h1>
                <p className="main-p">Athe necessary regelialia. It is a paradisematic country, in which roasted parts of
                  sentences fly into your named Duden flows by their place and supplies it with the necessary regelialia.
                  It is a paradisematic mouth.</p>
                <button className="btn btn-primary btn-lg">Learn More <i className="fa-solid fa-arrow-right"></i></button>
                <button className="btn btn-success btn-lg">Residental<i className="fa-solid fa-arrow-right "></i></button>
              </div>
            </div>
            <div className="carousel-item ">
              <img src="./Images/3.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption  h-60 my-auto d-flex align-items-center justify-content-center d-md-block">
                <h1 className="caption">Modern House Make Better Life</h1>
                <p className="main-p">Athe necessary regelialia. It is a paradisematic country, in which roasted parts of
                  sentences fly into your named Duden flows by their place and supplies it with the necessary regelialia.
                  It is a paradisematic mouth.</p>
                <button className="btn btn-primary btn-lg">Read More <i className="fa-solid fa-arrow-right"></i></button>
                <button className="btn btn-success btn-lg">Flats for Rent<i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
            <div className="carousel-item ">
              <img src="./Images/2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption h-60 my-auto d-flex align-items-center justify-content-center d-md-block">
                <h1 className="caption">Your Property Is Our Priority</h1>
                <p className="main-p">Athe necessary regelialia. It is a paradisematic country, in which roasted parts of
                  sentences fly into your named Duden flows by their place and supplies it with the necessary regelialia.
                  It is a paradisematic mouth.</p>
                <button className="btn btn-primary btn-lg">Learn More <i className="fa-solid fa-arrow-right"></i></button>
                <button className="btn btn-success btn-lg">Flats for Sale<i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      {/* Search  */}
      <section id="buy" className="search d-flex align-items-center justify-content-center flex-column">
        <h1 className="title-curly py-5 my-3"><span className="text-primary">Buy & Rent</span> Properties</h1>
        <div className="main-div">
          <div className="div">
            <p>ENTER <span className="text-primary d-inline">KEY</span> WORD</p>
            <span><i className="fa-solid fa-magnifying-glass fs-5"></i><input type="text"
              placeholder="Enter a Keyword" /></span>

          </div>
          <div className="div">
            <p>PROP<span className="text-primary d-inline">ERTY</span> TYPE</p>
            <select>
              <option>Residental</option>
              <option>Commercial</option>
              <option>Land</option>
              <option>Industrial</option>
            </select>
          </div>
          <div className="div">
            <p>LOCATION</p>
            <span><i className="fa-solid fa-location-dot fs-4"></i><input type="text" placeholder="Search a Location" /></span>
          </div>
          <div className="div">
            <p>PR<span className="text-primary d-inline">ICE LI</span>MIT</p>
            <span>
              <select>
                <option>$100</option>
                <option>$100-$200</option>
                <option>$200-$500</option>
                <option>$500-$1000</option>
                <option>$1000-$2000</option>
                <option>$2000-$5000</option>
                <option>$5000-$10000</option>
                <option>$10000-$100000</option>
              </select>
            </span>
          </div>
          <div className="div">
            <button className="btn btn-success" type="button">Search</button>
          </div>
        </div>
      </section>


      {/* categories */}
      <section id="category" className="categories">
        <div className="container mx-auto text-center">
          <span className="title-curly"><span className="text-primary">P. P. LAND</span> CATEGORIES</span>
          <h1 className="mt-3 mb-5">Explore Our Categories & Places</h1>
          <div className="row my-5">
            <div
              className="column col-lg-3 col-md-6 col-sm-12 col-12 my-5 d-flex align-items-center justify-content-center flex-column">
              <i className="fa-solid fa-house-chimney fs-1"></i>
              <span className="fs-3 mt-4">LAND</span>
            </div>
            <div
              className="column col-lg-3 col-md-6 col-sm-12 col-12 my-5 d-flex align-items-center justify-content-center flex-column">
              <i className="fa-solid fa-landmark fs-1"></i>
              <span className="fs-3 mt-4">RESIDENTAL</span>
            </div>
            <div
              className="column col-lg-3 col-md-6 col-sm-12 col-12 my-5 d-flex align-items-center justify-content-center flex-column">
              <i className="fa-solid fa-building-wheat fs-1"></i>
              <span className="fs-3 mt-4">COMMERIAL</span>
            </div>
            <div
              className="column col-lg-3 col-md-6 col-sm-12 col-12 my-5 d-flex align-items-center justify-content-center flex-column">
              <i className="fa-sharp fa-solid fa-industry fs-1"></i>
              <span className="fs-3 mt-4">INDUSTRIAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* cities  */}
      <section id="city" className="cities">
        <div className="container cont-2">
          <div className="row sub my-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">New York</a>
              <a href="/" className=" text-primary s">200 Properties</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">California</a>
              <a href="/" className=" text-primary s">100 Properties</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">Florida</a>
              <a href="/" className=" text-primary s">422 Properties</a>
            </div>
          </div>
          <div className="row sub my-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">New York</a>
              <a href="/" className=" text-primary s">200 Properties</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">California</a>
              <a href="/" className=" text-primary s">100 Properties</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">Florida</a>
              <a href="/" className=" text-primary s">422 Properties</a>
            </div>
          </div>
          <div className="row sub my-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">New York</a>
              <a href="/" className=" text-primary s">200 Properties</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">California</a>
              <a href="/" className=" text-primary s">100 Properties</a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center flex-column justify-content-center">
              <a href="/" className="t">Florida</a>
              <a href="/" className=" text-primary s">422 Properties</a>
            </div>
          </div>

        </div>
      </section>


      {/* calculate  */}
      <section className=" calculate d-flex align-items-center justify-content-center pb-2">
        <div className="container">
          <div className="row">
            <div className=" col-lg-8 col-md-12 col-sm-12 col-12 text-start ps-5">
              <p className="fw-bold text-light">Cost for your home renovation project</p>
              <span className="fw-normal text-light">Get started today and complete our form to request your free
                estimate</span>
            </div>
            <div className=" col-lg-4 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-outline-light btn-lg px-4 py-2 ">FREE ESTIMATE</button>
            </div>
          </div>
        </div>
      </section>


      {/* feature */}
      <section id="feature" className="featured">
        <div className="container-fluid">
          <h1 className="text-center"><span className="text-primary">Featured </span>Properties</h1>
          <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
            <div className="row mt-lg-5 mt-md-2 mt-sm-2 mt-1">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="card mx-lg-2 mx-md-auto mx-sm-auto my-md-3 my-sm-3 my-3" style={{ width: "21rem" }}>
                  <img src="./Images/aditya-gupta-s2HQVGS6MFU-unsplash.jpg" className="card-img-top" alt="..." />
                  <div className="card-body px-4 pb-4">
                    <h2 className="fs-3 ">Sunny Loft Property</h2>
                    <div className="my-4">
                      <i className="fa-solid fa-location-dot text-primary me-2 fs-4"></i><span className="fw-normal city">New
                        York</span>
                      <span className="bg-primary text-light rounded update fs-5">Sale</span>
                    </div>
                    <div className="icons mt-3 mb-4">
                      <i className="fa-solid fa-bed fs-4 me-1"></i><span className="fs-5">3</span>
                      <i className="fa-solid fa-bath  fs-4 me-1 ms-4"></i><span className="fs-5">2</span>
                      <i className="fa-solid fa-building  fs-4 me-1 ms-4"></i><span className="fs-5">1,878 sqft</span>
                    </div>

                    <button type="button"
                      className="btn btn-outline-primary fs-5 d-flex align-items-center justify-content-center mx-auto  mb-2">View
                      Details</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="card mx-lg-2 mx-md-auto mx-sm-auto my-md-3 my-sm-3 my-3" style={{ width: "21rem" }}>
                  <img src="./Images/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg" className="card-img-top" alt="..." />
                  <div className="card-body px-4 pb-4">
                    <h2 className="fs-3 ">Rohanza Property</h2>
                    <div className="my-4">
                      <i className="fa-solid fa-location-dot text-primary me-2 fs-4"></i><span className="fw-normal city">New
                        York</span>
                      <span className="bg-warning text-light rounded update fs-5">Sale</span>
                    </div>
                    <div className="icons mt-3 mb-4">
                      <i className="fa-solid fa-bed fs-4 me-1"></i><span className="fs-5">4</span>
                      <i className="fa-solid fa-bath  fs-4 me-1 ms-4"></i><span className="fs-5">2</span>
                      <i className="fa-solid fa-building  fs-4 me-1 ms-4"></i><span className="fs-5">3,878 sqft</span>
                    </div>

                    <button type="button"
                      className="btn btn-outline-primary fs-5 d-flex align-items-center justify-content-center mx-auto mb-2">View
                      Details</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="card mx-lg-2 mx-md-auto mx-sm-auto my-md-3 my-sm-3 my-3" style={{ width: '21rem' }}>
                  <img src="./Images/pexels-expect-best-323780.jpg" className="card-img-top" alt="..." />
                  <div className="card-body px-4 pb-4">
                    <h2 className="fs-3 ">Harixens Property</h2>
                    <div className="my-4">
                      <i className="fa-solid fa-location-dot text-primary me-2 fs-4"></i><span
                        className="fw-normal city">Austria</span>
                      <span className="bg-danger text-light rounded update fs-5">Rent</span>
                    </div>
                    <div className="icons mt-3 mb-4">
                      <i className="fa-solid fa-bed fs-4 me-1"></i><span className="fs-5">2</span>
                      <i className="fa-solid fa-bath  fs-4 me-1 ms-4"></i><span className="fs-5">1</span>
                      <i className="fa-solid fa-building  fs-4 me-1 ms-4"></i><span className="fs-5">1,278 sqft</span>
                    </div>

                    <button type="button"
                      className="btn btn-outline-primary fs-5 d-flex align-items-center justify-content-center mx-auto  mb-2">View
                      Details</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="card mx-lg-2 mx-md-auto mx-sm-auto my-md-3 my-sm-3 my-3" style={{ width: "21rem" }}>
                  <img src="./Images/pexels-pixabay-280232.jpg" className="card-img-top" alt="..." />
                  <div className="card-body px-4 pb-4">
                    <h2 className="fs-3 ">Barbegy Property</h2>
                    <div className="my-4">
                      <i className="fa-solid fa-location-dot text-primary me-2 fs-4"></i><span
                        className="fw-normal city">Canada</span>
                      <span className="bg-success text-light rounded update fs-5">Sold</span>
                    </div>
                    <div className="icons mt-3 mb-4">
                      <i className="fa-solid fa-bed fs-4 me-1"></i><span className="fs-5">4</span>
                      <i className="fa-solid fa-bath  fs-4 me-1 ms-4"></i><span className="fs-5">3</span>
                      <i className="fa-solid fa-building  fs-4 me-1 ms-4"></i><span className="fs-5">4,678 sqft</span>
                    </div>

                    <button type="button"
                      className="btn btn-outline-primary fs-5 d-flex align-items-center justify-content-center mx-auto  mb-2">View
                      Details</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* banner  */}
      <section class="banner">
        <div class="container-fluid d-flex align-items-center justify-content-center flex-column text-light">
          <h1>Modern House Video</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, behind the word
            mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <a href="/"><i class="fa-solid fa-circle-play"></i></a>
        </div>
      </section>


{/* sale  */}
<br />
<br />

{/* subscribe */}
<section class="subscribe ps-0">
      <div class="cont d-flex align-items-center justify-content-center">
        <div class="subs-text d-flex align-items-start justify-content-center flex-column ">
          <h1>Subscribe<span class="text-primary">Newsletter</span> </h1>
          <p>Get started by choosing from one of our pre-built page templates toshowcase your properties</p>
          <input type="text" placeholder="Enter your Email"/>
          <button type="submit" class="btn btn-primary btn-lg mt-3">Subscribe</button>
        </div>
        <div class="subs-img">
          <h1 class="mt-4"><span class="text-primary">Popular</span> Plots</h1>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card" style={{width: "100%"}}>
                  <img src="./Images/2.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-primary fs-5">See The Plot</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card" style={{width: "100%"}}>
                  <img src="./Images/1.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-primary fs-5">See The Plot</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card" style={{width: "100%"}}>
                  <img src="./Images/3.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-primary fs-5">See The Plot</button>
                  </div>
                </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>





    </>
  );
}