import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

dbConnect()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR WHILE LISTENING TO SERVER ==> ", error);
      throw error;
    });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Db connection failed ", err);
  });
