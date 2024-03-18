import { app } from "./app.js";
import { connectDB } from "./data/database.data.js";

connectDB();


app.listen(process.env.PORT, () => {
    console.log("Server is running on 4000!!! port");
  });
