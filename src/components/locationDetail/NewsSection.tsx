import { Link } from "@yext/pages/components";
import * as React from "react";

import "../../index.css";

export default function NewsSection(props: any) {
    const { c_newsheading, c_brandthird, c_brandsecond, c_brandfirst } = props;
    return (

        <>
            <div className="is-layout-flow wp-block-group animate viewed">
                <div className="wp-block-group__inner-container">
                    <h2 className="has-text-align-center">{c_newsheading.heading}</h2>
                    {/* <div style={{height:"20px"}} aria-hidden="true" className="wp-block-spacer">
                    </div> */}
                    <div className="video-wrapper">



                        <iframe src="https://player.vimeo.com/video/637440436?h=bf1455769c&dnt=1&app_id=122963" width="1280" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>

                    </div>
                    <div className="latest-posts col" style={{ border: "1px solid transpaerent" }}>
                        <div className="post">
                            <img className="bg" src={c_brandfirst.image.url} alt="" />
                            <p className="meta">
                                <strong>
                                    {c_brandfirst.date}
                                </strong>
                                <a className="hover:underline" href="#" rel="category tag">
                                    {c_brandfirst.brandcta.label}
                                </a>
                            </p>
                            <h3>
                                <a className="hover:underline" href="#">
                                    {c_brandfirst.ctalong.label}
                                </a>
                            </h3>
                            <p className="excerpt">{c_brandfirst.description}</p>
                        </div>
                        <div className="post">
                            <img className="bg" src={c_brandsecond.image.url} alt="" />
                            <p className="meta">
                                <strong>
                                    {c_brandsecond.date}
                                </strong>
                                <a className="hover:underline" href="#" rel="category tag">
                                    {c_brandsecond.brand2.label}
                                </a>
                            </p>
                            <h3>
                                <a className="hover:underline" href="#">
                                    {c_brandsecond.ctalong2.label}
                                </a>
                            </h3>
                            <p className="excerpt">{c_brandsecond.description}</p>
                        </div>
                        <div className="news-post">

                            <ul className="post-ul">
                                {c_brandthird.map((item: any, index: number) => (
                                    <li className="news-items">
                                        <img className="bg" src={item.images.url} alt="" />
                                        <p className="meta">
                                            <strong>{item.date}</strong>
                                            <a className="hover:underline" href="#" rel="category tag"> {item.brand3.label}</a></p>
                                        <h3>
                                            <a className="hover:underline" href="#"> {item.ctalong3.label}</a>
                                        </h3>
                                        <p className="excerpt">{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <a className="btn aligncenter style-col int" href="#" target="_self">{c_newsheading.presslink.label}<svg role="img" aria-hidden="true" width="13" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.415l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 5.414H1" stroke="#fff" stroke-width="2" stroke-linecap="round"></path></svg>
                    </a>
                </div>
            </div>
        </>
    )
}