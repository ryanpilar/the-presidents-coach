import React from 'react'
import Glide from "@glidejs/glide";

const MediaPostCarousel = ( {imageCarousel} ) => {
    
    const [reloadGlide, setReloadGlide] = React.useState(0)
    
        React.useEffect(() => {
            new Glide(".glide", {
              type: "carousel",
              startAt: 0,
              focusAt: 2,
              perTouch: 1,
              perView: 4,
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

                

                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={imageCarousel[0].secure_url}
                    // src={require("assets/img/theme/sofia-kuniakina.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={imageCarousel[1].secure_url}
                    // src={require("assets/img/theme/sacha-styles.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={imageCarousel[2].secure_url}
                    // src={require("assets/img/theme/victor-garcia.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
                    height="500"
                    src={imageCarousel[3].secure_url}
                    // src={require("assets/img/theme/doyoun-seo.jpg")}
                    width="450"
                  ></img>
                </li>
                <li className="glide__slide">
                  <img
                    alt="..."
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