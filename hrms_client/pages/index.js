import Head from "next/head";
import GlobalTopHeader from "../components/GlobalTopHeader";


export default function Home() {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="html 5 template" />
          <meta name="author" content="" />
          <title>Find Houses</title>
    </Head>
      {/* Wrapper */}
      <div id="wrapper">
        {/*🚩 START SECTION HEADINGS */}
        <GlobalTopHeader />
        {/* STAR HEADER GOOGLE MAP */}
        <div
          id="map-container"
          className="fullwidth-home-map header-map google-maps pull-top map-leaflet-wrapper"
        >
          <div id="map-leaflet" />
          <div id="hero-area" className="main-search-inner search-2">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-md-12">
                  {/* Search Form */}
                  <div className="col-12">
                    <div className="banner-search-wrap">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs_1">
                          <div className="rld-main-search">
                            <div className="row">
                              <div className="rld-single-input">
                                <input
                                  type="text"
                                  className="pt-0 pb-0"
                                  placeholder="Enter Keyword..."
                                />
                              </div>
                              <div className="rld-single-select ml-22">
                                <select className="select single-select">
                                  <option value={1}>Property Type</option>
                                  <option value={2}>Family House</option>
                                  <option value={3}>Apartment</option>
                                  <option value={3}>Condo</option>
                                </select>
                              </div>
                              <div className="rld-single-select">
                                <select className="select single-select mr-0">
                                  <option value={1}>Location</option>
                                  <option value={2}>Los Angeles</option>
                                  <option value={3}>Chicago</option>
                                  <option value={3}>Philadelphia</option>
                                  <option value={3}>San Francisco</option>
                                  <option value={3}>Miami</option>
                                  <option value={3}>Houston</option>
                                </select>
                              </div>
                              <div className="dropdown-filter">
                                <span>Advanced Search</span>
                              </div>
                              <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                                <a className="btn btn-yellow" href="#">
                                  Search Now
                                </a>
                              </div>
                              <div className="explore__form-checkbox-list full-filter">
                                <div className="row">
                                  <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                    {/* Form Property Status */}
                                    <div className="form-group categories">
                                      <div
                                        className="nice-select form-control wide"
                                        tabIndex={0}
                                      >
                                        <span className="current">
                                          <i className="fa fa-home" />
                                          Property Status
                                        </span>
                                        <ul className="list">
                                          <li
                                            data-value={1}
                                            className="option selected "
                                          >
                                            For Sale
                                          </li>
                                          <li data-value={2} className="option">
                                            For Rent
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/*/ End Form Property Status */}
                                  </div>
                                  <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                    {/* Form Bedrooms */}
                                    <div className="form-group beds">
                                      <div
                                        className="nice-select form-control wide"
                                        tabIndex={0}
                                      >
                                        <span className="current">
                                          <i
                                            className="fa fa-bed"
                                            aria-hidden="true"
                                          />{" "}
                                          Bedrooms
                                        </span>
                                        <ul className="list">
                                          <li
                                            data-value={1}
                                            className="option selected"
                                          >
                                            1
                                          </li>
                                          <li data-value={2} className="option">
                                            2
                                          </li>
                                          <li data-value={3} className="option">
                                            3
                                          </li>
                                          <li data-value={3} className="option">
                                            4
                                          </li>
                                          <li data-value={3} className="option">
                                            5
                                          </li>
                                          <li data-value={3} className="option">
                                            6
                                          </li>
                                          <li data-value={3} className="option">
                                            7
                                          </li>
                                          <li data-value={3} className="option">
                                            8
                                          </li>
                                          <li data-value={3} className="option">
                                            9
                                          </li>
                                          <li data-value={3} className="option">
                                            10
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/*/ End Form Bedrooms */}
                                  </div>
                                  <div className="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                                    {/* Form Bathrooms */}
                                    <div className="form-group bath">
                                      <div
                                        className="nice-select form-control wide"
                                        tabIndex={0}
                                      >
                                        <span className="current">
                                          <i
                                            className="fa fa-bath"
                                            aria-hidden="true"
                                          />{" "}
                                          Bathrooms
                                        </span>
                                        <ul className="list">
                                          <li
                                            data-value={1}
                                            className="option selected"
                                          >
                                            1
                                          </li>
                                          <li data-value={2} className="option">
                                            2
                                          </li>
                                          <li data-value={3} className="option">
                                            3
                                          </li>
                                          <li data-value={3} className="option">
                                            4
                                          </li>
                                          <li data-value={3} className="option">
                                            5
                                          </li>
                                          <li data-value={3} className="option">
                                            6
                                          </li>
                                          <li data-value={3} className="option">
                                            7
                                          </li>
                                          <li data-value={3} className="option">
                                            8
                                          </li>
                                          <li data-value={3} className="option">
                                            9
                                          </li>
                                          <li data-value={3} className="option">
                                            10
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {/*/ End Form Bathrooms */}
                                  </div>
                                  <div className="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld">
                                    {/* Price Fields */}
                                    <div className="main-search-field-2">
                                      {/* Area Range */}
                                      <div className="range-slider">
                                        <label>Area Size</label>
                                        <div
                                          id="area-range"
                                          data-min={0}
                                          data-max={1300}
                                          data-unit="sq ft"
                                        />
                                        <div className="clearfix" />
                                      </div>
                                      <br />
                                      {/* Price Range */}
                                      <div className="range-slider">
                                        <label>Price Range</label>
                                        <div
                                          id="price-range"
                                          data-min={0}
                                          data-max={600000}
                                          data-unit="$"
                                        />
                                        <div className="clearfix" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                    {/* Checkboxes */}
                                    <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                      <input
                                        id="check-2"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-2">
                                        Air Conditioning
                                      </label>
                                      <input
                                        id="check-3"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-3">
                                        Swimming Pool
                                      </label>
                                      <input
                                        id="check-4"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-4">
                                        Central Heating
                                      </label>
                                      <input
                                        id="check-5"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-5">
                                        Laundry Room
                                      </label>
                                      <input
                                        id="check-6"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-6">Gym</label>
                                      <input
                                        id="check-7"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-7">Alarm</label>
                                      <input
                                        id="check-8"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-8">
                                        Window Covering
                                      </label>
                                    </div>
                                    {/* Checkboxes / End */}
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                    {/* Checkboxes */}
                                    <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                      <input
                                        id="check-9"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-9">WiFi</label>
                                      <input
                                        id="check-10"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-10">TV Cable</label>
                                      <input
                                        id="check-11"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-11">Dryer</label>
                                      <input
                                        id="check-12"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-12">
                                        Microwave
                                      </label>
                                      <input
                                        id="check-13"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-13">Washer</label>
                                      <input
                                        id="check-14"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-14">
                                        Refrigerator
                                      </label>
                                      <input
                                        id="check-15"
                                        type="checkbox"
                                        name="check"
                                      />
                                      <label htmlFor="check-15">
                                        Outdoor Shower
                                      </label>
                                    </div>
                                    {/* Checkboxes / End */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ End Search Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END HEADER GOOGLE MAP */}

        {/* 🚩 START SECTION FEATURED PROPERTIES */}
        <section className="featured portfolio bg-white-2">
          <div className="container">
            <div className="sec-title">
              <h2>
                <span>Featured </span>Properties
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="row portfolio-items">
              <div className="item col-lg-4 col-md-6 col-xs-12 landscapes sale">
                <div
                  className="project-single"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt featured">
                          Featured
                        </div>
                        <div className="homes-tag button alt sale">
                          For Sale
                        </div>
                        <div className="homes-price">$9,000/mo</div>
                        <img
                          src="images/blog/b-11.jpg"
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a
                        href="single-property-2.html"
                        className="img-poppu btn"
                      >
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">
                        Real House Luxury Villa
                      </a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-bathtub mr-2"
                          aria-hidden="true"
                        />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-square mr-2"
                          aria-hidden="true"
                        />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="footer">
                      <a href="agent-details.html">
                        <img
                          src="images/testimonials/ts-1.jpg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        Lisa Jhonson
                      </a>
                      <span>2 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 col-xs-12 people rent">
                <div
                  className="project-single"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button sale rent">
                          For Rent
                        </div>
                        <div className="homes-price">$3,000/mo</div>
                        <img
                          src="images/blog/b-12.jpg"
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a
                        href="single-property-2.html"
                        className="img-poppu btn"
                      >
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">
                        Real House Luxury Villa
                      </a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-bathtub mr-2"
                          aria-hidden="true"
                        />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-square mr-2"
                          aria-hidden="true"
                        />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="footer">
                      <a href="agent-details.html">
                        <img
                          src="images/testimonials/ts-2.jpg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        Karl Smith
                      </a>
                      <span>2 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 col-xs-12 people landscapes sale">
                <div
                  className="project-single"
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt sale">
                          For Sale
                        </div>
                        <div className="homes-price">$9,000/mo</div>
                        <img
                          src="images/blog/b-1.jpg"
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a
                        href="single-property-2.html"
                        className="img-poppu btn"
                      >
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">
                        Real House Luxury Villa
                      </a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-bathtub mr-2"
                          aria-hidden="true"
                        />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-square mr-2"
                          aria-hidden="true"
                        />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="footer">
                      <a href="agent-details.html">
                        <img
                          src="images/testimonials/ts-3.jpg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        katy Teddy
                      </a>
                      <span>2 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 col-xs-12 people landscapes rent no-pb">
                <div
                  className="project-single no-mb"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt featured">
                          Featured
                        </div>
                        <div className="homes-tag button sale rent">
                          For Rent
                        </div>
                        <div className="homes-price">$3,000/mo</div>
                        <img
                          src="images/feature-properties/fp-10.jpg"
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a
                        href="single-property-2.html"
                        className="img-poppu btn"
                      >
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">
                        Real House Luxury Villa
                      </a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="properties-details.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-bathtub mr-2"
                          aria-hidden="true"
                        />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-square mr-2"
                          aria-hidden="true"
                        />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="footer">
                      <a href="agent-details.html">
                        <img
                          src="images/testimonials/ts-4.jpg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        Jhon Malon
                      </a>
                      <span>2 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 col-xs-12 people sale no-pb">
                <div
                  className="project-single no-mb"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt sale">
                          For Sale
                        </div>
                        <div className="homes-price">$9,000/mo</div>
                        <img
                          src="images/feature-properties/fp-11.jpg"
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a
                        href="single-property-2.html"
                        className="img-poppu btn"
                      >
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">
                        Real House Luxury Villa
                      </a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-bathtub mr-2"
                          aria-hidden="true"
                        />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-square mr-2"
                          aria-hidden="true"
                        />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="footer">
                      <a href="agent-details.html">
                        <img
                          src="images/testimonials/ts-5.jpg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        Susan Delman
                      </a>
                      <span>2 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 it2 col-xs-12 web rent no-pb">
                <div
                  className="project-single no-mb last"
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button sale rent">
                          For Rent
                        </div>
                        <div className="homes-price">$3,000/mo</div>
                        <img
                          src="images/feature-properties/fp-12.jpg"
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a
                        href="single-property-2.html"
                        className="img-poppu btn"
                      >
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">
                        Real House Luxury Villa
                      </a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-bathtub mr-2"
                          aria-hidden="true"
                        />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i
                          className="flaticon-square mr-2"
                          aria-hidden="true"
                        />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="footer">
                      <a href="agent-details.html">
                        <img
                          src="images/testimonials/ts-6.jpg"
                          alt=""
                          className="mr-2"
                        />{" "}
                        Chan Lee
                      </a>
                      <span>2 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-all">
              <a
                href="properties-full-grid-1.html"
                className="btn btn-outline-light"
              >
                View All
              </a>
            </div>
          </div>
        </section>
        {/* END SECTION FEATURED PROPERTIES */}
        {/* START SECTION WHY CHOOSE US */}
        <section className="how-it-works bg-white">
          <div className="container">
            <div className="sec-title">
              <h2>
                <span>Why </span>Choose Us
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="row service-1">
              <article
                className="col-lg-4 col-md-6 col-xs-12 serv"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="serv-flex">
                  <div className="art-1 img-13">
                    <img src="images/icons/icon-4.svg" alt="" />
                    <h3>Wide Renge Of Properties</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici
                      consectetur debits adipisicing lacus consectetur Business
                      Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 col-xs-12 serv"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div className="serv-flex">
                  <div className="art-1 img-14">
                    <img src="images/icons/icon-5.svg" alt="" />
                    <h3>Trusted by thousands</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici
                      consectetur debits adipisicing lacus consectetur Business
                      Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 col-xs-12 serv mb-0 pt"
                data-aos="fade-up"
                data-aos-delay={350}
              >
                <div className="serv-flex arrow">
                  <div className="art-1 img-15">
                    <img src="images/icons/icon-6.svg" alt="" />
                    <h3>Financing made easy</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici
                      consectetur debits adipisicing lacus consectetur Business
                      Directory.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* END SECTION WHY CHOOSE US */}
        {/* START SECTION POPULAR PLACES */}
        <section className="feature-categories bg-white-2">
          <div className="container">
            <div className="sec-title">
              <h2>
                <span>Popular </span>Places
              </h2>
              <p>Properties In Most Popular Places.</p>
            </div>
            <div className="row">
              {/* Single category */}
              <div
                className="col-xl-4 col-lg-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-1">
                    <a href="properties-map.html">
                      <img src="images/popular-places/12.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-map.html">New York</a>
                    </h4>
                    <span>203 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div
                className="col-xl-4 col-lg-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={250}
              >
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-2">
                    <a href="properties-map.html">
                      <img src="images/popular-places/13.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-map.html">Los Angeles</a>
                    </h4>
                    <span>307 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div
                className="col-xl-4 col-lg-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={350}
              >
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-3">
                    <a href="properties-map.html">
                      <img src="images/popular-places/14.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-map.html">San Francisco</a>
                    </h4>
                    <span>409 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div
                className="col-xl-4 col-lg-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                <div className="small-category-2 mob-mt pc-mb">
                  <div className="small-category-2-thumb img-8">
                    <a href="properties-map.html">
                      <img src="images/popular-places/15.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-map.html">Miami</a>
                    </h4>
                    <span>145 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div
                className="col-xl-4 col-lg-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={250}
              >
                <div className="small-category-2 pc-mb">
                  <div className="small-category-2-thumb img-10">
                    <a href="properties-map.html">
                      <img src="images/popular-places/10.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-map.html">Chicago</a>
                    </h4>
                    <span>112 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div
                className="col-xl-4 col-lg-6 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={350}
              >
                <div className="small-category-2 no-mb si-mt">
                  <div className="small-category-2-thumb img-11">
                    <a href="properties-map.html">
                      <img src="images/popular-places/5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-map.html">Houston</a>
                    </h4>
                    <span>254 Properties</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
        </section>
        {/* END SECTION POPULAR PLACES */}
        {/* START SECTION RECENTLY PROPERTIES */}
        <section className="featured portfolio rec-pro disc">
          <div className="container-fluid">
            <div className="sec-title discover">
              <h2>
                <span>Discover </span>Popular Properties
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="portfolio col-xl-12">
              <div className="slick-lancers">
                <div
                  className="agents-grid"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  <div className="landscapes">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button alt featured">
                              Featured
                            </div>
                            <div className="homes-tag button alt sale">
                              For Sale
                            </div>
                            <div className="homes-price">$9,000/mo</div>
                            <img
                              src="images/blog/b-11.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="agents-grid"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <div className="people">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button sale rent">
                              For Rent
                            </div>
                            <div className="homes-price">$3,000/mo</div>
                            <img
                              src="images/blog/b-12.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="agents-grid"
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  <div className="people landscapes no-pb pbp-3">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button alt sale">
                              For Sale
                            </div>
                            <div className="homes-price">$9,000/mo</div>
                            <img
                              src="images/blog/b-1.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="agents-grid"
                  data-aos="fade-up"
                  data-aos-delay={450}
                >
                  <div className="landscapes">
                    <div className="project-single no-mb">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button alt featured">
                              Featured
                            </div>
                            <div className="homes-tag button sale rent">
                              For Rent
                            </div>
                            <div className="homes-price">$3,000/mo</div>
                            <img
                              src="images/feature-properties/fp-10.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="properties-details.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agents-grid">
                  <div className="people">
                    <div className="project-single no-mb">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button alt sale">
                              For Sale
                            </div>
                            <div className="homes-price">$9,000/mo</div>
                            <img
                              src="images/feature-properties/fp-11.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agents-grid">
                  <div className="people landscapes no-pb pbp-3">
                    <div className="project-single no-mb last">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button sale rent">
                              For Rent
                            </div>
                            <div className="homes-price">$3,000/mo</div>
                            <img
                              src="images/feature-properties/fp-12.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agents-grid">
                  <div className="landscapes">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button alt featured">
                              Featured
                            </div>
                            <div className="homes-tag button alt sale">
                              For Sale
                            </div>
                            <div className="homes-price">$9,000/mo</div>
                            <img
                              src="images/blog/b-11.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agents-grid">
                  <div className="people">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a
                            href="single-property-1.html"
                            className="homes-img"
                          >
                            <div className="homes-tag button sale rent">
                              For Rent
                            </div>
                            <div className="homes-price">$3,000/mo</div>
                            <img
                              src="images/blog/b-12.jpg"
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a
                            href="single-property-2.html"
                            className="img-poppu btn"
                          >
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">
                            Real House Luxury Villa
                          </a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-0">
                          <li className="the-icons">
                            <i
                              className="flaticon-bed mr-2"
                              aria-hidden="true"
                            />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-bathtub mr-2"
                              aria-hidden="true"
                            />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-square mr-2"
                              aria-hidden="true"
                            />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i
                              className="flaticon-car mr-2"
                              aria-hidden="true"
                            />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION RECENTLY PROPERTIES */}
        {/* START SECTION BLOG */}
        <section className="blog-section bg-white-2">
          <div className="container">
            <div className="sec-title">
              <h2>
                <span>Articles &amp; </span>Tips
              </h2>
              <p>Read the latest news from our blog.</p>
            </div>
            <div className="news-wrap">
              <div className="row">
                <div className="col-xl-4 col-md-6 col-xs-12">
                  <div
                    className="news-item"
                    data-aos="fade-up"
                    data-aos-delay={150}
                  >
                    <a href="blog-details.html" className="news-img-link">
                      <div className="news-item-img">
                        <img
                          className="img-responsive"
                          src="images/blog/b-1.jpg"
                          alt="blog image"
                        />
                      </div>
                    </a>
                    <div className="news-item-text">
                      <a href="blog-details.html">
                        <h3>Explore The World</h3>
                      </a>
                      <div className="dates">
                        <span className="date">April 11, 2020 &nbsp;/</span>
                        <ul className="action-list pl-0">
                          <li className="action-item pl-2">
                            <i className="fa fa-heart" /> <span>306</span>
                          </li>
                          <li className="action-item">
                            <i className="fa fa-comment" /> <span>34</span>
                          </li>
                          <li className="action-item">
                            <i className="fa fa-share-alt" /> <span>122</span>
                          </li>
                        </ul>
                      </div>
                      <div className="news-item-descr big-news">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua ipsum dolor sit amet, consectetur.
                        </p>
                      </div>
                      <div className="news-item-bottom">
                        <a href="blog-details.html" className="news-link">
                          Read more...
                        </a>
                        <div className="admin">
                          <p>By, Karl Smith</p>
                          <img src="images/testimonials/ts-6.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-xs-12">
                  <div
                    className="news-item"
                    data-aos="fade-up"
                    data-aos-delay={250}
                  >
                    <a href="blog-details.html" className="news-img-link">
                      <div className="news-item-img">
                        <img
                          className="img-responsive"
                          src="images/blog/b-2.jpg"
                          alt="blog image"
                        />
                      </div>
                    </a>
                    <div className="news-item-text">
                      <a href="blog-details.html">
                        <h3>Find Good Places</h3>
                      </a>
                      <div className="dates">
                        <span className="date">May 20, 2020 &nbsp;/</span>
                        <ul className="action-list pl-0">
                          <li className="action-item pl-2">
                            <i className="fa fa-heart" /> <span>306</span>
                          </li>
                          <li className="action-item">
                            <i className="fa fa-comment" /> <span>34</span>
                          </li>
                          <li className="action-item">
                            <i className="fa fa-share-alt" /> <span>122</span>
                          </li>
                        </ul>
                      </div>
                      <div className="news-item-descr big-news">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua ipsum dolor sit amet, consectetur.
                        </p>
                      </div>
                      <div className="news-item-bottom">
                        <a href="blog-details.html" className="news-link">
                          Read more...
                        </a>
                        <div className="admin">
                          <p>By, Lis Jhonson</p>
                          <img src="images/testimonials/ts-5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-xs-12">
                  <div
                    className="news-item no-mb"
                    data-aos="fade-up"
                    data-aos-delay={350}
                  >
                    <a href="blog-details.html" className="news-img-link">
                      <div className="news-item-img">
                        <img
                          className="img-responsive"
                          src="images/blog/b-3.jpg"
                          alt="blog image"
                        />
                      </div>
                    </a>
                    <div className="news-item-text">
                      <a href="blog-details.html">
                        <h3>All Places In Town</h3>
                      </a>
                      <div className="dates">
                        <span className="date">Jun 30, 2020 &nbsp;/</span>
                        <ul className="action-list pl-0">
                          <li className="action-item pl-2">
                            <i className="fa fa-heart" /> <span>306</span>
                          </li>
                          <li className="action-item">
                            <i className="fa fa-comment" /> <span>34</span>
                          </li>
                          <li className="action-item">
                            <i className="fa fa-share-alt" /> <span>122</span>
                          </li>
                        </ul>
                      </div>
                      <div className="news-item-descr big-news">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua ipsum dolor sit amet, consectetur.
                        </p>
                      </div>
                      <div className="news-item-bottom">
                        <a href="blog-details.html" className="news-link">
                          Read more...
                        </a>
                        <div className="admin">
                          <p>By, Ted Willians</p>
                          <img src="images/testimonials/ts-4.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION BLOG */}
        {/* STAR SECTION PARTNERS */}
        <div className="partners bg-white">
          <div className="container">
            <div className="sec-title">
              <h2>
                <span>Our </span>Partners
              </h2>
              <p>The Companies That Represent Us.</p>
            </div>
            <div className="owl-carousel style2">
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/11.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/12.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/13.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/14.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/15.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/16.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/17.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/11.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/12.jpg" alt="" />
              </div>
              <div className="owl-item" data-aos="fade-up">
                <img src="images/partners/13.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* END SECTION PARTNERS */}
        {/* START FOOTER */}
        <footer className="first-footer">
          <div className="top-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="netabout">
                    <a href="index.html" className="logo">
                      <img src="images/logo-footer.svg" alt="netcom" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cum incidunt architecto soluta laboriosam, perspiciatis,
                      aspernatur officiis esse.
                    </p>
                  </div>
                  <div className="contactus">
                    <ul>
                      <li>
                        <div className="info">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          <p className="in-p">95 South Park Avenue, USA</p>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <i className="fa fa-phone" aria-hidden="true" />
                          <p className="in-p">+456 875 369 208</p>
                        </div>
                      </li>
                      <li>
                        <div className="info">
                          <i className="fa fa-envelope" aria-hidden="true" />
                          <p className="in-p ti">support@findhouses.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="navigation">
                    <h3>Navigation</h3>
                    <div className="nav-footer">
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="properties-right-sidebar.html">
                            Properties Right
                          </a>
                        </li>
                        <li>
                          <a href="properties-full-list.html">
                            Properties List
                          </a>
                        </li>
                        <li>
                          <a href="properties-details.html">Property Details</a>
                        </li>
                        <li className="no-mgb">
                          <a href="agents-listing-grid.html">Agents Listing</a>
                        </li>
                      </ul>
                      <ul className="nav-right">
                        <li>
                          <a href="agent-details.html">Agents Details</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog Default</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li className="no-mgb">
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="widget">
                    <h3>Twitter Feeds</h3>
                    <div className="twitter-widget contuct">
                      <div className="twitter-area">
                        <div className="single-item">
                          <div className="icon-holder">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </div>
                          <div className="text">
                            <h5>
                              <a href="#">@findhouses</a> all share them with me
                              baby said inspet.
                            </h5>
                            <h4>about 5 days ago</h4>
                          </div>
                        </div>
                        <div className="single-item">
                          <div className="icon-holder">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </div>
                          <div className="text">
                            <h5>
                              <a href="#">@findhouses</a> all share them with me
                              baby said inspet.
                            </h5>
                            <h4>about 5 days ago</h4>
                          </div>
                        </div>
                        <div className="single-item">
                          <div className="icon-holder">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </div>
                          <div className="text">
                            <h5>
                              <a href="#">@findhouses</a> all share them with me
                              baby said inspet.
                            </h5>
                            <h4>about 5 days ago</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="newsletters">
                    <h3>Newsletters</h3>
                    <p>
                      Sign Up for Our Newsletter to get Latest Updates and
                      Offers. Subscribe to receive news in your inbox.
                    </p>
                  </div>
                  <form
                    className="bloq-email mailchimp form-inline"
                    method="post"
                  >
                    <label htmlFor="subscribeEmail" className="error" />
                    <div className="email">
                      <input
                        type="email"
                        id="subscribeEmail"
                        name="EMAIL"
                        placeholder="Enter Your Email"
                      />
                      <input type="submit" defaultValue="Subscribe" />
                      <p className="subscription-success" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="second-footer">
            <div className="container">
              <p>2021 © Copyright - All Rights Reserved.</p>
              <ul className="netsocials">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <a data-scroll="" href="#wrapper" className="go-up">
          <i className="fa fa-angle-double-up" aria-hidden="true" />
        </a>
        {/* END FOOTER */}
        {/*register form */}
        <div className="login-and-register-form modal">
          <div className="main-overlay" />
          <div className="main-register-holder">
            <div className="main-register fl-wrap">
              <div className="close-reg">
                <i className="fa fa-times" />
              </div>
              <h3>
                Welcome to{" "}
                <span>
                  Find<strong>Houses</strong>
                </span>
              </h3>
              <div className="soc-log fl-wrap">
                <p>Login</p>
                <a href="#" className="facebook-log">
                  <i className="fa fa-facebook-official" />
                  Log in with Facebook
                </a>
                <a href="#" className="twitter-log">
                  <i className="fa fa-twitter" /> Log in with Twitter
                </a>
              </div>
              <div className="log-separator fl-wrap">
                <span>Or</span>
              </div>
              <div id="tabs-container">
                <ul className="tabs-menu">
                  <li className="current">
                    <a href="#tab-1">Login</a>
                  </li>
                  <li>
                    <a href="#tab-2">Register</a>
                  </li>
                </ul>
                <div className="tab">
                  <div id="tab-1" className="tab-contents">
                    <div className="custom-form">
                      <form method="post" name="registerform">
                        <label>Username or Email Address * </label>
                        <input
                          name="email"
                          type="text"
                          // onclick="this.select()"
                          defaultValue=""
                        />
                        <label>Password * </label>
                        <input
                          name="password"
                          type="password"
                          // onclick="this.select()"
                          defaultValue=""
                        />
                        <button type="submit" className="log-submit-btn">
                          <span>Log In</span>
                        </button>
                        <div className="clearfix" />
                        <div className="filter-tags">
                          <input id="check-a" type="checkbox" name="check" />
                          <label htmlFor="check-a">Remember me</label>
                        </div>
                      </form>
                      <div className="lost_password">
                        <a href="#">Lost Your Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="tab">
                    <div id="tab-2" className="tab-contents">
                      <div className="custom-form">
                        <form
                          method="post"
                          name="registerform"
                          className="main-register-form"
                          id="main-register-form2"
                        >
                          <label>First Name * </label>
                          <input
                            name="name"
                            type="text"
                            // onclick="this.select()"
                            defaultValue=""
                          />
                          <label>Second Name *</label>
                          <input
                            name="name2"
                            type="text"
                            // onclick="this.select()"
                            defaultValue=""
                          />
                          <label>Email Address *</label>
                          <input
                            name="email"
                            type="text"
                            // onclick="this.select()"
                            defaultValue=""
                          />
                          <label>Password *</label>
                          <input
                            name="password"
                            type="password"
                            // onclick="this.select()"
                            defaultValue=""
                          />
                          <button type="submit" className="log-submit-btn">
                            <span>Register</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*register form end */}
        {/* START PRELOADER */}
        <div id="preloader">
          <div id="status">
            <div className="status-mes" />
          </div>
        </div>
        {/* END PRELOADER */}
      </div>
      {/* Wrapper / End */}
    </>
  );
}
