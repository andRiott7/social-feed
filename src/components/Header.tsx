import styles from './Header.module.css'

import headerLogo1 from '../assets/logo-green01.svg'
import headerLogo2 from '../assets/logo-green02.svg'
import headerLogo3 from '../assets/logo-green.png'


export function Header() {
  return (

    <header className={styles.header}>
      <img src={headerLogo1} alt="logo" />
      <div className="user-name">
        <strong>Social Feedz</strong>
      </div>
    </header>
  );

}