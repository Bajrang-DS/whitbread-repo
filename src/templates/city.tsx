import * as React from "react";
import Footer from "../components/layouts/footer";
import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import getDirectionUrl from "../components/commons/GetDirection";
import Header from "../../src/components/layouts/header";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { Link } from "@yext/pages/components";
import "../index.css";
var currentUrl = "";

import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

import { JsonLd } from "react-schemaorg";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "city",
    filter: {
      entityTypes: ["ce_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      // "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryParents.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.mainPhone",
      // "dm_directoryChildren.what3WordsAddress",
      "dm_directoryChildren.yextDisplayCoordinate"
      // "c_globalData.c_headerLinks1",
      // "c_globalData.c_footerLinks",
      // "c_globalData.facebookPageUrl",
      // "c_globalData.twitterHandle",
      // "c_globalData.instagramHandle",
      // "c_globalData.address",
      // "c_globalData.c_phoneNumber",
      // "c_globalData.c_companyrn",
      // "c_globalData.c_tikTok",
      //seo section
      // "c_canonical",
      // "c_metaDescription",
      // "c_metaTitle",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

let slugString = "";
// export const getPath: GetPath<TemplateProps> = ({ document }) => {
//   document.dm_directoryParents.forEach((e: any) => {
//     if (e.sulg != "location" && e.slug != "gb") {
//       slugString += e.slug + "/";
//       slugString = slugString.replace("location", "");
//     }
//   });

//   currentUrl = slugString + document.slug + ".html";

//   return slugString + document.slug + ".html";
// };
export const getPath: GetPath<TemplateProps> = ({ document }) => {

  // return `${document.slug.toString()}.html`;

  var url: any = ""
  document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == 'ce_country') {
      url = `${i.slug}`
    }
    else if (i.meta.entityType.id == 'ce_region') {
      url = `${url}/${i.slug}/${document.slug.toString()}.html`
    }
  })
  return url;
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
}): HeadConfig => {

  let metaDescription = "Find your nearest Whitbread store and which services are available." + document.name;
  let metaTitle = `Whitbread Store in ${document.name} | Find a Local Store`;
  let canonicalURL = document._site ? document._site + document.dm_directoryParents[1].name.toLowerCase() + "/" + document.dm_directoryParents[2].slug + "/" + document.slug + ".html" : stagingBaseurl + document.dm_directoryParents[1].name.toLowerCase() + "/" + document.dm_directoryParents[2].slug + "/" + document.slug + ".html"
  let ogmetaImage = document._site.url ? document._site.url : "https://cdn.vodafone.co.uk/en/assets/images/large/IMG_10480.jpg"

  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: " Whitbread",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: ` ${canonicalURL}`,
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${canonicalURL}`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "og:image",
          content: `${ogmetaImage}`
        },
      },

      /// twitter tag

      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: `${canonicalURL}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: `https://companieslogo.com/img/orig/WTB.L-13ed7054.png?t=1652332938`
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
    ],
  };
};

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren,
    c_globalData,
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    _site,
    __meta,
  } = document;
  var address;
  var c_companyrn;
  var c_footerLinks;
  var c_headerLinks1;
  var c_phoneNumber;
  var facebookPageUrl;
  var instagramHandle;
  var twitterHandle;
  var c_tikTok;
  var sortedChildren = dm_directoryChildren.sort(function (a: any, b: any) {
    var a = a.name;
    var b = b.name;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let slugString = "";
  document.dm_directoryParents.forEach((e: any) => {
    slugString += e.slug + "/";
  });
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const childrenDivs = dm_directoryChildren.map((entity: any) => {
    var origin: any = null;
    if (entity.address.city) {
      origin = entity.address.city;
    } else if (entity.address.region) {
      origin = entity.address.region;
    } else {
      origin = entity.address.country;
    }
    let key: any = Object.keys(entity.hours)[0];
    let detailPageUrl = '';
    var name: any = entity.name.toLowerCase();
    var string: any = name.toString();
    let removeSpecialCharacters = string.replace(
      /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
      "");
    let result: any = removeSpecialCharacters.replaceAll(" ", "-");
    if (!entity.slug || entity.slug == "undefined") {
      detailPageUrl = `${entity.id}-${result}`
    }
    else {
      // detailPageUrl = `${entity.slug.toString()}`
      let countrycode = `${entity?.address?.countryCode?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
      let statecode = `${entity?.address?.region?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
      let citycode = `${entity?.address?.city?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
      detailPageUrl = `${countrycode + "/" + statecode + "/" + citycode + "/" + entity.slug?.toString()}`;
    }

    return (
      <>


        <div className="w-full sm:w-1/2 xl:w-1/3 px-[15px]">
          <div className="near-location">
            <h4>
              <Link eventName={"Location detail"} key={entity.slug} href={`/${detailPageUrl}`}>
                <span style={{ color: "OrangeRed" }}>  {entity.name}</span>
              </Link>
            </h4>
            <div className="store-address">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.23"
                height="30"
                viewBox="0 0 21.23 30"
              >
                <g transform="translate(0 0)">
                  <path
                    d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
                    fill="#d61a0c"
                    fillRule="evenodd"
                  />
                  <path
                    d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
                    fill="yellow"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
              <p>
                {entity.address.line1 ? entity.address.line1 : ""},
                {entity.address.line2 ? entity.address.line2 : ""}
                <br /> {entity.address.city ? entity.address.city : ""},{" "}
                {entity.address.postalCode ? entity.address.postalCode : ""},{" "}
                <br />
                {entity.address.countryCode
                  ? regionNames.of(entity.address.countryCode)
                  : ""}{" "}
                <br />
              </p>
            </div>
            {entity.mainPhone && <div className="store-phone m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.987"
                height="23.987"
                viewBox="0 0 23.987 23.987"
              >
                <path
                  d="M19.64,17.328c-.617,1.876-3.036,2.812-4.764,2.656A15.194,15.194,0,0,1,8,17.14,22.652,22.652,0,0,1,.885,8.652C-.22,6.3-.468,3.411,1.176,1.268A2.827,2.827,0,0,1,3.429,0C4.8-.063,4.992.721,5.463,1.943c.351.913.819,1.845,1.08,2.792C7.032,6.5,5.321,6.575,5.105,8.019c-.133.911.969,2.132,1.468,2.781A13.473,13.473,0,0,0,10.051,14c.76.479,1.984,1.341,2.853.865,1.339-.733,1.213-2.991,3.084-2.227a30.12,30.12,0,0,1,2.833,1.463c1.431.769,1.364,1.567.819,3.223h0"
                  transform="translate(4.5) rotate(13)"
                  fill="blue"
                  fillRule="evenodd"
                />
              </svg>
              <p>
                <Link className="hover:text-blue" eventName={"PhoneNumber"} href={`tel:${entity.mainPhone}`} rel="noopener noreferrer">
                  <span style={{ color: "green" }}>  {entity.mainPhone}</span>
                </Link>
              </p>
            </div>}

            <div className="store-link flex pt-0">
              <a className="view-details text-center" href={`/${detailPageUrl}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.403"
                  // height="14"
                  viewBox="0 0 22.403 14"
                >
                  <g transform="translate(-15.975 -106)">
                    <path
                      d="M27.176,120a10.337,10.337,0,0,1-4.387-1.05,16.655,16.655,0,0,1-3.481-2.249,21.287,21.287,0,0,1-3.183-3.253.742.742,0,0,1,0-.9,21.288,21.288,0,0,1,3.183-3.253,16.655,16.655,0,0,1,3.481-2.249A10.337,10.337,0,0,1,27.176,106a10.337,10.337,0,0,1,4.387,1.05,16.655,16.655,0,0,1,3.481,2.249,21.023,21.023,0,0,1,3.183,3.253.742.742,0,0,1,0,.9,21.287,21.287,0,0,1-3.183,3.253,16.655,16.655,0,0,1-3.481,2.249A10.337,10.337,0,0,1,27.176,120Zm-9.492-7c1.171,1.386,5.04,5.507,9.492,5.507S35.5,114.386,36.669,113c-1.171-1.386-5.04-5.507-9.492-5.507S18.856,111.614,17.684,113Z"
                      transform="translate(0 0)"
                      fill="green"
                    />
                    <path
                      d="M187.36,190.72a3.36,3.36,0,1,1,3.36-3.36A3.364,3.364,0,0,1,187.36,190.72Zm0-5.227a1.867,1.867,0,1,0,1.867,1.867A1.866,1.866,0,0,0,187.36,185.493Z"
                      transform="translate(-160.184 -74.36)"
                      fill="blue"
                    />
                  </g>
                </svg>{" "}
                View Details
              </a>
            </div>
          </div>
        </div>


      </>
    );


  });

  c_globalData &&
    c_globalData.map((i: any) => {
      address = i.address ? i.address : [];
      c_companyrn = i.c_companyrn ? i.c_companyrn : "";
      c_footerLinks = i.c_footerLinks ? i.c_footerLinks : [];
      c_headerLinks1 = i.c_headerLinks1 ? i.c_headerLinks1 : [];
      c_phoneNumber = i.phoneNumber ? i.phoneNumber : "";
      facebookPageUrl = i.facebookPageUrl ? i.facebookPageUrl : "";
      instagramHandle = i.instagramHandle ? i.instagramHandle : "";
      twitterHandle = i.twitterHandle ? i.twitterHandle : "";
      c_tikTok = i.c_tikTok ? i.c_tikTok : "";
    });

  let templateData = { document: document, __meta: __meta };
  let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  dm_directoryParents &&
    dm_directoryParents.map((i: any, index: any) => {
      currentIndex = index;
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": `${stagingBaseurl}/${i.slug}.html`,
            name: i.name,
          },
        });
      }
    });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 1,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}.html`,
      name: dm_directoryParents[1].name,
    },
  });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 2,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}/${dm_directoryParents[2].slug}.html`,
      name: dm_directoryParents[2].name,
    },
  });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 3,
    item: {
      "@id": `${stagingBaseurl}${dm_directoryParents[1].slug}/${dm_directoryParents[2].slug}/${document.slug.toString()}.html`,
      name: document.name,
    },
  });
  return (
    <>
      {/* <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Whitbread UK",
          "url": "https://www.whitbread.co.uk/",
          "logo": favicon,
          "sameAs": [
            "https://www.twitter.com/WhitbreadUK",
            "https://www.facebook.com/WhitbreadUK"
          ],
        }}
      /> */}

      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        <AnalyticsScopeProvider name={""}>

          <Header _site={_site} />

          <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
            address={{}}
          ></BreadCrumbs>
          <PhotoSlider _site={_site} />
          <h1 className="sec_heading mt-12" style={{ textAlign: "center", color: "Highlight" }}>
            Available Stores in {name}, {document.dm_directoryParents[2].name},{" "}
            {document.dm_directoryParents[1].name}{" "}
          </h1>
          <div className="directory-country nearby-sec">
            <div className="container">
              <div className="flex  flex-wrap justify-center -mx-[15px]">
                {childrenDivs}
              </div>
            </div>
          </div>
          <Footer _site={_site} />

        </AnalyticsScopeProvider>
      </AnalyticsProvider>

    </>
  );
};
export default City;
