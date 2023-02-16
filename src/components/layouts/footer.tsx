import * as React from "react";

const Footer = (props: any) => {
  const { c_footerlink1, c_footerlink2, c_footerlink3, c_footerlogo, c_socialitems, description } = props;


  return (
    <>

      <footer className="colophon">
        <div className="wrap">
          <div className="columns">
            <div className="col col-1">
              <div className="wb-1">

                <div id="media_image-2" className="site-widget widget_media_image">

                  <img style={{marginTop:"-20px"}} src={props._site.c_footerlogo.url} alt="logo" />
                </div>

                <div id="nav_menu-4" className="site-widget widget_nav_menu">
                  <div className="menu-about-submenu-container">
                    <ul id="menu-about-submenu" className="menu">
                      {props._site?.c_footerlink1?.map((item: any, index: number) => (

                        <li key={index} id="menu-item-1597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1597">
                          <a href="#">{item.label}</a>

                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p>{props._site.description}</p>
              </div>

              <div className="wb-2">
                <img src={props._site.c_careers.photo.url} width="500" height="229" alt="" />

                <a className="btn style-white" href="#" target="_blank">
                  {props._site.c_careers.cta.label}
                  <svg role="img" aria-hidden="true" width="13" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.415l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 5.414H1" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </a>
              </div>


            </div>

            <div className="col col-2">
              <div id="nav_menu-2" className="site-widget widget_nav_menu">
                <div className="menu-policies-container">
                  <ul id="menu-policies" className="menu">
                    {props._site?.c_footerlink2?.map((item: any, index: number) => (
                      <li id="menu-item-42" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                        <a href="#">{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
            <div className="col col-3">
              <div id="nav_menu-3" className="site-widget widget_nav_menu">
                <div className="menu-footer-menu-container">
                  <ul id="menu-footer-menu" className="menu">
                    {props._site?.c_footerlink3?.map((item: any, index: number) => (
                      <li id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
                        <a href="#">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-soc">
              <ul className="soc">
                {props._site?.c_socialitems?.image.map((item: any, index: number) => (
                  <li>
                    <a href="#" target="_blank">

                      <img style={{ height: "30px", width: "30px" }} src={item.url} alt="icons" />

                    </a>
                  </li>
                ))}
              </ul>
              <p className="credit">
                {props._site.c_socialitems.heading}
                <a className="bir" href="#" target="_blank" rel="noopener"><br />
                  {props._site.c_socialitems?.cTA?.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
