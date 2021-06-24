import './Cards.css'
import Item from "./Item";
import {
  AngularImage,
  ReactImage,
  SvelteImage,
  VueImage,
} from '../../../../assets/images'

const items = [
  {
    type: 'projects',
    image: AngularImage,
    name: 'Angular Project',
    technologies: 'Angular',
  },
  {
    type: 'projects',
    image: ReactImage,
    name: 'React Project',
    technologies: 'React and SASS',
  },
  {
    type: 'projects',
    image: SvelteImage,
    name: 'Svelte Project',
    technologies: 'Svelte',
  },
  {
    type: 'projects',
    image: VueImage,
    name: 'Vue Project',
    technologies: 'Vue',
  },
  {
    type: 'projects',
    image: AngularImage,
    name: 'Angular Proj 2',
    technologies: 'Angular',
  },
  {
    type: 'projects',
    image: ReactImage,
    name: 'React Proj 2',
    technologies: 'React and SASS',
  },
  {
    type: 'projects',
    image: SvelteImage,
    name: 'Svelte Proj 2',
    technologies: 'Svelte',
  },
  {
    type: 'projects',
    image: VueImage,
    name: 'Vue Proj 2',
    technologies: 'Vue',
  },
  {
    type: 'talks',
    image: AngularImage,
    name: 'Angular Talk',
    technologies: 'Angular',
  },
  {
    type: 'talks',
    image: ReactImage,
    name: 'React Talk',
    technologies: 'React and SASS',
  },
  {
    type: 'talks',
    image: SvelteImage,
    name: 'Svelte Talk',
    technologies: 'Svelte',
  },
  {
    type: 'talks',
    image: VueImage,
    name: 'Vue Talk',
    technologies: 'Vue',
  },
]
const Cards = ({filter}) => {
  const getItems = () => {
    if (filter) {
      return items.filter(item => item.type === filter)
    }
    return items
  }
  return (
    <main>
      <ul className='cards'>
        {getItems().map(item => (
          <li key={item.name} className='card-item'>
            <Item
              image={item.image}
              name={item.name}
              technologies={item.technologies}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Cards