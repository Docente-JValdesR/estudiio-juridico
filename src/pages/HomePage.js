import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import IconSocialNetwork from "../../src/components/IconSocialNetwork";
import video1 from "../assets/video1.mp4";
import derechoCivil from "../assets/derecho-civil.jpg";
import derechoLaboral from "../assets/derecho-laboral.jpg";
import derechoPenal from "../assets/derecho-penal.jpg";
import useWindowSize from "../hooks/useWindowSize";

export default function HomePage({ iconos, noticias }) {
  const windowSize = useWindowSize().width;
  const slice = windowSize <= 768 ? 2 : 5;

  const servicios = [
    {
      id: "derechocivil",
      imagen: derechoCivil,
      titulo: "Derecho civil",
      descripcion:
        "Asesoramiento y representación legal en temas relacionados con el derecho de familia, sucesiones, contratos, propiedad, entre otros.",
    },
    {
      id: "derecholaboral",
      imagen: derechoLaboral,
      titulo: "Derecho laboral",
      descripcion:
        "Asesoramiento y representación legal en temas relacionados con el derecho laboral, tales como conflictos colectivos, despidos, seguridad social, entre otros.",
    },
    {
      id: "derechopenal",
      imagen: derechoPenal,
      titulo: "Derecho penal",
      descripcion:
        "Asesoramiento y representación legal en temas relacionados con el derecho penal, tales como delitos económicos, delitos contra las personas, delitos informáticos, entre otros.",
    },
  ];
  //  const navigate = useNavigate();
  //  const handleClick = (servicio) => { navigate(`/services#${servicio}`);};
  const testimonials = [
    {
      name: "Ana García",
      description:
        "¡Increíble experiencia! Nunca antes había estado en un lugar tan hermoso como este. La atención fue excelente y las instalaciones son de primera calidad.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      cargo: "Gerente de Marketing Digital",
    },
    {
      name: "Juan Pérez",
      description:
        "La mejor opción para pasar unas vacaciones inolvidables. Las actividades son muy variadas y divertidas, y el personal es muy amable y servicial.",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      cargo: "Director de Ventas",
    },
    {
      name: "María Fernández",
      description:
        "Un lugar perfecto para relajarse y disfrutar del sol y la playa. Las habitaciones son amplias y cómodas, y la comida es deliciosa.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      cargo: "Ejecutiva de Cuentas",
    },
    {
      name: "Carlos Ramírez",
      description: "Excelente servicio y atención",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      cargo: "Gerente de Operaciones",
    },
    {
      name: "Ana García",
      description:
        "¡Increíble experiencia! Nunca antes había estado en un lugar tan hermoso como este. La atención fue excelente y las instalaciones son de primera calidad.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      cargo: "Gerente de Marketing Digital",
    },
    {
      name: "Juan Pérez",
      description:
        "La mejor opción para pasar unas vacaciones inolvidables. Las actividades son muy variadas y divertidas, y el personal es muy amable y servicial.",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      cargo: "Director de Ventas",
    },
    {
      name: "María Fernández",
      description:
        "Un lugar perfecto para relajarse y disfrutar del sol y la playa. Las habitaciones son amplias y cómodas, y la comida es deliciosa.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      cargo: "Ejecutiva de Cuentas",
    },
    {
      name: "Carlos Ramírez",
      description: "Excelente servicio y atención",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      cargo: "Gerente de Operaciones",
    },
    {
      name: "Ana García",
      description:
        "¡Increíble experiencia! Nunca antes había estado en un lugar tan hermoso como este. La atención fue excelente y las instalaciones son de primera calidad.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      cargo: "Gerente de Marketing Digital",
    },
  ];


  return (
    <div className="" style={{ overflow: "hidden" }}>
      <header className="row" id="header">
        <div className="video-container">
          <video autoPlay muted loop>
            <source src={video1} type="video/mp4" />
          </video>
          <div className="overlay" />
          <div className="text-container row vw-100 vw-lg-0 ms-1 justify-content-center">
            <div className="col-12 col-md-4 ">
              <h1 className="mb-5">Bienvenidos a nuestro estudio jurídico</h1>
              <p>
                Nuestro estudio jurídico está formado por un equipo de abogados
                especializados en diferentes áreas del derecho. Nos
                comprometemos con nuestros clientes para ofrecerles soluciones
                legales efectivas y adaptadas a sus necesidades.
              </p>
              <p>
                En nuestro sitio web encontrarás información detallada sobre los
                servicios que ofrecemos, los profesionales que integran nuestro
                equipo, nuestros valores y nuestra trayectoria. Además, podrás
                ponerte en contacto con nosotros para consultas o solicitar una
                cita.
              </p>
              <p>
                Explora nuestro sitio web y descubre cómo podemos ayudarte en tu
                caso legal.
              </p>
            </div>
            <div class="col-12 col-md-4 div-icon">
              <IconSocialNetwork iconos={iconos} />
            </div>
          </div>
        </div>
      </header>
      <section id="servicios">
        <div className="container text-center py-5">
          <h2 className="py-5">Nuestro Servicios</h2>
          <div className="row justify-content-around">
            {servicios.map((servicio, index) => (
              <div
                className="card border-secondary col-10 col-md-3 shadow rounded servicio p-0 my-3"
                key={index}
                // onClick={() => handleClick(servicio.id)}Agrega el id del servicio como argumento en la función handleClick
              >
                <div className="imagen-servicio">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="img-fluid"
                  />
                </div>
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
              </div>
            ))}
            <div className="col-12 col-md-8">
              <p className="">
                conoce todos nuestros servicios
                <span>
                  <Link className="btn btn-dark shadow-lg ms-3" to="services">
                    aqui!
                  </Link>
                </span>
              </p>
            </div>
            <div className="col-10">
              <hr className="bg-secondary" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="container text-center">
          <h2 className="py-5">Lo que nuestros clientes dicen</h2>
          <div className="row d-flex justify-content-around">
            {testimonials.slice(0, slice).map((testimonial, index) => (
              <div
                key={index}
                className="card col-10 text-bg-dark shadow my-3"
                style={{ maxWidth: "580px", overflow: "hidden" }}
              >
                <div className="row testimonial">
                  <div className="col-md-4 p-0 m-0 imagen-testimonial">
                    <img
                      src={testimonial.image}
                      class="img-fluid"
                      style={{ width: "100%", height: "100%" }}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{testimonial.name}</h5>
                      <p className="card-text">{testimonial.description}</p>
                      <p className="card-text">{testimonial.cargo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 col-md-8">
              <p className="mt-5">
                <span>
                  <Link className="btn btn-dark shadow-lg me-3" to="testimony">
                    Click aca!
                  </Link>
                </span>
                para ver mas mas testimonios
              </p>
            </div>
            <div className="col-10">
              <hr className="bg-secondary" />
            </div>
          </div>
        </div>
      </section>
      <section id="noticias ">
        <div className="container text-center">
          <h2 className="py-5">Últimas noticias</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 p-0 shadow-lg">
              <Carousel
                interval={5000}
                indicators={false}
                fade
                className="d-flex"
              >
                {noticias.slice(0, 5).map((noticia, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className=""
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      style={{
                        width: '100vh',
                        height: '50vh',
                        filter: "brightness(30%)",
                      }}
                    />
                    <Carousel.Caption>
                      <h3>{noticia.titulo}</h3>
                      <p>{noticia.contenido}</p>
                      <p>{noticia.fecha}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-12 col-md-8 my-5">
              <p className="">
                descubre mas noticias haciendo
                <span>
                  <Link className="btn btn-dark shadow-lg" to="blog">
                    click aqui!
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
