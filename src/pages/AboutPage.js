import React from "react";
import abogados from "../assets/abogado-about.png";
const AboutUs = () => {
  // Información de la empresa
  const companyDescription =
    "Nuestra firma de abogados se especializa en brindar servicios legales de alta calidad a empresas y particulares. Contamos con un equipo de abogados altamente capacitados y con amplia experiencia en una amplia gama de áreas legales.";
  const companyValues = [
    {
      name: "Integridad",
      description:
        "Actuamos con honestidad, ética y transparencia en todo lo que hacemos.",
    },
    {
      name: "Excelencia",
      description:
        "Nos esforzamos por ofrecer un servicio de calidad superior en todo momento.",
    },
    {
      name: "Compromiso",
      description:
        "Nos comprometemos a trabajar arduamente para lograr los mejores resultados para nuestros clientes.",
    },
    {
      name: "Dedicación",
      description:
        "Nos dedicamos completamente a satisfacer las necesidades y expectativas de nuestros clientes.",
    },
  ];

  const companyMission =
    "Nuestra misión es brindar a nuestros clientes un servicio legal personalizado y de alta calidad para satisfacer sus necesidades y expectativas.";
  const companyVision =
    "Nuestra visión es ser una firma líder en el mercado legal, reconocida por nuestra excelencia, integridad y compromiso con la satisfacción del cliente.";

  // Información de los abogados
  const lawyers = [
    {
      name: "Juan Pérez",
      title: "Socio fundador",
      education:
        "Licenciatura en Derecho, Universidad Nacional Autónoma de México (UNAM)",
      experience: "Más de 15 años de experiencia en litigio civil y penal.",
    },
    {
      name: "María Gómez",
      title: "Socia",
      education: "Licenciatura en Derecho, Universidad de Guadalajara",
      experience:
        "Más de 10 años de experiencia en derecho corporativo y de negocios.",
    },
  ];

  return (
    <div className="container">
      <div className="row py-5 mt-5">
        <section id="nosotros">
          <div className="container my-5">
            <div className="row justify-content-center text-center">
              <h2 className="my-5 pb-5 ">
                Acerca de nuestro estudio de abogados
              </h2>
              <div className="col-12 col-md-4 text-center align-self-center px-5">
                <p>{companyDescription}</p>
              </div>
              <div className="col-12 col-md-4">
                <img
                  src={abogados}
                  alt="dibujo de abogados"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="misionyvision">
          <div
            className="container-fluid section1"
            style={{ overflow: "hidden" }}
          >
            <div className="row justify-content-end">
              <div className="col-12 col-md-8 shadow-1"></div>
              <div className="col-12 col-md-6 text-center content-1">
                <h3>Misión</h3>
                <p className="mx-5 px-5">{companyMission}</p>
              </div>
            </div>
          </div>

          <div
            className="container-fluid section2"
            style={{ overflow: "hidden" }}
          >
            <div className="row">
              <div className="col-12 col-md-8 shadow-2"></div>
              <div className="col-12 col-md-6 text-center content-2">
                <h3>Vision</h3>
                <p className="mx-5 px-5">{companyVision}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="valores">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-5 mb-4">Nuestros valores</h3>
                <ul>
                  {companyValues.map((value, index) => (
                    <li key={index}>
                      {value.name} - {value.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="abogados">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-5 mb-4">Nuestros abogados</h3>
                {lawyers.map((lawyer) => (
                  <div key={lawyer.name} className="mb-4">
                    <h4>{lawyer.name}</h4>
                    <p>{lawyer.title}</p>
                    <p>{lawyer.education}</p>
                    <p>{lawyer.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
