import React from "react";

const FormTeacher = () => {
  return (
    <form className="row g-1 w-50 m-auto">
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Nombre del Docente
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Apellido del Docente
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Departamento
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Area de Conocimiento
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">
          Cedula del Docente
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-12">
        <label>Medios de Comunicacion</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            zoom
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            meet
          </label>
        </div>
        <div className="form-check">
          <input
            className ="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            teams
          </label>
        </div>
      </div>

      <div className="mt-2 col-12 d-flex justify-content-end">
        <button type="submit" className="btn btn-success">
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default FormTeacher;
