import React, { useEffect } from "react";
import { useState } from "react";
import {
  getCiudad,
  getPais, getProvincia,
} from "../../services/getPais";
//import inscripcion from "../assets/img/inscrip.jpg";
import { NavbarRedes } from "../components/navbar/NavbarRedes";
import { formValidations } from "../helpers/getValidation";
import { useForm } from "../hooks/useForm";

const formData = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  cedula: "",
  direccion: "",
  celular: "",
  password2: "",
  pais: "Pais",
  provincia: "Provincia",
  ciudad: "Ciudad",
  edad: "Edad",
  curso: "Cursos",
  entero: "¿Como se entero?",
  sexo: "",
  terminos: "",
};

function RegistroPage() {
  const [page, setPage] = React.useState(1);
  const validation = formValidations;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paises, setPaises] = useState([]);
  const [estados, setEstados] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  const obtenerPais = async () => {
    const {data} = await getPais();
    setPaises(data);
  };

  const obtenerEstado = async (codigoPais) => {
    const data = await getProvincia(codigoPais);
    setEstados(data);
  };

  const obtenerCiudad = async (codigoPais, codigoEstado) => {
    const data = await getCiudad(codigoPais, codigoEstado);
    console.log(data);
    setCiudades(data);
  };

  const { onInputChange, formState, formValidation, onResetForm, isFormValid } =
    useForm(formData, validation);

  useEffect(() => {
    obtenerPais();
    if (formState.pais !== "Pais") {
      obtenerEstado(formState.pais);
    }
    if (formState.provincia !== "Provincia") {
      obtenerCiudad(formState.pais, formState.provincia);
    }
  }, [formState]);


  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };


  const Registrar = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (isFormValid) {
      console.log(formState);
      setFormSubmitted(false);
      onResetForm();
    }
    
  };

  return (
    <div className="row ">
      <NavbarRedes />
      <div className=" col-md-6 col-xs-12 image-form">
        <img width="100%" height="100%" src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622658/modulomocc/home/inscrip.jpg" alt="inscripcion" />
      </div>
      <div className="col-md-6 col-xs-12">
        <form className="form" id="form" onSubmit={Registrar}>
          <p className="form-titulo">{page}/2 Regístrate</p>
          {page === 1 && (
            <>
              <div className="form-input myname">
                {/*<label htmlFor="myname">Nombres</label>*/}
                <input
                  type="text"
                  placeholder="Nombres"
                  name="nombre"
                  onChange={onInputChange}
                  value={formState.nombre}
                />
                <p className="mensajeError">
                  {!!formValidation.nombreValid &&
                    formSubmitted &&
                    formValidation.nombreValid}
                </p>
              </div>
              <div className="form-input surname">
                <label htmlFor="surname">Apellidos</label>
                <input
                  type="text"
                  placeholder="Apellidos"
                  name="apellido"
                  onChange={onInputChange}
                  value={formState.apellido}
                />
                <p className="mensajeError">
                  {!!formValidation.apellidoValid &&
                    formSubmitted &&
                    formValidation.apellidoValid}
                </p>
              </div>
              <div className="form-input email">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  onChange={onInputChange}
                  value={formState.email}
                />
                <p className="mensajeError">
                  {!!formValidation.emailValid &&
                    formSubmitted &&
                    formValidation.emailValid}
                </p>
              </div>
              <div className="form-input mobile">
                <label htmlFor="mobile">Cedula</label>
                <input
                  type="number"
                  placeholder="Cedula"
                  name="cedula"
                  onChange={onInputChange}
                  value={formState.cedula}
                />
                <p className="mensajeError">
                  {!!formValidation.cedulaValid &&
                    formSubmitted &&
                    formValidation.cedulaValid}
                </p>
              </div>
              <div className="form-input password">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={onInputChange}
                  value={formState.password}
                />
                <p className="mensajeError">
                  {!!formValidation.passwordValid &&
                    formSubmitted &&
                    formValidation.passwordValid}
                </p>
              </div>
              <div className="form-input repeatPassword">
                <label htmlFor="repeatPassword">Repetir Contraseña</label>
                <input
                  type="password"
                  name="password2"
                  placeholder="Contraseña"
                  onChange={onInputChange}
                  value={formState.password2}
                />
                <p className="mensajeError">
                  {!!formValidation.password2Valid &&
                    formSubmitted &&
                    formValidation.password2Valid}
                </p>
              </div>
              <div className="form-regist-select mb-4">
                <select
                  className="form-select"
                  name="pais"
                  onChange={onInputChange}
                >
                  <option value="Pais">Pais</option>
                  {paises && paises.map((pais) => (
                    <option key={pais.id} value={pais.iso2}>
                      {pais.name}
                    </option> 
                  ))}
                </select>
                <p className="mensajeError">
                  {!!formValidation.paisValid &&
                    formSubmitted &&
                    formValidation.paisValid}
                </p>
              </div>
              <div className="form-boton d-flex justify-content-end ">
                <button type="button" onClick={handleNext}>
                  Siguiente
                </button>
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <div className="form-regist-select mb-4">
                <select
                  className="form-select"
                  name="provincia"
                  onChange={onInputChange}
                >
                  <option value="Provincia">Provincia</option>
                  {estados && estados.map((estado) => (
                    <option key={estado.id} value={estado.iso2}>
                      {estado.name}
                    </option>
                  ))}
                </select>
                <p className="mensajeError">
                  {!!formValidation.provinciaValid &&
                    formSubmitted &&
                    formValidation.provinciaValid}
                </p>
              </div>
              <div className="form-regist-select mb-4">
                <select
                  className="form-select"
                  name="ciudad"
                  onChange={onInputChange}
                >
                  <option value="Ciudad">Ciudad</option>
                  {ciudades && ciudades.map((ciudad) => (
                    <option key={ciudad.id} value={ciudad.id}>
                      {ciudad.name}
                    </option> 
                  ))}
                </select>
                <p className="mensajeError">
                  {!!formValidation.ciudadValid &&
                    formSubmitted &&
                    formValidation.ciudadValid}
                </p>
              </div>
              <div className="form-regist-select mb-4">
                <select
                  className="form-select"
                  name="edad"
                  onChange={onInputChange}
                >
                  <option value="Edad">Edad</option>
                  <option value="18">Menos a 18 </option>
                  <option value="25">18 a 25</option>
                  <option value="35">26 a 35</option>
                  <option value="45">36 a 45</option>
                  <option value="100">Mayor a 45</option>
                </select>
                <p className="mensajeError">
                  {!!formValidation.edadValid &&
                    formSubmitted &&
                    formValidation.edadValid}
                </p>
              </div>
              <div className="form-input mobile">
                <label htmlFor="mobile">Direccion</label>
                <input
                  type="text"
                  placeholder="Direccion"
                  name="direccion"
                  onChange={onInputChange}
                  value={formState.direccion}
                />
                <p className="mensajeError">
                  {!!formValidation.direccionValid &&
                    formSubmitted &&
                    formValidation.direccionValid}
                </p>
              </div>
              <div className="form-input mobile">
                <label htmlFor="mobile">Celular</label>
                <input
                  type="number"
                  placeholder="Celular"
                  name="celular"
                  onChange={onInputChange}
                  value={formState.celular}
                />
                <p className="mensajeError">
                  {!!formValidation.celularValid &&
                    formSubmitted &&
                    formValidation.celularValid}
                </p>
              </div>
              <div className="form-regist-select mb-4">
                <select
                  className="form-select"
                  name="curso"
                  onChange={onInputChange}
                >
                  <option value="Cursos">Cursos</option>
                  <option value="A">Category A</option>
                  <option value="B">Category B</option>
                </select>
                <p className="mensajeError">
                  {!!formValidation.cursoValid &&
                    formSubmitted &&
                    formValidation.cursoValid}
                </p>
              </div>
              <div className="form-regist-select mb-4">
                <select
                  className="form-select"
                  name="entero"
                  onChange={onInputChange}
                >
                  <option value="¿Como se entero?">¿Como se entero?</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Anuncio">Anuncio</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Volante">Volante</option>
                  <option value="Youtube">Youtube</option>
                </select>
                <p className="mensajeError">
                  {!!formValidation.enteroValid &&
                    formSubmitted &&
                    formValidation.enteroValid}
                </p>
              </div>
              <div className="form-regist-radio mb-4 row">
                <div className="col-6">
                  <input
                    type="radio"
                    id="Masculino"
                    value="Masculino"
                    name="sexo"
                    onChange={onInputChange}
                  />
                  <label htmlFor="Masculino">Masculino</label>
                </div>
                <div className="col-6">
                  <input
                    type="radio"
                    id="Femenino"
                    value="Femenino"
                    name="sexo"
                    onChange={onInputChange}
                  />
                  <label htmlFor="Femenino">Femenino</label>
                </div>
                <p className="mensajeError">
                  {!!formValidation.sexoValid &&
                    formSubmitted &&
                    formValidation.sexoValid}
                </p>
              </div>
              <div className=" row mb-4 gap-2 ">
                <div className="">
                  <input
                    type="checkbox"
                    name="terminos"
                    id="terminos"
                    value="Terminos"
                    onChange={onInputChange}
                  />
                  <a href="/terminos" target="_blank" rel="noreferrer">
                    He Leído y Acepto los Términos y Condiciones{" "}
                  </a>
                  <p className="mensajeError">
                    {!!formValidation.terminosValid &&
                      formSubmitted &&
                      formValidation.terminosValid}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-boton ">
                  <button type="button" onClick={handlePrev}>
                    Atras
                  </button>
                </div>
                <div className="form-boton ">
                  <button type="Submit">Registrar</button>
                </div>
              </div>
            </>
          )}
          <p className="mensajeCorrecto"></p>
        </form>
      </div>
    </div>
  );
}

export default RegistroPage;
