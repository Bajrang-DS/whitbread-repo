import * as React from "react";
import "../../index.css";
type props = {
  prop: any;
  id: any;
};
const Header = (HeaderItem: any) => {
  const { c_logo, c_headerlink, c_uppersection, id, c_grid1, c_grid2, c_grid3 } = HeaderItem;

  const myFunction = (x: any) => {               // function to hide and show search section after click on search icon on header
    x = document.getElementById("bg-search");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
    }
  }

  //   const searchFunction = (res:any|string)=>{
  // if ("text"== res.id){
  //   return res.di;
  // }else{
  //   return 0;
  // }

  //   }


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
                <a href="#" className="no-underline hover:underline text-white hover:text-[#ffa400]"><span>{item.label}</span></a>
              </li>
            ))}
            <li id="menu-item-55"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-55">
              <a className="no-underline hover:underline  text-white hover:text-[#ffa400]" href="/index.html">Find Store</a>
            </li>
          </ul>
        </div>
      </div>
      <header className="header sticky nav-down" id="top">
        <div className="wrap">
          <div id="branding">

            <a href="#" className="custom-logo-link" >
              <img src={HeaderItem?._site?.c_logo?.url} alt="logo" />
            </a>
          </div>
          <div id="nav-expander" className="nav-expander" style={{ cursor: "pointer" }}>
            <span className="burger-icon">
            </span>
          </div>
          <nav className="sitenav">
            <ul className="menu">
              {HeaderItem._site?.c_headerlink?.map((item: any, index: number) => (
                <li className="menu-item-34" key={index}>
                  <a href="#">
                    {item.label}

                  </a>
                  {/* from here to line no. 143- for sub menu section after hover on header menu */}
                  {index <= 3 ? (
                    <>
                      <div className="sub-menu">
                        <ul id="mega-menu-34" className="wrap sub-mega-menu">
                          {HeaderItem._site?.c_grid1?.map((item: any, indexes: number) => (
                            <>
                              {index == indexes ? (
                                <>
                                  <li id="text-4" className="widget widget_text" key={indexes}>

                                    <div className="textwidget">

                                      <a className="button hover:underline" href="#">{item.cta1.label}</a><br />
                                      <p>
                                        {item.text}
                                      </p>
                                      <a className="button hover:underline" href="#">{item?.cta2?.label}</a>
                                    </div>
                                  </li>
                                </>
                              ) : (
                                " "
                              )}
                            </>
                          ))}
                          <li id="nav_menu-13" className="widget widget_nav_menu">
                            <div className="menu-mm-about-submenu-left-container">
                              <ul id="menu-mm-about-submenu-left" className="menu">
                                {HeaderItem._site?.c_grid2?.map((item: any, indexes: number) => (
                                  <>
                                    {index == indexes ? (
                                      <>
                                        <li id="menu-item-3954" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3954">
                                          {item.cta?.map((data: any) => (
                                            <p>  <a className=" hover:underline" href="#">{data.label}</a></p>
                                          ))}
                                        </li><br />
                                      </>
                                    ) : (
                                      " "
                                    )}
                                  </>
                                ))}
                              </ul>
                            </div>
                          </li>
                          <li id="nav_menu-14" className="widget widget_nav_menu">
                            <div className="menu-mm-about-submenu-right-container">
                              <ul id="menu-mm-about-submenu-right" className="menu">
                                {HeaderItem._site?.c_grid3?.map((item: any, indexes: number) => (
                                  <>
                                    {index == indexes ? (
                                      <>
                                        <li id="menu-item-3958" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3958">
                                          {item.cta?.map((data: any) => (
                                            <p> <a className={index == 2 ? "third-button" : "hover:underline"} href="#">{data.label}</a></p>
                                          ))}
                                        </li><br />
                                      </>
                                    ) : (
                                      " "
                                    )}
                                  </>
                                ))}
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </>

                  ) : (
                    <> </>
                  )}
                </li>
              ))}

              {/* using myFunction here */}
              <li className="menu-item-34" > <a onClick={myFunction} href="javascript:;">
                <svg
                  style={{
                    paddingTop: "8px",
                    height: "29px"
                  }} role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="20"><path d="M2 7a4.951 4.951 0 015-5 4.951 4.951 0 015 5 4.951 4.951 0 01-5 5 4.951 4.951 0 01-5-5zm12.3 8.7a.99.99 0 001.4-1.4l-3.1-3.1A6.847 6.847 0 0014 7a6.957 6.957 0 00-7-7 6.957 6.957 0 00-7 7 6.957 6.957 0 007 7 6.847 6.847 0 004.2-1.4z" fill="blue"></path></svg></a>
                <div className="search-menu" id="bg-search" >
                  <ul className="wrap sub-mega-menu">
                    <li>
                      <h5 style={{ color: "#002d72" }}>Search</h5>
                      <form role="search" method="get" className="search-form" action="#">
                        <label htmlFor="search-form-1" className="search-reader-text">Search for:</label>
                        <input type="text" id="search-form-1" className="search-field" placeholder="Enter keywords" name="text" />
                        <input type="submit" className="search-submit" value="Go" />
                      </form>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;