
import BannerImagen from "../assets/people/home-baner-man.svg";
import BannerFlat from "../assets/icons/flat-peru.svg";
import Benefits from "../assets/people/home-benefits.svg";
import Pigment from "../assets/people/home-pigment.svg";

import task1 from "../assets/people/1.jpg";
import task2 from "../assets/people/2.jpg";
import task3 from "../assets/people/3.jpg";
import task4 from "../assets/people/4.jpg";


import "../css/home.scss";

const App = () => {
  return (
    <>
      <section>
        <div className="home-banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-6-md is-column">
                <h1>MICROPIGMENTACIÓN CAPILAR</h1>
                <h3>“La solución estética contra la calvicie”</h3>
              </div>

              <div className="col-12 col-6-md is-vertical-align mb0">
                <img src={BannerImagen} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home-ribon">
          <div className="container">
            <div className="is-column">
              <img src={BannerFlat} alt="" loading="lazy" />
              <p>
                “Vencer la alopecia con micropigmentación capilar es una
                realidad en <b>Perú</b>” <br /> Nuestra técnica sigue las
                técnicas y protocolos Europeos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home-information">
          <div className="container">
            <div className="title-2">
              <h3>¿Qué es</h3>
              <h2>Micropigmentación capilar ?</h2>
            </div>
            <div className="row">
              <div className="col-7-md">
                <p>
                  La técnica de la micropigmentacion capilar ha ayudado a miles
                  de hombres en todo el mundo a lucir un aspecto
                  <b>joven y moderno</b>, no importa el tipo o grado de alopecia
                  que padezca, con nuestra técnica usted puede: crear la
                  apariencia de un
                  <b> look rapado</b> totalmente natural, aumentar la densidad
                  de su cabello en zonas donde se ha perdido total o
                  parcialmente, restaurar su línea frontal, línea lateral o
                  picos temporales y la zona de la coronilla, además de Camuflar
                  cicatrices o imperfecciones, permite combinar la técnica con
                  procedimientos quirúrgicos como es el trasplante capilar.
                </p>
              </div>
              <div className="col-1-md"></div>
              <div className="col-4-md col-12">
                <img
                  src="https://hellocapilar.com/uploads/images/Hellocapilar_ZONAS_1-2-3.jpg"
                  alt="" loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home-process">
          <div className="container">
            <div className="title-2">
              <h3>procedimiento</h3>
              <h2>Micropigmentación capilar</h2>
            </div>
            <div className="row gap-2">
              <div className="col col-6-sm col-3-md">
                <span className="process-title">
                  Consulta gratuita <br /> <b>(20 minutos)</b>
                </span>
                <img
                  src={ task1 }
                  alt="" loading="lazy"
                />
                <p>
                  Durante la consulta, repasaremos el proceso general y
                  <b> evaluaremos </b> su pérdida de cabello actual, estilo de
                  cabello y objetivos generales de lo que está tratando de
                  lograr. Con toda esta información, podemos determinar
                  adecuadamente las diferentes opciones que tendrá mientras se
                  alinea con sus objetivos. Aplicaremos una simulación para que
                  te hagas una idea de cómo te verás con la nueva línea de
                  cabello.
                </p>
              </div>
              <div className="col col-6-sm col-3-md">
                <span className="process-title">
                  Primera Sesión <br /> <b>(2-4 horas)</b>
                </span>
                <img
                  src={ task2 }
                  alt="" loading="lazy"
                />
                <p>
                  Durante la primera sesión, <b>finalizamos el diseño</b> con el
                  que comenzamos inicialmente durante la consulta. A partir de
                  ahí, aplicamos las impresiones iniciales en todas las áreas de
                  adelgazamiento, incluida la línea del cabello y la región
                  temporal. Esto nos da una capa base de impresiones cambiando
                  el color de la piel. Usamos esto como una base de impresiones
                  para usar en nuestra segunda sesión.
                </p>
              </div>
              <div className="col col-6-sm col-3-md">
                <span className="process-title">
                  Segunda Sesión <br /> <b>(2-4 horas)</b>
                </span>
                <img
                  src={ task3 }
                  alt="" loading="lazy"
                />
                <p>
                  La segunda sesión está ahí para <b>mejorar la primera capa</b>{" "}
                  de impresiones curadas. Esto se hace mediante la disposición
                  de un patrón completamente diferente de impresiones más
                  oscuras que se mezclan con la primera capa y aumentan las
                  impresiones para que coincidan con la densidad natural del
                  cabello. El tratamiento debe verse completado en un{" "}
                  <b>70-90%</b> después de esta sesión.
                </p>
              </div>
              <div className="col col-6-sm col-3-md">
                <span className="process-title">
                  Sesión de toque final <br />
                  <b>(~1 hora)</b>
                </span>
                <img
                  src={ task4 }
                  alt="" loading="lazy"
                />
                <p>
                  Durante esta sesión, evaluamos cómo se ha curado todo para
                  <b> aplicar los toques finales</b> para perfeccionar el
                  tratamiento general. Realizamos las mejoras necesarias, como
                  agregar más color, densidad o mejorar la combinación durante
                  esta sesión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home-benefits">
          <div className="container">
            <div className="row">
              <div className="col-5-md relative">
                <img src={Benefits} alt="" loading="lazy" />
              </div>
              {/* <div className="col-1-md"></div> */}
              <div className="col-7-md">
                <div className="title-2">
                  <h3>BENEFICIOS DE LA</h3>
                  <h2>Micropigmentación capilar</h2>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Aspecto natural:</b> La micropigmentación capilar se
                    realiza con pigmentos que se adaptan al color y tono del
                    cabello existente, lo que proporciona un aspecto muy natural
                    y realista. Ayuda a disimular las áreas calvas o con escasez
                    de cabello.
                  </p>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Solución no invasiva:</b> A diferencia de los trasplantes
                    capilares u otras intervenciones quirúrgicas, la
                    micropigmentación capilar es un procedimiento no invasivo
                    que no requiere cirugía. Esto reduce los riesgos asociados
                    con los procedimientos quirúrgicos y el tiempo de
                    recuperación.
                  </p>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Resultados rápidos:</b> Los resultados de la
                    micropigmentación capilar son inmediatos. Después de una o
                    dos sesiones, se puede notar una mejora significativa en la
                    apariencia del cuero cabelludo y una restauración visual del
                    cabello.
                  </p>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Mayor confianza:</b> Para quienes padecen de alopecia o
                    pérdida de cabello, la micropigmentación capilar puede tener
                    un impacto emocional positivo. Al mejorar la apariencia del
                    cuero cabelludo, puede aumentar la confianza y autoestima.
                  </p>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Mantenimiento sencillo:</b> Una vez que se ha completado
                    el proceso de micropigmentación capilar, el mantenimiento es
                    relativamente sencillo. Se recomienda hacer retoques cada
                    cierto tiempo para mantener el color y la forma adecuados.
                  </p>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Versatilidad:</b> La micropigmentación capilar no está
                    limitada solo a la calvicie total. También se puede utilizar
                    para densificar el cabello en áreas con adelgazamiento o
                    cubrir cicatrices en el cuero cabelludo.
                  </p>
                </div>
                <div className="dflex benefit-option">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7.5" r="7" stroke="#7F7F7F" />
                  </svg>
                  <p>
                    <b>Sin efectos secundarios significativos:</b> La
                    micropigmentación capilar es generalmente segura y bien
                    tolerada. Los efectos secundarios son mínimos y
                    transitorios, como enrojecimiento o leve hinchazón, que
                    suelen desaparecer rápidamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="home-product">
            <div className="title-2">
              <h3>MICROPIGMENTACIÓN CAPILAR</h3>
              <h2>PIGMENTOS EXLUSIVOS</h2>
            </div>
            <img src={Pigment} alt="" loading="lazy" />
            <div className="row">
              <div className="col-7">
              <p>
              Pygmenta Black Rain es un pigmento SMP como ningún otro.
              profesionalmente formulado y desarrollado por el maestro artista
              SMP italiano Tony Abbagnato. Pygmenta Black Rain es el pigmento
              elegido por los expertos tal como lo utilizan los mejores y más
              grandes artistas SMP de todo el mundo actualmente, Experimenta
              Pygmenta Black Rain por ti mismo y para ti verá por qué. Compre
              Pygmenta Black Rain hoy con entrega rápida en toda Australia.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default App;
