import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
   const validate = Yup.object({  
    nombre: Yup.string()
    .min(3, 'Debe tener 15 caracteres o menos')
    .max(15, 'Debe tener 15 caracteres o menos')
    .required('Requerido'),
    apellido: Yup.string()
      .max(20, 'Debe tener 20 caracteres o menos')
      .required('Requerido'),
    departamento: Yup.string()
      .max(20, 'Debe tener 20 caracteres o menos')
      .required('Requerido'),
    areaConocimiento: Yup.string()
      .max(20, 'Debe tener 20 caracteres o menos')
      .required('Requerido'),
    cedula: Yup.string()
      .min(6, 'La cedula debe tener 10 caracteres')
      .required('La cedula es requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    })
  
  return (
    <Formik
      initialValues={{
        nombre: '',
        apellido: '',
        departamento: '',
        areaConocimiento: '',
        cedula: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Nombre" name="nombre" type="text" />
            <TextField label="Apellido" name="apellido" type="text" />
            <TextField label="Departamento" name="departamento" type="text" />
            <TextField label="Area del Conocimiento" name="areaConocimiento" type="text" />
            <TextField label="Cedula" name="cedula" type="number" />          
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
