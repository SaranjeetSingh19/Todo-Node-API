import mongoose from "mongoose";

// ** Connecting MongoDB **
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI , { dbName: "Api&Params" })
    .then(() => console.log("DB Connected!"))
    .catch((e) => console.log("Error is:", e));
};

