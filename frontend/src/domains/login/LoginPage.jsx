import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginPage.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email2').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="form-block">
        <TextField
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <TextField
          id="email"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <Button className="hello" type="submit">Login</Button>
      </form>
    </div>
  );
}
