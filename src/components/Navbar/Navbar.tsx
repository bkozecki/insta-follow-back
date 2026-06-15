import { Aperture } from 'lucide-react'

import { LanguageSwitcher } from '@/UI/LanguageSwitcher/LanguageSwitcher'

import styles from './Navbar.module.css'

export const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Aperture size={20} className={styles.logoIcon} />
        <span className={styles.logoText}>Folo</span>
      </div>
      <LanguageSwitcher />
    </div>
  </nav>
)
