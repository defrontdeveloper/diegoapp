import { useState, useEffect } from 'react';
import '../css/comparation.scss';

export const Comparation = (props) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleMoveDivisor = () => {
    const handle = document.getElementById(`hanle-${props.item._id}`);
    const divisor = document.getElementById(`divisor-${props.item._id}`);

    handle.style.left = sliderValue + "%";
    divisor.style.width = sliderValue + "%";
  }

  useEffect(() => {
    handleMoveDivisor();
  }, [sliderValue]); 

  return (
    <div className='comparation'>
      
      <span className='comparation-before' style={ {opacity: sliderValue >= 50 ? 1 : 0} }>Antes</span>
      <span className='comparation-after' style={ {opacity: sliderValue <= 50 ? 1 : 0} }>Después</span>

      <figure style={ {backgroundImage: `url(${props.item.figure})`} }>
        
        <div id={ `hanle-${props.item._id}` } 
        className="handle" />
        
        <div id={ `divisor-${props.item._id}` } 
        style={ {backgroundImage: `url(${props.item.divisor})`} }
        className="divisor" />

      </figure>

      <input  type="range" min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} />
    
    </div>
  )
}