import express from "express";
import { createUser } from "../model/AdminModel.js";
const router = express.Router();

router.all("*", (req, res, next) => {
  next();
});

router.post("/",async(req,res)=>{
    try {
        const newUser={
            fName="sandesh",
            lName="adhikari".
            email="sandeshadhakari@gmail.com"
        }
        const result = await createUser(newUser);
        if (result?._id) {
            return res.json({
              status: "success",
              message: "create admin user success",
              result,
            });
          }
          res.json({ status: "error", message: "invalid admin user detail" });
    } catch (error) {
        if (error.message.includes("duplicate key error collection")) {
            return res.json({ status: "error", message: "This email already exist" });
          }
          throw new Error(error.message);
    }
})
export default router;