import '../css/contact.scss';
import icoAdress from "../assets/icons/address.svg";

const Contact = () => {
  return (
    <>
      <section>
        <div className="style-banner contact">
          <div className="contact-background"></div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-6-md">
                <h1>Queremos leerte, envíanos tus dudas o comentarios</h1>
                <p className='text'>Para obtener más información o programar una consulta <b>GRATUITA</b>, comuníquese con nosotros a continuación. Espere entre 24 y 36 horas para que nos comuniquemos con usted.</p>
              </div>

              <div className="col-12 col-6-md is-vertical-align mb0">
                <form action="">
                  <input type="text" placeholder='Nombre' />
                  <input type="text" placeholder='Correo electrónico' />
                  <input type="text" placeholder='Número de celular' />
                  <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                  <button>Enviar mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="conatc-info">
            <img src={ icoAdress } alt="" loading="lazy" />
            <p className='text'>Jr. Prolongación mariano otero 261 <br/>VILLA DE SOL 1 interior 09 zona sur Nueva York.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="contact-map">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51022.68877993315!2d-77.0040287500382!3d-12.073572076331915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7d40cf27c17%3A0x338468bfb2ffc786!2sCentro%20Comercial%20La%20Rambla!5e0!3m2!1ses!2spe!4v1691711208228!5m2!1ses!2spe"
            width="100%"
            height="400px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact