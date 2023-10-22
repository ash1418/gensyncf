import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Images from "./components/Home/Images";
import "./index.css";


  function Sliderz(){

    const Images = [
      {
        id: 1,
        src: "https://media.licdn.com/dms/image/D4D03AQFKpHMEZ-K2dw/profile-displayphoto-shrink_400_400/0/1684445137666?e=1702512000&v=beta&t=4RfpJj14UzgBL8mNjaDkBkhxibc4tlw8QZJ77cHkrVo",
        alt: "Image 1",
        title: "Deepanshu Chand",
        description:
          "Placed at Amazon (64 lpa)"
      },
      {
        id: 2,
        src: "https://media.licdn.com/dms/image/C5603AQEFtv46EGi0Lg/profile-displayphoto-shrink_800_800/0/1657724055406?e=1702512000&v=beta&t=LNeau2LCzanCt5gELu7zgRZA4Y-yffE5az9gFv5qXR0",
        alt: "Image 2 ",
        title: "Shivani singh",
        description:
          "Placed at Accenture (11 LPA)",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "Image 3",
        title: "Ford Mustang",
        description: 
          "For offroad lovers. Super fast, Super Comfortable.",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
        alt: "Image 4",
        title: "Lamborghini Aventador SV",
        description:
          "Aventador SV provide thrills unlike anything that has ever been experienced before.",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        alt: "Image 5",
        title: "Ferrari 458 Speciale",
        description:
          "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
        alt: "Image 6",
        title: "Porsche 911",
        description:
          "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
      },
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
        alt: "Image 7",
        title: "Dodge Challenger",
        description:
          "The Challenger has a classic muscle-car interior, with a simple design",
      },
      {
        id: 8,
        src: "https://i.pinimg.com/750x/88/33/1b/88331be20045f95b28e91e21fa663ad0.jpg",
        alt: "Image 8",
        title: "Lamborghini Gallardo",
        description:
          "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
      },
      {
        id: 9,
        src: "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
        alt: "Image 9",
        title: "2021 Mercedes-AMG GLE53 Coupe electrifies",
        description:
          "Its electric motor can provide up to 184 pound-feet of torque on demand.",
      },
    ];
  
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: (
        <div>
          <div className="next-slick-arrow"> ⫸ </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> ⫷ </div>
        </div>
      ),
    };

    return (
      <>
       <div className="content">
        <h1 className="header">Top placed</h1>
        <div className="container">
          <Slider {...settings}>
            {Images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} className="img" />
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      </>
    );
  }


export default Sliderz;