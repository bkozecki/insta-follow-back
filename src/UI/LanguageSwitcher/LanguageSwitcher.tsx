import { useTranslation } from 'react-i18next'

import { SUPPORTED_LANGUAGES } from '@/i18n/config'

import styles from './LanguageSwitcher.module.css'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div className={styles.switcher}>
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = i18n.resolvedLanguage === lang
        return (
          <button
            key={lang}
            className={[styles.btn, isActive ? styles.active : '']
              .filter(Boolean)
              .join(' ')}
            aria-pressed={isActive}
            onClick={() => void i18n.changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
