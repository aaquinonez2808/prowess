import rocketImg from '../assets/rocket.png';
import logo from '../assets/logo.png'
import { Signup } from '../components/RegistroDocente1/Signup';

function HomePage() {
  return (
    <body>
      
      <aside>
      <div className='d-flex justify-content-between p-2 align-content-center nav_bar'>
      <img src={logo} alt={"logo"} className='logo' />
      </div><br/>
        <div>
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </aside>
        <main>
        <div className="container mt-1">
          <div className="row">
            <div className="col-md-9">
              <Signup />
            </div>
          </div>
        </div>
        </main>
    </body>
  );
}

export default HomePage;