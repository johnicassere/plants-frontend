import './Frame.scss';

export default function Frame(props) {
  return (
    <div className='frame'>
      <img 
        className='frame__image' 
        src={props.image} 
        alt={props.imageAlt} 
      />
      <h2 className='frame__title frame__title-main'>{props.title}</h2>
      <span className='frame__title frame__title-sub'>{props.subtitle}</span>
    </div>
  )
}