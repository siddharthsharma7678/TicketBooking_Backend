import mongoose from "mongoose";

const mongoconnect = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {})
      .then(() => console.log("Mongodb connected successfully"))
      .catch((e) => {
        console.error(e);
      });
  } catch (e) {
    console.log(e.message);
  }
};
export default mongoconnect;
