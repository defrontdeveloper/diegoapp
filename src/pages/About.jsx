import "../css/about.scss";

import AboutUsIco1 from "../assets/icons/about-info-1.png";
import AboutUsIco2 from "../assets/icons/about-info-2.png";
import AboutUsIco3 from "../assets/icons/about-info-3.png";

import AboutUs1 from "../assets/people/about1.png";
import AboutUs2 from "../assets/people/about2.png";
import AboutUs3 from "../assets/people/about3.png";

const About = () => {
  return (
    <div className="container">
      <section className="aboutus-info">
       <div>
        <div className="title-2">
          <h3>Acerca </h3>
          <h2>de nosotros</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-ico">
              <img src={ AboutUsIco1 } alt="" />
              <h4>Profesionalismo</h4>
              <p className="text">El éxito en nuestro tratamiento son el resultado de nuestro entrenamiento y profesionalismo, dominamos técnicas de colorimetría, morfología, visajismo, micropigmentación e imagen personal las cuales nos hacen un equipo de personas muy bien preparados.</p>
            </div>
          </div>
          <div className="col">
            <div className="about-ico">
              <img src={ AboutUsIco2 } alt="" />
              <h4>Vanguardia</h4>
              <p className="text">Contamos con instalaciones modernas especialmente adaptadas para realizar nuestros tratamientos y así avalar la calidad, seguridad y profesionalismo de nuestro servicio.</p>
            </div>
          </div>
          <div className="col">
            <div className="about-ico">
              <img src={ AboutUsIco3 } alt="" />
              <h4>Calidad</h4>
              <p className="text">Nos distingue el trato personalizado que le brindamos al paciente, siempre buscando los más óptimos resultados para él y así mejorar su salud y bienestar.</p>
            </div>
          </div>
        </div>
       </div>
      </section>

      <section className="aboutus-team">
        <div className="title-2">
          <h3>CONOZCA</h3>
          <h2>A NUESTRO EQUIPO</h2>
        </div>
        <div className="row">
          <div className="col">
            <img src={ AboutUs1 } alt="" />
            <h4>Jhon Shammon</h4>
            <p className="text">
            El amor de Shannon por la industria de la pérdida de cabello comenzó hace muchos años a partir de sus propias batallas contra la pérdida de cabello y su búsqueda de soluciones, combinadas con sus asombrosas habilidades artísticas y creativas y su amor por el diseño.
            </p>
          </div>
          <div className="col">
            <img src={ AboutUs2 } alt="" />
            <h4>Jhon Shammon</h4>
            <p className="text">
            El amor de Shannon por la industria de la pérdida de cabello comenzó hace muchos años a partir de sus propias batallas contra la pérdida de cabello y su búsqueda de soluciones, combinadas con sus asombrosas habilidades artísticas y creativas y su amor por el diseño.
            </p>
          </div>
          <div className="col">
            <img src={ AboutUs3 } alt="" />
            <h4>Jhon Shammon</h4>
            <p className="text">
            El amor de Shannon por la industria de la pérdida de cabello comenzó hace muchos años a partir de sus propias batallas contra la pérdida de cabello y su búsqueda de soluciones, combinadas con sus asombrosas habilidades artísticas y creativas y su amor por el diseño.
            </p>
          </div>
        </div>
      </section>


    </div>
  )
}

export default About