import jwt from "jsonwebtoken"

export const cookieCreation = (user, res, message, statusCode=201) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message,
    });
}