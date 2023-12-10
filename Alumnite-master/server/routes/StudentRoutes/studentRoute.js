const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const ProfileImage_PATH = path.join('/uploads/users/avatars');
const multer = require('multer');

const _ = require('lodash');


const {
    Student,
    Event,
    Job,
    Interview,
    Ticket
} = require('./../../models');

const {studentAuth} = require('../../middleware/studentAuth.js');


/*
 @Type: POST
 @Route: /register
 @Desc: Sign-up
*/

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, ProfileImage_PATH);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
  });

router.post('/register',  (req, res) => {
    
        const student = new Student(req.body);
        
        student.save().then(() => {
            return student.generateAuthToken();
        })
        .then((token) => {
            res.header('x-auth',token).send(student);
        })
        
        .catch((err) => {console.log(err);
            res.status(500).send(err);
        });
        // Generate verification code

        // const verificationCode = student.generateVerificationCode();
    
        // Save the student with the verification code
        //await student.save();
        

        // Send the verification code to the student's email
        // const mailOptions = {
        //   from: 'your-email@gmail.com',
        //   to: student.email,
        //   subject: 'Email Verification Code',
        //   text: `Your verification code is: ${verificationCode}`,
        // };
    
        // transporter.sendMail(mailOptions, (error, info) => {
        //   if (error) {
        //     console.error('Email sending error:', error);
        //     res.status(500).send({ error: 'Internal Server Error' });
        //   } else {
        //     console.log('Email sent:', info.response);
        //     res.status(201).send({ message: 'Student registered successfully. Check your email for verification.' });
         // }
        //});
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send({ error: 'Internal Server Error' });
    //   }
    });

//     var student = new Student(req.body)
//     // Generate verification code
//     const verificationCode = student.generateVerificationCode();

//     student.save().then(() => {
//         return student.generateAuthToken();
//     })
//     .then((token) => {
//         res.header('x-auth',token).send(student);
//     })
    
//     .catch((err) => {console.log(err);
//         res.status(500).send(err);
//     });

// });


//login
router.post('/login', (req, res) => {
    
    var {email, password} = _.pick(req.body, ['email', 'password']);

    Student.findOne({email, password}) 
        .then((student) => {
            if(!student) {
                res.status(404).send({"err": "Invalid credentials."})
            }
            return student.generateAuthToken()
                .then((token) => {
                    console.log("token generated")
                    //localStorage.setItem('token', token);
                    res.status(200).header({'x-auth': token, 'access-control-expose-headers': 'x-auth'}).send({message: 'Login successful.', token:token});
                    
                });
        })
        .catch((err) => {
            console.log("oopss");
            res.status(500).send(err)
        });
});

// me
router.get('/profile', studentAuth ,(req, res) => {
    console.log("req.student");
    res.send(req.student);
})

// router.patch('/profile', studentAuth, (req, res) => {
//     var student = req.student;

//     Student
//         .findByIdAndUpdate(

//             {_id: student._id},  
//             req.body,
//             {new: true}  //Default value is False and it sends the old document. This statement means to send "new" (updated document) back, instead of old document.
        
//             )
//         .select('-tokens')
//         .then((student) => {
//             res.send(student);
//         })
//         .catch((err) => {
//             res.status(500).send(err)
//         })
// });

router.patch('/profile/:id',  studentAuth, upload.single('Pimage'), async (req, res) => {
    // if (req.student.id == req.params.id) {
    //     try {
          
    //         let student = await Student.findByIdAndUpdate(req.params.id, req.body);
    //         Student.uploadedAvatar(req,res,function(err){
     
    //           if(err){console.log('****Multer Error: ', err)}
     
    //           console.log(req.file);
     
    //         //   user.name = req.body.name;
    //         //   user.email = req.body.email;
     
    //           if(req.file){
     
    //              // if(user.avatar){
    //              //     fs.unlinkSync(path.join(__dirname, '..' , user.avatar));
    //              // }
     
    //              // this is saving the path of the uploaded file into the avatar field in the user
    //              student.avatar = Student.avatarPath+'/'+req.file.filename;
    //           }
     
    //           student.save();
    //           return res.redirect('back');
     
    //         })
             
    //     } catch (err) {
    //       console.error(err);
    //       return res.status(500).send('Internal Server Error');
    //     }
    //   }else {
    //     return res.status(401).send('Unauthorised');
    //   }
    const studentId = req.student._id.toString();
      
    if (studentId === req.params.id) {
        
        //console.log(req.body.Pimage)
      try {
        const updatedStudent = await Student.findByIdAndUpdate(
          studentId,
          {$set: req.body},
          { new: true } // Return the updated document
        );
  
        if (!updatedStudent) {
            
          return res.status(404).send('Student not found');
        }
       
        console.log(req)
        // Handle file upload if applicable
        // if (req.body.Pimage) {console.log(req.body.Pimage)
        //   updatedStudent.Pimage = path.join(ProfileImage_PATH, req.file.filename); //Student.avatarPath + '/' + req.body.Pimage;
        //   await updatedStudent.save();
        // }
        if (req.files) {
            console.log(req.files.Pimage.name);
            updatedStudent.Pimage = path.join(ProfileImage_PATH, req.files.Pimage.name);
            await updatedStudent.save();
          }

        return res.redirect('/');
      } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
    } else {
      return res.status(401).send('Unauthorized');
    }
  });
  
// router.patch('/profile/:id', studentAuth,async(req, res) => {
//     console.log(req.student._id.toString() === req.params.id);
//      if (req.student._id.toString() === req.params.id) {
//         try {
//           const student = await Student.findById(req.params.id);
    
//           // Loop through properties in req.body and update student object
//           for (const key in req.body) {
//             if (key !== 'Pimage') {
//               student[key] = req.body[key];
//             }
//           }
         
//           console.log(req.file);

//           if (req.file) {
//             // if (student.Pimage) {
//             //   fs.unlinkSync(path.join(__dirname, '..', student.Pimage));
//             // }
//             student.Pimage = student.avatarPath+ '/' + req.file.filename;
//           }

//           await student.save();
//           return res.redirect('/');
//         } catch (err) {
//           console.error(err);
//           return res.status(500).send('Internal Server Error');
//         }

//       } else {
//         return res.status(401).send('Unauthorized');
//       }
// });

//logout
router.delete('/logout', studentAuth, (req, res) => {
    req.student.removeToken(req.token)
        .then(() => {
            res.status(200).send();
        })
        .catch((err) => {
            res.status(400).send();
        });
});


// Fill profile
router.post('/fill-profile', studentAuth, (req, res) => {
    var {education, work, mobileNumber, location} = _.pick(req.body, ['education', 'work', 'mobileNumber', 'location']);

    var student = req.student;
    
    student.education = education;
    student.work = work;
    student.mobileNumber = mobileNumber;
    student.location = location;

    student.save()
        .then(() => {
            res.send("success");
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});


// Get list of events
router.get('/events', studentAuth, (req, res) => {
    
    Event
        .find({
            organiserId : req.student.collegeId,
            date: { $gte : new Date()}
        })
        .then((events) => {
            res.send(events)
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


// For getting full profile of a particular event
router.get('/events/:id', studentAuth, (req, res) => {
    var eventId = req.params.id;
    
    Event
        .findOne({
            _id: eventId,
            organiserId: req.student.collegeId
        })
        .then((event) => {
            event.populate('attendees', ['firstName'])
                .execPopulate(function (err, event){
                    if(err){
                        res.status(500).send(err);
                    }
                    res.send({event})
                });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});



router.post('/attend-event/:id', studentAuth, (req, res) =>{
    res.status(403).send({"err" : "Student cannot attend events."});  
});


// post job
router.post('/jobs', studentAuth, (req, res) => {
    res.status(403).send({"err" : "Student cannot post jobs."});
});


router.get('/jobs', studentAuth, (req, res) => {
    var params = {};

    params.collegeId = req.student.collegeId;

    if("search" in req.query && req.query["search"]){
        params["$text"] = { $search: req.query["search"] }
    }
    
    Job
        .find(params)
        .then((jobs) => {
            res.send(jobs);
        })
        .catch((err) => {
            res.status(400).send(err)
        }); 
});

router.get('/jobs/:id', studentAuth, (req, res) => {
    var jobId = req.params.id;

    Job 
        .findOne({
            _id: jobId,
            collegeId: req.student.collegeId
        })
        .then((jobs) => {
            res.send(jobs);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


router.post('/interviews', studentAuth, (req, res) => {
    res.status(403).send({"err": "Students cannot post interviews."})
});


router.get('/interviews', studentAuth, (req, res) => {
    var params = {};

    params.collegeId = req.student.collegeId;

    if("search" in req.query && req.query["search"]){
        params["$text"] = { $search: req.query["search"] }
    }

    Interview
        .find(params)
        .then((interviews) => {
            res.send(interviews);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
});

router.get('/interviews/:id', studentAuth, (req, res) => {
    var interviewId = req.params.id;

    Interview
        .findOne({
            _id: interviewId,
            collegeId: req.student.collegeId
        })
        .then((interview) => {
            res.send(interview);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});



module.exports = router;


