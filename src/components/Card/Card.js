import './Card.scss';

import { useNavigate } from 'react-router-dom';

export default function Card(props) {

  const navigate = useNavigate();

  const vaParaPlanta = () => {
    navigate('/plant', { state: props.id })
  }

  return (
    <div className='card' onClick={vaParaPlanta}>
      <img src={props.image} alt={props.name} />
      <span>{props.name}</span>
    </div>
  )
}