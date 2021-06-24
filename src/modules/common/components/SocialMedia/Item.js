import './Item.css'
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../../../../assets/icons'

const SocialMediaItem = ({iconType, link}) => {
  const ICONS = {
    email: EmailIcon,
    github: GitHubIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    twitter: TwitterIcon,
  }

  const renderIcon = () => {
    const Icon = ICONS[iconType]
    return <Icon
      title={`${iconType[0].toUpperCase()}${iconType.slice(1)}`}
      width='26px'
      className='nav-icon'
    />
  }

  return (
    <a href={link}>
      {renderIcon()}
    </a>
  )
}

export default SocialMediaItem