import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
      // creating a schema validation byu Zod validation
  
      const {password, student:studentData } = req.body;
      
      const result = await UserServices.createStudentIntoDB(password, studentData);
     
  
      res.status(200).json({
        success: true,
        message: "User is created successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const UserControllers ={
    createStudent,
  }