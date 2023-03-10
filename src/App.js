import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TestimobyPage from "./pages/TestimonyPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./context/layout";

function App() {
  const iconos = [
    { clase: "bi bi-telephone", color: "#1D9BF0", texto: "Llámanos" },
    {
      clase: "bi bi-whatsapp",
      color: "#00E676",
      texto: "Envíanos un mensaje por WhatsApp",
    },
    {
      clase: "bi bi-envelope-at",
      color: "#0071C5",
      texto: "Envíanos un correo electrónico",
    },
    {
      clase: "bi bi-twitter",
      color: "#1D9BF0",
      texto: "Síguenos en Twitter",
    },
    {
      clase: "bi bi-instagram",
      color: "linear-gradient(to bottom right, #800DFD, #FFC900, #FD01A8)",
      texto: "Síguenos en Instagram",
    },
  ];

  const noticias = [
    {
      titulo: "Nueva ley de tránsito entra en vigencia",
      fecha: "15 de febrero de 2023",
      contenido:
        "El pasado martes entró en vigencia la nueva ley de tránsito, que establece nuevas sanciones para conductores que manejen bajo la influencia del alcohol o drogas, entre otras medidas. Nuestro estudio está preparado para asesorar a nuestros clientes en cualquier tema relacionado con esta ley.",
      imagen: "https://picsum.photos/id/1/800/600",
    },
    {
      titulo: "Actualización en la ley de propiedad intelectual",
      fecha: "2 de marzo de 2023",
      contenido:
        "La ley de propiedad intelectual ha sido actualizada para incluir nuevas medidas de protección de derechos de autor en el ámbito digital. Nuestros abogados están al tanto de estas actualizaciones y pueden brindar asesoría a nuestros clientes en temas relacionados con la propiedad intelectual.",
      imagen:
        "https://picsum.photos/id/20/800/600",
    },
    {
      titulo: "Nuevas medidas de seguridad en las redes sociales",
      fecha: "10 de marzo de 2023",
      contenido:
        "Las principales redes sociales han implementado nuevas medidas de seguridad para proteger la privacidad de los usuarios y prevenir el acoso en línea. Nuestros expertos en derecho digital pueden asesorarte en todo lo relacionado con tus derechos y obligaciones en las redes sociales.",
      imagen:
        "https://picsum.photos/id/30/800/600",
    },
    {
      titulo: "Ciberataque a gran escala afecta a empresas de todo el mundo",
      fecha: "21 de marzo de 2023",
      contenido:
        "Un ciberataque masivo ha afectado a empresas de todo el mundo, comprometiendo la seguridad de sus datos y sistemas. Nuestros abogados especializados en derecho informático pueden ayudarte a tomar medidas para proteger tus activos digitales y recuperar los datos perdidos.",
      imagen: "https://picsum.photos/id/40/800/600",
    },
    {
      titulo: "Nueva regulación en materia de protección de datos personales",
      fecha: "2 de abril de 2023",
      contenido:
        "Se ha aprobado una nueva regulación en materia de protección de datos personales que establece mayores sanciones para las empresas que incumplan con las normas de privacidad. Nuestros abogados especializados pueden ayudarte a adaptarte a estas nuevas regulaciones y evitar posibles sanciones.",
      imagen: "https://picsum.photos/id/50/800/600",
    },
    {
      titulo: "Crece el número de demandas por ciberdelitos",
      fecha: "17 de abril de 2023",
      contenido:
        "El número de demandas por ciberdelitos ha aumentado significativamente en los últimos meses, lo que demuestra la importancia de contar con asesoramiento legal especializado en materia de ciberseguridad. Nuestros abogados están preparados para ayudarte en caso de sufrir un ciberataque o fraude en línea.",
      imagen: "https://picsum.photos/id/60/800/600",
    },
    {
      titulo: "Nueva ley de tránsito entra en vigencia",
      fecha: "15 de febrero de 2023",
      contenido:
        "El pasado martes entró en vigencia la nueva ley de tránsito, que establece nuevas sanciones para conductores que manejen bajo la influencia del alcohol o drogas, entre otras medidas. Nuestro estudio está preparado para asesorar a nuestros clientes en cualquier tema relacionado con esta ley.",
      imagen: "https://picsum.photos/id/10/800/600",
    },
    {
      titulo: "Actualización en la ley de propiedad intelectual",
      fecha: "2 de marzo de 2023",
      contenido:
        "La ley de propiedad intelectual ha sido actualizada para incluir nuevas medidas de protección de derechos de autor en el ámbito digital. Nuestros abogados están al tanto de estas actualizaciones y pueden brindar asesoría a nuestros clientes en temas relacionados con la propiedad intelectual.",
      imagen:
        "https://picsum.photos/id/21/800/600",
    },
    {
      titulo: "Nuevas medidas de seguridad en las redes sociales",
      fecha: "10 de marzo de 2023",
      contenido:
        "Las principales redes sociales han implementado nuevas medidas de seguridad para proteger la privacidad de los usuarios y prevenir el acoso en línea. Nuestros expertos en derecho digital pueden asesorarte en todo lo relacionado con tus derechos y obligaciones en las redes sociales.",
      imagen:
        "https://picsum.photos/id/31/800/600",
    },
    {
      titulo: "Ciberataque a gran escala afecta a empresas de todo el mundo",
      fecha: "21 de marzo de 2023",
      contenido:
        "Un ciberataque masivo ha afectado a empresas de todo el mundo, comprometiendo la seguridad de sus datos y sistemas. Nuestros abogados especializados en derecho informático pueden ayudarte a tomar medidas para proteger tus activos digitales y recuperar los datos perdidos.",
      imagen: "https://picsum.photos/id/41/800/600",
    },
    {
      titulo: "Nueva regulación en materia de protección de datos personales",
      fecha: "2 de abril de 2023",
      contenido:
        "Se ha aprobado una nueva regulación en materia de protección de datos personales que establece mayores sanciones para las empresas que incumplan con las normas de privacidad. Nuestros abogados especializados pueden ayudarte a adaptarte a estas nuevas regulaciones y evitar posibles sanciones.",
      imagen: "https://picsum.photos/id/51/800/600",
    },
    {
      titulo: "Crece el número de demandas por ciberdelitos",
      fecha: "17 de abril de 2023",
      contenido:
        "El número de demandas por ciberdelitos ha aumentado significativamente en los últimos meses, lo que demuestra la importancia de contar con asesoramiento legal especializado en materia de ciberseguridad. Nuestros abogados están preparados para ayudarte en caso de sufrir un ciberataque o fraude en línea.",
      imagen: "https://picsum.photos/id/61/800/600",
    },
  ];

  return (
    <div style={{ background: "#515151" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={<HomePage iconos={iconos} noticias={noticias} />}
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="testimony" element={<TestimobyPage />} />
          <Route path="blog" element={<BlogsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
