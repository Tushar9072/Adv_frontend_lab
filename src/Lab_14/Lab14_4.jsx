// Lab14_4.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";

const hobbiesOptions = ["Reading", "Sports", "Music", "Gaming"];

const Lab14_4 = () => {
  const formik = useFormik({
    initialValues: {
      studentFirstName: "",
      studentLastName: "",
      studentEmail: "",
      studentMobile: "",
      studentSemester: "",
      studentBranch: "",
      studentEnrollment: "",
      studentHobbies: [],
    },
    validationSchema: Yup.object({
      studentFirstName: Yup.string().required(
        "Student first name is required"
      ),
      studentLastName: Yup.string(),
      studentEmail: Yup.string()
        .email("Invalid email")
        .required("Student email is required"),
      studentMobile: Yup.string()
        .matches(/^\d{10}$/, "Mobile must be 10 digits")
        .required("Student mobile is required"),
      studentSemester: Yup.number()
        .typeError("Semester must be a number")
        .min(1, "Minimum semester is 1")
        .max(8, "Maximum semester is 8")
        .required("Semester is required"),
      studentBranch: Yup.string()
        .oneOf(["CSE", "MECH", "CIVIL"], "Branch must be CSE, MECH or CIVIL")
        .required("Branch is required"),
      studentEnrollment: Yup.string()
        .matches(/^\d{12}$/, "Enrollment must be 12 digits")
        .required("Enrollment is required"),
      studentHobbies: Yup.array()
        .min(1, "Select at least one hobby")
        .required("Select at least one hobby"),
    }),
    onSubmit: (values) => {
      console.log("Student registration:", values);
      alert("Student Registered!");
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = formik;

  // Custom handler for hobbies checkbox group
  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    const current = values.studentHobbies;
    if (checked) {
      setFieldValue("studentHobbies", [...current, value]);
    } else {
      setFieldValue(
        "studentHobbies",
        current.filter((hobby) => hobby !== value)
      );
    }
  };

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 3, maxWidth: 600, width: "100%" }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Student Registration
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Student First Name"
            name="studentFirstName"
            value={values.studentFirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.studentFirstName && Boolean(errors.studentFirstName)}
            helperText={touched.studentFirstName && errors.studentFirstName}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Student Last Name"
            name="studentLastName"
            value={values.studentLastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.studentLastName && Boolean(errors.studentLastName)}
            helperText={touched.studentLastName && errors.studentLastName}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Student Email"
            name="studentEmail"
            type="email"
            value={values.studentEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.studentEmail && Boolean(errors.studentEmail)}
            helperText={touched.studentEmail && errors.studentEmail}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Student Mobile"
            name="studentMobile"
            value={values.studentMobile}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.studentMobile && Boolean(errors.studentMobile)}
            helperText={touched.studentMobile && errors.studentMobile}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Student Semester"
            name="studentSemester"
            type="number"
            value={values.studentSemester}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.studentSemester && Boolean(errors.studentSemester)}
            helperText={touched.studentSemester && errors.studentSemester}
          />

          <TextField
            select
            fullWidth
            margin="normal"
            label="Student Branch"
            name="studentBranch"
            value={values.studentBranch}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.studentBranch && Boolean(errors.studentBranch)}
            helperText={touched.studentBranch && errors.studentBranch}
          >
            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="MECH">MECH</MenuItem>
            <MenuItem value="CIVIL">CIVIL</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            label="Student Enrollment"
            name="studentEnrollment"
            value={values.studentEnrollment}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              touched.studentEnrollment && Boolean(errors.studentEnrollment)
            }
            helperText={touched.studentEnrollment && errors.studentEnrollment}
          />

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Student Hobbies</Typography>
            <FormGroup row>
              {hobbiesOptions.map((hobby) => (
                <FormControlLabel
                  key={hobby}
                  control={
                    <Checkbox
                      value={hobby}
                      checked={values.studentHobbies.includes(hobby)}
                      onChange={handleHobbyChange}
                      name="studentHobbies"
                    />
                  }
                  label={hobby}
                />
              ))}
            </FormGroup>
            {touched.studentHobbies && errors.studentHobbies && (
              <FormHelperText error>
                {errors.studentHobbies}
              </FormHelperText>
            )}
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Register Student
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Lab14_4;
