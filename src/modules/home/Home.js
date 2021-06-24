import { Cards } from "./components/Cards";
import useQuery from "../common/hooks/useQuery";

const filters = {
  talks: 'talks',
  projects: 'projects',
}

const Home = () => {
  const query = useQuery()

  return (
    <Cards
      filter={filters[query.get('filter')]}
    />
  )
}

export default Home