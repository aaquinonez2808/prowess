import React, { useEffect } from "react";

const FormTeacher = () => {
  const [nextPage, setNextPage] = React.useState(false);
  
  useEffect(() => {
    console.log("nextPage", nextPage);
  }, [nextPage]);

  const handleNextSubmit = () => {
    setNextPage(true);
  };
  const handlePrevSubmit = () => {
    console.log("prev");
    setNextPage(false);
  };
  return (
    <form className="row g-1 w-50 m-auto gap-xl-2">
      {!nextPage ? (
        <>
          <div className="col-md-12">
            <label htmlFor="idName" className="form-label">
              Nombre del Docente
            </label>

            <input
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
            <input
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
            <input
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
            <input
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
            <input
              type="text"
              className="form-control"
              id="idCedula"
              name="cedula"
            />
          </div>
          <div className="col-md-12">
            <label>Medios de Comunicacion</label>
            <div className="form-check">
              <input
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
              <input
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
              <input
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
          <div>
            <div className="col-md-12">
              <div>
                <div className="col-md-4">
                  <label htmlFor={`horario.dia`} className="form-label">
                    Dia
                  </label>
                  <select
                    id="dia"
                    name={`horarios.dia`}
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
                  </select>
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-4">
                  <label htmlFor={`horarios.horaInicio`} className="form-label">
                    Hora Inicial
                  </label>
                  <input
                    type="time"
                    id={`horarios.horaInicio`}
                    name={`horarios.horaInicio`}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor={`horarios.horaFinal`} className="form-label">
                    Hora Final
                  </label>
                  <input
                    type="time"
                    id={`horarios.horaFinal`}
                    name={`horarios.horaFinal`}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4">
                  <button type="submit" className="btn btn-primary">
                    Agregar Horario
                  </button>
                </div>
              </div>
            </div>
          </div>
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
              <tbody></tbody>
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
    </form>
  );
};

export default FormTeacher;
