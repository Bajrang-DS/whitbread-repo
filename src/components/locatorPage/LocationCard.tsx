import * as React from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../../types/search/locations";
import GetDirection from "../commons/GetDirection";
import redmapimage from "../../images/red-map.svg";
// import timesvg from "../../images/watch-icn.svg"
import Address from "../commons/Address";
import OpenClose from "../commons/openClose";
import { StaticData } from "../../../sites-global/staticData";
import { Link } from "@yext/pages/components";
import Hours from "../commons/hours";
import hours from "../commons/hours";
import Model from "../locationDetail/Model";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}
let array = [];

const LocationCard: CardComponent<Location> = ({ result }) => {

  const [timeStatus, setTimeStatus] = React.useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }

  const { address, hours, additionalHoursText, mainPhone, timezone, c_specific_day } = result.rawData;

  //   var name: any = result.rawData.name?.toLowerCase();
  //   var country: any = result.rawData.address.countryCode?.toLowerCase();
  //   var initialcountry: any = country.toString();
  //   var finalcountry: any = initialcountry.replaceAll(" ", "-");
  //   var region: any = result.rawData.address.region?.toLowerCase(); 
  //   var initialregion: any = region.toString();
  //   var finalregion: any = initialregion.replaceAll(" ", "-");
  //   var city: any = result.rawData.address.city?.toLowerCase();
  //   var initialrcity: any = city.toString();
  //   var finalcity: any = initialrcity.replaceAll(" ", "-");
  //   var string: any = name.toString();
  //   let result1: any = string.replaceAll(" ", "-");
  //   let main_result:any=finalcountry+"/"+finalregion+"/"+finalcity+"/"+result.rawData.slug+".html";
  //  if (!result.rawData.slug) {
  //    url= `/${result.rawData.id}-${result1}`;
  //  } else {
  //    url= `/${main_result}`;
  //  }
  let countrycode = `${result.rawData.address?.countryCode?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
  let statecode = `${result.rawData.address?.region?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
  let citycode = `${result.rawData?.address?.city?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`;
  let url = `${countrycode + "/" + statecode + "/" + citycode + "/" + result.rawData.slug?.toString()}`;

  
  return (
    <div className={`location result-list-inner-${result.id} result`} id={`result-${result.id}`} key={`result-${result.rawData.id}`}>
      <div className="result-inner ">
        <div className="center-column">
          <div className="lp-param-results lp-subparam-hours">
            <div className="location-name-miles icon-row">
              <div className="icon text-black relative"> <img className=" " src={redmapimage} width="20" height="20"
                alt={''} /><span className="map-count">W</span></div>
              <h2 ><Link style={{ color: "#002d72" }} className="inline-block notHighlight"
                data-ya-track={`viewDetail -${result.rawData.name}`}
                eventName={`viewDetail -${result.rawData.name}`}
                rel="noopener noreferrer"
                href={`${url}`}>{result.rawData.name}
              </Link></h2>
              {typeof result.distance != "undefined" ?
                <div style={{ color: "green" }} className="distance">
                  {metersToMiles(result.distance)} <span>{StaticData.miles}</span>
                </div>
                : ''}
            </div>
            <div className="icon-row content-col address-with-availablity notHighlight">
              <Address address={address} />

              <div className="open-close ">
                <div className="hours-sec onhighLight">
                  <div className="OpenCloseStatus ">
                    <div className="hours-labels icon-row">
                      <div className="flex" >
                        <OpenClose
                          timezone={timezone}
                          hours={hours}
                          deliveryHours={hours}
                        ></OpenClose>
                        <button onClick={onOpenHide}><svg className="mt-2 ml-4" xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 9.585 4.793">
                          <path id="hrd-drop" d="M9,13.5l4.793,4.793L18.585,13.5Z" transform="translate(-9 -13.5)" fill="#00363f"></path>
                        </svg></button>
                      </div>
                      <div className={timeStatus + " daylist"} >
                        <div>
                        <Model name={StaticData.Holdiay}
                          holidayHours={hours?.holidayHours}
                          c_specific_day={c_specific_day}
                          /></div>
                        <Hours key={result.rawData.id} hours={hours} additionalHoursText={additionalHoursText} c_specific_day={undefined} />
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div className="button-bx">
              <Link style={{ background: "#002d72" }} type="button" href={`${url}`} className=" btn notHighlight "
                data-ya-track={`viewStore -${result.rawData.name}`}
                eventName={`viewStore -${result.rawData.name}`}
                rel="noopener noreferrer"
              >
                {/* <div dangerouslySetInnerHTML={{__html: View_Store}}/> */}
                {StaticData.StoreDetailbtn}
              </Link>
              {result.rawData.displayCoordinate ?
                <GetDirection buttonText={StaticData.getDirection} address={address} latitude={result.rawData.displayCoordinate?.latitude} longitude={result.rawData.displayCoordinate?.longitude} />
                : <GetDirection buttonText={StaticData.getDirection} address={address} latitude={result.rawData.yextDisplayCoordinate?.latitude} longitude={result.rawData.yextDisplayCoordinate?.longitude} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default LocationCard;