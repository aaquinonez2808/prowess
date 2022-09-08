import React, { useEffect} from "react";
import { Formik, Form, Field, FieldArray } from "formik";

export const Signup = () => {
  const [nextPage, setNextPage] = React.useState(false);
  useEffect(() => {
    
    console.log("nextPage", nextPage);
  }, [nextPage]);
  const initialValues = {
    name: "",
    lastname: "",
    departament: "",
    area: "",
    cedula: "",
    medios: [],
    horarios:[
      {
        dia:"",
        horaInicial:"",
        horaFinal:""
      }
    ]
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validates = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    }
    if (!values.departament) {
      errors.departament = "Required";
    }
    if (!values.area) {
      errors.area = "Required";
    }
    if (!values.cedula) {
      errors.cedula = "Required";
    }
    return errors;
  };

  const handleNextSubmit = () => {
    setNextPage(true);
  };
  const handlePrevSubmit = () => {
    console.log("prev");
    setNextPage(false);
  };
  const handleAddHorario = () => {
    console.log("add horario");
  };
  

  return (
    <Formik
      initialValues={initialValues}
      validate={validates}
      onSubmit={onSubmit}
    >
      {
        ({values}) => (
          <Form className="row g-1 w-50 m-auto gap-xl-2">
        {!nextPage ? (
          <>
            <div className="col-md-12">
              <label htmlFor="idName" className="form-label">
                Nombre del Docente
              </label>

              <Field
                type="text"
                className="form-control"
                id="idName"
                name="name"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="idLastname" className="form-label">
                Apellido del Docente
              </label>
              <Field
                type="text"
                className="form-control"
                id="idLastname"
                name="lastname"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="idDepartament" className="form-label">
                Departamento
              </label>
              <Field
                type="text"
                className="form-control"
                id="idDepartament"
                name="departament"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="idArea" className="form-label">
                Area de Conocimiento
              </label>
              <Field
                type="text"
                className="form-control"
                id="idArea"
                name="area"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="idCedula" className="form-label">
                Cedula del Docente
              </label>
              <Field
                type="text"
                className="form-control"
                id="idCedula"
                name="cedula"
              />
            </div>
            <div className="col-md-12">
              <label>Medios de Comunicacion</label>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="zoom"
                  id="idZoom"
                  name="medios"
                />
                <label className="form-check-label" htmlFor="idZoom">
                  zoom
                </label>
              </div>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="meet"
                  id="idMeet"
                  name="medios"
                />
                <label className="form-check-label" htmlFor="idMeet">
                  meet
                </label>
              </div>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="teams"
                  id="idTeams"
                  name="medios"
                />
                <label className="form-check-label" htmlFor="idTeam">
                  teams
                </label>
              </div>
            </div>

            <div className="mt-2 col-12 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleNextSubmit}
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <>
          <FieldArray name="horarios">
            {
              ({insert, remove, push}) => (
                <div className="col-md-12">
                  {
                    values.horarios.length>0 && values.horarios.map((horario, index) => (
                      <div key={index}>
                      <div className="col-md-4">
                          <label htmlFor={`horarios.${index}.dia`} className="form-label">
                            Dia
                          </label>
                          <Field
                            component="select"
                            id="dia"
                            name={`horarios.${index}.dia`}
                            className="form-select"
                          >
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sabado">Sabado</option>
                            <option value="Domingo">Domingo</option>
                          </Field>
                        </div>
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                          <label htmlFor="horainicial" className="form-label">
                            Hora Inicial
                          </label>
                          <Field
                            type="time"
                            id="horaInicio"
                            name="horaInicio"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="horaFinal" className="form-label">
                            Hora Final
                          </label>
                          <Field
                            type="time"
                            id="horaFinal"
                            name="horaFinal"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleAddHorario}
                          >
                            Agregar Horario
                          </button>
                        </div>
                      </div>
                    ))

                  }
                </div>
              )
            }
            </FieldArray>
            <div className="col-md-12 mt-5">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Lunes</th>
                  <th scope="col">Martes</th>
                  <th scope="col">Miercoles</th>
                  <th scope="col">Jueves</th>
                  <th scope="col">Viernes</th>
                  <th scope="col">Sabado</th>
                  <th scope="col">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8:00-9:00</td>
                  <td>8:00-9:00</td>
                  <td>8:00-9:00</td>
                  </tr>
              </tbody>
            </table>
            </div>
            <div className="mt-2 col-12 d-flex justify-content-end gap-3">
              <button
                type="submit"
                className="btn btn-danger" 
                onClick={handlePrevSubmit}
              >
                Anterior
              </button>
              <button
                type="submit"
                className="btn btn-success"
              >
                Guardar
              </button>
            </div>
            
          </>
        )
        }
      </Form>
        )
      }
    </Formik>
  );
};

// import React, { useEffect, useNavigate } from 'react';
// import { Formik, Form } from 'formik';
// import { Field} from "formik";
// import { TextField } from './TextField';
// import * as Yup from 'yup';

// export const Signup = ({ navigation }) => {
//   const [nextPage, setNextPage] = React.useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
    
//     console.log("nextPage", nextPage);
//   }, [nextPage]);

//    const validate = Yup.object({  
//     nombre: Yup.string()
//     .min(3, 'Debe tener 15 caracteres o menos')
//     .max(15, 'Debe tener 15 caracteres o menos')
//     .required('Requerido'),
//     apellido: Yup.string()
//       .max(20, 'Debe tener 20 caracteres o menos')
//       .required('Requerido'),
//     departamento: Yup.string()
//       .max(20, 'Debe tener 20 caracteres o menos')
//       .required('Requerido'),
//     areaConocimiento: Yup.string()
//       .max(20, 'Debe tener 20 caracteres o menos')
//       .required('Requerido'),
//     cedula: Yup.string()
//       .min(6, 'La cedula debe tener 10 caracteres')
//       .required('La cedula es requerida'),
//     checked:  Yup.boolean()
//       .oneOf([true], "Debe seleccionar al menos una de las opciones"),      
//     })
//     const handleNextSubmit = () => {
//       setNextPage(true);
//     };
//   return (
//     <Formik
//       initialValues={{
//         nombre: '',
//         apellido: '',
//         departamento: '',
//         areaConocimiento: '',
//         cedula: '',
//         checked: [],
//       }}
//       validationSchema={validate}
//       onSubmit={values => {
//         this.handleSubmit(values)
//       }}
      
//     >
//       {(formik) => {
//         const {isValid, dirty } = formik;
//         return(
//         <div>
//           <h1 className="my-4 font-weight-bold .display-4">Registro Docente</h1>
//           <Form onSubmit={formik.handleSubmit}>
//             <TextField onChange={formik.handleChange} label="Nombre" name="nombre" type="text" />
//             <TextField onChange={formik.handleChange} label="Apellido" name="apellido" type="text" />
//             <TextField onChange={formik.handleChange} label="Departamento" name="departamento" type="text" />
//             <TextField onChange={formik.handleChange} label="Area del Conocimiento" name="areaConocimiento" type="text" />
//             <TextField onChange={formik.handleChange} label="Cedula" name="cedula" type="number" /> 
//             <div role="group"   aria-labelledby="checkbox-group">
//             <label>Medios de Comunicacion</label><br/>
//             <label>
//               <Field type="checkbox" onChange={formik.handleChange} name="checked" value="Zoom" />
//               Zoom
//             </label><br/>
//             <label>
//               <Field  type="checkbox" onChange={formik.handleChange} name="checked" value="Meet" />
//               Meet
//             </label><br/>
//             <label>
//               <Field  type="checkbox" onChange={formik.handleChange} name="checked" value="Teams" />
//               Teams
//             </label><br/>
//             </div>   
//             <button className={!(dirty && isValid) ? "disabled-btn btn btn-danger mt-3 ml-3"  : ""}
//                 disabled={!(dirty && isValid) ? "btn btn-danger mt-3 ml-3":""} type="submit" onClick={handleNextSubmit}>Siguiente</button>
//           </Form>
//         </div>);
//       }
//       }
//     </Formik>
//   )
// }
