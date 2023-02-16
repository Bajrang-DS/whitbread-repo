import * as React from "react";

import "../../index.css";

export default function Brands(props: any) {
  const { c_brands } = props;
  return (

    <>
      <div className="brands"><h4>{c_brands.title}</h4>
        <ul>
        {c_brands.images?.map((item: any, index: number) => (
          <li>
            <a className="brand" target="_blank" href="#">
              <img width="98" height="98" src={item.url} className="attachment-full size-full" alt="Preier Inn 98x98" decoding="async" loading="lazy" />
            </a>
          </li>
   ))}
        </ul>
      </div>

    </>
  )



}
