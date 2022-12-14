import React from 'react'
import Glide from "@glidejs/glide";

const MediaPostCarousel = ( {imageCarousel} ) => {
    
    const [reloadGlide, setReloadGlide] = React.useState(0)
    
        React.useEffect(() => {
            new Glide(".glide", {
              type: "carousel",
              startAt: 1,
              focusAt: 2,
              perTouch: 1,
              perView: 5,
              hoverpause: true,
              autoplay: 6000,
              keyboard: true,
              // gap: 10,
            }).mount();

            document.body.classList.add("blog-post");
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
        
            return function cleanup() {
              document.body.classList.remove("blog-post");
            };
            
          }, []);

     
  return (
    <>
        {console.log('carousel', imageCarousel)}
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">

                
                {console.log('tester', imageCarousel[0])}
                <li className="glide__slide">
                  <img
                    alt={imageCarousel[0].context.custom.alt}
                    caption={imageCarousel[0].context.custom.caption}
                    data-pin-description={imageCarousel[0].context.custom.datapin}
                    height="500"
                    src={imageCarousel[0].secure_url}
                    // src={require("assets/img/theme/sofia-kuniakina.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt={imageCarousel[1].context.custom.alt}
                    caption={imageCarousel[1].context.custom.caption}
                    data-pin-description={imageCarousel[1].context.custom.datapin}
                    height="500"
                    src={imageCarousel[1].secure_url}
                    // src={require("assets/img/theme/sacha-styles.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt={imageCarousel[2].context.custom.alt}
                    caption={imageCarousel[2].context.custom.caption}
                    data-pin-description={imageCarousel[2].context.custom.datapin}
                    height="500"
                    src={imageCarousel[2].secure_url}
                    // src={require("assets/img/theme/victor-garcia.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt={imageCarousel[3].context.custom.alt}
                    caption={imageCarousel[3].context.custom.caption}
                    data-pin-description={imageCarousel[3].context.custom.datapin}
                    height="500"
                    src={imageCarousel[3].secure_url}
                    // src={require("assets/img/theme/doyoun-seo.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt={imageCarousel[4].context.custom.alt}
                    caption={imageCarousel[4].context.custom.caption}
                    data-pin-description={imageCarousel[4].context.custom.datapin}
                    height="500"
                    src={imageCarousel[4].secure_url}
                    // src={require("assets/img/theme/ayo-ogunseinde.jpg")}
                    width="450"
                  ></img>
                </li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <i className="ni ni-bold-left"></i>
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <i className="ni ni-bold-right"></i>
              </button>
            </div>
          </div>
    </>
  )
}

export default MediaPostCarousel