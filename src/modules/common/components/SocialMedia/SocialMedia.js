import './SocialMedia.css'
import Item from "./Item";

const icons = [
  {
    type: 'email',
    link: 'mailto:daiu.szwimer@gmail.com',
  },
  {
    type: 'github',
    link: 'https://github.com/daianaszwimer/',
  },
  {
    type: 'instagram',
    link: 'https://github.com/daianaszwimer/',
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/daiana-szwimer',
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/uhhdai',
  },
]

const SocialMedia = () => (
  <nav className='social-media-wrapper'>
    <ul className='social-media-list'>
      {icons.map(icon => (
        <li key={icon.type}>
          <Item
            iconType={icon.type}
            link={icon.link}
          />
        </li>
      ))}
    </ul>
  </nav>
)

export default SocialMedia