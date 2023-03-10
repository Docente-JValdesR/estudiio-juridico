import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container text-bg-dark rounded-top shadow-lg p-3 ">
      <div className="d-flex align-items-center">
        <div className="container pt-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-6 order-1 order-md-0">
              <hr className="d-md-none bg-secondary" />

              <h4>Contacto</h4>
              <p>
                dirección ficticia 000, Santiago Centro, Región Metropolitana
              </p>
              <p>Teléfono: (1) 2222 3333</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26631.143115853894!2d-70.65852145!3d-33.452096999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0069af23abb%3A0x879d59f409ed4897!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1678380241159!5m2!1ses-419!2scl"
                width={300}
                height={225}
                style={{ border: 0 }}
                allowFullScreen
                title="Servicios Legales"
              ></iframe>
            </div>
            <div className="col-12 col-md-6 order-0 order-md-1">
              <ul className="nav nav-pills justify-content-center flex-column flex-lg-row">
                <li className="nav-item">
                  <strong className="nav-link fw-bold text-white">
                    <h5>Redes Sociales</h5>
                  </strong>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="Noticias">
                        twitter
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="CalendarioAcademico"
                      >
                        instagram
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ActividadesExtracurriculares"
                      >
                        facebook
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ActividadesExtracurriculares"
                      >
                        whatsapp
                      </Link>
                      <li className="nav-item">
                        <Link
                          className="nav-link text-white"
                          to="ActividadesExtracurriculares"
                        ></Link>
                      </li>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <hr className="d-md-none bg-secondary" />
                  <strong className="nav-link fw-bold text-white">
                    <h5>Información</h5>
                  </strong>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="Nosotros#proyecto-educativo"
                      >
                        Terminos y Condiciones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="Nosotros#organigrama-institucional"
                      >
                        Politicas de Privacidad
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <hr className="d-md-none bg-secondary" />
                  <strong className="nav-link fw-bold text-white">
                    <h5>Navegacion</h5>
                  </strong>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#centro-padres"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#centro-estudiantes"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#convivencia-escolar"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#convivencia-escolar"
                      >
                        Testimony
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="ComEdu#convivencia-escolar"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-5 order-2 ">
              <hr className="d-md-none bg-secondary" />
              <p className="mt-2 pt-2 mt-md-5 pt-md-5">
                Servicios Legales Sociedad Anónima © 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
