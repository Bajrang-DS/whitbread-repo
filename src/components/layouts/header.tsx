import * as React from "react";
// import Cta from "./cta";
// import logo from "../../images/logo copy.png";
import "../../index.css";
type props = {
  prop: any;
};
const Header = (HeaderItem: any) => {
  const { c_logo, c_headerlink, c_uppersection } = HeaderItem;

  return (
    <>
      <div id="topbar">
        <div className="wrap">
          <a
            className="sp-chart-link"
            href="#"
          >
            <span style={{ color: "white" }} className="screen-reader-text">view share price</span>
          </a>

          <ul id="menu-top-bar-menu" className="menu">
            {HeaderItem._site?.c_uppersection?.map((item: any, index: number) => (
              <li
                key={index}
                id="menu-item-55"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-55"
              >
                <a href="#"><span style={{ color: "white" }}>{item.label}</span></a>

              </li>
            ))}
          </ul>

        </div>
      </div>
      <header className="header sticky nav-down" id="top">
        <div className="wrap">
          <div id="branding">


            <a href="#" className="custom-logo-link" >
              <img style={{ marginTop: "-70px", marginBottom: "0px" }} src={HeaderItem?._site?.c_logo?.url} alt="logo" />

            </a>
          </div>
          <div id="nav-expander" className="nav-expander" style={{ cursor: "pointer" }}>
            <span className="burger-icon">
            </span>
          </div>
          <nav style={{ height: "50px" }} className="sitenav">
            <ul className="menu">
              {HeaderItem._site?.c_headerlink?.map((item: any, index: number) => (
                <li className="menu-item-34">
                  <a href="https://www.whitbread.co.uk/about-us/">
                    {item.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: "-20px" }}> <a style={{ height: "20px" }} href="javascript:;"><svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="20"><path d="M2 7a4.951 4.951 0 015-5 4.951 4.951 0 015 5 4.951 4.951 0 01-5 5 4.951 4.951 0 01-5-5zm12.3 8.7a.99.99 0 001.4-1.4l-3.1-3.1A6.847 6.847 0 0014 7a6.957 6.957 0 00-7-7 6.957 6.957 0 00-7 7 6.957 6.957 0 007 7 6.847 6.847 0 004.2-1.4z" fill="blue"></path></svg></a>
                {/* <div className="sub-menu" id="sp-search">
                  <ul className="wrap sub-mega-menu">
                    <li>
                      <h5 style={{ color: "#002d72" }}>Search</h5>
                      <form role="search" method="get" className="search-form" action="#">
                        <label htmlFor="search-form-1" className="screen-reader-text">Search for:</label>
                        <input type="search" id="search-form-1" className="search-field" placeholder="Enter keywords" value="" name="text" />
                        <input type="submit" className="search-submit" value="Go" />
                      </form>
                    </li>
                  </ul>
                </div> */}
              </li>
            </ul>
          </nav>


        </div>
      </header>


    </>
  );
};

export default Header;