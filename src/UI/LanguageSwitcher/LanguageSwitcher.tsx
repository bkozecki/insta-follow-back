import { useTranslation } from 'react-i18next'

import { SUPPORTED_LANGUAGES } from '@/i18n/config'

import styles from './LanguageSwitcher.module.css'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div className={styles.switcher}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          className={[
            styles.btn,
            i18n.language === lang ? styles.active : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => void i18n.changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
