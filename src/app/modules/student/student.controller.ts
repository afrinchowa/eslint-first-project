import { Request, Response } from "express";
import { StudentServices } from "./student.service";
// import Joi from "joi";
import studentValidationSchema from "./student.validation";

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Students are retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Students is retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: "Something went wrong",
      error: err,
    });
  }
};
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Students is Deleted successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const StudentControllers = {
 
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
