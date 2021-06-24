import './Link.css'
import { Link as RouterLink} from "react-router-dom";

const Link = ({ text, link, color, isSelected = false, isImportant = false }) => (
  <RouterLink
    to={link}
    className={`menu menu-${color} ${isSelected ? 'menu-selected' : ''} ${isImportant ? '' : 'menu-not-important'}`}
  >
    {text}
  </RouterLink>
)

export default Link