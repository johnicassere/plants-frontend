import { useState } from 'react/cjs/react.development';
import './Plant.scss';

export default function Plant() {

  const [planta, setPlanta] = useState({});

  return (
    <div className='plant'>
      <h2>{planta.scientificName}</h2>
      <img src={planta.imageUrl} alt={planta.commonName} />
      <h3>{planta.commonName}</h3>
      <p>{planta.description}</p>
    </div>
  )
}