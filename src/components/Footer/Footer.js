import { FaGithubAlt } from 'react-icons/fa';

import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='footer__links'>
        <a className='footer__links__items' href='!#'><FaGithubAlt /></a>
      </ul>
    </div>
  )
}