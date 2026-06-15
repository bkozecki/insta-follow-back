import { useTranslation } from 'react-i18next'
import { Code, Coffee, Shield } from 'lucide-react'

import styles from './Footer.module.css'

const BUY_ME_A_COFFEE_URL = 'https://www.buymeacoffee.com/YOUR_USERNAME'
const GITHUB_URL = 'https://github.com/bkozecki/insta-follow-back'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.privacy}>
          <Shield size={13} />
          {t('footer.privacy')}
        </span>
        <a
          href={BUY_ME_A_COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.coffee}
        >
          <Coffee size={14} />
          {t('footer.buyMeCoffee')}
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <Code size={14} />
          {t('footer.openSource')}
        </a>
      </div>
    </footer>
  )
}
