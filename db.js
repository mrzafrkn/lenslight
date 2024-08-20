import mongoose from "mongoose";

export const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "lenslight",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to DB successfully!"))
    .catch((err) => console.log(`DB connection error: ${err}`));
};
