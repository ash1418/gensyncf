import {Link} from 'react-router-dom';
import style from "./home.module.css";
// import "./home.css";
import ImageSlider from "./Images";
function Home() {
  return (
    <>

      <section className='main'>
      <Link to={'/profile'}>Profile</Link>
        <img className='image-bg' src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/mckinsey%20explainers/what%20is%20gen%20z/what%20is%20gen%20z__1421908540_hero_1536x864.jpg?cq=50&mw=767&cpy=Center" alt='img'/>
        <div id='first-part'>
          <h1>Welcome to GenSync</h1>
        </div>
      </section>
      <section className='slider'>
        <ImageSlider />
      </section>
      <section className='recruiters-container'>
        <h1>BPIT Key Recruiters</h1>
        <div className='recruiters'>
        <img id="placement-data" src="https://imgtr.ee/images/2023/10/23/c6254522e734c7bcf52cfef2d34c8941.png" alt="placement-image"/>
        </div>
      </section>
    </>
  );
}

export default Home;

// import {Link} from 'react-router-dom';
// import style from "./home.module.css";
// import ImageSlider from "./Images";
// function Home() {
//   return (
//     <>
//       <div className='main'>
//         <h1>Welcome to Gensync!!</h1>
//         <Link to={'/profile'}>Profile</Link>
//         {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
//         a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
//         <ImageSlider />
//       </div>
//     </>
//   );
// }

// export default Home;
