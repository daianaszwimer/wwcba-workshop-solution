import {Link} from "../Link";
import {useLocation} from "react-router-dom";
import useQuery from "../../hooks/useQuery";

const Navigation = ({links, isImportant}) => {
  const location = useLocation()
  const query = useQuery()

  const isRoute = route => location.pathname === route

  const isSelected = (param) => {
    if (isImportant) {
      return isRoute('/') && query.get('filter') === param
    }
    return isRoute(param)
  }

  return (
    <ul>
      {links.map(item => (
        <li key={item.text}>
          <Link
            text={item.text}
            color={item.color}
            link={item.link}
            isImportant={isImportant}
            isSelected={isSelected(item.param)}
          />
        </li>
      ))}
    </ul>
  )
}

export default Navigation