import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    
    return (
        <>
            <NavBar />
            <div id="cointainer-box">
                <Carousel id="carousel"
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                >
                    
                </Carousel>
            </div>
            <Footer pageId={"first"}/>
        </>
    );
}

export default Projects
