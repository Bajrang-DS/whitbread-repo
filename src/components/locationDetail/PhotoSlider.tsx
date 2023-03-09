import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {

const options = {
  type:"loop",
  autoplay :true,
  PauseOnHover:true,
}


  const { photoGallery, c_bannerlink } = props;
  const photos =props._site?.photoGallery?.map((element: any, index:number) => (

    <SplideSlide>
      <div className="slider" id={`banner${index}`}>

        <img src={element.image.url} alt="photoGallery" />

        <div className="slide-content">
          <h2>{element.description}</h2>
          <p>{element.details}</p>
     
            <a className="btn style-outline-white hover:bg-white hover:text-black" href="#">{props._site.c_bannerlink.label}</a>
     
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <>

      <Splide aria-label="Photo Slider" options={options}>


        {photos}
      </Splide>

    </>
  );
};

export default PhotoSlider;