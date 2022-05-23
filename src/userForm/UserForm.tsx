import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { initialValues } from "../data/InitialValues";
import { IUserFormInitialValues } from "../interfaces/UserForm";

const UserForm = () => {
  const onSubmit = (values: IUserFormInitialValues) => {
    console.log(values);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit,
    // validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        mt={5}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item mb={3}>
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            variant="outlined"
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </Grid>
        <Grid item mb={3}>
          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            variant="outlined"
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </Grid>
        <Grid item mb={3}>
          <TextField
            label="Email"
            id="email"
            name="email"
            variant="outlined"
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </Grid>
        <Grid item mb={3}>
          <TextField
            label="Address"
            id="address"
            name="address"
            variant="outlined"
            type={"email"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
        </Grid>
        <Grid item mb={3}>
          <TextField
            label="Age"
            id="age"
            name="age"
            variant="outlined"
            defaultValue={18}
            type={"number"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
        </Grid>
        <Grid item mb={3}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default UserForm;
