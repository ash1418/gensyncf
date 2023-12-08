import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Feedback submitted!');
  };

  return (
    <>
      <section className={styles.location}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.1754647932676!2d77.11202237815834!3d28.73213218749075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013761946a2b%3A0x64b03b9154d81343!2sPocket%208%2C%20Sector%2011B%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1680676703789!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section className={`${styles.contactUs} ${styles.cart}`}>
        <div className={styles.row}>
            <div className={`${styles.contactcol} ${styles.infoo}`}>
                <div>
                    <i className={`${styles.fa} ${styles.fahome}`}></i>
                    <span>
                        <h5 className={styles.headd}>XTZ Road, ABC Building</h5>
                        <p>Rohini, Delhi, India</p>
                    </span>
                </div>
                <div>
                    <i className={`${styles.fa} ${styles.faphone}`}></i>
                    <span>
                        <h5 className={styles.headd}>+91 9482648263</h5>
                        <p>Monday to Saturday, 10AM to 6PM</p>
                    </span>
                </div>
                <div>
                    <i className={`${styles.fa} ${styles.faenvelope}`}></i>
                    <span>
                        <h5>inf o@gmail.com</h5>
                        <p>Email ud your query</p>
                    </span>
                </div>
            </div>
            <div className={`${styles.contactcol} ${styles.formm}`}>

            <form action="" method="post">
              <input type="text" name="name" placeholder="Enter your name" required />
              <input type="email" name="email" placeholder="Enter email address" required />
              <input type="text" name="subject" placeholder="Enter your subject" required />
              <textarea rows="8" name="message" placeholder="Message" required></textarea>
              <button type="submit" className={`${styles.herobtn} ${styles.redbtn}`}>
                Send Message
              </button>
            </form>

            </div>
        </div>
      </section>

      <section className={styles.footer}>
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nihil tempore eaque similique corrupti repudiandae minus, laudantium nostrum quod soluta dignissimos nam! <br/>Deserunt tenetur quod qui impedit ratione, veniam adipisci.</p>
        <div className={styles.icons}>
            <i className={styles.fasfafacebook}></i>
            <i className={styles.fafatwitter}></i>
            <i className={styles.fafainstagram}></i>
            <i className={styles.fafalinkedin}></i>
        </div>
            <p>Made with <i className={styles.fafahearto}></i>by Easy Tutorials</p>
      </section>

    </>
  );
};

export default Footer;
// import React from "react";
// import styles from "./footer.module.css";

// const Footer = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert('Feedback submitted!');
//   };

//   return (
//     <footer className={styles.footer}>
//       <div className="container-feed">
//         <div className="row">
//           <div className="col-md-6">
//             <h3>Provide Feedback</h3>
//             <p>We'd love to hear from you. Share your feedback with us.</p>
//             <form onSubmit={handleSubmit} className="feedback-form">
//               <div className="form-group">
//                 <label htmlFor="name">Your Name</label>
//                 <input type="text" id="name" name="name" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Your Email</label>
//                 <input type="email" id="email" name="email" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="feedback">Feedback</label>
//                 <input id="feedback" name="feedback" required></input>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Submit Feedback
//               </button>
//             </form>
//           </div>
//           <div className="col-md-6">
//             <h3>Contact Us</h3>
//             <p>Feel free to reach out if you have any questions or concerns.</p>
//             <p className="contact-info">
//               Email: <a href="mailto:contact@example.com">contact@example.com</a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="container-foot mx-auto">
//         <p>
//           © {new Date().getFullYear()} GenSync
//           <br />
//           <a
//             href="https://www.example.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.link}
//           >
//             Terms of Service
//           </a>
//           &nbsp; | &nbsp;
//           <a
//             href="https://www.example.com/privacy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.link}
//           >
//             Privacy Policy
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // import React from "react";
// // import styles from "./footer.module.css";

// // const Footer = () => {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here
// //     alert('Feedback submitted!');
// //   };

// //   return (
// //     <footer className={styles.footer}>
// //       <div className="container-feed">
// //         <div className="row">
// //           <div className="col-md-6">
// //             <h3>Provide Feedback</h3>
// //             <p>We'd love to hear from you. Share your feedback with us.</p>
// //             <form onSubmit={handleSubmit} className="feedback-form">
// //               <div className="form-group">
// //                 <label htmlFor="name">Your Name</label>
// //                 <input type="text" id="name" name="name" required />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="email">Your Email</label>
// //                 <input type="email" id="email" name="email" required />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="feedback">Feedback</label>
// //                 <textarea id="feedback" name="feedback" required></textarea>
// //               </div>
// //               <button type="submit" className="btn btn-primary">
// //                 Submit Feedback
// //               </button>
// //             </form>
// //           </div>
// //           <div className="col-md-6">
// //             <h3>Contact Us</h3>
// //             <p>Feel free to reach out if you have any questions or concerns.</p>
// //             <p className="contact-info">
// //               Email: <a href="mailto:contact@example.com">contact@example.com</a>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="container-foot mx-auto">
// //         <p>
// //           © {new Date().getFullYear()} Your Company
// //           <br />
// //           <a
// //             href="https://www.example.com"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className={styles.link}
// //           >
// //             Terms of Service
// //           </a>
// //           &nbsp; | &nbsp;
// //           <a
// //             href="https://www.example.com/privacy"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className={styles.link}
// //           >
// //             Privacy Policy
// //           </a>
// //         </p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// // // import React from "react";
// // // import style from "./footer.module.css";
// // // import { Link} from "react-router-dom";

// // // function Footer() {
  
// // //   return (
// // //     <>
// // //     <h1>Footer</h1>    
// // //     </>
// // //   );
// // // }


// // // export default Footer;