import React from 'react'
import img0 from "../images/carousel/carousel-img0.jpg"
import img1 from "../images/carousel/carousel-img1.jpg"
import img2 from "../images/carousel/carousel-img2.jpg"
import img3 from "../images/carousel/carousel-img3.jpg"
import img4 from "../images/carousel/carousel-img4.jpg"
import img5 from "../images/carousel/carousel-img5.jpg"
import img6 from "../images/carousel/carousel-img6.jpg"
import img7 from "../images/carousel/carousel-img7.jpg"
import img8 from "../images/carousel/carousel-img8.jpg"
import img9 from "../images/carousel/carousel-img9.jpg"
import img81 from "../images/carousel/carousel-img8.1.jpg"
import img10 from "../images/carousel/carousel-img10.jpg"
import img11 from "../images/carousel/carousel-img11.jpg"
import img12 from "../images/carousel/carousel-img12.jpg"
import img13 from "../images/carousel/carousel-img13.jpg"
import img14 from "../images/carousel/carousel-img14.jpg"
import img15 from "../images/carousel/carousel-img15.jpg"
import img001 from "../images/carousel/carousel-img-1.jpg"


export default function Carousel() {

    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img001} class="" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img0} class="" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>The Timeline!</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img1} class="" alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img2} class="" alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img3} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img4} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img5} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img6} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img7} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img8} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img81} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img9} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img10} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img11} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img12} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img13} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img14} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img style={{ borderRadius: "10px", height: "80vh", width: "30vw" }} src={img15} alt="..." />
                        <div class="carousel-caption d-none d-md-block">


                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
