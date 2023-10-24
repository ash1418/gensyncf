import React from "react";
import style from "./nav.module.css";
// import "./navn.css"
import { Outlet , Link} from "react-router-dom";
import Footer from "../Footer/footer";

function Nav() {
  
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://web.whatsapp.com/9ed94bbe-9d39-42ce-9ffa-39f93633e590"
            alt="logo"
          />
          <h4>Gensync</h4>
        </div>
        <div className={style.nav_details}>
          <Link to="/">Home</Link>
          <Link to="/notices">Notices</Link>
          <Link to="/events">Events</Link>
          <Link to="/alumni">Alumni</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
    {/* <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://cdn-icons-png.flaticon.com/128/3665/3665939.png"
            alt="logo"
          />
          <h4>Gensync</h4>
        </div>
        <div className={style.nav_details}>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/notices">Notices</Link></button>
          <button><Link to="/events">Events</Link></button>
          <button><Link to="/alumni">Alumni</Link></button>
          <button><Link to="/login">Login</Link></button>
     
        </div>
      </div>
    </nav> */}
    <Outlet />
    <Footer />
    </>
  );
}


export default Nav;

// import React from "react";
// import style from "./nav.module.css";
// import { Outlet , Link} from "react-router-dom";
// import Footer from "../Footer/footer";

// function Nav() {
  
//   return (
//     <>
//     <nav>
//       <div className={style.nav_container}>
//         <div className={style.nav_title_wrapper}>
//           <img
//             className={style.logo}
//             src="https://cdn-icons-png.flaticon.com/128/3665/3665939.png"
//             alt="logo"
//           />
//           <h4>Gensync</h4>
//         </div>
//         <div className={style.nav_details}>
//           <button><Link to="/">Home</Link></button>
//           <button><Link to="/notices">Notices</Link></button>
//           <button><Link to="/events">Events</Link></button>
//           <button><Link to="/alumni">Alumni</Link></button>
//           <button><Link to="/login">Login</Link></button>
     
//         </div>
//       </div>
//     </nav>
//     <Outlet />
//     <Footer />
//     </>
//   );
// }


// export default Nav;