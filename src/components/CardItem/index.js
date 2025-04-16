// Write your code here.
import './index.css'

const CardItem = ({cardDetails}) => {
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="card-image" />
    </li>
  )
}

export default CardItem
