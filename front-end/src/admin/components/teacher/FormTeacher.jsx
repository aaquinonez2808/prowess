import React, { useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const FormTeacher = () => {
  const [nextPage, setNextPage] = React.useState(false);
  const [contHorarios, setContHorarios] = React.useState(0);
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
    horarios: [
      {
        dia: "",
        horaInicio: "",
        horaFinal: "",
      },
    ],
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validates = (values) => {
    let errors = {};
    console.log(values);
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
      {({ values }) => (
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
              <FieldArray
                name="horarios"
                render={(arrayHelpers) => (
                  <div>
                    {values.horarios.map((horario, index) => {
                      if (index === contHorarios) {
                        return (

                          <div className="col-md-12" key={index}>
                            <div>
                              <div className="col-md-4">
                                <label
                                  htmlFor={`horarios[${index}].dia`}
                                  className="form-label"
                                >
                                  Dia
                                </label>
                                <Field
                                  component="select"
                                  id="dia"
                                  name={`horarios[${index}].dia`}
                                  className="form-select"
                                >
                                  <option value="">Seleccione</option>
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
                                <label
                                  htmlFor={`horarios[${index}].horaInicio`}
                                  className="form-label"
                                >
                                  Hora Inicial
                                </label>
                                <Field
                                  type="time"
                                  id={`horarios[${index}].horaInicio`}
                                  name={`horarios[${index}].horaInicio`}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <label
                                  htmlFor={`horarios[${index}].horaFinal`}
                                  className="form-label"
                                >
                                  Hora Final
                                </label>
                                <Field
                                  type="time"
                                  id={`horarios[${index}].horaFinal`}
                                  name={`horarios[${index}].horaFinal`}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-4">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  onClick={() => {
                                    arrayHelpers.push({
                                      dia: "",
                                      horaInicio: "",
                                      horaFinal: "",
                                    });
                                    console.log(values.horarios);
                                    setContHorarios(contHorarios + 1);
                                  }}
                                >
                                  Agregar Horario
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      } else {
                        return <div key={index}>

                        </div>;
                      }
                    })}
                  </div>
                )}
              />
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
                    {
                      values.horarios.map((horario, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                {horario.dia === "Lunes"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                              <td>
                                {horario.dia === "Martes"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                              <td>
                                {horario.dia === "Miercoles"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                              <td>
                                {horario.dia === "Jueves"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                              <td>
                                {horario.dia === "Viernes"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                              <td>
                                {horario.dia === "Sabado"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                              <td>
                                {horario.dia === "Domingo"
                                  ? `${horario.horaInicio} - ${horario.horaFinal}`
                                  : ""}
                              </td>
                            </tr>
                          );
                      })
                    }
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
                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormTeacher;
