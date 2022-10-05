// Imports
import * as yup from "yup";

// Regex
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&=+_-])[A-Za-z\d@$!%*?&=+_-]{8,}$/;

// Schema
const UserSchema = yup.object({

  // Email
  Name: yup
  .string()
  .required("*Udfyld venligst brugernavn")
  .max(100, "*Brug venligst ikke mere end 100 karaktere"),
  //.email("*Please only use characters that fits into a mail")
  //.matches(emailRegex, "*Please only use correct characters"),

  // Password
  Password: yup
  .string()
  .required("*Udfyld venligst kodeord")
  //.min(4, "*Brug venligst mindst 4 karaktere")
  .max(100, "*Brug venligst ikke mere end 100 karaktere")
  //.matches(passwordRegex, "*Brug venligst mindst et stort bogstav, et lille bogstav, et tal og en speciel karakter. F.eks. @$!%*?&=+_-"),
});

export default UserSchema;