/* eslint-disable */
import React from 'react'
import './login.css';
import rocket from '../assets/rocket.png';
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const defaultState = {
  name:null,
  email:null,
  password:null,
  nameError:null,
  emailError:null,
  passwordError:null
  }
  class CustomFormValidation extends React.Component{
    constructor(){
      super();
      this.state = defaultState;
      this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(event) {
      const target = event.target;
      var value = target.value;
      const name = target.name;
      this.setState({
      [name]: value
      });
      }
      validate(){
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      if(!this.state.name){
      nameError = "Name field is required";
      }
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.state.email || reg.test(this.state.email) === false){
      emailError = "Email Field is Invalid ";
      }
      if(!this.state.password){
      passwordError = "Password field is required";
      }
      if(emailError || nameError || passwordError){
      this.setState({nameError,emailError,passwordError});
      return false;
      }
      return true;
      }
      submit(){
      if(this.validate()){
      console.warn(this.state);
      this.setState(defaultState);
      }
      }
    render(){
      return(
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
                          <h3 class="login-heading mb-4">Inicio de Sesión</h3>
            
                          
                          <form>
                            <div class="form-floating mb-3">
                              <input type="email" class={"form-control " + (this.state.emailError ? 'invalid' : '')} id="floatingInput" name='email' placeholder="name@example.com" value={this.state.email} onChange={this.handleInputChange} />
                              <label for="floatingInput">Email</label>
                              <span class="text-danger">{this.state.emailError}</span>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="password" class={"form-control " + (this.state.passwordError ? 'invalid' : '')} id="floatingPassword" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                              <label for="floatingPassword">Contraseña</label>
                              <span class="text-danger">{this.state.passwordError}</span>
                            </div>
            
                            <div class="form-check mb-3">
                              <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                              <label class="form-check-label" for="rememberPasswordCheck">
                                Recordar contraseña
                              </label>
                            </div>
            
                            <div class="d-grid">
                              <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" onClick={()=>this.submit()}>Acceder</button>
                              <div class="text-center">
                                <a class="small" href="#">¿Olvidaste la contraseña?</a>
                              </div>
                            </div>
            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-md-flex col-md-4 col-lg-6">
                  <img class="img-fluid w-100"  src={rocket} />
                </div>
              </div>
              
            </div>
        </div>
 )  
}
}
export default CustomFormValidation;