import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utlis/generateToken.js";

export const Register = async (req, res) => {
      try {
    const { userName, password, email  } = req.body;
    //check the data coming from frontend is not missing.
    if (!userName || !password || !email ) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }
    //check the email in database
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User is already exits with this email.",
        success: false,
      });
    }
      const newUser =  await User.create({
      userName,
      email,
      password,
     
    });
    const user = await User.findOne({email}).select("-password");
    generateTokenAndSetCookie(res,user._id);


return res.status(201).json({
    message: "User registered successfully.",
    success: true,
});
  } catch (error) {
    console.error(error);
    return res.status(500).json({
            message: "Server error during registration.",
            success: false,
        });
  }
    
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check the data coming from frontend is not missing.
    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }
    //check the email in database
    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User credentials are incorrect.",
        success: false,
      });
    }
    //compare the password
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "User credentials are incorrect.",
        success: false,
      });
    }
    
   generateTokenAndSetCookie(res, existingUser._id);

    return res.status(200).json({
      message: "User logged in successfully.",
      success: true,
      user: existingUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error during login.",
      success: false,
    });
  }
}

export const Logout = async (req, res) => {
  try {
    // Clear the cookie by setting its maxAge to 0
    res.cookie("token", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "User logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error during logout.",
      success: false,
    });
  }
}