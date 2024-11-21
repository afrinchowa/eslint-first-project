import Joi from "joi";

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/, "capitalize format")
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.max": "First Name cannot be more than 20 characters",
      "string.pattern.name": "{#value} is not capitalize format",
    }),
  middleName: Joi.string()
    .regex(/^[A-Za-z]+$/, "alpha")
    .required()
    .messages({
      "string.empty": "Middle name is required",
      "string.pattern.name": "{#value} is not valid",
    }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last name is required",
  }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.empty": "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.empty": "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    "string.empty": "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    "string.empty": "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    "string.empty": "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    "string.empty": "Mother's contact number is required",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Local guardian's name is required",
  }),
  occupation: Joi.string().required().messages({
    "string.empty": "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    "string.empty": "Local guardian's address is required",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.empty": "Student ID is required",
  }),
  name: userNameValidationSchema.required().messages({
    "any.required": "Student name is required",
  }),
  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.only": "Gender must be 'male', 'female', or 'other'",
    "string.empty": "Gender is required",
  }),
  dateOfBirth: Joi.string().required().messages({
    "string.empty": "Date of birth is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "{#value} is not a valid email type",
  }),
  contactNumber: Joi.string().required().messages({
    "string.empty": "Contact number is required",
  }),
  emergencyContactNo: Joi.string().required().messages({
    "string.empty": "Emergency contact number is required",
  }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .messages({
      "any.only":
        "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', or 'O-'",
    }),
  presentAddress: Joi.string().required().messages({
    "string.empty": "Present address is required",
  }),
  permanentAddress: Joi.string().required().messages({
    "string.empty": "Permanent address is required",
  }),
  guardian: guardianValidationSchema.required().messages({
    "any.required": "Guardian details are required",
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    "any.required": "Local guardian details are required",
  }),
  profileImg: Joi.string().uri().optional().messages({
    "string.uri": "Profile image URL must be a valid URI",
  }),
  isActive: Joi.string().valid("active", "blocked").default("active").messages({
    "any.only": "Status must be 'active' or 'blocked'",
  }),
});
export default studentValidationSchema;
