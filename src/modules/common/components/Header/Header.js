import './Header.css'
import {
  Link as ReactRouterLink,
} from "react-router-dom";
import Navigation from "./Navigation";

const importantLinks = [
  {
    text: 'Proyectos',
    link: '/?filter=projects',
    color: 'orange',
    param: 'projects',
  },
  {
    text: 'Charlas',
    link: '/?filter=talks',
    color: 'yellow',
    param: 'talks',
  },
  {
    text: 'Ver Todo',
    link: '/',
    color: 'light-green',
    param: null,
  },
]

const links = [
  {
    text: 'Perfil',
    link: '/profile',
    param: '/profile',
    color: 'green',
  },
  {
    text: 'Blog',
    link: '/blog',
    param: '/blog',
    color: 'dark-green',
  },
  {
    text: 'Lala',
    link: '/lala',
    param: '/lala',
    color: 'red',
  },
]

const Header = () => {
  return (
    <header>
      <div className='name-wrapper'>
        <ReactRouterLink to='/' className='name'>
          Daiu
        </ReactRouterLink>
      </div>
      <nav>
        <Navigation
          links={importantLinks}
          isImportant
        />
        <Navigation
          links={links}
        />
      </nav>
    </header>
  )
}

export default Header