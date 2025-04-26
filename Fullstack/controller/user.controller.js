import User from "../Model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
const registerUser = async (req, res) => {
  // get data
  // validate
  // check if user already exit
  // create a user in database
  // create a verification token
  // save token in database
  // send token as email to user
  // send success status to user

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({
        message: "User Already exits",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;
    await user.save();

    // send email

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: User.email,
      subject: "Verify your email", // Subject line
      text: `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/verify${token}`,
    };

    await transporter.sendMail(mailOption);

    res.status(200).json({
      message: "User registered succesfully",
      succes: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered ",
      error,
      succes: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  // validate token
  // find user based on token
  // if not
  // set isVerified field to true
  // remove verification token
  // save
  // return repsone

  const { chai } = req.params;
  console.log(chai);
  if (!chai) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  const user = await User.findOne({ verificationToken: chai });
  
};
export { registerUser, verifyUser };
