import { User } from "../models/users.model.js";
import { cookieCreation } from "../utils/features.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  const isMatch = password === user.password; 

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  cookieCreation(user, res, `Welcome back ${user.name}`, 200);
  console.log("Login Successfully!!!");
};

export const registerNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User already exist",
    });

  user = await User.create({ name, email, password });

  cookieCreation(user, res, "Registered Successfully", 201);
};

export const getMyProfile = (req, res) => {
  const id = "myId";

  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      user: req.user,
    });
};
