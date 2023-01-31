import * as React from "react";

const Footer = (props: any) => {
  console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  })
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle('');
  };
  const Services = props?._site?.c_customerServices?.links?.map((link: any) => (
    <a style={{ font: "caption", color: "black" }} className="navbar-item" href="#" >
      <span>{link.label}</span><br />
    </a>
  ));

  const Aboutm = props?._site?.c_aboutMatalan?.links?.map((link: any) => (
    <a style={{ font: "caption", color: "black" }} className="navbar-item" href="#" >
      <span>{link.label}</span><br />
    </a>
  ));
  const Websites = props?._site?.c_aboutMatalan?.links?.map((link: any) => (
    <a style={{ font: "caption", color: "black" }} className="navbar-item" href="#" >
      <span>{link.label}</span><br />
    </a>
  ));
  return (
    <footer style={{ background: "white", height: "330px" }} className="footer1 pt-6">
      <section className="footer-panel ">

        <div className="container">
          <div className="row o-footer__menu">
            <div style={{ padding: "15px" }} className="grid grid-cols-5 gap-x-10 gap-y-10">
              <div className="u-mar-t-medium col-12@lg col-6@xs">
              {props._site.c_faqs.map((res: any) => {
                        return (
                          <>
                           
                              <img  style={ {alignItems:"center", height:"20px",width:"20px"}} src={res.icon.url} />
                             
                              <a className="pt-4" href="#" > {res.cta.label} </a><br /><br />
                          </>
                        )
                      })}

              </div>

              <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">

                <h2 style={{ color: "#f5821f" }} className="title-widget">{props._site.c_customerServices.headingName}</h2>
                <ul style={{ color: "black" }} className="menu_footer">
                  <li><a >{Services}</a><br /></li>
                </ul>

              </div>
              <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">


                <h2 style={{ color: "#f5821f" }} className="title-widget">{props._site.c_aboutMatalan.headingName}</h2>
                <ul style={{ color: "black" }} className="menu_footer">
                  <li><a href="#">{Aboutm}</a></li>


                </ul>

              </div>
              <div>
                <h2 style={{ color: "#f5821f" }} className="title-widget">{props._site.c_ourWebsites.headingName}</h2>
                <ul style={{ color: "black" }} className="menu_footer">

                  <li><a href="#">{Websites}</a></li>


                </ul>

              </div>
              <div>
                <div className="col-12@xs col-3@lg u-mar-t-large o-footer__menu--social pr-4">
                  
                    <div className="col-12@xs o-footer__app-store-container__header-wrap u-mar-b-small">
                      <h3 className="u-font-wb u-font-ta-c@md-down pb-4"><b>{props._site.c_appSectionText}</b></h3>
                    </div>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                      {props._site.c_appIcons.map((res: any) => {
                        return (
                          <>
                            <a href="#" >
                              <img src={res.icon.url} />
                            </a>
                          </>
                        )
                      })}

                    </div>
                    <br />

                    <div className="row u-mar-b-large@lg-up u-mar-t-medium">
                      <div className="grid grid-cols-5 gap-x-5 gap-y-5">
                        {props._site.c_socials.map((res: any) => {
                          return (
                            <>
                              <a href="#" >
                                <img src={res.icon.url} />
                              </a>
                            </>
                          )
                        })}
                      </div>
                    </div><br />
                    <div className="row">
                      <div className="col-12@xs u-mar-v-medium@md-down">
                        <span ><p style={{ font: "small-caption" }} className="u-font--smaller u-font-ta-c@md-down" data-copyright="">
                          {props._site.c_description}

                        </p></span>
                      </div>
                    </div><br />

                    <div className="col-12@xs u-font-lh-0 u-font-ta-c@md-down">
                      <img style={{ }} src={props._site.c_footerLogo.url} alt="footer logo" />
                    </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer >
  );
};

export default Footer;
