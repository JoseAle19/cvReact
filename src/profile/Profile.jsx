import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./profile.css";
export const Profile = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="tittle">Perfil </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="homeProfile">
          <div className="containaer contentData">
            <div className="infoPersonal">

              <div className="infoPersonal__image">
                <img src="https://alfabetajuega.com/hero/2022/05/goku-dragon-ball.1651847419.5233.jpg?width=768&aspect_ratio=16:9&format=nowebp" alt="" />
                <ul className="infoPersonal__info">
                  <li>Nombre: <span>JOSE ALEJANDRO </span></li>
                  <li>Apellidos: <span>CRUZ PEREZ</span></li>
                  <li>Edad: <span>21 años</span></li>
                  <li>Ciudad: <span>Comitan de dominguez chiapas, mexico</span></li>
                  <li>Estudio: <span>Licenciatura</span></li>
                </ul>
              </div>
            </div>

            <div className="infoPersonal">
              <div className="images">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Campus_ciitic.jpg" alt="" />
                <img src="https://uem.edu.mx/wp-content/uploads/2021/02/graduacion.jpg" alt="" />
                <img src="https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
