import './Frame.scss';

export default function Frame(props) {
  return (
    <div className='frame'>
      <img 
        className='frame__image'
        src={props.image} 
        alt={props.imageAlt} 
      />
      <div className='frame__textLine'>
        <h2>{props.text}</h2>
      </div>
    </div>
  )
}