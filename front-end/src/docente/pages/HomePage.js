import './style.css';
import rocketImg from '../assets/rocket.png';
import { Signup } from '../components/RegistroDocente/Signup';

function HomePage() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
        <div className="col-md-5">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default HomePage;