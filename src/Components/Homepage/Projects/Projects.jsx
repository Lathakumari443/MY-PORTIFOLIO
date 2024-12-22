import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css"

const Projects = () => {
  useEffect(() =>{
    document.title = 'My_Portfolio || Projects'
},[]) 

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="Course-spe">
            <h1 style={{ textAlign: 'center', color: 'blueviolet' }}><b>Projects</b></h1>
                <p style={{ textAlign: 'center' }} >This is a paragraph providing additional information about the content above.</p>
    </div>


    <div className="container my-5">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="mt-20 bg-secondary text-black justify-center items-center ">
            {/* Card Header (Image Section) */}
            <div
              className="card-header bg-indigo-500 d-flex justify-content-center align-items-center"
              style={{ height: "200px", background: "#6a11cb" }}
            >
              <img
                src={d.img}
                alt={d.name}
                className="rounded-circle img-fluid"
                style={{ height: "150px", width: "150px" }}
              />
            </div>

            {/* Card Body */}
            <div className="card-body text-center bg-gray ">
              <h5 className="card-title">{d.name}</h5>
              <p className="card-text text-muted">{d.review}</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

const data = [
  {
    name: "John Morgan",
    img: "https://randomuser.me/api/portraits/men/11.jpg", // Replace with valid URLs
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Ellie Anderson",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Nia Adebayo",
    img: "https://randomuser.me/api/portraits/women/13.jpg",
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

export default Projects;

