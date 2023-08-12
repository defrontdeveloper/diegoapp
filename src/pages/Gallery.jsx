import "../css/gallery.scss";

import GalleryManBaner from "../assets/people/gallery-baner.png";
import { Comparation } from "../components/Comparation";

const Gallery = () => {

  const comparations = [
    { 
      _id: 1,
      figure: "https://scalpsociety.com/wp-content/uploads/2023/02/754244A5-45D3-42DD-9F12-B2E0AAA585C5.jpeg",
      divisor: "https://scalpsociety.com/wp-content/uploads/2023/02/76F4D0CA-D5B5-4E25-B560-54E238E70DE9.jpeg"
    },
    { 
      _id: 2,
      figure: "https://scalpsociety.com/wp-content/uploads/2019/10/after-scalpsociety-4-1.jpg",
      divisor: "https://scalpsociety.com/wp-content/uploads/2019/10/before-scalpsociety-4.jpg"
    },
    { 
      _id: 3,
      figure: "https://scalpsociety.com/wp-content/uploads/2023/02/754244A5-45D3-42DD-9F12-B2E0AAA585C5.jpeg",
      divisor: "https://scalpsociety.com/wp-content/uploads/2023/02/76F4D0CA-D5B5-4E25-B560-54E238E70DE9.jpeg"
    },
    { 
      _id: 4,
      figure: "https://scalpsociety.com/wp-content/uploads/2019/10/after-scalpsociety-4-1.jpg",
      divisor: "https://scalpsociety.com/wp-content/uploads/2019/10/before-scalpsociety-4.jpg"
    }
  ];

  return (
    <>
      <section>
        <div className="style-banner gallery-baner ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-6-md is-column">
                <h1>VEA LOS RESULTADOS USTED MISMO</h1>
              </div>

              <div className="col-12 col-6-md is-vertical-align mb0">
                <img src={ GalleryManBaner } alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="gallery-info">
            <p className="text">Algunos hermosos ejemplos de la calidad de SMP que ofrecemos. 
            No todos nuestros clientes desean compartir sus imágenes 
            después de completar el tratamiento, pero aquí 
            hay algunos que se alegraron de que lo hiciéramos.
            </p>
          </div>

          <section>
            <div className="gallery-photos">
              
              {comparations.map((item, index) => (
                <Comparation key={ index } item={ item } />
              ))}
              
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/jesus2-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/jesus2-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
              <div className="">
                <img src="https://aldemarcampos.es/wp-content/uploads/2013/10/ser1-300x300.jpg" alt="" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Gallery