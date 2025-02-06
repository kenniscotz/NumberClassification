import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT | 4000;

// Starting the server

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
