import {Link} from 'react-router-dom';
import style from "./home.module.css";
import ImageSlider from "./Images";
function Home() {
  return (
    <>
      <div className='main'>
        <h1>Welcome to Gensync!!</h1>
        {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
        a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
        <ImageSlider />
      </div>
    </>
  );
}

export default Home;
