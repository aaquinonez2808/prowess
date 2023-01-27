import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Curso = ({ curso }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <NavLink to={`/cursos/${curso.tipo}/${curso.id}`} className="nav-link">
        <div className="card-body">
          <h5 className="card-title mb-0">{curso.nombre}</h5>
        </div>
        <div class="imagen-contenido-curso flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src={curso.imagenCurso}
                className="img-fluid card-img"
                alt="..."
              />
            </div>
            <div class="flip-card-back">
              <p class="title">{curso.aprender[0]}</p>
              {curso.aprender.map((item, index) => {
                if (index < 1 || index > 4) return <></>;

                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

/*  MOODLE

const Curso = ({ curso }) => {
  const [urlImg, setUrlImg] = useState("");

  const _getImg = () => {
    if (curso.overviewfiles.length > 0)
      setUrlImg(`${curso.overviewfiles[0].fileurl}`.replace("/webservice", ""));
  };

  useEffect(() => {
    _getImg();
  });
  
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <NavLink
        to={`/cursos/${curso.categoryname}/${curso.id}`}
        className="nav-link"
      >
        <div className="card-body">
          <h5 className="card-title mb-0">{curso.fullname}</h5>
        </div>
        <div className="imagen-contenido-curso">
          <img src={urlImg} className="card-img-top imagen-curso" alt="..." />
        </div>
      </NavLink>
    </div>
  );
};

OLD CARD

<div className="card-body">
          <h5 className="card-title mb-0">{curso.nombre}</h5>
        </div>
        <div className="imagen-contenido-curso">
          <img
            src={curso.imagenCurso}
            className="card-img-top imagen-curso"
            alt="..."
          />
        </div>

*/

export default Curso;
