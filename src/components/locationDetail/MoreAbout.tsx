import { Link } from "@yext/pages/components";
import * as React from "react";

import "../../index.css";

export default function MoreAbout(props: any) {
    const { c_servicesitems ,c_servicesimage} = props;
    return (

        <>
            <div className="is-layout-flow wp-block-group animate viewed" id="content">
                <div className="wp-block-group__inner-container">
                    <h1 className="has-text-align-center text-[#002d72]">{c_servicesitems.heading}</h1>
                    <p className="has-text-align-center is-style-intro">{c_servicesitems.description}</p>
                    <div className="icon-links">




                    {c_servicesimage.map((item: any, index: number) => (


                        <div className="icon-link">
                           
                                <img width="45" height="70" src={item.image.url}
                                    className={index == 2 ? "myclass attachment-full size-full " : "attachment-full size-full"} alt="Map Uk" decoding="async" loading="lazy" />
                                    <h5 style={{ color: "#002d72",lineHeight:"unset" }}>{item.title}</h5>
                         
                        </div>

                        ))}
                           

                    </div>
                    <a className="btn aligncenter style-col int" href="#" target="_self">
                       {c_servicesitems.cta.label} <svg  role="img" aria-hidden="true" width="13" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.415l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 5.414H1" stroke="#fff" stroke-width="2" stroke-linecap="round"></path></svg>
                    </a>
                </div>
            </div>

        </>
    )
}