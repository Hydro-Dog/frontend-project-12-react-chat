import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AppContext } from '../../AppContext';
import { authorize } from '../../services/auth';
import './LoginPage.css';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export function LoginPage() {
  const { setAuthorized } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    navigate('/');
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: ({ username, password }) => {
      if (username && password) {
        return authorize({ username, password }).then(({ data }) => {
          setAuthorized(true);
          localStorage.setItem('jwt', data.token);
        }).catch((err) => {
          console.log(err.response.data.statusCode === 401);
          if (err.response.data.statusCode === 401) {
            const errors = { username: 'INVALID_USERNAME_OR_PASSWORD' };
            console.error(err);
            return errors;
          }
          console.error(err);
          return null;
        });
      }

      return null;
    },
    validateOnChange: false,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="form-block">
        <TextField
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}

        <TextField
          id="email"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <Button className="hello" type="submit">LOGIN</Button>
      </form>
    </div>
  );
}
