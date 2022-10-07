// Imports
import * as yup from "yup";

// Regex
const nameRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex = /^[a-zA-Z0-9]*$/;

// Schema
const UserSchema = yup.object({

  // Name
  Name: yup
  .string()
  .required("*Udfyld venligst brugernavn")
  .max(100, "*Brug venligst ikke mere end 100 karaktere")
  .matches(nameRegex, "*Brug venligst kun tal eller bogstaver"),

  // Password
  Password: yup
  .string()
  .required("*Udfyld venligst kodeord")
  .max(100, "*Brug venligst ikke mere end 100 karaktere")
  .matches(passwordRegex, "*Brug venligst kun tal eller bogstaver"),
});

export default UserSchema;