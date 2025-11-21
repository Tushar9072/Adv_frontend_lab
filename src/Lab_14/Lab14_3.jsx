// Lab14_3.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Lab14_3 = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", phone: "" },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, "First name must contain only letters")
        .required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone must be exactly 10 digits")
        .required("Phone is required"),
    }),
    onSubmit: (values) => {
      console.log("Name/phone form:", values);
      alert("Form submitted!");
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 3, maxWidth: 450, width: "100%" }} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Contact Form
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Lab14_3;
