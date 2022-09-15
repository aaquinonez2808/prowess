import React from 'react'
import './login.css';
import rocket from '../docente/components/assets/rocket.png';
import logo from '../docente/components/assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from "react-router-dom";


const LoginDocente = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("loginDocente", { replace: true });
    };
  return (
    <div class="App">
    <aside>
        <div class='d-flex justify-content-between p-2 align-content-center nav_bar'>
        <img src={logo} alt={"logo"} className='logo' />
        </div>
    </aside>
    
    <div class="container-fluid ps-md-0">
        <div class="row g-0">
        
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
              
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Inicio de Sesión Docente</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label htmlFor="exampleEmail" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="exampleEmail" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="examplePassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="examplePassword"
                        />
                        </div>
                        <div className="mb-3">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                        </div>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex col-md-4 col-lg-6">
            <img className="img-fluid w-100"  src={rocket} />
          </div>
        </div>
        
      </div>
  </div>
  );
};

export default LoginDocente;