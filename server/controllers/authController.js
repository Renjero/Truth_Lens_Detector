import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const RegisterUser = async (req, res) => {

  // cheak if all feilding coming?

  const { name, email, phone, password } = req.body;

  if (!name || !email || !password) {

    res.status(409);

    throw new Error("Please full all details");

  }

  // cheak if user exists or not

  const emailExist = await User.findOne({ email });

  const phoneExist = await User.findOne({ phone });

  if (emailExist || phoneExist) {

    res.status(409);

    throw new Error("User is Already Exists!");

  }

  // hash password

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(password, salt);

  // Store hash in your password DB

  res.status(201).json(
    await User.create({
      name,
      email,
      phone,
      password: hashedPassword
    })
  );

};


const loginUser = async (req, res) => {

  // res.send("User logged in...");

  // cheak if password and username is coming?

  const { email, password } = req.body || {};

  if (!email || !password) {

    res.status(409);

    throw new Error("Please full all details");

  }

  // if user exists

  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {

    res.status(200).json({

      name: user.name,

      email: user.email,

      phone: user.phone,

      createdAt: user.createdAt,

      token: generateToken(user.id)

    });

  } else {

    res.status(401);

    throw new Error("invaild");

  }

};


const getMyProfile = async (req, res) => {
  res.status(200).json(req.user);
};


const updateProfile = async (req, res) => {


// can not change user type if its comes from body//
const {userType} = req.body

if(userType){
  res.status(401)
  throw new Error("only admin can change")
}

  // cheak if usser is same
  let user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user Not Found");
  }

  const updateUser = await User.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  );

  if (!updateUser) {
    res.status(409);
    throw new Error("user Not updated");
  } 
  res.status(200).json(updateUser);

};


// JWT TOKEN

const generateToken = (id) => {

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d"
    }
  );

};


const authService = {

  RegisterUser,

  loginUser,

  getMyProfile,

  updateProfile

};

export default authService;














// // // import User from ""

// import User from "../models/userModel.js";



// const RegisterUser = async (req, res) => {

//   const { name, email, phone, password } = req.body

//   if ( !name || !email || !phone || !password) {
//     res.status(409)
//     throw new Error("Please full all details");
//   }


//   const emailExist = await User.findOne({email})
//   const phoneExist = await User.findOne({phone})

//   if(emailExist || phoneExist){
//     res.status(409)
//     throw new Error("User is Already Exists!")
//   }

//   if(!User){
//     res.status(409)
//     throw new Error("User Nor Registed")
//   }

//   res.status(201).json(User)
// };


// const loginUser = async (req, res) => {
//   res.send("User  logged in...");
// };

// const authService = {
//   RegisterUser,
//   loginUser,
// };

// export default authService;
