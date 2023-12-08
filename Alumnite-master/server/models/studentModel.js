const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const ProfileImage_PATH = path.join('/uploads/users/avatars');

const StudentSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    // verificationCode:{
    //     type: String
    // },
    // collegeId : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'College',
    //     required: true
    // },
    // adminId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Admin',
    //     required: true
    // },
    startYear:{
        type: Number,
        required: true
    },
    endYear: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    rollNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },

    // isVerified: {
    //     type: Boolean,
    //     default: false
    // },

    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required:true
        }
    }],

    // education: [
    //     {
    //         startYear: {
    //             type: String,
    //             trim: true
    //         },
    //         endYear: {
    //             type: String,
    //             trim: true
    //         },
    //         course: {
    //             type: String,
    //             trim: true
    //         },
    //         school: {
    //             type: String,
    //             trim: true
    //         }
    //     }
    // ],

    // workExperiences: [
    //     {
    //         startYear: {
    //             type: String
    //         },
    //         endYear: {
    //             type: String
    //         },
    //         company: {
    //             type: String,
    //             trim: true
    //         },
    //         workTitle: {
    //             type: String,
    //             trim: true
    //         },
    //         industry: {
    //             type: String,
    //             trim: true
    //         }
    //     }
    // ],

    mobileNumber: {
        type: Number
    },

    // location: {
    //     city: {
    //         type: String,
    //         trim: true
    //     },
    //     state: {
    //         type: String,
    //         trim: true
    //     },
    //     country: {
    //         type: String,
    //         trim: true
    //     },
    //     coordinates:{
    //         langitude: {
    //             type: Number
    //         },
    //         latitude:{
    //             type: Number
    //         }
    //     }
    // },
    socialProfiles: {
        linkedin: {
            type: String
        },
        github: {
            type: String
        }
    },
    Pimage: {
        type: String
    },
    skills: [{
        type: String,
        trim: true
    }]
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..' , ProfileImage_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  //statics methods 
StudentSchema.statics.uploadedAvatar = multer({ storage: storage }).single('Pimage');
StudentSchema.statics.avatarPath = ProfileImage_PATH;

StudentSchema.methods.generateAuthToken = function(){
    var student = this;
    var access = 'auth';

    var token = jwt.sign({_id: student._id.toHexString(), access, type: 'student'}, process.env.tokenSecretKey).toString();

    student.tokens.push({access, token});

    return student.save().then(() =>{
        return token;
    });
}

StudentSchema.methods.generateVerificationCode = function () {
    const student = this;
    const verificationCode = crypto.randomBytes(3).toString('hex'); // Change the length as needed
    student.verificationCode = verificationCode;
    return verificationCode;
  };

StudentSchema.statics.findByToken = function(token){
    var Student = this;
    var decoded;

    try {
        decoded = jwt.verify(token, process.env.tokenSecretKey);
    } catch(err) {
        return Promise.reject();
    }

    return Student.findOne({
        '_id' : decoded._id,
        'tokens.token' : token,
        'tokens.access' : 'auth'
    });
}

StudentSchema.methods.removeToken = function(token){
    var student = this;

    return student.update({
        $pull : {
            tokens : {
                token : token
            } 
        }
    });
}


const Student = mongoose.model('Student', StudentSchema);
module.exports = {Student};