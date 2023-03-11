import { Link } from "@yext/pages/components";
import * as React from "react";
// import abbanner from "../../images/ab-banner.jpg"
// import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"

export default function About(props: any) {
  const { c_about, c_aboutdatas } = props;

  var buttonText = "Show More";
  const myFunction = (x: any , y: any) => {         // function to hide and show search section after click on search icon on header

    x = document.getElementById("hide-show");
    y = document.getElementById("hide");
  
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
      x.style.display = "none";
      buttonText = "Show More";
    } else {
      x.style.visibility = "visible";
      x.style.display = "block";
      buttonText = "Hide";
    }
    // document.getElementById("hide-show").classList.toggle('open');

    y.innerText = '';
    y.innerHTML += buttonText;
 }

  return (
    <>

      <div className="blue-cta-box alignwide img-left viewed">

        <div className="bg">
          <img src={c_about?.image?.url} />
        </div>
        <div className="wrap">
          <div className="inner">
            <h3 className="has-california-color has-text-color">{c_about?.heading}</h3>
            <p className="is-style-light"> {c_about?.description}</p>
            <div className="is-layout-flex wp-container-5 wp-block-columns" id="hi-sh">

              <div className="is-layout-flow wp-block-column" id="hide-show">
                <ul className="icon-list">
                  {props.c_aboutdatas?.map((item: any, index: number) => (
                    <li>
                      <h6>{item.title}</h6>
                      <p>
                        {item.titledes}
                      </p><br />
                    </li>
                  ))}
                </ul>

              </div>

              {/* <a href="javascript:;" id="hide" style={{color:"green"}} onClick={myFunction}>Show More</a> */}
              <div className="is-layout-flow wp-block-column" >
              </div>
            </div>

            <a className="btn style-white int hover:underline" href="#" target="_self">{c_about.cta1.label} <svg role="img" aria-hidden="true" width="13" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.415l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 5.414H1" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path></svg>
            </a><br />

            <a className="btn style-white int hover:underline" href="#" target="_blank">{c_about.cta2.label} <svg role="img" aria-hidden="true" width="13" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.415l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 5.414H1" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </>
  )


}