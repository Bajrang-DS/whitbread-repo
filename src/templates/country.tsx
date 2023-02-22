import * as React from "react";
// import Header from "../../src/components/layouts/footer";
import Header from "../../src/components/layouts/header";
import Footer from "../components/layouts/footer";
// import favicon from "../images/Whitbread-favIcon.ico";
import { JsonLd } from "react-schemaorg";
// import Banner from "../components/banner";


import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
  Link,
} from "@yext/pages/components";
import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";

// import { AnalyticsEnableDebugging,  AnalyticsEnableTrackingCookie} from "../types/constants";
import "../index.css";
// import "../main.css";

// import bannerImage from "../images/app-bg.png";
// import favicon from "../images/favicon-live.png";

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
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import BreadCrumbs from "../components/layouts/Breadcrumb";
//import { stagingBaseurl } from "../constants";
// import { stagingBaseurl } from "../config/globalConfig";
// import Herobanner from "../components/commons/Herobanner";

//import Logo from "../images/logo.svg";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "country",
    filter: {
      entityTypes: ["ce_country"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType"
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

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // currentUrl = "/" + document.slug.toString() + ".html";
  // return `${document.slug.toString()}`+ ".html";
   return "index.html";
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {

  let metaDescription = "Find your nearest Whitbread store and which services are available." + document.name;
  let metaTitle = `Whitbread Store in ${document.name} | Find a Local Store`;
  let canonicalURL = document._site  ? document._site + document.slug + ".html"  : stagingBaseurl + document.slug  + ".html"
  let ogmetaImage = document._site.url ? document._site.url : "https://cdn.Whitbread.co.uk/en/assets/images/large/IMG_10480.jpg"
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
          name: "twitter:title",
          content: `${metaTitle}`,
        },
      },

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

const Country: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { description, dm_directoryChildren, dm_directoryParents, c_tagline } = document;
  const { 
    name,
    slug,
    c_globalData,
    _site,
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    __meta,
  } = document;
  
  const childrenDivs = dm_directoryChildren.map((entity: any) => (
    <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
      <Link 
          eventName="Region"
          key={entity.slug}
          href={slug +"/"+ entity.slug + ".html"}
          className="hover:text-red"
        >
          {entity.name} ({entity.dm_directoryChildrenCount})
      </Link>
    </div>
  ));
  let templateData = { document: document, __meta: __meta };
  let breadcrumbScheme = [];

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 1,
    item: {
      "@id": `${stagingBaseurl}${document.slug.toString()}.html`,
       name: document.name,
    },
  });
  return (
    <>
    <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Whitbread UK",
          "url": "https://www.Whitbread.co.uk/",
          "logo": favicon,
          "sameAs": [
            "https://www.twitter.com/WhitbreadUK",
            "https://www.facebook.com/WhitbreadUK"
          ],
        }}
      />
       {/* <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbScheme,
        }}
      /> */}
      {/* <Header _site={_site}/> */}
       <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        <AnalyticsScopeProvider name={""}>
       {/* <Header personal={_site.c_personal} bussiness={_site.c_business} findAStore={_site.c_findAStore} networkStatusChecker={_site.c_networkStatusChecker}></Header> */}
       <Header _site={_site}/>
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={{}}
      ></BreadCrumbs>
        <PhotoSlider _site={_site} />
       <div className="header-title ">
          {/* <Herobanner c_bannerTitle={_site.c_bannerTitle}></Herobanner> */}
        </div>
      {/* <Banner
        Name={name ? name : ""}
        TagLine={""}
        BackgroundImage={bannerImage}
        CtaButton={""}
        text={"Regions"}
        template={"country"}
      /> */}
      <h1 className="sec_heading mt-12" style={{ textAlign: "center",color:"Highlight" }}>
        All Regions of {name}{" "}
      </h1>
      <div className="directory-country py-5 lg:py-[60px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            {childrenDivs}
          </div>
        </div>
      </div>
      <Footer _site={_site}/>
      {/* <Footer midfooter={_site.c_midfooter} buyingonline={_site.c_buyingOnline} buyingonlineCTAs={_site.c_buyingOnlinecta} latestPhone={_site.c_latestPhones} latestPhonesCTAs={_site.c_latestPhonescta}
     helpSupport={_site.c_helpSupport} helpSupportcta={_site.c_helpSupportcta} WhitbreadUK={_site.c_WhitbreadUK} WhitbreadUKCta={_site.c_WhitbreadUKCta} c_cPIChanges={_site.c_cPIChanges}
     c_cPIChangesDescription1={_site.c_cPIChangesDescription1} WhitbreadDetails={_site.c_WhitbreadDetails}
     ></Footer> */}
      </AnalyticsScopeProvider>
      </AnalyticsProvider>
      {/* <Footer
        data={c_globalData[0].c_footerLinks}
        address={c_globalData[0].address}
        c_companyrn={c_globalData[0].c_companyrn}
        c_phoneNumber={c_globalData[0].c_phoneNumber}
        facebookPageUrl={c_globalData[0].facebookPageUrl}
        instagramHandle={c_globalData[0].instagramHandle}
        twitterHandle={c_globalData[0].twitterHandle}
        c_tikTok={c_globalData[0].c_tikTok}
      /> */}
    </>
  );
};

export default Country;
