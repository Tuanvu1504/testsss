import React from "react";


const Header = () => {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block'
        id='templatemo_nav_top'>
        <div className='container text-light'>
          <div className='w-100 d-flex justify-content-between'>
            <div>
              <i className='fa fa-envelope mx-2'></i>
              <a
                className='navbar-sm-brand text-light text-decoration-none'
                href='mailto:info@company.com'>
                info@company.com
              </a>
              <i className='fa fa-phone mx-2'></i>
              <a
                className='navbar-sm-brand text-light text-decoration-none'
                href='tel:010-020-0340'>
                010-020-0340
              </a>
            </div>
            <div>
              <a
                className='text-light'
                href='https://fb.com/templatemo'
                target='_blank'
                rel='sponsored'>
                <i className='fab fa-facebook-f fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://www.instagram.com/'
                target='_blank'>
                <i className='fab fa-instagram fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://twitter.com/'
                target='_blank'>
                <i className='fab fa-twitter fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://www.linkedin.com/'
                target='_blank'>
                <i className='fab fa-linkedin fa-sm fa-fw'></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className='navbar navbar-expand-lg navbar-light shadow'>
        <div className='container d-flex justify-content-between align-items-center'>
          <a
            className='navbar-brand text-success logo h1 align-self-center'
            href='index.html'>
            Zay
          </a>

          <button
            className='navbar-toggler border-0'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#templatemo_main_nav'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between'
            id='templatemo_main_nav'>
            <div className='flex-fill'>
              <ul className='nav navbar-nav d-flex justify-content-between mx-lg-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='index.html'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='about.html'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='shop.html'>
                    Shop
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='contact.html'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className='navbar align-self-center d-flex'>
              <div className='d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='inputMobileSearch'
                    placeholder='Search ...'
                  />
                  <div className='input-group-text'>
                    <i className='fa fa-fw fa-search'></i>
                  </div>
                </div>
              </div>
              <a
                className='nav-icon d-none d-lg-inline'
                href='#'
                data-bs-toggle='modal'
                data-bs-target='#templatemo_search'>
                <i className='fa fa-fw fa-search text-dark mr-2'></i>
              </a>
              <a
                className='nav-icon position-relative text-decoration-none'
                href='#'>
                <i className='fa fa-fw fa-cart-arrow-down text-dark mr-1'></i>
                <span className='position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark'>
                  7
                </span>
              </a>
              <a
                className='nav-icon position-relative text-decoration-none'
                href='#'>
                <i className='fa fa-fw fa-user text-dark mr-3'></i>
                <span className='position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark'>
                  +99
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/banner_img_01.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-success"><b>Zay</b> eCommerce</h1>
                                <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                                <p>
                                    Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). 
                                    This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website. 
                                    Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                    <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                    <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/banner_img_02.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Proident occaecat</h1>
                                <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                <p>
                                    You are permitted to use this Zay CSS template for your commercial websites. 
                                    You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="./assets/img/banner_img_03.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Repr in voluptate</h1>
                                <h3 className="h2">Ullamco laboris nisi ut </h3>
                                <p>
                                    We bring you 100% free CSS templates for your websites. 
                                    If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
        </a>
    </div>
    </div>
  );
};

export default Header;
