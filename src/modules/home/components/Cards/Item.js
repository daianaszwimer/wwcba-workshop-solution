import './Item.css'

const Item = ({image, name, technologies}) => (
  <div className='card'>
    <img src={image} alt={name} className='card-image'/>
    <div className='card-shape'>
      <span>
        {name}
      </span>
      <span>
        {technologies}
      </span>
    </div>
  </div>
)

export default Item