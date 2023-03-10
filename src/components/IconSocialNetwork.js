import { useState } from "react";
export default function IconSocialNetwork({ iconos }) {
  const [iconoActivo, setIconoActivo] = useState(null);

  const handleMouseEnter = (index) => {
    setTimeout(() => {
      setIconoActivo(index);
    }, 650);
  };

  const handleMouseLeave = () => {
      setIconoActivo(null);
 
  };

  const handleIconClick = (texto) => {
    switch (texto) {
      case "Llámanos":
        window.open("tel:123456789"); // Abre la aplicación para hacer llamadas telefónicas
        break;
      case "Envíanos un mensaje por WhatsApp":
        window.open("https://wa.me/123456789"); // Abre WhatsApp para enviar mensajes
        break;
      case "Envíanos un correo electrónico":
        window.location.href = "mailto:correo@ejemplo.com"; // Prepara la aplicación de correo para enviar un email
        break;
      case "Síguenos en Twitter":
        window.open("https://twitter.com/nombredeusuario"); // Redirige a la cuenta de Twitter
        break;
      case "Síguenos en Instagram":
        window.open("https://www.instagram.com/nombredeusuario/"); // Redirige a la cuenta de Instagram
        break;
      default:
        break;
    }
  };
  return (
    <>
      {iconos.map((icono, index) => (
        <div
          key={index}
          className="text-white icono-container d-flex my-md-3 my-1 ps-5"
          style={{
            background: icono.color,
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleIconClick(icono.texto)}
        >
          <i className={`fs-1 ${icono.clase} d-flex align-self-center`} />
          <span
            className={`fw-bold px-4 align-self-center icono-texto ${
              iconoActivo === index ? "icono-texto-visible" : ""
            }`}
          >
            {iconoActivo === index && icono.texto}
          </span>
        </div>
      ))}
    </>
  );
}
